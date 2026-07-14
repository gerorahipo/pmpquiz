<?php

declare(strict_types=1);

namespace App\Controllers;

use App\Auth;
use App\Database;
use App\Request;
use App\Response;
use PDO;

final class AuthController
{
    public function register(Request $req): void
    {
        [$email, $password] = $this->credentials($req);

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            Response::error('A valid email is required', 422);
        }
        if (strlen($password) < 8) {
            Response::error('Password must be at least 8 characters', 422);
        }

        $pdo = Database::pdo();
        $exists = $pdo->prepare('SELECT 1 FROM users WHERE email = ?');
        $exists->execute([$email]);
        if ($exists->fetchColumn()) {
            Response::error('Email already registered', 409);
        }

        $hash = password_hash($password, PASSWORD_BCRYPT);
        $insert = $pdo->prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)');
        $insert->execute([$email, $hash]);
        $userId = (int) $pdo->lastInsertId();

        Response::json([
            'token' => Auth::issueToken($userId, $email),
            'user' => ['id' => $userId, 'email' => $email],
        ], 201);
    }

    public function login(Request $req): void
    {
        [$email, $password] = $this->credentials($req);

        $pdo = Database::pdo();
        $stmt = $pdo->prepare('SELECT id, email, password_hash FROM users WHERE email = ?');
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$user || !password_verify($password, $user['password_hash'])) {
            Response::error('Invalid credentials', 401);
        }

        $userId = (int) $user['id'];
        Response::json([
            'token' => Auth::issueToken($userId, $user['email']),
            'user' => ['id' => $userId, 'email' => $user['email']],
        ]);
    }

    public function me(Request $req): void
    {
        $userId = Auth::requireUserId($req);
        $stmt = Database::pdo()->prepare('SELECT id, email, created_at FROM users WHERE id = ?');
        $stmt->execute([$userId]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        if (!$user) {
            Response::error('User not found', 404);
        }
        Response::json(['user' => [
            'id' => (int) $user['id'],
            'email' => $user['email'],
            'createdAt' => $user['created_at'],
        ]]);
    }

    /** @return array{0:string,1:string} */
    private function credentials(Request $req): array
    {
        $email = strtolower(trim((string) $req->input('email', '')));
        $password = (string) $req->input('password', '');
        if ($email === '' || $password === '') {
            Response::error('Email and password are required', 422);
        }
        return [$email, $password];
    }
}
