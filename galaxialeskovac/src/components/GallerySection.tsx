import { useState } from 'react';
import { motion } from 'framer-motion';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

const galleryImages = [
  { id: 1, src: gallery1, title: 'Svemirski bazen', desc: 'Kuglice i zabava' },
  { id: 2, src: gallery2, title: 'Rođendanska proslava', desc: 'Magični trenuci' },
  { id: 3, src: gallery3, title: 'Raketa tobogan', desc: 'Avantura počinje' },
  { id: 4, src: gallery4, title: 'Dečija radost', desc: 'Osmesi i sreća' },
  { id: 5, src: gallery5, title: 'Prostor za proslave', desc: 'Sve je spremno' },
  { id: 6, src: gallery6, title: 'Trambolina zona', desc: 'Skok do zvezda' },
];

const GallerySection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden" id="gallery">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />
      
      <div className="relative container mx-auto px-4">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Atmosfera </span>
            <span className="text-gradient-galaxy">Galaxia</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pogledajte kako izgledaju nezaboravni trenuci u našoj igraonici
          </p>
        </motion.div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={image.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {/* Image */}
              <img 
                src={image.src} 
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Glow frame effect */}
              <div 
                className={`absolute inset-0 border-2 rounded-2xl transition-all duration-300 ${
                  hoveredId === image.id 
                    ? 'border-neon-cyan shadow-[0_0_30px_hsl(185,100%,50%,0.3)]' 
                    : 'border-transparent'
                }`}
              />
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-foreground font-display text-lg text-center">{image.title}</p>
                <p className="text-foreground/70 text-sm text-center">{image.desc}</p>
              </div>
              
              {/* Decorative stars */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-foreground/80 animate-twinkle opacity-0 group-hover:opacity-100 transition-opacity" style={{ animationDelay: `${index * 0.3}s` }} />
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 rounded-full bg-foreground/60 animate-twinkle opacity-0 group-hover:opacity-100 transition-opacity" style={{ animationDelay: `${index * 0.5}s` }} />
            </motion.div>
          ))}
        </div>
        
        {/* Instagram link */}
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="https://www.instagram.com/igraonica_galaxia/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border hover:border-neon-pink transition-colors duration-300 group"
          >
            <svg className="w-5 h-5 text-neon-pink" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="text-foreground group-hover:text-neon-pink transition-colors">Pratite nas na Instagramu</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
