import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getPeople, imageUrl } from "@/lib/cms";
import { FALLBACK_LEADERSHIP } from "@/lib/fallback-content";
import { PHOTOS } from "@/lib/images";

/** How many of the team to show before sending people to the full page. */
const SHOWN = 4;

/**
 * The leadership section on the homepage.
 *
 * Reads the same `people` records as /about/leadership rather than keeping its
 * own hardcoded pair, which had drifted: it still showed Nancy as
 * "Co-Founder & Strategic Leader" after the client restyled her as Founder,
 * CEO & President, and used a portrait she has since replaced.
 *
 * The copy is team-wide rather than founder-specific — the client asked for
 * this section to be reworded once the wider team was supplied.
 */
export default async function Leadership() {
  const people = await getPeople("leadership");

  const team = (
    people.length
      ? people.map((person) => ({
          id: String(person.id),
          name: person.name,
          role: person.role,
          image: imageUrl(person.photo, PHOTOS.conferenceSpeakerMic),
          description: person.shortBio ?? "",
        }))
      : FALLBACK_LEADERSHIP.map((member) => ({
          id: member.id,
          name: member.name,
          role: member.role,
          image: member.image,
          description: member.bio,
        }))
  ).slice(0, SHOWN);

  return (
    <section className="section bg-glow bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="reveal mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Our Leadership</p>
            <h2 className="display-2 text-foreground">Meet the Team</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              The people guiding our mission, our programs, and our global community —
              clinicians, strategists, and ambassadors who believe rehabilitation
              professionals can be leaders, mentors, and global citizens.
            </p>
          </div>

          <Link href="/about/leadership" className="link-arrow group shrink-0">
            MEET THE FULL TEAM
            <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {team.map((leader) => (
            <Link
              key={leader.id}
              href="/about/leadership"
              className="card card-hover reveal group flex flex-col overflow-hidden sm:flex-row"
            >
              <div className="img-filler relative h-64 w-full sm:h-auto sm:w-2/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={leader.image}
                  alt={leader.name}
                  loading="lazy"
                  className="photo photo-hover-lift absolute inset-0 h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>

              <div className="flex flex-col justify-center p-8 sm:w-3/5">
                <h3 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {leader.name}
                </h3>
                <p className="mb-4 text-sm font-medium text-primary">{leader.role}</p>
                {leader.description && (
                  <p className="mb-6 line-clamp-4 text-sm leading-relaxed text-muted">
                    {leader.description}
                  </p>
                )}

                <span className="link-arrow mt-auto text-foreground group-hover:text-primary">
                  View Profile
                  <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
