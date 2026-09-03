import type { Metadata } from "next";
import Link from "next/link";

import SiteForm from "@/components/forms/SiteForm";

export const metadata: Metadata = {
  title: "Conference Registration | Black in Rehab Foundation",
  description:
    "Register for the Black in Rehab Annual Conference — three days of workshops, keynotes and community.",
};

export default function ConferenceRegisterPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="section bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/experiences/conference" className="hover:text-primary-hover">Conference</Link>
            <span>/</span>
            <span className="text-foreground">Register</span>
          </div>
          <h1 className="display-2 text-foreground mb-4">
            Conference Registration
          </h1>
          <p className="text-muted">June 20–22, 2025 · New Orleans, LA</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <SiteForm
            formType="conference"
            submitLabel="SUBMIT REGISTRATION"
            success={{
              title: "Registration Received!",
              message:
                "Thank you for registering for the Black in Rehab Annual Conference. You will receive a confirmation email with next steps shortly.",
              backHref: "/experiences/conference",
              backLabel: "Back to Conference Details",
            }}
          >
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
              <label htmlFor="registrationType" className="block text-sm font-semibold text-foreground mb-2">Registration Type *</label>
              <select id="registrationType" name="registrationType" required className="contact-input w-full bg-surface rounded-xl px-4 py-3">
                <option value="">Select type</option>
                <option value="professional">Professional — $299 (Early Bird)</option>
                <option value="student">Student — $149 (Early Bird)</option>
                <option value="ally">Ally / Supporter — $199</option>
              </select>
            </div>
            <div>
              <label htmlFor="credentials" className="block text-sm font-semibold text-foreground mb-2">Credentials / Program</label>
              <input id="credentials" name="credentials" type="text" placeholder="e.g. PT, DPT or OT Student" className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
            </div>
            <div>
              <label htmlFor="accessibilityNeeds" className="block text-sm font-semibold text-foreground mb-2">Dietary Restrictions or Accessibility Needs</label>
              <textarea id="accessibilityNeeds" name="accessibilityNeeds" rows={3} className="contact-input w-full bg-surface rounded-xl px-4 py-3 resize-none" />
            </div>
          </SiteForm>
        </div>
      </section>
    </div>
  );
}
