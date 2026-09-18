import type { Metadata } from "next";

import TripDetail, { type TripDetailData } from "@/components/trips/TripDetail";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "6th Annual Retreat | Black In Rehab Foundation",
  description:
    "Four days of keynotes, continuing education, and celebration in New Orleans — June 17–20, 2027.",
};

/**
 * The 6th Annual Retreat, on the shared trip-detail layout.
 *
 * Moved onto `components/trips/TripDetail.tsx` so it reads as the same
 * publication as Sankofa Return rather than as a differently-built page that
 * happens to share a palette. Every section below is content; the layout,
 * motion and section order live in the component.
 *
 * All copy here was already on the page before the move — the agenda, the four
 * highlights, the hero line and the closing invitation are carried over
 * verbatim. Nothing was invented to fill a section: the bands this trip has no
 * material for (photographs, what the price covers, the price itself, the
 * small print) are simply absent, which is what the component does with an
 * omitted key.
 *
 * Three things still need the client:
 *
 *   1. TITLE. The page used to be headed "Annual Conference". The client's own
 *      calendar calls it the "6th Annual Retreat", which is what
 *      `lib/trips.ts` lists and what is used here. Worth confirming the two
 *      names mean one event.
 *   2. DATES. The page carried "June 20–22, 2025", three days and long past.
 *      The client's calendar gives June 17–20, which is four days, and the
 *      year is ours (see the date note in `lib/trips.ts`).
 *   3. AGENDA. The three days below are the ones the page already had. They do
 *      not cover a four-day window, so either a day is missing or the dates
 *      are. Left as three rather than a fourth being written for them.
 *
 * There is no `pricing` block, deliberately, and for the same reason Sankofa
 * Return has none: nobody has given us the figures, and a price is the one
 * thing on a page like this a visitor will act on. "Early bird pricing
 * available" survives in the closing copy because that is what the page said;
 * a number would have been invention.
 */
const CONFERENCE: TripDetailData = {
  hero: {
    title: "6th Annual Retreat",
    dates: "June 17–20, 2027",
    tagline: "Connection, Continuing Education & Celebration",
    detail: "Four days in New Orleans, Louisiana",
    image: PHOTOS.conferenceAudience,
    cta: { label: "REGISTER NOW", href: "/trips/conference/register" },
  },

  intro: {
    heading: "Our Flagship",
    accent: "Gathering",
    paragraphs: [
      "The largest gathering of Black rehabilitation professionals in the country, and the one weekend a year the whole community is in one room.",
      "Transformative days of connection, professional development, inspiration, and celebration — keynotes and continuing education through the day, and the kind of evening that reminds you why you do this work.",
    ],
    closing: "Join us in New Orleans for an unforgettable experience.",
  },

  itinerary: {
    image: PHOTOS.conferenceSession,
    heading: "The Days",
    accent: "Ahead",
    description:
      "Three days that move from meeting each other, to learning together, to sending each other back out with something to build on.",
    cardTitle: "Conference Agenda",
    cardSubtitle: "New Orleans, Louisiana",
    days: [
      {
        day: "Day 1",
        title: "Arrive & Connect",
        note: "Welcome reception, registration, opening keynote address, and networking dinner.",
        icon: "users",
      },
      {
        day: "Day 2",
        title: "Elevate & Learn",
        note: "Workshops, panel discussions, continuing education sessions, and breakout groups.",
        icon: "compass",
      },
      {
        day: "Day 3",
        title: "Lead & Launch",
        note: "Leadership summit, awards ceremony, evening celebration, and closing send-off.",
        icon: "heart",
      },
    ],
    cta: { label: "REGISTER NOW", href: "/trips/conference/register" },
  },

  highlights: {
    heading: "What Makes It",
    accent: "Worth the Trip",
    items: [
      {
        title: "1,000+ Attendees",
        description:
          "Professionals, students, and allies from across the globe.",
        icon: "users",
      },
      {
        title: "CEU Credits",
        description:
          "Earn continuing education units while connecting with peers.",
        icon: "compass",
      },
      {
        title: "Cultural Celebration",
        description:
          "Evening events celebrating culture, community, and excellence.",
        icon: "heart",
      },
      {
        title: "Annual Awards",
        description:
          "Honoring individuals and organizations making an extraordinary impact.",
        icon: "globe",
      },
    ],
  },

  closing: {
    title: "Secure Your Spot Today",
    description:
      "Early bird pricing available for a limited time. Join us in New Orleans for an unforgettable experience.",
    cta: { label: "REGISTER NOW", href: "/trips/conference/register" },
    secondaryCta: { label: "See Upcoming Events", href: "/trips/upcoming-events" },
  },
};

export default function ConferencePage() {
  return <TripDetail trip={CONFERENCE} />;
}
