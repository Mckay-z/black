import type { MetadataRoute } from "next";

const BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://blackinrehab.org"
).replace(/\/$/, "");

/**
 * Keeps crawlers out of the CMS while leaving the public site fully indexable.
 *
 * `/admin` and `/api` are disallowed because there is nothing there for a
 * search engine — the admin panel requires a login and the API returns JSON.
 * This is a crawler courtesy, not a security control; access is enforced by
 * Payload's own auth.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/api/"] }],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
