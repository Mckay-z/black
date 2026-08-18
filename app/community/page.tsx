import Link from "next/link";
import { ArrowRight, Users, ShoppingBag, Globe2, GraduationCap } from "lucide-react";

const COMMUNITY_LINKS = [
  {
    title: "Join the Community",
    description: "Become a member and unlock exclusive resources, events, and global experiences.",
    href: "/community/join",
    icon: <Users className="w-6 h-6 text-primary" />,
    cta: "View Membership Options",
  },
  {
    title: "Ambassadors & Chapters",
    description: "Find your local chapter or apply to become an ambassador in your city.",
    href: "/about/ambassadors",
    icon: <Globe2 className="w-6 h-6 text-primary" />,
    cta: "Find a Chapter",
  },
  {
    title: "Student Hub",
    description: "Resources, mentorship, and scholarship opportunities for rehab students.",
    href: "/resources/students",
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    cta: "Explore Student Resources",
  },
  {
    title: "Shop",
    description: "Wear the movement. Every purchase supports scholarships and community programs.",
    href: "/shop",
    icon: <ShoppingBag className="w-6 h-6 text-primary" />,
    cta: "Browse the Shop",
  },
];

export default function CommunityPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">Community</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white mb-6">
            You Belong <span className="text-primary">Here</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10">
            A global movement of rehabilitation professionals, students, and allies committed to excellence, representation, and service.
          </p>
          <Link
            href="/community/join"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-background font-bold py-4 px-8 rounded-full transition-colors text-lg"
          >
            JOIN NOW <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMMUNITY_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-surface border border-border rounded-2xl p-10 hover:border-primary/50 transition-colors flex flex-col"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h2>
                <p className="text-muted leading-relaxed flex-1 mb-6">{item.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  {item.cta} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
