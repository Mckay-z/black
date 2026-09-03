import React from "react";

/**
 * Icons for the dashboard's custom components.
 *
 * Payload ships its own icon set but exports only the handful its UI happens to
 * need — there is no "external link", "calendar" or "inbox" among them. These
 * match the shipped ones in construction (24px box, 1.5px `currentColor`
 * strokes, no fills) so a custom control sitting beside a stock one does not
 * look pasted in from another kit.
 *
 * `aria-hidden` throughout: every one of these is accompanied by a visible text
 * label, so announcing the glyph as well would just repeat it.
 */

type IconProps = { className?: string };

function Svg({ children, className }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

/** Arrow leaving a bounded box — the conventional "opens in a new tab" mark. */
export function ExternalLinkIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M14 4h6v6" />
      <path d="M20 4 11 13" />
      <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </Svg>
  );
}

/** Stacked lines on a page — blog posts and written content. */
export function PostIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </Svg>
  );
}

/** Calendar — events. */
export function EventIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6Z" />
      <path d="M4 10h16M9 3v4M15 3v4" />
    </Svg>
  );
}

/** Framed picture — the media library. */
export function MediaIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
      <path d="m3 16 5-5 4 4 3-3 6 6" />
      <circle cx="9" cy="9" r="1.4" />
    </Svg>
  );
}

/** Tray — the form-submission inbox. */
export function InboxIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 13 6 5h12l2 8v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Z" />
      <path d="M4 13h4l1 3h6l1-3h4" />
    </Svg>
  );
}
