import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Dumbbell, 
  Swords, 
  Users, 
  Scale, 
  Flame, 
  Zap 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const services = [
    {
      icon: Dumbbell,
      title: t("services.personal.title"),
      description: t("services.personal.desc"),
    },
    {
      icon: Swords,
      title: t("services.boxing.title"),
      description: t("services.boxing.desc"),
    },
    {
      icon: Users,
      title: t("services.group.title"),
      description: t("services.group.desc"),
    },
    {
      icon: Scale,
      title: t("services.weight.title"),
      description: t("services.weight.desc"),
    },
    {
      icon: Flame,
      title: t("services.fatloss.title"),
      description: t("services.fatloss.desc"),
    },
    {
      icon: Zap,
      title: t("services.strength.title"),
      description: t("services.strength.desc"),
    },
  ];

  return (
    <section id="services" className="gym-section" ref={ref}>
      <div className="gym-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="gym-divider" />
          <h2 className="gym-heading-lg text-foreground mb-4">
            {t("services.title")} <span className="gym-text-gradient">{t("services.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="gym-card group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3 tracking-wider">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
