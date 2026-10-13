import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Gift, Users } from "lucide-react";

import { NAV_ICONS } from "@/components/navigation/SectionHub";
import GiftBand from "@/components/sections/GiftBand";
import PhotoCard from "@/components/ui/PhotoCard";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PHOTOS } from "@/lib/images";
import { NAV_SECTIONS } from "@/lib/navigation";
import { DONATE_URL, externalProps } from "@/lib/donate";

export const metadata: Metadata = {
  title: "Get Involved | Black In Rehab Foundation",
  description:
    "Every way to take part in Black In Rehab — as a student, a professional, a partner, a sponsor, or a volunteer.",
};

/**
 * The merged Community + Support landing page, laid out after the client's
 * "You Belong Here" mockup: photographic hero, three photo cards, a dark
 * Accountability Lab band, the section's pages as photo cards, and the shared
 * "Your Gift Powers the Mission" band.
 *
 * `/community` and `/support` redirect here. Their children keep their
 * original URLs — see the note in `lib/navigation.ts`.
 */

/** The three shapes participation actually takes, before the detail. */
const WAYS = [
  {
    icon: Users,
    title: "Bring yourself",
    description:
      "Black in Rehab University for students, ambassador meetups in your city, and the people nearest you. Free to start.",
    href: "/community/students",
    cta: "Explore BIR University",
    image: PHOTOS.conferenceNetworking,
  },
  {
    icon: Clock,
    title: "Bring your time",
    description:
      "Volunteer on a service day, host a local event, or take a place on a global trip.",
    href: "/impact/service",
    cta: "Volunteer with us",
    image: PHOTOS.impactVolunteerChildren,
  },
  {
    icon: Gift,
    title: "Bring your resources",
    description:
      "Donate, sponsor a programme, or partner with us as an organisation.",
    href: DONATE_URL,
    cta: "Donate or sponsor",
    image: PHOTOS.conferenceGroupBranded,
  },
];

/**
 * A photo per Get Involved page for the "Pick Your Starting Point" cards.
 * Titles, descriptions and icons come from `lib/navigation.ts`, so the cards
 * always match the menu; a page without a photo here falls back to a
 * community shot rather than going blank.
 */
const HUB_PHOTOS: Record<string, string> = {
  "/community/students": PHOTOS.studentsLectureHall,
  "/get-involved/accountability-lab": PHOTOS.conferencePresentation,
  "/community/partner": PHOTOS.speakingTeamWagmc,
  "/support/sponsors": PHOTOS.retreatGroupFormal,
  "/support/corporate": PHOTOS.speakingAfricaSummit,
};

const HUB = NAV_SECTIONS.find((section) => section.href === "/get-involved");

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="section-dark relative isolate overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PHOTOS.ghanaKente}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[75%_30%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-r from-black via-black/75 to-transparent md:from-black/90 md:via-black/45"
        />

        <div className="container mx-auto px-4 md:px-6 pt-32 pb-20 md:pt-40 md:pb-28">
          <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2 text-sm font-medium">
            <Link href="/" className="text-primary transition-colors hover:text-accent">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60">Get Involved</span>
          </nav>

          <Reveal className="max-w-2xl">
            <h1 className="display-1 text-white">
              You Belong <span className="font-serif italic text-gold-gradient">Here</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80 md:text-xl">
              A global movement of rehabilitation professionals, students, and allies.
              However much you have to give — an evening, a skill, a cheque — there is
              a way in.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/community/students" className="btn btn-primary btn-lg group">
              BLACK IN REHAB UNIVERSITY
              <ArrowRight className="btn-arrow h-5 w-5" />
            </Link>
            <Link href={DONATE_URL} {...externalProps(DONATE_URL)} className="btn btn-on-dark btn-lg">
              DONATE
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Make a difference: three doors ───────────────────────────── */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-5">Get Involved</p>
            <h2 className="display-2 text-foreground">Make a Difference</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              There are many ways to support our mission. Choose how you’d like to
              get involved.
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {WAYS.map(({ icon, title, description, href, cta, image }) => (
              <StaggerItem key={title} className="flex">
                <PhotoCard image={image} icon={icon} title={title} href={href} cta={cta}>
                  {description}
                </PhotoCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Accountability Lab ───────────────────────────────────────────
          Its own band rather than one of the doors above: it is a paid
          professional programme, and the client wants it kept clearly apart
          from the free Black in Rehab University. Copy is the revision
          document's overview card, verbatim. */}
      <section className="section-dark relative isolate overflow-hidden bg-black">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div className="order-2 px-6 py-16 md:order-1 md:px-12 md:py-20 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
            <p className="chip chip-dark mb-6 uppercase tracking-[0.14em]">For Professionals</p>
            <h2 className="display-2 text-white">Accountability Lab</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              A focused space for Black rehabilitation professionals to make
              progress on business, creative, and leadership goals through
              structure, shared work time, and community support.
            </p>
            <p className="mt-4 font-semibold text-white">
              The current cohort is underway. Join the waitlist for the next cohort.
            </p>
            <Link
              href="/get-involved/accountability-lab"
              className="btn btn-primary btn-lg group mt-9"
            >
              Explore the Accountability Lab
              <ArrowRight className="btn-arrow h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="relative order-1 min-h-64 md:order-2 md:min-h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PHOTOS.conferencePodium}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent md:bg-linear-to-l md:from-transparent md:via-black/20 md:to-black"
            />
          </div>
        </div>
      </section>

      {/* ── Pick Your Starting Point ─────────────────────────────────── */}
      {HUB && (
        <section className="section bg-surface border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <Reveal className="mb-12 max-w-2xl">
              <p className="eyebrow mb-5">Every Way In</p>
              <h2 className="display-2 text-foreground">Pick Your Starting Point</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Students, the Accountability Lab, partnership, and sponsorship — all
                of it, on one page.
              </p>
            </Reveal>

            <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {HUB.children.map((child) => (
                <StaggerItem key={child.href} className="flex">
                  <PhotoCard
                    image={HUB_PHOTOS[child.href] ?? PHOTOS.conferenceGroupBranded}
                    icon={NAV_ICONS[child.icon]}
                    title={child.label}
                    href={child.href}
                    imageClassName="h-40"
                  >
                    {child.description}
                  </PhotoCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <GiftBand image={PHOTOS.impactVolunteersKids} />
    </div>
  );
}
