import Link from "next/link";
import { ArrowRight, Globe2, Sparkles, HeartHandshake, Zap, Target } from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import PhotoCard from "@/components/ui/PhotoCard";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PHOTOS } from "@/lib/images";

const VALUES = [
  {
    icon: Globe2,
    title: "We Believe",
    description: "the greatest impact is never created alone.",
    image: PHOTOS.conferenceGroupBranded,
  },
  {
    icon: Sparkles,
    title: "We Dream",
    description: "boldly and build community intentionally.",
    image: PHOTOS.retreatBeachYogaGroup,
  },
  {
    icon: HeartHandshake,
    title: "We Serve",
    description: "with excellence through rehabilitation, service, and purpose.",
    image: PHOTOS.impactTherapy,
  },
  {
    icon: Zap,
    title: "We Empower",
    description: "the next generation of rehabilitation professionals.",
    image: PHOTOS.studentsLectureHall,
  },
  {
    icon: Target,
    title: "We Leave",
    description: "every community better than we found it.",
    image: PHOTOS.impactBackpacks,
  },
];

const STATEMENTS = [
  {
    label: "Our Mission",
    text: "Black in Rehab equips rehabilitation professionals to lead with excellence, serve with purpose, and create lasting impact worldwide.",
    image: PHOTOS.retreatGroupBlazers,
  },
  {
    label: "Our Vision",
    text: "We envision a global community where rehabilitation professionals discover purpose, develop as leaders, serve with excellence, and leave every community better than they found it.",
    image: PHOTOS.ghanaKente,
  },
];

export default function MissionVisionValuesPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/about/mission-vision-values"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Mission, Vision & Values" },
        ]}
        title="Mission, Vision"
        highlight="& Values"
        description="These beliefs guide every program, every partnership, and every experience we create."
        image={PHOTOS.ghanaCertificates}
      />

      {/* Mission and vision, each over a photograph. */}
      <section className="section bg-background">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2">
          {STATEMENTS.map((statement) => (
            <Reveal key={statement.label} className="card flex h-full flex-col overflow-hidden">
              <div className="img-filler h-56 overflow-hidden md:h-64">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={statement.image}
                  alt=""
                  loading="lazy"
                  className="photo h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 p-8 md:p-12">
                <h2 className="eyebrow mb-6">{statement.label}</h2>
                <p className="font-serif text-2xl font-bold leading-tight text-foreground md:text-3xl">
                  {statement.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Core beliefs */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-5">What Drives Us</p>
            <h2 className="display-2 text-foreground">Our Core Beliefs</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              These beliefs guide every program, every partnership, and every experience we create.
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => (
              <StaggerItem key={value.title} className="flex">
                <PhotoCard image={value.image} icon={value.icon} title={value.title}>
                  <span className="text-base">{value.description}</span>
                </PhotoCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <PhotoSplitBand image={PHOTOS.foundersStanding} imagePosition="center 20%" imageSide="right">
        <p className="eyebrow eyebrow-on-dark mb-5">The People Behind It</p>
        <h2 className="display-2 text-white">Meet the Visionaries</h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
          Nancy Yamoah and Dr. Chauntel Altidor — two friends who believed in the power of community, representation, and service.
        </p>
        <Link href="/about/founders" className="btn btn-primary btn-lg group mt-9">
          MEET THE FOUNDERS <ArrowRight className="btn-arrow h-5 w-5" />
        </Link>
      </PhotoSplitBand>
    </div>
  );
}
