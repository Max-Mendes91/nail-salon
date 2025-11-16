import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, Mail, Phone, User, AlertCircle, Sparkles } from "lucide-react";
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
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email address is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate phone - exactly 10 digits
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    // Validate date
    if (!formData.date) {
      newErrors.date = "Please select an appointment date";
    } else if (!validateFutureDate(formData.date)) {
      newErrors.date = "Please select a future date";
    }

    // Validate time
    if (!formData.time) {
      newErrors.time = "Please select an appointment time";
    }

    // Validate service
    if (!formData.service.trim()) {
      newErrors.service = "Please specify the service you'd like";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setTouched(allTouched);

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
        setTouched({});
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
    if (errors[name] && touched[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));

    // Format phone number on blur
    if (field === 'phone' && formData.phone && validatePhone(formData.phone)) {
      setFormData((prev) => ({
        ...prev,
        phone: formatPhoneNumber(prev.phone),
      }));
    }

    // Validate single field
    const newErrors = { ...errors };

    if (field === 'name') {
      if (!formData.name.trim()) {
        newErrors.name = "Please enter your full name";
      } else if (formData.name.trim().length < 2) {
        newErrors.name = "Name must be at least 2 characters";
      } else {
        delete newErrors.name;
      }
    }

    if (field === 'email') {
      if (!formData.email) {
        newErrors.email = "Email address is required";
      } else if (!validateEmail(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      } else {
        delete newErrors.email;
      }
    }

    if (field === 'phone') {
      if (!formData.phone) {
        newErrors.phone = "Phone number is required";
      } else if (!validatePhone(formData.phone)) {
        newErrors.phone = "Phone number must be exactly 10 digits";
      } else {
        delete newErrors.phone;
      }
    }

    if (field === 'date') {
      if (!formData.date) {
        newErrors.date = "Please select an appointment date";
      } else if (!validateFutureDate(formData.date)) {
        newErrors.date = "Please select a future date";
      } else {
        delete newErrors.date;
      }
    }

    if (field === 'time' && !formData.time) {
      newErrors.time = "Please select an appointment time";
    } else if (field === 'time') {
      delete newErrors.time;
    }

    if (field === 'service' && !formData.service.trim()) {
      newErrors.service = "Please specify the service you'd like";
    } else if (field === 'service') {
      delete newErrors.service;
    }

    setErrors(newErrors);
  };

  const showError = (field: string) => touched[field] && errors[field];

  return (
    <section
      id="booking"
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-secondary/30 to-background relative"
      data-testid="section-booking"
    >
      {/* Decorative Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary"
              data-testid="text-booking-title"
            >
              Book Your Appointment
            </h2>
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-booking-subtitle"
          >
            Reserve your spot for a luxurious nail care experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <Card className="border-card-border bg-card/50 backdrop-blur-sm hover-lift">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <Label
                    htmlFor="name"
                    className="flex items-center gap-2 mb-2 text-base"
                  >
                    <User className="w-4 h-4 text-primary" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    placeholder="Jane Doe"
                    className={`transition-all ${showError('name') ? "border-destructive focus:border-destructive" : ""}`}
                    data-testid="input-name"
                  />
                  {showError('name') && (
                    <div className="error-message">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="email"
                      className="flex items-center gap-2 mb-2 text-base"
                    >
                      <Mail className="w-4 h-4 text-primary" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur('email')}
                      placeholder="example@email.com"
                      className={`transition-all ${showError('email') ? "border-destructive focus:border-destructive" : ""}`}
                      data-testid="input-email"
                    />
                    {showError('email') && (
                      <div className="error-message">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="phone"
                      className="flex items-center gap-2 mb-2 text-base"
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={() => handleBlur('phone')}
                      placeholder="+48 000 000 000"
                      className={`transition-all ${showError('phone') ? "border-destructive focus:border-destructive" : ""}`}
                      data-testid="input-phone"
                    />
                    {showError('phone') && (
                      <div className="error-message">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="date"
                      className="flex items-center gap-2 mb-2 text-base"
                    >
                      <Calendar className="w-4 h-4 text-primary" />
                      Preferred Date *
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      onBlur={() => handleBlur('date')}
                      min={getMinBookingDate()}
                      max={getMaxBookingDate()}
                      className={`transition-all ${showError('date') ? "border-destructive focus:border-destructive" : ""}`}
                      data-testid="input-date"
                    />
                    {showError('date') && (
                      <div className="error-message">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.date}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="time"
                      className="flex items-center gap-2 mb-2 text-base"
                    >
                      <Clock className="w-4 h-4 text-primary" />
                      Preferred Time *
                    </Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                      onBlur={() => handleBlur('time')}
                      min="09:00"
                      max="19:00"
                      className={`transition-all ${showError('time') ? "border-destructive focus:border-destructive" : ""}`}
                      data-testid="input-time"
                    />
                    {showError('time') && (
                      <div className="error-message">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.time}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="service" className="mb-2 block text-base">
                    Service Type *
                  </Label>
                  <Input
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onBlur={() => handleBlur('service')}
                    placeholder="Classic Manicure, Gel Nails, Nail Art..."
                    className={`transition-all ${showError('service') ? "border-destructive focus:border-destructive" : ""}`}
                    data-testid="input-service"
                  />
                  {showError('service') && (
                    <div className="error-message">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.service}</span>
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="notes" className="mb-2 block text-base">
                    Special Requests (Optional)
                  </Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any specific requests or preferences?"
                    rows={4}
                    className="resize-none"
                    data-testid="input-notes"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full hover-lift hover-glow transition-all duration-300"
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
              className="w-full h-auto rounded-lg shadow-2xl hover-scale transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Decorative Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}
