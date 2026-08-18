import Link from "next/link";
import { ArrowRight, Download, CheckCircle } from "lucide-react";

const TIERS = [
  {
    name: "Community Partner",
    price: "$1,000",
    highlighted: false,
    perks: [
      "Logo on website partner page",
      "Social media mention",
      "Email newsletter feature",
      "2 complimentary event tickets",
    ],
  },
  {
    name: "Gold Sponsor",
    price: "$5,000",
    highlighted: true,
    perks: [
      "All Community Partner benefits",
      "Logo on conference signage",
      "Exhibit table at annual conference",
      "Speaking slot at sponsored session",
      "5 complimentary conference passes",
      "Dedicated social media post",
    ],
  },
  {
    name: "Platinum Sponsor",
    price: "$10,000+",
    highlighted: false,
    perks: [
      "All Gold Sponsor benefits",
      "Premier logo placement across all platforms",
      "Keynote session naming rights",
      "10 complimentary conference passes",
      "Custom branded experience at conference",
      "Year-round co-marketing opportunities",
    ],
  },
];

const PARTNER_TYPES = [
  {
    title: "Corporate Partners",
    description: "Healthcare systems, rehabilitation companies, and healthcare technology brands who want to reach and support Black rehab professionals.",
    icon: "🏢",
  },
  {
    title: "Academic Institutions",
    description: "Universities and PT/OT/SLP programs looking to recruit, support, and champion Black students in their programs.",
    icon: "🎓",
  },
  {
    title: "Nonprofit Partners",
    description: "Organizations that share our mission around health equity, community service, and professional development.",
    icon: "🤝",
  },
  {
    title: "Media & Brand Partners",
    description: "Publishers, media outlets, and lifestyle brands that want to authentically reach our engaged community.",
    icon: "📱",
  },
];

export default function PartnershipsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">Partnerships & Sponsorships</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white mb-6">
            Partner with <span className="text-primary">Purpose</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10">
            Align your brand or organization with a growing global movement that is transforming rehabilitation, advancing health equity, and empowering the next generation of Black healthcare professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-background font-bold py-4 px-8 rounded-full transition-colors text-lg">
              BECOME A PARTNER <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="#" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg">
              <Download className="w-5 h-5" /> DOWNLOAD DECK
            </a>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">Partnership Opportunities</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Who We Partner With</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNER_TYPES.map((pt, idx) => (
              <div key={idx} className="bg-surface border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
                <div className="text-4xl mb-6">{pt.icon}</div>
                <h3 className="font-bold text-foreground mb-3">{pt.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{pt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">Sponsorship</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Choose Your Investment Level</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {TIERS.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 flex flex-col border-2 transition-all ${
                  tier.highlighted
                    ? "bg-secondary border-primary shadow-2xl shadow-primary/20 scale-105"
                    : "bg-background border-border"
                }`}
              >
                {tier.highlighted && (
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Most Popular</span>
                )}
                <h3 className={`text-xl font-bold mb-2 ${tier.highlighted ? "text-white" : "text-foreground"}`}>{tier.name}</h3>
                <p className={`text-3xl font-serif font-bold mb-6 text-primary`}>{tier.price}</p>
                <ul className="space-y-3 flex-1 mb-8">
                  {tier.perks.map((perk, pidx) => (
                    <li key={pidx} className={`flex items-start gap-3 text-sm ${tier.highlighted ? "text-white/80" : "text-muted"}`}>
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-full transition-colors ${
                    tier.highlighted
                      ? "bg-primary hover:bg-primary-hover text-background"
                      : "bg-surface border border-border hover:border-primary text-foreground"
                  }`}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CTA */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Need a Custom Package?</h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            We&apos;ll work with you to build a partnership that matches your goals, audience, and budget. Let&apos;s talk.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-background font-bold py-4 px-8 rounded-full transition-colors text-lg">
            CONTACT US <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
