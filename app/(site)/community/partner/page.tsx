import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  GraduationCap,
  Handshake,
  Landmark,
  Stethoscope,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

const PARTNER_TYPES = [
  {
    icon: <Stethoscope className="w-6 h-6 text-primary" />,
    title: "Healthcare Systems",
    desc: "Recruitment pipelines, retention programs, and clinician development for rehabilitation departments.",
    href: "/support/healthcare-systems",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    title: "Universities & Programs",
    desc: "Campus speaking visits, admissions outreach, and mentorship placement with PT, OT, and SLP programs.",
    href: "/support/universities",
  },
  {
    icon: <Building2 className="w-6 h-6 text-primary" />,
    title: "Corporate Partners",
    desc: "Multi-year partnerships that fund scholarships, global experiences, and community programs.",
    href: "/support/corporate",
  },
  {
    icon: <Landmark className="w-6 h-6 text-primary" />,
    title: "Nonprofits & Associations",
    desc: "Joint advocacy, shared research, and co-hosted programming with aligned organizations.",
    href: "/partnerships",
  },
];

const WHAT_WE_BRING = [
  "Direct access to a national community of Black rehabilitation professionals",
  "A conference audience of clinicians, students, and faculty",
  "Credible, community-led outreach rather than a logo placement",
  "Program design informed by clinicians who do the work",
  "Transparent reporting on where partnership dollars go",
];

const PROCESS = [
  { step: "01", title: "Introduction Call", desc: "Thirty minutes to understand your goals and whether we are the right fit." },
  { step: "02", title: "Proposal", desc: "A written scope with specific deliverables, timelines, and investment levels." },
  { step: "03", title: "Agreement", desc: "A signed partnership agreement with named contacts on both sides." },
  { step: "04", title: "Launch & Report", desc: "Quarterly check-ins and an annual impact report on what the partnership produced." },
];

export default function PartnerWithUsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/community/partner"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Community", href: "/community" },
          { label: "Partner With Us" },
        ]}
        title="Partner"
        highlight="With Us"
        description="We work with health systems, universities, companies, and nonprofits that want to do more than issue a statement. Partnership here means shared work and measurable outcomes."
        image={PHOTOS.ghanaCertificates}
        cta={{ label: "START A CONVERSATION", href: "/contact" }}
      />

      {/* Partner types */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Who We Work With"
            title="Four Kinds of Partnership"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {PARTNER_TYPES.map((type) => (
              <Link
                key={type.title}
                href={type.href}
                className="group card p-8 card-hover flex flex-col"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {type.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed flex-1 mb-6">{type.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What we bring */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="The Exchange"
                title="What We Bring to the Table"
                description="Partnership is not sponsorship with extra steps. Here is what a partner actually gets access to."
              />
              <div className="space-y-3 mt-8">
                {WHAT_WE_BRING.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 card card-sunken rounded-xl p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <FillerImage
              src={PHOTOS.conferencePresentation}
              alt="Partnership meeting"
              wrapperClassName="aspect-4/3 rounded-3xl group"
              zoomOnHover
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="How It Works"
            title="From First Call to Signed Agreement"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map((item) => (
              <div
                key={item.step}
                className="card p-8 card-hover"
              >
                <span className="text-3xl font-serif font-bold text-primary block mb-5">
                  {item.step}
                </span>
                <h3 className="font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor cross-link */}
      <section className="section bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="card card-sunken rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <Handshake className="w-10 h-10 text-primary mb-5" />
              <h2 className="display-3 text-foreground mb-4">
                Looking for sponsorship tiers instead?
              </h2>
              <p className="text-muted leading-relaxed">
                If you want a defined package with published benefits and pricing, our
                sponsorship tiers are probably the faster route.
              </p>
            </div>
            <Link
              href="/support/sponsors"
              className="btn btn-primary btn-lg group shrink-0"
            >
              VIEW SPONSORSHIP TIERS <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title="Let Us Build Something Real"
        description="Send us a short note about your organization and what you are trying to change. We will get back to you within three business days."
        cta={{ label: "CONTACT OUR PARTNERSHIPS TEAM", href: "/contact" }}
        secondaryCta={{ label: "See Current Partners", href: "/partnerships" }}
      />
    </div>
  );
}
