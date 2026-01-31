import { useState, useEffect } from "react";
import { Menu, X, Instagram, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Početna", href: "#home" },
  { name: "O Nama", href: "#about" },
  { name: "Programi", href: "#programs" },
  { name: "Cenovnik", href: "#pricing" },
  { name: "Raspored", href: "#schedule" },
  { name: "Galerija", href: "#gallery" },
  { name: "Kontakt", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="font-heading text-2xl md:text-3xl font-bold text-primary">
              PLAY
            </span>
            <span className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              GYM
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-heading text-sm text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://instagram.com/playgym"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Button variant="default" size="sm">
              Pridruži Se
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-20 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-lg text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/50"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://instagram.com/playgym"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="tel:+381123456789"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a
                href="#contact"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <MapPin className="w-6 h-6" />
              </a>
            </div>
            <Button variant="default" className="mt-4">
              Pridruži Se
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
