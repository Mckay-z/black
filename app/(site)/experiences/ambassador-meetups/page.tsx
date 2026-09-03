import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle, Globe2, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

const CITIES = [
  { city: "Atlanta, GA", ambassador: "Ambassador — client to confirm", cadence: "Monthly", status: "Active" },
  { city: "Houston, TX", ambassador: "Ambassador — client to confirm", cadence: "Monthly", status: "Active" },
  { city: "Chicago, IL", ambassador: "Ambassador — client to confirm", cadence: "Quarterly", status: "Active" },
  { city: "New York, NY", ambassador: "Ambassador — client to confirm", cadence: "Monthly", status: "Active" },
  { city: "London, UK", ambassador: "Recruiting", cadence: "—", status: "Coming Soon" },
  { city: "Toronto, Canada", ambassador: "Recruiting", cadence: "—", status: "Coming Soon" },
  { city: "Accra, Ghana", ambassador: "Recruiting", cadence: "—", status: "Coming Soon" },
  { city: "Kingston, Jamaica", ambassador: "Recruiting", cadence: "—", status: "Coming Soon" },
];

const WHAT_HAPPENS = [
  "An opening circle so nobody stands alone at the edge of the room",
  "A short spotlight from a local clinician on their work",
  "Open discussion on whatever the city is wrestling with",
  "Student and early-career introductions to working therapists",
  "Concrete follow-ups: referrals, mentorship pairs, and job leads",
];

export default function AmbassadorMeetupsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/experiences/ambassador-meetups"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Experiences", href: "/experiences" },
          { label: "Ambassador Meetups" },
        ]}
        title="Ambassador"
        highlight="Meetups"
        description="Our ambassadors host regular gatherings in their cities — small, consistent, and built for people who want a professional community close to home."
        image={PHOTOS.retreatDinner}
        cta={{ label: "FIND YOUR CITY", href: "#cities" }}
        secondaryCta={{ label: "Become an Ambassador", href: "/about/ambassadors" }}
      />

      {/* What happens */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FillerImage
              src={PHOTOS.conferenceNetworking}
              alt="Ambassador meetup in progress"
              wrapperClassName="aspect-4/3 rounded-3xl group"
              zoomOnHover
            />
            <div>
              <SectionHeading
                eyebrow="What Actually Happens"
                title="Two Hours, Twenty People, Real Conversation"
              />
              <p className="text-muted text-lg leading-relaxed mb-8">
                Meetups are intentionally small. The point is not a panel or a program — it
                is that you leave knowing several people you can call.
              </p>
              <div className="space-y-3">
                {WHAT_HAPPENS.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 card rounded-xl p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section id="cities" className="section bg-surface border-y border-border scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Ambassador Cities"
            title="Where We Gather"
            description="Active cities meet on a regular cadence. Cities marked coming soon are recruiting an ambassador right now."
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CITIES.map((item) => (
              <div
                key={item.city}
                className={`rounded-2xl p-7 border transition-colors ${
                  item.status === "Active"
                    ? "bg-background border-border hover:border-primary/50"
                    : "bg-background/60 border-dashed border-border"
                }`}
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  {item.status === "Active" ? (
                    <MapPin className="w-5 h-5 text-primary" />
                  ) : (
                    <Globe2 className="w-5 h-5 text-primary" />
                  )}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.city}</h3>
                <p className="text-muted text-xs mb-4">{item.ambassador}</p>
                {item.status === "Active" ? (
                  <p className="text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" /> {item.cadence}
                  </p>
                ) : (
                  <p className="text-muted text-xs font-bold uppercase tracking-wider">
                    Coming Soon
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become an ambassador */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="Lead Your City"
                title="We Are Recruiting Ambassadors"
              />
              <p className="text-muted text-lg leading-relaxed mb-6">
                Ambassadors are the reason this organization exists in more than one place.
                They host the meetups, welcome new members, and represent Black in Rehab in
                their local professional community.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-10">
                It is a volunteer role with real support behind it: a stipend for hosting
                costs, a national network of fellow ambassadors, and direct access to our
                leadership team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about/ambassadors"
                  className="btn btn-primary btn-lg group"
                >
                  AMBASSADOR PROGRAMME <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-border hover:border-primary text-foreground font-semibold py-4 px-8 rounded-full transition-colors"
                >
                  Ask a Question
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FillerImage
                src={PHOTOS.foundersStanding}
                alt="Ambassador portrait"
                wrapperClassName="aspect-4/5 rounded-2xl group"
                zoomOnHover
              />
              <FillerImage
                src={PHOTOS.conferencePanel}
                alt="Ambassador portrait"
                wrapperClassName="aspect-4/5 rounded-2xl mt-8 group"
                zoomOnHover
              />
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Find Your People"
        description="Membership includes an introduction to your nearest ambassador and an invitation to every meetup in your area."
        cta={{ label: "JOIN THE MOVEMENT", href: "/join-the-movement" }}
        secondaryCta={{ label: "See Local Events", href: "/experiences/local-events" }}
      />
    </div>
  );
}
