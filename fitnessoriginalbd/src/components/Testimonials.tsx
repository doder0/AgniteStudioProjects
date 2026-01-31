import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t("testimonials.t1.quote"),
      name: t("testimonials.t1.name"),
      result: t("testimonials.t1.result"),
    },
    {
      quote: t("testimonials.t2.quote"),
      name: t("testimonials.t2.name"),
      result: t("testimonials.t2.result"),
    },
    {
      quote: t("testimonials.t3.quote"),
      name: t("testimonials.t3.name"),
      result: t("testimonials.t3.result"),
    },
  ];

  return (
    <section className="gym-section" ref={ref}>
      <div className="gym-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="gym-divider" />
          <h2 className="gym-heading-lg text-foreground mb-4">
            {t("testimonials.title")} <span className="gym-text-gradient">{t("testimonials.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="gym-card relative"
            >
              <Quote className="w-10 h-10 text-primary/30 absolute top-6 right-6" />
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-xl text-foreground tracking-wider">
                    {testimonial.name}
                  </p>
                  <p className="text-primary text-sm font-semibold uppercase tracking-wider">
                    {testimonial.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
