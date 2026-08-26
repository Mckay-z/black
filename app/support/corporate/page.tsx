import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle,
  Handshake,
  Megaphone,
  Users,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

const OPPORTUNITIES = [
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Named Scholarship Fund",
    desc: "Fund a multi-year scholarship in your organization's name, with recipients selected by our review committee.",
  },
  {
    icon: <Megaphone className="w-6 h-6 text-primary" />,
    title: "Conference Partnership",
    desc: "Presenting or track sponsorship at the annual conference, including stage time and exhibition presence.",
  },
  {
    icon: <Building2 className="w-6 h-6 text-primary" />,
    title: "Program Underwriting",
    desc: "Underwrite a specific program — global experiences, the mentorship match, or the student support fund.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "Research Partnership",
    desc: "Co-fund our workforce research and get early access to findings your own DEI reporting can use.",
  },
];

const WHY_US = [
  "A defined, hard-to-reach professional audience rather than a general one",
  "Programs designed by clinicians, so your investment lands where it matters",
  "Quarterly reporting you can put in front of your own board",
  "Recognition that never comes with editorial control over our advocacy",
];

const PROCESS = [
  { step: "01", title: "Discovery", desc: "A short call to understand your goals, budget cycle, and reporting requirements." },
  { step: "02", title: "Proposal", desc: "A written partnership scope with deliverables, timelines, and recognition levels." },
  { step: "03", title: "Agreement", desc: "A signed multi-year agreement with named contacts and quarterly checkpoints." },
  { step: "04", title: "Report", desc: "Quarterly statements and an annual impact report showing exactly what your investment produced." },
];

export default function CorporatePartnershipsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Support", href: "/support" },
          { label: "Corporate Partnerships" },
        ]}
        title="Corporate"
        highlight="Partnerships"
        description="Multi-year partnerships for companies that want their commitment to health equity to show up as funded programs and measurable outcomes, not a statement on a webpage."
        image={PHOTOS.retreatGroupFormal}
        cta={{ label: "REQUEST A PROPOSAL", href: "/contact" }}
        secondaryCta={{ label: "See Sponsor Impact", href: "/impact/sponsor-impact" }}
      />

      {/* Opportunities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Partnership Options"
            title="Four Ways to Invest"
            description="Most corporate partners combine two or three of these into a single multi-year agreement."
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {OPPORTUNITIES.map((item) => (
              <div
                key={item.title}
                className="bg-surface border border-border rounded-2xl p-8 flex gap-6 hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FillerImage
              src={PHOTOS.conferenceNetworking}
              alt="Corporate partnership meeting"
              wrapperClassName="aspect-4/3 rounded-3xl group"
              zoomOnHover
            />
            <div>
              <SectionHeading
                eyebrow="Why Partner With Us"
                title="What Makes This Different"
                description="Plenty of organizations will take a corporate check. Fewer will show you precisely what it bought."
              />
              <div className="space-y-3 mt-8">
                {WHY_US.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-background border border-border rounded-xl p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/impact/sponsor-impact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors mt-8"
              >
                See where partnership dollars went last year <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="The Process"
            title="From First Call to First Report"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map((item) => (
              <div
                key={item.step}
                className="bg-surface border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
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

      {/* Current partners */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Current Partners"
            title="Organizations Already Doing This"
            description="Partner logos and names to be supplied by the client."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="img-filler border border-dashed border-border rounded-2xl h-28 flex items-center justify-center"
              >
                <Handshake className="w-7 h-7 text-primary/60" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/partnerships"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
            >
              See all partnerships <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title="Let Us Put Together a Proposal"
        description="Send us your goals and budget cycle. We will come back with a written scope inside two weeks."
        cta={{ label: "REQUEST A PROPOSAL", href: "/contact" }}
        secondaryCta={{ label: "View Sponsorship Tiers", href: "/support/sponsors" }}
      />
    </div>
  );
}
