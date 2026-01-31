import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Marija S.',
    role: 'Mama malog Nike',
    content: 'Nika je bio oduševljen! Animatori su fantastični, prostor je čist i bezbedan. Definitivno se vraćamo za sledeći rođendan.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Dragan M.',
    role: 'Tata male Sare',
    content: 'Sve je bilo savršeno organizovano. Deca su se igrala bez prestanka, a mi roditelji smo mogli da se opustimo. Preporučujem svima!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jelena P.',
    role: 'Mama malog Luke',
    content: 'Treći put slavimo rođendan u Galaxia i uvek je isto dobro. Personalizovana dekoracija, ukusna torta i osmesi na licima dece.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Milan T.',
    role: 'Tata male Maje',
    content: 'Svemirska tema je odlična! Maja i njeni drugari nisu mogli da prestanu da pričaju o igraonici danima nakon rođendana.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden" id="testimonials">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-neon-cyan/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-neon-pink/5 blur-3xl" />
      
      <div className="relative container mx-auto px-4">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan text-sm font-medium mb-4">
            Utisci roditelja
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Šta kažu </span>
            <span className="text-gradient-galaxy">naši gosti</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stotine srećnih porodica već je proslavilo rođendane u Galaxia
          </p>
        </motion.div>
        
        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="group card-space rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              {/* Content */}
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-planet-gold fill-planet-gold" />
                ))}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-neon-cyan flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { number: '500+', label: 'Proslavljenih rođendana' },
            { number: '5000+', label: 'Srećne dece' },
            { number: '4.9', label: 'Prosečna ocena' },
            { number: '3+', label: 'Godine iskustva' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center p-4">
              <p className="text-3xl md:text-4xl font-bold text-gradient-galaxy font-display">
                {stat.number}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
