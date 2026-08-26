import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  FileText,
  MapPin,
  Users,
  Video,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

const SERVICES = [
  {
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    title: "Live Job Board",
    desc: "Roles from partner health systems, private practices, and school districts actively hiring rehabilitation staff.",
  },
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: "Resume Review",
    desc: "A working clinician reads your resume and sends written feedback within a week. Free for members.",
  },
  {
    icon: <Video className="w-6 h-6 text-primary" />,
    title: "Mock Interviews",
    desc: "Practice sessions with clinicians who have sat on the hiring side of the table.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Recruiter Office Hours",
    desc: "Monthly drop-in sessions with recruiting partners — no application required to show up and ask questions.",
  },
];

const OPENINGS = [
  { role: "Outpatient Physical Therapist", employer: "Partner employer — client to confirm", location: "Atlanta, GA", type: "Full time" },
  { role: "Pediatric Occupational Therapist", employer: "Partner employer — client to confirm", location: "Houston, TX", type: "Full time" },
  { role: "School-Based SLP", employer: "Partner employer — client to confirm", location: "Chicago, IL", type: "Contract" },
  { role: "Acute Care Physical Therapist", employer: "Partner employer — client to confirm", location: "Newark, NJ", type: "Full time" },
  { role: "Rehabilitation Program Director", employer: "Partner employer — client to confirm", location: "Remote / Hybrid", type: "Leadership" },
];

const AT_CONFERENCE = [
  "A dedicated lounge space on the exhibition floor",
  "On-site interviews with partner employers",
  "Headshot studio, free for all attendees",
  "Drop-in resume clinics throughout the three days",
];

export default function CareerLoungePage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Support", href: "/support" },
          { label: "Career Lounge" },
        ]}
        title="The Career"
        highlight="Lounge"
        description="Where our members and hiring partners actually meet. Job listings, resume reviews, mock interviews, and recruiter office hours — online year round and in person at the annual conference."
        image={PHOTOS.retreatDinner}
        cta={{ label: "BROWSE OPENINGS", href: "#openings" }}
        secondaryCta={{ label: "Recruit With Us", href: "/support/recruit" }}
      />

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="What Is Inside"
            title="Four Services, One Membership"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="bg-surface border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section id="openings" className="py-24 bg-surface border-y border-border scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Current Openings"
            title="Roles From Our Partners"
            description="Listings shown are placeholders. Live roles are posted to the member job board as partners submit them."
            className="mb-16"
          />
          <div className="space-y-4">
            {OPENINGS.map((opening, idx) => (
              <div
                key={idx}
                className="bg-background border border-border rounded-2xl p-7 flex flex-col md:flex-row md:items-center justify-between gap-5 hover:border-primary/50 transition-colors"
              >
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{opening.role}</h3>
                    <p className="text-muted text-sm mb-2">{opening.employer}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-primary" /> {opening.location}
                      </span>
                      <span className="text-primary font-semibold uppercase tracking-wider">
                        {opening.type}
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/community/join"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors shrink-0"
                >
                  View on the member board <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* At the conference */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FillerImage
              src={PHOTOS.conferenceAudience}
              alt="Career lounge at the annual conference"
              wrapperClassName="aspect-4/3 rounded-3xl group"
              zoomOnHover
            />
            <div>
              <SectionHeading
                eyebrow="At the Conference"
                title="The Lounge Comes to Life in June"
                description="At the annual conference, the career lounge becomes a physical space — and the fastest way to go from conversation to offer."
              />
              <div className="space-y-3 mt-8">
                {AT_CONFERENCE.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-surface border border-border rounded-xl p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/experiences/conference"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors mt-10"
              >
                CONFERENCE DETAILS <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Employer strip */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-background border border-border rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <Users className="w-10 h-10 text-primary mb-5" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Hiring rehabilitation staff?
              </h2>
              <p className="text-muted leading-relaxed">
                Post to our job board, take a table at the conference lounge, or build a longer
                pipeline partnership with us.
              </p>
            </div>
            <Link
              href="/support/recruit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors shrink-0"
            >
              RECRUIT WITH US <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title="Your Next Role Starts Here"
        description="Career lounge access is included with every membership tier, including free student membership."
        cta={{ label: "JOIN THE MOVEMENT", href: "/join-the-movement" }}
        secondaryCta={{ label: "Career Resources", href: "/resources/career" }}
      />
    </div>
  );
}
