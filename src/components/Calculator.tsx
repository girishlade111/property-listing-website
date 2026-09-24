import { useMemo, useState } from 'react';
import { useProperty } from '../context/ThemeContext';
import { Reveal } from './Reveal';

type Mode = 'rent' | 'mortgage';

const fmt = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

function Field({
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between">
        <label className="text-xs uppercase tracking-widest2 text-bone/60">{label}</label>
        <span className="font-display text-2xl font-light text-bone">{suffix}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1 w-full cursor-pointer appearance-none rounded-full bg-bone/15 accent-accent-light"
      />
    </div>
  );
}

export function Calculator() {
  const property = useProperty();
  const [mode, setMode] = useState<Mode>('rent');

  // Rent affordability
  const [income, setIncome] = useState(160000);
  const recommended = useMemo(() => (income / 12) * 0.3, [income]);
  const fits = recommended >= property.price;
  const ratio = Math.round((property.price / (income / 12)) * 100);

  // Mortgage
  const [price, setPrice] = useState(8500000);
  const [downPct, setDownPct] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);

  const monthly = useMemo(() => {
    const principal = price * (1 - downPct / 100);
    const r = rate / 100 / 12;
    const n = term * 12;
    if (r === 0) return principal / n;
    return (principal * r) / (1 - Math.pow(1 + r, -n));
  }, [price, downPct, rate, term]);

  return (
    <section id="calculator" className="bg-ink py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-medium uppercase tracking-widest2 text-accent-light">
            Plan Your Move
          </span>
          <h2 className="mt-4 font-display text-4xl font-light text-bone sm:text-5xl">
            Understand the numbers.
          </h2>
        </Reveal>

        <Reveal className="mx-auto mb-12 flex w-fit rounded-full border border-bone/15 p-1">
          {(['rent', 'mortgage'] as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`rounded-full px-7 py-2.5 text-xs font-medium uppercase tracking-widest2 transition-all duration-500 ease-lux ${
                mode === m ? 'bg-bone text-ink' : 'text-bone/60 hover:text-bone'
              }`}
            >
              {m === 'rent' ? 'Lease Affordability' : 'Mortgage Estimate'}
            </button>
          ))}
        </Reveal>

        <div className="grid items-stretch gap-px overflow-hidden rounded-sm border border-bone/10 bg-bone/10 lg:grid-cols-5">
          {/* Inputs */}
          <Reveal className="bg-ink p-8 lg:col-span-3 lg:p-12">
            {mode === 'rent' ? (
              <div className="space-y-10">
                <Field
                  label="Household annual income"
                  value={income}
                  min={60000}
                  max={1500000}
                  step={5000}
                  suffix={fmt(income)}
                  onChange={setIncome}
                />
                <p className="text-sm leading-relaxed text-bone/45">
                  Most leasing standards recommend allocating no more than 30% of gross monthly income
                  toward rent. Slide to see how {property.name} fits within your budget.
                </p>
              </div>
            ) : (
              <div className="space-y-9">
                <Field
                  label="Purchase price"
                  value={price}
                  min={2000000}
                  max={20000000}
                  step={100000}
                  suffix={fmt(price)}
                  onChange={setPrice}
                />
                <Field
                  label="Down payment"
                  value={downPct}
                  min={5}
                  max={60}
                  step={1}
                  suffix={`${downPct}%`}
                  onChange={setDownPct}
                />
                <Field
                  label="Interest rate"
                  value={rate}
                  min={2}
                  max={10}
                  step={0.1}
                  suffix={`${rate.toFixed(1)}%`}
                  onChange={setRate}
                />
                <Field
                  label="Loan term"
                  value={term}
                  min={10}
                  max={30}
                  step={5}
                  suffix={`${term} yrs`}
                  onChange={setTerm}
                />
              </div>
            )}
          </Reveal>

          {/* Result */}
          <Reveal delay={120} className="flex flex-col justify-center bg-ink-800 p-8 lg:col-span-2 lg:p-12">
            {mode === 'rent' ? (
              <>
                <span className="text-xs uppercase tracking-widest2 text-bone/50">
                  Recommended monthly budget
                </span>
                <span className="mt-3 font-display text-5xl font-light text-bone">
                  {fmt(recommended)}
                </span>
                <div className="my-7 h-px w-full bg-bone/10" />
                <span className="text-xs uppercase tracking-widest2 text-bone/50">This residence</span>
                <span className="mt-2 font-display text-3xl font-light text-accent-light">
                  {fmt(property.price)} <span className="text-base text-bone/40">/ mo</span>
                </span>
                <div
                  className={`mt-8 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-widest2 ${
                    fits ? 'bg-emerald-400/10 text-emerald-300' : 'bg-rose-400/10 text-rose-300'
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {fits ? 'Comfortably within budget' : 'Above 30% guideline'}
                </div>
                <p className="mt-4 text-xs text-bone/40">
                  At this income, the lease represents ~{ratio}% of monthly gross.
                </p>
              </>
            ) : (
              <>
                <span className="text-xs uppercase tracking-widest2 text-bone/50">
                  Estimated monthly payment
                </span>
                <span className="mt-3 font-display text-5xl font-light text-bone">{fmt(monthly)}</span>
                <div className="my-7 h-px w-full bg-bone/10" />
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between text-bone/60">
                    <dt>Down payment</dt>
                    <dd className="text-bone">{fmt(price * (downPct / 100))}</dd>
                  </div>
                  <div className="flex justify-between text-bone/60">
                    <dt>Loan amount</dt>
                    <dd className="text-bone">{fmt(price * (1 - downPct / 100))}</dd>
                  </div>
                  <div className="flex justify-between text-bone/60">
                    <dt>Total of payments</dt>
                    <dd className="text-bone">{fmt(monthly * term * 12)}</dd>
                  </div>
                </dl>
                <p className="mt-6 text-xs text-bone/40">
                  Principal & interest only. Taxes, insurance and HOA not included.
                </p>
              </>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
