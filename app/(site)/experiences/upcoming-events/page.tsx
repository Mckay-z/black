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
  href: string;
  description: string;
};

const EVENTS: EventItem[] = [
  {
    title: "Annual Conference 2025",
    category: "Conference",
    date: "June 12–14, 2025",
    time: "8:00 AM – 6:00 PM",
    location: "Atlanta, Georgia",
    format: "Hybrid",
    image: PHOTOS.conferenceAudience,
    href: "/experiences/conference",
    description:
      "Three days of keynotes, continuing education, and the largest gathering of Black rehabilitation professionals in the country.",
  },
  {
    title: "Ghana Global Experience",
    category: "Global Experience",
    date: "October 10–17, 2025",
    time: "Full program",
    location: "Accra, Ghana",
    format: "In Person",
    image: PHOTOS.ghanaAirport,
    href: "/experiences/ghana",
    description:
      "A week of service, cultural immersion, and professional growth alongside our partners in West Africa.",
  },
  {
    title: "Jamaica Global Experience",
    category: "Global Experience",
    date: "August 15–23, 2025",
    time: "Full program",
    location: "Ocho Rios, Jamaica",
    format: "In Person",
    image: PHOTOS.retreatBeachYogaGroup,
    href: "/experiences/jamaica",
    description:
      "Community clinics across three parishes, paired with two closing days of guided renewal.",
  },
  {
    title: "Leadership Retreat",
    category: "Retreat",
    date: "October 9–12, 2025",
    time: "Full program",
    location: "Atlanta, Georgia",
    format: "In Person",
    image: PHOTOS.conferencePresentation,
    href: "/experiences/leadership-retreats",
    description:
      "A four-day intensive for clinicians stepping into department, faculty, and ownership roles.",
  },
  {
    title: "Student Chapter Summit",
    category: "Student",
    date: "September 20, 2025",
    time: "10:00 AM – 4:00 PM ET",
    location: "Online",
    format: "Virtual",
    image: PHOTOS.studentsLectureHall,
    href: "/community/students",
    description:
      "Chapter leaders from PT, OT, and SLP programs nationwide meet to plan the academic year.",
  },
  {
    title: "Ambassador Meetup — Houston",
    category: "Local",
    date: "July 26, 2025",
    time: "6:30 PM – 9:00 PM CT",
    location: "Houston, Texas",
    format: "In Person",
    image: PHOTOS.conferenceTableTalk,
    href: "/experiences/ambassador-meetups",
    description:
      "An evening of food, conversation, and connection with the Houston rehabilitation community.",
  },
];

const FORMAT_STYLES: Record<EventItem["format"], string> = {
  "In Person": "bg-primary/10 text-primary",
  Virtual: "bg-secondary/10 text-secondary dark:bg-primary/10 dark:text-primary",
  Hybrid: "bg-accent/15 text-primary",
};

export default function UpcomingEventsPage() {
  const [featured, ...rest] = EVENTS;

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/experiences/upcoming-events"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Experiences", href: "/experiences" },
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
          <SectionHeading eyebrow="Next Up" title="Our Flagship Gathering" className="mb-12" />
          <Link
            href={featured.href}
            className="group grid grid-cols-1 lg:grid-cols-2 card rounded-3xl overflow-hidden card-hover"
          >
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
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                View event details <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
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
              <Link
                key={event.title}
                href={event.href}
                className="group card card-sunken overflow-hidden card-hover flex flex-col"
              >
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Never Miss a Date"
        description="Members hear about new events, early-bird pricing, and travel deposits before anyone else."
        cta={{ label: "JOIN THE MOVEMENT", href: "/join-the-movement" }}
        secondaryCta={{ label: "Contact Our Events Team", href: "/contact" }}
      />
    </div>
  );
}
