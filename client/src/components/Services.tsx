import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Brush, Palette, Hand } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Classic Manicure",
    description:
      "Traditional nail care with shaping, cuticle treatment, and polish application.",
    price: "From $35",
    icon: Hand,
  },
  {
    id: 2,
    title: "Luxury Pedicure",
    description:
      "Complete foot spa treatment with exfoliation, massage, and polish.",
    price: "From $55",
    icon: Sparkles,
  },
  {
    id: 3,
    title: "Gel & Acrylics",
    description:
      "Long-lasting gel polish or elegant acrylic extensions for stunning nails.",
    price: "From $65",
    icon: Brush,
  },
  {
    id: 4,
    title: "Nail Art Design",
    description:
      "Custom artistic designs from minimalist to intricate patterns.",
    price: "From $25",
    icon: Palette,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary/30 relative"
      data-testid="section-services"
    >
      {/* Decorative Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary mb-6 animate-fade-in-up"
            data-testid="text-services-title"
          >
            Our Services
          </h2>
          <p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-1"
            data-testid="text-services-subtitle"
          >
            Premium nail care services tailored to your unique style and
            preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className={`hover-lift hover-shine transition-all duration-300 border-card-border bg-card/50 backdrop-blur-sm animate-fade-in-up stagger-${index + 2}`}
              data-testid={`card-service-${service.id}`}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-lg hover-scale">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3
                  className="text-xl md:text-2xl font-serif font-semibold mb-3 text-foreground"
                  data-testid={`text-service-title-${service.id}`}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm text-muted-foreground mb-4 leading-relaxed"
                  data-testid={`text-service-description-${service.id}`}
                >
                  {service.description}
                </p>
                <p
                  className="text-lg font-bold gradient-text"
                  data-testid={`text-service-price-${service.id}`}
                >
                  {service.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}
