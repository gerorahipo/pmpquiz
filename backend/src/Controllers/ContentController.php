<?php

declare(strict_types=1);

namespace App\Controllers;

use App\Database;
use App\Questions;
use App\Request;
use App\Response;
use PDO;

/**
 * Public content endpoints: the question bank (with the same draw logic the
 * client used to run against IndexedDB), concepts, glossary and ECO tasks.
 */
final class ContentController
{
    /** ECO exam ratios over 180 questions: People 42%, Process 50%, Business 8%. */
    private const EXAM_DISTRIBUTION = ['people' => 76, 'process' => 90, 'business' => 14];
    private const EXAM_TOTAL = 180;

    public function questions(Request $req): void
    {
        $pdo = Database::pdo();
        $mode = $req->query('mode');
        $task = $req->query('task');
        $difficulty = $req->query('difficulty');
        $limit = (int) ($req->query('limit') ?? '0');

        if ($task !== null && $task !== '') {
            $rows = $this->drawByTask($pdo, $task, $limit > 0 ? $limit : 15);
        } elseif ($mode === 'exam') {
            $rows = $this->drawExam($pdo);
        } elseif ($mode === 'easy') {
            $rows = $this->drawByDifficulty($pdo, 'easy', random_int(10, 15));
        } elseif ($mode === 'medium') {
            $rows = $this->drawByDifficulty($pdo, 'medium', 50);
        } elseif ($mode === 'expert') {
            $rows = $this->drawByDifficulty($pdo, 'hard', 120);
        } elseif ($difficulty !== null && in_array($difficulty, ['easy', 'medium', 'hard'], true)) {
            $rows = $this->drawByDifficulty($pdo, $difficulty, $limit > 0 ? $limit : 50);
        } else {
            $rows = $pdo->query('SELECT * FROM questions')->fetchAll(PDO::FETCH_ASSOC);
        }

        Response::json(Questions::hydrate($pdo, $rows));
    }

    public function concepts(Request $req): void
    {
        $rows = Database::pdo()->query('SELECT * FROM concepts')->fetchAll(PDO::FETCH_ASSOC);
        $out = array_map(static function (array $r): array {
            $concept = [
                'id' => $r['id'],
                'category' => $r['category'],
                'title' => ['fr' => $r['title_fr'], 'en' => $r['title_en']],
                'summary' => ['fr' => $r['summary_fr'], 'en' => $r['summary_en']],
                'body' => ['fr' => $r['body_fr'], 'en' => $r['body_en']],
            ];
            if ($r['details_fr'] !== null || $r['details_en'] !== null) {
                $concept['details'] = ['fr' => $r['details_fr'], 'en' => $r['details_en']];
            }
            if ($r['examples_fr'] !== null || $r['examples_en'] !== null) {
                $concept['examples'] = ['fr' => $r['examples_fr'], 'en' => $r['examples_en']];
            }
            return $concept;
        }, $rows);
        Response::json($out);
    }

    public function glossary(Request $req): void
    {
        $rows = Database::pdo()->query('SELECT * FROM glossary')->fetchAll(PDO::FETCH_ASSOC);
        $out = array_map(static fn (array $r): array => [
            'id' => $r['id'],
            'category' => $r['category'],
            'term' => ['fr' => $r['term_fr'], 'en' => $r['term_en']],
            'definition' => ['fr' => $r['definition_fr'], 'en' => $r['definition_en']],
        ], $rows);
        Response::json($out);
    }

    public function ecoTasks(Request $req): void
    {
        $rows = Database::pdo()->query('SELECT * FROM eco_tasks')->fetchAll(PDO::FETCH_ASSOC);
        $out = array_map(static fn (array $r): array => [
            'id' => $r['id'],
            'domain' => $r['domain'],
            'label' => ['fr' => $r['label_fr'], 'en' => $r['label_en']],
        ], $rows);
        Response::json($out);
    }

    /** @return array<int,array<string,mixed>> */
    private function drawByDifficulty(PDO $pdo, string $difficulty, int $count): array
    {
        $stmt = $pdo->prepare('SELECT * FROM questions WHERE difficulty = ? ORDER BY RAND() LIMIT ?');
        $stmt->bindValue(1, $difficulty);
        $stmt->bindValue(2, $count, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    /** @return array<int,array<string,mixed>> */
    private function drawByTask(PDO $pdo, string $taskId, int $count): array
    {
        $stmt = $pdo->prepare('SELECT * FROM questions WHERE eco_task_id = ? ORDER BY RAND() LIMIT ?');
        $stmt->bindValue(1, $taskId);
        $stmt->bindValue(2, $count, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    /** @return array<int,array<string,mixed>> */
    private function drawExam(PDO $pdo): array
    {
        $picked = [];
        foreach (self::EXAM_DISTRIBUTION as $domain => $n) {
            $stmt = $pdo->prepare('SELECT * FROM questions WHERE domain = ? ORDER BY RAND() LIMIT ?');
            $stmt->bindValue(1, $domain);
            $stmt->bindValue(2, $n, PDO::PARAM_INT);
            $stmt->execute();
            foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
                $picked[] = $row;
            }
        }
        // top up from anywhere if a domain pool was short
        if (count($picked) < self::EXAM_TOTAL) {
            $have = array_column($picked, 'id');
            $placeholders = $have ? implode(',', array_fill(0, count($have), '?')) : "''";
            $sql = "SELECT * FROM questions WHERE id NOT IN ($placeholders) ORDER BY RAND() LIMIT ?";
            $stmt = $pdo->prepare($sql);
            $i = 1;
            foreach ($have as $id) {
                $stmt->bindValue($i++, $id);
            }
            $stmt->bindValue($i, self::EXAM_TOTAL - count($picked), PDO::PARAM_INT);
            $stmt->execute();
            foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
                $picked[] = $row;
            }
        }
        shuffle($picked);
        return $picked;
    }
}
