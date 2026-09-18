import { PHOTOS } from "@/lib/images";

/**
 * Every trip the foundation runs, in one place.
 *
 * The `/trips` index renders straight from this list, so adding a trip is one
 * object here rather than an edit to the page. Each entry's `href` points at
 * that trip's own page — the detail pages still own their long-form copy;
 * this is only what a card needs.
 *
 * Ordering is deliberate and manual: dated trips first in calendar order,
 * then the year-round programmes, then destinations still in planning. The
 * reference layout this page is built from lists alphabetically, which is the
 * right call at sixty trips and the wrong one at nine — a visitor scanning
 * this page wants to know what is next, not what starts with A.
 *
 * SOURCE: this list is the client's "Events updates" calendar from their
 * revision document, and only that. The build previously carried five further
 * trips — a Montego Bay wellness retreat, an Atlanta leadership retreat,
 * Jamaica, Kenya and Tanzania — which appear nowhere in the client's material.
 * They were removed rather than left showing dates and destinations nobody had
 * committed to. Their pages still resolve and are listed in `UNLISTED` in
 * `lib/navigation.ts`; restoring one is adding its object back here.
 *
 * DATES: the years are ours — the document gives day and month only — and are
 * the next occurrence of each date, which also matches "Ghana 2027" in the
 * same document. Worth one confirmation before launch.
 */

export type TripStatus = "Open" | "Year-Round" | "Coming Soon";

export type Trip = {
  /** Stable key. Matches the route segment where there is one. */
  slug: string;
  title: string;
  /** Human date range, or the cadence for a year-round programme. */
  dates: string;
  /** Set in italic serif on the card, echoing the reference layout's script line. */
  location: string;
  image: string;
  href: string;
  status: TripStatus;
  /** One line, used for the card's alt text and the listing's structured data. */
  blurb: string;
};

export const TRIPS: Trip[] = [
  {
    slug: "breast-cancer-walk",
    title: "Breast Cancer Walk",
    dates: "October 17, 2026",
    location: "Atlanta, Georgia",
    image: PHOTOS.impactHandsUp,
    href: "/impact/service",
    status: "Open",
    blurb:
      "Our community walks together in Atlanta to raise funds and awareness for breast cancer.",
  },
  {
    slug: "asha-dinner",
    title: "ASHA Convention Dinner",
    dates: "November 20, 2026",
    location: "Indianapolis, Indiana",
    image: PHOTOS.retreatDinner,
    href: "/trips/upcoming-events",
    status: "Open",
    blurb:
      "Our annual dinner for Black speech-language pathologists attending the ASHA Convention.",
  },
  {
    slug: "ghana",
    title: "Ghana: Sankofa Return",
    dates: "March 10–22, 2027",
    location: "Accra & Cape Coast, Ghana",
    image: PHOTOS.ghanaAirport,
    // Both Ghana entries share one page — see the note at the top of
    // `app/(site)/trips/ghana/page.tsx` — so each links to its own gathering
    // rather than dropping the visitor on a banner that names both.
    href: "/trips/ghana#sankofa-return",
    status: "Open",
    blurb:
      "Clinical education, community engagement, and cultural exchange alongside our partners in West Africa.",
  },
  {
    slug: "conference",
    title: "6th Annual Retreat",
    dates: "June 17–20, 2027",
    location: "New Orleans, Louisiana",
    image: PHOTOS.conferenceAudience,
    href: "/trips/conference",
    status: "Open",
    blurb:
      "Four days of keynotes, continuing education, and the largest gathering of Black rehabilitation professionals in the country.",
  },
  {
    slug: "ghana-retreat-2",
    title: "Ghana Retreat 2.0",
    dates: "September 2027",
    location: "Ghana",
    image: PHOTOS.ghanaBeach,
    href: "/trips/ghana#ghana-retreat-2",
    status: "Open",
    blurb:
      "A second Ghana gathering built around rest and restoration rather than clinical service.",
  },
  {
    slug: "ambassador-meetups",
    title: "Ambassador Meetups",
    dates: "Year-round, monthly",
    location: "Cities across the U.S.",
    image: PHOTOS.conferenceTableTalk,
    href: "/trips/ambassador-meetups",
    status: "Year-Round",
    blurb:
      "Small, regular gatherings hosted by our ambassadors — food, conversation, and the people nearest you.",
  },
];
