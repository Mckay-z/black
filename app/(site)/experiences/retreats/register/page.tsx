import type { Metadata } from "next";
import Link from "next/link";

import SiteForm from "@/components/forms/SiteForm";

export const metadata: Metadata = {
  title: "Retreat Registration | Black in Rehab Foundation",
  description:
    "Register for a Black in Rehab wellness retreat — rest, restoration and community for rehabilitation professionals.",
};

export default function RetreatsRegisterPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="section bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/experiences/retreats" className="hover:text-primary-hover">Retreats</Link>
            <span>/</span>
            <span className="text-foreground">Register</span>
          </div>
          <h1 className="display-2 text-foreground mb-4">
            Retreat Registration
          </h1>
          <p className="text-muted">Wellness Retreat · Aug 15–18, 2025 · Jamaica</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <SiteForm
            formType="retreat"
            submitLabel="SUBMIT REGISTRATION"
            success={{
              title: "Registration Received!",
              message:
                "Thank you for your interest in our Wellness Retreat. Our team will contact you with payment details and preparation information.",
              backHref: "/experiences/retreats",
              backLabel: "Back to Retreat Details",
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
              <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
              <input id="phone" name="phone" type="tel" required autoComplete="tel" className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
            </div>
            <div>
              <label htmlFor="emergencyContact" className="block text-sm font-semibold text-foreground mb-2">Emergency Contact Name &amp; Phone *</label>
              <input id="emergencyContact" name="emergencyContact" type="text" required className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
            </div>
            <div>
              <label htmlFor="roomPreference" className="block text-sm font-semibold text-foreground mb-2">Room Preference</label>
              <select id="roomPreference" name="roomPreference" className="contact-input w-full bg-surface rounded-xl px-4 py-3">
                <option value="">Select preference</option>
                <option value="single">Single Occupancy (+$400)</option>
                <option value="double">Double Occupancy (Shared)</option>
              </select>
            </div>
            <div>
              <label htmlFor="medicalNotes" className="block text-sm font-semibold text-foreground mb-2">Medical Conditions or Dietary Restrictions</label>
              <textarea id="medicalNotes" name="medicalNotes" rows={4} className="contact-input w-full bg-surface rounded-xl px-4 py-3 resize-none" />
            </div>
          </SiteForm>
        </div>
      </section>
    </div>
  );
}
