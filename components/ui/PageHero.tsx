import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

type Cta = { label: string; href: string };

/**
 * Standard interior-page hero: breadcrumb, headline, lede and up to two CTAs
 * over the brand purple. Always renders on the dark palette (`section-dark`)
 * so it reads identically in light and dark mode.
 */
export default function PageHero({
  crumbs,
  title,
  highlight,
  description,
  image,
  meta,
  cta,
  secondaryCta,
  size = "default",
}: {
  crumbs: Crumb[];
  title: string;
  highlight?: string;
  description?: string;
  image?: string;
  meta?: React.ReactNode;
  cta?: Cta;
  secondaryCta?: Cta;
  size?: "default" | "tall";
}) {
  return (
    <section
      className={`section-dark relative overflow-hidden bg-secondary ${
        size === "tall" ? "py-32 md:py-40" : "py-24 md:py-32"
      }`}
    >
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${image}')` }}
          aria-hidden="true"
        />
      )}

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm font-medium text-primary mb-6"
        >
          {crumbs.map((crumb, idx) => (
            <span key={`${crumb.label}-${idx}`} className="flex items-center gap-2">
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-primary-hover transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white/70">{crumb.label}</span>
              )}
              {idx < crumbs.length - 1 && <span className="text-white/40">/</span>}
            </span>
          ))}
        </nav>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 max-w-4xl">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-primary">{highlight}</span>
            </>
          )}
        </h1>

        {description && (
          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}

        {meta && (
          <div className="flex flex-wrap gap-6 mt-8 text-white/70 text-sm font-medium">
            {meta}
          </div>
        )}

        {(cta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            {cta && (
              <Link
                href={cta.href}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors text-lg"
              >
                {cta.label} <ArrowRight className="w-5 h-5" />
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-white/30 text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
