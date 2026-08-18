import Link from "next/link";
import { ArrowRight, Users, Globe2, GraduationCap, BookOpen, CheckCircle } from "lucide-react";

const MEMBERSHIP_TIERS = [
  {
    name: "Student Member",
    price: "FREE",
    description: "For students enrolled in PT, OT, or SLP programs.",
    perks: [
      "Access to the Student Hub",
      "Scholarship application eligibility",
      "Student networking events",
      "Mentorship matching",
      "Digital newsletter",
    ],
    cta: "Join as Student",
    highlighted: false,
  },
  {
    name: "Professional Member",
    price: "$75 / year",
    description: "For licensed rehabilitation professionals and allied health practitioners.",
    perks: [
      "All Student Member perks",
      "Discounted conference registration",
      "Priority access to global experiences",
      "Exclusive professional development content",
      "Member directory listing",
      "Leadership opportunities",
    ],
    cta: "Join as Professional",
    highlighted: true,
  },
  {
    name: "Ally / Supporter",
    price: "$50 / year",
    description: "For those who champion the mission but are not rehabilitation professionals.",
    perks: [
      "Community newsletter access",
      "Event invitations",
      "Donation recognition",
      "Impact reports",
    ],
    cta: "Become an Ally",
    highlighted: false,
  },
];

const BENEFITS = [
  { icon: <Users className="w-6 h-6 text-primary" />, title: "Community", desc: "Connect with thousands of like-minded professionals across the globe." },
  { icon: <Globe2 className="w-6 h-6 text-primary" />, title: "Global Access", desc: "Priority registration for international experiences and retreats." },
  { icon: <GraduationCap className="w-6 h-6 text-primary" />, title: "Development", desc: "CEUs, workshops, mentorship, and continuing education resources." },
  { icon: <BookOpen className="w-6 h-6 text-primary" />, title: "Resources", desc: "Exclusive access to research, toolkits, and the resource library." },
];

export default function JoinPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white mb-6">
            Join the <span className="text-primary">Movement</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Become part of a global community of rehabilitation professionals who are leading with excellence, serving with purpose, and making a difference every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#membership" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-background font-bold py-4 px-8 rounded-full transition-colors text-lg">
              SEE MEMBERSHIP OPTIONS <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">Why Join</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Everything You Need to Grow & Lead</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((b, idx) => (
              <div key={idx} className="bg-surface border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">{b.icon}</div>
                <h3 className="font-bold text-foreground mb-3">{b.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section id="membership" className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">Membership</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Choose Your Path</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {MEMBERSHIP_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 flex flex-col transition-all border-2 ${
                  tier.highlighted
                    ? "bg-secondary border-primary shadow-2xl shadow-primary/20 scale-105"
                    : "bg-background border-border hover:border-primary/50"
                }`}
              >
                {tier.highlighted && (
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Most Popular</span>
                )}
                <h3 className={`text-xl font-bold mb-2 ${tier.highlighted ? "text-white" : "text-foreground"}`}>{tier.name}</h3>
                <p className={`text-3xl font-serif font-bold mb-4 ${tier.highlighted ? "text-primary" : "text-primary"}`}>{tier.price}</p>
                <p className={`text-sm mb-8 leading-relaxed ${tier.highlighted ? "text-white/70" : "text-muted"}`}>{tier.description}</p>
                <ul className="space-y-3 flex-1 mb-8">
                  {tier.perks.map((perk, pidx) => (
                    <li key={pidx} className={`flex items-start gap-3 text-sm ${tier.highlighted ? "text-white/80" : "text-muted"}`}>
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/community/join/register"
                  className={`w-full flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-full transition-colors ${
                    tier.highlighted
                      ? "bg-primary hover:bg-primary-hover text-background"
                      : "bg-surface border border-border hover:border-primary text-foreground"
                  }`}
                >
                  {tier.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
