import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { PHOTOS } from "@/lib/images";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerLink } from "@/components/motion/Stagger";

/**
 * The next four dates, from the client's revision document. Kept in step with
 * `lib/trips.ts` — see the date note there.
 */
const EVENTS = [
  {
    id: "breast-cancer-walk",
    title: "Breast Cancer Walk",
    date: "Oct 17, 2026",
    location: "Atlanta, GA",
    image: PHOTOS.impactHandsUp,
    link: "/impact/service",
  },
  {
    id: "asha-dinner",
    title: "ASHA Convention Dinner",
    date: "Nov 20, 2026",
    location: "Indianapolis, IN",
    image: PHOTOS.retreatDinner,
    link: "/trips/upcoming-events",
  },
  {
    id: "ghana-sankofa-return",
    title: "Ghana: Sankofa Return",
    date: "Mar 10-22, 2027",
    location: "Accra, Ghana",
    image: PHOTOS.ghanaAirport,
    link: "/trips/ghana",
  },
  {
    id: "sixth-annual-retreat",
    title: "6th Annual Retreat",
    date: "Jun 17-20, 2027",
    location: "New Orleans, LA",
    image: PHOTOS.conferenceAudience,
    link: "/trips/conference",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="section bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-5">Join Us</p>
            <h2 className="display-2 text-foreground">Upcoming Events</h2>
          </div>

          <Link href="/trips" className="link-arrow group shrink-0">
            VIEW ALL EVENTS
            <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {EVENTS.map((event) => (
            /*
              `section-dark` rather than `card-sunken`.

              The card previously kept the page's light palette and made its
              text readable by bleaching the photo — `opacity-55` under a
              gradient fading to `--background`, which is beige in light mode.
              That is why the images looked washed out: the scrim was the same
              colour as the page, so it lifted the photo toward the background
              instead of separating it from the text.

              `section-dark` is the site's existing scope for content sitting
              on a photograph. It swaps `--foreground`, `--muted`, `--border`
              and `--primary` to the dark set in *both* themes, so the card
              reads white-on-gold over the image either way and the photograph
              can run at full strength underneath.
            */
            <StaggerLink
              key={event.id}
              href={event.link}
              className="card card-hover section-dark group relative isolate flex h-75 flex-col justify-end overflow-hidden p-6"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={event.image}
                alt=""
                loading="lazy"
                className="photo photo-hover-lift absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
              />
              {/*
                A black scrim, not a `--background` one. Anchored at the bottom
                where the text sits and clearing to transparent at the top, so
                the upper two-thirds of the photograph is unobstructed.

                Weighted for the worst case — white text over the brightest
                pixel a photo can have: at 90% black that is 15:1, and at the
                55% midpoint, where the heading sits, still above 10:1.
              */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-linear-to-t from-black/90 via-black/55 to-transparent"
              />

              <span className="chip mb-4 self-start">
                <Calendar className="h-3 w-3 text-primary" aria-hidden="true" />
                {event.date}
              </span>

              <h3 className="mb-2 font-serif text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                {event.title}
              </h3>

              <p className="flex items-center gap-1.5 text-sm font-medium text-muted">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                {event.location}
              </p>
            </StaggerLink>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
