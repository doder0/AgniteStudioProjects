import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Trophy, Flame } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: "500+", label: t("about.stat1") },
    { icon: Trophy, value: "15+", label: t("about.stat2") },
    { icon: Target, value: "98%", label: t("about.stat3") },
    { icon: Flame, value: "1M+", label: t("about.stat4") },
  ];

  return (
    <section id="about" className="gym-section bg-gym-gradient-subtle" ref={ref}>
      <div className="gym-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="gym-divider" />
          <h2 className="gym-heading-lg text-foreground mb-4">
            {t("about.title")} <span className="gym-text-gradient">FITNESS ORIGINAL</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {t("about.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="gym-heading-md text-foreground mb-6">
              {t("about.heading")} <span className="text-primary">{t("about.headingHighlight")}</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {t("about.p1")}
                <span className="text-foreground font-medium">{t("about.p1Highlight")}</span>.
              </p>
              <p>
                {t("about.p2")}
              </p>
              <p>
                {t("about.p3")}
                <span className="text-primary font-semibold">{t("about.p3Highlight")}</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="gym-card text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display text-4xl text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
