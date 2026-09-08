import { HeartHandshake, GraduationCap, Globe2, HandHeart } from "lucide-react";

import { PHOTOS } from "@/lib/images";

/**
 * The four mission pillars.
 *
 * Labels and the globe icon come from the client's revision document; the
 * one-line descriptions are ours, since the document supplied headings only.
 *
 * Each card leads with a photograph — the same request that drove the Impact
 * page rewrite. The icon tile straddles the seam between photo and body, so
 * it has to be a sibling of the image wrapper rather than a child: that
 * wrapper needs `overflow-hidden` for the hover zoom, which would otherwise
 * clip the tile in half.
 */
const PILLARS = [
  {
    icon: HeartHandshake,
    title: "Empowering Rehab Professionals",
    description:
      "Equipping Black rehabilitation professionals to lead with excellence and build lasting careers.",
    image: PHOTOS.conferenceGroupBranded,
  },
  {
    icon: GraduationCap,
    title: "Inspiring Students",
    description:
      "Mentorship, scholarships, and representation for the next generation entering the field.",
    image: PHOTOS.studentsLectureHall,
  },
  {
    icon: Globe2,
    title: "Global Impact",
    description:
      "Clinical and cultural exchange connecting professionals across the African Diaspora.",
    image: PHOTOS.ghanaAirport,
  },
  {
    icon: HandHeart,
    title: "Serving Communities",
    description:
      "Free rehabilitation services, education, and resources for the communities we serve.",
    image: PHOTOS.impactVolunteerChildren,
  },
];

export default function Mission() {
  return (
    <section className="section bg-glow bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="reveal mx-auto mb-16 max-w-3xl text-center">
          <p className="eyebrow mb-5">Our Mission in Action</p>
          <h2 className="display-2 text-foreground">
            We Create Opportunities. We Inspire Leaders. We Change Lives.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Uniting rehabilitation professionals, students, and partners across the
            globe to transform lives through education, mentorship, and service.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ icon: Icon, title, description, image }) => (
            <div
              key={title}
              className="card card-hover reveal group relative flex flex-col overflow-hidden"
            >
              <div className="relative h-44 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className="photo photo-hover-lift h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              <span className="icon-tile absolute left-1/2 top-44 -translate-x-1/2 -translate-y-1/2 border-border bg-surface">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>

              <div className="flex flex-1 flex-col p-8 pt-12 text-center">
                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
