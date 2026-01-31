import { Phone, MessageCircle, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">Servis mobilnih telefona</span>
          </div>

          {/* Main Headline */}
          <h1 className="heading-xl text-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Brza i pouzdana{" "}
            <span className="text-gradient-red">popravka</span>{" "}
            mobilnih telefona
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            iPhone, Samsung, Xiaomi, Huawei i ostali brendovi. 
            Profesionalan servis sa garancijom na svaku popravku.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a href="tel:+381601234567" className="btn-primary flex items-center justify-center gap-2 text-lg">
              <Phone className="w-5 h-5" />
              Pozovi odmah
            </a>
            <a 
              href="https://wa.me/381601234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline flex items-center justify-center gap-2 text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Pošalji poruku
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 pt-8 border-t border-border/30 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div>
              <p className="text-2xl md:text-4xl font-bold text-foreground">5000+</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Popravljenih telefona</p>
            </div>
            <div>
              <p className="text-2xl md:text-4xl font-bold text-foreground">10+</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Godina iskustva</p>
            </div>
            <div>
              <p className="text-2xl md:text-4xl font-bold text-foreground">98%</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Zadovoljnih klijenata</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
