import { useProperty } from '../context/ThemeContext';

export function Footer() {
  const property = useProperty();
  return (
    <footer className="bg-ink-800 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center gap-8 text-center">
          <a href="#top" className="font-display text-3xl tracking-wide text-bone">
            {property.brand}
          </a>
          <p className="max-w-md text-sm leading-relaxed text-bone/45">
            {property.fullAddress}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest2 text-bone/50">
            <a href="#overview" className="transition-colors hover:text-bone">Overview</a>
            <a href="#gallery" className="transition-colors hover:text-bone">Gallery</a>
            <a href="#amenities" className="transition-colors hover:text-bone">Amenities</a>
            <a href="#calculator" className="transition-colors hover:text-bone">Calculator</a>
            <a href="#enquire" className="transition-colors hover:text-bone">Enquire</a>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-bone/10 pt-8 text-xs text-bone/35 sm:flex-row">
          <p>© {new Date().getFullYear()} {property.agency}. All rights reserved.</p>
          <p>Equal Housing Opportunity · {property.agent.license}</p>
        </div>
      </div>
    </footer>
  );
}
