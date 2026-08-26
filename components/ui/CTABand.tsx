import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Closing call-to-action band. Always dark, in both themes. */
export default function CTABand({
  title,
  description,
  cta,
  secondaryCta,
}: {
  title: string;
  description?: string;
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="section-dark py-24 bg-secondary border-y border-border">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
          {title}
        </h2>
        {description && (
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={cta.href}
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors text-lg"
          >
            {cta.label} <ArrowRight className="w-5 h-5" />
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-white/30 text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
