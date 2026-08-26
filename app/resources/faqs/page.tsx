import Link from "next/link";
import { ArrowRight, ChevronDown, Mail } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import { PHOTOS } from "@/lib/images";

type FaqGroup = {
  id: string;
  category: string;
  items: { q: string; a: string }[];
};

const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "membership",
    category: "Membership",
    items: [
      {
        q: "Who can join Black in Rehab?",
        a: "Membership is open to physical therapists, occupational therapists, speech-language pathologists, assistants, and students in accredited programs. Allied professionals and supporters are welcome in our supporter tier.",
      },
      {
        q: "Is student membership really free?",
        a: "Yes. Student membership costs nothing and includes the online community, mentorship matching, and priority access to scholarships. It is not a trial period.",
      },
      {
        q: "Can I join if I am not based in the United States?",
        a: "Absolutely. We have members across the Caribbean, the UK, Canada, and West Africa, and our online programming runs on times that account for that.",
      },
      {
        q: "How do I cancel or change my membership?",
        a: "Email us and we will handle it the same week. There is no cancellation fee and no minimum term.",
      },
    ],
  },
  {
    id: "experiences",
    category: "Experiences & Travel",
    items: [
      {
        q: "Do I need to be licensed to join a global experience?",
        a: "No. Students, assistants, and licensed clinicians all travel with us. Clinical responsibilities are assigned according to your training and the host country's requirements.",
      },
      {
        q: "Is airfare included in the trip cost?",
        a: "Airfare is not included. Trip pricing covers accommodation, ground transport, group meals, clinic supplies, and cultural excursions.",
      },
      {
        q: "Are payment plans available?",
        a: "Yes. Most participants pay across three to five installments. Students can also apply for travel scholarship support.",
      },
      {
        q: "What happens if I need to cancel?",
        a: "Deposits are non-refundable but transferable to a future trip within 24 months. Full terms are provided in your registration packet.",
      },
    ],
  },
  {
    id: "scholarships",
    category: "Scholarships & Support",
    items: [
      {
        q: "When do scholarship applications open?",
        a: "Our main cycle opens in January and closes March 31 each year. Emergency grants are reviewed on a rolling basis throughout the year.",
      },
      {
        q: "Can I apply for more than one scholarship?",
        a: "One application covers every award you are eligible for. There is no advantage to submitting more than once.",
      },
      {
        q: "How are recipients selected?",
        a: "A review committee of clinicians and faculty scores applications on academic standing, financial need, community service, and the personal statement.",
      },
    ],
  },
  {
    id: "giving",
    category: "Giving & Sponsorship",
    items: [
      {
        q: "Are donations tax deductible?",
        a: "Yes, for US donors. Black in Rehab Foundation is a registered nonprofit and a receipt is issued for every gift.",
      },
      {
        q: "Can I direct my gift to a specific program?",
        a: "You can restrict a gift to scholarships, mission projects, or student support. Unrestricted gifts are the most useful, but restricted giving is always honored.",
      },
      {
        q: "How do sponsorships differ from donations?",
        a: "Sponsorships are organizational partnerships with defined benefits and recognition. Donations are individual gifts. Both fund the same programs.",
      },
    ],
  },
];

export default function FaqsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "FAQs" },
        ]}
        title="Frequently Asked"
        highlight="Questions"
        description="Membership, travel, scholarships, and giving — the questions we get most, answered plainly."
        image={PHOTOS.conferenceAudience}
      />

      {/* Jump links */}
      <section className="py-6 bg-surface/90 border-b border-border sticky top-0 z-30 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-3">
            {FAQ_GROUPS.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="text-sm font-medium text-muted hover:text-primary border border-border hover:border-primary/60 rounded-full px-5 py-2 transition-colors"
              >
                {group.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ groups */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-20">
            {FAQ_GROUPS.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-40">
                <SectionHeading
                  eyebrow={group.category}
                  title={`${group.category} Questions`}
                  className="mb-10"
                />
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <details
                      key={item.q}
                      className="group bg-surface border border-border rounded-2xl overflow-hidden transition-colors hover:border-primary/50 open:border-primary/50"
                    >
                      <summary className="flex items-center justify-between gap-6 cursor-pointer list-none p-6 md:p-7">
                        <h3 className="font-bold text-foreground text-base md:text-lg">
                          {item.q}
                        </h3>
                        <ChevronDown className="w-5 h-5 text-primary shrink-0 transition-transform duration-300 group-open:rotate-180" />
                      </summary>
                      <div className="px-6 md:px-7 pb-6 md:pb-7 -mt-1">
                        <p className="text-muted leading-relaxed">{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still stuck */}
          <div className="mt-20 bg-surface border border-border rounded-3xl p-10 md:p-12 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Still have a question?
            </h2>
            <p className="text-muted leading-relaxed mb-8 max-w-lg mx-auto">
              Send it over. A real person on our team reads every message and we usually reply
              within two business days.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors"
            >
              CONTACT US <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready When You Are"
        description="Membership takes about three minutes and opens every program on this site."
        cta={{ label: "JOIN THE MOVEMENT", href: "/join-the-movement" }}
        secondaryCta={{ label: "Browse Resources", href: "/resources" }}
      />
    </div>
  );
}
