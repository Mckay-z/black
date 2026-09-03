import "dotenv/config";
import { getPayload, type CollectionSlug, type Where } from "payload";
import config from "../payload.config";

/**
 * Loads the dashboard with the content the site already displays.
 *
 * The point is not to invent anything — it is to move what is currently frozen
 * in React source into records the client can actually edit, so the dashboard
 * opens onto a populated, recognisable site rather than an empty shell.
 *
 * Safe to re-run: every record is matched on a natural key and skipped if it
 * already exists, so this never duplicates or overwrites edited content.
 *
 *   npm run seed
 *
 * Everything here that came from the original build is placeholder copy, not
 * client-supplied fact. See CMS.md for the replacement checklist.
 */

const log = (message: string) => console.log(`  ${message}`);

async function main() {
  const payload = await getPayload({ config });

  let created = 0;
  let skipped = 0;

  /**
   * Create a record only if one with the same natural key is absent.
   *
   * `data` is deliberately loose and cast at the call to `create`. Payload
   * types `create` as an overload set keyed on the collection slug, and a
   * generic wrapper collapses that union — the compiler then demands every
   * collection's fields at once. Seed data is validated by Payload at runtime
   * regardless, so a narrow cast here is the honest trade.
   */
  async function ensure(
    collection: CollectionSlug,
    data: Record<string, unknown>,
    where: Where,
    label: string,
  ) {
    const existing = await payload.find({ collection, where, limit: 1 });

    if (existing.docs.length) {
      skipped += 1;
      return existing.docs[0];
    }

    const doc = await payload.create({ collection, data } as Parameters<
      typeof payload.create
    >[0]);
    created += 1;
    log(`+ ${label}`);
    return doc;
  }

  // ── Site settings ─────────────────────────────────────────────────────
  console.log("\nSite settings");
  await payload.updateGlobal({
    slug: "site-settings",
    data: {
      email: "info@blackinrehab.org",
      organisationName: "Black in Rehab Foundation",
      tagline: "Healing Beyond Borders",
      nonprofitStatus: "501(c)(3)",
      notifyOnSubmission: true,
    },
  });
  log("= defaults applied (phone, address and socials left blank for the client)");

  // ── Impact statistics ─────────────────────────────────────────────────
  console.log("\nImpact statistics");
  const STATS = [
    { value: "10K+", label: "Professionals Empowered", icon: "Users" },
    { value: "3K+", label: "Students Inspired", icon: "BookOpen" },
    { value: "12+", label: "Countries Impacted", icon: "Globe" },
    { value: "50+", label: "Communities Served", icon: "HeartHandshake" },
    { value: "Countless", label: "Lives Transformed", icon: "GraduationCap" },
  ];

  for (const [index, stat] of STATS.entries()) {
    await ensure(
      "stats",
      {
        ...stat,
        placement: ["homepage"],
        status: "published",
        order: index,
        sourceNote:
          "Carried over from the original build. Unverified — confirm the real figure before launch.",
      },
      { label: { equals: stat.label } },
      `${stat.value} ${stat.label}`,
    );
  }

  // ── People ────────────────────────────────────────────────────────────
  console.log("\nPeople");
  const FOUNDERS = [
    {
      name: "Dr. Chauntel Altidor, OTD",
      slug: "dr-chauntel-altidor",
      role: "Co-Founder & Executive Director",
      groups: ["founder", "leadership", "speaker"],
    },
    {
      name: "Nancy Yamoah, OT",
      slug: "nancy-yamoah",
      role: "Co-Founder & Chief Strategy Officer",
      groups: ["founder", "leadership", "speaker"],
    },
  ];

  for (const [index, person] of FOUNDERS.entries()) {
    await ensure(
      "people",
      { ...person, status: "published", order: index },
      { slug: { equals: person.slug } },
      person.name,
    );
  }

  // ── Events ────────────────────────────────────────────────────────────
  console.log("\nEvents");
  const EVENTS = [
    {
      title: "Annual Conference 2025",
      slug: "annual-conference-2025",
      type: "conference",
      startDate: "2025-06-12",
      endDate: "2025-06-14",
      location: "Atlanta, Georgia",
      price: "$299",
      summary:
        "Three days of keynotes, continuing education, and the largest gathering of Black rehabilitation professionals in the country.",
      featured: true,
    },
    {
      title: "Ghana Global Experience",
      slug: "ghana-global-experience-2025",
      type: "global",
      startDate: "2025-10-10",
      endDate: "2025-10-17",
      location: "Accra, Ghana",
      price: "",
      summary:
        "A week of service, cultural immersion, and professional growth alongside our partners in West Africa.",
      featured: true,
    },
    {
      title: "Jamaica Global Experience",
      slug: "jamaica-global-experience-2025",
      type: "global",
      startDate: "2025-08-15",
      endDate: "2025-08-23",
      location: "Ocho Rios, Jamaica",
      price: "$2,850",
      summary:
        "Community clinics across three parishes, paired with two closing days of guided renewal.",
      featured: true,
    },
    {
      title: "Leadership Retreat",
      slug: "leadership-retreat-2025",
      type: "leadership-retreat",
      startDate: "2025-10-09",
      endDate: "2025-10-12",
      location: "Atlanta, Georgia",
      price: "",
      summary:
        "A four-day intensive for clinicians stepping into department, faculty, and ownership roles.",
      featured: false,
    },
    {
      title: "Student Chapter Summit",
      slug: "student-chapter-summit-2025",
      type: "local",
      startDate: "2025-09-20",
      location: "Online",
      price: "Free",
      summary:
        "Chapter leaders from PT, OT, and SLP programs nationwide meet to plan the academic year.",
      featured: false,
    },
    {
      title: "Ambassador Meetup — Houston",
      slug: "ambassador-meetup-houston-2025",
      type: "meetup",
      startDate: "2025-07-26",
      location: "Houston, Texas",
      price: "Free",
      summary:
        "An evening of food, conversation, and connection with the Houston rehabilitation community.",
      featured: false,
    },
  ];

  for (const [index, event] of EVENTS.entries()) {
    await ensure(
      "events",
      { ...event, status: "published", registrationOpen: true, order: index },
      { slug: { equals: event.slug } },
      `${event.title} (${event.startDate})`,
    );
  }

  // ── Testimonials ──────────────────────────────────────────────────────
  console.log("\nTestimonials");
  const TESTIMONIALS = [
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

  for (const [index, testimonial] of TESTIMONIALS.entries()) {
    await ensure(
      "testimonials",
      {
        ...testimonial,
        placement: ["homepage"],
        // These names and quotes were written during the build, not given by
        // real members — so consent is explicitly NOT recorded. They are
        // published only because the live site already shows them; replacing
        // them with attributed stories is a launch blocker.
        consentGiven: false,
        status: "published",
        order: index,
      },
      { author: { equals: testimonial.author } },
      `${testimonial.author} (placeholder — needs a real story)`,
    );
  }

  // ── Blog posts ────────────────────────────────────────────────────────
  console.log("\nBlog posts");
  const POSTS = [
    {
      slug: "breaking-barriers-black-rehabilitation",
      category: "Leadership",
      title: "Breaking Barriers: How Black Rehabilitation Professionals Are Leading the Way",
      excerpt:
        "From academic halls to global service trips, Black rehab professionals are reshaping what leadership looks like in healthcare.",
      publishedDate: "2025-07-15",
      featured: true,
    },
    {
      slug: "five-reasons-ghana",
      category: "Global Experiences",
      title: "5 Reasons Every Rehab Professional Should Travel for Service",
      excerpt:
        "Service travel transforms your clinical lens. Here's why our Ghana experience changed everything for our members.",
      publishedDate: "2025-06-28",
      featured: false,
    },
    {
      slug: "mentorship-matters",
      category: "Professional Development",
      title: "Mentorship Matters: How to Find Your Tribe in Rehabilitation",
      excerpt:
        "Having a mentor isn't optional — it's essential. Here's how to identify, approach, and nurture meaningful mentorship relationships.",
      publishedDate: "2025-06-10",
      featured: false,
    },
    {
      slug: "health-equity-2025",
      category: "Advocacy",
      title: "The State of Health Equity in Rehabilitation: What the Data Tells Us",
      excerpt:
        "A deep dive into the disparities Black patients face when accessing rehabilitation services and what we can do about it.",
      publishedDate: "2025-05-22",
      featured: false,
    },
    {
      slug: "wellness-practices",
      category: "Wellness",
      title: "Heal the Healer: Wellness Practices Every Rehab Professional Needs",
      excerpt:
        "We spend our careers helping others heal. But who heals us? Here are evidence-based wellness strategies built for your profession.",
      publishedDate: "2025-05-08",
      featured: false,
    },
  ];

  for (const post of POSTS) {
    await ensure(
      "posts",
      {
        ...post,
        status: "draft",
        // Only the summary exists — no article was ever written for these
        // headlines. Seeded as drafts so the dashboard shows exactly what
        // still needs writing, without publishing an empty article.
        content: paragraph(post.excerpt),
      },
      { slug: { equals: post.slug } },
      `${post.title.slice(0, 50)}… (draft — body not written)`,
    );
  }

  // ── Page banners ──────────────────────────────────────────────────────
  console.log("\nPage banners");
  for (const banner of PAGE_BANNERS) {
    await ensure(
      "heroes",
      // Every override field is intentionally left blank: the record exists so
      // the client can find the page in a list and change its photo or
      // headline. Until they do, the page renders exactly as it does now.
      { ...banner, status: "published" },
      { page: { equals: banner.page } },
      `${banner.pageName} (${banner.page})`,
    );
  }

  console.log(`\nDone. ${created} created, ${skipped} already present.\n`);
  process.exit(0);
}

/** Minimal Lexical document containing a single paragraph. */
function paragraph(text: string) {
  return {
    root: {
      type: "root",
      format: "" as const,
      indent: 0,
      version: 1,
      direction: "ltr" as const,
      children: [
        {
          type: "paragraph",
          format: "" as const,
          indent: 0,
          version: 1,
          direction: "ltr" as const,
          textFormat: 0,
          children: [
            {
              type: "text",
              format: 0,
              style: "",
              mode: "normal",
              detail: 0,
              text,
              version: 1,
            },
          ],
        },
      ],
    },
  };
}

/**
 * One record per page that renders a banner, so the client edits from a list
 * of recognisable page names rather than having to know route paths.
 */
const PAGE_BANNERS = [
  { pageName: "Homepage", page: "/" },
  { pageName: "Online Community", page: "/community/online" },
  { pageName: "Partner With Us", page: "/community/partner" },
  { pageName: "Share Your Story", page: "/community/share-your-story" },
  { pageName: "Students", page: "/community/students" },
  { pageName: "Ambassador Meetups", page: "/experiences/ambassador-meetups" },
  { pageName: "Global Experiences", page: "/experiences/global" },
  { pageName: "Jamaica Experience", page: "/experiences/jamaica" },
  { pageName: "Leadership Retreats", page: "/experiences/leadership-retreats" },
  { pageName: "Local Events", page: "/experiences/local-events" },
  { pageName: "Upcoming Events", page: "/experiences/upcoming-events" },
  { pageName: "Mission Projects", page: "/impact/mission-projects" },
  { pageName: "Sponsor Impact", page: "/impact/sponsor-impact" },
  { pageName: "Student Support", page: "/impact/student-support" },
  { pageName: "Volunteer", page: "/impact/volunteer" },
  { pageName: "Career Resources", page: "/resources/career" },
  { pageName: "FAQs", page: "/resources/faqs" },
  { pageName: "Podcast", page: "/resources/podcast" },
  { pageName: "Research", page: "/resources/research" },
  { pageName: "Speaking Topics", page: "/speakers/topics" },
  { pageName: "Career Lounge", page: "/support/career-lounge" },
  { pageName: "Corporate Partnerships", page: "/support/corporate" },
  { pageName: "Healthcare Systems", page: "/support/healthcare-systems" },
  { pageName: "Recruit With Us", page: "/support/recruit" },
  { pageName: "Universities", page: "/support/universities" },
];

main().catch((error) => {
  console.error("\nSeed failed:", error);
  process.exit(1);
});
