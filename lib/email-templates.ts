const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const LOGO_URL = `${SITE_URL}/images/logo.png`
const PRIMARY = '#2F241D'
const GOLD = '#C6A46A'
const IVORY = '#F5F0E8'
const BEIGE = '#E8DDD0'
const SECONDARY = '#5C4A3A'

interface AdminEmailData {
  name: string
  email: string
  phone?: string
  service: string
  date?: string
  guests?: string
  budget?: string
  currency?: string
  message: string
  formType: 'hero' | 'contact'
}

interface ClientEmailData {
  name: string
  service: string
}

export function adminEmailTemplate(data: AdminEmailData): string {
  const { name, email, phone, service, date, guests, budget, currency, message, formType } = data
  const label = formType === 'hero' ? 'Reservation Request' : 'Contact Form'
  const now = new Date().toLocaleString('en-GB', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit', timeZoneName: 'short',
  })

  const row = (label: string, value: string) => value ? `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid rgba(198,164,106,0.15);width:35%;">
        <span style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:${GOLD};font-weight:600;">${label}</span>
      </td>
      <td style="padding:10px 0 10px 20px;border-bottom:1px solid rgba(198,164,106,0.15);">
        <span style="font-family:Georgia,serif;font-size:14px;color:${IVORY};line-height:1.6;">${value}</span>
      </td>
    </tr>` : ''

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>New ${label} – Marrakech Proposal</title></head>
<body style="margin:0;padding:0;background-color:#1a110c;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#1a110c;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background-color:${PRIMARY};padding:40px 40px 30px;text-align:center;border-top:3px solid ${GOLD};">
            <img src="${LOGO_URL}" alt="Marrakech Proposal" width="160" style="height:auto;max-width:160px;display:block;margin:0 auto 24px;" />
            <div style="width:40px;height:1px;background:${GOLD};margin:0 auto 20px;"></div>
            <p style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:${GOLD};margin:0 0 8px;">New Submission</p>
            <h1 style="font-family:Georgia,serif;font-size:26px;color:${IVORY};margin:0;font-weight:400;font-style:italic;">${label}</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background-color:${PRIMARY};padding:0 40px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${row('Full Name', name)}
              ${row('Email Address', email)}
              ${phone ? row('Phone Number', phone) : ''}
              ${row('Service Type', service)}
              ${date ? row('Preferred Date', date) : ''}
              ${guests ? row('Number of Guests', guests) : ''}
              ${budget ? row('Estimated Budget', `${budget} ${currency || 'USD'}`) : ''}
              ${row('Message', message.replace(/\n/g, '<br>'))}
            </table>

            <!-- Timestamp -->
            <div style="margin-top:30px;padding:16px 20px;background:rgba(198,164,106,0.08);border-left:2px solid ${GOLD};">
              <p style="font-family:Arial,sans-serif;font-size:11px;color:rgba(245,240,232,0.5);margin:0;letter-spacing:1px;">
                Received: ${now}
              </p>
            </div>

            <!-- CTA -->
            <div style="margin-top:30px;text-align:center;">
              <a href="mailto:${email}" style="display:inline-block;background:${GOLD};color:${PRIMARY};font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:14px 32px;">
                Reply to ${name} →
              </a>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color:#1a110c;padding:24px 40px;text-align:center;border-top:1px solid rgba(198,164,106,0.2);">
            <p style="font-family:Arial,sans-serif;font-size:10px;color:rgba(198,164,106,0.4);margin:0;letter-spacing:1px;">
              © ${new Date().getFullYear()} Marrakech Proposal · Luxury Wedding & Event Planning · Marrakech, Morocco
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export function clientEmailTemplate(data: ClientEmailData): string {
  const { name, service } = data

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Thank You – Marrakech Proposal</title></head>
<body style="margin:0;padding:0;background-color:${BEIGE};font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:${BEIGE};padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Dark Header with Logo -->
        <tr>
          <td style="background-color:${PRIMARY};padding:48px 40px 40px;text-align:center;border-top:3px solid ${GOLD};">
            <img src="${LOGO_URL}" alt="Marrakech Proposal" width="150" style="height:auto;max-width:150px;display:block;margin:0 auto 28px;" />
            <div style="width:40px;height:1px;background:${GOLD};margin:0 auto 20px;"></div>
            <p style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:${GOLD};margin:0 0 10px;">Marrakech, Morocco</p>
            <h1 style="font-family:Georgia,serif;font-size:32px;color:${IVORY};margin:0;font-weight:400;">
              Thank You, <em>${name}</em>
            </h1>
          </td>
        </tr>

        <!-- Gold divider strip -->
        <tr><td style="height:3px;background:linear-gradient(to right,${PRIMARY},${GOLD},${PRIMARY});"></td></tr>

        <!-- Main content -->
        <tr>
          <td style="background-color:${IVORY};padding:48px 48px 40px;">

            <!-- Ornament -->
            <p style="font-family:Georgia,serif;font-size:28px;color:${GOLD};text-align:center;margin:0 0 24px;line-height:1;">✦</p>

            <p style="font-family:Georgia,serif;font-size:18px;color:${PRIMARY};text-align:center;margin:0 0 16px;line-height:1.5;font-style:italic;">
              Your vision has been received.
            </p>

            <p style="font-family:Arial,sans-serif;font-size:14px;color:${SECONDARY};text-align:center;line-height:1.8;margin:0 0 32px;">
              We are deeply honoured by your trust in Marrakech Proposal.<br/>
              Our team has received your request for a <strong style="color:${PRIMARY};">${service}</strong><br/>
              and will reach out personally within <strong style="color:${PRIMARY};">24 hours</strong>.
            </p>

            <!-- Divider -->
            <div style="width:60px;height:1px;background:${GOLD};margin:0 auto 32px;"></div>

            <!-- What to expect -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:36px;">
              <tr>
                <td style="padding:16px 20px;background-color:rgba(47,36,29,0.05);border-left:2px solid ${GOLD};">
                  <p style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:${GOLD};margin:0 0 8px;font-weight:600;">What Happens Next</p>
                  <p style="font-family:Arial,sans-serif;font-size:13px;color:${SECONDARY};line-height:1.7;margin:0;">
                    Our team will review your request and contact you with a personalised proposal, tailored venue recommendations, and an initial consultation offer — all crafted around your unique vision.
                  </p>
                </td>
              </tr>
            </table>

            <!-- Contact block -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:36px;">
              <tr>
                <td align="center" style="padding:24px;background-color:${PRIMARY};">
                  <p style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:${GOLD};margin:0 0 12px;">Can't Wait? Reach Us Directly</p>
                  <p style="margin:0;">
                    <a href="https://wa.me/212715083758" style="font-family:Georgia,serif;font-size:14px;color:${IVORY};text-decoration:none;margin-right:20px;">WhatsApp</a>
                    <span style="color:${GOLD};">·</span>
                    <a href="mailto:contact@proposalmarrakech.com" style="font-family:Georgia,serif;font-size:14px;color:${IVORY};text-decoration:none;margin-left:20px;">Email Us</a>
                  </p>
                </td>
              </tr>
            </table>

            <!-- CTA button -->
            <div style="text-align:center;margin-bottom:16px;">
              <a href="${SITE_URL}" style="display:inline-block;background:${GOLD};color:${PRIMARY};font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:16px 40px;">
                Explore Our World →
              </a>
            </div>

          </td>
        </tr>

        <!-- Signature -->
        <tr>
          <td style="background-color:${BEIGE};padding:28px 48px;border-top:1px solid rgba(198,164,106,0.3);">
            <p style="font-family:Georgia,serif;font-size:14px;color:${SECONDARY};margin:0 0 4px;font-style:italic;">With warmth & excitement,</p>
            <p style="font-family:Georgia,serif;font-size:16px;color:${PRIMARY};margin:0 0 2px;font-weight:600;">The Marrakech Proposal Team</p>
            <p style="font-family:Arial,sans-serif;font-size:11px;color:rgba(92,74,58,0.6);margin:0;letter-spacing:1px;">Luxury Wedding & Event Planning · Marrakech, Morocco</p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color:${PRIMARY};padding:20px 40px;text-align:center;">
            <p style="font-family:Arial,sans-serif;font-size:10px;color:rgba(198,164,106,0.4);margin:0;letter-spacing:1px;">
              © ${new Date().getFullYear()} Marrakech Proposal · All rights reserved
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}
