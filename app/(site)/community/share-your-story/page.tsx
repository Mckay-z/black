import Link from "next/link";
import { CheckCircle, Mic, Quote, Sparkles, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import CognitoForm from "@/components/ui/CognitoForm";
import FillerImage from "@/components/ui/FillerImage";
import { PHOTOS } from "@/lib/images";

export const metadata = {
  title: "Share Your Story | Black In Rehab Foundation",
  description:
    "Tell us how Black in Rehab shaped your career, your practice, or your community. Your story helps the next clinician see what is possible.",
};

const SHARE_FORM = {
  key: "5ckq_K_M7kSerqR-u0pw5g",
  id: "7",
  url: "https://www.cognitoforms.com/BlackInRehab1/BlackInRehabShareYourStory",
};

const WHY = [
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Someone Needs to See It",
    desc: "A student deciding whether they belong in this profession is more convinced by your story than by any statistic we can publish.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    title: "It Shapes What We Build",
    desc: "Scholarships, retreats and global trips all started because members told us what was missing.",
  },
  {
    icon: <Mic className="w-6 h-6 text-primary" />,
    title: "It May Reach Further",
    desc: "With your permission, stories appear on this site, in the annual report, at the conference, or on the podcast.",
  },
];

const PROMPTS = [
  "How you found Black in Rehab, and what your career looked like before it",
  "A conference, retreat, or global experience that changed something for you",
  "A mentor, scholarship, or connection that arrived at the right moment",
  "What you would say to a Black student starting a PT, OT, or SLP program",
  "Something the profession still gets wrong that more people should hear",
];

const WHAT_HAPPENS = [
  "You submit the form — as long or as short as you like",
  "Our team reads it and follows up within two weeks",
  "We ask permission before publishing anything, every time",
  "You approve the final wording before it goes anywhere",
];

export default function ShareYourStoryPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/community/share-your-story"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Community", href: "/community" },
          { label: "Share Your Story" },
        ]}
        title="Share Your"
        highlight="Story"
        description="Every number in our annual report started as somebody's story. Tell us yours — how you found this community, what changed, and what you would want the next clinician to know."
        image={PHOTOS.conferenceCelebration}
        cta={{ label: "GO TO THE FORM", href: "#story-form" }}
      />

      {/* Why share */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Why It Matters"
            title="Three Reasons We Ask"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY.map((item) => (
              <div
                key={item.title}
                className="card p-8 card-hover"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prompts + what happens */}
      <section className="section bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                eyebrow="Not Sure Where to Start"
                title="Any of These Would Be a Great Story"
              />
              <div className="space-y-3 mt-8">
                {PROMPTS.map((prompt) => (
                  <div
                    key={prompt}
                    className="flex items-start gap-3 card card-sunken rounded-xl p-4"
                  >
                    <Quote className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <p className="text-foreground text-sm">{prompt}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="After You Submit" title="What Happens Next" />
              <div className="space-y-3 mt-8">
                {WHAT_HAPPENS.map((step, idx) => (
                  <div
                    key={step}
                    className="flex items-start gap-4 card card-sunken rounded-xl p-5"
                  >
                    <span className="font-serif font-bold text-primary shrink-0">
                      0{idx + 1}
                    </span>
                    <p className="text-foreground text-sm">{step}</p>
                  </div>
                ))}
              </div>
              <FillerImage
                src={PHOTOS.conferenceHug}
                alt="Members of the Black in Rehab community"
                wrapperClassName="aspect-16/10 rounded-3xl mt-8 group"
                zoomOnHover
              />
            </div>
          </div>
        </div>
      </section>

      {/* The form */}
      <section id="story-form" className="section bg-background scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <SectionHeading
            eyebrow="The Form"
            title="Tell Us Your Story"
            description="There is no minimum length. A paragraph is plenty."
            align="center"
            className="mb-12"
          />

          {/*
            The embedded form carries its own light styling from Cognito, so it
            sits on a deliberately light card rather than inheriting the page
            surface — otherwise it would read as a stray white block in dark mode.
          */}
          <div className="bg-white border border-border rounded-3xl p-6 md:p-10 shadow-lg shadow-black/5">
            <CognitoForm
              formKey={SHARE_FORM.key}
              formId={SHARE_FORM.id}
              fallbackUrl={SHARE_FORM.url}
              title="Black in Rehab — Share Your Story"
            />
          </div>

          <div className="mt-10 flex items-start gap-3 card p-6">
            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-muted text-sm leading-relaxed">
              Your submission goes directly to the Black in Rehab team. We will never
              publish your name, photo, or story without asking you first.{" "}
              <Link
                href="/privacy"
                className="text-primary font-semibold hover:text-primary-hover transition-colors"
              >
                Read our privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CTABand
        title="Not Ready to Write? Come Say Hello."
        description="Join the community first. Plenty of the stories we publish started as a conversation in a meetup."
        cta={{ label: "JOIN THE MOVEMENT", href: "/join-the-movement" }}
        secondaryCta={{ label: "Explore the Community", href: "/community" }}
      />
    </div>
  );
}
