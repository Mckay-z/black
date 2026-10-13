import type { Metadata } from "next";
import {
  ArrowUpRight,
  CalendarCheck,
  CalendarDays,
  CheckCircle,
  Flame,
  Timer,
  Video,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import PhotoCard from "@/components/ui/PhotoCard";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import FeatureSplit from "@/components/get-involved/FeatureSplit";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { getAccountabilityLab } from "@/lib/cms";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Accountability Lab | Black in Rehab Foundation",
  description:
    "A 12-week small-group experience for Black rehabilitation professionals ready to move a meaningful goal forward — offered with Occupational Therapy Entrepreneurs of Color (OTEC).",
};

/**
 * The Accountability Lab — Black in Rehab's paid professional cohort.
 *
 * Kept apart from the free Black in Rehab University on purpose (the client's
 * revision asked for the two to stop sharing a page and a URL). Copy is the
 * revision document, verbatim.
 *
 * Everything that changes between cohorts — status line, dates, schedule,
 * prices, waitlist URL and button label — is read from Site Settings →
 * Accountability Lab, with the document's wording as the fallback.
 *
 * Enrollment is closed, so there is no Enroll / Apply / checkout button: every
 * action is the waitlist form. Facilitators are not listed because no
 * BIR-approved names, credentials or bios have been supplied yet; add a
 * section only once they are.
 */

const MONTHLY_SESSIONS = [
  {
    icon: CalendarCheck,
    title: "One Accountability Meetup",
    desc: "Planning, reflection, and clear next steps.",
    image: PHOTOS.conferenceNetworking,
  },
  {
    icon: Timer,
    title: "Two Power Hours",
    desc: "Dedicated live co-working time to make progress on your goal.",
    image: PHOTOS.conferencePodium,
  },
  {
    icon: Flame,
    title: "One Hot Seat Session",
    desc: "Focused feedback and support for challenges you bring to the group.",
    image: PHOTOS.conferencePanel,
  },
];

const INCLUDED = [
  "A guided workbook and monthly theme.",
  "A private WhatsApp community for communication and accountability between sessions.",
  "Faith-informed encouragement, habit-building strategies, and practical support.",
  "A cohort capped at 15 participants to maintain focus and connection.",
];

function WaitlistButton({ href, label }: { href: string; label: string }) {
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

export default async function AccountabilityLabPage() {
  const lab = await getAccountabilityLab();

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/get-involved/accountability-lab"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Get Involved", href: "/get-involved" },
          { label: "Accountability Lab" },
        ]}
        title="Accountability"
        highlight="Lab"
        description="Build. Execute. Finish. Together."
        image={PHOTOS.conferenceTableTalk}
        imagePosition="center 40%"
        meta={
          <>
            <span className="chip chip-dark">12 weeks</span>
            <span className="chip chip-dark">Live on Zoom</span>
            <span className="chip chip-dark">Capped at 15</span>
          </>
        }
        cta={{ label: lab.waitlistLabel.toUpperCase(), href: lab.waitlistUrl }}
      />

      {/* Intro + status */}
      <FeatureSplit
        image={PHOTOS.conferencePresentation}
        imagePosition="center 40%"
        arch
        className="section bg-background"
      >
        <p className="eyebrow mb-5">For Professionals</p>
        <h2 className="display-2 text-foreground">Build. Execute. Finish. Together.</h2>
        <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted">
          <p className="text-foreground">
            A 12-week small-group experience for Black rehabilitation
            professionals ready to move a meaningful goal forward. Bring the
            business, project, or creative work you are building—and make time
            to work on it with support.
          </p>
          <p>
            Offered by Black in Rehab in collaboration with Occupational Therapy
            Entrepreneurs of Color (OTEC), the Lab combines practical structure,
            faith-informed encouragement, and a community committed to showing
            up and doing the work.
          </p>
        </div>

        <div className="card mt-10 border-primary/40 p-6 md:p-8">
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            Cohort status
          </p>
          <p className="font-semibold text-foreground">{lab.enrollmentStatus}</p>
          {(lab.nextCohortDates || lab.schedule) && (
            <dl className="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-2">
              {lab.nextCohortDates && (
                <div>
                  <dt className="font-semibold text-foreground">Next cohort</dt>
                  <dd>{lab.nextCohortDates}</dd>
                </div>
              )}
              {lab.schedule && (
                <div>
                  <dt className="font-semibold text-foreground">Schedule</dt>
                  <dd>{lab.schedule}</dd>
                </div>
              )}
            </dl>
          )}
          <div className="mt-6">
            <WaitlistButton href={lab.waitlistUrl} label={lab.waitlistLabel} />
          </div>
        </div>
      </FeatureSplit>

      {/* What to expect */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="The Format"
              title="What to Expect"
              description="Four live sessions each month:"
              className="mb-12"
            />
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {MONTHLY_SESSIONS.map(({ icon, title, desc, image }) => (
              <StaggerItem key={title} className="flex">
                <PhotoCard image={image} icon={icon} title={title} imagePosition="center 35%">
                  {desc}
                </PhotoCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Also included */}
      <PhotoSplitBand image={PHOTOS.conferenceSpeakerMic} imagePosition="center 30%" imageSide="left">
        <p className="eyebrow eyebrow-on-dark mb-5">Between Sessions</p>
        <h2 className="display-2 text-white">Also included:</h2>
        <ul className="mt-8 space-y-4">
          {INCLUDED.map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg leading-relaxed text-white/85">
              <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </PhotoSplitBand>

      {/* Who it's for */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <StaggerItem className="flex">
              <PhotoCard
                image={PHOTOS.conferenceAudience}
                eyebrow="Eligibility"
                title="Who Is This For?"
                imageClassName="h-56"
              >
                <p className="leading-relaxed text-foreground">
                  Black rehabilitation professionals working on a business, a launch,
                  a creative project, or a specific professional goal.
                </p>
                <p className="mt-4 leading-relaxed">
                  Students are considered only if they have a business or a specific
                  project they are actively working on, and participation requires
                  group leader approval. The Lab is not a board-exam preparation group.
                </p>
              </PhotoCard>
            </StaggerItem>
            <StaggerItem className="flex">
              <PhotoCard
                image={PHOTOS.conferenceRoomWide}
                eyebrow="Your Part"
                title="Come Ready to Participate"
                imageClassName="h-56"
              >
                <p className="leading-relaxed">
                  Bring a defined goal and a willingness to work during live sessions.
                  Whether you are developing a service, growing a brand, writing a
                  book, or completing a project, this is a space to turn intentions
                  into consistent action.
                </p>
                <p className="mt-4 flex items-center gap-2 font-semibold text-foreground">
                  <Video className="h-5 w-5 text-primary" aria-hidden="true" />
                  Format: Live on Zoom, with communication through WhatsApp.
                </p>
              </PhotoCard>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Investment */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <SectionHeading eyebrow="Pricing" title="Choose What Works for You" className="mb-12" />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="card border-primary/40 p-8 md:p-10">
              <h2 className="mb-2 font-serif text-2xl font-bold text-foreground">Investment</h2>
              <p className="mb-6 text-muted">Choose the payment option that works for you:</p>
              <ul className="space-y-3">
                {[lab.monthlyPrice, lab.fullPrice].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-foreground">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-8 md:p-10">
              <h2 className="mb-2 font-serif text-2xl font-bold text-foreground">
                Optional Private Advisory
              </h2>
              <p className="leading-relaxed text-muted">
                Active Lab participants may add a 60-minute private advisory session
                for {lab.advisoryPrice} for personalized strategy, clarity, and
                feedback. This is optional and separate from the group experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <PhotoSplitBand image={PHOTOS.conferenceGroupBranded} imageSide="right">
        <p className="eyebrow eyebrow-on-dark mb-5">Next Cohort</p>
        <h2 className="display-2 text-white">Be First to Hear About the Next Cohort</h2>
        <p className="mt-5 mb-9 max-w-lg text-lg leading-relaxed text-white/80">
          Join the waitlist to express your interest in the next Accountability
          Lab. The next start date has not been announced. Joining the waitlist
          does not enroll you or guarantee a place.
        </p>
        <WaitlistButton href={lab.waitlistUrl} label={lab.waitlistLabel} />
      </PhotoSplitBand>
    </div>
  );
}
