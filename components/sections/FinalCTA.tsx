import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PHOTOS } from "@/lib/images";

export default function FinalCTA() {
  return (
    <section className="section-dark relative isolate overflow-hidden bg-secondary py-24 md:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-15 mix-blend-overlay"
        style={{ backgroundImage: `url(${PHOTOS.ghanaFreedomArch})` }}
      />

      {/* Wide gold bloom low in the frame, so the closing statement sits in
          light rather than on a flat black rectangle. */}
      <div
        aria-hidden="true"
        className="absolute -z-10 left-1/2 top-1/2 h-120 w-240 max-w-[130vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/45 to-transparent"
      />

      <div className="container relative mx-auto px-4 text-center md:px-6">
        <h2 className="display-1 reveal mx-auto max-w-4xl text-white">
          THIS IS OUR STORY.
          <br />
          <span className="text-gold-gradient">THIS IS OUR PURPOSE.</span>
        </h2>

        <p className="reveal mx-auto mt-8 max-w-2xl text-lg md:text-xl font-light leading-relaxed text-white/80">
          We&apos;re just getting started—and you can be part of what&apos;s next. Your
          support empowers professionals, inspires students, and strengthens
          communities across the globe.
        </p>

        <div className="reveal mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/join-the-movement"
            className="btn btn-primary btn-lg group w-full sm:w-auto"
          >
            JOIN THE MOVEMENT
            <ArrowRight className="btn-arrow h-5 w-5" aria-hidden="true" />
          </Link>
          <Link
            href="/impact/donate"
            className="btn btn-on-dark btn-lg w-full sm:w-auto"
          >
            MAKE AN IMPACT
          </Link>
        </div>
      </div>
    </section>
  );
}
