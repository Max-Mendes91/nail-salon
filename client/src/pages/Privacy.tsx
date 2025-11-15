import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-primary">
            Polished & Posh
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: November 15, 2025</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Polished & Posh ("we," "our," or "us"). We are committed to protecting your personal
              information and your right to privacy. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Book an appointment through our website</li>
              <li>Contact us via phone, email, or contact form</li>
              <li>Subscribe to our newsletter or promotional emails</li>
              <li>Interact with our social media pages</li>
              <li>Visit our physical salon location</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Personal Information:</strong> Name, email address, phone number, appointment preferences,
              service history, and payment information.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              <strong>Automatically Collected Information:</strong> IP address, browser type, device information,
              pages visited, and time spent on our website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Process and manage your appointments</li>
              <li>Send appointment confirmations and reminders</li>
              <li>Communicate with you about our services and promotions</li>
              <li>Improve our website and services</li>
              <li>Process payments and prevent fraud</li>
              <li>Comply with legal obligations</li>
              <li>Analyze website usage and customer preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Service Providers:</strong> Third-party companies that help us operate our business
              (payment processors, email service providers, appointment scheduling systems)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. However, no method
              of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">6. Your Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise these rights, please contact us at privacy@polishedandposh.com or call (555) 123-4567.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience on our website.
              You can control cookies through your browser settings. Please note that disabling cookies may
              affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">8. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy
              practices of these external sites. We encourage you to review their privacy policies before
              providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not intended for individuals under the age of 13. We do not knowingly collect
              personal information from children. If you believe we have collected information from a child,
              please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">10. California Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              California residents have specific rights under the California Consumer Privacy Act (CCPA),
              including the right to know what personal information is collected, the right to delete personal
              information, and the right to opt-out of the sale of personal information. We do not sell personal
              information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting
              the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review
              this Privacy Policy periodically.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">12. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-muted p-6 rounded-lg space-y-2">
              <p className="font-medium">Polished & Posh</p>
              <p className="text-muted-foreground">123 Luxury Lane</p>
              <p className="text-muted-foreground">Beverly Hills, CA 90210</p>
              <p className="text-muted-foreground">Phone: (555) 123-4567</p>
              <p className="text-muted-foreground">Email: privacy@polishedandposh.com</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Polished & Posh. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
