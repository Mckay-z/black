import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PHOTOS } from "@/lib/images";

const LEADERS = [
  {
    name: "Dr. Chauntel Altidor, OTD",
    title: "Co-Founder & Visionary Leader",
    image: PHOTOS.founderChauntel,
    description:
      "Doctor of Physical Therapy, entrepreneur, and global leader with a heart for service and a vision for transformation.",
  },
  {
    name: "Nancy Yamoah, OT",
    title: "Co-Founder & Strategic Leader",
    image: PHOTOS.founderNancy,
    description:
      "Rehabilitation professional and community builder with a passion for people and global impact.",
  },
];

export default function Leadership() {
  return (
    <section className="section bg-glow bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="reveal mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Our Leadership</p>
            <h2 className="display-2 text-foreground">Meet the Founders</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Two friends. One vision. A global impact. Driven by a shared belief that
              rehabilitation professionals can be change agents, leaders, mentors, and
              global citizens.
            </p>
          </div>

          <Link href="/about/founders" className="link-arrow group shrink-0">
            MEET THE FULL TEAM
            <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {LEADERS.map((leader) => (
            <Link
              key={leader.name}
              href="/about/founders"
              className="card card-hover reveal group flex flex-col overflow-hidden sm:flex-row"
            >
              <div className="img-filler relative h-64 w-full sm:h-auto sm:w-2/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={leader.image}
                  alt={leader.name}
                  loading="lazy"
                  className="photo photo-hover-lift absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>

              <div className="flex flex-col justify-center p-8 sm:w-3/5">
                <h3 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {leader.name}
                </h3>
                <p className="mb-4 text-sm font-medium text-primary">{leader.title}</p>
                <p className="mb-6 text-sm leading-relaxed text-muted">
                  {leader.description}
                </p>

                <span className="link-arrow mt-auto text-foreground group-hover:text-primary">
                  View Profile
                  <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
