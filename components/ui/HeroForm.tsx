'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const serviceOptions = [
  'Marriage Proposal',
  'Intimate Elopement',
  'Destination Wedding',
  'Multi-Day Celebration',
  'Other',
]

interface HeroFormProps {
  defaultService?: string
}

export default function HeroForm({ defaultService = '' }: HeroFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: defaultService,
    date: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-primary/90 backdrop-blur-md border border-gold/20 p-7 lg:p-9"
    >
      {submitted ? (
        <div className="text-center py-8">
          <p className="text-gold text-3xl mb-4">✦</p>
          <h3 className="font-heading text-ivory text-2xl mb-3">Thank You</h3>
          <p className="font-body text-xs text-beige/60 leading-relaxed max-w-xs mx-auto">
            We&apos;ll be in touch within 24 hours with a personalised response.
          </p>
        </div>
      ) : (
        <>
          <p className="section-eyebrow mb-1">Reserve Your Date</p>
          <h3 className="font-heading text-ivory text-xl lg:text-2xl mb-6 leading-tight">
            Start Planning <em>Your Story</em>
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
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

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="luxury-input-hero appearance-none cursor-pointer w-full"
            >
              <option value="" disabled>Type of Celebration</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-primary text-ivory">{opt}</option>
              ))}
            </select>

            <input
              name="date"
              value={form.date}
              onChange={handleChange}
              placeholder="Estimated Date (e.g. June 2025)"
              className="luxury-input-hero"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your vision…"
              rows={3}
              className="luxury-input-hero resize-none"
            />

            <button type="submit" className="btn-gold w-full justify-center mt-2">
              Send Your Vision
              <svg
                width="14" height="14" viewBox="0 0 14 14"
                fill="none" stroke="currentColor" strokeWidth="1.5"
              >
                <path d="M1 7h12M7 1l6 6-6 6" />
              </svg>
            </button>

            <p className="font-body text-[0.625rem] text-beige/40 text-center tracking-wide">
              We respond within 24 hours · Your privacy is respected
            </p>
          </form>
        </>
      )}
    </motion.div>
  )
}
