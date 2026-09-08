import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { signedIn, publishedOrSignedIn } from "../access";
import { statusField, slugField, orderField } from "../fields";

/**
 * Founders, leadership team, speakers and city ambassadors — one record per
 * person, tagged by the groups they belong to.
 *
 * A single collection (rather than one per page) means a person who is both a
 * founder and a speaker is edited once and stays consistent everywhere. It
 * also replaces the six leadership profiles whose LinkedIn links were all
 * dead `#` placeholders.
 */
export const People: CollectionConfig = {
  slug: "people",
  admin: {
    group: "Content",
    useAsTitle: "name",
    defaultColumns: ["name", "role", "groups", "status"],
    description: "Founders, leadership, speakers and ambassadors.",
  },
  access: {
    read: publishedOrSignedIn,
    create: signedIn,
    update: signedIn,
    delete: signedIn,
  },
  fields: [
    { name: "name", type: "text", required: true },
    slugField("name"),
    statusField,
    {
      name: "role",
      type: "text",
      required: true,
      admin: { placeholder: "Co-Founder & Executive Director" },
    },
    {
      name: "groups",
      type: "select",
      hasMany: true,
      required: true,
      options: [
        { label: "Founder", value: "founder" },
        { label: "Leadership Team", value: "leadership" },
        { label: "Speaker", value: "speaker" },
        { label: "Ambassador", value: "ambassador" },
      ],
      admin: {
        description:
          "Which pages this person appears on. A person can be in several.",
      },
    },
    { name: "photo", type: "upload", relationTo: "media" },
    {
      name: "shortBio",
      type: "textarea",
      // Raised from 300 to fit the bios the client actually supplied — the
      // shortest of the four leadership paragraphs is already over 350
      // characters. Nothing truncates this field, so a longer bio only makes
      // its card or profile row taller.
      maxLength: 600,
      admin: {
        description:
          "One paragraph. Shown on the leadership and ambassador pages, and on card listings.",
      },
    },
    {
      name: "bio",
      type: "richText",
      editor: lexicalEditor({}),
      admin: { description: "Full biography for this person's own page." },
    },
    {
      name: "city",
      type: "text",
      admin: {
        description: "Ambassadors only — the city they represent.",
        condition: (_, siblingData) => siblingData?.groups?.includes("ambassador"),
      },
    },
    {
      name: "speakingTopics",
      type: "array",
      admin: {
        condition: (_, siblingData) => siblingData?.groups?.includes("speaker"),
      },
      fields: [{ name: "topic", type: "text", required: true }],
    },
    {
      type: "collapsible",
      label: "Contact & Social Links",
      admin: {
        description:
          "Left blank, the link is hidden rather than rendered as a dead link.",
      },
      fields: [
        { name: "email", type: "email" },
        { name: "linkedin", type: "text", admin: { placeholder: "https://linkedin.com/in/…" } },
        { name: "instagram", type: "text" },
        { name: "website", type: "text" },
      ],
    },
    orderField,
  ],
};
