import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#usluge", label: "Usluge" },
    { href: "#zasto-mi", label: "Zašto mi" },
    { href: "#brendovi", label: "Brendovi" },
    { href: "#recenzije", label: "Recenzije" },
    { href: "#galerija", label: "Galerija" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">KRIS MOBIL</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="tel:+381601234567"
            className="hidden md:flex btn-primary items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Pozovi
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 animate-fade-in">
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+381601234567"
                className="btn-primary flex items-center justify-center gap-2 mt-2"
              >
                <Phone className="w-4 h-4" />
                Pozovi odmah
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
