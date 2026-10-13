import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { externalProps } from "@/lib/donate";

type IconType = React.ComponentType<{ className?: string }>;

/** The round gold badge that overlaps the bottom edge of a card photo. */
export function IconBadge({ icon: Icon }: { icon: IconType }) {
  return (
    <span className="absolute -bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[var(--card-bg,var(--surface))] bg-primary text-on-primary shadow-soft">
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}

/**
 * The photo card from the client's BIR CARES / Get Involved mockups: a photo
 * on top, an optional gold icon badge overlapping its edge, then title, copy
 * and a "learn more" line.
 *
 * With `href` the whole card is one link (external hrefs open in a new tab);
 * without it the card is plain content — for lists the client wants
 * informational rather than clickable.
 */
export default function PhotoCard({
  image,
  imageAlt = "",
  imagePosition,
  icon,
  eyebrow,
  title,
  children,
  href,
  cta = "Learn more",
  imageClassName = "h-48",
  className = "",
}: {
  image: string;
  imageAlt?: string;
  /** CSS object-position, e.g. "center 30%". */
  imagePosition?: string;
  icon?: IconType;
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  href?: string;
  cta?: string;
  /** Height of the photo, e.g. "h-40" or "aspect-4/3". */
  imageClassName?: string;
  className?: string;
}) {
  const body = (
    <>
      <div className="relative">
        <div className={`img-filler overflow-hidden ${imageClassName}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="photo h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            style={imagePosition ? { objectPosition: imagePosition } : undefined}
          />
        </div>
        {icon && <IconBadge icon={icon} />}
      </div>
      <div className={`flex flex-1 flex-col px-7 pb-8 ${icon ? "pt-10" : "pt-7"}`}>
        {eyebrow && (
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">{eyebrow}</p>
        )}
        <h3 className="font-serif text-xl font-bold text-foreground">{title}</h3>
        {children && (
          <div className="mt-3 flex-1 text-sm leading-relaxed text-muted">{children}</div>
        )}
        {href && (
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            {cta}
            <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
          </span>
        )}
      </div>
    </>
  );

  const classes = `card group flex w-full flex-col overflow-hidden ${className}`;

  return href ? (
    <Link href={href} {...externalProps(href)} className={`${classes} card-hover`}>
      {body}
    </Link>
  ) : (
    <div className={classes}>{body}</div>
  );
}
