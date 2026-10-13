import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, Mail, Mic } from "lucide-react";

import SiteForm from "@/components/forms/SiteForm";
import PageHero from "@/components/ui/PageHero";
import PhotoCard from "@/components/ui/PhotoCard";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Book a Speaker | Black in Rehab Foundation",
  description:
    "Request a Black in Rehab speaker for your keynote, panel, workshop, campus lecture or podcast — in person or virtual.",
};

const WHAT_TO_EXPECT = [
  { title: "We reply within 48 hours", desc: "A real person reviews every request and comes back with availability." },
  { title: "A proposed session", desc: "We suggest a topic and format shaped around your audience, not a stock talk." },
  { title: "Clear pricing", desc: "Honoraria and travel are quoted up front. Student and nonprofit rates are available." },
];

export default function BookSpeakerPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/speakers/book"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Speakers", href: "/speakers" },
          { label: "Book a Speaker" },
        ]}
        title="Book a"
        highlight="Speaker"
        description="Tell us about your event and we will match you with the right speaker and session. Keynotes, panels, workshops, campus lectures, and podcast appearances — in person or virtual."
        image={PHOTOS.conferenceRoomWide}
        imagePosition="center 40%"
      />

      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="mb-10">
                <p className="eyebrow mb-5">Speaker Request</p>
                <h2 className="display-2 text-foreground">Tell Us About Your Event</h2>
              </div>
              <SiteForm
                formType="speaker-booking"
                submitLabel="SUBMIT SPEAKER REQUEST"
                success={{
                  title: "Speaker Request Received",
                  message:
                    "Thank you. Our team will review your event details and follow up within 48 hours with availability and a proposed session.",
                  backHref: "/speakers",
                  backLabel: "Back to the Speakers Bureau",
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="contact-input w-full bg-surface rounded-xl px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="org" className="block text-sm font-semibold text-foreground mb-2">
                      Organization *
                    </label>
                    <input
                      id="org"
                      name="organization"
                      type="text"
                      required
                      className="contact-input w-full bg-surface rounded-xl px-4 py-3"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="contact-input w-full bg-surface rounded-xl px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="contact-input w-full bg-surface rounded-xl px-4 py-3"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="event-date" className="block text-sm font-semibold text-foreground mb-2">
                      Event Date *
                    </label>
                    <input
                      id="event-date"
                      name="eventDate"
                      type="date"
                      required
                      className="contact-input w-full bg-surface rounded-xl px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-semibold text-foreground mb-2">
                      Location *
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      placeholder="City, State or Virtual"
                      className="contact-input w-full bg-surface rounded-xl px-4 py-3"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="format" className="block text-sm font-semibold text-foreground mb-2">
                      Session Format *
                    </label>
                    <select
                      id="format"
                      name="format"
                      required
                      className="contact-input w-full bg-surface rounded-xl px-4 py-3"
                    >
                      <option value="">Select a format</option>
                      <option value="keynote">Keynote</option>
                      <option value="panel">Panel discussion</option>
                      <option value="workshop">Workshop</option>
                      <option value="lecture">Campus lecture</option>
                      <option value="podcast">Podcast / media appearance</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="audience" className="block text-sm font-semibold text-foreground mb-2">
                      Expected Audience Size *
                    </label>
                    <select
                      id="audience"
                      name="audienceSize"
                      required
                      className="contact-input w-full bg-surface rounded-xl px-4 py-3"
                    >
                      <option value="">Select a range</option>
                      <option value="under-50">Under 50</option>
                      <option value="50-150">50 – 150</option>
                      <option value="150-500">150 – 500</option>
                      <option value="over-500">Over 500</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="topic" className="block text-sm font-semibold text-foreground mb-2">
                    Topic of Interest
                  </label>
                  <input
                    id="topic"
                      name="topic"
                    type="text"
                    placeholder="e.g. Representation in rehabilitation, leadership development"
                    className="contact-input w-full bg-surface rounded-xl px-4 py-3"
                  />
                  {/* Was /speakers/topics, now hidden at the client's
                      request. Each speaker's own page lists their topics in
                      full, so the prompt points there instead. */}
                  <p className="text-muted text-xs mt-2">
                    Not sure yet?{" "}
                    <Link
                      href="/speakers"
                      className="text-primary font-semibold hover:text-primary-hover transition-colors"
                    >
                      Browse our speakers and their topics
                    </Link>
                    .
                  </p>
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-semibold text-foreground mb-2">
                    Tell Us About Your Event *
                  </label>
                  <textarea
                    id="details"
                      name="message"
                    rows={5}
                    required
                    placeholder="Who is in the room, what the event is for, and what you want people to leave with."
                    className="contact-input w-full bg-surface rounded-xl px-4 py-3 resize-none"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-foreground mb-2">
                    Honorarium Budget
                  </label>
                  <select
                    id="budget"
                      name="budget"
                    className="contact-input w-full bg-surface rounded-xl px-4 py-3"
                  >
                    <option value="">Prefer to discuss</option>
                    <option value="under-2500">Under $2,500</option>
                    <option value="2500-5000">$2,500 – $5,000</option>
                    <option value="5000-10000">$5,000 – $10,000</option>
                    <option value="over-10000">Over $10,000</option>
                    <option value="nonprofit">Nonprofit / student rate needed</option>
                  </select>
                </div>
              </SiteForm>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="card p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-lg font-bold text-foreground mb-5">What Happens Next</h2>
                <div className="space-y-5">
                  {WHAT_TO_EXPECT.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-foreground text-sm font-semibold mb-1">
                          {item.title}
                        </p>
                        <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <PhotoCard
                image={PHOTOS.speakingAfricaSummit}
                imageAlt="The Black in Rehab founders on stage at the Africa Business Investment Summit"
                imagePosition="center 30%"
                icon={Mic}
                title="Our Speakers"
                href="/speakers"
                cta="Speakers Bureau"
              >
                Meet the clinicians and leaders available for your event.
              </PhotoCard>

              <div className="card p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-lg font-bold text-foreground mb-3">Prefer Email?</h2>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  Send your event details directly and we will pick it up from there.
                </p>
                <a
                  href="mailto:info@blackinrehab.com"
                  className="link-arrow break-all"
                >
                  info@blackinrehab.com
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <PhotoSplitBand image={PHOTOS.conferenceGroupBranded} imageSide="left">
        <p className="eyebrow eyebrow-on-dark mb-5">Before You Book</p>
        <h2 className="display-2 text-white">Meet the Speakers</h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
          Each speaker&apos;s page lists their topics, formats, and the stages they have spoken on.
        </p>
        <Link href="/speakers" className="btn btn-primary btn-lg group mt-9">
          VISIT THE SPEAKERS BUREAU <ArrowRight className="btn-arrow h-5 w-5" />
        </Link>
      </PhotoSplitBand>
    </div>
  );
}
