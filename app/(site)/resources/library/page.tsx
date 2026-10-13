import Link from "next/link";
import Script from "next/script";
import BookCallout from "@/components/ui/BookCallout";
import OfferingsList from "@/components/ui/OfferingsList";
import { CHAUNTEL_OFFERINGS, NANCY_BOOK } from "@/lib/fallback-content";
import { ArrowRight, FileText } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import { PHOTOS } from "@/lib/images";

export default function ResourceLibraryPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/resources/library"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Resource Library" },
        ]}
        title="Resource"
        highlight="Library"
        // Describes what is actually on the page. The previous version
        // promised research papers, webinar recordings and toolkits above a
        // library holding one title.
        description="Practical guides for Black rehabilitation professionals and students. We are building this library out — here is what is available so far."
        image={PHOTOS.conferenceTableTalk}
        imagePosition="center 40%"
      />

      {/* Payhip listing.

          The client supplied Payhip's own embed snippet; `embed-page.js` finds
          the div by its `payhip-embed-page` class and renders the listing into
          it. Loaded lazily because it is below the fold and third-party.

          Attribution here is deliberate. This is a single paid title sold
          through LovelyyOT — Nancy's own store — not a Foundation product, and
          a visitor on a 501(c)(3) website should not be left assuming a
          purchase here is a gift to the charity. */}
      <section id="clinical-guides" className="section scroll-mt-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,1fr)_16rem] lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div className="max-w-2xl">
              <p className="eyebrow mb-5">From Our Founder</p>
              <h2 className="display-2 text-foreground">Clinical Guides</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Nancy Yamoah publishes practical guides for rehabilitation
                professionals through LovelyyOT, her own store. Purchases are handled
                by Payhip and are separate from donations to the Foundation.
              </p>
            </div>
            <div className="img-filler hidden aspect-4/5 overflow-hidden rounded-t-[999px] rounded-b-[var(--radius-panel)] shadow-float ring-1 ring-primary/30 md:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTOS.founderNancy}
                alt="Nancy Yamoah"
                loading="lazy"
                className="photo h-full w-full object-cover"
              />
            </div>
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

      {/* Dr. Altidor's parent resources.

          Same attribution logic as the section above: these are hers, sold
          through OT with Faith, and the lede says so before anyone clicks a
          button on a charity's website. */}
      <section id="parents" className="section scroll-mt-24 border-t border-border bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 grid grid-cols-1 items-center gap-10 md:grid-cols-[16rem_minmax(0,1fr)] lg:grid-cols-[20rem_minmax(0,1fr)]">
            <div className="img-filler hidden aspect-4/5 overflow-hidden rounded-t-[999px] rounded-b-[var(--radius-panel)] shadow-float ring-1 ring-primary/30 md:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTOS.teamChauntel}
                alt="Dr. Chauntel Altidor"
                loading="lazy"
                className="photo h-full w-full object-cover object-top"
              />
            </div>
            <div className="max-w-2xl">
              <p className="eyebrow mb-5">From Our Co-Founder</p>
              <h2 className="display-2 text-foreground">For Parents & Families</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Dr. Chauntel Altidor supports parents of neurodivergent children
                through OT with Faith, her own practice. Bookings and purchases are
                handled there and are separate from donations to the Foundation.
              </p>
            </div>
          </div>

          <OfferingsList offerings={CHAUNTEL_OFFERINGS} />
        </div>
      </section>

      {/* Awaiting the client's own resources. Deliberately an empty state
          rather than sample cards: the previous version listed nine invented
          titles behind "Download Free" buttons that were wired to nothing. */}
      <section className="section border-t border-border bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="card mx-auto max-w-xl p-12 text-center">
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
      <PhotoSplitBand image={PHOTOS.retreatGroupBlazers} imageSide="left">
        <p className="eyebrow eyebrow-on-dark mb-5">Stay in the Loop</p>
        <h2 className="display-2 text-white">Be First to Know</h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
          New guides, templates, and recordings are published as they are ready.
          Get involved with the community to hear when they land.
        </p>
        <Link href="/get-involved" className="btn btn-primary btn-lg group mt-9">
          GET INVOLVED <ArrowRight className="btn-arrow h-5 w-5" />
        </Link>
      </PhotoSplitBand>
    </div>
  );
}
