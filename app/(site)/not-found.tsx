import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | Black in Rehab Foundation",
};

/**
 * 404 page. The site previously had none, so a mistyped or retired URL fell
 * through to Next's unstyled default — no header, no footer, no way back.
 */
export default function NotFound() {
  return (
    <div className="bg-background min-h-[70vh] flex items-center justify-center py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-xl text-center">
        <p className="text-primary font-serif font-bold text-7xl md:text-8xl mb-6">404</p>

        <h1 className="display-2 text-foreground mb-4">
          We could not find that page
        </h1>

        <p className="text-muted mb-10 leading-relaxed">
          The link may be out of date, or the page may have moved. These are good
          places to pick things back up.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn btn-primary btn-lg group"
          >
            <Home className="w-5 h-5" /> BACK TO HOME
          </Link>
          <Link
            href="/contact"
            className="btn btn-outline btn-lg"
          >
            <Search className="w-5 h-5" /> CONTACT US
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-muted text-sm mb-4">Popular sections</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center text-sm">
            {[
              { label: "Experiences", href: "/experiences" },
              { label: "Impact", href: "/impact" },
              { label: "Community", href: "/community" },
              { label: "Resources", href: "/resources" },
              { label: "Speakers", href: "/speakers" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1 text-primary font-semibold hover:text-primary-hover transition-colors"
              >
                {link.label} <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
