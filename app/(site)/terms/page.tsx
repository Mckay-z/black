import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="py-24 md:py-32 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span>/</span>
            <span className="text-foreground">Terms of Use</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Terms of Use</h1>
          <p className="text-muted">Last updated: August 10, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-8 text-muted leading-relaxed">
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using the Black in Rehab website, you accept and agree to be bound by these Terms of Use. If you do not agree, please do not use our website or services.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Use of Website</h2>
              <p className="mb-4">You agree to use this website only for lawful purposes. You may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the site in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems or data</li>
                <li>Transmit harmful code, spam, or malicious content</li>
                <li>Reproduce or distribute our content without written permission</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Membership & Registrations</h2>
              <p>
                Membership, event registrations, and scholarship applications are subject to additional terms communicated at the time of enrollment. Black in Rehab reserves the right to approve or deny applications at its discretion.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Donations</h2>
              <p>
                All donations are final and non-refundable unless required by law. Donation receipts will be provided for tax purposes where applicable.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos, and images — is the property of Black in Rehab and protected by copyright and trademark laws.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p>
                Black in Rehab provides this website and its content on an &quot;as is&quot; basis. We make no warranties, express or implied, and shall not be liable for any damages arising from your use of the site.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Contact</h2>
              <p>
                Questions about these terms? Contact us at{" "}
                <a href="mailto:info@blackinrehab.org" className="text-primary hover:text-primary-hover">info@blackinrehab.org</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
