import type { Payload, TypedUser } from "payload";
import Link from "next/link";
import React from "react";

import {
  EventIcon,
  ExternalLinkIcon,
  InboxIcon,
  MediaIcon,
  PostIcon,
} from "./icons";

/**
 * The panel above the collection cards on `/admin`.
 *
 * Payload's dashboard opens on a wall of identical cards, one per collection,
 * alphabetical within each group. It is an accurate index of the data model and
 * a poor answer to the question someone actually arrives with, which is "what
 * do I do here, and is anything waiting for me?".
 *
 * So: name the person, name the tool, put the four things they came to do
 * within one click, and surface the one genuinely time-sensitive number in the
 * system — form submissions nobody has actioned yet. The collection cards stay
 * below, unchanged, for everything else.
 *
 * This is a server component. It runs where `payload` already is, so the
 * unhandled count is a direct database call with no client fetch, no loading
 * state and no extra round trip.
 *
 * Styled with Tailwind against the theme-aware `admin-*` tokens from
 * `admin.css`, so the panel is beige in light mode and near-black in dark,
 * following whatever the header toggle is set to. It was fixed dark at first,
 * which left a black slab sitting in the middle of a light dashboard.
 *
 * Because those tokens resolve at use time, there is no `dark:` variant on any
 * of this — one set of classes covers both themes.
 */

type Props = {
  payload: Payload;
  user?: TypedUser;
};

/**
 * "Dr. Chauntel Altidor" → "Chauntel".
 *
 * Titles read as stiff in a greeting, and the full name reads as a form field.
 * Falls back to the local part of the email, because `name` is required on new
 * users but the seeded first account may predate that.
 */
function firstName(user?: TypedUser): string {
  const source =
    (typeof user?.name === "string" && user.name.trim()) ||
    user?.email?.split("@")[0] ||
    "";

  const words = source.split(/\s+/).filter(Boolean);
  const skip = /^(dr|mr|mrs|ms|mx|prof|rev)\.?$/i;
  const name = words.find((word) => !skip.test(word)) ?? words[0];

  return name ? name.charAt(0).toUpperCase() + name.slice(1) : "";
}

/**
 * Submissions nobody has ticked off yet.
 *
 * `not_equals: true` rather than `equals: false` deliberately — the checkbox
 * defaults to false but rows created before the field existed hold null, and
 * `equals: false` would quietly skip exactly the oldest, most-overdue ones.
 *
 * Access is evaluated as the signed-in user rather than overridden, so the
 * number can never disclose more than that person is allowed to open. A failure
 * here returns null and the badge simply does not render: a dashboard that
 * 500s because a count failed is a far worse outcome than one without a badge.
 */
async function countAwaiting(payload: Payload, user?: TypedUser) {
  try {
    const { totalDocs } = await payload.count({
      collection: "submissions",
      overrideAccess: false,
      user,
      where: { handled: { not_equals: true } },
    });

    return totalDocs;
  } catch {
    return null;
  }
}

export async function DashboardWelcome({ payload, user }: Props) {
  const name = firstName(user);
  const awaiting = await countAwaiting(payload, user);

  // Never hardcode `/admin`: `routes.admin` is configurable in payload.config.ts
  // and these links have to follow it.
  const admin = payload.config.routes.admin;

  // Annotated rather than inferred: only the submissions entry carries a
  // `badge`, and TypeScript would otherwise infer a union the destructure
  // below cannot read that key from.
  type QuickAction = {
    badge?: number | null;
    description: string;
    href: string;
    Icon: (props: { className?: string }) => React.JSX.Element;
    label: string;
  };

  const actions: QuickAction[] = [
    {
      description: "Write a story or update",
      href: `${admin}/collections/posts/create`,
      Icon: PostIcon,
      label: "New blog post",
    },
    {
      description: "Add a date to the calendar",
      href: `${admin}/collections/events/create`,
      Icon: EventIcon,
      label: "New event",
    },
    {
      description: "Add photos to the library",
      href: `${admin}/collections/media/create`,
      Icon: MediaIcon,
      label: "Upload media",
    },
    {
      // The only card that can carry a badge, and the only one that links to a
      // list rather than a create form — you triage submissions, you don't
      // author them.
      badge: awaiting && awaiting > 0 ? awaiting : null,
      description:
        awaiting && awaiting > 0
          ? `${awaiting} still to action`
          : "Everything actioned",
      href: `${admin}/collections/submissions`,
      Icon: InboxIcon,
      label: "Form submissions",
    },
  ];

  return (
    <section className="relative mb-10 grid grid-cols-1 items-center gap-7 overflow-hidden rounded-2xl border border-admin-border bg-admin-surface px-6 py-8 shadow-[0_18px_44px_-22px_rgb(27_22_17/0.18)] lg:grid-cols-2 lg:gap-10 lg:px-9">
      {/* Gold bloom behind the greeting, echoing the login card. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_75%_at_12%_20%,rgb(var(--admin-accent-rgb)/0.10),transparent_68%)]"
      />

      {/* The gold hairline used on the app header and on the public site's
          header and footer, repeated along the top edge. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-admin-accent to-transparent"
      />

      <div className="relative">
        <p className="mb-3 flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-admin-accent">
          {/* The small gold dot the public site puts on its section eyebrows. */}
          <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
          Black in Rehab Foundation
        </p>

        <h1 className="mb-3 font-serif text-3xl font-bold tracking-tight text-admin-fg lg:text-4xl">
          {name ? `Welcome back, ${name}` : "Welcome back"}
        </h1>

        <p className="mb-6 max-w-lg text-sm leading-relaxed text-admin-muted">
          Everything on the public website is managed from here — events,
          stories, people and photos. Changes go live as soon as you save.
        </p>

        {/*
          Full page load across root layouts, so a plain anchor. New tab, so an
          editor can compare the site against the dashboard side by side.
        */}
        <a
          className="inline-flex items-center gap-2 rounded-full bg-admin-accent px-5 py-2.5 text-[0.8125rem] font-bold tracking-wide text-admin-on-accent no-underline transition-colors duration-150 hover:bg-admin-accent-hover focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-admin-accent-ring"
          href="/"
          rel="noreferrer"
          target="_blank"
        >
          View website
          <ExternalLinkIcon className="size-3.5" />
        </a>
      </div>

      <nav
        aria-label="Quick actions"
        className="relative grid grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {/*
          `next/link`, unlike the site link above: these stay inside the
          `(payload)` root layout, so they are real client-side navigations
          within the admin app rather than a full reload of it.
        */}
        {actions.map(({ badge, description, href, Icon, label }) => (
          <Link
            className="flex items-start gap-3 rounded-xl border border-admin-border-strong bg-admin-raised px-4 py-3.5 no-underline transition-colors duration-200 hover:border-admin-accent hover:bg-admin-accent-soft focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-admin-accent-ring"
            href={href}
            key={label}
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-admin-accent-soft text-admin-accent">
              <Icon className="size-4" />
            </span>

            <span className="flex min-w-0 flex-col gap-0.5">
              <span className="flex items-center gap-2 text-[0.8125rem] font-semibold leading-tight text-admin-fg">
                {label}
                {badge ? (
                  // The accent, so the one thing actively asking for
                  // attention is the one thing that is not grey.
                  <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-admin-accent px-1.5 text-[0.6875rem] font-bold text-admin-on-accent">
                    {badge}
                  </span>
                ) : null}
              </span>
              <span className="text-xs text-admin-muted">{description}</span>
            </span>
          </Link>
        ))}
      </nav>
    </section>
  );
}
