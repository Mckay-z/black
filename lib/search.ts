import { NAV_SECTIONS, isUnlisted } from "@/lib/navigation";
import { TRIPS } from "@/lib/trips";

/**
 * What the site search looks through.
 *
 * This searches PAGES, not page content: it is a way to reach any of the
 * sixty-odd destinations on the site by name, which is what the menu does for
 * the twenty-odd it can fit. Full-text search over the copy would mean
 * extracting and indexing every page at build time, and nothing on the site
 * asks for that yet.
 *
 * ── Where the entries come from ─────────────────────────────────────────
 *
 * Almost all of them come from data that already exists. `lib/navigation.ts`
 * is the site's information architecture and already carries a label and a
 * one-line description for every section and child; `lib/trips.ts` carries the
 * same for every trip. Re-typing those here would mean two lists to keep in
 * agreement, and the file that owns the first one exists precisely because
 * that went wrong before.
 *
 * So the index is composed: nav, then trips, then `EXTRA_PAGES` below for the
 * handful of real destinations neither describes — the homepage, the legal
 * pages, and the registration forms that hang off a parent page.
 *
 * ── Staleness ───────────────────────────────────────────────────────────
 *
 * A hand-kept list of pages goes stale the first time someone adds a page, so
 * this one is audited rather than trusted: `app/sitemap.ts` already walks the
 * filesystem for every route, and in development it compares that walk against
 * this index and warns about anything missing from both it and `UNLISTED`.
 * Add a page, open the site in dev, and the console tells you if search cannot
 * reach it.
 */

export type SearchEntry = {
  title: string;
  href: string;
  /** One line, shown under the title in the results list. */
  description: string;
  /** The part of the site this sits in, shown as context. */
  section?: string;
  /** Words people will search for that are in neither the title nor the
      description — an old name for a page, a city, an acronym. */
  keywords?: string[];
};

/**
 * Destinations that no other module describes.
 *
 * Deliberately short, and it should stay that way: a page that belongs in a
 * section belongs in `NAV_SECTIONS`, where it also reaches the menu and that
 * section's hub. Only pages with nowhere else to live go here.
 */
const EXTRA_PAGES: SearchEntry[] = [
  {
    title: "Home",
    href: "/",
    description: "The front page — who we are and what is happening now.",
    keywords: ["homepage", "start", "front page"],
  },
  {
    title: "Contact Us",
    href: "/contact",
    description: "Get in touch with the foundation.",
    keywords: ["email", "phone", "message", "enquiry", "inquiry", "reach out"],
  },

  // Registration and application forms. People search for the verb — "apply",
  // "sign up", "register" — far more often than for the page's title.
  {
    title: "Become a Member",
    href: "/community/join/register",
    description: "The membership registration form.",
    section: "Get Involved",
    keywords: ["register", "sign up", "join", "membership form", "application"],
  },
  {
    title: "Apply for a Scholarship",
    href: "/impact/scholarships/apply",
    description: "The scholarship application form.",
    section: "Impact",
    keywords: ["apply", "application", "funding", "tuition", "grant"],
  },
  {
    title: "Register for the Retreat",
    href: "/trips/conference/register",
    description: "Registration for the 6th Annual Retreat in New Orleans.",
    section: "Trips",
    keywords: ["register", "sign up", "conference", "new orleans", "annual"],
  },
  {
    title: "Register for Ghana",
    href: "/trips/ghana/register",
    description: "Registration for the Sankofa Return journey to Ghana.",
    section: "Trips",
    keywords: ["register", "sign up", "sankofa", "accra", "cape coast", "africa"],
  },

  // Legal and policy. Nobody browses to these; they search for them by name.
  {
    title: "Privacy Policy",
    href: "/privacy",
    description: "How we handle your data.",
    keywords: ["data", "gdpr", "cookies", "legal"],
  },
  {
    title: "Terms of Use",
    href: "/terms",
    description: "The terms governing use of this site.",
    keywords: ["legal", "conditions"],
  },
  {
    title: "Accessibility",
    href: "/accessibility",
    description: "Our accessibility commitments, and how to report a barrier.",
    keywords: ["a11y", "screen reader", "wcag", "disability"],
  },
];

/**
 * The index, built once at module load.
 *
 * Order of composition matters only for de-duplication: a page described in
 * more than one place keeps the first description, and `NAV_SECTIONS` is the
 * most considered of the three.
 */
export const SEARCH_INDEX: SearchEntry[] = (() => {
  const entries: SearchEntry[] = [];
  const seen = new Set<string>();

  const add = (entry: SearchEntry) => {
    // Trip hrefs can carry a fragment (`/trips/ghana#sankofa-return`). Two
    // gatherings on one page are two useful results, so the fragment is kept
    // in the href and only the whole string is de-duplicated.
    if (seen.has(entry.href)) return;
    // A page kept out of the menu is kept out of search for the same reason:
    // it is not ready to be landed on. See `UNLISTED` in lib/navigation.ts.
    if (isUnlisted(entry.href.split("#")[0])) return;
    seen.add(entry.href);
    entries.push(entry);
  };

  for (const section of NAV_SECTIONS) {
    add({
      title: section.label,
      href: section.href,
      description: section.description,
    });
    for (const child of section.children) {
      add({
        title: child.label,
        href: child.href,
        description: child.description,
        section: section.label,
      });
    }
  }

  for (const trip of TRIPS) {
    add({
      title: trip.title,
      href: trip.href,
      description: trip.blurb,
      section: "Trips",
      // The date and the place are what people actually remember about a trip.
      keywords: [trip.location, trip.dates, trip.slug.replace(/-/g, " ")],
    });
  }

  for (const page of EXTRA_PAGES) add(page);

  return entries;
})();

/** Shown before anything is typed — the places people most often want. */
export const SUGGESTED: SearchEntry[] = [
  "/trips/upcoming-events",
  "/impact/donate",
  "/community/join",
  "/impact/scholarships",
  "/contact",
]
  .map((href) => SEARCH_INDEX.find((entry) => entry.href === href))
  .filter((entry): entry is SearchEntry => Boolean(entry));

/**
 * Fold a string down to something worth comparing: lowercase, no accents, and
 * punctuation reduced to spaces.
 *
 * The punctuation step is what lets "connection table" find "The Connection
 * Table™: Indianapolis", and "mission vision values" find the page whose URL
 * separates those words with hyphens.
 */
function fold(value: string) {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/**
 * Score one entry against one search token.
 *
 * The weights encode a single idea: a match in the page's NAME is worth far
 * more than a match anywhere else. Without that, "donate" ranks the six pages
 * whose descriptions mention donating above the page called Donate.
 */
function scoreToken(entry: SearchEntry, token: string): number {
  const title = fold(entry.title);
  const description = fold(entry.description);
  const keywords = fold((entry.keywords ?? []).join(" "));
  const href = fold(entry.href);

  // Whole title, or the start of it: almost certainly the page they mean.
  if (title === token) return 120;
  if (title.startsWith(token)) return 100;
  // The start of any word in the title — "grads" finding "New Grads".
  if (new RegExp(`\\b${token}`).test(title)) return 70;
  if (title.includes(token)) return 45;

  if (new RegExp(`\\b${token}`).test(keywords)) return 40;
  if (keywords.includes(token)) return 25;

  if (new RegExp(`\\b${token}`).test(description)) return 18;
  if (description.includes(token)) return 10;

  // Last resort, and it earns its place: people search for URL fragments they
  // half-remember from the address bar.
  if (href.includes(token)) return 8;

  return 0;
}

/**
 * Search the index.
 *
 * Every token has to match something (AND, not OR) — with sixty pages and a
 * two-word query, OR returns most of the site and ranks it by accident.
 */
export function searchPages(query: string, limit = 8): SearchEntry[] {
  const tokens = fold(query).split(" ").filter(Boolean);
  if (!tokens.length) return [];

  const hits: { entry: SearchEntry; score: number }[] = [];

  for (const entry of SEARCH_INDEX) {
    let total = 0;

    for (const token of tokens) {
      const score = scoreToken(entry, token);
      if (score === 0) {
        total = 0;
        break;
      }
      total += score;
    }

    if (total > 0) hits.push({ entry, score: total });
  }

  return hits
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
    .slice(0, limit)
    .map((hit) => hit.entry);
}
