import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "Jana mi je pomogla da ponovo otkrijem svoju snagu. Po prvi put posle godina, osećam se samopouzdano u svom telu. Ovo nije bila samo fizička transformacija — promenio se ceo moj način razmišljanja.",
    name: "Ana M.",
    detail: "Izgubila 12kg za 4 meseca",
  },
  {
    quote:
      "Probala sam toliko programa pre ovoga, ali ništa nije funkcionisalo dugoročno. Janin pristup je drugačiji. Ona zaista sluša, prilagođava i drži te odgovornom. Snažnija sam nego ikad.",
    name: "Milica R.",
    detail: "Trenira 8 meseci",
  },
  {
    quote:
      "Podrška i vođenje koje sam dobila bilo je neverovatno. Jana zaista brine o svojim klijentima. Konačno imam zdrav odnos sa hranom i vežbanjem.",
    name: "Sara K.",
    detail: "Transformacija životnog stila",
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-16 md:mb-20">
          <span className="reveal text-sm tracking-widest text-muted-foreground uppercase">
            Iskustva
          </span>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-foreground mt-4">
            Prave priče, pravi rezultati.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="reveal p-8 md:p-10 border border-border"
            >
              <blockquote className="text-muted-foreground font-light leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <footer>
                <cite className="not-italic">
                  <span className="block font-serif text-xl text-foreground">
                    {testimonial.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.detail}
                  </span>
                </cite>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
