import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Ear,
  Gift,
  HeartHandshake,
  MapPin,
  Repeat,
  Stethoscope,
} from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import FillerImage from "@/components/ui/FillerImage";
import PhotoCard from "@/components/ui/PhotoCard";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { DONATE_URL } from "@/lib/donate";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Global Partnerships & Service | Black in Rehab Foundation",
  description:
    "Black in Rehab connects rehabilitation professionals with opportunities to learn, share their expertise, and serve alongside local partners in Ghana.",
};

/**
 * Global Partnerships & Service (formerly Mission Projects).
 *
 * Every line of copy here is the client's, from the website-updates
 * document. That document replaced the old page outright: its four projects
 * (Accra, Saint Ann, Chicago, Nairobi), their outcome figures, the
 * "multi-year commitment" framing and the annual-report funding claim were
 * placeholders that never described real work, and they were removed rather
 * than reworded. Do not add figures, partner names or dates here that the
 * client has not supplied.
 *
 * The URL stays `/impact/mission-projects` so existing links keep working.
 */

const WISHLIST_URL = "https://www.amazon.com/hz/wishlist/ls/92BW299GGA5Z/ref=hz_ls_biz_ex";
const GHANA_URL = "/trips/ghana#sankofa-return";

const APPROACH = [
  {
    icon: Ear,
    title: "Start With Our Partners",
    image: PHOTOS.pressWagmcStage,
    desc: "We listen to local organizations to understand their goals, existing strengths, and areas where our support can be useful.",
  },
  {
    icon: Repeat,
    title: "Learn While We Serve",
    image: PHOTOS.impactPediatric,
    desc: "Clinical exchange goes both ways. Our therapists bring experience while learning from Ghanaian practitioners, staff, and communities.",
  },
  {
    icon: Stethoscope,
    title: "Build Beyond the Visit",
    image: PHOTOS.ghanaCertificates,
    desc: "We support practical training, tools, and systems that local teams can continue using after a session or visit ends.",
  },
];

type Initiative = {
  title: string;
  where: string;
  status: string;
  body: string[];
  image: string;
  logo?: { src: string; alt: string };
  action: { label: string; href: string; external?: boolean };
};

const INITIATIVES: Initiative[] = [
  {
    title: "Nature Sprouts Academy Partnership",
    where: "Accra, Ghana",
    image: PHOTOS.impactChildren,
    status: "Current Partnership",
    body: [
      "Through our partnership with Nature Sprouts Academy, we support staff training and the development of practical clinical systems—from individualized planning and functional goals to documentation and progress review. The focus is helping staff strengthen their skills and support children’s participation in everyday life.",
    ],
    logo: { src: "/logos/nature-sprouts-academy.png", alt: "Nature Sprouts Academy" },
    action: { label: "Support Our Ghana Initiatives", href: DONATE_URL, external: true },
  },
  {
    title: "Sensory Room Development",
    where: "Nature Sprouts Academy",
    image: PHOTOS.impactNeurodiversity,
    status: "In Development",
    body: [
      "We are supporting the planning and development of NSA’s sensory room, including recommendations for resources, organization, safety, and meaningful use. Sponsors and resource partners can help support this initiative as needs are identified and confirmed.",
    ],
    action: { label: "Support NSA’s Sensory Room", href: WISHLIST_URL, external: true },
  },
  {
    title: "SANKOFA Clinical & Cultural Experience",
    where: "Ghana",
    image: PHOTOS.ghanaAirport,
    status: "March 10–22, 2027",
    body: [
      "Our upcoming experience brings Black OT, PT, and SLP professionals to Ghana for cultural exploration, clinical exchange, and service. Participants will share their expertise and learn alongside staff at Nature Sprouts Academy, connecting professional purpose with a deeper experience of Ghana.",
      "Application and approval required.",
    ],
    action: { label: "Explore SANKOFA", href: GHANA_URL },
  },
];

const WAYS_TO_HELP = [
  {
    icon: HeartHandshake,
    title: "Become a Sponsor",
    image: PHOTOS.conferenceGroupBranded,
    desc: "Help support the resources and coordination needed to bring these initiatives to life.",
    action: { label: "Become a Sponsor", href: "/support/sponsors" },
  },
  {
    icon: Stethoscope,
    title: "Share Your Expertise",
    image: PHOTOS.impactVolunteerChildren,
    desc: "Express interest in contributing your rehabilitation skills to future training and service opportunities.",
    action: { label: "Express Interest in Serving", href: "/contact" },
  },
  {
    icon: Gift,
    title: "Give What’s Needed",
    image: PHOTOS.impactBackpacks,
    desc: "Connect with us before donating supplies or equipment so your contribution aligns with confirmed partner needs.",
    action: { label: "Discuss a Resource Donation", href: "/contact" },
  },
];

function ActionLink({
  action,
  className,
}: {
  action: { label: string; href: string; external?: boolean };
  className: string;
}) {
  const Icon = action.external ? ArrowUpRight : ArrowRight;
  return (
    <Link
      href={action.href}
      className={className}
      {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {action.label} <Icon className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export default function GlobalPartnershipsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/impact/mission-projects"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "BIR CARES", href: "/impact" },
          { label: "Global Partnerships & Service" },
        ]}
        title="Global Partnerships"
        highlight="& Service"
        description="Black in Rehab connects rehabilitation professionals with opportunities to learn, share their expertise, and serve alongside local partners."
        image={PHOTOS.speakingTeamWagmc}
        cta={{ label: "SUPPORT OUR GHANA INITIATIVES", href: DONATE_URL }}
        secondaryCta={{ label: "Explore the Ghana Experience", href: GHANA_URL }}
      />

      {/* Clinical & Cultural Exchanges */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Global Partnerships & Service"
                title="Clinical & Cultural Exchanges"
              />
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Black in Rehab connects rehabilitation professionals with
                opportunities to learn, share their expertise, and serve alongside
                local partners.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Our current work in Ghana focuses on staff training, rehabilitation
                program development, and supporting resources that reflect our
                partners’ priorities.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={DONATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary group"
                >
                  SUPPORT OUR GHANA INITIATIVES
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href={GHANA_URL} className="btn btn-outline group">
                  EXPLORE THE GHANA EXPERIENCE
                  <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <Reveal direction="left">
              <FillerImage
                src={PHOTOS.impactTherapy}
                alt="A therapy session"
                wrapperClassName="aspect-4/5 sm:aspect-4/3 lg:aspect-4/5 rounded-t-[999px] rounded-b-[var(--radius-panel)] shadow-float ring-1 ring-primary/30 group"
                zoomOnHover
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* How We Approach the Work */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <SectionHeading eyebrow="Our Approach" title="How We Approach the Work" className="mb-12" />
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {APPROACH.map(({ icon, title, desc, image }) => (
              <StaggerItem key={title} className="flex">
                <PhotoCard image={image} icon={icon} title={title}>
                  {desc}
                </PhotoCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Our Current Ghana Initiatives */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <SectionHeading eyebrow="In Ghana" title="Our Current Ghana Initiatives" className="mb-12" />
          </Reveal>
          <div className="space-y-6">
            {INITIATIVES.map((initiative) => (
              <article
                key={initiative.title}
                className="card grid grid-cols-1 overflow-hidden md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
              >
                <div className="img-filler relative min-h-56">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={initiative.image}
                    alt=""
                    loading="lazy"
                    className="photo absolute inset-0 h-full w-full object-cover"
                  />
                  {initiative.logo && (
                    <div className="absolute bottom-4 left-4 rounded-xl bg-white p-3 shadow-soft">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={initiative.logo.src}
                        alt={initiative.logo.alt}
                        loading="lazy"
                        className="h-7 w-auto"
                      />
                    </div>
                  )}
                </div>
                <div className="p-8 md:p-10">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {initiative.where}
                    </span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                      {initiative.status}
                    </span>
                  </div>
                  <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">
                    {initiative.title}
                  </h3>
                  {initiative.body.map((paragraph) => (
                    <p key={paragraph} className="mb-4 leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))}
                  <ActionLink action={initiative.action} className="link-arrow mt-2" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Help Move the Work Forward */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="BIR CARES"
              title="Help Move the Work Forward"
              description="Through BIR CARES, sponsors, volunteers, and community partners can support therapist participation, training initiatives, sensory room resources, and professional service."
              className="mb-12"
            />
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {WAYS_TO_HELP.map(({ icon, title, desc, action, image }) => (
              <StaggerItem key={title} className="flex">
                <PhotoCard image={image} icon={icon} title={title} href={action.href} cta={action.label}>
                  {desc}
                </PhotoCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Partner With Black in Rehab */}
      <PhotoSplitBand image={PHOTOS.ghanaKente} imageSide="right" imagePosition="center 30%">
        <p className="eyebrow eyebrow-on-dark mb-5">For Ghanaian Organizations</p>
        <h2 className="display-2 text-white">Partner With Black in Rehab</h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
          Are you a Ghanaian organization seeking rehabilitation training or
          program development support? We welcome conversations about your needs,
          goals, and opportunities for collaboration.
        </p>
        <Link href="/contact" className="btn btn-primary btn-lg group mt-9">
          CONNECT WITH OUR TEAM
          <ArrowRight className="btn-arrow h-5 w-5" aria-hidden="true" />
        </Link>
      </PhotoSplitBand>
    </div>
  );
}
