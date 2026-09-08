import { BookOpen, ExternalLink } from "lucide-react";

/**
 * A published book, shown alongside its author's biography.
 *
 * Leaves the site, so it is a plain `<a>` with an explicit external-link icon
 * rather than a `next/link` — the destination is a third-party checkout and a
 * reader should be able to see that before clicking.
 *
 * Everything inside the anchor is a span: block-level children of an `<a>` are
 * invalid, and the whole card is one target rather than a link buried in it.
 */
export default function BookCallout({
  title,
  url,
  description,
  image,
  eyebrow = "Her Book",
  className = "",
}: {
  title: string;
  url: string;
  description: string;
  /** Cover art. Falls back to a generic icon when a book has no cover. */
  image?: string;
  eyebrow?: string;
  /** Spacing is the caller's, since the surrounding bio blocks differ. */
  className?: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`card card-hover group flex items-start gap-5 p-6 no-underline ${className}`}
    >
      {image ? (
        // The cover carries the "this is a book you can buy" signal far better
        // than an icon does. Fixed width so a portrait cover cannot push the
        // text column around; `alt` is empty because the title sits beside it.
        <span className="w-20 shrink-0 overflow-hidden rounded-lg border border-border shadow-soft sm:w-24">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            loading="lazy"
            className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </span>
      ) : (
        <span className="icon-tile shrink-0" aria-hidden="true">
          <BookOpen className="h-6 w-6" />
        </span>
      )}

      <span className="min-w-0 flex-1">
        <span className="block text-xs font-bold uppercase tracking-[0.14em] text-primary">
          {eyebrow}
        </span>
        <span className="mt-1.5 block font-serif text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
          {title}
        </span>
        <span className="mt-2 block text-sm leading-relaxed text-muted">
          {description}
        </span>
      </span>

      <ExternalLink
        className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-primary"
        aria-hidden="true"
      />
      <span className="sr-only">(opens on Payhip in a new tab)</span>
    </a>
  );
}
