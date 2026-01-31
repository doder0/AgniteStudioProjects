import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Prijavi se",
    description:
      "Popuni kratku prijavu i ispričaj mi o svojim ciljevima, životnom stilu i šta tražiš. Ovo mi pomaže da razumem da li smo dobar tim.",
  },
  {
    number: "02",
    title: "Povežimo se",
    description:
      "Imamo besplatan konsultativni poziv da razgovaramo o tvojoj viziji, odgovorim na pitanja i kreiram personalizovan plan samo za tebe.",
  },
  {
    number: "03",
    title: "Transformiši se",
    description:
      "Započni svoj program uz punu podršku, nedeljne provere i prilagođavanja. Posmatraj kako evoluiraš, iznutra i spolja.",
  },
];

const Process = () => {
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
      id="process"
      className="py-24 md:py-32 bg-secondary"
    >
      <div className="container">
        <div className="text-center mb-16 md:mb-20">
          <span className="reveal text-sm tracking-widest text-muted-foreground uppercase">
            Kako funkcioniše
          </span>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-foreground mt-4">
            Jednostavni koraci za početak.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`reveal relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  index !== steps.length - 1 ? "mb-16 md:mb-20" : ""
                } ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Number Circle */}
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-background border border-border flex items-center justify-center z-10">
                  <span className="font-serif text-2xl text-foreground">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 text-center ${
                    index % 2 === 1 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <h3 className="font-serif text-3xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed max-w-md mx-auto md:mx-0">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
