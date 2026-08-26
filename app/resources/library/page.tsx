import Link from "next/link";
import { ArrowRight, Download, FileText, BookOpen, Video } from "lucide-react";

const RESOURCES = [
  {
    category: "Guides",
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    items: [
      { title: "The Black Rehab Professional Career Guide", type: "PDF", pages: "32 pages" },
      { title: "Mentorship Toolkit for Rehabilitation Students", type: "PDF", pages: "18 pages" },
      { title: "Health Equity in Rehabilitation: A Field Guide", type: "PDF", pages: "44 pages" },
    ],
  },
  {
    category: "Templates & Tools",
    icon: <FileText className="w-5 h-5 text-primary" />,
    items: [
      { title: "Clinical Documentation Templates", type: "DOCX", pages: "10 templates" },
      { title: "SOAP Note Writing Best Practices", type: "PDF", pages: "8 pages" },
      { title: "Patient Communication Scripts", type: "PDF", pages: "12 pages" },
    ],
  },
  {
    category: "Webinar Recordings",
    icon: <Video className="w-5 h-5 text-primary" />,
    items: [
      { title: "Navigating Burnout in Healthcare — Panel Discussion", type: "VIDEO", pages: "58 min" },
      { title: "Building Your Personal Brand as a Rehab Professional", type: "VIDEO", pages: "42 min" },
      { title: "Global Health Trends in Rehabilitation", type: "VIDEO", pages: "65 min" },
    ],
  },
];

export default function ResourceLibraryPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-primary-hover">Resources</Link>
            <span>/</span>
            <span className="text-foreground">Resource Library</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6">
            Resource <span className="text-primary">Library</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl">
            Downloadable guides, research papers, webinar recordings, and professional toolkits — curated specifically for Black rehabilitation professionals and students.
          </p>
        </div>
      </section>

      {/* Resources */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 space-y-16">
          {RESOURCES.map((section, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">{section.icon}</div>
                <h2 className="text-2xl font-serif font-bold text-foreground">{section.category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {section.items.map((item, iidx) => (
                  <div key={iidx} className="group bg-surface border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors flex flex-col">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest text-muted bg-background border border-border rounded px-2 py-1">
                        {item.type}
                      </span>
                      <span className="text-xs text-muted">{item.pages}</span>
                    </div>
                    <h3 className="font-bold text-foreground mb-6 flex-1">{item.title}</h3>
                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors">
                      <Download className="w-4 h-4" /> Download Free
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Unlock the Full Library</h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">Members get unlimited access to all resources, webinars, and tools. Join today to unlock everything.</p>
          <Link href="/community/join" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors text-lg">
            BECOME A MEMBER <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
