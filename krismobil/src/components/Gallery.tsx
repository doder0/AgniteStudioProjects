import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import galleryRepair from "@/assets/gallery-repair-1.jpg";
import galleryBefore from "@/assets/gallery-before.jpg";
import galleryAfter from "@/assets/gallery-after.jpg";
import galleryStore from "@/assets/gallery-store.jpg";
import galleryProducts from "@/assets/gallery-products.jpg";
import galleryTools from "@/assets/gallery-tools.jpg";

const galleryItems = [
  {
    src: galleryRepair,
    alt: "Profesionalna popravka telefona",
    category: "Popravka",
  },
  {
    src: galleryBefore,
    alt: "Polomljen ekran - pre popravke",
    category: "Pre",
    badge: "PRE",
  },
  {
    src: galleryAfter,
    alt: "Popravljen ekran - posle",
    category: "Posle",
    badge: "POSLE",
  },
  {
    src: galleryStore,
    alt: "Unutrašnjost prodavnice KRIS MOBIL",
    category: "Prodavnica",
  },
  {
    src: galleryProducts,
    alt: "Pametni telefoni u ponudi",
    category: "Proizvodi",
  },
  {
    src: galleryTools,
    alt: "Profesionalni alati i delovi",
    category: "Alati",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryItems.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="galerija" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-3 text-sm uppercase tracking-wider">Galerija</p>
          <h2 className="heading-lg text-foreground mb-4">
            Pogledajte naš rad
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Od polomljenih ekrana do savršeno popravljenih telefona - pogledajte primere našeg rada
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 || index === 3 ? "md:col-span-2 md:row-span-1" : ""
              }`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                <div>
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {item.category}
                  </span>
                  <p className="text-foreground font-medium text-sm mt-1">{item.alt}</p>
                </div>
              </div>

              {/* Badge */}
              {item.badge && (
                <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${
                  item.badge === "PRE" 
                    ? "bg-destructive text-destructive-foreground" 
                    : "bg-green-500 text-white"
                }`}>
                  {item.badge}
                </span>
              )}

              {/* Border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Before/After Comparison Label */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-destructive" />
            <span className="text-sm text-muted-foreground">Pre popravke</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-sm text-muted-foreground">Posle popravke</span>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div 
            className="max-w-4xl max-h-[80vh] overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[selectedImage].src}
              alt={galleryItems[selectedImage].alt}
              className="w-full h-full object-contain"
            />
            <div className="text-center mt-4">
              <p className="text-foreground font-medium">{galleryItems[selectedImage].alt}</p>
              <p className="text-muted-foreground text-sm mt-1">
                {selectedImage + 1} / {galleryItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
