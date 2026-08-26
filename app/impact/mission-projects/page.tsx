import Link from "next/link";
import { ArrowRight, CheckCircle, Globe2, MapPin, Sprout, Target } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

const PROJECTS = [
  {
    name: "Accra Mobility Initiative",
    location: "Accra, Ghana",
    status: "Active",
    since: "Since 2023",
    image: PHOTOS.ghanaAirport,
    summary:
      "Supplying and fitting assistive mobility devices through two partner clinics, with local technicians trained to maintain them.",
    outcomes: ["310 devices fitted", "6 technicians trained", "2 partner clinics"],
  },
  {
    name: "Island Rehab Access",
    location: "Saint Ann, Jamaica",
    status: "Active",
    since: "Since 2024",
    image: PHOTOS.retreatBeachYogaGroup,
    summary:
      "Mobile rehabilitation clinics reaching rural parishes where the nearest therapist is more than an hour away.",
    outcomes: ["840 patient visits", "3 parishes served", "12 volunteer clinicians"],
  },
  {
    name: "Southside Pediatric Screening",
    location: "Chicago, Illinois",
    status: "Active",
    since: "Since 2022",
    image: PHOTOS.impactTherapy,
    summary:
      "Developmental screening at community schools, with referral pathways into local therapy services.",
    outcomes: ["1,100 children screened", "9 partner schools", "220 referrals made"],
  },
  {
    name: "East Africa Exchange",
    location: "Nairobi, Kenya",
    status: "In Development",
    since: "Launching 2026",
    image: PHOTOS.ghanaLawn,
    summary:
      "A two-way continuing-education exchange between Kenyan and US rehabilitation programs.",
    outcomes: ["Partnership scoping", "Curriculum design", "Funding in progress"],
  },
];

const PRINCIPLES = [
  {
    icon: <Sprout className="w-6 h-6 text-primary" />,
    title: "Local First",
    desc: "Every project is led by a local partner organization. We support their plan; we do not import ours.",
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Built to Continue",
    desc: "If a project collapses when we leave, it was not a project. Training and handover are designed in from day one.",
  },
  {
    icon: <Globe2 className="w-6 h-6 text-primary" />,
    title: "Measured Honestly",
    desc: "We publish what worked and what did not. Numbers on this page come from partner reporting, not estimates.",
  },
];

export default function MissionProjectsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Impact", href: "/impact" },
          { label: "Mission Projects" },
        ]}
        title="Mission"
        highlight="Projects"
        description="Long-term rehabilitation projects run with partner organizations at home and abroad. These are multi-year commitments, not one-off trips."
        image={PHOTOS.impactVolunteersKids}
        cta={{ label: "FUND A PROJECT", href: "/impact/donate" }}
        secondaryCta={{ label: "Volunteer", href: "/impact/volunteer" }}
      />

      {/* Principles */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="How We Work"
            title="Three Principles We Do Not Bend"
            description="Global health work has a long history of doing harm with good intentions. These rules are how we try not to."
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRINCIPLES.map((principle) => (
              <div
                key={principle.title}
                className="bg-surface border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {principle.icon}
                </div>
                <h3 className="font-bold text-foreground mb-3">{principle.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Current Projects"
            title="Where the Work Is Happening"
            className="mb-16"
          />
          <div className="space-y-8">
            {PROJECTS.map((project) => (
              <div
                key={project.name}
                className="group grid grid-cols-1 lg:grid-cols-5 bg-background border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                <FillerImage
                  src={project.image}
                  alt={project.name}
                  wrapperClassName="lg:col-span-2 h-56 lg:h-full min-h-56"
                  zoomOnHover
                />
                <div className="lg:col-span-3 p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-widest">
                      <MapPin className="w-3.5 h-3.5" /> {project.location}
                    </span>
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        project.status === "Active"
                          ? "bg-primary/10 text-primary"
                          : "bg-muted/10 text-muted"
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="text-muted text-xs">{project.since}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                    {project.name}
                  </h3>
                  <p className="text-muted leading-relaxed mb-8">{project.summary}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.outcomes.map((outcome) => (
                      <span
                        key={outcome}
                        className="inline-flex items-center gap-2 text-sm text-foreground bg-surface border border-border rounded-full px-4 py-2"
                      >
                        <CheckCircle className="w-4 h-4 text-primary" /> {outcome}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="Funding"
                title="Where Project Dollars Go"
                description="Mission project funding is tracked separately from general operating support and reported in our annual report."
              />
              <div className="space-y-4 mt-8">
                {[
                  { label: "Direct program delivery", value: "78%" },
                  { label: "Local partner capacity", value: "14%" },
                  { label: "Monitoring and reporting", value: "8%" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between bg-surface border border-border rounded-xl px-6 py-4"
                  >
                    <span className="text-foreground text-sm">{item.label}</span>
                    <span className="text-primary font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about/annual-report"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors mt-8"
              >
                Read the annual report <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <FillerImage
              src={PHOTOS.impactVolunteerChildren}
              alt="Local clinicians at work"
              wrapperClassName="aspect-4/3 rounded-3xl group"
              zoomOnHover
            />
          </div>
        </div>
      </section>

      <CTABand
        title="Fund the Work That Stays"
        description="A recurring gift is what lets us commit to a partner for three years instead of three weeks."
        cta={{ label: "MAKE A GIFT", href: "/impact/donate" }}
        secondaryCta={{ label: "Sponsor a Project", href: "/support/sponsors" }}
      />
    </div>
  );
}
