-- PMP Quiz — MySQL schema (framework-free PHP API)
-- utf8mb4 throughout for full bilingual (FR/EN) + emoji safety.
-- Non-destructive: uses CREATE TABLE IF NOT EXISTS so it can be re-applied.

SET NAMES utf8mb4;

-- ─────────────────────────── users ───────────────────────────
CREATE TABLE IF NOT EXISTS users (
  id            BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  email         VARCHAR(255)    NOT NULL,
  password_hash VARCHAR(255)    NOT NULL,
  created_at    TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_users_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ─────────────────────────── content: ECO tasks ───────────────────────────
CREATE TABLE IF NOT EXISTS eco_tasks (
  id       VARCHAR(32) NOT NULL,
  domain   ENUM('people','process','business') NOT NULL,
  label_fr VARCHAR(255) NOT NULL,
  label_en VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  KEY idx_eco_tasks_domain (domain)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ─────────────────────────── content: questions ───────────────────────────
CREATE TABLE IF NOT EXISTS questions (
  id             VARCHAR(32) NOT NULL,
  domain         ENUM('people','process','business') NOT NULL,
  difficulty     ENUM('easy','medium','hard') NOT NULL,
  eco_task_id    VARCHAR(32) NULL,
  correct        TINYINT UNSIGNED NOT NULL,
  correct_multiple JSON NULL,                  -- e.g. [0,2] for "select 2" questions; NULL = single-answer
  question_fr    TEXT NOT NULL,
  question_en    TEXT NOT NULL,
  explanation_fr TEXT NOT NULL,
  explanation_en TEXT NOT NULL,
  PRIMARY KEY (id),
  KEY idx_questions_difficulty (difficulty),
  KEY idx_questions_domain (domain),
  KEY idx_questions_eco_task (eco_task_id),
  CONSTRAINT fk_questions_eco_task FOREIGN KEY (eco_task_id)
    REFERENCES eco_tasks (id) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS question_options (
  question_id VARCHAR(32) NOT NULL,
  position    TINYINT UNSIGNED NOT NULL,
  text_fr     TEXT NOT NULL,
  text_en     TEXT NOT NULL,
  PRIMARY KEY (question_id, position),
  CONSTRAINT fk_options_question FOREIGN KEY (question_id)
    REFERENCES questions (id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ─────────────────────────── content: concepts ───────────────────────────
CREATE TABLE IF NOT EXISTS concepts (
  id          VARCHAR(48) NOT NULL,
  category    ENUM('principle','performance','topic') NOT NULL,
  title_fr    VARCHAR(255) NOT NULL,
  title_en    VARCHAR(255) NOT NULL,
  summary_fr  TEXT NOT NULL,
  summary_en  TEXT NOT NULL,
  body_fr     MEDIUMTEXT NOT NULL,
  body_en     MEDIUMTEXT NOT NULL,
  details_fr  MEDIUMTEXT NULL,
  details_en  MEDIUMTEXT NULL,
  examples_fr MEDIUMTEXT NULL,
  examples_en MEDIUMTEXT NULL,
  traps_fr    MEDIUMTEXT NULL,
  traps_en    MEDIUMTEXT NULL,
  PRIMARY KEY (id),
  KEY idx_concepts_category (category)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ─────────────────────────── content: glossary ───────────────────────────
CREATE TABLE IF NOT EXISTS glossary (
  id            VARCHAR(48) NOT NULL,
  category      ENUM('formula','agile','process','people') NOT NULL,
  term_fr       VARCHAR(255) NOT NULL,
  term_en       VARCHAR(255) NOT NULL,
  definition_fr TEXT NOT NULL,
  definition_en TEXT NOT NULL,
  PRIMARY KEY (id),
  KEY idx_glossary_category (category)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ─────────────────────────── user data: attempts ───────────────────────────
CREATE TABLE IF NOT EXISTS attempts (
  id           BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id      BIGINT UNSIGNED NOT NULL,
  taken_at     BIGINT NOT NULL,               -- epoch milliseconds (client clock)
  mode         VARCHAR(16) NULL,
  total        INT NOT NULL,
  correct      INT NOT NULL,
  duration_sec INT NULL,
  domains_json JSON NOT NULL,                 -- {people:{total,correct},process:{...},business:{...}}
  created_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_attempts_user (user_id, taken_at),
  CONSTRAINT fk_attempts_user FOREIGN KEY (user_id)
    REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ─────────────────────── user data: spaced-repetition (missed) ───────────────────────
CREATE TABLE IF NOT EXISTS missed (
  user_id       BIGINT UNSIGNED NOT NULL,
  question_id   VARCHAR(32) NOT NULL,
  count         INT NOT NULL DEFAULT 1,        -- times answered incorrectly, ever
  last_missed   BIGINT NOT NULL,               -- epoch ms
  streak        INT NOT NULL DEFAULT 0,        -- consecutive correct reviews since last miss
  interval_days INT NOT NULL DEFAULT 1,
  ease_factor   DECIMAL(4,2) NOT NULL DEFAULT 2.50,
  due_date      BIGINT NOT NULL,               -- epoch ms; due when now >= due_date
  PRIMARY KEY (user_id, question_id),
  KEY idx_missed_due (user_id, due_date),
  CONSTRAINT fk_missed_user FOREIGN KEY (user_id)
    REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_missed_question FOREIGN KEY (question_id)
    REFERENCES questions (id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ─────────────────────── user data: per-ECO-task accuracy ───────────────────────
CREATE TABLE IF NOT EXISTS task_stats (
  user_id BIGINT UNSIGNED NOT NULL,
  task_id VARCHAR(32) NOT NULL,
  correct INT NOT NULL DEFAULT 0,
  total   INT NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, task_id),
  CONSTRAINT fk_taskstats_user FOREIGN KEY (user_id)
    REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_taskstats_task FOREIGN KEY (task_id)
    REFERENCES eco_tasks (id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
