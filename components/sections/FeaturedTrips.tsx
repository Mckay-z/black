import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PHOTOS } from "@/lib/images";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerLink } from "@/components/motion/Stagger";

const TRIPS = [
  {
    id: "conferences",
    title: "Conferences",
    description: "Connect, learn, and grow with leaders in the field.",
    image: PHOTOS.conferenceSession,
    link: "/trips/conference",
  },
  {
    id: "global",
    title: "Global Trips",
    description: "Serve, learn, and immerse yourself in new cultures.",
    image: PHOTOS.ghanaCastleGroup,
    link: "/trips/global",
  },
  {
    id: "community",
    title: "Community Events",
    description: "Local meetups, ambassador cities, and community gatherings.",
    image: PHOTOS.retreatGroupOutdoors,
    // Was /trips/community, which 404s — there has never been a page at
    // that path. Ambassador Meetups is what the card describes.
    link: "/trips/ambassador-meetups",
  },
];

export default function FeaturedTrips() {
  return (
    <section className="section bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <p className="eyebrow mb-5">What We Do</p>
          <h2 className="display-2 text-foreground">
            Trips &amp; Programs That Create Lasting Impact
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TRIPS.map(({ id, title, description, image, link }) => (
            <StaggerLink
              key={id}
              href={link}
              className="section-dark card card-hover group relative isolate flex min-h-[28rem] flex-col justify-end overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt=""
                loading="lazy"
                className="photo absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-linear-to-t from-black/90 via-black/45 via-45% to-black/5"
              />

              <div className="p-8">
                {/* The gold rule replaces the icon badge that used to straddle
                    the seam between photo and panel — there is no seam now. */}
                <span
                  aria-hidden="true"
                  className="mb-5 block h-0.5 w-10 rounded-full bg-primary transition-all duration-300 group-hover:w-16"
                />

                <h3 className="font-serif text-2xl font-bold leading-snug text-white">
                  {title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/75">
                  {description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors group-hover:text-primary">
                  Explore
                  <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </StaggerLink>
          ))}
        </Stagger>

        <div className="mt-14 text-center">
          <Link href="/trips" className="btn btn-outline btn-lg">
            EXPLORE ALL TRIPS
          </Link>
        </div>
      </div>
    </section>
  );
}
