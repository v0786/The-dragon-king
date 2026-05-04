import { MEDIA } from "../lib/data";
import { useReveal } from "../lib/useReveal";

export default function Gallery() {
  const ref = useReveal();
  const imgs = MEDIA.gallery;
  return (
    <section
      id="gallery"
      ref={ref}
      data-testid="gallery-section"
      className="reveal relative py-28 md:py-40 bg-ink"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              The Atelier
            </span>
            <h2 className="font-serif text-bone text-4xl md:text-6xl mt-4">
              Moments from <span className="italic text-gold">our kitchen</span>
            </h2>
          </div>
          <p className="text-bone-muted max-w-md text-base leading-relaxed">
            Wok flames, hand-pleated dim sum, bamboo steamers and red lanterns —
            scenes from any given evening at Dragon King.
          </p>
        </div>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-12 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[200px]">
          <GalleryTile src={imgs[0]} className="col-span-12 md:col-span-7 row-span-2" idx={0} />
          <GalleryTile src={imgs[1]} className="col-span-6 md:col-span-5 row-span-1" idx={1} />
          <GalleryTile src={imgs[2]} className="col-span-6 md:col-span-5 row-span-1" idx={2} />
          <GalleryTile src={imgs[3]} className="col-span-6 md:col-span-4 row-span-2" idx={3} />
          <GalleryTile src={imgs[4]} className="col-span-6 md:col-span-4 row-span-1" idx={4} />
          <GalleryTile src={imgs[5]} className="col-span-12 md:col-span-4 row-span-1" idx={5} />
        </div>
      </div>
    </section>
  );
}

function GalleryTile({ src, className, idx }) {
  return (
    <div
      data-testid={`gallery-tile-${idx}`}
      className={`relative overflow-hidden group ${className}`}
    >
      <img
        src={src}
        alt={`gallery-${idx}`}
        loading="lazy"
        className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[900ms]"
      />
      <div className="absolute inset-0 ring-1 ring-gold/15 group-hover:ring-gold/40 transition" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent opacity-60 group-hover:opacity-30 transition" />
    </div>
  );
}
