import { Instagram, Facebook, MapPin, Phone } from "lucide-react";
import { RESTAURANT } from "../lib/data";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-black border-t border-gold/15 py-14 px-6 lg:px-12"
    >
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <span className="seal-ring w-12 h-12">
              <span className="font-serif text-2xl text-gold">龍</span>
            </span>
            <div>
              <p className="font-serif text-bone text-2xl leading-none">
                {RESTAURANT.name}
              </p>
              <p className="text-[10px] uppercase tracking-[0.32em] text-gold/80 mt-1">
                Since 1990 · Ghatkopar
              </p>
            </div>
          </div>
          <p className="text-bone-muted text-sm leading-relaxed max-w-md">
            A 35-year tradition of authentic, hand-crafted Chinese cuisine in the
            heart of Amrut Nagar. Family run. Forever ours, forever yours.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
            Visit
          </p>
          <p className="text-bone-muted text-sm leading-relaxed flex gap-2">
            <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
            {RESTAURANT.address}
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
            Reach Us
          </p>
          {RESTAURANT.phones.map((p) => (
            <a
              key={p}
              href={`tel:${p.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-bone-muted text-sm mb-2 hover:text-gold"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              {p}
            </a>
          ))}
        </div>

        <div className="md:col-span-2">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
            Follow
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              data-testid="footer-instagram"
              className="w-10 h-10 border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-ink transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              data-testid="footer-facebook"
              className="w-10 h-10 border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-ink transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-12 pt-6 border-t border-gold/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <p className="text-bone-dim text-[11px] uppercase tracking-[0.25em]">
          © {new Date().getFullYear()} The Dragon King — All rights reserved
        </p>
        <p className="text-bone-dim text-[11px] uppercase tracking-[0.25em]">
          Crafted with red lanterns & wok fire
        </p>
      </div>
    </footer>
  );
}
