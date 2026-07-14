<?php

declare(strict_types=1);

/**
 * Apply the schema and (re)seed content from the JSON files in db/seed/.
 * Non-destructive to user data: only content tables are cleared and refilled.
 *
 * Run inside the DDEV web container:
 *   ddev exec php db/migrate.php
 */

use App\Database;

require __DIR__ . '/../src/bootstrap.php';

$pdo = Database::pdo();

echo "→ Applying schema…\n";
applySchema($pdo, __DIR__ . '/schema.sql');

echo "→ Ensuring newer columns on existing tables…\n";
ensureColumn($pdo, 'concepts', 'traps_fr', 'MEDIUMTEXT NULL');
ensureColumn($pdo, 'concepts', 'traps_en', 'MEDIUMTEXT NULL');

echo "→ Seeding content…\n";
seedContent($pdo, __DIR__ . '/seed');

echo "✓ Migration complete.\n";

/** Execute a .sql file statement by statement. */
function applySchema(PDO $pdo, string $file): void
{
    $sql = file_get_contents($file);
    if ($sql === false) {
        throw new RuntimeException("Cannot read $file");
    }
    // Strip ALL "--" comments (full-line and trailing/inline) before splitting,
    // because a comment may itself contain a ';'. The schema has no ';' inside
    // string values, so splitting on ';' is then safe.
    $sql = preg_replace('/--[^\r\n]*/', '', $sql) ?? $sql;
    foreach (explode(';', $sql) as $statement) {
        $statement = trim($statement);
        if ($statement !== '') {
            $pdo->exec($statement);
        }
    }
}

/**
 * CREATE TABLE IF NOT EXISTS does not alter existing tables, so columns added
 * to schema.sql after a database was first created must be back-filled here.
 */
function ensureColumn(PDO $pdo, string $table, string $column, string $definition): void
{
    $stmt = $pdo->prepare(
        'SELECT COUNT(*) FROM information_schema.columns
          WHERE table_schema = DATABASE() AND table_name = ? AND column_name = ?'
    );
    $stmt->execute([$table, $column]);
    if ((int) $stmt->fetchColumn() === 0) {
        $pdo->exec("ALTER TABLE $table ADD COLUMN $column $definition");
        echo "  added $table.$column\n";
    }
}

function seedContent(PDO $pdo, string $seedDir): void
{
    $ecoTasks = loadJson("$seedDir/eco_tasks.json");
    $questions = loadJson("$seedDir/questions.json");
    $concepts = loadJson("$seedDir/concepts.json");
    $glossary = loadJson("$seedDir/glossary.json");

    $pdo->exec('SET FOREIGN_KEY_CHECKS = 0');
    // DELETE (not TRUNCATE) because these tables are FK targets.
    foreach (['question_options', 'questions', 'eco_tasks', 'concepts', 'glossary'] as $table) {
        $pdo->exec("DELETE FROM $table");
    }

    $pdo->beginTransaction();

    $ecoStmt = $pdo->prepare(
        'INSERT INTO eco_tasks (id, domain, label_fr, label_en) VALUES (?, ?, ?, ?)'
    );
    foreach ($ecoTasks as $t) {
        $ecoStmt->execute([$t['id'], $t['domain'], $t['label']['fr'], $t['label']['en']]);
    }
    echo "  eco_tasks: " . count($ecoTasks) . "\n";

    $qStmt = $pdo->prepare(
        'INSERT INTO questions
           (id, domain, difficulty, eco_task_id, correct, question_fr, question_en, explanation_fr, explanation_en)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
    );
    $oStmt = $pdo->prepare(
        'INSERT INTO question_options (question_id, position, text_fr, text_en) VALUES (?, ?, ?, ?)'
    );
    $optionCount = 0;
    foreach ($questions as $q) {
        $qStmt->execute([
            $q['id'],
            $q['domain'],
            $q['difficulty'],
            $q['ecoTask'] ?? null,
            (int) $q['correct'],
            $q['question']['fr'],
            $q['question']['en'],
            $q['explanation']['fr'],
            $q['explanation']['en'],
        ]);
        foreach ($q['options'] as $i => $opt) {
            $oStmt->execute([$q['id'], $i, $opt['fr'], $opt['en']]);
            $optionCount++;
        }
    }
    echo "  questions: " . count($questions) . " (options: $optionCount)\n";

    $cStmt = $pdo->prepare(
        'INSERT INTO concepts
           (id, category, title_fr, title_en, summary_fr, summary_en, body_fr, body_en,
            details_fr, details_en, examples_fr, examples_en, traps_fr, traps_en)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    );
    foreach ($concepts as $c) {
        $cStmt->execute([
            $c['id'],
            $c['category'],
            $c['title']['fr'], $c['title']['en'],
            $c['summary']['fr'], $c['summary']['en'],
            $c['body']['fr'], $c['body']['en'],
            $c['details']['fr'] ?? null, $c['details']['en'] ?? null,
            $c['examples']['fr'] ?? null, $c['examples']['en'] ?? null,
            $c['traps']['fr'] ?? null, $c['traps']['en'] ?? null,
        ]);
    }
    echo "  concepts: " . count($concepts) . "\n";

    $gStmt = $pdo->prepare(
        'INSERT INTO glossary (id, category, term_fr, term_en, definition_fr, definition_en)
         VALUES (?, ?, ?, ?, ?, ?)'
    );
    foreach ($glossary as $g) {
        $gStmt->execute([
            $g['id'],
            $g['category'],
            $g['term']['fr'], $g['term']['en'],
            $g['definition']['fr'], $g['definition']['en'],
        ]);
    }
    echo "  glossary: " . count($glossary) . "\n";

    $pdo->commit();
    $pdo->exec('SET FOREIGN_KEY_CHECKS = 1');
}

/** @return array<int,array<string,mixed>> */
function loadJson(string $file): array
{
    $raw = file_get_contents($file);
    if ($raw === false) {
        throw new RuntimeException("Missing seed file: $file (run `node scripts/gen-seed.mjs` first)");
    }
    $data = json_decode($raw, true);
    if (!is_array($data)) {
        throw new RuntimeException("Invalid JSON in $file");
    }
    return $data;
}
