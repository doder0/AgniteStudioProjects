import { Award, Clock, Dumbbell, Users, Zap } from "lucide-react";

const WhyUsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Energetska Atmosfera",
      description: "Oseti snagu čim uđeš. Naša atmosfera te inspiriše da daš sve od sebe.",
      stat: "100%",
      statLabel: "Motivacija",
    },
    {
      icon: Dumbbell,
      title: "Profesionalna Oprema",
      description: "Najmodernije mašine i slobodni tegovi za sve tipove treninga.",
      stat: "50+",
      statLabel: "Mašina",
    },
    {
      icon: Users,
      title: "Stručni Treneri",
      description: "Naš tim sertifikovanih trenera je tu da te vodi ka tvom cilju.",
      stat: "10+",
      statLabel: "Trenera",
    },
    {
      icon: Clock,
      title: "Fleksibilno Radno Vreme",
      description: "Treniraj kad ti odgovara. Otvoreni smo rano ujutru do kasno uveče.",
      stat: "16h",
      statLabel: "Dnevno",
    },
  ];

  return (
    <section id="why-us" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium uppercase tracking-[0.3em] mb-4">
            Zašto Mi
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
            NAŠA <span className="text-gradient-energy">PREDNOST</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            U Goku Gym-u verujemo da je okruženje ključ uspeha. Zato smo stvorili prostor gde se rađaju šampioni.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="relative group"
            >
              {/* Card */}
              <div className="power-card p-6 h-full text-center hover:border-primary/50 transition-all duration-500">
                {/* Stat */}
                <div className="mb-4">
                  <span className="font-display text-5xl text-gradient-energy">
                    {benefit.stat}
                  </span>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    {benefit.statLabel}
                  </p>
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl text-foreground mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>

              {/* Connecting Line (except last) */}
              {index < benefits.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Power Level Indicator */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">
              Tvoj Nivo Snage
            </span>
            <span className="text-sm text-primary font-bold">
              9000+
            </span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary via-primary-glow to-secondary rounded-full animate-pulse-glow"
              style={{ width: "95%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
