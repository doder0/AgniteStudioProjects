import { 
  Smartphone, 
  Battery, 
  Plug, 
  Camera, 
  Unlock, 
  Settings, 
  ShoppingBag, 
  RefreshCcw 
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Zamena ekrana",
    description: "Originalni i kvalitetni ekrani za sve modele telefona",
  },
  {
    icon: Battery,
    title: "Zamena baterije",
    description: "Nove baterije za duže trajanje vašeg uređaja",
  },
  {
    icon: Plug,
    title: "Popravka konektora",
    description: "Popravka USB-C, Lightning i audio priključaka",
  },
  {
    icon: Camera,
    title: "Popravka kamera",
    description: "Zamena i popravka prednjih i zadnjih kamera",
  },
  {
    icon: Unlock,
    title: "Otključavanje telefona",
    description: "Softversko i hardversko otključavanje",
  },
  {
    icon: Settings,
    title: "Softverski problemi",
    description: "Rešavanje svih softverskih problema i ažuriranja",
  },
  {
    icon: ShoppingBag,
    title: "Prodaja telefona",
    description: "Novi i polovni telefoni po povoljnim cenama",
  },
  {
    icon: RefreshCcw,
    title: "Otkup telefona",
    description: "Otkupljujemo vaše stare telefone po fer cenama",
  },
];

const Services = () => {
  return (
    <section id="usluge" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold mb-3 text-sm uppercase tracking-wider">Naše usluge</p>
          <h2 className="heading-lg text-foreground mb-4">
            Sve na jednom mestu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profesionalna popravka svih vrsta mobilnih telefona sa garancijom na kvalitet rada i delova
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-glass card-hover p-6 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-md text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
