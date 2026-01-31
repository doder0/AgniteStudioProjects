import { Clock, AlertCircle } from "lucide-react";

const schedule = [
  { day: "Ponedeljak", hours: "06:00 - 23:00", status: "normal" },
  { day: "Utorak", hours: "06:00 - 23:00", status: "normal" },
  { day: "Sreda", hours: "06:00 - 23:00", status: "normal" },
  { day: "Četvrtak", hours: "06:00 - 23:00", status: "normal" },
  { day: "Petak", hours: "06:00 - 23:00", status: "normal" },
  { day: "Subota", hours: "08:00 - 20:00", status: "reduced" },
  { day: "Nedelja", hours: "09:00 - 18:00", status: "reduced" },
];

const holidays = [
  { date: "01. Januar", name: "Nova Godina", status: "Zatvoreno" },
  { date: "07. Januar", name: "Božić", status: "10:00 - 16:00" },
  { date: "15. Februar", name: "Sretenje", status: "10:00 - 18:00" },
  { date: "01. Maj", name: "Praznik Rada", status: "Zatvoreno" },
];

const groupClasses = [
  { name: "HIIT", time: "07:00", days: "Pon, Sre, Pet" },
  { name: "Yoga", time: "09:00", days: "Uto, Čet" },
  { name: "Spinning", time: "18:00", days: "Pon, Sre, Pet" },
  { name: "Funkcionalni", time: "19:00", days: "Uto, Čet, Sub" },
  { name: "Core & Abs", time: "20:00", days: "Pon, Sre" },
];

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-20 md:py-32 bg-secondary/30 relative">
      {/* Decorative corner */}
      <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-primary/30" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-primary/30" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-heading text-primary text-sm tracking-[0.3em] mb-4">
            RASPORED
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            RADNO <span className="text-primary italic-slant">VREME</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Weekly Schedule */}
          <div className="card-gym p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="font-heading text-xl font-bold text-foreground">
                Nedeljni Raspored
              </h3>
            </div>
            <div className="space-y-3">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between py-3 border-b border-border/50 last:border-0 ${
                    item.status === "reduced" ? "text-foreground/60" : ""
                  }`}
                >
                  <span className="font-heading text-sm uppercase">{item.day}</span>
                  <span className={`text-sm ${item.status === "reduced" ? "text-primary/70" : "text-primary"}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Group Classes */}
          <div className="card-gym p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold">G</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                Grupni Treninzi
              </h3>
            </div>
            <div className="space-y-4">
              {groupClasses.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
                >
                  <div>
                    <span className="font-heading text-sm uppercase text-foreground block">
                      {item.name}
                    </span>
                    <span className="text-xs text-foreground/50">{item.days}</span>
                  </div>
                  <span className="bg-primary/10 text-primary text-xs font-heading px-3 py-1">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Holidays */}
          <div className="card-gym p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-primary" />
              <h3 className="font-heading text-xl font-bold text-foreground">
                Praznici
              </h3>
            </div>
            <div className="space-y-4">
              {holidays.map((item, index) => (
                <div
                  key={index}
                  className="py-3 border-b border-border/50 last:border-0"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-heading text-sm uppercase text-foreground">
                      {item.name}
                    </span>
                    <span className={`text-xs font-heading ${
                      item.status === "Zatvoreno" ? "text-destructive" : "text-primary"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <span className="text-xs text-foreground/50">{item.date}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-foreground/40 mt-6 border-t border-border/50 pt-4">
              * Raspored za praznike može biti promenjen. Pratite naše društvene mreže za aktuelne informacije.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
