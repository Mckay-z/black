"use client";

import { useTheme } from "@payloadcms/ui";
import React from "react";

/**
 * Light/dark switch in the admin header.
 *
 * Payload can already do both themes — it swaps `data-theme` on `<html>` and
 * remembers the choice in a `payload-theme` cookie for a year — but the only
 * control for it is buried in the account screen, three clicks from anywhere
 * someone is actually working. This puts it next to the other header actions.
 *
 * `useTheme` is the provider Payload mounts in `RootLayout`, so this drives the
 * real setting rather than a parallel one: the cookie, the `data-theme`
 * attribute and the account screen all stay in agreement.
 *
 * Rendered as two labelled radio-style buttons rather than one toggle that
 * flips. A single button has to describe either the current state or the one
 * it moves to, and every wording is ambiguous to somebody; two buttons with
 * the active one marked `aria-pressed` say what the state is and what the
 * alternative is at the same time.
 */

type Mode = "light" | "dark";

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
    </svg>
  );
}

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const options: { Icon: () => React.JSX.Element; label: string; mode: Mode }[] =
    [
      { Icon: SunIcon, label: "Light", mode: "light" },
      { Icon: MoonIcon, label: "Dark", mode: "dark" },
    ];

  return (
    // `role="group"` with a name, so a screen reader announces the pair as one
    // control rather than two unrelated buttons.
    <div
      aria-label="Colour theme"
      className="flex items-center gap-0.5 rounded-full border border-admin-border bg-admin-surface p-0.5"
      role="group"
    >
      {options.map(({ Icon, label, mode }) => {
        const active = theme === mode;

        return (
          <button
            aria-label={`${label} theme`}
            aria-pressed={active}
            className={[
              // 32px tall inside a 36px pill. WCAG 2.2 asks 24×24 CSS px
              // minimum for pointer targets; these are 40×32 with the label
              // showing and 32×32 without.
              "flex cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-1.5",
              "text-xs font-semibold transition-colors duration-150",
              "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-admin-accent-ring",
              active
                ? "bg-admin-accent text-admin-on-accent"
                : "text-admin-muted hover:text-admin-accent",
            ].join(" ")}
            key={mode}
            onClick={() => setTheme(mode)}
            type="button"
          >
            <Icon />
            {/* Hidden below the header's tight breakpoint, where the icons
                carry it — the accessible name is on the button itself, so
                nothing is lost when the text goes. */}
            <span className="hidden lg:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
