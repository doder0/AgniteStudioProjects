import { motion } from "framer-motion";
import foodBurger from "@/assets/food-burger.jpg";
import foodAngus from "@/assets/food-angus.jpg";
import foodSalad from "@/assets/food-salad.jpg";
import foodPancake from "@/assets/food-pancake.jpg";

const dishes = [
  {
    name: "Smash Burger",
    description: "Sočni burger sa hrskavom slaninom i domaćim sosom",
    image: foodBurger,
    tag: "Najpopularniji"
  },
  {
    name: "Black Angus Burger",
    description: "Premium Black Angus govedina sa karamelizovanim lukom",
    image: foodAngus,
    tag: "Premium"
  },
  {
    name: "Caesar Salata",
    description: "Sveža romanska salata sa piletinom i parmezanom",
    image: foodSalad,
    tag: "Sveže"
  },
  {
    name: "Pohovana Palačinka",
    description: "Dekadentna palačinka sa Nutellom i bananama",
    image: foodPancake,
    tag: "Desert"
  }
];

const FoodSection = () => {
  return (
    <section id="hrana" className="relative bg-background py-24 md:py-32">
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
            Naš meni
          </p>
          <h2 className="mb-4 font-display text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
            Specijaliteti kuće
          </h2>
          <p className="mx-auto max-w-xl font-body text-muted-foreground">
            Otkrijte ukuse koji su nas učinili omiljenim mestom u Leskovcu
          </p>
        </motion.div>

        {/* Food Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="hover-lift overflow-hidden rounded-2xl bg-card">
                {/* Image */}
                <div className="image-shine relative aspect-square overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Tag */}
                  <div className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1">
                    <span className="font-body text-xs font-medium text-primary-foreground">
                      {dish.tag}
                    </span>
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="mb-2 font-display text-lg font-medium text-foreground">
                    {dish.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {dish.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodSection;
