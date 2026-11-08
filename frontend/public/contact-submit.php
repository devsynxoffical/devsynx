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

$encSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
// Some hosts reject the -f envelope sender; try with it, then without.
$sent = @mail($TO, $encSubject, $body, $headers, '-f' . $FROM);
if (!$sent) {
    $sent = @mail($TO, $encSubject, $body, $headers);
}

if ($sent || $saved) {
    echo json_encode(['ok' => true, 'mailed' => (bool) $sent, 'saved' => $saved]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'send']);
}
