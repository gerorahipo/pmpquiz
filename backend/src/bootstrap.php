<?php

declare(strict_types=1);

/**
 * Minimal PSR-4-style autoloader for the framework-free API.
 * Maps the "App\" namespace to the src/ directory.
 */
spl_autoload_register(static function (string $class): void {
    $prefix = 'App\\';
    $baseDir = __DIR__ . '/';
    if (!str_starts_with($class, $prefix)) {
        return;
    }
    $relative = substr($class, strlen($prefix));
    $file = $baseDir . str_replace('\\', '/', $relative) . '.php';
    if (is_file($file)) {
        require $file;
    }
});

// On hosts where real environment variables aren't reliably exposed to
// getenv() (e.g. shared hosting running PHP-FPM/LiteSpeed, where an
// Apache ".htaccess SetEnv" doesn't always propagate), copy
// env.local.example.php to env.local.php and fill in real values —
// gitignored, never commit it. Safe to leave absent (DDEV and any host
// with real env vars never need this file).
$envOverrides = __DIR__ . '/env.local.php';
if (is_file($envOverrides)) {
    require $envOverrides;
}
