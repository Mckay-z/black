import "dotenv/config";
import { getPayload } from "payload";
import config from "../payload.config";

/**
 * Repoints CMS records from `/experiences/…` to `/trips/…`.
 *
 * The routes were renamed in the codebase, but Page Banners are matched to a
 * page by the route string stored on the record. Without this, the six
 * published banners for the old routes keep their old `page` value, stop
 * matching anything, and the pages quietly fall back to their built-in copy —
 * a failure with no error attached to it, which is the worst kind.
 *
 * Run once per environment, against whichever database that environment uses:
 *
 *   npm run migrate:trips
 *
 * Safe to re-run. It only touches values that still start with `/experiences`,
 * so a second run finds nothing and changes nothing. Run it against production
 * as well as locally — the local SQLite file and the hosted Postgres are
 * separate databases and both hold these records.
 *
 * `next.config.ts` redirects the old URLs, so this is about record matching,
 * not about visitors' links breaking.
 */

const OLD = "/experiences";
const NEW = "/trips";

/** Rewrites a stored path, or returns null when there is nothing to do. */
function repoint(value: unknown): string | null {
  if (typeof value !== "string") return null;
  if (value !== OLD && !value.startsWith(`${OLD}/`)) return null;
  return NEW + value.slice(OLD.length);
}

async function main() {
  const payload = await getPayload({ config });

  const heroes = await payload.find({
    collection: "heroes",
    limit: 1000,
    pagination: false,
  });

  let updated = 0;

  for (const hero of heroes.docs) {
    // Every field on a banner that can hold a site path. `page` is the one
    // that matters for matching; the two CTA hrefs are links the editor may
    // have pointed at a trip page by hand.
    const patch: Record<string, string> = {};

    const page = repoint(hero.page);
    if (page) patch.page = page;

    const ctaHref = repoint(hero.ctaHref);
    if (ctaHref) patch.ctaHref = ctaHref;

    const secondaryCtaHref = repoint(hero.secondaryCtaHref);
    if (secondaryCtaHref) patch.secondaryCtaHref = secondaryCtaHref;

    if (Object.keys(patch).length === 0) continue;

    await payload.update({
      collection: "heroes",
      id: hero.id,
      data: patch,
    });

    updated += 1;
    console.log(`  ${hero.pageName}: ${hero.page} → ${patch.page ?? hero.page}`);
  }

  // Events carry an external registration URL rather than a site path, so
  // they are reported rather than rewritten — an off-site booking link that
  // happens to contain the word is not ours to edit.
  const events = await payload.find({
    collection: "events",
    limit: 1000,
    pagination: false,
  });

  const suspectEvents = events.docs.filter((event) =>
    typeof event.registrationUrl === "string" &&
    event.registrationUrl.includes(OLD),
  );

  console.log(`\n  ${updated} banner(s) repointed.`);

  if (suspectEvents.length > 0) {
    console.log(
      `\n  ${suspectEvents.length} event(s) have a registration URL containing "${OLD}".`,
    );
    console.log("  These were NOT changed — check each one by hand:");
    for (const event of suspectEvents) {
      console.log(`    - ${event.title}: ${event.registrationUrl}`);
    }
  }

  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
