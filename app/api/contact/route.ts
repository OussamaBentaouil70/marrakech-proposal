import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { adminEmailTemplate, clientEmailTemplate } from '@/lib/email-templates'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, service, date, guests, budget, currency, message, formType } = body

    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Marrakech Proposal" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: `✦ New ${formType === 'hero' ? 'Reservation' : 'Contact'} – ${name}`,
      html: adminEmailTemplate({ name, email, phone, service, date, guests, budget, currency, message, formType }),
    })

    await transporter.sendMail({
      from: `"Marrakech Proposal" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: '✦ Thank You for Reaching Out – Marrakech Proposal',
      html: clientEmailTemplate({ name, service }),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
