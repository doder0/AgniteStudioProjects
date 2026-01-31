import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Trainers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const trainers = [
    {
      name: t("trainers.trainer1.name"),
      specialty: t("trainers.trainer1.specialty"),
      bio: t("trainers.trainer1.bio"),
      image: trainer1,
    },
    {
      name: t("trainers.trainer2.name"),
      specialty: t("trainers.trainer2.specialty"),
      bio: t("trainers.trainer2.bio"),
      image: trainer2,
    },
    {
      name: t("trainers.trainer3.name"),
      specialty: t("trainers.trainer3.specialty"),
      bio: t("trainers.trainer3.bio"),
      image: trainer3,
    },
  ];

  return (
    <section id="trainers" className="gym-section" ref={ref}>
      <div className="gym-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="gym-divider" />
          <h2 className="gym-heading-lg text-foreground mb-4">
            {t("trainers.title")} <span className="gym-text-gradient">{t("trainers.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("trainers.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-sm mb-6">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                    <Instagram className="w-5 h-5 text-primary-foreground" />
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-display text-2xl text-foreground tracking-wider mb-1">
                  {trainer.name}
                </h3>
                <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
                  {trainer.specialty}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {trainer.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
