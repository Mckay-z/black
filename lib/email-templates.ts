/**
 * Branded emails sent through Zend (see `cms/email.ts`).
 *
 * Email clients ignore stylesheets and most modern CSS, so everything here is
 * table layout with inline styles, using the site's light palette as literal
 * colours. The header is a text wordmark rather than an image: an image would
 * need a live public URL, and many clients block images by default anyway.
 *
 * Every value that came from a visitor is HTML-escaped. Visitor-facing emails
 * deliberately do NOT repeat the visitor's message back: anyone can type any
 * address into a form, so echoing their text would let the form be used to
 * send arbitrary content to a stranger's inbox.
 */

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://blackinrehab.org"
).replace(/\/$/, "");

const C = {
  ground: "#f3ecdf",
  surface: "#ffffff",
  ink: "#1b1611",
  muted: "#6b5d4c",
  border: "#dfd3bc",
  gold: "#7c5f0f",
  onGold: "#fffbf0",
  black: "#000000",
};

const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "-apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

/** Human labels for each form, used in subjects and headings. */
export const FORM_LABELS: Record<string, string> = {
  contact: "Contact message",
  newsletter: "Newsletter sign-up",
  membership: "Membership registration",
  conference: "Conference registration",
  ghana: "Ghana application",
  retreat: "Retreat registration",
  scholarship: "Scholarship application",
  "speaker-booking": "Speaker request",
  volunteer: "Volunteer sign-up",
  partnership: "Partnership inquiry",
};

export function formLabel(formType: string) {
  return FORM_LABELS[formType] ?? "Form submission";
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Newlines kept, everything else escaped. */
function para(value: string) {
  return escapeHtml(value).replace(/\r?\n/g, "<br>");
}

/**
 * The visitor's first name for a greeting — only if it looks like a name.
 * Anything long or containing a link falls back to a neutral greeting, so the
 * one visitor-supplied value we do echo cannot carry a spam payload.
 */
function safeFirstName(name?: string) {
  const first = name?.trim().split(/\s+/)[0] ?? "";
  if (!first || first.length > 40 || /[:/.@<>]/.test(first)) return null;
  return first;
}

function button(label: string, href: string) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:28px 0 4px">
  <tr><td style="background:${C.gold};border-radius:999px">
    <a href="${href}" style="display:inline-block;padding:13px 28px;font-family:${SANS};font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${C.onGold};text-decoration:none">${escapeHtml(label)}</a>
  </td></tr>
</table>`;
}

/** The shared frame: dark wordmark header, white card, small footer. */
function layout({ preheader, body }: { preheader: string; body: string }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<title>Black in Rehab</title>
</head>
<body style="margin:0;padding:0;background:${C.ground}">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.ground}">
  <tr><td align="center" style="padding:32px 16px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px">
      <tr><td style="background:${C.black};border-radius:16px 16px 0 0;padding:28px 36px">
        <a href="${SITE_URL}" style="text-decoration:none">
          <span style="font-family:${SERIF};font-size:24px;font-weight:700;color:#ffffff">black <em style="color:#d4af37">in</em> rehab</span><br>
          <span style="font-family:${SANS};font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#b9ab93">Healing together. Growing together.</span>
        </a>
      </td></tr>
      <tr><td style="height:4px;background:${C.gold};line-height:4px;font-size:0">&nbsp;</td></tr>
      <tr><td style="background:${C.surface};border:1px solid ${C.border};border-top:0;border-radius:0 0 16px 16px;padding:36px;font-family:${SANS};font-size:16px;line-height:1.6;color:${C.ink}">
        ${body}
      </td></tr>
      <tr><td style="padding:24px 12px;text-align:center;font-family:${SANS};font-size:12px;line-height:1.6;color:${C.muted}">
        Black in Rehab Foundation · <a href="${SITE_URL}" style="color:${C.gold};text-decoration:none">${escapeHtml(SITE_URL.replace(/^https?:\/\//, ""))}</a>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

function heading(eyebrow: string, title: string) {
  return `<p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${C.gold}">${escapeHtml(eyebrow)}</p>
<h1 style="margin:0 0 20px;font-family:${SERIF};font-size:28px;line-height:1.25;color:${C.ink}">${escapeHtml(title)}</h1>`;
}

// ── Staff alert ───────────────────────────────────────────────────────────

export type SubmissionForEmail = {
  formType: string;
  name?: string;
  email: string;
  phone?: string;
  message?: string;
  data?: Record<string, unknown>;
};

/** "registrationType" → "Registration type". */
function humanise(key: string) {
  const spaced = key.replace(/[_-]+/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

function displayValue(value: unknown): string {
  if (value == null || value === "") return "—";
  if (Array.isArray(value)) {
    return value
      .map((item) =>
        item && typeof item === "object" && "filename" in item
          ? String((item as { filename?: unknown }).filename ?? "file")
          : displayValue(item),
      )
      .join(", ");
  }
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function row(label: string, value: string, isHtml = false) {
  return `<tr>
  <td style="padding:10px 12px 10px 0;border-bottom:1px solid ${C.border};font-size:13px;font-weight:700;color:${C.muted};vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td>
  <td style="padding:10px 0;border-bottom:1px solid ${C.border};font-size:15px;color:${C.ink};vertical-align:top">${isHtml ? value : para(value)}</td>
</tr>`;
}

export function staffAlertEmail(s: SubmissionForEmail) {
  const label = formLabel(s.formType);
  const extra = Object.entries(s.data ?? {}).filter(([, v]) => v != null && v !== "");

  const rows = [
    row("Name", s.name || "—"),
    row("Email", `<a href="mailto:${escapeHtml(s.email)}" style="color:${C.gold}">${escapeHtml(s.email)}</a>`, true),
    row("Phone", s.phone || "—"),
    ...extra.map(([k, v]) => row(humanise(k), displayValue(v))),
  ].join("");

  const message = s.message
    ? `<p style="margin:28px 0 8px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${C.gold}">Message</p>
<div style="padding:18px 20px;background:${C.ground};border-left:3px solid ${C.gold};border-radius:8px;font-size:15px;color:${C.ink}">${para(s.message)}</div>`
    : "";

  const html = layout({
    preheader: `${label} from ${s.name || s.email}`,
    body: `${heading("New submission", label)}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${rows}</table>
${message}
${button("Open in the dashboard", `${SITE_URL}/admin/collections/submissions`)}
<p style="margin:16px 0 0;font-size:13px;color:${C.muted}">Reply to the sender directly at ${escapeHtml(s.email)} — replying to this email will not reach them.</p>`,
  });

  const text = [
    `New ${label.toLowerCase()}`,
    "",
    `Name: ${s.name || "—"}`,
    `Email: ${s.email}`,
    `Phone: ${s.phone || "—"}`,
    ...extra.map(([k, v]) => `${humanise(k)}: ${displayValue(v)}`),
    "",
    "Message:",
    s.message || "—",
    "",
    `Open in the dashboard: ${SITE_URL}/admin/collections/submissions`,
  ].join("\n");

  return {
    subject: `${label} from ${s.name || s.email}`,
    html,
    text,
  };
}

// ── Visitor confirmation ──────────────────────────────────────────────────

export function visitorConfirmationEmail(s: SubmissionForEmail) {
  const label = formLabel(s.formType);
  const first = safeFirstName(s.name);
  const hello = first ? `Hi ${escapeHtml(first)},` : "Hello,";

  const html = layout({
    preheader: "Thank you — we've received your submission.",
    body: `${heading("Thank you", "We’ve received your submission")}
<p style="margin:0 0 16px">${hello}</p>
<p style="margin:0 0 16px">Thank you for reaching out to Black in Rehab. This is a quick note to confirm that your <strong>${escapeHtml(label.toLowerCase())}</strong> came through safely.</p>
<p style="margin:0 0 16px">A member of our team will review it and be in touch. There’s nothing else you need to do for now.</p>
${button("Visit Black in Rehab", SITE_URL)}
<p style="margin:24px 0 0;font-size:13px;color:${C.muted}">If you didn’t submit a form on our website, you can safely ignore this email.</p>`,
  });

  const text = [
    first ? `Hi ${first},` : "Hello,",
    "",
    `Thank you for reaching out to Black in Rehab. This is a quick note to confirm that your ${label.toLowerCase()} came through safely.`,
    "",
    "A member of our team will review it and be in touch. There's nothing else you need to do for now.",
    "",
    SITE_URL,
    "",
    "If you didn't submit a form on our website, you can safely ignore this email.",
  ].join("\n");

  return { subject: "We’ve received your submission — Black in Rehab", html, text };
}

// ── Newsletter welcome ────────────────────────────────────────────────────

export function newsletterWelcomeEmail(s: SubmissionForEmail) {
  const first = safeFirstName(s.name);
  const hello = first ? `Hi ${escapeHtml(first)},` : "Hello,";

  const html = layout({
    preheader: "Welcome to the Black in Rehab community.",
    body: `${heading("Welcome", "You’re on the list")}
<p style="margin:0 0 16px">${hello}</p>
<p style="margin:0 0 16px">Thank you for subscribing to updates from Black in Rehab. You’ll hear from us about upcoming events and trips, opportunities for students and professionals, and the work of BIR CARES.</p>
<p style="margin:0 0 16px">In the meantime, see what’s coming up:</p>
${button("See upcoming events", `${SITE_URL}/trips/upcoming-events`)}
<p style="margin:24px 0 0;font-size:13px;color:${C.muted}">If you didn’t sign up, you can ignore this email, or reply to <a href="mailto:info@blackinrehab.com" style="color:${C.gold}">info@blackinrehab.com</a> and we’ll remove you.</p>`,
  });

  const text = [
    first ? `Hi ${first},` : "Hello,",
    "",
    "Thank you for subscribing to updates from Black in Rehab. You'll hear from us about upcoming events and trips, opportunities for students and professionals, and the work of BIR CARES.",
    "",
    `See upcoming events: ${SITE_URL}/trips/upcoming-events`,
    "",
    "If you didn't sign up, you can ignore this email, or write to info@blackinrehab.com and we'll remove you.",
  ].join("\n");

  return { subject: "Welcome to Black in Rehab", html, text };
}
