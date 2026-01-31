import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal-deep relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
              Posetite Nas
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              Vaš Sto
              <br />
              <span className="text-gradient-gold">Čeka</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Bilo da je u pitanju opuštena kafa, poslovni ručak, ili nezaboravna večera,
              ovde smo da svaku posetu učinimo posebnom. Rezervišite vaše iskustvo danas.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Rezervacije</p>
                  <a
                    href="tel:062422060"
                    className="text-foreground hover:text-gold transition-colors duration-300 font-medium"
                  >
                    062 / 422 - 060
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Radno Vreme</p>
                  <p className="text-foreground font-medium">Svakog dana 08:00 — 01:00</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Lokacija</p>
                  <p className="text-foreground font-medium">Centar Grada, Srbija</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <p className="text-muted-foreground text-sm">Pratite nas:</p>
              <a
                href="https://instagram.com/promenada.cafe.restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/50 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/50 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Reservation Form */}
          <div className="card-premium rounded-2xl p-8 md:p-12">
            <h3 className="font-serif text-2xl text-foreground mb-6">
              Rezervišite Sto
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-muted-foreground text-sm mb-2 block">
                    Ime
                  </label>
                  <input
                    type="text"
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors duration-300"
                    placeholder="Vaše ime"
                  />
                </div>
                <div>
                  <label className="text-muted-foreground text-sm mb-2 block">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors duration-300"
                    placeholder="Vaš telefon"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-muted-foreground text-sm mb-2 block">
                    Datum
                  </label>
                  <input
                    type="date"
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold/50 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="text-muted-foreground text-sm mb-2 block">
                    Vreme
                  </label>
                  <select className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold/50 transition-colors duration-300">
                    <option value="">Izaberite vreme</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-muted-foreground text-sm mb-2 block">
                  Broj Gostiju
                </label>
                <select className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold/50 transition-colors duration-300">
                  <option value="">Izaberite broj gostiju</option>
                  <option value="1">1 Gost</option>
                  <option value="2">2 Gosta</option>
                  <option value="3">3 Gosta</option>
                  <option value="4">4 Gosta</option>
                  <option value="5">5 Gostiju</option>
                  <option value="6">6+ Gostiju</option>
                </select>
              </div>
              <div>
                <label className="text-muted-foreground text-sm mb-2 block">
                  Posebni Zahtevi
                </label>
                <textarea
                  rows={3}
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors duration-300 resize-none"
                  placeholder="Bilo kakvi posebni zahtevi ili napomene..."
                />
              </div>
              <Button variant="gold" size="lg" className="w-full">
                Rezerviši
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
