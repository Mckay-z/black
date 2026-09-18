"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Counts a statistic up from zero the first time it scrolls into view.
 *
 * The values come from the CMS as free text — "500+", "12", "$1.2M",
 * "Countless" — so this takes the whole string and animates only the number
 * inside it, keeping whatever prefix and suffix the editor typed. A value with
 * no digits in it ("Countless") renders as plain text and never animates,
 * rather than being coerced to 0.
 *
 * The final value is what React renders, on the server and on every
 * subsequent render, so the correct figure is in the HTML for search engines
 * and for anyone without JavaScript. The count itself is written straight to
 * the text node rather than held in state: a state update per animation frame
 * would re-render the surrounding tree sixty times a second to change one
 * string, and React has no reason to know about the intermediate values.
 */

/** "$1.2M+" → { prefix: "$", number: 1.2, suffix: "M+", decimals: 1 } */
function parse(value: string) {
  const match = value.match(/-?\d[\d,]*\.?\d*/);
  if (!match) return null;

  const raw = match[0];
  const number = Number(raw.replace(/,/g, ""));
  if (!Number.isFinite(number)) return null;

  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;

  return {
    prefix: value.slice(0, match.index),
    suffix: value.slice((match.index ?? 0) + raw.length),
    number,
    decimals,
    // A grouped source ("1,200") should stay grouped as it counts.
    grouped: raw.includes(","),
  };
}

export default function CountUp({
  value,
  className,
  duration = 1.6,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reduceMotion) return;

    const parsed = parse(value);
    if (!parsed) return;

    const format = (n: number) => {
      const body = parsed.grouped
        ? n.toLocaleString(undefined, {
            minimumFractionDigits: parsed.decimals,
            maximumFractionDigits: parsed.decimals,
          })
        : n.toFixed(parsed.decimals);
      return `${parsed.prefix}${body}${parsed.suffix}`;
    };

    // Park at zero until the element is on screen. Doing this on mount rather
    // than only once `inView` flips means a stat below the fold is never
    // briefly shown at its final value and then rewound.
    if (!inView) {
      node.textContent = format(0);
      return;
    }

    const controls = animate(0, parsed.number, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = format(latest);
      },
      // Land on exactly what the editor typed, rather than on this
      // component's idea of how to format the final number.
      onComplete: () => {
        node.textContent = value;
      },
    });

    return () => controls.stop();
  }, [value, inView, reduceMotion, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
