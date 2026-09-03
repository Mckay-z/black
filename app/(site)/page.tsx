import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import ImpactStatistics from "@/components/sections/ImpactStatistics";
import FeaturedExperiences from "@/components/sections/FeaturedExperiences";
import GlobalExperiences from "@/components/sections/GlobalExperiences";
import Community from "@/components/sections/Community";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import ImpactStorytelling from "@/components/sections/ImpactStorytelling";
import Leadership from "@/components/sections/Leadership";
import Testimonials from "@/components/sections/Testimonials";
import ResourcesSection from "@/components/sections/ResourcesSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <ImpactStatistics />
      <FeaturedExperiences />
      <GlobalExperiences />
      <Community />
      <UpcomingEvents />
      <ImpactStorytelling />
      <Leadership />
      <Testimonials />
      <ResourcesSection />
      <FinalCTA />
    </>
  );
}
