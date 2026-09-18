"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * The photo rail on a trip page.
 *
 * Built on native scroll-snap rather than a JS-driven track: the row is a real
 * scroll container, so a trackpad, a touch swipe, shift+wheel and the keyboard
 * all work without any of it being reimplemented. The arrows and the progress
 * bar are conveniences layered on top, and the rail is fully usable if their
 * JavaScript never runs.
 *
 * The arrows page by one viewport-width of the rail rather than by a fixed
 * number of cards, so the same component behaves correctly at every
 * breakpoint without being told how many cards are visible.
 */
export default function TripGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const railRef = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;

    const max = rail.scrollWidth - rail.clientWidth;
    // A rail that does not overflow has no meaningful position; treat it as
    // both ends at once so neither arrow offers a scroll that cannot happen.
    if (max <= 1) {
      setProgress(1);
      setAtStart(true);
      setAtEnd(true);
      return;
    }

    const ratio = rail.scrollLeft / max;
    setProgress(ratio);
    setAtStart(ratio <= 0.01);
    setAtEnd(ratio >= 0.99);
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  const page = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * rail.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <ul
        ref={railRef}
        onScroll={sync}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, index) => (
          <motion.li
            key={`${src}-${index}`}
            data-motion=""
            className="img-filler relative aspect-4/3 w-72 shrink-0 snap-start overflow-hidden rounded-[var(--radius-card)] sm:w-80 lg:w-96"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${alt} — photo ${index + 1}`}
              loading="lazy"
              className="photo photo-hover-lift h-full w-full object-cover transition-transform duration-700 hover:scale-[1.06]"
            />
          </motion.li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-5">
        {/* Progress, not dots. With a variable number of photos and a
            variable number visible, a dot per photo would be lying about
            where you are. */}
        <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-border">
          <motion.div
            className="h-full rounded-full bg-primary"
            style={{ transformOrigin: "left" }}
            animate={{ scaleX: Math.max(progress, 0.08) }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => page(-1)}
            disabled={atStart}
            aria-label="Previous photos"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-primary/60 hover:text-primary disabled:pointer-events-none disabled:opacity-35"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => page(1)}
            disabled={atEnd}
            aria-label="More photos"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-primary/60 hover:text-primary disabled:pointer-events-none disabled:opacity-35"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
