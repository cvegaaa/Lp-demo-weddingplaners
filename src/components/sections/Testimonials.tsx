import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { images } from '@/lib/images';

const testimonials = [
  {
    quote:
      'Tomaron un sentimiento vago — "queremos que se sienta como la hora dorada, toda la velada" — y lo convirtieron en un día que aún no podemos describir del todo. Cada invitado dijo lo mismo: se sentía como ellos, amplificado.',
    name: 'Sofía & Rafael',
    event: 'Boda · Lago Como, Italia',
    avatar: images.avatars[0],
  },
  {
    quote:
      'Organizamos nuestra boda desde otro continente. Maison Lumière hizo que no solo fuera posible, sino sencillo. La presentación de diseño por sí sola me hizo llorar — nos habían entendido por completo.',
    name: 'Amara & Jonah',
    event: 'Boda · Provenza, Francia',
    avatar: images.avatars[1],
  },
  {
    quote:
      'Nuestra soirée de aniversario para noventa invitados iba a ser sencilla. Lo que entregaron fue inolvidable — y de algún modo seguía sintiéndose íntimo. Verdaderos artesanos, y personas encantadoras.',
    name: 'Isabelle Laurent',
    event: 'Soirée Privada · París, Francia',
    avatar: images.avatars[2],
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((p) => (p + 1) % testimonials.length);

  return (
    <section className="relative overflow-hidden bg-rose-300/20 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
        <Reveal as="p" className="eyebrow">
          Palabras amables
        </Reveal>
        <Reveal
          as="h2"
          delay={1}
          className="mt-5 font-display text-4xl leading-tight text-espresso-800 sm:text-5xl"
        >
          De quienes dijeron
          <span className="italic text-champagne-600"> sí.</span>
        </Reveal>

        <div className="relative mt-14">
          <Quote
            size={56}
            strokeWidth={1}
            className="mx-auto text-champagne-400/60"
          />
          <blockquote
            key={i}
            className="mt-8 opacity-0 animate-fade-in"
          >
            <p className="text-balance font-display text-2xl italic leading-relaxed text-espresso-700 sm:text-3xl">
              “{t.quote}”
            </p>
            <div className="mt-9 flex items-center justify-center gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-champagne-300/60"
                loading="lazy"
              />
              <div className="text-left">
                <p className="font-display text-xl text-espresso-800">{t.name}</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wider text-champagne-600">
                  {t.event}
                </p>
              </div>
            </div>
          </blockquote>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso-300/40 text-espresso-600 transition-colors hover:border-champagne-500 hover:bg-champagne-500 hover:text-ivory-50"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Ir al testimonio ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === i ? 'w-8 bg-champagne-500' : 'w-2 bg-espresso-300/40 hover:bg-champagne-400'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso-300/40 text-espresso-600 transition-colors hover:border-champagne-500 hover:bg-champagne-500 hover:text-ivory-50"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
