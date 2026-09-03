import Link from "next/link";
import {
  ArrowRight,
  Activity,
  CheckCircle,
  LineChart,
  Stethoscope,
  Users,
  Wrench,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

const SERVICES = [
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Recruitment Pipeline",
    desc: "Direct access to licensed clinicians and graduating cohorts through our job board and conference career lounge.",
  },
  {
    icon: <Activity className="w-6 h-6 text-primary" />,
    title: "Retention Programs",
    desc: "Mentorship, affinity support, and exit-interview analysis for the clinicians you have already hired.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-primary" />,
    title: "Clinical Training",
    desc: "Cultural responsiveness and health equity training built for rehabilitation departments, not generic HR modules.",
  },
  {
    icon: <LineChart className="w-6 h-6 text-primary" />,
    title: "Workforce Assessment",
    desc: "A confidential review of your rehabilitation department's demographics, climate, and retention data.",
  },
];

const PROBLEM = [
  { stat: "1 in 20", label: "US physical therapists who identify as Black" },
  { stat: "2.4x", label: "Higher reported isolation among sole Black clinicians" },
  { stat: "18 mo", label: "Median tenure when no mentorship is in place" },
];

const ENGAGEMENT = [
  { step: "01", title: "Assessment", desc: "Six weeks reviewing your department's data, climate survey results, and exit interviews." },
  { step: "02", title: "Findings", desc: "A written report with what we found and what we would prioritize, delivered to your leadership." },
  { step: "03", title: "Implementation", desc: "Training, mentorship structures, and recruitment support rolled out over two to four quarters." },
  { step: "04", title: "Measurement", desc: "Follow-up assessment at twelve months against your baseline numbers." },
];

export default function HealthcareSystemsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/support/healthcare-systems"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Support", href: "/support" },
          { label: "Healthcare Systems" },
        ]}
        title="For Healthcare"
        highlight="Systems"
        description="Recruiting Black rehabilitation clinicians is one problem. Keeping them is a different one. We work with health systems on both, with measurement attached."
        image={PHOTOS.impactVolunteersKids}
        cta={{ label: "REQUEST AN ASSESSMENT", href: "/contact" }}
        secondaryCta={{ label: "Recruit With Us", href: "/support/recruit" }}
      />

      {/* Problem */}
      <section className="section bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="The Problem"
            title="Why Departments Call Us"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {PROBLEM.map((item) => (
              <div
                key={item.label}
                className="card card-sunken p-10 text-center"
              >
                <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-3">
                  {item.stat}
                </p>
                <p className="text-muted text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-muted text-xs text-center mt-8">
            Figures shown are placeholders for the client to confirm against current sources.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="What We Provide"
            title="Four Services for Rehabilitation Departments"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="card p-8 flex gap-6 card-hover"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="How an Engagement Runs"
            title="Four Phases, Roughly Eighteen Months"
            description="We will not sell you a one-day training and call it a strategy. Engagements are structured to produce a measurable change against a baseline."
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ENGAGEMENT.map((phase) => (
              <div
                key={phase.step}
                className="card card-sunken p-8 card-hover"
              >
                <span className="text-3xl font-serif font-bold text-primary block mb-5">
                  {phase.step}
                </span>
                <h3 className="font-bold text-foreground mb-3">{phase.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FillerImage
              src={PHOTOS.impactTherapy}
              alt="Rehabilitation clinicians at work"
              wrapperClassName="aspect-4/3 rounded-3xl group"
              zoomOnHover
            />
            <div>
              <SectionHeading
                eyebrow="How We Work"
                title="What You Can Expect From Us"
              />
              <div className="space-y-3 mt-8">
                {[
                  "Assessment findings go to leadership unedited, including the uncomfortable parts",
                  "We talk to your clinicians directly, and their responses stay confidential",
                  "Recommendations come with cost estimates and a realistic sequence",
                  "We will tell you if we are not the right fit for the problem you have",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 card rounded-xl p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  href="/contact"
                  className="btn btn-primary btn-lg group"
                >
                  REQUEST AN ASSESSMENT <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/resources/research"
                  className="inline-flex items-center justify-center gap-2 border border-border hover:border-primary text-foreground font-semibold py-4 px-8 rounded-full transition-colors"
                >
                  Read Our Research
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="section bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Stethoscope className="w-8 h-8 text-primary mb-5" />, title: "Recruit With Us", desc: "Job board and career lounge access.", href: "/support/recruit" },
              { icon: <Users className="w-8 h-8 text-primary mb-5" />, title: "Corporate Partnership", desc: "Multi-year program underwriting.", href: "/support/corporate" },
              { icon: <LineChart className="w-8 h-8 text-primary mb-5" />, title: "Sponsor Impact", desc: "Where partnership dollars go.", href: "/impact/sponsor-impact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group card card-sunken p-8 card-hover flex flex-col"
              >
                {item.icon}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed flex-1 mb-5">{item.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Start With the Data You Already Have"
        description="Most departments know something is wrong but cannot name it. The assessment is where that gets specific."
        cta={{ label: "REQUEST AN ASSESSMENT", href: "/contact" }}
        secondaryCta={{ label: "See All Support Options", href: "/support" }}
      />
    </div>
  );
}
