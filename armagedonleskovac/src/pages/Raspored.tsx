import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  Info,
  Flame,
  Heart,
  Bike,
  Zap,
  Dumbbell,
  Music
} from "lucide-react";

const scheduleData = [
  {
    day: "Ponedeljak",
    classes: [
      { time: "07:00", name: "Morning HIIT", trainer: "Ana M.", level: "Srednji", icon: Flame },
      { time: "09:00", name: "Yoga Flow", trainer: "Milica P.", level: "Svi nivoi", icon: Heart },
      { time: "12:00", name: "Express Core", trainer: "Stefan T.", level: "Svi nivoi", icon: Zap },
      { time: "17:00", name: "Spinning", trainer: "Ana M.", level: "Srednji", icon: Bike },
      { time: "18:30", name: "Functional Training", trainer: "Marko J.", level: "Napredni", icon: Dumbbell },
      { time: "20:00", name: "Pilates", trainer: "Milica P.", level: "Početni", icon: Heart }
    ]
  },
  {
    day: "Utorak",
    classes: [
      { time: "06:30", name: "Early Bird HIIT", trainer: "Stefan T.", level: "Srednji", icon: Flame },
      { time: "10:00", name: "Yoga Stretch", trainer: "Milica P.", level: "Svi nivoi", icon: Heart },
      { time: "17:00", name: "Body Pump", trainer: "Marko J.", level: "Srednji", icon: Dumbbell },
      { time: "18:30", name: "Zumba", trainer: "Ana M.", level: "Svi nivoi", icon: Music },
      { time: "20:00", name: "Abs Blast", trainer: "Stefan T.", level: "Svi nivoi", icon: Zap }
    ]
  },
  {
    day: "Sreda",
    classes: [
      { time: "07:00", name: "Power Yoga", trainer: "Milica P.", level: "Srednji", icon: Heart },
      { time: "09:00", name: "Spinning", trainer: "Ana M.", level: "Početni", icon: Bike },
      { time: "12:00", name: "Express HIIT", trainer: "Marko J.", level: "Napredni", icon: Flame },
      { time: "17:30", name: "Functional Training", trainer: "Stefan T.", level: "Srednji", icon: Dumbbell },
      { time: "19:00", name: "Core & More", trainer: "Ana M.", level: "Svi nivoi", icon: Zap }
    ]
  },
  {
    day: "Četvrtak",
    classes: [
      { time: "06:30", name: "Morning Flow Yoga", trainer: "Milica P.", level: "Svi nivoi", icon: Heart },
      { time: "10:00", name: "Pilates", trainer: "Milica P.", level: "Srednji", icon: Heart },
      { time: "17:00", name: "HIIT & Burn", trainer: "Marko J.", level: "Napredni", icon: Flame },
      { time: "18:30", name: "Spinning", trainer: "Ana M.", level: "Napredni", icon: Bike },
      { time: "20:00", name: "Stretch & Relax", trainer: "Milica P.", level: "Svi nivoi", icon: Heart }
    ]
  },
  {
    day: "Petak",
    classes: [
      { time: "07:00", name: "HIIT", trainer: "Stefan T.", level: "Srednji", icon: Flame },
      { time: "09:00", name: "Yoga", trainer: "Milica P.", level: "Svi nivoi", icon: Heart },
      { time: "12:00", name: "Lunch Burn", trainer: "Ana M.", level: "Srednji", icon: Zap },
      { time: "17:00", name: "Body Pump", trainer: "Marko J.", level: "Srednji", icon: Dumbbell },
      { time: "18:30", name: "Zumba Party", trainer: "Ana M.", level: "Svi nivoi", icon: Music }
    ]
  },
  {
    day: "Subota",
    classes: [
      { time: "09:00", name: "Weekend Warrior HIIT", trainer: "Marko J.", level: "Napredni", icon: Flame },
      { time: "10:30", name: "Power Yoga", trainer: "Milica P.", level: "Srednji", icon: Heart },
      { time: "12:00", name: "Spinning", trainer: "Ana M.", level: "Svi nivoi", icon: Bike },
      { time: "14:00", name: "Functional Training", trainer: "Stefan T.", level: "Srednji", icon: Dumbbell }
    ]
  },
  {
    day: "Nedelja",
    classes: [
      { time: "10:00", name: "Sunday Stretch", trainer: "Milica P.", level: "Svi nivoi", icon: Heart },
      { time: "11:30", name: "Pilates", trainer: "Milica P.", level: "Početni", icon: Heart },
      { time: "13:00", name: "Light HIIT", trainer: "Stefan T.", level: "Početni", icon: Flame }
    ]
  }
];

const levelColors: Record<string, string> = {
  "Početni": "bg-green-500/20 text-green-400 border-green-500/30",
  "Srednji": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "Napredni": "bg-red-500/20 text-red-400 border-red-500/30",
  "Svi nivoi": "bg-blue-500/20 text-blue-400 border-blue-500/30"
};

const Raspored = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              RASPORED <span className="text-primary">GRUPNIH TRENINGA</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Preko 30 grupnih časova nedeljno. Pronađi savršeni trening za sebe i 
              rezerviši svoje mesto. Svi časovi su uključeni u Standard i Premium pakete.
            </p>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-6 bg-primary/10 border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-center">
            <Info className="h-5 w-5 text-primary flex-shrink-0" />
            <p className="text-foreground text-sm">
              <span className="font-semibold">Napomena:</span> Raspored je podložan izmenama. 
              Pratite nas na društvenim mrežama za ažuriranja ili kontaktirajte recepciju.
            </p>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm text-muted-foreground">Nivo:</span>
            {Object.entries(levelColors).map(([level, colors]) => (
              <span 
                key={level}
                className={`px-3 py-1 rounded-full text-xs font-medium border ${colors}`}
              >
                {level}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Table - Desktop */}
      <section className="py-12 md:py-20 hidden lg:block">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="min-w-[1000px]">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {scheduleData.map((day) => (
                    <th 
                      key={day.day}
                      className="p-4 text-left font-heading text-lg font-bold text-foreground bg-card border border-border"
                    >
                      {day.day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {scheduleData.map((day) => (
                    <td key={day.day} className="p-2 align-top border border-border bg-secondary/30">
                      <div className="space-y-2">
                        {day.classes.map((cls, idx) => (
                          <div 
                            key={idx}
                            className="p-3 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <cls.icon className="h-4 w-4 text-primary" />
                              <span className="text-xs font-medium text-primary">{cls.time}</span>
                            </div>
                            <p className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
                              {cls.name}
                            </p>
                            <p className="text-xs text-muted-foreground mb-2">
                              {cls.trainer}
                            </p>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${levelColors[cls.level]}`}>
                              {cls.level}
                            </span>
                          </div>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Schedule Cards - Mobile */}
      <section className="py-12 lg:hidden">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {scheduleData.map((day) => (
              <div key={day.day} className="rounded-xl bg-card border border-border overflow-hidden">
                <div className="p-4 bg-secondary/50 border-b border-border">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {day.day}
                  </h3>
                </div>
                <div className="p-4 space-y-3">
                  {day.classes.map((cls, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30 border border-border"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <cls.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-primary">{cls.time}</span>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${levelColors[cls.level]}`}>
                            {cls.level}
                          </span>
                        </div>
                        <p className="font-semibold text-foreground truncate">{cls.name}</p>
                        <p className="text-xs text-muted-foreground">{cls.trainer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              REZERVIŠI SVOJE MESTO
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Grupni treninzi su uključeni u Standard i Premium članarine. 
              Za rezervaciju mesta kontaktiraj nas ili koristi našu aplikaciju.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" asChild>
                <Link to="/kontakt">
                  Kontaktiraj nas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/usluge">Pogledaj cene</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Raspored;
