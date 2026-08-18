import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-[url('/black.png')] bg-black bg-cover bg-top">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-s"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center text-white pt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight max-w-4xl mx-auto">
          We <span className="text-primary">Empower.</span> We <span className="text-primary">Serve.</span> We Transform Lives.
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
          Black in Rehab equips rehabilitation professionals to lead with excellence, serve with purpose, and create lasting impact worldwide.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/join-the-movement"
            className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-background font-bold py-4 px-8 rounded-full transition-colors text-lg"
          >
            JOIN THE MOVEMENT
          </Link>
          <Link
            href="/impact"
            className="w-full sm:w-auto bg-transparent hover:bg-white/10 border border-white/30 text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg"
          >
            EXPLORE OUR IMPACT
          </Link>
        </div>
      </div>
    </section>
  );
}
