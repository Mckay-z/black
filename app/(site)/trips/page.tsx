import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { NAV_ICONS } from "@/components/navigation/SectionHub";
import PhotoCard from "@/components/ui/PhotoCard";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import TripsHeroSlideshow from "@/components/trips/TripsHeroSlideshow";
import { TRIPS } from "@/lib/trips";
import { PHOTOS, photoPosition } from "@/lib/images";
import { NAV_SECTIONS } from "@/lib/navigation";
import { externalProps } from "@/lib/donate";

export const metadata: Metadata = {
  title: "All Trips | Black In Rehab Foundation",
  description:
    "Every Black In Rehab trip in one place — conferences, wellness and leadership retreats, global service journeys, and local gatherings.",
};

/**
 * The all-trips index.
 *
 * Laid out after the reference the client supplied: a full-bleed welcome
 * banner with the greeting set in a panel floating over the photograph, then
 * an even grid of trips where every card carries the same four things in the
 * same order — photo, name, dates, place — and nothing else. The discipline is
 * the point: the cards are scannable precisely because none of them is allowed
 * to say more than its neighbours.
 *
 * Two deliberate departures from the reference. The palette is the site's own
 * gold-on-beige rather than the reference's red, so the page belongs to this
 * brand and works in dark mode; and the place line is set in italic Playfair
 * rather than a script face, which is the nearest thing the site's two fonts
 * can do without loading a third.
 *
 * Card content comes from `lib/trips.ts` — add a trip there, not here.
 */
/*
  What the banner rotates through: the dated events, in the order they happen.

  "Year-Round" and "Coming Soon" are deliberately excluded. A rotation headed
  "Upcoming" that lands on a trip with no date, or one with no date yet, is
  answering a question nobody asked — those still appear in the grid below,
  which is where a visitor goes to see everything.
*/
const UPCOMING = TRIPS.filter((trip) => trip.status === "Open");

/**
 * The section's pages as photo cards. Titles, descriptions and icons come
 * from `lib/navigation.ts` so they match the menu; the photos are chosen so
 * none repeats a card in the grid above.
 */
const SECTION = NAV_SECTIONS.find((section) => section.href === "/trips");
const SECTION_PHOTOS: Record<string, string> = {
  "/trips/upcoming-events": PHOTOS.conferenceGroupBranded,
  "/trips/global": PHOTOS.ghanaFreedomArch,
  "/trips/ambassador-meetups": PHOTOS.retreatDinner,
};

export default function TripsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ---- Upcoming events ------------------------------------------- */}
      <TripsHeroSlideshow trips={UPCOMING} />

      {/* ---- The grid --------------------------------------------------- */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-5">Every Trip</p>
            <h2 className="display-2 text-foreground">Upcoming Events &amp; Trips</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Conferences, retreats, global experiences, and local gatherings — in the order they happen.
            </p>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TRIPS.map((trip) => (
              <StaggerItem key={trip.slug} className="flex">
                <Link
                  href={trip.href}
                  {...externalProps(trip.href)}
                  className="card card-hover group flex w-full flex-col overflow-hidden text-center"
                >
                  <div className="relative h-52 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={trip.image}
                      alt={trip.blurb}
                      loading="lazy"
                      className={`photo photo-hover-lift h-full w-full object-cover ${photoPosition(trip.image)} transition-transform duration-700 group-hover:scale-[1.07]`}
                    />

                    {trip.status !== "Open" && (
                      <span className="chip chip-dark absolute right-4 top-4 uppercase tracking-wider">
                        {trip.status}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col items-center px-7 pb-8 pt-7">
                    <h2 className="font-serif text-xl font-bold uppercase leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {trip.title}
                    </h2>

                    <p className="mt-3 text-sm text-muted">{trip.dates}</p>

                    <p className="mt-2 font-serif text-lg italic text-primary">
                      {trip.location}
                    </p>

                    {/* A span, not a nested <a> — the whole card is already
                        the link. It carries the button styling so the grid
                        keeps the reference layout's rhythm. */}
                    <span className="btn btn-primary mt-6 min-h-0! px-6 py-2.5 text-xs tracking-[0.12em]">
                      LEARN MORE
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---- The rest of the section, as photo cards ----------------------- */}
      {SECTION && (
        <section className="section border-t border-border bg-surface">
          <div className="container mx-auto px-4 md:px-6">
            <Reveal className="mb-12 max-w-2xl">
              <p className="eyebrow mb-5">Also in Trips</p>
              <h2 className="display-2 text-foreground">Beyond the Trip List</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                The calendar, the global programme, and the gatherings that happen closer to home.
              </p>
            </Reveal>
            <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {SECTION.children.map((child) => (
                <StaggerItem key={child.href} className="flex">
                  <PhotoCard
                    image={SECTION_PHOTOS[child.href] ?? PHOTOS.conferenceCelebration}
                    icon={NAV_ICONS[child.icon]}
                    title={child.label}
                    href={child.href}
                  >
                    {child.description}
                  </PhotoCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <PhotoSplitBand image={PHOTOS.retreatGroupOutdoors} imageSide="left">
        <p className="eyebrow eyebrow-on-dark mb-5">Find Your Trip</p>
        <h2 className="display-2 text-white">Not Sure Where to Start?</h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
          Tell us what you are hoping to get out of a trip — rest, service, leadership, or simply a room full of people who understand the work — and we will point you to the right one.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn btn-primary btn-lg group">
            TALK TO US <ArrowRight className="btn-arrow h-5 w-5" />
          </Link>
          <Link href="/trips/upcoming-events" className="btn btn-on-dark btn-lg">
            See What&apos;s Next
          </Link>
        </div>
      </PhotoSplitBand>
    </div>
  );
}
