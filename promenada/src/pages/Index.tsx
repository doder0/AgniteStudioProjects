import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import MenuSection from "@/components/MenuSection";
import GardenSection from "@/components/GardenSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-charcoal-deep min-h-screen">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <MenuSection />
      <GardenSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
