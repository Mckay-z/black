import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import ThemeProvider from "@/components/theme/ThemeProvider";
import InlineScript from "@/components/theme/InlineScript";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Black In Rehab Foundation | Healing Beyond Borders",
  description: "The global leader empowering Black rehabilitation professionals to transform lives and strengthen communities worldwide.",
};

// Runs before first paint so the saved theme is applied without a flash of
// the wrong palette. Light (beige) is the default when nothing is saved.
//
// It must be a genuine inline tag, delivered by `InlineScript` — see that
// component for why `next/script` cannot do this job.
const themeScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY
)});if(t==="dark"){document.documentElement.classList.add("dark")}}catch(e){}})();`;

/**
 * Root layout for the public website.
 *
 * This lives in the `(site)` route group, and there is deliberately NO
 * `app/layout.tsx`. Payload's admin panel brings its own `<html>` and `<body>`
 * via `RootLayout` in `app/(payload)/layout.tsx`; a top-level layout would
 * wrap that too, nesting a second `<body>` inside the first. React rejects
 * that outright ("You are mounting a new body component…") and the resulting
 * markup is invalid.
 *
 * Two sibling route groups, each its own root layout, keeps the site's header,
 * footer, fonts and theming entirely out of the dashboard — and vice versa.
 * Route groups contribute no URL segment, so every public path is unchanged.
 *
 * The one trade-off Next documents: navigating between the two groups is a
 * full page load rather than a client transition. Between the marketing site
 * and a CMS, that is the correct boundary anyway.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <InlineScript html={themeScript} />
      </head>
      <body
        className="min-h-full flex flex-col bg-background text-foreground"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
