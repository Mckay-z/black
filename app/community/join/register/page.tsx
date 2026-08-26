"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const TIER_LABELS: Record<string, string> = {
  student: "Student Member (Free)",
  professional: "Professional Member ($75/year)",
  ally: "Ally / Supporter ($50/year)",
};

function RegisterForm() {
  const searchParams = useSearchParams();
  const tierParam = searchParams.get("tier") || "";
  const [submitted, setSubmitted] = useState(false);
  const defaultTier = ["student", "professional", "ally"].includes(tierParam) ? tierParam : "";

  if (submitted) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-lg text-center">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Welcome to the Movement!</h1>
          <p className="text-muted mb-8">
            Your membership application has been received. Check your email for confirmation and next steps to access member resources.
          </p>
          <Link href="/community" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover">
            Explore the Community <ArrowRight className="w-4 h-4" />
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
            <Link href="/community/join" className="hover:text-primary-hover">Join</Link>
            <span>/</span>
            <span className="text-foreground">Register</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Membership Registration</h1>
          <p className="text-muted">Join thousands of rehabilitation professionals leading with purpose.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <form
            className="space-y-6"
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          >
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Membership Type *</label>
              <select required defaultValue={defaultTier} className="contact-input w-full bg-surface rounded-xl px-4 py-3">
                <option value="">Select membership type</option>
                <option value="student">{TIER_LABELS.student}</option>
                <option value="professional">{TIER_LABELS.professional}</option>
                <option value="ally">{TIER_LABELS.ally}</option>
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
              <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
              <input type="tel" className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">City & State / Country *</label>
              <input type="text" required className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Profession / Program</label>
              <select className="contact-input w-full bg-surface rounded-xl px-4 py-3">
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
              <label className="block text-sm font-semibold text-foreground mb-2">How did you hear about us?</label>
              <input type="text" className="contact-input w-full bg-surface rounded-xl px-4 py-3" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors text-lg">
              COMPLETE REGISTRATION <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default function JoinRegisterPage() {
  return (
    <Suspense fallback={<div className="bg-background min-h-screen py-24 text-center text-muted">Loading...</div>}>
      <RegisterForm />
    </Suspense>
  );
}
