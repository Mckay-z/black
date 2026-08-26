import Link from "next/link";
import { ArrowRight, Scaling, Megaphone, FileCheck, Users, CheckCircle } from "lucide-react";
import { PHOTOS } from "@/lib/images";

const INITIATIVES = [
  {
    title: "Health Equity Policy",
    description: "Advocating for policies that expand access to rehabilitation services in underserved communities.",
    icon: <Scaling className="w-6 h-6 text-primary" />,
  },
  {
    title: "Workforce Diversity",
    description: "Championing representation of Black professionals in PT, OT, and SLP programs and leadership roles.",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    title: "Community Awareness",
    description: "Raising public awareness about rehabilitation access, health disparities, and preventive care.",
    icon: <Megaphone className="w-6 h-6 text-primary" />,
  },
  {
    title: "Legislative Engagement",
    description: "Partnering with policymakers and professional associations to advance equitable healthcare legislation.",
    icon: <FileCheck className="w-6 h-6 text-primary" />,
  },
];

const FOCUS_AREAS = [
  "Expanding insurance coverage for rehabilitation services",
  "Increasing diversity in healthcare education pipelines",
  "Addressing social determinants of health in Black communities",
  "Supporting culturally competent clinical practice standards",
  "Amplifying Black voices in professional associations",
];

export default function AdvocacyPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="section-dark relative py-24 md:py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${PHOTOS.impactChildren})` }}></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/impact" className="hover:text-primary-hover">Impact</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">Advocacy</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">
            Advocacy & <span className="text-primary">Equity</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl">
            We champion policies and practices that advance health equity and better outcomes for Black communities and marginalized populations.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm text-center">Our Mission</h2>
          <p className="text-2xl md:text-3xl font-serif font-bold text-foreground text-center leading-relaxed mb-16">
            Systemic change requires bold advocacy. We use our collective voice to push for a rehabilitation profession — and a healthcare system — that works for everyone.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FOCUS_AREAS.map((area, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-surface border border-border rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground text-sm">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">Advocacy Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {INITIATIVES.map((item, idx) => (
              <div key={idx} className="bg-background border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Join Our Advocacy Efforts</h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Members receive advocacy updates, action alerts, and opportunities to engage with policymakers and professional associations.
          </p>
          <Link
            href="/community/join"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors text-lg"
          >
            JOIN THE MOVEMENT <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
