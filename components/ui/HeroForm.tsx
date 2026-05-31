'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const serviceOptions = [
  'Marriage Proposal',
  'Intimate Elopement',
  'Destination Wedding',
  'Multi-Day Celebration',
  'Other',
]

const currencies = [
  { code: 'USD', symbol: '$', label: 'USD ($)' },
  { code: 'EUR', symbol: '€', label: 'EUR (€)' },
  { code: 'GBP', symbol: '£', label: 'GBP (£)' },
  { code: 'MAD', symbol: 'د.م.', label: 'MAD (د.م.)' },
]

interface HeroFormProps {
  defaultService?: string
}

export default function HeroForm({ defaultService = '' }: HeroFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService,
    date: '',
    guests: '',
    budget: '',
    currency: 'USD',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const endpoint = process.env.NEXT_PUBLIC_PHP_MAILER_URL ?? '/api/contact'
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, formType: 'hero' }),
      })
      const result = await res.json()
      if (!res.ok) throw new Error(result.detail || result.error || 'Failed')
      router.push('/thank-you')
    } catch (err) {
      setError((err as Error).message || 'Something went wrong. Please try again or contact us via WhatsApp.')
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-primary/90 backdrop-blur-md border border-gold/20 p-7 lg:p-9"
    >
      <p className="section-eyebrow mb-1">Reserve Your Date</p>
      <h3 className="font-heading text-ivory text-xl lg:text-2xl mb-6 leading-tight">
        Start Planning <em>Your Story</em>
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name + Email */}
        <div className="grid grid-cols-2 gap-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="luxury-input-hero"
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="luxury-input-hero"
          />
        </div>

        {/* Phone + Service */}
        <div className="grid grid-cols-2 gap-4">
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="luxury-input-hero"
          />
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="luxury-input-hero appearance-none cursor-pointer"
          >
            <option value="" disabled>Type of Celebration</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-primary text-ivory">{opt}</option>
            ))}
          </select>
        </div>

        {/* Date + Guests */}
        <div className="grid grid-cols-2 gap-4">
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="luxury-input-hero"
            style={{ colorScheme: 'dark' }}
          />
          <input
            name="guests"
            type="number"
            min="1"
            value={form.guests}
            onChange={handleChange}
            placeholder="Number of Guests"
            className="luxury-input-hero"
          />
        </div>

        {/* Budget + Currency */}
        <div className="flex gap-0 border border-gold/20 focus-within:border-gold/50 transition-colors duration-300">
          <select
            name="currency"
            value={form.currency}
            onChange={handleChange}
            className="bg-white/5 text-ivory font-body text-xs tracking-wide px-3 py-3 border-r border-gold/20 cursor-pointer focus:outline-none appearance-none flex-shrink-0"
            style={{ minWidth: '110px' }}
          >
            {currencies.map((c) => (
              <option key={c.code} value={c.code} className="bg-primary text-ivory">{c.label}</option>
            ))}
          </select>
          <input
            name="budget"
            type="number"
            min="0"
            value={form.budget}
            onChange={handleChange}
            placeholder="Estimated Budget"
            className="flex-1 bg-transparent text-ivory font-body text-xs tracking-wide placeholder:text-ivory/40 px-4 py-3 focus:outline-none w-full"
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your vision…"
          rows={3}
          required
          className="luxury-input-hero resize-none"
        />

        {error && (
          <p className="font-body text-xs text-red-400 text-center leading-relaxed">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-gold w-full justify-center mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <span className="inline-block w-3 h-3 border border-primary/60 border-t-primary rounded-full animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send Your Vision
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1 7h12M7 1l6 6-6 6" />
              </svg>
            </>
          )}
        </button>

        <p className="font-body text-[0.625rem] text-beige/40 text-center tracking-wide">
          We respond within 24 hours · Your privacy is respected
        </p>
      </form>
    </motion.div>
  )
}
