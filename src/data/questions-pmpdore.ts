import type { Question } from '../types'

/**
 * Curated "PMP doré" scenario questions. The original import contained 159
 * entries generated from ~8 repeated templates (with inconsistent domain and
 * difficulty labels between copies); after a programmatic similarity audit,
 * only the genuinely unique questions were kept, with corrected metadata.
 * Templates that duplicated existing bank questions (ep03, q01, q12, p01,
 * mp05) were removed entirely.
 */
export const PMPDORE_QUESTIONS: Question[] = [
  {
    id: "pd001",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, une entreprise spécialisée dans l’organisation d’événements, l’équipe prépare son événement annuel destiné aux bénéficiaires d’un fonds de retraite. Depuis trois ans, l’organisation utilise des approches Agile pour planifier et exécuter cet événement. Pendant la phase d’initialisation du projet, le chef de projet analyse les risques potentiels et les opportunités d’amélioration. Afin d’alimenter le registre des risques, il décide d’exploiter les enseignements tirés des éditions précédentes de l’événement. Quel document devrait être utilisé en priorité pour construire ce registre des risques ?",
      en: "At PMP doré, an event management company, the team is preparing its annual event for retirement fund beneficiaries. For three years, the organization has used Agile approaches to plan and execute this event. During the project initiation phase, the project manager analyzes potential risks and opportunities for improvement. To populate the risk register, they decide to leverage lessons learned from previous editions of the event. Which document should be prioritized to build this risk register?"
    },
    options: [
      {
        fr: "Rapports d'itération",
        en: "Iteration reports"
      },
      {
        fr: "Rapports d'avancement du projet",
        en: "Project status reports"
      },
      {
        fr: "Résultats des rétrospectives",
        en: "Retrospective findings"
      },
      {
        fr: "Plans d'itération",
        en: "Iteration plans"
      },
    ],
    correct: 2,
    explanation: {
      fr: "Les résultats des rétrospectives en approche agile sont le meilleur endroit pour analyser les enseignements tirés, les risques et les opportunités d'amélioration identifiés par l'équipe lors des itérations passées.",
      en: "Retrospective findings in agile approaches are the best place to analyze lessons learned, risks, and improvement opportunities identified by the team during past iterations."
    }
  },
  {
    id: "pd002",
    domain: "people",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, un nouveau membre rejoint l’équipe projet. Le chef de projet constate que sa période d’intégration et de formation prend plus de temps que prévu, ce qui commence à affecter la performance globale du projet. Quelle action le chef de projet doit-il entreprendre en priorité pour améliorer la situation ?",
      en: "At PMP doré, a new member joins the project team. The project manager finds that their integration and training period is taking longer than expected, which is starting to affect the overall performance of the project. What action should the project manager take first to improve the situation?"
    },
    options: [
      {
        fr: "Mettre à jour le registre des problèmes et définir une stratégie de réponse afin de suivre et maîtriser l’impact sur le projet.",
        en: "Update the issue log and define a response strategy to track and control the impact on the project."
      },
      {
        fr: "Renforcer la cohésion de l’équipe en encourageant le partage ouvert des connaissances et des expériences.",
        en: "Strengthen team cohesion by encouraging open knowledge and experience sharing."
      },
      {
        fr: "Informer le département des ressources humaines du retard observé dans l’intégration du nouveau collaborateur.",
        en: "Inform the HR department of the observed delay in onboarding the new collaborator."
      },
      {
        fr: "Fournir une formation complémentaire au nouveau membre afin d’accélérer sa montée en compétence.",
        en: "Provide additional training to the new member to accelerate their onboarding/upskilling."
      },
    ],
    correct: 3,
    explanation: {
      fr: "Le chef de projet doit s'assurer que les membres de l'équipe ont les compétences nécessaires. Fournir une formation complémentaire résout directement la cause du problème.",
      en: "The project manager must ensure team members have the necessary skills. Providing additional training directly addresses the root cause of the issue."
    }
  },
  {
    id: "pd003",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Pendant la phase d’exécution d’un projet informatique de santé au sein de PMP doré, les parties prenantes ont formulé une demande de changement concernant les exigences des utilisateurs. Il ne reste aucun budget disponible pour couvrir cette demande de changement. Que doit faire le chef de projet ensuite ?",
      en: "During the execution phase of a healthcare IT project at PMP doré, stakeholders submitted a change request regarding user requirements. No budget is left to cover this change request. What should the project manager do next?"
    },
    options: [
      {
        fr: "Discuter de l’approbation de la demande de changement lors de la prochaine réunion de projet",
        en: "Discuss approval of the change request at the next project meeting"
      },
      {
        fr: "Réaliser une évaluation des risques concernant la demande de changement requise.",
        en: "Perform a risk assessment regarding the required change request."
      },
      {
        fr: "Demander des fonds supplémentaires au sponsor de couvrir la demande de changement",
        en: "Request additional funds from the sponsor to cover the change request"
      },
      {
        fr: "Évaluer la demande de changement par rapport à l’énoncé du périmètre du projet",
        en: "Evaluate the change request against the project scope statement"
      },
    ],
    correct: 1,
    explanation: {
      fr: "Avant de soumettre une demande de changement ou de demander des fonds, le chef de projet doit évaluer ses impacts (y compris sur les risques) pour prendre une décision éclairée.",
      en: "Before submitting a change request or requesting funds, the project manager must assess its impacts (including on risks) to make an informed decision."
    }
  },
  {
    id: "pd020",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, lors d'un projet d'intégration d'un outil CRM, une partie prenante influente demande des fonctionnalités hors périmètre directement à l'équipe. Que doit faire le leader technique ?",
      en: "At PMP doré, during a CRM tool integration project, an influential stakeholder requests out-of-scope features directly from the team. What should the technical lead do?"
    },
    options: [
      {
        fr: "Demander à la partie prenante de soumettre sa demande via le processus de contrôle des changements ou en parler au Product Owner.",
        en: "Ask the stakeholder to submit their request through the change control process or discuss it with the Product Owner."
      },
      {
        fr: "Demander à l'équipe d'implémenter la demande pour conserver de bonnes relations.",
        en: "Ask the team to implement the request to maintain good relations."
      },
      {
        fr: "Escalader immédiatement la demande au sponsor pour faire arbitrer le périmètre.",
        en: "Immediately escalate the request to the sponsor to arbitrate the scope."
      },
      {
        fr: "Ignorer la demande et bloquer toutes les communications futures avec cette partie prenante.",
        en: "Ignore the request and block all future communications with this stakeholder."
      },
    ],
    correct: 0,
    explanation: {
      fr: "Toutes les demandes de changement ou de fonctionnalités hors périmètre doivent être formalisées et évaluées à travers le contrôle des changements (ou le Product Owner en agile) pour éviter la dérive des objectifs.",
      en: "All requests for changes or out-of-scope features must be formalized and evaluated through change control (or the Product Owner in agile) to prevent scope creep."
    }
  },
  {
    id: "pd010",
    domain: "people",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, le client d'un projet de déploiement cloud valide tous les livrables mais refuse de signer le procès-verbal de réception officielle. Quelle est la meilleure action du chef de projet ?",
      en: "At PMP doré, the client of a cloud deployment project validates all deliverables but refuses to sign the official acceptance certificate. What is the best action for the project manager?"
    },
    options: [
      {
        fr: "Rencontrer le client pour comprendre ses réticences à signer formellement et documenter ses réserves éventuelles.",
        en: "Meet with the client to understand their reluctance to sign formally and document any potential reservations."
      },
      {
        fr: "Considérer le projet comme clos unilatéralement puisque les livrables fonctionnent.",
        en: "Consider the project unilaterally closed since the deliverables are functioning."
      },
      {
        fr: "Menacer le client d'interrompre le support technique immédiatement.",
        en: "Threaten the client with immediately stopping technical support."
      },
      {
        fr: "Escalader directement le problème au service juridique de PMP doré.",
        en: "Directly escalate the issue to PMP doré's legal department."
      },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit rechercher la collaboration et comprendre la cause du blocage de signature pour résoudre la situation diplomatiquement.",
      en: "The project manager must seek collaboration and understand the cause of the signature block to resolve the situation diplomatically."
    }
  },
  {
    id: "pd011",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de développement d'une application mobile de paiement souhaite optimiser le processus de déploiement. Quel outil d'amélioration continue le Scrum Master doit-il suggérer ?",
      en: "At PMP doré, the team for a mobile payment app development project wants to optimize the deployment process. Which continuous improvement tool should the Scrum Master suggest?"
    },
    options: [
      {
        fr: "Une rétrospective d'équipe dédiée ou une cartographie de flux de valeur (Value Stream Mapping).",
        en: "A dedicated team retrospective or a Value Stream Mapping workshop."
      },
      {
        fr: "Une revue des performances individuelles des membres de l'équipe.",
        en: "An individual performance review of the team members."
      },
      {
        fr: "Un audit financier externe des coûts de développement.",
        en: "An external financial audit of development costs."
      },
      {
        fr: "La réécriture complète de la charte du projet.",
        en: "A complete rewriting of the project charter."
      },
    ],
    correct: 0,
    explanation: {
      fr: "Les rétrospectives et la cartographie de flux de valeur sont des outils de lean/agile conçus pour analyser les goulots d'étranglement et optimiser les processus continus.",
      en: "Retrospectives and Value Stream Mapping are lean/agile tools designed to analyze bottlenecks and optimize continuous processes."
    }
  },
]
