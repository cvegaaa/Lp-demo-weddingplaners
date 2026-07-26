import Reveal from '@/components/Reveal';
import { images } from '@/lib/images';

const steps = [
  {
    number: 'I',
    title: 'Descubrimiento',
    description:
      'Nos conocemos — con una copa de vino o una llamada — para entender a los dos: su historia, su gusto, el sentimiento que quieren que el día transmita.',
  },
  {
    number: 'II',
    title: 'Diseño',
    description:
      'Toma forma una dirección creativa: ambiente, paleta, florales, mesas y un cronograma que respira. Lo ven antes de construirlo.',
  },
  {
    number: 'III',
    title: 'Curaduría',
    description:
      'Reunimos a tus artesanos — locación, chef, florista, músicos, realizadores — y modelamos cada propuesta en torno a tu dirección.',
  },
  {
    number: 'IV',
    title: 'Producción',
    description:
      'El día del evento, nuestro equipo va ya tres pasos por delante. Llegas como invitado a tu propia celebración, y nosotros sostenemos el resto.',
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-espresso-800 py-24 text-ivory-100 lg:py-32">
      {/* Faint background image */}
      <div className="absolute inset-0 opacity-15">
        <img
          src={images.receptionNight}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-800 via-espresso-800/85 to-espresso-800" />

      <div className="relative mx-auto max-w-8xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="p" className="eyebrow text-champagne-300">
            Cómo trabajamos
          </Reveal>
          <Reveal
            as="h2"
            delay={1}
            className="mt-5 font-display text-4xl leading-tight text-ivory-50 sm:text-5xl"
          >
            Cuatro movimientos,
            <span className="italic text-champagne-300"> un día sin costuras.</span>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2px] border border-ivory-100/10 bg-ivory-100/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal
              key={s.number}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="group relative p-8 transition-colors duration-500 hover:bg-ivory-100/5 lg:p-10"
            >
              <p className="font-display text-5xl italic text-champagne-400/70 transition-colors group-hover:text-champagne-300">
                {s.number}
              </p>
              <h3 className="mt-5 font-display text-2xl text-ivory-50">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory-100/65">
                {s.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
