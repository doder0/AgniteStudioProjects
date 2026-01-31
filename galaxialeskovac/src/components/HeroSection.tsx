import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';
import { Button } from '@/components/ui/button';
import { Rocket, Star, Sparkles, Play } from 'lucide-react';

interface HeroSectionProps {
  onBookingClick: () => void;
}

const HeroSection = ({ onBookingClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>
      
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 opacity-60"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Star className="w-8 h-8 text-neon-cyan" fill="currentColor" />
      </motion.div>
      <motion.div 
        className="absolute top-40 right-20 opacity-50"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Sparkles className="w-10 h-10 text-neon-pink" />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-20 opacity-40"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Star className="w-6 h-6 text-primary" fill="currentColor" />
      </motion.div>
      <motion.div 
        className="absolute top-60 left-1/4 opacity-30"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Star className="w-4 h-4 text-planet-gold" fill="currentColor" />
      </motion.div>
      <motion.div 
        className="absolute bottom-60 right-1/4 opacity-50"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <Sparkles className="w-6 h-6 text-neon-cyan" />
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex items-center justify-center">
        <div className="max-w-4xl w-full mx-auto">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6 sm:mb-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Rocket className="w-4 h-4 text-neon-cyan flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-foreground/90">Najveća dečija igraonica u Leskovcu</span>
          </motion.div>
          
          {/* Main headline */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className="text-foreground">Dobrodošli u</span>
            <br />
            <span className="text-gradient-galaxy glow-text">GALAXIA</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Magično mesto gde rođendani postaju nezaboravne svemirske avanture. 
            Bezbedna zabava, kreativne igre i osmesi na licima vaše dece.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button variant="galaxy" size="xl" className="group" onClick={onBookingClick}>
              <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Zakaži rođendan
            </Button>
            <Button variant="cosmic" size="lg" asChild>
              <a href="#packages">
                <Sparkles className="w-5 h-5 mr-2" />
                Pogledaj pakete
              </a>
            </Button>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div 
            className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-sm">Svaki dan 9–22h</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neon-pink animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span className="text-sm">Profesionalni animatori</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '1s' }} />
              <span className="text-sm">Bezbedan prostor</span>
            </div>
          </motion.div>
          
          {/* Video hint */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <a 
              href="https://www.instagram.com/igraonica_galaxia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all">
                <Play className="w-5 h-5 text-foreground ml-0.5" fill="currentColor" />
              </div>
              <span className="text-sm">Pogledajte nas na Instagramu</span>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
