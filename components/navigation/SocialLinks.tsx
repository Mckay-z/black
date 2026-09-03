/**
 * The footer's social icons.
 *
 * Every icon here previously pointed at `href="#"` — they looked like links,
 * did nothing, and would have been the first thing a visitor clicked. Each URL
 * now comes from Site Settings, and an icon with no URL configured is not
 * rendered at all. A missing icon reads as "they aren't on that platform";
 * a dead one reads as a broken site.
 *
 * Marks are inline SVG rather than `lucide-react` imports: this project is on
 * lucide v1, which dropped brand glyphs entirely (verified — the package
 * exports 3537 icons and none of them are brands).
 */

export type SocialUrls = {
  instagram?: string | null;
  facebook?: string | null;
  linkedin?: string | null;
  youtube?: string | null;
  twitter?: string | null;
  tiktok?: string | null;
};

type Platform = {
  key: keyof SocialUrls;
  label: string;
  path: React.ReactNode;
};

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  className: "w-5 h-5",
  "aria-hidden": true,
} as const;

const PLATFORMS: Platform[] = [
  {
    key: "instagram",
    label: "Instagram",
    path: (
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.81 3.81 0 0 1-1.38-.9 3.81 3.81 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
    ),
  },
  {
    key: "facebook",
    label: "Facebook",
    path: (
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    path: (
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    ),
  },
  {
    key: "youtube",
    label: "YouTube",
    path: (
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
    ),
  },
  {
    key: "twitter",
    label: "X",
    path: (
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z" />
    ),
  },
  {
    key: "tiktok",
    label: "TikTok",
    path: (
      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97a9.9 9.9 0 0 1-1.62-.93c-.01 2.92.01 5.84-.02 8.75a7.65 7.65 0 0 1-1.35 3.94 7.46 7.46 0 0 1-5.92 3.21c-1.31.08-2.62-.28-3.74-.94-1.85-1.09-3.15-3.09-3.34-5.23-.02-.46-.03-.91-.01-1.36a7.44 7.44 0 0 1 2.59-4.94 7.39 7.39 0 0 1 6.09-1.6c.02 1.48-.04 2.96-.04 4.44a3.37 3.37 0 0 0-4.3 2.08 3.9 3.9 0 0 0-.14 1.58 3.35 3.35 0 0 0 3.44 2.82 3.3 3.3 0 0 0 2.72-1.58c.29-.4.44-.9.46-1.4.13-2.29.08-4.57.09-6.86.01-5.15-.01-10.29.02-15.43Z" />
    ),
  },
];

export default function SocialLinks({ urls }: { urls: SocialUrls | null }) {
  const available = PLATFORMS.filter(({ key }) => Boolean(urls?.[key]));

  if (!available.length) return null;

  return (
    <div className="flex items-center gap-4 mt-6">
      {available.map(({ key, label, path }) => (
        <a
          key={key}
          href={urls![key]!}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-primary transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" {...ICON_PROPS}>
            {path}
          </svg>
        </a>
      ))}
    </div>
  );
}
