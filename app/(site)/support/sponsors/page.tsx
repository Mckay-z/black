import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle, GraduationCap, Handshake, Radio } from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import PhotoCard from "@/components/ui/PhotoCard";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Become a Sponsor | Black In Rehab Foundation",
  description:
    "Sponsorship tiers, what each one includes, and the four kinds of organisation we partner with.",
};

/**
 * Sponsorship, on one page.
 *
 * This page previously said "our programme offers tiered packages" and then
 * sent you to `/partnerships` to find out what they were — two URLs, one of
 * which existed only to link to the other. The tiers now live here, and
 * `/partnerships` redirects in.
 *
 * The "download the deck" button from the old page is gone rather than
 * carried across: it pointed at `href="#"`, so it downloaded nothing. Restore
 * it when there is a real file to point at.
 */

/**
 * Sponsorship tiers.
 *
 * "School Event Sponsor" is the tier the client asked for in their revision
 * document — a partner underwriting a single campus visit rather than a
 * year-round relationship, so it leads the list as the smallest commitment.
 *
 * Its price is "Talk to us" rather than a figure: the document asked for the
 * tier and the button, not an amount, and a number invented here is one a
 * sponsor would hold us to. The three figures below it predate this file and
 * still need the client's sign-off.
 */
const TIERS = [
  {
    name: "School Event Sponsor",
    price: "Talk to us",
    highlighted: false,
    perks: [
      "Underwrite one campus visit — panel, workshop, or career talk",
      "Named as the sponsor of that event",
      "Logo on the event's materials and sign-up page",
      "Social media thank-you when the event runs",
      "A short note back on who attended and what it covered",
    ],
  },
  {
    name: "Community Partner",
    price: "$1,000",
    highlighted: false,
    perks: [
      "Logo on website partner page",
      "Social media mention",
      "Email newsletter feature",
      "2 complimentary event tickets",
    ],
  },
  {
    name: "Gold Sponsor",
    price: "$5,000",
    highlighted: true,
    perks: [
      "All Community Partner benefits",
      "Logo on conference signage",
      "Exhibit table at annual conference",
      "Speaking slot at sponsored session",
      "5 complimentary conference passes",
      "Dedicated social media post",
    ],
  },
  {
    name: "Platinum Sponsor",
    price: "$10,000+",
    highlighted: false,
    perks: [
      "All Gold Sponsor benefits",
      "Premier logo placement across all platforms",
      "Keynote session naming rights",
      "10 complimentary conference passes",
      "Custom branded experience at conference",
      "Year-round co-marketing opportunities",
    ],
  },
];

const PARTNER_TYPES = [
  {
    icon: Building2,
    image: PHOTOS.conferenceGroupBranded,
    title: "Corporate Partners",
    description:
      "Healthcare systems, rehabilitation companies, and healthcare technology brands who want to reach and support Black rehab professionals.",
  },
  {
    icon: GraduationCap,
    image: PHOTOS.studentsLectureHall,
    title: "Academic Institutions",
    description:
      "Universities and PT/OT/SLP programmes looking to recruit, support, and champion Black students in their programmes.",
  },
  {
    icon: Handshake,
    image: PHOTOS.impactVolunteerChildren,
    title: "Nonprofit Partners",
    description:
      "Organisations that share our mission around health equity, community service, and professional development.",
  },
  {
    icon: Radio,
    image: PHOTOS.pressStarrFm,
    title: "Media & Brand Partners",
    description:
      "Publishers, media outlets, and lifestyle brands that want to authentically reach our engaged community.",
  },
];

/** Supplied as logos in the client's "Website Updates" document. */
const SPONSORS = [
  { name: "Alo", logo: "/logos/sponsor-alo.png" },
  { name: "OT Designz", logo: "/logos/sponsor-ot-designz.png" },
  { name: "Jaanuu", logo: "/logos/sponsor-jaanuu.png" },
  { name: "Clove", logo: "/logos/sponsor-clove.png" },
  { name: "Garde Malade", logo: "/logos/sponsor-garde-malade.png" },
  { name: "Vakae Luxe", logo: "/logos/sponsor-vakae-luxe.png" },
];

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        page="/support/sponsors"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Get Involved", href: "/get-involved" },
          { label: "Become a Sponsor" },
        ]}
        title="Partner with"
        highlight="Purpose"
        description="Align your organisation with a growing global movement transforming rehabilitation, advancing health equity, and empowering the next generation of Black healthcare professionals."
        image={PHOTOS.retreatDinner}
        cta={{ label: "BECOME A SPONSOR", href: "/contact" }}
        secondaryCta={{ label: "See Where It Goes", href: "/impact/sponsor-impact" }}
      />

      {/* Our sponsors, beside a large photograph. */}
      <section className="section bg-background">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Reveal direction="left" className="mx-auto w-full max-w-md lg:max-w-none">
            <div className="img-filler relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[var(--radius-panel)] shadow-float ring-1 ring-primary/25">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTOS.conferenceCelebration}
                alt="Black in Rehab members celebrating together at the conference"
                loading="lazy"
                className="photo h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <SectionHeading eyebrow="Thank You" title="Our Sponsors" className="mb-8" />
            {/* The source logos are small, so they sit at a modest size on
                white tiles rather than being stretched. */}
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {SPONSORS.map((sponsor) => (
                <li
                  key={sponsor.name}
                  className="flex h-28 items-center justify-center rounded-2xl border border-border bg-white p-4"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    loading="lazy"
                    className="max-h-20 max-w-full w-auto object-contain"
                  />
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-primary btn-lg group">
                BECOME A SPONSOR <ArrowRight className="btn-arrow h-5 w-5" aria-hidden="true" />
              </Link>
              <Link href="#tiers" className="btn btn-outline btn-lg">
                See the Tiers
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tiers */}
      <section id="tiers" className="section scroll-mt-24 bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Sponsorship Tiers"
              title="Four Levels, Everything Listed"
              description="Sponsor a single school event, or back the work year-round — each of the three larger tiers includes everything in the one below it. If none of these is the right shape for you, say so — most of our long-term partnerships started as a conversation rather than a tier."
              className="mb-16"
            />
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {TIERS.map((tier) => (
              <StaggerItem
                key={tier.name}
                className={`card flex h-full flex-col p-8 ${
                  tier.highlighted
                    ? "border-primary/50 shadow-glow lg:-translate-y-4"
                    : ""
                }`}
              >
                {tier.highlighted && (
                  <span className="eyebrow mb-5 self-start">Most Chosen</span>
                )}

                <h3 className="font-serif text-2xl font-bold text-foreground">
                  {tier.name}
                </h3>
                <p className="mt-2 font-serif text-4xl font-bold text-primary">
                  {tier.price}
                </p>

                <ul className="mt-8 flex-1 space-y-3">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3">
                      <CheckCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-relaxed text-muted">{perk}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`btn mt-8 w-full group ${
                    tier.highlighted ? "btn-primary" : "btn-outline"
                  }`}
                >
                  ENQUIRE
                  <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Who we work with */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Who We Work With"
              title="Four Kinds of Sponsor"
              className="mb-12"
            />
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PARTNER_TYPES.map(({ icon, image, title, description }) => (
              <StaggerItem key={title} className="flex">
                <PhotoCard image={image} icon={icon} title={title} imageClassName="h-44">
                  {description}
                </PhotoCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <PhotoSplitBand image={PHOTOS.retreatGroupBlazers} imageSide="left">
        <p className="eyebrow eyebrow-on-dark mb-5">Sponsorship</p>
        <h2 className="display-2 text-white">Let Us Build Something Real</h2>
        <p className="mt-5 mb-9 max-w-lg text-lg leading-relaxed text-white/80">
          Tell us what you are trying to achieve and we will come back with a proposal, not a brochure.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn btn-primary btn-lg group">
            START A CONVERSATION <ArrowRight className="btn-arrow h-5 w-5" aria-hidden="true" />
          </Link>
          <Link href="/support/corporate" className="btn btn-on-dark btn-lg">
            Corporate Partnerships
          </Link>
        </div>
      </PhotoSplitBand>
    </div>
  );
}
