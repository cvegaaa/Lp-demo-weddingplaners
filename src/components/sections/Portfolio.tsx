import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { images, galleryCaptions } from '@/lib/images';

export default function Portfolio() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="portfolio" className="bg-ivory-50 py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Reveal as="p" className="eyebrow">
              Trabajo seleccionado
            </Reveal>
            <Reveal
              as="h2"
              delay={1}
              className="mt-5 font-display text-4xl leading-tight text-espresso-800 sm:text-5xl"
            >
              Un portfolio de
              <span className="italic text-champagne-600"> momentos.</span>
            </Reveal>
          </div>
          <Reveal as="p" delay={2} className="max-w-sm text-sm leading-relaxed text-espresso-500">
            Un vistazo a celebraciones recientes. Cada una comenzó con una conversación y se
            convirtió en un día que ni nosotros ni la pareja habríamos podido predecir en su
            belleza exacta.
          </Reveal>
        </div>

        {/* Mosaic gallery */}
        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-3 sm:auto-rows-[260px] md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {images.gallery.map((src, i) => {
            const caption = galleryCaptions[i] ?? { title: 'Untitled', location: '' };
            // Vary tile sizes for editorial rhythm
            const big = i % 5 === 0;
            return (
              <Reveal
                key={src}
                delay={((i % 3) + 1) as 1 | 2 | 3}
                className={`group relative cursor-pointer overflow-hidden rounded-[2px] bg-ivory-200 ${
                  big ? 'row-span-2' : ''
                }`}
              >
                <button
                  onClick={() => setLightbox(i)}
                  className="absolute inset-0 h-full w-full"
                  aria-label={`Ver ${caption.title}`}
                >
                  <img
                    src={src}
                    alt={`${caption.title} — ${caption.location}`}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-800/80 via-espresso-800/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {/* Caption */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="font-display text-xl text-ivory-50">{caption.title}</p>
                    <p className="mt-0.5 text-[11px] uppercase tracking-wider text-champagne-300">
                      {caption.location}
                    </p>
                  </div>
                  {/* Corner icon */}
                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ivory-50/90 text-espresso-700 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <ArrowUpRight size={16} />
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso-800/95 p-6 opacity-0 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-ivory-100/30 text-ivory-100 transition-colors hover:border-champagne-400 hover:text-champagne-300"
            onClick={() => setLightbox(null)}
            aria-label="Cerrar"
          >
            <X size={20} />
          </button>
          <figure className="max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={images.gallery[lightbox]}
              alt={galleryCaptions[lightbox]?.title ?? ''}
              className="max-h-[78vh] w-auto rounded-[2px] object-contain"
            />
            <figcaption className="mt-4 text-center">
              <p className="font-display text-2xl italic text-ivory-50">
                {galleryCaptions[lightbox]?.title}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest-2 text-champagne-300">
                {galleryCaptions[lightbox]?.location}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
