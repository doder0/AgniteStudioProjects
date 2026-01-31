import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const quickLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.pricing"), href: "#pricing" },
    { name: t("nav.trainers"), href: "#trainers" },
    { name: t("nav.schedule"), href: "#schedule" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const services = [
    t("services.personal.title"),
    t("services.boxing.title"),
    t("services.group.title"),
    t("services.weight.title"),
    t("services.fatloss.title"),
    t("services.strength.title"),
  ];

  return (
    <footer className="bg-gym-dark border-t border-border/30 py-16">
      <div className="gym-container px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="inline-block mb-6">
              <span className="font-display text-3xl tracking-wider text-foreground">
                FITNESS <span className="text-primary">ORIGINAL</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-sm bg-card border border-border flex items-center justify-center hover:border-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-sm bg-card border border-border flex items-center justify-center hover:border-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-sm bg-card border border-border flex items-center justify-center hover:border-primary transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-sm bg-card border border-border flex items-center justify-center hover:border-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-foreground tracking-wider mb-6">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl text-foreground tracking-wider mb-6">
              {t("footer.services")}
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl text-foreground tracking-wider mb-6">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>Mediteranska 15</li>
              <li>Budva, Crna Gora</li>
              <li className="pt-2">+382 67 123 456</li>
              <li>info@fitnessoriginal.me</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Fitness Original. {t("footer.rights")}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
