import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";

export default function AnnualReportPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-surface border-b border-border">
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
              Transparency is a core part of who we are. Here&apos;s a look at where we&apos;ve been, what we&apos;ve accomplished, and where we&apos;re going.
            </p>
          </div>
        </div>
      </section>

      {/* Reports List */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-6">
            {[2024, 2023, 2022].map((year) => (
              <div key={year} className="group bg-surface border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Annual Report</p>
                  <h3 className="text-2xl font-serif font-bold text-foreground">{year} Impact Report</h3>
                  <p className="text-muted mt-2">
                    {year === 2024
                      ? "[CLIENT TO PROVIDE: Brief description of the 2024 Annual Report highlights]"
                      : `[CLIENT TO PROVIDE: Brief description of the ${year} Annual Report highlights]`}
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-background font-semibold py-3 px-6 rounded-full transition-colors shrink-0"
                >
                  <Download className="w-4 h-4" /> Download PDF
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-secondary rounded-3xl p-10 md:p-16 text-center">
            <h3 className="text-3xl font-serif font-bold text-white mb-4">Support the Mission</h3>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Your generosity powers every program, scholarship, and global experience we create.
            </p>
            <Link
              href="/impact/donate"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-background font-bold py-4 px-8 rounded-full transition-colors"
            >
              DONATE TODAY <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
