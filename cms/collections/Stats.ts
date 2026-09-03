import type { CollectionConfig } from "payload";
import { signedIn, publishedOrSignedIn } from "../access";
import { statusField, orderField } from "../fields";

/**
 * The headline impact numbers.
 *
 * The values shipped in the current build are unverified — including a
 * "Countless" for Lives Transformed — so they are the first thing a client
 * will want to correct. Each stat carries an optional private source note so
 * whoever edits it later knows where the figure came from.
 */
export const Stats: CollectionConfig = {
  slug: "stats",
  labels: { singular: "Impact Statistic", plural: "Impact Statistics" },
  admin: {
    group: "Content",
    useAsTitle: "label",
    defaultColumns: ["label", "value", "placement", "status"],
    description: "The big numbers shown on the homepage and Impact pages.",
  },
  access: {
    read: publishedOrSignedIn,
    create: signedIn,
    update: signedIn,
    delete: signedIn,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "value",
          type: "text",
          required: true,
          admin: { width: "40%", placeholder: "10K+" },
        },
        {
          name: "label",
          type: "text",
          required: true,
          admin: { width: "60%", placeholder: "Professionals Empowered" },
        },
      ],
    },
    {
      name: "icon",
      type: "select",
      required: true,
      defaultValue: "Users",
      options: [
        "Users",
        "BookOpen",
        "GraduationCap",
        "Globe",
        "HeartHandshake",
        "Stethoscope",
        "HandHeart",
      ].map((i) => ({ label: i, value: i })),
      admin: { description: "The icon shown above the number." },
    },
    {
      name: "placement",
      type: "select",
      hasMany: true,
      required: true,
      defaultValue: ["homepage"],
      options: [
        { label: "Homepage", value: "homepage" },
        { label: "Impact page", value: "impact" },
        { label: "Community Service page", value: "service" },
        { label: "Online Community page", value: "community-online" },
      ],
    },
    statusField,
    {
      name: "sourceNote",
      type: "textarea",
      admin: {
        position: "sidebar",
        description:
          "Internal only — never shown on the website. Record where this figure comes from.",
      },
    },
    orderField,
  ],
};
