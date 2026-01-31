const brands = [
  { name: "Apple", logo: "🍎" },
  { name: "Samsung", logo: "📱" },
  { name: "Xiaomi", logo: "📲" },
  { name: "Huawei", logo: "🔲" },
  { name: "Oppo", logo: "⬡" },
  { name: "Realme", logo: "◉" },
  { name: "Motorola", logo: "Ⓜ" },
];

const Brands = () => {
  return (
    <section id="brendovi" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-3 text-sm uppercase tracking-wider">Brendovi</p>
          <h2 className="heading-lg text-foreground mb-4">
            Servisiramo sve brendove
          </h2>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-3 md:grid-cols-7 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300 group"
            >
              <span className="text-3xl md:text-4xl mb-2 grayscale group-hover:grayscale-0 transition-all duration-300">
                {brand.logo}
              </span>
              <span className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
