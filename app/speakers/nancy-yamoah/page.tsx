import SpeakerProfile, { type SpeakerProfileData } from "@/components/ui/SpeakerProfile";
import { PHOTOS } from "@/lib/images";

const SPEAKER: SpeakerProfileData = {
  name: "Nancy Yamoah",
  credentials: "OT",
  role: "Co-Founder & Chief Strategy Officer, Black in Rehab",
  tagline:
    "Occupational therapist and community builder. Nancy speaks on purpose, student development, and what it takes to build professional community from nothing.",
  portrait: PHOTOS.founderNancy,
  heroImage: PHOTOS.conferenceNetworking,
  bio: [
    "Nancy Yamoah is an occupational therapist and the co-founder of Black in Rehab, where she leads strategy, community development, and the student programs that have become the organization's largest membership base.",
    "[CLIENT TO PROVIDE: Full speaker biography for Nancy Yamoah, including clinical background, community work, notable engagements, and awards.]",
    "[CLIENT TO PROVIDE: A short paragraph on speaking style and the audiences she works with best — student groups, early-career clinicians, professional associations, or corporate partners.]",
  ],
  topics: [
    "Building Community Through Professional Organizations",
    "Student Success and Career Development in Rehab",
    "Purpose, Burnout, and Sustainable Practice",
    "Mentorship That Actually Changes Trajectories",
    "Cultural Competency in Clinical Practice",
    "Representation and the Rehabilitation Pipeline",
  ],
  formats: [
    "Keynote addresses, 45 to 60 minutes",
    "Student and early-career panels",
    "Interactive workshops on mentorship and community building",
    "Campus lectures and student chapter visits",
    "Podcast and media appearances",
    "Available in person and virtually",
  ],
  highlights: [
    { value: "OT", label: "Occupational Therapist" },
    { value: "Co-Founder", label: "Black in Rehab Foundation" },
    { value: "Students", label: "Leads student programs" },
    { value: "Community", label: "Chapter & ambassador network" },
  ],
  gallery: [
    { src: PHOTOS.studentsLectureHall, alt: "Student chapter session" },
    { src: PHOTOS.conferenceTableTalk, alt: "Community meetup" },
    { src: PHOTOS.impactVolunteerChildren, alt: "Mentorship conversation" },
    { src: PHOTOS.conferenceSession, alt: "Speaking to a full room" },
  ],
};

export default function NancyYamoahPage() {
  return <SpeakerProfile speaker={SPEAKER} />;
}
