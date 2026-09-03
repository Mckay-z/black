import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
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
   * The adapter follows `DATABASE_URI`, so the same config serves both
   * environments without an edit between them.
   *
   * SQLite keeps local work zero-config: no database server to install, and
   * the whole dataset is one file. It is NOT usable on a serverless host —
   * Vercel's filesystem is read-only outside `/tmp` and wiped between
   * invocations, and `cms-data.db` is gitignored so it is not deployed at all.
   * Left on SQLite there, the public site still renders (every read in
   * `lib/cms.ts` falls back to hardcoded content) but `/admin` cannot start.
   *
   * So production sets `DATABASE_URI` to a Postgres connection string and gets
   * `postgresAdapter`; anything else — including unset — stays on the local
   * file. See "Going to production" in CMS.md.
   */
  db: process.env.DATABASE_URI?.startsWith("postgres")
    ? postgresAdapter({
        pool: { connectionString: process.env.DATABASE_URI },
      })
    : sqliteAdapter({
        client: { url: process.env.DATABASE_URI || "file:./cms-data.db" },
      }),

  /**
   * Uploads go to Vercel Blob in production and stay on disk locally.
   *
   * `Media.upload.staticDir` writes to `public/media`, which has the same
   * problem as the SQLite file: gitignored, and on a serverless host both
   * read-only and ephemeral, so an uploaded image would 404 on the next
   * invocation.
   *
   * The plugin disables itself when the token is unset and lets Payload fall
   * back to local storage, which is exactly what local development wants — so
   * this needs no environment branch of its own. Vercel injects
   * `BLOB_READ_WRITE_TOKEN` once a Blob store is attached to the project.
   */
  plugins: [
    vercelBlobStorage({
      collections: { media: true },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],

  sharp,

  // Payload's own REST/GraphQL API lives under /api/*, kept clear of the
  // site's own routes by the (payload) route group.
  routes: { admin: "/admin", api: "/api" },

  cors: process.env.NEXT_PUBLIC_SITE_URL
    ? [process.env.NEXT_PUBLIC_SITE_URL]
    : [],
});
