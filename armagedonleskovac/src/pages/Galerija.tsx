import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";
import groupTraining from "@/assets/group-training.jpg";
import personalTraining from "@/assets/personal-training.jpg";
import gymInterior from "@/assets/gym-interior.jpg";

const categories = ["Sve", "Oprema", "Grupni treninzi", "Atmosfera", "Tim"];

const galleryImages = [
  {
    src: heroImage,
    alt: "Moderni interijer Armageddon teretane sa premium opremom i dramatičnim osvetljenjem",
    category: "Oprema"
  },
  {
    src: groupTraining,
    alt: "Energični grupni HIIT trening sa entuzijastičnim članovima u industrijskom ambijentu",
    category: "Grupni treninzi"
  },
  {
    src: personalTraining,
    alt: "Personalni trener pruža individualno vođstvo članu tokom treninga snage",
    category: "Tim"
  },
  {
    src: gymInterior,
    alt: "Prostrana kardio zona sa najmodernijim trakama i biciklima",
    category: "Oprema"
  },
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    alt: "Zona slobodnih tegova sa ogledalom i profesionalnom opremom",
    category: "Oprema"
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop",
    alt: "Inspirativna atmosfera teretane tokom večernjeg treninga",
    category: "Atmosfera"
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop",
    alt: "Yoga sesija u mirnom prostoru sa prirodnim svetlom",
    category: "Grupni treninzi"
  },
  {
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=600&fit=crop",
    alt: "Indoor cycling studio sa energičnom atmosferom",
    category: "Grupni treninzi"
  },
  {
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=800&h=600&fit=crop",
    alt: "Stručni trener demonstrira pravilnu tehniku vežbanja",
    category: "Tim"
  },
  {
    src: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&h=600&fit=crop",
    alt: "Moderni prostor za funkcionalni trening",
    category: "Oprema"
  },
  {
    src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&h=600&fit=crop",
    alt: "Članovi teretane uživaju u prijateljskoj atmosferi nakon treninga",
    category: "Atmosfera"
  },
  {
    src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=600&fit=crop",
    alt: "Premium sprave za trening snage u Armageddon teretani",
    category: "Oprema"
  }
];

const Galerija = () => {
  const [selectedCategory, setSelectedCategory] = useState("Sve");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === "Sve" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-primary">GALERIJA</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Zaviri u naš prostor i oseti atmosferu Armageddon Gym & Fitness. 
              Moderni interijer, vrhunska oprema i energija naše zajednice.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card border-b border-border sticky top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                onClick={() => setSelectedImage(image.src)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30 mb-2">
                      {image.category}
                    </span>
                    <p className="text-foreground text-sm line-clamp-2">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 p-2 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <img 
            src={selectedImage} 
            alt="Uvećana slika iz galerije"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              DOĐI I UPOZNAJ NAS LIČNO
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Fotografije su samo početak. Zakaži besplatan obilazak i oseti atmosferu uživo.
            </p>
            <Button variant="hero" asChild>
              <Link to="/kontakt">
                Zakaži obilazak
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Galerija;
