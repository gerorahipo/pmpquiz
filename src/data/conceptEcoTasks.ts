/**
 * Maps each concept sheet to the ECO task(s) it most directly covers, so a
 * "drill" button on the sheet can launch a focused quiz on questions tagged
 * with those tasks. A concept with no strong 1:1 task match (e.g. purely
 * meta sheets) is omitted — its drill button simply does not show.
 */
export const CONCEPT_ECO_TASKS: Record<string, string[]> = {
  // ─────────────────────────── PRINCIPLES ───────────────────────────
  'pr-stewardship': ['business-01'],
  'pr-team': ['people-06', 'people-12', 'people-04'],
  'pr-stakeholders': ['process-04', 'people-09'],
  'pr-value': ['business-02'],
  'pr-systems': ['process-09'],
  'pr-leadership': ['people-02', 'people-14'],
  'pr-tailoring': ['process-13'],
  'pr-quality': ['process-07'],
  'pr-complexity': ['process-03', 'process-13'],
  'pr-risk': ['process-03'],
  'pr-adaptability': ['people-07', 'process-15'],
  'pr-change': ['business-04'],

  // ──────────────────────── PERFORMANCE DOMAINS ────────────────────────
  'pd-stakeholders': ['process-04', 'people-09'],
  'pd-team': ['people-06', 'people-03'],
  'pd-approach': ['process-13'],
  'pd-planning': ['process-09', 'process-06', 'process-05'],
  'pd-work': ['process-02', 'process-11'],
  'pd-delivery': ['process-08', 'process-07'],
  'pd-measurement': ['process-05'],
  'pd-uncertainty': ['process-03'],

  // ─────────────────────────── EXAM TOPICS ───────────────────────────
  'tp-evm': ['process-05'],
  'tp-agile': ['process-13', 'people-04'],
  'tp-conflict': ['people-01'],
  'tp-change': ['process-10'],
  'tp-risk': ['process-03'],
  'tp-schedule': ['process-06'],
  'tp-pmbok8': ['process-13'],
  'tp-procurement': ['process-11'],
  'tp-quality-tools': ['process-07'],
  'tp-estimation': ['process-05', 'process-06'],
  'tp-communications': ['process-02'],
  'tp-motivation': ['people-14', 'people-02'],
  // tp-eco and tp-mindset are meta/exam-format sheets with no single-task
  // match — intentionally omitted, so no drill button shows for them.
}
