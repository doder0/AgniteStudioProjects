import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg-new.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Promenada Cafe noću"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep/40 via-charcoal-deep/60 to-charcoal-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep/50 via-transparent to-charcoal-deep/50" />
      </div>

      {/* Animated Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gold/15 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p
            className="text-gold uppercase tracking-[0.3em] text-sm mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Jedi · Pij · Voli · Uživaj
          </p>

          {/* Main Headline */}
          <h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.1] mb-8 opacity-0 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            Gde Svaki
            <br />
            <span className="text-gradient-gold">Trenutak</span> Vredi
          </h1>

          {/* Subheadline */}
          <p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            Urbano utočište za one koji cene umetnost lepog života.
            Izuzetna hrana, autorski kokteli i nezaboravne večeri.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            <Button variant="gold" size="xl" asChild>
              <a href="#contact">Rezerviši Veče</a>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a href="#menu">Istraži Meni</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#experience"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/70 hover:text-gold transition-colors duration-300 animate-float"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
