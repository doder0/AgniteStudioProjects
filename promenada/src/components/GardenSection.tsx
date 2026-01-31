import { Sparkles, Music, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import gardenImg from "@/assets/garden.jpg";

const features = [
  {
    icon: Sparkles,
    title: "Privatne Proslave",
    description: "Proslavite posebne trenutke u našim ekskluzivnim prostorima",
  },
  {
    icon: Music,
    title: "Živa Muzika",
    description: "Vikend večeri oživljavaju uz pažljivo odabranu živu muziku",
  },
  {
    icon: Users,
    title: "Poslovni Događaji",
    description: "Impresionirajte svoje klijente u našim elegantnim privatnim prostorima",
  },
];

const GardenSection = () => {
  return (
    <section id="garden" className="py-24 md:py-32 bg-charcoal-deep relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-px h-64 bg-gradient-to-b from-transparent via-gold/30 to-transparent -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-px h-64 bg-gradient-to-b from-transparent via-gold/30 to-transparent -translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tl from-gold/20 via-transparent to-neon-purple/20 rounded-2xl blur-3xl" />
            <img
              src={gardenImg}
              alt="Promenada bašta terasa"
              className="relative rounded-xl w-full aspect-[4/5] object-cover shadow-2xl"
            />
            
            {/* Overlay Quote */}
            <div className="absolute bottom-8 left-8 right-8 bg-charcoal-deep/80 backdrop-blur-md rounded-lg p-6 border border-gold/10">
              <p className="font-serif text-xl text-foreground italic">
                "Pod zvezdama, okruženi toplinom"
              </p>
              <p className="text-muted-foreground text-sm mt-2">— Obećanje Naše Bašte</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
              Bašta & Događaji
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              Vaše Urbano
              <br />
              <span className="text-gradient-neon">Utočište</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Zakoračite u našu čarobnu baštansku terasu—skrivenu oazu u srcu grada.
              Lampice igraju iznad vas dok večeravate na otvorenom, stvarajući savršenu
              pozadinu za sve, od romantičnih večera do živahnih proslava.
            </p>

            {/* Features */}
            <div className="space-y-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="gold" size="lg" asChild>
              <a href="#contact">Rezerviši Događaj</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GardenSection;
