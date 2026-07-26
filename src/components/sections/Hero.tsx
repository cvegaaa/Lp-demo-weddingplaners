import { ChevronDown } from 'lucide-react';
import { images } from '@/lib/images';

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen min-h-[680px] w-full overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Bride and groom in an elegant outdoor wedding ceremony"
          className="h-full w-full object-cover animate-slow-zoom"
          fetchPriority="high"
        />
        {/* Layered overlays for depth + text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-800/50 via-espresso-800/25 to-espresso-800/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-800/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          className="eyebrow text-champagne-300 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          Maison Lumière · Desde 2009
        </p>
        <h1
          className="mt-6 max-w-4xl text-balance font-display text-5xl font-medium leading-[1.05] text-ivory-50 opacity-0 animate-fade-up sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: '0.5s' }}
        >
          Bodas &amp; Eventos,
          <span className="block italic text-champagne-300">compuestos con luz.</span>
        </h1>
        <p
          className="mt-8 max-w-xl text-balance text-base leading-relaxed text-ivory-100/85 opacity-0 animate-fade-up sm:text-lg"
          style={{ animationDelay: '0.75s' }}
        >
          Un atelier boutique que diseña celebraciones a medida — desde elopements íntimos
          hasta grandes soirées — por toda Europa y más allá.
        </p>
        <div
          className="mt-10 flex flex-col items-center gap-4 opacity-0 animate-fade-up sm:flex-row sm:gap-6"
          style={{ animationDelay: '0.95s' }}
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full bg-champagne-500 px-9 py-3.5 text-xs uppercase tracking-widest-2 text-espresso-800 transition-all duration-300 hover:bg-champagne-400 hover:shadow-[0_12px_40px_-12px_rgba(184,147,90,0.7)]"
          >
            Comienza tu historia
          </button>
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full border border-ivory-100/50 px-9 py-3.5 text-xs uppercase tracking-widest-2 text-ivory-50 transition-all duration-300 hover:bg-ivory-50 hover:text-espresso-800"
          >
            Ver portfolio
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollToNext}
        aria-label="Desplazarse al contenido"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ivory-100/70 transition-colors hover:text-ivory-50"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </button>
    </section>
  );
}
