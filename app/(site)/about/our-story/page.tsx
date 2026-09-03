import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PHOTOS } from "@/lib/images";

export default function OurStoryPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative isolate py-24 md:py-32 bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${PHOTOS.ghanaLawn})` }}></div>
        <div className=""></div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
              <Link href="/" className="hover:text-primary-hover">Home</Link>
              <span>/</span>
              <Link href="/about" className="hover:text-primary-hover">About</Link>
              <span>/</span>
              <span className="text-foreground">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6">
              A Purpose Born from <span className="text-primary">Passion.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              Black in Rehab was created to fill a gap, build a bridge, and spark a movement. What started as a vision between two friends has grown into a global community changing lives and strengthening communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="relative border-l-2 border-primary/30 pl-8 md:pl-12 space-y-20">
            
            {/* Timeline Item 1 */}
            <div className="relative">
              <div className="absolute -left-10.25 md:-left-14.25 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-background"></div>
              </div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Our Beginning</h2>
              <h3 className="text-xl font-bold text-primary mb-6">Two Friends. One Vision.</h3>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Dr. Chauntel Altidor and Nancy Yamoah shared a passion for rehabilitation, leadership, and service. They saw the need for representation, connection, and access in the profession—and knew they could create something greater together.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                What began with conversations and a shared burden has grown into a global movement that empowers professionals, inspires students, and transforms communities.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative">
              <div className="absolute -left-10.25 md:-left-14.25 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-background"></div>
              </div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Building the Foundation</h2>
              <h3 className="text-xl font-bold text-primary mb-6">Creating the Community We Needed</h3>
              <p className="text-muted text-lg leading-relaxed mb-6">
                We realized that if we were looking for a community of Black rehabilitation professionals who were driven by excellence and service, others were too. We launched the first iteration of Black in Rehab to serve as a digital safe haven and professional network.
              </p>
              <div className="aspect-video w-full rounded-2xl overflow-hidden mt-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={PHOTOS.conferenceCelebration} 
                  alt="Community gathering" 
                  className="photo photo-hover-lift w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative">
              <div className="absolute -left-10.25 md:-left-14.25 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-background"></div>
              </div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Global Expansion</h2>
              <h3 className="text-xl font-bold text-primary mb-6">Healing Beyond Borders</h3>
              <p className="text-muted text-lg leading-relaxed">
                Our mission couldn&apos;t be contained to just one city or country. We expanded our reach to include Global Experiences in Ghana and Jamaica, providing life-changing service opportunities and cultural immersion for our members while addressing health disparities internationally.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Next Page */}
      <section className="section bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="display-2 text-foreground mb-8">
            Discover What Drives Us
          </h2>
          <Link
            href="/about/mission-vision-values"
            className="btn btn-primary btn-lg group"
          >
            OUR MISSION, VISION & VALUES <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
