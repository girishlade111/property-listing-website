import { useProperty } from '../context/ThemeContext';
import { Reveal } from './Reveal';

export function Overview() {
  const property = useProperty();
  return (
    <section id="overview" className="bg-bone">
      {/* Stat bar */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 divide-x divide-y divide-ink/10 border-y border-ink/10 md:grid-cols-4 md:divide-y-0">
          {property.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 90}
              className="flex flex-col items-center gap-3 px-4 py-10 text-center"
            >
              <stat.icon size={26} strokeWidth={1.25} className="text-accent" />
              <span className="font-display text-4xl font-light text-ink">{stat.value}</span>
              <span className="text-[0.7rem] uppercase tracking-widest2 text-stone-500">
                {stat.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Editorial intro */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <span className="text-xs font-medium uppercase tracking-widest2 text-accent">
              The Residence
            </span>
            <h2 className="mt-6 font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
              Architecture in conversation with the sky.
            </h2>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            {property.description.map((para, i) => (
              <Reveal key={i} delay={i * 120} as="p" className="mb-6 text-lg leading-relaxed text-stone-600">
                {para}
              </Reveal>
            ))}

            <Reveal delay={240} className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {property.highlights.map((h) => (
                <span key={h} className="flex items-center gap-2 text-sm text-ink/80">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {h}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
