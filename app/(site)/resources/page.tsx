import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Heart, Library } from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import PhotoCard from "@/components/ui/PhotoCard";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PHOTOS } from "@/lib/images";

/**
 * What the Resources section actually holds today: the library (Nancy's
 * clinical guides and Dr. Altidor's parent resources) and the free student
 * sessions. Cards rather than the generic section hub, so each gets a photo.
 */
const PICKS = [
  {
    icon: Library,
    title: "Resource Library",
    body: "Practical guides for Black rehabilitation professionals and students, collected in one place.",
    href: "/resources/library",
    cta: "Browse the library",
    image: PHOTOS.conferencePresentation,
  },
  {
    icon: BookOpen,
    title: "Clinical Guides",
    body: "Practical guides from Nancy Yamoah, published through LovelyyOT, her own store.",
    href: "/resources/library#clinical-guides",
    cta: "See the guides",
    image: PHOTOS.speakingNancyWagmc,
    imagePosition: "center 25%",
  },
  {
    icon: Heart,
    title: "For Parents & Families",
    body: "Dr. Chauntel Altidor's support for parents of neurodivergent children, through OT with Faith.",
    href: "/resources/library#parents",
    cta: "See parent resources",
    image: PHOTOS.teamChauntel,
    imagePosition: "center 25%",
  },
  {
    icon: GraduationCap,
    title: "Black in Rehab University",
    body: "Free monthly virtual sessions for OT, PT, and SLP students.",
    href: "/community/students",
    cta: "Explore BIR University",
    image: PHOTOS.studentsAwards,
    imagePosition: "center 30%",
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/resources"
        crumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
        title="Resources &"
        highlight="Tools"
        description="Curated content to help you grow as a professional, lead with purpose, and serve your community with excellence."
        image={PHOTOS.studentsLectureHall}
        imagePosition="center 60%"
        cta={{ label: "BROWSE THE LIBRARY", href: "/resources/library" }}
      />

      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-5">In This Section</p>
            <h2 className="display-2 text-foreground">Learn, Grow &amp; Lead</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Guides from our founders and free sessions for students — here is
              what is available so far.
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PICKS.map((pick) => (
              <StaggerItem key={pick.title} className="flex">
                <PhotoCard
                  image={pick.image}
                  imagePosition={pick.imagePosition}
                  icon={pick.icon}
                  title={pick.title}
                  href={pick.href}
                  cta={pick.cta}
                  imageClassName="h-44"
                >
                  {pick.body}
                </PhotoCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <PhotoSplitBand image={PHOTOS.retreatGroupOutdoors} imageSide="left">
        <p className="eyebrow eyebrow-on-dark mb-5">Get Involved</p>
        <h2 className="display-2 text-white">Stay Connected</h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
          New guides and resources are added as they are ready. Find a way to take part in the community.
        </p>
        <Link href="/get-involved" className="btn btn-primary btn-lg group mt-9">
          GET INVOLVED <ArrowRight className="btn-arrow h-5 w-5" />
        </Link>
      </PhotoSplitBand>
    </div>
  );
}
