import Link from "next/link";
import { ArrowRight, Users, Compass, Globe2, MessageSquare } from "lucide-react";
import { PHOTOS } from "@/lib/images";

const EXPERIENCES = [
  {
    id: "conferences",
    title: "Conferences",
    description: "Connect, learn, and grow with leaders in the field.",
    Icon: Users,
    image: PHOTOS.conferenceAudience,
    link: "/experiences/conference",
  },
  {
    id: "retreats",
    title: "Retreats",
    description: "Renew your mind, body, and purpose.",
    Icon: Compass,
    image: PHOTOS.retreatBeachYoga,
    link: "/experiences/retreats",
  },
  {
    id: "global",
    title: "Global Experiences",
    description: "Serve, learn, and immerse yourself in new cultures.",
    Icon: Globe2,
    image: PHOTOS.ghanaAirport,
    link: "/experiences/global",
  },
  {
    id: "community",
    title: "Community Events",
    description: "Local meetups, ambassador cities, and community gatherings.",
    Icon: MessageSquare,
    image: PHOTOS.conferenceTableTalk,
    link: "/experiences/community",
  },
];

export default function FeaturedExperiences() {
  return (
    <section className="section bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="reveal mx-auto mb-14 max-w-3xl text-center">
          <p className="eyebrow mb-5">What We Do</p>
          <h2 className="display-2 text-foreground">
            Programs &amp; Experiences That Create Lasting Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {EXPERIENCES.map(({ id, title, description, Icon, image, link }) => (
            <Link
              key={id}
              href={link}
              className="card card-hover reveal group flex flex-col overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className="photo photo-hover-lift h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                {/* The icon straddles the seam between photo and body. It has
                    to be a sibling of the image wrapper rather than a child:
                    that wrapper needs overflow-hidden for the hover zoom,
                    which would clip the tile in half. */}
              </div>

              <span className="icon-tile absolute left-1/2 top-48 -translate-x-1/2 -translate-y-1/2 border-border bg-surface">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>

              <div className="flex flex-1 flex-col justify-between p-8 pt-12 text-center">
                <div>
                  <h3 className="mb-3 font-serif text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{description}</p>
                </div>

                <span className="mx-auto mt-6 inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors group-hover:text-primary">
                  Explore
                  <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href="/experiences" className="btn btn-outline btn-lg">
            EXPLORE ALL PROGRAMS &amp; EXPERIENCES
          </Link>
        </div>
      </div>
    </section>
  );
}
