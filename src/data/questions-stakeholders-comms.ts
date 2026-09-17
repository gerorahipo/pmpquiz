import type { Question } from '../types'

/**
 * Batch covering the deeper stakeholder-engagement tools (stakeholder cube,
 * salience model influence directions, the 5-level engagement matrix) and
 * communications mechanics (channel formula, method×form matrix, NPS/CSAT/CES)
 * added to pd-stakeholders and tp-communications.
 */
export const STAKEHOLDERS_COMMS_QUESTIONS: Question[] = [
  // ─────────────────────────── EASY ───────────────────────────
  {
    id: 'xc01',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-04',
    question: {
      fr: "Quelles trois dimensions le cube des parties prenantes utilise-t-il pour cartographier une partie prenante ?",
      en: 'Which three dimensions does the stakeholder cube use to map a stakeholder?',
    },
    options: [
      { fr: 'Intérêt, pouvoir et influence', en: 'Interest, power and influence' },
      { fr: 'Coût, délai et qualité', en: 'Cost, schedule and quality' },
      { fr: 'Urgence, légitimité et pouvoir', en: 'Urgency, legitimacy and power' },
      { fr: 'Interne, externe et neutre', en: 'Internal, external and neutral' },
    ],
    correct: 0,
    explanation: {
      fr: "Le cube des parties prenantes ajoute une troisième dimension (l'influence) à la grille pouvoir/intérêt classique, pour cartographier des situations trop complexes pour deux axes seulement.",
      en: 'The stakeholder cube adds a third dimension (influence) to the classic power/interest grid, to map situations too complex for two axes alone.',
    },
  },
  {
    id: 'xc02',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-04',
    question: {
      fr: "Dans la matrice d'évaluation de l'engagement, quelle est la différence entre une partie prenante « non informée » et une partie prenante « neutre » ?",
      en: 'In the stakeholder engagement assessment matrix, what is the difference between an “unaware” and a “neutral” stakeholder?',
    },
    options: [
      { fr: "Le non informé ignore le projet ; le neutre le connaît mais ne prend pas parti", en: 'The unaware does not know the project exists; the neutral knows about it but takes no side' },
      { fr: 'Les deux termes désignent la même situation', en: 'Both terms describe the same situation' },
      { fr: 'Le neutre est toujours plus puissant que le non informé', en: 'The neutral is always more powerful than the unaware' },
      { fr: 'Le non informé est toujours un membre externe, le neutre toujours interne', en: 'The unaware is always external, the neutral always internal' },
    ],
    correct: 0,
    explanation: {
      fr: "Le non informé ignore purement et simplement l'existence du projet (risque de surprise s'il n'est pas traité) ; le neutre le connaît mais reste sans position — la stratégie diffère : sensibiliser dans un cas, convaincre dans l'autre.",
      en: 'The unaware simply does not know the project exists (risk of surprise if left untreated); the neutral knows about it but takes no stance — the strategy differs: raise awareness in one case, persuade in the other.',
    },
  },
  {
    id: 'xc03',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-02',
    question: {
      fr: "Combien de canaux de communication existent entre 10 parties prenantes, selon la formule n(n-1)/2 ?",
      en: 'How many communication channels exist among 10 stakeholders, using the n(n-1)/2 formula?',
    },
    options: [
      { fr: '45', en: '45' },
      { fr: '90', en: '90' },
      { fr: '20', en: '20' },
      { fr: '55', en: '55' },
    ],
    correct: 0,
    explanation: {
      fr: 'n(n-1)/2 = 10 × 9 / 2 = 45 canaux.',
      en: 'n(n-1)/2 = 10 × 9 / 2 = 45 channels.',
    },
  },
  {
    id: 'xc04',
    domain: 'process',
    difficulty: 'easy',
    ecoTask: 'process-02',
    question: {
      fr: "Un contrat signé avec un fournisseur est un exemple de quelle combinaison méthode/forme de communication ?",
      en: 'A signed contract with a vendor is an example of which method/form communication combination?',
    },
    options: [
      { fr: 'Push, écrit formel', en: 'Push, formal written' },
      { fr: 'Interactive, verbal formel', en: 'Interactive, formal verbal' },
      { fr: 'Pull, écrit informel', en: 'Pull, informal written' },
      { fr: 'Push, verbal informel', en: 'Push, informal verbal' },
    ],
    correct: 0,
    explanation: {
      fr: "Un contrat est envoyé sans garantie immédiate de lecture partagée (push) et rédigé selon un format officiel et traçable (écrit formel) — lent mais juridiquement solide.",
      en: 'A contract is sent without an immediate shared-reading guarantee (push) and drafted in an official, traceable format (formal written) — slow but legally solid.',
    },
  },

  // ─────────────────────────── MEDIUM ───────────────────────────
  {
    id: 'xc05',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-04',
    question: {
      fr: "Un autre chef de projet, gérant un projet parallèle, revendique la même ressource clé que vous pour le mois prochain. Selon le modèle des directions d'influence, de quelle direction s'agit-il ?",
      en: 'Another project manager, running a parallel project, claims the same key resource as you for next month. According to the influence-direction model, which direction is this?',
    },
    options: [
      { fr: 'Latérale (un pair)', en: 'Lateral (a peer)' },
      { fr: 'Vers le haut (management senior)', en: 'Upward (senior management)' },
      { fr: "Vers l'extérieur (fournisseur)", en: 'Outward (a vendor)' },
      { fr: "Vers le bas (membre de l'équipe)", en: 'Downward (a team member)' },
    ],
    correct: 0,
    explanation: {
      fr: "Un autre chef de projet est un pair : son influence s'exerce LATÉRALEMENT. Cette direction est souvent négligée au profit des influences « vers le haut », mais elle exige tout autant une stratégie d'engagement dédiée.",
      en: 'Another project manager is a peer: their influence is LATERAL. This direction is often overlooked in favor of “upward” influence, yet it just as much requires a dedicated engagement strategy.',
    },
  },
  {
    id: 'xc06',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-04',
    question: {
      fr: "Une partie prenante est classée « leader » dans la matrice d'évaluation de l'engagement : elle défend activement le projet auprès d'autres cadres. Quel est l'objectif du chef de projet à son égard ?",
      en: 'A stakeholder is classified as “leading” in the engagement assessment matrix: they actively champion the project to other executives. What is the PM’s goal toward them?',
    },
    options: [
      { fr: 'Maintenir et soutenir cet engagement, la garder informée et impliquée', en: 'Sustain and support that engagement, keep them informed and involved' },
      { fr: "La gérer de près comme on le ferait pour une partie prenante résistante", en: 'Manage them closely, as one would a resistant stakeholder' },
      { fr: "Réduire les échanges avec elle puisqu'elle est déjà acquise à la cause", en: 'Reduce interactions with them since they are already won over' },
      { fr: 'Ne rien faire de particulier, son soutien est acquis pour toujours', en: 'Do nothing special, their support is permanently secured' },
    ],
    correct: 0,
    explanation: {
      fr: "Une partie prenante « leader » demande de MAINTENIR l'engagement (informer, impliquer) — un niveau d'engagement élevé n'est jamais définitivement acquis, il se cultive.",
      en: 'A “leading” stakeholder calls for SUSTAINING engagement (inform, involve) — a high engagement level is never permanently secured, it must be nurtured.',
    },
  },
  {
    id: 'xc07',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-02',
    question: {
      fr: "Une équipe passe de 8 à 15 personnes en cours de projet. Que devient le nombre de canaux de communication, et quelle est la réponse appropriée du chef de projet ?",
      en: 'A team grows from 8 to 15 people during the project. What happens to the number of communication channels, and what is the PM’s appropriate response?',
    },
    options: [
      { fr: 'Les canaux passent de 28 à 105 ; il faut restructurer la communication (sous-équipes, décisions documentées)', en: 'Channels go from 28 to 105; communication must be restructured (sub-teams, documented decisions)' },
      { fr: 'Les canaux passent de 28 à 105 ; il suffit de planifier plus de réunions générales', en: 'Channels go from 28 to 105; simply schedule more general meetings' },
      { fr: 'Les canaux restent stables tant que le périmètre ne change pas', en: 'Channels stay stable as long as scope does not change' },
      { fr: 'Les canaux doublent seulement, comme le nombre de personnes', en: 'Channels only double, like the headcount' },
    ],
    correct: 0,
    explanation: {
      fr: "8(8-1)/2 = 28, 15(15-1)/2 = 105 : la croissance est plus que proportionnelle. La réponse attendue est structurelle (sous-équipes, documentation, rituels ciblés), pas « plus de réunions ».",
      en: '8(8-1)/2 = 28, 15(15-1)/2 = 105: growth is more than proportional. The expected response is structural (sub-teams, documentation, targeted rituals), not “more meetings”.',
    },
  },
  {
    id: 'xc08',
    domain: 'business',
    difficulty: 'medium',
    ecoTask: 'business-02',
    question: {
      fr: "Après une démonstration de sprint, le CSAT recueilli auprès des utilisateurs est excellent. Pourtant, le NPS trimestriel mesuré auprès des sponsors est en baisse constante depuis deux trimestres. Comment interpréter cette situation ?",
      en: 'After a sprint demo, the CSAT collected from users is excellent. Yet the quarterly NPS measured among sponsors has been steadily declining for two quarters. How should this be interpreted?',
    },
    options: [
      { fr: 'La satisfaction ponctuelle sur les livrables ne garantit pas l’adhésion globale et durable : les deux signaux doivent être traités séparément', en: 'Punctual satisfaction with deliverables does not guarantee overall, lasting buy-in: both signals must be addressed separately' },
      { fr: 'Le NPS en baisse est une anomalie à ignorer puisque le CSAT est excellent', en: 'The declining NPS is an anomaly to ignore since CSAT is excellent' },
      { fr: 'Il faut cesser de mesurer le CSAT, qui donne un signal contradictoire', en: 'Stop measuring CSAT, since it gives a contradictory signal' },
      { fr: 'Le NPS et le CSAT mesurent la même chose ; l’un des deux résultats est forcément erroné', en: 'NPS and CSAT measure the same thing; one of the two results must be wrong' },
    ],
    correct: 0,
    explanation: {
      fr: "Le CSAT est court terme et ponctuel (un livrable, une interaction), le NPS est déclaratif et global (la confiance dans le projet). Un bon CSAT peut coexister avec une érosion progressive de la confiance, invisible sans mesure séparée du NPS.",
      en: 'CSAT is short-term and punctual (one deliverable, one interaction), NPS is declarative and global (trust in the project). A good CSAT can coexist with a gradual erosion of trust, invisible without separately measuring NPS.',
    },
  },

  // ─────────────────────────── HARD ───────────────────────────
  {
    id: 'xc09',
    domain: 'business',
    difficulty: 'hard',
    ecoTask: 'business-02',
    question: {
      fr: "Le processus d'approbation des livrables exige de multiples allers-retours et validations. Chaque livrable individuel obtient pourtant un bon CSAT. Que révèle un CES (Customer Effort Score) élevé dans ce contexte, et quelle est la MEILLEURE action ?",
      en: 'The deliverable approval process requires multiple back-and-forths and sign-offs. Yet each individual deliverable gets a good CSAT. What does a high CES (Customer Effort Score) reveal here, and what is the BEST action?',
    },
    options: [
      { fr: "Le CES révèle une friction structurelle qui prédit un désengagement futur même si la satisfaction ponctuelle est bonne : simplifier le processus d'approbation", en: 'CES reveals structural friction that predicts future disengagement even though punctual satisfaction is good: simplify the approval process' },
      { fr: 'Un CES élevé est sans conséquence tant que le CSAT reste bon', en: 'A high CES has no consequence as long as CSAT stays good' },
      { fr: "Ignorer le CES, car il ne s'applique qu'aux produits commerciaux, pas aux projets internes", en: 'Ignore CES, since it only applies to commercial products, not internal projects' },
      { fr: 'Augmenter la fréquence des validations pour rassurer les parties prenantes', en: 'Increase sign-off frequency to reassure stakeholders' },
    ],
    correct: 0,
    explanation: {
      fr: "Le CES mesure la friction perçue dans la collaboration. Un CES élevé est un signal AVANCÉ de désengagement, même quand la satisfaction immédiate (CSAT) reste bonne : l'ignorer revient à piloter uniquement au rétroviseur. La réponse traite la cause structurelle (le processus), pas le symptôme.",
      en: 'CES measures perceived friction in collaborating. A high CES is an EARLY signal of disengagement, even when immediate satisfaction (CSAT) stays good: ignoring it means steering purely by the rearview mirror. The response addresses the structural cause (the process), not the symptom.',
    },
  },
  {
    id: 'xc10',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-04',
    question: {
      fr: "Deux parties prenantes sont toutes deux classées « résistantes ». L'une bloque activement des décisions en comité, l'autre exprime des préoccupations en privé mais ne bloque rien publiquement. Quelle est la MEILLEURE lecture de la situation ?",
      en: 'Two stakeholders are both classified as “resistant”. One actively blocks decisions in committee, the other privately voices concerns but blocks nothing publicly. What is the BEST reading of the situation?',
    },
    options: [
      { fr: "Le niveau d'engagement partagé (résistant) ne suffit pas à choisir la stratégie : le pouvoir, l'influence et le mode d'expression de la résistance doivent aussi être analysés pour adapter l'approche", en: 'The shared engagement level (resistant) is not enough to choose the strategy: power, influence and how the resistance is expressed must also be analyzed to tailor the approach' },
      { fr: "Le même plan d'engagement standard convient aux deux, puisqu'elles partagent le même niveau", en: 'The same standard engagement plan fits both, since they share the same level' },
      { fr: "Seule celle qui bloque publiquement mérite l'attention du chef de projet", en: 'Only the one blocking publicly deserves the PM’s attention' },
      { fr: "Il faut escalader immédiatement les deux cas au sponsor", en: 'Both cases must be immediately escalated to the sponsor' },
    ],
    correct: 0,
    explanation: {
      fr: "La matrice d'engagement donne un niveau, pas une stratégie complète : le pouvoir/l'influence (grille pouvoir-intérêt ou cube) et la manière dont la résistance s'exprime (ouverte vs discrète) doivent compléter l'analyse pour choisir l'action adaptée à CHAQUE partie prenante.",
      en: 'The engagement matrix gives a level, not a full strategy: power/influence (power-interest grid or cube) and how the resistance is expressed (open vs. quiet) must complete the analysis to choose the action fit for EACH stakeholder.',
    },
  },

  // ─────────────────────── MULTI-RÉPONSES ───────────────────────
  {
    id: 'xc11',
    domain: 'process',
    difficulty: 'medium',
    ecoTask: 'process-04',
    question: {
      fr: "Sélectionnez les DEUX affirmations exactes concernant les cinq niveaux de la matrice d'évaluation de l'engagement.",
      en: 'Select the TWO accurate statements about the five levels of the engagement assessment matrix.',
    },
    options: [
      { fr: "Une partie prenante « non informée » risque d'être surprise si des changements surviennent sans qu'elle ait été sensibilisée", en: 'An “unaware” stakeholder risks being surprised if changes occur without them having been made aware' },
      { fr: "Une partie prenante « neutre » partage activement des informations et contribue à la réussite du projet", en: 'A “neutral” stakeholder actively shares information and contributes to project success' },
      { fr: "L'objectif face à une partie prenante « résistante » est de traiter ses préoccupations et de bâtir la confiance", en: 'The goal with a “resistant” stakeholder is to address their concerns and build trust' },
      { fr: "Les cinq niveaux sont fixes et ne peuvent pas évoluer au cours du projet", en: 'The five levels are fixed and cannot change over the course of the project' },
    ],
    correct: 0,
    correctMultiple: [0, 2],
    explanation: {
      fr: "Le non informé risque la surprise faute de sensibilisation ; le résistant appelle un traitement des préoccupations pour bâtir la confiance. Le comportement décrit (partage actif, coopération) correspond au niveau « soutenant », pas « neutre » ; et les niveaux évoluent, c'est même l'objet de la réévaluation continue.",
      en: 'The unaware risks surprise absent awareness-raising; the resistant calls for addressing concerns to build trust. The described behavior (active sharing, cooperation) matches “supportive”, not “neutral”; and the levels do change — that is the whole point of continuous reassessment.',
    },
  },
  {
    id: 'xc12',
    domain: 'process',
    difficulty: 'hard',
    ecoTask: 'process-02',
    question: {
      fr: "Sélectionnez les DEUX combinaisons méthode/forme correctement associées à leur exemple.",
      en: 'Select the TWO method/form combinations correctly matched to their example.',
    },
    options: [
      { fr: 'Interactive, verbal formel → revue de comité de pilotage', en: 'Interactive, formal verbal → steering committee review' },
      { fr: 'Push, écrit informel → courriel de mise à jour de routine', en: 'Push, informal written → routine status email' },
      { fr: 'Pull, écrit formel → appel téléphonique rapide entre collègues', en: 'Pull, formal written → a quick phone call between colleagues' },
      { fr: 'Push, verbal formel → dépôt de documents sur un portail', en: 'Push, formal verbal → documents posted on a portal' },
    ],
    correct: 0,
    correctMultiple: [0, 1],
    explanation: {
      fr: "Une revue de comité de pilotage est bien une interaction verbale formelle. Un courriel de routine est un push écrit informel. Un appel rapide est une interaction VERBALE informelle (pas pull ni écrit) ; un dépôt sur portail est du PULL écrit (pas push ni verbal) — les deux dernières associations sont incorrectes.",
      en: 'A steering-committee review is indeed a formal verbal interaction. A routine email is an informal written push. A quick call is an informal VERBAL interaction (not pull nor written); a portal upload is written PULL (not push nor verbal) — the last two pairings are wrong.',
    },
  },
]
