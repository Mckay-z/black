import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  Compass,
  Gift,
  Globe2,
  GraduationCap,
  HandHeart,
  Handshake,
  HeartHandshake,
  HelpCircle,
  Library,
  ListChecks,
  Map,
  Megaphone,
  Mic,
  Newspaper,
  PenLine,
  ShoppingBag,
  User,
  Users,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerLink } from "@/components/motion/Stagger";
import { NAV_SECTIONS, type NavIcon } from "@/lib/navigation";
import { cn } from "@/lib/utils";

/**
 * "Everything in this section" — the grid of child pages that now sits on
 * every section landing page.
 *
 * It reads from `lib/navigation.ts`, the same source the header menu uses, so
 * a page cannot appear in one and be missing from the other. That was the
 * actual bug: the menu was trimmed by hand and the landing pages kept their
 * own lists, so a page could be in the section and reachable from nowhere.
 *
 * Pass the section's own `href` and it renders that section's children.
 */


const ICONS: Record<NavIcon, React.ComponentType<{ className?: string }>> = {
  book: BookOpen,
  award: Award,
  users: Users,
  globe: Globe2,
  news: Newspaper,
  calendar: Calendar,
  map: Map,
  compass: Compass,
  graduation: GraduationCap,
  heart: HeartHandshake,
  hands: HandHeart,
  megaphone: Megaphone,
  gift: Gift,
  handshake: Handshake,
  building: Building2,
  briefcase: Briefcase,
  shop: ShoppingBag,
  mic: Mic,
  list: ListChecks,
  library: Library,
  pen: PenLine,
  help: HelpCircle,
  user: User,
};

export default function SectionHub({
  section,
  eyebrow = "In This Section",
  title,
  description,
  className = "",
}: {
  /** The section's own href, e.g. "/impact". */
  section: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}) {
  const match = NAV_SECTIONS.find((entry) => entry.href === section);

  // A section with no children has nothing to show. Returning null rather
  // than an empty grid means a landing page can call this unconditionally.
  if (!match || match.children.length === 0) return null;

  return (
    // `cn` rather than template interpolation: a caller passing `bg-surface`
    // is overriding the default ground, and two Tailwind background utilities
    // in one class list are decided by stylesheet order, not by which was
    // written last. twMerge drops the loser.
    <section className={cn("section bg-background", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow={eyebrow}
          title={title ?? `Explore ${match.label}`}
          description={description ?? match.description}
          className="mb-14"
        />

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {match.children.map((child) => {

            const Icon = ICONS[child.icon];

            return (
              <StaggerLink
                key={child.href}
                href={child.href}
                className="card card-hover group flex h-full flex-col p-8"
              >
                <span className="icon-tile mb-6">
                  <Icon className="h-6 w-6" />
                </span>

                <h3 className="mb-3 font-serif text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                  {child.label}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                  {child.description}
                </p>

                <span className="link-arrow mt-auto">
                  Learn More
                  <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
                </span>
              </StaggerLink>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
