import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-card py-24 md:py-32">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
      
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 font-body text-sm uppercase tracking-[0.2em] text-primary">
            Rezervacije
          </p>
          <h2 className="mb-6 font-display text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
            Rezervišite svoje mesto
            <span className="block text-gradient">na vreme</span>
          </h2>
          <p className="mb-10 font-body text-lg text-muted-foreground">
            Osigurajte savršen sto za vašu sledeću posetu. 
            Naš tim je tu da vam pripremi nezaboravno iskustvo.
          </p>

          {/* Contact Info */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-foreground/80">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Južnomoravskih brigada 40, Leskovac</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <Clock className="h-4 w-4 text-primary" />
              <span>08:00 - 00:00</span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant="cta" size="xl" asChild className="glow-amber">
              <a href="tel:+381648736831">
                <Phone className="mr-2 h-5 w-5" />
                Pozovi za rezervaciju
              </a>
            </Button>
          </motion.div>

          <p className="mt-6 font-body text-lg font-medium text-foreground">
            064 873 6831
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
