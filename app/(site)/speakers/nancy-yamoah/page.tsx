import SpeakerProfile, { type SpeakerProfileData } from "@/components/ui/SpeakerProfile";
import { NANCY_BIO, NANCY_BOOK } from "@/lib/fallback-content";
import { PHOTOS, VIDEOS } from "@/lib/images";

/**
 * Nancy's speaker profile.
 *
 * Every field here is the client's own copy from their revision document —
 * the title line, both topic areas with the message she leads each with, and
 * all seven signature talks. It replaces the build's placeholder set, which
 * included two "[CLIENT TO PROVIDE: …]" paragraphs that were rendering on the
 * live page.
 */
const SPEAKER: SpeakerProfileData = {
  name: "Nancy Yamoah",
  credentials: "MS OTR/L",
  role: "Founder, CEO & President, Black in Rehab Foundation",
  tagline:
    "Occupational Therapist | Whole Health Doctoral Student | Healthcare Visionary | Founder & CEO | Clinician Wellness & Leadership Speaker",
  portrait: PHOTOS.teamNancy,
  heroImage: PHOTOS.conferenceNetworking,
  bio: NANCY_BIO,
  book: NANCY_BOOK,
  /*
    Supplied by the client as "Nancy on stage" — the Ghana session at the West
    African Genetic Medicine Centre. It replaces nothing: this band had no
    video before, only stock-feeling stills of other people's rooms.
  */
  video: {
    src: VIDEOS.speakingNancyWagmc,
    poster: PHOTOS.speakingNancyWagmcPoster,
    caption: "Speaking at the West African Genetic Medicine Centre, Accra.",
  },
  topicAreas: [
    {
      title: "Clinician Wellness, Identity & Whole Health",
      message: "Healthcare professionals deserve to be whole, not just functional.",
      topics: [
        "Who heals the healer?",
        "Clinician burnout and sustainable careers",
        "Identity beyond your professional title",
        "Whole-person wellness for clinicians",
        "Purpose, self-discovery, and personal transformation",
        "Reconnecting with yourself while caring for others",
      ],
    },
    {
      title: "Rehabilitation Leadership, Representation & Global Impact",
      message:
        "Clinicians can be more than practitioners—they can be leaders, innovators, entrepreneurs, and change-makers.",
      topics: [
        "The future of rehabilitation",
        "Black representation in healthcare",
        "Clinicians becoming leaders and visionaries",
        "Entrepreneurship beyond the treatment room",
        "Building your professional voice and platform",
        "Taking rehabilitation beyond borders",
        "Connecting the African Diaspora through healthcare and collaboration",
      ],
    },
  ],
  signatureTalks: [
    {
      title: "Beyond the Credentials: Who Are You Becoming?",
      description: "Identity, purpose and the clinician's journey.",
    },
    {
      title: "Who Heals the Healer?",
      description:
        "Clinician wellness, whole health and sustainable healthcare careers.",
    },
    {
      title: "From Clinician to Visionary",
      description:
        "How healthcare professionals can expand their influence beyond the traditional clinical role.",
    },
    {
      title: "Seen, Heard & Empowered",
      description:
        "Building representation and belonging for Black rehabilitation professionals.",
    },
    {
      title: "Revealed: Becoming the Clinician You Were Created to Be",
      description: "Your personal story, purpose, identity and transformation.",
    },
    {
      title: "Beyond Borders: Reimagining Rehabilitation Across the African Diaspora",
      description: "Global rehabilitation, cultural exchange and collaboration.",
    },
    {
      title: "The Clinician as a Creator",
      description:
        "Building your voice, platform, brand and business from your clinical expertise.",
    },
  ],
  // Kept for the shared type; the themed areas above are what render.
  topics: [],
  formats: [
    "Keynote addresses, 45 to 60 minutes",
    "Student and early-career panels",
    "Interactive workshops on mentorship and community building",
    "Campus lectures and student visits",
    "Podcast and media appearances",
    "Available in person and virtually",
  ],
  highlights: [
    { value: "OTR/L", label: "Occupational Therapist" },
    { value: "Founder", label: "Black in Rehab Foundation" },
    { value: "Whole Health", label: "Doctoral student" },
    { value: "LovelyyOT", label: "Educator & content creator" },
  ],
  /*
    Only photographs of this speaker actually on a stage.

    The band used to be padded out to four tiles with a lecture hall, a
    mentorship conversation and a conference session — none of them Nancy, and
    none of them on stage. All of these are from the client's own "on stage"
    set: two from the West African Genetic Medicine Centre in Accra, three from
    the Africa Business Investment Summit.
  */
  gallery: [
    {
      src: PHOTOS.speakingNancyWagmc,
      alt: "Nancy Yamoah speaking at the West African Genetic Medicine Centre in Accra",
    },
    {
      src: PHOTOS.speakingTeamWagmc,
      alt: "The Black in Rehab team on stage at the West African Genetic Medicine Centre in Accra",
    },
    {
      src: PHOTOS.speakingSummitPodium,
      alt: "Nancy Yamoah at the podium at the Africa Business Investment Summit",
    },
    {
      // Two people on stage and the client did not say who, so the caption
      // names the event rather than guessing at the second chair.
      src: PHOTOS.speakingSummitFireside,
      alt: "In conversation on stage at the Africa Business Investment Summit",
    },
  ],
};

export default function NancyYamoahPage() {
  return <SpeakerProfile speaker={SPEAKER} />;
}
