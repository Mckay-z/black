import Link from "next/link";
import { MapPin, ArrowRight, Globe2 } from "lucide-react";

const CITIES = [
  { city: "Atlanta, GA", status: "Active" },
  { city: "Houston, TX", status: "Active" },
  { city: "New York, NY", status: "Active" },
  { city: "Los Angeles, CA", status: "Active" },
  { city: "Chicago, IL", status: "Active" },
  { city: "Miami, FL", status: "Active" },
  { city: "Washington, D.C.", status: "Active" },
  { city: "Philadelphia, PA", status: "Active" },
  { city: "London, UK", status: "Coming Soon" },
  { city: "Toronto, Canada", status: "Coming Soon" },
  { city: "Accra, Ghana", status: "Coming Soon" },
  { city: "Kingston, Jamaica", status: "Coming Soon" },
];

export default function AmbassadorsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
              <Link href="/" className="hover:text-primary-hover">Home</Link>
              <span>/</span>
              <Link href="/about" className="hover:text-primary-hover">About</Link>
              <span>/</span>
              <span className="text-foreground">Ambassadors</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6">
              Ambassador <span className="text-primary">Cities</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              Our Ambassadors are local leaders who bring the Black in Rehab mission to life in their communities. They organize events, build connections, and represent our values every day.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-12">
            <Globe2 className="w-7 h-7 text-primary" />
            <h2 className="text-2xl font-serif font-bold text-foreground">Current Ambassador Cities</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16">
            {CITIES.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 bg-surface border rounded-xl p-4 transition-colors ${
                  item.status === "Active"
                    ? "border-border hover:border-primary/50"
                    : "border-border/50 opacity-60"
                }`}
              >
                <MapPin className={`w-5 h-5 shrink-0 ${item.status === "Active" ? "text-primary" : "text-muted"}`} />
                <div>
                  <p className="font-semibold text-foreground text-sm">{item.city}</p>
                  {item.status === "Coming Soon" && (
                    <p className="text-xs text-muted uppercase tracking-wide">Coming Soon</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Become an Ambassador CTA */}
          <div className="section-dark bg-secondary border border-border rounded-3xl p-10 md:p-16 text-center">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Lead the Movement in Your City
            </h3>
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Don&apos;t see your city? Apply to become a Black in Rehab Ambassador. Help us grow our global community of rehabilitation professionals united by purpose.
            </p>
            <Link
              href="/community/join"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors text-lg"
            >
              APPLY TO BE AN AMBASSADOR <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
