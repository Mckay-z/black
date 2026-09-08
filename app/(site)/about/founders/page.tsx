import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { RichText } from "@payloadcms/richtext-lexical/react";

import { getPeople, imageUrl } from "@/lib/cms";
import { NANCY_BIO, NANCY_BOOK } from "@/lib/fallback-content";
import { PHOTOS } from "@/lib/images";
import BookCallout from "@/components/ui/BookCallout";

export const metadata: Metadata = {
  title: "Meet the Founders | Black in Rehab Foundation",
  description:
    "Nancy Yamoah and Dr. Chauntel Altidor founded Black in Rehab on community, representation, and service.",
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/**
 * The short bios the site shipped with. The build also rendered a second
 * paragraph reading "[CLIENT TO PROVIDE: Full Founder Biography]" directly to
 * visitors; that is gone. The full biography now comes from the People record
 * in the dashboard, and until it is written the page simply shows the short
 * intro rather than announcing the gap.
 */
const FOUNDERS = [
  {
    slug: "nancy-yamoah",
    name: "Nancy Yamoah, OTR/L",
    title: "Founder, CEO & President",
    photo: PHOTOS.teamNancy,
    intro: NANCY_BIO[0],
    // The client's full biography, supplied in their revision document.
    fullBio: NANCY_BIO,
    book: NANCY_BOOK,
    reverse: false,
  },
  {
    slug: "dr-chauntel-altidor",
    name: "Dr. Chauntel Altidor, OTD",
    title: "Co-Founder & Visionary Leader",
    photo: PHOTOS.founderChauntel,
    intro:
      "Doctor of Physical Therapy, entrepreneur, and global leader with a heart for service and a vision for transformation. Dr. Chauntel leads with purpose—creating opportunities, building bridges, and empowering professionals to change lives.",
    fullBio: undefined as string[] | undefined,
    book: undefined as typeof NANCY_BOOK | undefined,
    reverse: true,
  },
];

export default async function FoundersPage() {
  const people = await getPeople("founder");
  const bySlug = new Map(people.map((person) => [person.slug, person]));

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
              <span className="text-foreground">Meet the Founders</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6">
              Meet the <span className="text-primary">Founders</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              We&apos;re Nancy Yamoah and Dr. Chauntel Altidor—two friends, professionals, and purpose-driven leaders who believed in the power of community, representation, and service to change lives.
            </p>
          </div>
        </div>
      </section>

      {/* Profiles */}
      <section className="pt-12 md:pt-16 pb-24">
        <div className="container mx-auto px-4 md:px-6 space-y-24">
          {FOUNDERS.map((founder) => {
            const record = bySlug.get(founder.slug);
            const photo = imageUrl(record?.photo, founder.photo);
            const linkedin = record?.linkedin;
            const email = record?.email;

            return (
              <div
                key={founder.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center card rounded-3xl p-8 md:p-12"
              >
                <div
                  className={`lg:col-span-5 h-112.5 rounded-2xl overflow-hidden relative ${
                    founder.reverse ? "lg:order-2" : ""
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo}
                    alt={founder.name}
                    className="photo photo-hover-lift w-full h-full object-cover object-top"
                  />
                </div>

                <div
                  className={`lg:col-span-7 flex flex-col justify-center ${
                    founder.reverse ? "lg:order-1" : ""
                  }`}
                >
                  <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                    {record?.role || founder.title}
                  </span>
                  <h2 className="display-2 text-foreground mb-6">
                    {record?.name || founder.name}
                  </h2>

                  {/* Order of preference: a rich-text biography written in
                      the dashboard, then the full bio the client supplied in
                      their revision document, then the one-line intro. */}
                  <div className="space-y-4 text-muted text-lg leading-relaxed mb-8">
                    {record?.bio ? (
                      <RichText data={record.bio} />
                    ) : (
                      (founder.fullBio ?? [record?.shortBio || founder.intro]).map(
                        (paragraph, idx) => <p key={idx}>{paragraph}</p>,
                      )
                    )}
                  </div>

                  {founder.book && <BookCallout {...founder.book} className="mb-8" />}

                  {/* Each link renders only once it has a real destination. */}
                  {(linkedin || email) && (
                    <div className="flex flex-wrap gap-4">
                      {linkedin && (
                        <a
                          href={linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-background border border-border hover:border-primary px-4 py-2 rounded-full text-sm font-medium transition-colors"
                        >
                          <LinkedInIcon className="w-4 h-4 text-primary" /> Connect on LinkedIn
                        </a>
                      )}
                      {email && (
                        <a
                          href={`mailto:${email}`}
                          className="inline-flex items-center gap-2 bg-background border border-border hover:border-primary px-4 py-2 rounded-full text-sm font-medium transition-colors"
                        >
                          <Mail className="w-4 h-4 text-primary" /> Contact
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="display-2 text-foreground mb-8">
            Explore the Leadership Team
          </h2>
          <Link
            href="/about/leadership"
            className="btn btn-primary btn-lg group"
          >
            VIEW LEADERSHIP TEAM <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
