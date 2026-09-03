import Link from "next/link";

import Logo from "@/components/navigation/Logo";
import SocialLinks from "@/components/navigation/SocialLinks";
import NewsletterForm from "@/components/forms/NewsletterForm";
import { getSiteSettings } from "@/lib/cms";

/**
 * Site footer.
 *
 * The link groups are data rather than hand-written <li> blocks, so adding a
 * column or a link is one line and every item is guaranteed the same
 * treatment.
 */
const LINK_GROUPS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Explore",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Experiences", href: "/experiences" },
      { label: "Impact", href: "/impact" },
      { label: "Community", href: "/community" },
      { label: "Share Your Story", href: "/community/share-your-story" },
    ],
  },
  {
    heading: "Resources & Support",
    links: [
      { label: "Resource Library", href: "/resources" },
      { label: "Book a Speaker", href: "/speakers" },
      { label: "Become a Sponsor", href: "/support/sponsors" },
      { label: "Donate", href: "/impact/donate" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

export default async function Footer() {
  const settings = await getSiteSettings();

  return (
    <footer className="relative w-full border-t border-border bg-surface">
      {/* Gold hairline along the top edge, matching the header's. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent"
      />

      <div className="container mx-auto px-4 py-16 md:px-6 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand & mission */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="Black In Rehab Foundation — home"
              className="inline-flex shrink-0 items-center rounded-lg transition-opacity hover:opacity-85"
            >
              <Logo lightClassName="h-12 w-auto" darkClassName="h-20 w-auto" />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              The global leader empowering Black rehabilitation professionals to
              transform lives and strengthen communities worldwide.
            </p>

            <SocialLinks urls={settings} />
          </div>

          {/* Link columns */}
          {LINK_GROUPS.map((group) => (
            <nav key={group.heading} aria-label={group.heading} className="lg:col-span-2">
              <h2 className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.14em] text-foreground">
                {group.heading}
              </h2>

              <ul className="space-y-3 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block text-muted transition-[color,transform] duration-200 hover:translate-x-1 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Newsletter. Boxed, because it is the one thing in the footer that
              asks the visitor to do something. */}
          <div className="lg:col-span-4">
            <div className="card card-sunken p-6">
              <h2 className="font-serif text-lg font-bold text-foreground">
                Stay Connected
              </h2>
              <p className="mt-2 mb-5 text-sm leading-relaxed text-muted">
                Subscribe for updates on events, opportunities, and impact stories.
              </p>

              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Black In Rehab Foundation. All Rights
            Reserved.
          </p>

          <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
