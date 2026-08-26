import Link from "next/link";
import { ArrowRight, Globe2, HandHeart, Plane, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

const DESTINATIONS = [
  {
    title: "Ghana",
    region: "West Africa",
    window: "July 2025",
    status: "Registration Open",
    image: PHOTOS.ghanaAirport,
    href: "/experiences/ghana",
    summary:
      "Ten days of clinical service, cultural immersion, and heritage across Accra and the Cape Coast.",
  },
  {
    title: "Jamaica",
    region: "Caribbean",
    window: "August 2025",
    status: "Registration Open",
    image: PHOTOS.retreatBeachYogaGroup,
    href: "/experiences/jamaica",
    summary:
      "Community clinics paired with a restorative wellness retreat on the north coast.",
  },
  {
    title: "Kenya",
    region: "East Africa",
    window: "2026",
    status: "Coming Soon",
    image: PHOTOS.impactHandsUp,
    href: "/experiences/global",
    summary:
      "Partnership development is underway with rehabilitation programs in Nairobi and Kisumu.",
  },
  {
    title: "Tanzania",
    region: "East Africa",
    window: "2026",
    status: "Coming Soon",
    image: PHOTOS.ghanaBeach,
    href: "/experiences/global",
    summary:
      "A planned service and continuing-education exchange with local therapy providers.",
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

export default function GlobalExperiencesPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Experiences", href: "/experiences" },
          { label: "Global Experiences" },
        ]}
        title="Healing Beyond"
        highlight="Borders"
        description="Our global experiences combine professional development, cultural immersion, and community service. We travel to learn, to serve, and to build lasting partnerships with rehabilitation communities around the world."
        image={PHOTOS.ghanaFreedomArch}
        cta={{ label: "VIEW UPCOMING TRIPS", href: "/experiences/upcoming-events" }}
        size="tall"
      />

      {/* Pillars */}
      <section className="py-24 bg-background">
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
                className="bg-surface border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
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
      <section className="py-24 bg-surface border-y border-border">
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
                className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors flex flex-col"
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
      <section className="py-24 bg-background">
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
        secondaryCta={{ label: "See All Experiences", href: "/experiences" }}
      />
    </div>
  );
}
