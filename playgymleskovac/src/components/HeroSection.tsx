import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Yellow accent lines */}
      <div className="absolute top-0 left-0 w-1 h-40 bg-primary opacity-80" />
      <div className="absolute top-0 left-0 w-40 h-1 bg-primary opacity-80" />
      <div className="absolute bottom-0 right-0 w-1 h-40 bg-primary opacity-80" />
      <div className="absolute bottom-0 right-0 w-40 h-1 bg-primary opacity-80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Pre-headline */}
          <p
            className="font-heading text-primary text-sm md:text-base tracking-[0.3em] mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            PLAYGYM LESKOVAC
          </p>

          {/* Main Headline */}
          <h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-none mb-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            POČNI <span className="text-primary italic-slant">SADA.</span>
          </h1>
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground/90 leading-none mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            ZAHVALI SEBI <span className="text-primary">KASNIJE.</span>
          </h2>

          {/* Yellow line separator */}
          <div
            className="w-24 h-1 bg-primary mx-auto mb-8 opacity-0 animate-line-grow"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          />

          {/* Subheadline */}
          <p
            className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            Tvoj put do transformacije počinje ovde. Disciplina. Rezultati. Zajednica.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
          >
            <Button variant="hero" size="xl">
              Pridruži Se Odmah
            </Button>
            <Button variant="heroOutline" size="xl">
              Kontaktiraj Nas
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/50 hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
