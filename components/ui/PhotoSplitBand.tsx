/**
 * A full-width dark band split between copy and a photograph — the
 * Accountability Lab and "Your Gift Powers the Mission" bands from the
 * client's mockups. The photo fades into black toward the copy so the two
 * halves read as one surface.
 *
 * `children` is the copy column: eyebrow, `display-2` heading, text, buttons.
 * It sits on `section-dark`, so use the on-dark variants (`eyebrow-on-dark`,
 * `btn-on-dark`, `text-white`).
 */
export default function PhotoSplitBand({
  image,
  imagePosition = "center",
  imageSide = "right",
  children,
  className = "",
}: {
  image: string;
  imagePosition?: string;
  imageSide?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}) {
  const photoRight = imageSide === "right";

  return (
    <section className={`section-dark relative isolate overflow-hidden bg-black ${className}`}>
      <div
        className={`grid grid-cols-1 ${
          photoRight
            ? "md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
            : "md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
        }`}
      >
        <div
          className={`relative min-h-64 md:min-h-full ${photoRight ? "md:order-2" : ""}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: imagePosition }}
          />
          <div
            aria-hidden="true"
            className={`absolute inset-0 bg-linear-to-t from-black/70 to-transparent md:from-transparent md:via-black/20 md:to-black ${
              photoRight ? "md:bg-linear-to-l" : "md:bg-linear-to-r"
            }`}
          />
        </div>
        <div
          className={`px-6 py-16 md:px-12 md:py-20 lg:px-16 ${photoRight ? "md:order-1" : ""}`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
