import { Stagger, StaggerItem } from "@/components/motion/Stagger";

/**
 * Numbered steps joined by a gold rule — the "how it works" row on the
 * partnership pages.
 */
export default function ProcessSteps({
  steps,
}: {
  steps: { step: string; title: string; desc: string }[];
}) {
  return (
    <Stagger className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* The rule the step numbers sit on, desktop only. */}
      <span
        aria-hidden="true"
        className="absolute inset-x-8 top-7 hidden h-px bg-linear-to-r from-primary/0 via-primary/50 to-primary/0 lg:block"
      />
      {steps.map((item) => (
        <StaggerItem key={item.step} className="relative">
          <span className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-background font-serif text-xl font-bold text-primary shadow-soft">
            {item.step}
          </span>
          <h3 className="mb-2 font-serif text-lg font-bold text-foreground">{item.title}</h3>
          <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
