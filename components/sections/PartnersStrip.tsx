import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import { PARTNERS } from "@/lib/partners";

/**
 * "Our Partners" — the current partner logos on white tiles, with an optional
 * link to where partnership is explained. Used on the homepage, BIR CARES and
 * Partner With Us so the partners are visible beyond the Corporate page.
 */
export default function PartnersStrip({
  eyebrow = "Our Partners",
  title = "Working Together",
  description = "The organisations we partner with to extend care, training, and opportunity.",
  cta = { label: "Partner with us", href: "/community/partner" },
  className = "section-sm bg-surface border-y border-border",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  cta?: { label: string; href: string } | null;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="container mx-auto px-4 md:px-6">
        <Reveal className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h2 className="display-2 text-foreground">{title}</h2>
            {description && (
              <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
            )}
          </div>
          {cta && (
            <Link href={cta.href} className="link-arrow group shrink-0">
              {cta.label}
              <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </Reveal>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {PARTNERS.map((partner) => (
            <li
              key={partner.name}
              className="flex h-28 items-center justify-center rounded-[var(--radius-card)] border border-border bg-white p-5 shadow-soft md:h-32"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                loading="lazy"
                className="h-auto max-h-full w-auto max-w-[85%] object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
