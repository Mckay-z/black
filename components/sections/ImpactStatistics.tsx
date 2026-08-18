import { Users, BookOpen, GraduationCap, Globe, HeartHandshake } from "lucide-react";

const STATS = [
  {
    id: 1,
    icon: <Users className="w-8 h-8 text-primary" />,
    value: "10K+",
    label: "Professionals Empowered",
  },
  {
    id: 2,
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    value: "3K+",
    label: "Students Inspired",
  },
  {
    id: 3,
    icon: <Globe className="w-8 h-8 text-primary" />,
    value: "12+",
    label: "Countries Impacted",
  },
  {
    id: 4,
    icon: <HeartHandshake className="w-8 h-8 text-primary" />,
    value: "50+",
    label: "Communities Served",
  },
  {
    id: 5,
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    value: "Countless",
    label: "Lives Transformed",
  },
];

export default function ImpactStatistics() {
  return (
    <section className="py-16 bg-surface border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
          {STATS.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center group">
              <div className="mb-4 p-4 rounded-full bg-background border border-border group-hover:border-primary/50 transition-colors">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
