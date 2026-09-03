import type { CollectionConfig } from "payload";
import { signedIn, adminOnly } from "../access";

/**
 * The inbox for every form on the site.
 *
 * Before this, all six registration/application forms called
 * `e.preventDefault(); setSubmitted(true)` and threw the data away — a visitor
 * saw "thank you" while nothing was recorded anywhere. Newsletter and contact
 * had no handler at all.
 *
 * `create` is deliberately public (that is how an anonymous visitor submits),
 * but reading requires a login, and the fields are locked read-only in the
 * dashboard so a record of what someone actually sent cannot be edited after
 * the fact. Only the triage fields (`handled`, `notes`) accept changes.
 */
export const Submissions: CollectionConfig = {
  slug: "submissions",
  labels: { singular: "Form Submission", plural: "Form Submissions" },
  admin: {
    group: "Inbox",
    useAsTitle: "summary",
    defaultColumns: ["summary", "formType", "email", "handled", "createdAt"],
    description:
      "Everything sent through the website's forms. Newest first.",
  },
  access: {
    create: () => true, // public visitors submit forms
    read: signedIn,
    update: signedIn,
    delete: adminOnly,
  },
  defaultSort: "-createdAt",
  fields: [
    {
      name: "formType",
      type: "select",
      required: true,
      options: [
        { label: "Contact", value: "contact" },
        { label: "Newsletter Signup", value: "newsletter" },
        { label: "Membership Registration", value: "membership" },
        { label: "Conference Registration", value: "conference" },
        { label: "Ghana Trip Registration", value: "ghana" },
        { label: "Retreat Registration", value: "retreat" },
        { label: "Scholarship Application", value: "scholarship" },
        { label: "Speaker Booking Request", value: "speaker-booking" },
        { label: "Volunteer Interest", value: "volunteer" },
        { label: "Partnership Enquiry", value: "partnership" },
      ],
      admin: { readOnly: true },
    },
    {
      name: "summary",
      type: "text",
      admin: {
        readOnly: true,
        description: "Auto-generated label for the list view.",
      },
    },
    {
      type: "row",
      fields: [
        { name: "name", type: "text", admin: { width: "50%", readOnly: true } },
        { name: "email", type: "email", admin: { width: "50%", readOnly: true } },
      ],
    },
    { name: "phone", type: "text", admin: { readOnly: true } },
    {
      name: "message",
      type: "textarea",
      admin: { readOnly: true },
    },
    {
      name: "data",
      type: "json",
      admin: {
        readOnly: true,
        description:
          "Every remaining field exactly as the visitor submitted it.",
      },
    },
    // ── Triage: the only fields staff may change ────────────────────────
    {
      name: "handled",
      type: "checkbox",
      defaultValue: false,
      admin: { position: "sidebar", description: "Tick once actioned." },
    },
    {
      name: "notes",
      type: "textarea",
      admin: { position: "sidebar", description: "Internal notes. Never public." },
    },
    {
      name: "meta",
      type: "group",
      admin: { readOnly: true, position: "sidebar" },
      fields: [
        { name: "sourceUrl", type: "text" },
        { name: "userAgent", type: "text" },
      ],
    },
  ],
  hooks: {
    // Build the list-view label server-side so it cannot be spoofed.
    beforeChange: [
      ({ data, operation }) => {
        if (operation === "create") {
          const who = data.name || data.email || "Anonymous";
          data.summary = `${who} — ${data.formType}`;
        }
        return data;
      },
    ],
  },
};
