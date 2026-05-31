'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import enData from '@/data/locales/en.json'

type FormContent = typeof enData.contactContent.form

interface ContactFormProps {
  content?: FormContent
}

export default function ContactForm({ content }: ContactFormProps) {
  const c = content ?? enData.contactContent.form
  const router = useRouter()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const currencies = [
    { code: 'USD', label: 'USD ($)' },
    { code: 'EUR', label: 'EUR (€)' },
    { code: 'GBP', label: 'GBP (£)' },
    { code: 'MAD', label: 'MAD (د.م.)' },
  ]

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    guests: '',
    budget: '',
    currency: 'USD',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        body: JSON.stringify({ ...form, formType: 'contact', budget: form.budget ? `${form.budget} ${form.currency}` : '' }),
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
    <section id="contact" ref={ref} className="bg-ivory overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[80vh]">

        {/* Image — order-2 on mobile (below form), order-1 on desktop (left) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative order-2 lg:order-1 h-72 lg:h-auto"
        >
          <Image
            src="/images/contact-side.jpg"
            alt="Luxury wedding in Marrakech"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* subtle gold overlay at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
        </motion.div>

        {/* Form — order-1 on mobile (top), order-2 on desktop (right) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="order-1 lg:order-2 flex items-center py-16 lg:py-24 px-6 md:px-12 lg:px-16"
        >
          <div className="w-full max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-7">

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-7">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={c.fields.name}
                  required
                  className="luxury-input"
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={c.fields.email}
                  required
                  className="luxury-input"
                />
              </div>

              {/* Phone + Service */}
              <div className="grid md:grid-cols-2 gap-7">
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={c.fields.phone}
                  className="luxury-input"
                />
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="luxury-input appearance-none cursor-pointer"
                >
                  <option value="" disabled>{c.fields.serviceSelect}</option>
                  {c.serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Date + Guests */}
              <div className="grid md:grid-cols-2 gap-7">
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  className="luxury-input"
                  style={{ colorScheme: 'light' }}
                />
                <input
                  name="guests"
                  type="number"
                  min="1"
                  value={form.guests}
                  onChange={handleChange}
                  placeholder={c.fields.guests}
                  className="luxury-input"
                />
              </div>

              {/* Budget + Currency */}
              <div className="flex border border-primary/20 focus-within:border-gold/60 transition-colors duration-300">
                <select
                  name="currency"
                  value={form.currency}
                  onChange={handleChange}
                  className="bg-transparent text-secondary font-body text-sm px-3 py-3 border-r border-primary/20 cursor-pointer focus:outline-none appearance-none flex-shrink-0"
                  style={{ minWidth: '120px' }}
                >
                  {currencies.map((cur) => (
                    <option key={cur.code} value={cur.code}>{cur.label}</option>
                  ))}
                </select>
                <input
                  name="budget"
                  type="number"
                  min="0"
                  value={form.budget}
                  onChange={handleChange}
                  placeholder={c.fields.budget}
                  className="flex-1 bg-transparent text-secondary font-body text-sm placeholder:text-secondary/40 px-4 py-3 focus:outline-none w-full"
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={c.fields.message}
                rows={4}
                className="luxury-input resize-none"
              />

              {error && (
                <p className="font-body text-xs text-red-500 text-center leading-relaxed">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-gold w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="inline-block w-3 h-3 border border-primary/60 border-t-primary rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    {c.fields.submit}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M1 7h12M7 1l6 6-6 6" />
                    </svg>
                  </>
                )}
              </button>

              <p className="font-body text-xs text-taupe text-center">
                {c.privacy}
              </p>

            </form>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
