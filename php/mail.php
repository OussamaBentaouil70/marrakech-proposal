<?php
// ── CORS — allow calls from Next.js dev server ──────────────────────────────
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/config.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// ── Parse input ──────────────────────────────────────────────────────────────
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

$name     = trim($data['name']     ?? '');
$email    = trim($data['email']    ?? '');
$phone    = trim($data['phone']    ?? '');
$service  = trim($data['service']  ?? '');
$date     = trim($data['date']     ?? '');
$guests   = trim($data['guests']   ?? '');
$budget   = trim($data['budget']   ?? '');
$currency = trim($data['currency'] ?? 'USD');
$message  = trim($data['message']  ?? '');
$formType = trim($data['formType'] ?? 'contact');

if (!$name || !$email || !$service || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit();
}

// ── Mailer factory ───────────────────────────────────────────────────────────
// Uses PHP's built-in mail() — no SMTP connection needed on shared hosting
function createMailer(): PHPMailer {
    $mail = new PHPMailer(true);
    $mail->isMail();                        // use server's sendmail, not SMTP
    $mail->CharSet = 'UTF-8';
    $mail->setFrom(SMTP_USER, FROM_NAME);
    $mail->Sender  = SMTP_USER;             // envelope sender for bounce handling
    return $mail;
}

// ── Color palette (matches website) ─────────────────────────────────────────
$PRIMARY   = '#2F241D';
$GOLD      = '#C6A46A';
$IVORY     = '#F5F0E8';
$BEIGE     = '#E8DDD0';
$SECONDARY = '#5C4A3A';
$DARK_BG   = '#1a110c';
$LOGO      = LOGO_URL;

// ── Helpers ──────────────────────────────────────────────────────────────────
function tableRow(string $label, string $value, string $GOLD, string $IVORY): string {
    if (!$value) return '';
    $value = nl2br(htmlspecialchars($value));
    return "
    <tr>
      <td style=\"padding:10px 0;border-bottom:1px solid rgba(198,164,106,0.15);width:35%;vertical-align:top;\">
        <span style=\"font-family:Arial,sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:{$GOLD};font-weight:600;\">{$label}</span>
      </td>
      <td style=\"padding:10px 0 10px 20px;border-bottom:1px solid rgba(198,164,106,0.15);vertical-align:top;\">
        <span style=\"font-family:Georgia,serif;font-size:14px;color:{$IVORY};line-height:1.6;\">{$value}</span>
      </td>
    </tr>";
}

$now      = date('l, d F Y — H:i T');
$label    = $formType === 'hero' ? 'Reservation Request' : 'Contact Form';
$budgetFmt = $budget ? "{$budget} {$currency}" : '';

// ════════════════════════════════════════════════════════════════════════════
// ADMIN EMAIL TEMPLATE
// ════════════════════════════════════════════════════════════════════════════
$adminHtml = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>New {$label} – Marrakech Proposal</title></head>
<body style="margin:0;padding:0;background-color:{$DARK_BG};font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:{$DARK_BG};padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background-color:{$PRIMARY};padding:40px 40px 30px;text-align:center;border-top:3px solid {$GOLD};">
            <img src="{$LOGO}" alt="Marrakech Proposal" width="160"
                 style="height:auto;max-width:160px;display:block;margin:0 auto 24px;" />
            <div style="width:40px;height:1px;background:{$GOLD};margin:0 auto 20px;"></div>
            <p style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:{$GOLD};margin:0 0 8px;">New Submission</p>
            <h1 style="font-family:Georgia,serif;font-size:26px;color:{$IVORY};margin:0;font-weight:400;font-style:italic;">{$label}</h1>
          </td>
        </tr>

        <!-- Form data -->
        <tr>
          <td style="background-color:{$PRIMARY};padding:0 40px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
HTML;

$adminHtml .= tableRow('Full Name',       $name,      $GOLD, $IVORY);
$adminHtml .= tableRow('Email Address',   $email,     $GOLD, $IVORY);
$adminHtml .= tableRow('Phone Number',    $phone,     $GOLD, $IVORY);
$adminHtml .= tableRow('Service Type',    $service,   $GOLD, $IVORY);
$adminHtml .= tableRow('Preferred Date',  $date,      $GOLD, $IVORY);
$adminHtml .= tableRow('Number of Guests',$guests,    $GOLD, $IVORY);
$adminHtml .= tableRow('Estimated Budget',$budgetFmt, $GOLD, $IVORY);
$adminHtml .= tableRow('Message',         $message,   $GOLD, $IVORY);

$adminHtml .= <<<HTML
            </table>

            <!-- Timestamp -->
            <div style="margin-top:30px;padding:16px 20px;background:rgba(198,164,106,0.08);border-left:2px solid {$GOLD};">
              <p style="font-family:Arial,sans-serif;font-size:11px;color:rgba(245,240,232,0.5);margin:0;letter-spacing:1px;">
                Received: {$now}
              </p>
            </div>

            <!-- Reply CTA -->
            <div style="margin-top:30px;text-align:center;">
              <a href="mailto:{$email}"
                 style="display:inline-block;background:{$GOLD};color:{$PRIMARY};font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:14px 32px;">
                Reply to {$name} →
              </a>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color:{$DARK_BG};padding:24px 40px;text-align:center;border-top:1px solid rgba(198,164,106,0.2);">
            <p style="font-family:Arial,sans-serif;font-size:10px;color:rgba(198,164,106,0.4);margin:0;letter-spacing:1px;">
              © HTML . date('Y') . " Marrakech Proposal · Luxury Wedding & Event Planning · Marrakech, Morocco
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
HTML;

// ════════════════════════════════════════════════════════════════════════════
// CLIENT THANK-YOU EMAIL TEMPLATE
// ════════════════════════════════════════════════════════════════════════════
$safeName    = htmlspecialchars($name);
$safeService = htmlspecialchars($service);
$year        = date('Y');

$clientHtml = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Thank You – Marrakech Proposal</title></head>
<body style="margin:0;padding:0;background-color:{$BEIGE};font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:{$BEIGE};padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Dark header with logo -->
        <tr>
          <td style="background-color:{$PRIMARY};padding:48px 40px 40px;text-align:center;border-top:3px solid {$GOLD};">
            <img src="{$LOGO}" alt="Marrakech Proposal" width="150"
                 style="height:auto;max-width:150px;display:block;margin:0 auto 28px;" />
            <div style="width:40px;height:1px;background:{$GOLD};margin:0 auto 20px;"></div>
            <p style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:{$GOLD};margin:0 0 10px;">Marrakech, Morocco</p>
            <h1 style="font-family:Georgia,serif;font-size:32px;color:{$IVORY};margin:0;font-weight:400;">
              Thank You, <em>{$safeName}</em>
            </h1>
          </td>
        </tr>

        <!-- Gold gradient strip -->
        <tr><td style="height:3px;background:linear-gradient(to right,{$PRIMARY},{$GOLD},{$PRIMARY});"></td></tr>

        <!-- Main content -->
        <tr>
          <td style="background-color:{$IVORY};padding:48px 48px 40px;">

            <p style="font-family:Georgia,serif;font-size:28px;color:{$GOLD};text-align:center;margin:0 0 24px;line-height:1;">✦</p>

            <p style="font-family:Georgia,serif;font-size:18px;color:{$PRIMARY};text-align:center;margin:0 0 16px;line-height:1.5;font-style:italic;">
              Your vision has been received.
            </p>

            <p style="font-family:Arial,sans-serif;font-size:14px;color:{$SECONDARY};text-align:center;line-height:1.8;margin:0 0 32px;">
              We are deeply honoured by your trust in Marrakech Proposal.<br/>
              Our team has received your request for a
              <strong style="color:{$PRIMARY};">{$safeService}</strong><br/>
              and will reach out personally within
              <strong style="color:{$PRIMARY};">24 hours</strong>.
            </p>

            <!-- Divider -->
            <div style="width:60px;height:1px;background:{$GOLD};margin:0 auto 32px;"></div>

            <!-- What to expect -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:36px;">
              <tr>
                <td style="padding:20px 24px;background-color:rgba(47,36,29,0.05);border-left:2px solid {$GOLD};">
                  <p style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:{$GOLD};margin:0 0 10px;font-weight:600;">What Happens Next</p>
                  <p style="font-family:Arial,sans-serif;font-size:13px;color:{$SECONDARY};line-height:1.7;margin:0;">
                    Our team will review your request and contact you with a personalised proposal,
                    tailored venue recommendations, and an initial consultation offer —
                    all crafted around your unique vision for the perfect Marrakech celebration.
                  </p>
                </td>
              </tr>
            </table>

            <!-- Contact block -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:36px;">
              <tr>
                <td align="center" style="padding:28px;background-color:{$PRIMARY};">
                  <p style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:{$GOLD};margin:0 0 14px;">Can't Wait? Reach Us Directly</p>
                  <p style="margin:0;">
                    <a href="https://wa.me/212715083758"
                       style="font-family:Georgia,serif;font-size:14px;color:{$IVORY};text-decoration:none;margin-right:24px;">
                      WhatsApp
                    </a>
                    <span style="color:{$GOLD};">·</span>
                    <a href="mailto:contact@proposalmarrakech.com"
                       style="font-family:Georgia,serif;font-size:14px;color:{$IVORY};text-decoration:none;margin-left:24px;">
                      Email Us
                    </a>
                  </p>
                </td>
              </tr>
            </table>

            <!-- CTA -->
            <div style="text-align:center;margin-bottom:8px;">
              <a href="https://www.proposalmarrakech.com"
                 style="display:inline-block;background:{$GOLD};color:{$PRIMARY};font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:16px 40px;">
                Explore Our World →
              </a>
            </div>

          </td>
        </tr>

        <!-- Signature -->
        <tr>
          <td style="background-color:{$BEIGE};padding:28px 48px;border-top:1px solid rgba(198,164,106,0.3);">
            <p style="font-family:Georgia,serif;font-size:14px;color:{$SECONDARY};margin:0 0 4px;font-style:italic;">With warmth &amp; excitement,</p>
            <p style="font-family:Georgia,serif;font-size:16px;color:{$PRIMARY};margin:0 0 2px;font-weight:600;">The Marrakech Proposal Team</p>
            <p style="font-family:Arial,sans-serif;font-size:11px;color:rgba(92,74,58,0.6);margin:0;letter-spacing:1px;">Luxury Wedding &amp; Event Planning · Marrakech, Morocco</p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color:{$PRIMARY};padding:20px 40px;text-align:center;">
            <p style="font-family:Arial,sans-serif;font-size:10px;color:rgba(198,164,106,0.4);margin:0;letter-spacing:1px;">
              © {$year} Marrakech Proposal · All rights reserved
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
HTML;

// ════════════════════════════════════════════════════════════════════════════
// SEND EMAILS
// ════════════════════════════════════════════════════════════════════════════
try {
    // ── Admin notification ───────────────────────────────────────────────
    $adminMail = createMailer();
    $adminMail->addAddress(ADMIN_EMAIL, FROM_NAME);
    $adminMail->Subject = "✦ New {$label} – {$name}";
    $adminMail->isHTML(true);
    $adminMail->Body    = $adminHtml;
    $adminMail->AltBody = "New {$label} from {$name} ({$email}). Service: {$service}. Message: {$message}";
    $adminMail->send();

    // ── Client thank-you ─────────────────────────────────────────────────
    $clientMail = createMailer();
    $clientMail->addAddress($email, $name);
    $clientMail->Subject = '✦ Thank You for Reaching Out – Marrakech Proposal';
    $clientMail->isHTML(true);
    $clientMail->Body    = $clientHtml;
    $clientMail->AltBody = "Dear {$name}, thank you for reaching out to Marrakech Proposal. We will contact you within 24 hours regarding your {$service} request.";
    $clientMail->send();

    echo json_encode(['success' => true]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email', 'detail' => $e->getMessage()]);
}
