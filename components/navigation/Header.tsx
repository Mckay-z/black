"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
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
    ] 
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
    ]
  },
  { 
    name: "Community", 
    href: "/community", 
    dropdownItems: [
      { name: "Online Community", href: "/community/online" },
      { name: "Students", href: "/community/students" },
      { name: "Partner With Us", href: "/community/partner" },
    ]
  },
  { 
    name: "Resources", 
    href: "/resources", 
    dropdownItems: [
      { name: "Blog", href: "/resources/blog" },
      { name: "Podcast (Coming Soon)", href: "#" },
      { name: "Resource Library", href: "/resources/library" },
      { name: "Career Resources", href: "/resources/career" },
      { name: "Student Resources", href: "/resources/student" },
      { name: "Research", href: "/resources/research" },
      { name: "FAQs", href: "/resources/faqs" },
    ]
  },
  { 
    name: "Speakers", 
    href: "/speakers", 
    dropdownItems: [
      { name: "Dr. Chauntel Altidor, OTD", href: "/speakers/dr-chauntel-altidor" },
      { name: "Nancy Yamoah, OT", href: "/speakers/nancy-yamoah" },
      { name: "Speaking Topics", href: "/speakers/topics" },
      { name: "Book a Speaker", href: "/speakers/book" },
    ]
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
    ]
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full bg-background border-b border-border h-18 flex items-center">
      {/* Main Header */}
      <div className="w-full flex items-center justify-between px-6">
                                                      
        {/* Logo */}
       <Link href="/" className="inline-flex shrink-0 items-center">
  <Image
    src="/logo.png"
    alt="Black In Rehab Foundation"
    width={220}
    height={66}
    className="object-contain h-30 w-auto"
  />
</Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 items-center justify-evenly mx-8 h-full">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="relative group py-6">
              <Link
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap py-2"
              >
                {link.name}
                {link.dropdownItems && <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />}
              </Link>
              
              {link.dropdownItems && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-64 bg-surface border border-border rounded-xl shadow-xl py-2 z-50 -mt-2.5">
                  {link.dropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-muted hover:text-foreground hover:bg-border/30 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center shrink-0">
          <Link
            href="/join-the-movement"
            className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-background font-bold text-sm rounded-full whitespace-nowrap transition-colors"
          >
            JOIN THE MOVEMENT
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-18 left-0 w-full bg-background border-b border-border py-4 px-4 flex flex-col gap-4 shadow-xl h-[calc(100vh-72px)] overflow-y-auto z-50">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="flex flex-col border-b border-border/50 pb-2">
              <Link
                href={link.href}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors flex items-center justify-between py-2"
                onClick={() => !link.dropdownItems && setIsMobileMenuOpen(false)}
              >
                <span>{link.name}</span>
                {link.dropdownItems && <ChevronDown className="w-5 h-5 text-muted" />}
              </Link>
              
              {link.dropdownItems && (
                <div className="flex flex-col pl-4 mt-1 gap-1">
                  {link.dropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-muted hover:text-primary text-base transition-colors py-1.5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/join-the-movement"
            className="bg-primary hover:bg-primary-hover text-background font-semibold py-3 px-6 rounded-full text-center mt-4 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            JOIN THE MOVEMENT
          </Link>
        </div>
      )}
    </header>
  );
}