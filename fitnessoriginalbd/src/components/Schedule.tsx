import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Schedule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const days = [
    { key: "monday", label: t("schedule.monday") },
    { key: "tuesday", label: t("schedule.tuesday") },
    { key: "wednesday", label: t("schedule.wednesday") },
    { key: "thursday", label: t("schedule.thursday") },
    { key: "friday", label: t("schedule.friday") },
    { key: "saturday", label: t("schedule.saturday") },
    { key: "sunday", label: t("schedule.sunday") },
  ];

  const schedule: Record<string, { time: string; class: string; type: string }[]> = {
    monday: [
      { time: "07:00", class: t("schedule.boxing"), type: "boxing" },
      { time: "09:00", class: t("schedule.hiit"), type: "hiit" },
      { time: "12:00", class: t("schedule.strength"), type: "strength" },
      { time: "17:00", class: t("schedule.groupTraining"), type: "group" },
      { time: "19:00", class: t("schedule.boxing"), type: "boxing" },
    ],
    tuesday: [
      { time: "07:00", class: t("schedule.fatBurn"), type: "hiit" },
      { time: "10:00", class: t("schedule.strength"), type: "strength" },
      { time: "17:00", class: t("schedule.boxing"), type: "boxing" },
      { time: "19:00", class: t("schedule.conditioning"), type: "conditioning" },
    ],
    wednesday: [
      { time: "07:00", class: t("schedule.hiit"), type: "hiit" },
      { time: "09:00", class: t("schedule.groupTraining"), type: "group" },
      { time: "12:00", class: t("schedule.boxing"), type: "boxing" },
      { time: "17:00", class: t("schedule.strength"), type: "strength" },
      { time: "19:00", class: t("schedule.groupTraining"), type: "group" },
    ],
    thursday: [
      { time: "07:00", class: t("schedule.boxing"), type: "boxing" },
      { time: "10:00", class: t("schedule.fatBurn"), type: "hiit" },
      { time: "17:00", class: t("schedule.conditioning"), type: "conditioning" },
      { time: "19:00", class: t("schedule.sparring"), type: "boxing" },
    ],
    friday: [
      { time: "07:00", class: t("schedule.strength"), type: "strength" },
      { time: "09:00", class: t("schedule.hiit"), type: "hiit" },
      { time: "12:00", class: t("schedule.groupTraining"), type: "group" },
      { time: "17:00", class: t("schedule.boxing"), type: "boxing" },
      { time: "19:00", class: t("schedule.conditioning"), type: "conditioning" },
    ],
    saturday: [
      { time: "08:00", class: t("schedule.boxing"), type: "boxing" },
      { time: "10:00", class: t("schedule.groupTraining"), type: "group" },
      { time: "12:00", class: t("schedule.hiit"), type: "hiit" },
      { time: "15:00", class: t("schedule.openGym"), type: "open" },
    ],
    sunday: [
      { time: "09:00", class: t("schedule.strength"), type: "strength" },
      { time: "11:00", class: t("schedule.openGym"), type: "open" },
    ],
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "boxing":
        return "bg-primary/20 border-primary text-primary";
      case "hiit":
        return "bg-orange-500/20 border-orange-500 text-orange-400";
      case "strength":
        return "bg-blue-500/20 border-blue-500 text-blue-400";
      case "group":
        return "bg-green-500/20 border-green-500 text-green-400";
      case "conditioning":
        return "bg-purple-500/20 border-purple-500 text-purple-400";
      case "open":
        return "bg-muted/50 border-muted-foreground/50 text-muted-foreground";
      default:
        return "bg-muted/20 border-border text-foreground";
    }
  };

  return (
    <section id="schedule" className="gym-section" ref={ref}>
      <div className="gym-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="gym-divider" />
          <h2 className="gym-heading-lg text-foreground mb-4">
            {t("schedule.title")} <span className="gym-text-gradient">{t("schedule.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("schedule.subtitle")}
          </p>
        </motion.div>

        {/* Desktop Schedule Grid */}
        <div className="hidden lg:block overflow-x-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="min-w-[900px]"
          >
            <div className="grid grid-cols-7 gap-3">
              {days.map((day, index) => (
                <motion.div
                  key={day.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="space-y-3"
                >
                  <div className="text-center py-3 bg-card border border-border rounded-sm">
                    <span className="font-display text-lg text-foreground tracking-wider">
                      {day.label}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {schedule[day.key].map((session, sessionIndex) => (
                      <div
                        key={sessionIndex}
                        className={`p-3 rounded-sm border ${getTypeColor(session.type)} transition-all hover:scale-105`}
                      >
                        <div className="text-xs font-semibold mb-1">{session.time}</div>
                        <div className="text-sm font-medium">{session.class}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Schedule Cards */}
        <div className="lg:hidden space-y-4">
          {days.map((day, index) => (
            <motion.div
              key={day.key}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="gym-card"
            >
              <h3 className="font-display text-xl text-foreground tracking-wider mb-4">
                {day.label}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {schedule[day.key].map((session, sessionIndex) => (
                  <div
                    key={sessionIndex}
                    className={`p-3 rounded-sm border ${getTypeColor(session.type)}`}
                  >
                    <div className="text-xs font-semibold mb-1">{session.time}</div>
                    <div className="text-sm font-medium">{session.class}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {[
            { type: "boxing", label: t("schedule.boxing") },
            { type: "hiit", label: "HIIT / Fat Burn" },
            { type: "strength", label: t("schedule.strength") },
            { type: "group", label: t("schedule.groupTraining") },
            { type: "conditioning", label: t("schedule.conditioning") },
          ].map((item) => (
            <div key={item.type} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-sm border ${getTypeColor(item.type)}`} />
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
