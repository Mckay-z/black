import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle,
  Megaphone,
  Users,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import PhotoCard from "@/components/ui/PhotoCard";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import FeatureSplit from "@/components/get-involved/FeatureSplit";
import ProcessSteps from "@/components/get-involved/ProcessSteps";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PHOTOS } from "@/lib/images";

const OPPORTUNITIES = [
  {
    icon: Users,
    title: "Named Scholarship Fund",
    desc: "Fund a multi-year scholarship in your organization's name, with recipients selected by our review committee.",
    image: PHOTOS.studentsAwards,
  },
  {
    icon: Megaphone,
    title: "Conference Partnership",
    desc: "Presenting or track sponsorship at the annual conference, including stage time and exhibition presence.",
    image: PHOTOS.conferenceAudience,
  },
  {
    icon: Building2,
    title: "Program Underwriting",
    desc: "Underwrite a specific program — global experiences, scholarships, or the student support fund.",
    image: PHOTOS.ghanaAirport,
  },
  {
    icon: BarChart3,
    title: "Research Partnership",
    desc: "Co-fund our workforce research and get early access to findings your own DEI reporting can use.",
    image: PHOTOS.conferencePresentation,
  },
];

const WHY_US = [
  "A defined, hard-to-reach professional audience rather than a general one",
  "Programs designed by clinicians, so your investment lands where it matters",
  "Quarterly reporting you can put in front of your own board",
  "Recognition that never comes with editorial control over our advocacy",
];

const PARTNERS = [
  { name: "SENA Pediatric Therapy Centre", logo: "/logos/sena-pediatric.png" },
  { name: "Nature's Sprout Academy", logo: "/logos/nature-sprouts-academy.png" },
  { name: "GUBA Foundation", logo: "/logos/guba-foundation.png" },
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
        page="/support/corporate"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Get Involved", href: "/get-involved" },
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
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Partnership Options"
              title="Four Ways to Invest"
              description="Most corporate partners combine two or three of these into a single multi-year agreement."
              className="mb-12"
            />
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OPPORTUNITIES.map(({ icon, title, desc, image }) => (
              <StaggerItem key={title} className="flex">
                <PhotoCard image={image} icon={icon} title={title} imageClassName="h-44">
                  {desc}
                </PhotoCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why us */}
      <FeatureSplit
        image={PHOTOS.conferenceNetworking}
        imageAlt="Black in Rehab members in conversation at the conference"
        imagePosition="center 35%"
        arch
        className="section bg-surface border-y border-border"
      >
        <SectionHeading
          eyebrow="Why Partner With Us"
          title="What Makes This Different"
          description="Plenty of organizations will take a corporate check. Fewer will show you precisely what it bought."
        />
        <ul className="space-y-3 mt-8">
          {WHY_US.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 card card-sunken rounded-xl p-4"
            >
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-foreground text-sm">{item}</p>
            </li>
          ))}
        </ul>
        <Link
          href="/impact/sponsor-impact"
          className="link-arrow mt-8"
        >
          See where partnership dollars went last year <ArrowRight className="w-4 h-4" />
        </Link>
      </FeatureSplit>

      {/* Process */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="The Process"
              title="From First Call to First Report"
              className="mb-14"
            />
          </Reveal>
          <ProcessSteps steps={PROCESS} />
        </div>
      </section>

      {/* Current partners — logos supplied in the client's "Website
          Updates" document. */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Current Partners"
              title="Organizations We Work With"
              className="mb-10"
            />
          </Reveal>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PARTNERS.map((partner) => (
              <li
                key={partner.name}
                className="rounded-2xl border border-border bg-white h-32 flex items-center justify-center p-6"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="max-h-20 max-w-full w-auto object-contain"
                />
              </li>
            ))}
          </ul>

          {/* Featured partnership, as on the BIR CARES page: copy and logo
              beside a photograph of the work in Ghana. */}
          <Reveal className="card mt-12 grid grid-cols-1 overflow-hidden lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
            <div className="p-8 md:p-12">
              <p className="eyebrow mb-4">Featured Partnership</p>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3 md:text-3xl">
                Black in Rehab × Nature Sprouts Academy (Ghana)
              </h3>
              <p className="text-muted leading-relaxed">
                Black in Rehab partners with Nature Sprouts Academy to train and equip staff with practical, evidence-informed strategies to better support children with developmental disabilities—advancing health equity, inclusion, and quality care in Ghana.
              </p>
              <Link href="/support/sponsors" className="link-arrow mt-8">
                See our sponsors <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="img-filler relative min-h-64">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTOS.impactTherapy}
                alt="A Black in Rehab therapist working with children in Ghana"
                loading="lazy"
                className="photo absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <PhotoSplitBand image={PHOTOS.retreatGroupOutdoors} imageSide="right">
        <p className="eyebrow eyebrow-on-dark mb-5">Corporate Partnerships</p>
        <h2 className="display-2 text-white">Let Us Put Together a Proposal</h2>
        <p className="mt-5 mb-9 max-w-lg text-lg leading-relaxed text-white/80">
          Send us your goals and budget cycle. We will come back with a written scope inside two weeks.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn btn-primary btn-lg group">
            REQUEST A PROPOSAL <ArrowRight className="btn-arrow h-5 w-5" aria-hidden="true" />
          </Link>
          <Link href="/support/sponsors" className="btn btn-on-dark btn-lg">
            View Sponsorship Tiers
          </Link>
        </div>
      </PhotoSplitBand>
    </div>
  );
}
