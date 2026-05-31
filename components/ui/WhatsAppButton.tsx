'use client'
import { motion } from 'framer-motion'

interface WhatsAppButtonProps {
  phone: string
}

export default function WhatsAppButton({ phone }: WhatsAppButtonProps) {
  return (
    <motion.a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[150] w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40 transition-shadow duration-300"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <i className="fa fa-whatsapp text-white text-[2.4rem] relative z-10" />
    </motion.a>
  )
}
