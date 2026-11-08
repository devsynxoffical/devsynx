<?php
/**
 * Contact form handler for the static DEVSYNX site (runs on the cPanel host).
 * - Emails every enquiry to info@devsynx.com (Reply-To set to the visitor).
 * - Also appends a backup copy to a CSV file outside the public web folder,
 *   so no lead is lost if email delivery fails.
 * - Simple spam protection: hidden honeypot field, minimum fill time, length limits.
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
$FROM = 'info@devsynx.com'; // must be a real mailbox on this hosting account

function field($key, $max = 500) {
    $v = isset($_POST[$key]) ? trim((string) $_POST[$key]) : '';
    $v = str_replace(["\r", "\0"], '', $v);
    return mb_substr($v, 0, $max);
}

// Honeypot: real visitors never fill the hidden "website" field.
if (field('website') !== '') {
    echo json_encode(['ok' => true]);
    exit;
}
// Bots submit instantly; people take a few seconds.
$started = (int) field('started', 20);
if ($started > 0 && (time() * 1000 - $started) < 3000) {
    echo json_encode(['ok' => true]);
    exit;
}

$name    = field('name', 120);
$email   = field('email', 160);
$phone   = field('phone', 40);
$company = field('company', 160);
$service = field('service', 80);
$budget  = field('budget', 80);
$message = field('message', 5000);
$page    = field('page', 300);

if ($name === '' || $message === '' || ($email === '' && $phone === '')) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'missing']);
    exit;
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'email']);
    exit;
}

$ip = $_SERVER['REMOTE_ADDR'] ?? '';
$when = gmdate('Y-m-d H:i:s') . ' UTC';

// Backup copy outside public_html (one level above this script's folder).
$csv = dirname(__DIR__) . '/devsynx-leads.csv';
$row = [$when, $name, $email, $phone, $company, $service, $budget, $page, $ip, preg_replace('/\s+/', ' ', $message)];
$saved = false;
if ($fh = @fopen($csv, 'a')) {
    if (@flock($fh, LOCK_EX)) {
        $saved = @fputcsv($fh, $row) !== false;
        @flock($fh, LOCK_UN);
    }
    @fclose($fh);
}

$subject = 'New website enquiry: ' . ($service !== '' ? $service : 'General') . ' - ' . $name;
$body = "New enquiry from devsynx.com\n\n"
    . "Name:    $name\n"
    . "Email:   $email\n"
    . "Phone:   $phone\n"
    . "Company: $company\n"
    . "Service: $service\n"
    . "Budget:  $budget\n"
    . "Page:    $page\n"
    . "Time:    $when\n\n"
    . "Message:\n$message\n";

$headers = "From: DEVSYNX Website <$FROM>\r\n";
if ($email !== '') {
    $headers .= "Reply-To: " . preg_replace('/[^\w.@+\-]/', '', $email) . "\r\n";
}
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

/**
 * Minimal SMTP sender (SSL on port 465, AUTH LOGIN). Settings come from
 * contact-config.php, which the deploy workflow writes from GitHub secrets;
 * it is never committed to the repository.
 */
function smtp_send($cfg, $to, $from, $replyTo, $subject, $body) {
    $host = $cfg['host'] ?? '';
    $port = (int) ($cfg['port'] ?? 465);
    if ($host === '' || empty($cfg['user']) || empty($cfg['pass'])) return false;
    $ctx = stream_context_create(['ssl' => ['verify_peer' => false, 'verify_peer_name' => false]]);
    $fp = @stream_socket_client("ssl://$host:$port", $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $ctx);
    if (!$fp) return false;
    stream_set_timeout($fp, 15);
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
        $r = $read();
        return strpos($r, (string) $expect) === 0;
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
        $msg = "From: DEVSYNX Website <$from>\r\n"
            . "To: <$to>\r\n"
            . ($replyTo !== '' ? "Reply-To: <$replyTo>\r\n" : '')
            . "Subject: $subject\r\n"
            . "Date: " . date('r') . "\r\n"
            . "MIME-Version: 1.0\r\nContent-Type: text/plain; charset=UTF-8\r\n\r\n"
            . str_replace("\n.", "\n..", str_replace("\r\n", "\n", $body));
        $msg = str_replace("\n", "\r\n", $msg);
        $ok = $cmd($msg . "\r\n.", 250);
    }
    @fwrite($fp, "QUIT\r\n");
    @fclose($fp);
    return $ok;
}

$encSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
// Some hosts reject the -f envelope sender; try with it, then without.
$sent = false;
$cfgFile = __DIR__ . '/contact-config.php';
if (is_file($cfgFile)) {
    $cfg = include $cfgFile;
    if (is_array($cfg)) {
        $replyTo = $email !== '' ? preg_replace('/[^\w.@+\-]/', '', $email) : '';
        $sent = smtp_send($cfg, $TO, $cfg['user'] ?? $FROM, $replyTo, $encSubject, $body);
    }
}
if (!$sent) $sent = @mail($TO, $encSubject, $body, $headers, '-f' . $FROM);
if (!$sent) {
    $sent = @mail($TO, $encSubject, $body, $headers);
}

if ($sent || $saved) {
    echo json_encode(['ok' => true, 'mailed' => (bool) $sent, 'saved' => $saved]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'send']);
}
