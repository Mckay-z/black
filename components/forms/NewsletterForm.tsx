"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { submitForm, type SubmitState } from "@/app/actions/submit-form";

/**
 * Footer newsletter signup.
 *
 * Separate from `SiteForm` because it lives in a narrow footer column and
 * needs its own compact layout, not the full-width button and error panel.
 * It posts through the same server action, so signups land in the same inbox
 * as every other form.
 *
 * Previously this form had no handler at all — pressing Subscribe reloaded
 * the page and the address was lost.
 */
function SubscribeButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-secondary hover:bg-secondary-hover text-white rounded-md px-4 py-2 text-sm font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? "Subscribing…" : "Subscribe"}
    </button>
  );
}

export default function NewsletterForm() {
  const [state, formAction] = useActionState<SubmitState | null, FormData>(
    submitForm,
    null,
  );

  if (state?.ok) {
    return (
      <p className="text-sm text-primary font-medium" role="status">
        You&apos;re subscribed — thank you.
      </p>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-3" noValidate>
      <input type="hidden" name="formType" value="newsletter" />

      {/* Honeypot — see SiteForm for the rationale. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this field empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Enter your email"
        className="bg-background border border-border rounded-md px-4 py-2 text-sm transition-colors newsletter-input focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <SubscribeButton />

      {state && !state.ok && (
        <p className="text-xs text-red-500" role="alert">
          {state.fieldErrors?.email ?? state.message}
        </p>
      )}
    </form>
  );
}
