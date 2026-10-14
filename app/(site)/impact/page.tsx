import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Gift,
  HandHeart,
  Heart,
  HeartHandshake,
  Quote,
} from "lucide-react";
import { PHOTOS } from "@/lib/images";
import ImpactGallerySection from "@/components/sections/ImpactGallerySection";
import SectionHub from "@/components/navigation/SectionHub";
import Reveal from "@/components/motion/Reveal";
import GiftBand, { NSA_WISHLIST_URL } from "@/components/sections/GiftBand";
import { DONATE_URL, externalProps } from "@/lib/donate";
import PartnersStrip from "@/components/sections/PartnersStrip";

export const metadata: Metadata = {
  title: "BIR CARES | Black in Rehab Foundation",
  description:
    "Compassion in action. BIR CARES brings together sponsors, volunteers, and community partners to support therapist training in Ghana, NSA's sensory room, our annual retreat, and student scholarships.",
};


/** The four current initiatives, from the client's overview copy. */
const INITIATIVES = [
  "Therapist training in Ghana",
  "NSA’s sensory room",
  "Our annual retreat",
  "Student scholarships",
];

const WAYS_TO_HELP = [
  {
    icon: HandHeart,
    title: "Become a Sponsor",
    body: "Help support training initiatives, sensory room development, our annual retreat, and student scholarships.",
    cta: "Become a sponsor",
    href: "/support/sponsors",
    image: PHOTOS.impactNeurodiversity,
  },
  {
    icon: HeartHandshake,
    title: "Volunteer With Us",
    body: "Share your time, skills, and compassion to support meaningful community projects.",
    cta: "Get involved",
    href: "/impact/service",
    image: PHOTOS.impactTherapy,
  },
  {
    icon: Gift,
    title: "Give What’s Needed",
    body: "Contribute supplies, resources, or professional services aligned with confirmed initiative needs.",
    cta: "Shop the wishlist",
    href: NSA_WISHLIST_URL,
    image: PHOTOS.impactBackpacks,
  },
];

/**
 * BIR CARES — the Impact section's landing page.
 *
 * Layout follows the client's "Compassion in Action" mockup: a photographic
 * hero, an arched "about" band, three photo cards, a featured partnership,
 * the programme grid, a picture mosaic and a dark closing band. The mockup's
 * sample content (an NCCE partnership, stock children, invented stats) is NOT
 * used: copy is the client's verbatim from the "Website Updates" document,
 * the partner is the real one (Nature Sprouts Academy), and every photo is
 * the foundation's own.
 *
 * The seven "Where the Work Goes" cards are deliberately not links — the
 * client asked for them to be informational only.
 */
export default function ImpactPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="section-dark relative isolate overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PHOTOS.impactHandsUp}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
        />
        {/* Dark on the left where the copy sits, clearing to the right so
            the children's faces stay bright. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-r from-black via-black/80 to-black/10 md:via-black/60"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-linear-to-t from-black/70 to-transparent"
        />

        <div className="container mx-auto px-4 md:px-6 pt-28 pb-20 md:pt-36 md:pb-28">
          <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-sm font-medium text-primary">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">BIR CARES</span>
          </nav>

          <div className="max-w-2xl">
            <div className="mb-8 flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/bir-cares-emblem.png"
                alt=""
                aria-hidden="true"
                width={286}
                height={244}
                className="h-16 w-auto md:h-20"
              />
              <div className="leading-none">
                <p className="font-serif text-2xl font-bold tracking-wide text-white md:text-3xl">
                  BIR CARES
                </p>
                <p className="mt-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/70">
                  Black in Rehab Foundation
                </p>
              </div>
            </div>

            <p className="eyebrow eyebrow-on-dark mb-6">
              Sponsors · Volunteers · Community Partners
            </p>
            <h1 className="display-1 text-white">
              Compassion in Action.{" "}
              <span className="text-gold-gradient">Healing Beyond Borders.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">
              BIR CARES brings together sponsors, volunteers, and community
              partners to help turn care into action — in the clinic and in the
              communities we serve.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href={DONATE_URL} {...externalProps(DONATE_URL)} className="btn btn-primary btn-lg group">
                DONATE NOW <ArrowRight className="btn-arrow h-5 w-5" />
              </Link>
              <a href={NSA_WISHLIST_URL} target="_blank" rel="noopener noreferrer" className="btn btn-on-dark btn-lg">
                <Heart className="h-5 w-5" aria-hidden="true" /> SHOP THE NSA WISHLIST
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────────── */}
      <section className="section bg-background">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Reveal direction="left" className="mx-auto w-full max-w-sm lg:max-w-none">
            {/* The arch from the mockup: a rounded top over a portrait. */}
            <div className="img-filler relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[var(--radius-panel)] shadow-float ring-1 ring-primary/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTOS.impactPediatric}
                alt="A Black in Rehab therapist with children in Ghana"
                loading="lazy"
                className="photo h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <p className="eyebrow mb-5">About BIR CARES</p>
              <h2 className="display-2 text-foreground">
                Compassion in Action.
                <br />
                Healing Beyond Borders.
              </h2>
              <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  At Black in Rehab Foundation, we believe care reaches beyond the clinic and into the communities we serve. BIR CARES brings together sponsors, volunteers, and community partners to help turn that belief into action.
                </p>
                <p>
                  Our current initiatives support bringing therapists to Ghana for training at Nature Sprouts Academy and other partner initiatives, developing NSA’s sensory room, our annual retreat, and student scholarships.
                </p>
              </div>
            </div>

            <ul className="self-center border-l border-primary/40 pl-6 md:min-w-52">
              {INITIATIVES.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary"
                >
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Put Your Heart Into Action ───────────────────────────────── */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-5">Get Involved</p>
            <h2 className="display-2 text-foreground">Put Your Heart Into Action</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Whether you represent a business, an organization, or simply a heart ready to serve, there is a place for you in BIR CARES.
            </p>
          </Reveal>

          <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {WAYS_TO_HELP.map(({ icon: Icon, ...way }) => (
              <li key={way.title}>
                <Link
                  href={way.href}
                  {...externalProps(way.href)}
                  className="card card-hover group grid h-full grid-cols-[minmax(0,1fr)_42%] overflow-hidden"
                >
                  <div className="flex flex-col p-6 md:p-7">
                    <Icon className="mb-5 h-7 w-7 text-primary" aria-hidden="true" />
                    <h3 className="font-serif text-xl font-bold text-foreground">{way.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{way.body}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                      {way.cta}
                      <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="img-filler relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={way.image}
                      alt=""
                      loading="lazy"
                      className="photo absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-center text-lg font-semibold text-foreground">
            Together, we can extend care, create opportunity, and help communities thrive.
          </p>

          {/* ── Featured partnership ─────────────────────────────────── */}
          <Reveal className="mt-16">
            <div className="card grid grid-cols-1 overflow-hidden lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
              <div className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:p-12">
                <div className="shrink-0 self-start rounded-2xl bg-white p-5 shadow-soft md:self-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logos/nature-sprouts-academy.png"
                    alt="Nature Sprouts Academy"
                    width={377}
                    height={59}
                    className="h-9 w-auto md:h-10"
                  />
                </div>
                <div>
                  <p className="eyebrow mb-4">Featured Partnership</p>
                  <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                    Black in Rehab × Nature Sprouts Academy (Ghana)
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted">
                    Black in Rehab partners with Nature Sprouts Academy to train and equip staff with practical, evidence-informed strategies to better support children with developmental disabilities—advancing health equity, inclusion, and quality care in Ghana.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link href="/impact/mission-projects" className="btn btn-primary group">
                      LEARN MORE <ArrowRight className="btn-arrow h-4 w-4" />
                    </Link>
                    <a href={NSA_WISHLIST_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                      Support NSA’s Sensory Room <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="img-filler relative min-h-64">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={PHOTOS.impactChildren}
                  alt="Children at a Black in Rehab session in Ghana"
                  loading="lazy"
                  className="photo absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Where the Work Goes (not links, by request) ──────────────── */}
      <PartnersStrip
        description="The organisations BIR CARES partners with to extend care, training, and opportunity."
        className="section-sm bg-background"
      />

      <SectionHub
        section="/impact"
        eyebrow="Our Impact"
        title="Where the Work Goes"
        description="The programmes BIR CARES supports."
        linked={false}
        className="bg-background"
      />

      {/* ── Gallery ──────────────────────────────────────────────────── */}
      <ImpactGallerySection
        eyebrow="Our Gallery"
        heading="The Work, In Pictures"
        description="Real people. Real change."
        layout="mosaic"
        limit={7}
        cta={{ label: "View more photos", href: "/about/media-press" }}
        aside={
          <figure className="card flex h-full flex-col justify-center p-6">
            <Quote className="mb-3 h-6 w-6 text-primary" aria-hidden="true" />
            <blockquote className="font-serif text-lg leading-snug text-foreground">
              Together, we can extend care, create opportunity, and help communities thrive.
            </blockquote>
            <Heart className="mt-4 h-4 w-4 text-primary" aria-hidden="true" />
          </figure>
        }
        className="section bg-surface border-t border-border"
      />

      <GiftBand />
    </div>
  );
}
