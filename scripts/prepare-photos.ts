import "dotenv/config";
import fs from "fs";
import path from "path";
import { getPayload } from "payload";
import config from "../payload.config";
import { DEFAULT_PHOTOS } from "../lib/images";

/**
 * Runs before every build (`prebuild` in package.json).
 *
 * 1. Makes sure the dashboard's Site Photos list has one entry per photo in
 *    `lib/images.ts`, so new photos appear there without anyone adding them.
 * 2. Writes the replacements chosen in the dashboard to
 *    `lib/photo-overrides.generated.json`, which `lib/images.ts` lays over the
 *    originals.
 *
 * It can never fail the build: if the database is unreachable the file is left
 * as it is and the site builds with the originals (or the last known set).
 */

const OUT = path.resolve(process.cwd(), "lib/photo-overrides.generated.json");

/** "ghanaFreedomArch" -> "Ghana Freedom Arch". */
function labelFor(key: string) {
  return key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/^./, (c) => c.toUpperCase());
}

/** The first word of the key, used to group the list ("Ghana", "Team", ...). */
function groupFor(key: string) {
  const first = key.split(/(?=[A-Z])/)[0];
  return first.charAt(0).toUpperCase() + first.slice(1);
}

async function main() {
  const payload = await getPayload({ config });

  const existing = await payload.find({
    collection: "site-images",
    limit: 1000,
    depth: 1,
    pagination: false,
  });
  const byKey = new Map(existing.docs.map((doc) => [doc.key, doc]));

  let created = 0;
  for (const [key, defaultPath] of Object.entries(DEFAULT_PHOTOS)) {
    const doc = byKey.get(key);
    if (!doc) {
      await payload.create({
        collection: "site-images",
        data: { key, label: labelFor(key), group: groupFor(key), defaultPath },
      });
      created += 1;
    } else if (doc.defaultPath !== defaultPath) {
      await payload.update({
        collection: "site-images",
        id: doc.id,
        data: { defaultPath },
      });
    }
  }

  const overrides: Record<string, string> = {};
  for (const doc of existing.docs) {
    const image = doc.image;
    if (!image || typeof image !== "object") continue;
    // The 1920px version keeps a phone from downloading a 6MB original; it is
    // absent when the original is already smaller, so fall back to the file.
    const url = image.sizes?.hero?.url || image.url;
    if (url && doc.key in DEFAULT_PHOTOS) overrides[doc.key] = url;
  }

  const next = JSON.stringify(overrides, null, 2) + "\n";
  const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, "utf8") : "";
  if (next !== current) fs.writeFileSync(OUT, next);

  console.log(
    `[photos] ${created} new entries, ${Object.keys(overrides).length} replacement(s) applied.`,
  );
  process.exit(0);
}

main().catch((error) => {
  console.warn("[photos] skipped:", error instanceof Error ? error.message : error);
  process.exit(0);
});
