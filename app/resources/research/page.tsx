import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Download,
  FlaskConical,
  Microscope,
  Users,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

const PUBLICATIONS = [
  {
    type: "Workforce Report",
    year: "2025",
    title: "Representation in the Rehabilitation Workforce",
    summary:
      "Our annual analysis of demographic data across PT, OT, and SLP education and practice, with state-level breakdowns.",
    status: "In production",
  },
  {
    type: "Member Survey",
    year: "2024",
    title: "Belonging, Burnout, and Retention",
    summary:
      "Survey findings from 1,180 Black rehabilitation professionals on workplace climate and intent to leave the profession.",
    status: "Available",
  },
  {
    type: "White Paper",
    year: "2024",
    title: "Cultural Responsiveness in Clinical Education",
    summary:
      "A review of how accredited programs teach cultural responsiveness, and recommendations for curriculum change.",
    status: "Available",
  },
  {
    type: "Brief",
    year: "2023",
    title: "The Cost of Licensure",
    summary:
      "How exam, application, and relocation costs create a financial barrier that falls unevenly across graduates.",
    status: "Available",
  },
];

const AREAS = [
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Workforce & Pipeline",
    desc: "Who enters rehabilitation education, who completes it, and where the pipeline leaks.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "Health Equity Outcomes",
    desc: "Differences in access, referral patterns, and rehabilitation outcomes across patient populations.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: "Clinical Education",
    desc: "How programs prepare clinicians to serve communities unlike the ones they trained in.",
  },
  {
    icon: <FlaskConical className="w-6 h-6 text-primary" />,
    title: "Practice & Retention",
    desc: "Workplace climate, mentorship, and what actually keeps clinicians in the profession.",
  },
];

const COLLABORATE = [
  "Access to our member panel for survey recruitment",
  "Co-authorship on jointly designed studies",
  "Community review of study design before data collection",
  "Dissemination through our conference and publications",
];

export default function ResearchPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Research" },
        ]}
        title="Research &"
        highlight="Evidence"
        description="We publish data on the rehabilitation workforce and partner with researchers studying equity in rehabilitation. Advocacy without evidence is just noise."
        image={PHOTOS.conferenceSession}
        cta={{ label: "BROWSE PUBLICATIONS", href: "#publications" }}
        secondaryCta={{ label: "Propose a Collaboration", href: "/contact" }}
      />

      {/* Areas */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Focus Areas"
            title="What We Study"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {AREAS.map((area) => (
              <div
                key={area.title}
                className="bg-surface border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {area.icon}
                </div>
                <h3 className="font-bold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-24 bg-surface border-y border-border scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Publications"
            title="Our Reports and Briefs"
            description="All publications are free to read and cite. Titles and findings shown here are placeholders pending client review."
            className="mb-16"
          />
          <div className="space-y-6">
            {PUBLICATIONS.map((pub) => (
              <div
                key={pub.title}
                className="bg-background border border-border rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Microscope className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-primary text-xs font-bold uppercase tracking-widest">
                        {pub.type}
                      </span>
                      <span className="text-muted text-xs">{pub.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{pub.title}</h3>
                    <p className="text-muted text-sm leading-relaxed max-w-2xl">
                      {pub.summary}
                    </p>
                  </div>
                </div>
                {pub.status === "Available" ? (
                  <Link
                    href="/resources/library"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-semibold py-3 px-6 rounded-full transition-colors shrink-0"
                  >
                    <Download className="w-4 h-4" /> Download
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-muted border border-border rounded-full px-6 py-3 shrink-0">
                    In production
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborate */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FillerImage
              src={PHOTOS.conferenceRoomWide}
              alt="Researchers reviewing data"
              wrapperClassName="aspect-4/3 rounded-3xl group"
              zoomOnHover
            />
            <div>
              <SectionHeading
                eyebrow="For Researchers"
                title="Work With Our Community, Not On It"
                description="We partner with academic teams studying rehabilitation equity — on the condition that the community shapes the questions, not just the sample."
              />
              <div className="space-y-3 mt-8">
                {COLLABORATE.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-surface border border-border rounded-xl p-4"
                  >
                    <FlaskConical className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors mt-10"
              >
                PROPOSE A COLLABORATION <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Help Us Build the Evidence Base"
        description="Members are invited to our research panel and hear about every survey before it closes."
        cta={{ label: "JOIN THE MOVEMENT", href: "/join-the-movement" }}
        secondaryCta={{ label: "See Our Advocacy Work", href: "/impact/advocacy" }}
      />
    </div>
  );
}
