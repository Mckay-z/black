"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

/**
 * A grid or list whose children arrive one after another rather than all at
 * once — the single change that makes a card grid read as alive rather than
 * as a page that finished loading.
 *
 * Wrap the container in `<Stagger>` and each child in `<StaggerItem>`. The
 * container owns the timing; the items only declare the two states, so the
 * cadence is one number in one place.
 *
 * The container animates nothing itself. It exists purely to orchestrate, so
 * it is safe to put the grid classes on it.
 */

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const CONTAINER_TAGS = {
  div: motion.div,
  ul: motion.ul,
  section: motion.section,
} as const;

const ITEM_TAGS = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
  figure: motion.figure,
} as const;

/**
 * A `next/link` that participates in the stagger.
 *
 * Most cards on this site are links wrapping their whole surface. Nesting one
 * inside a plain `StaggerItem` would put an extra element between the grid and
 * the card, which breaks `h-full` and equal-height rows; making the link
 * itself the animated element avoids that entirely. Prefetch and client-side
 * navigation are untouched — this is the same `Link`, with motion props.
 */
const MotionLink = motion.create(Link);

export function Stagger({
  children,
  className,
  as = "div",
  /** Seconds between consecutive children. */
  gap = 0.08,
  delay = 0.05,
  amount = 0.15,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof typeof CONTAINER_TAGS;
  gap?: number;
  delay?: number;
  amount?: number;
  once?: boolean;
}) {
  const Tag = CONTAINER_TAGS[as];

  return (
    <Tag
      className={className}
      variants={
        gap === 0.08 && delay === 0.05
          ? containerVariants
          : {
              hidden: {},
              show: { transition: { staggerChildren: gap, delayChildren: delay } },
            }
      }
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof typeof ITEM_TAGS;
}) {
  const Tag = ITEM_TAGS[as];

  return (
    <Tag data-motion="" className={className} variants={itemVariants}>
      {children}
    </Tag>
  );
}

/**
 * `StaggerItem`, but the animated element is the link itself.
 *
 * The prop list is deliberately closed rather than spread from `Link`'s own
 * props: Motion redefines the drag handlers with its own signatures, so
 * forwarding all of React's anchor attributes puts `onDrag` in conflict and
 * the call stops type-checking. Every card that uses this needs a href, a
 * class and children, and nothing has yet needed more.
 */
export function StaggerLink({
  children,
  className,
  href,
  ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  ariaLabel?: string;
}) {
  return (
    <MotionLink
      data-motion=""
      href={href}
      aria-label={ariaLabel}
      className={className}
      variants={itemVariants}
    >
      {children}
    </MotionLink>
  );
}
