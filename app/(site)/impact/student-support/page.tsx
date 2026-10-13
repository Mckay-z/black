import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  GraduationCap,
  HandCoins,
  Wallet,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import FillerImage from "@/components/ui/FillerImage";
import PhotoCard from "@/components/ui/PhotoCard";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PHOTOS } from "@/lib/images";

const SUPPORTS = [
  {
    icon: GraduationCap,
    image: PHOTOS.studentsLectureHall,
    title: "Scholarships",
    desc: "Awards of $1,000 to $2,500 toward tuition for students in accredited PT, OT, and SLP programs.",
    href: "/impact/scholarships",
    cta: "See scholarships",
  },
  {
    icon: Wallet,
    image: PHOTOS.impactBackpacks,
    title: "Emergency Grants",
    desc: "Small, fast grants for board exam fees, licensure applications, clinical rotation travel, and equipment.",
    href: "/contact",
    cta: "Request a grant",
  },
  {
    icon: BookOpen,
    image: PHOTOS.conferencePresentation,
    title: "Board Exam Support",
    desc: "Peer study groups, discounted prep materials, and a repeat-taker support track.",
    href: "/community/students",
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
];

export default function StudentSupportPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/impact/student-support"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "BIR CARES", href: "/impact" },
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
          <Reveal>
            <SectionHeading
              eyebrow="The Problem"
              title="The Numbers Behind the Gap"
              className="mb-12"
            />
          </Reveal>
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
          <Reveal>
            <SectionHeading eyebrow="What We Offer" title="Four Kinds of Support" className="mb-12" />
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SUPPORTS.map((support) => (
              <StaggerItem key={support.title} className="flex">
                <PhotoCard
                  image={support.image}
                  icon={support.icon}
                  title={support.title}
                  href={support.href}
                  cta={support.cta}
                  imageClassName="h-40"
                >
                  {support.desc}
                </PhotoCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <FillerImage
                src={PHOTOS.studentsAwards}
                alt="Students holding their award certificates"
                wrapperClassName="aspect-4/5 sm:aspect-4/3 lg:aspect-4/5 rounded-t-[999px] rounded-b-[var(--radius-panel)] shadow-float ring-1 ring-primary/30 group"
                zoomOnHover
              />
            </Reveal>
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
          <Reveal className="card grid grid-cols-1 overflow-hidden md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <div className="img-filler relative min-h-64">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTOS.impactPediatric}
                alt="A Black in Rehab clinician with children"
                loading="lazy"
                className="photo absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <HandCoins className="mb-5 h-10 w-10 text-primary" aria-hidden="true" />
              <h2 className="display-3 mb-4 text-foreground">
                A $250 gift covers a board exam fee
              </h2>
              <p className="leading-relaxed text-muted">
                Most of our emergency grants are small. That is exactly why they work — a few
                hundred dollars at the right moment keeps someone in the profession.
              </p>
              <Link href="/impact/donate" className="btn btn-primary btn-lg group mt-8 self-start">
                FUND A STUDENT <ArrowRight className="btn-arrow h-5 w-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <PhotoSplitBand image={PHOTOS.ghanaLawn} imageSide="right">
        <p className="eyebrow eyebrow-on-dark mb-5">Student Support</p>
        <h2 className="display-2 text-white">No One Should Leave Because of Money</h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
          Whether you need support or want to fund it, this is where that starts.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/impact/scholarships/apply" className="btn btn-primary btn-lg group">
            APPLY FOR SUPPORT <ArrowRight className="btn-arrow h-5 w-5" />
          </Link>
          <Link href="/impact/donate" className="btn btn-on-dark btn-lg">
            Give to the Fund
          </Link>
        </div>
      </PhotoSplitBand>
    </div>
  );
}
