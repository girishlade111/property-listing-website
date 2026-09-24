import { useProperty } from '../context/ThemeContext';
import { Reveal } from './Reveal';

export function Amenities() {
  const property = useProperty();
  return (
    <section id="amenities" className="bg-bone py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest2 text-accent">
            Amenities
          </span>
          <h2 className="mt-4 font-display text-4xl font-light text-ink sm:text-5xl">
            Considered in every detail.
          </h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {property.amenities.map((a, i) => (
            <Reveal
              key={a.title}
              delay={(i % 4) * 80}
              className="group bg-bone p-8 transition-colors duration-500 hover:bg-ink"
            >
              <a.icon
                size={28}
                strokeWidth={1.25}
                className="text-accent transition-colors duration-500 group-hover:text-accent-light"
              />
              <h3 className="mt-6 font-display text-2xl font-light text-ink transition-colors duration-500 group-hover:text-bone">
                {a.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-500 transition-colors duration-500 group-hover:text-bone/60">
                {a.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
