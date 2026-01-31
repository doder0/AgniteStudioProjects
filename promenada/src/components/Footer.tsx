const Footer = () => {
  return (
    <footer className="bg-charcoal-deep border-t border-border/30 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-purple via-neon-pink to-gold flex items-center justify-center">
              <span className="text-foreground font-serif text-sm font-bold">P</span>
            </div>
            <span className="font-serif text-xl tracking-wide text-foreground">
              Promenada
            </span>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-sm text-center">
            Jedi · Pij · Voli · Uživaj
          </p>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Promenada Cafe & Restaurant
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
