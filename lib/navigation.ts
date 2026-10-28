/**
 * The site's information architecture, in one place.
 *
 * The header menu, the mobile drawer, the footer columns and the "in this
 * section" grid on every landing page all read from this file. Before it, the
 * menu was hand-written in `Header.tsx` and each landing page kept its own
 * private list of children — which is how the site ended up with seven pages
 * under Resources and one of them in the menu, and with `/impact` and
 * `/speakers` linking to none of their children at all.
 *
 * The rule this file exists to enforce: if a page is in a section, it is
 * reachable from that section's tab. Adding a page means adding one entry
 * here, and it appears in the menu and on the section hub together.
 *
 * Pages that should stay live but out of the way are listed in `UNLISTED`
 * below rather than being quietly left out of this one.
 */

/**
 * Icon keys, resolved to components by `components/navigation/SectionHub.tsx`.
 * Names rather than components so this stays a plain data module that a
 * Server Component, the Header and the Footer can all import.
 */
export type NavIcon =
  | "book"
  | "award"
  | "users"
  | "globe"
  | "news"
  | "calendar"
  | "map"
  | "compass"
  | "graduation"
  | "heart"
  | "hands"
  | "megaphone"
  | "gift"
  | "handshake"
  | "building"
  | "briefcase"
  | "shop"
  | "mic"
  | "list"
  | "library"
  | "pen"
  | "help"
  | "user";

export type NavChild = {
  label: string;
  href: string;
  /** One line, shown on the section hub card. */
  description: string;
  icon: NavIcon;
};

export type NavSection = {
  label: string;
  /**
   * Shorter labels for the desktop header bar, where the full one does not
   * fit: `compact` from lg, `short` from xl, `wide` from 2xl (the full label
   * when omitted). The full label shows from 1800px (`min-[112.5rem]`) and
   * everywhere else (mobile menu, footer, search, breadcrumbs).
   */
  headerLabels?: { short: string; compact: string; wide?: string };
  href: string;
  /** Lede for the section hub. */
  description: string;
  children: NavChild[];
};

export const NAV_SECTIONS: NavSection[] = [
  {
    label: "About",
    href: "/about",
    description:
      "Who we are, where we came from, and the people leading the work.",
    children: [
      {
        label: "Our Story",
        href: "/about/our-story",
        description: "How two friends turned a shared vision into a global movement.",
        icon: "book",
      },
      {
        label: "Mission, Vision & Values",
        href: "/about/mission-vision-values",
        description: "The principles that guide everything we do.",
        icon: "award",
      },
      {
        label: "Meet the Founders",
        href: "/about/founders",
        description:
          "Dr. Chauntel Altidor and Nancy Yamoah, and how Black in Rehab began.",
        icon: "users",
      },
      {
        label: "Leadership Team",
        href: "/about/leadership",
        description: "The people running the programmes day to day.",
        icon: "users",
      },
      {
        label: "Ambassadors",
        href: "/about/ambassadors",
        description: "Local leaders building community in cities around the world.",
        icon: "globe",
      },
      {
        label: "Media & Press",
        href: "/about/media-press",
        description: "Photo gallery from our events, trips and community work.",
        icon: "news",
      },
    ],
  },

  {
    label: "Upcoming Events & Trips",
    // The client asked for "Upcoming Events & Trips", falling back to
    // "Upcoming Events" where it is too long for the layout.
    headerLabels: { short: "Upcoming Events", compact: "Events", wide: "Upcoming Events" },
    href: "/trips",
    description:
      "Conferences, retreats, global service journeys, and local gatherings.",
    children: [
      {
        label: "Upcoming Events",
        href: "/trips/upcoming-events",
        description: "Everything on the calendar, in date order.",
        icon: "calendar",
      },
      {
        label: "Sankofa Return",
        // The Sankofa Return page itself, not the wider global-programme
        // overview at /trips/global, which stays reachable from /trips.
        href: "/trips/ghana",
        description:
          "Ghana: Sankofa Return — clinical exchange, service and culture in Accra and Elmina.",
        icon: "globe",
      },
      {
        label: "Ambassador Meetups",
        href: "/trips/ambassador-meetups",
        description: "Small, regular gatherings hosted by our ambassadors.",
        icon: "compass",
      },
    ],
  },

  {
    // A tab of its own beside the trips, at the client's request: one page,
    // no children, so the header shows it as a plain link.
    label: "Buy Now, Pay Later",
    headerLabels: { short: "Pay Later", compact: "Pay Later" },
    href: "/buy-now-pay-later",
    description:
      "Trip payment schedules and independent financing resources — Affirm, Klarna and Zip — explained before you book.",
    children: [],
  },

  {
    label: "BIR CARES",
    href: "/impact",
    description:
      "Compassion in action: scholarships, global partnerships, service, and advocacy.",
    children: [
      {
        label: "Scholarships",
        href: "/impact/scholarships",
        description: "Funding students through rehabilitation programmes.",
        icon: "graduation",
      },
      {
        label: "Student Support",
        href: "/impact/student-support",
        description: "Beyond tuition — the costs that push students out.",
        icon: "heart",
      },
      {
        label: "Global Partnerships & Service",
        href: "/impact/mission-projects",
        description: "Clinical and cultural exchange with our partners in Ghana.",
        icon: "globe",
      },
      {
        label: "Service & Volunteering",
        href: "/impact/service",
        description: "Community clinics, service days, and how to give your time.",
        icon: "hands",
      },
      {
        label: "Advocacy",
        href: "/impact/advocacy",
        description: "Pushing for health equity in policy and in practice.",
        icon: "megaphone",
      },
      {
        label: "Sponsor Impact",
        href: "/impact/sponsor-impact",
        description: "Where sponsorship money goes, and how we report it back.",
        icon: "award",
      },
      {
        label: "Donate",
        href: "/impact/donate",
        description: "Fund scholarships, projects, and community programmes.",
        icon: "gift",
      },
    ],
  },

  {
    /*
      Community and Support used to be two tabs that both meant "how you take
      part", split by whether you were giving time or money. A visitor looking
      for the student community had to guess between Community, Impact and
      Resources; someone wanting to sponsor had to guess between Support and
      Impact. One tab, one question: how do I get involved.

      The children keep their existing `/community/…` and `/support/…` URLs.
      A URL does not have to mirror the menu, and moving ten live pages to buy
      a tidier path is a lot of redirects for no visitor benefit.
    */
    label: "Get Involved",
    href: "/get-involved",
    description:
      "Every way to take part — as a student, a professional, a partner, or a sponsor.",
    children: [
      {
        label: "Black in Rehab University",
        href: "/community/students",
        description: "Free monthly virtual sessions for OT, PT, and SLP students.",
        icon: "graduation",
      },
      {
        // Paid, cohort-based — kept separate from the free University above.
        label: "Accountability Lab",
        href: "/get-involved/accountability-lab",
        description: "A 12-week small-group experience for professionals building something.",
        icon: "briefcase",
      },
      {
        label: "Partner With Us",
        href: "/community/partner",
        description: "For organisations, schools, and clinics who want to work together.",
        icon: "handshake",
      },
      {
        label: "Become a Sponsor",
        href: "/support/sponsors",
        description: "Underwrite a programme and see exactly what it funded.",
        icon: "award",
      },
      {
        label: "Corporate Partnerships",
        href: "/support/corporate",
        description: "Multi-year commitments for companies backing health equity.",
        icon: "building",
      },
    ],
  },

  {
    label: "Speakers",
    href: "/speakers",
    description:
      "Book a speaker for your conference, university, or organisation.",
    children: [
      {
        label: "Book a Speaker",
        href: "/speakers/book",
        description: "Rates, formats, and how to make a request.",
        icon: "mic",
      },
      {
        label: "Nancy Yamoah, OTR/L",
        href: "/speakers/nancy-yamoah",
        description: "Founder, CEO & President, Black in Rehab.",
        icon: "user",
      },
      {
        label: "Dr. Chauntel Altidor, OTD",
        href: "/speakers/dr-chauntel-altidor",
        description: "Co-Founder & Vice President, Black in Rehab.",
        icon: "user",
      },
    ],
  },

  {
    label: "Resources",
    href: "/resources",
    description:
      "Reading, tools, and answers for professionals and students.",
    children: [
      {
        label: "Resource Library",
        href: "/resources/library",
        description: "Guides, templates, and downloads.",
        icon: "library",
      },
    ],
  },
];

/**
 * Live pages deliberately kept out of every menu and hub.
 *
 * These still resolve at their URL, so an existing link or a bookmark keeps
 * working, and they carry `noindex` (see `lib/seo.ts`) so nobody arrives on
 * one from a search result. They are here rather than simply omitted above so
 * that "why is this page not in the menu?" has an answer in the codebase.
 *
 * To restore one: delete its line here and add it to the section above.
 */
export const UNLISTED: { href: string; reason: string }[] = [
  { href: "/about/annual-report", reason: "No report published yet." },
  { href: "/resources/podcast", reason: "Placeholder copy — no episodes." },
  { href: "/resources/research", reason: "Placeholder copy — no research published." },
  { href: "/resources/career", reason: "Placeholder copy — no listings." },
  { href: "/support/healthcare-systems", reason: "Placeholder copy — offer not finalised." },
  { href: "/support/career-lounge", reason: "Placeholder copy — programme not running." },
  { href: "/community/online", reason: "Hidden at the client's request." },
  // "Website Updates" document, section 8: hidden from Get Involved, kept for
  // future use.
  { href: "/community/join", reason: "Hidden at the client's request (Become a Member)." },
  { href: "/community/join/register", reason: "Parent page is hidden." },
  // The 6th Annual Conference & Retreat's booking is "coming soon" — the
  // register page now says so and takes no registrations.
  { href: "/trips/conference/register", reason: "Booking not open yet." },
  {
    href: "/trips/ghana/register",
    reason: "Redirects to the Cognito application form — not a page of ours.",
  },
  { href: "/community/share-your-story", reason: "Hidden at the client's request." },
  { href: "/support/universities", reason: "Hidden at the client's request (Mentorship Placement)." },
  // Same document: "Shop — move under Resources, then hide it for now." It
  // belongs to Resources when it comes back; restore it there.
  { href: "/shop", reason: "Hidden at the client's request — returns under Resources." },
  // The revision document's tab notes: Resources shows the library only,
  // Speakers drops the booking-topics page, Support drops "Recruit With Us",
  // and Trips keeps Upcoming Events and Ambassador Meetups. Sankofa Return
  // stays in the Trips menu — the same document makes it the flagship
  // programme, so hiding it would contradict the rest of the revision.
  { href: "/resources/blog", reason: "Hidden at the client's request." },
  { href: "/resources/faqs", reason: "Hidden at the client's request." },
  { href: "/speakers/topics", reason: "Hidden at the client's request." },
  { href: "/support/recruit", reason: "Hidden at the client's request." },
  { href: "/trips/local-events", reason: "Hidden at the client's request." },
  // Not in the client's "Events updates" calendar, so no longer listed in
  // `lib/trips.ts` either. The pages are kept rather than deleted: the copy is
  // written and the trips may yet be confirmed, and a delisted page costs a
  // line here where a deleted one costs the work again.
  {
    href: "/trips/retreats",
    reason: "Not in the client's calendar — wellness retreat unconfirmed.",
  },
  {
    // Found by the search-index audit in `app/sitemap.ts`: the retreat itself
    // was delisted but its registration form was not, so the form stayed in
    // the sitemap and was the one page site search could not account for. A
    // sign-up for a trip nobody has confirmed is the last thing that should be
    // reachable from a search box.
    href: "/trips/retreats/register",
    reason: "Parent trip is unlisted — nothing to register for yet.",
  },
  {
    href: "/trips/leadership-retreats",
    reason: "Not in the client's calendar — leadership retreat unconfirmed.",
  },
  {
    href: "/trips/jamaica",
    reason: "Not in the client's calendar — Jamaica unconfirmed.",
  },
];

const UNLISTED_HREFS = new Set(UNLISTED.map((page) => page.href));

/** True for a page that exists but is intentionally absent from navigation. */
export function isUnlisted(href: string) {
  return UNLISTED_HREFS.has(href);
}

/** The section a given path belongs to, for breadcrumbs and active state. */
export function sectionFor(pathname: string): NavSection | undefined {
  return NAV_SECTIONS.find(
    (section) =>
      pathname === section.href ||
      pathname.startsWith(`${section.href}/`) ||
      section.children.some(
        (child) => pathname === child.href || pathname.startsWith(`${child.href}/`),
      ),
  );
}
