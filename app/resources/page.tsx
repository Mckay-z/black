import Link from "next/link";
import { ArrowRight, BookOpen, FileText, GraduationCap } from "lucide-react";

const RESOURCE_SECTIONS = [
  {
    title: "Resource Library",
    description: "Downloadable guides, templates, webinar recordings, and professional toolkits.",
    href: "/resources/library",
    icon: <FileText className="w-6 h-6 text-primary" />,
  },
  {
    title: "Blog & Insights",
    description: "Stories, thought leadership, and updates from the Black in Rehab community.",
    href: "/resources/blog",
    icon: <BookOpen className="w-6 h-6 text-primary" />,
  },
  {
    title: "Student Hub",
    description: "Scholarships, mentorship, career guides, and resources for PT, OT, and SLP students.",
    href: "/resources/students",
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="py-24 md:py-32 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span>/</span>
            <span className="text-foreground">Resources</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-foreground mb-6">
            Resources & <span className="text-primary">Tools</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl">
            Curated content to help you grow as a professional, lead with purpose, and serve your community with excellence.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESOURCE_SECTIONS.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group bg-surface border border-border rounded-2xl p-10 hover:border-primary/50 transition-colors flex flex-col"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {section.title}
                </h2>
                <p className="text-muted leading-relaxed flex-1 mb-6">{section.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-muted text-sm uppercase tracking-widest mb-4">Members Only</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Unlock the Full Library
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Many resources are available exclusively to Black in Rehab members. Join today for full access.
          </p>
          <Link
            href="/community/join"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors text-lg"
          >
            BECOME A MEMBER <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
