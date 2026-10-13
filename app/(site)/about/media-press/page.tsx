import type { Metadata } from "next";

import ImpactGallery, {
  type GalleryCategory,
  type GalleryItem,
} from "@/components/impact/ImpactGallery";
import { PHOTOS, type PhotoKey } from "@/lib/images";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Media & Press | Black in Rehab Foundation",
  description:
    "Photographs from Black in Rehab's conferences, global trips, retreats, speaking engagements and community service.",
};

/**
 * Media & Press, as a photo gallery.
 *
 * The client's revision cut the Press Kit, Speaker Request and In the News
 * blocks and asked for this page to become a gallery. Adding a photo means
 * putting it in `public/photos/`, naming it in `lib/images.ts`, and adding a
 * line below — the filter tabs only show categories that have photos.
 *
 * Team portraits, ambassador cards and merchandise are left out on purpose:
 * each has its own page, and they are not event photography.
 */
const CATEGORIES: GalleryCategory[] = [
  { value: "all", label: "All" },
  { value: "press", label: "In the Media" },
  { value: "conference", label: "Conference" },
  { value: "global", label: "Ghana & Global" },
  { value: "retreats", label: "Retreats" },
  { value: "speaking", label: "Speaking" },
  { value: "community", label: "Community" },
];

const PHOTOS_BY_CATEGORY: Record<string, [PhotoKey, string][]> = {
  press: [
    ["pressGhoneTv", "On GHOne TV, discussing the neurodiversity and autism engagement workshop"],
    ["pressStarrFm", "In studio at Starr 103.5 FM"],
    ["pressWagmcStage", "The founders at the West African Genetic Medicine Centre"],
    ["pressEveWomensForum", "At the EVE Women's Forum USA"],
  ],
  conference: [
    ["conferenceCelebration", "Conference group celebration"],
    ["conferenceGroupBranded", "Attendees at the Black in Rehab conference"],
    ["conferenceAudience", "Conference audience"],
    ["conferenceSession", "A conference session"],
    ["conferencePodium", "Speaker at the podium"],
    ["conferencePanel", "Conference panel"],
    ["conferenceSpeakerMic", "Speaker addressing the room"],
    ["conferenceNetworking", "Networking between sessions"],
    ["conferenceTableTalk", "Conversation at the table"],
    ["conferencePresentation", "Presentation"],
    ["conferenceGala", "Gala speaker"],
    ["conferenceHug", "Celebrating together"],
    ["conferenceSpeakerBw", "Conference speaker"],
    ["conferenceRoomWide", "The conference room"],
  ],
  global: [
    ["ghanaAirport", "Welcome at the airport in Accra"],
    ["ghanaCastleGroup", "The group at the castle"],
    ["ghanaDoorOfReturn", "The Door of Return"],
    ["ghanaBathOfReturn", "Bath of Return ceremony"],
    ["ghanaRiverCeremony", "River ceremony"],
    ["ghanaKente", "The group in kente"],
    ["ghanaJerseysGroup", "The group in Ghana jerseys"],
    ["ghanaFreedomArch", "Freedom Arch"],
    ["ghanaLawn", "Group photo in Ghana"],
    ["ghanaCertificates", "Certificate presentation"],
    ["ghanaDrumming", "Drumming"],
    ["ghanaCanopy", "Canopy walkway"],
    ["ghanaMarket", "At the market"],
    ["ghanaCooking", "Cooking class"],
    ["ghanaFood", "Ghanaian food"],
    ["ghanaBeach", "Evening on the beach"],
    ["ghanaQuoteWall", "Quote wall"],
    ["ghanaNkrumahQuote", "Kwame Nkrumah quote"],
  ],
  retreats: [
    ["retreatGroupBlazers", "Retreat group"],
    ["retreatGroupColorful", "Retreat group"],
    ["retreatGroupFormal", "Retreat dinner, dressed up"],
    ["retreatGroupOutdoors", "Retreat group outdoors"],
    ["retreatBeachYogaGroup", "Yoga on the beach"],
    ["retreatYogaClass", "Yoga class"],
    ["retreatMeditation", "Meditation circle"],
    ["retreatSoundBowls", "Sound bowls"],
    ["retreatSingingBowl", "Singing bowl"],
    ["retreatDinner", "Retreat dinner"],
    ["retreatBanner", "Welcome banner"],
  ],
  speaking: [
    ["speakingAfricaSummit", "The founders at the Africa Business Investment Summit"],
    ["speakingNancyWagmc", "Nancy Yamoah at the West African Genetic Medicine Centre"],
    ["speakingTeamWagmc", "The team on stage in Ghana"],
    ["speakingSummitFireside", "Fireside conversation"],
    ["speakingSummitPodium", "At the summit podium"],
    ["studentsLectureHall", "Speaking to students"],
  ],
  community: [
    ["impactBackpacks", "Backpack giveaway"],
    ["impactVolunteerChildren", "Volunteering with children"],
    ["impactVolunteersKids", "Volunteers and kids"],
    ["impactChildren", "Community event"],
    ["impactHandsUp", "Hands up"],
    ["impactNeurodiversity", "Neurodiversity day"],
    ["impactPediatric", "Pediatric care"],
    ["impactAdvocacySpeaker", "Advocacy"],
    ["studentsAwards", "Student awards"],
    ["connectionTableFriends", "The Connection Table"],
    ["connectionTableGroup", "The Connection Table"],
    ["connectionTableEmbrace", "The Connection Table"],
  ],
};

const ITEMS: GalleryItem[] = Object.entries(PHOTOS_BY_CATEGORY).flatMap(
  ([category, photos]) =>
    photos.map(([key, title]) => ({
      id: key,
      title,
      category,
      image: PHOTOS[key],
    })),
);

export default function MediaPressPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/about/media-press"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Media & Press" },
        ]}
        title="Media &"
        highlight="Press"
        description="Moments from our conferences, global trips, retreats, speaking engagements and community work."
        image={PHOTOS.pressWagmcStage}
        imagePosition="60% center"
      />

      {/* Gallery */}
      <section className="pt-12 md:pt-16 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <ImpactGallery
            items={ITEMS}
            categories={CATEGORIES}
            filterLabel="Filter photos"
          />
        </div>
      </section>
    </div>
  );
}
