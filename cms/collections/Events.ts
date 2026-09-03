import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { signedIn, publishedOrSignedIn } from "../access";
import { statusField, slugField, orderField } from "../fields";

/**
 * Conferences, retreats, global trips, local events and ambassador meetups.
 *
 * Replaces roughly thirty hardcoded 2025/2026 dates and every trip price that
 * was previously baked into page source — the two things guaranteed to go
 * stale and embarrass the client.
 */
export const Events: CollectionConfig = {
  slug: "events",
  admin: {
    group: "Content",
    useAsTitle: "title",
    defaultColumns: ["title", "type", "startDate", "location", "status"],
    description:
      "Every dated event on the site. Dates and prices here drive the Experiences pages.",
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
      name: "type",
      type: "select",
      required: true,
      options: [
        { label: "Annual Conference", value: "conference" },
        { label: "Wellness Retreat", value: "wellness-retreat" },
        { label: "Leadership Retreat", value: "leadership-retreat" },
        { label: "Global Experience (Ghana, Jamaica…)", value: "global" },
        { label: "Local Event", value: "local" },
        { label: "Ambassador Meetup", value: "meetup" },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "startDate",
          type: "date",
          required: true,
          admin: { width: "50%", date: { pickerAppearance: "dayOnly" } },
        },
        {
          name: "endDate",
          type: "date",
          admin: {
            width: "50%",
            date: { pickerAppearance: "dayOnly" },
            description: "Leave blank for a single-day event.",
          },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "location",
          type: "text",
          required: true,
          admin: { width: "50%", placeholder: "Atlanta, GA" },
        },
        {
          name: "price",
          type: "text",
          admin: {
            width: "50%",
            placeholder: "$299",
            description: 'Displayed as typed. Use "Free" where there is no cost.',
          },
        },
      ],
    },
    {
      name: "summary",
      type: "textarea",
      required: true,
      maxLength: 300,
      admin: { description: "One or two lines shown on event cards." },
    },
    { name: "description", type: "richText", editor: lexicalEditor({}) },
    { name: "image", type: "upload", relationTo: "media" },
    {
      name: "registrationUrl",
      type: "text",
      admin: {
        description:
          "Where the Register button goes. Leave blank to use the built-in registration form.",
      },
    },
    {
      name: "registrationOpen",
      type: "checkbox",
      defaultValue: true,
      admin: { position: "sidebar" },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Show on the homepage Upcoming Events section.",
      },
    },
    orderField,
  ],
};
