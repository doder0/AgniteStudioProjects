import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  Star, 
  ArrowRight,
  Users,
  Dumbbell,
  Heart,
  Flame,
  Bike,
  Utensils,
  Zap
} from "lucide-react";

const pricingPlans = [
  {
    name: "Bazični",
    price: "3.500",
    period: "mesečno",
    description: "Savršen za samostalne trenere",
    popular: false,
    features: [
      "Pristup teretani 7 dana u nedelji",
      "Sve zone za vežbanje",
      "Svlačionice sa tuševima",
      "Besplatan Wi-Fi",
      "Aplikacija za praćenje"
    ],
    notIncluded: [
      "Grupni treninzi",
      "Sauna & wellness",
      "Personalni trening"
    ]
  },
  {
    name: "Standard",
    price: "5.500",
    period: "mesečno",
    description: "Najpopularniji izbor naših članova",
    popular: true,
    features: [
      "Sve iz Bazičnog paketa",
      "Neograničeni grupni treninzi",
      "Sauna & wellness zona",
      "1 besplatan personalni trening",
      "Popust od 10% u Fit baru",
      "Zamrzavanje članarine 1x godišnje"
    ],
    notIncluded: [
      "Plan ishrane",
      "Premium usluge"
    ]
  },
  {
    name: "Premium",
    price: "8.500",
    period: "mesečno",
    description: "Za maksimalne rezultate",
    popular: false,
    features: [
      "Sve iz Standard paketa",
      "4 personalna treninga mesečno",
      "Individualni plan ishrane",
      "Prioritetna rezervacija časova",
      "Premium svlačionice",
      "Besplatni peškiri",
      "Popust od 20% u Fit baru",
      "Mesečna analiza sastava tela"
    ],
    notIncluded: []
  }
];

const specialOffers = [
  {
    name: "Studentska",
    price: "2.990",
    period: "mesečno",
    description: "Za studente sa validnim indeksom",
    note: "Potrebna validna studentska legitimacija"
  },
  {
    name: "Porodična",
    price: "od 4.500",
    period: "po članu",
    description: "Za 2+ člana porodice",
    note: "Kontaktirajte nas za personalizovanu ponudu"
  },
  {
    name: "Godišnja",
    price: "39.900",
    period: "godišnje",
    description: "Uštedite 2 meseca!",
    note: "Standard paket, jednokratna uplata"
  }
];

const additionalServices = [
  {
    icon: Users,
    name: "Personalni treninzi",
    price: "2.500 RSD",
    unit: "po treningu",
    description: "1-na-1 rad sa sertifikovanim trenerom. Individualni program prilagođen tvojim ciljevima."
  },
  {
    icon: Flame,
    name: "HIIT",
    price: "Uključeno",
    unit: "u Standard+",
    description: "Visoko intenzivni intervalni trening. Maksimalna potrošnja kalorija u minimalnom vremenu."
  },
  {
    icon: Heart,
    name: "Yoga & Pilates",
    price: "Uključeno",
    unit: "u Standard+",
    description: "Poboljšaj fleksibilnost, snagu jezgra i mentalno zdravlje kroz vođene sesije."
  },
  {
    icon: Bike,
    name: "Indoor Cycling",
    price: "Uključeno",
    unit: "u Standard+",
    description: "Energični grupni treninzi na stacionarnim biciklima uz motivacionu muziku."
  },
  {
    icon: Zap,
    name: "Functional Training",
    price: "Uključeno",
    unit: "u Standard+",
    description: "Trening koji imitira svakodnevne pokrete za bolju funkcionalnost tela."
  },
  {
    icon: Utensils,
    name: "Plan ishrane",
    price: "4.000 RSD",
    unit: "mesečno",
    description: "Personalizovani plan ishrane kreiran od strane nutricioniste. Uključeno u Premium."
  }
];

const Usluge = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              USLUGE I <span className="text-primary">CENE</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Transparentne cene, bez skrivenih troškova. Odaberi paket koji odgovara 
              tvom životnom stilu i ciljevima. Svi paketi uključuju pristup 7 dana u nedelji.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              MESEČNE <span className="text-primary">ČLANARINE</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Odaberi paket koji ti najviše odgovara
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.name}
                className={`rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular 
                    ? "bg-primary/10 border-2 border-primary relative scale-105" 
                    : "bg-secondary/50 border border-border hover:border-primary/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Najpopularniji
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-heading text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">RSD</span>
                  </div>
                  <p className="text-muted-foreground text-sm">/{plan.period}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 opacity-50">
                      <span className="h-5 w-5 flex items-center justify-center text-muted-foreground mt-0.5 flex-shrink-0">
                        —
                      </span>
                      <span className="text-muted-foreground text-sm line-through">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link to="/kontakt">Izaberi paket</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              SPECIJALNE <span className="text-primary">PONUDE</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Dodatne opcije za specifične potrebe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {specialOffers.map((offer) => (
              <div 
                key={offer.name}
                className="rounded-xl p-6 bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {offer.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {offer.description}
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-heading text-3xl font-bold text-primary">
                    {offer.price}
                  </span>
                  <span className="text-muted-foreground text-sm">RSD</span>
                </div>
                <p className="text-muted-foreground text-xs">{offer.period}</p>
                <p className="text-muted-foreground text-xs mt-4 pt-4 border-t border-border">
                  {offer.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              DODATNE <span className="text-primary">USLUGE</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Unapred svoje iskustvo sa našim specijalizovanim programima
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div 
                key={service.name}
                className="rounded-xl p-6 bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {service.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-semibold text-primary">{service.price}</span>
                  <span className="text-muted-foreground text-sm">{service.unit}</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              POSTANI ČLAN DANAS!
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Kontaktiraj nas za personalizovanu ponudu ili zakaži besplatan probni trening.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" asChild>
                <Link to="/kontakt">
                  Kontaktiraj nas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/raspored">Pogledaj raspored</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Usluge;
