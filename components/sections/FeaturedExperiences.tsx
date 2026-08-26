import Link from "next/link";
import { ArrowRight, Users, Compass, Globe2, MessageSquare } from "lucide-react";
import { PHOTOS } from "@/lib/images";

const EXPERIENCES = [
  {
    id: "conferences",
    title: "Conferences",
    description: "Connect, learn, and grow with leaders in the field.",
    icon: <Users className="w-6 h-6 text-primary" />,
    image: PHOTOS.conferenceAudience,
    link: "/experiences/conference",
  },
  {
    id: "retreats",
    title: "Retreats",
    description: "Renew your mind, body, and purpose.",
    icon: <Compass className="w-6 h-6 text-primary" />,
    image: PHOTOS.retreatBeachYoga,
    link: "/experiences/retreats",
  },
  {
    id: "global",
    title: "Global Experiences",
    description: "Serve, learn, and immerse yourself in new cultures.",
    icon: <Globe2 className="w-6 h-6 text-primary" />,
    image: PHOTOS.ghanaAirport,
    link: "/experiences/global",
  },
  {
    id: "community",
    title: "Community Events",
    description: "Local meetups, ambassador cities, and global chapters.",
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    image: PHOTOS.conferenceTableTalk,
    link: "/experiences/community",
  },
];

export default function FeaturedExperiences() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">What We Do</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Programs & Experiences That Create Lasting Impact
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCES.map((exp) => (
            <Link
              key={exp.id}
              href={exp.link}
              className="group relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="photo photo-hover-lift w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Sits on the image's bottom edge. It has to be a sibling of the
                  image wrapper rather than a child: that wrapper needs
                  overflow-hidden for the hover zoom, which would clip this badge
                  in half. `top-48` must match the image wrapper's `h-48`. */}
              <div className="absolute top-48 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface p-3 rounded-full border border-border">
                {exp.icon}
              </div>

              <div className="p-8 pt-10 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{exp.title}</h4>
                  <p className="text-muted text-sm leading-relaxed mb-6">{exp.description}</p>
                </div>
                <div className="mx-auto mt-auto text-muted group-hover:text-primary transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/experiences"
            className="inline-block bg-transparent hover:bg-surface border border-border hover:border-primary text-foreground font-semibold py-4 px-8 rounded-full transition-colors"
          >
            EXPLORE ALL PROGRAMS & EXPERIENCES
          </Link>
        </div>
      </div>
    </section>
  );
}
