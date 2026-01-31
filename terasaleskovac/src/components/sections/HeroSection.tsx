import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-terrace.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Logo/Brand */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4 font-body text-sm uppercase tracking-[0.3em] text-primary"
          >
            Caffe & Restaurant
          </motion.p>

          {/* Main Headline */}
          <h1 className="mb-6 font-display text-4xl font-medium leading-tight text-foreground md:text-6xl lg:text-7xl">
            Terasa
            <span className="block mt-2 text-gradient">—</span>
            <span className="block mt-2 text-2xl font-light italic text-foreground/90 md:text-3xl lg:text-4xl">
              mesto gde se ukus i atmosfera susreću
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mx-auto mb-10 max-w-xl font-body text-base text-muted-foreground md:text-lg"
          >
            Uživajte u savršenom spoju vrhunske hrane, elegantnog enterijera i prijatnog ambijenta 
            u srcu Leskovca
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button 
              variant="hero" 
              size="xl"
              asChild
            >
              <a href="tel:+381648736831">
                <Phone className="mr-2 h-5 w-5" />
                Rezerviši sto
              </a>
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              onClick={() => scrollToSection("hrana")}
            >
              Pogledaj meni
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => scrollToSection("o-nama")}
            className="flex flex-col items-center text-foreground/60 transition-colors hover:text-primary"
          >
            <span className="mb-2 text-xs uppercase tracking-widest">Istraži</span>
            <ChevronDown className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
