import Link from "next/link";
import { PHOTOS } from "@/lib/images";

export default function FinalCTA() {
  return (
    <section className="section-dark relative py-24 md:py-32 overflow-hidden bg-secondary">
      <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay" style={{ backgroundImage: `url(${PHOTOS.ghanaFreedomArch})` }}></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
          THIS IS OUR STORY.<br />
          <span className="text-primary">THIS IS OUR PURPOSE.</span>
        </h2>
        
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
          We&apos;re just getting started—and you can be part of what&apos;s next. Your support empowers professionals, inspires students, and strengthens communities across the globe.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/join-the-movement"
            className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors text-lg"
          >
            JOIN THE MOVEMENT
          </Link>
          <Link
            href="/impact/donate"
            className="w-full sm:w-auto bg-transparent hover:bg-white/10 border border-white/30 text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg"
          >
            MAKE AN IMPACT
          </Link>
        </div>
      </div>
    </section>
  );
}
