import type { Metadata } from "next";
import { ArrowUpRight, CalendarDays, CheckCircle, HelpCircle, Mic, Sparkles, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import PhotoCard from "@/components/ui/PhotoCard";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import FeatureSplit from "@/components/get-involved/FeatureSplit";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { getBirUniversity } from "@/lib/cms";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Black in Rehab University | Black in Rehab Foundation",
  description:
    "A free community learning experience for Black OT, PT, and SLP students — including future assistants — to connect, learn from rehabilitation professionals, and prepare for life beyond the classroom.",
};

/**
 * Black in Rehab University — the free monthly student sessions.
 *
 * Copy is the client's revision document, verbatim. It replaced a student
 * membership page that promised mentor matching, board-prep groups and
 * scholarship priority, none of which run today; do not add benefits back
 * without the client confirming them.
 *
 * The registration link changes every month, so every button reads one field:
 * Site Settings → BIR University → Session registration URL. The optional
 * next-session box appears only when its title is filled in there.
 *
 * The paid Accountability Lab used to share this page (and the old site's
 * /black-in-rehab-university URL). It now has its own page at
 * /get-involved/accountability-lab and is deliberately not linked as part of
 * the free programme.
 *
 * Laid out after the client's BIR CARES / Get Involved mockups: photo cards
 * for the four pillars, an arched photo beside the sessions, and a dark photo
 * band to close.
 */

const PILLARS = [
  {
    icon: Mic,
    title: "Real Conversations With Rehab Professionals",
    desc: "Hear from practicing therapists and educators about navigating your program, exploring your profession, and building your future.",
    image: PHOTOS.conferenceSession,
  },
  {
    icon: Users,
    title: "Connection Across OT, PT & SLP",
    desc: "Meet students across rehabilitation disciplines and learn how our professions work together to support the people we serve.",
    image: PHOTOS.conferenceNetworking,
  },
  {
    icon: Sparkles,
    title: "Support Beyond the Classroom",
    desc: "Join conversations about the student experience—from managing the semester and protecting your wellbeing to preparing for your next chapter.",
    image: PHOTOS.retreatYogaClass,
  },
  {
    icon: HelpCircle,
    title: "Space for Your Questions",
    desc: "Bring your questions to live discussions and Q&A sessions with our guest professionals. You don’t have to figure everything out alone.",
    image: PHOTOS.conferencePanel,
  },
];

const TOPICS = [
  "Navigating school while caring for yourself.",
  "Understanding interprofessional collaboration.",
  "Exploring rehabilitation careers, settings, and specialties.",
  "Financial wellness for students and new graduates.",
];

function RegisterButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary btn-lg group"
    >
      {label}
      <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
    </a>
  );
}

export default async function BirUniversityPage() {
  const uni = await getBirUniversity();

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/community/students"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Get Involved", href: "/get-involved" },
          { label: "Black in Rehab University" },
        ]}
        title="Black in Rehab"
        highlight="University"
        description="A free community learning experience for Black OT, PT, and SLP students—including future assistants—to connect, learn from rehabilitation professionals, and prepare for life beyond the classroom."
        image={PHOTOS.studentsLectureHall}
        imagePosition="center 55%"
        meta={<span className="chip chip-dark">Your Future Starts Here</span>}
        cta={{ label: "REGISTER FOR THE NEXT SESSION", href: uni.registrationUrl }}
      />

      {/* Learn. Connect. Prepare. */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Black in Rehab University"
              title="Learn. Connect. Prepare."
              className="mb-12"
            />
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map(({ icon, title, desc, image }) => (
              <StaggerItem key={title} className="flex">
                <PhotoCard image={image} icon={icon} title={title} imageClassName="h-44">
                  {desc}
                </PhotoCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Monthly sessions */}
      <FeatureSplit
        image={PHOTOS.studentsAwards}
        imageAlt="Students at a Black in Rehab event"
        imagePosition="center 30%"
        arch
        className="section bg-surface border-y border-border"
      >
        <SectionHeading
          eyebrow="Monthly on Zoom"
          title="Join Our Monthly Virtual Sessions"
          description="Black in Rehab University meets monthly on Zoom, bringing students and rehabilitation professionals together for practical conversations, shared experiences, and connection."
        />
        <p className="mt-8 mb-4 font-semibold text-foreground">Topics include:</p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {TOPICS.map((topic) => (
            <li key={topic} className="card card-sunken flex items-start gap-3 rounded-xl p-4 text-sm text-foreground">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span>{topic}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-semibold text-primary">
          Free to attend. Registration required.
        </p>

        {uni.sessionTitle && (
          <div className="card mt-8 p-6">
            <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Next session
            </p>
            <p className="text-lg font-bold text-foreground">{uni.sessionTitle}</p>
            {(uni.sessionDate || uni.sessionTime) && (
              <p className="mt-1 text-sm text-muted">
                {[uni.sessionDate, uni.sessionTime].filter(Boolean).join(" · ")}
              </p>
            )}
            {uni.sessionDescription && (
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {uni.sessionDescription}
              </p>
            )}
          </div>
        )}

        <div className="mt-8">
          <RegisterButton href={uni.registrationUrl} label="REGISTER FOR THE NEXT SESSION" />
        </div>
      </FeatureSplit>

      {/* Who is this for */}
      <FeatureSplit
        image={PHOTOS.conferenceAudience}
        imageSide="right"
        imagePosition="center"
        className="section bg-background"
      >
        <SectionHeading
          eyebrow="Eligibility"
          title="Who Is This For?"
          description="Students enrolled in OT, COTA, PT, PTA, SLP, and SLPA programs who want to learn, connect, and grow alongside a community that centers Black experiences in rehabilitation."
        />
        <ul className="mt-8 flex flex-wrap gap-2">
          {["OT", "COTA", "PT", "PTA", "SLP", "SLPA"].map((program) => (
            <li key={program} className="chip">
              {program}
            </li>
          ))}
        </ul>
      </FeatureSplit>

      {/* Closing band. The registration link is external and opens a new
          tab, which CTABand's internal <Link> does not do. */}
      <PhotoSplitBand image={PHOTOS.conferenceGroupBranded} imageSide="left">
        <p className="eyebrow eyebrow-on-dark mb-5">Free to Attend</p>
        <h2 className="display-2 text-white">Find Your Community Before You Graduate</h2>
        <p className="mt-5 mb-9 max-w-lg text-lg leading-relaxed text-white/80">
          Come with your questions, your goals, and your curiosity. Connect with
          people who understand the journey and want to see you succeed.
        </p>
        <RegisterButton
          href={uni.registrationUrl}
          label="REGISTER FOR THE NEXT BIR UNIVERSITY SESSION"
        />
      </PhotoSplitBand>
    </div>
  );
}
