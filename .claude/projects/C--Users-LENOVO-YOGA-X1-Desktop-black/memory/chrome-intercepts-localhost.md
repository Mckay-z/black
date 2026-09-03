---
name: chrome-intercepts-localhost
description: Chrome on this machine serves a different app (ClaimIQ) for localhost on every port, so browser testing of local dev servers fails
metadata:
  type: project
---

The user's Chrome profile serves an unrelated app — "ClaimIQ · Medical Claims
Verification" — for `http://localhost:<any port>`, redirecting paths to
`/login?redirect=<path>`. Confirmed on ports 3000 and 3100 on 2026-08-31 while
the Black in Rehab dev server was demonstrably returning correct HTML to
`fetch` on those same ports.

**Why:** browser-automation checks against a local dev server will show the
wrong app and look like the code is broken, when the server is fine.

**How to apply:** verify local pages with `fetch`/curl rather than
claude-in-chrome. If a browser check is genuinely needed, ask the user to open
the URL in a different browser or an incognito window first. Do not spend turns
debugging the app when the browser shows an unrelated login screen.
