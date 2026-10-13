import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, FileCheck, Megaphone, Scaling, Users } from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import PhotoCard from "@/components/ui/PhotoCard";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Advocacy & Equity | Black in Rehab Foundation",
  description:
    "We champion policies and practices that advance health equity and better outcomes for Black communities and marginalized populations.",
};

const INITIATIVES = [
  {
    title: "Health Equity Policy",
    description: "Advocating for policies that expand access to rehabilitation services in underserved communities.",
    icon: Scaling,
    image: PHOTOS.impactAdvocacySpeaker,
  },
  {
    title: "Workforce Diversity",
    description: "Championing representation of Black professionals in PT, OT, and SLP programs and leadership roles.",
    icon: Users,
    image: PHOTOS.studentsLectureHall,
  },
  {
    title: "Community Awareness",
    description: "Raising public awareness about rehabilitation access, health disparities, and preventive care.",
    icon: Megaphone,
    image: PHOTOS.pressGhoneTv,
  },
  {
    title: "Legislative Engagement",
    description: "Partnering with policymakers and professional associations to advance equitable healthcare legislation.",
    icon: FileCheck,
    image: PHOTOS.conferencePanel,
  },
];

const FOCUS_AREAS = [
  "Expanding insurance coverage for rehabilitation services",
  "Increasing diversity in healthcare education pipelines",
  "Addressing social determinants of health in Black communities",
  "Supporting culturally competent clinical practice standards",
  "Amplifying Black voices in professional associations",
];

export default function AdvocacyPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/impact/advocacy"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "BIR CARES", href: "/impact" },
          { label: "Advocacy" },
        ]}
        title="Advocacy &"
        highlight="Equity"
        description="We champion policies and practices that advance health equity and better outcomes for Black communities and marginalized populations."
        image={PHOTOS.impactChildren}
      />

      {/* Mission, beside a large photo */}
      <section className="section bg-background">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Reveal direction="left" className="mx-auto w-full max-w-sm lg:max-w-none">
            <div className="img-filler aspect-4/5 overflow-hidden rounded-t-[999px] rounded-b-[var(--radius-panel)] shadow-float ring-1 ring-primary/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTOS.pressStarrFm}
                alt="The Black in Rehab team in studio at Starr 103.5 FM"
                loading="lazy"
                className="photo h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal>
            <p className="eyebrow mb-5">Our Mission</p>
            <p className="display-3 leading-relaxed text-foreground">
              Systemic change requires bold advocacy. We use our collective voice to push for a rehabilitation profession — and a healthcare system — that works for everyone.
            </p>
            <ul className="mt-10 space-y-3">
              {FOCUS_AREAS.map((area) => (
                <li key={area} className="card flex items-start gap-3 rounded-xl p-4">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm text-foreground">{area}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Initiatives */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <SectionHeading eyebrow="What We Push For" title="Advocacy Initiatives" className="mb-12" />
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INITIATIVES.map((item) => (
              <StaggerItem key={item.title} className="flex">
                <PhotoCard image={item.image} icon={item.icon} title={item.title} imageClassName="h-44">
                  {item.description}
                </PhotoCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <PhotoSplitBand image={PHOTOS.impactHandsUp} imageSide="left">
        <p className="eyebrow eyebrow-on-dark mb-5">Get Involved</p>
        <h2 className="display-2 text-white">Join Our Advocacy Efforts</h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
          Find the way to take part that fits you — as a student, a professional, a partner, or a sponsor.
        </p>
        <Link href="/get-involved" className="btn btn-primary btn-lg group mt-9">
          GET INVOLVED <ArrowRight className="btn-arrow h-5 w-5" />
        </Link>
      </PhotoSplitBand>
    </div>
  );
}
