import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { PHOTOS } from "@/lib/images";

const EVENTS = [
  {
    id: "annual-conference-2025",
    title: "Annual Conference",
    date: "Jun 20-22, 2025",
    location: "New Orleans, LA",
    image: PHOTOS.conferenceAudience,
    link: "/experiences/conference",
  },
  {
    id: "wellness-retreat-jamaica",
    title: "Wellness Retreat",
    date: "Aug 15-18, 2025",
    location: "Jamaica",
    image: PHOTOS.retreatBeachYoga,
    link: "/experiences/retreats",
  },
  {
    id: "ghana-global",
    title: "Ghana Global Experience",
    date: "Oct 10-17, 2025",
    location: "Accra, Ghana",
    image: PHOTOS.ghanaAirport,
    link: "/experiences/ghana",
  },
  {
    id: "leadership-retreat",
    title: "Leadership Retreat",
    date: "Mar 12-15, 2026",
    location: "Atlanta, GA",
    image: PHOTOS.conferencePresentation,
    link: "/experiences/retreats",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-24 bg-surface border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">Join Us</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Upcoming Events
            </h3>
          </div>
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-primary transition-colors"
          >
            VIEW ALL EVENTS <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENTS.map((event) => (
            <Link 
              key={event.id}
              href={event.link}
              className="group relative rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/50 transition-colors h-75 flex flex-col justify-end p-6"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={event.image} 
                alt={event.title} 
                className="photo photo-hover-lift absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/60 to-transparent"></div>
              
              <div className="relative z-10">
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="bg-background/90 backdrop-blur-sm border border-border rounded px-3 py-1 text-xs font-semibold text-foreground flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-primary" />
                    {event.date}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h4>
                <div className="flex items-center gap-1.5 text-sm font-medium text-muted">
                  <MapPin className="w-4 h-4 text-primary" />
                  {event.location}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
