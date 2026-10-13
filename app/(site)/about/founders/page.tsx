import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { RichText } from "@payloadcms/richtext-lexical/react";

import { getPeople, imageUrl } from "@/lib/cms";
import {
  CHAUNTEL_BIO,
  CHAUNTEL_OFFERINGS,
  NANCY_BIO,
  NANCY_BOOK,
} from "@/lib/fallback-content";
import { PHOTOS } from "@/lib/images";
import BookCallout from "@/components/ui/BookCallout";
import OfferingsList from "@/components/ui/OfferingsList";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/ui/PageHero";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import ArchPhoto from "@/components/about/ArchPhoto";

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
 * Both founders, with the full biographies the client supplied in their
 * revision document. A People record written in the dashboard overrides what
 * is here; until one exists, this is the client's own copy rather than the
 * "[CLIENT TO PROVIDE: …]" placeholder the build used to render to visitors.
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
    name: "Dr. Chauntel Altidor, OTD, OTR/L",
    title: "Co-Founder & Vice President",
    photo: PHOTOS.teamChauntel,
    intro: CHAUNTEL_BIO[0],
    fullBio: CHAUNTEL_BIO,
    book: undefined as typeof NANCY_BOOK | undefined,
    reverse: true,
  },
];

export default async function FoundersPage() {
  const people = await getPeople("founder");
  const bySlug = new Map(people.map((person) => [person.slug, person]));

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/about/founders"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Meet the Founders" },
        ]}
        title="Meet the"
        highlight="Founders"
        description="We're Nancy Yamoah and Dr. Chauntel Altidor—two friends, professionals, and purpose-driven leaders who believed in the power of community, representation, and service to change lives."
        image={PHOTOS.pressWagmcStage}
        imagePosition="65% center"
      />

      {/* Profiles */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6 space-y-16 md:space-y-24">
          {FOUNDERS.map((founder) => {
            const record = bySlug.get(founder.slug);
            const photo = imageUrl(record?.photo, founder.photo);
            const linkedin = record?.linkedin;
            const email = record?.email;

            return (
              <div
                key={founder.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                <div
                  className={`lg:col-span-5 mx-auto w-full max-w-sm lg:max-w-none ${
                    founder.reverse ? "lg:order-2" : ""
                  }`}
                >
                  <ArchPhoto src={photo} alt={founder.name} position="center top" />
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

      {/* The pair, together — the photo is of both founders. */}
      <PhotoSplitBand image={PHOTOS.foundersPortrait} imagePosition="center 20%" imageSide="left">
        <p className="eyebrow eyebrow-on-dark mb-5">Together</p>
        <h2 className="display-2 text-white">Two Friends. One Vision.</h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
          What began with conversations and a shared burden has grown into a global movement that empowers professionals, inspires students, and transforms communities.
        </p>
        <Link href="/about/our-story" className="btn btn-primary btn-lg group mt-9">
          READ OUR STORY <ArrowRight className="btn-arrow h-5 w-5" />
        </Link>
      </PhotoSplitBand>

      {/* Dr. Altidor's own practice.

          Her own programmes, not the Foundation's — so they sit in a section
          of their own that says whose they are, rather than inside her
          biography where they would read as something Black in Rehab runs. */}
      <section className="section bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            align="left"
            eyebrow="From OT with Faith"
            title="Working With Dr. Altidor"
            description="Dr. Altidor supports parents of neurodivergent children through OT with Faith, her own practice. Bookings and purchases are handled there and are separate from donations to the Foundation."
            className="mb-12"
          />
          <OfferingsList offerings={CHAUNTEL_OFFERINGS} />
        </div>
      </section>

      <PhotoSplitBand image={PHOTOS.speakingTeamWagmc} imagePosition="center 30%" imageSide="right">
        <p className="eyebrow eyebrow-on-dark mb-5">Our Team</p>
        <h2 className="display-2 text-white">Explore the Leadership Team</h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
          The people guiding our mission, our programs, and our global community.
        </p>
        <Link href="/about/leadership" className="btn btn-primary btn-lg group mt-9">
          VIEW LEADERSHIP TEAM <ArrowRight className="btn-arrow h-5 w-5" />
        </Link>
      </PhotoSplitBand>
    </div>
  );
}
