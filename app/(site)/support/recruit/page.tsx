import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  CheckCircle,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

const PACKAGES = [
  {
    name: "Job Board",
    price: "$350 / posting",
    duration: "60 days",
    highlighted: false,
    features: [
      "One role on the member job board",
      "Included in the monthly opportunities email",
      "Applicant referrals from our team",
      "Basic performance report",
    ],
  },
  {
    name: "Recruiting Partner",
    price: "$4,500 / year",
    duration: "Annual",
    highlighted: true,
    features: [
      "Unlimited job board postings",
      "A table in the conference career lounge",
      "Two recruiter office-hours sessions",
      "Featured employer profile",
      "Quarterly pipeline reporting",
      "Priority access to graduating cohorts",
    ],
  },
  {
    name: "Pipeline Partner",
    price: "Custom",
    duration: "Multi-year",
    highlighted: false,
    features: [
      "Everything in Recruiting Partner",
      "Named student scholarship",
      "Campus event sponsorship",
      "Clinical rotation placement program",
      "Co-designed retention programming",
    ],
  },
];

const WHY = [
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "A Focused Audience",
    desc: "Thousands of licensed PTs, OTs, and SLPs plus students across accredited programs nationwide.",
  },
  {
    icon: <BadgeCheck className="w-6 h-6 text-primary" />,
    title: "Credibility You Cannot Buy",
    desc: "Members trust roles that come through us because they know we do not list employers we would not work for.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: "Retention, Not Just Hiring",
    desc: "Pipeline partners get support on the harder half of the problem: keeping the clinicians they hire.",
  },
];

const EXPECTATIONS = [
  "Post salary ranges on every listing",
  "Respond to applicants within two weeks",
  "Name a real contact, not a generic inbox",
  "Report back on outcomes so we can improve the match",
];

export default function RecruitWithUsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/support/recruit"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Support", href: "/support" },
          { label: "Recruit With Us" },
        ]}
        title="Recruit"
        highlight="With Us"
        description="Reach Black rehabilitation professionals directly — through our job board, the conference career lounge, or a long-term pipeline partnership."
        image={PHOTOS.conferenceGroupBranded}
        cta={{ label: "TALK TO OUR TEAM", href: "/contact" }}
      />

      {/* Why */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Why Recruit Here"
            title="Three Reasons Employers Come Back"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY.map((item) => (
              <div
                key={item.title}
                className="card p-8 card-hover"
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

      {/* Packages */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Options"
            title="Three Ways to Work With Us"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 flex flex-col border-2 transition-all ${
                  pkg.highlighted
                    ? "section-dark bg-secondary border-primary shadow-2xl shadow-primary/20 md:scale-105"
                    : "bg-background border-border hover:border-primary/50"
                }`}
              >
                {pkg.highlighted && (
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                    Most Popular
                  </span>
                )}
                <h3
                  className={`text-xl font-bold mb-2 ${
                    pkg.highlighted ? "text-white" : "text-foreground"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p className="text-3xl font-serif font-bold text-primary mb-1">{pkg.price}</p>
                <p
                  className={`text-sm mb-8 ${
                    pkg.highlighted ? "text-white/70" : "text-muted"
                  }`}
                >
                  {pkg.duration}
                </p>
                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-sm ${
                        pkg.highlighted ? "text-white/80" : "text-muted"
                      }`}
                    >
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 font-bold py-3.5 px-6 rounded-full transition-colors ${
                    pkg.highlighted
                      ? "bg-primary hover:bg-primary-hover text-on-primary"
                      : "border border-border hover:border-primary text-foreground"
                  }`}
                >
                  Get started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="What We Ask of Employers"
                title="A Short List We Do Not Waive"
                description="Our members trust this board because we hold employers to a standard. These are the conditions of listing with us."
              />
              <div className="space-y-3 mt-8">
                {EXPECTATIONS.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 card rounded-xl p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <FillerImage
              src={PHOTOS.impactPediatric}
              alt="Rehabilitation department"
              wrapperClassName="aspect-4/3 rounded-3xl group"
              zoomOnHover
            />
          </div>
        </div>
      </section>

      {/* Cross links */}
      <section className="section bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Briefcase className="w-8 h-8 text-primary mb-5" />, title: "Career Lounge", desc: "Where candidates and employers meet.", href: "/support/career-lounge" },
              { icon: <Users className="w-8 h-8 text-primary mb-5" />, title: "Healthcare Systems", desc: "Department-level partnership options.", href: "/support/healthcare-systems" },
              { icon: <BadgeCheck className="w-8 h-8 text-primary mb-5" />, title: "Universities", desc: "Build the pipeline earlier.", href: "/support/universities" },
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
        title="Hire From a Community That Trusts You"
        description="Tell us what you are hiring for and we will recommend the option that fits your timeline and budget."
        cta={{ label: "TALK TO OUR TEAM", href: "/contact" }}
        secondaryCta={{ label: "See Sponsorship Tiers", href: "/support/sponsors" }}
      />
    </div>
  );
}
