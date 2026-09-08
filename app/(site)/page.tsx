import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import ImpactStatistics from "@/components/sections/ImpactStatistics";
import FeaturedExperiences from "@/components/sections/FeaturedExperiences";
import GlobalExperiences from "@/components/sections/GlobalExperiences";
import Community from "@/components/sections/Community";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import ImpactGallerySection from "@/components/sections/ImpactGallerySection";
import Leadership from "@/components/sections/Leadership";
import Testimonials from "@/components/sections/Testimonials";
import ResourcesSection from "@/components/sections/ResourcesSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      {/* Leadership sits high on the page at the client's request — who runs
          this, immediately after what it is. */}
      <Leadership />
      <ImpactStatistics />
      <FeaturedExperiences />
      <GlobalExperiences />
      <Community />
      <UpcomingEvents />
      <ImpactGallerySection
        heading="Real People. Real Change."
        featuredOnly
        limit={6}
        cta={{ label: "SEE OUR FULL IMPACT", href: "/impact" }}
      />
      <Testimonials />
      <ResourcesSection />
      <FinalCTA />
    </>
  );
}
