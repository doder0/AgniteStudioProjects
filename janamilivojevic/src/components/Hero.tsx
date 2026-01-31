import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Jana Milivojević - Online fitnes trener"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-foreground mb-6 animate-fade-up opacity-0 animation-delay-100">
            Snaga počinje u umu.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light mb-10 max-w-md animate-fade-up opacity-0 animation-delay-200">
            Transformiši svoje telo, unapredi svoj um i izgradi trajno samopouzdanje.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-foreground text-background font-medium text-sm tracking-wide hover:bg-foreground/90 transition-all duration-300 animate-fade-up opacity-0 animation-delay-300"
          >
            Započni svoje putovanje
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 animation-delay-500">
        <div className="w-px h-12 bg-foreground/30" />
      </div>
    </section>
  );
};

export default Hero;
