import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, Mail, Phone, User } from "lucide-react";
import { trackBookingSubmit } from "@/lib/analytics";
import {
  sendBookingEmail,
  validatePhone,
  validateEmail,
  validateFutureDate,
  formatPhoneNumber,
  getMinBookingDate,
  getMaxBookingDate,
} from "@/lib/emailService";
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
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validate name
    if (formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name";
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate phone
    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Validate date
    if (!formData.date) {
      newErrors.date = "Please select a date";
    } else if (!validateFutureDate(formData.date)) {
      newErrors.date = "Please select a future date";
    }

    // Validate time
    if (!formData.time) {
      newErrors.time = "Please select a time";
    }

    // Validate service
    if (formData.service.trim().length < 2) {
      newErrors.service = "Please specify the service you'd like";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      toast({
        title: "Please check your information",
        description: "Some fields need your attention",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send booking email
      const result = await sendBookingEmail(formData);

      if (result.success) {
        // Track successful booking
        trackBookingSubmit(formData.service);

        toast({
          title: "Appointment Requested!",
          description: result.message,
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          service: "",
          notes: "",
        });
        setErrors({});
      }
    } catch (error) {
      console.error("Booking submission error:", error);
      toast({
        title: "Something went wrong",
        description:
          "Please try again or call us at (555) 123-4567 to book your appointment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handlePhoneBlur = () => {
    if (formData.phone && validatePhone(formData.phone)) {
      setFormData((prev) => ({
        ...prev,
        phone: formatPhoneNumber(prev.phone),
      }));
    }
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
                    className={errors.name ? "border-destructive" : ""}
                    data-testid="input-name"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name}</p>
                  )}
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
                      className={errors.email ? "border-destructive" : ""}
                      data-testid="input-email"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email}</p>
                    )}
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
                      onBlur={handlePhoneBlur}
                      placeholder="(555) 123-4567"
                      required
                      className={errors.phone ? "border-destructive" : ""}
                      data-testid="input-phone"
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                    )}
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
                      min={getMinBookingDate()}
                      max={getMaxBookingDate()}
                      required
                      className={errors.date ? "border-destructive" : ""}
                      data-testid="input-date"
                    />
                    {errors.date && (
                      <p className="text-sm text-destructive mt-1">{errors.date}</p>
                    )}
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
                      min="09:00"
                      max="19:00"
                      required
                      className={errors.time ? "border-destructive" : ""}
                      data-testid="input-time"
                    />
                    {errors.time && (
                      <p className="text-sm text-destructive mt-1">{errors.time}</p>
                    )}
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
                    className={errors.service ? "border-destructive" : ""}
                    data-testid="input-service"
                  />
                  {errors.service && (
                    <p className="text-sm text-destructive mt-1">{errors.service}</p>
                  )}
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
