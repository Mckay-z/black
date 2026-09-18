"use client";

import { MotionConfig } from "framer-motion";

/**
 * One motion configuration for the whole site.
 *
 * `reducedMotion="user"` is the important part: with it, every Framer Motion
 * animation on the site automatically drops its transform and layout
 * components for visitors who have asked their OS for reduced motion, and
 * cross-fades instead. That means the individual components below can be
 * written as if motion is always allowed, and none of them has to remember to
 * check the media query. Removing this wrapper silently un-does that for
 * every animation at once.
 *
 * The `transition` is the house default — the same expo-out curve the CSS
 * layer uses for `--ease-out-expo`, so a Framer animation and a CSS one
 * sitting next to each other move in the same way.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionConfig>
  );
}
