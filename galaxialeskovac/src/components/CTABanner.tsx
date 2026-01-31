import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket, Sparkles } from 'lucide-react';

interface CTABannerProps {
  onBookingClick: () => void;
}

const CTABanner = ({ onBookingClick }: CTABannerProps) => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-neon-purple/10 to-neon-pink/20" />
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-neon-pink/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative container mx-auto px-4 text-center">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-neon-cyan mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          >
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </motion.div>
          
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
            <span className="text-foreground">Spremni za </span>
            <span className="text-gradient-galaxy">nezaboravnu avanturu?</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Ne čekajte – termini se brzo popunjavaju! Rezervišite rođendan vašeg deteta već danas i osigurajte mesto u svemiru.
          </p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button variant="galaxy" size="xl" onClick={onBookingClick} className="group">
              <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Rezerviši odmah
            </Button>
            <Button variant="cosmic" size="lg" asChild>
              <a href="tel:+381605401407">
                Pozovi: 060 5401 407
              </a>
            </Button>
          </motion.div>
          
          {/* Trust badge */}
          <p className="mt-6 text-sm text-muted-foreground">
            ⭐ Ocenjeno sa 4.9/5 od strane roditelja
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
