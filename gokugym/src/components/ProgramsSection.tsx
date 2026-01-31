import { Button } from "@/components/ui/button";
import { Dumbbell, Flame, Heart, TrendingUp } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      icon: Dumbbell,
      title: "Trening Snage",
      description:
        "Izgradi čeličnu snagu kroz progresivne treninge sa slobodnim tegovima i mašinama.",
      features: ["Personalizovan program", "Praćenje napretka", "Elite oprema"],
      color: "primary",
    },
    {
      icon: TrendingUp,
      title: "Funkcionalni Trening",
      description:
        "Unapredi performanse za svakodnevne aktivnosti i atletske podvige.",
      features: ["CrossFit elementi", "Mobilnost", "Eksplozivnost"],
      color: "secondary",
    },
    {
      icon: Flame,
      title: "Sagorevanje Masti",
      description:
        "Intenzivni HIIT programi dizajnirani da transformišu tvoje telo.",
      features: ["HIIT sesije", "Kardio programi", "Nutritivne smernice"],
      color: "primary",
    },
    {
      icon: Heart,
      title: "Mišićna Masa",
      description:
        "Sistematski pristup izgradnji mišića kroz hipertrofične treninge.",
      features: ["Hipertrofija", "Periodizacija", "Oporavak"],
      color: "secondary",
    },
  ];

  return (
    <section id="programs" className="py-24 md:py-32 bg-card relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-energy-lines opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium uppercase tracking-[0.3em] mb-4">
            Programi
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
            IZABERI SVOJU{" "}
            <span className="text-gradient-power">TRANSFORMACIJU</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Svaki program je dizajniran da te dovede do sledećeg nivoa. Odaberi
            svoju stazu ka veličini.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="power-card p-8 group hover:border-primary/50 transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`p-4 rounded-lg ${
                    program.color === "primary"
                      ? "bg-primary/10"
                      : "bg-secondary/10"
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  <program.icon
                    className={`w-8 h-8 ${
                      program.color === "primary"
                        ? "text-primary"
                        : "text-secondary"
                    }`}
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {program.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {program.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        program.color === "primary"
                          ? "bg-primary"
                          : "bg-secondary"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={program.color === "primary" ? "energy" : "secondary"}
                className="w-full"
              >
                Saznaj Više
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
