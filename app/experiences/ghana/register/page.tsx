"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function GhanaRegisterPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-lg text-center">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Application Received!</h1>
          <p className="text-muted mb-8">
            Thank you for applying to the Ghana Global Experience. Our team will review your application and follow up within 5–7 business days.
          </p>
          <Link href="/experiences/ghana" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover">
            Back to Ghana Experience <ArrowRight className="w-4 h-4" />
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
            <Link href="/experiences/ghana" className="hover:text-primary-hover">Ghana Experience</Link>
            <span>/</span>
            <span className="text-foreground">Apply</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Ghana Global Experience Application</h1>
          <p className="text-muted">Oct 10–17, 2025 · Accra, Ghana</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <form
            className="space-y-6"
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          >
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
              <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
              <input type="tel" required className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Professional Status *</label>
              <select required className="contact-input w-full bg-surface rounded-xl px-4 py-3">
                <option value="">Select status</option>
                <option value="licensed">Licensed Professional (PT/OT/SLP)</option>
                <option value="student">Graduate Student</option>
                <option value="other">Other Healthcare Professional</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Credentials & Institution</label>
              <input type="text" placeholder="e.g. DPT, University of X" className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Why do you want to join this experience? *</label>
              <textarea rows={5} required className="contact-input w-full bg-surface rounded-xl px-4 py-3 resize-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Previous International Service Experience</label>
              <textarea rows={3} className="contact-input w-full bg-surface rounded-xl px-4 py-3 resize-none" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-background font-bold py-4 px-8 rounded-full transition-colors text-lg">
              SUBMIT APPLICATION <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
