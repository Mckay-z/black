"use client";

import { Link, LogOutIcon, useConfig, useTranslation } from "@payloadcms/ui";
import { formatAdminURL } from "payload/shared";
import React from "react";

/**
 * Replaces Payload's logout control at the foot of the sidebar.
 *
 * The stock button is a bare icon whose only label is a `title` tooltip, so
 * what it does is guessable at best — and it sits directly under the nav links,
 * where an unlabelled glyph reads as decoration rather than an action. This is
 * the same link with the word next to it.
 *
 * Everything else is deliberately identical to the original
 * (`@payloadcms/ui/elements/Logout`): same `nav__log-out` class so the shipped
 * styles still apply, same route built through `formatAdminURL` rather than a
 * hardcoded `/admin/logout` — the admin and logout paths are both configurable,
 * and `payload.config.ts` is free to change them.
 *
 * `title` is dropped: a tooltip that repeats visible text is noise for sighted
 * users and a duplicate announcement for screen readers. `aria-label` stays,
 * since it names the link consistently regardless of translation.
 */
export function LogoutButton({ tabIndex = 0 }: { tabIndex?: number }) {
  const { t } = useTranslation();
  const { config } = useConfig();

  const {
    admin: {
      routes: { logout: logoutRoute },
    },
    routes: { admin: adminRoute },
  } = config;

  const label = t("authentication:logOut");

  return (
    <Link
      aria-label={label}
      className="nav__log-out"
      href={formatAdminURL({ adminRoute, path: logoutRoute })}
      prefetch={false}
      tabIndex={tabIndex}
    >
      <LogOutIcon />
      <span className="nav__log-out-label">{label}</span>
    </Link>
  );
}
