import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Koliko unapred treba da rezervišem rođendan?',
    answer: 'Preporučujemo rezervaciju najmanje 2-3 nedelje unapred, posebno za vikende koji su najpopularniji. Za praznične dane, poželjno je rezervisati mesec dana ranije.',
  },
  {
    question: 'Da li mogu da donesem svoju tortu?',
    answer: 'Naravno! Možete doneti svoju tortu ili je naručiti kod nas. U paketima Mars i Venera torta je već uključena, ali možete je zameniti svojom ako želite.',
  },
  {
    question: 'Koji je minimalan i maksimalan broj dece?',
    answer: 'Minimalan broj dece je 8, a maksimalan zavisi od paketa - do 25 dece za privatne proslave. Za veće grupe, kontaktirajte nas za posebnu ponudu.',
  },
  {
    question: 'Da li roditelji mogu ostati tokom proslave?',
    answer: 'Apsolutno! Roditelji su dobrodošli da ostanu. Imamo udoban prostor za sedenje, besplatan WiFi, i u paketu Venera je uključen ketering i za odrasle.',
  },
  {
    question: 'Koje su uzrasne granice za decu?',
    answer: 'Igraonica je prilagođena deci uzrasta od 2 do 12 godina. Za najmlađe imamo poseban bezbedni kutak sa mekanim igračkama.',
  },
  {
    question: 'Šta ako se dete povredi?',
    answer: 'Bezbednost je naš prioritet. Sve podloge su mekane, uglovi zaobljeni, a naše osoblje je obučeno za prvu pomoć. Imamo i komplet za prvu pomoć uvek pri ruci.',
  },
  {
    question: 'Da li mogu da otkažem ili promenim datum?',
    answer: 'Da, besplatno otkazivanje ili promena datuma je moguća do 7 dana pre rezervisanog termina. Za kasnije promene, kontaktirajte nas.',
  },
  {
    question: 'Koje metode plaćanja prihvatate?',
    answer: 'Prihvatamo gotovinu i kartice. Depozit od 30% je potreban prilikom rezervacije, a ostatak se plaća na dan proslave.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 overflow-hidden" id="faq">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />
      
      <div className="relative container mx-auto px-4">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4 inline mr-1" />
            Česta pitanja
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Imate </span>
            <span className="text-gradient-galaxy">pitanja?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pronađite odgovore na najčešća pitanja o našim uslugama i rođendanskim proslavama
          </p>
        </motion.div>
        
        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className={`card-space rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-primary/30' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48 pb-5' : 'max-h-0'
                }`}
              >
                <p className="px-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Still have questions */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-4">
            Niste pronašli odgovor? Kontaktirajte nas direktno!
          </p>
          <a 
            href="tel:+381605401407"
            className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-pink transition-colors font-medium"
          >
            Pozovite: 060 5401 407
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
