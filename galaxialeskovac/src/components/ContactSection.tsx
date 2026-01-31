import { MapPin, Phone, Clock, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section className="relative py-24 overflow-hidden" id="contact">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Posetite </span>
              <span className="text-gradient-galaxy">Galaxia</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Dođite i uverite se zašto smo omiljeno mesto za dečije rođendane u Leskovcu
            </p>
            
            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-1">Adresa</h3>
                  <p className="text-muted-foreground">Svetozara Miletića bb, Leskovac</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-neon-pink" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-1">Telefon</h3>
                  <a href="tel:+381605401407" className="text-muted-foreground hover:text-neon-pink transition-colors">
                    060 5401 407
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-1">Radno vreme</h3>
                  <p className="text-muted-foreground">Svaki dan: 09:00 – 22:00</p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-10">
              <Button variant="galaxy" size="xl" asChild>
                <a href="tel:+381605401407">
                  <Rocket className="w-5 h-5 mr-2" />
                  Pozovite nas
                </a>
              </Button>
            </div>
          </div>
          
          {/* Map */}
          <div className="relative rounded-3xl overflow-hidden border border-border h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.8447284789997!2d21.9461!3d42.9981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755a0c3c1f9c3e1%3A0x1234567890abcdef!2sLeskovac%2C%20Serbia!5e0!3m2!1sen!2srs!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125"
            />
            
            {/* Map overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
