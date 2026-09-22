import { ArrowRight, ArrowUpRight } from "lucide-react";

/**
 * The donation form on `/impact/donate`.
 *
 * This used to be an amount picker of our own — six preset buttons, a custom
 * field and a One-Time/Monthly toggle — which handed the choice to the
 * processor as `?amount=…&frequency=…`. That is the convention Givebutter,
 * Donorbox and Stripe payment links accept, and it was the right shape for a
 * processor that reads it.
 *
 * Zeffy does not. Verified against the live form: every parameter is ignored
 * — `amount`, `defaultAmount`, `donationAmount`, `suggestedAmount`, `a`,
 * `frequency`, `recurrence` — and the form always opens at $100, one-time. So
 * a donor who chose $500 Monthly here landed on a form reading $100 One-time,
 * at the exact moment they were reaching for a card. The two only agreed while
 * the picker sat on its own defaults.
 *
 * Zeffy also already offers what the picker duplicated, and more of it: preset
 * chips, a custom amount, and One-time / Monthly / *Yearly*. So the form is
 * embedded rather than linked to. The donor picks an amount once, on the form
 * that will actually charge it, without leaving the page — and there is no
 * second number anywhere on the site that can drift out of step with it.
 *
 * Three states, in order:
 *
 *   1. A Zeffy donation-form URL  →  the form, embedded.
 *   2. Any other processor URL    →  a plain external button. No amount
 *      parameters: whether a given processor honours them is a per-processor
 *      fact, and guessing is what produced the bug above.
 *   3. Nothing configured         →  an explanation and an email address.
 *      An obviously unfinished donation flow costs less trust than one that
 *      looks ready and isn't.
 */

/**
 * Zeffy serves a chrome-free version of any donation form at the same path
 * with `embed` in front of it, which is what their own embed snippet points
 * at:
 *
 *   https://www.zeffy.com/en-US/donation-form/<slug>
 *   https://www.zeffy.com/en-US/embed/donation-form/<slug>
 *
 * Deriving it here rather than storing it means Site Settings keeps the one
 * URL the client was given and can paste back — the shareable one, the one in
 * their Zeffy dashboard and their Instagram bio. Returns null for anything
 * that is not a Zeffy donation form, which is what selects state 2 above.
 */
function zeffyEmbedUrl(raw: string): string | null {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }

  if (!/(^|\.)zeffy\.com$/i.test(url.hostname)) return null;

  const segments = url.pathname.split("/").filter(Boolean);
  const idx = segments.indexOf("donation-form");

  // Needs the segment and a slug after it. A bare /donation-form is a Zeffy
  // page, not a form.
  if (idx === -1 || !segments[idx + 1]) return null;

  // Already an embed link — leave it alone rather than inserting a second
  // `embed` segment.
  if (segments[idx - 1] !== "embed") segments.splice(idx, 0, "embed");

  url.pathname = `/${segments.join("/")}`;
  // Drop any query string. The only parameters we ever appended were the ones
  // Zeffy ignores, and passing them on would imply they do something.
  url.search = "";

  return url.toString();
}

export default function DonateWidget({
  donationUrl,
  contactEmail,
}: {
  donationUrl?: string | null;
  contactEmail: string;
}) {
  const embedUrl = donationUrl ? zeffyEmbedUrl(donationUrl) : null;

  // ── 1. Zeffy, embedded ──────────────────────────────────────────────────
  if (embedUrl && donationUrl) {
    return (
      <div>
        <div className="card overflow-hidden">
          <iframe
            title="Donation form"
            src={embedUrl}
            // Defaults to the frame's own origin, which is what lets Apple Pay
            // and Google Pay appear in Zeffy's payment step.
            allow="payment"
            // Height lives in `.donate-frame` — see the note beside it in
            // globals.css for why it is what it is.
            className="donate-frame block w-full border-0"
          />
        </div>

        {/* The form is an iframe, so it is blank if it fails to load or if
            third-party frames are blocked. This is the way through. */}
        <p className="text-muted text-xs mt-4 text-center">
          Trouble with the form?{" "}
          <a
            href={donationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary font-semibold hover:text-primary-hover transition-colors"
          >
            Open it in a new tab <ArrowUpRight className="w-3 h-3" />
          </a>
        </p>
      </div>
    );
  }

  // ── 2. Some other processor ─────────────────────────────────────────────
  if (donationUrl) {
    return (
      <div className="card rounded-3xl p-8 md:p-12 text-center">
        <p className="text-foreground font-semibold mb-2">
          Give securely through our donation partner
        </p>
        <p className="text-muted text-sm mb-8">
          You will choose your amount and whether to give once or monthly on the
          next screen.
        </p>
        <a
          href={donationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg group w-full"
        >
          DONATE NOW
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    );
  }

  // ── 3. Nothing configured ───────────────────────────────────────────────
  return (
    <div className="card rounded-3xl p-8 md:p-12">
      <div className="rounded-2xl border border-border bg-background p-6 text-center">
        <p className="text-foreground font-semibold mb-2">
          Online giving is being set up.
        </p>
        <p className="text-muted text-sm">
          To make a gift today, email{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="text-primary font-semibold hover:text-primary-hover transition-colors inline-flex items-center gap-1"
          >
            {contactEmail} <ArrowRight className="w-3 h-3" />
          </a>{" "}
          and we will send you everything you need.
        </p>
      </div>
    </div>
  );
}
