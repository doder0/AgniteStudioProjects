import { useState } from "react";
import { Instagram } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import drinks1 from "@/assets/drinks-1.jpg";
import garden from "@/assets/garden.jpg";
import lounge from "@/assets/lounge.jpg";
import dessert from "@/assets/dessert.jpg";
import coffee from "@/assets/coffee.jpg";

const galleryImages = [
  { src: lounge, alt: "Lounge atmosfera" },
  { src: food1, alt: "Autorska jela" },
  { src: drinks1, alt: "Kokteli" },
  { src: garden, alt: "Bašta terasa" },
  { src: heroBg, alt: "Noćni ambijent" },
  { src: food2, alt: "Sveža kuhinja" },
  { src: dessert, alt: "Slatki užici" },
  { src: coffee, alt: "Jutarnja kafa" },
];

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/10 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
            @promenada.cafe.restaurant
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Uhvaćeni <span className="text-gradient-neon">Trenuci</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pogled u Promenada iskustvo. Svaka poseta je priča vredna deljenja.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                index === 0 || index === 4 ? "row-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
                style={{ aspectRatio: index === 0 || index === 4 ? "1/2" : "1/1" }}
              />
              
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-charcoal-deep/60 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="text-center">
                  <Instagram className="w-8 h-8 text-foreground mx-auto mb-2" />
                  <p className="text-foreground text-sm">{image.alt}</p>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/promenada.cafe.restaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-foreground hover:text-gold transition-colors duration-300 group"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">Prati Nas</span>
            <span className="w-8 h-px bg-gold/50 group-hover:w-12 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
