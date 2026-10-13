import Link from "next/link";
import { ArrowRight } from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import PhotoCard from "@/components/ui/PhotoCard";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import ArchPhoto from "@/components/about/ArchPhoto";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { NAV_ICONS } from "@/components/navigation/SectionHub";
import { NAV_SECTIONS } from "@/lib/navigation";
import { PHOTOS } from "@/lib/images";

/**
 * A photo per About page for the section cards. Titles, descriptions and
 * icons come from `lib/navigation.ts`, so the cards always match the menu.
 * The founders' pair shots are only used on cards about the pair.
 */
const SECTION_PHOTOS: Record<string, { src: string; position?: string }> = {
  "/about/our-story": { src: PHOTOS.foundersPair, position: "center 25%" },
  "/about/mission-vision-values": { src: PHOTOS.ghanaCertificates },
  "/about/founders": { src: PHOTOS.foundersPortrait, position: "center 20%" },
  "/about/leadership": { src: PHOTOS.speakingTeamWagmc, position: "center 30%" },
  "/about/ambassadors": { src: PHOTOS.retreatGroupBlazers },
  "/about/media-press": { src: PHOTOS.pressStarrFm, position: "center 70%" },
};

const ABOUT = NAV_SECTIONS.find((section) => section.href === "/about");

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/about"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        title="About"
        highlight="Black in Rehab"
        description="We are the global leader empowering Black rehabilitation professionals to transform lives and strengthen communities worldwide."
        image={PHOTOS.ghanaCastleGroup}
        imagePosition="60% center"
        cta={{ label: "OUR STORY", href: "/about/our-story" }}
        secondaryCta={{ label: "Meet the Founders", href: "/about/founders" }}
      />

      {/* Mission, with the founders beside it. */}
      <section className="section bg-background">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Reveal direction="left" className="mx-auto w-full max-w-sm lg:max-w-none">
            <ArchPhoto
              src={PHOTOS.foundersStanding}
              alt="Black in Rehab founders Nancy Yamoah and Dr. Chauntel Altidor"
              position="center 20%"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow mb-5">Our Mission</p>
            <h2 className="display-2 text-foreground">
              Lead with excellence. Serve with purpose.
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-muted">
              Black in Rehab equips rehabilitation professionals to lead with excellence, serve with purpose, and create lasting impact worldwide.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              What started as a vision between two friends has grown into a global community changing lives and strengthening communities worldwide.
            </p>
            <Link href="/about/mission-vision-values" className="link-arrow group mt-8">
              Mission, Vision &amp; Values
              <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* The section's pages, as photo cards. */}
      {ABOUT && (
        <section className="section bg-surface border-y border-border">
          <div className="container mx-auto px-4 md:px-6">
            <Reveal className="mb-12 max-w-2xl">
              <p className="eyebrow mb-5">In This Section</p>
              <h2 className="display-2 text-foreground">Get to Know Us</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                {ABOUT.description}
              </p>
            </Reveal>
            <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ABOUT.children.map((child) => {
                const photo = SECTION_PHOTOS[child.href] ?? { src: PHOTOS.conferenceGroupBranded };
                return (
                  <StaggerItem key={child.href} className="flex">
                    <PhotoCard
                      image={photo.src}
                      imagePosition={photo.position}
                      icon={NAV_ICONS[child.icon]}
                      title={child.label}
                      href={child.href}
                      imageClassName="h-52"
                    >
                      {child.description}
                    </PhotoCard>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </section>
      )}

      <PhotoSplitBand image={PHOTOS.retreatGroupOutdoors} imageSide="left">
        <p className="eyebrow eyebrow-on-dark mb-5">Join Us</p>
        <h2 className="display-2 text-white">Ready to Join Us?</h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
          Become part of a community that is changing rehabilitation — and the world.
        </p>
        <Link href="/get-involved" className="btn btn-primary btn-lg group mt-9">
          GET INVOLVED <ArrowRight className="btn-arrow h-5 w-5" />
        </Link>
      </PhotoSplitBand>
    </div>
  );
}
