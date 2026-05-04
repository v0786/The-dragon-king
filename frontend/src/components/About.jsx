import { useReveal } from "../lib/useReveal";
import { MEDIA, RESTAURANT } from "../lib/data";

const stats = [
  { value: "35", label: "Years of Heritage" },
  { value: "120+", label: "Signature Dishes" },
  { value: "3", label: "Generations Served" },
  { value: "1990", label: "Established" },
];

export default function About() {
  const ref = useReveal();
  return (
    <section
      id="about"
      ref={ref}
      data-testid="about-section"
      className="reveal relative py-28 md:py-40 bg-ink heritage-grain overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Image side */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={MEDIA.about}
              alt="Master chef tossing flaming wok"
              className="w-full h-full object-cover grayscale-[0.15] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 ring-1 ring-gold/20" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:flex items-center gap-3 bg-ink-card border border-gold/30 px-6 py-4">
            <span className="seal-ring w-10 h-10">
              <span className="font-serif text-lg text-gold">龍</span>
            </span>
            <div className="leading-tight">
              <p className="font-serif text-gold text-2xl">Since 1990</p>
              <p className="text-bone-muted text-[11px] uppercase tracking-[0.25em]">
                Family Owned
              </p>
            </div>
          </div>
        </div>

        {/* Text side */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="text-gold text-xs uppercase tracking-[0.4em] mb-6">
            Our Heritage
          </span>
          <h2 className="font-serif text-bone text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
            A neighbourhood story,
            <br />
            <span className="italic text-gold">three decades</span> in the
            making.
          </h2>
          <p className="text-bone-muted text-base md:text-lg leading-relaxed mb-6">
            In 1990, on a quiet lane in Amrut Nagar, a single carbon-steel wok
            was lit. The smoke that rose carried with it a promise — that
            authentic, hand-crafted Chinese food belonged in every Ghatkopar
            family's table.
          </p>
          <p className="text-bone-muted text-base md:text-lg leading-relaxed mb-12">
            {RESTAURANT.legacy} years later, the same recipes are still
            cooked the same way. Same broth, same heat, same hands. We have
            watched children grow into parents, and parents into grandparents —
            all gathered around our circular tables.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/15 border border-gold/15">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-ink-surface px-5 py-6 text-left"
              >
                <p className="font-serif text-gold text-3xl md:text-4xl mb-1">
                  {s.value}
                </p>
                <p className="text-bone-muted text-[10px] uppercase tracking-[0.25em]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
