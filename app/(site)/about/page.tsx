import Link from "next/link";
import { ArrowRight, BookOpen, Users, Award, Globe2, FileText, Newspaper } from "lucide-react";
import { PHOTOS } from "@/lib/images";

const ABOUT_PAGES = [
  {
    title: "Our Story",
    description: "How two friends turned a shared vision into a global movement.",
    href: "/about/our-story",
    icon: <BookOpen className="w-6 h-6 text-primary" />,
  },
  {
    title: "Mission, Vision & Values",
    description: "The principles that guide everything we do.",
    href: "/about/mission-vision-values",
    icon: <Award className="w-6 h-6 text-primary" />,
  },
  {
    title: "Founders",
    description: "Meet Dr. Chauntel Altidor and Nancy Yamoah — the visionaries behind Black in Rehab.",
    href: "/about/founders",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    title: "Leadership Team",
    description: "The leaders driving our mission forward every day.",
    href: "/about/leadership",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    title: "Ambassadors & Chapters",
    description: "Local leaders building community in cities around the world.",
    href: "/about/ambassadors",
    icon: <Globe2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Annual Report",
    description: "Transparency, impact metrics, and year-in-review highlights.",
    href: "/about/annual-report",
    icon: <FileText className="w-6 h-6 text-primary" />,
  },
  {
    title: "Media & Press",
    description: "Press kit, media coverage, and brand assets.",
    href: "/about/media-press",
    icon: <Newspaper className="w-6 h-6 text-primary" />,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="relative isolate py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${PHOTOS.conferenceGroupBranded})` }}></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span>/</span>
            <span className="text-foreground">About</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-foreground mb-6">
            About <span className="text-primary">Black in Rehab</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl">
            We are the global leader empowering Black rehabilitation professionals to transform lives and strengthen communities worldwide.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ABOUT_PAGES.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group card p-8 card-hover flex flex-col"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {page.icon}
                </div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {page.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed flex-1 mb-6">{page.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="display-2 text-foreground mb-4">Ready to Join Us?</h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Become part of a community that is changing rehabilitation — and the world.
          </p>
          <Link
            href="/community/join"
            className="btn btn-primary btn-lg group"
          >
            JOIN THE COMMUNITY <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
