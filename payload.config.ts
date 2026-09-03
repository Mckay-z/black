import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";

import { Users } from "./cms/collections/Users";
import { Media } from "./cms/collections/Media";
import { Posts } from "./cms/collections/Posts";
import { Events } from "./cms/collections/Events";
import { People } from "./cms/collections/People";
import { Testimonials } from "./cms/collections/Testimonials";
import { Stats } from "./cms/collections/Stats";
import { Heroes } from "./cms/collections/Heroes";
import { Submissions } from "./cms/collections/Submissions";
import { Documents } from "./cms/collections/Documents";
import { SiteSettings } from "./cms/globals/SiteSettings";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },

    meta: {
      titleSuffix: " · Black in Rehab",
      description:
        "Content dashboard for the Black in Rehab Foundation website.",
      icons: [{ rel: "icon", type: "image/png", url: "/icon.png" }],
    },

    // Replaces Payload's own branding and fills the gaps its stock dashboard
    // leaves. Paths resolve against `importMap.baseDir` (the project root); the
    // part after `#` is the named export. Anything added here has to be
    // re-registered in `app/(payload)/admin/importMap.js` — `next dev`
    // regenerates that automatically, or run `npm run generate:importmap`.
    components: {
      // Only `Logo` (the login screen wordmark). `Icon` — the mark Payload puts
      // in its own breadcrumb — is deliberately not set: the brand lives in the
      // sidebar masthead now, and Payload's `StepNav` is hidden wholesale in
      // `custom.scss` in favour of `Breadcrumbs`, so nothing renders `Icon` at
      // all any more.
      graphics: {
        Logo: "/cms/components/AdminLogo#AdminLogo",
      },

      // Login screen: what this is, above the form — and a way back to the
      // public site below it. Logging out lands here, so this is the only
      // screen that can offer that exit.
      beforeLogin: ["/cms/components/BeforeLogin#BeforeLogin"],
      afterLogin: ["/cms/components/SiteLinks#BackToSite"],

      // Top of the sidebar, above the collection links — the dashboard's
      // masthead.
      beforeNavLinks: ["/cms/components/NavBrand#NavBrand"],

      // Top right of every admin view, beside the account menu. Payload can
      // already do both themes but hides the control in the account screen;
      // ThemeToggle drives the same provider, so the cookie, the `data-theme`
      // attribute and that screen all stay in agreement.
      actions: [
        // `actions` is the only component slot inside `.app-header`, so the
        // breadcrumb trail is registered here and moved back to the left of
        // the row in `custom.scss`. Payload's own `StepNav` is hidden there.
        "/cms/components/Breadcrumbs#Breadcrumbs",
        "/cms/components/ThemeToggle#ThemeToggle",
        "/cms/components/SiteLinks#ViewSiteButton",
      ],

      // Above the collection cards on /admin: greeting, quick actions, and the
      // count of form submissions still waiting to be actioned.
      beforeDashboard: ["/cms/components/DashboardWelcome#DashboardWelcome"],

      // Payload's own logout control is an unlabelled icon. This is the same
      // link with the word "Log out" beside it.
      logout: {
        Button: "/cms/components/LogoutButton#LogoutButton",
      },
    },
  },

  collections: [
    // Content the client edits day to day.
    Posts,
    Events,
    People,
    Testimonials,
    Stats,
    Heroes,
    Media,
    // Read-only inbox.
    Submissions,
    Documents,
    // Account management.
    Users,
  ],

  globals: [SiteSettings],

  editor: lexicalEditor({}),

  // Signs auth cookies. Without it, sessions are forgeable — the app refuses
  // to boot rather than fall back to a default.
  secret: process.env.PAYLOAD_SECRET || "",

  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },

  /**
   * SQLite keeps the dashboard zero-config: no database server to install,
   * and the whole dataset is one committed-out file. That is the right trade
   * for local work and the client demo.
   *
   * It is NOT right for a serverless deploy (Vercel's filesystem is ephemeral,
   * so writes vanish between invocations). Swapping to Postgres is two lines —
   * see the "Going to production" section of CMS.md.
   */
  db: sqliteAdapter({
    client: { url: process.env.DATABASE_URI || "file:./cms-data.db" },
  }),

  sharp,

  // Payload's own REST/GraphQL API lives under /api/*, kept clear of the
  // site's own routes by the (payload) route group.
  routes: { admin: "/admin", api: "/api" },

  cors: process.env.NEXT_PUBLIC_SITE_URL
    ? [process.env.NEXT_PUBLIC_SITE_URL]
    : [],
});
