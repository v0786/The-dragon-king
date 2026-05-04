import { ChevronDown } from "lucide-react";
import { MEDIA, RESTAURANT } from "../lib/data";

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden heritage-grain"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={MEDIA.hero}
          alt="Dragon King interior with red lanterns"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-24 lg:pb-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8 animate-fade-up">
            <span className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              Celebrating {RESTAURANT.legacy} Years · Since 1990
            </span>
          </div>

          <h1
            className="font-serif text-bone text-6xl md:text-7xl lg:text-[8rem] leading-[0.95] tracking-tight mb-8 animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            The
            <br />
            <span className="italic text-gold">Dragon</span> King
          </h1>

          <p
            className="text-bone-muted text-lg md:text-xl max-w-xl leading-relaxed mb-12 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            A humble roadside kitchen on the lanes of Amrut Nagar, Ghatkopar.
            Open-air seating for ten, an open wok blazing right beside you —
            three and a half decades of the same hands, same flame, same
            family.
          </p>

          <div
            className="flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "360ms" }}
          >
            <button
              data-testid="hero-reserve-btn"
              onClick={() => scrollTo("reservation")}
              className="px-9 py-4 bg-imperial text-bone text-xs uppercase tracking-[0.3em] hover:bg-imperial-dark transition-colors border border-imperial"
            >
              Reserve a Table
            </button>
            <button
              data-testid="hero-menu-btn"
              onClick={() => scrollTo("menu")}
              className="px-9 py-4 border border-gold/70 text-gold text-xs uppercase tracking-[0.3em] hover:bg-gold hover:text-ink transition-colors"
            >
              Explore the Menu
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-bone-muted">
          <span className="text-[10px] uppercase tracking-[0.4em]">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-gold" />
        </div>
      </div>

      {/* Side ornament */}
      <div className="hidden lg:flex absolute right-12 bottom-32 z-10 flex-col items-center gap-3">
        <div className="seal-ring w-16 h-16">
          <span className="font-serif text-3xl text-gold">福</span>
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold/70">
          Good Fortune
        </span>
      </div>
    </section>
  );
}
