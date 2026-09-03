import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PHOTOS } from "@/lib/images";

const BENEFITS = [
  "Access exclusive professional development resources",
  "Connect with global chapters and local ambassador cities",
  "Participate in life-changing global experiences",
];

export default function Community() {
  return (
    <section className="section bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <div className="reveal">
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

            <Link href="/community" className="btn btn-primary btn-lg group mt-10">
              JOIN OUR COMMUNITY
              <ArrowRight className="btn-arrow h-5 w-5" aria-hidden="true" />
            </Link>
          </div>

          {/* Photograph, with the shop card overlapping its lower-left corner.
              The overlap is what stops the two halves reading as a plain
              two-column grid. */}
          <div className="reveal relative">
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

            <div className="card absolute -bottom-8 -left-6 hidden max-w-sm p-6 shadow-float md:bottom-8 md:-left-10 md:block">
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary font-serif font-bold text-white">
                  BIR
                </span>
                <div>
                  <h3 className="font-bold text-foreground">Wear The Movement</h3>
                  <p className="text-sm text-muted">
                    Represent purpose. Support the mission.
                  </p>
                </div>
              </div>
              <Link href="/shop" className="link-arrow group">
                SHOP NEW ARRIVALS
                <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
