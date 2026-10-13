import Link from "next/link";
import { ArrowRight, Globe2, HandHeart, Plane, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import PhotoCard from "@/components/ui/PhotoCard";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PHOTOS } from "@/lib/images";

/** The client's own framing of the programme, taken verbatim from their brief. */
const SANKOFA_PRINCIPLES = [
  "Sankofa Return is the ongoing global program.",
  "Ghana is the inaugural destination.",
  "The initiative can expand to Jamaica, Kenya, Tanzania, and other Diaspora communities.",
  "The purpose is mutual exchange and sustainable partnership, not a one-time mission trip.",
];

/*
  The destinations with a date behind them — which is Ghana, and only Ghana.

  Jamaica, Kenya and Tanzania used to sit here as cards, two of them marked
  "Registration Open" against 2025 windows that have since passed. The
  client's "Events updates" calendar contains none of them. They remain in
  SANKOFA_PRINCIPLES above, because naming them as places the programme could
  reach is the client's own wording; presenting them as trips somebody could
  register for today was not.
*/
const DESTINATIONS = [
  {
    title: "Ghana",
    region: "West Africa",
    window: "March 10–22, 2027",
    status: "Registration Open",
    image: PHOTOS.ghanaAirport,
    href: "/trips/ghana",
    summary:
      "Clinical service, cultural immersion, and heritage across Accra and Elmina.",
  },
];

const PILLARS = [
  {
    icon: HandHeart,
    title: "Service",
    desc: "Hands-on clinical work alongside local rehabilitation professionals, never in place of them.",
    image: PHOTOS.impactTherapy,
  },
  {
    icon: Globe2,
    title: "Cultural Immersion",
    desc: "Guided heritage experiences, local hosts, and time to genuinely be somewhere rather than pass through.",
    image: PHOTOS.ghanaDrumming,
  },
  {
    icon: Users,
    title: "Professional Exchange",
    desc: "Shared workshops and case discussions that move knowledge in both directions.",
    image: PHOTOS.speakingTeamWagmc,
  },
  {
    icon: Plane,
    title: "Travel Done Well",
    desc: "Vetted lodging, ground transport, and logistics handled so you can focus on the work.",
    image: PHOTOS.ghanaLawn,
  },
];

/** "From Past Trips" — Ghana only, and no photo twice. */
const PAST_TRIPS = [
  { src: PHOTOS.ghanaKente, alt: "The group in kente in Ghana" },
  { src: PHOTOS.ghanaCertificates, alt: "Certificate presentation in Ghana" },
  { src: PHOTOS.ghanaMarket, alt: "At the market in Ghana" },
  { src: PHOTOS.ghanaBeach, alt: "Evening on the beach in Ghana" },
];

export default function GlobalTripsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/trips/global"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Upcoming Events & Trips", href: "/trips" },
          { label: "Sankofa Return" },
        ]}
        title="Sankofa"
        highlight="Return"
        description="Advancing Health and Healing Across the African Diaspora. A global initiative connecting rehabilitation and wellness professionals of the African Diaspora through clinical education, community engagement, cultural exchange, and sustainable partnerships. Our journey begins in Ghana—building connections and a model for continued collaboration throughout Africa and across the Diaspora."
        image={PHOTOS.ghanaFreedomArch}
        meta={
          <>
            <span className="chip chip-dark">Clinical &amp; Cultural Exchange</span>
            <span className="chip chip-dark">Ghana 2027</span>
          </>
        }
        cta={{ label: "VIEW GHANA EXPERIENCE", href: "/trips/ghana#sankofa-return" }}
        size="tall"
      />

      {/* What Sankofa Return is. The client was specific that this reads as an
          ongoing programme rather than a trip, and explicitly not as a mission
          trip — so those four points are stated plainly rather than left to be
          inferred from the destination cards below. */}
      <PhotoSplitBand image={PHOTOS.ghanaBathOfReturn} imageSide="right">
        <p className="eyebrow eyebrow-on-dark mb-5">The Programme</p>
        <h2 className="display-2 text-white">
          An Ongoing <span className="font-serif italic text-gold-gradient">Return</span>
        </h2>
        <ul className="mt-8 space-y-4">
          {SANKOFA_PRINCIPLES.map((principle) => (
            <li key={principle} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              />
              <p className="text-lg leading-relaxed text-white/80">{principle}</p>
            </li>
          ))}
        </ul>
      </PhotoSplitBand>

      {/* Pillars */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-5">How We Travel</p>
            <h2 className="display-2 text-foreground">Four Commitments On Every Trip</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Global service is easy to do badly. These commitments shape how every Black in Rehab experience is designed.
            </p>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar) => (
              <StaggerItem key={pillar.title} className="flex">
                <PhotoCard image={pillar.image} icon={pillar.icon} title={pillar.title} imageClassName="h-44">
                  {pillar.desc}
                </PhotoCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Destinations */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-5">Destinations</p>
            <h2 className="display-2 text-foreground">Where We Are Going</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Active destinations are open for registration now. Upcoming destinations are in partnership development — join the mailing list to hear first.
            </p>
          </Reveal>
          {/* One destination today, so it gets the full width as a feature
              card — half a grid with one card in it reads as something
              missing. */}
          {DESTINATIONS.map((dest) => (
            <Reveal key={dest.title}>
              <Link
                href={dest.href}
                className="card card-hover group grid grid-cols-1 overflow-hidden lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
              >
                <div className="img-filler relative min-h-72 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={dest.image}
                    alt={`${dest.title} — ${dest.region}`}
                    loading="lazy"
                    className="photo absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <span className="chip chip-dark absolute left-5 top-5 uppercase tracking-wider">
                    {dest.status}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <p className="text-primary text-xs font-bold uppercase tracking-widest">
                    {dest.region}
                  </p>
                  <h3 className="mt-3 font-serif text-4xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {dest.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted">{dest.summary}</p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted">
                    {dest.window}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="btn-arrow h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-5">Gallery</p>
            <h2 className="display-2 text-foreground">From Past Trips</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              A look at the work, the people, and the places.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 auto-rows-[160px] md:grid-cols-4 md:gap-4 md:auto-rows-[220px]">
            {PAST_TRIPS.map((photo, idx) => (
              <div
                key={photo.src}
                className={`img-filler group overflow-hidden rounded-[var(--radius-card)] ${
                  idx === 0 ? "col-span-2 row-span-2" : idx === 3 ? "col-span-2" : ""
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="photo h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <PhotoSplitBand image={PHOTOS.ghanaCastleGroup} imageSide="left">
        <p className="eyebrow eyebrow-on-dark mb-5">Sankofa Return</p>
        <h2 className="display-2 text-white">Travel With Purpose</h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
          Spots on each trip are limited and fill early. Tell us where you would like to serve and we will walk you through the next steps.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/trips/ghana#how-to-join" className="btn btn-primary btn-lg group">
            START YOUR APPLICATION <ArrowRight className="btn-arrow h-5 w-5" />
          </Link>
          <Link href="/trips" className="btn btn-on-dark btn-lg">
            See All Trips
          </Link>
        </div>
      </PhotoSplitBand>
    </div>
  );
}
