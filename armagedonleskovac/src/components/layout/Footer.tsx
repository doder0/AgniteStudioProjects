import { Link } from "react-router-dom";
import { Dumbbell, Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
              OSTANI U FORMI I INFORMISAN
            </h3>
            <p className="text-muted-foreground mb-6">
              Prijavi se na naš newsletter i dobij ekskluzivne savete, promocije i novosti iz sveta fitnesa.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Tvoj email..."
                className="flex-1 bg-background border-border"
              />
              <Button type="submit">Prijavi se</Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold tracking-wider text-foreground">
                  ARMAGEDDON
                </span>
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground -mt-1">
                  GYM & FITNESS
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Više od teretane - zajednica posvećena tvom uspehu. Moderni prostori, stručni treneri i neograničena motivacija.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-foreground mb-4">
              BRZI LINKOVI
            </h4>
            <ul className="space-y-2">
              {[
                { name: "O nama", path: "/o-nama" },
                { name: "Usluge i cene", path: "/usluge" },
                { name: "Raspored treninga", path: "/raspored" },
                { name: "Galerija", path: "/galerija" },
                { name: "Blog", path: "/blog" },
                { name: "Kontakt", path: "/kontakt" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-bold text-foreground mb-4">
              USLUGE
            </h4>
            <ul className="space-y-2">
              {[
                "Personalni treninzi",
                "Grupni treninzi",
                "HIIT programi",
                "Yoga & Pilates",
                "Cycling",
                "Planovi ishrane",
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold text-foreground mb-4">
              KONTAKT INFO
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Bulevar Oslobođenja 172<br />16000 Leskovac, Srbija
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+381641234567"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +381 64 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@armageddon.rs"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  info@armageddon.rs
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <p>Pon - Pet: 06:00 - 23:00</p>
                  <p>Sub: 08:00 - 20:00</p>
                  <p>Ned: 09:00 - 18:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Armageddon Gym & Fitness. Sva prava zadržana.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privatnost" className="hover:text-primary transition-colors">
                Politika privatnosti
              </Link>
              <Link to="/uslovi" className="hover:text-primary transition-colors">
                Uslovi korišćenja
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
