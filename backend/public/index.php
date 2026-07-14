<?php

declare(strict_types=1);

use App\Controllers\AuthController;
use App\Controllers\ContentController;
use App\Controllers\QuizController;
use App\Request;
use App\Response;
use App\Router;

require __DIR__ . '/../src/bootstrap.php';

// CORS on every response; short-circuit preflight.
Response::cors();
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
    Response::noContent();
}

$router = new Router();

$auth = new AuthController();
$content = new ContentController();
$quiz = new QuizController();

// health check
$router->get('/api/health', static fn () => Response::json(['status' => 'ok']));

// ── auth ──
$router->post('/api/auth/register', [$auth, 'register']);
$router->post('/api/auth/login', [$auth, 'login']);
$router->get('/api/auth/me', [$auth, 'me']);

// ── public content ──
$router->get('/api/questions', [$content, 'questions']);
$router->get('/api/concepts', [$content, 'concepts']);
$router->get('/api/glossary', [$content, 'glossary']);
$router->get('/api/eco-tasks', [$content, 'ecoTasks']);

// ── authenticated user data ──
$router->get('/api/attempts', [$quiz, 'listAttempts']);
$router->post('/api/attempts', [$quiz, 'createAttempt']);
$router->delete('/api/attempts', [$quiz, 'clearAttempts']);
$router->post('/api/answers', [$quiz, 'recordAnswer']);
$router->get('/api/review/due', [$quiz, 'dueReview']);
$router->get('/api/review/all', [$quiz, 'allReview']);
$router->get('/api/task-stats', [$quiz, 'taskStats']);

try {
    $router->dispatch(Request::capture());
} catch (Throwable $e) {
    // Never leak internals; log server-side, return a clean 500.
    error_log('[api] ' . $e->getMessage() . ' @ ' . $e->getFile() . ':' . $e->getLine());
    Response::error('Internal server error', 500);
}
