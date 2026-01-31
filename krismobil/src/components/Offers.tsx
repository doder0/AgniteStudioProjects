import { Sparkles, Percent, Gift } from "lucide-react";

const offers = [
  {
    icon: Percent,
    title: "Zamena ekrana -20%",
    description: "Popust na sve zamene ekrana do kraja meseca",
    badge: "AKCIJA",
  },
  {
    icon: Gift,
    title: "Besplatna dijagnostika",
    description: "Za sve nove klijente - besplatna provera uređaja",
    badge: "NOVO",
  },
  {
    icon: Sparkles,
    title: "Zamena baterije + zaštita",
    description: "Uz zamenu baterije - besplatna zaštitna folija",
    badge: "POKLON",
  },
];

const Offers = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-3 text-sm uppercase tracking-wider">Specijalne ponude</p>
          <h2 className="heading-lg text-foreground mb-4">
            Aktuelne akcije
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Iskoristite naše specijalne ponude i uštedite na popravci vašeg telefona
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              {/* Badge */}
              <span className="absolute top-4 right-4 text-xs font-bold bg-primary text-primary-foreground px-3 py-1 rounded-full">
                {offer.badge}
              </span>

              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <offer.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="heading-md text-foreground mb-2">{offer.title}</h3>
              <p className="text-muted-foreground text-sm">{offer.description}</p>

              {/* Glow Effect */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
