import type { Metadata } from "next";

import TripDetail, { type TripDetailData } from "@/components/trips/TripDetail";
import { FALLBACK_AMBASSADORS } from "@/lib/fallback-content";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Ambassador Meetups | Black In Rehab Foundation",
  description:
    "Our ambassadors bring Black in Rehab into their local communities through meetups, wellness experiences, school outreach, donation drives, and community service.",
};

/**
 * Ambassador Meetups, on the shared trip-detail layout.
 *
 * Moved onto `components/trips/TripDetail.tsx` alongside Sankofa Return and
 * the annual retreat, so the three pages a visitor is most likely to open in
 * sequence read as one publication.
 *
 * The intro is the client's copy from the website-updates document, verbatim.
 * The same document removed the old "Two Hours, Twenty People" framing, the
 * "What Actually Happens" list, the hosting stipend (not something we offer)
 * and the "Find Your People" closing band — so there is no `includes` and no
 * `closing` here.
 *
 * Where We Gather is built from the ambassador roster in
 * `FALLBACK_AMBASSADORS`, the same list the ambassadors page renders, so a
 * city appears here exactly when it has an ambassador and the two pages
 * cannot drift apart. Two ambassadors in one city share a card.
 */
const CITIES = Array.from(
  FALLBACK_AMBASSADORS.reduce((byCity, ambassador) => {
    const names = byCity.get(ambassador.city) ?? [];
    names.push(ambassador.name);
    return byCity.set(ambassador.city, names);
  }, new Map<string, string[]>()),
);

const MEETUPS: TripDetailData = {
  hero: {
    title: "Ambassador Meetups",
    dates: "Year-round",
    tagline: "Connect, Prioritize Wellness & Give Back",
    detail: "Cities across the U.S. and Ghana",
    image: PHOTOS.retreatDinner,
    cta: { label: "MEET OUR AMBASSADORS", href: "/about/ambassadors" },
  },

  intro: {
    heading: "Black in Rehab,",
    accent: "Close to Home",
    paragraphs: [
      "Our ambassadors bring Black in Rehab into their local communities—creating opportunities for rehabilitation professionals, students, and allies to connect, prioritize wellness, and give back.",
      "Through local meetups, wellness experiences, school outreach, donation drives, and community service, our city chapters help build relationships and respond to needs close to home.",
      "Whether you’re meeting fellow therapists, introducing students to rehabilitation careers, or supporting a local drive, there’s a place for you to get involved. Activities vary by city and reflect the interests and needs of each community.",
    ],
    image: PHOTOS.conferenceTableTalk,
    imageAlt: "Black in Rehab members in conversation around a table",
  },

  highlights: {
    heading: "Where We",
    accent: "Gather",
    items: CITIES.map(([city, names]) => ({
      title: city,
      description: `Ambassador${names.length > 1 ? "s" : ""}: ${names.join(" & ")}`,
      icon: city.endsWith("Ghana") ? "globe" : "pin",
    })),
    panel: {
      image: PHOTOS.conferenceNetworking,
      heading: "We Are Recruiting",
      accent: "Ambassadors",
      description:
        "Ambassadors are the reason this organization exists in more than one place. They host the meetups, welcome new members, and represent Black in Rehab in their local professional community. It is a volunteer role with real support behind it.",
      perks: ["National network", "Access to leadership"],
    },
  },

  // Community moments — meetups, service and time together.
  gallery: [
    PHOTOS.conferenceGroupBranded,
    PHOTOS.retreatGroupOutdoors,
    PHOTOS.impactVolunteersKids,
    PHOTOS.conferenceCelebration,
    PHOTOS.retreatGroupBlazers,
    PHOTOS.conferenceHug,
  ],
};

export default function AmbassadorMeetupsPage() {
  return <TripDetail trip={MEETUPS} />;
}
