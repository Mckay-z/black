import React from "react";

import { ExternalLinkIcon } from "./icons";

/*
  Ways out of the dashboard and back to the public site.

  The dashboard is a dead end otherwise: Payload's admin has no link to the
  site it publishes, so the only route back is editing the URL by hand. Two
  slots cover the two moments someone wants it — while signed in, and straight
  after signing out.

  Both use a plain `<a>` rather than `next/link` on purpose. `/admin` and `/`
  are separate root layouts (`app/(payload)` and `app/(site)`), and Next always
  does a full page load across root layouts — see `layout.md` in the bundled
  docs, "Navigating across multiple root layouts will cause a full page load".
  A `Link` here would add prefetching and a router round-trip for a navigation
  that is going to be a hard load regardless.

  The href is the site root as a path, not `NEXT_PUBLIC_SITE_URL`. The admin is
  served by the same Next app as the site, so `/` is always the right target,
  works in local development where that variable is usually unset, and cannot
  drift to a stale production hostname.

  The header link carries `no-underline`. Tailwind is loaded here without
  Preflight (see `admin.css`), and Preflight is what normally neutralises the
  browser's default underline on `<a>`; Payload's own reset does not cover bare
  anchors, so without it every custom link in the dashboard renders underlined.
  The login-screen link below is styled from `custom.scss`, which already sets
  `text-decoration: none`, so it needs nothing here.
*/

/**
 * Sits in the admin header, right of the breadcrumbs, on every view.
 *
 * Opens in a new tab: an editor checking how a change looks should not lose an
 * unsaved form to do it. `rel="noreferrer"` is belt-and-braces — the target is
 * our own origin, but it costs nothing and survives the href being changed.
 */
export function ViewSiteButton() {
  return (
    <a
      className="flex items-center gap-2 whitespace-nowrap rounded-full border border-admin-border bg-admin-surface px-3.5 py-2 text-[0.8125rem] font-semibold text-admin-muted no-underline transition-colors duration-150 hover:border-admin-accent hover:bg-admin-accent-soft hover:text-admin-accent focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-admin-accent-ring"
      href="/"
      rel="noreferrer"
      target="_blank"
    >
      <ExternalLinkIcon className="size-3.5" />
      {/*
        The label goes below the header's tight breakpoint, where the
        breadcrumbs need the width. It is hidden rather than removed so it
        still names the link for assistive tech — which is also why there is
        no `title` here: a tooltip is not an accessible name, and the visible
        text already is one.
      */}
      <span className="max-lg:sr-only">View website</span>
    </a>
  );
}

/**
 * Sits under the sign-in form.
 *
 * Payload's logout route signs you out and drops you straight back on the
 * login screen — there is no separate "you have been logged out" page to put
 * this on. So this is the screen someone lands on after logging out, and
 * without it they are stuck at a password prompt with no way to reach the
 * site they just came from.
 *
 * Same tab, unlike the header link: the person is leaving the dashboard, not
 * glancing at the site alongside it.
 */
export function BackToSite() {
  return (
    /*
      `no-html-link-for-pages` fires here and not on the link above only
      because that one carries `target="_blank"`. The reasoning in the block
      comment at the top of this file applies to both: `/` lives under a
      different root layout, so Next does a full page load either way, and a
      `Link` would only add a prefetch of the entire public site to the login
      screen — the one page where the visitor may well not be going there.
    */
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a className="back-to-site" href="/">
      <span aria-hidden="true">&larr;</span>
      Back to the website
    </a>
  );
}
