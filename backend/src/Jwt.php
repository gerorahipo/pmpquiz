<?php

declare(strict_types=1);

namespace App;

use InvalidArgumentException;
use RuntimeException;

/**
 * Tiny, dependency-free JWT (HS256) implementation — encode/decode only.
 * Sufficient for stateless access tokens; no external library required.
 */
final class Jwt
{
    /** @param array<string,mixed> $claims */
    public static function encode(array $claims, string $secret, int $ttlSeconds): string
    {
        $now = time();
        $payload = array_merge($claims, [
            'iat' => $now,
            'exp' => $now + $ttlSeconds,
        ]);
        $header = ['alg' => 'HS256', 'typ' => 'JWT'];

        $segments = [
            self::b64UrlEncode(self::json($header)),
            self::b64UrlEncode(self::json($payload)),
        ];
        $signingInput = implode('.', $segments);
        $signature = hash_hmac('sha256', $signingInput, $secret, true);
        $segments[] = self::b64UrlEncode($signature);

        return implode('.', $segments);
    }

    /**
     * Verify signature + expiry and return the claims.
     * @return array<string,mixed>
     * @throws InvalidArgumentException on any validation failure.
     */
    public static function decode(string $token, string $secret): array
    {
        $parts = explode('.', $token);
        if (count($parts) !== 3) {
            throw new InvalidArgumentException('Malformed token');
        }
        [$h, $p, $s] = $parts;

        $expected = hash_hmac('sha256', "$h.$p", $secret, true);
        $provided = self::b64UrlDecode($s);
        if (!hash_equals($expected, $provided)) {
            throw new InvalidArgumentException('Invalid signature');
        }

        $payload = json_decode(self::b64UrlDecode($p), true);
        if (!is_array($payload)) {
            throw new InvalidArgumentException('Invalid payload');
        }
        if (isset($payload['exp']) && time() >= (int) $payload['exp']) {
            throw new InvalidArgumentException('Token expired');
        }
        return $payload;
    }

    private static function json(mixed $value): string
    {
        $out = json_encode($value, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
        if ($out === false) {
            throw new RuntimeException('JSON encode failed');
        }
        return $out;
    }

    private static function b64UrlEncode(string $data): string
    {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }

    private static function b64UrlDecode(string $data): string
    {
        $remainder = strlen($data) % 4;
        if ($remainder) {
            $data .= str_repeat('=', 4 - $remainder);
        }
        $decoded = base64_decode(strtr($data, '-_', '+/'), true);
        if ($decoded === false) {
            throw new InvalidArgumentException('Invalid base64url');
        }
        return $decoded;
    }
}
