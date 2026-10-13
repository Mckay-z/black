import { MapPin, ArrowRight } from "lucide-react";

import { FALLBACK_AMBASSADORS } from "@/lib/fallback-content";
import PageHero from "@/components/ui/PageHero";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import ArchPhoto from "@/components/about/ArchPhoto";
import Reveal from "@/components/motion/Reveal";
import { PHOTOS } from "@/lib/images";

/*
  Cities the foundation is opening next, with nobody appointed yet.

  Only the unstaffed ones are listed here. The active cities are no longer
  hardcoded — they are derived from the roster below, so appointing an
  ambassador puts their city on the map and there is no second list to keep in
  step. A city that graduates out of this list is one to delete from it.
*/
const UPCOMING_CITIES = ["London, UK", "Toronto, Canada", "Kingston, Jamaica"];

/** The client's ambassador application form. */
const AMBASSADOR_FORM_URL = "https://forms.gle/oFiqMrrBpwYYymga8";

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
      <PageHero
        page="/about/ambassadors"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Ambassadors" },
        ]}
        title="Ambassador"
        highlight="Cities"
        description="Our Ambassadors are local leaders who bring the Black in Rehab mission to life in their communities. They organize events, build connections, and represent our values every day."
        image={PHOTOS.ghanaCastleGroup}
        imagePosition="60% center"
      />

      {/* Cities, beside a photo of a local gathering. */}
      <section className="section bg-background">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div>
          <Reveal className="mb-10">
            <p className="eyebrow mb-5">Where We Are</p>
            <h2 className="display-2 text-foreground">Current Ambassador Cities</h2>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
          </div>

          <Reveal direction="right" className="mx-auto w-full max-w-sm lg:max-w-none">
            <ArchPhoto
              src={PHOTOS.conferenceTableTalk}
              alt="Black in Rehab members in conversation at a local gathering"
            />
          </Reveal>
        </div>
      </section>

      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          {/*
            The people, when there are any.

            Rendered between the city grid and the call to action so the page
            reads city map, then the faces behind it, then the invitation to
            join them.
          */}
          {ambassadors.length > 0 && (
            <div>
              <Reveal className="mb-12 max-w-2xl">
                <p className="eyebrow mb-5">The People</p>
                <h2 className="display-2 text-foreground">Meet the Ambassadors</h2>
              </Reveal>

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

        </div>
      </section>

      <PhotoSplitBand image={PHOTOS.retreatGroupBlazers} imageSide="left">
        <p className="eyebrow eyebrow-on-dark mb-5">Ambassadors</p>
        <h2 className="display-2 text-white">Lead the Movement in Your City</h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
          Don&apos;t see your city? Apply to become a Black in Rehab Ambassador. Help us grow our global community of rehabilitation professionals united by purpose.
        </p>
        {/* The client's own application form, supplied in their revision
            document — a Google Form, not a page of ours. */}
        <a
          href={AMBASSADOR_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg group mt-9"
        >
          APPLY TO BE AN AMBASSADOR <ArrowRight className="btn-arrow h-5 w-5" />
          <span className="sr-only">(opens on Google Forms in a new tab)</span>
        </a>
      </PhotoSplitBand>
    </div>
  );
}
