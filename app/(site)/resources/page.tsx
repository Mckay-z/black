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
    comingSoon: true,
    icon: <BookOpen className="w-6 h-6 text-primary" />,
  },
  {
    title: "Student Hub",
    description: "Scholarships, mentorship, career guides, and resources for PT, OT, and SLP students.",
    href: "/resources/students",
    comingSoon: true,
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-surface border-b border-border">
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

      <section className="pt-12 md:pt-16 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESOURCE_SECTIONS.map((section) => {
              const comingSoon = "comingSoon" in section && section.comingSoon;
              // Not a link while it is unfinished: the badge said "Coming
              // Soon" and the click still went to a placeholder page.
              const shared = "group card p-10 flex flex-col relative";

              const body = (
                <>
                  {comingSoon && (
                    <span className="chip absolute right-4 top-4 text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
                      Coming Soon
                    </span>
                  )}
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    {section.icon}
                  </div>
                  <h2
                    className={`text-2xl font-serif font-bold text-foreground mb-3 ${
                      comingSoon ? "" : "group-hover:text-primary transition-colors"
                    }`}
                  >
                    {section.title}
                  </h2>
                  <p className="text-muted leading-relaxed flex-1 mb-6">
                    {section.description}
                  </p>
                  {comingSoon ? (
                    <span className="text-sm font-semibold text-muted/70">
                      Available soon
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </>
              );

              return comingSoon ? (
                <div key={section.href} className={shared} aria-disabled="true">
                  {body}
                </div>
              ) : (
                <Link
                  key={section.href}
                  href={section.href}
                  className={`${shared} card-hover`}
                >
                  {body}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-muted text-sm uppercase tracking-widest mb-4">Members Only</p>
          <h2 className="display-2 text-foreground mb-4">
            Unlock the Full Library
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Many resources are available exclusively to Black in Rehab members. Join today for full access.
          </p>
          <Link
            href="/community/join"
            className="btn btn-primary btn-lg group"
          >
            BECOME A MEMBER <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
