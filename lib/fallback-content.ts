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

/**
 * Nancy Yamoah's full biography, exactly as the client supplied it in their
 * revision document. Kept in one place because two pages need it — her
 * founder profile and her speaker profile — and they must not drift apart.
 *
 * Real client copy, not placeholder. Safe to publish as it stands.
 */
export const NANCY_BIO = [
  "Nancy Yamoah is an occupational therapist, entrepreneur, educator, content creator, and visionary leader dedicated to transforming rehabilitation through representation, education, whole-person wellness, community, and global impact.",
  "As the Founder, CEO, and President of the Black in Rehab Foundation, Nancy created a movement dedicated to increasing the visibility and representation of Black rehabilitation professionals while creating spaces where clinicians can feel seen, heard, supported, empowered, and connected.",
  "With more than a decade of experience in healthcare, Nancy has worked across adult rehabilitation, physical disabilities, skilled nursing, home health, and assisted living. Her work brings together clinical expertise, leadership, entrepreneurship, education, and advocacy to create new possibilities for rehabilitation professionals.",
  "Nancy is also the creator behind LovelyyOT, her YouTube platform where she educates and empowers current and future occupational therapists through career guidance, professional education, clinical insights, and authentic conversations about life in healthcare.",
  "As a doctoral student in Whole Health, Nancy is continuing to expand her understanding of health beyond traditional clinical care. Her evolving work explores the connection between the physical, emotional, mental, social, spiritual, and environmental dimensions of well-being—and how a whole-person approach can contribute to healthier individuals, clinicians, and communities.",
  "As an OT visionary, Nancy believes rehabilitation has the power to extend far beyond the treatment room. She is passionate about helping clinicians recognize their value, discover new opportunities, expand their influence, and use their skills to create meaningful change.",
  "Through the Black in Rehab Foundation, Nancy is building initiatives centered on professional development, mentorship, networking, retreats, community engagement, and global clinical and cultural exchange. Her vision extends across borders, connecting rehabilitation and wellness professionals throughout the African Diaspora through education, collaboration, service, and meaningful partnerships.",
  "At the heart of Nancy's work is a belief that representation matters, community matters, whole-person wellness matters, and rehabilitation professionals have the power to shape the future of healthcare.",
  "She is not simply building an organization—she is building a movement, creating pathways for clinicians to connect, grow, lead, serve, and leave a lasting legacy in healthcare.",
];

/**
 * Nancy's ebook.
 *
 * Sold through LovelyyOT, her own store, and processed by Payhip — not a
 * Foundation product. The description says so, because this sits on a
 * 501(c)(3) site where a reader could otherwise assume buying it is a gift to
 * the charity.
 *
 * No price here on purpose: it is set on Payhip, carries a referral discount,
 * and a figure hardcoded in the repo is one that goes stale silently.
 */
export const NANCY_BOOK = {
  title: "Becoming an Adult Rehab Expert: The Blueprint",
  url: "https://payhip.com/b/vSa6y",
  image: PHOTOS.bookAdultRehabBlueprint,
  description:
    "A 40-page guide for OTs and COTAs covering evaluation, documentation, interventions, splinting, and billing across SNF, ILF, ALF, inpatient rehab and home health. Published through her own LovelyyOT store.",
};

/**
 * Dr. Chauntel Altidor's biography and credential line, exactly as the client
 * supplied them in their revision document. Shared by her founder profile,
 * her speaker profile and the leadership list, for the same reason Nancy's
 * biography is shared: three pages must not drift apart.
 *
 * Real client copy, not placeholder. Safe to publish as it stands.
 *
 * NOTE: this corrects a factual error the build shipped with — every page
 * described her as a "Doctor of Physical Therapy". She is an occupational
 * therapist (OTD, OTR/L).
 */
export const CHAUNTEL_CREDENTIALS =
  "Occupational Therapist | Healthcare & Rehabilitation Leader | Neurodiversity Educator | Co-Founder & Vice President, Black in Rehab | Founder, OT with Faith | Global Health & Diaspora Advocate";

export const CHAUNTEL_BIO = [
  "Dr. Altidor is an autism and sensory processing / neurodivergent children specialist. Her clinical background also spans adult neurorehabilitation, including stroke, traumatic brain injury, and spinal cord injury rehabilitation.",
  "Beyond clinical practice, Dr. Altidor is an educator, speaker, entrepreneur, and advocate passionate about creating spaces where rehabilitation professionals feel seen, supported, and empowered to expand what is possible for themselves and the communities they serve. Her work through Black in Rehab extends beyond representation — building meaningful connections, developing future leaders, and creating opportunities for rehabilitation professionals to make an impact both nationally and globally.",
];

/**
 * Dr. Altidor's parent-support offerings, sold through OT with Faith — her
 * own practice, not a Foundation programme. Each carries the destination the
 * client gave for its button.
 *
 * `external: true` on all three because every one of them leaves the site for
 * a third-party booking page or checkout, which a reader should be able to
 * see before they click.
 */
export const CHAUNTEL_OFFERINGS = [
  {
    title: "From Chaos to Calm",
    subtitle: "12-Week Neurodiverse Parent Support Program",
    description:
      "A 12-week personalized parent support experience designed to help you better understand your child's sensory needs, behaviors, triggers, and patterns. Together you build practical strategies for everyday challenges like meltdowns, transitions, routines, regulation, and sensory overwhelm — so you can parent with more clarity and confidence.",
    cta: "Book a Clarity Call",
    url: "https://www.otwithfaith.com",
    host: "OT with Faith",
  },
  {
    title: "Parent Clarity Intensive",
    subtitle: "90-Minute 1:1 Session",
    description:
      "A focused 90-minute session with dedicated time to unpack your biggest concerns, identify patterns behind your child's behavior, and create practical next steps tailored to your family. You leave with a clearer understanding of what your child may be communicating, and what you can start doing differently at home.",
    cta: "Book a Clarity Call",
    url: "https://www.otwithfaith.com",
    host: "OT with Faith",
  },
  {
    title: "The Sensory Behavior Handbook",
    subtitle: "A Self-Guided Resource for Parents",
    description:
      "A practical handbook that helps you look beyond the behavior and begin identifying the sensory patterns, triggers, and unmet needs that may be influencing your child's responses. It gives you a framework for understanding what may be happening before, during, and after challenging moments — so you can respond with greater confidence instead of constantly guessing.",
    cta: "Get the Handbook",
    url: "https://www.paypal.com/ncp/payment/KEHLTAR3TF6W4",
    host: "PayPal",
  },
] as const;

/**
 * The leadership team.
 *
 * Unlike most of this file this is REAL client-supplied content — names,
 * titles, bios and portraits all come from their "Website edits" revision
 * document, so nothing here is invented and it is safe to publish as it
 * stands. Entering these people in the dashboard under People → "Leadership
 * Team" replaces this list entirely.
 *
 * `credentials` is the long pipe-separated line the client writes after a
 * name; `role` is the short title used where there is no room for it.
 */
export const FALLBACK_LEADERSHIP = [
  {
    id: "nancy",
    name: "Nancy Yamoah, OTR/L",
    role: "Founder, CEO & President",
    credentials:
      "Occupational Therapist | OT Visionary | Educator | Doctoral Student in Whole Health | Content Creator",
    image: PHOTOS.teamNancy,
    bio: "An occupational therapist, entrepreneur, educator, content creator, and visionary leader dedicated to transforming rehabilitation through representation, education, whole-person wellness, community, and global impact.",
  },
  {
    id: "chauntel",
    name: "Dr. Chauntel Altidor, OTD, OTR/L",
    role: "Co-Founder & Vice President",
    credentials: CHAUNTEL_CREDENTIALS,
    image: PHOTOS.teamChauntel,
    bio: "An autism and sensory processing specialist whose clinical background also spans adult neurorehabilitation. Beyond practice, she is an educator, speaker, entrepreneur, and advocate creating spaces where rehabilitation professionals feel seen, supported, and empowered.",
  },
  {
    id: "nicole",
    name: "Nicole McDaniel",
    role: "Chief Operating Officer",
    credentials:
      "Founder & Lead Group Travel Advisor, Vakae Luxe | Executive Strategist | Operations & Brand Leader | Global Experience Designer",
    image: PHOTOS.teamNicole,
    bio: "Nicole brings more than 30 years of experience in business operations, strategic planning, marketing, branding, travel, and event management. Working closely with the founders, she transforms vision into organized strategies, effective systems, and meaningful experiences — supporting staff coordination, partnerships, fundraising, ambassador initiatives, conferences, and global clinical and cultural programs.",
  },
  {
    id: "alexys",
    name: "Alexys Taylor, OTR/L",
    role: "Lead Ambassador, USA",
    credentials: "",
    image: PHOTOS.teamAlexys,
    bio: "A pediatric occupational therapist based in Northern Virginia with a passion for mental health, resilience, and helping others develop a strong sense of self. A member of Black in Rehab for the past four years, Alexys is excited to pour back into the community that has poured into her by fostering connection, representation, and opportunities for others to grow.",
  },
  {
    id: "faith",
    name: "Faith Ene Akor",
    role: "Ghana Ambassador Lead",
    credentials: "",
    image: PHOTOS.teamFaith,
    bio: "An Occupational Therapist based in Ghana with interests in inclusive healthcare, advocacy, and community development. She is passionate about women's health and contributing to systems that expand services across the lifespan. Her other interests include geriatrics, research, AI in healthcare, and expanding health education to support healthier communities.",
  },
  {
    id: "winner",
    name: "Winner Naa Adjeley Addo",
    role: "Personal Assistant",
    credentials: "Occupational Therapy Student, University of Ghana",
    image: PHOTOS.teamWinner,
    // Everything the client told us about her, and no more. Worth asking for
    // a fuller paragraph so her row reads like the others.
    bio: "An Occupational Therapy student at the University of Ghana, supporting the foundation's leadership team as Personal Assistant.",
  },
] as const;

/**
 * The ambassador roster, from the client's own "Meet Our Ambassador" cards.
 *
 * Like the leadership list above, every name, title and city here is the
 * client's, read straight off the artwork they supplied — nothing is invented,
 * so this is safe to publish as it stands.
 *
 * `card` is the finished square graphic, which already prints the name, title
 * and city. It is what the page renders. `name`, `role` and `city` are here
 * because that text lives inside a JPEG where no screen reader or search
 * engine can reach it: the page spends them on the image's alt text and on the
 * city list, not on a visible caption that would say it all twice.
 *
 * Faith also appears in FALLBACK_LEADERSHIP as Ghana Ambassador Lead. That is
 * correct — she holds both roles, and each page names the one it is about.
 *
 * This list is the whole roster the ambassadors page renders — it does not
 * read People → "Ambassador" from the dashboard at all. Two of the leadership
 * team carry that tag, and letting them through put ordinary portraits beside
 * finished cards in the same grid. An ambassador joins this page by getting a
 * card here, not a dashboard record.
 */
export const FALLBACK_AMBASSADORS = [
  {
    id: "marcella-price",
    name: "Dr. Marcella Price, OTD",
    role: "Occupational Therapist",
    city: "New Orleans, Louisiana",
    card: PHOTOS.ambassadorMarcellaPrice,
  },
  {
    id: "chanelle-miller",
    name: "Chanelle Miller",
    role: "OT Clinician",
    city: "Jacksonville, Florida",
    card: PHOTOS.ambassadorChanelleMiller,
  },
  {
    id: "akor-faith-ene",
    name: "Akor Faith Ene",
    role: "Occupational Therapist",
    city: "Accra, Ghana",
    card: PHOTOS.ambassadorAkorFaithEne,
  },
  {
    id: "brittney-harvey",
    name: "Brittney (Bri) Harvey",
    role: "Pediatric Occupational Therapist",
    city: "Oklahoma City, Oklahoma",
    card: PHOTOS.ambassadorBrittneyHarvey,
  },
  {
    id: "akida-greene",
    name: "Akida Greene",
    role: "Occupational Therapist",
    city: "Miami, Florida",
    card: PHOTOS.ambassadorAkidaGreene,
  },
  {
    id: "imani-johnson",
    name: "Imani Johnson",
    role: "Occupational Therapist",
    city: "Los Angeles, California",
    card: PHOTOS.ambassadorImaniJohnson,
  },
  {
    id: "yamilette-baez",
    name: "Yamilette Baez",
    role: "Occupational Therapist Supervisor",
    city: "Long Island, New York",
    card: PHOTOS.ambassadorYamiletteBaez,
  },
  {
    id: "kourtney-new",
    name: "Kourtney New",
    role: "Speech Therapist",
    city: "Chicago, Illinois",
    card: PHOTOS.ambassadorKourtneyNew,
  },
  {
    id: "jasmin-seaberry",
    name: "Dr. Jasmin Seaberry",
    role: "Occupational Therapist",
    city: "Chesapeake, Virginia",
    card: PHOTOS.ambassadorJasminSeaberry,
  },
  {
    id: "kanosha-grady",
    name: "Kanosha Grady",
    role: "DPT",
    city: "Los Angeles, California",
    card: PHOTOS.ambassadorKanoshaGrady,
  },
  {
    id: "chantia-tankou",
    name: "Chantia Tankou",
    role: "COTA Student",
    city: "Dallas, Texas",
    card: PHOTOS.ambassadorChantiaTankou,
  },
  {
    id: "amanda-pericles",
    name: "Amanda Pericles",
    role: "Speech-Language Pathologist",
    city: "Charlotte, North Carolina",
    card: PHOTOS.ambassadorAmandaPericles,
  },
  {
    id: "jalisa-mosley",
    name: "Jalisa Mosley",
    role: "Occupational Therapist",
    city: "Gary, Indiana",
    card: PHOTOS.ambassadorJalisaMosley,
  },
] as const;

/**
 * Impact gallery shown until the client publishes their own entries.
 *
 * Unlike most of this file these are REAL client photographs already in
 * `public/photos/`, so the titles only describe what is visibly in each frame
 * — no invented names, numbers, or outcomes. The categories are a provisional
 * grouping made from the filenames and need the client's confirmation.
 *
 * There is no video here: the client has not supplied any yet. The gallery
 * renders photo-only entries perfectly well, and each becomes a video the
 * moment a link is added to its record in the dashboard.
 */
export const FALLBACK_IMPACT_STORIES = [
  /*
    ORDER MATTERS AT THE TOP OF THIS LIST. The home page renders the first six
    (`limit={6}`); the impact page renders them all behind category filters.
    Those first six are therefore ordered to avoid the three photographs the
    home page already spends elsewhere — the lecture hall and the volunteers
    with children are in Mission, and the raised hands are the Breast Cancer
    Walk in Upcoming Events. They are still here, just below the fold of the
    home page's six, so the impact page loses nothing.

    Reordering freely is fine once the client publishes their own entries in
    the dashboard, which replaces this list wholesale.
  */
  { title: "Bookbag handout", category: "donations", image: PHOTOS.impactBackpacks },
  { title: "Volunteers with students", category: "donations", image: PHOTOS.impactVolunteersKids },
  { title: "Student awards", category: "scholarships", image: PHOTOS.studentsAwards },
  { title: "Community day", category: "community", image: PHOTOS.impactChildren },
  { title: "Therapy session", category: "community", image: PHOTOS.impactTherapy },
  { title: "Pediatric care", category: "community", image: PHOTOS.impactPediatric },

  // Below the home page's six.
  { title: "On campus", category: "scholarships", image: PHOTOS.studentsLectureHall },
  { title: "Out in the community", category: "community", image: PHOTOS.impactVolunteerChildren },
  { title: "Neurodiversity day", category: "community", image: PHOTOS.impactNeurodiversity },
  { title: "Speaking up", category: "community", image: PHOTOS.impactAdvocacySpeaker },
  { title: "Together", category: "community", image: PHOTOS.impactHandsUp },
] as const;

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
