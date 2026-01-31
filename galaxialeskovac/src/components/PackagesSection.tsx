import { motion } from 'framer-motion';
import { Check, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import planetJupiter from '@/assets/planet-jupiter.png';
import planetMars from '@/assets/planet-mars.png';
import planetVenus from '@/assets/planet-venus.png';
import milkyWay from '@/assets/milky-way.png';

interface Package {
  name: string;
  planet: string;
  price: number;
  duration: string;
  image: string;
  features: string[];
  popular?: boolean;
  glowColor: string;
}

interface PackagesSectionProps {
  onBookingClick?: () => void;
}

const packages: Package[] = [
  {
    name: 'Jupiter',
    planet: 'Moćni Jupiter',
    price: 900,
    duration: '2 sata',
    image: planetJupiter,
    glowColor: 'hsl(320, 100%, 60%)',
    features: [
      'Privatni prostor za slavlje',
      'Animatori sa programom',
      'Sokovi za decu',
      'Čarape za svu decu',
      'Pozivnice (10 kom)',
    ],
  },
  {
    name: 'Mars',
    planet: 'Hrabri Mars',
    price: 1100,
    duration: '2 sata',
    image: planetMars,
    glowColor: 'hsl(0, 80%, 50%)',
    features: [
      'Sve iz paketa Jupiter',
      'Torta za slavljenika',
      'Grickalice za decu',
      'Balon dekoracija',
      'Foto uspomene',
    ],
    popular: true,
  },
  {
    name: 'Venera',
    planet: 'Čarobna Venera',
    price: 1400,
    duration: '2 sata',
    image: planetVenus,
    glowColor: 'hsl(45, 100%, 50%)',
    features: [
      'Sve iz paketa Mars',
      'Ketering za roditelje',
      'Premium dekoracija',
      'Poklon za slavljenika',
      'VIP tretman',
    ],
  },
  {
    name: 'Mlečni Put',
    planet: 'Galaksija zabave',
    price: 650,
    duration: '2 sata',
    image: milkyWay,
    glowColor: 'hsl(270, 100%, 70%)',
    features: [
      'Ulaz u igraonicu',
      'Čarape uključene',
      'Nadzor osoblja',
      'Pristup svim atrakcijama',
    ],
  },
];

const PackagesSection = ({ onBookingClick }: PackagesSectionProps) => {
  return (
    <section className="relative py-24 overflow-hidden" id="packages">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(280,60%,8%)] to-background" />
      
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
            Rođendanski paketi
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Izaberi svoju </span>
            <span className="text-gradient-galaxy">svemirsku misiju</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Svaki paket je pažljivo osmišljen da obezbedi nezaboravno iskustvo za vašeg malog astronauta
          </p>
        </motion.div>
        
        {/* Packages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div 
              key={pkg.name}
              className={`group relative card-space rounded-3xl p-6 transition-all duration-500 hover:-translate-y-3 ${
                pkg.popular ? 'border-neon-cyan/50 ring-2 ring-neon-cyan/20' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-neon-cyan to-primary text-xs font-bold text-accent-foreground">
                  NAJPOPULARNIJI
                </div>
              )}
              
              {/* Planet image */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div 
                  className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: pkg.glowColor }}
                />
                <img 
                  src={pkg.image} 
                  alt={pkg.planet}
                  className="relative w-full h-full object-contain animate-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                />
              </div>
              
              {/* Package info */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-foreground font-display mb-1">
                  {pkg.name}
                </h3>
                <p className="text-sm text-muted-foreground">{pkg.planet}</p>
              </div>
              
              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gradient-galaxy">{pkg.price}</span>
                <span className="text-muted-foreground ml-1">RSD</span>
                <p className="text-sm text-muted-foreground mt-1">{pkg.duration}</p>
              </div>
              
              {/* Features */}
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <Button 
                variant={pkg.popular ? 'galaxy' : 'cosmic'} 
                className="w-full"
                size="lg"
                onClick={onBookingClick}
              >
                <Rocket className="w-4 h-4 mr-2" />
                Rezerviši
              </Button>
            </motion.div>
          ))}
        </div>
        
        {/* Additional info */}
        <motion.div 
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            { title: 'Besplatne čarape', desc: 'Za svu decu i odrasle' },
            { title: 'Fleksibilno vreme', desc: 'Dogovor oko termina' },
            { title: 'Besplatan parking', desc: 'Ispred igraonice' },
          ].map((info) => (
            <div key={info.title} className="text-center p-4 rounded-xl bg-card/30 border border-border/30">
              <p className="font-semibold text-foreground">{info.title}</p>
              <p className="text-sm text-muted-foreground">{info.desc}</p>
            </div>
          ))}
        </motion.div>
        
        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          * Svi paketi uključuju korišćenje kompletne igraonice. Cene su po detetu. Minimalno 8 dece.
        </p>
      </div>
    </section>
  );
};

export default PackagesSection;
