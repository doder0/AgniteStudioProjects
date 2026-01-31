import loungeImg from "@/assets/lounge.jpg";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-charcoal-deep relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-purple/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
              Iskustvo
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              Više Od
              <br />
              <span className="text-gradient-neon">Destinacije</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Promenada nije samo mesto za jelo—to je prostor gde gradski život usporava,
                gde razgovori teku glatko kao naši autorski kokteli, i gde svako jelo
                priča svoju priču.
              </p>
              <p>
                Od jutarnjeg rituala uz kafu do kasnih noćnih proslava, stvorili smo
                prostor koji se transformiše tokom dana. Moderno balkansko gostoprimstvo
                susreće savremenu sofisticiranost.
              </p>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              {[
                { number: "7+", label: "Godina Izuzetnosti" },
                { number: "50+", label: "Autorskih Jela" },
                { number: "100+", label: "Koktela" },
                { number: "∞", label: "Nezaboravnih Noći" },
              ].map((stat, index) => (
                <div key={index} className="group">
                  <span className="text-4xl font-serif text-gold group-hover:text-gold-light transition-colors duration-300">
                    {stat.number}
                  </span>
                  <p className="text-muted-foreground text-sm mt-1 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-neon-purple/20 to-gold/20 rounded-lg blur-2xl" />
              <img
                src={loungeImg}
                alt="Promenada lounge enterijer"
                className="relative rounded-lg w-full aspect-square object-cover shadow-2xl"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-gold/20 rounded-lg p-6 shadow-xl backdrop-blur-sm">
              <p className="text-gold font-serif text-2xl">Otvoreno Svakog Dana</p>
              <p className="text-muted-foreground text-sm">08:00 — 01:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
