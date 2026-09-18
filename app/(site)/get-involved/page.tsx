import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Gift, Users } from "lucide-react";

import SectionHub from "@/components/navigation/SectionHub";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/motion/Reveal";
import ParallaxImage from "@/components/motion/ParallaxImage";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Get Involved | Black In Rehab Foundation",
  description:
    "Every way to take part in Black In Rehab — as a member, a student, a partner, a sponsor, or a volunteer.",
};

/**
 * The merged Community + Support landing page.
 *
 * Those were two tabs asking the same question — how do I take part — split by
 * whether the answer involved time or money. In practice that meant a visitor
 * wanting to sponsor had to guess between Support and Impact, and a student
 * had to guess between Community, Impact and Resources. This page is the one
 * place that question gets answered.
 *
 * `/community` and `/support` now redirect here. Their children keep their
 * original URLs — see the note in `lib/navigation.ts`.
 */

/** The three shapes participation actually takes, before the detail. */
const WAYS = [
  {
    icon: Users,
    title: "Bring yourself",
    description:
      "Membership, the student community, ambassador meetups, and somewhere to tell your story. Free to start.",
    href: "/community/join",
    cta: "Become a member",
  },
  {
    icon: Clock,
    title: "Bring your time",
    description:
      "Volunteer on a service day, mentor a student, host a local event, or take a place on a global trip.",
    href: "/impact/service",
    cta: "Volunteer with us",
  },
  {
    icon: Gift,
    title: "Bring your resources",
    description:
      "Donate, sponsor a programme, partner as an organisation, or recruit through us. Every pound is reported back.",
    href: "/impact/donate",
    cta: "Donate or sponsor",
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="section-dark relative isolate overflow-hidden bg-secondary pb-20 pt-32 md:pb-28 md:pt-40">
        <ParallaxImage
          src={PHOTOS.conferenceCelebration}
          position="30%"
          strength={60}
          className="-z-20"
          opacity={0.35}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-r from-black/90 via-black/70 to-black/45"
        />

        <div className="container relative mx-auto px-4 md:px-6">
          <nav
            aria-label="Breadcrumb"
            className="mb-7 flex items-center gap-2 text-sm font-medium"
          >
            <Link href="/" className="text-primary transition-colors hover:text-accent">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60">Get Involved</span>
          </nav>

          <Reveal>
            <h1 className="display-1 max-w-4xl text-white">
              You Belong <span className="text-gold-gradient">Here</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              A global movement of rehabilitation professionals, students, and allies.
              However much you have to give — an evening, a skill, a cheque — there is
              a way in.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/community/join" className="btn btn-primary btn-lg group">
              BECOME A MEMBER
              <ArrowRight className="btn-arrow h-5 w-5" />
            </Link>
            <Link href="/impact/donate" className="btn btn-on-dark btn-lg">
              DONATE
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Three doors, before the full list. Nine cards is a lot to land on
          cold; this sorts them by what the visitor actually has to offer. */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {WAYS.map(({ icon: Icon, title, description, href, cta }) => (
              <StaggerItem key={title} className="card flex flex-col p-8">
                <span className="icon-tile mb-6">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                  {title}
                </h2>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                  {description}
                </p>
                <Link href={href} className="link-arrow group mt-auto">
                  {cta}
                  <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <SectionHub
        section="/get-involved"
        eyebrow="Every Way In"
        title="Pick Your Starting Point"
        description="Membership, students, partnership, sponsorship, mentorship, recruitment, and the shop — all of it, on one page."
        className="border-y border-border bg-surface"
      />

      <CTABand
        title="Not Sure Which One You Are?"
        description="Tell us a little about yourself and what you are hoping to do, and we will point you at the right door rather than making you guess."
        cta={{ label: "GET IN TOUCH", href: "/contact" }}
        secondaryCta={{ label: "See Our Impact", href: "/impact" }}
      />
    </div>
  );
}
