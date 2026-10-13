import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, Clock, Handshake } from "lucide-react";

import SiteForm from "@/components/forms/SiteForm";
import { getSiteSettings } from "@/lib/cms";
import { PHOTOS } from "@/lib/images";
import PageHero from "@/components/ui/PageHero";
import PhotoCard from "@/components/ui/PhotoCard";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";

export const metadata: Metadata = {
  title: "Contact Us | Black in Rehab Foundation",
  description:
    "Questions, partnership ideas, speaking requests — get in touch with the Black in Rehab Foundation team.",
};

const FALLBACK_EMAIL = "info@blackinrehab.com";

/**
 * Contact page.
 *
 * Phone and location previously rendered the literal text "[CLIENT TO
 * PROVIDE]" to visitors. They now come from Site Settings in the dashboard,
 * and each card is omitted entirely while its value is blank — an absent
 * phone number is better than a placeholder standing in for one.
 */
export default async function ContactPage() {
  const settings = await getSiteSettings();
  const email = settings?.email || FALLBACK_EMAIL;

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        page="/contact"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title="Let's"
        highlight="Connect"
        description="Whether you have a question, a partnership idea, a speaking request, or just want to say hello — we'd love to hear from you."
        image={PHOTOS.ghanaAirport}
        imagePosition="65% 35%"
      />

      {/* Contact grid */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="mb-10">
                <p className="eyebrow mb-5">Write to Us</p>
                <h2 className="display-2 text-foreground">Send Us a Message</h2>
              </div>

              <SiteForm
                formType="contact"
                submitLabel="SEND MESSAGE"
                success={{
                  title: "Message Sent",
                  message:
                    "Thank you for reaching out. A member of the team will get back to you shortly.",
                  backHref: "/",
                  backLabel: "Back to Home",
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-foreground mb-2">First Name</label>
                    <input id="firstName" name="firstName" type="text" required autoComplete="given-name" placeholder="Your first name" className="contact-input w-full bg-surface rounded-xl px-4 py-3 transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-foreground mb-2">Last Name</label>
                    <input id="lastName" name="lastName" type="text" required autoComplete="family-name" placeholder="Your last name" className="contact-input w-full bg-surface rounded-xl px-4 py-3 transition-colors" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                  <input id="email" name="email" type="email" required autoComplete="email" placeholder="your@email.com" className="contact-input w-full bg-surface rounded-xl px-4 py-3 transition-colors" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                  <select id="subject" name="subject" className="contact-input w-full bg-surface rounded-xl px-4 py-3 transition-colors">
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership / Sponsorship</option>
                    <option value="speaking">Speaking Request</option>
                    <option value="media">Media / Press</option>
                    <option value="membership">Membership</option>
                    <option value="experiences">Trips &amp; Programs</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us more..."
                    className="contact-input w-full bg-surface rounded-xl px-4 py-3 transition-colors resize-none"
                  />
                </div>
              </SiteForm>
            </div>

            {/* Contact details */}
            <div className="lg:col-span-2 space-y-8">
              {/* A photograph above the details, so the column carries some
                  of the community and not only contact cards. Hidden on
                  phones, where it would push the details below the fold. */}
              <div className="img-filler hidden aspect-4/3 overflow-hidden rounded-[var(--radius-panel)] shadow-float lg:block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={PHOTOS.ghanaLawn}
                  alt="The Black in Rehab group together in Ghana"
                  loading="lazy"
                  className="photo h-full w-full object-cover"
                />
              </div>

              <h2 className="text-2xl font-serif font-bold text-foreground">Get in Touch</h2>

              <div className="flex items-start gap-4 card p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Email</h3>
                  <a href={`mailto:${email}`} className="text-muted hover:text-primary transition-colors text-sm">
                    {email}
                  </a>
                </div>
              </div>

              {settings?.phone && (
                <div className="flex items-start gap-4 card p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Phone</h3>
                    <a href={`tel:${settings.phone.replace(/[^\d+]/g, "")}`} className="text-muted hover:text-primary transition-colors text-sm">
                      {settings.phone}
                    </a>
                  </div>
                </div>
              )}

              {settings?.address && (
                <div className="flex items-start gap-4 card p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Location</h3>
                    <p className="text-muted text-sm whitespace-pre-line">{settings.address}</p>
                  </div>
                </div>
              )}

              {settings?.officeHours && (
                <div className="flex items-start gap-4 card p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Office Hours</h3>
                    <p className="text-muted text-sm">{settings.officeHours}</p>
                  </div>
                </div>
              )}

              <PhotoCard
                image={PHOTOS.retreatGroupFormal}
                icon={Handshake}
                title="Partnerships & Sponsorships"
                href="/support/sponsors"
                cta="View partnership decks"
                imageClassName="h-40"
              >
                Interested in partnering with Black in Rehab? We offer a range of sponsorship opportunities that align your brand with our mission.
              </PhotoCard>
            </div>
          </div>
        </div>
      </section>

      <PhotoSplitBand image={PHOTOS.ghanaCastleGroup} imageSide="left">
        <p className="eyebrow eyebrow-on-dark mb-5">Get Involved</p>
        <h2 className="display-2 text-white">Ready to Take Part?</h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
          Students, professionals, partners, and sponsors — see every way into the community.
        </p>
        <Link href="/get-involved" className="btn btn-primary btn-lg group mt-9">
          GET INVOLVED <ArrowRight className="btn-arrow h-5 w-5" />
        </Link>
      </PhotoSplitBand>
    </div>
  );
}
