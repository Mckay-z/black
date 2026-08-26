import Image from "next/image";

/**
 * The wordmark, in whichever variant suits the active theme.
 *
 * Both variants are rendered and swapped with the `dark:` variant rather than
 * by reading theme state in JS. That keeps this usable from Server Components
 * and, more importantly, means the correct logo is in the very first paint —
 * a JS swap would flash the wrong one for a returning dark-mode visitor.
 *
 * The two files are not interchangeable:
 *   logo.png       — has an opaque black background baked in, so it only works
 *                    on the dark palette.
 *   logo-light.png — transparent, with a dark wordmark for light backgrounds.
 *
 * They also have different aspect ratios (3:2 vs 3:1) and different amounts of
 * padding around the mark, so each gets its own height class. Adjust those to
 * resize — they are tuned so the gold emblem reads at a similar size in both.
 */
export default function Logo({
  lightClassName = "h-14 w-auto",
  darkClassName = "h-30 w-auto",
  priority = false,
}: {
  lightClassName?: string;
  darkClassName?: string;
  priority?: boolean;
}) {
  return (
    <>
      <Image
        src="/logo-light.png"
        alt="Black In Rehab Foundation"
        width={2172}
        height={724}
        priority={priority}
        className={`block dark:hidden object-contain ${lightClassName}`}
      />
      <Image
        src="/logo.png"
        alt="Black In Rehab Foundation"
        width={1536}
        height={1024}
        priority={priority}
        className={`hidden dark:block object-contain ${darkClassName}`}
      />
    </>
  );
}
