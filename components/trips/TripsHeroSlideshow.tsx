"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";

import type { Trip } from "@/lib/trips";

/**
 * The banner at the top of `/trips`: the calendar as a slide deck.
 *
 * Built after the reference layout supplied for this section — a flat dark
 * canvas, a segmented progress bar across the top, the headline set large on
 * the left against open space, and one photograph filling the right.
 *
 * ONE PICTURE PER SLIDE. An earlier pass put all five events on screen at once
 * as a collage. It read as clutter: five photographs at competing sizes, four
 * of them dimmed to keep the fifth readable, and the right-hand column clipped
 * mid-label. Each slide now shows its own photograph and nothing else, at the
 * size that makes it worth looking at; the other events are reachable through
 * the progress bar and the arrows.
 *
 * THE PICTURE FITS. It previously ran wider than its column and was clipped by
 * the section, borrowing the reference's bleed. On a real screen that read as
 * a picture falling off the page rather than as one continuing past it, so it
 * is now bounded by its column. Prominence comes from the column split and the
 * height instead, which cost nothing at the edge of the window.
 *
 * WHAT PAUSES IT, AND WHAT DOES NOT. Auto-advance is the point of the section,
 * so it is deliberately hard to stop by accident:
 *
 *   - Reduced motion no longer disables it. It used to, which meant anyone
 *     with animation effects off in their OS saw a carousel that never moved.
 *     What reduced motion drops is the *motion* — the push in on the frame and
 *     the sweep of the progress fill — not the content advancing.
 *   - Hovering is scoped to the photograph, not the whole section. The section
 *     spans the top of the viewport, so pausing on any pointer inside it meant
 *     it sat still for most visitors most of the time.
 *   - Keyboard focus anywhere inside still pauses, so tabbing toward the link
 *     does not lose it.
 *   - There is an explicit pause control, which is what makes this satisfy
 *     WCAG 2.2.2 rather than relying on a hover nobody can discover.
 */

const ADVANCE_MS = 6000;

export default function TripsHeroSlideshow({ trips }: { trips: Trip[] }) {
  const [index, setIndex] = useState(0);
  const [hoveringPicture, setHoveringPicture] = useState(false);
  const [focusInside, setFocusInside] = useState(false);
  const [stopped, setStopped] = useState(false);
  const reduceMotion = useReducedMotion();

  const count = trips.length;
  const paused = stopped || hoveringPicture || focusInside;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused || count < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [paused, count]);

  if (count === 0) return null;

  const trip = trips[index];
  const animateFill = !paused && !reduceMotion && count > 1;

  return (
    <section
      className="section-dark relative isolate overflow-hidden bg-secondary py-10 md:py-14"
      aria-roledescription="carousel"
      aria-label="Upcoming events"
      onFocusCapture={() => setFocusInside(true)}
      onBlurCapture={() => setFocusInside(false)}
    >
      {/* ---- Progress segments ------------------------------------------ */}
      <div className="container mx-auto px-4 md:px-6">
        <ul className="flex items-center gap-2">
          {trips.map((item, i) => (
            <li key={item.slug} className="flex-1">
              <button
                type="button"
                onClick={() => go(i)}
                aria-label={`Show ${item.title}, ${item.dates}`}
                aria-current={i === index ? "true" : undefined}
                className="group/seg block w-full py-3"
              >
                <span className="block h-[3px] w-full overflow-hidden rounded-full bg-white/25 transition-colors group-hover/seg:bg-white/50">
                  {i < index && <span className="block h-full w-full bg-white/70" />}
                  {i === index &&
                    (animateFill ? (
                      <motion.span
                        key={index}
                        className="block h-full bg-white"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: ADVANCE_MS / 1000, ease: "linear" }}
                      />
                    ) : (
                      <span className="block h-full w-full bg-white" />
                    ))}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
          Upcoming Events
        </p>
      </div>

      {/* ---- Headline + picture ----------------------------------------- */}
      <div className="container mx-auto mt-8 px-4 md:mt-10 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
          {/* Left: the active event, set large against open space. */}
          <div className="lg:py-6">
            <span className="chip chip-dark uppercase tracking-[0.14em]">
              {trip.dates}
            </span>

            <div aria-live="polite" aria-atomic="true">
              <Link
                href={trip.href}
                className="group mt-6 block focus-visible:outline-none"
              >
                {/*
                  Two tones, as in the reference: the name in white, the place
                  carried underneath in the brand gold. The colour break is
                  what stops a long title reading as one grey slab.
                */}
                <h1 className="font-serif text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.02] tracking-tight text-white transition-colors group-hover:text-white/90">
                  {trip.title}
                </h1>
                <p className="mt-3 font-serif text-[clamp(1.375rem,3vw,2.25rem)] font-bold italic leading-tight text-gold-gradient">
                  {trip.location}
                </p>
              </Link>
            </div>

            <Link
              href={trip.href}
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:text-primary"
            >
              View details
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            {count > 1 && (
              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => go(index - 1)}
                  aria-label="Previous event"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary hover:text-on-primary"
                >
                  <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  aria-label="Next event"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary hover:text-on-primary"
                >
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </button>

                {/* The stop control, kept apart from the two that move it. */}
                <button
                  type="button"
                  onClick={() => setStopped((v) => !v)}
                  aria-label={
                    stopped
                      ? "Resume automatic slideshow"
                      : "Pause automatic slideshow"
                  }
                  aria-pressed={stopped}
                  className="ml-2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-primary hover:text-primary"
                >
                  {stopped ? (
                    <Play className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Pause className="h-4 w-4" aria-hidden="true" />
                  )}
                </button>
              </div>
            )}
          </div>

          {/*
            Right: the photograph, bounded by its column so nothing runs off
            the page. Hovering here — and only here — holds the rotation, on
            the assumption that a pointer resting on the picture is a pointer
            reading it.
          */}
          <Link
            href={trip.href}
            aria-label={`${trip.title} — ${trip.dates}, ${trip.location}`}
            onMouseEnter={() => setHoveringPicture(true)}
            onMouseLeave={() => setHoveringPicture(false)}
            className="group relative block h-[46svh] min-h-[320px] w-full overflow-hidden rounded-[var(--radius-panel)] ring-1 ring-white/15 md:h-[58svh] lg:h-[64svh]"
          >
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={trip.slug}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* The push in runs longer than the dwell, so the frame is
                    still moving when it hands over. A transform, so the site's
                    `reducedMotion="user"` drops it on its own. */}
                <motion.img
                  src={trip.image}
                  alt=""
                  aria-hidden="true"
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: ADVANCE_MS / 1000 + 2, ease: "linear" }}
                  className="photo h-full w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Only enough darkening to carry the pill. */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/70 to-transparent"
            />

            <span className="absolute bottom-5 left-5 right-5">
              <span className="chip chip-dark max-w-full truncate uppercase tracking-[0.12em]">
                {trip.title}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
