import Link from "next/link";
import { ArrowRight, Clock, Mic, Users, Video } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

const TOPIC_GROUPS = [
  {
    theme: "Representation & Equity",
    topics: [
      {
        title: "Representation and Diversity in Rehabilitation",
        desc: "Why a workforce that does not reflect its patients produces worse outcomes, and what institutions can actually do about it.",
        formats: "Keynote · Panel",
        length: "45–60 min",
      },
      {
        title: "Health Equity and Disparities in Underserved Communities",
        desc: "Access, referral patterns, and the rehabilitation outcomes gap — with evidence rather than anecdote.",
        formats: "Keynote · Workshop",
        length: "60–90 min",
      },
      {
        title: "Cultural Competency in Clinical Practice",
        desc: "Moving past the compliance module into clinical decisions that account for the patient in front of you.",
        formats: "Workshop",
        length: "90 min–half day",
      },
    ],
  },
  {
    theme: "Leadership & Career",
    topics: [
      {
        title: "Leadership Development for Healthcare Professionals",
        desc: "Building influence, leading committees, and stepping into roles you were not invited to apply for.",
        formats: "Keynote · Workshop",
        length: "45–90 min",
      },
      {
        title: "Student Success and Career Development in Rehab",
        desc: "For campus audiences: navigating the program, boards, first jobs, and the mentorship that changes trajectories.",
        formats: "Lecture · Panel",
        length: "45–60 min",
      },
      {
        title: "Entrepreneurship in Physical and Occupational Therapy",
        desc: "What practice ownership requires financially and clinically, from people who have done it.",
        formats: "Panel · Workshop",
        length: "60 min",
      },
    ],
  },
  {
    theme: "Community & Global",
    topics: [
      {
        title: "Global Health and International Service",
        desc: "Doing service work abroad without doing harm — partnership models, ethics, and honest measurement.",
        formats: "Keynote · Panel",
        length: "45–60 min",
      },
      {
        title: "Building Community Through Professional Organizations",
        desc: "How Black in Rehab was built, what worked, and how to organize a professional community from nothing.",
        formats: "Keynote · Fireside",
        length: "45 min",
      },
    ],
  },
];

const FORMATS = [
  { icon: <Mic className="w-6 h-6 text-primary" />, title: "Keynote", desc: "A single voice, a full room, 45 to 60 minutes." },
  { icon: <Users className="w-6 h-6 text-primary" />, title: "Panel", desc: "Moderated discussion, with or without our own moderator." },
  { icon: <Clock className="w-6 h-6 text-primary" />, title: "Workshop", desc: "Interactive sessions from 90 minutes to a full day." },
  { icon: <Video className="w-6 h-6 text-primary" />, title: "Virtual", desc: "Every topic is available for remote delivery and podcasts." },
];

export default function SpeakingTopicsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/speakers/topics"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Speakers", href: "/speakers" },
          { label: "Speaking Topics" },
        ]}
        title="Speaking"
        highlight="Topics"
        description="Eight core topics across representation, leadership, and global health — each available as a keynote, panel, or workshop, in person or virtually."
        image={PHOTOS.conferenceSession}
        cta={{ label: "BOOK A SPEAKER", href: "/speakers/book" }}
      />

      {/* Formats */}
      <section className="py-16 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FORMATS.map((format) => (
              <div
                key={format.title}
                className="card card-sunken p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  {format.icon}
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{format.title}</h3>
                  <p className="text-muted text-xs leading-relaxed">{format.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topic groups */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20">
            {TOPIC_GROUPS.map((group) => (
              <div key={group.theme}>
                <SectionHeading eyebrow="Theme" title={group.theme} className="mb-10" />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {group.topics.map((topic) => (
                    <div
                      key={topic.title}
                      className="card p-8 flex flex-col card-hover"
                    >
                      <Mic className="w-8 h-8 text-primary mb-6" />
                      <h3 className="text-lg font-bold text-foreground mb-4">{topic.title}</h3>
                      <p className="text-muted text-sm leading-relaxed flex-1 mb-6">
                        {topic.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-5 border-t border-border">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                          {topic.formats}
                        </span>
                        <span className="text-xs font-semibold text-muted border border-border px-3 py-1.5 rounded-full">
                          {topic.length}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom */}
      <section className="section bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FillerImage
              src={PHOTOS.conferencePresentation}
              alt="Workshop session"
              wrapperClassName="aspect-4/3 rounded-3xl group"
              zoomOnHover
            />
            <div>
              <SectionHeading
                eyebrow="Not on the List?"
                title="We Will Build the Talk Around Your Audience"
                description="Most engagements end up being a blend. Tell us who is in the room and what you want them to leave with, and we will shape the session to match."
              />
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  href="/speakers/book"
                  className="btn btn-primary btn-lg group"
                >
                  BOOK A SPEAKER <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/speakers"
                  className="inline-flex items-center justify-center gap-2 border border-border hover:border-primary text-foreground font-semibold py-4 px-8 rounded-full transition-colors"
                >
                  Meet the Speakers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Bring This to Your Audience"
        description="Submit your event details and we will come back within 48 hours with availability and a proposed session."
        cta={{ label: "SUBMIT A SPEAKER REQUEST", href: "/speakers/book" }}
      />
    </div>
  );
}
