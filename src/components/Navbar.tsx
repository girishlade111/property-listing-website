import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useProperty } from '../context/ThemeContext';

const links = [
  { label: 'Overview', href: '#overview' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Enquire', href: '#enquire' },
];

export function Navbar() {
  const property = useProperty();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dark = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-[var(--demobar-h)] z-50 transition-all duration-700 ease-lux ${
        dark ? 'bg-bone/90 backdrop-blur-md shadow-[0_1px_0_rgba(12,12,13,0.08)]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#top"
          className={`font-display text-2xl tracking-wide transition-colors duration-500 ${
            dark ? 'text-ink' : 'text-bone'
          }`}
        >
          {property.brand}
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`group relative text-xs font-medium uppercase tracking-widest2 transition-colors duration-500 ${
                dark ? 'text-ink/70 hover:text-ink' : 'text-bone/80 hover:text-bone'
              }`}
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-current transition-all duration-500 ease-lux group-hover:w-full" />
            </a>
          ))}
          <a
            href="#enquire"
            className={`border px-6 py-2.5 text-xs font-medium uppercase tracking-widest2 transition-all duration-500 ease-lux ${
              dark
                ? 'border-ink text-ink hover:bg-ink hover:text-bone'
                : 'border-bone/60 text-bone hover:bg-bone hover:text-ink'
            }`}
          >
            Book a Viewing
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className={`lg:hidden ${dark ? 'text-ink' : 'text-bone'}`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-ink/10 bg-bone lg:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        } transition-all duration-500 ease-lux`}
      >
        <div className="flex flex-col px-6 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink/5 py-4 text-sm uppercase tracking-widest2 text-ink/80"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
