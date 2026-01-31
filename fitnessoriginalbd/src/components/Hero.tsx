import { motion } from "framer-motion";
import heroImage from "@/assets/hero-gym.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium gym interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 gym-container text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-semibold uppercase tracking-[0.3em] mb-6 text-sm md:text-base">
            {t("hero.subtitle")}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="gym-heading-xl text-foreground mb-6"
        >
          {t("hero.headline1")}<br />
          <span className="gym-text-gradient">{t("hero.headline2")}</span><br />
          {t("hero.headline3")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center relative z-20"
        >
          <a href="#contact" className="gym-button-primary">
            {t("hero.joinNow")}
          </a>
          <a href="#contact" className="gym-button-outline">
            {t("hero.freeTrial")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
