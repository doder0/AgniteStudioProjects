import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30 relative">
      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-20 bg-gradient-to-b from-primary to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-20 bg-gradient-to-b from-primary to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-heading text-primary text-sm tracking-[0.3em] mb-4">
            KONTAKT
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            PRONAĐI <span className="text-primary italic-slant">NAS</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-8">
              Posetite Nas
            </h3>

            <div className="space-y-6 mb-10">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-sm uppercase text-foreground mb-1">Adresa</h4>
                  <p className="text-foreground/70">
                    Trg revolucije<br />
                    16000 Leskovac, Srbija
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-sm uppercase text-foreground mb-1">Telefon</h4>
                  <a href="tel:+381161234567" className="text-foreground/70 hover:text-primary transition-colors">
                    +381 16 123 4567
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-sm uppercase text-foreground mb-1">Email</h4>
                  <a href="mailto:info@playgym.rs" className="text-foreground/70 hover:text-primary transition-colors">
                    info@playgym.rs
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-sm uppercase text-foreground mb-1">Radno Vreme</h4>
                  <p className="text-foreground/70">
                    Pon - Pet: 06:00 - 23:00<br />
                    Sub - Ned: 08:00 - 20:00
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-heading text-sm uppercase text-foreground mb-4">Prati Nas</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/playgym"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
                >
                  <Instagram className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://facebook.com/playgym"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
                >
                  <Facebook className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Button variant="hero" size="lg">
                Zakaži Besplatan Trening
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="absolute -inset-2 border-2 border-primary/20 -z-10" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.8647082376074!2d21.9454!3d42.998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47553e7c7c7c7c7c%3A0x0!2sTrg%20revolucije%2C%20Leskovac!5e0!3m2!1sen!2srs!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PlayGym Lokacija"
              className="w-full"
            />
            {/* Yellow corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-primary" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
