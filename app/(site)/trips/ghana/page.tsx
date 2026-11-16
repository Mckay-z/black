import type { Metadata } from "next";

import TripDetail, { type TripDetailData } from "@/components/trips/TripDetail";
import { PHOTOS } from "@/lib/images";
import { payLaterHref } from "@/lib/pay-later";
import {
  GHANA_ACCRA_BOOKING_URL as ACCRA_BOOKING_URL,
  GHANA_BOOKING_URL as BOOKING_URL,
} from "@/lib/trips";

export const metadata: Metadata = {
  title: "Ghana: Sankofa Return | Black In Rehab Foundation",
  description:
    "SANKOFA Clinical & Cultural Exchange: Healing Beyond Borders — twelve nights in Accra and Elmina, March 10–22, 2027, alongside Nature Sprout Academy.",
};

/**
 * Ghana, on the shared trip-detail layout.
 *
 * Everything below is content. The layout, the motion and the section order
 * live in `components/trips/TripDetail.tsx`; a second trip is another file
 * shaped exactly like this one.
 *
 * ONE PAGE, TWO GATHERINGS. The client's calendar lists Ghana twice in 2027:
 * "Ghana: Sankofa Return" in March and "Ghana Retreat 2.0". They share this
 * page, and the `gatherings` block gives each its own anchor —
 * `#sankofa-return` and `#ghana-retreat-2` — which the calendar links to.
 * Ghana Retreat 2.0 has no confirmed details: the client asked for its date
 * and everything unconfirmed to come off and "Details Coming Soon" to show.
 *
 * SOURCE. The day-by-day is the client's own itinerary, published at
 * `ITINERARY_URL`, and replaces an eight-day version that did not match it.
 * Keep the two in step: if the itinerary changes, change it here too.
 *
 * THREE DESTINATIONS, KEPT APART. Applying (Cognito) and booking (TravelJoy)
 * are different steps on different platforms, and the client asked for them
 * to stay distinct, so they are laid out as numbered steps in `steps` rather
 * than as two buttons that look interchangeable.
 */
const APPLY_URL =
  "https://www.cognitoforms.com/BlackInRehab1/SANKOFAMISSIONSHEALINGBEYONDBORDERSGHANA";
const ITINERARY_URL = "https://blackinrehab.my.canva.site";

const APPLY = { label: "APPLY NOW", href: APPLY_URL };

const GHANA: TripDetailData = {
  hero: {
    title: "Sankofa Return",
    dates: "March 10–22, 2027",
    tagline: "Clinical & Cultural Exchange: Healing Beyond Borders",
    detail: "12 nights · Accra & Elmina, Ghana",
    image: PHOTOS.ghanaFreedomArch,
    cta: APPLY,
  },

  intro: {
    heading: "This Journey Is",
    accent: "Yours",
    paragraphs: [
      "Journey to Ghana for a transformative experience rooted in service, culture, connection and shared learning.",
      "This is a reciprocal exchange between Black rehabilitation professionals and students from the diaspora and the therapists, educators, children and families of Nature’s Sprout Academy (NSA) in Accra.",
      "From arrival in Elmina to mission week in Accra, each day makes room for purpose and connection.",
    ],
    closing: "Come home with your skills — and your whole self.",
    image: PHOTOS.ghanaRiverCeremony,
    imageAlt: "A river ceremony during a Black in Rehab trip to Ghana",
  },

  gatherings: {
    heading: "Two Ways to",
    accent: "Return",
    description:
      "Ghana runs twice under one programme. They are not the same trip — take either, or take both.",
    items: [
      {
        id: "sankofa-return",
        title: "Ghana: Sankofa Return",
        dates: "March 10–22, 2027",
        location: "Accra & Elmina, Ghana",
        summary:
          "Clinical exchange, service and culture alongside Nature Sprout Academy. The day-by-day below is this trip.",
        image: PHOTOS.ghanaBathOfReturn,
      },
      {
        id: "ghana-retreat-2",
        title: "Ghana Retreat 2.0",
        dates: "Details Coming Soon",
        location: "Ghana",
        summary: "Details coming soon. Stay tuned.",
        image: PHOTOS.ghanaBeach,
      },
    ],
  },

  itinerary: {
    image: PHOTOS.ghanaCastleGroup,
    // In the order the trip meets them: Elmina, cooking, the market, drumming.
    // Kept out of the gallery below so no photograph shows twice.
    moreImages: [
      PHOTOS.ghanaDoorOfReturn,
      PHOTOS.ghanaCooking,
      PHOTOS.ghanaMarket,
      PHOTOS.ghanaDrumming,
    ],
    heading: "The Journey",
    accent: "Day by Day",
    description:
      "Two days on the coast at Elmina, a weekend in Accra, a full mission week at Nature Sprout Academy, and a final weekend to celebrate, reflect and return.",
    cardTitle: "Accra & Elmina",
    cardSubtitle: "MARCH 10–22, 2027",
    days: [
      {
        day: "Wed, Mar 10",
        title: "Journey to Ghana",
        note: "Depart the United States on an overnight international flight to Accra.",
        icon: "plane",
      },
      {
        day: "Thu, Mar 11",
        title: "Ancestral Welcome & Journey to Elmina",
        note: "Arrive at Kotoka International Airport, Accra, and depart directly for Elmina. Check in at Lemon Resort.",
        icon: "pin",
      },
      {
        day: "Fri, Mar 12",
        title: "History, Community Impact & Return to Accra",
        note: "Guided visit to Elmina Castle. Empower & Equip Community Impact Project: visit a local women's and children's community, donate books and school supplies for children, and provide hygiene and personal-care products for women. Depart Elmina and return to Accra, with a grocery store stop, and check in at NSA Villa.",
        icon: "heart",
      },
      {
        // TODO(client): time, location and details for the naming ceremony.
        day: "Fri, Mar 12",
        title: "Naming Ceremony",
        icon: "users",
      },
      {
        day: "Sat, Mar 13",
        title: "Creativity, Culture & Accra",
        note: "Ghanaian batik-making experience, a guided Accra city tour, and an evening at leisure.",
        icon: "compass",
      },
      {
        day: "Sun, Mar 14",
        title: "NSA Orientation & Cook Like a Local",
        note: "Breakfast at NSA, a Cook Like a Local culinary experience, and a welcome dinner hosted by NSA at 5 PM. Breakfast, lunch and dinner included.",
        icon: "food",
      },
      {
        day: "Mon, Mar 15",
        title: "Mission Week — Orientation Day",
        note: "Orientation, with Black in Rehab observing NSA. 7:00 AM–4:30 PM. Breakfast at NSA included.",
        icon: "users",
      },
      {
        day: "Tue, Mar 16",
        title: "Mission Week — Exchange Day",
        note: "NSA observes Black in Rehab. 7:00 AM–4:30 PM. Breakfast (7–8 AM) included.",
        icon: "users",
      },
      {
        day: "Wed, Mar 17",
        title: "Mission Week — Melanin & Gold Poolside Social",
        note: "Work together during the day, then host the poolside social at the villa with our 16 NSA therapists. Attire: African and natural colors (white, brown, black or orange swimsuits). Catered food such as pizza, Ghana meat pies, puff puff, wings, Fanta, malt and Ghana ice cream. Breakfast and dinner included.",
        icon: "sun",
      },
      {
        day: "Thu, Mar 18",
        title: "Mission Week — Inservice Day with NSA",
        note: "Training and feedback day, 8:00 AM–6:30 PM. Breakfast included.",
        icon: "calendar",
      },
      {
        day: "Fri, Mar 19",
        title: "Final Mission Day & Meet and Greet",
        note: "Final mission day, with breakfast from 7–8 AM, followed by an evening meet and greet with the community and area therapists. Tickets are available for purchase. Breakfast and dinner included.",
        icon: "heart",
      },
      {
        day: "Sat, Mar 20",
        title: "Markets, Music & Ghanaian Nightlife",
        note: "Visit a local craft market and enjoy a Ghanaian drumming experience. Breakfast, lunch and dinner not included.",
        icon: "globe",
      },
      {
        day: "Sun, Mar 21",
        title: "Free Morning & Farewell Celebration",
        note: "Morning on your own, with optional experiences: a waterfall spa and wellness experience (drop-off and pick-up, lunch included), a shea butter experience, a Shai Hills safari, or a Ghana nightlife and nightclub experience (Cultured Ghana transportation, $200). Farewell dinner in African attire at Buka Restaurant or another family-style restaurant. Farewell dinner included; breakfast not included.",
        icon: "food",
      },
      {
        day: "Mon, Mar 22",
        title: "Departure",
        note: "NSA Villa check-out, transfer to Kotoka International Airport, and depart Ghana for the United States.",
        icon: "plane",
      },
    ],
    cta: APPLY,
    secondaryCta: { label: "VIEW ITINERARY", href: ITINERARY_URL },
    footnote:
      "This is a preliminary itinerary and is subject to change. Transportation note: Cultured Ghana is not available for transportation during mission week (March 15–19).",
  },

  highlights: {
    heading: "The Sankofa",
    accent: "Difference",
    items: [
      {
        title: "An exchange, in both directions",
        description:
          "Mission week runs both ways: one day Black in Rehab observes NSA, the next NSA observes Black in Rehab, followed by a full inservice day of training and feedback together.",
        icon: "users",
        image: PHOTOS.speakingTeamWagmc,
      },
      {
        title: "Service beyond the clinic",
        description:
          "The Empower & Equip Community Impact Project takes books and school supplies to children, and hygiene and personal-care products to women, in a local community near Elmina.",
        icon: "heart",
        image: PHOTOS.impactVolunteerChildren,
      },
      {
        title: "Heritage is part of the programme",
        description:
          "A guided visit to Elmina Castle opens the journey, alongside batik-making, an Accra city tour, a cooking experience, a craft market and Ghanaian drumming.",
        icon: "pin",
        image: PHOTOS.ghanaQuoteWall,
      },
      {
        title: "Connection that lasts",
        description:
          "A welcome dinner hosted by NSA, a poolside social with NSA therapists, a meet and greet with area therapists, and a farewell dinner in African attire.",
        icon: "sun",
        image: PHOTOS.ghanaLawn,
      },
    ],
    panel: {
      image: PHOTOS.ghanaKente,
      heading: "Mission",
      accent: "Culture · Connection",
      description:
        "Clinical exchange, service and culture, across twelve nights in Elmina and Accra.",
      perks: [
        "Lodging",
        "Airport transfers",
        "Ground transport",
        "Welcome & farewell dinners",
        "Site fees",
        "Local hosts",
      ],
    },
  },

  gallery: [
    PHOTOS.ghanaAirport,
    PHOTOS.ghanaCertificates,
    PHOTOS.ghanaFood,
    PHOTOS.ghanaCeremonyDetail,
    PHOTOS.ghanaNkrumahQuote,
  ],

  includes: {
    heading: "What the Programme",
    accent: "Covers",
    items: [
      "Twelve nights of lodging in Elmina and Accra",
      "All ground transport for the duration of the programme",
      "Airport transfers on arrival and departure",
      "Scheduled breakfasts, plus the welcome and farewell dinners",
      "Mission week at Nature Sprout Academy",
      "Elmina Castle entry and guided visit",
      "Craft market visit and Cook Like a Local culinary experience",
      "Meet and greet with area therapists",
      "A Black In Rehab departure gift",
      "Black In Rehab hosts with you for the full programme",
    ],
    cta: APPLY,
  },

  pricing: {
    heading: "Reserve Your",
    accent: "Place",
    subtitle: "Land package — international airfare not included",
    roomLabel: "Per person, shared double occupancy",
    options: [{ label: "Double", price: "$3,750", unit: "per person" }],
    cta: APPLY,
    note: "Application and approval required. Book your place once your application has been approved.",
  },

  steps: {
    id: "how-to-join",
    heading: "How to",
    accent: "Join",
    description:
      "Applications are reviewed by Black in Rehab Foundation, and space is first come, first served. Applying and booking are two separate steps.",
    items: [
      {
        label: "Step 1",
        title: "Apply",
        description:
          "Submit your application for SANKOFA Ghana 2027. Our team reviews every application before a place is offered.",
        cta: APPLY,
      },
      {
        label: "Step 2",
        title: "Book Your Place",
        description:
          "Once your application has been approved, complete your registration and booking through our travel booking page.",
        cta: { label: "REGISTER & BOOK", href: BOOKING_URL },
      },
      {
        label: "Accra Only",
        title: "Accra Only Experience",
        description:
          "Join us in Accra only, March 13–22, 2027. Register and book through our travel booking page.",
        cta: { label: "BOOK ACCRA ONLY", href: ACCRA_BOOKING_URL },
      },
    ],
  },

  payLater: payLaterHref("ghana"),

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
          "Meals not listed as included",
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
          "Parts of the programme involve uneven ground, stairs without handrails, and extended standing. Elmina Castle is a historic building with limited accessibility.",
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
    title: "Ready to Heal Beyond Borders?",
    description:
      "Apply to join the SANKOFA Clinical and Cultural Exchange in Ghana. Applications are reviewed by Black in Rehab Foundation, and space is first come, first served.",
    // Straight to the application — applying is the first step to joining.
    cta: { label: "HOW TO JOIN", href: APPLY_URL },
    secondaryCta: { label: "See All Trips", href: "/trips" },
    image: PHOTOS.ghanaJerseysGroup,
    eyebrow: "SANKOFA Ghana 2027",
  },
};

export default function GhanaPage() {
  return <TripDetail trip={GHANA} />;
}
