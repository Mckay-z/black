import Link from "next/link";
import { ArrowRight, HandHeart, Globe2, Stethoscope, CheckCircle } from "lucide-react";

const PROGRAMS = [
  {
    title: "Local Community Clinics",
    description: "Free rehabilitation screenings, wellness education, and follow-up care in underserved neighborhoods.",
    icon: <Stethoscope className="w-6 h-6 text-primary" />,
  },
  {
    title: "Global Service Trips",
    description: "International experiences in Ghana, Jamaica, and beyond — providing care while building lasting partnerships.",
    icon: <Globe2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Health Education Workshops",
    description: "Community workshops on injury prevention, chronic disease management, and rehabilitation access.",
    icon: <HandHeart className="w-6 h-6 text-primary" />,
  },
];

const IMPACT_STATS = [
  "5,000+ community members served annually",
  "Free rehab services in 12+ cities",
  "Partnerships with local clinics and nonprofits",
  "Student and professional volunteer opportunities",
];

export default function CommunityServicePage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/impact" className="hover:text-primary-hover">Impact</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">Community Service</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">
            Community <span className="text-primary">Service</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl">
            We bring rehabilitation expertise directly to the communities that need it most — locally and globally.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">Our Approach</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Healing Where It&apos;s Needed Most</h3>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Black in Rehab mobilizes licensed professionals and students to deliver free rehabilitation services, health education, and wellness programming to underserved populations. Our work is rooted in dignity, cultural competency, and sustainable community partnerships.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                From pop-up clinics in U.S. cities to international service trips, every program is designed to leave communities stronger than we found them.
              </p>
            </div>
            <div className="space-y-4">
              {IMPACT_STATS.map((stat, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-surface border border-border rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground text-sm font-medium">{stat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">Our Service Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMS.map((program, idx) => (
              <div key={idx} className="bg-background border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{program.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Get Involved</h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Volunteer on a service trip, partner with us locally, or support our programs through a donation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/experiences/ghana" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-background font-bold py-4 px-8 rounded-full transition-colors">
              GLOBAL EXPERIENCES <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/impact/donate" className="inline-flex items-center gap-2 bg-surface border border-border hover:border-primary text-foreground font-semibold py-4 px-8 rounded-full transition-colors">
              SUPPORT OUR WORK
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
