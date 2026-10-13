import Link from "next/link";
import { ArrowRight, Mic, Mail } from "lucide-react";
import { getPeople } from "@/lib/cms";
import { PHOTOS } from "@/lib/images";
import PageHero from "@/components/ui/PageHero";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const TOPICS = [
  "Representation & Diversity in Rehabilitation",
  "Health Equity & Disparities in Underserved Communities",
  "Leadership Development for Healthcare Professionals",
  "Global Health & International Service",
  "Building Community Through Professional Organizations",
  "Entrepreneurship in Physical & Occupational Therapy",
  "Student Success & Career Development in Rehab",
  "Cultural Competency in Clinical Practice",
];

/*
  The two named speakers, and only those.

  This list also carried two "[Guest Speaker Name] — CLIENT TO PROVIDE"
  cards that were rendering to visitors. Guest speakers get added here as
  the client supplies them; an empty slot is better than a visible one.
*/
const SPEAKERS = [
  {
    name: "Nancy Yamoah, OTR/L",
    title: "Founder, CEO & President, Black in Rehab",
    specialty: "Clinician Wellness · Leadership · Global Impact",
    image: PHOTOS.teamNancy,
    href: "/speakers/nancy-yamoah",
  },
  {
    name: "Dr. Chauntel Altidor, OTD",
    title: "Co-Founder & Executive Director, Black in Rehab",
    specialty: "Leadership · Global Health · Representation",
    image: PHOTOS.founderChauntel,
    href: "/speakers/dr-chauntel-altidor",
  },
];

/**
 * Match a hardcoded speaker card to its People record by name so contact
 * links can come from the dashboard. Names are compared loosely because the
 * card and the record punctuate credentials differently
 * ("Nancy Yamoah" vs "Nancy Yamoah, OT").
 */
function speakerLinks(
  name: string,
  people: Awaited<ReturnType<typeof getPeople>>,
) {
  const key = name.toLowerCase().replace(/[^a-z]/g, "");
  const match = people.find((person) => {
    const candidate = person.name.toLowerCase().replace(/[^a-z]/g, "");
    return candidate.startsWith(key) || key.startsWith(candidate);
  });
  return { linkedin: match?.linkedin ?? null, email: match?.email ?? null };
}

/**
 * The Speakers Bureau landing page, in the layout of the BIR CARES and Get
 * Involved pages: photo hero, large portrait cards for the two speakers, the
 * topics beside a photo collage, and a dark photo band to close.
 */
export default async function SpeakersPage() {
  const people = await getPeople("speaker");

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/speakers"
        crumbs={[{ label: "Home", href: "/" }, { label: "Speakers" }]}
        title="Speakers"
        highlight="Bureau"
        description="Bring the Black in Rehab message to your conference, campus, podcast, or event. Our speakers are passionate, dynamic, and deeply experienced in rehabilitation and community impact."
        image={PHOTOS.conferenceAudience}
        cta={{ label: "BOOK A SPEAKER", href: "/contact" }}
      />

      {/* Our Speakers — a large portrait card per named speaker. */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-5">Meet the Speakers</p>
            <h2 className="display-2 text-foreground">Our Speakers</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Available for keynotes, panels, lectures, podcasts, and workshops —
              in person and virtually.
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {SPEAKERS.map((speaker) => {
              const links = speakerLinks(speaker.name, people);
              return (
                <StaggerItem key={speaker.href} className="flex">
                  <div className="card card-hover group relative flex w-full flex-col overflow-hidden">
                    <div className="img-filler aspect-4/5 overflow-hidden sm:aspect-4/3 md:aspect-4/5 lg:aspect-4/3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        loading="lazy"
                        className="photo h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-5 p-7 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                          {speaker.specialty}
                        </p>
                        <h3 className="font-serif text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                          {speaker.name}
                        </h3>
                        <p className="mt-1 text-sm text-muted">{speaker.title}</p>
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                          View profile
                          <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
                        </span>
                      </div>
                      {/*
                        The card is the link, laid over it rather than wrapped
                        around it: the LinkedIn and email buttons below are
                        interactive too, and an anchor inside an anchor is
                        invalid HTML. This sits under them in the stacking
                        order, so a click on a social button is that button's,
                        and a click anywhere else on the card opens the profile.
                      */}
                      <Link
                        href={speaker.href}
                        aria-label={`${speaker.name} — speaker profile`}
                        className="absolute inset-0 rounded-[inherit]"
                      />

                      {/* Rendered only once the People record carries a real
                          destination; a dead icon is worse than no icon. */}
                      <div className="relative z-10 flex gap-2">
                        {links.linkedin && (
                          <a
                            href={links.linkedin!}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${speaker.name} on LinkedIn`}
                            className="w-9 h-9 rounded-full bg-background border border-border hover:border-primary flex items-center justify-center transition-colors"
                          >
                            <LinkedInIcon className="w-4 h-4 text-muted hover:text-primary" />
                          </a>
                        )}
                        {links.email && (
                          <a
                            href={`mailto:${links.email}`}
                            aria-label={`Email ${speaker.name}`}
                            className="w-9 h-9 rounded-full bg-background border border-border hover:border-primary flex items-center justify-center transition-colors"
                          >
                            <Mail className="w-4 h-4 text-muted hover:text-primary" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Speaking topics, beside a photo collage. */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto grid grid-cols-1 items-start gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-5">What We Speak On</p>
            <h2 className="display-2 text-foreground">Keynotes, Panels &amp; Workshops</h2>
            <p className="mt-5 mb-10 text-lg leading-relaxed text-muted">
              Our speakers are available for in-person and virtual engagements including keynote addresses, panel discussions, university lectures, podcast appearances, and professional development workshops.
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {TOPICS.map((topic) => (
                <li key={topic} className="card flex items-center gap-3 rounded-xl p-4">
                  <Mic className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground">{topic}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right" className="grid grid-cols-2 gap-4">
            <div className="img-filler col-span-2 aspect-4/3 overflow-hidden rounded-[var(--radius-panel)] shadow-float">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTOS.conferencePanel}
                alt="A panel discussion at a Black in Rehab conference"
                loading="lazy"
                className="photo h-full w-full object-cover"
              />
            </div>
            <div className="img-filler aspect-square overflow-hidden rounded-[var(--radius-card)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTOS.conferenceSpeakerMic}
                alt="A speaker addressing the room at a Black in Rehab event"
                loading="lazy"
                className="photo h-full w-full object-cover object-top"
              />
            </div>
            <div className="img-filler aspect-square overflow-hidden rounded-[var(--radius-card)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTOS.conferenceSession}
                alt="A conference session in progress"
                loading="lazy"
                className="photo h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Book CTA */}
      <PhotoSplitBand image={PHOTOS.speakingTeamWagmc} imagePosition="center 30%" imageSide="left">
        <p className="eyebrow eyebrow-on-dark mb-5">Book a Speaker</p>
        <h2 className="display-2 text-white">Ready to Book?</h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
          Submit a speaker request with your event details, date, audience size, and topic of interest. We&apos;ll be in touch within 48 hours.
        </p>
        <Link href="/contact" className="btn btn-primary btn-lg group mt-9">
          SUBMIT SPEAKER REQUEST <ArrowRight className="btn-arrow h-5 w-5" />
        </Link>
      </PhotoSplitBand>
    </div>
  );
}
