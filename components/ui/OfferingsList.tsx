import { ArrowUpRight } from "lucide-react";

export type Offering = {
  title: string;
  subtitle: string;
  description: string;
  /** Button label, as the client wrote it. */
  cta: string;
  url: string;
  /** Third party the link lands on, named in the screen-reader hint. */
  host: string;
};

/**
 * A person's own paid programmes, listed on their profile.
 *
 * These belong to the individual, not to the Foundation — Dr. Altidor's run
 * through OT with Faith, her own practice — and this sits on a 501(c)(3)
 * site, so the section says whose they are and each card names where the
 * button lands. A reader should never be left assuming a purchase here is a
 * gift to the charity.
 *
 * The whole card is not the link: two of the three share a destination, and a
 * grid of identically-targeted cards is worse to navigate than three labelled
 * buttons.
 */
export default function OfferingsList({
  offerings,
  className = "",
}: {
  offerings: readonly Offering[];
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-1 gap-6 md:grid-cols-3 ${className}`}>
      {offerings.map((offering) => (
        <article key={offering.title} className="card card-hover flex flex-col p-8">
          <h3 className="font-serif text-xl font-bold leading-snug text-foreground">
            {offering.title}
          </h3>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
            {offering.subtitle}
          </p>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
            {offering.description}
          </p>
          <a
            href={offering.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline mt-8 self-start"
          >
            {offering.cta}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">
              — {offering.title} (opens on {offering.host} in a new tab)
            </span>
          </a>
        </article>
      ))}
    </div>
  );
}
