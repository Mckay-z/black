import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  GraduationCap,
  Handshake,
  Landmark,
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

/*
  Healthcare Systems used to lead this list. It is gone at the client's
  request — the same revision that took Healthcare Systems, the Career Lounge
  and Recruit With Us out of the Support menu — and the card was the last
  live link into a page nobody is meant to land on.
*/
const PARTNER_TYPES = [
  {
    icon: GraduationCap,
    title: "Universities & Programs",
    desc: "Campus speaking visits and admissions outreach with PT, OT, and SLP programs.",
    // Was /support/universities, the Mentorship Placement page — hidden at the
    // client's request, so this card starts a conversation instead.
    href: "/contact",
    image: PHOTOS.studentsLectureHall,
  },
  {
    icon: Building2,
    title: "Corporate Partners",
    desc: "Multi-year partnerships that fund scholarships, global experiences, and community programs.",
    href: "/support/corporate",
    image: PHOTOS.conferenceGroupBranded,
  },
  {
    icon: Landmark,
    title: "Nonprofits & Associations",
    desc: "Joint advocacy, shared research, and co-hosted programming with aligned organizations.",
    href: "/support/sponsors",
    image: PHOTOS.speakingTeamWagmc,
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
          { label: "Get Involved", href: "/get-involved" },
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
          <Reveal>
            <SectionHeading
              eyebrow="Who We Work With"
              title="Three Kinds of Partnership"
              className="mb-12"
            />
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PARTNER_TYPES.map(({ icon, title, desc, href, image }) => (
              <StaggerItem key={title} className="flex">
                <PhotoCard image={image} icon={icon} title={title} href={href}>
                  {desc}
                </PhotoCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* What we bring */}
      <FeatureSplit
        image={PHOTOS.conferencePresentation}
        imageAlt="A Black in Rehab session"
        imagePosition="center 40%"
        arch
        className="section bg-surface border-y border-border"
      >
        <SectionHeading
          eyebrow="The Exchange"
          title="What We Bring to the Table"
          description="Partnership is not sponsorship with extra steps. Here is what a partner actually gets access to."
        />
        <ul className="mt-8 space-y-3">
          {WHAT_WE_BRING.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 card card-sunken rounded-xl p-4"
            >
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-foreground text-sm">{item}</p>
            </li>
          ))}
        </ul>
      </FeatureSplit>

      {/* Process */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="How It Works"
              title="From First Call to Signed Agreement"
              className="mb-14"
            />
          </Reveal>
          <ProcessSteps steps={PROCESS} />
        </div>
      </section>

      {/* Sponsor cross-link */}
      <section className="section-sm bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="card grid grid-cols-1 overflow-hidden md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <div className="img-filler relative min-h-56">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTOS.retreatGroupFormal}
                alt=""
                loading="lazy"
                className="photo absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-6 p-8 md:p-12">
              <Handshake className="w-10 h-10 text-primary" aria-hidden="true" />
              <div>
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
                className="btn btn-primary btn-lg group"
              >
                VIEW SPONSORSHIP TIERS <ArrowRight className="btn-arrow w-5 h-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <PhotoSplitBand image={PHOTOS.ghanaLawn} imageSide="left">
        <p className="eyebrow eyebrow-on-dark mb-5">Partnerships</p>
        <h2 className="display-2 text-white">Let Us Build Something Real</h2>
        <p className="mt-5 mb-9 max-w-lg text-lg leading-relaxed text-white/80">
          Send us a short note about your organization and what you are trying to change. We will get back to you within three business days.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn btn-primary btn-lg group">
            CONTACT OUR PARTNERSHIPS TEAM <ArrowRight className="btn-arrow w-5 h-5" />
          </Link>
          <Link href="/support/sponsors" className="btn btn-on-dark btn-lg">
            See Current Partners
          </Link>
        </div>
      </PhotoSplitBand>
    </div>
  );
}
