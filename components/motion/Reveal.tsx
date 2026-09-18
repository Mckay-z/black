"use client";

import { motion } from "framer-motion";

/**
 * Scroll-triggered entrance for a single block.
 *
 * The site already has a CSS `.reveal` built on a view timeline, which is
 * cheaper and stays in place everywhere it is used. This is the JavaScript
 * counterpart, for the two things a view timeline cannot do: fire once and
 * stay put (a view timeline is scrubbed, so scrolling back up rewinds it),
 * and coordinate with siblings — see `Stagger`.
 *
 * Prefer `.reveal` for decorative section headers. Reach for this when the
 * element needs to animate in a direction other than up, or must not replay.
 */

const TAGS = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  li: motion.li,
  span: motion.span,
  p: motion.p,
  h2: motion.h2,
  h3: motion.h3,
} as const;

export type RevealTag = keyof typeof TAGS;

const OFFSETS: Record<Direction, (d: number) => { x?: number; y?: number }> = {
  up: (d) => ({ y: d }),
  down: (d) => ({ y: -d }),
  left: (d) => ({ x: d }),
  right: (d) => ({ x: -d }),
  none: () => ({}),
};

type Direction = "up" | "down" | "left" | "right" | "none";

export default function Reveal({
  children,
  className,
  as = "div",
  direction = "up",
  distance = 28,
  delay = 0,
  duration = 0.7,
  /** How much of the element must be on screen before it starts. */
  amount = 0.2,
  /** Set false to replay the animation every time it re-enters the viewport. */
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  as?: RevealTag;
  direction?: Direction;
  distance?: number;
  delay?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
}) {
  const Tag = TAGS[as];
  const offset = OFFSETS[direction](distance);

  return (
    <Tag
      data-motion=""
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
