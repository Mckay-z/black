import {
  Users,
  BookOpen,
  GraduationCap,
  Globe,
  HeartHandshake,
  Stethoscope,
  HandHeart,
} from "lucide-react";

import { getStats } from "@/lib/cms";
import { FALLBACK_STATS } from "@/lib/fallback-content";

/**
 * The headline impact numbers.
 *
 * Editable in the dashboard, because the values shipped in the build are
 * unverified guesses — including "Countless" for Lives Transformed — and are
 * the figures a funder is most likely to ask about.
 *
 * The CMS stores an icon by name rather than a component, so this map is the
 * single place that turns that string into something renderable.
 */
const ICONS = {
  Users,
  BookOpen,
  GraduationCap,
  Globe,
  HeartHandshake,
  Stethoscope,
  HandHeart,
} as const;

type IconName = keyof typeof ICONS;

function StatIcon({ name }: { name: string }) {
  const Icon = ICONS[name as IconName] ?? Users;
  return <Icon className="h-6 w-6" aria-hidden="true" />;
}

export default async function ImpactStatistics() {
  const cmsStats = await getStats("homepage");

  const stats = cmsStats.length
    ? cmsStats.map((s) => ({
        id: String(s.id),
        value: s.value,
        label: s.label,
        icon: s.icon,
      }))
    : FALLBACK_STATS.map((s, i) => ({ ...s, id: `fallback-${i}` }));

  return (
    <section className="section-sm relative border-y border-border bg-surface">
      {/* The band reads as a plinth under the mission statement above it, so
          it gets a gold hairline on its top edge rather than another 1px
          border in the same colour as everything else. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent"
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="reveal group flex flex-col items-center text-center"
            >
              <span className="icon-tile mb-4">
                <StatIcon name={stat.icon} />
              </span>
              <div className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
