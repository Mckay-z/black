"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, Mail, Mic } from "lucide-react";
import { useState } from "react";

const WHAT_TO_EXPECT = [
  { title: "We reply within 48 hours", desc: "A real person reviews every request and comes back with availability." },
  { title: "A proposed session", desc: "We suggest a topic and format shaped around your audience, not a stock talk." },
  { title: "Clear pricing", desc: "Honoraria and travel are quoted up front. Student and nonprofit rates are available." },
];

export default function BookSpeakerPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-lg text-center">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
            Speaker Request Received
          </h1>
          <p className="text-muted mb-8">
            Thank you. Our team will review your event details and follow up within 48 hours
            with availability and a proposed session.
          </p>
          <Link
            href="/speakers"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors"
          >
            Back to the Speakers Bureau <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <section className="py-16 md:py-24 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm font-medium text-primary mb-6"
          >
            <Link href="/" className="hover:text-primary-hover transition-colors">
              Home
            </Link>
            <span className="text-muted">/</span>
            <Link href="/speakers" className="hover:text-primary-hover transition-colors">
              Speakers
            </Link>
            <span className="text-muted">/</span>
            <span className="text-foreground">Book a Speaker</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Book a <span className="text-primary">Speaker</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            Tell us about your event and we will match you with the right speaker and session.
            Keynotes, panels, workshops, campus lectures, and podcast appearances — in person
            or virtual.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <form
                className="space-y-6"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      id="name"
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
                    type="text"
                    placeholder="e.g. Representation in rehabilitation, leadership development"
                    className="contact-input w-full bg-surface rounded-xl px-4 py-3"
                  />
                  <p className="text-muted text-xs mt-2">
                    Not sure yet?{" "}
                    <Link
                      href="/speakers/topics"
                      className="text-primary font-semibold hover:text-primary-hover transition-colors"
                    >
                      Browse our speaking topics
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

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors text-lg"
                >
                  SUBMIT SPEAKER REQUEST <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-surface border border-border rounded-2xl p-8">
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

              <div className="bg-surface border border-border rounded-2xl p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <Mic className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-lg font-bold text-foreground mb-3">Our Speakers</h2>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  Meet the clinicians and leaders available for your event.
                </p>
                <Link
                  href="/speakers"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
                >
                  Speakers Bureau <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-surface border border-border rounded-2xl p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-lg font-bold text-foreground mb-3">Prefer Email?</h2>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  Send your event details directly and we will pick it up from there.
                </p>
                <a
                  href="mailto:info@blackinrehab.org"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors break-all"
                >
                  info@blackinrehab.org
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
