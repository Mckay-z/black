import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PHOTOS } from "@/lib/images";
import ImpactGallerySection from "@/components/sections/ImpactGallerySection";

const STATS = [
  { value: "10K+", label: "Professionals Empowered" },
  { value: "3K+", label: "Students Inspired" },
  { value: "12+", label: "Countries Reached" },
  { value: "$250K+", label: "Scholarships Awarded" },
];

export default function ImpactPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="section-dark relative py-32 md:py-40 overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${PHOTOS.impactHandsUp})` }}></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">Impact</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white mb-6">
            Real People.<br /><span className="text-primary">Real Change.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10">
            Our nonprofit initiatives are designed to create lasting, systemic change in rehabilitation and in every community we serve.
          </p>
          <Link href="/impact/donate" className="btn btn-primary btn-lg group">
            DONATE NOW <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((s, idx) => (
              <div key={idx}>
                <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">{s.value}</p>
                <p className="text-muted text-sm uppercase tracking-wider font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact gallery */}
      <ImpactGallerySection
        eyebrow="How We Create Change"
        heading="The Work, In Pictures"
        description="Scholarships, bookbags, and the everyday work of showing up. Filter by what you want to see."
        className="section bg-background"
      />

      {/* Donate CTA */}
      <section className="section bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-dark bg-secondary border border-border rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="display-2 text-white mb-4">Your Gift Powers the Mission</h2>
              <p className="text-white/80 text-lg">Every donation funds scholarships, global experiences, and community programs that change lives.</p>
            </div>
            <Link href="/impact/donate" className="btn btn-primary btn-lg group shrink-0">
              DONATE TODAY <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
