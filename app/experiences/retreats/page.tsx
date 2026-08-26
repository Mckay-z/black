import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Waves, Leaf, HeartPulse, Moon } from "lucide-react";
import { PHOTOS } from "@/lib/images";

const PILLARS = [
  { icon: <HeartPulse className="w-6 h-6 text-primary" />, title: "Physical Restoration", desc: "Movement, breathwork, and body-based healing practices." },
  { icon: <Moon className="w-6 h-6 text-primary" />, title: "Mental Clarity", desc: "Mindfulness, journaling, and reflection sessions." },
  { icon: <Leaf className="w-6 h-6 text-primary" />, title: "Spiritual Grounding", desc: "Faith, purpose, and values-aligned wellness practices." },
  { icon: <Waves className="w-6 h-6 text-primary" />, title: "Community Connection", desc: "Sisterhood & brotherhood circles, group experiences, and bonding." },
];

export default function RetreatsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="section-dark relative py-32 md:py-40 overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${PHOTOS.retreatBeachYogaGroup})` }}></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/experiences" className="hover:text-primary-hover">Experiences</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">Retreats</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white mb-6">
            Wellness <span className="text-primary">Retreats</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10">
            Rest, renew, and reconnect. Our retreats are designed to restore your mind, body, and purpose so you can lead with your whole self.
          </p>
          <div className="flex flex-wrap gap-6 mb-10 text-white/70 text-sm font-medium">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> August 15–18, 2025</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Jamaica</div>
          </div>
          <Link href="/experiences/retreats/register" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors text-lg">
            REGISTER NOW <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">The Four Pillars of Our Retreat</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">Each retreat is intentionally designed around four core areas of whole-person wellness.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PILLARS.map((p, idx) => (
              <div key={idx} className="bg-surface border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">{p.icon}</div>
                <h3 className="font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">A Taste of the Experience</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              PHOTOS.retreatMeditation,
              PHOTOS.retreatSoundBowls,
              PHOTOS.retreatSavasana,
              PHOTOS.retreatMats,
            ].map((src, idx) => (
              <div key={idx} className="aspect-square rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="Retreat experience" className="photo photo-hover-lift w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-24 bg-secondary border-y border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Your Renewal Awaits</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">Limited spots available. Reserve your place at our next wellness retreat.</p>
          <Link href="/experiences/retreats/register" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors text-lg">
            RESERVE MY SPOT <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
