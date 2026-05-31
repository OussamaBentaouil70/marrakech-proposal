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

    // ── 1. Primary: PHP/PHPMailer via XAMPP / Hostinger ────────────────────
    const phpEndpoint = process.env.PHP_MAILER_URL
    if (phpEndpoint) {
      try {
        const phpRes = await fetch(phpEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, phone, service, date, guests, budget, currency, message, formType }),
          signal: AbortSignal.timeout(8000),
        })
        const phpData = await phpRes.json()
        if (phpRes.ok) {
          console.log('✓ Email sent via PHP/PHPMailer')
          return NextResponse.json({ success: true })
        }
        console.warn('PHP mailer returned error:', phpData)
      } catch (phpErr) {
        console.warn('PHP endpoint unreachable:', (phpErr as Error).message)
      }
    }

    // ── 2. Fallback A: Hostinger SMTP via Nodemailer ────────────────────────
    // (works in production on Hostinger servers, may fail from localhost)
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT ?? '587'),
          secure: process.env.SMTP_PORT === '465',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
          },
        })
        const from = `"Marrakech Proposal" <${process.env.SMTP_USER}>`
        await transporter.sendMail({
          from,
          to: process.env.ADMIN_EMAIL,
          subject: `✦ New ${formType === 'hero' ? 'Reservation' : 'Contact'} – ${name}`,
          html: adminEmailTemplate({ name, email, phone, service, date, guests, budget, currency, message, formType }),
        })
        await transporter.sendMail({
          from,
          to: email,
          subject: '✦ Thank You for Reaching Out – Marrakech Proposal',
          html: clientEmailTemplate({ name, service }),
        })
        console.log('✓ Email sent via Hostinger SMTP')
        return NextResponse.json({ success: true })
      } catch (smtpErr) {
        console.warn('Hostinger SMTP failed (likely blocked from localhost):', (smtpErr as Error).message)
      }
    }

    // ── 3. Fallback B: Gmail SMTP — always works for local dev ─────────────
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      })
      const from = `"Marrakech Proposal" <${process.env.GMAIL_USER}>`
      await transporter.sendMail({
        from,
        to: process.env.ADMIN_EMAIL ?? process.env.GMAIL_USER,
        subject: `✦ New ${formType === 'hero' ? 'Reservation' : 'Contact'} – ${name}`,
        html: adminEmailTemplate({ name, email, phone, service, date, guests, budget, currency, message, formType }),
      })
      await transporter.sendMail({
        from,
        to: email,
        subject: '✦ Thank You for Reaching Out – Marrakech Proposal',
        html: clientEmailTemplate({ name, service }),
      })
      console.log('✓ Email sent via Gmail (local dev fallback)')
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: 'No mail transport configured' }, { status: 500 })

  } catch (error) {
    console.error('Contact route error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
