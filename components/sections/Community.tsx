import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PHOTOS } from "@/lib/images";

export default function Community() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">You Belong Here</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Join a global community of rehabilitation professionals who are leading with purpose.
            </h3>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Black in Rehab is more than an organization—it&apos;s a movement of rehabilitation professionals, students, and allies committed to excellence, representation, and service. Whether you&apos;re looking for mentorship, continuing education, or a space to connect with like-minded peers, you&apos;ll find it here.
            </p>
            
            <ul className="space-y-4 mb-10 text-foreground font-medium">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                Access exclusive professional development resources
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                Connect with global chapters and local ambassador cities
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                Participate in life-changing global experiences
              </li>
            </ul>

            <Link
              href="/community"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors text-lg"
            >
              JOIN OUR COMMUNITY
            </Link>
          </div>

          {/* Image/Highlight */}
          <div className="relative">
            <div className="aspect-square md:aspect-4/3 rounded-3xl overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={PHOTOS.conferenceCelebration} 
                alt="Black in Rehab Community"
                className="photo photo-hover-lift w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 md:bottom-8 md:-left-12 bg-surface border border-border p-6 rounded-2xl shadow-2xl max-w-sm hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold font-serif">
                  BIR
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Wear The Movement</h4>
                  <p className="text-sm text-muted">Represent purpose. Support the mission.</p>
                </div>
              </div>
              <Link href="/shop" className="text-sm font-semibold text-primary hover:text-primary-hover flex items-center gap-1">
                SHOP NEW ARRIVALS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
