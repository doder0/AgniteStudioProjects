import { Instagram, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative bg-muted/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-display text-2xl font-medium text-foreground">
              Terasa
            </h3>
            <p className="mb-4 font-body text-sm text-muted-foreground">
              Caffe & Restaurant
            </p>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              Vaše omiljeno mesto za kafu, hranu i nezaboravne trenutke u Leskovcu.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-lg font-medium text-foreground">
              Kontakt
            </h4>
            <div className="space-y-3">
              <a 
                href="tel:+381648736831" 
                className="flex items-center gap-3 font-body text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" />
                064 873 6831
              </a>
              <div className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Južnomoravskih brigada 40,<br />16000 Leskovac, Srbija</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 font-display text-lg font-medium text-foreground">
              Radno vreme
            </h4>
            <div className="space-y-2 font-body text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Svakog dana</span>
              </div>
              <p className="pl-6">08:00 - 00:00</p>
            </div>
          </div>

          {/* Social & Map */}
          <div>
            <h4 className="mb-4 font-display text-lg font-medium text-foreground">
              Pratite nas
            </h4>
            <a
              href="https://instagram.com/terasa_caffe_restaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 font-body text-sm text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="h-4 w-4" />
              @terasa_caffe_restaurant
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 overflow-hidden rounded-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2937.8!2d21.9461!3d43.0069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755a9c9c9c9c9c9%3A0x0!2sJu%C5%BEnomoravskih%20brigada%2040%2C%20Leskovac!5e0!3m2!1sen!2srs!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Terasa lokacija"
            className="grayscale transition-all duration-500 hover:grayscale-0"
          />
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Terasa Caffe Restaurant. Sva prava zadržana.
          </p>
          
          {/* Mobile Call Button */}
          <div className="md:hidden">
            <Button variant="cta" size="lg" asChild>
              <a href="tel:+381648736831">
                <Phone className="mr-2 h-4 w-4" />
                Pozovi odmah
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
