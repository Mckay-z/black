import type { Metadata } from "next";

import TripDetail, { type TripDetailData } from "@/components/trips/TripDetail";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Ghana: Sankofa Return | Black In Rehab Foundation",
  description:
    "Clinical service, heritage, and professional exchange in Ghana — the Sankofa Return trip in March 2027 and the Ghana Retreat in September.",
};

/**
 * Ghana, on the shared trip-detail layout.
 *
 * Everything below is content. The layout, the motion and the section order
 * live in `components/trips/TripDetail.tsx`; a second trip is another file
 * shaped exactly like this one.
 *
 * ONE PAGE, TWO GATHERINGS. The client's calendar lists Ghana twice in 2027:
 * "Ghana: Sankofa Return" in March, and "Ghana Retreat 2.0" in September. They
 * are different trips — the first is clinical service, the second is billed as
 * rest "rather than clinical service" — but they are one destination under one
 * programme, so they share this page rather than repeating it. The banner
 * therefore names both months instead of claiming one date, the `gatherings`
 * block gives each its own anchor, and the calendar links to
 * `#sankofa-return` and `#ghana-retreat-2` respectively.
 *
 * Three things here still need the client:
 *
 *   1. The copy is written from the material already on the site and from the
 *      Sankofa Return brief. It reads as final, and it has not been approved.
 *   2. There is no `pricing` block, deliberately. Nobody has given us the
 *      figures, and a price is the one thing on a page like this that a
 *      visitor will act on, so it is better absent than invented. The shape it
 *      wants is at the bottom of this file — fill it in and pass it through.
 *   3. LENGTH. The day-by-day below runs eight days, which is what this page
 *      carried when it was dated October 10–17, 2025. The client's calendar
 *      gives March 10–22 — thirteen days. The itinerary is left at eight
 *      rather than five days being written for it; either it needs extending
 *      or the window needs correcting, and only the client knows which. The
 *      "eight days" line in `intro` is part of the same question.
 */
const GHANA: TripDetailData = {
  hero: {
    title: "Sankofa Return",
    dates: "March & September 2027",
    tagline: "Service, Heritage & Professional Exchange",
    detail: "Two gatherings — a service trip, and a retreat",
    image: PHOTOS.ghanaFreedomArch,
    cta: { label: "APPLY NOW", href: "/trips/ghana/register" },
  },

  intro: {
    heading: "This Journey Is",
    accent: "Yours",
    paragraphs: [
      "Sankofa is the practice of reaching back for what was left behind. This trip is built around that idea rather than around a schedule of sightseeing.",
      "For eight days you will work alongside Ghanaian rehabilitation professionals in their own clinics, sit in their case discussions, and share your own. You will also stand at the Door of No Return, walk the canopy at Kakum, and eat a great deal of very good food.",
      "There is service in the week and there is space in it. Both are on purpose.",
    ],
    closing: "You are not visiting Ghana. You are being received by it.",
  },

  gatherings: {
    heading: "Two Ways to",
    accent: "Return",
    description:
      "Ghana runs twice in 2027 under one programme. They are not the same trip and they are not for the same week — take either, or take both.",
    items: [
      {
        id: "sankofa-return",
        title: "Ghana: Sankofa Return",
        dates: "March 10–22, 2027",
        location: "Accra & Cape Coast, Ghana",
        summary:
          "Clinical education, community engagement, and cultural exchange alongside our partners in West Africa. The day-by-day below is this trip.",
      },
      {
        id: "ghana-retreat-2",
        title: "Ghana Retreat 2.0",
        dates: "September 2027",
        location: "Ghana",
        summary:
          "A second Ghana gathering built around rest and restoration rather than clinical service. Dates beyond the month, and the itinerary, are still to come.",
      },
    ],
  },

  itinerary: {
    image: PHOTOS.ghanaCastleGroup,
    heading: "See Ghana",
    accent: "From the Inside",
    description:
      "Two bases, one week. Four days working and learning in Accra, three on the Cape Coast where the heritage sites are, and a closing day back in the capital with the partners you have spent the week with.",
    cardTitle: "Accra & Cape Coast",
    cardSubtitle: "SANKOFA RETURN",
    days: [
      {
        day: "Day 1",
        title: "Arrival — Accra",
        note: "Airport welcome at Kotoka, transfer to the hotel, and a welcome dinner with your cohort.",
        icon: "plane",
      },
      {
        day: "Day 2",
        title: "Orientation & Partner Introductions",
        note: "Meet the Ghanaian clinicians you will be working with, and walk the sites before the clinic days begin.",
        icon: "users",
      },
      {
        day: "Day 3",
        title: "Community Clinic — Accra",
        note: "Hands-on rehabilitation work in partner facilities, alongside local practitioners rather than in place of them.",
        icon: "heart",
      },
      {
        day: "Day 4",
        title: "Professional Exchange Workshop",
        note: "Shared case discussions and continuing education, presented in both directions.",
        icon: "calendar",
      },
      {
        day: "Day 5",
        title: "Cape Coast — Castles & the Door of No Return",
        note: "Elmina and Cape Coast Castle, with time built in afterwards rather than a coach waiting.",
        icon: "pin",
      },
      {
        day: "Day 6",
        title: "Kakum National Park",
        note: "The canopy walkway in the morning, the coast in the afternoon.",
        icon: "sun",
      },
      {
        day: "Day 7",
        title: "Return to Accra — Market, Kitchen, Closing Ceremony",
        note: "Makola market, a cooking class, and a closing ceremony with our partners.",
        icon: "food",
      },
      {
        day: "Day 8",
        title: "Departure",
        note: "Transfers to Kotoka throughout the day.",
        icon: "globe",
      },
    ],
    cta: { label: "APPLY NOW", href: "/trips/ghana/register" },
  },

  highlights: {
    heading: "The Sankofa",
    accent: "Difference",
    items: [
      {
        title: "You work with, never instead of",
        description:
          "Every clinic day is hosted by a Ghanaian practitioner who is already doing the work. You are there to add hands and to learn, and the partnership continues after the plane leaves.",
        icon: "heart",
      },
      {
        title: "Heritage is not a side trip",
        description:
          "Cape Coast, Elmina and the Door of No Return are part of the programme, with time and quiet built around them — not an optional excursion bolted onto a free afternoon.",
        icon: "pin",
      },
      {
        title: "Exchange goes both ways",
        description:
          "You will present, and you will be presented to. Continuing-education credit is available for the workshop days.",
        icon: "users",
      },
      {
        title: "Days you can actually finish",
        description:
          "Evenings are yours. The schedule is built for people who spend their working lives depleted, not to fill every hour because the hours were paid for.",
        icon: "sun",
      },
    ],
    panel: {
      image: PHOTOS.ghanaKente,
      heading: "Always Included",
      accent: "Perks",
      description:
        "Lodging, transport, and every scheduled meal and site fee are inside the programme cost, so the week does not turn into a series of small decisions about money.",
      perks: [
        "Lodging",
        "Airport transfers",
        "Ground transport",
        "Daily breakfast",
        "Welcome & closing dinners",
        "Site fees",
        "CEU workshops",
        "Local hosts",
      ],
    },
  },

  gallery: [
    PHOTOS.ghanaAirport,
    PHOTOS.ghanaDrumming,
    PHOTOS.ghanaDoorOfReturn,
    PHOTOS.ghanaCanopy,
    PHOTOS.ghanaMarket,
    PHOTOS.ghanaCooking,
    PHOTOS.ghanaBathOfReturn,
    PHOTOS.ghanaCertificates,
    PHOTOS.ghanaBeach,
    PHOTOS.ghanaJerseysGroup,
  ],

  includes: {
    heading: "What the Programme",
    accent: "Covers",
    items: [
      "Seven nights of vetted lodging in Accra and Cape Coast",
      "All ground transport for the duration of the programme",
      "Airport transfers on arrival and departure",
      "Breakfast daily, plus the welcome and closing dinners",
      "Every scheduled clinic day and partner site visit",
      "Continuing-education workshop sessions",
      "Cape Coast and Elmina castle entry and guides",
      "Kakum National Park canopy walkway",
      "Makola market visit and Ghanaian cooking class",
      "Closing ceremony with our Ghanaian partners",
      "A Black In Rehab departure gift",
      "Black In Rehab hosts with you for the full week",
    ],
    cta: { label: "APPLY NOW", href: "/trips/ghana/register" },
  },

  info: {
    heading: "Additional",
    accent: "Information",
    blocks: [
      {
        title: "What's Not Included",
        tone: "primary",
        bullets: [
          "International airfare to and from Accra (ACC)",
          "Ghana entry visa and any associated fees",
          "Travel insurance",
          "Required vaccinations and any travel medication",
          "Lunches and dinners not listed as included",
          "Items of a personal nature",
        ],
      },
      {
        title: "Travel Documents & Health",
        tone: "dark",
        body: [
          "A valid passport is required. It should remain valid for at least six months beyond the return date, and reservations must be made in your full name exactly as it appears on the passport.",
          "Ghana requires proof of yellow fever vaccination on entry. Check with a travel health clinic well ahead of departure — some recommended vaccinations need several weeks.",
        ],
      },
      {
        title: "Accessibility & Mobility",
        tone: "primary",
        body: [
          "Parts of the programme involve uneven ground, stairs without handrails, extended standing, and a canopy walkway at height. The castle sites in particular are historic buildings with limited accessibility.",
          "If you need mobility assistance or any other accommodation, tell us before you book so we can go through the options with you rather than after.",
        ],
      },
      {
        title: "Travel Insurance",
        tone: "dark",
        body: [
          "Travel insurance is strongly recommended and is not included in the programme cost. Cover for medical care abroad, evacuation, and trip cancellation is the part that matters most on a trip like this.",
          "Read any policy's terms before your final payment — cover usually becomes effective on receipt of the premium and may not be available afterwards.",
        ],
      },
    ],
  },

  closing: {
    title: "Ready to Answer the Call?",
    description:
      "Cohorts are kept small so every clinic day stays manageable and every partnership stays real. Apply and we will be in touch within two weeks.",
    cta: { label: "APPLY NOW", href: "/trips/ghana/register" },
    secondaryCta: { label: "See All Trips", href: "/trips" },
  },

  /*
    Pricing, once the client supplies it. Drop this in beside `includes`:

    pricing: {
      heading: "Reserve Your",
      accent: "Place",
      subtitle: "Land Package — No Flights",
      roomLabel: "Per person, shared double occupancy",
      options: [
        { label: "Single", price: "$0,000", unit: "per person" },
        { label: "Double", price: "$0,000", unit: "per person" },
      ],
      cta: { label: "APPLY NOW", href: "/trips/ghana/register" },
      note: "A deposit secures your place; the balance can be spread across monthly payments.",
    },
  */
};

export default function GhanaPage() {
  return <TripDetail trip={GHANA} />;
}
