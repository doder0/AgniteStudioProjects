import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import training1 from "@/assets/training-1.jpg";
import training2 from "@/assets/training-2.jpg";
import training4 from "@/assets/training-4.jpg";

const programs = [
  {
    title: "Program za Početnike",
    description: "Idealno za one koji tek kreću. Naučićeš pravilnu tehniku i izgraditi temelje za buduće rezultate.",
    duration: "8 nedelja",
    sessions: "3x nedeljno",
    image: training1,
  },
  {
    title: "Personalni Treninzi",
    description: "Jedan na jedan sa našim sertifikovanim trenerom. Maksimalna pažnja, maksimalni rezultati.",
    duration: "Po dogovoru",
    sessions: "Fleksibilno",
    image: training2,
  },
  {
    title: "Grupni Treninzi",
    description: "Visoko-intenzivni treninzi u grupi. Motivacija zajednice, energija koja menja sve.",
    duration: "60 minuta",
    sessions: "Svaki dan",
    image: training4,
  },
];

export function ProgramsSection() {
  return (
    <section id="programs" className="py-20 md:py-32 bg-secondary/30 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-1 h-32 bg-primary" />
      <div className="absolute bottom-20 right-0 w-1 h-32 bg-primary" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-heading text-primary text-sm tracking-[0.3em] mb-4">
            PROGRAMI
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            IZABERI SVOJ <span className="text-primary italic-slant">PUT</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Bez obzira gde si sada, imamo program koji će te odvesti tamo gde želiš da budeš.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Yellow corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-t-primary border-l-[60px] border-l-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-foreground/60 text-sm mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Meta info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary" />
                    <span className="text-foreground/70 text-sm">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary" />
                    <span className="text-foreground/70 text-sm">{program.sessions}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button variant="outline" className="w-full group/btn">
                  Saznaj Više
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
