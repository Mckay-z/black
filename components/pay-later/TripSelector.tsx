"use client";

import { Suspense, useId, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Mail } from "lucide-react";

import { BOOKING_TEAM, TRIP_PACKAGES, findPackage } from "@/lib/pay-later";

/**
 * "Return to your trip": pick a trip or package, go to its booking form.
 *
 * A trip page links here with `?trip=` (see `payLaterHref`), and that choice
 * is preselected so a traveller who left to read about financing lands back
 * on the same form. A package with no booking link yet falls back to an email
 * to the booking team rather than a guessed URL.
 */
function Selector({ initial }: { initial?: string }) {
  const id = useId();
  const [selected, setSelected] = useState(initial ?? "");
  const pkg = TRIP_PACKAGES.find((entry) => entry.id === selected);

  const action = pkg?.bookingUrl
    ? { href: pkg.bookingUrl, label: "RETURN TO MY TRIP", external: true }
    : pkg
      ? {
          href: `mailto:${BOOKING_TEAM.email}?subject=${encodeURIComponent(`Booking: ${pkg.label}`)}`,
          label: `EMAIL ${BOOKING_TEAM.name.toUpperCase()} TO BOOK`,
          external: false,
        }
      : undefined;

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={id} className="sr-only">
          Select your trip or package
        </label>
        <select
          id={id}
          value={selected}
          onChange={(event) => setSelected(event.target.value)}
          className="contact-input min-h-12 flex-1 rounded-full border border-border bg-surface px-5 text-foreground"
        >
          <option value="">Select your trip / package</option>
          {TRIP_PACKAGES.map((entry) => (
            <option key={entry.id} value={entry.id}>
              {entry.label}
            </option>
          ))}
        </select>

        {action ? (
          <Link
            href={action.href}
            {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="btn btn-primary group shrink-0"
          >
            {action.external ? null : <Mail className="h-4 w-4" aria-hidden="true" />}
            {action.label}
            <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
          </Link>
        ) : (
          <button type="button" disabled className="btn btn-primary shrink-0 opacity-50">
            RETURN TO MY TRIP <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted" aria-live="polite">
        {pkg && !pkg.bookingUrl
          ? `The booking form for this package is not online yet — email ${BOOKING_TEAM.name} and they will send it to you.`
          : "For Ghana, choose the full retreat or the Accra-only package. Ghana bookings are for approved applicants."}
        {pkg && (
          <>
            {" "}
            <Link href={pkg.tripHref} className="font-semibold text-primary hover:text-primary-hover">
              View the trip page
            </Link>
            .
          </>
        )}
      </p>
    </div>
  );
}

/** Reads `?trip=` — under Suspense so the rest of the page can stay static. */
function SelectorFromUrl() {
  const trip = useSearchParams().get("trip");
  return <Selector initial={findPackage(trip)?.id} />;
}

export default function TripSelector() {
  return (
    <Suspense fallback={<Selector />}>
      <SelectorFromUrl />
    </Suspense>
  );
}
