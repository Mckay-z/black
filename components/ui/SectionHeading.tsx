export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <div className={`${centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <h2 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">
          {eyebrow}
        </h2>
      )}
      <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
        {title}
      </h3>
      {description && (
        <p className="text-muted text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
