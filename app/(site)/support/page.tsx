import Link from "next/link";
import { ArrowRight, Heart, Handshake, ShoppingBag, Mic } from "lucide-react";
import { PHOTOS } from "@/lib/images";

const SUPPORT_OPTIONS = [
  {
    title: "Donate",
    description: "Fund scholarships, global experiences, and community programs that change lives.",
    href: "/impact/donate",
    icon: <Heart className="w-6 h-6 text-primary" />,
    cta: "Make a Gift",
  },
  {
    title: "Become a Sponsor",
    description: "Align your brand with a growing global movement advancing health equity.",
    href: "/support/sponsors",
    icon: <Handshake className="w-6 h-6 text-primary" />,
    cta: "View Sponsorship Tiers",
  },
  {
    title: "Shop Merchandise",
    description: "100% of proceeds support our mission. Rep your purpose.",
    href: "/shop",
    icon: <ShoppingBag className="w-6 h-6 text-primary" />,
    cta: "Visit the Shop",
  },
  {
    title: "Book a Speaker",
    description: "Bring the Black in Rehab message to your conference, campus, or event.",
    href: "/speakers",
    icon: <Mic className="w-6 h-6 text-primary" />,
    cta: "Speakers Bureau",
  },
];

export default function SupportPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="section-dark relative py-24 md:py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${PHOTOS.ghanaCertificates})` }}></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">Support</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white mb-6">
            Support the <span className="text-primary">Mission</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl">
            Every contribution — whether financial, professional, or personal — helps us empower the next generation and strengthen communities worldwide.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUPPORT_OPTIONS.map((option) => (
              <Link
                key={option.href}
                href={option.href}
                className="group card p-10 card-hover flex flex-col"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {option.icon}
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {option.title}
                </h2>
                <p className="text-muted leading-relaxed flex-1 mb-6">{option.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  {option.cta} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
