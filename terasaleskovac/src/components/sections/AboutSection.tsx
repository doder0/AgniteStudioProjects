import { motion } from "framer-motion";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";

const AboutSection = () => {
  return (
    <section id="o-nama" className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 font-body text-sm uppercase tracking-[0.2em] text-primary">
              O nama
            </p>
            <h2 className="mb-6 font-display text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
              Više od restorana
              <span className="block text-gradient">— iskustvo</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground">
              <p className="text-base leading-relaxed md:text-lg">
                Terasa je savremeni gradski kafić i restoran u kojem se tradicija i moderan 
                pristup ugostiteljstvu savršeno prepliću. Smešten u srcu Leskovca, naš prostor 
                nudi bijeg od svakodnevne gužve.
              </p>
              <p className="text-base leading-relaxed md:text-lg">
                Bilo da tražite mjesto za jutarnju kafu, poslovni ručak ili romantičnu večeru 
                – Terasa vas dočekuje sa toplinom i stilom.
              </p>
            </div>

            {/* Features List */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Prijatan ambijent",
                "Živa muzika",
                "Kvalitetna hrana",
                "Premium piće"
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-body text-sm text-foreground/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid gap-4">
              <div className="image-shine overflow-hidden rounded-2xl">
                <img
                  src={interior1}
                  alt="Terasa enterijer"
                  className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-80"
                />
              </div>
              <div className="image-shine overflow-hidden rounded-2xl">
                <img
                  src={interior2}
                  alt="Terasa terasa"
                  className="h-48 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-64"
                />
              </div>
            </div>
            
            {/* Decorative accent */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-forest/20 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
