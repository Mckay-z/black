import type { Metadata } from "next";

import TripDetail, { type TripDetailData } from "@/components/trips/TripDetail";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Ambassador Meetups | Black In Rehab Foundation",
  description:
    "Small, regular gatherings hosted by our ambassadors in cities across the U.S. — food, conversation, and the people nearest you.",
};

/**
 * Ambassador Meetups, on the shared trip-detail layout.
 *
 * Moved onto `components/trips/TripDetail.tsx` alongside Sankofa Return and
 * the annual retreat, so the three pages a visitor is most likely to open in
 * sequence read as one publication.
 *
 * This is the one entry on the calendar that is not a journey, so two of the
 * component's bands are used for what this page actually has rather than for
 * what a trip would put there:
 *
 *   - `includes` carries what happens at a meetup. The band is a plain list
 *     with a heading, which is exactly the shape that content was already in.
 *   - `highlights` carries the cities, one card each, and its side panel
 *     carries the ambassador recruitment pitch that used to close the page.
 *
 * There is no `itinerary`: a gathering that runs monthly has a cadence, not a
 * day-by-day. There is no `pricing` — meetups are free, and saying so in a
 * price band would be odd. Both keys are simply absent.
 *
 * Every line below was already on the page before the move. The city list
 * still carries the client's own "client to confirm" placeholder against each
 * active city — those names were never supplied, and they are left showing as
 * unconfirmed rather than filled in with the ambassadors from
 * `FALLBACK_AMBASSADORS`, whose cities are a different list.
 */
const MEETUPS: TripDetailData = {
  hero: {
    title: "Ambassador Meetups",
    dates: "Year-round, monthly",
    tagline: "Food, Conversation & the People Nearest You",
    detail: "Cities across the U.S.",
    image: PHOTOS.retreatDinner,
    cta: { label: "BECOME AN AMBASSADOR", href: "/about/ambassadors" },
  },

  intro: {
    heading: "Two Hours, Twenty People, Real",
    accent: "Conversation",
    paragraphs: [
      "Our ambassadors host regular gatherings in their cities — small, consistent, and built for people who want a professional community close to home.",
      "Meetups are intentionally small. The point is not a panel or a program — it is that you leave knowing several people you can call.",
    ],
    closing: "Small, consistent, and close to home.",
  },

  includes: {
    heading: "What Actually",
    accent: "Happens",
    items: [
      "An opening circle so nobody stands alone at the edge of the room",
      "A short spotlight from a local clinician on their work",
      "Open discussion on whatever the city is wrestling with",
      "Student and early-career introductions to working therapists",
      "Concrete follow-ups: referrals, mentorship pairs, and job leads",
    ],
    cta: { label: "SEE UPCOMING EVENTS", href: "/trips/upcoming-events" },
  },

  highlights: {
    heading: "Where We",
    accent: "Gather",
    items: [
      {
        title: "Atlanta, GA",
        description: "Monthly. Ambassador — client to confirm.",
        icon: "pin",
      },
      {
        title: "Houston, TX",
        description: "Monthly. Ambassador — client to confirm.",
        icon: "pin",
      },
      {
        title: "Chicago, IL",
        description: "Quarterly. Ambassador — client to confirm.",
        icon: "pin",
      },
      {
        title: "New York, NY",
        description: "Monthly. Ambassador — client to confirm.",
        icon: "pin",
      },
      {
        title: "London, UK",
        description: "Coming soon — recruiting an ambassador now.",
        icon: "globe",
      },
      {
        title: "Toronto, Canada",
        description: "Coming soon — recruiting an ambassador now.",
        icon: "globe",
      },
      {
        title: "Accra, Ghana",
        description: "Coming soon — recruiting an ambassador now.",
        icon: "globe",
      },
      {
        title: "Kingston, Jamaica",
        description: "Coming soon — recruiting an ambassador now.",
        icon: "globe",
      },
    ],
    panel: {
      image: PHOTOS.conferenceNetworking,
      heading: "We Are Recruiting",
      accent: "Ambassadors",
      description:
        "Ambassadors are the reason this organization exists in more than one place. They host the meetups, welcome new members, and represent Black in Rehab in their local professional community. It is a volunteer role with real support behind it.",
      perks: [
        "Hosting stipend",
        "National network",
        "Access to leadership",
      ],
    },
  },

  closing: {
    title: "Find Your People",
    description:
      "Membership includes an introduction to your nearest ambassador and an invitation to every meetup in your area.",
    cta: { label: "JOIN THE MOVEMENT", href: "/get-involved" },
    secondaryCta: { label: "Ambassador Programme", href: "/about/ambassadors" },
  },
};

export default function AmbassadorMeetupsPage() {
  return <TripDetail trip={MEETUPS} />;
}
