import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Users, BookOpen, Music, Star } from "lucide-react";
import { PHOTOS } from "@/lib/images";

const AGENDA = [
  { day: "Day 1", theme: "Arrive & Connect", description: "Welcome reception, registration, opening keynote address, and networking dinner." },
  { day: "Day 2", theme: "Elevate & Learn", description: "Workshops, panel discussions, continuing education sessions, and breakout groups." },
  { day: "Day 3", theme: "Lead & Launch", description: "Leadership summit, awards ceremony, evening celebration, and closing send-off." },
];

const HIGHLIGHTS = [
  { icon: <Users className="w-6 h-6 text-primary" />, title: "1,000+ Attendees", desc: "Professionals, students, and allies from across the globe." },
  { icon: <BookOpen className="w-6 h-6 text-primary" />, title: "CEU Credits", desc: "Earn continuing education units while connecting with peers." },
  { icon: <Music className="w-6 h-6 text-primary" />, title: "Cultural Celebration", desc: "Evening events celebrating culture, community, and excellence." },
  { icon: <Star className="w-6 h-6 text-primary" />, title: "Annual Awards", desc: "Honoring individuals and organizations making an extraordinary impact." },
];

export default function ConferencePage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="section-dark relative py-32 md:py-40 overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${PHOTOS.conferenceAudience})` }}></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/experiences" className="hover:text-primary-hover">Experiences</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">Annual Conference</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white mb-6">
            Annual<br /><span className="text-primary">Conference</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10">
            Our flagship event — three transformative days of connection, professional development, inspiration, and celebration.
          </p>
          <div className="flex flex-wrap gap-6 mb-10 text-white/70 text-sm font-medium">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> June 20–22, 2025</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> New Orleans, LA</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/experiences/conference/register" className="btn btn-primary btn-lg group">
              REGISTER NOW <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#agenda" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg">
              VIEW AGENDA
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {HIGHLIGHTS.map((h, idx) => (
              <div key={idx} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">{h.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{h.title}</h3>
                <p className="text-muted text-sm">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="section bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="display-2 text-foreground mb-12 text-center">Conference Agenda</h2>
          <div className="space-y-6">
            {AGENDA.map((item, idx) => (
              <div key={idx} className="card p-8 flex flex-col sm:flex-row gap-6 card-hover">
                <div className="sm:w-24 shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{item.day}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.theme}</h3>
                  <p className="text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="section-dark py-24 bg-secondary border-y border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="display-2 text-white mb-6">Secure Your Spot Today</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">Early bird pricing available for a limited time. Join us in New Orleans for an unforgettable experience.</p>
          <Link href="/experiences/conference/register" className="btn btn-primary btn-lg group">
            REGISTER NOW <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
