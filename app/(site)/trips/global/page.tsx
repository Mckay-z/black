import Link from "next/link";
import { ArrowRight, Globe2, HandHeart, Plane, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
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
      "Clinical service, cultural immersion, and heritage across Accra and the Cape Coast.",
  },
];

const PILLARS = [
  {
    icon: <HandHeart className="w-6 h-6 text-primary" />,
    title: "Service",
    desc: "Hands-on clinical work alongside local rehabilitation professionals, never in place of them.",
  },
  {
    icon: <Globe2 className="w-6 h-6 text-primary" />,
    title: "Cultural Immersion",
    desc: "Guided heritage experiences, local hosts, and time to genuinely be somewhere rather than pass through.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Professional Exchange",
    desc: "Shared workshops and case discussions that move knowledge in both directions.",
  },
  {
    icon: <Plane className="w-6 h-6 text-primary" />,
    title: "Travel Done Well",
    desc: "Vetted lodging, ground transport, and logistics handled so you can focus on the work.",
  },
];

export default function GlobalTripsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/trips/global"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Trips", href: "/trips" },
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
        cta={{ label: "VIEW UPCOMING TRIPS", href: "/trips/upcoming-events" }}
        size="tall"
      />

      {/* What Sankofa Return is. The client was specific that this reads as an
          ongoing programme rather than a trip, and explicitly not as a mission
          trip — so those four points are stated plainly rather than left to be
          inferred from the destination cards below. */}
      <section className="section-sm bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SANKOFA_PRINCIPLES.map((principle) => (
              <li key={principle} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                />
                <p className="text-base leading-relaxed text-muted">{principle}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pillars */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="How We Travel"
            title="Four Commitments On Every Trip"
            description="Global service is easy to do badly. These commitments shape how every Black in Rehab experience is designed."
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="card p-8 card-hover"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="font-bold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Destinations"
            title="Where We Are Going"
            description="Active destinations are open for registration now. Upcoming destinations are in partnership development — join the mailing list to hear first."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DESTINATIONS.map((dest) => (
              <Link
                key={dest.title}
                href={dest.href}
                className="group card card-sunken overflow-hidden card-hover flex flex-col"
              >
                <FillerImage
                  src={dest.image}
                  alt={`${dest.title} — ${dest.region}`}
                  wrapperClassName="h-56"
                  zoomOnHover
                  overlay="soft"
                />
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <p className="text-primary text-xs font-bold uppercase tracking-widest">
                      {dest.region}
                    </p>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted">
                      {dest.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {dest.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed flex-1 mb-6">
                    {dest.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                      {dest.window}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="From Past Trips"
            description="A look at the work, the people, and the places."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[PHOTOS.impactTherapy, PHOTOS.conferenceHug, PHOTOS.impactTherapy, PHOTOS.ghanaBeach].map(
              (src, idx) => (
                <FillerImage
                  key={idx}
                  src={src}
                  alt="Global experience"
                  wrapperClassName="aspect-square rounded-2xl group"
                  zoomOnHover
                />
              )
            )}
          </div>
        </div>
      </section>

      <CTABand
        title="Travel With Purpose"
        description="Spots on each trip are limited and fill early. Tell us where you would like to serve and we will walk you through the next steps."
        cta={{ label: "START YOUR APPLICATION", href: "/contact" }}
        secondaryCta={{ label: "See All Trips", href: "/trips" }}
      />
    </div>
  );
}
