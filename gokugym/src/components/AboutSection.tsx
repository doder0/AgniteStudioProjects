import { Flame, Target, Zap } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Flame,
      title: "Disciplina",
      description:
        "Pravi ratnici se kuju kroz disciplinu. Svaki trening je korak bliže tvojoj transformaciji.",
    },
    {
      icon: Zap,
      title: "Snaga",
      description:
        "Oslobodi svoju skrivenu snagu. Nadmaši svoja ograničenja i postani neuništiv.",
    },
    {
      icon: Target,
      title: "Fokus",
      description:
        "Um i telo u harmoniji. Fokusiraj se na cilj i nikada ne odustaj od svojih snova.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium uppercase tracking-[0.3em] mb-4">
            O Nama
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
            TRENIRAJ KAO <span className="text-gradient-energy">RATNIK</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Goku Gym nije samo teretana - to je svetilište za one koji teže
            veličini. Inspirisani mentalitetom Sajana, verujemo da svako od nas
            ima neograničen potencijal koji čeka da se oslobodi.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="power-card p-8 text-center group hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl text-foreground mb-4">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground">{value.description}</p>

              {/* Decorative Line */}
              <div className="mt-6 h-0.5 w-12 mx-auto bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 text-center">
          <blockquote className="font-display text-2xl md:text-4xl text-foreground/80 italic">
            "Nikada ne odustaj od sebe.{" "}
            <span className="text-gradient-energy">Pravi ratnik</span> ustaje
            svaki put kad padne."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
