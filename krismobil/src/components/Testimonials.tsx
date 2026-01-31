import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marko P.",
    text: "Odlična usluga! Zamenili su mi ekran za sat vremena. Sve preporučujem!",
    rating: 5,
  },
  {
    name: "Ana S.",
    text: "Profesionalan pristup i fer cene. Baterija radi kao nova.",
    rating: 5,
  },
  {
    name: "Nikola M.",
    text: "Brzi i pouzdani. Popravili su mi konektor koji drugi serviseri nisu mogli.",
    rating: 5,
  },
  {
    name: "Jovana D.",
    text: "Super servis! Toplo preporučujem svima u Leskovcu.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="recenzije" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-3 text-sm uppercase tracking-wider">Recenzije</p>
          <h2 className="heading-lg text-foreground mb-4">
            Šta kažu naši klijenti
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-glass p-6 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground text-sm mb-4 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-foreground">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
