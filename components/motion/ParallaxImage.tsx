"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * A background photograph that drifts against the page as it scrolls past.
 *
 * Drop it into any `relative isolate` section as the bottom layer; it fills
 * the section and expects the scrims to be layered on top of it in the parent,
 * exactly as a plain `bg-cover` div would be.
 *
 * The layer is scaled up by `SCALE` rather than sized to the section. It has
 * to be: it travels `strength` pixels in each direction, so at 1:1 the drift
 * would pull a bare edge into frame at the top or the bottom of the range.
 *
 * `useScroll` is measured against the wrapper, not the window, so a section
 * anywhere down the page gets the same treatment as one at the top — progress
 * runs 0 → 1 across the window in which the section is visible at all.
 */

const SCALE = 1.18;

export default function ParallaxImage({
  src,
  className = "",
  /** Pixels of travel in each direction from centre. */
  strength = 60,
  /** Vertical framing of the crop, as a CSS background-position Y value. */
  position = "center",
  opacity,
}: {
  src: string;
  className?: string;
  strength?: number;
  position?: string;
  opacity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.div
        style={{
          y,
          scale: SCALE,
          backgroundImage: `url('${src}')`,
          backgroundPosition: `center ${position}`,
          opacity,
        }}
        className="h-full w-full bg-cover bg-no-repeat"
      />
    </div>
  );
}
