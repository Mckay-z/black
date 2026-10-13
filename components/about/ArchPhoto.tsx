/**
 * The arched portrait from the BIR CARES page: a rounded top over a photo,
 * with a thin gold ring. Used on the About pages for feature photographs.
 */
export default function ArchPhoto({
  src,
  alt,
  position = "center",
  className = "",
}: {
  src: string;
  alt: string;
  /** CSS object-position, e.g. "center 20%". */
  position?: string;
  className?: string;
}) {
  return (
    <div
      className={`img-filler relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[var(--radius-panel)] shadow-float ring-1 ring-primary/30 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="photo h-full w-full object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
