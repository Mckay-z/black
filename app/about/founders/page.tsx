import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default function FoundersPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
              <Link href="/" className="hover:text-primary-hover">Home</Link>
              <span>/</span>
              <Link href="/about" className="hover:text-primary-hover">About</Link>
              <span>/</span>
              <span className="text-foreground">Meet the Founders</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6">
              Meet the <span className="text-primary">Founders</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              We&apos;re Dr. Chauntel Altidor and Nancy Yamoah—two friends, professionals, and purpose-driven leaders who believed in the power of community, representation, and service to change lives.
            </p>
          </div>
        </div>
      </section>

      {/* Profiles */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 space-y-24">
          
          {/* Founder 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-surface border border-border rounded-3xl p-8 md:p-12">
            <div className="lg:col-span-5 h-112.5 rounded-2xl overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
                alt="Dr. Chauntel Altidor" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Co-Founder & Visionary Leader</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Dr. Chauntel Altidor, OTD</h2>
              
              <div className="space-y-4 text-muted text-lg leading-relaxed mb-8">
                <p>
                  Doctor of Physical Therapy, entrepreneur, and global leader with a heart for service and a vision for transformation. Dr. Chauntel leads with purpose—creating opportunities, building bridges, and empowering professionals to change lives.
                </p>
                <p>
                  [CLIENT TO PROVIDE: Full Founder Biography for Dr. Chauntel Altidor]
                </p>
              </div>

              <div className="flex gap-4">
                <a href="#" className="inline-flex items-center gap-2 bg-background border border-border hover:border-primary px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  <LinkedInIcon className="w-4 h-4 text-primary" /> Connect on LinkedIn
                </a>
                <a href="#" className="inline-flex items-center gap-2 bg-background border border-border hover:border-primary px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  <Mail className="w-4 h-4 text-primary" /> Contact
                </a>
              </div>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-surface border border-border rounded-3xl p-8 md:p-12">
            <div className="lg:col-span-5 h-112.5 rounded-2xl overflow-hidden relative lg:order-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80" 
                alt="Nancy Yamoah" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center lg:order-1">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Co-Founder & Strategic Leader</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Nancy Yamoah, OT</h2>
              
              <div className="space-y-4 text-muted text-lg leading-relaxed mb-8">
                <p>
                  Rehabilitation professional, mentor, and community builder with a passion for people and global impact. Nancy leads with compassion and integrity—creating space for connection, collaboration, and growth.
                </p>
                <p>
                  [CLIENT TO PROVIDE: Full Founder Biography for Nancy Yamoah]
                </p>
              </div>

              <div className="flex gap-4">
                <a href="#" className="inline-flex items-center gap-2 bg-background border border-border hover:border-primary px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  <LinkedInIcon className="w-4 h-4 text-primary" /> Connect on LinkedIn
                </a>
                <a href="#" className="inline-flex items-center gap-2 bg-background border border-border hover:border-primary px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  <Mail className="w-4 h-4 text-primary" /> Contact
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
            Explore the Leadership Team
          </h2>
          <Link
            href="/about/leadership"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-background font-bold py-4 px-8 rounded-full transition-colors text-lg"
          >
            VIEW LEADERSHIP TEAM <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
