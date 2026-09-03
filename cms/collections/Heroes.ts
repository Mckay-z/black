import type { CollectionConfig } from "payload";
import { signedIn, publishedOrSignedIn } from "../access";
import { statusField } from "../fields";

/**
 * The banner at the top of each page — headline, lede, background photo and
 * buttons.
 *
 * Keyed by route path rather than being a field on a page, because the site's
 * pages are hand-built React rather than CMS-assembled. One record per page is
 * seeded on first run, so the client edits an existing entry from a list
 * instead of having to know what to create.
 *
 * A missing or draft record is not an error: the page falls back to the
 * headline and photo already hardcoded in its component.
 */
export const Heroes: CollectionConfig = {
  slug: "heroes",
  labels: { singular: "Page Banner", plural: "Page Banners" },
  admin: {
    group: "Page Content",
    useAsTitle: "pageName",
    defaultColumns: ["pageName", "page", "status"],
    description:
      "The headline and background photo at the top of each page. Editing one here overrides what the page ships with.",
  },
  access: {
    read: publishedOrSignedIn,
    create: signedIn,
    update: signedIn,
    delete: signedIn,
  },
  fields: [
    {
      name: "pageName",
      type: "text",
      required: true,
      admin: { description: 'Friendly name shown in this list, e.g. "Ghana Experience".' },
    },
    {
      name: "page",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        position: "sidebar",
        description: 'The page address this banner belongs to, e.g. "/experiences/ghana".',
      },
    },
    statusField,
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      admin: {
        description:
          "The background photo. Leave empty to keep the photo the page already uses.",
      },
    },
    {
      name: "heading",
      type: "text",
      admin: { description: "The large headline. Leave empty to keep the current one." },
    },
    {
      name: "highlight",
      type: "text",
      admin: {
        description:
          "Optional trailing words shown in the brand accent colour.",
      },
    },
    {
      name: "description",
      type: "textarea",
      maxLength: 300,
      admin: { description: "The paragraph under the headline." },
    },
    {
      type: "collapsible",
      label: "Buttons",
      fields: [
        {
          type: "row",
          fields: [
            { name: "ctaLabel", type: "text", admin: { width: "50%", placeholder: "REGISTER NOW" } },
            { name: "ctaHref", type: "text", admin: { width: "50%", placeholder: "/experiences/ghana/register" } },
          ],
        },
        {
          type: "row",
          fields: [
            { name: "secondaryCtaLabel", type: "text", admin: { width: "50%" } },
            { name: "secondaryCtaHref", type: "text", admin: { width: "50%" } },
          ],
        },
      ],
    },
  ],
};
