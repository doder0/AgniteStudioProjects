import { useEffect, useRef } from "react";

const CTA = () => {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 md:py-40 bg-foreground text-background"
    >
      <div className="container text-center">
        <span className="reveal text-sm tracking-widest opacity-70 uppercase">
          Spremna da počneš?
        </span>
        <h2 className="reveal font-serif text-4xl md:text-6xl lg:text-7xl mt-6 mb-8 max-w-3xl mx-auto leading-tight">
          Tvoja transformacija počinje jednim korakom.
        </h2>
        <p className="reveal text-lg opacity-80 font-light mb-12 max-w-xl mx-auto">
          Prijavi se za coaching i razgovarajmo o tvojim ciljevima. Bez pritiska, 
          bez obaveza — samo razgovor o tvojoj budućnosti.
        </p>
        <a
          href="mailto:jana@example.com?subject=Upit%20za%20coaching"
          className="reveal inline-block px-10 py-4 bg-background text-foreground font-medium text-sm tracking-wide hover:bg-background/90 transition-all duration-300"
        >
          Prijavi se za coaching
        </a>
      </div>
    </section>
  );
};

export default CTA;
