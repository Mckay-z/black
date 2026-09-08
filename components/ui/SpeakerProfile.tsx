import Link from "next/link";
import { Award, Mail, Mic } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import BookCallout from "@/components/ui/BookCallout";
import FillerImage from "@/components/ui/FillerImage";

export type SpeakerProfileData = {
  name: string;
  credentials: string;
  role: string;
  tagline: string;
  portrait: string;
  heroImage: string;
  bio: string[];
  /**
   * Flat topic list — the original shape, still used where a speaker has no
   * themed breakdown.
   */
  topics: string[];
  /**
   * Topics grouped under a theme, each with the line the speaker leads with.
   * When present this replaces the flat `topics` grid.
   */
  topicAreas?: { title: string; message: string; topics: string[] }[];
  /** Named talks with a one-line description of what each covers. */
  signatureTalks?: { title: string; description: string }[];
  /** A book by this speaker, shown under the biography. */
  book?: { title: string; url: string; description: string };
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
        // Was "Speaking Topics" → /speakers/topics, which the client has since
        // asked us to hide. The topics are listed in full further down this
        // page, so the secondary action points back to the speaker index.
        secondaryCta={{ label: "Meet All Speakers", href: "/speakers" }}
      />

      {/* Bio */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2">
              <FillerImage
                src={speaker.portrait}
                alt={speaker.name}
                wrapperClassName="aspect-4/5 rounded-3xl group"
                zoomOnHover
              />
              <div className="mt-6 card p-6">
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

              {speaker.book && <BookCallout {...speaker.book} className="mt-10" />}

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
                {speaker.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="card flex min-w-0 flex-col justify-center p-6 text-center"
                  >
                    {/* Not `display-3`: that clamps up to 2rem, and a value
                        like "LovelyyOT" or "Whole Health" then runs outside a
                        quarter-width card. Smaller, wrapping, and allowed to
                        break so any value the client writes stays inside. */}
                    <p className="mb-1.5 break-words font-serif text-xl font-bold leading-tight tracking-tight text-primary md:text-2xl">
                      {item.value}
                    </p>
                    <p className="text-xs leading-relaxed text-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics & formats */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading eyebrow="What I Speak On" title="Topics" className="mb-8" />

              {speaker.topicAreas ? (
                <div className="space-y-10">
                  {speaker.topicAreas.map((area) => (
                    <div key={area.title}>
                      <h3 className="font-serif text-xl font-bold text-foreground">
                        {area.title}
                      </h3>
                      <blockquote className="mt-3 border-l-2 border-primary/50 pl-4 text-base italic leading-relaxed text-muted">
                        &ldquo;{area.message}&rdquo;
                      </blockquote>
                      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {area.topics.map((topic) => (
                          <div
                            key={topic}
                            className="flex items-start gap-3 card card-sunken rounded-xl p-4 card-hover"
                          >
                            <Mic className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground text-sm font-medium">
                              {topic}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {speaker.topics.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-start gap-3 card card-sunken rounded-xl p-4 card-hover"
                    >
                      <Mic className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm font-medium">{topic}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <SectionHeading eyebrow="Availability" title="Formats" className="mb-8" />
              <div className="card card-sunken p-8 space-y-4">
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

      {/* Signature talks. Rendered only for speakers who have named talks —
          a title plus what it covers, which is how they are actually pitched
          to an event organiser. */}
      {speaker.signatureTalks && (
        <section className="section bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              eyebrow="Signature Talks"
              title="Ready to Book"
              align="center"
              className="mb-12"
            />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {speaker.signatureTalks.map((talk) => (
                <article key={talk.title} className="card card-hover flex flex-col p-8">
                  <Mic className="mb-5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <h3 className="font-serif text-lg font-bold leading-snug text-foreground">
                    &ldquo;{talk.title}&rdquo;
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {talk.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="section bg-surface border-t border-border">
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
