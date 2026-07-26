import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso-800 text-ivory-100">
      <div className="mx-auto max-w-8xl px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-display text-3xl tracking-wide">Maison Lumière</p>
            <p className="mt-1 text-[10px] uppercase tracking-widest-2 text-champagne-300">
              Bodas &amp; Eventos
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory-100/70">
              Un atelier boutique que crea bodas y celebraciones a medida por toda Europa
              y más allá — diseñadas de principio a fin con elegancia atemporal.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs uppercase tracking-widest-2 text-champagne-300">
              Explora
            </p>
            <ul className="mt-5 space-y-3 text-sm text-ivory-100/80">
              {[
                { id: 'about', label: 'El Atelier' },
                { id: 'services', label: 'Servicios' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'packages', label: 'Colecciones' },
                { id: 'contact', label: 'Consultar' },
              ].map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="transition-colors hover:text-champagne-300"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest-2 text-champagne-300">
              Estudio
            </p>
            <ul className="mt-5 space-y-4 text-sm text-ivory-100/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-champagne-400" />
                <span>14 Rue Saint-Honoré, 75001 París, Francia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-champagne-400" />
                <a href="tel:+33142000000" className="hover:text-champagne-300">
                  +33 1 42 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-champagne-400" />
                <a href="mailto:hello@maisonlumiere.com" className="hover:text-champagne-300">
                  hello@maisonlumiere.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / social */}
          <div>
            <p className="text-xs uppercase tracking-widest-2 text-champagne-300">
              El Diario
            </p>
            <p className="mt-5 text-sm text-ivory-100/70">
              Notas ocasionales sobre oficio, temporada y las celebraciones que damos forma.
            </p>
            <form
              className="mt-4 flex items-center border-b border-ivory-100/30 focus-within:border-champagne-400"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Tu email"
                className="w-full bg-transparent py-2 text-sm text-ivory-50 placeholder:text-ivory-100/40 focus:outline-none"
              />
              <button
                type="submit"
                className="ml-2 shrink-0 text-xs uppercase tracking-widest-2 text-champagne-300 hover:text-champagne-400"
              >
                Unirme
              </button>
            </form>
            <div className="mt-6 flex gap-4">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook, label: 'Facebook' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory-100/25 text-ivory-100/80 transition-colors hover:border-champagne-400 hover:text-champagne-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ivory-100/15 pt-8 text-xs text-ivory-100/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Maison Lumière. Creado con cuidado.</p>
          <p className="flex gap-5">
            <a href="#" className="hover:text-champagne-300">Privacidad</a>
            <a href="#" className="hover:text-champagne-300">Términos</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
