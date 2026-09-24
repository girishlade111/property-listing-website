import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Check } from 'lucide-react';
import { useProperty } from '../context/ThemeContext';
import { Reveal } from './Reveal';

export function Enquire() {
  const property = useProperty();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', message: '' });

  const update = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputCls =
    'w-full border-b border-ink/15 bg-transparent py-3 text-ink placeholder:text-stone-400 focus:border-ink focus:outline-none transition-colors';

  return (
    <section id="enquire" className="bg-bone py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Agent / info */}
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-widest2 text-accent">
              Private Enquiries
            </span>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
              Arrange a private viewing.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-stone-600">
              Viewings are held by appointment only. Share your details and {property.agent.name.split(' ')[0]}{' '}
              will personally coordinate a time that suits you.
            </p>

            <div className="mt-12 flex items-center gap-5">
              <img
                src={property.agent.photo}
                alt={property.agent.name}
                className="h-20 w-20 rounded-full object-cover"
              />
              <div>
                <p className="font-display text-2xl font-light text-ink">{property.agent.name}</p>
                <p className="text-sm text-stone-500">{property.agent.title}</p>
                <p className="text-xs uppercase tracking-widest2 text-stone-400">
                  {property.agent.license}
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-4 text-sm">
              <a href={`tel:${property.agent.phone}`} className="flex items-center gap-3 text-ink/80 transition-colors hover:text-accent">
                <Phone size={16} className="text-accent" /> {property.agent.phone}
              </a>
              <a href={`mailto:${property.agent.email}`} className="flex items-center gap-3 text-ink/80 transition-colors hover:text-accent">
                <Mail size={16} className="text-accent" /> {property.agent.email}
              </a>
              <p className="flex items-center gap-3 text-ink/80">
                <MapPin size={16} className="text-accent" /> {property.fullAddress}
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="bg-ink p-8 sm:p-12">
            {sent ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent-light/40">
                  <Check size={28} className="text-accent-light" />
                </div>
                <h3 className="mt-8 font-display text-3xl font-light text-bone">Request received</h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone/55">
                  Thank you, {form.name || 'guest'}. {property.agent.name.split(' ')[0]} will be in touch
                  shortly to confirm your private viewing.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', date: '', message: '' }); }}
                  className="mt-10 border border-bone/30 px-6 py-3 text-xs uppercase tracking-widest2 text-bone transition-colors hover:bg-bone hover:text-ink"
                >
                  Submit another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-7">
                <div className="grid gap-7 sm:grid-cols-2">
                  <input required placeholder="Full name" value={form.name} onChange={update('name')}
                    className={inputCls.replace('text-ink', 'text-bone').replace('border-ink/15', 'border-bone/20').replace('focus:border-ink', 'focus:border-bone').replace('placeholder:text-stone-400', 'placeholder:text-bone/40')} />
                  <input required type="tel" placeholder="Phone" value={form.phone} onChange={update('phone')}
                    className={inputCls.replace('text-ink', 'text-bone').replace('border-ink/15', 'border-bone/20').replace('focus:border-ink', 'focus:border-bone').replace('placeholder:text-stone-400', 'placeholder:text-bone/40')} />
                </div>
                <input required type="email" placeholder="Email address" value={form.email} onChange={update('email')}
                  className={inputCls.replace('text-ink', 'text-bone').replace('border-ink/15', 'border-bone/20').replace('focus:border-ink', 'focus:border-bone').replace('placeholder:text-stone-400', 'placeholder:text-bone/40')} />
                <div>
                  <label className="text-xs uppercase tracking-widest2 text-bone/40">Preferred date</label>
                  <input type="date" value={form.date} onChange={update('date')}
                    className={`${inputCls.replace('text-ink', 'text-bone').replace('border-ink/15', 'border-bone/20').replace('focus:border-ink', 'focus:border-bone')} mt-1 [color-scheme:dark]`} />
                </div>
                <textarea rows={3} placeholder="Message (optional)" value={form.message} onChange={update('message')}
                  className={`${inputCls.replace('text-ink', 'text-bone').replace('border-ink/15', 'border-bone/20').replace('focus:border-ink', 'focus:border-bone').replace('placeholder:text-stone-400', 'placeholder:text-bone/40')} resize-none`} />
                <button type="submit"
                  className="group relative w-full overflow-hidden bg-bone py-4 text-xs font-semibold uppercase tracking-widest2 text-ink">
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-bone">
                    Request a Viewing
                  </span>
                  <span className="absolute inset-0 z-0 -translate-x-full bg-accent transition-transform duration-500 ease-lux group-hover:translate-x-0" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
