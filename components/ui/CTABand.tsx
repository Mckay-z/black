import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Closing call-to-action band. Always dark, in both themes.
 *
 * Rather than a flat black strip the full width of the page, the panel is
 * inset and rounded with a gold bloom behind the headline and a hairline of
 * brand colour along its top edge — so the last thing on the page reads as a
 * deliberate object rather than as the page running out.
 */
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
    <section className="section bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-dark reveal relative isolate overflow-hidden rounded-[var(--radius-panel)] border border-white/10 bg-secondary px-6 py-16 text-center shadow-float md:px-16 md:py-20">
          {/* Gold hairline along the top edge of the panel. */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent"
          />

          {/* Bloom centred behind the headline. */}
          <div
            aria-hidden="true"
            className="absolute -z-10 left-1/2 top-0 h-96 w-[42rem] max-w-full -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/12 blur-3xl"
          />

          <h2 className="display-2 text-white mx-auto max-w-3xl">{title}</h2>

          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              {description}
            </p>
          )}

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={cta.href} className="btn btn-primary btn-lg group">
              {cta.label}
              <ArrowRight className="btn-arrow w-5 h-5" />
            </Link>

            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn btn-on-dark btn-lg">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
