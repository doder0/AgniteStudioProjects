import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Dumbbell, 
  Users, 
  Award, 
  Sparkles, 
  ArrowRight, 
  Quote,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";
import groupTraining from "@/assets/group-training.jpg";
import personalTraining from "@/assets/personal-training.jpg";
import gymInterior from "@/assets/gym-interior.jpg";
import Layout from "@/components/layout/Layout";

const benefits = [
  {
    icon: Dumbbell,
    title: "Vrhunska oprema",
    description: "Najmoderniji sprave i slobodni tegovi poznatih brendova za optimalne rezultate."
  },
  {
    icon: Users,
    title: "Stručni treneri",
    description: "Sertifikovani personalni treneri sa godinama iskustva i dokazanim rezultatima."
  },
  {
    icon: Award,
    title: "Grupni programi",
    description: "Preko 30 grupnih časova nedeljno - HIIT, Yoga, Cycling, Functional i više."
  },
  {
    icon: Sparkles,
    title: "Premium ambijent",
    description: "Moderni, čisti prostori sa vrhunskom klimatizacijom i svlačionicama."
  }
];

const testimonials = [
  {
    name: "Marko Petrović",
    role: "Član 2 godine",
    quote: "Armageddon mi je promenio život. Skinuo sam 25kg i nikada se nisam osećao bolje. Treneri su fantastični!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    name: "Ana Đorđević",
    role: "Član 1 godina",
    quote: "Grupni treninzi su neverovatni! Atmosfera, muzika, energija - svakog dana se radujem dolasku.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    name: "Stefan Nikolić",
    role: "Član 3 godine",
    quote: "Probao sam mnogo teretana, ali niti jedna nije na ovom nivou. Oprema, čistoća, ljudi - sve je savršeno.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  }
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary font-medium">Leskovac, Srbija</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-none mb-6 animate-slide-up">
              SNAGA{" "}
              <span className="text-primary">ZAPOČINJE</span>{" "}
              OVDE
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-8 animate-slide-up stagger-2">
              Više od teretane - zajednica posvećena tvom uspehu. 
              Moderni prostori, stručni treneri i neograničena motivacija.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up stagger-3">
              <Button variant="hero" asChild>
                <Link to="/kontakt">
                  Zakaži BESPLATAN trening
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/usluge">Pogledaj cene</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              ZAŠTO <span className="text-primary">ARMAGEDDON</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Kreirali smo prostor gde svako može da ostvari svoje fitness ciljeve, 
              bez obzira na nivo iskustva ili trenutnu formu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="group p-8 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                🎉 DOVEDI PRIJATELJA, DOBIJAŠ MESEC DŽABA!
              </h3>
              <p className="text-primary-foreground/80">
                Podeli energiju i uštedi! Tvoj prijatelj dobija popust, a ti besplatan mesec članarine.
              </p>
            </div>
            <Button variant="outline" className="border-2 border-primary-foreground/80 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/kontakt">Saznaj više</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              POGLEDAJ <span className="text-primary">PROSTOR</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Moderni, čisti i inspirativni prostori dizajnirani za tvoj uspeh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="relative group overflow-hidden rounded-xl aspect-square md:row-span-2 md:aspect-auto">
              <img 
                src={groupTraining} 
                alt="Grupni trening u Armageddon teretani - dinamična HIIT sesija sa entuzijastičnim članovima" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <span className="text-sm font-medium text-primary">GRUPNI TRENINZI</span>
                  <p className="text-foreground font-heading text-xl">Energija zajednice</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl aspect-video md:aspect-auto">
              <img 
                src={personalTraining} 
                alt="Personalni trening - profesionalni trener pomaže članu sa pravilnom formom" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <span className="text-sm font-medium text-primary">PERSONALNI TRENINZI</span>
                  <p className="text-foreground font-heading text-xl">1 na 1 podrška</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl aspect-video md:aspect-auto">
              <img 
                src={gymInterior} 
                alt="Moderni interijer Armageddon teretane sa vrhunskom fitness opremom" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <span className="text-sm font-medium text-primary">OPREMA</span>
                  <p className="text-foreground font-heading text-xl">Vrhunski kvalitet</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link to="/galerija">
                Pogledaj celu galeriju
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
                USLUGE <span className="text-primary">PRILAGOĐENE</span> TEBI
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Bilo da si početnik ili napredni sportista, imamo program za tebe. 
                Naši stručnjaci će ti pomoći da ostvariš svoje ciljeve.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Pristup svim zonama teretane 7 dana u nedelji",
                  "Neograničeni grupni treninzi sa sertifikovanim instruktorima",
                  "Besplatni uvodni personalni trening",
                  "Sauna i wellness zona",
                  "Individualni planovi ishrane"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Button asChild>
                <Link to="/usluge">
                  Pogledaj sve usluge i cene
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src={personalTraining} 
                  alt="Personalni trener demonstrira vežbu članu teretane" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-card">
                <p className="font-heading text-4xl font-bold">500+</p>
                <p className="text-sm opacity-90">Aktivnih članova</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              ŠTA <span className="text-primary">ČLANOVI</span> KAŽU
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stotine zadovoljnih članova transformisalo je svoje živote uz nas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.name}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <Quote className="h-8 w-8 text-primary mb-6" />
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} - zadovoljan član Armageddon teretane`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              SPREMAN DA POČNEŠ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Zakaži svoj besplatni probni trening danas i započni transformaciju. 
              Bez obaveza, bez pritiska - samo čista motivacija.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" asChild>
                <Link to="/kontakt">
                  Zakaži besplatan trening
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/o-nama">Upoznaj naš tim</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
