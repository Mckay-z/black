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
              defaultValue: "info@blackinrehab.com",
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
        {
          label: "BIR University",
          description:
            "The free monthly student sessions at /community/students. Every registration button on that page uses the URL below — change it here each month.",
          fields: [
            {
              name: "birUniversity",
              type: "group",
              label: false,
              fields: [
                {
                  name: "registrationUrl",
                  type: "text",
                  label: "Session registration URL",
                  defaultValue: "https://forms.gle/KQydD2QaPNkJxc3o8",
                  admin: {
                    description:
                      "The Google Form (or other link) for the next session. Used by every \"Register\" button on the page.",
                  },
                },
                {
                  name: "sessionTitle",
                  type: "text",
                  label: "Next session — title",
                  admin: { description: "Optional. Leave blank to hide the session details box." },
                },
                {
                  name: "sessionDate",
                  type: "text",
                  label: "Next session — date",
                  admin: { placeholder: "Thursday, November 13, 2026" },
                },
                {
                  name: "sessionTime",
                  type: "text",
                  label: "Next session — time",
                  admin: { placeholder: "7:00–8:30pm ET" },
                },
                {
                  name: "sessionDescription",
                  type: "textarea",
                  label: "Next session — description",
                },
              ],
            },
          ],
        },
        {
          label: "Accountability Lab",
          description:
            "Everything that changes between cohorts on /get-involved/accountability-lab. Blank fields fall back to the launch copy.",
          fields: [
            {
              name: "accountabilityLab",
              type: "group",
              label: false,
              fields: [
                {
                  name: "enrollmentStatus",
                  type: "textarea",
                  label: "Cohort / enrollment status",
                  defaultValue:
                    "Our current cohort has already started. We are accepting inquiries for the next cohort; the start date has not yet been announced.",
                },
                {
                  name: "nextCohortDates",
                  type: "text",
                  label: "Next cohort dates",
                  admin: {
                    description: "Optional. Shown only when filled in, e.g. \"January 12 – April 6, 2027\".",
                  },
                },
                {
                  name: "schedule",
                  type: "text",
                  label: "Session schedule",
                  admin: {
                    description: "Optional. Shown only when filled in, e.g. \"Tuesdays, 7pm ET\".",
                  },
                },
                {
                  name: "monthlyPrice",
                  type: "text",
                  label: "Monthly price line",
                  defaultValue: "$97 per month, month to month, plus processing fees.",
                },
                {
                  name: "fullPrice",
                  type: "text",
                  label: "Paid-in-full price line",
                  defaultValue: "$279 paid in full for the 12-week experience, plus processing fees.",
                },
                {
                  name: "advisoryPrice",
                  type: "text",
                  label: "Private advisory price",
                  defaultValue: "$130",
                },
                {
                  name: "waitlistUrl",
                  type: "text",
                  label: "Waitlist / inquiry button URL",
                  defaultValue:
                    "https://docs.google.com/forms/d/e/1FAIpQLSf0cn7pHpKCy2QhPM98s6PR8CvURMbwJ3Ro-covmxBPOtnhJA/viewform?usp=header",
                  admin: {
                    description:
                      "Every \"Join the Next Cohort Waitlist\" button on the site points here.",
                  },
                },
                {
                  name: "waitlistLabel",
                  type: "text",
                  label: "Button label",
                  defaultValue: "Join the Next Cohort Waitlist",
                  admin: {
                    description:
                      "Keep this a waitlist label while enrollment is closed — do not use \"Enroll Now\" until a cohort is actually open.",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
