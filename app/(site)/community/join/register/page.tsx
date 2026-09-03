import type { Metadata } from "next";
import Link from "next/link";

import SiteForm from "@/components/forms/SiteForm";

export const metadata: Metadata = {
  title: "Membership Registration | Black in Rehab Foundation",
  description:
    "Join thousands of rehabilitation professionals leading with purpose. Student, professional and ally memberships available.",
};

const TIER_LABELS: Record<string, string> = {
  student: "Student Member (Free)",
  professional: "Professional Member ($75/year)",
  ally: "Ally / Supporter ($50/year)",
};

const VALID_TIERS = Object.keys(TIER_LABELS);

/**
 * The membership tier can be pre-selected from the pricing page via `?tier=`.
 * Read on the server from the awaited `searchParams` — Next 16 makes these
 * async — which lets the page stay a server component. Previously this needed
 * `useSearchParams`, a `"use client"` boundary and a Suspense wrapper.
 */
export default async function JoinRegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ tier?: string }>;
}) {
  const { tier } = await searchParams;
  const defaultTier = tier && VALID_TIERS.includes(tier) ? tier : "";

  return (
    <div className="bg-background min-h-screen">
      <section className="section bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/community/join" className="hover:text-primary-hover">Join</Link>
            <span>/</span>
            <span className="text-foreground">Register</span>
          </div>
          <h1 className="display-2 text-foreground mb-4">
            Membership Registration
          </h1>
          <p className="text-muted">
            Join thousands of rehabilitation professionals leading with purpose.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <SiteForm
            formType="membership"
            submitLabel="COMPLETE REGISTRATION"
            success={{
              title: "Welcome to the Movement!",
              message:
                "Your membership application has been received. Check your email for confirmation and next steps to access member resources.",
              backHref: "/community",
              backLabel: "Explore the Community",
            }}
          >
            <div>
              <label htmlFor="membershipType" className="block text-sm font-semibold text-foreground mb-2">Membership Type *</label>
              <select id="membershipType" name="membershipType" required defaultValue={defaultTier} className="contact-input w-full bg-surface rounded-xl px-4 py-3">
                <option value="">Select membership type</option>
                <option value="student">{TIER_LABELS.student}</option>
                <option value="professional">{TIER_LABELS.professional}</option>
                <option value="ally">{TIER_LABELS.ally}</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-foreground mb-2">First Name *</label>
                <input id="firstName" name="firstName" type="text" required autoComplete="given-name" className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-foreground mb-2">Last Name *</label>
                <input id="lastName" name="lastName" type="text" required autoComplete="family-name" className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
              <input id="email" name="email" type="email" required autoComplete="email" className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-semibold text-foreground mb-2">City &amp; State / Country *</label>
              <input id="location" name="location" type="text" required className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
            </div>
            <div>
              <label htmlFor="profession" className="block text-sm font-semibold text-foreground mb-2">Profession / Program</label>
              <select id="profession" name="profession" className="contact-input w-full bg-surface rounded-xl px-4 py-3">
                <option value="">Select if applicable</option>
                <option value="pt">Physical Therapy</option>
                <option value="ot">Occupational Therapy</option>
                <option value="slp">Speech-Language Pathology</option>
                <option value="student-pt">PT Student</option>
                <option value="student-ot">OT Student</option>
                <option value="student-slp">SLP Student</option>
                <option value="other">Other / Ally</option>
              </select>
            </div>
            <div>
              <label htmlFor="referralSource" className="block text-sm font-semibold text-foreground mb-2">How did you hear about us?</label>
              <input id="referralSource" name="referralSource" type="text" className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
            </div>
          </SiteForm>
        </div>
      </section>
    </div>
  );
}
