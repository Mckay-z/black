import type { Metadata } from "next";

import TripDetail, { type TripDetailData } from "@/components/trips/TripDetail";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "6th Annual Conference & Retreat | Black In Rehab Foundation",
  description:
    "The 6th Annual Black in Rehab Conference & Retreat in New Orleans over Juneteenth weekend, June 17–20, 2027. Booking coming soon.",
};

/**
 * The 6th Annual Conference & Retreat, on the shared trip-detail layout.
 *
 * Copy follows the client's "Website Updates" revision document (section 5):
 * the event is named the 6th Annual Conference & Retreat, the daily overview
 * is their three days verbatim, and "What Makes It Worth the Trip" is their
 * four items verbatim. The earlier claims — 1,000+ attendees, CEU credits and
 * annual awards — were removed at their request: CEUs are being explored but
 * are not official, and there are no annual awards.
 *
 * BOOKING is not open. Every action that used to say "Register Now" now points
 * at something real (a sponsorship inquiry, the events calendar) and the page
 * says plainly that booking is coming soon. When the client supplies a booking
 * link, put it in `hero.cta` and `closing.cta` and drop the "Booking Coming
 * Soon" wording from `info` and `closing`.
 *
 * SPONSORSHIP has an inquiry action and nothing else. The tiers on
 * `/support/sponsors` are organisation-wide, not this event's, so the page
 * links to the contact form rather than to them — no tiers, prices or
 * benefits are stated here until the client provides them.
 *
 * There is still no `pricing` block: nobody has given us the figures.
 *
 * DATES: "June 17–20, 2027" is from the client's calendar (year ours — see
 * `lib/trips.ts`). The overview is three days inside a four-day window; worth
 * confirming whether the window or the overview is the one to adjust.
 */
const SPONSOR_INQUIRY = { label: "SPONSORSHIP INQUIRY", href: "/contact" };

const CONFERENCE: TripDetailData = {
  hero: {
    title: "6th Annual Conference & Retreat",
    dates: "June 17–20, 2027",
    tagline: "Juneteenth Weekend in New Orleans",
    detail: "Booking coming soon",
    image: PHOTOS.conferenceAudience,
    cta: SPONSOR_INQUIRY,
  },

  intro: {
    heading: "Our Flagship",
    accent: "Gathering",
    paragraphs: [
      "The 6th Annual Black in Rehab Conference & Retreat brings Black rehabilitation professionals and students together in New Orleans over Juneteenth weekend.",
      "Days of connection, learning, culture, and rest — time with people who understand the work you do and the experiences you bring to it.",
    ],
    closing: "Join us in New Orleans for an unforgettable experience.",
    image: PHOTOS.conferencePodium,
    imageAlt: "A speaker at the podium at a Black in Rehab conference",
  },

  itinerary: {
    // Stand-in group photo until the client's Dropbox selection arrives.
    image: PHOTOS.conferenceCelebration,
    heading: "The Days",
    accent: "Ahead",
    description:
      "Three days that move from meeting each other, to learning together, to resting and celebrating together.",
    cardTitle: "Daily Overview",
    cardSubtitle: "New Orleans, Louisiana",
    days: [
      {
        day: "Day 1",
        title: "Welcome",
        note: "Welcome reception, registration, meet & greet, and night out",
        icon: "users",
      },
      {
        day: "Day 2",
        title: "Conference",
        icon: "compass",
      },
      {
        day: "Day 3",
        title: "Wellness & Farewell",
        note: "Wellness Day Workshop and farewell dinner celebration",
        icon: "heart",
      },
    ],
    cta: { label: "SEE UPCOMING EVENTS", href: "/trips/upcoming-events" },
  },

  highlights: {
    heading: "What Makes It",
    accent: "Worth the Trip",
    items: [
      {
        title: "Community That Gets You",
        description:
          "Meet Black rehabilitation professionals and students who understand your experiences. Build connections that go beyond exchanging social handles.",
        icon: "users",
        image: PHOTOS.conferenceTableTalk,
      },
      {
        title: "Connection Across Professions",
        description:
          "Bring OT, PT, and SLP perspectives into the same space. Share ideas, learn from each other, and expand your professional circle.",
        icon: "compass",
        image: PHOTOS.conferencePanel,
      },
      {
        title: "Culture & Shared Experiences",
        description:
          "Explore together, celebrate our culture, and make memories with people who share your passion for rehabilitation and community.",
        icon: "globe",
        image: PHOTOS.retreatGroupColorful,
      },
      {
        title: "Time to Enjoy Yourself",
        description:
          "Make room for rest, laughter, and life beyond your professional role. You spend so much time showing up for others—this is time for you.",
        icon: "heart",
        image: PHOTOS.retreatBeachYogaGroup,
      },
    ],
  },

  // Past conferences and retreats — what the weekend looks like.
  gallery: [
    PHOTOS.conferenceSession,
    PHOTOS.conferenceNetworking,
    PHOTOS.conferenceSpeakerMic,
    PHOTOS.conferenceGroupBranded,
    PHOTOS.conferenceGala,
    PHOTOS.retreatDinner,
    PHOTOS.conferencePresentation,
  ],

  info: {
    heading: "Sponsor &",
    accent: "Book",
    blocks: [
      {
        title: "Sponsorship Opportunities",
        tone: "primary",
        body: [
          "Interested in sponsoring the 6th Annual Conference & Retreat? We would love to talk with your organisation about being part of it.",
          "Send us a sponsorship inquiry — choose “Partnership / Sponsorship” as the subject — and our team will follow up with the details.",
        ],
      },
      {
        title: "Booking Coming Soon",
        tone: "dark",
        body: [
          "Booking for the 6th Annual Conference & Retreat is not open yet.",
          "Booking details will be shared here as soon as they are available. In the meantime, keep an eye on our upcoming events.",
        ],
      },
    ],
  },

  closing: {
    title: "Booking Coming Soon",
    description:
      "Booking for the 6th Annual Conference & Retreat will open soon. Interested in sponsoring? Send us an inquiry today.",
    cta: SPONSOR_INQUIRY,
    secondaryCta: { label: "See Upcoming Events", href: "/trips/upcoming-events" },
    image: PHOTOS.retreatGroupBlazers,
    eyebrow: "June 17–20, 2027 · New Orleans",
  },
};

export default function ConferencePage() {
  return <TripDetail trip={CONFERENCE} />;
}
