import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHub from "@/components/navigation/SectionHub";

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

      <SectionHub section="/resources" />

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
