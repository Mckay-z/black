import { ArrowRight, BookOpen, Headphones, Library, GraduationCap } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem, StaggerLink } from "@/components/motion/Stagger";

const RESOURCES = [
  {
    icon: BookOpen,
    title: "The Blog",
    description:
      "Articles, insights, and stories from leaders in rehabilitation and health equity.",
    action: "Read Articles",
    href: "/resources/blog",
    comingSoon: true,
  },
  {
    icon: Headphones,
    title: "The Podcast",
    description:
      "Conversations on purpose, community, and impact in the healthcare space.",
    action: "Tune In",
    href: "/resources/podcast",
    comingSoon: true,
  },
  {
    icon: Library,
    title: "Resource Library",
    description:
      "Downloadable guides, research papers, and toolkits for professional growth.",
    action: "Access Library",
    href: "/resources/library",
  },
  {
    icon: GraduationCap,
    title: "Student Hub",
    description:
      "Career advice, exam prep resources, and mentorship connections for students.",
    action: "Explore Resources",
    href: "/community/students",
    comingSoon: true,
  },
];

type Resource = (typeof RESOURCES)[number];

/**
 * Card body, shared by both branches below so the two treatments cannot drift
 * apart. A "Coming Soon" card shows the badge and drops the call to action —
 * there is nothing to act on yet.
 */
function CardBody({ resource }: { resource: Resource }) {
  const { title, description, action } = resource;
  const comingSoon = "comingSoon" in resource && resource.comingSoon;

  return (
    <>
      {comingSoon && (
        <span className="chip absolute right-4 top-4 text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
          Coming Soon
        </span>
      )}

      <span
        aria-hidden="true"
        className="mb-6 block h-0.5 w-10 rounded-full bg-primary"
      />

      <h3
        className={`mb-3 font-serif text-xl font-bold text-foreground ${
          comingSoon ? "" : "transition-colors group-hover:text-primary"
        }`}
      >
        {title}
      </h3>

      <p className="mb-8 flex-1 text-sm leading-relaxed text-muted">{description}</p>

      {comingSoon ? (
        <span className="mt-auto text-sm font-semibold text-muted/70">
          Available soon
        </span>
      ) : (
        <span className="link-arrow mt-auto">
          {action}
          <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
        </span>
      )}
    </>
  );
}

export default function ResourcesSection() {
  return (
    <section className="section bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal className="mb-14 max-w-3xl">
          <p className="eyebrow mb-5">Empowering Your Journey</p>
          <h2 className="display-2 text-foreground">Resources &amp; Insights</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Equipping rehabilitation professionals and students with the knowledge,
            research, and tools they need to succeed and lead.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RESOURCES.map((resource) => {
            const comingSoon = "comingSoon" in resource && resource.comingSoon;
            // A card marked "Coming Soon" is not a link. It previously
            // navigated to a placeholder page, which is the more annoying of
            // the two failures — the badge said one thing and the click did
            // another.
            const shared =
              "card group relative flex h-full flex-col overflow-hidden p-8";

            return comingSoon ? (
              <StaggerItem
                key={resource.title}
                className={shared}
              >
                <CardBody resource={resource} />
              </StaggerItem>
            ) : (
              <StaggerLink
                key={resource.title}
                href={resource.href}
                className={`${shared} card-hover`}
              >
                <CardBody resource={resource} />
              </StaggerLink>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
