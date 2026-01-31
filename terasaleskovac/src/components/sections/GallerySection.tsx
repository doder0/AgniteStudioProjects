import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import interior1 from "@/assets/interior-1.jpg";
import foodBurger from "@/assets/food-burger.jpg";

const galleryImages = [
  { src: gallery1, alt: "Bar ambijent" },
  { src: gallery2, alt: "Doručak" },
  { src: interior1, alt: "Enterijer", span: "col-span-2 row-span-2" },
  { src: gallery3, alt: "Noćni ambijent" },
  { src: foodBurger, alt: "Burger" },
  { src: gallery4, alt: "Kafa i pecivo" },
];

const GallerySection = () => {
  return (
    <section className="relative bg-muted/30 py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 font-body text-sm uppercase tracking-[0.2em] text-primary">
            Galerija
          </p>
          <h2 className="mb-4 font-display text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
            Atmosfera Terase
          </h2>
          <p className="mx-auto max-w-xl font-body text-muted-foreground">
            Pogledajte zašto nas gosti biraju za svoje omiljene trenutke
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`image-shine group relative overflow-hidden rounded-xl ${image.span || ""}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ minHeight: image.span ? "300px" : "200px" }}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-foreground" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://instagram.com/terasa_caffe_restaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Instagram className="h-4 w-4" />
            <span>Pratite nas na Instagramu @terasa_caffe_restaurant</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
