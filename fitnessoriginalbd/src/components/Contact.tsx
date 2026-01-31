import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t("contact.location"),
      value: "Mediteranska 15, Budva, Montenegro",
    },
    {
      icon: Phone,
      label: t("contact.phoneLabel"),
      value: "+382 67 123 456",
    },
    {
      icon: Mail,
      label: t("contact.emailLabel"),
      value: "info@fitnessoriginal.me",
    },
    {
      icon: Clock,
      label: t("contact.hours"),
      value: t("contact.hoursValue"),
    },
  ];

  return (
    <section id="contact" className="gym-section bg-gym-gradient-subtle" ref={ref}>
      <div className="gym-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="gym-divider" />
          <h2 className="gym-heading-lg text-foreground mb-4">
            {t("contact.title")} <span className="gym-text-gradient">{t("contact.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder={t("contact.name")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-card border border-border rounded-sm px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder={t("contact.email")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-card border border-border rounded-sm px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <input
                  type="tel"
                  placeholder={t("contact.phone")}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-card border border-border rounded-sm px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder={t("contact.message")}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-card border border-border rounded-sm px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                />
              </div>
              <button type="submit" className="gym-button-primary w-full">
                {t("contact.send")}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    <p className="text-foreground text-sm">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-sm bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="https://wa.me/38267123456"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-sm bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-foreground" />
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-card border border-border rounded-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11894.252036186952!2d18.8316424!3d42.2872039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd64a58fc2abb%3A0x70e8b8f8b89d9bb7!2sBudva%2C%20Montenegro!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
