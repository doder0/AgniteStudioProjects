import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const images = [
    { src: gallery1, alt: "Boxing area" },
    { src: gallery2, alt: "Weight room" },
    { src: gallery3, alt: "Group training" },
    { src: gallery4, alt: "Locker room" },
  ];

  return (
    <section id="gallery" className="gym-section bg-gym-gradient-subtle" ref={ref}>
      <div className="gym-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="gym-divider" />
          <h2 className="gym-heading-lg text-foreground mb-4">
            {t("gallery.title")} <span className="gym-text-gradient">{t("gallery.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("gallery.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-sm group cursor-pointer aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
