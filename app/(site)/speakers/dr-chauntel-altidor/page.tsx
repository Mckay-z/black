import SpeakerProfile, { type SpeakerProfileData } from "@/components/ui/SpeakerProfile";
import { CHAUNTEL_BIO, CHAUNTEL_CREDENTIALS, CHAUNTEL_OFFERINGS } from "@/lib/fallback-content";
import { PHOTOS } from "@/lib/images";

/**
 * Dr. Altidor's speaker profile.
 *
 * Every field here is the client's own copy from their revision document —
 * the title line, all four topic areas with the message she leads each with,
 * and all eight signature talks. It replaces the build's placeholder set,
 * which invented her topics and described her as a Doctor of Physical
 * Therapy; she is an occupational therapist.
 */
const SPEAKER: SpeakerProfileData = {
  name: "Dr. Chauntel Altidor",
  credentials: "OTD, OTR/L",
  role: "Co-Founder & Vice President, Black in Rehab",
  tagline: CHAUNTEL_CREDENTIALS,
  portrait: PHOTOS.teamChauntel,
  heroImage: PHOTOS.conferenceSession,
  bio: CHAUNTEL_BIO,
  offerings: CHAUNTEL_OFFERINGS,
  offeringsIntro:
    "Dr. Altidor supports parents of neurodivergent children through OT with Faith, her own practice. Bookings and purchases are handled there and are separate from donations to the Foundation.",
  topicAreas: [
    {
      title: "Purpose, Identity & Courageous Leadership",
      message:
        "You don't have to wait for permission to become the leader, advocate, or visionary you were created to be.",
      topics: [
        "Moving beyond fear, self-doubt, and imposter syndrome",
        "Purpose-driven leadership in healthcare",
        "Building confidence as a clinician and emerging leader",
        "Creating opportunities when traditional pathways were not built for you",
        "Using your voice and lived experience to lead change",
        "Turning an idea into a movement, community, or organization",
        "Leading without losing yourself in the process",
        "Faith, purpose, and alignment in professional growth",
      ],
    },
    {
      title: "Neurodiversity, Parent Empowerment & Family-Centered Care",
      message:
        "When we stop asking how to control the behavior and start asking what the child is communicating, everything changes.",
      topics: [
        "Understanding behavior through a sensory and neurodiversity-affirming lens",
        "Helping parents understand the “why” behind their child's behavior",
        "Autism and sensory processing in everyday life",
        "Moving beyond compliance-based approaches",
        "Empowering parents as essential members of the healthcare team",
        "Building stronger clinician-parent partnerships",
        "Making therapy strategies realistic for families outside the treatment room",
        "Supporting neurodivergent children while honoring regulation, autonomy, and individual differences",
      ],
    },
    {
      title: "Representation, Belonging & the Future of Rehabilitation",
      message:
        "Representation is more than being in the room. It is having the community, confidence, resources, and opportunity to influence what happens inside it.",
      topics: [
        "Black representation across OT, PT, and speech-language pathology",
        "Creating professional spaces where clinicians feel seen, heard, and empowered",
        "The power of community in professional development",
        "Mentorship, sponsorship, and access to opportunity",
        "Building the next generation of rehabilitation leaders",
        "Moving from representation to influence and ownership",
        "Creating culturally responsive professional communities",
        "Expanding what leadership can look like for rehabilitation professionals",
      ],
    },
    {
      title: "Global Rehabilitation, Health Equity & the African Diaspora",
      message:
        "The future of global health should not be built around saving communities. It should be built through partnership, shared expertise, capacity-building, and mutual respect.",
      topics: [
        "Reimagining traditional healthcare mission trips",
        "Rehabilitation across the African Diaspora",
        "Building sustainable international healthcare partnerships",
        "Diaspora professionals as partners in healthcare development",
        "Cultural exchange as a tool for professional and community transformation",
        "Strengthening rehabilitation systems through education and workforce development",
        "Global disability inclusion and rehabilitation access",
        "Creating ethical, sustainable pathways for clinicians to serve internationally",
      ],
    },
  ],
  signatureTalks: [
    {
      title: "You Don't Need Permission: Becoming the Leader You Were Created to Be",
      description:
        "Moving beyond fear, titles, and traditional career pathways to build influence, lead boldly, and create opportunities that did not previously exist.",
    },
    {
      title: "Beyond the Behavior: What Your Child Is Really Communicating",
      description:
        "Helping parents, educators, and professionals understand autism, sensory processing, regulation, and behavior through a more compassionate and neurodiversity-affirming lens.",
    },
    {
      title: "Parents Belong at the Table",
      description:
        "Reimagining family-centered care by recognizing parents as experts, advocates, and essential members of the healthcare team.",
    },
    {
      title: "Seen. Heard. Empowered.",
      description:
        "Why representation alone is not enough — and how belonging, community, mentorship, and access create the conditions for Black rehabilitation professionals to thrive.",
    },
    {
      title: "From Clinician to Changemaker",
      description:
        "How rehabilitation professionals can use their clinical expertise, voice, relationships, and lived experiences to create impact far beyond the treatment room.",
    },
    {
      title: "Beyond the Mission Trip: Reimagining Global Rehabilitation",
      description:
        "Moving global healthcare engagement from short-term service toward sustainable partnerships, workforce development, cultural exchange, and shared impact.",
    },
    {
      title: "The Diaspora Advantage: Reconnecting Healthcare, Culture & Opportunity",
      description:
        "The unique role Black healthcare professionals across the Diaspora can play in strengthening global rehabilitation, building cross-border partnerships, and creating new pathways for collaboration.",
    },
    {
      title: "Build the Room You Needed",
      description:
        "How personal experiences of exclusion, unmet needs, or lack of representation can become the blueprint for building communities, organizations, and movements that change an industry.",
    },
  ],
  // Kept for the shared type; the themed areas above are what render.
  topics: [],
  formats: [
    "Keynote addresses, 45 to 60 minutes",
    "Moderated panels and fireside conversations",
    "Parent and family workshops",
    "Continuing-education sessions for clinicians",
    "University lectures and student panels",
    "Available in person and virtually",
  ],
  highlights: [
    { value: "OTD, OTR/L", label: "Doctor of Occupational Therapy" },
    { value: "Co-Founder", label: "Black in Rehab Foundation" },
    { value: "OT with Faith", label: "Founder & neurodiversity educator" },
    { value: "Global", label: "Health & Diaspora advocate" },
  ],
  gallery: [
    { src: PHOTOS.conferenceAudience, alt: "Keynote at the annual conference" },
    { src: PHOTOS.conferencePanel, alt: "Panel discussion" },
    { src: PHOTOS.conferencePresentation, alt: "Leadership workshop" },
    { src: PHOTOS.conferenceHug, alt: "Community celebration" },
  ],
};

export default function DrChauntelAltidorPage() {
  return <SpeakerProfile speaker={SPEAKER} />;
}
