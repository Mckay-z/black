import Reveal from "@/components/motion/Reveal";

/**
 * A light section split between copy and a large photograph — the "About BIR
 * CARES" band from the client's mockup. `arch` gives the photo the mockup's
 * rounded-top frame; otherwise it is a rounded panel.
 */
export default function FeatureSplit({
  image,
  imageAlt = "",
  imagePosition = "center",
  imageSide = "left",
  arch = false,
  children,
  className = "section bg-background",
}: {
  image: string;
  imageAlt?: string;
  imagePosition?: string;
  imageSide?: "left" | "right";
  arch?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  const right = imageSide === "right";

  return (
    <section className={className}>
      <div
        className={`container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-6 lg:gap-16 ${
          right
            ? "lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
            : "lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
        }`}
      >
        <Reveal
          direction={right ? "right" : "left"}
          className={`mx-auto w-full max-w-md lg:max-w-none ${right ? "lg:order-2" : ""}`}
        >
          <div
            className={`img-filler relative aspect-[4/5] overflow-hidden shadow-float ring-1 ring-primary/25 ${
              arch
                ? "rounded-t-[999px] rounded-b-[var(--radius-panel)]"
                : "rounded-[var(--radius-panel)]"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className="photo h-full w-full object-cover"
              style={{ objectPosition: imagePosition }}
            />
          </div>
        </Reveal>
        <Reveal className={right ? "lg:order-1" : ""}>{children}</Reveal>
      </div>
    </section>
  );
}
