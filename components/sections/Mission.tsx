import { Users, Globe2, Heart, Lightbulb } from "lucide-react";

export default function Mission() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">Our Mission in Action</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            We Create Opportunities. We Inspire Leaders. We Change Lives.
          </h3>
          <p className="text-muted text-lg leading-relaxed">
            Uniting rehabilitation professionals, students, and partners across the globe to transform lives through education, mentorship, and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Pillar 1 */}
          <div className="bg-surface p-8 rounded-2xl border border-border text-center hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">A Global Community</h4>
            <p className="text-muted text-sm leading-relaxed">
              Uniting rehabilitation professionals, students, and partners across the globe.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-surface p-8 rounded-2xl border border-border text-center hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">Transforming Lives</h4>
            <p className="text-muted text-sm leading-relaxed">
              Through education, mentorship, scholarships, and life-changing experiences.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-surface p-8 rounded-2xl border border-border text-center hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe2 className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">Healing Beyond Borders</h4>
            <p className="text-muted text-sm leading-relaxed">
              Providing service, support, and resources to strengthen communities worldwide.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-surface p-8 rounded-2xl border border-border text-center hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">Leading the Future</h4>
            <p className="text-muted text-sm leading-relaxed">
              Inspiring the next generation of Black rehabilitation leaders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
