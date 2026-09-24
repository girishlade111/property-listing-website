import { ArrowDown, MapPin } from 'lucide-react';
import { useProperty } from '../context/ThemeContext';

export function Hero() {
  const property = useProperty();
  return (
    <section id="top" className="relative h-screen min-h-[680px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          key={property.hero.image}
          src={property.hero.image}
          alt={property.name}
          className="h-full w-full animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/25 to-ink/80" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between px-6 pb-12 pt-32 lg:px-10">
        <div className="mt-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-3 overflow-hidden">
            <span className="h-px w-12 bg-accent-light" />
            <span className="text-xs font-medium uppercase tracking-widest2 text-bone/85">
              {property.status} · {property.agency}
            </span>
          </div>

          <h1 className="font-display text-[3.4rem] font-light leading-[0.95] text-bone sm:text-7xl lg:text-8xl">
            {property.name}
          </h1>

          <p className="mt-6 max-w-xl font-display text-xl font-light italic leading-relaxed text-bone/85 sm:text-2xl">
            {property.tagline}
          </p>

          <div className="mt-8 flex items-center gap-2 text-bone/80">
            <MapPin size={16} className="text-accent-light" />
            <span className="text-sm uppercase tracking-[0.2em]">{property.location}</span>
          </div>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href="#enquire"
              className="group relative overflow-hidden bg-bone px-9 py-4 text-xs font-semibold uppercase tracking-widest2 text-ink transition-colors"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-bone">
                Schedule a Private Tour
              </span>
              <span className="absolute inset-0 z-0 -translate-x-full bg-ink transition-transform duration-500 ease-lux group-hover:translate-x-0" />
            </a>
            <div className="text-bone">
              <span className="font-display text-3xl font-light">
                ${property.price.toLocaleString()}
              </span>
              <span className="ml-1 text-sm text-bone/70">{property.priceSuffix}</span>
            </div>
          </div>
        </div>

        <a
          href="#overview"
          className="mt-12 hidden items-center gap-3 self-center text-bone/70 transition-colors hover:text-bone lg:flex"
        >
          <span className="text-[0.7rem] uppercase tracking-widest2">Discover</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
