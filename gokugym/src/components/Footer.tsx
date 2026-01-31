import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl text-gradient-energy">
              GOKU GYM
            </span>
            <span className="text-muted-foreground text-sm">
              © 2024
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#hero"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Početna
            </a>
            <a
              href="#programs"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Programi
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Kontakt
            </a>
          </div>

          {/* Social */}
          <a
            href="https://instagram.com/gokugym"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors"
          >
            <Instagram size={20} />
            <span className="text-sm">@gokugym</span>
          </a>
        </div>

        {/* Tagline */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          "Tvoja snaga nema granica" — Leskovac, Srbija
        </p>
      </div>
    </footer>
  );
};

export default Footer;
