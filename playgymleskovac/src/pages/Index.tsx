import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { PricingSection } from "@/components/PricingSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>PlayGym Leskovac | Teretana & Fitness Centar</title>
        <meta name="description" content="PlayGym Leskovac - Moderna teretana sa vrhunskom opremom, personalnim treninzima i grupnim programima. Počni svoju fitness transformaciju danas!" />
        <meta name="keywords" content="teretana leskovac, gym leskovac, fitness leskovac, personalni trening, playgym" />
        <link rel="canonical" href="https://playgym.rs" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ProgramsSection />
          <PricingSection />
          <ScheduleSection />
          <GallerySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
