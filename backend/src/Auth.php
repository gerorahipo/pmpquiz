<?php

declare(strict_types=1);

namespace App;

use InvalidArgumentException;

/**
 * Authentication helper: issues tokens and resolves the current user from
 * the Bearer token. Acts as the "auth middleware" for protected routes.
 */
final class Auth
{
    public static function issueToken(int $userId, string $email): string
    {
        return Jwt::encode(
            ['sub' => $userId, 'email' => $email],
            Config::jwtSecret(),
            Config::jwtTtlSeconds(),
        );
    }

    /** Return the authenticated user id, or emit a 401 and stop. */
    public static function requireUserId(Request $req): int
    {
        $token = $req->bearerToken();
        if ($token === null) {
            Response::error('Missing bearer token', 401);
        }
        try {
            $claims = Jwt::decode($token, Config::jwtSecret());
        } catch (InvalidArgumentException $e) {
            Response::error('Invalid or expired token', 401);
        }
        $sub = $claims['sub'] ?? null;
        if (!is_int($sub) && !ctype_digit((string) $sub)) {
            Response::error('Invalid token subject', 401);
        }
        return (int) $sub;
    }
}
