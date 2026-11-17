import type { CollectionConfig } from "payload";
import { adminOnly, signedIn } from "../access";
import { requestRebuild } from "../rebuild";

/**
 * Every photo on the public site, listed by name so it can be replaced.
 *
 * The records are created for you: each build adds one per photo in
 * `lib/images.ts` (see `scripts/prepare-photos.ts`). Editors only ever pick a
 * replacement; they cannot add or delete entries, and the name, key and
 * original photo are read-only.
 *
 * A replacement is applied when the site is built, and saving one asks Vercel
 * for a new build, so it appears on the site a couple of minutes later.
 * Leaving "Replacement photo" empty keeps the original.
 */
export const SiteImages: CollectionConfig = {
  slug: "site-images",
  labels: { singular: "Site Photo", plural: "Site Photos" },
  admin: {
    group: "Content",
    useAsTitle: "label",
    defaultColumns: ["label", "group", "image"],
    listSearchableFields: ["label", "key", "group"],
    description:
      "Every photo on the website. Open one, choose a replacement photo and save. The change goes live in about two minutes. Leave the replacement empty to keep the original.",
  },
  access: {
    read: signedIn,
    create: adminOnly,
    update: signedIn,
    delete: adminOnly,
  },
  defaultSort: "group",
  hooks: {
    afterChange: [
      async ({ doc, previousDoc }) => {
        const before = previousDoc?.image ?? null;
        const after = doc?.image ?? null;
        const beforeId = typeof before === "object" && before ? before.id : before;
        const afterId = typeof after === "object" && after ? after.id : after;
        if (beforeId !== afterId) await requestRebuild();
        return doc;
      },
    ],
  },
  fields: [
    {
      name: "label",
      type: "text",
      required: true,
      admin: { readOnly: true, description: "Where this photo is used." },
    },
    {
      name: "group",
      type: "text",
      index: true,
      admin: { readOnly: true, position: "sidebar" },
    },
    {
      name: "key",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: { readOnly: true, position: "sidebar", description: "Internal name." },
    },
    {
      name: "defaultPath",
      type: "text",
      admin: { hidden: true },
    },
    {
      name: "preview",
      type: "ui",
      admin: {
        components: { Field: "/cms/components/CurrentPhoto#CurrentPhoto" },
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Replacement photo",
      admin: {
        description:
          "Pick a photo from the library or upload a new one. Remove it to go back to the original.",
      },
    },
  ],
};
