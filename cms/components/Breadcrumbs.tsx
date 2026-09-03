"use client";

import { getTranslation } from "@payloadcms/translations";
import { useConfig, useStepNav, useTranslation } from "@payloadcms/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

/**
 * The breadcrumb trail in the admin header.
 *
 * This replaces Payload's own `StepNav`, which is hidden in `custom.scss`.
 * Two things were wrong with the stock trail for this dashboard:
 *
 *   1. Its root is an icon, not a word. Payload renders a brand mark linking
 *      to the dashboard and falls back to *its* logo when `graphics.Icon` is
 *      unset — so the trail began with either the wrong logo or (once hidden)
 *      a stray leading "/".
 *   2. It is flat. "Posts / My Post" never says that Posts lives under
 *      Content, which is the grouping the sidebar is organised by.
 *
 * So the trail here reads `Dashboard › Content › Posts › My Post`.
 *
 * The middle level comes from the collection's own `admin.group` — the same
 * value that draws the sidebar headings — so the two never drift apart. It is
 * text rather than a link because a group is a heading, not a route.
 *
 * Everything after it comes from Payload's `useStepNav` context rather than
 * from parsing the URL. Each view sets that context itself (a list view
 * publishes the collection, an edit view publishes the collection plus the
 * document title, the version view publishes the timestamp), so reading it
 * keeps every view Payload ships — including ones added later — correct here
 * for free.
 *
 * Rendered through `admin.components.actions`, which is the only slot inside
 * `.app-header`. It is placed back on the left in `custom.scss`, where the
 * trail it replaces used to sit.
 */

type Crumb = {
  /** Already translated, and possibly a React element — see `renderLabel`. */
  content: React.ReactNode;
  href?: string;
  key: string;
};

export function Breadcrumbs() {
  const { stepNav } = useStepNav();
  const { i18n, t } = useTranslation();
  const { config } = useConfig();
  const pathname = usePathname();

  // `routes.admin` is configurable, so never hardcode `/admin`.
  const adminRoute = config.routes.admin;

  /*
    The group heading for whichever collection or global is open.

    Paths under the admin root are `collections/<slug>/...` or
    `globals/<slug>`; anything else (the account screen, custom views) has no
    owning entity and so contributes no group.
  */
  const [entityType, entitySlug] = pathname
    .slice(adminRoute.length)
    .split("/")
    .filter(Boolean);

  const entity =
    entityType === "collections"
      ? config.collections.find((c) => c.slug === entitySlug)
      : entityType === "globals"
        ? config.globals.find((g) => g.slug === entitySlug)
        : undefined;

  // `group` is `false` when a collection opts out of grouping entirely.
  const group = entity?.admin?.group;
  const groupLabel = group ? getTranslation(group, i18n) : undefined;

  const crumbs: Crumb[] = [];

  const onDashboard = pathname === adminRoute;

  if (onDashboard) {
    /*
      The dashboard is a leaf here, not a root: one plain crumb, unlinked,
      because you are already on it.

      Payload's step for this route is deliberately dropped. The modular
      dashboard publishes a `<select>` as its label — the "Dashboard ⌄" control
      with "Edit Dashboard" and "Reset Layout" in it — and a control is not a
      location, so a breadcrumb is the wrong place for it. Note that this is
      the only entry point Payload gives those two commands, so widget layout
      editing goes with it.
    */
    crumbs.push({ content: t("general:dashboard"), key: "dashboard" });
  } else {
    crumbs.push({
      content: t("general:dashboard"),
      href: adminRoute,
      key: "dashboard",
    });

    if (groupLabel) {
      crumbs.push({ content: groupLabel, key: "group" });
    }

    stepNav.forEach((item, i) => {
      crumbs.push({
        // Handles the label shapes Payload allows: a plain string, a locale
        // map, or a function.
        content: getTranslation(item.label, i18n),
        href: item.url,
        key: `step-${i}`,
      });
    });
  }

  if (crumbs.length === 0) {
    return null;
  }

  /*
    Below `lg` the header has no room for a full trail: the theme toggle and
    the view-site button both drop their labels at that same breakpoint to free
    width up (see `SiteLinks`), and the trail is what they are freeing it for.

    So the middle of the trail collapses to an ellipsis there, keeping the two
    crumbs that carry the most — where you can get back to, and where you are.
    The collapsed crumbs go to `sr-only` rather than `hidden`: `display: none`
    would take them out of the accessibility tree too, and a screen reader on a
    narrow viewport has no reason to hear less of the trail than one on a wide
    viewport.
  */
  const hasCollapsed = crumbs.length > 2;

  return (
    <nav aria-label="Breadcrumb" className="bir-breadcrumbs min-w-0">
      <ol className="flex min-w-0 items-center text-sm">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          const isMiddle = i > 0 && !isLast;

          /*
            Payload allows a step's label to be a React element rather than
            text, and a plugin view may still use one. Such a label is passed
            through untouched: styling it as text would fight its own styles,
            and `aria-current` would describe a widget as a location. The one
            in core — the dashboard's layout dropdown — never reaches here; it
            is dropped above.
          */
          const isElement = React.isValidElement(crumb.content);

          const separator = (
            <span aria-hidden="true" className="mx-1 shrink-0 text-admin-muted/60 lg:mx-1.5">
              ›
            </span>
          );

          return (
            <React.Fragment key={crumb.key}>
              {/* Stands in for everything between the root and the current
                  page while those are collapsed. Hidden from assistive tech,
                  which still gets the real crumbs. */}
              {i === 1 && hasCollapsed && (
                <li aria-hidden="true" className="flex items-center lg:hidden">
                  {separator}
                  <span className="text-admin-muted">…</span>
                </li>
              )}

              <li
                className={[
                  "flex min-w-0 items-center",
                  isMiddle && "sr-only lg:not-sr-only",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {i > 0 && separator}

                {isElement ? (
                  crumb.content
                ) : crumb.href && !isLast ? (
                  <Link
                    className="truncate rounded-sm text-admin-muted no-underline transition-colors duration-150 hover:text-admin-accent focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-admin-accent-ring"
                    href={crumb.href}
                    prefetch={false}
                  >
                    {crumb.content}
                  </Link>
                ) : (
                  /*
                    The last crumb is the page you are on, so it is never a link
                    even when the step carries a url. `max-w` truncates long
                    document titles instead of pushing the header actions off
                    the end of the row — tighter below `lg`, where there is
                    less row to give away.
                  */
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={
                      isLast
                        ? "max-w-[9rem] truncate font-semibold text-admin-fg lg:max-w-[16rem]"
                        : "truncate text-admin-muted"
                    }
                  >
                    {crumb.content}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
