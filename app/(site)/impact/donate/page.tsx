import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";

import DonateWidget from "@/components/donate/DonateWidget";
import PageHero from "@/components/ui/PageHero";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import { NSA_WISHLIST_URL } from "@/components/sections/GiftBand";
import { getSiteSettings } from "@/lib/cms";
import { DONATE_URL } from "@/lib/donate";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Donate | Black in Rehab Foundation",
  description:
    "Your gift funds scholarships, global experiences, and programs that change lives for Black rehabilitation professionals and the communities they serve.",
};

const IMPACT_TIERS = [
  { amount: "$25", impact: "Provides educational resources for one student." },
  { amount: "$100", impact: "Funds a student's conference registration." },
  { amount: "$500", impact: "Contributes to a scholarship award." },
];

/**
 * Donation page.
 *
 * A server component so the processor URL and tax details come from Site
 * Settings. `DonateWidget` embeds the processor's own form where it can, so
 * there is no amount picker of ours to keep in step with theirs — see the note
 * in that file for what went wrong when there was.
 */
export default async function DonatePage() {
  const settings = await getSiteSettings();
  const contactEmail = settings?.email || "info@blackinrehab.com";
  const status = settings?.nonprofitStatus || "501(c)(3)";
  const orgName = settings?.organisationName || "Black in Rehab";

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/impact/donate"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "BIR CARES", href: "/impact" },
          { label: "Donate" },
        ]}
        title="Make an"
        highlight="Impact"
        description="Your generosity funds scholarships, global experiences, and programs that change lives. Every gift — large or small — moves our mission forward."
        image={PHOTOS.impactBackpacks}
      />

      {/* Donation form first — on a phone it is the first thing under the
          hero, and on a desktop the photo and impact amounts sit beside it
          rather than in front of it. */}
      <section className="section pt-12 md:pt-16 bg-background">
        <div className="container mx-auto grid grid-cols-1 items-start gap-12 px-4 md:px-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <DonateWidget
              donationUrl={settings?.donationUrl || DONATE_URL}
              contactEmail={contactEmail}
            />

            <p className="text-muted text-xs text-center mt-6">
              {orgName} is a registered {status} nonprofit. All donations are tax-deductible.
              {settings?.ein ? ` EIN ${settings.ein}.` : ""} You will receive a receipt via email.
            </p>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="img-filler aspect-4/3 overflow-hidden rounded-[var(--radius-panel)] shadow-float ring-1 ring-primary/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTOS.impactHandsUp}
                alt="Children with their hands raised at a Black in Rehab event"
                loading="lazy"
                className="photo h-full w-full object-cover"
              />
            </div>

            <div className="mt-8 flex items-center gap-3">
              <Heart className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 className="font-serif text-2xl font-bold text-foreground">What Your Gift Does</h2>
            </div>
            <ul className="mt-5 space-y-3">
              {IMPACT_TIERS.map((item) => (
                <li key={item.amount} className="card flex items-center gap-5 p-5">
                  <p className="w-16 shrink-0 font-serif text-2xl font-bold text-primary">{item.amount}</p>
                  <p className="text-sm text-muted">{item.impact}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <PhotoSplitBand image={PHOTOS.impactVolunteersKids} imageSide="left">
        <p className="eyebrow eyebrow-on-dark mb-5">Other Ways to Give</p>
        <h2 className="display-2 text-white">Give What’s Needed</h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
          Contribute supplies, resources, or professional services aligned with confirmed initiative needs.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href={NSA_WISHLIST_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            SHOP THE NSA WISHLIST <ArrowUpRight className="h-5 w-5" />
          </a>
          <Link href="/get-involved" className="btn btn-on-dark btn-lg">
            Other Ways to Help
          </Link>
        </div>
      </PhotoSplitBand>
    </div>
  );
}
