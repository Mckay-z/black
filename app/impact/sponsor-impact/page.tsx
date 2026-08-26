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
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

const ALLOCATION = [
  { label: "Scholarships & student grants", value: 42 },
  { label: "Global experiences & mission projects", value: 27 },
  { label: "Community programs & events", value: 19 },
  { label: "Operations & reporting", value: 12 },
];

const OUTCOMES = [
  { value: "$186k", label: "Awarded to students since 2021" },
  { value: "74", label: "Scholarship recipients" },
  { value: "2,150", label: "Patient visits delivered on mission projects" },
  { value: "31", label: "Sponsor organizations" },
];

const REPORTING = [
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: "Quarterly Statements",
    desc: "A short written update showing exactly which programs your contribution funded that quarter.",
  },
  {
    icon: <LineChart className="w-6 h-6 text-primary" />,
    title: "Annual Impact Report",
    desc: "Full-year financials, program outcomes, and an honest account of what fell short.",
  },
  {
    icon: <BadgeCheck className="w-6 h-6 text-primary" />,
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
    image: PHOTOS.foundersPortrait,
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
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Impact", href: "/impact" },
          { label: "Sponsor Impact" },
        ]}
        title="Sponsor"
        highlight="Impact"
        description="Where sponsorship dollars actually go, what they produced, and how we report it back. If you are considering sponsoring us, start here rather than with the brochure."
        image={PHOTOS.conferenceGroupBranded}
        cta={{ label: "VIEW SPONSORSHIP TIERS", href: "/support/sponsors" }}
      />

      {/* Outcomes */}
      <section className="py-16 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {OUTCOMES.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                  {item.value}
                </p>
                <p className="text-muted text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Allocation */}
      <section className="py-24 bg-background">
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
                    <div className="h-2 w-full rounded-full bg-surface-light overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/about/annual-report"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors mt-10"
              >
                Read the full annual report <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <FillerImage
              src={PHOTOS.conferenceHug}
              alt="Scholarship recipients at the annual conference"
              wrapperClassName="aspect-4/3 rounded-3xl group"
              zoomOnHover
            />
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Accountability"
            title="What You Receive as a Sponsor"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REPORTING.map((item) => (
              <div
                key={item.title}
                className="bg-background border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
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

      {/* Stories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="In Their Words"
            title="The People Behind the Numbers"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STORIES.map((story) => (
              <div
                key={story.name}
                className="bg-surface border border-border rounded-2xl p-8 md:p-10"
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
      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <SectionHeading
            eyebrow="Our Commitments"
            title="What We Promise Sponsors"
            align="center"
            className="mb-12"
          />
          <div className="space-y-3">
            {[
              "We will never claim an outcome we cannot document",
              "Program spending is reported before administrative spending",
              "Sponsor recognition never implies editorial control over our advocacy",
              "You can end a sponsorship at any renewal point, no penalty",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-background border border-border rounded-xl p-5"
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Sponsor Something You Can Point To"
        description="Pick a tier, or tell us the outcome you want to fund and we will build the package around it."
        cta={{ label: "VIEW SPONSORSHIP TIERS", href: "/support/sponsors" }}
        secondaryCta={{ label: "Talk to Our Team", href: "/contact" }}
      />
    </div>
  );
}
