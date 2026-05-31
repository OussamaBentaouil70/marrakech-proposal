'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { siteConfig } from '@/data/content'
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
    <section ref={ref} className="py-24 lg:py-36 bg-ivory">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="mb-12">
              <h2 className="font-heading text-primary text-4xl lg:text-5xl leading-tight mb-6">
                {c.leftTitle}<br /><em>{c.leftTitleEm}</em>
              </h2>
              <p className="font-body text-sm text-secondary/70 leading-relaxed max-w-sm">
                {c.leftSubtitle}
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <p className="section-eyebrow mb-2">{c.labels.email}</p>
                <a href={`mailto:${siteConfig.email}`} className="font-body text-sm text-primary hover:text-gold transition-colors duration-200">
                  {siteConfig.email}
                </a>
              </div>
              <div className="gold-divider" />
              <div>
                <p className="section-eyebrow mb-2">{c.labels.whatsapp}</p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-primary hover:text-gold transition-colors duration-200"
                >
                  {c.labels.whatsappCta}
                </a>
              </div>
              <div className="gold-divider" />
              <div>
                <p className="section-eyebrow mb-2">{c.labels.location}</p>
                <p className="font-body text-sm text-secondary/70">{c.labels.locationValue}</p>
              </div>
              <div className="gold-divider" />
              <div>
                <p className="section-eyebrow mb-2">{c.labels.responseTime}</p>
                <p className="font-body text-sm text-secondary/70">{c.labels.responseTimeValue}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">

                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-8">
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
                <div className="grid md:grid-cols-2 gap-8">
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
                <div className="grid md:grid-cols-2 gap-8">
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
                <div className="flex gap-0 border border-primary/20 focus-within:border-gold/60 transition-colors duration-300">
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
                  rows={5}
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
                        <path d="M1 7h12M7 1l6 6-6 6"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className="font-body text-xs text-taupe text-center">
                  {c.privacy}
                </p>
              </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
