"use client";

import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Black in Rehab opened doors I never knew existed. I found mentorship, lifelong friends, and a deeper purpose.",
    author: "Jasmine R.",
    role: "OTR/L",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    quote: "The Ghana experience was life-changing. We served, we learned, and we grew in ways words can't describe.",
    author: "Derrick M.",
    role: "PT, DPT",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    quote: "Thanks to the scholarship program, I'm one step closer to becoming the therapist I was called to be.",
    author: "Bria L.",
    role: "SLP Graduate Student",
    image: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&q=80",
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
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
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
      </div>
    </section>
  );
}
