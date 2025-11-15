import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { SiInstagram } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-20 lg:py-24 bg-secondary/30"
      data-testid="section-contact"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary mb-6"
            data-testid="text-contact-title"
          >
            Visit Us
          </h2>
          <p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-contact-subtitle"
          >
            We look forward to welcoming you to our salon
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-card-border" data-testid="card-location">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Location</h3>
              <p className="text-sm text-muted-foreground">
                123 Luxury Lane
                <br />
                Beverly Hills, CA 90210
              </p>
            </CardContent>
          </Card>

          <Card className="border-card-border" data-testid="card-phone">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Phone</h3>
              <p className="text-sm text-muted-foreground">
                (555) 123-4567
                <br />
                Call for appointments
              </p>
            </CardContent>
          </Card>

          <Card className="border-card-border" data-testid="card-hours">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Hours</h3>
              <p className="text-sm text-muted-foreground">
                Mon-Sat: 9AM - 7PM
                <br />
                Sunday: 10AM - 6PM
              </p>
            </CardContent>
          </Card>

          <Card className="border-card-border" data-testid="card-social">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <SiInstagram className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Follow Us</h3>
              <p className="text-sm text-muted-foreground">
                @polishedandposh
                <br />
                See our latest work
              </p>
            </CardContent>
          </Card>
        </div>

        <Card
          className="mt-8 border-card-border overflow-hidden"
          data-testid="card-map"
        >
          <CardContent className="p-0">
            <div className="w-full h-80 relative">
              {/* Google Maps Embed - Business owners should replace the src URL with their own Google Maps embed link */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8619633456246!2d-118.40292492346447!3d34.07357177315567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0x4f8b067b88c9d801!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Polished & Posh Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
