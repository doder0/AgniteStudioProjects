import { Phone, Instagram, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">KRIS MOBIL</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md mb-6">
              Profesionalan servis mobilnih telefona u Leskovcu. Brza popravka, kvalitetni delovi i garancija na svaku uslugu.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com/krismobil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/381601234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="mailto:info@krismobil.rs"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Brzi linkovi</h4>
            <ul className="space-y-2">
              <li>
                <a href="#usluge" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Usluge
                </a>
              </li>
              <li>
                <a href="#zasto-mi" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Zašto mi
                </a>
              </li>
              <li>
                <a href="#brendovi" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Brendovi
                </a>
              </li>
              <li>
                <a href="#recenzije" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Recenzije
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Moše Pijade 9, Leskovac</li>
              <li>
                <a href="tel:+381601234567" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  +381 60 123 4567
                </a>
              </li>
              <li className="text-muted-foreground text-sm">Pon-Sub: 09:00 - 20:00</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} KRIS MOBIL. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
