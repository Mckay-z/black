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

/**
 * Video.
 *
 * Kept small and few on purpose. These are served straight out of `public`,
 * so every byte here ships in the deploy — there is no CDN in front of them
 * and no adaptive bitrate. Anything longer than a short clip belongs on
 * YouTube or Vimeo, referenced by link, which is what `lib/video.ts` and the
 * impact gallery already support.
 */
export const VIDEOS = {
  // 13s, 2.7MB. Two longer takes of the same session were supplied (53s/10.5MB
  // and 90s/9.1MB) and were left out for the reason above.
  speakingNancyWagmc: "/video/speaking-nancy-wagmc.mp4",
} as const;

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

  // ── Team & ambassadors ────────────────────────────────────────────────
  // Supplied by the client in the "Website edits" revision document, one
  // portrait per named person. Each is tied to a specific individual — never
  // reuse one of these for a different name or as generic filler.
  teamNancy: "/photos/team-nancy-yamoah.jpg", // landscape — Nancy Yamoah, Founder & CEO
  teamChauntel: "/photos/team-chauntel-altidor.jpg", // portrait — Dr. Chauntel Altidor, Co-Founder & VP
  teamNicole: "/photos/team-nicole-mcdaniel.jpg", // portrait — Nicole McDaniel, COO
  teamAlexys: "/photos/team-alexys-taylor.jpg", // portrait — Alexys Taylor, Lead Ambassador (USA)
  teamFaith: "/photos/team-faith-ene-akor.jpg", // square — Faith Ene Akor, Ghana Ambassador
  teamWinner: "/photos/team-winner-addo.jpg", // portrait — Winner Naa Adjeley Addo, Personal Assistant

  // ── Ambassador cards ──────────────────────────────────────────────────
  // The client's "Meet Our Ambassador" social graphics, one per ambassador.
  // Unlike everything else here these are NOT photographs: each is a finished
  // square composition that already carries the logo, the person's name, their
  // title and their city as artwork. So they are used whole, never cropped to
  // a face and never paired with a caption repeating what is printed on them.
  ambassadorMarcellaPrice: "/photos/ambassador-marcella-price.jpg", // square
  ambassadorChanelleMiller: "/photos/ambassador-chanelle-miller.jpg", // square
  ambassadorAkorFaithEne: "/photos/ambassador-akor-faith-ene.jpg", // square
  ambassadorBrittneyHarvey: "/photos/ambassador-brittney-harvey.jpg", // square
  ambassadorAkidaGreene: "/photos/ambassador-akida-greene.jpg", // square
  ambassadorImaniJohnson: "/photos/ambassador-imani-johnson.jpg", // square
  ambassadorYamiletteBaez: "/photos/ambassador-yamilette-baez.jpg", // square
  ambassadorKourtneyNew: "/photos/ambassador-kourtney-new.jpg", // square
  ambassadorJasminSeaberry: "/photos/ambassador-jasmin-seaberry.jpg", // square
  ambassadorKanoshaGrady: "/photos/ambassador-kanosha-grady.jpg", // square
  ambassadorChantiaTankou: "/photos/ambassador-chantia-tankou.jpg", // square
  ambassadorAmandaPericles: "/photos/ambassador-amanda-pericles.jpg", // square
  ambassadorJalisaMosley: "/photos/ambassador-jalisa-mosley.jpg", // square

  // ── Publications ──────────────────────────────────────────────────────
  // Cover of Nancy's ebook, sold through her own LovelyyOT store on Payhip.
  bookAdultRehabBlueprint: "/photos/book-adult-rehab-blueprint.jpg", // portrait

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

  // ── Speaking engagements ──────────────────────────────────────────────
  // Supplied in the revision document as the replacement for the "Invite Us
  // to Speak at Your Program" photo: the founders on stage at the Africa
  // Business Investment Summit. Shows the pair, so it is not a portrait slot.
  speakingAfricaSummit: "/photos/speaking-africa-summit.jpg", // portrait

  // Ghana, at the West African Genetic Medicine Centre. Supplied by the client
  // as "Nancy on stage". Both are upright: they belong in a portrait or square
  // slot, not in a full-bleed banner, where the crop would take a narrow strip
  // out of the middle of the room.
  speakingNancyWagmc: "/photos/speaking-nancy-wagmc.jpg", // portrait — Nancy at the podium
  speakingTeamWagmc: "/photos/speaking-team-wagmc.jpg", // portrait — the team on stage
  // Still frame for the clip in VIDEOS, so the player is not a black rectangle
  // before it is played.
  speakingNancyWagmcPoster: "/photos/speaking-nancy-wagmc-poster.jpg", // portrait

  // The Africa Business Investment Summit, from the same "on stage" set. These
  // three came off a phone at 768x1024 and are not upscaled: they hold up at
  // card and tile size and should not be given a large or full-bleed slot.
  speakingSummitFireside: "/photos/speaking-summit-fireside.jpg", // portrait — small source
  speakingSummitPodium: "/photos/speaking-summit-podium.jpg", // portrait — small source

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
