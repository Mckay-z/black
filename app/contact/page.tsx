import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span>/</span>
            <span className="text-foreground">Contact</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6">
            Let&apos;s <span className="text-primary">Connect</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl">
            Whether you have a question, a partnership idea, a speaking request, or just want to say hello — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">First Name</label>
                    <input type="text" placeholder="Your first name" className="contact-input w-full bg-surface rounded-xl px-4 py-3 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Last Name</label>
                    <input type="text" placeholder="Your last name" className="contact-input w-full bg-surface rounded-xl px-4 py-3 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                  <input type="email" placeholder="your@email.com" className="contact-input w-full bg-surface rounded-xl px-4 py-3 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                  <select className="contact-input w-full bg-surface rounded-xl px-4 py-3 transition-colors">
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership / Sponsorship</option>
                    <option value="speaking">Speaking Request</option>
                    <option value="media">Media / Press</option>
                    <option value="membership">Membership</option>
                    <option value="experiences">Programs & Experiences</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Tell us more..."
                    className="contact-input w-full bg-surface rounded-xl px-4 py-3 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-on-primary font-bold py-4 px-8 rounded-full transition-colors text-lg"
                >
                  SEND MESSAGE <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Get in Touch</h2>
              <div className="flex items-start gap-4 bg-surface border border-border rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Email</h3>
                  <a href="mailto:info@blackinrehab.org" className="text-muted hover:text-primary transition-colors text-sm">
                    info@blackinrehab.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-surface border border-border rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Phone</h3>
                  <p className="text-muted text-sm">[CLIENT TO PROVIDE]</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-surface border border-border rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Location</h3>
                  <p className="text-muted text-sm">[CLIENT TO PROVIDE]</p>
                </div>
              </div>

              <div className="section-dark bg-secondary border border-border rounded-2xl p-8 mt-8">
                <h3 className="font-bold text-white mb-3">Partnerships & Sponsorships</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  Interested in partnering with Black in Rehab? We offer a range of sponsorship opportunities that align your brand with our mission.
                </p>
                <Link href="/partnerships" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-hover transition-colors">
                  VIEW PARTNERSHIP DECKS <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
