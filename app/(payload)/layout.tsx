/* THIS FILE IS PART OF THE PAYLOAD ADMIN PANEL.
 *
 * It sits in the `(payload)` route group and is a root layout in its own
 * right — Payload's `RootLayout` renders the `<html>` and `<body>` for the
 * dashboard. The public site has its own root layout in `app/(site)`. There is
 * deliberately no `app/layout.tsx`; one would wrap both and nest a second
 * `<body>` inside the first.
 */
import type { ServerFunctionClient } from "payload";
import config from "@payload-config";
import { RootLayout, handleServerFunctions } from "@payloadcms/next/layouts";
import { Inter, Playfair_Display } from "next/font/google";
import React from "react";

import { importMap } from "./admin/importMap";

// Payload's own admin stylesheet. Without it the dashboard renders as bare
// unstyled HTML — custom.scss only remaps theme tokens for rules that live
// in this file, so it cannot stand in for it. Imported first so the brand
// overrides in custom.scss load after the defaults they override.
import "@payloadcms/next/css";
// Tailwind (utilities only, no Preflight) plus the brand tokens the custom
// dashboard components are built from. See the header of admin.css.
import "./admin.css";
import "./custom.scss";

// The dashboard does not load the site's Tailwind build, so the brand fonts
// are requested here as well. Playfair backs the serif headings in
// `custom.scss`; without this the login title would fall back to Georgia.
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

type Args = { children: React.ReactNode };

const serverFunction: ServerFunctionClient = async function (args) {
  "use server";
  return handleServerFunctions({ ...args, config, importMap });
};

export default function Layout({ children }: Args) {
  return (
    <RootLayout
      config={config}
      importMap={importMap}
      serverFunction={serverFunction}
      htmlProps={{ className: `${inter.variable} ${playfair.variable}` }}
    >
      {children}
    </RootLayout>
  );
}
