import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
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
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: November 15, 2025</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the services of Polished & Posh ("we," "our," or "us"), you accept and agree
              to be bound by these Terms of Service. If you do not agree to these terms, please do not use our
              services or visit our salon.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">2. Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Polished & Posh provides luxury nail care services including but not limited to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Classic and luxury manicures</li>
              <li>Premium pedicures</li>
              <li>Gel and acrylic nail applications</li>
              <li>Custom nail art and design</li>
              <li>Nail care treatments and spa services</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">3. Appointments and Bookings</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">3.1 Booking Requirements</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Appointments can be booked online, by phone, or in person. You must provide accurate contact
                  information when booking. We reserve the right to refuse service to anyone.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3.2 Cancellation Policy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cancellations must be made at least 24 hours in advance. Late cancellations or no-shows may
                  be subject to a cancellation fee of up to 50% of the service price. Repeated no-shows may
                  result in a requirement for prepayment or denial of future bookings.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3.3 Late Arrivals</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Please arrive on time for your appointment. If you arrive more than 15 minutes late, we may
                  need to reschedule your appointment or reduce the service time to accommodate other clients.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">4. Pricing and Payment</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">4.1 Pricing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All prices are listed in USD and are subject to change without notice. Prices displayed on our
                  website, marketing materials, or in-salon are starting prices and may vary based on the
                  complexity of the service, nail technician level, and additional products used.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">4.2 Payment Methods</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We accept cash, credit cards (Visa, MasterCard, American Express), and debit cards. Payment is
                  due at the time of service unless other arrangements have been made in advance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">4.3 Gratuity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gratuity is not included in service prices. Tips are appreciated and customary at 15-20% of the
                  service price.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">5. Health and Safety</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">5.1 Client Responsibilities</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You are responsible for disclosing any allergies, skin sensitivities, medical conditions, or
                  medications that may affect nail services. We are not liable for adverse reactions if you fail
                  to disclose relevant health information.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">5.2 Sanitation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We follow strict sanitation and sterilization protocols in accordance with state health
                  regulations. All tools are properly sanitized between clients, and we use disposable items
                  whenever possible.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">5.3 Refusal of Service</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to refuse service if we believe a client has an infection, contagious
                  condition, or if providing the service would be unsafe or harmful.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">6. Liability and Warranties</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">6.1 Service Guarantee</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to provide excellent service and quality results. If you are not satisfied with your
                  service, please notify us within 48 hours, and we will work to resolve the issue. We may offer
                  a complimentary repair or adjustment at our discretion.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">6.2 Limitation of Liability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, Polished & Posh shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages resulting from the use of our services.
                  Our total liability shall not exceed the amount you paid for the specific service in question.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">6.3 Personal Property</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are not responsible for lost, stolen, or damaged personal items. Please keep valuables secure
                  and with you at all times.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">7. Conduct</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We expect all clients to behave respectfully toward our staff and other clients. We reserve the right
              to refuse service or ask clients to leave if they:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Are abusive, threatening, or harassing toward staff or other clients</li>
              <li>Are intoxicated or under the influence of drugs</li>
              <li>Violate our policies or disrupt the salon environment</li>
              <li>Engage in inappropriate behavior</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">8. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on our website, including text, graphics, logos, images, and software, is the property
              of Polished & Posh or its licensors and is protected by copyright and trademark laws. You may not
              reproduce, distribute, or create derivative works without our written permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">9. Photography and Social Media</h2>
            <p className="text-muted-foreground leading-relaxed">
              By visiting our salon, you consent to being photographed for marketing and promotional purposes
              unless you explicitly opt out. We may share photos of nail work (without identifying information)
              on our website and social media channels. If you do not wish to be photographed, please inform
              your technician.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">10. Gift Cards and Promotions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">10.1 Gift Cards</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gift cards are non-refundable and cannot be redeemed for cash except where required by law.
                  Lost or stolen gift cards cannot be replaced. Gift cards have no expiration date.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">10.2 Promotions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Promotional offers cannot be combined with other discounts unless explicitly stated. We reserve
                  the right to modify or cancel promotions at any time.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">11. Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your use of our services is also governed by our Privacy Policy. Please review our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>{" "}
              to understand how we collect, use, and protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">12. Modifications to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective
              immediately upon posting to our website. Your continued use of our services after changes are posted
              constitutes your acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">13. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the State
              of California, without regard to its conflict of law provisions. Any disputes arising from these
              terms or your use of our services shall be resolved in the courts of Los Angeles County, California.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">14. Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms of Service is found to be unenforceable or invalid, that provision
              shall be limited or eliminated to the minimum extent necessary so that these terms shall otherwise
              remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">15. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-muted p-6 rounded-lg space-y-2">
              <p className="font-medium">Polished & Posh</p>
              <p className="text-muted-foreground">123 Luxury Lane</p>
              <p className="text-muted-foreground">Beverly Hills, CA 90210</p>
              <p className="text-muted-foreground">Phone: (555) 123-4567</p>
              <p className="text-muted-foreground">Email: info@polishedandposh.com</p>
            </div>
          </section>

          <section className="bg-muted p-6 rounded-lg">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Acknowledgment:</strong> By using our services, you acknowledge that you have read, understood,
              and agree to be bound by these Terms of Service.
            </p>
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
