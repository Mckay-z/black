import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock,
  Gift,
  HeartHandshake,
  MapPin,
  Sparkles,
  Ticket,
  UtensilsCrossed,
  Users,
} from "lucide-react";

import FillerImage from "@/components/ui/FillerImage";
import SocialLinks from "@/components/navigation/SocialLinks";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { getSiteSettings } from "@/lib/cms";
import { PHOTOS } from "@/lib/images";

/**
 * The Connection Table™: Indianapolis — the ASHA 2026 dinner sales page.
 *
 * Built from the client's creative brief, which asked for the AOTA dinner page
 * as a reference point and then for something deliberately unlike it: warm,
 * intimate and experience-led rather than a conference flyer. Two decisions
 * follow from that and are worth stating, because they are what makes this
 * page look different from every other interior page on the site.
 *
 *   1. It does NOT use `PageHero`. That component is the site's standard
 *      interior banner — left-aligned headline on a black ground — and it is
 *      right for `/trips/ghana`. This page opens like an invitation instead:
 *      centred, on a photograph, with the city set under a rule.
 *
 *      It still carries `PageHero`'s breadcrumb, in the same markup and the
 *      same colours, sitting left of the centred composition. Most of this
 *      page's traffic arrives cold from an Instagram link with no history to
 *      go back through, which is an argument for the trail rather than
 *      against it: it is the only route up into the rest of the site above
 *      the fold.
 *
 *   2. Every dark band is `.section-espresso`, not `.section-dark`. Same
 *      contract, brown ground instead of black — see the note beside it in
 *      `globals.css`. The brief asked for the brand's brown/cream side; the
 *      gold, the cream text and the card treatment are the site's own.
 *
 * ── The series ──────────────────────────────────────────────────────────
 *
 * The client wants The Connection Table to travel to other cities and
 * conferences, so the route is `/connection-table/<city>` rather than a
 * top-level `/asha-dinner`. A second city is a copy of this file with new
 * content constants, and `/connection-table` redirects here until there is
 * more than one to choose between (see `next.config.ts`).
 *
 * ── What still needs the client ─────────────────────────────────────────
 *
 * Both are one-line edits below, and both are marked at the constant:
 *
 *   MENU       The entrée options from Kountry Kitchen. The brief says these
 *              are coming in a separate email once confirmed. The section
 *              renders a holding line while the list is empty rather than
 *              inventing dishes for a real restaurant.
 *
 *   RESERVE_URL  The checkout link. Nothing on this site takes card payments
 *              itself — `/community/students` sells through Stripe payment
 *              links and that is the established route — so the buttons point
 *              at a hosted checkout. Until one exists they point at the ticket
 *              panel, which says when sales open instead of 404-ing.
 *
 * ── Checkout: what the payment link has to collect ──────────────────────
 *
 * The brief is specific that the entrée must be captured per ticket and must
 * be impossible to skip, so the restaurant can be given a final count. A
 * Stripe payment link collects name and email natively and allows three
 * custom fields, which is exactly the three the brief asks for:
 *
 *   1. Meal Selection ......... dropdown, REQUIRED, one option per entrée
 *   2. Profession ............. dropdown, REQUIRED — SLP / SLPA / Student
 *   3. Food Allergies or
 *      Dietary Restrictions ... text, optional
 *
 * Set "Limit the number of payments" to the seat count so the link closes
 * itself when the room is full, and leave quantity at one per checkout — a
 * guest buying two seats on one transaction can only answer the meal question
 * once, which loses the per-attendee count the whole requirement exists for.
 * Each answer then appears against its own line in the Stripe payments export.
 */

// ── Event ─────────────────────────────────────────────────────────────────
// November 20, 2026 is a Friday, which agrees with the brief. The year is not
// in the brief; it follows from ASHA 2026 and matches the "ASHA Convention
// Dinner" entry already in `lib/trips.ts`.
const EVENT = {
  venue: "Kountry Kitchen",
  city: "Indianapolis, IN",
  date: "Friday, November 20, 2026",
  time: "7:30 PM",
  price: "$125",
} as const;

/**
 * The hosted checkout. `null` until the client supplies it — see the block
 * comment above for what the link needs to collect.
 *
 * Read from the environment first so the link can be swapped on the host
 * without a deploy, which matters on a page whose seats can sell out mid-week.
 */
const RESERVE_URL: string | null =
  process.env.NEXT_PUBLIC_CONNECTION_TABLE_URL || null;

/** Shown in the ticket panel while `RESERVE_URL` is unset. */
const SALES_OPEN = "Thursday, September 25";

/**
 * Entrées, for the "What's for Dinner?" section.
 *
 * Empty until the client sends the confirmed menu. Kountry Kitchen is a real
 * restaurant and this is a page people pay $125 from, so the list stays empty
 * rather than being filled with plausible-sounding dishes.
 *
 * Adding them is this array; the section and the note below it already handle
 * any number.
 */
const MENU: { name: string; description: string }[] = [];

const INCLUDES = [
  {
    icon: UtensilsCrossed,
    title: "A Curated Dinner",
    description:
      "A thoughtfully selected dinner, chosen for the room rather than assembled from a banquet sheet.",
  },
  {
    icon: Users,
    title: "Intentional Connection",
    description:
      "Black SLPs and students across specialties, settings, cities, and career stages — in one room, on purpose.",
  },
  {
    icon: Gift,
    title: "The Gift Experience",
    description:
      "Thoughtfully curated gifts and resources from Black in Rehab and our event partners.",
  },
  {
    icon: Sparkles,
    title: "An Intimate Setting",
    description:
      "Small enough for a real conversation, rather than another crowded conference mixer.",
  },
  {
    icon: HeartHandshake,
    title: "The BIR Community",
    description:
      "A way to stay connected after Indianapolis — professional development, travel, service, and community.",
  },
] as const;

/** Set as a word wall in "Who's at the table?" — order is the rhythm. */
const THE_ROOM = [
  "Practicing SLPs",
  "Graduate Students",
  "New Grads",
  "Seasoned Clinicians",
  "Educators",
  "Entrepreneurs",
  "Future Collaborators",
  "Maybe even your next friend",
] as const;

/**
 * Breadcrumb trail.
 *
 * Trips, not Get Involved: the evening is already listed in `lib/trips.ts`
 * and on `/trips/upcoming-events`, so this is the section a visitor lands
 * back in if they follow the trail up. The last crumb drops the city — the
 * headline two lines below it says Indianapolis in 40px, and repeating it
 * here only makes the trail wrap on a phone.
 */
const BREADCRUMBS: { label: string; href?: string }[] = [
  { label: "Home", href: "/" },
  { label: "Trips", href: "/trips" },
  { label: "The Connection Table" },
];

const DETAILS = [
  { icon: MapPin, label: "Where", value: `${EVENT.venue} — ${EVENT.city}` },
  { icon: CalendarDays, label: "When", value: EVENT.date },
  { icon: Clock, label: "Time", value: EVENT.time },
  { icon: Ticket, label: "Seat", value: EVENT.price },
] as const;

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://blackinrehab.org"
).replace(/\/$/, "");

export const metadata: Metadata = {
  title: "The Connection Table™: Indianapolis | Black In Rehab Foundation",
  description:
    "An elevated dinner experience for Black SLPs and SLP students attending ASHA 2026. Friday, November 20 at Kountry Kitchen, Indianapolis. Limited seats.",
  // Most of this page's traffic arrives from an Instagram link, where the
  // share card is the first impression rather than the page itself.
  openGraph: {
    title: "The Connection Table™: Indianapolis",
    description:
      "Dinner. Conversation. Community. Connection. An elevated dinner experience for Black SLPs & SLP students at ASHA 2026.",
    url: `${SITE_URL}/connection-table/indianapolis`,
    type: "website",
    images: [{ url: `${SITE_URL}${PHOTOS.connectionTableFriends}` }],
  },
};

/**
 * The registration button.
 *
 * One component for all four placements so the copy can differ while the
 * destination cannot drift between them. With a checkout configured it is an
 * external `<a>` — the destination is off-site, so a `next/link` would only
 * prefetch a route that does not exist. Without one it drops the visitor at
 * the ticket panel, which tells them when sales open.
 */
function ReserveButton({
  label,
  variant = "primary",
  className = "",
}: {
  label: string;
  variant?: "primary" | "on-dark";
  className?: string;
}) {
  const classes = `btn btn-${variant} btn-lg group ${className}`;

  if (!RESERVE_URL) {
    return (
      <Link href="#tickets" className={classes}>
        {label}
        <ArrowRight className="btn-arrow w-5 h-5" />
      </Link>
    );
  }

  return (
    <a
      href={RESERVE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {label}
      <ArrowRight className="btn-arrow w-5 h-5" />
    </a>
  );
}

/**
 * "Limited seats", said once per band at most and never with a countdown.
 *
 * The brief wanted the scarcity felt without the page turning salesy, so it is
 * a quiet line of small caps with a gold dot rather than a banner.
 */
function SeatsNote({ className = "" }: { className?: string }) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-primary ${className}`}
    >
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full bg-primary"
      />
      Limited seats available
    </p>
  );
}

export default async function ConnectionTableIndianapolisPage() {
  const settings = await getSiteSettings();

  return (
    <div className="bg-background">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="section-espresso relative isolate overflow-hidden bg-background pt-32 pb-20 md:pt-44 md:pb-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 scale-105 bg-cover bg-center opacity-45"
          style={{ backgroundImage: `url('${PHOTOS.connectionTableFriends}')` }}
        />
        {/* Two scrims: one grounding the whole frame, one weighting the
            bottom edge so the fact line stays legible over the photograph. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[#1a1310]/80"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-t from-[#1a1310] via-[#1a1310]/45 to-[#1a1310]/75"
        />
        <div
          aria-hidden="true"
          className="absolute -z-10 left-1/2 top-1/4 h-[34rem] w-[34rem] max-w-full -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        />

        <div className="container relative mx-auto px-4 md:px-6">
          {/*
            Breadcrumb, matching `PageHero`'s exactly — same markup, same
            chevrons, same colours — so it reads as the site's chrome rather
            than as part of this page's composition. Left-aligned for that
            reason, while everything below it is centred: it is navigation,
            not the invitation.
          */}
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-1 text-sm font-medium md:mb-12"
          >
            {BREADCRUMBS.map((crumb, idx) => (
              <span key={crumb.label} className="flex items-center gap-1">
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="rounded-md px-1 py-0.5 text-primary transition-colors hover:text-accent"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="px-1 py-0.5 text-white/60">{crumb.label}</span>
                )}
                {idx < BREADCRUMBS.length - 1 && (
                  <ChevronRight
                    className="h-3.5 w-3.5 text-white/30"
                    aria-hidden="true"
                  />
                )}
              </span>
            ))}
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary sm:text-sm">
              Black in Rehab Presents
            </p>

            <h1 className="display-1 mt-7 text-white">
              The Connection Table
              <span className="align-super text-[0.4em] tracking-normal">™</span>
            </h1>

            <div className="mt-6 flex items-center justify-center gap-4">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-linear-to-r from-transparent to-primary/70 sm:w-16"
              />
              <span className="font-serif text-xl italic text-primary sm:text-2xl">
                Indianapolis
              </span>
              <span
                aria-hidden="true"
                className="h-px w-10 bg-linear-to-l from-transparent to-primary/70 sm:w-16"
              />
            </div>

            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
              An elevated dinner experience for Black SLPs &amp; SLP students
              attending ASHA 2026.
            </p>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70">
              You came to ASHA to grow professionally. Come to The Connection
              Table to find your people. After a full day of sessions and
              networking, we&rsquo;re creating a room where you can put the
              conference badge down, take a seat, and simply connect.
            </p>

            {/* The four-word refrain, set as four beats rather than a
                sentence — it is the line the whole page is built around. */}
            <p className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-serif text-lg text-white sm:gap-x-5 sm:text-xl">
              {["Dinner", "Conversation", "Community", "Connection"].map(
                (word, idx) => (
                  <span key={word} className="flex items-center gap-x-3 sm:gap-x-5">
                    {idx > 0 && (
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-primary/70"
                      />
                    )}
                    {word}
                  </span>
                ),
              )}
            </p>

            <div className="mt-11 flex flex-col items-center gap-5">
              <ReserveButton label="RESERVE MY SEAT" className="w-full sm:w-auto" />
              <SeatsNote />
            </div>
          </div>
        </div>

        {/* Fact line. Everything a visitor needs before they decide to keep
            reading, in the order they ask for it. */}
        <div className="container relative mx-auto mt-16 px-4 md:px-6">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-x-8 gap-y-3 border-t border-white/15 pt-8 text-center text-sm text-white/70 sm:flex-row sm:flex-wrap">
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
              {EVENT.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
              {EVENT.time}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {EVENT.venue}, {EVENT.city}
            </span>
            <span className="flex items-center gap-2">
              <Ticket className="h-4 w-4 text-primary" aria-hidden="true" />
              {EVENT.price}
            </span>
          </div>
        </div>
      </section>

      {/* ── This isn't just dinner ────────────────────────────────────── */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow mb-6">The Invitation</p>

              <h2 className="display-2 text-foreground">
                This isn&rsquo;t just dinner.
              </h2>

              <div className="mt-7 space-y-6 text-lg leading-relaxed text-muted">
                <p>
                  Some of the best connections at a conference don&rsquo;t
                  happen during the sessions.
                </p>
                <p>
                  The Connection Table brings Black SLPs and future SLPs from
                  across the country together for an intimate evening of great
                  food, genuine conversation, and relationships that can
                  continue long after ASHA ends.
                </p>
                <p className="font-serif text-xl italic text-foreground sm:text-2xl">
                  Whether you&rsquo;re coming alone or already know half the
                  room, there&rsquo;s a seat for you at this table.
                </p>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <FillerImage
                src={PHOTOS.connectionTableGroup}
                alt="Guests at a Black in Rehab evening, gathered together before dinner"
                wrapperClassName="aspect-[4/5] rounded-[var(--radius-panel)] shadow-float"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── What your ticket includes ─────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow mb-5">What Your Ticket Includes</p>
            <h2 className="display-2 text-foreground">
              Everything the evening is made of
            </h2>
          </Reveal>

          {/* Five items on a three-column grid: the last two centre
              themselves on the final row rather than hanging left. */}
          <Stagger className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {INCLUDES.map(({ icon: Icon, title, description }, idx) => (
              <StaggerItem
                key={title}
                className={`card group p-8 lg:col-span-2 ${
                  idx === 3 ? "lg:col-start-2" : ""
                }`}
              >
                <span className="icon-tile">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-xl font-bold text-foreground">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Who's at the table ────────────────────────────────────────── */}
      <section className="section-espresso section-lg relative isolate overflow-hidden bg-background">
        <div
          aria-hidden="true"
          className="absolute -z-10 -right-32 top-0 h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-3xl"
        />

        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow eyebrow-on-dark mb-6">Who&rsquo;s at the table?</p>

            {/* The word wall. Deliberately typeset as one run of display text
                rather than a list of cards — the brief asked for this to be
                the visually bold moment, and a grid of eight boxes reads as
                an org chart. */}
            <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 font-serif text-[1.375rem] font-bold leading-tight text-white sm:gap-x-6 sm:text-4xl lg:text-5xl">
              {THE_ROOM.map((role, idx) => (
                <span key={role} className="flex items-center gap-x-4 sm:gap-x-6">
                  {idx > 0 && (
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-primary/60"
                    />
                  )}
                  <span className={idx === THE_ROOM.length - 1 ? "italic text-primary" : ""}>
                    {role}
                  </span>
                </span>
              ))}
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mx-auto mt-14 max-w-2xl text-center">
            <p className="text-lg leading-relaxed text-white/75">
              You don&rsquo;t need a certain title or number of years behind
              your name. If you&rsquo;re a Black SLP or SLP student attending
              ASHA and looking for genuine community, this table was created
              with you in mind.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Event details & tickets ───────────────────────────────────── */}
      <section id="tickets" className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="mx-auto max-w-3xl">
            <div className="card overflow-hidden p-0 shadow-lift">
              <div className="border-b border-border px-5 py-9 text-center sm:px-12">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary sm:text-xs">
                  Event Details
                </p>
                <h2 className="display-3 mt-4 text-foreground">
                  The Connection Table
                  <span className="align-super text-[0.5em] tracking-normal">™</span>
                  <span className="block font-serif italic text-primary sm:inline sm:not-italic sm:text-foreground">
                    <span className="hidden sm:inline">: </span>
                    Indianapolis
                  </span>
                </h2>
              </div>

              <dl className="divide-y divide-border">
                {DETAILS.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 px-5 py-5 sm:px-12"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                    >
                      <Icon className="h-[1.15rem] w-[1.15rem]" />
                    </span>
                    <dt className="sr-only">{label}</dt>
                    <dd className="text-base font-semibold text-foreground sm:text-lg">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="border-t border-border bg-primary/5 px-5 py-9 text-center sm:px-12">
                <p className="text-muted">
                  Your ticket includes dinner, The Connection Table experience,
                  and curated guest gifts.
                </p>

                <div className="mt-7 flex flex-col items-center gap-5">
                  <ReserveButton
                    label="RESERVE MY SEAT"
                    className="w-full sm:w-auto"
                  />
                  <SeatsNote />
                </div>

                {/*
                  Sales had not opened when this page was built and the client
                  has not yet supplied the checkout link. Saying so is better
                  than a button that goes nowhere — and this whole block
                  disappears the moment `RESERVE_URL` is set.
                */}
                {!RESERVE_URL && (
                  <p className="mt-7 border-t border-border pt-6 text-sm text-muted">
                    Reservations open{" "}
                    <strong className="text-foreground">{SALES_OPEN}</strong>.
                    Want to be told the moment they do?{" "}
                    <Link
                      href="/contact"
                      className="font-semibold text-primary underline underline-offset-4 hover:text-primary-hover"
                    >
                      Send us a note
                    </Link>{" "}
                    and we&rsquo;ll put you on the list.
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── What's for dinner ─────────────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <p className="eyebrow mb-5">The Menu</p>
            <h2 className="display-2 text-foreground">What&rsquo;s for dinner?</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Dinner is served at {EVENT.venue}, an Indianapolis institution.
              Here is what will be waiting at your place setting.
            </p>
          </Reveal>

          <div className="mx-auto max-w-4xl">
            {MENU.length > 0 ? (
              <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {MENU.map((item) => (
                  <StaggerItem key={item.name} className="card p-8">
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {item.name}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
            ) : (
              <Reveal className="card card-sunken px-5 py-12 text-center sm:px-12">
                <span className="icon-tile mx-auto">
                  <UtensilsCrossed className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted">
                  The entrée selections are being finalised with {EVENT.venue}
                  &rsquo;s kitchen and will be listed here before reservations
                  open.
                </p>
              </Reveal>
            )}

            <Reveal
              delay={0.1}
              className="mt-12 flex flex-col items-center gap-6 text-center"
            >
              <p className="max-w-xl font-serif text-lg italic text-foreground sm:text-xl">
                Your meal is included with your ticket. You&rsquo;ll select your
                entrée when reserving your seat.
              </p>
              <ReserveButton label="SAVE MY SEAT" className="w-full sm:w-auto" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Come alone. Leave connected. ──────────────────────────────── */}
      <section className="section-espresso relative isolate flex min-h-[38rem] items-center overflow-hidden bg-background py-24 md:min-h-[44rem]">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 scale-105 bg-cover bg-[position:50%_30%] opacity-55"
          style={{ backgroundImage: `url('${PHOTOS.connectionTableEmbrace}')` }}
        />
        {/* Copy sits right of the photograph's subject on desktop and over the
            foot of it on mobile, so the gradient runs both ways. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-t from-[#1a1310] via-[#1a1310]/70 to-[#1a1310]/30 lg:bg-linear-to-l lg:from-[#1a1310] lg:via-[#1a1310]/80 lg:to-[#1a1310]/20"
        />

        <div className="container relative mx-auto px-4 md:px-6">
          <Reveal className="ml-auto max-w-xl lg:w-1/2">
            <p className="eyebrow eyebrow-on-dark mb-6">The Point of It</p>

            <h2 className="display-2 text-white">
              Come alone.
              <span className="block text-gold-gradient">Leave connected.</span>
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-relaxed text-white/80">
              <p>
                You do not need to already know someone. That&rsquo;s kind of
                the point.
              </p>
              <p>
                We&rsquo;ll intentionally create opportunities for guests to
                meet the people around them, so no one is left wondering where
                to sit or who to talk to.
              </p>
              <p className="font-serif text-xl italic text-white">
                Come as you are. Take your seat. Leave with community.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── You belong in this room ───────────────────────────────────── */}
      <section className="section-lg bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="section-espresso relative isolate overflow-hidden rounded-[var(--radius-panel)] border border-white/10 bg-background px-6 py-16 text-center shadow-float md:px-16 md:py-24">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/70 to-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute -z-10 left-1/2 top-0 h-96 w-[42rem] max-w-full -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/15 blur-3xl"
            />

            <h2 className="display-2 mx-auto max-w-3xl text-white">
              You belong in this room.
            </h2>

            <div className="mx-auto mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-white/75">
              <p>
                Not because of your title. Not because of where you work. Not
                because of how many years you&rsquo;ve been practicing.
              </p>
              <p>
                Because there should be spaces in this profession where being
                seen, heard, and connected isn&rsquo;t something you have to
                earn. And we&rsquo;re creating one in Indianapolis.
              </p>
            </div>

            <p className="mt-10 font-serif text-2xl italic text-primary sm:text-3xl">
              One table. A room full of possibility.
            </p>

            <div className="mt-11 flex flex-col items-center gap-5">
              <ReserveButton
                label="I WANT A SEAT AT THE TABLE"
                className="w-full sm:w-auto"
              />
              <SeatsNote />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── About Black in Rehab ──────────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <FillerImage
                src={PHOTOS.connectionTableChampagne}
                alt="A welcome pour at a Black in Rehab evening"
                wrapperClassName="aspect-[4/3] rounded-[var(--radius-card)] shadow-lift"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow mb-5">About Black in Rehab</p>

              <h2 className="display-3 text-foreground">
                Presented by the Black in Rehab Foundation
              </h2>

              {/* The brand's four words, set as the mark they are. */}
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {["Seen", "Heard", "Empowered", "Transformed"].map(
                  (word, idx) => (
                    <span key={word} className="flex items-center gap-x-3">
                      {idx > 0 && (
                        <span
                          aria-hidden="true"
                          className="h-1 w-1 rounded-full bg-primary/60"
                        />
                      )}
                      {word}
                    </span>
                  ),
                )}
              </p>

              <p className="mt-6 text-lg leading-relaxed text-muted">
                Black in Rehab is a 501(c)(3) nonprofit creating community,
                professional development, mentorship, service, and global
                opportunities for Black OT, PT, and SLP professionals and
                students.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="btn btn-outline">
                  About the Foundation
                </Link>
                <Link href="/community/join" className="btn btn-outline">
                  Join the Community
                </Link>
              </div>

              <SocialLinks urls={settings} />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
