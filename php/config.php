<?php
// ── SMTP credentials — admin@ is the sender (stable, password won't change)
define('SMTP_HOST',   'mail.proposalmarrakech.com');
define('SMTP_USER',   'admin@proposalmarrakech.com');
define('SMTP_PASS',   'Marrakech@@2026');
define('SMTP_PORT',   465);

// ── Email routing — contact@ receives all form submissions
define('ADMIN_EMAIL', 'contact@proposalmarrakech.com');
define('FROM_NAME',   'Marrakech Proposal');

// define('SITE_URL',    'http://localhost:8081/proposal'); // change to https://proposalmarrakech.com on production
define('SITE_URL',    'https://proposalmarrakech.com');


define('LOGO_URL', 'https://dropvader.s3.amazonaws.com/uploads/e2a32648-7220-472c-87cb-1accfbc6370d_202605311214/Marrakech_proposal_logo_Transparent.png?AWSAccessKeyId=AKIAYLRQWXN2PGG26BPX&Signature=tOGztXd4FnTWE0bqYUOewmBQQ5M%3D&Expires=1780316051');
