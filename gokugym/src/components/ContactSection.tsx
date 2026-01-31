import { Button } from "@/components/ui/button";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Info */}
          <div>
            <p className="text-primary font-medium uppercase tracking-[0.3em] mb-4">
              Kontakt
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
              PRIDRUŽI SE{" "}
              <span className="text-gradient-energy">POKRETU</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Spreman si za transformaciju? Dođi i oseti energiju Goku Gym-a. Prva probna sesija je potpuno besplatna.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Lokacija</p>
                  <p className="text-muted-foreground">Leskovac, Srbija</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Telefon</p>
                  <p className="text-muted-foreground">+381 16 XXX XXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <p className="text-muted-foreground">info@gokugym.rs</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Instagram className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Instagram</p>
                  <a
                    href="https://instagram.com/gokugym"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    @gokugym
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - CTA Card */}
          <div className="power-card p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6 animate-pulse-glow">
              <Zap className="w-10 h-10 text-primary" />
            </div>

            <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              BESPLATAN PROBNI TRENING
            </h3>

            <p className="text-muted-foreground mb-8">
              Iskusi atmosferu Goku Gym-a potpuno besplatno. Zakaži svoju prvu sesiju i započni transformaciju danas.
            </p>

            <div className="space-y-4">
              <Button variant="energy" size="xl" className="w-full">
                Zakaži Trening
              </Button>
              <Button variant="power" size="lg" className="w-full">
                Pogledaj Cenovnik
              </Button>
            </div>

            {/* Working Hours */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                Radno Vreme
              </p>
              <p className="text-foreground">
                Pon - Pet: 06:00 - 22:00
              </p>
              <p className="text-foreground">
                Sub - Ned: 08:00 - 20:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Import Zap icon at the top
import { Zap } from "lucide-react";

export default ContactSection;
