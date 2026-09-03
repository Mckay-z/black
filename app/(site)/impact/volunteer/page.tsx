import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  HandHeart,
  Megaphone,
  Mic,
  Users,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

const ROLES = [
  {
    icon: <HandHeart className="w-6 h-6 text-primary" />,
    title: "Community Service",
    commitment: "One day at a time",
    desc: "Health screenings, mobility clinics, and school-based events in underserved neighborhoods.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Mentorship",
    commitment: "One hour a month",
    desc: "Be matched with a student or early-career clinician who needs someone who has walked the path.",
  },
  {
    icon: <Mic className="w-6 h-6 text-primary" />,
    title: "Event Support",
    commitment: "Per event",
    desc: "Help run registration, sessions, and logistics at the annual conference and regional gatherings.",
  },
  {
    icon: <Megaphone className="w-6 h-6 text-primary" />,
    title: "Advocacy & Outreach",
    commitment: "Ongoing",
    desc: "Represent the organization at career fairs, campus visits, and professional association meetings.",
  },
];

const STEPS = [
  { step: "01", title: "Tell us your interest", desc: "A five-minute form covering your discipline, city, and how much time you have." },
  { step: "02", title: "Short onboarding call", desc: "We match you to a role that fits your schedule rather than the other way around." },
  { step: "03", title: "Get placed", desc: "You are introduced to a team lead and added to the volunteer roster for your area." },
];

const IMPACT = [
  { value: "1,200+", label: "Volunteer hours in 2024" },
  { value: "18", label: "Community events supported" },
  { value: "140", label: "Mentorship pairs matched" },
];

export default function VolunteerPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/impact/volunteer"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Impact", href: "/impact" },
          { label: "Volunteer" },
        ]}
        title="Volunteer"
        highlight="With Us"
        description="Every program we run is powered by clinicians who give their time. Whether you have one afternoon or one hour a month, there is a role that fits."
        image={PHOTOS.impactVolunteerChildren}
        cta={{ label: "SIGN UP TO VOLUNTEER", href: "/contact" }}
      />

      {/* Impact numbers */}
      <section className="py-16 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {IMPACT.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Volunteer Roles"
            title="Four Ways to Give Your Time"
            description="Pick the one that matches the season you are in. People move between roles all the time."
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {ROLES.map((role) => (
              <div
                key={role.title}
                className="card p-8 card-hover"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    {role.icon}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                    <Clock className="w-3.5 h-3.5" /> {role.commitment}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{role.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FillerImage
              src={PHOTOS.impactHandsUp}
              alt="Volunteers at a community event"
              wrapperClassName="aspect-4/3 rounded-3xl group"
              zoomOnHover
            />
            <div>
              <SectionHeading
                eyebrow="Getting Started"
                title="Three Steps, About a Week"
              />
              <div className="space-y-6 mt-8">
                {STEPS.map((item) => (
                  <div key={item.step} className="flex gap-5">
                    <span className="text-2xl font-serif font-bold text-primary shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 card card-sunken p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-muted text-sm leading-relaxed">
                    Volunteer hours can be documented for licensure, tenure, and employer
                    service requirements. Ask us for a letter any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross links */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Community Service", desc: "See the programs your hours support.", href: "/impact/service" },
              { title: "Mission Projects", desc: "Longer-term projects here and abroad.", href: "/impact/mission-projects" },
              { title: "Advocacy", desc: "Policy and representation work.", href: "/impact/advocacy" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group card p-8 card-hover flex flex-col"
              >
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed flex-1 mb-5">{item.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Give an Hour. Change a Trajectory."
        description="Tell us what you have time for and we will find the role where it counts most."
        cta={{ label: "SIGN UP TO VOLUNTEER", href: "/contact" }}
        secondaryCta={{ label: "Support Us Another Way", href: "/support" }}
      />
    </div>
  );
}
