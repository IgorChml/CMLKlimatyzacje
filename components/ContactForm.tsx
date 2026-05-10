'use client'

import { useState, type FormEvent } from 'react'
import { Loader2 } from 'lucide-react'

interface FormState {
  name: string
  phone: string
  email: string
  devices: string
  propertyType: string
  area: string
}

const EMPTY: FormState = {
  name: '',
  phone: '',
  email: '',
  devices: '',
  propertyType: '',
  area: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function set(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('failed')

      setStatus('success')
      setForm(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full min-h-[44px] rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky focus:border-transparent transition-all duration-200'
  const labelClass = 'block text-xs font-medium text-gray-500 mb-1.5'

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full">
      <h3 className="text-lg font-bold text-navy mb-1">Bezpłatna wycena</h3>
      <p className="text-xs text-gray-500 mb-5">Odpowiadamy w ciągu 24h roboczych.</p>

      {status === 'success' && (
        <div className="mb-5 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm font-medium text-green-700">
          ✅ Dziękujemy! Odezwiemy się wkrótce.
        </div>
      )}

      {status === 'error' && (
        <div className="mb-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm font-medium text-red-700">
          ❌ Coś poszło nie tak. Spróbuj ponownie lub zadzwoń do nas.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Imię i nazwisko <span className="text-orange">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jan Kowalski"
            value={form.name}
            onChange={set('name')}
            className={inputClass}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="cf-phone" className={labelClass}>
            Telefon <span className="text-orange">*</span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="600 000 000"
            minLength={9}
            value={form.phone}
            onChange={set('phone')}
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            E-mail <span className="text-orange">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            required
            autoComplete="email"
            placeholder="jan@example.pl"
            value={form.email}
            onChange={set('email')}
            className={inputClass}
          />
        </div>

        {/* Devices + Property type (side by side) */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="cf-devices" className={labelClass}>
              Liczba urządzeń <span className="text-orange">*</span>
            </label>
            <input
              id="cf-devices"
              type="number"
              required
              min={1}
              max={10}
              placeholder="1"
              value={form.devices}
              onChange={set('devices')}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="cf-property" className={labelClass}>
              Nieruchomość <span className="text-orange">*</span>
            </label>
            <select
              id="cf-property"
              required
              value={form.propertyType}
              onChange={set('propertyType')}
              className={inputClass}
            >
              <option value="" disabled>Wybierz</option>
              <option value="Dom">Dom</option>
              <option value="Mieszkanie">Mieszkanie</option>
            </select>
          </div>
        </div>

        {/* Area */}
        <div>
          <label htmlFor="cf-area" className={labelClass}>
            Metraż nieruchomości (m²) <span className="text-orange">*</span>
          </label>
          <input
            id="cf-area"
            type="number"
            required
            min={1}
            placeholder="80"
            value={form.area}
            onChange={set('area')}
            className={inputClass}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex items-center justify-center gap-2 bg-orange text-white font-bold rounded-xl min-h-[44px] px-6 py-3 text-sm hover:bg-orange/90 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 disabled:opacity-70 transition-all duration-200"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Wysyłanie…
            </>
          ) : (
            'Wyślij zapytanie'
          )}
        </button>

        <p className="text-xs text-center text-gray-400">
          Wysyłając formularz, akceptujesz{' '}
          <a href="/polityka-prywatnosci" className="underline hover:text-navy">
            politykę prywatności
          </a>
          .
        </p>
      </form>
    </div>
  )
}
