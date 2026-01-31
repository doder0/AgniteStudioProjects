import { Shield, Clock, Sparkles, Users, Heart, Award } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Maksimalna bezbednost',
    description: 'Mekane podloge, video nadzor i obučeno osoblje',
  },
  {
    icon: Clock,
    title: 'Fleksibilno vreme',
    description: 'Radimo svakog dana od 9 do 22 časa',
  },
  {
    icon: Sparkles,
    title: 'Čist prostor',
    description: 'Redovna dezinfekcija i održavanje higijene',
  },
  {
    icon: Users,
    title: 'Profesionalni animatori',
    description: 'Kreativni programi prilagođeni uzrastu',
  },
  {
    icon: Heart,
    title: 'Pažnja prema detaljima',
    description: 'Svako slavlje je posebno i jedinsteno',
  },
  {
    icon: Award,
    title: 'Provereni kvalitet',
    description: 'Godina iskustva i stotine zadovoljnih roditelja',
  },
];

const WhyUsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden" id="why-us">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />
      
      <div className="relative container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Zašto roditelji </span>
            <span className="text-gradient-galaxy">biraju Galaxia</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Verujemo da svako dete zaslužuje magično slavlje, a svaki roditelj – mir i sigurnost
          </p>
        </div>
        
        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="group flex items-start gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-card"
            >
              {/* Icon */}
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-neon-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 text-neon-cyan" />
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1 font-display">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
