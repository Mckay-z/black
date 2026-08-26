import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Coffee,
  MapPin,
  MessagesSquare,
  Users,
  UserPlus,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

const EVENT_TYPES = [
  {
    icon: <Coffee className="w-6 h-6 text-primary" />,
    title: "Coffee & Connection",
    desc: "Low-key morning meetups for clinicians in the same city. No agenda beyond good conversation.",
  },
  {
    icon: <MessagesSquare className="w-6 h-6 text-primary" />,
    title: "Clinical Roundtables",
    desc: "Case discussions and practice-sharing among therapists working in the same setting.",
  },
  {
    icon: <UserPlus className="w-6 h-6 text-primary" />,
    title: "Student Mixers",
    desc: "Local programs and working clinicians in one room, so students meet mentors early.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Service Days",
    desc: "Half-day community screenings and health fairs organised by the local chapter.",
  },
];

const UPCOMING = [
  { city: "Houston, TX", event: "Ambassador Meetup", date: "July 26, 2025", image: PHOTOS.conferenceTableTalk },
  { city: "Atlanta, GA", event: "Clinical Roundtable", date: "August 9, 2025", image: PHOTOS.conferencePanel },
  { city: "Chicago, IL", event: "Student Mixer", date: "August 23, 2025", image: PHOTOS.studentsLectureHall },
  { city: "New York, NY", event: "Coffee & Connection", date: "September 6, 2025", image: PHOTOS.conferenceNetworking },
  { city: "Los Angeles, CA", event: "Community Service Day", date: "September 13, 2025", image: PHOTOS.impactVolunteerChildren },
  { city: "Washington, DC", event: "Clinical Roundtable", date: "September 27, 2025", image: PHOTOS.conferencePresentation },
];

const HOST_STEPS = [
  { step: "01", title: "Tell us your city", desc: "Send a short note about where you are and the kind of gathering you have in mind." },
  { step: "02", title: "We help you plan", desc: "You get a host guide, a budget contribution, and help finding a venue." },
  { step: "03", title: "We spread the word", desc: "Your event goes on our calendar and out to every member in your metro area." },
];

export default function LocalEventsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Experiences", href: "/experiences" },
          { label: "Local Events" },
        ]}
        title="Local"
        highlight="Events"
        description="The movement lives in cities. Meetups, roundtables, student mixers, and service days hosted by members and ambassadors across the country."
        image={PHOTOS.retreatGroupOutdoors}
        cta={{ label: "HOST AN EVENT", href: "/contact" }}
      />

      {/* Types */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="What We Run"
            title="Four Kinds of Gathering"
            description="Local events are deliberately small and easy to say yes to. Most take under three hours."
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {EVENT_TYPES.map((type) => (
              <div
                key={type.title}
                className="bg-surface border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {type.icon}
                </div>
                <h3 className="font-bold text-foreground mb-3">{type.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="On the Calendar"
            title="Coming to a City Near You"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UPCOMING.map((item) => (
              <div
                key={`${item.city}-${item.date}`}
                className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                <FillerImage
                  src={item.image}
                  alt={`${item.event} in ${item.city}`}
                  wrapperClassName="h-40"
                  zoomOnHover
                  overlay="soft"
                />
                <div className="p-7">
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
                    {item.event}
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    {item.city}
                  </h3>
                  <p className="text-muted text-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary shrink-0" />
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-muted text-sm mt-10">
            Not seeing your city?{" "}
            <Link href="/contact" className="text-primary font-semibold hover:text-primary-hover transition-colors">
              Tell us where you are
            </Link>{" "}
            and we will work on it.
          </p>
        </div>
      </section>

      {/* Host */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="Host One Yourself"
                title="You Do Not Need Permission to Start Something"
              />
              <p className="text-muted text-lg leading-relaxed mb-10">
                Most of our city gatherings started because one member decided to invite five
                people to dinner. If you are willing to host, we will back you with a guide, a
                budget, and our whole mailing list.
              </p>
              <div className="space-y-6">
                {HOST_STEPS.map((item) => (
                  <div key={item.step} className="flex gap-5">
                    <span className="text-2xl font-serif font-bold text-primary shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/about/ambassadors"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors mt-10"
              >
                Learn about becoming an ambassador <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <FillerImage
              src={PHOTOS.conferenceHug}
              alt="Members gathered at a local event"
              wrapperClassName="aspect-4/3 rounded-3xl group"
              zoomOnHover
            />
          </div>
        </div>
      </section>

      <CTABand
        title="Bring Us to Your City"
        description="Whether you want to host, help, or just show up, we would like to hear from you."
        cta={{ label: "GET IN TOUCH", href: "/contact" }}
        secondaryCta={{ label: "See All Events", href: "/experiences/upcoming-events" }}
      />
    </div>
  );
}
