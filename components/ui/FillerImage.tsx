/**
 * Thin wrapper around a plain <img> for the site's photography.
 *
 * Sources come from `lib/images.ts`, so swapping the filler photos for the
 * client's own only means editing that file. Kept as an <img> (rather than
 * next/image) to match the rest of the site and avoid remote-host config.
 */
export default function FillerImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  zoomOnHover = false,
  overlay,
}: {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  zoomOnHover?: boolean;
  /** Optional scrim strength for text placed on top of the photo. */
  overlay?: "none" | "soft" | "strong";
}) {
  const overlayClass =
    overlay === "strong"
      ? "bg-linear-to-t from-black/85 via-black/45 to-black/10"
      : overlay === "soft"
        ? "bg-black/30"
        : null;

  return (
    <div className={`img-filler relative overflow-hidden ${wrapperClassName}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`photo photo-hover-lift w-full h-full object-cover ${
          zoomOnHover
            ? "transition-transform duration-700 group-hover:scale-105"
            : ""
        } ${className}`}
      />
      {overlayClass && <div className={`absolute inset-0 ${overlayClass}`} />}
    </div>
  );
}
