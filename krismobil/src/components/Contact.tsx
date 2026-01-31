import { MapPin, Phone, Clock, MessageCircle, Instagram, Mail } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const whatsappMessage = `Zdravo, moje ime je ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/381601234567?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <section id="kontakt" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-3 text-sm uppercase tracking-wider">Kontakt</p>
          <h2 className="heading-lg text-foreground mb-4">
            Posetite nas ili se javite
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card-glass p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Adresa</h4>
                  <p className="text-muted-foreground text-sm">Moše Pijade 9, Leskovac</p>
                </div>
              </div>

              <div className="card-glass p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                  <a href="tel:+381601234567" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    +381 60 123 4567
                  </a>
                </div>
              </div>

              <div className="card-glass p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Radno vreme</h4>
                  <p className="text-muted-foreground text-sm">Pon-Sub: 09:00 - 20:00</p>
                </div>
              </div>

              <div className="card-glass p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Instagram</h4>
                  <a 
                    href="https://instagram.com/krismobil" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    @krismobil
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="card-glass overflow-hidden h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.3041456785!2d21.9467!3d42.9981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755a1c0f14f0001%3A0x4e0d9d8d8a1b8c0a!2sMo%C5%A1e%20Pijade%2C%20Leskovac!5e0!3m2!1sen!2srs!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KRIS MOBIL lokacija"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-glass p-6 md:p-8">
            <h3 className="heading-md text-foreground mb-6">Pošaljite nam poruku</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Vaše ime
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Unesite vaše ime"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Broj telefona
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Unesite broj telefona"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Poruka
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Opišite problem sa vašim telefonom..."
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Pošalji poruku
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
