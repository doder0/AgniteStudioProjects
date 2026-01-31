import { useState } from "react";
import { Instagram, X } from "lucide-react";
import training1 from "@/assets/training-1.jpg";
import training2 from "@/assets/training-2.jpg";
import training3 from "@/assets/training-3.jpg";
import training4 from "@/assets/training-4.jpg";
import heroImage from "@/assets/hero-gym.jpg";

const galleryImages = [
  { src: heroImage, alt: "PlayGym oprema" },
  { src: training1, alt: "Personalni trening" },
  { src: training2, alt: "Grupni trening" },
  { src: training3, alt: "Zona za tegove" },
  { src: training4, alt: "Kardio zona" },
  { src: training3, alt: "Teretana noću" },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-heading text-primary text-sm tracking-[0.3em] mb-4">
            GALERIJA
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            POGLEDAJ <span className="text-primary italic-slant">PROSTOR</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <a
            href="https://instagram.com/playgym"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="font-heading text-sm">Prati nas na Instagramu</span>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden aspect-square"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <div className="w-12 h-12 border-2 border-primary mx-auto mb-2 flex items-center justify-center">
                    <span className="text-primary text-2xl">+</span>
                  </div>
                  <p className="font-heading text-sm text-foreground">{image.alt}</p>
                </div>
              </div>
              {/* Yellow corner */}
              <div className="absolute top-0 left-0 w-0 h-0 group-hover:w-8 group-hover:h-8 bg-primary transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-0 h-0 group-hover:w-8 group-hover:h-8 bg-primary transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-w-full max-h-[80vh] object-contain"
          />
          {/* Navigation dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(index);
                }}
                className={`w-2 h-2 transition-colors ${
                  index === selectedImage ? "bg-primary" : "bg-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
