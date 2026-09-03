"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

import { submitForm, type SubmitState } from "@/app/actions/submit-form";

/**
 * Wraps a form so it actually posts somewhere.
 *
 * Each page keeps its own fields as `children`; this supplies the submit
 * button, pending state, error display and the confirmation screen — so the
 * six forms behave identically without repeating the plumbing six times.
 *
 * The confirmation deliberately renders only after the server has stored the
 * submission. The previous implementation flipped a local `submitted` flag on
 * click, which showed a thank-you for data that went nowhere.
 */

type SuccessProps = {
  title: string;
  message: string;
  backHref?: string;
  backLabel?: string;
};

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn btn-primary btn-lg group disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? "SENDING…" : label}
      {!pending && <ArrowRight className="w-5 h-5" />}
    </button>
  );
}

export default function SiteForm({
  formType,
  children,
  submitLabel = "SUBMIT",
  success,
  className = "space-y-6",
}: {
  formType: string;
  children: React.ReactNode;
  submitLabel?: string;
  success: SuccessProps;
  className?: string;
}) {
  const [state, formAction] = useActionState<SubmitState | null, FormData>(
    submitForm,
    null,
  );

  if (state?.ok) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
          {success.title}
        </h2>
        <p className="text-muted mb-8 max-w-lg mx-auto">{success.message}</p>
        {success.backHref && (
          <Link
            href={success.backHref}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover"
          >
            {success.backLabel ?? "Back"} <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    );
  }

  return (
    <form action={formAction} className={className} noValidate>
      <input type="hidden" name="formType" value={formType} />

      {/* Honeypot. Hidden from people, tempting to bots; a filled value is
          silently discarded server-side. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this field empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {children}

      {state && !state.ok && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3"
        >
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="text-foreground font-semibold">{state.message}</p>
            {state.fieldErrors && (
              <ul className="text-muted mt-1 list-disc pl-4">
                {Object.entries(state.fieldErrors).map(([field, error]) => (
                  <li key={field}>{error}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      <SubmitButton label={submitLabel} />
    </form>
  );
}
