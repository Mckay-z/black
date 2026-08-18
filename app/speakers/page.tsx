import Link from "next/link";
import { ArrowRight, Mic, Mail } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const TOPICS = [
  "Representation & Diversity in Rehabilitation",
  "Health Equity & Disparities in Underserved Communities",
  "Leadership Development for Healthcare Professionals",
  "Global Health & International Service",
  "Building Community Through Professional Organizations",
  "Entrepreneurship in Physical & Occupational Therapy",
  "Student Success & Career Development in Rehab",
  "Cultural Competency in Clinical Practice",
];

const SPEAKERS = [
  {
    name: "Dr. Chauntel Altidor, OTD",
    title: "Co-Founder & Executive Director, Black in Rehab",
    specialty: "Leadership · Global Health · Representation",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
  },
  {
    name: "Nancy Yamoah, OT",
    title: "Co-Founder & Chief Strategy Officer, Black in Rehab",
    specialty: "Community Building · Student Development · Purpose",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80",
  },
  {
    name: "[Guest Speaker Name]",
    title: "[Title & Credentials] — CLIENT TO PROVIDE",
    specialty: "[Specialty Topics] — CLIENT TO PROVIDE",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
  },
  {
    name: "[Guest Speaker Name]",
    title: "[Title & Credentials] — CLIENT TO PROVIDE",
    specialty: "[Specialty Topics] — CLIENT TO PROVIDE",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
];

export default function SpeakersPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">Speakers</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white mb-6">
            Speakers <span className="text-primary">Bureau</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10">
            Bring the Black in Rehab message to your conference, campus, podcast, or event. Our speakers are passionate, dynamic, and deeply experienced in rehabilitation and community impact.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-background font-bold py-4 px-8 rounded-full transition-colors text-lg">
            BOOK A SPEAKER <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">What We Speak On</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Keynotes, Panels & Workshops</h3>
              <p className="text-muted text-lg leading-relaxed mb-10">
                Our speakers are available for in-person and virtual engagements including keynote addresses, panel discussions, university lectures, podcast appearances, and professional development workshops.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {TOPICS.map((topic, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-surface border border-border rounded-xl p-4 hover:border-primary/50 transition-colors">
                    <Mic className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground text-sm font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Our Speakers</h3>
              {SPEAKERS.map((speaker, idx) => (
                <div key={idx} className="group bg-surface border border-border rounded-2xl p-6 flex gap-5 items-center hover:border-primary/50 transition-colors">
                  <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground mb-1">{speaker.name}</h4>
                    <p className="text-muted text-sm mb-2">{speaker.title}</p>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wider">{speaker.specialty}</p>
                  </div>
                  <div className="flex gap-2">
                    <a href="#" className="w-9 h-9 rounded-full bg-background border border-border hover:border-primary flex items-center justify-center transition-colors">
                      <LinkedInIcon className="w-4 h-4 text-muted hover:text-primary" />
                    </a>
                    <a href="#" className="w-9 h-9 rounded-full bg-background border border-border hover:border-primary flex items-center justify-center transition-colors">
                      <Mail className="w-4 h-4 text-muted hover:text-primary" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Ready to Book?</h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Submit a speaker request with your event details, date, audience size, and topic of interest. We&apos;ll be in touch within 48 hours.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-background font-bold py-4 px-8 rounded-full transition-colors text-lg">
            SUBMIT SPEAKER REQUEST <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
