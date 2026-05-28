'use client'
import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { siteConfig } from '@/data/content'

const serviceOptions = [
  'Marriage Proposal',
  'Intimate Elopement',
  'Destination Wedding',
  'Multi-Day Celebration',
  'Other',
]

export default function ContactForm() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    guests: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
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
                Start Your<br /><em>Journey</em>
              </h2>
              <p className="font-body text-sm text-secondary/70 leading-relaxed max-w-sm">
                Fill in the form and our team will get back to you within 24 hours with a personalized response and initial consultation offer.
              </p>
            </div>

            <div className="space-y-8">
              {/* Info blocks */}
              <div>
                <p className="section-eyebrow mb-2">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="font-body text-sm text-primary hover:text-gold transition-colors duration-200">
                  {siteConfig.email}
                </a>
              </div>
              <div className="gold-divider" />
              <div>
                <p className="section-eyebrow mb-2">WhatsApp</p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-primary hover:text-gold transition-colors duration-200"
                >
                  Message us directly
                </a>
              </div>
              <div className="gold-divider" />
              <div>
                <p className="section-eyebrow mb-2">Location</p>
                <p className="font-body text-sm text-secondary/70">Marrakech, Morocco</p>
              </div>
              <div className="gold-divider" />
              <div>
                <p className="section-eyebrow mb-2">Response Time</p>
                <p className="font-body text-sm text-secondary/70">Within 24 hours</p>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <p className="text-gold text-4xl mb-4">✦</p>
                <h3 className="font-heading text-primary text-3xl mb-4">Thank You</h3>
                <p className="font-body text-sm text-secondary/70 max-w-sm leading-relaxed">
                  We've received your message and will be in touch within 24 hours. We're excited to learn more about your vision!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="luxury-input"
                    />
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="luxury-input"
                    />
                  </div>
                </div>

                <div>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="luxury-input appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Type of Celebration</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <input
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      placeholder="Estimated Date"
                      className="luxury-input"
                    />
                  </div>
                  <div>
                    <input
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      placeholder="Number of Guests"
                      className="luxury-input"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell Us About Your Vision"
                    rows={5}
                    className="luxury-input resize-none"
                  />
                </div>

                <button type="submit" className="btn-gold w-full justify-center">
                  Send Your Vision
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 7h12M7 1l6 6-6 6"/>
                  </svg>
                </button>

                <p className="font-body text-xs text-taupe text-center">
                  We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
