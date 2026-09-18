import Link from "next/link";
import { MapPin, ArrowRight, Globe2, Users } from "lucide-react";

import { FALLBACK_AMBASSADORS } from "@/lib/fallback-content";

/*
  Cities the foundation is opening next, with nobody appointed yet.

  Only the unstaffed ones are listed here. The active cities are no longer
  hardcoded — they are derived from the roster below, so appointing an
  ambassador puts their city on the map and there is no second list to keep in
  step. A city that graduates out of this list is one to delete from it.
*/
const UPCOMING_CITIES = ["London, UK", "Toronto, Canada", "Kingston, Jamaica"];

/*
  One ambassador as this page needs them.

  Every entry is one of the client's supplied cards: a finished square
  composition with the name, title and city already set into the artwork. The
  grid is uniform by construction, so nothing here records which kind of
  picture it is — there is only the one kind — and the name, role and city are
  carried as text for the alt attribute rather than to be printed again
  beneath the image.
*/
type Ambassador = {
  id: string;
  name: string;
  role: string;
  city: string;
  image: string;
};

export default function AmbassadorsPage() {
  /*
    The roster is the client's card artwork, and only that.

    This page used to read People → "Ambassador" from the dashboard as well.
    Two of the leadership team carry that tag, so they arrived here as
    ordinary portraits beside twelve finished cards — two layouts in one grid,
    and one of them a person whose place is the leadership page. Reading a
    single source keeps the grid uniform and keeps this page about the
    ambassadors it is named for. Tagging someone "Ambassador" in the dashboard
    no longer changes what renders here; adding their card to
    FALLBACK_AMBASSADORS does.
  */
  const ambassadors: Ambassador[] = FALLBACK_AMBASSADORS.map((person) => ({
    id: person.id,
    name: person.name,
    role: person.role,
    city: person.city,
    image: person.card,
  }));

  /*
    Every city with someone in it, each named once — Los Angeles has two
    ambassadors and belongs on the map once — and sorted so the grid scans.
  */
  const activeCities = [
    ...new Set(ambassadors.map((person) => person.city).filter(Boolean)),
  ].sort();

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-surface border-b border-border">
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
      <section className="pt-12 md:pt-16 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-12">
            <Globe2 className="w-7 h-7 text-primary" />
            <h2 className="text-2xl font-serif font-bold text-foreground">Current Ambassador Cities</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16">
            {activeCities.map((city) => (
              <div
                key={city}
                className="flex items-center gap-3 bg-surface border border-border rounded-xl p-4 transition-colors hover:border-primary/50"
              >
                <MapPin className="w-5 h-5 shrink-0 text-primary" />
                <p className="font-semibold text-foreground text-sm">{city}</p>
              </div>
            ))}
            {UPCOMING_CITIES.map((city) => (
              <div
                key={city}
                className="flex items-center gap-3 bg-surface border border-border/50 rounded-xl p-4 opacity-60"
              >
                <MapPin className="w-5 h-5 shrink-0 text-muted" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{city}</p>
                  <p className="text-xs text-muted uppercase tracking-wide">Coming Soon</p>
                </div>
              </div>
            ))}
          </div>

          {/*
            The people, when there are any.

            Rendered between the city grid and the call to action so the page
            reads city map, then the faces behind it, then the invitation to
            join them.
          */}
          {ambassadors.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-12">
                <Users className="w-7 h-7 text-primary" />
                <h2 className="text-2xl font-serif font-bold text-foreground">
                  Meet the Ambassadors
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {ambassadors.map((person) => (
                  <div
                    key={person.id}
                    className="group card overflow-hidden card-hover"
                  >
                    {/*
                      Each card is square and is shown at full bleed and in
                      full colour — it is artwork, and a grayscale treatment
                      would flatten a composition built around the brand's
                      browns and golds. Its text is set into the JPEG, so the
                      whole card carries that text as its alt rather than just
                      the name.
                    */}
                    <div className="aspect-square">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={person.image}
                        alt={`${person.name} — ${person.role}, ${person.city}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Become an Ambassador CTA */}
          <div className="section-dark bg-secondary border border-border rounded-3xl p-10 md:p-16 text-center">
            <h3 className="display-2 text-white mb-6">
              Lead the Movement in Your City
            </h3>
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Don&apos;t see your city? Apply to become a Black in Rehab Ambassador. Help us grow our global community of rehabilitation professionals united by purpose.
            </p>
            {/* The client's own application form, supplied in their revision
                document. A plain <a>: it is a Google Form, not a page of
                ours, and this used to send applicants to the generic join
                page instead. */}
            <a
              href="https://forms.gle/oFiqMrrBpwYYymga8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg group"
            >
              APPLY TO BE AN AMBASSADOR <ArrowRight className="w-5 h-5" />
              <span className="sr-only">(opens on Google Forms in a new tab)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
