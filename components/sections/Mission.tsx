import { Users, Globe2, Heart, Lightbulb } from "lucide-react";

/**
 * The four mission pillars.
 *
 * Written as data rather than four near-identical copies of the same block —
 * the previous version repeated the card markup once per pillar, so any
 * change to the card had to be made four times.
 */
const PILLARS = [
  {
    icon: Users,
    title: "A Global Community",
    description:
      "Uniting rehabilitation professionals, students, and partners across the globe.",
  },
  {
    icon: Heart,
    title: "Transforming Lives",
    description:
      "Through education, mentorship, scholarships, and life-changing experiences.",
  },
  {
    icon: Globe2,
    title: "Healing Beyond Borders",
    description:
      "Providing service, support, and resources to strengthen communities worldwide.",
  },
  {
    icon: Lightbulb,
    title: "Leading the Future",
    description: "Inspiring the next generation of Black rehabilitation leaders.",
  },
];

export default function Mission() {
  return (
    <section className="section bg-glow bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="reveal mx-auto mb-16 max-w-3xl text-center">
          <p className="eyebrow mb-5">Our Mission in Action</p>
          <h2 className="display-2 text-foreground">
            We Create Opportunities. We Inspire Leaders. We Change Lives.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Uniting rehabilitation professionals, students, and partners across the
            globe to transform lives through education, mentorship, and service.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="card card-hover reveal group flex flex-col items-center p-8 text-center"
            >
              <span className="icon-tile icon-tile-lg mb-6">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
