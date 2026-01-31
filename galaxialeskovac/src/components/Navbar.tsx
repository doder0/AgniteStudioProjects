import { useState } from 'react';
import { Rocket, Star, X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  onBookingClick?: () => void;
}

const Navbar = ({ onBookingClick }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#experience', label: 'O nama' },
    { href: '#attractions', label: 'Atrakcije' },
    { href: '#packages', label: 'Paketi' },
    { href: '#testimonials', label: 'Utisci' },
    { href: '#gallery', label: 'Galerija' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Kontakt' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-neon-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
                <Rocket className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                GALAXIA
              </span>
            </a>
            
            {/* Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            {/* CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a 
                href="tel:+381605401407"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-foreground hover:bg-primary/20 transition-colors text-sm"
              >
                <Star className="w-4 h-4 text-neon-cyan" />
                060 5401 407
              </a>
              {onBookingClick && (
                <Button variant="galaxy" size="sm" onClick={onBookingClick}>
                  <Rocket className="w-4 h-4 mr-1" />
                  Rezerviši
                </Button>
              )}
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-card transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu panel */}
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-card border-l border-border p-6">
            {/* Close button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
            
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-neon-cyan flex items-center justify-center">
                <Rocket className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                GALAXIA
              </span>
            </div>
            
            {/* Links */}
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-foreground hover:bg-muted transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            
            {/* CTA */}
            <div className="mt-8 space-y-3">
              <a 
                href="tel:+381605401407"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground hover:bg-muted/80 transition-colors"
              >
                <Star className="w-4 h-4 text-neon-cyan" />
                060 5401 407
              </a>
              {onBookingClick && (
                <Button 
                  variant="galaxy" 
                  className="w-full" 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onBookingClick();
                  }}
                >
                  <Rocket className="w-4 h-4 mr-2" />
                  Rezerviši rođendan
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
