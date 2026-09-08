import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Mic,
  School,
  Users,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import { PHOTOS } from "@/lib/images";

const OFFERINGS = [
  {
    icon: <School className="w-6 h-6 text-primary" />,
    title: "Campus Speaking Visits",
    desc: "We come to your program for panels, workshops, and career talks — in person or virtually.",
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

export default function UniversitiesPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/support/universities"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Support", href: "/support" },
          { label: "Mentorship Placement" },
        ]}
        title="Mentorship"
        highlight="Placement"
        description="Partner with us to recruit, support, and retain Black students in your PT, OT, and SLP programs. We work with the parts of the student experience your faculty cannot always reach."
        image={PHOTOS.ghanaJerseysGroup}
        cta={{ label: "START A CONVERSATION", href: "/contact" }}
        secondaryCta={{ label: "Student Community", href: "/community/students" }}
      />

      {/* Offerings */}
      <section className="section bg-background">
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
                className="card p-8 flex gap-6 card-hover"
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

      {/* Campus visit CTA */}
      <section className="section bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="card card-sunken rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <School className="w-10 h-10 text-primary mb-5" />
              <h2 className="display-3 text-foreground mb-4">
                Invite us to your campus
              </h2>
              <p className="text-muted leading-relaxed">
                The fastest way to begin. Tell us your program and the audience, and we
                will match you with a speaker for a panel, workshop, or career talk.
              </p>
            </div>
            <Link
              href="/speakers/book"
              className="btn btn-primary btn-lg group shrink-0"
            >
              REQUEST A SPEAKER <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title="Partner With Us"
        description="Tell us about your program and where students need support. We will propose the partnership that fits."
        cta={{ label: "START A CONVERSATION", href: "/contact" }}
        secondaryCta={{ label: "Corporate Partnerships", href: "/support/corporate" }}
      />
    </div>
  );
}
