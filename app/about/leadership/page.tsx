import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { PHOTOS } from "@/lib/images";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const TEAM = [
  {
    name: "Dr. Chauntel Altidor, OTD",
    role: "Co-Founder & Executive Director",
    image: PHOTOS.founderChauntel,
    linkedin: "#",
  },
  {
    name: "Nancy Yamoah, OT",
    role: "Co-Founder & Chief Strategy Officer",
    image: PHOTOS.founderNancy,
    linkedin: "#",
  },
  {
    name: "[Team Member Name]",
    role: "[Title / Role] — CLIENT TO PROVIDE",
    image: PHOTOS.conferenceSpeakerMic,
    linkedin: "#",
  },
  {
    name: "[Team Member Name]",
    role: "[Title / Role] — CLIENT TO PROVIDE",
    image: PHOTOS.conferenceSpeakerBw,
    linkedin: "#",
  },
  {
    name: "[Team Member Name]",
    role: "[Title / Role] — CLIENT TO PROVIDE",
    image: PHOTOS.conferenceGala,
    linkedin: "#",
  },
  {
    name: "[Team Member Name]",
    role: "[Title / Role] — CLIENT TO PROVIDE",
    image: PHOTOS.conferencePanel,
    linkedin: "#",
  },
];

export default function LeadershipPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
              <Link href="/" className="hover:text-primary-hover">Home</Link>
              <span>/</span>
              <Link href="/about" className="hover:text-primary-hover">About</Link>
              <span>/</span>
              <span className="text-foreground">Leadership Team</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6">
              The Team Behind <span className="text-primary">the Movement</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              Diverse, dynamic, and driven by purpose. Our leadership team brings together expertise in rehabilitation, nonprofit management, community organizing, and global health.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member, idx) => (
              <div key={idx} className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors">
                <div className="h-72 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="photo photo-hover-lift w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                  <div className="flex gap-3">
                    <a
                      href={member.linkedin}
                      className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-primary transition-colors"
                    >
                      <LinkedInIcon className="w-4 h-4" /> LinkedIn
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" /> Contact
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Become a City Ambassador</h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">Lead the movement in your city. Our Ambassador program empowers local leaders to represent Black in Rehab in communities across the globe.</p>
          <Link
            href="/about/ambassadors"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors text-lg"
          >
            AMBASSADOR PROGRAM <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
