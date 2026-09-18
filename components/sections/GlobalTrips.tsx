import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import GhanaMap from "@/components/trips/GhanaMap";
import { PHOTOS } from "@/lib/images";
import Reveal from "@/components/motion/Reveal";

/**
 * The Sankofa Return band on the home page: the map on the left, the
 * programme on the right.
 *
 * WHAT THIS REPLACED. It used to be a four-card grid of destinations — Ghana,
 * Jamaica, Kenya, Tanzania. Three of those are not in the client's calendar
 * and came out, which left one photograph stranded in a row built for four and
 * a half-empty section under a full-width heading. A single confirmed
 * destination does not want a grid; it wants to be shown where it is.
 *
 * The map earns the left half in a way a fourth photograph of the same trip
 * would not: the programme is named for a return to a specific place, and most
 * visitors cannot put Ghana on a map of Africa. Accra and Cape Coast are
 * marked because those are the two stops the March trip actually makes.
 *
 * The copy on the right is unchanged — it is the client's framing of the
 * programme, and only its position moved.
 */
export default function GlobalTrips() {
  return (
    <section className="section bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ---- The map ------------------------------------------------ */}
          <Reveal direction="right">
            {/*
              Allowed to fill the column from `lg` up. It was capped at
              `max-w-lg`, which on a wide screen left the country a stamp in
              the middle of half a page — and the drawing itself was mostly
              empty margin at the time. Both are fixed; the cap only remains
              on small screens, where the column is the whole width.
            */}
            <div className="mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none">
              <GhanaMap image={PHOTOS.ghanaFreedomArch} />
            </div>
          </Reveal>

          {/* ---- The programme ------------------------------------------ */}
          <Reveal direction="left" delay={0.1}>
            <p className="eyebrow mb-5">Across the Diaspora</p>

            <h2 className="display-2 text-foreground">
              Sankofa Return: Clinical &amp; Cultural Exchange
            </h2>

            <p className="mt-4 font-serif text-lg font-semibold text-primary">
              Ghana 2027 · Advancing Health and Healing Across the African Diaspora
            </p>

            <p className="mt-5 text-lg leading-relaxed text-muted">
              A global initiative connecting rehabilitation and wellness professionals of
              the African Diaspora through clinical education, community engagement,
              cultural exchange, and sustainable partnerships. Our journey begins in
              Ghana&mdash;building connections and a model for continued collaboration
              throughout Africa and across the Diaspora.
            </p>

            {/*
              Both 2027 gatherings, linked to their own anchors on the Ghana
              page — the same split the trips calendar makes, so a visitor who
              arrives from here lands on the one they picked.
            */}
            <ul className="mt-8 space-y-3">
              <li>
                <Link
                  href="/trips/ghana#sankofa-return"
                  className="group flex items-start gap-3 text-foreground transition-colors hover:text-primary"
                >
                  <MapPin
                    className="mt-1 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="font-semibold">Sankofa Return</span>
                    <span className="text-muted"> · March 10–22, 2027 · Accra &amp; Cape Coast</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/trips/ghana#ghana-retreat-2"
                  className="group flex items-start gap-3 text-foreground transition-colors hover:text-primary"
                >
                  <MapPin
                    className="mt-1 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="font-semibold">Ghana Retreat 2.0</span>
                    <span className="text-muted"> · September 2027</span>
                  </span>
                </Link>
              </li>
            </ul>

            <Link href="/trips/ghana" className="btn btn-primary btn-lg group mt-10">
              EXPLORE THE PROGRAMME
              <ArrowRight className="btn-arrow h-5 w-5" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
