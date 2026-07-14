<?php

declare(strict_types=1);

namespace App;

/**
 * Thin wrapper over the incoming HTTP request: method, path, query,
 * JSON body and the Authorization bearer token.
 */
final class Request
{
    /** @var array<string,mixed> */
    private array $body;

    private function __construct(
        public readonly string $method,
        public readonly string $path,
        array $body,
    ) {
        $this->body = $body;
    }

    public static function capture(): self
    {
        $method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

        // Path without query string, normalized (no trailing slash except root).
        $uri = $_SERVER['REQUEST_URI'] ?? '/';
        $path = parse_url($uri, PHP_URL_PATH) ?: '/';
        $path = '/' . trim($path, '/');

        $raw = file_get_contents('php://input') ?: '';
        $decoded = $raw !== '' ? json_decode($raw, true) : [];
        $body = is_array($decoded) ? $decoded : [];

        return new self($method, $path, $body);
    }

    public function input(string $key, mixed $default = null): mixed
    {
        return $this->body[$key] ?? $default;
    }

    /** @return array<string,mixed> */
    public function all(): array
    {
        return $this->body;
    }

    public function query(string $key, ?string $default = null): ?string
    {
        $value = $_GET[$key] ?? null;
        return is_string($value) ? $value : $default;
    }

    public function bearerToken(): ?string
    {
        $header = $this->authorizationHeader();
        if ($header !== null && preg_match('/^Bearer\s+(.+)$/i', $header, $m)) {
            return trim($m[1]);
        }
        return null;
    }

    private function authorizationHeader(): ?string
    {
        // Apache and some SAPIs expose it differently; check the common spots.
        $candidates = [
            $_SERVER['HTTP_AUTHORIZATION'] ?? null,
            $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? null,
        ];
        foreach ($candidates as $value) {
            if (is_string($value) && $value !== '') {
                return $value;
            }
        }
        if (function_exists('getallheaders')) {
            foreach (getallheaders() as $name => $value) {
                if (strcasecmp($name, 'Authorization') === 0) {
                    return $value;
                }
            }
        }
        return null;
    }
}
