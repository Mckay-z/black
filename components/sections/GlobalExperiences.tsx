import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { PHOTOS } from "@/lib/images";

const DESTINATIONS = [
  {
    id: "ghana",
    title: "Ghana",
    subtitle: "West Africa",
    status: "Active",
    image: PHOTOS.ghanaAirport,
    link: "/experiences/ghana",
  },
  {
    id: "jamaica",
    title: "Jamaica",
    subtitle: "Caribbean",
    status: "Active",
    image: PHOTOS.retreatBeachYogaGroup,
    link: "/experiences/jamaica",
  },
  {
    id: "kenya",
    title: "Kenya",
    subtitle: "East Africa",
    status: "Coming Soon",
    image: PHOTOS.impactHandsUp,
    link: "#",
  },
  {
    id: "tanzania",
    title: "Tanzania",
    subtitle: "East Africa",
    status: "Coming Soon",
    image: PHOTOS.ghanaBeach,
    link: "#",
  },
];

/**
 * The destination cards.
 *
 * An active destination is a link; a "Coming Soon" one is a plain container,
 * because a card that looks clickable and goes nowhere is the more annoying
 * of the two failures. The two branches share `CardBody` so the treatment
 * cannot drift apart.
 */
function CardBody({
  destination,
}: {
  destination: (typeof DESTINATIONS)[number];
}) {
  const isActive = destination.status === "Active";

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={destination.image}
        alt=""
        loading="lazy"
        className="photo photo-hover-lift absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent" />

      <div className="relative flex h-full flex-col justify-between p-7">
        <div className="flex justify-end">
          {!isActive && <span className="chip chip-dark">Coming Soon</span>}
        </div>

        <div>
          <p className="mb-1 flex items-center gap-1.5 text-sm font-medium text-primary">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {destination.subtitle}
          </p>
          <h3 className="mb-4 font-serif text-3xl font-bold tracking-tight text-white">
            {destination.title}
          </h3>

          {isActive ? (
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-primary">
              Explore Destination
              <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
            </span>
          ) : (
            <span className="text-sm font-semibold text-white/50">
              Details Coming Soon
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default function GlobalExperiences() {
  return (
    <section className="section border-y border-border bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="reveal mb-14 max-w-3xl">
          <p className="eyebrow mb-5">Global Reach</p>
          <h2 className="display-2 text-foreground">Healing Beyond Borders</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Our international experiences combine professional development, cultural
            immersion, service, and unforgettable travel. Together, we strengthen
            rehabilitation around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {DESTINATIONS.map((destination) => {
            const shared =
              "group relative isolate h-100 overflow-hidden rounded-[var(--radius-card)] border border-border shadow-soft transition-[transform,box-shadow,border-color] duration-300";

            return destination.status === "Active" ? (
              <Link
                key={destination.id}
                href={destination.link}
                className={`${shared} reveal hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-float`}
              >
                <CardBody destination={destination} />
              </Link>
            ) : (
              <div key={destination.id} className={`${shared} reveal`}>
                <CardBody destination={destination} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
