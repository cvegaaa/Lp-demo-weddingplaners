import {
  Sparkles,
  Flower2,
  UtensilsCrossed,
  Music,
  Camera,
  MapPin,
} from 'lucide-react';
import Reveal from '@/components/Reveal';

const services = [
  {
    Icon: Sparkles,
    title: 'Concepto & Diseño',
    description:
      'Una dirección creativa singular para tu día — paleta, ambiente y el hilo conductor que hace que una celebración parezca inevitable.',
  },
  {
    Icon: Flower2,
    title: 'Atelier Floral',
    description:
      'Florales de temporada, arquitectónicas, cultivadas por nuestros productores asociados — desde el arco de la ceremonia hasta la última vela en la mesa.',
  },
  {
    Icon: UtensilsCrossed,
    title: 'Curaduría Culinaria',
    description:
      'Menús diseñados con chefs de tendencia Michelin, maridados con vinos seleccionados por nuestra sommelier para el salón y la temporada.',
  },
  {
    Icon: Music,
    title: 'Música & Ambiente',
    description:
      'Conjuntos en vivo, DJs y momentos acústicos dispuestos para que la energía suba y se serene exactamente cuando debe.',
  },
  {
    Icon: Camera,
    title: 'Imagen & Film',
    description:
      'Una selección curada de fotógrafos y cineastas cuyo estilo encaja con el tuyo — discretos, luminosos, duraderos.',
  },
  {
    Icon: MapPin,
    title: 'Búsqueda de Locaciones',
    description:
      'Acceso a fincas privadas, villas históricas y rincones tranquilos de Europa que nunca aparecen en un catálogo.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ivory-100 py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="p" className="eyebrow">
            Lo que creamos
          </Reveal>
          <Reveal
            as="h2"
            delay={1}
            className="mt-5 font-display text-4xl leading-tight text-espresso-800 sm:text-5xl"
          >
            Cada capa de tu día,
            <span className="italic text-champagne-600"> pensada.</span>
          </Reveal>
          <Reveal as="p" delay={2} className="mt-6 text-base leading-relaxed text-espresso-500">
            Desde el primer boceto hasta el último bis, nuestro atelier sostiene cada hilo —
            para que tú puedas estar plenamente presente en el día que has imaginado.
          </Reveal>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-[2px] border border-ivory-200 bg-ivory-200 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="group relative bg-ivory-50 p-9 transition-colors duration-500 hover:bg-white lg:p-12"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-champagne-400/50 text-champagne-600 transition-all duration-500 group-hover:border-champagne-500 group-hover:bg-champagne-500 group-hover:text-ivory-50">
                <s.Icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="mt-7 font-display text-2xl text-espresso-800">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-espresso-500">
                {s.description}
              </p>
              {/* corner accent */}
              <span className="pointer-events-none absolute right-6 top-6 font-display text-sm italic text-ivory-300 transition-colors group-hover:text-champagne-300">
                0{i + 1}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
