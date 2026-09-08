import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

import { getPeople, imageUrl } from "@/lib/cms";
import { FALLBACK_LEADERSHIP } from "@/lib/fallback-content";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Leadership Team | Black in Rehab Foundation",
  description:
    "Meet the leadership team guiding the Black in Rehab Foundation's mission to empower Black rehabilitation professionals.",
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type Member = {
  id: string;
  name: string;
  role: string;
  credentials: string;
  image: string;
  bio: string;
  linkedin: string;
  email: string;
};

/**
 * Leadership profiles.
 *
 * Laid out as alternating full-width rows rather than the thin card grid this
 * page used to have: the client supplied a real paragraph for each person,
 * and a 3-up card had nowhere to put it. The portrait keeps its own column so
 * a tall image and a long bio do not fight each other.
 */
export default async function LeadershipPage() {
  const people = await getPeople("leadership");

  const team: Member[] = people.length
    ? people.map((person) => ({
        id: String(person.id),
        name: person.name,
        role: person.role,
        credentials: "",
        image: imageUrl(person.photo, PHOTOS.conferenceSpeakerMic),
        bio: person.shortBio ?? "",
        linkedin: person.linkedin ?? "",
        email: person.email ?? "",
      }))
    : FALLBACK_LEADERSHIP.map((member) => ({
        ...member,
        linkedin: "",
        email: "",
      }));

  return (
    <div className="bg-background min-h-screen">
      {/* Hero. Top padding matches the other About pages; the bottom is
          tightened because the first thing below it is a full-height portrait
          row rather than the compact card grid this page used to have, and
          the stock pairing left a visible hole between the two. */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
              <Link href="/" className="hover:text-primary-hover">Home</Link>
              <span>/</span>
              <Link href="/about" className="hover:text-primary-hover">About</Link>
              <span>/</span>
              <span className="text-foreground">Leadership</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6">
              Our <span className="text-primary">Leadership</span>
            </h1>
            <p className="text-lg md:text-xl text-muted">
              The people guiding our mission, our programs, and our global community.
            </p>
          </div>
        </div>
      </section>

      {/* Profiles. `.section` sits in @layer components, so these paddings
          win — the shorthand's top value would otherwise reopen the gap. */}
      <section className="section pt-12 md:pt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-16 md:gap-20">
            {team.map((member, index) => (
              <article
                key={member.id}
                className="reveal group grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12"
              >
                <div
                  className={`md:col-span-5 ${
                    // Alternate which side the portrait falls on. Source order
                    // stays name-then-bio, so a screen reader and a narrow
                    // viewport both read each profile in the same order.
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div className="img-filler relative aspect-4/5 overflow-hidden rounded-[var(--radius-card)] border border-border shadow-soft">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="photo photo-hover-lift absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                </div>

                <div className="md:col-span-7">
                  <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    {member.name}
                  </h2>
                  <p className="mt-2 text-base font-semibold text-primary">
                    {member.role}
                  </p>
                  {member.credentials && (
                    <p className="mt-2 text-sm leading-relaxed text-muted/80">
                      {member.credentials}
                    </p>
                  )}

                  {member.bio && (
                    <p className="mt-6 text-lg leading-relaxed text-muted">
                      {member.bio}
                    </p>
                  )}

                  {/* Each link appears only when it has a real destination. */}
                  {(member.linkedin || member.email) && (
                    <div className="mt-7 flex gap-5">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
                        >
                          <LinkedInIcon className="h-4 w-4" /> LinkedIn
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
                        >
                          <Mail className="h-4 w-4" /> Contact
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="display-2 text-foreground mb-4">
            Become a City Ambassador
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Lead the movement in your city. Our Ambassador program empowers local leaders to represent Black in Rehab in communities across the globe.
          </p>
          <Link
            href="/about/ambassadors"
            className="btn btn-primary btn-lg group"
          >
            AMBASSADOR PROGRAM <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
