import type { Metadata } from "next";
import Link from "next/link";

import SiteForm from "@/components/forms/SiteForm";

export const metadata: Metadata = {
  title: "Ghana Global Experience Application | Black in Rehab Foundation",
  description:
    "Apply to join the Ghana Global Experience — service, cultural immersion and professional development in Accra.",
};

export default function GhanaRegisterPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="section bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/experiences/ghana" className="hover:text-primary-hover">Ghana Experience</Link>
            <span>/</span>
            <span className="text-foreground">Apply</span>
          </div>
          <h1 className="display-2 text-foreground mb-4">
            Ghana Global Experience Application
          </h1>
          <p className="text-muted">Oct 10–17, 2025 · Accra, Ghana</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <SiteForm
            formType="ghana"
            submitLabel="SUBMIT APPLICATION"
            success={{
              title: "Application Received!",
              message:
                "Thank you for applying to the Ghana Global Experience. Our team will review your application and follow up within 5–7 business days.",
              backHref: "/experiences/ghana",
              backLabel: "Back to Ghana Experience",
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
              <label htmlFor="professionalStatus" className="block text-sm font-semibold text-foreground mb-2">Professional Status *</label>
              <select id="professionalStatus" name="professionalStatus" required className="contact-input w-full bg-surface rounded-xl px-4 py-3">
                <option value="">Select status</option>
                <option value="licensed">Licensed Professional (PT/OT/SLP)</option>
                <option value="student">Graduate Student</option>
                <option value="other">Other Healthcare Professional</option>
              </select>
            </div>
            <div>
              <label htmlFor="credentials" className="block text-sm font-semibold text-foreground mb-2">Credentials &amp; Institution</label>
              <input id="credentials" name="credentials" type="text" placeholder="e.g. DPT, University of X" className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Why do you want to join this experience? *</label>
              <textarea id="message" name="message" rows={5} required className="contact-input w-full bg-surface rounded-xl px-4 py-3 resize-none" />
            </div>
            <div>
              <label htmlFor="priorExperience" className="block text-sm font-semibold text-foreground mb-2">Previous International Service Experience</label>
              <textarea id="priorExperience" name="priorExperience" rows={3} className="contact-input w-full bg-surface rounded-xl px-4 py-3 resize-none" />
            </div>
          </SiteForm>
        </div>
      </section>
    </div>
  );
}
