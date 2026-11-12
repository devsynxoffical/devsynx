<?php
/**
 * Job application handler for the static DEVSYNX site (runs on the cPanel host).
 * - Validates the form and an optional CV upload (PDF/DOC/DOCX, max 5 MB).
 * - Stores the CV under a random name OUTSIDE the public web folder
 *   (../devsynx-cvs/), so CVs are never downloadable from the website.
 * - Emails the application (with the CV attached) to info@devsynx.com using the
 *   same SMTP settings as the contact form (contact-config.php, written at
 *   deploy time from GitHub secrets), falling back to PHP mail().
 * - Appends a backup row to ../devsynx-applications.csv.
 * Returns JSON: {"ok": true} or {"ok": false, "error": "..."}.
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Robots-Tag: noindex');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method']);
    exit;
}

$TO = 'info@devsynx.com';
$FROM = 'info@devsynx.com';
$MAX_BYTES = 5 * 1024 * 1024;

function field($key, $max = 500) {
    $v = isset($_POST[$key]) ? trim((string) $_POST[$key]) : '';
    $v = str_replace(["\r", "\0"], '', $v);
    return mb_substr($v, 0, $max);
}

// Honeypot and minimum fill time (bots submit instantly).
if (field('website') !== '') { echo json_encode(['ok' => true]); exit; }
$started = (int) field('started', 20);
if ($started > 0 && (time() * 1000 - $started) < 4000) { echo json_encode(['ok' => true]); exit; }

$name       = field('name', 120);
$email      = field('email', 160);
$phone      = field('phone', 40);
$city       = field('city', 80);
$role       = field('role', 80);
$experience = field('experience', 40);
$portfolio  = field('portfolio', 300);
$message    = field('message', 4000);

if ($name === '' || $email === '' || $phone === '' || $role === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'missing']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'email']);
    exit;
}
if ($portfolio !== '' && !preg_match('#^https?://#i', $portfolio)) {
    $portfolio = 'https://' . $portfolio;
}

// ---- Optional CV upload -------------------------------------------------
$cvPath = '';
$cvName = '';
$cvMime = '';
if (isset($_FILES['cv']) && is_array($_FILES['cv']) && ($_FILES['cv']['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_NO_FILE) {
    $f = $_FILES['cv'];
    if ($f['error'] !== UPLOAD_ERR_OK || $f['size'] <= 0 || $f['size'] > $MAX_BYTES || !is_uploaded_file($f['tmp_name'])) {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'cv_size']);
        exit;
    }
    $ext = strtolower(pathinfo((string) $f['name'], PATHINFO_EXTENSION));
    $allowed = [
        'pdf'  => ['application/pdf'],
        'doc'  => ['application/msword', 'application/octet-stream', 'application/vnd.ms-office'],
        'docx' => ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/zip', 'application/octet-stream'],
    ];
    $mime = '';
    if (function_exists('finfo_open')) {
        $fi = finfo_open(FILEINFO_MIME_TYPE);
        $mime = (string) finfo_file($fi, $f['tmp_name']);
        finfo_close($fi);
    }
    if (!isset($allowed[$ext]) || ($mime !== '' && !in_array($mime, $allowed[$ext], true))) {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'cv_type']);
        exit;
    }
    $dir = dirname(__DIR__) . '/devsynx-cvs';
    if (!is_dir($dir)) { @mkdir($dir, 0700, true); }
    $safe = preg_replace('/[^a-z0-9]+/', '-', strtolower($name));
    $cvName = gmdate('Ymd-His') . '-' . trim($safe, '-') . '-' . bin2hex(random_bytes(4)) . '.' . $ext;
    $cvPath = $dir . '/' . $cvName;
    if (!@move_uploaded_file($f['tmp_name'], $cvPath)) {
        $cvPath = '';
        $cvName = '';
    } else {
        @chmod($cvPath, 0600);
        $cvMime = $mime !== '' ? $mime : 'application/octet-stream';
    }
}

$when = gmdate('Y-m-d H:i:s') . ' UTC';
$ip = $_SERVER['REMOTE_ADDR'] ?? '';

// ---- Backup row ---------------------------------------------------------
$csv = dirname(__DIR__) . '/devsynx-applications.csv';
$saved = false;
if ($fh = @fopen($csv, 'a')) {
    if (@flock($fh, LOCK_EX)) {
        $saved = @fputcsv($fh, [$when, $name, $email, $phone, $city, $role, $experience, $portfolio, $cvName, $ip, preg_replace('/\s+/', ' ', $message)]) !== false;
        @flock($fh, LOCK_UN);
    }
    @fclose($fh);
}

// ---- Email --------------------------------------------------------------
$subject = 'Job application: ' . $role . ' - ' . $name;
$body = "New job application from devsynx.com/careers/\n\n"
    . "Name:       $name\n"
    . "Email:      $email\n"
    . "Phone:      $phone\n"
    . "City:       $city\n"
    . "Role:       $role\n"
    . "Experience: $experience\n"
    . "Portfolio:  $portfolio\n"
    . "CV file:    " . ($cvName !== '' ? "$cvName (attached; also saved in devsynx-cvs/ on the hosting account)" : 'not uploaded') . "\n"
    . "Time:       $when\n\n"
    . "About the applicant:\n$message\n";

$boundary = 'dsx' . bin2hex(random_bytes(8));
function build_mime($body, $boundary, $cvPath, $cvName, $cvMime) {
    if ($cvPath === '' || !is_file($cvPath)) {
        return ["Content-Type: text/plain; charset=UTF-8", $body];
    }
    $data = chunk_split(base64_encode((string) file_get_contents($cvPath)));
    $mime = "--$boundary\r\nContent-Type: text/plain; charset=UTF-8\r\n\r\n" . str_replace("\n", "\r\n", $body) . "\r\n"
        . "--$boundary\r\nContent-Type: $cvMime; name=\"$cvName\"\r\nContent-Transfer-Encoding: base64\r\n"
        . "Content-Disposition: attachment; filename=\"$cvName\"\r\n\r\n" . $data . "\r\n--$boundary--";
    return ["Content-Type: multipart/mixed; boundary=\"$boundary\"", $mime];
}
[$ctype, $content] = build_mime($body, $boundary, $cvPath, $cvName, $cvMime);
$encSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

function smtp_send_raw($cfg, $to, $from, $replyTo, $subject, $ctype, $content) {
    $host = $cfg['host'] ?? '';
    $port = (int) ($cfg['port'] ?? 465);
    if ($host === '' || empty($cfg['user']) || empty($cfg['pass'])) return false;
    $ctx = stream_context_create(['ssl' => ['verify_peer' => false, 'verify_peer_name' => false]]);
    $fp = @stream_socket_client("ssl://$host:$port", $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $ctx);
    if (!$fp) return false;
    stream_set_timeout($fp, 30);
    $read = function () use ($fp) {
        $data = '';
        while (($line = fgets($fp, 515)) !== false) {
            $data .= $line;
            if (strlen($line) < 4 || $line[3] !== '-') break;
        }
        return $data;
    };
    $cmd = function ($c, $expect) use ($fp, $read) {
        fwrite($fp, $c . "\r\n");
        return strpos($read(), (string) $expect) === 0;
    };
    $ok = strpos($read(), '220') === 0
        && $cmd('EHLO devsynx.com', 250)
        && $cmd('AUTH LOGIN', 334)
        && $cmd(base64_encode($cfg['user']), 334)
        && $cmd(base64_encode($cfg['pass']), 235)
        && $cmd("MAIL FROM:<$from>", 250)
        && $cmd("RCPT TO:<$to>", 250)
        && $cmd('DATA', 354);
    if ($ok) {
        $msg = "From: DEVSYNX Careers <$from>\r\nTo: <$to>\r\n"
            . ($replyTo !== '' ? "Reply-To: <$replyTo>\r\n" : '')
            . "Subject: $subject\r\nDate: " . date('r') . "\r\nMIME-Version: 1.0\r\n$ctype\r\n\r\n"
            . $content;
        $msg = preg_replace("/(?<!\r)\n/", "\r\n", $msg);
        $msg = str_replace("\r\n.", "\r\n..", $msg);
        $ok = $cmd($msg . "\r\n.", 250);
    }
    @fwrite($fp, "QUIT\r\n");
    @fclose($fp);
    return $ok;
}

$replyTo = preg_replace('/[^\w.@+\-]/', '', $email);
$sent = false;
$cfgFile = __DIR__ . '/contact-config.php';
if (is_file($cfgFile)) {
    $cfg = include $cfgFile;
    if (is_array($cfg)) {
        $sent = smtp_send_raw($cfg, $TO, $cfg['user'] ?? $FROM, $replyTo, $encSubject, $ctype, $content);
    }
}
if (!$sent) {
    $headers = "From: DEVSYNX Careers <$FROM>\r\nReply-To: $replyTo\r\nMIME-Version: 1.0\r\n$ctype\r\n";
    $sent = @mail($TO, $encSubject, $content, $headers);
}

if ($sent || $saved) {
    echo json_encode(['ok' => true, 'mailed' => (bool) $sent, 'saved' => $saved]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'send']);
}
