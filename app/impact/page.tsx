import Link from "next/link";
import { ArrowRight, GraduationCap, HandHeart, Scaling } from "lucide-react";

const PILLARS = [
  {
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    title: "Scholarships",
    description: "Breaking down financial barriers for Black students pursuing degrees in physical therapy, occupational therapy, and speech-language pathology.",
    href: "/impact/scholarships",
    cta: "Apply for Scholarship",
  },
  {
    icon: <HandHeart className="w-8 h-8 text-primary" />,
    title: "Community Service",
    description: "Providing free rehabilitation services and education to underserved populations through local and global partnerships.",
    href: "/impact/service",
    cta: "Learn About Our Service",
  },
  {
    icon: <Scaling className="w-8 h-8 text-primary" />,
    title: "Advocacy",
    description: "Championing policies that advance health equity and better outcomes for Black communities and marginalized populations.",
    href: "/impact/advocacy",
    cta: "Join Our Advocacy",
  },
];

const STATS = [
  { value: "10K+", label: "Professionals Empowered" },
  { value: "3K+", label: "Students Inspired" },
  { value: "12+", label: "Countries Reached" },
  { value: "$250K+", label: "Scholarships Awarded" },
];

export default function ImpactPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">Impact</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white mb-6">
            Real People.<br /><span className="text-primary">Real Change.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10">
            Our nonprofit initiatives are designed to create lasting, systemic change in rehabilitation and in every community we serve.
          </p>
          <Link href="/impact/donate" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-background font-bold py-4 px-8 rounded-full transition-colors text-lg">
            DONATE NOW <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((s, idx) => (
              <div key={idx}>
                <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">{s.value}</p>
                <p className="text-muted text-sm uppercase tracking-wider font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">How We Create Change</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Three Pillars of Impact</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((p, idx) => (
              <div key={idx} className="bg-surface border border-border rounded-2xl p-10 flex flex-col hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8">{p.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{p.title}</h3>
                <p className="text-muted leading-relaxed flex-1 mb-8">{p.description}</p>
                <Link href={p.href} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors">
                  {p.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-secondary rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Your Gift Powers the Mission</h2>
              <p className="text-white/80 text-lg">Every donation funds scholarships, global experiences, and community programs that change lives.</p>
            </div>
            <Link href="/impact/donate" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-background font-bold py-4 px-8 rounded-full transition-colors text-lg shrink-0">
              DONATE TODAY <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
