import { useEffect, useRef } from "react";
import gallery3 from "@/assets/gallery-3.jpg";

const About = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 bg-background"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="reveal order-2 md:order-1">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={gallery3}
                alt="Jana trenira"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <span className="reveal text-sm tracking-widest text-muted-foreground uppercase">
              O meni
            </span>
            <h2 className="reveal font-serif text-4xl md:text-5xl text-foreground">
              Zdravo, ja sam Jana.
            </h2>
            <div className="reveal space-y-4 text-muted-foreground font-light leading-relaxed">
              <p>
                Verujem da fitnes nije samo izgradnja mišića — to je transformacija 
                tvog odnosa sa samom sobom. Kroz disciplinu, doslednost i veru u 
                sebe, sve je moguće.
              </p>
              <p>
                Kao sertifikovani personalni trener i online coach, pomogla sam 
                stotinama žena da otkriju svoju snagu, preoblikuju svoja tela i 
                izgrade nepokolebljivo samopouzdanje. Moj pristup kombinuje 
                personalizovane treninge, svesnu ishranu i neprekidnu podršku.
              </p>
              <p>
                Tvoje putovanje počinje jednom odlukom. Dozvoli mi da te vodim 
                na svakom koraku.
              </p>
            </div>
            <div className="reveal pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-foreground font-medium text-sm tracking-wide group"
              >
                Radi sa mnom
                <span className="w-4 h-px bg-foreground transition-all duration-300 group-hover:w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
