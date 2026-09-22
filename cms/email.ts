import type { EmailAdapter, SendEmailOptions } from "payload";

/**
 * Payload email adapter for Zend (tryzend.com).
 *
 * Zend is an HTTP send API over Amazon SES: one POST per message, `x-api-key`
 * auth, and the `from` address must be on a domain verified in the Zend
 * dashboard (Email → Domains). There is no official Payload adapter, so this
 * implements Payload's `EmailAdapter` contract directly against
 * `POST /email/send`.
 *
 * Everything that emails here flows through it: Payload's own auth mail
 * (password resets — those arrive with `from` already set to
 * `"Name" <address>`), and `notifyStaff` in `app/actions/submit-form.ts`
 * (which sets no `from` and no `html`, only `text`).
 */

const ZEND_API_URL = "https://api.tryzend.com/email/send";

/** What Zend returns for an accepted message; the send is async on their side. */
export type ZendSendResponse = {
  _id?: string;
  status?: string;
  cost?: number;
};

export type ZendAdapterArgs = {
  /** API key with the `email:send` scope. */
  apiKey: string;
  /** Sender address — must be on a domain verified in the Zend dashboard. */
  defaultFromAddress: string;
  defaultFromName: string;
};

type NodemailerAttachment = NonNullable<SendEmailOptions["attachments"]>[number];

/**
 * Zend's documented `from`/`to` fields are bare addresses, while nodemailer
 * (and Payload's auth flows) hand us `"Display Name" <user@host>` strings and
 * `{ name, address }` objects — so everything is reduced to the bare address.
 */
function toBareAddress(value: unknown): null | string {
  if (!value) return null;
  if (typeof value === "object" && "address" in value) {
    return toBareAddress((value as { address?: unknown }).address);
  }
  if (typeof value !== "string") return null;
  const angled = value.match(/<([^<>\s]+)>\s*$/);
  const address = (angled ? angled[1] : value).trim();
  return address || null;
}

/** Zend takes one recipient per request; nodemailer allows string | Address | arrays. */
function toRecipientList(to: SendEmailOptions["to"]): string[] {
  const raw = Array.isArray(to) ? to : [to];
  return raw
    .flatMap((entry) =>
      // A plain string may itself hold a comma-separated list.
      typeof entry === "string" ? entry.split(",") : [entry],
    )
    .map(toBareAddress)
    .filter((address): address is string => address !== null);
}

function contentToString(value: SendEmailOptions["html"]): null | string {
  if (typeof value === "string") return value;
  if (Buffer.isBuffer(value)) return value.toString("utf8");
  return null; // Streams and URL refs never occur in this app.
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Zend rejects a message without `html`, but the staff notification (and any
 * other plain-text send) only provides `text` — so text-only mail is wrapped
 * as-is, newlines preserved, rather than failing.
 */
function htmlFromText(text: string): string {
  return `<pre style="margin:0;font-family:inherit;white-space:pre-wrap">${escapeHtml(text)}</pre>`;
}

/** Map nodemailer-style attachments to Zend's base64 shape. */
function toZendAttachments(attachments: NodemailerAttachment[] | undefined) {
  if (!attachments?.length) return undefined;

  return attachments.map((attachment, index) => {
    const { content, encoding, filename } = attachment;

    let base64: string;
    if (Buffer.isBuffer(content)) {
      base64 = content.toString("base64");
    } else if (typeof content === "string") {
      base64 =
        encoding === "base64"
          ? content
          : Buffer.from(content, (encoding as BufferEncoding) || "utf8").toString("base64");
    } else {
      // `path` refs and streams would need reading here; nothing in this app
      // sends them, so fail loudly instead of sending an empty file.
      throw new Error(
        `[zend-email] attachment ${index} has no inline content (path/stream attachments are not supported)`,
      );
    }

    return {
      filename: typeof filename === "string" && filename ? filename : `attachment-${index + 1}`,
      content: base64,
      content_type: attachment.contentType,
    };
  });
}

/**
 * The adapter itself. Returned value plugs into `buildConfig({ email })`;
 * Payload calls `sendEmail` per message and ignores the return value, which
 * here is Zend's queue receipt per recipient.
 */
export function zendAdapter(args: ZendAdapterArgs): EmailAdapter<ZendSendResponse[]> {
  const { apiKey, defaultFromAddress, defaultFromName } = args;

  return ({ payload }) => ({
    name: "zend",
    defaultFromAddress,
    defaultFromName,

    sendEmail: async (message) => {
      const recipients = toRecipientList(message.to);
      if (!recipients.length) {
        throw new Error("[zend-email] no recipient address on message");
      }

      // Zend has no documented cc/bcc/replyTo; dropping them silently would
      // hide a real difference from what the caller asked for.
      if (message.cc || message.bcc || message.replyTo) {
        payload.logger.warn(
          "[zend-email] cc/bcc/replyTo are not supported by the Zend API and were ignored",
        );
      }

      const html = contentToString(message.html);
      const text = contentToString(message.text);

      const body = {
        from: toBareAddress(message.from) || defaultFromAddress,
        subject: message.subject || "(no subject)",
        html: html ?? htmlFromText(text ?? ""),
        text: text ?? undefined,
        attachments: toZendAttachments(message.attachments),
      };

      const responses: ZendSendResponse[] = [];
      for (const to of recipients) {
        const res = await fetch(ZEND_API_URL, {
          method: "POST",
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...body, to }),
          // A hung provider must not hang a form submission or login flow.
          signal: AbortSignal.timeout(15_000),
        });

        if (!res.ok) {
          // The response body is Zend's error message; the API key never
          // appears in it, so it is safe to surface (truncated).
          const detail = (await res.text().catch(() => "")).slice(0, 500);
          throw new Error(
            `[zend-email] send to ${to} failed: ${res.status} ${res.statusText}${detail ? ` — ${detail}` : ""}`,
          );
        }

        responses.push((await res.json().catch(() => ({}))) as ZendSendResponse);
      }

      return responses;
    },
  });
}

/**
 * Env-driven wiring for `payload.config.ts`.
 *
 * Unset → `undefined`, and Payload falls back to logging emails to the server
 * console — the correct local default, same self-disabling pattern as the
 * Vercel Blob token. Half-set is a misconfiguration and fails the boot loudly
 * (same policy as the database connection string above it in the config)
 * rather than quietly never sending another email.
 */
export function zendEmailFromEnv(): EmailAdapter<ZendSendResponse[]> | undefined {
  const apiKey = process.env.ZEND_API_KEY;
  const defaultFromAddress = process.env.ZEND_FROM_EMAIL;

  if (!apiKey && !defaultFromAddress) return undefined;

  if (!apiKey || !defaultFromAddress) {
    throw new Error(
      "Zend email is half-configured: ZEND_API_KEY and ZEND_FROM_EMAIL must " +
        "both be set (or both unset, which logs email to the console instead). " +
        "See the email section in CMS.md.",
    );
  }

  return zendAdapter({
    apiKey,
    defaultFromAddress,
    defaultFromName: process.env.ZEND_FROM_NAME || "Black in Rehab",
  });
}
