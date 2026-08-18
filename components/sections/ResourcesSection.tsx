import Link from "next/link";
import { ArrowRight, BookOpen, Headphones, Library, GraduationCap } from "lucide-react";

export default function ResourcesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">Empowering Your Journey</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Resources & Insights
            </h3>
            <p className="text-muted text-lg leading-relaxed">
              Equipping rehabilitation professionals and students with the knowledge, research, and tools they need to succeed and lead.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/resources/blog" className="group bg-surface border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors flex flex-col h-full">
            <BookOpen className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold text-foreground mb-3">The Blog</h4>
            <p className="text-muted text-sm leading-relaxed mb-8 flex-1">
              Articles, insights, and stories from leaders in rehabilitation and health equity.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Read Articles <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link href="#" className="group bg-surface border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-background border border-border text-xs font-bold px-2 py-1 rounded text-muted">COMING SOON</div>
            <Headphones className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform opacity-50" />
            <h4 className="text-xl font-bold text-foreground mb-3 opacity-50">The Podcast</h4>
            <p className="text-muted text-sm leading-relaxed mb-8 flex-1 opacity-50">
              Conversations on purpose, community, and impact in the healthcare space.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-50">
              Tune In <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link href="/resources/library" className="group bg-surface border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors flex flex-col h-full">
            <Library className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold text-foreground mb-3">Resource Library</h4>
            <p className="text-muted text-sm leading-relaxed mb-8 flex-1">
              Downloadable guides, research papers, and toolkits for professional growth.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Access Library <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link href="/resources/students" className="group bg-surface border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors flex flex-col h-full">
            <GraduationCap className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold text-foreground mb-3">Student Hub</h4>
            <p className="text-muted text-sm leading-relaxed mb-8 flex-1">
              Career advice, exam prep resources, and mentorship connections for students.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Explore Resources <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
