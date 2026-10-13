import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarClock } from "lucide-react";

export const metadata: Metadata = {
  title: "Booking Coming Soon | 6th Annual Conference & Retreat | Black in Rehab Foundation",
  description:
    "Booking for the 6th Annual Black in Rehab Conference & Retreat in New Orleans is coming soon.",
  robots: { index: false },
};

/**
 * Booking is not open for the 6th Annual Conference & Retreat.
 *
 * This route used to hold a live registration form with ticket prices nobody
 * had confirmed. The client's revision asks for "Booking Coming Soon" and no
 * active booking link until one is supplied, so the form is gone rather than
 * left taking submissions for an event that cannot yet be booked. The URL
 * still resolves — an old link lands on an honest notice instead of a 404 —
 * and is kept out of search results.
 *
 * When booking opens, point the conference page's actions at the supplied
 * booking link; this route can then redirect there or be removed.
 */
export default function ConferenceRegisterPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="section bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/trips/conference" className="hover:text-primary-hover">
              6th Annual Conference &amp; Retreat
            </Link>
            <span>/</span>
            <span className="text-foreground">Booking</span>
          </div>
          <h1 className="display-2 text-foreground mb-4">Booking Coming Soon</h1>
          <p className="text-muted">June 17–20, 2027 · New Orleans, LA</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div className="card p-10 text-center">
            <CalendarClock className="w-10 h-10 text-primary mx-auto mb-5" aria-hidden="true" />
            <p className="text-foreground font-bold mb-2">Booking is not open yet</p>
            <p className="text-muted text-sm leading-relaxed max-w-md mx-auto">
              Booking for the 6th Annual Conference &amp; Retreat will be shared on
              the event page as soon as it is available.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/trips/conference" className="btn btn-primary group">
                View Event Details <ArrowRight className="btn-arrow w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Sponsorship Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
