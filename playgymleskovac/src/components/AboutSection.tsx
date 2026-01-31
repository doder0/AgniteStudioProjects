import { Target, Users, Dumbbell, Trophy } from "lucide-react";
import training3 from "@/assets/training-3.jpg";

const stats = [
  { number: "500+", label: "Članova" },
  { number: "10+", label: "Godina Iskustva" },
  { number: "15+", label: "Trenera" },
  { number: "24/7", label: "Pristup" },
];

const values = [
  {
    icon: Target,
    title: "Fokus na Rezultate",
    description: "Svaki trening je korak bliže tvom cilju. Bez izgovora.",
  },
  {
    icon: Users,
    title: "Zajednica",
    description: "Postani deo ekipe koja te gura napred svakog dana.",
  },
  {
    icon: Dumbbell,
    title: "Vrhunska Oprema",
    description: "Najmodernija oprema za maksimalne rezultate.",
  },
  {
    icon: Trophy,
    title: "Disciplina",
    description: "Gradimo navike koje menjaju živote.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-heading text-primary text-sm tracking-[0.3em] mb-4">
            O NAMA
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            VIŠE OD <span className="text-primary italic-slant">TERETANE</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 border-2 border-primary/30 -z-10 transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            <img
              src={training3}
              alt="PlayGym oprema"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            {/* Yellow frame corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-primary" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-primary" />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              PLAYGYM — Gde se <span className="text-primary">Disciplina</span> Pretvara u Rezultate
            </h3>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Od 2014. godine, PlayGym je dom za sve koji žele više od sebe. 
              Nismo obična teretana — mi smo zajednica posvećenih pojedinaca 
              koji veruju da pravi rezultati dolaze kroz rad, disciplinu i podršku.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Naš prostor od preko 800m² opremljen je najmodernijom opremom, 
              a naš tim sertifikovanih trenera je tu da te vodi kroz svaki 
              korak tvoje fitness transformacije.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.number}
                  </p>
                  <p className="text-foreground/60 text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="card-gym p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-heading text-lg font-bold text-foreground mb-2">
                {value.title}
              </h4>
              <p className="text-foreground/60 text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
