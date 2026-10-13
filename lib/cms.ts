import "server-only";
import { getPayload, type Where } from "payload";
import config from "@payload-config";
import type {
  Post,
  Event,
  Person,
  Testimonial,
  Stat,
  Hero,
  ImpactStory,
} from "@/payload-types";

/**
 * Read side of the CMS, for server components.
 *
 * Uses Payload's Local API, so these run in-process against the database with
 * no HTTP round-trip — a page can call several of them without cost.
 *
 * Every helper returns empty/null rather than throwing when the CMS has no
 * content or the database is unreachable. That is deliberate: the site was
 * built with its content hardcoded, and each page keeps those values as a
 * fallback. An empty CMS renders exactly the site that exists today, so the
 * dashboard can be filled in gradually without the site ever going blank.
 */

async function client() {
  return getPayload({ config });
}

/** Swallow read failures so a CMS problem degrades to fallback content. */
async function safe<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    console.error("[cms] read failed, using fallback content:", error);
    return fallback;
  }
}

// ── Blog ────────────────────────────────────────────────────────────────

export async function getPosts(limit = 50): Promise<Post[]> {
  return safe(async () => {
    const payload = await client();
    const { docs } = await payload.find({
      collection: "posts",
      where: { status: { equals: "published" } },
      sort: "-publishedDate",
      limit,
      depth: 1,
    });
    return docs;
  }, []);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return safe(async () => {
    const payload = await client();
    const { docs } = await payload.find({
      collection: "posts",
      where: { slug: { equals: slug }, status: { equals: "published" } },
      limit: 1,
      depth: 2,
    });
    return docs[0] ?? null;
  }, null);
}

// ── Events ──────────────────────────────────────────────────────────────

export async function getEvents(
  type?: Event["type"],
  { upcomingOnly = true, limit = 50 } = {},
): Promise<Event[]> {
  return safe(async () => {
    const payload = await client();
    const where: Where = { status: { equals: "published" } };
    if (type) where.type = { equals: type };
    // Compare against the start of today so an event running right now still
    // counts as upcoming.
    if (upcomingOnly) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      where.startDate = { greater_than_equal: today.toISOString() };
    }
    const { docs } = await payload.find({
      collection: "events",
      where,
      sort: "startDate",
      limit,
      depth: 1,
    });
    return docs;
  }, []);
}

// ── People ──────────────────────────────────────────────────────────────

export async function getPeople(
  group?: "founder" | "leadership" | "speaker" | "ambassador",
): Promise<Person[]> {
  return safe(async () => {
    const payload = await client();
    const where: Where = { status: { equals: "published" } };
    if (group) where.groups = { contains: group };
    const { docs } = await payload.find({
      collection: "people",
      where,
      sort: "order",
      limit: 100,
      depth: 1,
    });
    return docs;
  }, []);
}

// ── Testimonials & statistics ───────────────────────────────────────────

export async function getTestimonials(placement = "homepage"): Promise<Testimonial[]> {
  return safe(async () => {
    const payload = await client();
    const { docs } = await payload.find({
      collection: "testimonials",
      where: {
        status: { equals: "published" },
        placement: { contains: placement },
      },
      sort: "order",
      limit: 20,
      depth: 1,
    });
    return docs;
  }, []);
}

export async function getStats(placement = "homepage"): Promise<Stat[]> {
  return safe(async () => {
    const payload = await client();
    const { docs } = await payload.find({
      collection: "stats",
      where: {
        status: { equals: "published" },
        placement: { contains: placement },
      },
      sort: "order",
      limit: 12,
      depth: 0,
    });
    return docs;
  }, []);
}

// ── Impact gallery ──────────────────────────────────────────────────────

/**
 * Photos and videos for the Impact page.
 *
 * `category` narrows to one of the three filters; `featuredOnly` is what the
 * homepage section asks for, so the client controls which handful of items
 * gets the prime slot without needing a second collection.
 */
export async function getImpactStories({
  category,
  featuredOnly = false,
  limit = 60,
}: {
  category?: ImpactStory["category"];
  featuredOnly?: boolean;
  limit?: number;
} = {}): Promise<ImpactStory[]> {
  return safe(async () => {
    const payload = await client();
    const where: Where = { status: { equals: "published" } };
    if (category) where.category = { equals: category };
    if (featuredOnly) where.featured = { equals: true };
    const { docs } = await payload.find({
      collection: "impact-stories",
      where,
      sort: "order",
      limit,
      depth: 1,
    });
    return docs;
  }, []);
}

// ── Page banners ────────────────────────────────────────────────────────

export async function getHero(page: string): Promise<Hero | null> {
  return safe(async () => {
    const payload = await client();
    const { docs } = await payload.find({
      collection: "heroes",
      where: { page: { equals: page }, status: { equals: "published" } },
      limit: 1,
      depth: 1,
    });
    return docs[0] ?? null;
  }, null);
}

// ── Site settings ───────────────────────────────────────────────────────

export async function getSiteSettings() {
  return safe(async () => {
    const payload = await client();
    return await payload.findGlobal({ slug: "site-settings", depth: 0 });
  }, null);
}

/**
 * Black in Rehab University's monthly session, from Site Settings → BIR
 * University. The registration URL changes every month, so every button on
 * the student page reads it from here; the session fields are optional.
 */
export const BIR_UNIVERSITY_DEFAULTS = {
  registrationUrl: "https://forms.gle/KQydD2QaPNkJxc3o8",
};

export async function getBirUniversity() {
  const settings = await getSiteSettings();
  const u = settings?.birUniversity;
  return {
    registrationUrl: u?.registrationUrl || BIR_UNIVERSITY_DEFAULTS.registrationUrl,
    sessionTitle: u?.sessionTitle || null,
    sessionDate: u?.sessionDate || null,
    sessionTime: u?.sessionTime || null,
    sessionDescription: u?.sessionDescription || null,
  };
}

/**
 * Accountability Lab cohort details, from Site Settings → Accountability Lab.
 * The defaults are the launch copy from the client's revision document.
 */
export const ACCOUNTABILITY_LAB_DEFAULTS = {
  enrollmentStatus:
    "Our current cohort has already started. We are accepting inquiries for the next cohort; the start date has not yet been announced.",
  monthlyPrice: "$97 per month, month to month, plus processing fees.",
  fullPrice: "$279 paid in full for the 12-week experience, plus processing fees.",
  advisoryPrice: "$130",
  waitlistUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSf0cn7pHpKCy2QhPM98s6PR8CvURMbwJ3Ro-covmxBPOtnhJA/viewform?usp=header",
  waitlistLabel: "Join the Next Cohort Waitlist",
};

export async function getAccountabilityLab() {
  const settings = await getSiteSettings();
  const lab = settings?.accountabilityLab;
  const d = ACCOUNTABILITY_LAB_DEFAULTS;
  return {
    enrollmentStatus: lab?.enrollmentStatus || d.enrollmentStatus,
    nextCohortDates: lab?.nextCohortDates || null,
    schedule: lab?.schedule || null,
    monthlyPrice: lab?.monthlyPrice || d.monthlyPrice,
    fullPrice: lab?.fullPrice || d.fullPrice,
    advisoryPrice: lab?.advisoryPrice || d.advisoryPrice,
    waitlistUrl: lab?.waitlistUrl || d.waitlistUrl,
    waitlistLabel: lab?.waitlistLabel || d.waitlistLabel,
  };
}

/**
 * Resolve an uploaded image to a URL, falling back to the hardcoded photo the
 * page already used. Payload returns either an id or the populated document
 * depending on query depth, so both shapes are handled.
 */
export function imageUrl(
  image: unknown,
  fallback: string,
): string {
  if (!image) return fallback;
  if (typeof image === "object" && image !== null && "url" in image) {
    const url = (image as { url?: string | null }).url;
    if (url) return url;
  }
  return fallback;
}
