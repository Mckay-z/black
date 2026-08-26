import Link from "next/link";
import Logo from "@/components/navigation/Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Mission */}
          <div>
            <Link href="/" className="inline-flex shrink-0 items-center">
              <Logo lightClassName="h-12 w-auto" darkClassName="h-20 w-auto" />
            </Link>

            <p className="mt-6 text-sm text-muted leading-relaxed max-w-sm">
              The global leader empowering Black rehabilitation professionals
              to transform lives and strengthen communities worldwide.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="text-muted hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                >
                  <rect
                    width="20"
                    height="20"
                    x="2"
                    y="2"
                    rx="5"
                    ry="5"
                  />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-muted hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                aria-label="Twitter / X"
                className="text-muted hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="text-muted hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6">Explore</h3>

            <ul className="space-y-4 text-sm text-muted">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/experiences"
                  className="hover:text-primary transition-colors"
                >
                  Experiences
                </Link>
              </li>

              <li>
                <Link
                  href="/impact"
                  className="hover:text-primary transition-colors"
                >
                  Impact
                </Link>
              </li>

              <li>
                <Link
                  href="/community"
                  className="hover:text-primary transition-colors"
                >
                  Community
                </Link>
              </li>

              <li>
                <Link
                  href="/community/share-your-story"
                  className="hover:text-primary transition-colors"
                >
                  Share Your Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-6">Resources & Support</h3>

            <ul className="space-y-4 text-sm text-muted">
              <li>
                <Link
                  href="/resources"
                  className="hover:text-primary transition-colors"
                >
                  Resource Library
                </Link>
              </li>

              <li>
                <Link
                  href="/speakers"
                  className="hover:text-primary transition-colors"
                >
                  Book a Speaker
                </Link>
              </li>

              <li>
                <Link
                  href="/support/sponsors"
                  className="hover:text-primary transition-colors"
                >
                  Become a Sponsor
                </Link>
              </li>

              <li>
                <Link
                  href="/join-the-movement"
                  className="hover:text-primary transition-colors"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-6">Stay Connected</h3>

            <p className="text-muted text-sm mb-4 leading-relaxed">
              Subscribe for updates on events, opportunities, and impact
              stories.
            </p>

            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-background border border-border rounded-md px-4 py-2 text-sm transition-colors newsletter-input focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />

              <button
                type="submit"
                className="bg-secondary hover:bg-secondary-hover text-white rounded-md px-4 py-2 text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted">
          <p>
            &copy; {new Date().getFullYear()} Black In Rehab Foundation. All
            Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Use
            </Link>

            <Link
              href="/accessibility"
              className="hover:text-foreground transition-colors"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
