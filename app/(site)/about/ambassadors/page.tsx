import Link from "next/link";
import { MapPin, ArrowRight, Globe2, Users, Mail } from "lucide-react";

import { getPeople, imageUrl } from "@/lib/cms";
import { PHOTOS } from "@/lib/images";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/*
  The cities are a roadmap, not a roster.

  This list is deliberately still hardcoded: it includes cities with no
  ambassador appointed yet ("Coming Soon"), which by definition have no record
  in the People collection to come from. The ambassadors themselves come from
  the CMS, in the section below.
*/
const CITIES = [
  { city: "Atlanta, GA", status: "Active" },
  { city: "Houston, TX", status: "Active" },
  { city: "New York, NY", status: "Active" },
  { city: "Los Angeles, CA", status: "Active" },
  { city: "Chicago, IL", status: "Active" },
  { city: "Miami, FL", status: "Active" },
  { city: "Washington, D.C.", status: "Active" },
  { city: "Philadelphia, PA", status: "Active" },
  { city: "London, UK", status: "Coming Soon" },
  { city: "Toronto, Canada", status: "Coming Soon" },
  { city: "Accra, Ghana", status: "Coming Soon" },
  { city: "Kingston, Jamaica", status: "Coming Soon" },
];

export default async function AmbassadorsPage() {
  /*
    Tagging someone "Ambassador" in the dashboard used to put them nowhere:
    this page rendered the city list and nothing else, so the record saved,
    published, and stayed invisible. Founders, leadership and speakers were all
    already wired to their group; this brings the fourth into line.

    Same shape as those pages — `getPeople` swallows read failures and returns
    `[]`, and the section below renders only when the list is non-empty, so an
    empty CMS still renders exactly the page that existed before.
  */
  const ambassadors = await getPeople("ambassador");

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
              <Link href="/" className="hover:text-primary-hover">Home</Link>
              <span>/</span>
              <Link href="/about" className="hover:text-primary-hover">About</Link>
              <span>/</span>
              <span className="text-foreground">Ambassadors</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6">
              Ambassador <span className="text-primary">Cities</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              Our Ambassadors are local leaders who bring the Black in Rehab mission to life in their communities. They organize events, build connections, and represent our values every day.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="pt-12 md:pt-16 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-12">
            <Globe2 className="w-7 h-7 text-primary" />
            <h2 className="text-2xl font-serif font-bold text-foreground">Current Ambassador Cities</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16">
            {CITIES.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 bg-surface border rounded-xl p-4 transition-colors ${
                  item.status === "Active"
                    ? "border-border hover:border-primary/50"
                    : "border-border/50 opacity-60"
                }`}
              >
                <MapPin className={`w-5 h-5 shrink-0 ${item.status === "Active" ? "text-primary" : "text-muted"}`} />
                <div>
                  <p className="font-semibold text-foreground text-sm">{item.city}</p>
                  {item.status === "Coming Soon" && (
                    <p className="text-xs text-muted uppercase tracking-wide">Coming Soon</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/*
            The people, when there are any.

            Rendered between the city grid and the call to action so the page
            reads city map, then the faces behind it, then the invitation to
            join them.
          */}
          {ambassadors.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-12">
                <Users className="w-7 h-7 text-primary" />
                <h2 className="text-2xl font-serif font-bold text-foreground">
                  Meet the Ambassadors
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {ambassadors.map((person) => (
                  <div
                    key={person.id}
                    className="group card overflow-hidden card-hover"
                  >
                    <div className="h-72 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imageUrl(person.photo, PHOTOS.conferenceSpeakerMic)}
                        alt={person.name}
                        className="photo photo-hover-lift w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {person.name}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-2">
                        {person.role}
                      </p>

                      {/* `city` is the ambassador-only field on the People
                          collection, and is optional there. */}
                      {person.city && (
                        <p className="flex items-center gap-1.5 text-sm text-muted mb-4">
                          <MapPin className="w-4 h-4 text-primary shrink-0" />
                          {person.city}
                        </p>
                      )}

                      {person.shortBio && (
                        <p className="text-sm text-muted leading-relaxed mb-4">
                          {person.shortBio}
                        </p>
                      )}

                      {/* Each link appears only when it has a real
                          destination, rather than rendering a dead one. */}
                      {(person.linkedin || person.email) && (
                        <div className="flex gap-3">
                          {person.linkedin && (
                            <a
                              href={person.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-primary transition-colors"
                            >
                              <LinkedInIcon className="w-4 h-4" /> LinkedIn
                            </a>
                          )}
                          {person.email && (
                            <a
                              href={`mailto:${person.email}`}
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
          )}

          {/* Become an Ambassador CTA */}
          <div className="section-dark bg-secondary border border-border rounded-3xl p-10 md:p-16 text-center">
            <h3 className="display-2 text-white mb-6">
              Lead the Movement in Your City
            </h3>
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Don&apos;t see your city? Apply to become a Black in Rehab Ambassador. Help us grow our global community of rehabilitation professionals united by purpose.
            </p>
            <Link
              href="/community/join"
              className="btn btn-primary btn-lg group"
            >
              APPLY TO BE AN AMBASSADOR <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
