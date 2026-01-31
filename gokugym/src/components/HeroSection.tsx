import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroWarrior from "@/assets/hero-warrior.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* Background Image - Warrior Silhouette */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroWarrior}
          alt="Ratnik sa aurom - Goku Gym"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
      </div>

      {/* Animated Energy Particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60 blur-[1px]" style={{ animationDelay: "0s" }} />
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-float opacity-40 blur-[1px]" style={{ animationDelay: "1s" }} />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-50 blur-[1px]" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 bg-secondary rounded-full animate-float opacity-50 blur-[1px]" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-secondary rounded-full animate-float opacity-40 blur-[1px]" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Main Content - Centered */}
      <div className="flex-1 flex items-center justify-center relative z-10 pt-16 md:pt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Location Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/50 bg-background/70 backdrop-blur-md mb-4 md:mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                Leskovac, Srbija
              </span>
            </div>

            {/* Main Headline - Bold Oswald with strong contrast */}
            <h1
              className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-3 md:mb-4 opacity-0 animate-fade-in leading-[0.95] tracking-wide uppercase"
              style={{ animationDelay: "0.4s" }}
            >
              <span 
                className="block"
                style={{ 
                  textShadow: "0 4px 30px rgba(0,0,0,1), 0 2px 10px rgba(0,0,0,0.9), 2px 2px 0 rgba(0,0,0,0.8)" 
                }}
              >
                Probudi
              </span>
              
              {/* RATNIKA - Solid orange with black stroke for maximum readability */}
              <span 
                className="block text-primary relative my-1 md:my-2"
                style={{ 
                  WebkitTextStroke: "2px rgba(0,0,0,0.8)",
                  textShadow: "0 0 40px hsl(24 100% 50% / 0.8), 0 0 80px hsl(24 100% 50% / 0.4), 4px 4px 0 rgba(0,0,0,0.9), -1px -1px 0 rgba(0,0,0,0.9), 1px -1px 0 rgba(0,0,0,0.9), -1px 1px 0 rgba(0,0,0,0.9)",
                  letterSpacing: "0.05em"
                }}
              >
                Ratnika
              </span>
              
              <span 
                className="block"
                style={{ 
                  textShadow: "0 4px 30px rgba(0,0,0,1), 0 2px 10px rgba(0,0,0,0.9), 2px 2px 0 rgba(0,0,0,0.8)" 
                }}
              >
                U Sebi
              </span>
            </h1>

            {/* Subheadline - Italic style like reference */}
            <p
              className="text-sm md:text-base lg:text-lg max-w-md mx-auto mb-6 md:mb-8 opacity-0 animate-fade-in italic"
              style={{ animationDelay: "0.6s", textShadow: "0 2px 20px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,0.8)" }}
            >
              <span className="text-foreground font-medium">Disciplina. Snaga. Transformacija.</span>
              <br />
              <span className="text-primary font-bold not-italic">Goku Gym</span>
              <span className="text-foreground"> – Leskovac.</span>
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 justify-center opacity-0 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <Button variant="energy" size="lg" className="text-sm md:text-base font-bold px-6 md:px-10 tracking-wider">
                PRIDRUŽI SE
              </Button>
              <Button variant="power" size="lg" className="text-sm md:text-base font-bold px-6 md:px-10 tracking-wider">
                BESPLATAN TRENING
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Power Level & Scroll */}
      <div className="relative z-10 pb-4 md:pb-6">
        {/* Power Level Indicator */}
        <div
          className="flex items-center justify-center gap-2 md:gap-3 mb-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <span 
            className="text-[10px] md:text-xs text-foreground uppercase tracking-widest font-bold"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,1)" }}
          >
            Nivo Snage
          </span>
          <div className="w-20 md:w-24 h-1.5 bg-background/60 backdrop-blur-sm rounded-full overflow-hidden border border-primary/30">
            <div className="h-full w-[90%] bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
          </div>
          <span 
            className="text-primary font-display font-bold text-base md:text-lg"
            style={{ textShadow: "0 0 15px hsl(24 100% 50% / 0.8)" }}
          >
            9000+
          </span>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-foreground/80 hover:text-primary transition-colors animate-float"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,1)" }}
        >
          <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold">Skroluj</span>
          <ChevronDown size={16} />
        </a>
      </div>

      {/* Side Energy Lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
