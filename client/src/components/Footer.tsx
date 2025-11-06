import { SiInstagram, SiFacebook, SiTiktok } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-card border-t border-card-border py-12"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif font-bold text-primary mb-4">
              Polished & Posh
            </h3>
            <p className="text-sm text-muted-foreground">
              Luxury nail care in an elegant, sophisticated atmosphere.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("gallery")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-gallery"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("booking")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-booking"
                >
                  Book Appointment
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover-elevate active-elevate-2 transition-all"
                aria-label="Instagram"
                data-testid="link-social-instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover-elevate active-elevate-2 transition-all"
                aria-label="Facebook"
                data-testid="link-social-facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover-elevate active-elevate-2 transition-all"
                aria-label="TikTok"
                data-testid="link-social-tiktok"
              >
                <SiTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Polished & Posh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
