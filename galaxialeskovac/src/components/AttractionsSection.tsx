import { motion } from 'framer-motion';
import { Rocket, Zap, PartyPopper, Gamepad2, Music, Camera } from 'lucide-react';

const attractions = [
  {
    icon: Gamepad2,
    title: 'Mega tobogani',
    description: 'Tri nivoa tobogana u obliku svemirske stanice',
  },
  {
    icon: Zap,
    title: 'Trambolina zona',
    description: 'Profesionalne trambuline za skakanje do zvezda',
  },
  {
    icon: PartyPopper,
    title: 'Bazen sa lopticama',
    description: 'Hiljade šarenih loptica u svemirskom bazenu',
  },
  {
    icon: Rocket,
    title: 'Penjački zid',
    description: 'Bezbedni penjački zid za male avanturiste',
  },
  {
    icon: Music,
    title: 'Disco podijum',
    description: 'LED podijum za ples i muzičke igre',
  },
  {
    icon: Camera,
    title: 'Foto kutak',
    description: 'Svemirski foto kutak sa rekvizitima',
  },
];

const AttractionsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden" id="attractions">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(280,50%,6%)] to-background" />
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="relative container mx-auto px-4">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-neon-pink/20 text-neon-pink text-sm font-medium mb-4">
            Atrakcije
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Sve što čeka </span>
            <span className="text-gradient-galaxy">male astronaute</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Preko 500m² zabave i avanture u našem svemirskom kompleksu
          </p>
        </motion.div>
        
        {/* Attractions grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {attractions.map((attraction, index) => (
            <motion.div 
              key={attraction.title}
              className="group text-center p-6 rounded-2xl bg-card/30 border border-border/50 hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-neon-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <attraction.icon className="w-7 h-7 text-neon-cyan" />
              </div>
              
              {/* Content */}
              <h3 className="font-semibold text-foreground mb-1 font-display">
                {attraction.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {attraction.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Feature highlight */}
        <motion.div 
          className="mt-16 p-8 rounded-3xl card-space max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-display">
                Sve pod jednim krovom
              </h3>
              <p className="text-muted-foreground mb-4">
                Naša igraonica je dizajnirana da pruži kompletno iskustvo – od ulaska u svemirski portal do poslednjeg zagrljaja na rastanku.
              </p>
              <ul className="space-y-2">
                {[
                  'Klimatizovan prostor',
                  'Besplatan parking',
                  'Pristup za invalidska kolica',
                  'Prostor za roditelje sa WiFi',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/30 via-neon-cyan/20 to-neon-pink/30 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-bold text-gradient-galaxy font-display">500+</p>
                  <p className="text-muted-foreground">m² zabave</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AttractionsSection;
