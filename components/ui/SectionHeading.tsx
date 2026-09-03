/**
 * The standard section header: optional eyebrow label, headline, optional lede.
 *
 * The eyebrow used to be an <h2> carrying the small uppercase label, with the
 * real headline below it as an <h3> — which gave every page a heading outline
 * where the section titles sat a level too deep and the label impersonated a
 * heading. It is a <p> now, and the headline is the <h2> it always read as.
 * Nothing about the rendered layout changes.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  onDark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Set on bands that use the dark palette, so the eyebrow pill keeps its
      contrast against a black ground rather than a beige one. */
  onDark?: boolean;
}) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && (
        <p className={`eyebrow mb-5 ${onDark ? "eyebrow-on-dark" : ""}`}>{eyebrow}</p>
      )}

      <h2 className={`display-2 ${onDark ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            onDark ? "text-white/75" : "text-muted"
          } ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
