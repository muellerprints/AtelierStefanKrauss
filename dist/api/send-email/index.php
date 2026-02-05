<?php
// Simple form handler for shared hosts (IONOS).
// Upload this file to: /api/send-email/index.php on your webspace.
// Edit $TO_EMAIL below before uploading.

header('Content-Type: application/json; charset=utf-8');

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    // fallback to form-encoded POST
    $data = $_POST;
}

// If files were uploaded via multipart/form-data, convert them into
// attachment entries similar to the JSON/base64 format the script expects.
if (!empty($_FILES)) {
    $data['attachments'] = isset($data['attachments']) && is_array($data['attachments']) ? $data['attachments'] : [];

    // Security: allowed MIME types and max upload size (bytes)
    $allowed_types = array('image/png', 'image/jpeg', 'application/pdf');
    $max_bytes = (int)(getenv('MAX_UPLOAD_BYTES') ?: 5 * 1024 * 1024);
    $rejected = [];

    foreach ($_FILES as $field) {
        // Handle both single-file and multiple-file inputs
        if (is_array($field['name'])) {
            $count = count($field['name']);
            for ($i = 0; $i < $count; $i++) {
                if (!isset($field['tmp_name'][$i]) || $field['error'][$i] !== UPLOAD_ERR_OK) continue;
                $tmp = $field['tmp_name'][$i];
                $name = $field['name'][$i] ?? 'attachment';
                $size = isset($field['size'][$i]) ? (int)$field['size'][$i] : 0;
                $type = $field['type'][$i] ?? (function_exists('mime_content_type') ? mime_content_type($tmp) : 'application/octet-stream');

                if ($size > $max_bytes) {
                    $rejected[] = ['filename' => $name, 'reason' => 'too_large', 'size' => $size];
                    continue;
                }
                if (!in_array($type, $allowed_types, true)) {
                    $rejected[] = ['filename' => $name, 'reason' => 'forbidden_type', 'type' => $type];
                    continue;
                }

                $content = base64_encode(file_get_contents($tmp));
                $data['attachments'][] = ['filename' => $name, 'content' => $content, 'contentType' => $type];
            }
        } else {
            if (!isset($field['tmp_name']) || $field['error'] !== UPLOAD_ERR_OK) continue;
            $tmp = $field['tmp_name'];
            $name = $field['name'] ?? 'attachment';
            $size = isset($field['size']) ? (int)$field['size'] : 0;
            $type = $field['type'] ?? (function_exists('mime_content_type') ? mime_content_type($tmp) : 'application/octet-stream');

            if ($size > $max_bytes) {
                $rejected[] = ['filename' => $name, 'reason' => 'too_large', 'size' => $size];
            } elseif (!in_array($type, $allowed_types, true)) {
                $rejected[] = ['filename' => $name, 'reason' => 'forbidden_type', 'type' => $type];
            } else {
                $content = base64_encode(file_get_contents($tmp));
                $data['attachments'][] = ['filename' => $name, 'content' => $content, 'contentType' => $type];
            }
        }
    }

    if (!empty($rejected)) {
        header('Content-Type: application/json; charset=utf-8');
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'attachments_rejected', 'details' => $rejected]);
        exit;
    }
}

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$message = trim((string)($data['message'] ?? ''));

if ($message === '' || $email === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Missing fields']);
    exit;
}

// Configure recipient here
$TO_EMAIL = 'info@goldschmiedeatelier-krauss.de';

// Ensure multibyte functions use UTF-8
if (function_exists('mb_internal_encoding')) mb_internal_encoding('UTF-8');

// If Composer autoload exists (PHPMailer installed), include it
$composerAutoload = __DIR__ . '/../../../../vendor/autoload.php';
if (file_exists($composerAutoload)) {
    require_once $composerAutoload;
}

// Load simple .env from project root if present (KEY=VALUE lines)
$projectRoot = realpath(__DIR__ . '/../../../..');
if ($projectRoot !== false) {
    $envFile = $projectRoot . '/.env';
    if (is_readable($envFile)) {
        $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            $line = trim($line);
            if ($line === '' || $line[0] === '#') continue;
            if (strpos($line, '=') === false) continue;
            list($k, $v) = explode('=', $line, 2);
            $k = trim($k);
            $v = trim($v);
            // remove surrounding quotes
            if ((strlen($v) >= 2) && ($v[0] === '"' && substr($v, -1) === '"' || $v[0] === "'" && substr($v, -1) === "'")) {
                $v = substr($v, 1, -1);
            }
            if ($k !== '') {
                putenv("{$k}={$v}");
                $_ENV[$k] = $v;
            }
        }
    }
}

// Helper to encode MIME headers (names, filenames, subject)
function encode_mime_header($str) {
    if ($str === '') return $str;
    if (function_exists('mb_encode_mimeheader')) {
        return mb_encode_mimeheader($str, 'UTF-8', 'B', "\r\n");
    }
    if (!function_exists('base64_encode')) return $str;
    return '=?UTF-8?B?' . base64_encode($str) . '?=';
}

$subject = 'Website Anfrage — ' . ($name !== '' ? $name : 'Anonyme Anfrage');
$subject_encoded = encode_mime_header($subject);

$fromDomain = $_SERVER['SERVER_NAME'] ?? 'goldschmiedeatelier-krauss.de';
$fromEmail = 'noreply@goldschmiedeatelier-krauss.de';
$fromName = 'Webseite-Anfrage';

$replyTo = filter_var($email, FILTER_VALIDATE_EMAIL) ? $email : null;

// Build a multipart/mixed message so attachments (if any) are supported
$boundary = '=_'.md5(uniqid((string)microtime(true), true));

$headers = [];
$headers[] = 'From: ' . encode_mime_header($fromName) . ' <' . $fromEmail . '>';
if ($replyTo) $headers[] = 'Reply-To: ' . $replyTo;
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: multipart/mixed; boundary="' . $boundary . '"';

$bodyText = $message . "\n\n--\n" . $name . "\n" . $email;
$bodyText = function_exists('mb_convert_encoding') ? mb_convert_encoding($bodyText, 'UTF-8', 'UTF-8') : $bodyText;

// For the text part, use base64 encoding to avoid issues with quoted-printable
// when mail() function is used as fallback
$encodedBodyText = base64_encode($bodyText);

$body = "--{$boundary}\r\n";
$body .= "Content-Type: text/plain; charset=\"UTF-8\"\r\n";
$body .= "Content-Transfer-Encoding: base64\r\n\r\n";
$body .= chunk_split($encodedBodyText, 76, "\r\n") . "\r\n";

// Attachments expected as array of { filename, content (base64), contentType }
if (!empty($data['attachments']) && is_array($data['attachments'])) {
    foreach ($data['attachments'] as $att) {
        $filename = isset($att['filename']) ? (string)$att['filename'] : 'attachment';
        $contentType = isset($att['contentType']) && $att['contentType'] !== '' ? (string)$att['contentType'] : 'application/octet-stream';
        $content = isset($att['content']) ? (string)$att['content'] : '';
        // Clean whitespace/newlines from base64 payload
        $base64 = preg_replace('/\s+/', '', $content);
        if ($base64 === '') continue;

        $body .= "--{$boundary}\r\n";
        $body .= 'Content-Type: ' . $contentType . '; name="' . encode_mime_header($filename) . '"' . "\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n";
        $body .= 'Content-Disposition: attachment; filename="' . encode_mime_header($filename) . '"' . "\r\n\r\n";
        $body .= chunk_split($base64) . "\r\n\r\n";
    }
}

$body .= "--{$boundary}--\r\n";

$headers_str = implode("\r\n", $headers) . "\r\n";

// SMTP configuration
$smtp_host = 'smtp.ionos.de';
$smtp_port = 587;
$smtp_user = 'info@goldschmiedeatelier-krauss.de';
$smtp_pass = 'juzcev-xlzryv-nygxu0';
$smtp_secure = 'tls';
$smtp_from = $fromEmail;
$smtp_from_name = $fromName;

$ok = false;
if ($smtp_host !== '' && class_exists('PHPMailer\\PHPMailer\\PHPMailer')) {
    try {
        $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
        $mail->CharSet = 'UTF-8';
        $mail->setFrom($smtp_from, $smtp_from_name);
        $mail->addAddress($TO_EMAIL);
        if ($replyTo) $mail->addReplyTo($replyTo);
        $mail->Subject = $subject; // PHPMailer encodes headers itself
        $mail->Body = $bodyText;
        $mail->isSMTP();
        $mail->Host = $smtp_host;
        if ($smtp_port !== '') $mail->Port = (int)$smtp_port;
        if ($smtp_secure !== '') $mail->SMTPSecure = $smtp_secure;
        if ($smtp_user !== '') {
            $mail->SMTPAuth = true;
            $mail->Username = $smtp_user;
            $mail->Password = $smtp_pass;
        }
        // If attachments were provided as base64 parts, add them to PHPMailer
        if (!empty($data['attachments']) && is_array($data['attachments'])) {
            foreach ($data['attachments'] as $att) {
                $filename = isset($att['filename']) ? (string)$att['filename'] : 'attachment';
                $contentType = isset($att['contentType']) && $att['contentType'] !== '' ? (string)$att['contentType'] : 'application/octet-stream';
                $content = isset($att['content']) ? (string)$att['content'] : '';
                $base64 = preg_replace('/\s+/', '', $content);
                if ($base64 === '') continue;
                // addStringAttachment expects the raw string, so decode base64 first
                $mail->addStringAttachment(base64_decode($base64), $filename, 'base64', $contentType);
            }
        }

        $mail->send();
        $ok = true;
    } catch (Exception $e) {
        $ok = false;
        $phpmailerError = $e->getMessage();
    }
}

if (!$ok) {
    // Try to send mail using PHP mail(). Use the additional parameter to set envelope sender (-f)
    $ok = @mail($TO_EMAIL, $subject_encoded, $body, $headers_str, "-f {$fromEmail}");
}

if ($ok) {
    echo json_encode(['ok' => true]);
    exit;
}

// Fallback: write to a local file so messages are not lost and save the raw MIME for debugging
try {
    $logDir = __DIR__ . '/../../';
    $logLine = "[" . date('c') . "] To: {$TO_EMAIL} | From: {$email} | Subject: {$subject}\n";
    $logLine .= $bodyText . "\n---\n";
    file_put_contents($logDir . 'server-mail.log', $logLine, FILE_APPEND | LOCK_EX);
    // Save raw MIME for debugging
    $rawFile = $logDir . 'last-mail.raw';
    file_put_contents($rawFile, "Subject: {$subject}\r\n{$headers_str}\r\n{$body}", LOCK_EX);
} catch (Exception $e) {
    // ignore
}

http_response_code(500);
echo json_encode(['ok' => false, 'error' => 'mail_failed']);

?>
