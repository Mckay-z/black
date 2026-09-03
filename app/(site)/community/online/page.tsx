import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  MessagesSquare,
  Users,
  Video,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

const CHANNELS = [
  {
    icon: <MessagesSquare className="w-6 h-6 text-primary" />,
    title: "Discussion Channels",
    desc: "Setting-specific rooms for acute care, outpatient, pediatrics, home health, school-based practice, and academia.",
  },
  {
    icon: <Video className="w-6 h-6 text-primary" />,
    title: "Monthly Live Calls",
    desc: "A members-only video call each month: a guest clinician, an open floor, and no recording so people speak freely.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    title: "Job & Opportunity Board",
    desc: "Roles shared by members and partner employers, plus contract, PRN, and locum leads.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Mentorship Matching",
    desc: "Twice-yearly pairing rounds connecting students and early-career clinicians with experienced mentors.",
  },
];

const RULES = [
  "What is said in the community stays in the community",
  "Clinical advice is peer discussion, never a substitute for supervision",
  "No recruiting spam — job posts go on the board",
  "Disagree with the argument, not the person",
  "Students are welcome everywhere, in every room",
];

const STATS = [
  { value: "2,400+", label: "Members" },
  { value: "38", label: "States represented" },
  { value: "11", label: "Discussion channels" },
  { value: "94%", label: "Would recommend it" },
];

export default function OnlineCommunityPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/community/online"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Community", href: "/community" },
          { label: "Online Community" },
        ]}
        title="The Online"
        highlight="Community"
        description="A private space for Black rehabilitation professionals and students. Ask the question you would not ask at work, find a mentor, and stop being the only one in the room."
        image={PHOTOS.conferenceSession}
        cta={{ label: "REQUEST AN INVITE", href: "/community/join" }}
      />

      {/* Stats */}
      <section className="py-16 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat) => (
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

      {/* Channels */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Inside the Community"
            title="What You Get Access To"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {CHANNELS.map((channel) => (
              <div
                key={channel.title}
                className="card p-8 flex gap-6 card-hover"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  {channel.icon}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-3">{channel.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{channel.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FillerImage
              src={PHOTOS.conferenceCelebration}
              alt="Members of the Black in Rehab community"
              wrapperClassName="aspect-4/3 rounded-3xl group"
              zoomOnHover
            />
            <div>
              <SectionHeading
                eyebrow="How We Keep It Good"
                title="A Small Set of Non-Negotiables"
                description="Online spaces go bad when nobody defines what they are for. Ours are simple and we enforce them."
              />
              <div className="space-y-3 mt-8">
                {RULES.map((rule) => (
                  <div
                    key={rule}
                    className="flex items-start gap-3 card card-sunken rounded-xl p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              eyebrow="Access"
              title="Included With Membership"
              description="The online community is part of every Black in Rehab membership tier, including the free student tier."
              align="center"
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                href="/community/join"
                className="btn btn-primary btn-lg group"
              >
                SEE MEMBERSHIP TIERS <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/community"
                className="inline-flex items-center justify-center gap-2 border border-border hover:border-primary text-foreground font-semibold py-4 px-8 rounded-full transition-colors"
              >
                Explore the Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="You Should Not Have to Do This Alone"
        description="Join a few thousand people who understand exactly what your week looked like."
        cta={{ label: "JOIN THE MOVEMENT", href: "/join-the-movement" }}
      />
    </div>
  );
}
