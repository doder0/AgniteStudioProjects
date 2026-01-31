import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-heading text-2xl font-bold text-primary">PLAY</span>
              <span className="font-heading text-2xl font-bold text-foreground">GYM</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed mb-6">
              Tvoj partner u fitness transformaciji od 2014. godine. 
              Disciplina. Rezultati. Zajednica.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/playgym"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-4 h-4 text-foreground/70 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://facebook.com/playgym"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors group"
              >
                <Facebook className="w-4 h-4 text-foreground/70 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm uppercase text-foreground mb-6">
              Brzi Linkovi
            </h4>
            <ul className="space-y-3">
              {["O Nama", "Programi", "Cenovnik", "Raspored", "Galerija", "Kontakt"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-foreground/60 hover:text-primary text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading text-sm uppercase text-foreground mb-6">
              Programi
            </h4>
            <ul className="space-y-3">
              {["Program za Početnike", "Personalni Treninzi", "Grupni Treninzi", "HIIT", "Yoga", "Spinning"].map((program) => (
                <li key={program}>
                  <a
                    href="#programs"
                    className="text-foreground/60 hover:text-primary text-sm transition-colors"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm uppercase text-foreground mb-6">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground/60 text-sm">
                  Trg revolucije<br />16000 Leskovac
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+381161234567" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                  +381 16 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@playgym.rs" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                  info@playgym.rs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground/50 text-sm">
              © {currentYear} PlayGym Leskovac. Sva prava zadržana.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-foreground/50 hover:text-primary text-sm transition-colors">
                Politika privatnosti
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary text-sm transition-colors">
                Uslovi korišćenja
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
