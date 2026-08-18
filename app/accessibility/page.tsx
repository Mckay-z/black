import Link from "next/link";

export default function AccessibilityPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="py-24 md:py-32 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span>/</span>
            <span className="text-foreground">Accessibility</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Accessibility Statement</h1>
          <p className="text-muted">Last updated: August 10, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-8 text-muted leading-relaxed">
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Our Commitment</h2>
              <p>
                Black in Rehab is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards to make our website usable by all visitors.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Conformance Status</h2>
              <p>
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible for people with disabilities and user-friendly for everyone.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Accessibility Features</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Semantic HTML structure for screen reader compatibility</li>
                <li>Keyboard navigable navigation and interactive elements</li>
                <li>Sufficient color contrast between text and backgrounds</li>
                <li>Descriptive alt text for meaningful images</li>
                <li>Responsive design for various screen sizes and zoom levels</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Known Limitations</h2>
              <p>
                Despite our efforts, some content may not yet be fully accessible. We are actively working to identify and resolve any accessibility barriers on our site.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Feedback & Assistance</h2>
              <p>
                If you encounter accessibility barriers on our website or need assistance accessing any content, please contact us. We welcome your feedback and will make every effort to accommodate your needs.
              </p>
              <p className="mt-4">
                Email:{" "}
                <a href="mailto:info@blackinrehab.org" className="text-primary hover:text-primary-hover">info@blackinrehab.org</a>
                <br />
                Or visit our{" "}
                <Link href="/contact" className="text-primary hover:text-primary-hover">contact page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
