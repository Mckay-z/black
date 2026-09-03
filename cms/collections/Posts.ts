import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { signedIn, publishedOrSignedIn } from "../access";
import { statusField, slugField } from "../fields";

/**
 * Blog posts.
 *
 * This collection also closes an existing bug: the blog index links to
 * `/resources/blog/{slug}`, a route that never existed, so every card 404'd.
 * The new `[slug]` page reads from here.
 */
export const Posts: CollectionConfig = {
  slug: "posts",
  labels: { singular: "Blog Post", plural: "Blog Posts" },
  admin: {
    group: "Content",
    useAsTitle: "title",
    defaultColumns: ["title", "category", "publishedDate", "status"],
    description: "Articles shown on the Resources → Blog page.",
  },
  access: {
    read: publishedOrSignedIn,
    create: signedIn,
    update: signedIn,
    delete: signedIn,
  },
  versions: { drafts: true },
  fields: [
    { name: "title", type: "text", required: true },
    slugField(),
    statusField,
    {
      name: "category",
      type: "select",
      required: true,
      defaultValue: "Leadership",
      options: [
        "Leadership",
        "Global Experiences",
        "Professional Development",
        "Advocacy",
        "Wellness",
        "Student Life",
      ].map((c) => ({ label: c, value: c })),
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
      maxLength: 220,
      admin: { description: "The short summary shown on the blog index card." },
    },
    {
      name: "content",
      type: "richText",
      required: true,
      editor: lexicalEditor({}),
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      admin: { description: "Falls back to a stock site photo if left empty." },
    },
    {
      name: "publishedDate",
      type: "date",
      required: true,
      defaultValue: () => new Date().toISOString(),
      admin: { position: "sidebar", date: { pickerAppearance: "dayOnly" } },
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "people",
      admin: { position: "sidebar" },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Show this post large at the top of the blog page.",
      },
    },
    {
      name: "readTime",
      type: "text",
      admin: {
        position: "sidebar",
        description: 'e.g. "6 min read". Calculated automatically if blank.',
      },
    },
  ],
  hooks: {
    // Estimate reading time from the Lexical body so editors never have to.
    beforeChange: [
      ({ data }) => {
        if (!data.readTime && data.content) {
          const words = JSON.stringify(data.content).split(/\s+/).length;
          data.readTime = `${Math.max(1, Math.round(words / 200))} min read`;
        }
        return data;
      },
    ],
  },
};
