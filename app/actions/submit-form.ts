"use server";

import { headers } from "next/headers";
import { getPayload } from "payload";
import config from "@payload-config";
import { z } from "zod";

/**
 * The single write path for every public form on the site.
 *
 * A Server Action rather than a route handler on purpose: Payload owns the
 * whole of `/api/*` via its catch-all, so adding site endpoints under that
 * prefix would rely on Next's static-beats-dynamic precedence to resolve. A
 * Server Action sidesteps the ambiguity and keeps validation on the server
 * where it cannot be bypassed.
 *
 * Before this existed, all six registration and application forms called
 * `e.preventDefault(); setSubmitted(true)` — the visitor saw a confirmation
 * while their data was discarded. Nothing was ever stored or emailed.
 */

const FORM_TYPES = [
  "contact",
  "newsletter",
  "membership",
  "conference",
  "ghana",
  "retreat",
  "scholarship",
  "speaker-booking",
  "volunteer",
  "partnership",
] as const;

const schema = z.object({
  formType: z.enum(FORM_TYPES),
  name: z.string().trim().max(200).optional(),
  email: z.string().trim().email("Please enter a valid email address").max(320),
  phone: z.string().trim().max(50).optional(),
  message: z.string().trim().max(5000).optional(),
  // Anything the individual form adds beyond the common fields.
  data: z.record(z.string(), z.unknown()).optional(),
  // Honeypot: a field hidden from people but filled in by naive bots.
  website: z.string().max(0).optional(),
});

export type SubmitState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
};

export async function submitForm(
  _prev: SubmitState | null,
  formData: FormData,
): Promise<SubmitState> {
  // Collect every field so form-specific inputs are captured without this
  // action needing to know about each form's shape. Files are separated out
  // and stored as their own documents.
  const raw: Record<string, string> = {};
  const files: { field: string; file: File }[] = [];
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") {
      raw[key] = value;
    } else if (value instanceof File && value.size > 0) {
      files.push({ field: key, file: value });
    }
  }

  // Most forms collect first/last name separately. Combine them so the inbox
  // has something readable to show without every form needing a `name` field.
  if (!raw.name) {
    const combined = [raw.firstName, raw.lastName].filter(Boolean).join(" ").trim();
    if (combined) raw.name = combined;
  }

  const known = ["formType", "name", "email", "phone", "message", "website"];
  const extra = Object.fromEntries(
    Object.entries(raw).filter(([k, v]) => !known.includes(k) && v !== ""),
  );

  const parsed = schema.safeParse({ ...raw, data: extra });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      ok: false,
      message: "Please check the highlighted fields and try again.",
      fieldErrors,
    };
  }

  // A filled honeypot means a bot. Return the success message so it learns
  // nothing, but store nothing.
  if (parsed.data.website) {
    return { ok: true, message: "Thank you — we've received your submission." };
  }

  try {
    const payload = await getPayload({ config });
    const headerList = await headers();

    const attachments = await storeAttachments(payload, files, parsed.data.formType);

    await payload.create({
      collection: "submissions",
      data: {
        formType: parsed.data.formType,
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        message: parsed.data.message,
        data: {
          ...(parsed.data.data ?? {}),
          ...(attachments.length ? { attachments } : {}),
        },
        meta: {
          sourceUrl: headerList.get("referer") ?? undefined,
          userAgent: headerList.get("user-agent")?.slice(0, 500) ?? undefined,
        },
      },
    });

    await notifyStaff(payload, parsed.data.formType, parsed.data.email);

    return {
      ok: true,
      message: "Thank you — we've received your submission and will be in touch.",
    };
  } catch (error) {
    console.error("[submit-form] failed to store submission:", error);
    return {
      ok: false,
      message:
        "Something went wrong on our end. Please email info@blackinrehab.org and we'll pick it up from there.",
    };
  }
}

/** 10MB per file, matching what a scanned PDF letter realistically needs. */
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const MAX_FILES = 5;

/**
 * Save uploaded PDFs into the private Documents collection and return
 * references to attach to the submission.
 *
 * A rejected or oversized file must not lose the whole application, so each
 * failure is recorded against that field and the submission still goes
 * through — staff can see what was attempted and ask for a resend.
 */
async function storeAttachments(
  payload: Awaited<ReturnType<typeof getPayload>>,
  files: { field: string; file: File }[],
  formType: string,
) {
  const stored: { field: string; documentId?: string | number; filename?: string; error?: string }[] = [];

  for (const { field, file } of files.slice(0, MAX_FILES)) {
    if (file.size > MAX_FILE_BYTES) {
      stored.push({ field, filename: file.name, error: "File exceeded the 10MB limit and was not stored." });
      continue;
    }
    if (file.type !== "application/pdf") {
      stored.push({ field, filename: file.name, error: "Only PDF files are accepted." });
      continue;
    }

    try {
      const doc = await payload.create({
        collection: "documents",
        data: { formType, fieldName: field },
        file: {
          data: Buffer.from(await file.arrayBuffer()),
          name: file.name,
          mimetype: file.type,
          size: file.size,
        },
      });
      stored.push({ field, documentId: doc.id, filename: file.name });
    } catch (error) {
      console.error(`[submit-form] attachment "${field}" failed to store:`, error);
      stored.push({ field, filename: file.name, error: "Upload failed." });
    }
  }

  return stored;
}

/**
 * Alert staff that something arrived.
 *
 * No email adapter is configured yet, so Payload writes the message to the
 * server console. That is intentional for now — the submission is already
 * safely in the database, and wiring a real provider is a config change rather
 * than a code change. A failure here must never fail the visitor's submission.
 */
async function notifyStaff(
  payload: Awaited<ReturnType<typeof getPayload>>,
  formType: string,
  from: string,
) {
  try {
    const settings = await payload.findGlobal({ slug: "site-settings", depth: 0 });
    if (settings?.notifyOnSubmission === false) return;

    const to = settings?.notificationEmail || settings?.email;
    if (!to) return;

    await payload.sendEmail({
      to,
      subject: `New ${formType} submission from ${from}`,
      text: `A new ${formType} submission was received from ${from}.\n\nView it in the dashboard under Inbox → Form Submissions.`,
    });
  } catch (error) {
    console.error("[submit-form] notification email failed (submission was saved):", error);
  }
}
