import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle,
  GraduationCap,
  School,
  Users,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import FillerImage from "@/components/ui/FillerImage";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PHOTOS } from "@/lib/images";

const BENEFITS = [
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "A Mentor Who Gets It",
    desc: "Every student member is matched with a working clinician in their discipline within 30 days.",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    title: "Scholarship Access",
    desc: "Priority notice and application support for every scholarship we award.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: "Board Prep & Study Groups",
    desc: "Peer-led NPTE, NBCOT, and Praxis groups that run every exam cycle.",
  },
  {
    icon: <School className="w-6 h-6 text-primary" />,
    title: "Campus Speaking Visits",
    desc: "Invite Black in Rehab to your program for a panel, workshop, or career talk.",
  },
];

/*
  Carried over from `/resources/students`, which was merged into this page.

  That page's other section duplicated the membership benefits above, and
  three of its four cards linked to "#" — a dead anchor dressed up as a
  download. This list was the part with something in it.
*/
const PLAYBOOK = [
  "Connect with a mentor in your field before you graduate",
  "Attend at least one national or regional conference as a student",
  "Start building your professional brand online early",
  "Apply for every scholarship you qualify for — every dollar counts",
  "Shadow practitioners in at least three different settings",
  "Join professional associations as a student member",
];

/**
 * Black in Rehab University, with the registration links the client supplied.
 *
 * Both destinations are third-party — a Google Form and Stripe Checkout — so
 * each is a plain `<a>` with an explicit external-link icon rather than a
 * `next/link`. The mastermind has two payment routes and no price stated
 * anywhere we control: the figures live on the Stripe pages, and a number
 * hardcoded here is one that goes stale silently.
 */
const UNIVERSITY = [
  {
    title: "Free Zoom Sessions",
    description:
      "Live sessions open to every student in the community — career guidance, clinical insight, and time with working clinicians. Register once and you are on the list.",
    links: [
      {
        label: "Register for the free Zooms",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdmxk_35NDkdouv8g6c5zvKvqGb4cB9ehAqeukaWXmEhbn1Jw/viewform",
        host: "Google Forms",
      },
    ],
  },
  {
    title: "Accountability Mastermind",
    description:
      "A paid small-group programme for students who want structure, accountability, and a cohort moving at the same pace. Choose the payment option that suits you.",
    links: [
      {
        label: "Pay in full",
        url: "https://buy.stripe.com/bJecN70Lw2a85iId4K8IU02",
        host: "Stripe",
      },
      {
        label: "Pay monthly over 3 months",
        url: "https://buy.stripe.com/aFa3cx0Lw1644eE4ye8IU05",
        host: "Stripe",
      },
    ],
  },
];

const VISIT_STEPS = [
  "Tell us your program and who the audience will be",
  "Pick a format — panel, workshop, or career talk",
  "We match you with a speaker and confirm a date",
  "We show up, on campus or virtually",
];

export default function StudentCommunityPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/community/students"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Get Involved", href: "/get-involved" },
          { label: "Students" },
        ]}
        title="The Student"
        highlight="Community"
        description="Black students are a small share of most PT, OT, and SLP cohorts. Our student community makes sure that never means going through the program alone."
        image={PHOTOS.ghanaJerseysGroup}
        cta={{ label: "JOIN FREE AS A STUDENT", href: "/community/join" }}
        secondaryCta={{ label: "Resource Library", href: "/resources/library" }}
      />

      {/* Benefits */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Student Membership"
            title="What You Get, At No Cost"
            description="Student membership is free. It always has been, and it is not a trial."
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="card p-8 card-hover"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Black in Rehab University */}
      <section className="section bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Black in Rehab University"
            title="Learn With Us Between Semesters"
            description="Live sessions and a small-group accountability programme, run by clinicians who were where you are not long ago."
            align="center"
            className="mb-14"
          />
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {UNIVERSITY.map((track) => (
              <article key={track.title} className="card flex flex-col p-8">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {track.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {track.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {track.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      <span className="sr-only">
                        (opens on {link.host} in a new tab)
                      </span>
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Invite us to campus */}
      <section className="section bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* The photo the client supplied for this section in their
                revision document: the founders on stage at the Africa
                Business Investment Summit. */}
            <FillerImage
              src={PHOTOS.speakingAfricaSummit}
              alt="Black in Rehab founders on stage at the Africa Business Investment Summit"
              wrapperClassName="aspect-4/3 rounded-3xl group"
              zoomOnHover
            />
            <div>
              <SectionHeading
                eyebrow="Bring Us In"
                title="Invite Us to Speak at Your Program"
                description="We visit PT, OT, and SLP programs to talk about careers, representation, and life after graduation — in person or virtually."
              />
              <div className="space-y-3 mt-8">
                {VISIT_STEPS.map((step, idx) => (
                  <div
                    key={step}
                    className="flex items-start gap-4 card rounded-xl p-5"
                  >
                    <span className="text-primary font-serif font-bold shrink-0">
                      0{idx + 1}
                    </span>
                    <p className="text-foreground text-sm">{step}</p>
                  </div>
                ))}
              </div>
              {/* Two audiences for one section: the student inviting us, and
                  the partner who would pay for the visit. The second button is
                  the sponsor route the client asked for — it lands on the
                  School Event Sponsor tier. */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/speakers/book" className="btn btn-primary btn-lg group">
                  REQUEST A SPEAKER <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/support/sponsors" className="btn btn-outline btn-lg group">
                  SPONSOR A SCHOOL EVENT <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student playbook */}
      <section className="section bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Student Playbook"
            title="Six Things Worth Doing Before You Graduate"
            description="None of these cost anything. All of them are easier with a community behind you."
            align="center"
            className="mb-14"
          />

          <Stagger className="mx-auto grid max-w-4xl grid-cols-1 gap-3 md:grid-cols-2">
            {PLAYBOOK.map((tip, index) => (
              <StaggerItem
                key={tip}
                className="card flex items-start gap-4 p-5"
              >
                <span className="font-serif text-lg font-bold text-primary" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-foreground">{tip}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Support strip */}
      <section className="section bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Scholarships", desc: "Direct financial support for tuition and board exams.", href: "/impact/scholarships" },
              { title: "Student Support Fund", desc: "Emergency grants for exam fees, equipment, and travel.", href: "/impact/student-support" },
              { title: "Career Resources", desc: "Resumes, interviews, and first-job negotiation guidance.", href: "/resources/library" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group card card-sunken p-8 card-hover flex flex-col"
              >
                <CheckCircle className="w-8 h-8 text-primary mb-5" />
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed flex-1 mb-5">{item.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Free For Students. Always."
        description="Join the community, get matched with a mentor, and find the people who will be your professional network for the next thirty years."
        cta={{ label: "JOIN AS A STUDENT", href: "/community/join" }}
        secondaryCta={{ label: "See Scholarships", href: "/impact/scholarships" }}
      />
    </div>
  );
}
