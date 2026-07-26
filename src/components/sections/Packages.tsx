import { Check, Sparkle } from 'lucide-react';
import Reveal from '@/components/Reveal';

const collections = [
  {
    name: 'El Elopement',
    tagline: 'Para los dos — y casi nadie más.',
    price: 'Desde 8.500 €',
    features: [
      'Hasta 16 invitados',
      'Búsqueda de locación y diseño de ceremonia',
      'Florales: ramo, boutonnière, arco de ceremonia',
      'Coordinación el día (organizadora principal)',
      'Fotógrafa (media jornada)',
      'Arreglo de cena íntima',
    ],
    accent: false,
  },
  {
    name: 'El Atelier',
    tagline: 'Nuestra seña de identidad — una celebración plenamente compuesta.',
    price: 'Desde 24.000 €',
    features: [
      'Hasta 120 invitados',
      'Dirección creativa completa y presentación de diseño',
      'Búsqueda de locación + logística multi-sede',
      'Atelier floral: ceremonia, mesas, instalaciones',
      'Curaduría culinaria y maridaje de sommelier',
      'Curaduría de música, imagen y film',
      'Organizadora principal + equipo de 4 el día del evento',
      'Gestión de producción completa desde 12 meses antes',
    ],
    accent: true,
  },
  {
    name: 'La Gran Soirée',
    tagline: 'Para celebraciones a una escala propia.',
    price: 'Bajo consulta',
    features: [
      'Más de 120 invitados · experiencias de varios días',
      'Diseño a medida desde cero',
      'Logística de locación y viajes internacional',
      'Conserjería completa para invitados y mesa de viajes',
      'Entretenimiento en vivo y diseño de producción',
      'Reuniones de planificación ilimitadas',
      'Equipo de producción del día escalado al alcance',
    ],
    accent: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="bg-ivory-100 py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="p" className="eyebrow">
            Colecciones
          </Reveal>
          <Reveal
            as="h2"
            delay={1}
            className="mt-5 font-display text-4xl leading-tight text-espresso-800 sm:text-5xl"
          >
            Tres maneras de empezar,
            <span className="italic text-champagne-600"> infinitamente a medida.</span>
          </Reveal>
          <Reveal as="p" delay={2} className="mt-6 text-base leading-relaxed text-espresso-500">
            Cada colección es un punto de partida, no un menú fijo. Todo se modela en torno a
            tu día, tus invitados y el sentimiento que quieres dejar atrás.
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {collections.map((c, i) => (
            <Reveal
              key={c.name}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className={`relative flex flex-col rounded-[2px] p-8 transition-transform duration-500 lg:p-10 ${
                c.accent
                  ? 'bg-espresso-800 text-ivory-100 shadow-2xl lg:-translate-y-4'
                  : 'bg-ivory-50 text-espresso-700 ring-1 ring-ivory-200'
              }`}
            >
              {c.accent && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-champagne-500 px-4 py-1 text-[10px] uppercase tracking-widest-2 text-espresso-800">
                  El más elegido
                </span>
              )}
              <div className="flex items-center gap-2">
                <Sparkle
                  size={18}
                  className={c.accent ? 'text-champagne-300' : 'text-champagne-500'}
                />
                <h3 className="font-display text-3xl">{c.name}</h3>
              </div>
              <p
                className={`mt-2 text-sm italic ${
                  c.accent ? 'text-ivory-100/70' : 'text-espresso-400'
                }`}
              >
                {c.tagline}
              </p>
              <p
                className={`mt-6 font-display text-2xl ${
                  c.accent ? 'text-champagne-300' : 'text-champagne-600'
                }`}
              >
                {c.price}
              </p>

              <ul className="mt-7 flex-1 space-y-3.5">
                {c.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        c.accent ? 'text-champagne-300' : 'text-champagne-500'
                      }`}
                    />
                    <span className={c.accent ? 'text-ivory-100/85' : 'text-espresso-500'}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className={`mt-9 w-full rounded-full px-6 py-3.5 text-xs uppercase tracking-widest-2 transition-all duration-300 ${
                  c.accent
                    ? 'bg-champagne-500 text-espresso-800 hover:bg-champagne-400'
                    : 'border border-champagne-500 text-espresso-700 hover:bg-champagne-500 hover:text-ivory-50'
                }`}
              >
                Consultar por {c.name}
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" delay={2} className="mt-10 text-center text-xs text-espresso-400">
          Todas las colecciones excluyen los costes de locación, proveedores y terceros,
          que se detallan de forma transparente en tu propuesta a medida.
        </Reveal>
      </div>
    </section>
  );
}
