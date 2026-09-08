import SpeakerProfile, { type SpeakerProfileData } from "@/components/ui/SpeakerProfile";
import { PHOTOS } from "@/lib/images";

const SPEAKER: SpeakerProfileData = {
  name: "Dr. Chauntel Altidor",
  credentials: "OTD",
  role: "Co-Founder & Executive Director, Black in Rehab",
  tagline:
    "Clinician, entrepreneur, and global leader with a heart for service and a vision for transformation. Dr. Chauntel speaks on representation, leadership, and building institutions that outlast the people who start them.",
  portrait: PHOTOS.founderChauntel,
  heroImage: PHOTOS.conferenceSession,
  // One real paragraph, and nothing else. The build shipped two further
  // "[CLIENT TO PROVIDE: …]" paragraphs that were rendering to visitors; a
  // short biography reads as deliberate, a visible request to the client does
  // not. Her full biography goes here when it is supplied.
  bio: [
    "Dr. Chauntel Altidor is a Doctor of Occupational Therapy, entrepreneur, and the co-founder of Black in Rehab. She leads with purpose — creating opportunities, building bridges, and equipping rehabilitation professionals to change lives in their clinics and their communities.",
  ],
  topics: [
    "Representation and Diversity in Rehabilitation",
    "Leadership Development for Healthcare Professionals",
    "Global Health and International Service",
    "Building Community Through Professional Organizations",
    "Entrepreneurship in Occupational Therapy",
    "Health Equity in Underserved Communities",
  ],
  formats: [
    "Keynote addresses, 45 to 60 minutes",
    "Moderated panels and fireside conversations",
    "Half-day leadership workshops",
    "University lectures and commencement addresses",
    "Podcast and media appearances",
    "Available in person and virtually",
  ],
  highlights: [
    { value: "OTD", label: "Doctor of Occupational Therapy" },
    { value: "Co-Founder", label: "Black in Rehab Foundation" },
    { value: "Global", label: "Ghana & Caribbean programs" },
    { value: "Keynote", label: "Conference & campus speaker" },
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
