import type { Metadata } from "next";
import Link from "next/link";
import { Heart } from "lucide-react";

import DonateWidget from "@/components/donate/DonateWidget";
import { getSiteSettings } from "@/lib/cms";
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
 * Settings; the interactive amount picker is the client island inside it.
 */
export default async function DonatePage() {
  const settings = await getSiteSettings();
  const contactEmail = settings?.email || "info@blackinrehab.org";
  const status = settings?.nonprofitStatus || "501(c)(3)";
  const orgName = settings?.organisationName || "Black in Rehab";

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="section-dark relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-secondary">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${PHOTOS.impactBackpacks})` }}
        />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6 justify-center">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/impact" className="hover:text-primary-hover">Impact</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">Donate</span>
          </div>
          <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Make an <span className="text-primary">Impact</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Your generosity funds scholarships, global experiences, and programs that change lives. Every gift — large or small — moves our mission forward.
          </p>
        </div>
      </section>

      {/* Donation form */}
      <section className="section pt-12 md:pt-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <DonateWidget
            donationUrl={settings?.donationUrl}
            contactEmail={contactEmail}
          />

          <p className="text-muted text-xs text-center mt-6">
            {orgName} is a registered {status} nonprofit. All donations are tax-deductible.
            {settings?.ein ? ` EIN ${settings.ein}.` : ""} You will receive a receipt via email.
          </p>

          {/* Impact breakdown */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {IMPACT_TIERS.map((item) => (
              <div
                key={item.amount}
                className="card p-6 text-center"
              >
                <p className="text-primary text-2xl font-serif font-bold mb-3">{item.amount}</p>
                <p className="text-muted text-sm">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
