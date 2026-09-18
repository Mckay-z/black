
import { PHOTOS } from "@/lib/images";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

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
    title: "Empowering Rehab Professionals",
    description:
      "Equipping Black rehabilitation professionals to lead with excellence and build lasting careers.",
    image: PHOTOS.conferenceGroupBranded,
  },
  {
    title: "Inspiring Students",
    description:
      "Mentorship, scholarships, and representation for the next generation entering the field.",
    image: PHOTOS.studentsLectureHall,
    /*
      The only portrait photograph in this row, and the library has no
      landscape one of students — both student frames are upright. Swapping in
      a landscape picture of something else would align the row at the cost of
      the card no longer showing students, so the crop is moved instead.

      Not `object-top`: the top third of this frame is the lecture theatre's
      ceiling, so pinning it there filled the card with ceiling tiles. The
      group sits between 46% and 80% of the way down, and at this slot's
      proportions 74% is what centres the band on them.
    */
    focus: "object-[center_74%]",
  },
  {
    title: "Global Impact",
    description:
      "Clinical and cultural exchange connecting professionals across the African Diaspora.",
    // Not the airport welcome: that photograph is the Sankofa Return trip's
    // own, and it is already on this page in Upcoming Events.
    image: PHOTOS.ghanaKente,
  },
  {
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
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <p className="eyebrow mb-5">Our Mission in Action</p>
          <h2 className="display-2 text-foreground">
            We Create Opportunities. We Inspire Leaders. We Change Lives.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Uniting rehabilitation professionals, students, and partners across the
            globe to transform lives through education, mentorship, and service.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ title, description, image, focus }) => (
            <StaggerItem
              key={title}
              className="section-dark card card-hover group relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt=""
                loading="lazy"
                className={`photo absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06] ${
                  focus ?? ""
                }`}
              />

              {/*
                Weighted to the bottom, where the words are. A full-frame scrim
                would grey the whole photograph to solve a problem that only
                exists behind the text.
              */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-linear-to-t from-black/90 via-black/45 via-45% to-black/5"
              />

              <div className="p-7">
                {/*
                  A short gold rule in place of the icon badge that used to sit
                  here. It marks the card without putting the same glyph on
                  every one of them.
                */}
                <span
                  aria-hidden="true"
                  className="mb-5 block h-0.5 w-10 rounded-full bg-primary transition-all duration-300 group-hover:w-16"
                />
                <h3 className="font-serif text-xl font-bold leading-snug text-white">
                  {title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/75">
                  {description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
