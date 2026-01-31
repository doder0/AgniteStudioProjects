import { motion } from "framer-motion";
import { Trees, Sparkles, Utensils, Users } from "lucide-react";

const highlights = [
  {
    icon: Trees,
    title: "Prostrana terasa",
    description: "Uživajte na otvorenoj terasi okruženoj zelenilom i toplim osvetljenjem"
  },
  {
    icon: Sparkles,
    title: "Moderan enterijer",
    description: "Elegantan dizajn koji spaja udobnost i sofisticiranu atmosferu"
  },
  {
    icon: Utensils,
    title: "Popularna hrana",
    description: "Burgeri, doručak, salate i još mnogo toga od najkvalitetnijih sastojaka"
  },
  {
    icon: Users,
    title: "Idealno za druženje",
    description: "Savršeno mesto za izlaske, proslave i nezaboravne trenutke"
  }
];

const HighlightsSection = () => {
  return (
    <section className="relative bg-muted/30 py-24 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 font-body text-sm uppercase tracking-[0.2em] text-primary">
            Zašto Terasa
          </p>
          <h2 className="font-display text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
            Sve na jednom mestu
          </h2>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="hover-lift glass-card h-full rounded-2xl p-6 md:p-8">
                {/* Icon */}
                <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="mb-3 font-display text-xl font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
