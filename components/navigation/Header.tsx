"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Logo from "@/components/navigation/Logo";

type NavItem = { name: string; href: string };
type NavLink = NavItem & { dropdownItems?: NavItem[] };

const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    dropdownItems: [
      { name: "Our Story", href: "/about/our-story" },
      { name: "Mission, Vision & Values", href: "/about/mission-vision-values" },
      { name: "Meet the Founders", href: "/about/founders" },
      { name: "Leadership Team", href: "/about/leadership" },
      { name: "Ambassadors", href: "/about/ambassadors" },
      // Annual Report is hidden at the client's request until there is a report
      // to publish. The route still resolves, so restoring it is one line.
      { name: "Media & Press", href: "/about/media-press" },
    ],
  },
  {
    name: "Experiences",
    href: "/experiences",
    // Trimmed to the two the client is actively running. The conference,
    // retreat, global and local-event routes are untouched and still resolve —
    // they are simply off the menu until there is something to announce.
    dropdownItems: [
      { name: "Upcoming Events", href: "/experiences/upcoming-events" },
      { name: "Ambassador Meetups", href: "/experiences/ambassador-meetups" },
    ],
  },
  {
    name: "Impact",
    href: "/impact",
    dropdownItems: [
      { name: "Scholarships", href: "/impact/scholarships" },
      { name: "Mission Projects", href: "/impact/mission-projects" },
      { name: "Community Service", href: "/impact/community-service" },
      { name: "Advocacy", href: "/impact/advocacy" },
      { name: "Volunteer", href: "/impact/volunteer" },
      { name: "Student Support", href: "/impact/student-support" },
      { name: "Sponsor Impact", href: "/impact/sponsor-impact" },
      { name: "Donate", href: "/impact/donate" },
    ],
  },
  {
    name: "Community",
    href: "/community",
    dropdownItems: [
      // Online Community hidden at the client's request.
      { name: "Students", href: "/community/students" },
      { name: "Share Your Story", href: "/community/share-your-story" },
      { name: "Partner With Us", href: "/community/partner" },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    // Everything except the library is hidden until it has real content —
    // the blog, podcast, research and career pages currently show placeholder
    // copy, and the homepage marks them "Coming Soon" to match.
    dropdownItems: [
      { name: "Resource Library", href: "/resources/library" },
    ],
  },
  {
    name: "Speakers",
    href: "/speakers",
    // Speaking Topics hidden at the client's request; "Book a Speaker" stays,
    // since they separately asked for more ways to book school visits.
    dropdownItems: [
      { name: "Nancy Yamoah, OTR/L", href: "/speakers/nancy-yamoah" },
      { name: "Dr. Chauntel Altidor, OTD", href: "/speakers/dr-chauntel-altidor" },
      { name: "Book a Speaker", href: "/speakers/book" },
    ],
  },
  {
    name: "Support",
    href: "/support",
    // Healthcare Systems, Recruit With Us and Career Lounge are hidden at the
    // client's request; "Universities" is now Mentorship Placement.
    dropdownItems: [
      { name: "Become a Sponsor", href: "/support/sponsor" },
      { name: "Corporate Partnerships", href: "/support/corporate" },
      { name: "Mentorship Placement", href: "/support/universities" },
      { name: "Donate", href: "/support/donate" },
    ],
  },
];

// A top-level link is "active" on an exact match, or on any nested route below it
// (but "/" only matches the homepage exactly, or it would light up for everything).
function isLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function hasActiveChild(pathname: string, link: NavLink) {
  if (!link.dropdownItems) return false;
  return link.dropdownItems.some((item) => isLinkActive(pathname, item.href));
}

// Reveal the header when the mouse is within this many pixels of the top of
// the viewport, regardless of scroll direction.
const HOVER_REVEAL_ZONE_PX = 60;
// Only start hiding once the user has scrolled past this point, so the header
// doesn't flicker away right at the top of the page.
const HIDE_AFTER_SCROLL_PX = 80;
// Past this point the bar earns its background: at the very top it stays
// glassy so the hero photograph reads edge to edge.
const CONDENSE_AFTER_SCROLL_PX = 24;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  // Desktop dropdowns are state-driven rather than pure CSS :hover/:focus-within.
  // A CSS dropdown cannot be dismissed: after clicking an item the link keeps
  // focus, so :focus-within held the menu open over the new page.
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isCondensed, setIsCondensed] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // Scroll-direction show/hide, condense-on-scroll, and hover-to-reveal.
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      const pastThreshold = currentScrollY > HIDE_AFTER_SCROLL_PX;

      setIsHeaderVisible(!(scrollingDown && pastThreshold));
      setIsCondensed(currentScrollY > CONDENSE_AFTER_SCROLL_PX);
      lastScrollY.current = currentScrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= HOVER_REVEAL_ZONE_PX) {
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);

    // Sync the condensed state to wherever the page is already scrolled —
    // a reload part-way down a page, or a back-navigation that restores the
    // scroll position, both start below the threshold. Deferred to a frame
    // rather than called inline: setting state straight from an effect body
    // is a cascading render, and one frame is imperceptible here.
    const initialFrame = requestAnimationFrame(handleScroll);

    return () => {
      cancelAnimationFrame(initialFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // The mobile drawer covers the page, so the page behind it must not scroll.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMobileMenuOpen]);

  // Close the mobile menu whenever the route changes (e.g. after a Link click).
  // Adjusting state during render rather than in an effect avoids the extra
  // render pass that `setState` inside `useEffect` would cause.
  const [menuPathname, setMenuPathname] = useState(pathname);
  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
    setOpenDropdown(null);
  }

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full h-18 flex items-center z-50 transition-[transform,background-color,box-shadow,border-color] duration-300 ease-out ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isCondensed
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-[0_1px_24px_-12px_rgb(27_22_17/0.35)]"
          : "bg-background/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      {/* A hairline of brand gold along the very top edge. Two pixels of
          colour that tie the chrome to the palette without adding a bar. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"
      />

      <div className="w-full flex items-center justify-between gap-4 px-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Black In Rehab Foundation — home"
          className="inline-flex shrink-0 items-center rounded-lg transition-opacity hover:opacity-85"
        >
          <Logo lightClassName="h-13 w-auto" darkClassName="h-28 w-auto" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-0.5 xl:gap-1.5 h-full">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(pathname, link.href) || hasActiveChild(pathname, link);
            const isOpen = openDropdown === link.name;
            // The longer menus read as a wall of links in one column; two
            // columns keep every item above the fold on a laptop screen.
            const twoColumn = (link.dropdownItems?.length ?? 0) > 5;

            return (
              <div
                key={link.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => link.dropdownItems && setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
                onFocus={() => link.dropdownItems && setOpenDropdown(link.name)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                    setOpenDropdown(null);
                  }
                }}
                onKeyDown={(event) => event.key === "Escape" && setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpenDropdown(null)}
                  aria-current={active ? "page" : undefined}
                  aria-haspopup={link.dropdownItems ? "true" : undefined}
                  aria-expanded={link.dropdownItems ? isOpen : undefined}
                  className={`relative flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 xl:px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                    active || isOpen
                      ? "text-primary"
                      : "text-foreground/85 hover:text-primary"
                  }`}
                >
                  {link.name}
                  {link.dropdownItems && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}

                  {/* Active indicator. A short gold underline that grows out
                      from the centre — less heavy than recolouring the label
                      alone, and it survives on the condensed bar. */}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-x-2.5 xl:inset-x-3.5 -bottom-0.5 h-0.5 origin-center rounded-full bg-primary transition-transform duration-300 ease-out ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>

                {link.dropdownItems && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 z-50 pt-2 transition-all duration-200 ease-out ${
                      isOpen
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-1 invisible"
                    }`}
                  >
                    <div
                      className={`rounded-2xl border border-border bg-surface/95 backdrop-blur-xl p-2 shadow-float ${
                        twoColumn ? "w-136 grid grid-cols-2 gap-1" : "w-64"
                      }`}
                    >
                      {link.dropdownItems.map((item) => {
                        const itemActive = isLinkActive(pathname, item.href);
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setOpenDropdown(null)}
                            aria-current={itemActive ? "page" : undefined}
                            className={`group/item flex items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-sm transition-colors duration-200 ${
                              itemActive
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-muted hover:bg-primary/8 hover:text-foreground"
                            }`}
                          >
                            <span className="leading-snug">{item.name}</span>
                            <ArrowRight className="w-3.5 h-3.5 shrink-0 text-primary opacity-0 -translate-x-1 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <ThemeToggle />
          <Link
            href="/impact/donate"
            className="btn btn-primary min-h-0! px-5 py-2.5 text-xs tracking-wider"
          >
            DONATE
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-primary/60 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-18 left-0 w-full h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain bg-background/98 backdrop-blur-xl border-t border-border px-4 pt-4 pb-10 z-50">
          <div className="flex flex-col divide-y divide-border/60">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(pathname, link.href) || hasActiveChild(pathname, link);
              const isOpen = openMobileDropdown === link.name;

              return (
                <div key={link.name} className="py-1">
                  {link.dropdownItems ? (
                    <button
                      type="button"
                      className="flex items-center justify-between w-full py-3.5 text-left"
                      onClick={() => toggleMobileDropdown(link.name)}
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`font-serif text-lg font-bold ${
                          active ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {link.name}
                      </span>
                      <span
                        className={`inline-flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
                          isOpen
                            ? "border-primary/50 bg-primary/10 text-primary"
                            : "border-border text-muted"
                        }`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`block py-3.5 font-serif text-lg font-bold transition-colors ${
                        active ? "text-primary" : "text-foreground hover:text-primary"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}

                  {link.dropdownItems && isOpen && (
                    <div className="flex flex-col gap-1 pb-3 pl-3 border-l-2 border-primary/25">
                      {link.dropdownItems.map((item) => {
                        const itemActive = isLinkActive(pathname, item.href);
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            aria-current={itemActive ? "page" : undefined}
                            className={`rounded-lg px-3 py-2.5 text-[0.9375rem] transition-colors ${
                              itemActive
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-muted hover:text-primary"
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <Link
            href="/impact/donate"
            className="btn btn-primary btn-lg w-full mt-8"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            DONATE
          </Link>
        </div>
      )}
    </header>
  );
}
