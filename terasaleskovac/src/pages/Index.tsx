import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import FoodSection from "@/components/sections/FoodSection";
import GallerySection from "@/components/sections/GallerySection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import MobileCallButton from "@/components/MobileCallButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* SEO Meta handled in index.html */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <FoodSection />
      <section id="galerija">
        <GallerySection />
      </section>
      <CTASection />
      <Footer />
      <MobileCallButton />
    </main>
  );
};

export default Index;
