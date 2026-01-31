import { motion } from 'framer-motion';
import { Shield, Heart, Sparkles, Users } from 'lucide-react';

const ExperienceSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Svemirska avantura',
      description: 'Jedinstven prostor dizajniran kao svemirska stanica sa planetama, zvezdama i kosmičkim elementima.',
    },
    {
      icon: Shield,
      title: 'Potpuna bezbednost',
      description: 'Mekane podloge, zaobljeni uglovi i stalni nadzor osiguravaju bezbrižnu igru za vašu decu.',
    },
    {
      icon: Heart,
      title: 'Pažljiva organizacija',
      description: 'Svaki rođendan je pažljivo isplaniran - od dekoracije do animacije i posluženja.',
    },
    {
      icon: Users,
      title: 'Profesionalni tim',
      description: 'Naši animatori su obučeni da svako dete oseti magiju i posebnost svog slavlja.',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden" id="experience">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative container mx-auto px-4">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Ulazak u </span>
            <span className="text-gradient-galaxy">Galaxia svet</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Više od igraonice – to je portal u svet mašte gde svaki trenutak postaje nezaboravan
          </p>
        </motion.div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="group card-space rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-neon-cyan" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2 font-display">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Decorative element */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-20 top-1/3 w-60 h-60 rounded-full bg-neon-cyan/5 blur-3xl" />
      </div>
    </section>
  );
};

export default ExperienceSection;
