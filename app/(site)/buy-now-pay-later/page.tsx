import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  ChevronRight,
  Clock,
  CreditCard,
  ExternalLink,
  FileText,
  Info,
  Lock,
  Mail,
  MapPin,
  Plus,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import ArchPhoto from "@/components/about/ArchPhoto";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import TripSelector from "@/components/pay-later/TripSelector";
import { PHOTOS } from "@/lib/images";
import { BOOKING_TEAM, PROVIDERS } from "@/lib/pay-later";

export const metadata: Metadata = {
  title: "Buy Now, Pay Later | Black In Rehab Foundation",
  description:
    "Trip payment schedules and independent financing resources for Black in Rehab group trips — what to check before you book with Vakae Luxe.",
};

/**
 * Buy Now, Pay Later — payment resources for the group trips.
 *
 * Built from the client's brief and mockup ("Travel Now, Pay Later card"). It
 * explains and links out; it takes no payment and collects no card details.
 * Bookings and payments are Vakae Luxe's, through TravelJoy.
 *
 * Two things are kept visibly apart, because the brief asks for it and
 * because they behave differently when something goes wrong:
 *   - a trip's own payment schedule (deposit + installments, paid to the
 *     booking team), and
 *   - third-party financing (a separate agreement with Affirm, Klarna or Zip).
 *
 * PHOTOGRAPHY. The client asked that this page not repeat photos used
 * elsewhere on the site, so it uses only the four library shots no other page
 * does (canopy walk, beach yoga, singing bowl, retreat welcome banner). The
 * other bands carry drawn artwork instead — the gold "virtual card" — rather
 * than borrowing another page's pictures. New photos for this page belong in
 * `lib/images.ts` like any other; check they are not used elsewhere first.
 *
 * Provider data and the trip packages live in `lib/pay-later.ts`. Trip pages
 * link here with `?trip=` so the selector can preselect their package.
 */

const START_STEPS = [
  {
    title: "Choose your trip",
    body: "Note the price, the deposit and the final payment date.",
  },
  {
    title: "Confirm your options",
    body: `Ask ${BOOKING_TEAM.name} which payment methods work with your booking.`,
  },
  {
    title: "Review the terms",
    body: "Compare repayment dates, interest, fees and the total cost.",
  },
];

const SCHEDULE_STEPS = [
  "Open your selected trip's booking form.",
  "Review the payment dates and the cancellation terms.",
  `Pay through the secure ${BOOKING_TEAM.name} booking link.`,
  "Complete the balance by the trip's final payment deadline.",
];

const VIRTUAL_CARD_STEPS = [
  {
    title: "Confirm compatibility",
    body: `Check with the provider and with ${BOOKING_TEAM.name} before you apply.`,
  },
  {
    title: "Apply with the provider",
    body: "Apply directly on the provider's own site or app, and review the amount, repayment plan, interest and fees.",
  },
  {
    title: "Use the secure checkout",
    body: "If a virtual card is offered and accepted, enter it only in the secure booking checkout.",
  },
  {
    title: "Receive confirmation",
    body: "Your place is reserved only once payment and booking are confirmed.",
  },
];

const BEFORE_YOU_BOOK = [
  { icon: FileText, text: "Financing approval does not reserve your place." },
  { icon: Clock, text: "Trip payment deadlines still apply." },
  { icon: CreditCard, text: "You repay the provider under your agreement with them." },
  { icon: ShieldCheck, text: "The trip's cancellation policy still applies." },
];

const FAQS = [
  {
    q: "What is the difference between a payment schedule and financing?",
    a: `A payment schedule is set by the trip: you pay a deposit and then installments directly through ${BOOKING_TEAM.name}. Financing is a separate agreement between you and a provider such as Affirm, Klarna or Zip, with its own approval, terms and repayment dates.`,
  },
  {
    q: "Is approval guaranteed?",
    a: "No. Each provider decides eligibility, the amount and the terms. Black in Rehab and Vakae Luxe have no say in a provider's decision.",
  },
  {
    q: "Will I pay interest or fees?",
    a: "You might. Depending on the provider and the plan, interest, fees or a down payment can apply. Read the provider's terms and the total cost before you accept.",
  },
  {
    q: "Does financing approval reserve my place or extend my deadline?",
    a: "No. Your place is reserved only when payment and booking are confirmed, and the trip's payment deadlines stay the same whether or not you use financing.",
  },
  {
    q: "Can I use a virtual card?",
    a: `Only if the provider allows the purchase and the booking checkout accepts the card. Confirm with ${BOOKING_TEAM.name} before you apply.`,
  },
  {
    q: "What if my payment is declined?",
    a: `Contact the provider first, then ${BOOKING_TEAM.name}, before trying again. A declined payment does not hold your place or move a payment deadline.`,
  },
  {
    q: "What happens if I cancel my trip?",
    a: "Cancelling a trip does not automatically cancel a financing agreement. Any refund follows the trip's cancellation policy, and your repayments follow the provider's own refund and repayment instructions.",
  },
  {
    q: "Who handles my booking?",
    a: `${BOOKING_TEAM.name} handles trip bookings and payments through its secure TravelJoy booking links.`,
  },
];

const BOOKING_TEAM_MAILTO = `mailto:${BOOKING_TEAM.email}`;

/** A gold-ringed step number, as in the client's mockup. */
function StepNumber({ n, size = "md" }: { n: number; size?: "sm" | "md" }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/12 font-serif font-bold text-primary ${
        size === "sm" ? "h-7 w-7 text-sm" : "h-12 w-12 text-xl"
      }`}
    >
      {n}
    </span>
  );
}

/** The amber notice strip used for disclosures. */
function Notice({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-start gap-3 rounded-2xl border border-primary/35 bg-primary/10 px-5 py-4 text-sm leading-relaxed text-foreground">
      <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

/** A rounded photo tile. */
function PhotoTile({ src, alt = "", className = "" }: { src: string; alt?: string; className?: string }) {
  return (
    <div
      className={`img-filler overflow-hidden rounded-[var(--radius-card)] shadow-float ring-1 ring-primary/20 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" className="photo h-full w-full object-cover" />
    </div>
  );
}

/**
 * Two drawn cards, fanned — the page's own artwork in place of a photo.
 * Deliberately generic: no network mark, no provider name, a masked number,
 * so it cannot be read as any real card or as an endorsement.
 */
function CardArt({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`relative mx-auto aspect-[1.3] w-full max-w-md ${className}`}>
      {/* Back card: black with a gold hairline. */}
      <div className="absolute left-0 top-0 aspect-[1.586] w-[82%] -rotate-6 rounded-2xl border border-primary/40 bg-linear-to-br from-[#1a1310] to-black p-6 shadow-float">
        <div className="h-full rounded-xl border border-white/5 bg-[radial-gradient(circle_at_80%_20%,rgb(255_255_255/0.08),transparent_55%)]" />
      </div>
      {/* Front card: gold. */}
      <div className="absolute bottom-0 right-0 flex aspect-[1.586] w-[82%] rotate-3 flex-col justify-between rounded-2xl bg-linear-to-br from-[#e6c46a] via-[#b08d28] to-[#7a5c12] p-6 text-black shadow-float">
        <div className="flex items-start justify-between">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em]">Virtual Card</span>
          <Lock className="h-4 w-4" />
        </div>
        <span className="h-8 w-11 rounded-md bg-linear-to-br from-[#f7e7b0] to-[#c9a43f] ring-1 ring-black/15" />
        <div>
          <p className="font-mono text-sm tracking-[0.2em] md:text-base">•••• •••• •••• ••••</p>
          <p className="mt-2 font-serif text-lg italic">Travel now, pay later</p>
        </div>
      </div>
    </div>
  );
}

export default function BuyNowPayLaterPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ---- Banner: copy left, the canopy walk in an arch right ---------- */}
      <section className="section-dark relative isolate overflow-hidden bg-black">
        <div
          aria-hidden="true"
          className="absolute -right-40 top-0 -z-10 h-[36rem] w-[36rem] rounded-full bg-primary/15 blur-3xl"
        />
        <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 opacity-60" />

        <div className="container relative mx-auto grid grid-cols-1 items-center gap-12 px-4 pb-20 pt-32 md:px-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:pb-24 lg:pt-36">
          <div>
            <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-1 text-sm font-medium">
              <Link href="/" className="rounded-md px-1 py-0.5 text-primary transition-colors hover:text-accent">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-white/30" aria-hidden="true" />
              <span aria-current="page" className="px-1 py-0.5 text-white/60">
                Buy Now, Pay Later
              </span>
            </nav>

            <Reveal direction="left" distance={28}>
              <p className="chip chip-dark mb-6 uppercase tracking-[0.14em]">
                <Wallet className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                Payment resources
              </p>
              <h1 className="display-1 text-white">
                Travel Now,
                <br />
                <span className="font-serif italic text-gold-gradient">Pay Later.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
                Explore payment resources for your next Black in Rehab experience — and know your options before you book.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="#payment-options" className="btn btn-primary btn-lg group">
                  EXPLORE YOUR OPTIONS <ArrowRight className="btn-arrow h-5 w-5" />
                </Link>
                <Link href="/trips" className="btn btn-on-dark btn-lg">
                  View Group Trips
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" className="mx-auto w-full max-w-xs sm:max-w-sm">
            <ArchPhoto
              src={PHOTOS.ghanaCanopy}
              alt="A traveller cheering on a canopy walkway in Ghana"
              position="center 30%"
            />
          </Reveal>
        </div>
      </section>

      {/* ---- Start here: steps beside the beach-yoga arch ---------------- */}
      <section className="section bg-background">
        <div className="container mx-auto grid grid-cols-1 items-center gap-14 px-4 md:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <Reveal direction="left" className="relative mx-auto w-full max-w-sm pb-10 pr-10 lg:max-w-md">
            <ArchPhoto
              src={PHOTOS.retreatBeachYoga}
              alt="Black in Rehab travellers in a yoga session on the beach"
              position="center 70%"
            />
            <PhotoTile
              src={PHOTOS.retreatSingingBowl}
              alt="A sound-bowl session at a Black in Rehab retreat"
              className="absolute bottom-0 right-0 aspect-square w-2/5 border-4 border-background"
            />
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow mb-5">Before You Pay</p>
              <h2 className="display-2 text-foreground">
                Start <span className="font-serif italic text-primary">Here</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Three steps to understand your payment options and prepare for your trip.
              </p>
            </Reveal>

            <Stagger as="ol" className="mt-10 space-y-7">
              {START_STEPS.map((step, i) => (
                <StaggerItem as="li" key={step.title} className="flex gap-5">
                  <StepNumber n={i + 1} />
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-muted">{step.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="mt-10">
              <Notice>
                The financing providers on this page are independent resources, not confirmed checkout options. Provider approval and booking acceptance must both be confirmed.
              </Notice>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Trip payment schedule: the welcome banner beside the steps --- */}
      <section className="section bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="card grid overflow-hidden lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <div className="img-filler relative min-h-96">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTOS.retreatBanner}
                alt="Guests beside the Black in Rehab Retreat welcome banner"
                loading="lazy"
                className="photo absolute inset-0 h-full w-full object-cover object-[center_35%]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent"
              />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <span className="icon-tile icon-tile-lg bg-black/40 backdrop-blur">
                  <CalendarClock className="h-7 w-7" aria-hidden="true" />
                </span>
                <p className="mt-4 font-serif text-2xl italic text-white">
                  Pay toward your trip before departure.
                </p>
              </div>
            </div>

            <div className="p-6 md:p-10">
              <h2 className="display-3 text-foreground">
                Trip Payment <span className="font-serif italic text-primary">Schedule</span>
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Where a trip offers one, you reserve with a deposit and pay the rest in installments by the published deadline — directly through {BOOKING_TEAM.name}.
              </p>

              <ol className="mt-7 space-y-4">
                {SCHEDULE_STEPS.map((step, i) => (
                  <li key={step} className="flex items-center gap-4">
                    <StepNumber n={i + 1} size="sm" />
                    <span className="text-sm leading-relaxed text-foreground">{step}</span>
                  </li>
                ))}
              </ol>

              <p className="mt-7 rounded-2xl border border-border bg-background px-5 py-4 text-sm leading-relaxed text-muted">
                <strong className="text-foreground">This is not financing.</strong> A payment schedule belongs to the trip and involves no outside lender. Third-party financing, below, is a separate agreement with its own approval and terms.
              </p>

              <Link href="/trips" className="btn btn-primary group mt-8">
                VIEW GROUP TRIPS <ArrowRight className="btn-arrow h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Independent financing --------------------------------------- */}
      <section id="payment-options" className="section scroll-mt-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-5">Third-Party Financing</p>
            <h2 className="display-2 text-foreground">
              Explore Independent{" "}
              <span className="font-serif italic text-primary">Financing Resources</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              These providers offer payment options you can explore directly. Review the information below, then confirm eligibility and details with each provider.
            </p>
          </Reveal>

          <Stagger as="ul" className="mt-12 space-y-6">
            {PROVIDERS.map((provider) => (
              <StaggerItem
                as="li"
                key={provider.name}
                className="card grid gap-6 border-l-4 border-l-primary p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)] md:items-center md:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="icon-tile shrink-0">
                    <CreditCard className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    {/* Plain type, not the provider's logo — the client asked
                        that nothing here imply a partnership. */}
                    <h3 className="font-serif text-3xl font-bold text-foreground">{provider.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{provider.summary}</p>
                  </div>
                </div>

                <ol className="space-y-3 md:border-x md:border-border md:px-8">
                  {provider.steps.map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <StepNumber n={i + 1} size="sm" />
                      <span className="pt-0.5 text-sm leading-relaxed text-foreground">{step}</span>
                    </li>
                  ))}
                </ol>

                <div>
                  <a
                    href={provider.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary group w-full"
                  >
                    EXPLORE {provider.name.toUpperCase()}
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{provider.disclosure}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <p className="mt-8 flex items-start gap-3 text-sm leading-relaxed text-muted">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            Provider links open in a new tab. Listing a provider does not imply a partnership with Black in Rehab or {BOOKING_TEAM.name}, or that its payment will be accepted.
          </p>
        </div>
      </section>

      {/* ---- Virtual cards: dark band with the drawn card --------------- */}
      <section className="section section-dark relative isolate overflow-hidden bg-secondary">
        <div
          aria-hidden="true"
          className="absolute -left-40 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/12 blur-3xl"
        />
        <div className="container mx-auto grid grid-cols-1 items-center gap-14 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow eyebrow-on-dark mb-5">Virtual Cards</p>
              <h2 className="display-2 text-white">
                How a Virtual Card <span className="font-serif italic text-primary">May Work</span>
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
                Some providers issue a one-time virtual card for a purchase. These are the general steps for using one on a trip booking.
              </p>
            </Reveal>

            <Stagger as="ol" className="mt-9 space-y-6">
              {VIRTUAL_CARD_STEPS.map((step, i) => (
                <StaggerItem as="li" key={step.title} className="flex gap-4">
                  <StepNumber n={i + 1} size="sm" />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">{step.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal direction="right">
            <CardArt />
            <p className="mx-auto mt-10 flex max-w-md items-start gap-3 rounded-2xl border border-primary/40 bg-primary/12 px-5 py-4 text-sm leading-relaxed text-white/85">
              <Lock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              Never send card numbers by email, text or a contact form. This page collects no card details — enter a card only in the secure booking checkout.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---- Return to your trip ----------------------------------------- */}
      <section id="return-to-trip" className="section scroll-mt-24 bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-[var(--radius-panel)] border border-primary/30 bg-linear-to-br from-primary/15 via-surface to-primary/5 p-6 shadow-float md:p-12">
            <MapPin
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 text-primary/10"
            />
            <p className="eyebrow mb-5">Back to Booking</p>
            <h2 className="display-2 text-foreground">
              Ready to Return to <span className="font-serif italic text-primary">Your Trip?</span>
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              Choose your trip and package to continue to the right booking form.
            </p>
            <div className="mt-8">
              <TripSelector />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Before you book --------------------------------------------- */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="max-w-2xl">
            <h2 className="display-2 text-foreground">
              Before You <span className="font-serif italic text-primary">Book</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Keep these in mind as you explore your payment options.
            </p>
          </Reveal>

          <Stagger as="ul" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BEFORE_YOU_BOOK.map(({ icon: Icon, text }) => (
              <StaggerItem as="li" key={text} className="card group flex flex-col items-start gap-5 p-6">
                <span className="icon-tile icon-tile-lg">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <span className="font-serif text-lg font-bold leading-snug text-foreground">{text}</span>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-8">
            <Notice>
              <strong>Cancelling a trip does not automatically cancel your financing agreement.</strong>{" "}
              Follow the provider&apos;s refund and repayment instructions as well as the trip&apos;s cancellation policy.
            </Notice>
          </div>
        </div>
      </section>

      {/* ---- FAQs ---------------------------------------------------------- */}
      <section className="section bg-surface">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:px-6 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="display-2 text-foreground">
              Your Questions, <span className="font-serif italic text-primary">Answered</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Common questions about trip payments and financing.
            </p>
            <div className="card mt-8 p-6">
              <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
              <p className="mt-3 font-serif text-lg font-bold text-foreground">Still unsure?</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {BOOKING_TEAM.name} can tell you which payment methods work with your booking.
              </p>
              <a href={BOOKING_TEAM_MAILTO} className="link-arrow mt-4">
                {BOOKING_TEAM.email} <ArrowRight className="btn-arrow h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.q} className="card group p-0 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center gap-4 p-5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                    <Plus
                      className="h-4 w-4 transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="font-serif text-lg font-bold leading-snug text-foreground">{faq.q}</span>
                </summary>
                <p className="px-5 pb-5 pl-[4.25rem] text-sm leading-relaxed text-muted">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Booking assistance ------------------------------------------ */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="section-dark relative isolate overflow-hidden rounded-[var(--radius-panel)] border border-white/10 bg-secondary px-6 py-14 shadow-float md:px-14">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-32 -z-10 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
            />
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="eyebrow eyebrow-on-dark mb-5">Booking Assistance</p>
                <h2 className="display-2 text-white">Questions About Your Booking?</h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
                  Your travel booking team is {BOOKING_TEAM.name}.
                </p>
                <a
                  href={BOOKING_TEAM_MAILTO}
                  className="mt-4 inline-flex items-center gap-2 text-primary transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {BOOKING_TEAM.email}
                </a>
              </div>
              <a href={BOOKING_TEAM_MAILTO} className="btn btn-primary btn-lg group shrink-0">
                CONTACT {BOOKING_TEAM.name.toUpperCase()} <ArrowRight className="btn-arrow h-5 w-5" />
              </a>
            </div>
            <p className="mt-10 text-xs text-white/55">
              Trip booking services are provided by {BOOKING_TEAM.name}.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
