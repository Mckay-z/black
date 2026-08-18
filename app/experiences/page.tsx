import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

const EXPERIENCES = [
  {
    title: "Annual Conference",
    date: "Jun 20–22, 2025",
    location: "New Orleans, LA",
    description: "Three days of connection, professional development, and celebration.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    href: "/experiences/conference",
    status: "Open",
  },
  {
    title: "Wellness Retreat",
    date: "Aug 15–18, 2025",
    location: "Jamaica",
    description: "A restorative retreat focused on whole-person healing and renewal.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
    href: "/experiences/retreats",
    status: "Open",
  },
  {
    title: "Ghana Global Experience",
    date: "Oct 10–17, 2025",
    location: "Accra, Ghana",
    description: "Service, cultural immersion, and professional growth in West Africa.",
    image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80",
    href: "/experiences/ghana",
    status: "Open",
  },
  {
    title: "Jamaica Global Experience",
    date: "TBA",
    location: "Jamaica",
    description: "A Caribbean journey of service, community, and cultural exploration.",
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80",
    href: "/experiences/retreats",
    status: "Coming Soon",
  },
  {
    title: "Leadership Retreat",
    date: "Mar 12–15, 2026",
    location: "Atlanta, GA",
    description: "Intensive leadership development for emerging professionals.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80",
    href: "/experiences/retreats",
    status: "Coming Soon",
  },
];

export default function ExperiencesPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span>/</span>
            <span className="text-foreground">Experiences</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-foreground mb-6">
            Programs &<br /><span className="text-primary">Experiences</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl">
            From world-class conferences to international service journeys and restorative retreats — every experience we create is designed to transform, connect, and inspire.
          </p>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERIENCES.map((exp, idx) => (
              <Link
                key={idx}
                href={exp.href}
                className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors flex flex-col"
              >
                <div className="h-56 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {exp.status === "Coming Soon" && (
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm border border-border text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider text-foreground">
                      Coming Soon
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{exp.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{exp.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-muted font-medium border-t border-border pt-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary" />{exp.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-primary" />{exp.location}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Not Sure Where to Start?</h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">Reach out and a member of our team will help you find the perfect experience for your goals and schedule.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-background font-bold py-4 px-8 rounded-full transition-colors text-lg">
            CONTACT US <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
