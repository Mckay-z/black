import type { Payload } from "payload";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 * The masthead at the top of the sidebar, above the collection links.
 *
 * Payload's sidebar starts straight in on "Content", "Inbox", "Settings" with
 * nothing identifying whose site this is. A sidebar header is where a CMS
 * normally carries its identity, and there is room for the logo to be read at
 * full size.
 *
 * It is also a way back to the dashboard, which a masthead is expected to be.
 * It is no longer the only one: `Breadcrumbs` opens every trail with a
 * "Dashboard" link now, where Payload's stock trail had only an icon.
 *
 * Rendered through `beforeNavLinks`, so it sits inside Payload's own
 * `.nav__wrap` and inherits its scrolling and mobile drawer behaviour rather
 * than needing a replacement `Nav`.
 *
 *
 * ── One lockup, both themes ───────────────────────────────────────────────
 *
 * This used to render two different designs. Light mode got `logo-light.png`
 * bare — no tile, no border — and dark mode got `logo.png` inside a bordered,
 * gold-rimmed tile with its own glow behind it. That was two mastheads, not
 * one masthead in two colourways: different framing, different borders, and a
 * different height, so the sidebar links shifted when the theme changed.
 *
 * The size difference was the least obvious and the worst of it. The two
 * assets are cropped differently — `logo-light.png` is 3:1 and trimmed to the
 * artwork, `logo.png` is 3:2 with a wide black margin baked around it — so at
 * a shared `h-14` the dark logo drew roughly half the size of the light one.
 *
 * So there is one lockup now, in both themes: `logo.png` on the fixed ink
 * tile. That is what the `ink`/`gold` tokens in `admin.css` exist for, and it
 * matches the login screen, which sets `logo.png` on pure black for the same
 * reason. The wordmark is white there, so it stays legible whatever the
 * sidebar is doing behind it.
 */

type Props = { payload: Payload };

export function NavBrand({ payload }: Props) {
  // `routes.admin` is configurable, so never hardcode `/admin`.
  const admin = payload.config.routes.admin;

  return (
    <div className="mb-6 w-full border-b border-admin-border pb-5">
      <Link
        aria-label="Black in Rehab Foundation — dashboard home"
        className="block rounded-xl no-underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-admin-accent-ring"
        href={admin}
      >
        {/*
          The tile's padding is black on black, so it reads as breathing room
          inside the gold rule rather than as a second edge.
        */}
        <span className="block overflow-hidden rounded-xl border border-gold/25 bg-ink p-2">
          {/*
            `aspect-[3/1] object-cover` crops the asset rather than shrinking
            it. `logo.png` carries a wide black margin around the artwork; at
            `object-contain` that margin is what sets the height, so the logo
            itself ends up small. Cropping to 3:1 takes the middle band — the
            emblem and both lines of the wordmark, nothing clipped — and drops
            the empty margin above and below.

            3:1 is not arbitrary: it is `logo-light.png`'s own ratio to two
            decimal places, so this frames the artwork exactly as the trimmed
            asset does. The crop removes only black, and the tile behind it is
            the same black, so there is no seam to hide.
          */}
          <Image
            alt="Black in Rehab Foundation"
            className="block aspect-[3/1] w-full rounded-lg object-cover"
            height={1024}
            priority
            src="/logo.png"
            width={1536}
          />
        </span>
      </Link>

      <p className="mt-3 text-center text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-admin-muted">
        Content Dashboard
      </p>
    </div>
  );
}
