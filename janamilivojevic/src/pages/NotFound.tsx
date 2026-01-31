import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Greška: Korisnik je pokušao da pristupi nepostojećoj stranici:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center">
        <h1 className="font-serif text-8xl md:text-9xl text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground font-light mb-8">
          Ova stranica ne postoji.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-foreground text-background font-medium text-sm tracking-wide hover:bg-foreground/90 transition-all duration-300"
        >
          Vrati se na početnu
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
