import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollLines from "@/components/ScrollLines";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Scroll-following decorative lines */}
      <ScrollLines />

      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
