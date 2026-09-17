import type { Question } from '../types'

/**
 * Batch covering the July 2026 ECO update (new domain percentages, exam
 * format, 26-task structure) and the PMI Code of Ethics and Professional
 * Conduct (4 values, elimination technique), sourced from the official PMI
 * 2026 ECO and a third-party ECO-aligned training deck.
 */
export const ECO2026_ETHICS_QUESTIONS: Question[] = [
  // ─────────────────────────── EASY ───────────────────────────
  {
    id: 'xl01',
    domain: 'business',
    difficulty: 'easy',
    question: {
      fr: "Depuis la mise à jour de juillet 2026 de l'ECO, quelle est la répartition des 3 domaines de l'examen PMP ?",
      en: 'Since the July 2026 ECO update, what is the PMP exam’s 3-domain split?',
    },
    options: [
      { fr: 'Personnes 33 %, Processus 41 %, Environnement commercial 26 %', en: 'People 33%, Process 41%, Business Environment 26%' },
      { fr: 'Personnes 42 %, Processus 50 %, Environnement d’affaires 8 %', en: 'People 42%, Process 50%, Business Environment 8%' },
      { fr: 'Personnes 33 %, Processus 33 %, Environnement commercial 34 %', en: 'People 33%, Process 33%, Business Environment 34%' },
      { fr: 'Personnes 26 %, Processus 41 %, Environnement commercial 33 %', en: 'People 26%, Process 41%, Business Environment 33%' },
    ],
    correct: 0,
    explanation: {
      fr: "La mise à jour de juillet 2026 fixe la répartition à Personnes 33 %, Processus 41 %, Environnement commercial 26 %. L'ancienne répartition (42/50/8 %) date de l'ECO 2021 et n'est plus valide.",
      en: 'The July 2026 update sets the split at People 33%, Process 41%, Business Environment 26%. The old split (42/50/8%) is from the 2021 ECO and no longer applies.',
    },
  },
  {
    id: 'xl02',
    domain: 'business',
    difficulty: 'easy',
    question: {
      fr: "Combien de questions comporte l'examen PMP depuis juillet 2026, et combien de temps est alloué ?",
      en: 'How many questions does the PMP exam have since July 2026, and how much time is allotted?',
    },
    options: [
      { fr: '180 questions en 240 minutes', en: '180 questions in 240 minutes' },
      { fr: '180 questions en 230 minutes', en: '180 questions in 230 minutes' },
      { fr: '175 questions en 230 minutes', en: '175 questions in 230 minutes' },
      { fr: '200 questions en 240 minutes', en: '200 questions in 240 minutes' },
    ],
    correct: 0,
    explanation: {
      fr: "180 questions (dont 170 notées et 10 de pré-test non notées) en 240 minutes, avec deux pauses de 10 minutes.",
      en: '180 questions (170 scored plus 10 unscored pretest items) in 240 minutes, with two 10-minute breaks.',
    },
  },
  {
    id: 'xl03',
    domain: 'business',
    difficulty: 'easy',
    question: {
      fr: 'Combien de tâches ECO au total sont réparties entre les 3 domaines de l’examen (2026) ?',
      en: 'How many total ECO tasks are spread across the exam’s 3 domains (2026)?',
    },
    options: [
      { fr: '26 tâches (8 + 10 + 8)', en: '26 tasks (8 + 10 + 8)' },
      { fr: '35 tâches', en: '35 tasks' },
      { fr: '17 tâches', en: '17 tasks' },
      { fr: '12 tâches, une par principe', en: '12 tasks, one per principle' },
    ],
    correct: 0,
    explanation: {
      fr: 'L’ECO 2026 compte 26 tâches réparties 8 (Personnes) + 10 (Processus) + 8 (Environnement commercial).',
      en: 'The 2026 ECO has 26 tasks split 8 (People) + 10 (Process) + 8 (Business Environment).',
    },
  },
  {
    id: 'xl04',
    domain: 'people',
    difficulty: 'easy',
    ecoTask: 'business-01',
    question: {
      fr: "Combien de valeurs fondamentales, non négociables, structurent le code d'éthique et de déontologie du PMI ?",
      en: 'How many core, non-negotiable values structure the PMI Code of Ethics and Professional Conduct?',
    },
    options: [
      { fr: '4 : responsabilité, respect, équité, honnêteté', en: '4: responsibility, respect, fairness, honesty' },
      { fr: '3 : intégrité, loyauté, discrétion', en: '3: integrity, loyalty, discretion' },
      { fr: '5 : incluant la confidentialité comme valeur séparée', en: '5: including confidentiality as a separate value' },
      { fr: '2 : légalité et rentabilité', en: '2: legality and profitability' },
    ],
    correct: 0,
    explanation: {
      fr: 'Les 4 valeurs sont responsabilité, respect, équité et honnêteté. Une option qui en viole une seule est automatiquement fausse à l’examen.',
      en: 'The 4 values are responsibility, respect, fairness and honesty. An option violating even one is automatically wrong on the exam.',
    },
  },

  // ─────────────────────────── MEDIUM ───────────────────────────
  {
    id: 'xl05',
    domain: 'business',
    difficulty: 'medium',
    question: {
      fr: 'Quelle part approximative des questions de l’examen PMP 2026 porte sur des approches prédictives, contre adaptatives/agiles ou hybrides ?',
      en: 'Roughly what share of 2026 PMP exam questions involve predictive approaches, versus adaptive/agile or hybrid?',
    },
    options: [
      { fr: '≈ 40 % prédictif, ≈ 60 % adaptatif/agile ou hybride', en: '≈40% predictive, ≈60% adaptive/agile or hybrid' },
      { fr: '≈ 50 % / 50 %', en: '≈50% / 50%' },
      { fr: '≈ 70 % prédictif, ≈ 30 % agile', en: '≈70% predictive, ≈30% agile' },
      { fr: 'Cette répartition n’est propre qu’au domaine Processus', en: 'This split only applies within the Process domain' },
    ],
    correct: 0,
    explanation: {
      fr: "Environ 40 % des questions portent sur des approches prédictives et 60 % sur des approches adaptatives/agiles ou hybrides. Cette répartition traverse les 3 domaines — elle n'est cantonnée à aucun d'eux.",
      en: 'About 40% of questions involve predictive approaches and 60% adaptive/agile or hybrid ones. This split cuts across all 3 domains — it is not confined to any single one.',
    },
  },
  {
    id: 'xl06',
    domain: 'business',
    difficulty: 'medium',
    question: {
      fr: "Quels DEUX types de questions sont NOUVEAUX dans l'examen PMP depuis la mise à jour 2026 ?",
      en: 'Which TWO question types are NEW to the PMP exam since the 2026 update?',
    },
    options: [
      { fr: 'Cas/scénario détaillé', en: 'Detailed case/scenario' },
      { fr: 'Basées sur un graphique/tableau à interpréter', en: 'Graphic/table-based, requiring interpretation' },
      { fr: 'Choix multiple à réponse unique', en: 'Single-choice multiple choice' },
      { fr: 'Liste déroulante', en: 'Dropdown list' },
    ],
    correct: 0,
    correctMultiple: [0, 1],
    explanation: {
      fr: "Les questions de cas/scénario et les questions basées sur un graphique sont NOUVELLES en 2026. Le choix unique et la liste déroulante existaient déjà dans les formats précédents.",
      en: 'Case/scenario questions and graphic-based questions are NEW in 2026. Single-choice and dropdown formats already existed in prior formats.',
    },
  },
  {
    id: 'xl07',
    domain: 'people',
    difficulty: 'medium',
    ecoTask: 'business-01',
    question: {
      fr: "Un fournisseur potentiel se révèle être dirigé par un proche du chef de projet, juste avant l'attribution d'un contrat. Quelle est la MEILLEURE action ?",
      en: 'A prospective vendor turns out to be run by someone close to the project manager, just before contract award. What is the BEST action?',
    },
    options: [
      { fr: 'Divulguer immédiatement ce conflit d’intérêts avant toute décision d’attribution', en: 'Immediately disclose this conflict of interest before any award decision' },
      { fr: 'Rester discret puisqu’on se sait capable de rester impartial', en: 'Stay quiet since you know you can remain impartial' },
      { fr: 'Écarter silencieusement ce fournisseur de la liste', en: 'Quietly drop this vendor from the shortlist' },
      { fr: 'Attendre de voir si quelqu’un pose la question', en: 'Wait to see if someone raises the question' },
    ],
    correct: 0,
    explanation: {
      fr: "Un conflit d'intérêts se divulgue dès qu'il apparaît, avant toute décision — jamais après coup ni seulement si on est interrogé. « Se savoir impartial » ne dispense pas de la divulgation.",
      en: 'A conflict of interest is disclosed as soon as it appears, before any decision — never after the fact or only if asked. “Knowing you’re impartial” does not exempt you from disclosure.',
    },
  },
  {
    id: 'xl08',
    domain: 'people',
    difficulty: 'medium',
    ecoTask: 'business-01',
    question: {
      fr: "Un supérieur hiérarchique demande de présenter un statut de projet plus favorable que la réalité pour rassurer un comité de direction. Quelle est la MEILLEURE réponse ?",
      en: 'A superior asks you to present a project status rosier than reality to reassure a steering committee. What is the BEST response?',
    },
    options: [
      { fr: 'Résister et présenter les faits exacts, même si cela déplaît', en: 'Push back and present the accurate facts, even if it displeases them' },
      { fr: 'Obéir puisque c’est un supérieur hiérarchique', en: 'Comply since it is a superior giving the instruction' },
      { fr: 'Présenter une version légèrement enjolivée pour ménager les deux parties', en: 'Present a slightly embellished version to please both sides' },
      { fr: 'Ne rien présenter et éviter le comité', en: 'Present nothing and avoid the committee' },
    ],
    correct: 0,
    explanation: {
      fr: "L'honnêteté est une valeur non négociable : toujours dire la vérité, même si cela fait mal, retarde une décision ou déplaît à un supérieur. Obéir à une consigne malhonnête est un piège classique.",
      en: 'Honesty is a non-negotiable value: always tell the truth, even if it hurts, delays a decision, or displeases a superior. Obeying a dishonest instruction is a classic trap.',
    },
  },
  {
    id: 'xl09',
    domain: 'people',
    difficulty: 'medium',
    ecoTask: 'business-01',
    question: {
      fr: "Vous découvrez qu'un(e) collègue chef(fe) de projet falsifie des données de reporting pour masquer un retard. Quelle est la MEILLEURE action ?",
      en: 'You discover a fellow project manager is falsifying reporting data to hide a delay. What is the BEST action?',
    },
    options: [
      { fr: 'Signaler la faute par les canaux appropriés', en: 'Report the misconduct through the proper channels' },
      { fr: 'Couvrir le/la collègue par loyauté professionnelle', en: 'Cover for the colleague out of professional loyalty' },
      { fr: 'Se contenter d’une remarque informelle en privé, sans suite', en: 'Settle for an informal private remark, with no follow-up' },
      { fr: 'Attendre d’avoir des preuves irréfutables avant d’agir', en: 'Wait for irrefutable proof before acting' },
    ],
    correct: 0,
    explanation: {
      fr: "Signaler un comportement non éthique observé fait partie des 7 réflexes attendus, même quand cela vise un(e) collègue — la loyauté personnelle ne prime jamais sur l'honnêteté et le respect des règles.",
      en: 'Reporting observed unethical behavior is one of the 7 expected reflexes, even when it targets a colleague — personal loyalty never outranks honesty and rule compliance.',
    },
  },

  // ─────────────────────────── HARD ───────────────────────────
  {
    id: 'xl10',
    domain: 'business',
    difficulty: 'hard',
    question: {
      fr: "Selon la nouvelle structure de l'ECO 2026, à combien de questions correspond environ le domaine « Processus » (41 %) sur un total de 180 ?",
      en: 'Under the new 2026 ECO structure, roughly how many questions does the “Process” domain (41%) represent out of 180 total?',
    },
    options: [
      { fr: '≈ 74-76 questions', en: '≈74-76 questions' },
      { fr: '≈ 61 questions', en: '≈61 questions' },
      { fr: '≈ 48 questions', en: '≈48 questions' },
      { fr: '≈ 90 questions', en: '≈90 questions' },
    ],
    correct: 0,
    explanation: {
      fr: '41 % de 180 ≈ 74-76 questions — la documentation officielle indique 76 questions pour le domaine Processus (contre 61 pour Personnes et 48 pour Environnement commercial).',
      en: '41% of 180 ≈ 74-76 questions — official material lists 76 questions for the Process domain (versus 61 for People and 48 for Business Environment).',
    },
  },
  {
    id: 'xl11',
    domain: 'people',
    difficulty: 'hard',
    ecoTask: 'business-01',
    question: {
      fr: "Face à une question d'éthique proposant 4 réponses, quelle technique d'élimination rapide le référentiel PMI recommande-t-il implicitement ?",
      en: 'Facing an ethics question with 4 answer options, what fast elimination technique does the PMI framework implicitly recommend?',
    },
    options: [
      { fr: 'Éliminer les options qui mentent, cachent, contournent ou favorisent ; garder celle qui protège, respecte, est transparente et agit avec intégrité', en: 'Eliminate options that lie, hide, bypass, or favor; keep the one that protects, respects, is transparent, and acts with integrity' },
      { fr: 'Choisir toujours l’option la plus rapide à mettre en œuvre', en: 'Always choose the option that is quickest to implement' },
      { fr: 'Choisir l’option qui évite tout conflit avec la hiérarchie', en: 'Choose the option that avoids any conflict with leadership' },
      { fr: 'Choisir l’option la moins coûteuse pour l’organisation', en: 'Choose the option cheapest for the organization' },
    ],
    correct: 0,
    explanation: {
      fr: "La technique d'élimination rapide consiste à rayer toute option qui ment, cache un fait, contourne un processus ou favorise quelqu'un ; ce qui reste — protection des parties prenantes, respect des règles, transparence, intégrité — est presque toujours la bonne réponse.",
      en: 'The fast elimination technique crosses out any option that lies, hides a fact, bypasses a process, or favors someone; what remains — stakeholder protection, rule compliance, transparency, integrity — is almost always the right answer.',
    },
  },
  {
    id: 'xl12',
    domain: 'business',
    difficulty: 'hard',
    question: {
      fr: "Un(e) candidat(e) mémorise uniquement les anciens chiffres de l'ECO (Personnes 42 %, Processus 50 %, Environnement d'affaires 8 %, 230 minutes) pour réviser. Quel est le risque principal ?",
      en: 'A candidate memorizes only the old ECO figures (People 42%, Process 50%, Business Environment 8%, 230 minutes) to study. What is the main risk?',
    },
    options: [
      { fr: 'Ces chiffres datent de l’ECO 2021 et ne sont plus valides depuis la mise à jour de juillet 2026', en: 'These figures are from the 2021 ECO and are no longer valid since the July 2026 update' },
      { fr: 'Aucun risque, les deux versions de l’ECO sont interchangeables', en: 'No risk, the two ECO versions are interchangeable' },
      { fr: 'Le risque ne concerne que la durée de l’examen, pas les pourcentages', en: 'The risk only concerns exam duration, not the percentages' },
      { fr: 'Le risque ne concerne que le nombre de questions, pas la durée', en: 'The risk only concerns the question count, not the duration' },
    ],
    correct: 0,
    explanation: {
      fr: "Réviser sur les anciens chiffres (42/50/8 %, 230 minutes) est le piège n°1 identifié pour ce sujet : depuis juillet 2026, c'est 33/41/26 %, 240 minutes, 180 questions dont 170 notées.",
      en: 'Studying the old figures (42/50/8%, 230 minutes) is the #1 identified trap on this topic: since July 2026 it is 33/41/26%, 240 minutes, 180 questions of which 170 are scored.',
    },
  },
]
