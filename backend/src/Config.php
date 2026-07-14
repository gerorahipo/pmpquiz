<?php

declare(strict_types=1);

namespace App;

/**
 * Central configuration, sourced from environment variables.
 * Defaults match a standard DDEV web container (db host/user/pass = "db").
 */
final class Config
{
    public static function env(string $key, ?string $default = null): ?string
    {
        $value = getenv($key);
        return $value === false ? $default : $value;
    }

    /** @return array{host:string,port:string,name:string,user:string,pass:string} */
    public static function db(): array
    {
        return [
            'host' => self::env('DB_HOST', 'db'),
            'port' => self::env('DB_PORT', '3306'),
            'name' => self::env('DB_NAME', 'db'),
            'user' => self::env('DB_USER', 'db'),
            'pass' => self::env('DB_PASS', 'db'),
        ];
    }

    public static function jwtSecret(): string
    {
        // Override via the JWT_SECRET env var (set in .ddev/config.yaml).
        return self::env('JWT_SECRET', 'dev-only-insecure-secret-change-me') ?? '';
    }

    public static function jwtTtlSeconds(): int
    {
        return (int) self::env('JWT_TTL', (string) (7 * 24 * 3600));
    }

    public static function corsOrigin(): string
    {
        // '*' works because we authenticate with a Bearer header, not cookies.
        return self::env('CORS_ALLOW_ORIGIN', '*') ?? '*';
    }
}
