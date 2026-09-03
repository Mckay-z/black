import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Compass,
  MapPin,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

const TRACKS = [
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Clarity",
    desc: "Define the leader you are becoming, the work you will say no to, and the impact you are aiming at.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: "Advancement",
    desc: "Negotiation, promotion cases, and building the record that gets you into the room.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Influence",
    desc: "Leading teams and committees where you may be the only Black clinician at the table.",
  },
  {
    icon: <Compass className="w-6 h-6 text-primary" />,
    title: "Legacy",
    desc: "Mentorship, sponsorship, and opening the doors you had to push through yourself.",
  },
];

const WHO_ITS_FOR = [
  "Clinicians five or more years into practice",
  "Department leads, supervisors, and clinical educators",
  "Practice owners and rehabilitation entrepreneurs",
  "Faculty and program directors",
  "Anyone preparing for a first leadership role",
];

const AGENDA = [
  { time: "Day One", title: "Where You Actually Are", desc: "Leadership assessment, peer interviews, and an honest audit of your current position." },
  { time: "Day Two", title: "Building the Case", desc: "Executive presence, negotiation labs, and constructing a promotion or funding case." },
  { time: "Day Three", title: "Leading Others", desc: "Difficult conversations, team design, and navigating institutions that were not built for you." },
  { time: "Day Four", title: "The Next Twelve Months", desc: "A written plan, an accountability pod, and quarterly follow-up sessions." },
];

export default function LeadershipRetreatsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/experiences/leadership-retreats"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Experiences", href: "/experiences" },
          { label: "Leadership Retreats" },
        ]}
        title="Leadership"
        highlight="Retreats"
        description="A four-day intensive for rehabilitation professionals ready to lead. Small cohorts, direct coaching, and a plan you leave with in writing."
        image={PHOTOS.retreatGroupFormal}
        meta={
          <>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" /> October 9–12, 2025
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Atlanta, Georgia
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" /> 20 participants
            </div>
          </>
        }
        cta={{ label: "APPLY FOR A SEAT", href: "/contact" }}
        size="tall"
      />

      {/* Intro */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FillerImage
              src={PHOTOS.conferencePresentation}
              alt="Leadership session in progress"
              wrapperClassName="aspect-4/3 rounded-3xl group"
              zoomOnHover
            />
            <div>
              <SectionHeading
                eyebrow="Why This Retreat"
                title="Wellness Retreats Restore You. This One Positions You."
              />
              <p className="text-muted text-lg leading-relaxed mb-6">
                Black rehabilitation professionals are well represented in clinical roles and
                thinly represented in the roles that set budgets, hiring, and policy. That gap
                is not a talent problem. It is an access and preparation problem.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                This retreat is built to close it: four days of concentrated coaching, peer
                pressure-testing, and practical tools, followed by a year of structured
                accountability with your cohort.
              </p>
              <Link
                href="/experiences/retreats"
                className="link-arrow mt-8"
              >
                Looking for our wellness retreats? <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="The Curriculum"
            title="Four Tracks, One Cohort"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRACKS.map((track) => (
              <div
                key={track.title}
                className="card card-sunken p-8 card-hover"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {track.icon}
                </div>
                <h3 className="font-bold text-foreground mb-3">{track.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{track.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda + who it is for */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading eyebrow="Agenda" title="How the Four Days Run" className="mb-10" />
              <div className="space-y-4">
                {AGENDA.map((item) => (
                  <div
                    key={item.time}
                    className="card p-6 flex flex-col sm:flex-row gap-4 sm:items-center card-hover"
                  >
                    <p className="text-primary text-xs font-bold uppercase tracking-widest sm:w-28 shrink-0">
                      {item.time}
                    </p>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Fit" title="Who It Is For" className="mb-10" />
              <div className="card p-8 space-y-4">
                {WHO_ITS_FOR.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm">{item}</p>
                  </div>
                ))}
                <p className="text-muted text-xs leading-relaxed pt-4 border-t border-border">
                  Applications are reviewed on a rolling basis. Cohorts are intentionally
                  small, so we look for readiness rather than seniority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Twenty Seats. One Cohort a Year."
        description="Tell us where you are and where you are trying to go. We will let you know within two weeks whether this cohort is the right fit."
        cta={{ label: "APPLY FOR A SEAT", href: "/contact" }}
        secondaryCta={{ label: "All Experiences", href: "/experiences" }}
      />
    </div>
  );
}
