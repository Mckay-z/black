import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import { getHero, imageUrl } from "@/lib/cms";

export type Crumb = { label: string; href?: string };

type Cta = { label: string; href: string };

/**
 * Standard interior-page hero: breadcrumb, headline, lede and up to two CTAs.
 * Always renders on the dark palette (`section-dark`) so it reads identically
 * in light and dark mode.
 *
 * The banner is built in layers rather than as a flat colour block: the
 * photograph, a directional scrim that keeps the left-aligned copy legible
 * over any crop, a gold bloom behind the headline, and a fade into the page
 * below so the section ends without a hard edge.
 *
 * Pass `page` (the route, e.g. "/experiences/ghana") to make the banner
 * editable in the dashboard. A published Page Banner for that route overrides
 * whichever props are filled in there; every other prop below still applies,
 * so changing only the photo leaves the copy alone. With no record — or with
 * no `page` prop at all — this behaves exactly as it always has.
 */
export default async function PageHero({
  page,
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
  /** Route path used to look up an editable banner in the CMS. */
  page?: string;
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
  const override = page ? await getHero(page) : null;

  const resolved = {
    title: override?.heading || title,
    highlight: override?.heading ? override.highlight ?? undefined : highlight,
    description: override?.description || description,
    image: imageUrl(override?.image, image ?? ""),
    cta:
      override?.ctaLabel && override?.ctaHref
        ? { label: override.ctaLabel, href: override.ctaHref }
        : cta,
    secondaryCta:
      override?.secondaryCtaLabel && override?.secondaryCtaHref
        ? { label: override.secondaryCtaLabel, href: override.secondaryCtaHref }
        : secondaryCta,
  };

  return (
    <section
      className={`section-dark relative isolate overflow-hidden bg-secondary ${
        size === "tall"
          ? "pt-36 pb-24 md:pt-44 md:pb-32"
          : "pt-32 pb-20 md:pt-40 md:pb-28"
      }`}
    >
      {resolved.image && (
        <>
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center scale-105 opacity-40"
            style={{ backgroundImage: `url('${resolved.image}')` }}
            aria-hidden="true"
          />
          {/* Two crossed scrims: one darkening toward the copy on the left,
              one grounding the bottom edge. Together they hold contrast on
              any photograph without needing a per-page opacity tweak. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-linear-to-r from-black/90 via-black/70 to-black/40"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-transparent to-black/50"
          />
        </>
      )}

      {/* Gold bloom behind the headline. */}
      <div
        aria-hidden="true"
        className="absolute -z-10 -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-primary/12 blur-3xl"
      />

      {/* Soft landing into whatever section follows. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-b from-transparent to-black/40"
      />

      <div className="container relative mx-auto px-4 md:px-6">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1 text-sm font-medium mb-7"
        >
          {crumbs.map((crumb, idx) => (
            <span key={`${crumb.label}-${idx}`} className="flex items-center gap-1">
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="rounded-md px-1 py-0.5 text-primary transition-colors hover:text-accent"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="px-1 py-0.5 text-white/60">{crumb.label}</span>
              )}
              {idx < crumbs.length - 1 && (
                <ChevronRight className="h-3.5 w-3.5 text-white/30" aria-hidden="true" />
              )}
            </span>
          ))}
        </nav>

        <h1 className="display-1 text-white max-w-4xl">
          {resolved.title}
          {resolved.highlight && (
            <>
              {" "}
              <span className="text-gold-gradient">{resolved.highlight}</span>
            </>
          )}
        </h1>

        {resolved.description && (
          <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/75">
            {resolved.description}
          </p>
        )}

        {meta && (
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-white/70">
            {meta}
          </div>
        )}

        {(resolved.cta || resolved.secondaryCta) && (
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            {resolved.cta && (
              <Link href={resolved.cta.href} className="btn btn-primary btn-lg group">
                {resolved.cta.label}
                <ArrowRight className="btn-arrow w-5 h-5" />
              </Link>
            )}
            {resolved.secondaryCta && (
              <Link
                href={resolved.secondaryCta.href}
                className="btn btn-on-dark btn-lg"
              >
                {resolved.secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
