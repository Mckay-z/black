import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle,
  FileText,
  LineChart,
  Quote,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import FillerImage from "@/components/ui/FillerImage";
import PhotoCard from "@/components/ui/PhotoCard";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PHOTOS } from "@/lib/images";

const ALLOCATION = [
  { label: "Scholarships & student grants", value: 42 },
  { label: "Global experiences & mission projects", value: 27 },
  { label: "Community programs & events", value: 19 },
  { label: "Operations & reporting", value: 12 },
];

const REPORTING = [
  {
    icon: FileText,
    image: PHOTOS.conferenceSession,
    title: "Quarterly Statements",
    desc: "A short written update showing exactly which programs your contribution funded that quarter.",
  },
  {
    icon: LineChart,
    image: PHOTOS.conferenceRoomWide,
    title: "Annual Impact Report",
    desc: "Full-year financials, program outcomes, and an honest account of what fell short.",
  },
  {
    icon: BadgeCheck,
    image: PHOTOS.conferenceGala,
    title: "Named Recognition",
    desc: "Recognition at the level of your sponsorship tier, across the conference, site, and report.",
  },
];

const STORIES = [
  {
    quote:
      "Placeholder testimonial — the client will supply a scholarship recipient story here.",
    name: "Scholarship Recipient",
    detail: "DPT Candidate — client to confirm",
    image: PHOTOS.studentsAwards,
  },
  {
    quote:
      "Placeholder testimonial — the client will supply a sponsor partner story here.",
    name: "Sponsor Partner",
    detail: "Corporate Partner — client to confirm",
    image: PHOTOS.conferenceTableTalk,
  },
];

export default function SponsorImpactPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/impact/sponsor-impact"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "BIR CARES", href: "/impact" },
          { label: "Sponsor Impact" },
        ]}
        title="Sponsor"
        highlight="Impact"
        description="Where sponsorship dollars actually go, what they produced, and how we report it back. If you are considering sponsoring us, start here rather than with the brochure."
        image={PHOTOS.conferenceGroupBranded}
        cta={{ label: "VIEW SPONSORSHIP TIERS", href: "/support/sponsors" }}
      />

      {/* Allocation */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="Allocation"
                title="Where Every Dollar Went Last Year"
                description="Percentages reflect fiscal year 2024 and are reconciled in the annual report."
              />
              <div className="space-y-5 mt-10">
                {ALLOCATION.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-foreground text-sm font-medium">{item.label}</span>
                      <span className="text-primary font-bold text-sm">{item.value}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-border overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Reveal direction="left">
              <FillerImage
                src={PHOTOS.conferenceHug}
                alt="Two members embracing at the annual conference"
                wrapperClassName="aspect-4/5 sm:aspect-4/3 lg:aspect-4/5 rounded-t-[999px] rounded-b-[var(--radius-panel)] shadow-float ring-1 ring-primary/30 group"
                zoomOnHover
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <SectionHeading eyebrow="Accountability" title="What You Receive as a Sponsor" className="mb-12" />
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {REPORTING.map((item) => (
              <StaggerItem key={item.title} className="flex">
                <PhotoCard image={item.image} icon={item.icon} title={item.title}>
                  {item.desc}
                </PhotoCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Stories */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="In Their Words"
            title="The People Behind the Numbers"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STORIES.map((story) => (
              <div
                key={story.name}
                className="card p-8 md:p-10"
              >
                <Quote className="w-8 h-8 text-primary mb-6" />
                <p className="text-foreground text-lg leading-relaxed mb-8">{story.quote}</p>
                <div className="flex items-center gap-4">
                  <FillerImage
                    src={story.image}
                    alt={story.name}
                    wrapperClassName="w-14 h-14 rounded-full shrink-0"
                  />
                  <div>
                    <p className="font-bold text-foreground">{story.name}</p>
                    <p className="text-muted text-sm">{story.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="section bg-surface border-t border-border">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Our Commitments" title="What We Promise Sponsors" className="mb-10" />
            <ul className="space-y-3">
              {[
                "We will never claim an outcome we cannot document",
                "Program spending is reported before administrative spending",
                "Sponsor recognition never implies editorial control over our advocacy",
                "You can end a sponsorship at any renewal point, no penalty",
              ].map((item) => (
                <li key={item} className="card card-sunken flex items-start gap-3 rounded-xl p-5">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm text-foreground">{item}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal direction="left">
            <FillerImage
              src={PHOTOS.conferenceAudience}
              alt="The audience at the annual conference"
              wrapperClassName="aspect-4/3 rounded-[var(--radius-panel)] shadow-float group"
              zoomOnHover
            />
          </Reveal>
        </div>
      </section>

      <PhotoSplitBand image={PHOTOS.retreatGroupBlazers} imageSide="left">
        <p className="eyebrow eyebrow-on-dark mb-5">Sponsorship</p>
        <h2 className="display-2 text-white">Sponsor Something You Can Point To</h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
          Pick a tier, or tell us the outcome you want to fund and we will build the package around it.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/support/sponsors" className="btn btn-primary btn-lg group">
            VIEW SPONSORSHIP TIERS <ArrowRight className="btn-arrow h-5 w-5" />
          </Link>
          <Link href="/contact" className="btn btn-on-dark btn-lg">
            Talk to Our Team
          </Link>
        </div>
      </PhotoSplitBand>
    </div>
  );
}
