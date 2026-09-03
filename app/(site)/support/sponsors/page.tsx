import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SponsorsPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="py-24 md:py-32 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span>/</span>
            <Link href="/support" className="hover:text-primary-hover">Support</Link>
            <span>/</span>
            <span className="text-foreground">Sponsors</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6">
            Become a <span className="text-primary">Sponsor</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mb-10">
            Partner with Black in Rehab and connect your organization with thousands of engaged rehabilitation professionals, students, and allies worldwide.
          </p>
          <Link
            href="/partnerships"
            className="btn btn-primary btn-lg group"
          >
            VIEW PARTNERSHIP OPTIONS <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <p className="text-muted text-lg leading-relaxed mb-10">
            Our sponsorship program offers tiered packages from Community Partner to Platinum Sponsor, with benefits including conference visibility, exhibit tables, speaking opportunities, and year-round co-marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/partnerships"
              className="btn btn-primary btn-lg group"
            >
              EXPLORE TIERS <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline btn-lg"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
