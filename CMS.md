# Content dashboard

The website is edited at **`/admin`**. No code, no deploy — save in the dashboard and the site updates.

Built on [Payload CMS 3](https://payloadcms.com), running inside this Next.js app. There is no second server to host, and the CMS shares the site's database and login.

---

## First run

```bash
npm install
npm run seed     # loads the dashboard with the content the site already shows
npm run dev
```

Then open **http://localhost:3000/admin** and create the first account. That screen appears only once; afterwards accounts are created from **Settings → Users** by an administrator. There is no public sign-up.

`npm run seed` is safe to run again — it matches on titles and slugs and skips anything already present, so it never duplicates or overwrites edited content.

---

## What the client can change

| Dashboard section | Controls |
|---|---|
| **Blog Posts** | Articles, with a rich-text editor, draft/publish, and a featured slot |
| **Events** | Conferences, retreats, Ghana/Jamaica trips, local events, meetups — dates, prices, locations |
| **People** | Founders, leadership, speakers, ambassadors — photo, bio, social links |
| **Impact Statistics** | The big numbers on the homepage and Impact pages |
| **Testimonials** | Member quotes, with placement per page |
| **Page Banners** | The headline and background photo at the top of each page |
| **Media** | Uploaded images, auto-resized |
| **Form Submissions** | Everything sent through the site's forms |
| **Site Settings** | Contact details, social links, donation link, notification address |

### Two things worth knowing

**Nothing you leave blank breaks the site.** Every page keeps the content it was built with as a fallback. Clear a headline and the original comes back; it does not go empty. That means the dashboard can be filled in over weeks rather than all at once.

**Draft means invisible.** A post or event stays off the public site until its status is *Published*.

---

## Page Banners

The banner is the coloured strip at the top of a page — headline, short paragraph, background photo, buttons.

One record exists per page, already named ("Ghana Experience", "FAQs", …). Open one and fill in only what you want to change. An empty field keeps whatever the page already has, so you can swap just the photo without retyping the copy.

---

## Form Submissions

Every form on the site writes here:

- Contact
- Newsletter signup
- Membership registration
- Conference / Ghana / Retreat registration
- Scholarship application (including PDF attachments)
- Speaker booking request

Submissions are **read-only** — the record of what someone actually sent cannot be edited afterwards. Only *Handled* and *Notes* accept changes, for triage.

Scholarship attachments go to **Attachments**, stored outside the public folder and visible only to signed-in staff. They contain named students' personal information and are not reachable by URL.

### Email notifications

An alert is meant to go to the address in **Site Settings → Notifications** on each submission. **No email provider is configured yet**, so right now that alert is written to the server log instead of being sent. Submissions are still saved — nothing is lost — but *nobody is notified by email until a provider is added*. See below.

---

## Still to set up

These are configuration, not code. Each is a real gap today.

### 1. Email delivery — required before launch

Install an adapter and add it to `payload.config.ts`:

```bash
npm install @payloadcms/email-nodemailer
```

```ts
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";

export default buildConfig({
  // …
  email: nodemailerAdapter({
    defaultFromAddress: "info@blackinrehab.org",
    defaultFromName: "Black in Rehab Foundation",
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    },
  }),
});
```

Without this, password-reset emails do not send either.

### 2. Donations — required before launch

The donate page's amount picker works, but the button needs somewhere to go. Paste the Givebutter / Donorbox / Stripe payment link into **Site Settings → Donations → Donation URL**. The chosen amount and frequency are appended as query parameters.

Until it is set, the button is replaced by a short note directing donors to email. That is deliberate — a donation button that silently fails costs more trust than an obviously unfinished one.

### 3. Database for production

Local development uses SQLite (`cms-data.db`), which needs no setup. **This will not survive a serverless deploy** — Vercel's filesystem is read-only outside `/tmp` and wiped between invocations, and `cms-data.db` is gitignored so it is never deployed in the first place.

The code side is already done: `payload.config.ts` picks its adapter from the connection string, using `postgresAdapter` for a `postgres://` value and SQLite when nothing is set. Nothing to edit — just provision a database.

It reads `DATABASE_URI`, then `DATABASE_URL`, then `POSTGRES_URL`. The last two are the names Vercel's Postgres integrations inject automatically, so **attaching a database from the Vercel dashboard needs no environment variable set by hand** — Storage → Create Database → pick a provider, and the connection string arrives under a name the config already looks for. Set `DATABASE_URI` explicitly only to override. Any managed Postgres works — Neon, Supabase, Railway, RDS.

Use the **pooled** connection string, not the direct one. Serverless functions open a connection per invocation, which exhausts a direct Postgres connection limit quickly; Neon's pooled host has `-pooler` in it.

A value that is neither `postgres://` nor `file:`/`libsql:` throws on startup with a message naming the scheme it got, rather than silently falling back to SQLite. Worth knowing because one wrong value is easy to grab: Neon's **Data API** URL (`https://…apirest…/rest/v1`) sits on the same settings page and is not a connection string.

The new database starts empty, which means:

- `/admin` opens on Payload's **create first user** screen. That is the production admin account.
- Nothing from the local SQLite file carries over. Run `npm run seed` against the production `DATABASE_URI` if the starter content is wanted there too.

### 4. File storage for production

Uploaded images are written to `public/media` on disk, which has the same serverless problem — gitignored, read-only, and ephemeral.

This is also already wired: `payload.config.ts` registers `vercelBlobStorage` for the `media` collection. The plugin disables itself when `BLOB_READ_WRITE_TOKEN` is unset, so local development keeps writing to `public/media` and production writes to Blob.

To turn it on, attach a Blob store to the Vercel project (**Storage → Create → Blob**). Vercel injects `BLOB_READ_WRITE_TOKEN` automatically. Files uploaded before the switch stay on disk and will need re-uploading.

### 5. Why `/admin` 500s when either of these is missing

Every read in `lib/cms.ts` is wrapped in `safe()`, which swallows failures and returns hardcoded fallback content. The public site therefore renders normally against a completely dead Payload — the failure is invisible there.

`/admin` has no such fallback. A missing `PAYLOAD_SECRET` or an unreachable database throws on `payload.init()` and the dashboard does not load, while the rest of the site looks perfectly healthy. If the site is up but `/admin` is not, check those two before anything else.

---

## Content that still needs the client

Everything below is placeholder copy written during the build. It is **live on the site right now** and should be replaced before launch.

| What | Where to fix it | Why it matters |
|---|---|---|
| Impact statistics — including **"Countless"** for Lives Transformed | Impact Statistics | Unverified figures; funders ask about these |
| Three testimonials from "Jasmine R.", "Derrick M.", "Bria L." | Testimonials | **Invented people.** No consent recorded — the `Consent Given` box is unticked on all three |
| Five blog headlines with no article written | Blog Posts (seeded as **drafts**) | Headlines and summaries exist; no body text was ever written |
| Phone number, postal address, all social media URLs | Site Settings | Currently hidden rather than shown, so nothing is broken — but nothing is there |
| Leadership team beyond the two founders | People | The build padded this to six with `[Team Member Name] — CLIENT TO PROVIDE` cards, now removed |
| Event dates and prices | Events | Seeded from the 2025 dates in the original build; confirm each one |
| Trip pricing ($2,850 Jamaica, $299 conference, membership tiers) | Events / page source | Never confirmed with the client |
| Research publications, podcast episodes, career listings | Page source | Flagged as placeholders in the code; not yet moved into the CMS |

---

## For developers

```
payload.config.ts          collections, globals, database, admin config
cms/
  access.ts                who can read and write what
  fields.ts                shared field definitions (status, slug, order)
  collections/             one file per content type
  globals/SiteSettings.ts  organisation-wide settings
  seed.ts                  loads the dashboard with existing site content
lib/cms.ts                 read helpers for server components
lib/fallback-content.ts    what renders when the CMS is empty
app/(payload)/             admin panel and Payload's REST/GraphQL API
app/actions/submit-form.ts the single write path for every public form
```

### Conventions

**Reads never throw.** Every helper in `lib/cms.ts` catches, logs, and returns empty. A database outage degrades the site to its built-in content instead of showing an error page.

**Forms use a Server Action, not a route handler.** Payload owns the whole of `/api/*` through a catch-all route, so site endpoints under that prefix would depend on Next's static-beats-dynamic precedence to resolve. `app/actions/submit-form.ts` sidesteps that, and keeps validation somewhere the client cannot bypass.

**The package is ESM** (`"type": "module"`). Payload's CLI loads `payload.config.ts` through a graph with top-level await; under CommonJS it falls back to `require()` and throws `ERR_REQUIRE_ASYNC_MODULE`.

### After changing a collection

```bash
npm run generate:types        # refresh payload-types.ts
npm run generate:importmap    # only when adding custom admin components
```

### Environment

| Variable | Required | Purpose |
|---|---|---|
| `PAYLOAD_SECRET` | yes | Signs auth cookies. Generate per environment; changing it logs everyone out |
| `DATABASE_URI` | production | Postgres connection string (pooled). Selects the adapter: `postgres://` uses Postgres, unset falls back to local SQLite. `DATABASE_URL` and `POSTGRES_URL` are accepted as fallbacks, which is what Vercel's integrations inject |
| `BLOB_READ_WRITE_TOKEN` | production | Vercel Blob token for uploads. Injected by Vercel when a Blob store is attached; unset means uploads stay on local disk |
| `NEXT_PUBLIC_SITE_URL` | recommended | Used for CORS, sitemap URLs and absolute links |

Generate a secret with:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

`.env` is gitignored. `.env.example` documents what is needed.
