import Link from "next/link";
import { ArrowRight, Globe2, Sparkles, HeartHandshake, Zap, Target } from "lucide-react";

const VALUES = [
  {
    icon: <Globe2 className="w-8 h-8 text-primary" />,
    title: "WE BELIEVE",
    description: "the greatest impact is never created alone.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "WE DREAM",
    description: "boldly and build community intentionally.",
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-primary" />,
    title: "WE SERVE",
    description: "with excellence through rehabilitation, service, and purpose.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "WE EMPOWER",
    description: "the next generation of rehabilitation professionals.",
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "WE LEAVE",
    description: "every community better than we found it.",
  },
];

export default function MissionVisionValuesPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-12">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-primary-hover">About</Link>
            <span>/</span>
            <span className="text-foreground">Mission, Vision & Values</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
            {/* Mission */}
            <div className="bg-surface p-10 md:p-16 rounded-3xl border border-border">
              <h2 className="eyebrow mb-6">Our Mission</h2>
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground leading-tight">
                Black in Rehab equips rehabilitation professionals to lead with excellence, serve with purpose, and create lasting impact worldwide.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-surface p-10 md:p-16 rounded-3xl border border-border">
              <h2 className="eyebrow mb-6">Our Vision</h2>
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground leading-tight">
                We envision a global community where rehabilitation professionals discover purpose, develop as leaders, serve with excellence, and leave every community better than they found it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="eyebrow mb-5">What Drives Us</h2>
            <h3 className="display-1 text-foreground mb-6">
              Our Core Beliefs
            </h3>
            <p className="text-xl text-muted leading-relaxed">
              These beliefs guide every program, every partnership, and every experience we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {VALUES.map((value, idx) => (
              <div key={idx} className="card card-sunken p-8 card-hover text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4 uppercase tracking-wider">{value.title}</h4>
                <p className="text-muted text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Next Page */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="display-2 text-foreground mb-8">
            Meet the Visionaries
          </h2>
          <Link
            href="/about/founders"
            className="btn btn-primary btn-lg group"
          >
            MEET THE FOUNDERS <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
