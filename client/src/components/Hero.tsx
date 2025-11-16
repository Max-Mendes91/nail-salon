import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import heroImage from "@assets/generated_images/Luxury_nail_salon_interior_hero_0ef024f0.png";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0 parallax-slow"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Gradient Overlay with Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-black/60 to-pink-900/80" />

        {/* Radial Gradient Accent */}
        <div className="absolute inset-0 gradient-radial opacity-30" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 animate-fade-in-up"
          data-testid="text-hero-title"
        >
          Polished & <span className="gradient-text text-white">Posh</span>
        </h1>
        <p
          className="text-xl md:text-2xl text-white/90 mb-8 font-light animate-fade-in-up stagger-1"
          data-testid="text-hero-subtitle"
        >
          Where Elegance Meets Expert Nail Care
        </p>
        <p
          className="text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in-up stagger-2"
          data-testid="text-hero-description"
        >
          Experience luxury nail services in a serene, sophisticated atmosphere.
          From classic manicures to intricate nail art, we bring your vision to
          life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
          <Button
            size="lg"
            className="text-base backdrop-blur-sm bg-primary hover:bg-primary/90 border border-primary-border hover-lift hover-glow transition-all duration-300"
            onClick={handleBooking}
            data-testid="button-book-appointment"
          >
            Book Appointment
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20 hover-lift transition-all duration-300"
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
