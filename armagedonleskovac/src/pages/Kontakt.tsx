import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  ChevronDown,
  Instagram,
  Facebook,
  Youtube
} from "lucide-react";

const faqs = [
  {
    question: "Imate li parking?",
    answer: "Da! Imamo besplatan parking za članove direktno ispred teretane sa preko 50 parking mesta. Za članove sa Premium paketom, obezbeđujemo rezervisana mesta."
  },
  {
    question: "Da li nudite probni trening?",
    answer: "Naravno! Nudimo potpuno besplatan probni trening za sve nove posetioce. Možete isprobati bilo koji grupni trening ili samostalno vežbanje uz vođstvo našeg trenera."
  },
  {
    question: "Koji su vam radni sati?",
    answer: "Radimo svakog dana! Ponedeljak - Petak: 06:00 - 23:00, Subota: 08:00 - 20:00, Nedelja: 09:00 - 18:00. Premium članovi imaju 24/7 pristup."
  },
  {
    question: "Da li mogu da zamrznem članarinu?",
    answer: "Da, Standard i Premium članovi mogu zamrznuti članarinu jednom godišnje na period do 30 dana. Kontaktirajte recepciju za više informacija."
  },
  {
    question: "Šta je uključeno u članarinu?",
    answer: "Zavisi od paketa! Bazični uključuje pristup svim zonama teretane. Standard dodaje grupne treninge i wellness. Premium uključuje sve plus personalne treninge i plan ishrane."
  },
  {
    question: "Da li imate opremu za iznajmljivanje?",
    answer: "Imamo peškire za iznajmljivanje (besplatno za Premium članove). Preporučujemo da donesete sopstvenu sportsku opremu i patike za unutrašnju upotrebu."
  },
  {
    question: "Mogu li dovesti prijatelja?",
    answer: "Naravno! Svaki član može dovesti prijatelja na besplatan probni trening. Plus, imamo promociju 'Dovedi prijatelja' - ako se prijatelj učlani, dobijate mesec dana gratis!"
  },
  {
    question: "Da li imate programe za početnike?",
    answer: "Apsolutno! Imamo specijalne programe za početnike koji uključuju uvodna predavanja, tehniku vežbi i osnovne treninge. Naši treneri su tu da vam pomognu od prvog dana."
  }
];

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Poruka poslata!",
      description: "Hvala vam na interesovanju. Javićemo vam se uskoro!",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-primary">KONTAKT</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Imate pitanje ili želite da zakažete probni trening? 
              Javite nam se! Naš tim je tu da vam pomogne.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                KONTAKT INFORMACIJE
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Adresa</h3>
                    <p className="text-muted-foreground">
                      Bulevar Oslobođenja 123<br />
                      21000 Novi Sad, Srbija
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                    <a href="tel:+381641234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +381 64 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:info@armageddon.rs" className="text-muted-foreground hover:text-primary transition-colors">
                      info@armageddon.rs
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Radno vreme</h3>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <p>Ponedeljak - Petak: 06:00 - 23:00</p>
                      <p>Subota: 08:00 - 20:00</p>
                      <p>Nedelja: 09:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Pratite nas</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                  POŠALJI PORUKU
                </h2>
                <p className="text-muted-foreground mb-8">
                  Popunite formular i javićemo vam se u najkraćem roku.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Ime i prezime *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Vaše ime i prezime"
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vasa@email.com"
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+381 64 ..."
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Poruka *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Kako vam možemo pomoći?"
                      rows={5}
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Šalje se..."
                    ) : (
                      <>
                        Pošalji poruku
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.7665456145397!2d19.8300877!3d45.2551338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b1101a1c9c8ab%3A0x7a7b3a3f2f9f9f9f!2sBulevar%20oslobo%C4%91enja%2C%20Novi%20Sad!5e0!3m2!1sen!2srs!4v1703159200000!5m2!1sen!2srs"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokacija Armageddon Gym & Fitness"
          className="grayscale"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-transparent to-transparent" />
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
                ČESTO POSTAVLJANA <span className="text-primary">PITANJA</span>
              </h2>
              <p className="text-muted-foreground">
                Odgovori na najčešća pitanja naših članova
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="rounded-xl bg-secondary/50 border border-border overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold text-foreground">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`h-5 w-5 text-primary transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
