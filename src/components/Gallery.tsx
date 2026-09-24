import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useProperty } from '../context/ThemeContext';
import { Reveal } from './Reveal';

const spanClasses: Record<string, string> = {
  wide: 'md:col-span-2',
  tall: 'md:row-span-2',
  normal: '',
};

export function Gallery() {
  const property = useProperty();
  const images = property.gallery;
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const next = () => setActive((i) => (i === null ? i : (i + 1) % images.length));
  const prev = () => setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length));

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [active]);

  return (
    <section id="gallery" className="bg-ink py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest2 text-accent-light">
              Gallery
            </span>
            <h2 className="mt-4 font-display text-4xl font-light text-bone sm:text-5xl">
              A walk through the light.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-bone/50">
            Select an image to view the residence full-screen. Use the arrows or your keyboard to move
            between frames.
          </p>
        </Reveal>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[260px] md:grid-cols-3">
          {images.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 3) * 100}
              as="button"
              className={`group relative overflow-hidden ${spanClasses[img.span ?? 'normal']}`}
            >
              <button onClick={() => setActive(i)} className="absolute inset-0 h-full w-full">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-lux group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />
                <span className="absolute bottom-4 left-4 translate-y-2 text-left text-xs uppercase tracking-widest2 text-bone opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.alt}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 px-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute right-6 top-6 text-bone/70 transition-colors hover:text-bone"
            aria-label="Close"
          >
            <X size={30} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-bone/70 transition-colors hover:text-bone sm:left-10"
            aria-label="Previous"
          >
            <ChevronLeft size={40} />
          </button>
          <figure className="max-h-[82vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[active].src}
              alt={images[active].alt}
              className="max-h-[82vh] w-full object-contain"
            />
            <figcaption className="mt-4 text-center text-xs uppercase tracking-widest2 text-bone/60">
              {images[active].alt} · {active + 1} / {images.length}
            </figcaption>
          </figure>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-bone/70 transition-colors hover:text-bone sm:right-10"
            aria-label="Next"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
}
