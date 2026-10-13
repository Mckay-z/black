import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Globe2,
  HandHeart,
  Megaphone,
  Mic,
  Stethoscope,
  Users,
} from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import FillerImage from "@/components/ui/FillerImage";
import PhotoCard from "@/components/ui/PhotoCard";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Service & Volunteering | Black In Rehab Foundation",
  description:
    "The community clinics, service trips and workshops we run — and the four ways you can give your time to them.",
};

/**
 * Service and volunteering, on one page.
 *
 * This was two: `/impact/service` described the programmes, `/impact/volunteer`
 * described how to help with them, and `/impact/community-service` redirected
 * to the first. Three URLs for one question — "what does the service work look
 * like and how do I join it?" — with each page's answer incomplete without the
 * other. Both old paths now redirect here.
 *
 * Order matters: the work first, then the roles, then how to sign up. Someone
 * deciding whether to give their evenings wants to know what the evenings are
 * for before being asked to commit to one.
 */

const PROGRAMS = [
  {
    icon: Stethoscope,
    title: "Local Community Clinics",
    image: PHOTOS.impactPediatric,
    description:
      "Free rehabilitation screenings, wellness education, and follow-up care in underserved neighbourhoods.",
  },
  {
    icon: Globe2,
    title: "Global Service Trips",
    image: PHOTOS.ghanaAirport,
    description:
      "Service journeys in Ghana, Jamaica, and beyond — providing care while building lasting partnerships.",
  },
  {
    icon: HandHeart,
    title: "Health Education Workshops",
    image: PHOTOS.pressWagmcStage,
    description:
      "Community workshops on injury prevention, chronic disease management, and rehabilitation access.",
  },
];

const ROLES = [
  {
    icon: HandHeart,
    title: "Community Service",
    image: PHOTOS.impactBackpacks,
    commitment: "One day at a time",
    description:
      "Health screenings, mobility clinics, and school-based events in underserved neighbourhoods.",
  },
  {
    icon: Users,
    title: "Mentorship",
    image: PHOTOS.conferenceTableTalk,
    commitment: "One hour a month",
    description:
      "Be matched with a student or early-career clinician who needs someone who has walked the path.",
  },
  {
    icon: Mic,
    title: "Event Support",
    image: PHOTOS.conferenceAudience,
    commitment: "Per event",
    description:
      "Help run registration, sessions, and logistics at the annual conference and regional gatherings.",
  },
  {
    icon: Megaphone,
    title: "Advocacy & Outreach",
    image: PHOTOS.impactAdvocacySpeaker,
    commitment: "Ongoing",
    description:
      "Represent the organisation at career fairs, campus visits, and professional association meetings.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Tell us your interest",
    description:
      "A five-minute form covering your discipline, city, and how much time you have.",
  },
  {
    step: "02",
    title: "Short onboarding call",
    description:
      "We match you to a role that fits your schedule rather than the other way around.",
  },
  {
    step: "03",
    title: "Get placed",
    description:
      "You are introduced to a team lead and added to the volunteer roster for your area.",
  },
];

const REACH = [
  "Free rehabilitation services in 12+ cities",
  "Partnerships with local clinics and nonprofits",
  "Student and professional volunteer roles",
  "Documented hours for licensure and tenure",
];

export default function ServiceAndVolunteeringPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        page="/impact/service"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "BIR CARES", href: "/impact" },
          { label: "Service & Volunteering" },
        ]}
        title="Service &"
        highlight="Volunteering"
        description="We bring rehabilitation expertise directly to the communities that need it most — and every programme runs on clinicians who give their time. Whether you have one afternoon or one hour a month, there is a role that fits."
        image={PHOTOS.impactVolunteerChildren}
        cta={{ label: "SIGN UP TO VOLUNTEER", href: "/contact" }}
        secondaryCta={{ label: "Support Our Work", href: "/impact/donate" }}
      />

      {/* The work */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                eyebrow="Our Approach"
                title="Healing Where It Is Needed Most"
                description="Black in Rehab mobilises licensed professionals and students to deliver free rehabilitation services, health education, and wellness programming to underserved populations. The work is rooted in dignity, cultural competency, and sustainable community partnerships."
              />
              <p className="mt-5 text-lg leading-relaxed text-muted">
                From pop-up clinics in U.S. cities to international service trips, every
                programme is designed to leave communities stronger than we found them.
              </p>
            </Reveal>

            <div>
              <Reveal direction="left">
                <FillerImage
                  src={PHOTOS.impactTherapy}
                  alt="A Black in Rehab therapist working with children"
                  wrapperClassName="aspect-4/3 rounded-[var(--radius-panel)] shadow-float group"
                  zoomOnHover
                />
              </Reveal>
              <Stagger className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {REACH.map((item) => (
                  <StaggerItem key={item} className="card flex items-start gap-3 rounded-xl p-4">
                    <CheckCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <p className="text-sm font-medium text-foreground">{item}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="section border-y border-border bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="What We Run"
              title="Our Service Programmes"
              className="mb-12"
            />
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PROGRAMS.map(({ icon, title, description, image }) => (
              <StaggerItem key={title} className="flex">
                <PhotoCard image={image} icon={icon} title={title}>
                  {description}
                </PhotoCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Roles */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Volunteer Roles"
              title="Four Ways to Give Your Time"
              description="Pick the one that matches the season you are in. People move between roles all the time."
              className="mb-12"
            />
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ROLES.map(({ icon, title, commitment, description, image }) => (
              <StaggerItem key={title} className="flex">
                <PhotoCard image={image} icon={icon} eyebrow={commitment} title={title} imageClassName="h-40">
                  {description}
                </PhotoCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Getting started */}
      <section className="section border-y border-border bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal direction="right">
              <FillerImage
                src={PHOTOS.impactHandsUp}
                alt="Volunteers at a community event"
                wrapperClassName="aspect-4/3 rounded-3xl group"
                zoomOnHover
              />
            </Reveal>

            <Reveal direction="left">
              <SectionHeading eyebrow="Getting Started" title="Three Steps, About a Week" />

              <div className="mt-8 space-y-6">
                {STEPS.map((item) => (
                  <div key={item.step} className="flex gap-5">
                    <span className="shrink-0 font-serif text-2xl font-bold text-primary">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="mb-1 font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card card-sunken mt-10 p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-muted">
                    Volunteer hours can be documented for licensure, tenure, and employer
                    service requirements. Ask us for a letter any time.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <PhotoSplitBand image={PHOTOS.impactVolunteersKids} imageSide="left">
        <p className="eyebrow eyebrow-on-dark mb-5">Volunteer</p>
        <h2 className="display-2 text-white">Give an Hour. Change a Trajectory.</h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
          Tell us what you have time for and we will find the role where it counts most.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn btn-primary btn-lg group">
            SIGN UP TO VOLUNTEER <ArrowRight className="btn-arrow h-5 w-5" />
          </Link>
          <Link href="/get-involved" className="btn btn-on-dark btn-lg">
            Other Ways to Help
          </Link>
        </div>
      </PhotoSplitBand>
    </div>
  );
}
