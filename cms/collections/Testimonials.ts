import type { CollectionConfig } from "payload";
import { signedIn, publishedOrSignedIn } from "../access";
import { statusField, orderField } from "../fields";

/**
 * Member quotes.
 *
 * Every testimonial currently on the site is invented ("Jasmine R.", "Derrick
 * M.", "Bria L."), as the component's own comment admits. Real attributed
 * quotes get entered here; until then nothing is published and the site keeps
 * showing the placeholder set.
 */
export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: {
    group: "Content",
    useAsTitle: "author",
    defaultColumns: ["author", "role", "placement", "status"],
    description: "Member and sponsor quotes used across the site.",
  },
  access: {
    read: publishedOrSignedIn,
    create: signedIn,
    update: signedIn,
    delete: signedIn,
  },
  fields: [
    {
      name: "quote",
      type: "textarea",
      required: true,
      maxLength: 400,
      admin: { description: "The quote itself, without surrounding quote marks." },
    },
    { name: "author", type: "text", required: true, admin: { placeholder: "Jasmine R." } },
    {
      name: "role",
      type: "text",
      required: true,
      admin: { placeholder: "OTR/L", description: "Credentials or job title." },
    },
    statusField,
    {
      name: "placement",
      type: "select",
      hasMany: true,
      required: true,
      defaultValue: ["homepage"],
      options: [
        { label: "Homepage", value: "homepage" },
        { label: "Sponsor Impact page", value: "sponsor-impact" },
        { label: "Student Support page", value: "student-support" },
        { label: "Scholarships page", value: "scholarships" },
      ],
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      admin: {
        description:
          "Optional. With no photo the card shows the person's initials instead. On a video testimonial this is the still shown before it plays, so pick a clear frame.",
      },
    },
    {
      // The client asked for video testimonials — people talking about what
      // Black in Rehab has meant to them. Same shape as Impact Stories: the
      // video lives on YouTube or Vimeo and is referenced by link, because
      // the Media collection takes images only.
      name: "videoUrl",
      type: "text",
      admin: {
        placeholder: "https://www.youtube.com/watch?v=…",
        description:
          "Optional. Paste a YouTube or Vimeo link, or a direct .mp4 address, and this testimonial becomes a video. Leave blank for a written quote.",
      },
      validate: (value: string | null | undefined) => {
        if (!value) return true;
        let url: URL;
        try {
          url = new URL(value);
        } catch {
          return "Enter a full web address, starting with https://";
        }
        if (url.protocol !== "https:") return "The address must start with https://";
        return true;
      },
    },
    {
      name: "consentGiven",
      type: "checkbox",
      defaultValue: false,
      required: true,
      admin: {
        position: "sidebar",
        description:
          "Confirm this person agreed to their name and quote being published.",
      },
    },
    orderField,
  ],
};
