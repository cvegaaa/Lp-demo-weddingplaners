import { useState, type FormEvent } from 'react';
import { Loader2, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { supabase, type Inquiry } from '@/lib/supabase';
import { images } from '@/lib/images';

const eventTypes = [
  'Boda',
  'Elopement',
  'Aniversario / Renovación de votos',
  'Soirée Privada',
  'Evento Corporativo',
  'Otro',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const guestsRaw = (data.get('guests') as string) || '';

    const payload: Inquiry = {
      name: (data.get('name') as string).trim(),
      email: (data.get('email') as string).trim(),
      phone: ((data.get('phone') as string) || '').trim() || null,
      event_type: (data.get('event_type') as string) || null,
      event_date: (data.get('event_date') as string) || null,
      guests: guestsRaw ? Number(guestsRaw) : null,
      message: ((data.get('message') as string) || '').trim() || null,
    };

    try {
      const { error } = await supabase.from('inquiries').insert(payload);
      if (error) throw error;
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(
      err instanceof Error
        ? err.message
        : 'Algo salió mal. Inténtalo de nuevo o escríbenos directamente.'
    );
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ivory-50 py-24 lg:py-32">
      {/* Soft floral backdrop */}
      <div className="absolute inset-0">
        <img
          src={images.ceremonyArch}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory-50 via-ivory-50/90 to-ivory-50" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — invitation copy */}
          <div>
            <Reveal as="p" className="eyebrow">
              Consultar
            </Reveal>
            <Reveal
              as="h2"
              delay={1}
              className="mt-5 font-display text-4xl leading-tight text-espresso-800 sm:text-5xl"
            >
              Cuéntanos sobre
              <span className="italic text-champagne-600"> tu día.</span>
            </Reveal>
            <Reveal as="p" delay={2} className="mt-6 max-w-md text-base leading-relaxed text-espresso-500">
              Aceptamos un número limitado de celebraciones cada año. Comparte unos detalles
              y nuestro atelier se pondrá en contacto en dos días laborables para concertar
              una conversación — por llamada, vídeo o con una copa de algo bueno.
            </Reveal>

            <Reveal delay={3} className="mt-10 space-y-5">
              {[
                { label: 'Estudio', value: '14 Rue Saint-Honoré, París' },
                { label: 'Email', value: 'hello@maisonlumiere.com' },
                { label: 'Teléfono', value: '+33 1 42 00 00 00' },
                { label: 'Horario', value: 'Martes a sábado, 10h–18h CET' },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex border-b border-ivory-200 pb-3 text-sm"
                >
                  <span className="w-28 shrink-0 text-xs uppercase tracking-wider text-champagne-600">
                    {row.label}
                  </span>
                  <span className="text-espresso-600">{row.value}</span>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={2}>
            <div className="rounded-[2px] bg-white/80 p-7 shadow-[0_30px_80px_-30px_rgba(43,36,32,0.25)] backdrop-blur-sm lg:p-10">
              {status === 'success' ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <CheckCircle2 size={56} strokeWidth={1.2} className="text-sage-500" />
                  <h3 className="mt-5 font-display text-3xl text-espresso-800">
                    Gracias.
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-espresso-500">
                    Tu consulta ha llegado al atelier. Nos pondremos en contacto en dos
                    días laborables para empezar a dar forma a tu día.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-7 text-xs uppercase tracking-widest-2 text-champagne-600 hover:text-champagne-700"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Nombre completo" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Teléfono (opcional)" name="phone" type="tel" />
                    <SelectField label="Tipo de evento" name="event_type" options={eventTypes} />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Fecha del evento" name="event_date" type="date" />
                    <Field
                      label="Invitados aprox."
                      name="guests"
                      type="number"
                      min={0}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs uppercase tracking-wider text-champagne-600"
                    >
                      Cuéntanos más
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="El sentimiento que quieres que el día transmita, una locación en mente, lo que ya sepas…"
                      className="w-full resize-none border-b border-ivory-300 bg-transparent py-2 text-sm text-espresso-700 placeholder:text-espresso-300 focus:border-champagne-500 focus:outline-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-start gap-2 rounded-[2px] bg-rose-400/15 px-4 py-3 text-sm text-rose-600">
                      <AlertCircle size={16} className="mt-0.5 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="group flex w-full items-center justify-center gap-3 rounded-full bg-espresso-800 px-6 py-4 text-xs uppercase tracking-widest-2 text-ivory-50 transition-all duration-300 hover:bg-espresso-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Enviando
                      </>
                    ) : (
                      <>
                        <Send size={15} className="transition-transform group-hover:translate-x-1" />
                        Enviar al atelier
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-espresso-400">
                    Tus datos se guardan con confidencialidad y nunca se comparten.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: number;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs uppercase tracking-wider text-champagne-600"
      >
        {label}
        {required && <span className="text-rose-500"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        min={min}
        className="w-full border-b border-ivory-300 bg-transparent py-2 text-sm text-espresso-700 placeholder:text-espresso-300 focus:border-champagne-500 focus:outline-none"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs uppercase tracking-wider text-champagne-600"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full border-b border-ivory-300 bg-transparent py-2 text-sm text-espresso-700 focus:border-champagne-500 focus:outline-none"
      >
        <option value="">Selecciona…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
