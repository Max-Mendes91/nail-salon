import SectionDivider from "./SectionDivider";

const galleryImages = [
  {
    src: "/generated_images/Acrylic_nail_extensions_d06a3803.webp",
    alt: "Acrylic nail extensions",
  },
  {
    src: "/generated_images/Elegant_manicure_close-up_bf6aec43.webp",
    alt: "Elegant manicure close-up",
  },
  {
    src: "/generated_images/Floral_nail_art_design_344e166b.webp",
    alt: "Floral nail art design",
  },
  {
    src: "/generated_images/Gel_polish_application_9edc9af8.webp",
    alt: "Gel polish application",
  },
  {
    src: "/generated_images/Geometric_nail_art_6671ff60.webp",
    alt: "Geometric nail art",
  },
  {
    src: "/generated_images/Hand_massage_service_f41615c8.webp",
    alt: "Hand massage service",
  },
  {
    src: "/generated_images/Luxury_nail_salon_interior_hero_0ef024f0.webp",
    alt: "Luxury nail salon interior hero",
  },
  {
    src: "/generated_images/Modern_French_manicure_79ccc154.webp",
    alt: "Modern French manicure",
  },
  {
    src: "/generated_images/Nail_care_products_display_67a00fb7.webp",
    alt: "Nail care products display",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-20 lg:py-24 bg-background relative">
      {/* Beautiful Wave Divider Top */}
      <SectionDivider position="top" />

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary text-center mb-16 animate-fade-in-up">
          Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg shadow-lg hover-lift hover-shine animate-fade-in-up stagger-${Math.min(index + 1, 6)}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover-scale transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Beautiful Wave Divider Bottom */}
      <SectionDivider position="bottom" />
    </section>
  );
}
