import Link from "next/link";
import { ArrowRight, Globe2 } from "lucide-react";

import { getHero, imageUrl } from "@/lib/cms";
import { PHOTOS } from "@/lib/images";

/**
 * Homepage hero.
 *
 * Headline, lede, background photo and both buttons are editable in the
 * dashboard under Page Banners → the record for "/". Anything left blank
 * there keeps the value below, so the client can change just the photo
 * without having to re-enter the copy.
 *
 * The photograph carries two treatments that a single flat overlay cannot: a
 * vertical scrim that stays light across the band where the group's faces
 * fall, and a radial one that darkens the corners while leaving the centre
 * open — so the copy has contrast without the picture being dimmed flat.
 */

const DEFAULTS = {
  image: PHOTOS.retreatGroupBlazers,
  description:
    "Black in Rehab equips rehabilitation professionals to lead with excellence, serve with purpose, and create lasting impact worldwide.",
  cta: { label: "JOIN THE MOVEMENT", href: "/join-the-movement" },
  secondaryCta: { label: "EXPLORE OUR IMPACT", href: "/impact" },
};

export default async function Hero() {
  const hero = await getHero("/");

  const image = imageUrl(hero?.image, DEFAULTS.image);
  const description = hero?.description || DEFAULTS.description;
  const ctaLabel = hero?.ctaLabel || DEFAULTS.cta.label;
  const ctaHref = hero?.ctaHref || DEFAULTS.cta.href;
  const secondaryLabel = hero?.secondaryCtaLabel || DEFAULTS.secondaryCta.label;
  const secondaryHref = hero?.secondaryCtaHref || DEFAULTS.secondaryCta.href;

  return (
    <section className="section-dark relative isolate flex min-h-svh items-center justify-center overflow-hidden bg-secondary">
      {/* The group's faces sit just above the middle of the photo, so the crop
          is biased upward and the scrim is a gradient rather than a flat wash —
          lighter across the band where the heads fall, darker behind the copy. */}
      <div
        className="absolute inset-0 -z-20 bg-black bg-cover"
        style={{ backgroundImage: `url(${image})`, backgroundPosition: "center 25%" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-b from-black/55 via-black/60 to-black/85"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 38%, transparent 0%, rgb(0 0 0 / 0.25) 55%, rgb(0 0 0 / 0.7) 100%)",
        }}
      />

      {/* Gold bloom behind the headline. */}
      <div
        aria-hidden="true"
        className="absolute -z-10 left-1/2 top-[30%] h-136 w-208 max-w-[110vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/12 blur-3xl"
      />

      <div className="container relative mx-auto px-4 md:px-6 pt-28 pb-24 text-center">
        <p className="eyebrow eyebrow-on-dark enter mx-auto mb-7">
          Healing Beyond Borders
        </p>

        <h1 className="display-1 enter enter-1 mx-auto max-w-4xl text-white">
          {hero?.heading ? (
            <>
              {hero.heading}
              {hero.highlight && (
                <span className="text-gold-gradient"> {hero.highlight}</span>
              )}
            </>
          ) : (
            <>
              We <span className="text-gold-gradient">Empower.</span> We{" "}
              <span className="text-gold-gradient">Serve.</span>
              <br />
              We Transform Lives.
            </>
          )}
        </h1>

        <p className="enter enter-2 mx-auto mt-7 max-w-2xl text-lg md:text-xl font-light leading-relaxed text-white/80">
          {description}
        </p>

        <div className="enter enter-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={ctaHref}
            className="btn btn-primary btn-lg group w-full sm:w-auto"
          >
            {ctaLabel}
            <ArrowRight className="btn-arrow h-5 w-5" />
          </Link>
          <Link
            href={secondaryHref}
            className="btn btn-on-dark btn-lg w-full sm:w-auto"
          >
            {secondaryLabel}
          </Link>
        </div>

        {/* A short trust strip. It gives the fold something concrete under the
            promise, and it is static copy — the measured figures live in the
            editable stats band immediately below. */}
        <ul className="enter enter-4 mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/60">
          <li className="flex items-center gap-2">
            <Globe2 className="h-4 w-4 text-primary" aria-hidden="true" />
            A global professional community
          </li>
          <li aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
          <li>Conferences · Retreats · Global service</li>
          <li aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
          <li>Scholarships &amp; mentorship</li>
        </ul>
      </div>

      {/* Scroll cue. Decorative, hidden from assistive tech, and it disappears
          on short viewports where there is no room for it. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-8 hidden justify-center md:flex"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-primary" />
        </span>
      </div>
    </section>
  );
}
