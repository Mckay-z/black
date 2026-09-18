import type { MetadataRoute } from "next";
import { readdir } from "fs/promises";
import path from "path";

import { getPosts } from "@/lib/cms";
import { isUnlisted } from "@/lib/navigation";

/**
 * Sitemap.
 *
 * The site has 70+ pages and shipped without one, so search engines had to
 * discover everything by crawling. Static routes are read from the filesystem
 * rather than hand-listed — a hand-written list silently goes stale the first
 * time someone adds a page — and blog posts are appended from the CMS.
 */

export const dynamic = "force-dynamic";

const BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://blackinrehab.org"
).replace(/\/$/, "");

/** Route groups like `(payload)` are organisational and are not URLs. */
const IGNORED = new Set(["api", "actions"]);

async function collectRoutes(dir: string, prefix = ""): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const routes: string[] = [];

  if (entries.some((e) => e.isFile() && /^page\.(tsx|ts|jsx|js)$/.test(e.name))) {
    routes.push(prefix || "/");
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const { name } = entry;

    // Skip private folders, the Payload admin group, and dynamic segments —
    // dynamic routes are enumerated from their data source instead.
    if (name.startsWith("_") || name.startsWith("[") || IGNORED.has(name)) continue;
    if (name.startsWith("(")) {
      // Route group: contributes no URL segment of its own.
      if (name === "(payload)") continue;
      routes.push(...(await collectRoutes(path.join(dir, name), prefix)));
      continue;
    }

    routes.push(...(await collectRoutes(path.join(dir, name), `${prefix}/${name}`)));
  }

  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [routes, posts] = await Promise.all([
    collectRoutes(path.join(process.cwd(), "app")).catch(() => ["/"]),
    getPosts(),
  ]);

  // Pages kept out of the navigation are also kept out of the sitemap. They
  // carry `noindex` (see lib/seo.ts), so listing them here would be asking
  // a crawler to fetch a page only to be told not to index it.
  const staticEntries = [...new Set(routes)]
    .filter((route) => !isUnlisted(route))
    .map((route) => ({
      url: `${BASE_URL}${route === "/" ? "" : route}`,
      lastModified: new Date(),
      // The homepage outranks section landing pages, which outrank leaf pages.
      priority: route === "/" ? 1 : route.split("/").length === 2 ? 0.8 : 0.6,
      changeFrequency: (route === "/" ? "weekly" : "monthly") as "weekly" | "monthly",
    }));

  // Individual posts follow their index: with /resources/blog unlisted there
  // is no route into them from the site, so listing them here would offer a
  // crawler a back door into a section the client has hidden.
  const postEntries = isUnlisted("/resources/blog")
    ? []
    : posts.map((post) => ({
        url: `${BASE_URL}/resources/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt),
        priority: 0.7,
        changeFrequency: "monthly" as const,
      }));

  return [...staticEntries, ...postEntries];
}
