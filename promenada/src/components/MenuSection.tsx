import { useState } from "react";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import drinks1 from "@/assets/drinks-1.jpg";
import dessert from "@/assets/dessert.jpg";
import coffee from "@/assets/coffee.jpg";

const menuCategories = [
  { id: "all", label: "Sve" },
  { id: "food", label: "Hrana" },
  { id: "drinks", label: "Piće" },
  { id: "desserts", label: "Deserti" },
];

const menuItems = [
  {
    id: 1,
    category: "food",
    image: food1,
    title: "Promenada Burger",
    description: "Premium junetina, tartufo majonez, zreli čedar, karamelizovan luk",
    price: "1.490 RSD",
  },
  {
    id: 2,
    category: "food",
    image: food2,
    title: "Grilovani Losos",
    description: "Svež atlantski losos, sezonsko povrće, citrus glazura",
    price: "2.290 RSD",
  },
  {
    id: 3,
    category: "drinks",
    image: drinks1,
    title: "Promenada Sunset",
    description: "Naš autorski koktel sa premium pićem i svežim začinskim biljem",
    price: "890 RSD",
  },
  {
    id: 4,
    category: "desserts",
    image: dessert,
    title: "Pistachio Kolač",
    description: "Specijal kuće, slojevita torta sa pistachio kremom",
    price: "590 RSD",
  },
  {
    id: 5,
    category: "drinks",
    image: coffee,
    title: "Artisan Latte",
    description: "Single origin espresso sa svilenkastim mlekom",
    price: "390 RSD",
  },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 md:py-32 bg-charcoal relative">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-gold/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
            Odabrani Specijaliteti
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Hrana & <span className="text-gradient-gold">Piće</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Svako jelo je napravljeno sa strašću, svako piće pomiješano sa preciznošću.
            Ovo je samo mali uvid u ono što vas čeka.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gold text-charcoal-deep"
                  : "border border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group card-premium rounded-xl overflow-hidden hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 right-4 bg-charcoal/80 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-gold font-medium">{item.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors duration-300 text-sm uppercase tracking-wider nav-link"
          >
            Pogledaj Ceo Meni
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
