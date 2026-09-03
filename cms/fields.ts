import type { Field } from "payload";

/**
 * Publish state used by every content collection. Keeping it in one place
 * means the dashboard reads the same on every screen and the public-site
 * queries can filter on a single consistent field.
 */
export const statusField: Field = {
  name: "status",
  type: "select",
  required: true,
  defaultValue: "draft",
  options: [
    { label: "Draft — not visible on the site", value: "draft" },
    { label: "Published — live on the site", value: "published" },
  ],
  admin: { position: "sidebar" },
};

/**
 * URL slug, auto-filled from a title field if the editor leaves it blank so
 * non-technical users never have to think about URLs.
 */
export const slugField = (from = "title"): Field => ({
  name: "slug",
  type: "text",
  required: true,
  unique: true,
  index: true,
  admin: {
    position: "sidebar",
    description: "The web address for this item. Leave blank to generate one.",
  },
  hooks: {
    beforeValidate: [
      ({ value, data }) => {
        if (value) return slugify(value);
        const source = data?.[from];
        return typeof source === "string" ? slugify(source) : value;
      },
    ],
  },
});

/** Controls hand-ordering of cards on the public site. Lower shows first. */
export const orderField: Field = {
  name: "order",
  type: "number",
  defaultValue: 0,
  admin: {
    position: "sidebar",
    description: "Lower numbers appear first on the website.",
  },
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
