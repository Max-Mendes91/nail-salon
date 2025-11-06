import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Luxury_nail_salon_interior_hero_0ef024f0.png";

export default function Hero() {
  const handleBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
          data-testid="text-hero-title"
        >
          Polished & Posh
        </h1>
        <p
          className="text-xl md:text-2xl text-white/90 mb-8 font-light"
          data-testid="text-hero-subtitle"
        >
          Where Elegance Meets Expert Nail Care
        </p>
        <p
          className="text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto"
          data-testid="text-hero-description"
        >
          Experience luxury nail services in a serene, sophisticated atmosphere.
          From classic manicures to intricate nail art, we bring your vision to
          life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-base backdrop-blur-sm bg-primary/90 hover:bg-primary border border-primary-border"
            onClick={handleBooking}
            data-testid="button-book-appointment"
          >
            Book Appointment
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20"
            onClick={() => {
              const servicesSection = document.getElementById("services");
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            data-testid="button-view-services"
          >
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
}
