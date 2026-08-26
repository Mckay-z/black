import Link from "next/link";
import { ArrowRight, Award, Mail, Mic } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";

export type SpeakerProfileData = {
  name: string;
  credentials: string;
  role: string;
  tagline: string;
  portrait: string;
  heroImage: string;
  bio: string[];
  topics: string[];
  formats: string[];
  highlights: { value: string; label: string }[];
  gallery: { src: string; alt: string }[];
};

export default function SpeakerProfile({ speaker }: { speaker: SpeakerProfileData }) {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Speakers", href: "/speakers" },
          { label: speaker.name },
        ]}
        title={speaker.name}
        highlight={speaker.credentials}
        description={speaker.tagline}
        image={speaker.heroImage}
        cta={{ label: "BOOK THIS SPEAKER", href: "/speakers/book" }}
        secondaryCta={{ label: "Speaking Topics", href: "/speakers/topics" }}
      />

      {/* Bio */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2">
              <FillerImage
                src={speaker.portrait}
                alt={speaker.name}
                wrapperClassName="aspect-4/5 rounded-3xl group"
                zoomOnHover
              />
              <div className="mt-6 bg-surface border border-border rounded-2xl p-6">
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
                  Role
                </p>
                <p className="text-foreground font-semibold mb-6">{speaker.role}</p>
                <div className="flex gap-3">
                  <Link
                    href="/speakers/book"
                    aria-label={`Book ${speaker.name}`}
                    className="w-10 h-10 rounded-full bg-background border border-border hover:border-primary flex items-center justify-center transition-colors"
                  >
                    <Mic className="w-4 h-4 text-primary" />
                  </Link>
                  <a
                    href="mailto:info@blackinrehab.org"
                    aria-label={`Email about ${speaker.name}`}
                    className="w-10 h-10 rounded-full bg-background border border-border hover:border-primary flex items-center justify-center transition-colors"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <SectionHeading eyebrow="Biography" title={`About ${speaker.name}`} />
              <div className="space-y-6 mt-6">
                {speaker.bio.map((paragraph, idx) => (
                  <p key={idx} className="text-muted text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
                {speaker.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="bg-surface border border-border rounded-2xl p-6 text-center"
                  >
                    <p className="text-2xl md:text-3xl font-serif font-bold text-primary mb-1">
                      {item.value}
                    </p>
                    <p className="text-muted text-xs leading-relaxed">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics & formats */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading eyebrow="Signature Talks" title="Topics" className="mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {speaker.topics.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-start gap-3 bg-background border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
                  >
                    <Mic className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm font-medium">{topic}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/speakers/topics"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors mt-8"
              >
                See all speaking topics <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div>
              <SectionHeading eyebrow="Availability" title="Formats" className="mb-8" />
              <div className="bg-background border border-border rounded-2xl p-8 space-y-4">
                {speaker.formats.map((format) => (
                  <div key={format} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm">{format}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="On Stage" align="center" className="mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {speaker.gallery.map((item, idx) => (
              <FillerImage
                key={idx}
                src={item.src}
                alt={item.alt}
                wrapperClassName="aspect-square rounded-2xl group"
                zoomOnHover
              />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={`Bring ${speaker.name} to Your Event`}
        description="Submit your event details and we will come back within 48 hours with availability and a proposed session."
        cta={{ label: "SUBMIT A SPEAKER REQUEST", href: "/speakers/book" }}
        secondaryCta={{ label: "Meet All Speakers", href: "/speakers" }}
      />
    </div>
  );
}
