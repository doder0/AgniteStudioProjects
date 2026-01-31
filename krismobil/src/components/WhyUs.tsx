import { Zap, Coins, ShieldCheck, Users, Award } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Brza usluga",
    description: "Većina popravki završena u istom danu",
  },
  {
    icon: Coins,
    title: "Povoljne cene",
    description: "Konkurentne cene bez skrivenih troškova",
  },
  {
    icon: ShieldCheck,
    title: "Kvalitetni delovi",
    description: "Koristimo samo proverene i kvalitetne delove",
  },
  {
    icon: Users,
    title: "Iskusni serviseri",
    description: "Tim profesionalaca sa višegodišnjim iskustvom",
  },
  {
    icon: Award,
    title: "Garancija",
    description: "Garancija na svaku popravku i deo",
  },
];

const WhyUs = () => {
  return (
    <section id="zasto-mi" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold mb-3 text-sm uppercase tracking-wider">Zašto izabrati nas</p>
          <h2 className="heading-lg text-foreground mb-4">
            Vaš telefon u sigurnim rukama
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pouzdanost, kvalitet i brzina - to je ono što nas izdvaja od drugih
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
