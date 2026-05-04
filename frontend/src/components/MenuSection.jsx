import { useState } from "react";
import { MENU, MEDIA } from "../lib/data";
import { useReveal } from "../lib/useReveal";

export default function MenuSection() {
  const [active, setActive] = useState(MENU[0].section);
  const ref = useReveal();
  const current = MENU.find((m) => m.section === active);

  return (
    <section
      id="menu"
      ref={ref}
      data-testid="menu-section"
      className="reveal relative py-28 md:py-40 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(8,6,6,0.92), rgba(8,6,6,0.97)), url(${MEDIA.texture})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-gold text-xs uppercase tracking-[0.4em]">
            The Menu
          </span>
          <h2 className="font-serif text-bone text-4xl md:text-6xl mt-4 mb-6">
            Hand-crafted, <span className="italic text-gold">always</span>.
          </h2>
          <div className="gold-divider max-w-md mx-auto">
            <span className="font-serif text-2xl">龍</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div
          data-testid="menu-tabs"
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14"
        >
          {MENU.map((m) => {
            const isActive = active === m.section;
            return (
              <button
                key={m.section}
                data-testid={`menu-tab-${m.section.replace(/\s+/g, "-").toLowerCase()}`}
                onClick={() => setActive(m.section)}
                className={`px-5 md:px-7 py-3 text-[11px] uppercase tracking-[0.25em] border transition-all ${
                  isActive
                    ? "bg-imperial border-imperial text-bone"
                    : "border-gold/30 text-bone-muted hover:border-gold hover:text-gold"
                }`}
              >
                {m.section}
              </button>
            );
          })}
        </div>

        {/* Menu list */}
        <div className="max-w-4xl mx-auto grid gap-7">
          {current?.items.map((item, idx) => (
            <div
              key={item.name}
              data-testid={`menu-item-${idx}`}
              className="group flex items-end"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <div className="flex-shrink-0 max-w-[60%]">
                <h3 className="font-serif text-bone text-xl md:text-2xl group-hover:text-gold transition-colors">
                  {item.name}
                </h3>
                <p className="text-bone-muted text-sm mt-1 italic">
                  {item.desc}
                </p>
              </div>
              <span className="dotted-leader" />
              <span className="font-serif text-gold text-xl md:text-2xl whitespace-nowrap">
                ₹{item.price}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-bone-dim text-xs uppercase tracking-[0.25em] mt-16">
          Prices in INR · Taxes extra · Vegetarian and Jain options available
        </p>
      </div>
    </section>
  );
}
