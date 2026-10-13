import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PHOTOS } from "@/lib/images";
import Reveal from "@/components/motion/Reveal";

const BENEFITS = [
  "Access exclusive professional development resources",
  "Connect with members and local ambassador cities worldwide",
  "Participate in life-changing global experiences",
];

export default function Community() {
  return (
    <section className="section bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <Reveal direction="right">
            <p className="eyebrow mb-5">You Belong Here</p>
            <h2 className="display-2 text-foreground">
              Join a global community of rehabilitation professionals leading with
              purpose.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Black in Rehab is more than an organization—it&apos;s a movement of
              rehabilitation professionals, students, and allies committed to
              excellence, representation, and service. Whether you&apos;re looking for
              mentorship, continuing education, or a space to connect with like-minded
              peers, you&apos;ll find it here.
            </p>

            <ul className="mt-9 space-y-3">
              {BENEFITS.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl border border-transparent p-2 transition-colors hover:border-border hover:bg-surface"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="font-medium text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link href="/get-involved" className="btn btn-primary btn-lg group mt-10">
              JOIN OUR COMMUNITY
              <ArrowRight className="btn-arrow h-5 w-5" aria-hidden="true" />
            </Link>
          </Reveal>

          {/* Photograph, with the shop card overlapping its lower-left corner.
              The overlap is what stops the two halves reading as a plain
              two-column grid. */}
          <Reveal direction="left" className="relative">
            <div className="img-filler relative aspect-square overflow-hidden rounded-[var(--radius-panel)] shadow-float md:aspect-4/3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTOS.conferenceCelebration}
                alt="Members of the Black in Rehab community together at a conference"
                loading="lazy"
                className="photo photo-hover-lift h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
            </div>

          </Reveal>
        </div>
      </div>
    </section>
  );
}
