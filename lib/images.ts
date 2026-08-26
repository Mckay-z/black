/**
 * Site photography.
 *
 * Every image on the site is referenced through this module, so swapping a
 * photo means editing one line here rather than hunting through pages.
 *
 * Files live in `public/photos/`. They were curated from the client's library
 * in `public/images/` and re-encoded for the web (max 1800px, progressive
 * JPEG). `public/images/` is the untouched source archive and is gitignored —
 * it is ~927MB and must not be deployed.
 *
 * Orientation is noted because it drives layout: `landscape` images are the
 * ones safe to use as full-bleed hero and banner backgrounds.
 */

export const PHOTOS = {
  // ── Founders ──────────────────────────────────────────────────────────
  // Individual portraits, supplied and named by the client. Use these wherever
  // a founder is identified by name.
  founderChauntel: "/photos/founder-chauntel.jpg", // portrait
  founderNancy: "/photos/founder-nancy.jpg", // portrait
  // These three show BOTH founders together — fine for pages about the pair,
  // never for a slot that names one of them.
  foundersPair: "/photos/founders-pair-sweatshirts.jpg", // portrait
  foundersPortrait: "/photos/founders-pair-portrait.jpg", // portrait
  foundersStanding: "/photos/founders-pair-standing.jpg", // portrait

  // ── Conference ────────────────────────────────────────────────────────
  conferenceCelebration: "/photos/conference-group-celebration.jpg", // landscape
  conferenceGroupBranded: "/photos/conference-group-branded.jpg", // landscape
  conferenceAudience: "/photos/conference-audience.jpg", // landscape
  conferenceSession: "/photos/conference-session.jpg", // landscape
  conferenceRoomWide: "/photos/conference-room-wide.jpg", // portrait
  conferencePodium: "/photos/conference-podium-speaker.jpg", // portrait
  conferenceSpeakerBw: "/photos/conference-speaker-bw.jpg", // portrait
  conferencePanel: "/photos/conference-panel.jpg", // portrait
  conferenceSpeakerMic: "/photos/conference-speaker-mic.jpg", // portrait
  conferenceNetworking: "/photos/conference-networking.jpg", // portrait
  conferenceTableTalk: "/photos/conference-table-talk.jpg", // portrait
  conferencePresentation: "/photos/conference-presentation.jpg", // portrait
  conferenceGala: "/photos/conference-gala-speaker.jpg", // portrait
  conferenceHug: "/photos/conference-celebration.jpg", // portrait

  // ── Retreats & wellness ───────────────────────────────────────────────
  retreatBeachYogaGroup: "/photos/retreat-beach-yoga-group.jpg", // landscape
  retreatYogaClass: "/photos/retreat-yoga-class.jpg", // landscape
  retreatGroupBlazers: "/photos/retreat-group-blazers.jpg", // landscape
  retreatGroupColorful: "/photos/retreat-group-colorful.jpg", // landscape
  retreatGroupFormal: "/photos/retreat-group-formal.jpg", // landscape
  retreatGroupOutdoors: "/photos/retreat-group-outdoors.jpg", // landscape
  retreatDinner: "/photos/retreat-dinner-table.jpg", // landscape
  retreatBeachYoga: "/photos/retreat-beach-yoga.jpg", // portrait
  retreatMeditation: "/photos/retreat-meditation-circle.jpg", // portrait
  retreatSoundBowls: "/photos/retreat-sound-bowls.jpg", // portrait
  retreatSingingBowl: "/photos/retreat-singing-bowl.jpg", // portrait
  retreatSavasana: "/photos/retreat-savasana.jpg", // portrait
  retreatMats: "/photos/retreat-mats-group.jpg", // portrait
  retreatBanner: "/photos/retreat-welcome-banner.jpg", // portrait

  // ── Ghana & global experiences ────────────────────────────────────────
  // NOTE: every photo below is from the Ghana trips — that is all the client
  // has. Kenya and Tanzania are "Coming Soon" destinations with no photography
  // of their own, so their cards use the shots here that carry no Ghana-
  // specific markers (no kente, flags or landmarks). Swap them out as soon as
  // real photos from those trips exist.
  ghanaAirport: "/photos/ghana-airport-welcome.jpg", // landscape
  ghanaLawn: "/photos/ghana-group-lawn.jpg", // landscape
  ghanaBathOfReturn: "/photos/ghana-bath-of-return.jpg", // landscape
  ghanaCastleGroup: "/photos/ghana-castle-group.jpg", // landscape
  ghanaFreedomArch: "/photos/ghana-freedom-arch.jpg", // landscape
  ghanaJerseysGroup: "/photos/ghana-jerseys-group.jpg", // landscape
  ghanaKente: "/photos/ghana-kente-group.jpg", // landscape
  ghanaCertificates: "/photos/ghana-certificates.jpg", // landscape
  ghanaQuoteWall: "/photos/ghana-quote-wall.jpg", // landscape
  ghanaNkrumahQuote: "/photos/ghana-nkrumah-quote.jpg", // landscape
  ghanaBeach: "/photos/ghana-beach-evening.jpg", // landscape
  ghanaRiverCeremony: "/photos/ghana-river-ceremony.jpg", // portrait
  ghanaDoorOfReturn: "/photos/ghana-door-of-return.jpg", // portrait
  ghanaCanopy: "/photos/ghana-canopy-walkway.jpg", // portrait
  ghanaDrumming: "/photos/ghana-drumming.jpg", // portrait
  ghanaMarket: "/photos/ghana-market.jpg", // portrait
  ghanaCooking: "/photos/ghana-cooking-class.jpg", // portrait
  ghanaCeremonyDetail: "/photos/ghana-ceremony-detail.jpg", // portrait
  ghanaFood: "/photos/ghana-food.jpg", // portrait

  // ── Impact & community service ────────────────────────────────────────
  impactBackpacks: "/photos/impact-backpacks-kids.jpg", // landscape
  impactHandsUp: "/photos/impact-hands-up.jpg", // landscape
  impactVolunteerChildren: "/photos/impact-volunteer-children.jpg", // landscape
  impactVolunteersKids: "/photos/impact-volunteers-kids.jpg", // landscape
  impactChildren: "/photos/impact-children-crowd.jpg", // landscape
  impactNeurodiversity: "/photos/impact-neurodiversity-day.jpg", // portrait
  impactPediatric: "/photos/impact-pediatric-care.jpg", // portrait
  impactTherapy: "/photos/impact-therapy-session.jpg", // portrait
  impactAdvocacySpeaker: "/photos/impact-advocacy-speaker.jpg", // portrait

  // ── Students ──────────────────────────────────────────────────────────
  studentsAwards: "/photos/students-awards.jpg", // portrait
  studentsLectureHall: "/photos/students-lecture-hall.jpg", // portrait

  // ── Merchandise ───────────────────────────────────────────────────────
  // Lifestyle shots of real branded apparel. There is no product photography
  // for the accessories (hat, mug, tote, journal) — those cards reuse the
  // merchandise table shot until the client supplies proper product images.
  merchTable: "/photos/conference-merch-table.jpg", // portrait
  merchTeeDc: "/photos/merch-tee-dc.jpg", // portrait
  merchSweatshirt: "/photos/merch-sweatshirt.jpg", // portrait
  merchTeeCasual: "/photos/merch-tee-casual.jpg", // portrait
  merchTeesSeated: "/photos/merch-tees-seated.jpg", // portrait
} as const;

export type PhotoKey = keyof typeof PHOTOS;
