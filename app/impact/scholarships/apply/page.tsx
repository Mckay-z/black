"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ScholarshipApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-lg text-center">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Application Submitted!</h1>
          <p className="text-muted mb-8">
            Thank you for applying for a Black in Rehab scholarship. Our review committee will evaluate your application and notify you by email before the deadline.
          </p>
          <Link href="/impact/scholarships" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover">
            Back to Scholarships <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <section className="py-16 md:py-24 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/impact/scholarships" className="hover:text-primary-hover">Scholarships</Link>
            <span>/</span>
            <span className="text-foreground">Apply</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Scholarship Application</h1>
          <p className="text-muted">Complete all required fields. Applications are reviewed on a rolling basis.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <form
            className="space-y-6"
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          >
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Scholarship *</label>
              <select required className="contact-input w-full bg-surface rounded-xl px-4 py-3">
                <option value="">Select scholarship</option>
                <option value="general">Black in Rehab General Scholarship</option>
                <option value="leadership">Leadership Excellence Award</option>
                <option value="community">Community Impact Scholar</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">First Name *</label>
                <input type="text" required className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Last Name *</label>
                <input type="text" required className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
              <input type="email" required className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">University / Program *</label>
              <input type="text" required className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Discipline *</label>
                <select required className="contact-input w-full bg-surface rounded-xl px-4 py-3">
                  <option value="">Select</option>
                  <option value="pt">Physical Therapy</option>
                  <option value="ot">Occupational Therapy</option>
                  <option value="slp">Speech-Language Pathology</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Current GPA *</label>
                <input type="text" required placeholder="e.g. 3.5" className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Personal Statement (500–750 words) *</label>
              <textarea
                rows={8}
                required
                placeholder="Tell us about your journey, goals, and how this scholarship will impact your education and community..."
                className="contact-input w-full bg-surface rounded-xl px-4 py-3 resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Letter of Recommendation #1 (PDF)</label>
              <input type="file" accept=".pdf" className="contact-input w-full bg-surface rounded-xl px-4 py-3 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-primary file:text-on-primary file:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Letter of Recommendation #2 (PDF)</label>
              <input type="file" accept=".pdf" className="contact-input w-full bg-surface rounded-xl px-4 py-3 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-primary file:text-on-primary file:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Proof of Enrollment (PDF)</label>
              <input type="file" accept=".pdf" className="contact-input w-full bg-surface rounded-xl px-4 py-3 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-primary file:text-on-primary file:text-sm" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors text-lg">
              SUBMIT APPLICATION <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
