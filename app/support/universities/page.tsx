import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  GraduationCap,
  Mic,
  School,
  Users,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

const OFFERINGS = [
  {
    icon: <School className="w-6 h-6 text-primary" />,
    title: "Student Chapter Support",
    desc: "A chartered Black in Rehab chapter on your campus, with a playbook, starter budget, and national network behind it.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Mentorship Placement",
    desc: "Your Black students matched with working clinicians in their discipline, outside your faculty's own bandwidth.",
  },
  {
    icon: <Mic className="w-6 h-6 text-primary" />,
    title: "Guest Lectures & Workshops",
    desc: "Speakers for admissions events, orientation, cultural responsiveness training, and commencement.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: "Curriculum Consultation",
    desc: "A structured review of how your program teaches cultural responsiveness, with concrete recommendations.",
  },
];

const PIPELINE = [
  {
    stage: "Before Admission",
    items: [
      "Pre-professional outreach at HBCUs and minority-serving institutions",
      "Application and GRE support workshops",
      "Admissions panel participation",
    ],
  },
  {
    stage: "During the Program",
    items: [
      "Campus chapter and peer study groups",
      "Mentorship matching within 30 days",
      "Scholarship and emergency grant access",
    ],
  },
  {
    stage: "At Graduation",
    items: [
      "Board exam preparation support",
      "Career lounge and employer introductions",
      "Transition-to-practice mentoring in year one",
    ],
  },
];

const RETENTION = [
  "Isolation is the most common reason students in the minority disengage",
  "Mentorship in the first year is the strongest predictor of program completion",
  "Financial shocks, not academics, drive most mid-program withdrawals",
  "Students who find community early report higher clinical confidence",
];

export default function UniversitiesPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Support", href: "/support" },
          { label: "Universities" },
        ]}
        title="For"
        highlight="Universities"
        description="Partner with us to recruit, support, and retain Black students in your PT, OT, and SLP programs. We work with the parts of the student experience your faculty cannot always reach."
        image={PHOTOS.ghanaJerseysGroup}
        cta={{ label: "START A CONVERSATION", href: "/contact" }}
        secondaryCta={{ label: "Student Community", href: "/community/students" }}
      />

      {/* Offerings */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="What We Offer Programs"
            title="Four Points of Partnership"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {OFFERINGS.map((item) => (
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

      {/* Pipeline */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="The Full Pipeline"
            title="From Application to First License"
            description="Programs usually come to us about one stage. The partnerships that work cover all three."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PIPELINE.map((phase) => (
              <div
                key={phase.stage}
                className="bg-background border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-5">{phase.stage}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retention */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="Retention"
                title="Admitting Students Is the Easy Part"
                description="Most programs have improved their admissions numbers. Fewer have improved what happens after matriculation."
              />
              <div className="space-y-3 mt-8">
                {RETENTION.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-surface border border-border rounded-xl p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted text-xs mt-6">
                Findings drawn from our member survey work — see{" "}
                <Link
                  href="/resources/research"
                  className="text-primary font-semibold hover:text-primary-hover transition-colors"
                >
                  research and publications
                </Link>
                .
              </p>
            </div>
            <FillerImage
              src={PHOTOS.studentsLectureHall}
              alt="Students on campus"
              wrapperClassName="aspect-4/3 rounded-3xl group"
              zoomOnHover
            />
          </div>
        </div>
      </section>

      {/* Chapters CTA strip */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-background border border-border rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <School className="w-10 h-10 text-primary mb-5" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Start with a chapter
              </h2>
              <p className="text-muted leading-relaxed">
                The lowest-cost, fastest-moving way to begin. Three interested students and a
                faculty contact is all it takes, and it costs your program nothing.
              </p>
            </div>
            <Link
              href="/community/students"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors shrink-0"
            >
              CHAPTER INFORMATION <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title="Partner With Us on the Pipeline"
        description="Tell us about your program and where students are falling away. We will propose the partnership that fits."
        cta={{ label: "START A CONVERSATION", href: "/contact" }}
        secondaryCta={{ label: "Corporate Partnerships", href: "/support/corporate" }}
      />
    </div>
  );
}
