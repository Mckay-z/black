import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle,
  Globe2,
  HandHeart,
  MapPin,
  Waves,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

const WHAT_TO_EXPECT = [
  {
    icon: <HandHeart className="w-6 h-6 text-primary" />,
    title: "Community Clinics",
    desc: "Mobile rehabilitation clinics in partnership with local health centres in Ocho Rios and Saint Ann.",
  },
  {
    icon: <Globe2 className="w-6 h-6 text-primary" />,
    title: "Cultural Immersion",
    desc: "Local hosts, food, music, and history — the island as Jamaicans live it, not as a resort sells it.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: "Professional Exchange",
    desc: "Joint case rounds and continuing-education sessions with Jamaican therapists and students.",
  },
  {
    icon: <Waves className="w-6 h-6 text-primary" />,
    title: "Rest & Renewal",
    desc: "Two closing days of guided wellness so you return restored rather than depleted.",
  },
];

const ITINERARY = [
  { day: "Days 1–2", title: "Arrival & Orientation", desc: "Welcome dinner, partner introductions, and cultural orientation with our host team." },
  { day: "Days 3–5", title: "Clinical Service", desc: "Mobile clinics across three parishes, working alongside local rehabilitation staff." },
  { day: "Day 6", title: "Professional Exchange", desc: "A full-day shared workshop with Jamaican clinicians and therapy students." },
  { day: "Days 7–8", title: "Renewal & Reflection", desc: "Guided wellness sessions, debrief circles, and a closing celebration." },
];

const INCLUDED = [
  "Shared accommodation for eight nights",
  "All ground transportation on the island",
  "Daily breakfast and group meals",
  "Clinic supplies and site coordination",
  "Cultural excursions and host-led tours",
  "Continuing-education certificate of participation",
];

export default function JamaicaPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/experiences/jamaica"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Experiences", href: "/experiences" },
          { label: "Jamaica Global Experience" },
        ]}
        title="Jamaica"
        highlight="Experience"
        description="Eight days of community rehabilitation, professional exchange, and genuine rest on the island's north coast. Serve with purpose, learn from local practitioners, and return renewed."
        image={PHOTOS.retreatBeachYogaGroup}
        meta={
          <>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" /> August 15–23, 2025
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Ocho Rios, Jamaica
            </div>
          </>
        }
        cta={{ label: "APPLY NOW", href: "/contact" }}
        secondaryCta={{ label: "Learn More", href: "#experience" }}
        size="tall"
      />

      {/* Intro */}
      <section id="experience" className="section bg-background scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="The Experience"
                title="Service and Restoration, In One Trip"
              />
              <p className="text-muted text-lg leading-relaxed mb-6">
                Jamaica has a deep rehabilitation community and a shortage of hands. Our
                experience pairs meaningful clinical service with the professional exchange
                our partners actually ask for — shared learning, not one-way charity.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                The final two days are deliberately unscheduled work. Service without rest
                is how good clinicians burn out, so we build recovery into the itinerary.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FillerImage
                src={PHOTOS.retreatBeachYogaGroup}
                alt="Jamaica coastline"
                wrapperClassName="aspect-4/5 rounded-2xl group"
                zoomOnHover
              />
              <FillerImage
                src={PHOTOS.impactTherapy}
                alt="Rehabilitation care in a community clinic"
                wrapperClassName="aspect-4/5 rounded-2xl mt-8 group"
                zoomOnHover
              />
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="What to Expect"
            title="Four Parts of the Week"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHAT_TO_EXPECT.map((item) => (
              <div
                key={item.title}
                className="card card-sunken p-8 card-hover"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading eyebrow="Itinerary" title="How the Eight Days Run" className="mb-10" />
              <div className="space-y-4">
                {ITINERARY.map((item) => (
                  <div
                    key={item.day}
                    className="card p-6 card-hover"
                  >
                    <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
                      {item.day}
                    </p>
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Your Investment" title="What Is Included" className="mb-10" />
              <div className="card p-8">
                <p className="text-3xl font-serif font-bold text-primary mb-2">$2,850</p>
                <p className="text-muted text-sm mb-8">
                  Per participant, excluding airfare. Payment plans and scholarship support
                  are available for students.
                </p>
                <div className="space-y-3">
                  {INCLUDED.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-foreground text-sm">{item}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/impact/scholarships"
                  className="link-arrow mt-8"
                >
                  See scholarship options <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Reserve Your Place in Jamaica"
        description="Cohorts are capped at 24 participants so every clinic stays manageable and every partnership stays personal."
        cta={{ label: "APPLY NOW", href: "/contact" }}
        secondaryCta={{ label: "All Global Experiences", href: "/experiences/global" }}
      />
    </div>
  );
}
