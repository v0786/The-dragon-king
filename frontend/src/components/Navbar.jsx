import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { RESTAURANT } from "../lib/data";

const links = [
  { id: "about", label: "Heritage" },
  { id: "menu", label: "Menu" },
  { id: "gallery", label: "Gallery" },
  { id: "reservation", label: "Reserve" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-xl border-b border-gold/15"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <button
          onClick={() => go("home")}
          data-testid="nav-logo"
          className="flex items-center gap-3 group"
        >
          <span className="seal-ring w-10 h-10 text-imperial">
            <span className="font-serif text-xl text-gold leading-none">龍</span>
          </span>
          <span className="text-left leading-tight">
            <span className="block font-serif text-bone text-xl tracking-wide">
              {RESTAURANT.name}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.32em] text-gold/80">
              Est. 1990 · Ghatkopar
            </span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => go(l.id)}
              className="hover-gold text-sm uppercase tracking-[0.22em] text-bone/85 hover:text-gold transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <a
          href={`tel:${RESTAURANT.phones[0].replace(/\s/g, "")}`}
          data-testid="nav-call-btn"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 border border-gold/60 text-gold hover:bg-gold hover:text-ink transition-all text-xs uppercase tracking-[0.22em]"
        >
          <Phone className="w-3.5 h-3.5" /> Call to Order
        </a>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gold p-2"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink border-t border-gold/15">
          <div className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <button
                key={l.id}
                data-testid={`mobile-nav-link-${l.id}`}
                onClick={() => go(l.id)}
                className="text-left text-bone uppercase tracking-[0.22em] text-sm hover:text-gold"
              >
                {l.label}
              </button>
            ))}
            <a
              href={`tel:${RESTAURANT.phones[0].replace(/\s/g, "")}`}
              className="mt-2 inline-flex items-center gap-2 px-5 py-3 border border-gold/60 text-gold text-xs uppercase tracking-[0.22em] w-fit"
            >
              <Phone className="w-3.5 h-3.5" /> {RESTAURANT.phones[0]}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
