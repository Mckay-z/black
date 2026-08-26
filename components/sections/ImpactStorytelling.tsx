import Link from "next/link";
import { ArrowRight, HandHeart, BookOpen, Scaling } from "lucide-react";

export default function ImpactStorytelling() {
  return (
    <section className="py-24 bg-surface border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">Our Impact</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Real People. Real Change. Lasting Impact.
          </h3>
          <p className="text-muted text-lg leading-relaxed">
            From providing scholarships to advocating for health equity, our nonprofit initiatives are designed to create systemic change in rehabilitation and the communities we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col h-full bg-background rounded-2xl border border-border p-8 hover:border-primary/50 transition-colors">
            <HandHeart className="w-10 h-10 text-primary mb-6" />
            <h4 className="text-xl font-bold text-foreground mb-4">Community Service</h4>
            <p className="text-muted leading-relaxed flex-1 mb-8">
              We partner with local organizations to provide free rehabilitation services, education, and resources to underserved populations globally.
            </p>
            <Link href="/impact/service" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors mt-auto">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-col h-full bg-background rounded-2xl border border-border p-8 hover:border-primary/50 transition-colors">
            <BookOpen className="w-10 h-10 text-primary mb-6" />
            <h4 className="text-xl font-bold text-foreground mb-4">Scholarships</h4>
            <p className="text-muted leading-relaxed flex-1 mb-8">
              Breaking down financial barriers for Black students pursuing degrees in physical therapy, occupational therapy, and speech-language pathology.
            </p>
            <Link href="/impact/scholarships" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors mt-auto">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-col h-full bg-background rounded-2xl border border-border p-8 hover:border-primary/50 transition-colors">
            <Scaling className="w-10 h-10 text-primary mb-6" />
            <h4 className="text-xl font-bold text-foreground mb-4">Advocacy</h4>
            <p className="text-muted leading-relaxed flex-1 mb-8">
              Championing policies that advance health equity, representation in healthcare, and better outcomes for marginalized communities.
            </p>
            <Link href="/impact/advocacy" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors mt-auto">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/impact"
            className="inline-block bg-primary hover:bg-primary-hover text-on-primary font-semibold py-4 px-8 rounded-full transition-colors"
          >
            SEE OUR FULL IMPACT
          </Link>
        </div>
      </div>
    </section>
  );
}
