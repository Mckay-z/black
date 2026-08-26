import Link from "next/link";
import { ArrowRight, Users, Heart, Handshake } from "lucide-react";
import { PHOTOS } from "@/lib/images";

const PATHS = [
  {
    title: "Join the Community",
    description: "Become a member and connect with thousands of rehabilitation professionals worldwide.",
    href: "/community/join",
    icon: <Users className="w-8 h-8 text-primary" />,
    cta: "See Membership Options",
    primary: true,
  },
  {
    title: "Make a Donation",
    description: "Your gift funds scholarships, global experiences, and community service programs.",
    href: "/impact/donate",
    icon: <Heart className="w-8 h-8 text-primary" />,
    cta: "Donate Now",
    primary: false,
  },
  {
    title: "Partner With Us",
    description: "Sponsor an event, support a program, or align your brand with our mission.",
    href: "/partnerships",
    icon: <Handshake className="w-8 h-8 text-primary" />,
    cta: "Explore Partnerships",
    primary: false,
  },
];

export default function JoinTheMovementPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="section-dark relative py-32 md:py-40 overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${PHOTOS.retreatGroupFormal})` }}></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white mb-6">
            Join the <span className="text-primary">Movement</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-4">
            This is our story. This is our purpose. We&apos;re just getting started — and you can be part of what&apos;s next.
          </p>
          <p className="text-white/60 max-w-xl mx-auto">
            Your support empowers professionals, inspires students, and strengthens communities across the globe.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PATHS.map((path) => (
              <div
                key={path.href}
                className={`rounded-2xl p-10 flex flex-col border-2 transition-all ${
                  path.primary
                    ? "section-dark bg-secondary border-primary shadow-2xl shadow-primary/20 md:scale-105"
                    : "bg-surface border-border hover:border-primary/50"
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                  {path.icon}
                </div>
                <h2 className={`text-2xl font-serif font-bold mb-4 ${path.primary ? "text-white" : "text-foreground"}`}>
                  {path.title}
                </h2>
                <p className={`leading-relaxed flex-1 mb-8 ${path.primary ? "text-white/70" : "text-muted"}`}>
                  {path.description}
                </p>
                <Link
                  href={path.href}
                  className={`inline-flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-full transition-colors ${
                    path.primary
                      ? "bg-primary hover:bg-primary-hover text-on-primary"
                      : "bg-background border border-border hover:border-primary text-foreground"
                  }`}
                >
                  {path.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Not Sure Where to Start?</h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Reach out and our team will help you find the best way to get involved.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors text-lg"
          >
            CONTACT US <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
