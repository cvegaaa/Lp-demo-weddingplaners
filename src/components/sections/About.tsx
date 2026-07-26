import Reveal from '@/components/Reveal';
import { images } from '@/lib/images';

const stats = [
  { value: '+15', label: 'Años de oficio' },
  { value: '320', label: 'Celebraciones creadas' },
  { value: '24', label: 'Países visitados' },
  { value: '100%', label: 'A medida, siempre' },
];

export default function About() {
  return (
    <section id="about" className="bg-ivory-50 py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image collage */}
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
              <img
                src={images.aboutPortrait}
                alt="Una pareja de novios compartiendo un momento íntimo al aire libre"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-10 -right-4 hidden aspect-[3/4] w-48 overflow-hidden rounded-[2px] border-8 border-ivory-50 shadow-xl sm:block lg:w-60">
              <img
                src={images.bouquet}
                alt="Un ramo de novia de peonias suaves"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative monogram badge */}
            <div className="absolute -left-5 -top-5 hidden h-24 w-24 items-center justify-center rounded-full border border-champagne-400 bg-ivory-50 lg:flex">
              <span className="font-display text-3xl italic text-champagne-600">M·L</span>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal as="p" className="eyebrow">
              El Atelier
            </Reveal>
            <Reveal as="h2" delay={1} className="mt-5 font-display text-4xl leading-tight text-espresso-800 sm:text-5xl">
              Una casa dedicada al
              <span className="italic text-champagne-600"> arte de celebrar.</span>
            </Reveal>
            <Reveal as="p" delay={2} className="mt-7 text-base leading-relaxed text-espresso-500">
              Fundada en París en 2009, Maison Lumière nació de una sola convicción:
              que una boda debería parecerse menos a un evento y más a un mundo
              construido para un día inolvidable. Cada detalle — la luz, las flores,
              el ritmo de la velada — se compone con intención.
            </Reveal>
            <Reveal as="p" delay={2} className="mt-5 text-base leading-relaxed text-espresso-500">
              Aceptamos un número deliberadamente reducido de celebraciones cada año, para
              que cada pareja reciba todo el peso de nuestro atelier: una organizadora
              principal, una directora de diseño y una red de artesanos que hemos reunido
              a lo largo de quince temporadas por toda Europa.
            </Reveal>

            {/* Firma */}
            <Reveal delay={3} className="mt-8">
              <p className="font-display text-3xl italic text-espresso-700">
                Élodie Marchand
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest-2 text-champagne-600">
                Fundadora &amp; Directora Creativa
              </p>
            </Reveal>

            {/* Stats */}
            <Reveal delay={3}>
              <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[2px] border border-ivory-200 bg-ivory-200 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-ivory-50 px-4 py-6 text-center">
                    <p className="font-display text-3xl text-espresso-800">{s.value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-espresso-400">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
