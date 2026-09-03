import Link from "next/link";
import { ArrowRight, Mic, Mail } from "lucide-react";
import { getPeople } from "@/lib/cms";
import { PHOTOS } from "@/lib/images";

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

const SPEAKERS = [
  {
    name: "Dr. Chauntel Altidor, OTD",
    title: "Co-Founder & Executive Director, Black in Rehab",
    specialty: "Leadership · Global Health · Representation",
    image: PHOTOS.founderChauntel,
  },
  {
    name: "Nancy Yamoah, OT",
    title: "Co-Founder & Chief Strategy Officer, Black in Rehab",
    specialty: "Community Building · Student Development · Purpose",
    image: PHOTOS.founderNancy,
  },
  {
    name: "[Guest Speaker Name]",
    title: "[Title & Credentials] — CLIENT TO PROVIDE",
    specialty: "[Specialty Topics] — CLIENT TO PROVIDE",
    image: PHOTOS.conferenceSpeakerMic,
  },
  {
    name: "[Guest Speaker Name]",
    title: "[Title & Credentials] — CLIENT TO PROVIDE",
    specialty: "[Specialty Topics] — CLIENT TO PROVIDE",
    image: PHOTOS.conferenceSpeakerBw,
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

export default async function SpeakersPage() {
  const people = await getPeople("speaker");

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="section-dark relative py-24 md:py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${PHOTOS.retreatGroupOutdoors})` }}></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">Speakers</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white mb-6">
            Speakers <span className="text-primary">Bureau</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10">
            Bring the Black in Rehab message to your conference, campus, podcast, or event. Our speakers are passionate, dynamic, and deeply experienced in rehabilitation and community impact.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg group">
            BOOK A SPEAKER <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="eyebrow mb-5">What We Speak On</h2>
              <h3 className="display-2 text-foreground mb-6">Keynotes, Panels & Workshops</h3>
              <p className="text-muted text-lg leading-relaxed mb-10">
                Our speakers are available for in-person and virtual engagements including keynote addresses, panel discussions, university lectures, podcast appearances, and professional development workshops.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {TOPICS.map((topic, idx) => (
                  <div key={idx} className="flex items-center gap-3 card rounded-xl p-4 card-hover">
                    <Mic className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground text-sm font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="display-2 text-foreground mb-6">Our Speakers</h3>
              {SPEAKERS.map((speaker, idx) => {
                const links = speakerLinks(speaker.name, people);
                return (
                <div key={idx} className="group card p-6 flex gap-5 items-center card-hover">
                  <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={speaker.image} alt={speaker.name} className="photo photo-hover-lift w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground mb-1">{speaker.name}</h4>
                    <p className="text-muted text-sm mb-2">{speaker.title}</p>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wider">{speaker.specialty}</p>
                  </div>
                  {/* Rendered only once the People record carries a real
                      destination; a dead icon is worse than no icon. */}
                  <div className="flex gap-2">
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
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="section bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="display-2 text-foreground mb-4">Ready to Book?</h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Submit a speaker request with your event details, date, audience size, and topic of interest. We&apos;ll be in touch within 48 hours.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg group">
            SUBMIT SPEAKER REQUEST <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
