import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "../lib/data";
import { useReveal } from "../lib/useReveal";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const ref = useReveal();
  const t = TESTIMONIALS[i];

  useEffect(() => {
    const id = setInterval(() => {
      setI((p) => (p + 1) % TESTIMONIALS.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="testimonials"
      ref={ref}
      data-testid="testimonials-section"
      className="reveal relative py-28 md:py-40 bg-ink-surface heritage-grain overflow-hidden"
    >
      {/* Decorative seal */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-[0.04] hidden lg:block">
        <span className="font-serif text-[24rem] text-gold leading-none">龍</span>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 lg:px-12 text-center relative z-10">
        <span className="text-gold text-xs uppercase tracking-[0.4em]">
          Voices from the Table
        </span>
        <h2 className="font-serif text-bone text-4xl md:text-5xl mt-4 mb-12">
          What our <span className="italic text-gold">guests</span> say
        </h2>

        <Quote className="w-10 h-10 mx-auto text-gold/50 mb-8" />

        <p
          key={i}
          data-testid={`testimonial-${i}`}
          className="font-serif italic text-bone text-2xl md:text-3xl leading-[1.5] max-w-3xl mx-auto animate-fade-up"
        >
          “{t.quote}”
        </p>

        <div className="mt-10 flex flex-col items-center">
          <span className="h-px w-10 bg-gold/60 mb-4" />
          <p className="text-bone uppercase tracking-[0.32em] text-sm">
            {t.name}
          </p>
          <p className="text-bone-dim text-xs uppercase tracking-[0.25em] mt-1">
            {t.role}
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            data-testid="testimonial-prev"
            onClick={() =>
              setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
            }
            className="w-11 h-11 border border-gold/30 text-gold hover:bg-gold hover:text-ink transition-colors flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`testimonial ${idx + 1}`}
                className={`h-1.5 transition-all ${
                  idx === i ? "w-8 bg-gold" : "w-3 bg-gold/30"
                }`}
              />
            ))}
          </div>
          <button
            data-testid="testimonial-next"
            onClick={() => setI((p) => (p + 1) % TESTIMONIALS.length)}
            className="w-11 h-11 border border-gold/30 text-gold hover:bg-gold hover:text-ink transition-colors flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
