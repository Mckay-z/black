import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="py-24 md:py-32 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span>/</span>
            <span className="text-foreground">Privacy Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Privacy Policy</h1>
          <p className="text-muted">Last updated: August 10, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert">
          <div className="space-y-8 text-muted leading-relaxed">
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Introduction</h2>
              <p>
                Black in Rehab (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Information We Collect</h2>
              <p className="mb-4">We may collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, and contact information</li>
                <li>Membership and registration details</li>
                <li>Donation and payment information (processed securely by third-party providers)</li>
                <li>Communications you send to us</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To process memberships, registrations, and donations</li>
                <li>To send newsletters and updates (with your consent)</li>
                <li>To respond to inquiries and provide customer support</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Data Sharing</h2>
              <p>
                We do not sell your personal information. We may share data with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal data by contacting us at{" "}
                <a href="mailto:info@blackinrehab.org" className="text-primary hover:text-primary-hover">info@blackinrehab.org</a>.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Contact Us</h2>
              <p>
                For questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:info@blackinrehab.org" className="text-primary hover:text-primary-hover">info@blackinrehab.org</a> or visit our{" "}
                <Link href="/contact" className="text-primary hover:text-primary-hover">contact page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
