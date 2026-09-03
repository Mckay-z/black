import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

import { getPeople, imageUrl } from "@/lib/cms";
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

/**
 * Only the two founders, who are named and photographed in the client's own
 * material. The build previously padded this grid to six with four cards
 * reading "[Team Member Name] — CLIENT TO PROVIDE", which was visible to
 * every visitor. Real team members are added in the dashboard under People,
 * tagged "Leadership Team", and replace this list entirely once present.
 */
const FALLBACK_TEAM = [
  {
    id: "chauntel",
    name: "Dr. Chauntel Altidor, OTD",
    role: "Co-Founder & Executive Director",
    image: PHOTOS.founderChauntel,
    linkedin: "",
    email: "",
  },
  {
    id: "nancy",
    name: "Nancy Yamoah, OT",
    role: "Co-Founder & Chief Strategy Officer",
    image: PHOTOS.founderNancy,
    linkedin: "",
    email: "",
  },
];

export default async function LeadershipPage() {
  const people = await getPeople("leadership");

  const team = people.length
    ? people.map((person) => ({
        id: String(person.id),
        name: person.name,
        role: person.role,
        image: imageUrl(person.photo, PHOTOS.conferenceSpeakerMic),
        linkedin: person.linkedin ?? "",
        email: person.email ?? "",
      }))
    : FALLBACK_TEAM;

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-surface border-b border-border">
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

      {/* Team grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="group card overflow-hidden card-hover"
              >
                <div className="h-72 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="photo photo-hover-lift w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{member.role}</p>

                  {/* Each link appears only when it has a real destination. */}
                  {(member.linkedin || member.email) && (
                    <div className="flex gap-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-primary transition-colors"
                        >
                          <LinkedInIcon className="w-4 h-4" /> LinkedIn
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-primary transition-colors"
                        >
                          <Mail className="w-4 h-4" /> Contact
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
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
