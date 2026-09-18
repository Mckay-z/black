import type { Metadata } from "next";

/**
 * Metadata for a page that is deliberately kept out of the site's navigation.
 *
 * A page can be unlisted in the menus and still be the first thing a visitor
 * sees, because search results are a way in that the menu does not control.
 * These pages are unlisted precisely because they are not ready to be landed
 * on, so they say so to crawlers as well as to the header.
 *
 * Pair it with an entry in `UNLISTED` in `lib/navigation.ts`, which records
 * why the page is hidden. Both go together: the list keeps the reason, this
 * keeps the page out of the index.
 *
 *   export const metadata = unlistedMetadata({
 *     title: "Podcast | Black In Rehab Foundation",
 *   });
 */
export function unlistedMetadata(base: Metadata = {}): Metadata {
  return {
    ...base,
    robots: {
      index: false,
      follow: true,
      googleBot: { index: false, follow: true },
    },
  };
}
