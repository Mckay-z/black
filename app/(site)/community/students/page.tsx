import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  GraduationCap,
  School,
  Users,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

const BENEFITS = [
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "A Mentor Who Gets It",
    desc: "Every student member is matched with a working clinician in their discipline within 30 days.",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    title: "Scholarship Access",
    desc: "Priority notice and application support for every scholarship we award.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: "Board Prep & Study Groups",
    desc: "Peer-led NPTE, NBCOT, and Praxis groups that run every exam cycle.",
  },
  {
    icon: <School className="w-6 h-6 text-primary" />,
    title: "Campus Speaking Visits",
    desc: "Invite Black in Rehab to your program for a panel, workshop, or career talk.",
  },
];

const VISIT_STEPS = [
  "Tell us your program and who the audience will be",
  "Pick a format — panel, workshop, or career talk",
  "We match you with a speaker and confirm a date",
  "We show up, on campus or virtually",
];

export default function StudentCommunityPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/community/students"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Community", href: "/community" },
          { label: "Students" },
        ]}
        title="The Student"
        highlight="Community"
        description="Black students are a small share of most PT, OT, and SLP cohorts. Our student community makes sure that never means going through the program alone."
        image={PHOTOS.ghanaJerseysGroup}
        cta={{ label: "JOIN FREE AS A STUDENT", href: "/community/join" }}
        secondaryCta={{ label: "Student Resources", href: "/resources/students" }}
      />

      {/* Benefits */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Student Membership"
            title="What You Get, At No Cost"
            description="Student membership is free. It always has been, and it is not a trial."
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="card p-8 card-hover"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invite us to campus */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FillerImage
              src={PHOTOS.impactVolunteerChildren}
              alt="Students working together"
              wrapperClassName="aspect-4/3 rounded-3xl group"
              zoomOnHover
            />
            <div>
              <SectionHeading
                eyebrow="Bring Us In"
                title="Invite Us to Speak at Your Program"
                description="We visit PT, OT, and SLP programs to talk about careers, representation, and life after graduation — in person or virtually."
              />
              <div className="space-y-3 mt-8">
                {VISIT_STEPS.map((step, idx) => (
                  <div
                    key={step}
                    className="flex items-start gap-4 card rounded-xl p-5"
                  >
                    <span className="text-primary font-serif font-bold shrink-0">
                      0{idx + 1}
                    </span>
                    <p className="text-foreground text-sm">{step}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/speakers/book"
                className="btn btn-primary btn-lg group mt-10"
              >
                REQUEST A SPEAKER <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support strip */}
      <section className="section bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Scholarships", desc: "Direct financial support for tuition and board exams.", href: "/impact/scholarships" },
              { title: "Student Support Fund", desc: "Emergency grants for exam fees, equipment, and travel.", href: "/impact/student-support" },
              { title: "Career Resources", desc: "Resumes, interviews, and first-job negotiation guidance.", href: "/resources/career" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group card card-sunken p-8 card-hover flex flex-col"
              >
                <CheckCircle className="w-8 h-8 text-primary mb-5" />
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
        title="Free For Students. Always."
        description="Join the community, get matched with a mentor, and find the people who will be your professional network for the next thirty years."
        cta={{ label: "JOIN AS A STUDENT", href: "/community/join" }}
        secondaryCta={{ label: "See Scholarships", href: "/impact/scholarships" }}
      />
    </div>
  );
}
