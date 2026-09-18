import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHub from "@/components/navigation/SectionHub";
import { PHOTOS } from "@/lib/images";

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="relative isolate overflow-hidden bg-surface pt-24 pb-16 md:pt-32 md:pb-20">
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

      <SectionHub section="/about" />

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
