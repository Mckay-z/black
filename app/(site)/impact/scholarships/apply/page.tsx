import type { Metadata } from "next";
import Link from "next/link";

import SiteForm from "@/components/forms/SiteForm";

export const metadata: Metadata = {
  title: "Scholarship Application | Black in Rehab Foundation",
  description:
    "Apply for a Black in Rehab scholarship supporting Black students in physical therapy, occupational therapy and speech-language pathology.",
};

const FILE_INPUT_CLASS =
  "contact-input w-full bg-surface rounded-xl px-4 py-3 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-primary file:text-on-primary file:text-sm";

export default function ScholarshipApplyPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="section bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/impact/scholarships" className="hover:text-primary-hover">Scholarships</Link>
            <span>/</span>
            <span className="text-foreground">Apply</span>
          </div>
          <h1 className="display-2 text-foreground mb-4">
            Scholarship Application
          </h1>
          <p className="text-muted">
            Applications are reviewed by our scholarship committee. Attach documents as PDFs, up to 10MB each.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <SiteForm
            formType="scholarship"
            submitLabel="SUBMIT APPLICATION"
            success={{
              title: "Application Received!",
              message:
                "Thank you for applying. Our scholarship committee reviews every application and will be in touch about next steps.",
              backHref: "/impact/scholarships",
              backLabel: "Back to Scholarships",
            }}
          >
            <div>
              <label htmlFor="scholarship" className="block text-sm font-semibold text-foreground mb-2">Scholarship *</label>
              <select id="scholarship" name="scholarship" required className="contact-input w-full bg-surface rounded-xl px-4 py-3">
                <option value="">Select scholarship</option>
                <option value="general">Black in Rehab General Scholarship</option>
                <option value="leadership">Leadership Excellence Award</option>
                <option value="community">Community Impact Scholar</option>
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
              <label htmlFor="university" className="block text-sm font-semibold text-foreground mb-2">University / Program *</label>
              <input id="university" name="university" type="text" required className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="discipline" className="block text-sm font-semibold text-foreground mb-2">Discipline *</label>
                <select id="discipline" name="discipline" required className="contact-input w-full bg-surface rounded-xl px-4 py-3">
                  <option value="">Select</option>
                  <option value="pt">Physical Therapy</option>
                  <option value="ot">Occupational Therapy</option>
                  <option value="slp">Speech-Language Pathology</option>
                </select>
              </div>
              <div>
                <label htmlFor="gpa" className="block text-sm font-semibold text-foreground mb-2">Current GPA *</label>
                <input id="gpa" name="gpa" type="text" required placeholder="e.g. 3.5" className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Personal Statement (500–750 words) *</label>
              <textarea
                id="message"
                name="message"
                rows={8}
                required
                placeholder="Tell us about your journey, goals, and how this scholarship will impact your education and community..."
                className="contact-input w-full bg-surface rounded-xl px-4 py-3 resize-none"
              />
            </div>
            <div>
              <label htmlFor="recommendation1" className="block text-sm font-semibold text-foreground mb-2">Letter of Recommendation #1 (PDF)</label>
              <input id="recommendation1" name="recommendation1" type="file" accept="application/pdf" className={FILE_INPUT_CLASS} />
            </div>
            <div>
              <label htmlFor="recommendation2" className="block text-sm font-semibold text-foreground mb-2">Letter of Recommendation #2 (PDF)</label>
              <input id="recommendation2" name="recommendation2" type="file" accept="application/pdf" className={FILE_INPUT_CLASS} />
            </div>
            <div>
              <label htmlFor="proofOfEnrollment" className="block text-sm font-semibold text-foreground mb-2">Proof of Enrollment (PDF)</label>
              <input id="proofOfEnrollment" name="proofOfEnrollment" type="file" accept="application/pdf" className={FILE_INPUT_CLASS} />
            </div>
          </SiteForm>
        </div>
      </section>
    </div>
  );
}
