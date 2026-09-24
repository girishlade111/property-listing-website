import { Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function CloneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 91 116" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M52.624 101.279C44.4204 101.279 36.3658 98.2955 31.7419 91.8815L30.111 99.4455L0 115.442L3.2506 99.4455L25.179 0H52.0274L44.2712 35.0521C50.5358 28.1908 56.353 25.6552 63.8109 25.6552C79.9202 25.6552 90.6592 36.2454 90.6592 55.6359C90.6592 75.623 78.2792 101.279 52.624 101.279ZM62.9159 61.3039C62.9159 70.5517 56.353 77.5621 47.851 77.5621C43.0779 77.5621 38.7523 75.7722 35.9183 72.6399L40.0948 54.2935C43.2271 51.1612 46.8069 49.3713 50.9833 49.3713C57.3971 49.3713 62.9159 54.1443 62.9159 61.3039Z"
      />
    </svg>
  );
}

function Swatch({ colors }: { colors: { accent: string; ink: string; bone: string } }) {
  return (
    <span className="flex h-4 w-4 overflow-hidden rounded-full ring-1 ring-white/25">
      <span className="h-full w-1/3" style={{ background: `rgb(${colors.bone})` }} />
      <span className="h-full w-1/3" style={{ background: `rgb(${colors.accent})` }} />
      <span className="h-full w-1/3" style={{ background: `rgb(${colors.ink})` }} />
    </span>
  );
}

export function DemoBar() {
  const { themes, activeId, setActiveId } = useTheme();

  return (
    <div className="fixed inset-x-0 top-0 z-[80] border-b border-white/10 bg-[#0b0b0c]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2.5 lg:px-10">
        <div className="hidden items-center gap-2 pr-2 text-white/40 sm:flex">
          <Palette size={15} />
          <span className="text-[0.62rem] font-semibold uppercase tracking-widest2">Demo</span>
        </div>

        <div className="flex flex-1 items-center gap-2 overflow-x-auto scrollbar-none">
          {themes.map((t) => {
            const active = t.id === activeId;
            return (
              <button
                key={t.id}
                onClick={() => setActiveId(t.id)}
                className={`group flex shrink-0 items-center gap-2.5 rounded-full border px-3.5 py-1.5 transition-all duration-300 ${
                  active
                    ? 'border-white/80 bg-white text-[#0b0b0c]'
                    : 'border-white/15 text-white/70 hover:border-white/40 hover:text-white'
                }`}
              >
                <Swatch
                  colors={{ accent: t.colors.accent, ink: t.colors.ink, bone: t.colors.bone }}
                />
                <span className="text-xs font-semibold leading-none" style={{ fontFamily: t.fonts.display }}>
                  {t.label}
                </span>
              </button>
            );
          })}
        </div>

        <a
          href="https://bolt.new/fork/sb1-x7nrnkk6"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          className="flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-normal text-[#0b0b0c] transition-transform duration-300 hover:scale-[1.03] active:scale-95"
        >
          <CloneIcon className="h-3.5 w-auto" />
          <span className="hidden sm:inline">Clone Template</span>
          <span className="sm:hidden">Clone</span>
        </a>
      </div>
    </div>
  );
}
