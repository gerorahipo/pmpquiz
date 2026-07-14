<?php

declare(strict_types=1);

namespace App;

/**
 * JSON response helpers + CORS. All handlers return through here.
 */
final class Response
{
    public static function cors(): void
    {
        header('Access-Control-Allow-Origin: ' . Config::corsOrigin());
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        header('Access-Control-Max-Age: 86400');
        header('Vary: Origin');
    }

    public static function json(mixed $data, int $status = 200): never
    {
        http_response_code($status);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        exit;
    }

    public static function error(string $message, int $status = 400): never
    {
        self::json(['error' => $message], $status);
    }

    /** End a CORS preflight request. */
    public static function noContent(): never
    {
        http_response_code(204);
        exit;
    }
}
