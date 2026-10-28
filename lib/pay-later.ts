import { GHANA_BOOKING_URL } from "@/lib/trips";

/**
 * Content for the Buy Now, Pay Later page (`/buy-now-pay-later`).
 *
 * Kept as data so the page, the trip selector and the trip pages that link
 * here all agree on the same provider list and the same packages.
 *
 * WORDING. The client asked that nothing here imply a partnership with any
 * provider or guarantee that a provider's card will be accepted. Vakae Luxe
 * handles bookings and payments through TravelJoy, and the client is still
 * confirming which methods that checkout accepts — so every provider step
 * ends in "confirm with Vakae Luxe", never "pay with". Flex Pay was left off
 * at the client's request.
 */

export const PAY_LATER_PATH = "/buy-now-pay-later";

/** Vakae Luxe — the foundation's booking team. */
export const BOOKING_TEAM = {
  name: "Vakae Luxe",
  email: "hello@vakaeluxe.com",
};

/** A link from a trip page to this one, keeping the trip it came from. */
export function payLaterHref(packageOrTrip: string) {
  return `${PAY_LATER_PATH}?trip=${encodeURIComponent(packageOrTrip)}#return-to-trip`;
}

export type FinancingProvider = {
  name: string;
  /** Official site. Opens in a new tab. */
  url: string;
  summary: string;
  steps: string[];
  /** The short disclosure beside the button. */
  disclosure: string;
};

export const PROVIDERS: FinancingProvider[] = [
  {
    name: "Affirm",
    url: "https://www.affirm.com/",
    summary: "Explore payment plans for eligible purchases.",
    steps: [
      "Visit Affirm or open the Affirm app.",
      "Review your eligibility and the terms on offer.",
      "If approved, use only a payment method Vakae Luxe has confirmed works with your booking.",
    ],
    disclosure: "Interest or a down payment may apply.",
  },
  {
    name: "Klarna",
    url: "https://www.klarna.com/us/",
    summary: "Review current payment options directly with Klarna.",
    steps: [
      "Visit Klarna or open the Klarna app.",
      "Check whether the purchase is eligible and review the terms.",
      "Confirm your payment method with both Klarna and Vakae Luxe before booking.",
    ],
    disclosure: "Availability and booking acceptance vary.",
  },
  {
    name: "Zip",
    url: "https://zip.co/us",
    summary: "Explore app-based installments for eligible purchases.",
    steps: [
      "Open the Zip app.",
      "Review eligibility, fees and the terms available to you.",
      "Use an approved virtual card only if your booking checkout accepts it.",
    ],
    disclosure: "Each purchase is subject to approval.",
  },
];

export type TripPackage = {
  /** Used in `?trip=` — see `payLaterHref`. */
  id: string;
  /** The `lib/trips.ts` slug, so `?trip=ghana` finds the Ghana packages. */
  trip: string;
  label: string;
  /** The trip's page on this site. */
  tripHref: string;
  /**
   * The TravelJoy booking form. Absent where Vakae Luxe has not supplied one
   * yet — the selector then offers an email to the booking team instead of
   * guessing at a link.
   */
  bookingUrl?: string;
};

/**
 * Packages a traveller can return to. Only trips with booking open belong
 * here: the 6th Annual Conference & Retreat is not listed until its booking
 * link exists.
 *
 * TODO(client): the Accra-only package needs its own TravelJoy link.
 */
export const TRIP_PACKAGES: TripPackage[] = [
  {
    id: "ghana-full",
    trip: "ghana",
    label: "Ghana: Sankofa Return — Full retreat",
    tripHref: "/trips/ghana",
    bookingUrl: GHANA_BOOKING_URL,
  },
  {
    id: "ghana-accra",
    trip: "ghana",
    label: "Ghana: Sankofa Return — Accra-only package",
    tripHref: "/trips/ghana",
  },
];

/** The package a `?trip=` value names — by package id, or a trip's first. */
export function findPackage(value: string | null | undefined) {
  if (!value) return undefined;
  return (
    TRIP_PACKAGES.find((pkg) => pkg.id === value) ??
    TRIP_PACKAGES.find((pkg) => pkg.trip === value)
  );
}
