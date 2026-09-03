import type { GlobalConfig } from "payload";
import { anyone, signedIn } from "../access";

/**
 * Organisation-wide details that appear in the header, footer and legal pages.
 *
 * The site currently hardcodes a single email address in six files and has no
 * phone number, address or social URLs at all — the footer's social icons and
 * roughly twenty other links point at `href="#"`. Anything left blank here
 * stays hidden rather than rendering as a dead link.
 */
export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  admin: {
    group: "Settings",
    description:
      "Contact details, social links and the notification address for form submissions.",
  },
  access: { read: anyone, update: signedIn },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Contact",
          fields: [
            {
              name: "email",
              type: "email",
              required: true,
              defaultValue: "info@blackinrehab.org",
            },
            { name: "phone", type: "text", admin: { placeholder: "+1 (555) 123-4567" } },
            {
              name: "address",
              type: "textarea",
              admin: { description: "Shown on the Contact page. Leave blank to hide." },
            },
            {
              name: "officeHours",
              type: "text",
              admin: { placeholder: "Mon–Fri, 9am–5pm ET" },
            },
          ],
        },
        {
          label: "Social Links",
          description:
            "Full URLs including https://. Any left blank has its icon hidden.",
          fields: [
            { name: "instagram", type: "text" },
            { name: "facebook", type: "text" },
            { name: "linkedin", type: "text" },
            { name: "youtube", type: "text" },
            { name: "twitter", type: "text", label: "X / Twitter" },
            { name: "tiktok", type: "text" },
          ],
        },
        {
          label: "Organisation",
          fields: [
            {
              name: "organisationName",
              type: "text",
              required: true,
              defaultValue: "Black in Rehab Foundation",
            },
            {
              name: "tagline",
              type: "text",
              defaultValue: "Healing Beyond Borders",
            },
            {
              name: "ein",
              type: "text",
              label: "EIN / Tax ID",
              admin: {
                description:
                  "Shown on the donation page. Donors ask for this at tax time.",
              },
            },
            {
              name: "nonprofitStatus",
              type: "text",
              defaultValue: "501(c)(3)",
            },
          ],
        },
        {
          label: "Notifications",
          fields: [
            {
              name: "notificationEmail",
              type: "email",
              admin: {
                description:
                  "Where an alert is sent each time someone submits a form. Defaults to the contact email.",
              },
            },
            {
              name: "notifyOnSubmission",
              type: "checkbox",
              defaultValue: true,
              admin: { description: "Email us when a form is submitted." },
            },
          ],
        },
        {
          label: "Donations",
          fields: [
            {
              name: "donationUrl",
              type: "text",
              admin: {
                description:
                  "Where the Donate button sends people (Givebutter, Donorbox, Stripe…). The button is disabled with a clear message until this is filled in.",
              },
            },
            {
              name: "donationProvider",
              type: "select",
              defaultValue: "none",
              options: [
                { label: "Not set up yet", value: "none" },
                { label: "External link", value: "external" },
              ],
            },
          ],
        },
      ],
    },
  ],
};
