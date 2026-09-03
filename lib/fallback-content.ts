import { PHOTOS } from "@/lib/images";

/**
 * The content the site shipped with, kept as the fallback for when the CMS has
 * no published records yet.
 *
 * This is what lets the dashboard be adopted gradually: a page prefers CMS
 * content and drops back to these values, so a half-filled CMS never produces
 * a half-empty website.
 *
 * IMPORTANT: everything here is placeholder copy written during the build, not
 * supplied by the client. It is scheduled for replacement through the
 * dashboard — see CMS.md.
 */

export type FallbackPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
};

export const FALLBACK_POSTS: FallbackPost[] = [
  {
    slug: "breaking-barriers-black-rehabilitation",
    category: "Leadership",
    title: "Breaking Barriers: How Black Rehabilitation Professionals Are Leading the Way",
    excerpt:
      "From academic halls to global service trips, Black rehab professionals are reshaping what leadership looks like in healthcare.",
    date: "July 15, 2025",
    readTime: "6 min read",
    image: PHOTOS.conferencePresentation,
    featured: true,
  },
  {
    slug: "five-reasons-ghana",
    category: "Global Experiences",
    title: "5 Reasons Every Rehab Professional Should Travel for Service",
    excerpt:
      "Service travel transforms your clinical lens. Here's why our Ghana experience changed everything for our members.",
    date: "June 28, 2025",
    readTime: "4 min read",
    image: PHOTOS.ghanaFreedomArch,
    featured: false,
  },
  {
    slug: "mentorship-matters",
    category: "Professional Development",
    title: "Mentorship Matters: How to Find Your Tribe in Rehabilitation",
    excerpt:
      "Having a mentor isn't optional — it's essential. Here's how to identify, approach, and nurture meaningful mentorship relationships.",
    date: "June 10, 2025",
    readTime: "5 min read",
    image: PHOTOS.impactVolunteerChildren,
    featured: false,
  },
  {
    slug: "health-equity-2025",
    category: "Advocacy",
    title: "The State of Health Equity in Rehabilitation: What the Data Tells Us",
    excerpt:
      "A deep dive into the disparities Black patients face when accessing rehabilitation services and what we can do about it.",
    date: "May 22, 2025",
    readTime: "8 min read",
    image: PHOTOS.impactAdvocacySpeaker,
    featured: false,
  },
  {
    slug: "wellness-practices",
    category: "Wellness",
    title: "Heal the Healer: Wellness Practices Every Rehab Professional Needs",
    excerpt:
      "We spend our careers helping others heal. But who heals us? Here are evidence-based wellness strategies built for your profession.",
    date: "May 8, 2025",
    readTime: "5 min read",
    image: PHOTOS.retreatSoundBowls,
    featured: false,
  },
];

export const BLOG_CATEGORIES = [
  "All",
  "Leadership",
  "Global Experiences",
  "Professional Development",
  "Advocacy",
  "Wellness",
  "Community",
];

/** Homepage impact numbers. All five are unverified and need client sign-off. */
export const FALLBACK_STATS = [
  { value: "10K+", label: "Professionals Empowered", icon: "Users" },
  { value: "3K+", label: "Students Inspired", icon: "BookOpen" },
  { value: "12+", label: "Countries Impacted", icon: "Globe" },
  { value: "50+", label: "Communities Served", icon: "HeartHandshake" },
  { value: "Countless", label: "Lives Transformed", icon: "GraduationCap" },
];

/** Invented member quotes. Replace with attributed stories before launch. */
export const FALLBACK_TESTIMONIALS = [
  {
    quote:
      "Black in Rehab opened doors I never knew existed. I found mentorship, lifelong friends, and a deeper purpose.",
    author: "Jasmine R.",
    role: "OTR/L",
  },
  {
    quote:
      "The Ghana experience was life-changing. We served, we learned, and we grew in ways words can't describe.",
    author: "Derrick M.",
    role: "PT, DPT",
  },
  {
    quote:
      "Thanks to the scholarship program, I'm one step closer to becoming the therapist I was called to be.",
    author: "Bria L.",
    role: "SLP Graduate Student",
  },
];
