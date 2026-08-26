import Link from "next/link";
import { PHOTOS } from "@/lib/images";

export default function Hero() {
  return (
    <section className="section-dark relative min-h-screen flex items-center justify-center overflow-hidden bg-surface">
      {/* The group's faces sit just above the middle of the photo, so the crop
          is biased upward and the scrim is a gradient rather than a flat wash —
          lighter across the band where the heads fall, darker behind the copy. */}
      <div
        className="absolute inset-0 bg-black bg-cover"
        style={{
          backgroundImage: `url(${PHOTOS.retreatGroupBlazers})`,
          backgroundPosition: "center 25%",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/65 to-black/75"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center text-white pt-20">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif font-bold mb-5 leading-tight max-w-3xl mx-auto">
          We <span className="text-primary">Empower.</span> We <span className="text-primary">Serve.</span> <br />We Transform Lives.
        </h1>

        <p className="text-base md:text-lg text-gray-200 mb-8 max-w-xl mx-auto font-light">
          Black in Rehab equips rehabilitation professionals to lead with excellence, serve with purpose, and create lasting impact worldwide.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/join-the-movement"
            className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-on-primary font-bold py-3.5 px-7 rounded-full transition-colors"
          >
            JOIN THE MOVEMENT
          </Link>
          <Link
            href="/impact"
            className="w-full sm:w-auto bg-transparent hover:bg-white/10 border border-white/30 text-white font-semibold py-3.5 px-7 rounded-full transition-colors"
          >
            EXPLORE OUR IMPACT
          </Link>
        </div>
      </div>
    </section>
  );
}
