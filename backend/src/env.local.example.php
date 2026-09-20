<?php

declare(strict_types=1);

/**
 * Template for env.local.php — a fallback env-var loader for hosts where
 * getenv() doesn't reliably see values set via Apache's ".htaccess SetEnv"
 * (common on shared hosting running PHP-FPM or LiteSpeed).
 *
 * Copy this file to env.local.php (same directory) and fill in real
 * production values. env.local.php is gitignored — NEVER commit real
 * secrets. Leave it absent entirely on hosts that expose real environment
 * variables (DDEV, most VPS/container setups): bootstrap.php only loads
 * it if the file exists, and existing env vars are never overridden.
 */

$overrides = [
    'DB_HOST' => 'localhost',
    'DB_PORT' => '3306',
    'DB_NAME' => 'change-me',
    'DB_USER' => 'change-me',
    'DB_PASS' => 'change-me',
    // openssl rand -hex 32
    'JWT_SECRET' => 'change-me',
    'JWT_TTL' => (string) (7 * 24 * 3600),
    // The production origin serving the frontend, e.g. https://quiz.example.com
    'CORS_ALLOW_ORIGIN' => 'change-me',
];

foreach ($overrides as $key => $value) {
    // Never override a real environment variable if the host exposes one.
    if (getenv($key) === false) {
        putenv("$key=$value");
    }
}
