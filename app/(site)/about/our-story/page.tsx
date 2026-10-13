import Link from "next/link";
import { ArrowRight } from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import ArchPhoto from "@/components/about/ArchPhoto";
import Reveal from "@/components/motion/Reveal";
import { PHOTOS } from "@/lib/images";

/**
 * The story in three chapters, each beside a photograph. Rows alternate
 * sides on desktop; on a phone each chapter reads photo-then-text.
 */
const CHAPTERS = [
  {
    step: "01",
    title: "Our Beginning",
    subtitle: "Two Friends. One Vision.",
    body: [
      "Dr. Chauntel Altidor and Nancy Yamoah shared a passion for rehabilitation, leadership, and service. They saw the need for representation, connection, and access in the profession—and knew they could create something greater together.",
      "What began with conversations and a shared burden has grown into a global movement that empowers professionals, inspires students, and transforms communities.",
    ],
    image: PHOTOS.foundersPair,
    alt: "Founders Nancy Yamoah and Dr. Chauntel Altidor together",
    position: "center 25%",
    arch: true,
  },
  {
    step: "02",
    title: "Building the Foundation",
    subtitle: "Creating the Community We Needed",
    body: [
      "We realized that if we were looking for a community of Black rehabilitation professionals who were driven by excellence and service, others were too. We launched the first iteration of Black in Rehab to serve as a digital safe haven and professional network.",
    ],
    image: PHOTOS.conferenceCelebration,
    alt: "Black in Rehab community members celebrating together at a conference",
    position: "center",
    arch: false,
  },
  {
    step: "03",
    title: "Global Expansion",
    subtitle: "Healing Beyond Borders",
    body: [
      "Our mission couldn't be contained to just one city or country. We expanded our reach to include Global Experiences in Ghana and Jamaica, providing life-changing service opportunities and cultural immersion for our members while addressing health disparities internationally.",
    ],
    image: PHOTOS.ghanaAirport,
    alt: "Black in Rehab members arriving in Ghana",
    position: "center",
    arch: false,
  },
];

export default function OurStoryPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/about/our-story"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Our Story" },
        ]}
        title="A Purpose Born from"
        highlight="Passion."
        description="Black in Rehab was created to fill a gap, build a bridge, and spark a movement. What started as a vision between two friends has grown into a global community changing lives and strengthening communities worldwide."
        image={PHOTOS.ghanaLawn}
        imagePosition="60% center"
      />

      {CHAPTERS.map((chapter, index) => (
        <section
          key={chapter.step}
          className={`section ${index % 2 === 1 ? "bg-surface border-y border-border" : "bg-background"}`}
        >
          <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <Reveal
              direction={index % 2 === 1 ? "right" : "left"}
              className={`mx-auto w-full ${chapter.arch ? "max-w-sm lg:max-w-md" : ""} ${index % 2 === 1 ? "lg:order-2" : ""}`}
            >
              {chapter.arch ? (
                <ArchPhoto src={chapter.image} alt={chapter.alt} position={chapter.position} />
              ) : (
                <div className="img-filler relative aspect-4/3 overflow-hidden rounded-[var(--radius-panel)] shadow-float ring-1 ring-primary/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={chapter.image}
                    alt={chapter.alt}
                    loading="lazy"
                    className="photo photo-hover-lift h-full w-full object-cover"
                    style={{ objectPosition: chapter.position }}
                  />
                </div>
              )}
            </Reveal>

            <Reveal>
              <p className="font-serif text-5xl font-bold text-primary/30">{chapter.step}</p>
              <p className="eyebrow mt-4 mb-5">{chapter.subtitle}</p>
              <h2 className="display-2 text-foreground">{chapter.title}</h2>
              <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted">
                {chapter.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <PhotoSplitBand image={PHOTOS.ghanaBathOfReturn} imageSide="left">
        <p className="eyebrow eyebrow-on-dark mb-5">What Drives Us</p>
        <h2 className="display-2 text-white">Discover What Drives Us</h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
          The mission, vision, and beliefs that guide every program, every partnership, and every experience we create.
        </p>
        <Link href="/about/mission-vision-values" className="btn btn-primary btn-lg group mt-9">
          OUR MISSION, VISION &amp; VALUES <ArrowRight className="btn-arrow h-5 w-5" />
        </Link>
      </PhotoSplitBand>
    </div>
  );
}
