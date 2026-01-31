import { useEffect, useRef } from "react";

const services = [
  {
    title: "Online coaching",
    description:
      "Personalizovani 1:1 coaching prilagođen tvojim ciljevima, životnom stilu i rasporedu. Nedeljne provere, prilagođavanja i konstantna podrška.",
  },
  {
    title: "Treninzi po meri",
    description:
      "Programi vežbanja kreirani za tvoje telo, nivo iskustva i dostupnu opremu. Progresivno opterećenje za prave rezultate.",
  },
  {
    title: "Nutritivno vođenje",
    description:
      "Fleksibilne strategije ishrane koje se uklapaju u tvoj život. Bez restriktivnih dijeta — samo održive navike koje pokreću transformaciju.",
  },
  {
    title: "Podrška i odgovornost",
    description:
      "Dnevna motivacija, rad na mentalitetu i zajednica koja te podržava. Nikada nisi sama na ovom putu.",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 100);
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
    <section
      ref={sectionRef}
      id="services"
      className="py-24 md:py-32 bg-secondary"
    >
      <div className="container">
        <div className="text-center mb-16 md:mb-20">
          <span className="reveal text-sm tracking-widest text-muted-foreground uppercase">
            Šta nudim
          </span>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-foreground mt-4">
            Tvoja transformacija, moja misija.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="reveal group p-8 md:p-10 bg-background border border-border hover:border-foreground/20 transition-all duration-500"
            >
              <span className="text-xs text-muted-foreground font-light">
                0{index + 1}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mt-4 mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
