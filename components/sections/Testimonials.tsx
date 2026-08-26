"use client";

import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

// Quotes and names are placeholders pending real member stories, so these
// cards deliberately use initials rather than a photo of an identifiable
// person. Swap in real portraits once the client supplies attributed quotes.
const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Black in Rehab opened doors I never knew existed. I found mentorship, lifelong friends, and a deeper purpose.",
    author: "Jasmine R.",
    role: "OTR/L",
  },
  {
    id: 2,
    quote: "The Ghana experience was life-changing. We served, we learned, and we grew in ways words can't describe.",
    author: "Derrick M.",
    role: "PT, DPT",
  },
  {
    id: 3,
    quote: "Thanks to the scholarship program, I'm one step closer to becoming the therapist I was called to be.",
    author: "Bria L.",
    role: "SLP Graduate Student",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Real Stories. Real Impact.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-background border border-border p-8 rounded-2xl relative hover:border-primary/50 transition-colors"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
              <div className="relative z-10 pt-4">
                <p className="text-foreground text-lg leading-relaxed mb-8 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div
                    aria-hidden="true"
                    className="w-12 h-12 rounded-full border-2 border-primary/20 bg-primary/10 flex items-center justify-center shrink-0"
                  >
                    <span className="font-serif font-bold text-primary text-sm">
                      {initials(testimonial.author)}
                    </span>
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground text-sm">{testimonial.author}</h5>
                    <p className="text-muted text-xs uppercase tracking-wider">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted mb-6">
            Been part of this community? We would like to hear how it went.
          </p>
          <Link
            href="/community/share-your-story"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors"
          >
            SHARE YOUR STORY <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
