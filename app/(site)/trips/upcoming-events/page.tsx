import Link from "next/link";
import { ArrowRight, Calendar, Clock, Globe2, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

type EventItem = {
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  format: "In Person" | "Virtual" | "Hybrid";
  image: string;
  /**
   * The event's own page, where it has one. Some entries on the client's
   * calendar — a walk, a convention dinner — have nothing to link to yet, so
   * those cards render as plain containers rather than links to nowhere.
   */
  href?: string;
  description: string;
};

/**
 * The calendar, from the "Events updates" list in the client's revision
 * document. See the date note in `lib/trips.ts`: the document gives day and
 * month, the years here are the next occurrence of each.
 */
const EVENTS: EventItem[] = [
  {
    title: "Breast Cancer Walk",
    category: "Community",
    date: "October 17, 2026",
    time: "Morning",
    location: "Atlanta, Georgia",
    format: "In Person",
    image: PHOTOS.impactHandsUp,
    href: "/impact/service",
    description:
      "Our community walks together in Atlanta to raise funds and awareness for breast cancer.",
  },
  {
    title: "ASHA Convention Dinner",
    category: "Community",
    date: "November 20, 2026",
    time: "Evening",
    location: "Indianapolis, Indiana",
    format: "In Person",
    image: PHOTOS.retreatDinner,
    description:
      "Our annual dinner for Black speech-language pathologists attending the ASHA Convention.",
  },
  {
    title: "Ghana: Sankofa Return",
    category: "Global Trip",
    date: "March 10–22, 2027",
    time: "Full program",
    location: "Accra & Cape Coast, Ghana",
    format: "In Person",
    image: PHOTOS.ghanaAirport,
    href: "/trips/ghana#sankofa-return",
    description:
      "Clinical education, community engagement, and cultural exchange alongside our partners in West Africa.",
  },
  {
    title: "6th Annual Retreat",
    category: "Conference",
    date: "June 17–20, 2027",
    time: "Full program",
    location: "New Orleans, Louisiana",
    format: "In Person",
    image: PHOTOS.conferenceAudience,
    href: "/trips/conference",
    description:
      "Four days of keynotes, continuing education, and the largest gathering of Black rehabilitation professionals in the country.",
  },
  {
    title: "Ghana Retreat 2.0",
    category: "Retreat",
    date: "September 2027",
    time: "Full program",
    location: "Ghana",
    format: "In Person",
    image: PHOTOS.ghanaBeach,
    href: "/trips/ghana#ghana-retreat-2",
    description:
      "A second Ghana gathering built around rest and restoration rather than clinical service.",
  },
  {
    title: "Ambassador Meetups",
    category: "Local",
    date: "Year-round, monthly",
    time: "Evenings",
    location: "Cities across the U.S.",
    format: "In Person",
    image: PHOTOS.conferenceTableTalk,
    href: "/trips/ambassador-meetups",
    description:
      "An evening of food, conversation, and connection with the rehabilitation community nearest you.",
  },
];

const FORMAT_STYLES: Record<EventItem["format"], string> = {
  "In Person": "bg-primary/10 text-primary",
  Virtual: "bg-secondary/10 text-secondary dark:bg-primary/10 dark:text-primary",
  Hybrid: "bg-accent/15 text-primary",
};

/**
 * A card is a link when the event has a page, and a plain container when it
 * does not. Two wrappers rather than one because the featured card and the
 * grid cards carry different classes; the bodies stay inline as they were.
 */
function FeaturedWrapper({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  const className =
    "grid grid-cols-1 lg:grid-cols-2 card rounded-3xl overflow-hidden";

  return href ? (
    <Link href={href} className={`group ${className} card-hover`}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
}

function CardWrapper({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  const className = "card card-sunken overflow-hidden flex flex-col";

  return href ? (
    <Link href={href} className={`group ${className} card-hover`}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
}

export default function UpcomingEventsPage() {
  const [featured, ...rest] = EVENTS;

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/trips/upcoming-events"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Trips", href: "/trips" },
          { label: "Upcoming Events" },
        ]}
        title="Upcoming"
        highlight="Events"
        description="Conferences, retreats, global experiences, and local meetups. Everything on the Black in Rehab calendar, in one place."
        image={PHOTOS.conferenceSession}
      />

      {/* Featured */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading eyebrow="Next Up" title="First on the Calendar" className="mb-12" />
          {/* An event with no page of its own renders as a plain container.
              A card that looks clickable and goes nowhere is the worse of the
              two failures, so both branches share `FeaturedBody` below. */}
          <FeaturedWrapper href={featured.href}>
            <FillerImage
              src={featured.image}
              alt={featured.title}
              wrapperClassName="h-64 lg:h-full min-h-72"
              zoomOnHover
            />
            <div className="p-10 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">
                  {featured.category}
                </span>
                <span
                  className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${FORMAT_STYLES[featured.format]}`}
                >
                  {featured.format}
                </span>
              </div>
              <h3 className="display-2 text-foreground mb-4 group-hover:text-primary transition-colors">
                {featured.title}
              </h3>
              <p className="text-muted leading-relaxed mb-8">{featured.description}</p>
              <div className="flex flex-wrap gap-6 text-sm text-muted mb-8">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" /> {featured.date}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> {featured.location}
                </span>
              </div>
              {featured.href && (
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  View event details <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </div>
          </FeaturedWrapper>
        </div>
      </section>

      {/* The rest */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="The Calendar"
            title="Everything Else on the Books"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((event) => (
              <CardWrapper key={event.title} href={event.href}>
                <FillerImage
                  src={event.image}
                  alt={event.title}
                  wrapperClassName="h-44"
                  zoomOnHover
                  overlay="soft"
                />
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-primary text-xs font-bold uppercase tracking-widest">
                      {event.category}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${FORMAT_STYLES[event.format]}`}
                    >
                      {event.format}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed flex-1 mb-6">
                    {event.description}
                  </p>
                  <div className="space-y-2 text-xs text-muted">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-primary" /> {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-primary" /> {event.time}
                    </span>
                    <span className="flex items-center gap-2">
                      {event.format === "Virtual" ? (
                        <Globe2 className="w-3.5 h-3.5 text-primary" />
                      ) : (
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                      )}
                      {event.location}
                    </span>
                  </div>
                </div>
              </CardWrapper>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Never Miss a Date"
        description="Members hear about new events, early-bird pricing, and travel deposits before anyone else."
        cta={{ label: "JOIN THE MOVEMENT", href: "/get-involved" }}
        secondaryCta={{ label: "Contact Our Events Team", href: "/contact" }}
      />
    </div>
  );
}
