import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  GraduationCap,
  HandCoins,
  Users,
  Wallet,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

const SUPPORTS = [
  {
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    title: "Scholarships",
    desc: "Awards of $1,000 to $2,500 toward tuition for students in accredited PT, OT, and SLP programs.",
    href: "/impact/scholarships",
    cta: "See scholarships",
  },
  {
    icon: <Wallet className="w-6 h-6 text-primary" />,
    title: "Emergency Grants",
    desc: "Small, fast grants for board exam fees, licensure applications, clinical rotation travel, and equipment.",
    href: "/contact",
    cta: "Request a grant",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Mentorship Matching",
    desc: "A working clinician in your discipline, matched to you within 30 days of joining.",
    href: "/community/students",
    cta: "Get matched",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: "Board Exam Support",
    desc: "Peer study groups, discounted prep materials, and a repeat-taker support track.",
    href: "/resources/students",
    cta: "Student resources",
  },
];

const BARRIERS = [
  { stat: "$112k", label: "Median debt for a DPT graduate" },
  { stat: "1 in 20", label: "PT professionals who are Black" },
  { stat: "$1,600+", label: "Typical cost of boards and licensure" },
];

const ELIGIBILITY = [
  "Currently enrolled in an accredited PT, OT, or SLP program",
  "Identify as Black or African American",
  "Demonstrated financial need for grant support",
  "Active Black in Rehab student membership (free to join)",
];

export default function StudentSupportPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/impact/student-support"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Impact", href: "/impact" },
          { label: "Student Support" },
        ]}
        title="Student"
        highlight="Support"
        description="Cost is the most common reason a talented student leaves a rehabilitation program. Our student support work exists to remove the financial and practical barriers that have nothing to do with ability."
        image={PHOTOS.ghanaJerseysGroup}
        cta={{ label: "APPLY FOR SUPPORT", href: "/impact/scholarships/apply" }}
        secondaryCta={{ label: "Fund a Student", href: "/impact/donate" }}
      />

      {/* Barriers */}
      <section className="section bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="The Problem"
            title="The Numbers Behind the Gap"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {BARRIERS.map((item) => (
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

      {/* Supports */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="What We Offer"
            title="Four Kinds of Support"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {SUPPORTS.map((support) => (
              <Link
                key={support.title}
                href={support.href}
                className="group card p-8 card-hover flex flex-col"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {support.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {support.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed flex-1 mb-6">{support.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  {support.cta} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FillerImage
              src={PHOTOS.studentsAwards}
              alt="Student studying"
              wrapperClassName="aspect-4/3 rounded-3xl group"
              zoomOnHover
            />
            <div>
              <SectionHeading
                eyebrow="Eligibility"
                title="Who Can Apply"
                description="One application covers every form of student support. We will route it to whatever you qualify for."
              />
              <div className="space-y-3 mt-8">
                {ELIGIBILITY.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 card card-sunken rounded-xl p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/impact/scholarships/apply"
                className="btn btn-primary btn-lg group mt-10"
              >
                START AN APPLICATION <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Give */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="card rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <HandCoins className="w-10 h-10 text-primary mb-5" />
              <h2 className="display-3 text-foreground mb-4">
                A $250 gift covers a board exam fee
              </h2>
              <p className="text-muted leading-relaxed">
                Most of our emergency grants are small. That is exactly why they work — a few
                hundred dollars at the right moment keeps someone in the profession.
              </p>
            </div>
            <Link
              href="/impact/donate"
              className="btn btn-primary btn-lg group shrink-0"
            >
              FUND A STUDENT <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title="No One Should Leave Because of Money"
        description="Whether you need support or want to fund it, this is where that starts."
        cta={{ label: "APPLY FOR SUPPORT", href: "/impact/scholarships/apply" }}
        secondaryCta={{ label: "Give to the Fund", href: "/impact/donate" }}
      />
    </div>
  );
}
