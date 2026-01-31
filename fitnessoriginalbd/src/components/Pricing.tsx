import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const plans = [
    {
      name: t("pricing.starter"),
      price: "49",
      period: t("pricing.month"),
      features: [
        t("pricing.feature.gymAccess"),
        t("pricing.feature.lockerRoom"),
        t("pricing.feature.basicEquipment"),
        t("pricing.feature.openGym"),
      ],
      popular: false,
    },
    {
      name: t("pricing.warrior"),
      price: "99",
      period: t("pricing.month"),
      features: [
        t("pricing.feature.everythingStarter"),
        t("pricing.feature.unlimitedGroup"),
        t("pricing.feature.onePersonal"),
        t("pricing.feature.nutritionGuidance"),
        t("pricing.feature.boxingAccess"),
        t("pricing.feature.priorityEquipment"),
      ],
      popular: true,
    },
    {
      name: t("pricing.elite"),
      price: "179",
      period: t("pricing.month"),
      features: [
        t("pricing.feature.everythingWarrior"),
        t("pricing.feature.fourPersonal"),
        t("pricing.feature.customMealPlans"),
        t("pricing.feature.recoveryRoom"),
        t("pricing.feature.trainerSupport"),
        t("pricing.feature.bodyComposition"),
        t("pricing.feature.vipLocker"),
      ],
      popular: false,
    },
    {
      name: t("pricing.annual"),
      price: "1499",
      period: t("pricing.year"),
      features: [
        t("pricing.feature.allElite"),
        t("pricing.feature.twoMonthsFree"),
        t("pricing.feature.merchandise"),
        t("pricing.feature.guestPasses"),
        t("pricing.feature.priorityClass"),
        t("pricing.feature.quarterlyReviews"),
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="gym-section bg-gym-gradient-subtle" ref={ref}>
      <div className="gym-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="gym-divider" />
          <h2 className="gym-heading-lg text-foreground mb-4">
            {t("pricing.title")} <span className="gym-text-gradient">{t("pricing.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("pricing.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`gym-card relative ${
                plan.popular ? "border-primary ring-1 ring-primary/50" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-sm">
                    {t("pricing.mostPopular")}
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl text-foreground tracking-wider mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-primary font-display text-5xl">€{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-sm font-semibold uppercase tracking-wider text-sm transition-all ${
                  plan.popular
                    ? "gym-button-primary w-full"
                    : "gym-button-outline w-full"
                }`}
              >
                {t("pricing.getStarted")}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
