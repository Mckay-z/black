import Link from "next/link";
import { ArrowRight, Newspaper, FileText, Camera, Mic } from "lucide-react";

export default function MediaPressPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
              <Link href="/" className="hover:text-primary-hover">Home</Link>
              <span>/</span>
              <Link href="/about" className="hover:text-primary-hover">About</Link>
              <span>/</span>
              <span className="text-foreground">Media & Press</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6">
              Media & <span className="text-primary">Press</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              Resources for media, journalists, and content creators covering Black in Rehab&apos;s mission, work, and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Press Kit + Contact */}
      <section className="pt-12 md:pt-16 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card p-8 card-hover flex flex-col">
              <FileText className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-3">Press Kit</h3>
              <p className="text-muted text-sm leading-relaxed flex-1 mb-8">
                Download our official press kit with logos, brand assets, organizational facts, and leadership bios.
              </p>
              <Link href="/contact" className="link-arrow">
                Request Press Kit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="card p-8 card-hover flex flex-col">
              <Camera className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-3">Photo Gallery</h3>
              <p className="text-muted text-sm leading-relaxed flex-1 mb-8">
                Browse and download high-resolution photos from our events, global experiences, and community programs.
              </p>
              <Link href="/contact" className="link-arrow">
                Request Photos <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="card p-8 card-hover flex flex-col">
              <Mic className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-3">Speaker Requests</h3>
              <p className="text-muted text-sm leading-relaxed flex-1 mb-8">
                Interested in having our founders or team members speak at your event, podcast, or conference?
              </p>
              <Link
                href="/contact"
                className="link-arrow"
              >
                Submit a Request <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* No press coverage to list yet.

              This was three cards reading "[Publication Name] — CLIENT TO
              PROVIDE" / "[Article Headline — CLIENT TO PROVIDE]", each behind
              a "Read Article" link pointing at "#". An empty state is the
              honest version until there is real coverage to link to. */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8">In the News</h2>
            <div className="card card-sunken p-10 text-center">
              <Newspaper className="w-10 h-10 text-primary mx-auto mb-5" aria-hidden="true" />
              <p className="text-foreground font-bold mb-2">Coverage coming soon</p>
              <p className="text-muted text-sm leading-relaxed max-w-md mx-auto">
                Press mentions and interviews will be collected here. Writing about
                our work? We would love to hear from you.
              </p>
              <Link href="/contact" className="link-arrow mt-8 justify-center">
                Get in touch <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
