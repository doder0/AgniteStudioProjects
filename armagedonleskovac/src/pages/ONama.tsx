import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Heart, 
  Users, 
  Trophy,
  ArrowRight,
  Award,
  Clock,
  Dumbbell
} from "lucide-react";
import groupTraining from "@/assets/group-training.jpg";
import personalTraining from "@/assets/personal-training.jpg";
import gymInterior from "@/assets/gym-interior.jpg";

const values = [
  {
    icon: Heart,
    title: "Inkluzivnost",
    description: "Svako je dobrodošao. Bez obzira na godine, nivo forme ili iskustvo - ovde je tvoje mesto."
  },
  {
    icon: Target,
    title: "Fokus na rezultate",
    description: "Merimo uspeh konkretnim rezultatima. Pratimo tvoj napredak i prilagođavamo pristup."
  },
  {
    icon: Users,
    title: "Zajednica",
    description: "Više od teretane - gradimo zajednicu koja se podržava i motiviše svakodnevno."
  },
  {
    icon: Trophy,
    title: "Izvrsnost",
    description: "U svemu što radimo težimo ka savršenstvu - od opreme do usluge."
  }
];

const team = [
  {
    name: "Marko Jovanović",
    role: "Glavni trener & Vlasnik",
    specialty: "Strength & Conditioning",
    certifications: "NSCA-CSCS, NASM-CPT",
    experience: "15 godina iskustva",
    image: "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?w=400&h=400&fit=crop",
    bio: "Bivši profesionalni rukometaš, Marko je svoju strast za fitnesom pretvorio u karijeru. Specijalizovan za snagu i kondiciju, pomaže članovima da ostvare vrhunske rezultate."
  },
  {
    name: "Ana Mitrović",
    role: "Voditeljka grupnih programa",
    specialty: "HIIT, Yoga, Pilates",
    certifications: "ACE-GFI, RYT-200",
    experience: "10 godina iskustva",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop",
    bio: "Ana veruje da fitness treba da bude zabavan. Njena energija i pozitivan pristup motivišu članove da prevaziđu svoje granice uz osmeh."
  },
  {
    name: "Stefan Todorović",
    role: "Personalni trener",
    specialty: "Bodybuilding, Transformacije",
    certifications: "ISSA-CPT, Precision Nutrition",
    experience: "8 godina iskustva",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
    bio: "Stefan je pomogao stotinama klijenata da transformišu svoja tela i živote. Specijalizovan za planove ishrane i trening programa za gubitak težine."
  },
  {
    name: "Milica Pavlović",
    role: "Nutricionista & Trener",
    specialty: "Planovi ishrane, Wellness",
    certifications: "MSc Nutrition, ACE-CPT",
    experience: "7 godina iskustva",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=400&fit=crop",
    bio: "Milica kombinuje stručnost iz oblasti ishrane sa praktičnim treningom. Pomaže članovima da naprave održive promene u načinu života."
  }
];

const stats = [
  { number: "2018", label: "Godina osnivanja" },
  { number: "500+", label: "Aktivnih članova" },
  { number: "15+", label: "Stručnih trenera" },
  { number: "30+", label: "Grupnih časova nedeljno" }
];

const ONama = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${gymInterior})` }}
        />
        <div className="absolute inset-0 gradient-hero" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              NAŠA <span className="text-primary">PRIČA</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Armageddon Gym & Fitness je nastao iz strasti prema fitnesu i želje da stvorimo 
              prostor gde svako može da ostvari svoje ciljeve. Od 2018. godine pomažemo 
              ljudima da transformišu svoje živote.
            </p>
            <p className="text-muted-foreground">
              Verujemo da fitness nije samo o fizičkoj snazi - to je put ka boljem mentalnom 
              zdravlju, samopouzdanju i kvalitetnijem životu. Naša misija je da budemo 
              tvoj partner na tom putu.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
                  {stat.number}
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={groupTraining} 
                alt="Zajednica Armageddon teretane na grupnom treningu" 
                className="rounded-2xl w-full"
              />
            </div>
            <div>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    NAŠA MISIJA
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg">
                  Pružiti svakome pristup vrhunskoj fitness opremi, stručnom vođstvu i 
                  podržavajućoj zajednici koja motiviše na postizanje ličnih ciljeva i 
                  unapređenje kvaliteta života.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    NAŠA VIZIJA
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg">
                  Postati referentna tačka za fitness u regionu - mesto gde se rađaju 
                  transformacije, grade prijateljstva i stvaraju bolje verzije nas samih.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              NAŠE <span className="text-primary">VREDNOSTI</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Principi koji vode sve što radimo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div 
                key={value.title}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              UPOZNAJ <span className="text-primary">TIM</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stručnjaci posvećeni tvom uspehu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div 
                key={member.name}
                className="group rounded-xl bg-secondary/50 border border-border hover:border-primary/30 overflow-hidden transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role} u Armageddon teretani`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Dumbbell className="h-4 w-4 text-primary" />
                      <span>{member.specialty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span>{member.certifications}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{member.experience}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              POSTANI DEO ZAJEDNICE
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Pridruži se stotinama zadovoljnih članova i započni svoju transformaciju danas.
            </p>
            <Button variant="hero" asChild>
              <Link to="/kontakt">
                Zakaži besplatan trening
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ONama;
