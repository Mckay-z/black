/**
 * Every current partner, from the client's "Website Updates" document — the
 * organisations (SENA, NSA, GUBA) and the brand partners. The client confirmed
 * all of them are partners. One list so every logo wall on the site agrees.
 *
 * Logos are supplied on white, so they are always shown on white tiles.
 */
export const PARTNERS = [
  {
    name: "SENA Pediatric Therapy Centre",
    logo: "/logos/sena-pediatric.png",
    width: 408,
    height: 200,
  },
  {
    name: "Nature's Sprout Academy",
    logo: "/logos/nature-sprouts-academy.png",
    width: 377,
    height: 59,
  },
  {
    name: "GUBA Foundation",
    logo: "/logos/guba-foundation.png",
    width: 247,
    height: 146,
  },
  // The brand partners below were supplied together on one small sheet in
  // the same document and cropped from it, so they are ~80px — shown at
  // their own size rather than stretched. Replace with originals when sent.
  { name: "Alo", logo: "/logos/sponsor-alo.png", width: 447, height: 447 },
  { name: "OT Designz", logo: "/logos/sponsor-ot-designz.png", width: 80, height: 85 },
  { name: "Jaanuu", logo: "/logos/sponsor-jaanuu.png", width: 75, height: 70 },
  { name: "Clove", logo: "/logos/sponsor-clove.png", width: 78, height: 115 },
  { name: "Garde Malade", logo: "/logos/sponsor-garde-malade.png", width: 74, height: 53 },
  { name: "Vakae Luxe", logo: "/logos/sponsor-vakae-luxe.png", width: 80, height: 72 },
] as const;
