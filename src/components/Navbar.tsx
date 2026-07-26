import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '@/lib/hooks';

const links = [
  { id: 'home', label: 'Inicio' },
  { id: 'about', label: 'Atelier' },
  { id: 'services', label: 'Servicios' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'packages', label: 'Colecciones' },
  { id: 'contact', label: 'Consultar' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(links.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory-50/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(184,147,90,0.18)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <button
          onClick={() => go('home')}
          className="group flex flex-col items-start leading-none"
          aria-label="Maison Lumière — inicio"
        >
          <span
            className={`font-display text-2xl tracking-wide transition-colors ${
              scrolled ? 'text-espresso-800' : 'text-ivory-50'
            }`}
          >
            Maison Lumière
          </span>
          <span
            className={`mt-0.5 text-[10px] uppercase tracking-widest-2 transition-colors ${
              scrolled ? 'text-champagne-600' : 'text-ivory-100/80'
            }`}
          >
            Bodas &amp; Eventos
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`relative text-sm tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-champagne-500 after:transition-all after:duration-300 ${
                  scrolled ? 'text-espresso-600 hover:text-espresso-800' : 'text-ivory-100/90 hover:text-white'
                } ${active === l.id ? 'after:w-full' : 'after:w-0'}`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => go('contact')}
          className={`hidden rounded-full border px-6 py-2.5 text-xs uppercase tracking-widest-2 transition-all duration-300 lg:inline-block ${
            scrolled
              ? 'border-champagne-500 text-espresso-700 hover:bg-champagne-500 hover:text-ivory-50'
              : 'border-ivory-100/60 text-ivory-50 hover:bg-ivory-50 hover:text-espresso-800'
          }`}
        >
          Comienza tu historia
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${scrolled ? 'text-espresso-800' : 'text-ivory-50'}`}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-espresso-800/98 backdrop-blur-md transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-6">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="block w-full py-3 text-left font-display text-2xl text-ivory-100 hover:text-champagne-300"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li className="mt-3">
            <button
              onClick={() => go('contact')}
              className="w-full rounded-full border border-champagne-400 px-6 py-3 text-xs uppercase tracking-widest-2 text-champagne-300 hover:bg-champagne-500 hover:text-espresso-800"
            >
              Comienza tu historia
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
