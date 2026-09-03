import Link from "next/link";
import { ArrowRight, HandHeart, BookOpen, Scaling } from "lucide-react";

const PROGRAMS = [
  {
    icon: HandHeart,
    title: "Community Service",
    description:
      "We partner with local organizations to provide free rehabilitation services, education, and resources to underserved populations globally.",
    href: "/impact/service",
  },
  {
    icon: BookOpen,
    title: "Scholarships",
    description:
      "Breaking down financial barriers for Black students pursuing degrees in physical therapy, occupational therapy, and speech-language pathology.",
    href: "/impact/scholarships",
  },
  {
    icon: Scaling,
    title: "Advocacy",
    description:
      "Championing policies that advance health equity, representation in healthcare, and better outcomes for marginalized communities.",
    href: "/impact/advocacy",
  },
];

export default function ImpactStorytelling() {
  return (
    <section className="section border-t border-border bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="reveal mx-auto mb-14 max-w-3xl text-center">
          <p className="eyebrow mb-5">Our Impact</p>
          <h2 className="display-2 text-foreground">
            Real People. Real Change. Lasting Impact.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            From providing scholarships to advocating for health equity, our nonprofit
            initiatives are designed to create systemic change in rehabilitation and
            the communities we serve.
          </p>
        </div>

        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROGRAMS.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={title}
              href={href}
              className="card card-hover card-sunken reveal group flex h-full flex-col p-8"
            >
              <span className="icon-tile mb-6">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>

              <h3 className="mb-4 font-serif text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                {title}
              </h3>

              <p className="mb-8 flex-1 leading-relaxed text-muted">{description}</p>

              <span className="link-arrow mt-auto">
                Learn More
                <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/impact" className="btn btn-primary btn-lg group">
            SEE OUR FULL IMPACT
            <ArrowRight className="btn-arrow h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
