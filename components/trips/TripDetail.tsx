import Link from "next/link";
import {
  Anchor,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Compass,
  Globe2,
  HeartHandshake,
  MapPin,
  Plane,
  Ship,
  Sparkles,
  Sun,
  Users,
  Utensils,
} from "lucide-react";

import CTABand from "@/components/ui/CTABand";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import Reveal from "@/components/motion/Reveal";
import ParallaxImage from "@/components/motion/ParallaxImage";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import TripGallery from "@/components/trips/TripGallery";

/**
 * The long-form page for a single trip.
 *
 * Structured after the reference layout the client supplied: banner, a short
 * personal framing of the journey, the day-by-day, what the days are actually
 * like, photographs, what the price covers, the price itself, and the
 * small print — in that order, because that is the order the questions arrive
 * in.
 *
 * Everything is data. A new trip is a `TripDetailData` object and a four-line
 * page file; nothing in here is specific to any one destination. Sections
 * whose data is omitted do not render, so a trip with no published pricing or
 * no photographs simply skips those bands rather than showing an empty one.
 *
 * The reference sets its accent words in a script face. This uses italic
 * Playfair instead — the site loads two families and adding a third for one
 * decorative word is not a trade worth making.
 */

const DAY_ICONS = {
  pin: MapPin,
  ship: Ship,
  anchor: Anchor,
  sun: Sun,
  plane: Plane,
  users: Users,
  heart: HeartHandshake,
  compass: Compass,
  calendar: Calendar,
  globe: Globe2,
  food: Utensils,
} as const;

export type DayIcon = keyof typeof DAY_ICONS;

type Cta = { label: string; href: string };

/**
 * A button that may leave the site. Off-site destinations (an application
 * form, a booking platform) open in a new tab so the trip page stays where
 * the visitor left it.
 */
function CtaLink({
  cta,
  className,
}: {
  cta: Cta;
  className: string;
}) {
  const external = /^https?:\/\//.test(cta.href);
  return (
    <Link
      href={cta.href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {cta.label}
      <ArrowRight className="btn-arrow h-5 w-5" />
    </Link>
  );
}

export type TripDetailData = {
  hero: {
    title: string;
    dates: string;
    tagline: string;
    /** Optional third line, e.g. "8 days · Accra & Cape Coast". */
    detail?: string;
    image: string;
    cta: { label: string; href: string };
  };

  intro: {
    heading: string;
    /** Set in italic serif, in brand gold. */
    accent: string;
    paragraphs: string[];
    /** The one line set in full weight at the end of the section. */
    closing?: string;
    /**
     * Optional portrait beside the copy, framed as the arch from the BIR
     * CARES page. Without one the intro stays a centred column.
     */
    image?: string;
    imageAlt?: string;
  };

  /**
   * Separately dated gatherings that share this page.
   *
   * For a trip that runs once, this is absent and the banner's own dates are
   * the whole story. Ghana runs twice in 2027 under one programme — a service
   * trip in March and a retreat in September — and one page carrying both is
   * better than two pages repeating each other. Each entry gets an `id` so
   * the calendar can link straight to its own gathering.
   */
  gatherings?: {
    heading: string;
    accent: string;
    description?: string;
    items: {
      /** Anchor target, e.g. "sankofa-return". */
      id: string;
      title: string;
      dates: string;
      location: string;
      summary: string;
      /** Optional photo across the top of the card. */
      image?: string;
    }[];
  };

  itinerary?: {
    image: string;
    heading: string;
    accent: string;
    description: string;
    cardTitle: string;
    cardSubtitle: string;
    days: { day: string; title: string; note?: string; icon: DayIcon }[];
    cta: { label: string; href: string };
    /** A second button under the card, e.g. the full itinerary off-site. */
    secondaryCta?: Cta;
    /** Small print under the card's buttons. */
    footnote?: string;
  };

  highlights?: {
    heading: string;
    accent: string;
    /** With `image`, the row shows that photo in place of the icon tile. */
    items: { title: string; description: string; icon: DayIcon; image?: string }[];
    /**
     * The photograph and pull-out beside the list. Optional: a trip whose
     * highlights stand on their own renders the list full width rather than
     * against half a section of white space.
     */
    panel?: {
      image: string;
      heading: string;
      accent: string;
      description: string;
      perks: string[];
    };
  };

  gallery?: string[];

  includes?: {
    heading: string;
    accent: string;
    items: string[];
    cta: { label: string; href: string };
  };

  pricing?: {
    heading: string;
    accent: string;
    subtitle: string;
    /** e.g. "Shared double occupancy". */
    roomLabel: string;
    options: { label: string; price: string; unit: string }[];
    cta: { label: string; href: string };
    note?: string;
  };

  /**
   * Numbered steps for joining, each with its own button — for a trip where
   * applying and booking are separate actions on separate platforms, so a
   * visitor can see which one they are taking.
   */
  steps?: {
    /** Anchor target, so other buttons on the page can jump here. */
    id: string;
    heading: string;
    accent: string;
    description?: string;
    items: { label: string; title: string; description: string; cta: Cta }[];
  };

  info?: {
    heading: string;
    accent: string;
    blocks: {
      title: string;
      tone: "primary" | "dark";
      body?: string[];
      bullets?: string[];
    }[];
  };

  /**
   * The closing call-to-action band. Absent on a page that ends without one.
   * With `image` it is a dark photo split band; without, the plain CTABand.
   */
  closing?: {
    title: string;
    description: string;
    image?: string;
    eyebrow?: string;
    cta: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  };
};

/**
 * The reference's signature heading: an upright serif phrase with the last
 * word or two swung into italic and colour. Used on every band, which is most
 * of what makes the page read as one page.
 */
function ScriptHeading({
  heading,
  accent,
  className = "",
  onDark = false,
}: {
  heading: string;
  accent: string;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <h2 className={`display-2 ${onDark ? "text-white" : "text-foreground"} ${className}`}>
      {heading}{" "}
      <span className="font-serif italic text-primary">{accent}</span>
    </h2>
  );
}

/** Line, ornament, line — the reference's section break. */
function Ornament() {
  return (
    <div aria-hidden="true" className="mt-12 flex items-center justify-center gap-4">
      <span className="h-px w-24 bg-linear-to-r from-transparent to-primary/60 sm:w-40" />
      <Sparkles className="h-4 w-4 text-primary" />
      <span className="h-px w-24 bg-linear-to-l from-transparent to-primary/60 sm:w-40" />
    </div>
  );
}

export default function TripDetail({ trip }: { trip: TripDetailData }) {
  const {
    hero,
    intro,
    gatherings,
    itinerary,
    highlights,
    gallery,
    includes,
    pricing,
    steps,
    info,
  } = trip;

  return (
    <div className="min-h-screen bg-background">
      {/* ---- Banner -----------------------------------------------------
          Left-aligned over a full-strength photograph, dark on the left
          where the copy sits and clearing to the right — the same hero as
          the BIR CARES and Get Involved pages, so the trip pages read as
          part of the same site. */}
      <section className="section-dark relative isolate flex min-h-[85svh] items-center overflow-hidden bg-black">
        <ParallaxImage
          src={hero.image}
          position="35%"
          strength={80}
          className="-z-20"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-r from-black via-black/75 to-black/10 md:from-black/90 md:via-black/50 md:to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-linear-to-t from-black/70 to-transparent"
        />

        <div className="container relative mx-auto px-4 pb-24 pt-36 md:px-6">
          {/*
            The trail, derived rather than passed in: this component only ever
            renders a trip, so the first two steps are always the same and the
            third is the trip's own name.
          */}
          <nav
            aria-label="Breadcrumb"
            className="mb-7 flex flex-wrap items-center gap-1 text-sm font-medium"
          >
            <Link
              href="/"
              className="rounded-md px-1 py-0.5 text-primary transition-colors hover:text-accent"
            >
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/30" aria-hidden="true" />
            <Link
              href="/trips"
              className="rounded-md px-1 py-0.5 text-primary transition-colors hover:text-accent"
            >
              Upcoming Events &amp; Trips
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/30" aria-hidden="true" />
            <span aria-current="page" className="px-1 py-0.5 text-white/60">
              {hero.title}
            </span>
          </nav>

          <div className="max-w-2xl">
            <Reveal direction="left" distance={28}>
              <p className="chip chip-dark mb-6 uppercase tracking-[0.14em]">
                <Calendar className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                {hero.dates}
              </p>
              <h1 className="display-1 text-white">{hero.title}</h1>
            </Reveal>

            <Reveal direction="left" distance={20} delay={0.12}>
              <p className="mt-6 font-serif text-xl italic text-gold-gradient md:text-2xl">
                {hero.tagline}
              </p>
              {hero.detail && (
                <p className="mt-3 text-lg tracking-wide text-white/75">
                  {hero.detail}
                </p>
              )}
            </Reveal>

            <Reveal direction="left" distance={16} delay={0.24}>
              <div className="mt-10">
                <CtaLink cta={hero.cta} className="btn btn-primary btn-lg group" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- The framing ------------------------------------------------ */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          {intro.image ? (
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
              <Reveal direction="left" className="mx-auto w-full max-w-sm lg:max-w-none">
                {/* The arch from the BIR CARES page: a rounded top over a portrait. */}
                <div className="img-filler relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[var(--radius-panel)] shadow-float ring-1 ring-primary/30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={intro.image}
                    alt={intro.imageAlt ?? ""}
                    loading="lazy"
                    className="photo h-full w-full object-cover"
                  />
                </div>
              </Reveal>

              <Reveal>
                <p className="eyebrow mb-5">{hero.title}</p>
                <ScriptHeading heading={intro.heading} accent={intro.accent} />
                <div className="mt-8 space-y-5">
                  {intro.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-lg leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {intro.closing && (
                  <p className="mt-8 border-l-2 border-primary pl-5 text-lg font-bold leading-relaxed text-foreground">
                    {intro.closing}
                  </p>
                )}
              </Reveal>
            </div>
          ) : (
            <Reveal className="mx-auto max-w-3xl text-center">
              <ScriptHeading heading={intro.heading} accent={intro.accent} />

              <div className="mt-9 space-y-5">
                {intro.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>

              {intro.closing && (
                <p className="mt-8 text-lg font-bold leading-relaxed text-foreground">
                  {intro.closing}
                </p>
              )}

              <Ornament />
            </Reveal>
          )}
        </div>
      </section>

      {/* ---- The gatherings ----------------------------------------------- */}
      {gatherings && (
        <section className="section-sm border-y border-border bg-surface">
          <div className="container mx-auto px-4 md:px-6">
            <Reveal>
              <ScriptHeading
                heading={gatherings.heading}
                accent={gatherings.accent}
                className="text-center"
              />
              {gatherings.description && (
                <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-muted">
                  {gatherings.description}
                </p>
              )}
            </Reveal>

            <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
              {gatherings.items.map((item) => (
                <StaggerItem key={item.id}>
                  {/*
                    `scroll-mt-24` clears the fixed header: without it a link
                    from the calendar lands with the heading tucked behind it.
                  */}
                  <div id={item.id} className="card flex h-full scroll-mt-24 flex-col overflow-hidden">
                    {item.image && (
                      <div className="img-filler relative h-56 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt=""
                          loading="lazy"
                          className="photo h-full w-full object-cover"
                        />
                        <p className="chip chip-dark absolute left-5 top-5">{item.dates}</p>
                      </div>
                    )}
                    <div className="flex-1 p-8">
                      {!item.image && <p className="chip mb-5">{item.dates}</p>}
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 flex items-center gap-2 text-sm text-muted">
                        <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        {item.location}
                      </p>
                      <p className="mt-5 leading-relaxed text-muted">{item.summary}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* ---- Day by day -------------------------------------------------- */}
      {itinerary && (
        <section className="section-dark relative isolate bg-secondary">
          <div className="grid lg:grid-cols-2">
            {/* On a narrow screen the photograph becomes a band above the
                copy rather than a half-height sliver beside it. */}
            <div className="img-filler relative min-h-72 overflow-hidden lg:min-h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={itinerary.image}
                alt=""
                loading="lazy"
                className="photo absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="px-4 py-20 md:px-10 lg:px-16 lg:py-24">
              <Reveal className="mx-auto max-w-xl text-center">
                <ScriptHeading
                  heading={itinerary.heading}
                  accent={itinerary.accent}
                  onDark
                />
                <p className="mt-6 leading-relaxed text-white/75">
                  {itinerary.description}
                </p>
              </Reveal>

              {/* The itinerary card. In the reference it is a white panel with
                  a colour block offset behind it; here that block is brand
                  gold at low alpha, which survives both themes. */}
              <Reveal className="relative mx-auto mt-12 max-w-xl" delay={0.1}>
                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -right-4 h-full w-full rounded-[var(--radius-panel)] bg-primary/25"
                />

                <div className="relative rounded-[var(--radius-panel)] bg-surface-light p-7 shadow-float md:p-10">
                  <p className="text-center font-serif text-3xl font-bold text-foreground">
                    {itinerary.cardTitle}
                  </p>
                  <p className="mt-1 text-center font-serif text-lg italic tracking-[0.16em] text-primary">
                    {itinerary.cardSubtitle}
                  </p>

                  <Stagger as="ul" className="mt-9 space-y-5" gap={0.05} delay={0}>
                    {itinerary.days.map((day) => {
                      const Icon = DAY_ICONS[day.icon];
                      return (
                        <StaggerItem
                          as="li"
                          key={day.day}
                          className="flex items-start gap-4"
                        >
                          <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <div>
                            <p className="font-semibold leading-snug text-foreground">
                              {day.day} — {day.title}
                            </p>
                            {day.note && (
                              <p className="mt-0.5 text-sm text-muted">
                                {day.note}
                              </p>
                            )}
                          </div>
                        </StaggerItem>
                      );
                    })}
                  </Stagger>

                  <div className="mt-10 flex flex-wrap justify-center gap-3">
                    <CtaLink
                      cta={itinerary.cta}
                      className="btn btn-lg group bg-secondary text-white hover:bg-secondary-hover"
                    />
                    {itinerary.secondaryCta && (
                      <CtaLink
                        cta={itinerary.secondaryCta}
                        className="btn btn-outline btn-lg group"
                      />
                    )}
                  </div>
                  {itinerary.footnote && (
                    <p className="mt-6 text-center text-xs text-muted">
                      {itinerary.footnote}
                    </p>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* ---- What the days are like -------------------------------------- */}
      {highlights && (
        <section className="section bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div
              className={`grid items-start gap-14 lg:gap-20 ${
                highlights.panel ? "lg:grid-cols-2" : ""
              }`}
            >
              <div>
                <Reveal>
                  <ScriptHeading
                    heading={highlights.heading}
                    accent={highlights.accent}
                    className="mb-10 text-center lg:text-left"
                  />
                </Reveal>

                <Stagger className="space-y-4">
                  {highlights.items.map((item) => {
                    const Icon = DAY_ICONS[item.icon];

                    return (
                      <StaggerItem
                        key={item.title}
                        className={`card flex gap-5 overflow-hidden ${item.image ? "items-stretch" : "p-6"}`}
                      >
                        {item.image ? (
                          <div className="img-filler relative w-28 shrink-0 overflow-hidden sm:w-36">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={item.image}
                              alt=""
                              loading="lazy"
                              className="photo absolute inset-0 h-full w-full object-cover"
                            />
                          </div>
                        ) : (
                          <span className="icon-tile shrink-0">
                            <Icon className="h-6 w-6" aria-hidden="true" />
                          </span>
                        )}
                        <div className={item.image ? "py-6 pr-6" : ""}>
                          <h3 className="font-bold text-foreground">{item.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-muted">
                            {item.description}
                          </p>
                        </div>
                      </StaggerItem>
                    );
                  })}
                </Stagger>
              </div>

              {highlights.panel && (
                <div>
                  <Reveal direction="left" className="img-filler overflow-hidden rounded-[var(--radius-panel)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={highlights.panel.image}
                      alt=""
                      loading="lazy"
                      className="photo photo-hover-lift aspect-4/3 w-full object-cover"
                    />
                  </Reveal>

                  <Reveal delay={0.1} className="mt-10 text-center">
                    <ScriptHeading
                      heading={highlights.panel.heading}
                      accent={highlights.panel.accent}
                    />
                    <p className="mt-6 leading-relaxed text-muted">
                      {highlights.panel.description}
                    </p>
                  </Reveal>

                  <Stagger
                    className="mt-8 flex flex-wrap justify-center gap-2.5"
                    gap={0.04}
                    delay={0}
                  >
                    {highlights.panel.perks.map((perk) => (
                      <StaggerItem key={perk}>
                        <span className="chip uppercase tracking-[0.1em]">{perk}</span>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ---- Photographs -------------------------------------------------- */}
      {gallery && gallery.length > 0 && (
        <section className="section-sm border-y border-border bg-surface">
          <div className="container mx-auto px-4 md:px-6">
            <TripGallery images={gallery} alt={hero.title} />
          </div>
        </section>
      )}

      {/* ---- What is included --------------------------------------------- */}
      {includes && (
        <section className="section bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <Reveal className="text-center">
              <ScriptHeading heading={includes.heading} accent={includes.accent} />
            </Reveal>

            <Stagger
              className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-3 md:grid-cols-2"
              gap={0.05}
              delay={0}
            >
              {includes.items.map((item) => (
                <StaggerItem
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-primary/30 bg-surface px-5 py-4"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-foreground">
                    {item}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="mt-12 text-center">
              <CtaLink cta={includes.cta} className="btn btn-primary btn-lg group" />
            </div>
          </div>
        </section>
      )}

      {/* ---- Price -------------------------------------------------------- */}
      {pricing && (
        <section className="section section-dark bg-grid bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <Reveal
              className="mx-auto max-w-3xl rounded-[var(--radius-panel)] border border-primary/30 bg-primary/12 px-6 py-14 text-center shadow-float md:px-14"
              direction="none"
            >
              <ScriptHeading
                heading={pricing.heading}
                accent={pricing.accent}
                onDark
              />

              <p className="mt-6 font-serif text-2xl text-white/90">
                {pricing.subtitle}
              </p>
              <p className="mt-2 font-serif text-lg italic text-white/70">
                {pricing.roomLabel}
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                {pricing.options.map((option) => (
                  <div
                    key={option.label}
                    className="min-w-40 rounded-2xl border border-white/35 px-7 py-5"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-white/70">
                      {option.label}
                    </p>
                    <p className="mt-1 font-serif text-3xl font-bold text-white">
                      {option.price}
                    </p>
                    <p className="mt-0.5 text-sm italic text-white/70">
                      {option.unit}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <CtaLink
                  cta={pricing.cta}
                  className="btn btn-lg group bg-secondary text-white hover:bg-secondary-hover"
                />
              </div>

              {pricing.note && (
                <p className="mx-auto mt-7 max-w-xl text-sm leading-relaxed text-white/65">
                  {pricing.note}
                </p>
              )}
            </Reveal>
          </div>
        </section>
      )}

      {/* ---- How to join ------------------------------------------------- */}
      {steps && (
        <section id={steps.id} className="section scroll-mt-24 bg-surface">
          <div className="container mx-auto px-4 md:px-6">
            <Reveal className="mx-auto max-w-3xl text-center">
              <ScriptHeading heading={steps.heading} accent={steps.accent} />
              {steps.description && (
                <p className="mt-6 leading-relaxed text-muted">{steps.description}</p>
              )}
            </Reveal>

            <Stagger as="ul" className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
              {steps.items.map((item) => (
                <StaggerItem as="li" key={item.label} className="card flex h-full flex-col p-8">
                  <p className="chip self-start">{item.label}</p>
                  <h3 className="mt-5 font-serif text-2xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">{item.description}</p>
                  <div className="mt-8">
                    <CtaLink cta={item.cta} className="btn btn-primary btn-lg group w-full" />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* ---- The small print ---------------------------------------------- */}
      {info && (
        <section className="section bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <Reveal className="text-center">
              <ScriptHeading heading={info.heading} accent={info.accent} />
            </Reveal>

            <Stagger className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {info.blocks.map((block) => (
                <StaggerItem key={block.title}>
                  {/* The reference labels each block with a solid colour bar.
                      Two tones, alternating, so a long column of small print
                      keeps some structure as you scan it. */}
                  <h3
                    className={`rounded-t-xl px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] ${
                      block.tone === "primary"
                        ? "bg-primary text-on-primary"
                        : "bg-secondary text-white"
                    }`}
                  >
                    {block.title}
                  </h3>

                  <div className="rounded-b-xl border border-t-0 border-border bg-surface px-5 py-6">
                    {block.body?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mb-4 text-sm leading-relaxed text-muted last:mb-0"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {block.bullets && (
                      <ul className="space-y-2.5">
                        {block.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                            />
                            <span className="text-sm leading-relaxed text-muted">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {trip.closing?.image ? (
        <PhotoSplitBand image={trip.closing.image} imageSide="left">
          <p className="eyebrow eyebrow-on-dark mb-5">
            {trip.closing.eyebrow ?? hero.title}
          </p>
          <h2 className="display-2 text-white">{trip.closing.title}</h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
            {trip.closing.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaLink cta={trip.closing.cta} className="btn btn-primary btn-lg group" />
            {trip.closing.secondaryCta && (
              <CtaLink cta={trip.closing.secondaryCta} className="btn btn-on-dark btn-lg group" />
            )}
          </div>
        </PhotoSplitBand>
      ) : (
        trip.closing && (
          <CTABand
            title={trip.closing.title}
            description={trip.closing.description}
            cta={trip.closing.cta}
            secondaryCta={trip.closing.secondaryCta}
          />
        )
      )}
    </div>
  );
}
