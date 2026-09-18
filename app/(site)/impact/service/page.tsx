import type { Metadata } from "next";
import {
  CheckCircle,
  Clock,
  Globe2,
  HandHeart,
  Megaphone,
  Mic,
  Stethoscope,
  Users,
} from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
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
    description:
      "Free rehabilitation screenings, wellness education, and follow-up care in underserved neighbourhoods.",
  },
  {
    icon: Globe2,
    title: "Global Service Trips",
    description:
      "Service journeys in Ghana, Jamaica, and beyond — providing care while building lasting partnerships.",
  },
  {
    icon: HandHeart,
    title: "Health Education Workshops",
    description:
      "Community workshops on injury prevention, chronic disease management, and rehabilitation access.",
  },
];

const ROLES = [
  {
    icon: HandHeart,
    title: "Community Service",
    commitment: "One day at a time",
    description:
      "Health screenings, mobility clinics, and school-based events in underserved neighbourhoods.",
  },
  {
    icon: Users,
    title: "Mentorship",
    commitment: "One hour a month",
    description:
      "Be matched with a student or early-career clinician who needs someone who has walked the path.",
  },
  {
    icon: Mic,
    title: "Event Support",
    commitment: "Per event",
    description:
      "Help run registration, sessions, and logistics at the annual conference and regional gatherings.",
  },
  {
    icon: Megaphone,
    title: "Advocacy & Outreach",
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
          { label: "Impact", href: "/impact" },
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
          <div className="grid items-start gap-16 lg:grid-cols-2">
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

            <Stagger className="space-y-4">
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
      </section>

      {/* Programmes */}
      <section className="section border-y border-border bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="What We Run"
              title="Our Service Programmes"
              align="center"
              className="mb-16"
            />
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {PROGRAMS.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title} className="card card-sunken card-hover p-8">
                <span className="icon-tile mb-6">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{description}</p>
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
              align="center"
              className="mb-16"
            />
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {ROLES.map(({ icon: Icon, title, commitment, description }) => (
              <StaggerItem key={title} className="card card-hover p-8">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <span className="icon-tile shrink-0">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {commitment}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{description}</p>
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

      <CTABand
        title="Give an Hour. Change a Trajectory."
        description="Tell us what you have time for and we will find the role where it counts most."
        cta={{ label: "SIGN UP TO VOLUNTEER", href: "/contact" }}
        secondaryCta={{ label: "Other Ways to Help", href: "/get-involved" }}
      />
    </div>
  );
}
