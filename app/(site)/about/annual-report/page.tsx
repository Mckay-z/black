import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

export default function AnnualReportPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
              <Link href="/" className="hover:text-primary-hover">Home</Link>
              <span>/</span>
              <Link href="/about" className="hover:text-primary-hover">About</Link>
              <span>/</span>
              <span className="text-foreground">Annual Report</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6">
              Our Impact in <span className="text-primary">Numbers</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              Transparency is a core part of who we are. Our impact reports will be published here as they are completed.
            </p>
          </div>
        </div>
      </section>

      {/* Reports List */}
      <section className="pt-12 md:pt-16 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {/* No published reports yet.

              This was three cards — 2024, 2023 and 2022 "Impact Report" —
              each with a "[CLIENT TO PROVIDE: …]" description and a Download
              PDF button pointing at "#". None of those reports exist, so the
              page was inventing a publishing history. */}
          <div className="card card-sunken p-10 md:p-12 text-center">
            <span className="icon-tile icon-tile-lg mx-auto mb-6">
              <FileText className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Our first report is in preparation
            </h2>
            <p className="mt-4 leading-relaxed text-muted max-w-md mx-auto">
              We are gathering the figures behind our scholarships, programs, and
              global work. Published reports will be available to download here.
            </p>
            <Link href="/contact" className="link-arrow mt-8 justify-center">
              Ask for our numbers
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="section-dark mt-16 bg-secondary border border-border rounded-3xl p-10 md:p-16 text-center">
            <h3 className="text-3xl font-serif font-bold text-white mb-4">Support the Mission</h3>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Your generosity powers every program, scholarship, and global experience we create.
            </p>
            <Link
              href="/impact/donate"
              className="btn btn-primary btn-lg group"
            >
              DONATE TODAY <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
