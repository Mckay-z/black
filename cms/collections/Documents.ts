import type { CollectionConfig } from "payload";
import { signedIn, adminOnly } from "../access";

/**
 * Files attached to form submissions — recommendation letters, proof of
 * enrolment, and anything else an applicant uploads.
 *
 * Unlike Media, this collection is NOT publicly readable. Scholarship
 * applications contain personal information about named students, so the
 * files are stored outside `public/` and served only through Payload's access
 * check to a signed-in staff member. Putting them in `public/` would make
 * every uploaded document guessable by URL.
 */
export const Documents: CollectionConfig = {
  slug: "documents",
  labels: { singular: "Attachment", plural: "Attachments" },
  admin: {
    group: "Inbox",
    description: "Files submitted with applications. Visible to staff only.",
    defaultColumns: ["filename", "formType", "createdAt"],
  },
  access: {
    // Anonymous applicants must be able to attach a file when they apply.
    create: () => true,
    read: signedIn,
    update: signedIn,
    delete: adminOnly,
  },
  upload: {
    staticDir: "private-uploads",
    // Deliberately narrow: these are application documents, not images.
    mimeTypes: ["application/pdf"],
    disableLocalStorage: false,
  },
  fields: [
    {
      name: "formType",
      type: "text",
      admin: { readOnly: true, description: "Which form this file arrived with." },
    },
    {
      name: "fieldName",
      type: "text",
      admin: { readOnly: true, description: "Which question it answers." },
    },
  ],
};
