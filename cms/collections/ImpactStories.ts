import type { CollectionConfig } from "payload";
import { signedIn, publishedOrSignedIn } from "../access";
import { statusField, orderField } from "../fields";

/**
 * Photos and videos of the work itself — the people served, the bookbags
 * handed out, the scholarship recipients.
 *
 * This is what the Impact page is now built from. It replaced three
 * paragraphs describing programmes in the abstract, because the client asked
 * for evidence rather than prose: "pictures and videos of the people they
 * helped going about stuff, not all the text on advocacy and stuff."
 *
 * A story is a picture first. `image` is required even on a video entry,
 * where it doubles as the poster frame — so the grid always has something to
 * render and never depends on a third-party embed loading.
 */
export const ImpactStories: CollectionConfig = {
  slug: "impact-stories",
  admin: {
    group: "Content",
    useAsTitle: "title",
    defaultColumns: ["title", "category", "status", "featured"],
    description:
      "Photos and videos from the field, shown on the Impact page and the homepage.",
  },
  access: {
    read: publishedOrSignedIn,
    create: signedIn,
    update: signedIn,
    delete: signedIn,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      admin: {
        placeholder: "Bookbag drive, Accra",
        description:
          "A short label for this photo or video. Shown on the card.",
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      defaultValue: "community",
      options: [
        { label: "Community Highlights", value: "community" },
        { label: "Scholarships", value: "scholarships" },
        { label: "Bookbags", value: "bookbags" },
      ],
      admin: {
        description: "Groups the item under one of the three filters.",
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description:
          "The photo. On a video entry this is the still shown before it plays, so pick a clear frame.",
      },
    },
    {
      name: "videoUrl",
      type: "text",
      admin: {
        placeholder: "https://www.youtube.com/watch?v=…",
        description:
          "Optional. Paste a YouTube or Vimeo link, or a direct .mp4 address. Leave blank for a photo-only entry.",
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
      name: "caption",
      type: "textarea",
      maxLength: 200,
      admin: {
        description:
          "Optional. One line of context — who this is and what is happening. Keep it short; the picture is the point.",
      },
    },
    statusField,
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Also show this one in the Impact section of the homepage.",
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
          "Confirm everyone pictured agreed to appear on the website — and that a parent or guardian agreed for anyone under 18.",
      },
    },
    orderField,
  ],
};
