import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, Mail, Phone, User } from "lucide-react";
import bookingImage from "@assets/generated_images/Nail_care_products_display_67a00fb7.png";

export default function Booking() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Appointment Requested!",
      description: "We'll contact you shortly to confirm your booking.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      service: "",
      notes: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="booking"
      className="py-16 md:py-20 lg:py-24 bg-background"
      data-testid="section-booking"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary mb-6"
            data-testid="text-booking-title"
          >
            Book Your Appointment
          </h2>
          <p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-booking-subtitle"
          >
            Reserve your spot for a luxurious nail care experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <Card className="border-card-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label
                    htmlFor="name"
                    className="flex items-center gap-2 mb-2"
                  >
                    <User className="w-4 h-4 text-primary" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                    data-testid="input-name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="email"
                      className="flex items-center gap-2 mb-2"
                    >
                      <Mail className="w-4 h-4 text-primary" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      required
                      data-testid="input-email"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="phone"
                      className="flex items-center gap-2 mb-2"
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      required
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="date"
                      className="flex items-center gap-2 mb-2"
                    >
                      <Calendar className="w-4 h-4 text-primary" />
                      Preferred Date
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      data-testid="input-date"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="time"
                      className="flex items-center gap-2 mb-2"
                    >
                      <Clock className="w-4 h-4 text-primary" />
                      Preferred Time
                    </Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      data-testid="input-time"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service" className="mb-2 block">
                    Service Type
                  </Label>
                  <Input
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="e.g., Classic Manicure, Gel Nails, Nail Art"
                    required
                    data-testid="input-service"
                  />
                </div>

                <div>
                  <Label htmlFor="notes" className="mb-2 block">
                    Special Requests (Optional)
                  </Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any specific requests or preferences?"
                    rows={4}
                    data-testid="input-notes"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                  data-testid="button-submit-booking"
                >
                  {isSubmitting ? "Submitting..." : "Request Appointment"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="hidden lg:block">
            <img
              src={bookingImage}
              alt="Luxury nail care products"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
