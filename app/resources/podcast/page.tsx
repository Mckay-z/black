import Link from "next/link";
import { ArrowRight, Clock, Headphones, Mic, PlayCircle, Rss } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

const EPISODES = [
  {
    number: "Ep. 01",
    title: "Why We Started Black in Rehab",
    guest: "Dr. Chauntel Altidor, OTD & Nancy Yamoah, OT",
    duration: "42 min",
    date: "Coming soon",
    summary:
      "The founders on the gap they kept running into, the first conference, and what they got wrong in year one.",
    image: PHOTOS.conferenceSpeakerMic,
  },
  {
    number: "Ep. 02",
    title: "Being the Only One in the Department",
    guest: "Guest — client to confirm",
    duration: "38 min",
    date: "Coming soon",
    summary:
      "What isolation costs clinically, and practical strategies from therapists who have navigated it for a decade.",
    image: PHOTOS.conferencePanel,
  },
  {
    number: "Ep. 03",
    title: "Negotiating Your First Offer",
    guest: "Guest — client to confirm",
    duration: "35 min",
    date: "Coming soon",
    summary:
      "Line by line through a real new-graduate offer: base, productivity expectations, CE budget, and what to push on.",
    image: PHOTOS.conferenceRoomWide,
  },
  {
    number: "Ep. 04",
    title: "Rehab Beyond Borders",
    guest: "Guest — client to confirm",
    duration: "45 min",
    date: "Coming soon",
    summary:
      "Honest talk about global service work — what helps, what harms, and how to tell the difference before you book.",
    image: PHOTOS.ghanaFreedomArch,
  },
];

const TOPICS = [
  "Representation and the clinical workforce",
  "Career transitions and specialization",
  "Health equity in rehabilitation",
  "Practice ownership and entrepreneurship",
  "Student life and board exams",
  "Global health and service work",
];

export default function PodcastPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Podcast" },
        ]}
        title="The Black in Rehab"
        highlight="Podcast"
        description="Conversations with the clinicians, students, and leaders changing rehabilitation. Launching soon — join the list and you will hear the first episode the day it drops."
        image={PHOTOS.conferenceCelebration}
        cta={{ label: "GET LAUNCH ALERTS", href: "/contact" }}
      />

      {/* Launch notice */}
      <section className="py-16 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-background border border-primary/40 border-dashed rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Headphones className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">
                  Launching Soon
                </p>
                <h2 className="text-xl font-bold text-foreground">
                  Season one is in production now
                </h2>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-3.5 px-7 rounded-full transition-colors shrink-0"
            >
              NOTIFY ME <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Season One"
            title="What Is Coming"
            description="Episode artwork and audio are placeholders until the client supplies final assets."
            className="mb-16"
          />
          <div className="space-y-6">
            {EPISODES.map((episode) => (
              <div
                key={episode.number}
                className="group grid grid-cols-1 md:grid-cols-4 bg-surface border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                <FillerImage
                  src={episode.image}
                  alt={episode.title}
                  wrapperClassName="h-44 md:h-full md:min-h-44"
                  zoomOnHover
                  overlay="soft"
                />
                <div className="md:col-span-3 p-8 flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-primary text-xs font-bold uppercase tracking-widest">
                        {episode.number}
                      </span>
                      <span className="text-muted text-xs flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" /> {episode.duration}
                      </span>
                      <span className="text-muted text-xs">{episode.date}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-2">
                      {episode.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">{episode.guest}</p>
                    <p className="text-muted text-sm leading-relaxed max-w-2xl">
                      {episode.summary}
                    </p>
                  </div>
                  <button
                    type="button"
                    disabled
                    aria-label={`${episode.title} — not yet available`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-muted border border-border rounded-full px-6 py-3 shrink-0 cursor-not-allowed"
                  >
                    <PlayCircle className="w-5 h-5" /> Coming soon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics + guest pitch */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                eyebrow="What We Cover"
                title="The Conversations Nobody Else Is Having"
              />
              <div className="grid grid-cols-1 gap-3 mt-8">
                {TOPICS.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center gap-3 bg-background border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
                  >
                    <Mic className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground text-sm font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background border border-border rounded-3xl p-10">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Rss className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Want to be a guest?
              </h3>
              <p className="text-muted leading-relaxed mb-8">
                We are booking season one now. If you are a rehabilitation professional with a
                story, a specialty, or a strong opinion worth arguing, send us a note. You do
                not need to be famous — you need to have something to say.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors"
              >
                PITCH AN EPISODE <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-muted text-xs mt-6">
                Prefer to speak at an event instead? See our{" "}
                <Link
                  href="/speakers"
                  className="text-primary font-semibold hover:text-primary-hover transition-colors"
                >
                  speakers bureau
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Be There for Episode One"
        description="Members get every episode a week early, plus the full interview transcripts."
        cta={{ label: "JOIN THE MOVEMENT", href: "/join-the-movement" }}
        secondaryCta={{ label: "Read the Blog", href: "/resources/blog" }}
      />
    </div>
  );
}
