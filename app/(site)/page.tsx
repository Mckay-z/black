import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import FeaturedTrips from "@/components/sections/FeaturedTrips";
import GlobalTrips from "@/components/sections/GlobalTrips";
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
      <FeaturedTrips />
      <GlobalTrips />
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
