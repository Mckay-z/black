import type { CollectionConfig } from "payload";
import { anyone, signedIn } from "../access";

/**
 * Every image the client uploads through the dashboard.
 *
 * Files land in `public/media/` so Next serves them straight from `/media/...`
 * with no extra route. Sharp generates the resized variants below on upload,
 * which is what keeps hero backgrounds from shipping a 4MB original.
 *
 * The pre-existing curated photos in `public/photos/` are untouched and remain
 * the fallback wherever the client has not uploaded a replacement.
 */
export const Media: CollectionConfig = {
  slug: "media",
  admin: { group: "Content" },
  access: { read: anyone, create: signedIn, update: signedIn, delete: signedIn },
  upload: {
    staticDir: "public/media",
    mimeTypes: ["image/*"],
    // Widths chosen to match how the site actually uses images: full-bleed
    // heroes, half-width cards, and small avatars/logos.
    imageSizes: [
      { name: "thumbnail", width: 400, height: 300, position: "centre" },
      { name: "card", width: 800, position: "centre" },
      { name: "hero", width: 1920, position: "centre" },
    ],
    adminThumbnail: "thumbnail",
    focalPoint: true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      admin: {
        description:
          "Describe the image for screen readers and search engines. Required.",
      },
    },
    {
      name: "credit",
      type: "text",
      admin: { description: "Optional photographer or source credit." },
    },
  ],
};
