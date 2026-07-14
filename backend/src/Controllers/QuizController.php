<?php

declare(strict_types=1);

namespace App\Controllers;

use App\Auth;
use App\Database;
use App\Questions;
use App\Request;
use App\Response;
use PDO;

/**
 * Authenticated per-user data: quiz attempts, spaced-repetition review state
 * and per-ECO-task accuracy. The SR algorithm mirrors the former client-side
 * logic (simplified SM-2) exactly.
 */
final class QuizController
{
    private const DAY_MS = 86_400_000;
    private const MIN_EASE = 1.3;
    private const MAX_EASE = 2.8;
    private const DEFAULT_EASE = 2.5;
    private const GRADUATION_INTERVAL_DAYS = 21;

    private static function nowMs(): int
    {
        return (int) round(microtime(true) * 1000);
    }

    // ─────────────────────────── attempts ───────────────────────────
    public function listAttempts(Request $req): void
    {
        $userId = Auth::requireUserId($req);
        $stmt = Database::pdo()->prepare(
            'SELECT * FROM attempts WHERE user_id = ? ORDER BY taken_at DESC'
        );
        $stmt->execute([$userId]);
        $out = array_map(static fn (array $r): array => [
            'id' => (int) $r['id'],
            'date' => (int) $r['taken_at'],
            'mode' => $r['mode'],
            'total' => (int) $r['total'],
            'correct' => (int) $r['correct'],
            'durationSec' => $r['duration_sec'] !== null ? (int) $r['duration_sec'] : null,
            'domains' => json_decode((string) $r['domains_json'], true),
        ], $stmt->fetchAll(PDO::FETCH_ASSOC));
        Response::json($out);
    }

    public function createAttempt(Request $req): void
    {
        $userId = Auth::requireUserId($req);
        $total = (int) $req->input('total', 0);
        $correct = (int) $req->input('correct', 0);
        $mode = $req->input('mode');
        $domains = $req->input('domains', []);
        $durationSec = $req->input('durationSec');
        $date = $req->input('date');

        if ($total <= 0) {
            Response::error('total must be > 0', 422);
        }

        $stmt = Database::pdo()->prepare(
            'INSERT INTO attempts (user_id, taken_at, mode, total, correct, duration_sec, domains_json)
             VALUES (?, ?, ?, ?, ?, ?, ?)'
        );
        $stmt->execute([
            $userId,
            is_numeric($date) ? (int) $date : self::nowMs(),
            is_string($mode) ? $mode : null,
            $total,
            $correct,
            is_numeric($durationSec) ? (int) $durationSec : null,
            json_encode($domains, JSON_UNESCAPED_UNICODE),
        ]);

        Response::json(['id' => (int) Database::pdo()->lastInsertId()], 201);
    }

    public function clearAttempts(Request $req): void
    {
        $userId = Auth::requireUserId($req);
        $stmt = Database::pdo()->prepare('DELETE FROM attempts WHERE user_id = ?');
        $stmt->execute([$userId]);
        Response::json(['cleared' => $stmt->rowCount()]);
    }

    // ─────────────────────── record answer (SR + task stats) ───────────────────────
    public function recordAnswer(Request $req): void
    {
        $userId = Auth::requireUserId($req);
        $questionId = (string) $req->input('questionId', '');
        $correct = (bool) $req->input('correct', false);
        if ($questionId === '') {
            Response::error('questionId is required', 422);
        }

        $pdo = Database::pdo();
        $q = $pdo->prepare('SELECT eco_task_id FROM questions WHERE id = ?');
        $q->execute([$questionId]);
        $row = $q->fetch(PDO::FETCH_ASSOC);
        if (!$row) {
            Response::error('Unknown question', 404);
        }
        $ecoTaskId = $row['eco_task_id'] ?? null;

        $now = self::nowMs();
        $existing = $this->missedRow($pdo, $userId, $questionId);

        if ($correct) {
            if ($existing !== null) {
                $streak = (int) $existing['streak'] + 1;
                $ease = min(self::MAX_EASE, (float) $existing['ease_factor'] + 0.1);
                if ($streak === 1) {
                    $interval = 1;
                } elseif ($streak === 2) {
                    $interval = 3;
                } else {
                    $interval = (int) round((int) $existing['interval_days'] * (float) $existing['ease_factor']);
                }
                if ($interval >= self::GRADUATION_INTERVAL_DAYS && $streak >= 3) {
                    $del = $pdo->prepare('DELETE FROM missed WHERE user_id = ? AND question_id = ?');
                    $del->execute([$userId, $questionId]);
                } else {
                    $upd = $pdo->prepare(
                        'UPDATE missed SET streak = ?, interval_days = ?, ease_factor = ?, due_date = ?
                          WHERE user_id = ? AND question_id = ?'
                    );
                    $upd->execute([$streak, $interval, $ease, $now + $interval * self::DAY_MS, $userId, $questionId]);
                }
            }
            // correct answer on a never-missed question: nothing to track
        } else {
            $ease = max(self::MIN_EASE, ($existing !== null ? (float) $existing['ease_factor'] : self::DEFAULT_EASE) - 0.2);
            $count = ($existing !== null ? (int) $existing['count'] : 0) + 1;
            $upsert = $pdo->prepare(
                'INSERT INTO missed (user_id, question_id, count, last_missed, streak, interval_days, ease_factor, due_date)
                 VALUES (?, ?, ?, ?, 0, 1, ?, ?)
                 ON DUPLICATE KEY UPDATE count = VALUES(count), last_missed = VALUES(last_missed),
                   streak = 0, interval_days = 1, ease_factor = VALUES(ease_factor), due_date = VALUES(due_date)'
            );
            $upsert->execute([$userId, $questionId, $count, $now, $ease, $now + self::DAY_MS]);
        }

        if ($ecoTaskId !== null) {
            $stat = $pdo->prepare(
                'INSERT INTO task_stats (user_id, task_id, correct, total)
                 VALUES (?, ?, ?, 1)
                 ON DUPLICATE KEY UPDATE correct = correct + VALUES(correct), total = total + 1'
            );
            $stat->execute([$userId, $ecoTaskId, $correct ? 1 : 0]);
        }

        Response::json(['ok' => true]);
    }

    // ─────────────────────────── review (SR queues) ───────────────────────────
    public function dueReview(Request $req): void
    {
        $userId = Auth::requireUserId($req);
        $now = self::nowMs();
        $stmt = Database::pdo()->prepare(
            'SELECT * FROM missed WHERE user_id = ? AND due_date <= ? ORDER BY due_date ASC LIMIT 50'
        );
        $stmt->execute([$userId, $now]);
        Response::json($this->joinQuestions($stmt->fetchAll(PDO::FETCH_ASSOC)));
    }

    public function allReview(Request $req): void
    {
        $userId = Auth::requireUserId($req);
        $stmt = Database::pdo()->prepare(
            'SELECT * FROM missed WHERE user_id = ? ORDER BY last_missed DESC'
        );
        $stmt->execute([$userId]);
        Response::json($this->joinQuestions($stmt->fetchAll(PDO::FETCH_ASSOC)));
    }

    public function taskStats(Request $req): void
    {
        $userId = Auth::requireUserId($req);
        $stmt = Database::pdo()->prepare('SELECT task_id, correct, total FROM task_stats WHERE user_id = ?');
        $stmt->execute([$userId]);
        $out = array_map(static fn (array $r): array => [
            'taskId' => $r['task_id'],
            'correct' => (int) $r['correct'],
            'total' => (int) $r['total'],
        ], $stmt->fetchAll(PDO::FETCH_ASSOC));
        Response::json($out);
    }

    /** @return array<string,mixed>|null */
    private function missedRow(PDO $pdo, int $userId, string $questionId): ?array
    {
        $stmt = $pdo->prepare('SELECT * FROM missed WHERE user_id = ? AND question_id = ?');
        $stmt->execute([$userId, $questionId]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        return $row ?: null;
    }

    /**
     * Attach the hydrated question to each missed row, in the {entry, question}
     * shape the client review screens expect.
     * @param array<int,array<string,mixed>> $missedRows
     * @return array<int,array<string,mixed>>
     */
    private function joinQuestions(array $missedRows): array
    {
        if ($missedRows === []) {
            return [];
        }
        $pdo = Database::pdo();
        $ids = array_column($missedRows, 'question_id');
        $placeholders = implode(',', array_fill(0, count($ids), '?'));
        $stmt = $pdo->prepare("SELECT * FROM questions WHERE id IN ($placeholders)");
        $stmt->execute($ids);
        $questions = [];
        foreach (Questions::hydrate($pdo, $stmt->fetchAll(PDO::FETCH_ASSOC)) as $q) {
            $questions[$q['id']] = $q;
        }

        $out = [];
        foreach ($missedRows as $m) {
            if (!isset($questions[$m['question_id']])) {
                continue;
            }
            $out[] = [
                'entry' => [
                    'questionId' => $m['question_id'],
                    'count' => (int) $m['count'],
                    'lastMissed' => (int) $m['last_missed'],
                    'streak' => (int) $m['streak'],
                    'intervalDays' => (int) $m['interval_days'],
                    'easeFactor' => (float) $m['ease_factor'],
                    'dueDate' => (int) $m['due_date'],
                ],
                'question' => $questions[$m['question_id']],
            ];
        }
        return $out;
    }
}
