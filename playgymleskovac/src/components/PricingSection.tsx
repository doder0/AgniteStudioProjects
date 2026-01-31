import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Mesečna",
    price: "3.500",
    period: "mesečno",
    description: "Savršeno za početak",
    features: [
      "Neograničen pristup teretani",
      "Korišćenje sve opreme",
      "Svlačionice i tuševi",
      "Fitnes procena",
    ],
    popular: false,
  },
  {
    name: "Kvartalna",
    price: "9.000",
    originalPrice: "10.500",
    period: "3 meseca",
    description: "Najpopularnija opcija",
    badge: "Uštedi 15%",
    features: [
      "Sve iz mesečne članarine",
      "2 personalna treninga",
      "Pristup grupnim treninzima",
      "Nutricionistički savet",
      "Praćenje napretka",
    ],
    popular: true,
  },
  {
    name: "Godišnja",
    price: "30.000",
    originalPrice: "42.000",
    period: "godišnje",
    description: "Za posvećene",
    badge: "Uštedi 30%",
    features: [
      "Sve iz kvartalne članarine",
      "12 personalnih treninga",
      "VIP pristup 24/7",
      "Besplatne suplementacije",
      "Prioritetna rezervacija",
      "Gostujuća članarina",
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-heading text-primary text-sm tracking-[0.3em] mb-4">
            CENOVNIK
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            INVESTIRAJ U <span className="text-primary italic-slant">SEBE</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Izaberi plan koji odgovara tvom životnom stilu i ciljevima.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-card border-2 border-primary scale-105 neon-glow"
                  : "bg-card border border-border hover:border-primary/50"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground font-heading text-xs px-4 py-1 flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-foreground/60 text-sm mb-4">{plan.description}</p>
                
                {/* Price */}
                <div className="mb-2">
                  {plan.originalPrice && (
                    <span className="text-foreground/40 line-through text-lg mr-2">
                      {plan.originalPrice} RSD
                    </span>
                  )}
                </div>
                <div className="flex items-end justify-center gap-1">
                  <span className={`font-heading text-4xl md:text-5xl font-bold ${plan.popular ? "text-primary" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className="text-foreground/60 text-sm mb-2">RSD</span>
                </div>
                <p className="text-foreground/50 text-sm mt-1">{plan.period}</p>
              </div>

              {/* Yellow separator */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8" />

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
              >
                Izaberi Plan
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-foreground/50 text-sm mt-12">
          * Sve cene su u RSD. Dostupne su i dodatne usluge po posebnom cenovniku.
        </p>
      </div>
    </section>
  );
}
