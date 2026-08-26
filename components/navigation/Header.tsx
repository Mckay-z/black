"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
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
      { name: "Annual Report", href: "/about/annual-report" },
      { name: "Media & Press", href: "/about/media-press" },
    ],
  },
  {
    name: "Experiences",
    href: "/experiences",
    dropdownItems: [
      { name: "Annual Conference", href: "/experiences/annual-conference" },
      { name: "Upcoming Events", href: "/experiences/upcoming-events" },
      { name: "Wellness Retreats", href: "/experiences/wellness-retreats" },
      { name: "Leadership Retreats", href: "/experiences/leadership-retreats" },
      { name: "Global Experiences (Ghana, Jamaica)", href: "/experiences/global" },
      { name: "Ambassador Meetups", href: "/experiences/ambassador-meetups" },
      { name: "Local Events", href: "/experiences/local-events" },
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
      { name: "Online Community", href: "/community/online" },
      { name: "Students", href: "/community/students" },
      { name: "Share Your Story", href: "/community/share-your-story" },
      { name: "Partner With Us", href: "/community/partner" },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    dropdownItems: [
      { name: "Blog", href: "/resources/blog" },
      { name: "Podcast", href: "/resources/podcast" },
      { name: "Resource Library", href: "/resources/library" },
      { name: "Career Resources", href: "/resources/career" },
      { name: "Student Resources", href: "/resources/student" },
      { name: "Research", href: "/resources/research" },
      { name: "FAQs", href: "/resources/faqs" },
    ],
  },
  {
    name: "Speakers",
    href: "/speakers",
    dropdownItems: [
      { name: "Dr. Chauntel Altidor, OTD", href: "/speakers/dr-chauntel-altidor" },
      { name: "Nancy Yamoah, OT", href: "/speakers/nancy-yamoah" },
      { name: "Speaking Topics", href: "/speakers/topics" },
      { name: "Book a Speaker", href: "/speakers/book" },
    ],
  },
  {
    name: "Support",
    href: "/support",
    dropdownItems: [
      { name: "Become a Sponsor", href: "/support/sponsor" },
      { name: "Corporate Partnerships", href: "/support/corporate" },
      { name: "Universities", href: "/support/universities" },
      { name: "Healthcare Systems", href: "/support/healthcare-systems" },
      { name: "Recruit With Us", href: "/support/recruit" },
      { name: "Career Lounge", href: "/support/career-lounge" },
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

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  // Desktop dropdowns are state-driven rather than pure CSS :hover/:focus-within.
  // A CSS dropdown cannot be dismissed: after clicking an item the link keeps
  // focus, so :focus-within held the menu open over the new page.
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // Scroll-direction show/hide + hover-to-reveal.
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      const pastThreshold = currentScrollY > HIDE_AFTER_SCROLL_PX;

      setIsHeaderVisible(!(scrollingDown && pastThreshold));
      lastScrollY.current = currentScrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= HOVER_REVEAL_ZONE_PX) {
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
      className={`fixed top-0 left-0 w-full bg-background border-b border-border h-18 flex items-center z-50 transition-transform duration-300 ease-in-out ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Main Header */}
      <div className="w-full flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="inline-flex shrink-0 items-center">
          <Logo lightClassName="h-14 w-auto" darkClassName="h-30 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 items-center justify-evenly mx-8 h-full">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(pathname, link.href) || hasActiveChild(pathname, link);

            return (
              <div
                key={link.name}
                className="relative py-6"
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
                  aria-expanded={link.dropdownItems ? openDropdown === link.name : undefined}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors whitespace-nowrap py-2 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    active ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                  {link.dropdownItems && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {link.dropdownItems && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-surface border border-border rounded-xl shadow-xl py-2 z-50 -mt-2.5 ${
                      openDropdown === link.name ? "block" : "hidden"
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
                          className={`block px-4 py-2 text-sm transition-colors focus:outline-none focus-visible:bg-border/30 ${
                            itemActive
                              ? "text-primary font-semibold bg-border/20"
                              : "text-muted hover:text-foreground hover:bg-border/30"
                          }`}
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
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <ThemeToggle />
          <Link
            href="/join-the-movement"
            className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-on-primary font-bold text-sm rounded-full whitespace-nowrap transition-colors"
          >
            JOIN THE MOVEMENT
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-18 left-0 w-full bg-background border-b border-border py-4 px-4 flex flex-col gap-4 shadow-xl h-[calc(100vh-72px)] overflow-y-auto z-50">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(pathname, link.href) || hasActiveChild(pathname, link);
            const isOpen = openMobileDropdown === link.name;

            return (
              <div key={link.name} className="flex flex-col border-b border-border/50 pb-2">
                {link.dropdownItems ? (
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-2 text-left text-lg font-medium"
                    onClick={() => toggleMobileDropdown(link.name)}
                    aria-expanded={isOpen}
                  >
                    <span className={active ? "text-primary" : "text-foreground"}>{link.name}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-lg font-medium transition-colors py-2 ${
                      active ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}

                {link.dropdownItems && isOpen && (
                  <div className="flex flex-col pl-4 mt-1 gap-1">
                    {link.dropdownItems.map((item) => {
                      const itemActive = isLinkActive(pathname, item.href);
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          aria-current={itemActive ? "page" : undefined}
                          className={`text-base transition-colors py-1.5 ${
                            itemActive ? "text-primary font-semibold" : "text-muted hover:text-primary"
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

          <Link
            href="/join-the-movement"
            className="bg-primary hover:bg-primary-hover text-on-primary font-semibold py-3 px-6 rounded-full text-center mt-4 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            JOIN THE MOVEMENT
          </Link>
        </div>
      )}
    </header>
  );
}