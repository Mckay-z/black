import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Download,
  FileText,
  Scale,
  TrendingUp,
  Users,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

const GUIDES = [
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: "Resume & CV Templates",
    format: "PDF + DOCX",
    desc: "Clinical resume templates for new graduates and CV formats for academic and leadership roles.",
  },
  {
    icon: <Scale className="w-6 h-6 text-primary" />,
    title: "Salary Negotiation Guide",
    format: "PDF",
    desc: "Regional benchmarks, scripts for the first offer conversation, and what is genuinely negotiable beyond base pay.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    title: "Interview Preparation",
    format: "PDF",
    desc: "Common clinical interview questions, how to discuss caseload expectations, and questions to ask them.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: "Promotion Case Builder",
    format: "Worksheet",
    desc: "A structured way to document your contribution and build the case before the review cycle, not during it.",
  },
];

const PATHWAYS = [
  {
    title: "Clinical Specialization",
    desc: "Board certification routes across neurology, orthopedics, pediatrics, and geriatrics — with realistic timelines and costs.",
  },
  {
    title: "Academia & Teaching",
    desc: "Moving from clinic to faculty: adjunct routes, terminal degree considerations, and what tenure tracks actually require.",
  },
  {
    title: "Leadership & Administration",
    desc: "Department lead, rehab director, and executive roles — and the credentials that open each one.",
  },
  {
    title: "Practice Ownership",
    desc: "Business formation, payer contracting, and the first eighteen months of running your own clinic.",
  },
];

const STAGES = [
  { stage: "Student", focus: "Clinical rotations, board prep, and first-job search", href: "/resources/students" },
  { stage: "Early Career", focus: "Licensure, mentorship, and specialization decisions", href: "/community/join" },
  { stage: "Mid Career", focus: "Leadership readiness, teaching, and advanced certification", href: "/experiences/leadership-retreats" },
  { stage: "Senior", focus: "Executive roles, ownership, and sponsoring the next generation", href: "/impact/volunteer" },
];

export default function CareerResourcesPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/resources/career"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Career Resources" },
        ]}
        title="Career"
        highlight="Resources"
        description="Practical tools for every stage of a rehabilitation career — from your first clinical resume to the case for your first director role."
        image={PHOTOS.conferenceSession}
        cta={{ label: "BROWSE THE LIBRARY", href: "/resources/library" }}
        secondaryCta={{ label: "Career Lounge", href: "/support/career-lounge" }}
      />

      {/* Guides */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Downloads"
            title="Tools You Can Use This Week"
            description="Free for members. Student membership is free, so these are free for students too."
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {GUIDES.map((guide) => (
              <div
                key={guide.title}
                className="group card p-8 card-hover flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    {guide.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted">
                    {guide.format}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{guide.title}</h3>
                <p className="text-muted text-sm leading-relaxed flex-1 mb-6">{guide.desc}</p>
                <Link
                  href="/community/join"
                  className="link-arrow"
                >
                  <Download className="w-4 h-4" /> Get this resource
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                eyebrow="Career Pathways"
                title="Four Directions From the Clinic Floor"
                description="Most rehabilitation careers branch at around year five. These guides lay out what each route asks of you."
              />
              <FillerImage
                src={PHOTOS.impactVolunteerChildren}
                alt="Clinicians in discussion"
                wrapperClassName="aspect-16/10 rounded-3xl mt-10 group"
                zoomOnHover
              />
            </div>
            <div className="space-y-4">
              {PATHWAYS.map((pathway) => (
                <div
                  key={pathway.title}
                  className="card card-sunken p-7 card-hover"
                >
                  <h3 className="text-lg font-bold text-foreground mb-3">{pathway.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{pathway.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="By Career Stage"
            title="Start Where You Are"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STAGES.map((item) => (
              <Link
                key={item.stage}
                href={item.href}
                className="group card p-8 card-hover flex flex-col"
              >
                <Users className="w-8 h-8 text-primary mb-5" />
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.stage}
                </h3>
                <p className="text-muted text-sm leading-relaxed flex-1 mb-5">{item.focus}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Go <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Your Next Role Is a Conversation Away"
        description="The career lounge connects members directly with recruiting partners who are actively hiring."
        cta={{ label: "VISIT THE CAREER LOUNGE", href: "/support/career-lounge" }}
        secondaryCta={{ label: "Join as a Member", href: "/community/join" }}
      />
    </div>
  );
}
