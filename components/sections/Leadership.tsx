import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PHOTOS } from "@/lib/images";

const LEADERS = [
  {
    name: "Dr. Chauntel Altidor, OTD",
    title: "Co-Founder & Visionary Leader",
    image: PHOTOS.founderChauntel,
    description: "Doctor of Physical Therapy, entrepreneur, and global leader with a heart for service and a vision for transformation.",
  },
  {
    name: "Nancy Yamoah, OT",
    title: "Co-Founder & Strategic Leader",
    image: PHOTOS.founderNancy,
    description: "Rehabilitation professional and community builder with a passion for people and global impact.",
  }
];

export default function Leadership() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">Our Leadership</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Meet the Founders
            </h3>
            <p className="text-muted text-lg leading-relaxed">
              Two friends. One vision. A global impact. Driven by a shared belief that rehabilitation professionals can be change agents, leaders, mentors, and global citizens.
            </p>
          </div>
          <Link
            href="/about/founders"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-primary transition-colors shrink-0"
          >
            MEET THE FULL TEAM <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEADERS.map((leader, index) => (
            <div key={index} className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors flex flex-col sm:flex-row">
              <div className="w-full sm:w-2/5 relative h-64 sm:h-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="photo photo-hover-lift absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                <h4 className="text-2xl font-serif font-bold text-foreground mb-2">{leader.name}</h4>
                <p className="text-primary font-medium text-sm mb-4">{leader.title}</p>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {leader.description}
                </p>
                <Link href="/about/founders" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors mt-auto">
                  View Profile <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
