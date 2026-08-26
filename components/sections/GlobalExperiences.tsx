import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PHOTOS } from "@/lib/images";

const DESTINATIONS = [
  {
    id: "ghana",
    title: "Ghana",
    subtitle: "West Africa",
    status: "Active",
    image: PHOTOS.ghanaAirport,
    link: "/experiences/ghana",
  },
  {
    id: "jamaica",
    title: "Jamaica",
    subtitle: "Caribbean",
    status: "Active",
    image: PHOTOS.retreatBeachYogaGroup,
    link: "/experiences/jamaica",
  },
  {
    id: "kenya",
    title: "Kenya",
    subtitle: "East Africa",
    status: "Coming Soon",
    image: PHOTOS.impactHandsUp,
    link: "#",
  },
  {
    id: "tanzania",
    title: "Tanzania",
    subtitle: "East Africa",
    status: "Coming Soon",
    image: PHOTOS.ghanaBeach,
    link: "#",
  },
];

export default function GlobalExperiences() {
  return (
    <section className="py-24 bg-surface border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">Global Reach</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Healing Beyond Borders
            </h3>
            <p className="text-muted text-lg leading-relaxed">
              Our international experiences combine professional development, cultural immersion, service, and unforgettable travel. Together, we strengthen rehabilitation around the world.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest) => (
            <div key={dest.id} className="section-dark group relative rounded-2xl overflow-hidden h-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={dest.image} 
                alt={dest.title} 
                className="photo photo-hover-lift w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-end">
                  {dest.status === "Coming Soon" && (
                    <span className="bg-background/90 text-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                      Coming Soon
                    </span>
                  )}
                </div>
                
                <div>
                  <p className="text-primary font-medium mb-1">{dest.subtitle}</p>
                  <h4 className="text-3xl font-serif font-bold text-white mb-4">{dest.title}</h4>
                  
                  {dest.status === "Active" ? (
                    <Link 
                      href={dest.link}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors"
                    >
                      Explore Destination <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 cursor-not-allowed">
                      Details Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
