<?php

declare(strict_types=1);

namespace App;

use PDO;

/**
 * Shapes question rows (+ their options) into the JSON structure the client
 * expects: localized text objects and an options array indexed to `correct`.
 */
final class Questions
{
    /**
     * @param array<int,array<string,mixed>> $rows question table rows
     * @return array<int,array<string,mixed>>
     */
    public static function hydrate(PDO $pdo, array $rows): array
    {
        if ($rows === []) {
            return [];
        }
        $ids = array_column($rows, 'id');
        $placeholders = implode(',', array_fill(0, count($ids), '?'));
        $stmt = $pdo->prepare(
            "SELECT question_id, position, text_fr, text_en
               FROM question_options
              WHERE question_id IN ($placeholders)
              ORDER BY question_id, position"
        );
        $stmt->execute($ids);

        $optionsByQuestion = [];
        foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $opt) {
            $optionsByQuestion[$opt['question_id']][] = [
                'fr' => $opt['text_fr'],
                'en' => $opt['text_en'],
            ];
        }

        $out = [];
        foreach ($rows as $r) {
            $item = [
                'id' => $r['id'],
                'domain' => $r['domain'],
                'difficulty' => $r['difficulty'],
                'question' => ['fr' => $r['question_fr'], 'en' => $r['question_en']],
                'options' => $optionsByQuestion[$r['id']] ?? [],
                'correct' => (int) $r['correct'],
                'explanation' => ['fr' => $r['explanation_fr'], 'en' => $r['explanation_en']],
            ];
            if (!empty($r['eco_task_id'])) {
                $item['ecoTask'] = $r['eco_task_id'];
            }
            $out[] = $item;
        }
        return $out;
    }
}
