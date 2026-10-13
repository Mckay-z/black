import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle, GraduationCap, HeartHandshake } from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import PhotoCard from "@/components/ui/PhotoCard";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Scholarships | Black in Rehab Foundation",
  description:
    "Scholarships for Black students in accredited PT, OT, and SLP programs — what each award covers and what it takes to qualify.",
};

/**
 * Applications are closed, at the client's instruction in their revision
 * document. The page still describes each award and what it takes to qualify
 * — a student planning ahead needs that — but nothing here invites an
 * application that cannot be submitted.
 *
 * The 2025 deadlines the build shipped with are gone rather than rolled
 * forward: the client has not given the next round's dates. Put them back,
 * with `applicationsOpen` flipped to true, when they do.
 */
const APPLICATIONS_OPEN = false;

const SCHOLARSHIPS = [
  {
    name: "Black in Rehab General Scholarship",
    amount: "$1,000 – $2,500",
    eligibility: "Black students enrolled in an accredited PT, OT, or SLP graduate program.",
    icon: GraduationCap,
    image: PHOTOS.studentsLectureHall,
  },
  {
    name: "Leadership Excellence Award",
    amount: "$2,500",
    eligibility: "Demonstrated leadership, community service, and academic excellence.",
    icon: Award,
    image: PHOTOS.studentsAwards,
  },
  {
    name: "Community Impact Scholar",
    amount: "$1,500",
    eligibility: "Students who have shown outstanding commitment to underserved communities.",
    icon: HeartHandshake,
    image: PHOTOS.impactVolunteersKids,
  },
];

const REQUIREMENTS = [
  "Identify as Black/African American",
  "Enrolled in an accredited PT, OT, or SLP graduate program",
  "Minimum 3.0 GPA",
  "Two letters of recommendation",
  "Personal statement (500–750 words)",
  "Proof of enrollment",
];

export default function ScholarshipsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/impact/scholarships"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "BIR CARES", href: "/impact" },
          { label: "Scholarships" },
        ]}
        title="Scholarships &"
        highlight="Financial Aid"
        description="We believe every qualified student deserves access to education. Our scholarship program breaks down financial barriers so the next generation of Black rehabilitation professionals can thrive."
        image={PHOTOS.ghanaCertificates}
        imagePosition="center 35%"
        meta={
          !APPLICATIONS_OPEN && (
            <span className="chip chip-dark">Applications closed for this round</span>
          )
        }
      />

      {/* Available scholarships */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="The Awards"
              title="Available Scholarships"
              description={
                APPLICATIONS_OPEN
                  ? undefined
                  : "Applications are closed for this round. Join the community and we will tell you the moment the next one opens."
              }
              className="mb-12"
            />
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {SCHOLARSHIPS.map((s) => (
              <StaggerItem key={s.name} className="flex">
                <PhotoCard
                  image={s.image}
                  icon={s.icon}
                  eyebrow={s.amount}
                  title={s.name}
                  href={APPLICATIONS_OPEN ? "/impact/scholarships/apply" : undefined}
                  cta="Apply now"
                >
                  <p>{s.eligibility}</p>
                  {!APPLICATIONS_OPEN && (
                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-muted">
                      Applications closed
                    </p>
                  )}
                </PhotoCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Requirements, beside a large photo */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left">
            <div className="img-filler aspect-4/5 overflow-hidden rounded-t-[999px] rounded-b-[var(--radius-panel)] shadow-float ring-1 ring-primary/30 sm:aspect-4/3 lg:aspect-4/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTOS.ghanaBathOfReturn}
                alt="Black in Rehab members together in Ghana"
                loading="lazy"
                className="photo h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal>
            <SectionHeading
              eyebrow="Eligibility"
              title="General Requirements"
              description="What every applicant needs, whichever award they are applying for."
            />
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {REQUIREMENTS.map((r) => (
                <li key={r} className="card card-sunken flex items-start gap-3 rounded-xl p-4">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm text-foreground">{r}</p>
                </li>
              ))}
            </ul>
            {APPLICATIONS_OPEN && (
              <Link href="/impact/scholarships/apply" className="btn btn-primary btn-lg group mt-10">
                START YOUR APPLICATION <ArrowRight className="btn-arrow h-5 w-5" />
              </Link>
            )}
          </Reveal>
        </div>
      </section>

      {/* Closing band */}
      <PhotoSplitBand image={PHOTOS.ghanaCastleGroup} imageSide="left">
        <p className="eyebrow eyebrow-on-dark mb-5">For Students</p>
        <h2 className="display-2 text-white">
          {APPLICATIONS_OPEN ? "Ready to Apply?" : "Be First to Hear"}
        </h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
          {APPLICATIONS_OPEN
            ? "One application covers every award you qualify for."
            : "The next round is not open yet. Students in the community hear about every award before it is announced anywhere else."}
        </p>
        <div className="mt-9">
          {APPLICATIONS_OPEN ? (
            <Link href="/impact/scholarships/apply" className="btn btn-primary btn-lg group">
              START YOUR APPLICATION <ArrowRight className="btn-arrow h-5 w-5" />
            </Link>
          ) : (
            <Link href="/community/students" className="btn btn-primary btn-lg group">
              JOIN BLACK IN REHAB UNIVERSITY <ArrowRight className="btn-arrow h-5 w-5" />
            </Link>
          )}
        </div>
      </PhotoSplitBand>
    </div>
  );
}
