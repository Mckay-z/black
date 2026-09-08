import Link from "next/link";
import Script from "next/script";
import BookCallout from "@/components/ui/BookCallout";
import { NANCY_BOOK } from "@/lib/fallback-content";
import { ArrowRight, FileText } from "lucide-react";

export default function ResourceLibraryPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-surface border-b border-border">
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
          {/* Describes what is actually on the page. The previous version
              promised research papers, webinar recordings and toolkits above a
              library holding one title. */}
          <p className="text-lg md:text-xl text-muted max-w-2xl">
            Practical guides for Black rehabilitation professionals and students.
            We are building this library out — here is what is available so far.
          </p>
        </div>
      </section>

      {/* Payhip listing.

          The client supplied Payhip's own embed snippet; `embed-page.js` finds
          the div by its `payhip-embed-page` class and renders the listing into
          it. Loaded lazily because it is below the fold and third-party.

          Attribution here is deliberate. This is a single paid title sold
          through LovelyyOT — Nancy's own store — not a Foundation product, and
          a visitor on a 501(c)(3) website should not be left assuming a
          purchase here is a gift to the charity. */}
      <section className="section pt-12 md:pt-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow mb-5">From Our Founder</p>
            <h2 className="display-2 text-foreground">Clinical Guides</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Nancy Yamoah publishes practical guides for rehabilitation
              professionals through LovelyyOT, her own store. Purchases are handled
              by Payhip and are separate from donations to the Foundation.
            </p>
          </div>

          {/* The cover and title, shown before the embed rather than after:
              this renders from our own assets, so the section still has a
              product in it if Payhip's script is blocked or slow. It is also
              the only route through in that case. */}
          <BookCallout {...NANCY_BOOK} eyebrow="Available Now" className="max-w-2xl" />

          <div className="payhip-embed-page mt-10" data-key="vSa6y" />
          <Script
            src="https://payhip.com/embed-page.js?v=24u68985"
            strategy="lazyOnload"
          />
        </div>
      </section>

      {/* Awaiting the client's own resources. Deliberately an empty state
          rather than sample cards: the previous version listed nine invented
          titles behind "Download Free" buttons that were wired to nothing. */}
      <section className="section border-t border-border bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="card card-sunken mx-auto max-w-xl p-12 text-center">
            <span className="icon-tile icon-tile-lg mx-auto mb-6">
              <FileText className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="font-serif text-2xl font-bold text-foreground">
              More resources on the way
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Guides, templates, and recordings are being prepared. In the meantime,
              everything published so far is available in the store above.
            </p>
            <Link href="/contact" className="link-arrow mt-8 justify-center">
              Suggest a resource
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA. Was "Unlock the Full Library — members get unlimited access to
          all resources, webinars, and tools", which described a members' area
          that does not exist. This offers the thing we can actually deliver:
          telling people when something new lands. */}
      <section className="section bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            Be First to Know
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            New guides, templates, and recordings are published as they are ready.
            Join the community and we will let you know when they land.
          </p>
          <Link href="/community/join" className="btn btn-primary btn-lg group">
            JOIN THE COMMUNITY <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
