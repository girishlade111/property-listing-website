import { useEffect, useState } from 'react';
import { X, Sparkles, ArrowUpRight } from 'lucide-react';

function BoltIcon({ className }: { className?: string }) {
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

const ideas = [
  'Mobile-friendly parcel viewer wired to your CRM as a lead-gen tool',
  'Stunning per-listing websites with live chat to your cell',
  'Custom landing page for each off-market home in a zip code with a wholesaler offer, integrated into your appointment setting system',
  'Branded offer submission portals for off-market deals, connected to your CRM and deal pipeline',
  'Insert your idea here — your imagination is the limit',
];

export function BoltPromo() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        className="fixed bottom-4 left-4 z-[70] flex items-center gap-2 rounded-full border border-white/70 bg-[#0b0b0c] px-4 py-2.5 text-xs font-semibold text-white shadow-xl transition-transform duration-300 hover:scale-105"
        aria-label="What is this?"
      >
        <Sparkles size={15} className="text-white" />
        What is this?
      </button>
    );
  }

  return (
    <div
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      className="fixed bottom-4 left-4 z-[70] w-[calc(100vw-2rem)] max-w-md overflow-hidden rounded-2xl bg-white text-[#0b0b0c] shadow-2xl ring-1 ring-black/10"
    >
      <div className="flex items-start justify-between gap-3 border-b border-black/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <img
            src="/assets/Alexander_Berger_Headshot.png"
            alt="Alexander Berger"
            className="h-11 w-11 shrink-0 rounded-full object-cover object-top ring-1 ring-black/10"
          />
          <p className="text-sm font-semibold leading-tight">
            I built this as a demo of what <span className="underline decoration-2 underline-offset-2">YOU</span> can do with AI
          </p>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="-mr-1 -mt-1 shrink-0 rounded-full p-1.5 text-black/40 transition-colors hover:bg-black/5 hover:text-black"
          aria-label="Close"
        >
          <X size={16} />
        </button>
      </div>

      <div className="max-h-[65vh] overflow-y-auto px-5 py-4">
        <p className="text-[0.8rem] leading-relaxed text-black/65">
          Real estate professionals are now creating powerful custom web applications for their
          businesses without expensive software development teams.
        </p>
        <p className="mt-3 text-[0.8rem] leading-relaxed text-black/65">
          Skeptical? Open the template and try modifying it yourself.
        </p>

        <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-wider text-black/45">
          A few ideas for real estate professionals
        </p>
        <ul className="mt-2.5 space-y-2">
          {ideas.map((idea) => (
            <li key={idea} className="flex gap-2.5 text-[0.8rem] leading-relaxed text-black/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black/30" />
              <span>{idea}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-[0.8rem] leading-relaxed text-black/65">
          AI powered tools can help you &amp; your team get it done quickly and affordably. Myself and
          the Bolt.new team are standing by to help you get started.
        </p>
        <p className="mt-3 text-[0.78rem] font-semibold text-[#0b0b0c]">
          — Alexander Berger, COO @ Bolt.new
        </p>
      </div>

      <div className="border-t border-black/10 p-4">
        <a
          href="https://bolt.new/fork/sb1-x7nrnkk6"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0b0b0c] px-4 py-2.5 text-xs font-semibold text-white transition-transform duration-300 hover:scale-[1.02] active:scale-95"
        >
          <BoltIcon className="h-3.5 w-auto" />
          Open App Template
          <ArrowUpRight size={15} />
        </a>
      </div>
    </div>
  );
}
