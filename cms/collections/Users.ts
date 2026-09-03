import type { CollectionConfig } from "payload";

/**
 * Dashboard logins. Payload gives us email/password auth, sessions, password
 * reset and rate limiting from `auth: true` — we only add the role field.
 *
 * `admin` can edit everything; `editor` can manage content but not other
 * users. The first account is created through the /admin create-first-user
 * screen, after which public signup is closed (see `access.create`).
 */
export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    tokenExpiration: 60 * 60 * 8, // 8h working day
    maxLoginAttempts: 5,
    lockTime: 10 * 60 * 1000, // 10 min lockout
  },
  admin: {
    useAsTitle: "email",
    defaultColumns: ["name", "email", "role"],
    group: "Settings",
  },
  access: {
    // Only a signed-in admin can mint new accounts — no open registration.
    create: ({ req: { user } }) => user?.role === "admin",
    delete: ({ req: { user } }) => user?.role === "admin",
    // Editors may read and update only themselves; admins, anyone.
    read: ({ req: { user } }) =>
      user?.role === "admin" ? true : { id: { equals: user?.id } },
    update: ({ req: { user } }) =>
      user?.role === "admin" ? true : { id: { equals: user?.id } },
  },
  fields: [
    { name: "name", type: "text", required: true },
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "editor",
      options: [
        { label: "Administrator", value: "admin" },
        { label: "Editor", value: "editor" },
      ],
      admin: {
        description: "Editors manage content. Administrators also manage users.",
      },
      // Stop an editor promoting themselves to admin.
      access: { update: ({ req: { user } }) => user?.role === "admin" },
    },
  ],
};
