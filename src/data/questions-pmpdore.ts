import type { Question } from '../types'

/**
 * Custom PMP practice questions set in the fictional company "PMP doré".
 * Covers requested themes: Stakeholder Management, Change Management, Decision Making,
 * Team Leadership, Agile Principles, Quality & Delivery, Lifecycle/Closing, Continuous Improvement.
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
      { fr: "Rapports d'itération", en: "Iteration reports" },
      { fr: "Rapports d'avancement du projet", en: "Project status reports" },
      { fr: "Résultats des rétrospectives", en: "Retrospective findings" },
      { fr: "Plans d'itération", en: "Iteration plans" },
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
      { fr: "Mettre à jour le registre des problèmes et définir une stratégie de réponse afin de suivre et maîtriser l’impact sur le projet.", en: "Update the issue log and define a response strategy to track and control the impact on the project." },
      { fr: "Renforcer la cohésion de l’équipe en encourageant le partage ouvert des connaissances et des expériences.", en: "Strengthen team cohesion by encouraging open knowledge and experience sharing." },
      { fr: "Informer le département des ressources humaines du retard observé dans l’intégration du nouveau collaborateur.", en: "Inform the HR department of the observed delay in onboarding the new collaborator." },
      { fr: "Fournir une formation complémentaire au nouveau membre afin d’accélérer sa montée en compétence.", en: "Provide additional training to the new member to accelerate their onboarding/upskilling." },
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
      { fr: "Discuter de l’approbation de la demande de changement lors de la prochaine réunion de projet", en: "Discuss approval of the change request at the next project meeting" },
      { fr: "Réaliser une évaluation des risques concernant la demande de changement requise.", en: "Perform a risk assessment regarding the required change request." },
      { fr: "Demander des fonds supplémentaires au sponsor de couvrir la demande de changement", en: "Request additional funds from the sponsor to cover the change request" },
      { fr: "Évaluer la demande de changement par rapport à l’énoncé du périmètre du projet", en: "Evaluate the change request against the project scope statement" },
    ],
    correct: 1,
    explanation: {
      fr: "Avant de soumettre une demande de changement ou de demander des fonds, le chef de projet doit évaluer ses impacts (y compris sur les risques) pour prendre une décision éclairée.",
      en: "Before submitting a change request or requesting funds, the project manager must assess its impacts (including on risks) to make an informed decision."
    }
  },
  {
    id: "pd004",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, lors d'un projet de déploiement cloud, une partie prenante influente demande des fonctionnalités hors périmètre directement à l'équipe. Que doit faire le chef de projet ?",
      en: "At PMP doré, during a cloud deployment project, an influential stakeholder requests out-of-scope features directly from the team. What should the project manager do?"
    },
    options: [
      { fr: "Demander à la partie prenante de soumettre sa demande via le processus de contrôle des changements ou en parler au Product Owner.", en: "Ask the stakeholder to submit their request through the change control process or discuss it with the Product Owner." },
      { fr: "Demander à l'équipe d'implémenter la demande pour conserver de bonnes relations.", en: "Ask the team to implement the request to maintain good relations." },
      { fr: "Escalader immédiatement la demande au sponsor pour faire arbitrer le périmètre.", en: "Immediately escalate the request to the sponsor to arbitrate the scope." },
      { fr: "Ignorer la demande et bloquer toutes les communications futures avec cette partie prenante.", en: "Ignore the request and block all future communications with this stakeholder." },
    ],
    correct: 0,
    explanation: {
      fr: "Toutes les demandes de changement ou de fonctionnalités hors périmètre doivent être formalisées et évaluées à travers le contrôle des changements (ou le Product Owner en agile) pour éviter la dérive des objectifs.",
      en: "All requests for changes or out-of-scope features must be formalized and evaluated through change control (or the Product Owner in agile) to prevent scope creep."
    }
  },
  {
    id: "pd005",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, le client d'un projet de développement d'une application mobile de paiement souhaite changer de technologie en milieu d'exécution. Quelle est la première étape que le Scrum Master doit entreprendre ?",
      en: "At PMP doré, the client of a mobile payment app development project wants to switch technologies mid-execution. What is the first step the Scrum Master should take?"
    },
    options: [
      { fr: "Évaluer l'impact technique, financier et calendaire de ce changement technologique avant de prendre une décision.", en: "Evaluate the technical, financial, and schedule impact of this technological shift before making a decision." },
      { fr: "Refuser fermement la demande car le contrat initial est signé et contraignant.", en: "Firmly refuse the request because the initial contract is signed and binding." },
      { fr: "Mettre à jour immédiatement la ligne de base du projet avec la nouvelle technologie.", en: "Immediately update the project baseline with the new technology." },
      { fr: "Demander à l'équipe de développement d'arrêter le projet en attendant l'évaluation.", en: "Ask the development team to stop the project pending the evaluation." },
    ],
    correct: 0,
    explanation: {
      fr: "Tout changement technologique majeur nécessite une analyse d'impact rigoureuse sur tous les aspects du projet afin de guider le comité de décision.",
      en: "Any major technological change requires a rigorous impact analysis on all project aspects to guide the decision-making committee."
    }
  },
  {
    id: "pd006",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de construction d'un nouveau centre de R&D est divisée sur la méthode de test à adopter. Quelle approche de résolution de conflit le Product Owner doit-il favoriser ?",
      en: "At PMP doré, the team for a R&D center construction project is split on the testing method to adopt. Which conflict resolution approach should the Product Owner promote?"
    },
    options: [
      { fr: "La collaboration (ou résolution de problèmes), en confrontant les points de vue pour trouver une solution partagée.", en: "Collaboration (or problem-solving), by confronting viewpoints to find a shared solution." },
      { fr: "Le compromis, en demandant à chacun de renoncer à la moitié de ses exigences.", en: "Compromise, by asking everyone to give up half of their requirements." },
      { fr: "La force (ou coercition), en imposant sa propre décision technique.", en: "Force (or coercion), by imposing their own technical decision." },
      { fr: "L'évitement, en laissant l'équipe résoudre le problème sans intervenir.", en: "Avoidance, by letting the team resolve the issue without intervening." },
    ],
    correct: 0,
    explanation: {
      fr: "La collaboration est la technique la plus constructive de résolution de conflits. Elle permet d'aboutir à une décision consensuelle et durable basée sur les faits.",
      en: "Collaboration is the most constructive conflict resolution technique. It leads to a consensus-based and sustainable decision based on facts."
    }
  },
  {
    id: "pd007",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, lors d'un projet de migration de base de données clients, deux membres clés de l'équipe refusent de collaborer en raison de malentendus interculturels. Que doit faire le sponsor du projet ?",
      en: "At PMP doré, during a customer database migration project, two key team members refuse to collaborate due to cross-cultural misunderstandings. What should the project sponsor do?"
    },
    options: [
      { fr: "Faciliter une discussion ouverte sur les styles de communication et organiser une formation de sensibilisation culturelle.", en: "Facilitate an open discussion on communication styles and organize cultural awareness training." },
      { fr: "Remplacer l'un des membres par un ressource locale pour simplifier le travail.", en: "Replace one of the members with a local resource to simplify the work." },
      { fr: "Leur demander de communiquer uniquement par écrit pour éviter les frictions verbales.", en: "Ask them to communicate only in writing to avoid verbal friction." },
      { fr: "Laisser les ressources gérer leur relation de manière autonome sans interférer.", en: "Let the resources manage their relationship autonomously without interfering." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit faire preuve d'intelligence émotionnelle et encourager la diversité. Faciliter une discussion sur la communication aide à lever les barrières culturelles.",
      en: "The project manager must demonstrate emotional intelligence and encourage diversity. Facilitating a discussion on communication helps remove cultural barriers."
    }
  },
  {
    id: "pd008",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, un membre de l'équipe agile signale un obstacle technique bloquant lors du Daily Standup. Qui est responsable de la résolution de cet obstacle ?",
      en: "At PMP doré, an agile team member reports a blocking technical obstacle during the Daily Standup. Who is responsible for resolving this obstacle?"
    },
    options: [
      { fr: "Le Scrum Master (ou le leader serviteur), qui doit aider à éliminer l'obstacle pour l'équipe.", en: "The Scrum Master (or servant leader), who must help remove the obstacle for the team." },
      { fr: "Le membre de l'équipe lui-même, car l'équipe est auto-organisée.", en: "The team member themselves, as the team is self-organized." },
      { fr: "Le Product Owner, qui gère la priorisation technique des bugs.", en: "The Product Owner, who manages the technical prioritization of bugs." },
      { fr: "Le sponsor du projet, qui alloue les ressources de développement.", en: "The project sponsor, who allocates development resources." },
    ],
    correct: 0,
    explanation: {
      fr: "Le Scrum Master a pour rôle principal de faciliter le travail de l'équipe en éliminant les obstacles et les distractions externes.",
      en: "The Scrum Master's primary role is to facilitate the team's work by removing obstacles and external distractions."
    }
  },
  {
    id: "pd009",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet d'automatisation de la chaîne logistique identifie des défauts répétitifs sur un composant livré. Quelle est la première action corrective à mener ?",
      en: "At PMP doré, the team for a supply chain automation project identifies recurring defects on a delivered component. What is the first corrective action to take?"
    },
    options: [
      { fr: "Mener une analyse de cause racine (diagramme d'Ishikawa/5 Pourquoi) pour identifier la source des défauts.", en: "Conduct a root cause analysis (Ishikawa diagram/5 Whys) to identify the source of the defects." },
      { fr: "Augmenter simplement le temps de test en fin de cycle de développement.", en: "Simply increase testing time at the end of the development cycle." },
      { fr: "Rejeter la faute sur le prestataire externe ayant développé le composant.", en: "Blame the external vendor who developed the component." },
      { fr: "Demander une réévaluation complète du budget qualité du projet.", en: "Request a complete re-evaluation of the project's quality budget." },
    ],
    correct: 0,
    explanation: {
      fr: "Pour corriger durablement les problèmes de qualité, il est indispensable de trouver la cause première (cause racine) plutôt que de traiter uniquement les symptômes.",
      en: "To permanently correct quality issues, it is essential to find the root cause rather than only treating the symptoms."
    }
  },
  {
    id: "pd010",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, le client d'un projet de déploiement cloud valide tous les livrables mais refuse de signer le procès-verbal de réception officielle. Quelle est la meilleure action du chef de projet ?",
      en: "At PMP doré, the client of a cloud deployment project validates all deliverables but refuses to sign the official acceptance certificate. What is the best action for the project manager?"
    },
    options: [
      { fr: "Rencontrer le client pour comprendre ses réticences à signer formellement et documenter ses réserves éventuelles.", en: "Meet with the client to understand their reluctance to sign formally and document any potential reservations." },
      { fr: "Considérer le projet comme clos unilatéralement puisque les livrables fonctionnent.", en: "Consider the project unilaterally closed since the deliverables are functioning." },
      { fr: "Menacer le client d'interrompre le support technique immédiatement.", en: "Threaten the client with immediately stopping technical support." },
      { fr: "Escalader directement le problème au service juridique de PMP doré.", en: "Directly escalate the issue to PMP doré's legal department." },
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
      { fr: "Une rétrospective d'équipe dédiée ou une cartographie de flux de valeur (Value Stream Mapping).", en: "A dedicated team retrospective or a Value Stream Mapping workshop." },
      { fr: "Une revue des performances individuelles des membres de l'équipe.", en: "An individual performance review of the team members." },
      { fr: "Un audit financier externe des coûts de développement.", en: "An external financial audit of development costs." },
      { fr: "La réécriture complète de la charte du projet.", en: "A complete rewriting of the project charter." },
    ],
    correct: 0,
    explanation: {
      fr: "Les rétrospectives et la cartographie de flux de valeur sont des outils de lean/agile conçus pour analyser les goulots d'étranglement et optimiser les processus continus.",
      en: "Retrospectives and Value Stream Mapping are lean/agile tools designed to analyze bottlenecks and optimize continuous processes."
    }
  },
  {
    id: "pd012",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, lors d'un projet de construction d'un nouveau centre de R&D, une partie prenante influente demande des fonctionnalités hors périmètre directement à l'équipe. Que doit faire le Product Owner ?",
      en: "At PMP doré, during a R&D center construction project, an influential stakeholder requests out-of-scope features directly from the team. What should the Product Owner do?"
    },
    options: [
      { fr: "Demander à la partie prenante de soumettre sa demande via le processus de contrôle des changements ou en parler au Product Owner.", en: "Ask the stakeholder to submit their request through the change control process or discuss it with the Product Owner." },
      { fr: "Demander à l'équipe d'implémenter la demande pour conserver de bonnes relations.", en: "Ask the team to implement the request to maintain good relations." },
      { fr: "Escalader immédiatement la demande au sponsor pour faire arbitrer le périmètre.", en: "Immediately escalate the request to the sponsor to arbitrate the scope." },
      { fr: "Ignorer la demande et bloquer toutes les communications futures avec cette partie prenante.", en: "Ignore the request and block all future communications with this stakeholder." },
    ],
    correct: 0,
    explanation: {
      fr: "Toutes les demandes de changement ou de fonctionnalités hors périmètre doivent être formalisées et évaluées à travers le contrôle des changements (ou le Product Owner en agile) pour éviter la dérive des objectifs.",
      en: "All requests for changes or out-of-scope features must be formalized and evaluated through change control (or the Product Owner in agile) to prevent scope creep."
    }
  },
  {
    id: "pd013",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, le client d'un projet de migration de base de données clients souhaite changer de technologie en milieu d'exécution. Quelle est la première étape que le sponsor du projet doit entreprendre ?",
      en: "At PMP doré, the client of a customer database migration project wants to switch technologies mid-execution. What is the first step the project sponsor should take?"
    },
    options: [
      { fr: "Évaluer l'impact technique, financier et calendaire de ce changement technologique avant de prendre une décision.", en: "Evaluate the technical, financial, and schedule impact of this technological shift before making a decision." },
      { fr: "Refuser fermement la demande car le contrat initial est signé et contraignant.", en: "Firmly refuse the request because the initial contract is signed and binding." },
      { fr: "Mettre à jour immédiatement la ligne de base du projet avec la nouvelle technologie.", en: "Immediately update the project baseline with the new technology." },
      { fr: "Demander à l'équipe de développement d'arrêter le projet en attendant l'évaluation.", en: "Ask the development team to stop the project pending the evaluation." },
    ],
    correct: 0,
    explanation: {
      fr: "Tout changement technologique majeur nécessite une analyse d'impact rigoureuse sur tous les aspects du projet afin de guider le comité de décision.",
      en: "Any major technological change requires a rigorous impact analysis on all project aspects to guide the decision-making committee."
    }
  },
  {
    id: "pd014",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet d'intégration d'un outil CRM est divisée sur la méthode de test à adopter. Quelle approche de résolution de conflit le leader technique doit-il favoriser ?",
      en: "At PMP doré, the team for a CRM tool integration project is split on the testing method to adopt. Which conflict resolution approach should the technical lead promote?"
    },
    options: [
      { fr: "La collaboration (ou résolution de problèmes), en confrontant les points de vue pour trouver une solution partagée.", en: "Collaboration (or problem-solving), by confronting viewpoints to find a shared solution." },
      { fr: "Le compromis, en demandant à chacun de renoncer à la moitié de ses exigences.", en: "Compromise, by asking everyone to give up half of their requirements." },
      { fr: "La force (ou coercition), en imposant sa propre décision technique.", en: "Force (or coercion), by imposing their own technical decision." },
      { fr: "L'évitement, en laissant l'équipe résoudre le problème sans intervenir.", en: "Avoidance, by letting the team resolve the issue without intervening." },
    ],
    correct: 0,
    explanation: {
      fr: "La collaboration est la technique la plus constructive de résolution de conflits. Elle permet d'aboutir à une décision consensuelle et durable basée sur les faits.",
      en: "Collaboration is the most constructive conflict resolution technique. It leads to a consensus-based and sustainable decision based on facts."
    }
  },
  {
    id: "pd015",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, lors d'un projet d'automatisation de la chaîne logistique, deux membres clés de l'équipe refusent de collaborer en raison de malentendus interculturels. Que doit faire le facilitateur agile ?",
      en: "At PMP doré, during a supply chain automation project, two key team members refuse to collaborate due to cross-cultural misunderstandings. What should the agile facilitator do?"
    },
    options: [
      { fr: "Faciliter une discussion ouverte sur les styles de communication et organiser une formation de sensibilisation culturelle.", en: "Facilitate an open discussion on communication styles and organize cultural awareness training." },
      { fr: "Remplacer l'un des membres par un ressource locale pour simplifier le travail.", en: "Replace one of the members with a local resource to simplify the work." },
      { fr: "Leur demander de communiquer uniquement par écrit pour éviter les frictions verbales.", en: "Ask them to communicate only in writing to avoid verbal friction." },
      { fr: "Laisser les ressources gérer leur relation de manière autonome sans interférer.", en: "Let the resources manage their relationship autonomously without interfering." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit faire preuve d'intelligence émotionnelle et encourager la diversité. Faciliter une discussion sur la communication aide à lever les barrières culturelles.",
      en: "The project manager must demonstrate emotional intelligence and encourage diversity. Facilitating a discussion on communication helps remove cultural barriers."
    }
  },
  {
    id: "pd016",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, un membre de l'équipe agile signale un obstacle technique bloquant lors du Daily Standup. Qui est responsable de la résolution de cet obstacle ?",
      en: "At PMP doré, an agile team member reports a blocking technical obstacle during the Daily Standup. Who is responsible for resolving this obstacle?"
    },
    options: [
      { fr: "Le Scrum Master (ou le leader serviteur), qui doit aider à éliminer l'obstacle pour l'équipe.", en: "The Scrum Master (or servant leader), who must help remove the obstacle for the team." },
      { fr: "Le membre de l'équipe lui-même, car l'équipe est auto-organisée.", en: "The team member themselves, as the team is self-organized." },
      { fr: "Le Product Owner, qui gère la priorisation technique des bugs.", en: "The Product Owner, who manages the technical prioritization of bugs." },
      { fr: "Le sponsor du projet, qui alloue les ressources de développement.", en: "The project sponsor, who allocates development resources." },
    ],
    correct: 0,
    explanation: {
      fr: "Le Scrum Master a pour rôle principal de faciliter le travail de l'équipe en éliminant les obstacles et les distractions externes.",
      en: "The Scrum Master's primary role is to facilitate the team's work by removing obstacles and external distractions."
    }
  },
  {
    id: "pd017",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de développement d'une application mobile de paiement identifie des défauts répétitifs sur un composant livré. Quelle est la première action corrective à mener ?",
      en: "At PMP doré, the team for a mobile payment app development project identifies recurring defects on a delivered component. What is the first corrective action to take?"
    },
    options: [
      { fr: "Mener une analyse de cause racine (diagramme d'Ishikawa/5 Pourquoi) pour identifier la source des défauts.", en: "Conduct a root cause analysis (Ishikawa diagram/5 Whys) to identify the source of the defects." },
      { fr: "Augmenter simplement le temps de test en fin de cycle de développement.", en: "Simply increase testing time at the end of the development cycle." },
      { fr: "Rejeter la faute sur le prestataire externe ayant développé le composant.", en: "Blame the external vendor who developed the component." },
      { fr: "Demander une réévaluation complète du budget qualité du projet.", en: "Request a complete re-evaluation of the project's quality budget." },
    ],
    correct: 0,
    explanation: {
      fr: "Pour corriger durablement les problèmes de qualité, il est indispensable de trouver la cause première (cause racine) plutôt que de traiter uniquement les symptômes.",
      en: "To permanently correct quality issues, it is essential to find the root cause rather than only treating the symptoms."
    }
  },
  {
    id: "pd018",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, le client d'un projet de construction d'un nouveau centre de R&D valide tous les livrables mais refuse de signer le procès-verbal de réception officielle. Quelle est la meilleure action du Product Owner ?",
      en: "At PMP doré, the client of a R&D center construction project validates all deliverables but refuses to sign the official acceptance certificate. What is the best action for the Product Owner?"
    },
    options: [
      { fr: "Rencontrer le client pour comprendre ses réticences à signer formellement et documenter ses réserves éventuelles.", en: "Meet with the client to understand their reluctance to sign formally and document any potential reservations." },
      { fr: "Considérer le projet comme clos unilatéralement puisque les livrables fonctionnent.", en: "Consider the project unilaterally closed since the deliverables are functioning." },
      { fr: "Menacer le client d'interrompre le support technique immédiatement.", en: "Threaten the client with immediately stopping technical support." },
      { fr: "Escalader directement le problème au service juridique de PMP doré.", en: "Directly escalate the issue to PMP doré's legal department." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit rechercher la collaboration et comprendre la cause du blocage de signature pour résoudre la situation diplomatiquement.",
      en: "The project manager must seek collaboration and understand the cause of the signature block to resolve the situation diplomatically."
    }
  },
  {
    id: "pd019",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de migration de base de données clients souhaite optimiser le processus de déploiement. Quel outil d'amélioration continue le sponsor du projet doit-il suggérer ?",
      en: "At PMP doré, the team for a customer database migration project wants to optimize the deployment process. Which continuous improvement tool should the project sponsor suggest?"
    },
    options: [
      { fr: "Une rétrospective d'équipe dédiée ou une cartographie de flux de valeur (Value Stream Mapping).", en: "A dedicated team retrospective or a Value Stream Mapping workshop." },
      { fr: "Une revue des performances individuelles des membres de l'équipe.", en: "An individual performance review of the team members." },
      { fr: "Un audit financier externe des coûts de développement.", en: "An external financial audit of development costs." },
      { fr: "La réécriture complète de la charte du projet.", en: "A complete rewriting of the project charter." },
    ],
    correct: 0,
    explanation: {
      fr: "Les rétrospectives et la cartographie de flux de valeur sont des outils de lean/agile conçus pour analyser les goulots d'étranglement et optimiser les processus continus.",
      en: "Retrospectives and Value Stream Mapping are lean/agile tools designed to analyze bottlenecks and optimize continuous processes."
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
      { fr: "Demander à la partie prenante de soumettre sa demande via le processus de contrôle des changements ou en parler au Product Owner.", en: "Ask the stakeholder to submit their request through the change control process or discuss it with the Product Owner." },
      { fr: "Demander à l'équipe d'implémenter la demande pour conserver de bonnes relations.", en: "Ask the team to implement the request to maintain good relations." },
      { fr: "Escalader immédiatement la demande au sponsor pour faire arbitrer le périmètre.", en: "Immediately escalate the request to the sponsor to arbitrate the scope." },
      { fr: "Ignorer la demande et bloquer toutes les communications futures avec cette partie prenante.", en: "Ignore the request and block all future communications with this stakeholder." },
    ],
    correct: 0,
    explanation: {
      fr: "Toutes les demandes de changement ou de fonctionnalités hors périmètre doivent être formalisées et évaluées à travers le contrôle des changements (ou le Product Owner en agile) pour éviter la dérive des objectifs.",
      en: "All requests for changes or out-of-scope features must be formalized and evaluated through change control (or the Product Owner in agile) to prevent scope creep."
    }
  },
  {
    id: "pd021",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, le client d'un projet d'automatisation de la chaîne logistique souhaite changer de technologie en milieu d'exécution. Quelle est la première étape que le facilitateur agile doit entreprendre ?",
      en: "At PMP doré, the client of a supply chain automation project wants to switch technologies mid-execution. What is the first step the agile facilitator should take?"
    },
    options: [
      { fr: "Évaluer l'impact technique, financier et calendaire de ce changement technologique avant de prendre une décision.", en: "Evaluate the technical, financial, and schedule impact of this technological shift before making a decision." },
      { fr: "Refuser fermement la demande car le contrat initial est signé et contraignant.", en: "Firmly refuse the request because the initial contract is signed and binding." },
      { fr: "Mettre à jour immédiatement la ligne de base du projet avec la nouvelle technologie.", en: "Immediately update the project baseline with the new technology." },
      { fr: "Demander à l'équipe de développement d'arrêter le projet en attendant l'évaluation.", en: "Ask the development team to stop the project pending the evaluation." },
    ],
    correct: 0,
    explanation: {
      fr: "Tout changement technologique majeur nécessite une analyse d'impact rigoureuse sur tous les aspects du projet afin de guider le comité de décision.",
      en: "Any major technological change requires a rigorous impact analysis on all project aspects to guide the decision-making committee."
    }
  },
  {
    id: "pd022",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de déploiement cloud est divisée sur la méthode de test à adopter. Quelle approche de résolution de conflit le chef de projet doit-il favoriser ?",
      en: "At PMP doré, the team for a cloud deployment project is split on the testing method to adopt. Which conflict resolution approach should the project manager promote?"
    },
    options: [
      { fr: "La collaboration (ou résolution de problèmes), en confrontant les points de vue pour trouver une solution partagée.", en: "Collaboration (or problem-solving), by confronting viewpoints to find a shared solution." },
      { fr: "Le compromis, en demandant à chacun de renoncer à la moitié de ses exigences.", en: "Compromise, by asking everyone to give up half of their requirements." },
      { fr: "La force (ou coercition), en imposant sa propre décision technique.", en: "Force (or coercion), by imposing their own technical decision." },
      { fr: "L'évitement, en laissant l'équipe résoudre le problème sans intervenir.", en: "Avoidance, by letting the team resolve the issue without intervening." },
    ],
    correct: 0,
    explanation: {
      fr: "La collaboration est la technique la plus constructive de résolution de conflits. Elle permet d'aboutir à une décision consensuelle et durable basée sur les faits.",
      en: "Collaboration is the most constructive conflict resolution technique. It leads to a consensus-based and sustainable decision based on facts."
    }
  },
  {
    id: "pd023",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, lors d'un projet de développement d'une application mobile de paiement, deux membres clés de l'équipe refusent de collaborer en raison de malentendus interculturels. Que doit faire le Scrum Master ?",
      en: "At PMP doré, during a mobile payment app development project, two key team members refuse to collaborate due to cross-cultural misunderstandings. What should the Scrum Master do?"
    },
    options: [
      { fr: "Faciliter une discussion ouverte sur les styles de communication et organiser une formation de sensibilisation culturelle.", en: "Facilitate an open discussion on communication styles and organize cultural awareness training." },
      { fr: "Remplacer l'un des membres par un ressource locale pour simplifier le travail.", en: "Replace one of the members with a local resource to simplify the work." },
      { fr: "Leur demander de communiquer uniquement par écrit pour éviter les frictions verbales.", en: "Ask them to communicate only in writing to avoid verbal friction." },
      { fr: "Laisser les ressources gérer leur relation de manière autonome sans interférer.", en: "Let the resources manage their relationship autonomously without interfering." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit faire preuve d'intelligence émotionnelle et encourager la diversité. Faciliter une discussion sur la communication aide à lever les barrières culturelles.",
      en: "The project manager must demonstrate emotional intelligence and encourage diversity. Facilitating a discussion on communication helps remove cultural barriers."
    }
  },
  {
    id: "pd024",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, un membre de l'équipe agile signale un obstacle technique bloquant lors du Daily Standup. Qui est responsable de la résolution de cet obstacle ?",
      en: "At PMP doré, an agile team member reports a blocking technical obstacle during the Daily Standup. Who is responsible for resolving this obstacle?"
    },
    options: [
      { fr: "Le Scrum Master (ou le leader serviteur), qui doit aider à éliminer l'obstacle pour l'équipe.", en: "The Scrum Master (or servant leader), who must help remove the obstacle for the team." },
      { fr: "Le membre de l'équipe lui-même, car l'équipe est auto-organisée.", en: "The team member themselves, as the team is self-organized." },
      { fr: "Le Product Owner, qui gère la priorisation technique des bugs.", en: "The Product Owner, who manages the technical prioritization of bugs." },
      { fr: "Le sponsor du projet, qui alloue les ressources de développement.", en: "The project sponsor, who allocates development resources." },
    ],
    correct: 0,
    explanation: {
      fr: "Le Scrum Master a pour rôle principal de faciliter le travail de l'équipe en éliminant les obstacles et les distractions externes.",
      en: "The Scrum Master's primary role is to facilitate the team's work by removing obstacles and external distractions."
    }
  },
  {
    id: "pd025",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de migration de base de données clients identifie des défauts répétitifs sur un composant livré. Quelle est la première action corrective à mener ?",
      en: "At PMP doré, the team for a customer database migration project identifies recurring defects on a delivered component. What is the first corrective action to take?"
    },
    options: [
      { fr: "Mener une analyse de cause racine (diagramme d'Ishikawa/5 Pourquoi) pour identifier la source des défauts.", en: "Conduct a root cause analysis (Ishikawa diagram/5 Whys) to identify the source of the defects." },
      { fr: "Augmenter simplement le temps de test en fin de cycle de développement.", en: "Simply increase testing time at the end of the development cycle." },
      { fr: "Rejeter la faute sur le prestataire externe ayant développé le composant.", en: "Blame the external vendor who developed the component." },
      { fr: "Demander une réévaluation complète du budget qualité du projet.", en: "Request a complete re-evaluation of the project's quality budget." },
    ],
    correct: 0,
    explanation: {
      fr: "Pour corriger durablement les problèmes de qualité, il est indispensable de trouver la cause première (cause racine) plutôt que de traiter uniquement les symptômes.",
      en: "To permanently correct quality issues, it is essential to find the root cause rather than only treating the symptoms."
    }
  },
  {
    id: "pd026",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, le client d'un projet d'intégration d'un outil CRM valide tous les livrables mais refuse de signer le procès-verbal de réception officielle. Quelle est la meilleure action du leader technique ?",
      en: "At PMP doré, the client of a CRM tool integration project validates all deliverables but refuses to sign the official acceptance certificate. What is the best action for the technical lead?"
    },
    options: [
      { fr: "Rencontrer le client pour comprendre ses réticences à signer formellement et documenter ses réserves éventuelles.", en: "Meet with the client to understand their reluctance to sign formally and document any potential reservations." },
      { fr: "Considérer le projet comme clos unilatéralement puisque les livrables fonctionnent.", en: "Consider the project unilaterally closed since the deliverables are functioning." },
      { fr: "Menacer le client d'interrompre le support technique immédiatement.", en: "Threaten the client with immediately stopping technical support." },
      { fr: "Escalader directement le problème au service juridique de PMP doré.", en: "Directly escalate the issue to PMP doré's legal department." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit rechercher la collaboration et comprendre la cause du blocage de signature pour résoudre la situation diplomatiquement.",
      en: "The project manager must seek collaboration and understand the cause of the signature block to resolve the situation diplomatically."
    }
  },
  {
    id: "pd027",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet d'automatisation de la chaîne logistique souhaite optimiser le processus de déploiement. Quel outil d'amélioration continue le facilitateur agile doit-il suggérer ?",
      en: "At PMP doré, the team for a supply chain automation project wants to optimize the deployment process. Which continuous improvement tool should the agile facilitator suggest?"
    },
    options: [
      { fr: "Une rétrospective d'équipe dédiée ou une cartographie de flux de valeur (Value Stream Mapping).", en: "A dedicated team retrospective or a Value Stream Mapping workshop." },
      { fr: "Une revue des performances individuelles des membres de l'équipe.", en: "An individual performance review of the team members." },
      { fr: "Un audit financier externe des coûts de développement.", en: "An external financial audit of development costs." },
      { fr: "La réécriture complète de la charte du projet.", en: "A complete rewriting of the project charter." },
    ],
    correct: 0,
    explanation: {
      fr: "Les rétrospectives et la cartographie de flux de valeur sont des outils de lean/agile conçus pour analyser les goulots d'étranglement et optimiser les processus continus.",
      en: "Retrospectives and Value Stream Mapping are lean/agile tools designed to analyze bottlenecks and optimize continuous processes."
    }
  },
  {
    id: "pd028",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, lors d'un projet de déploiement cloud, une partie prenante influente demande des fonctionnalités hors périmètre directement à l'équipe. Que doit faire le chef de projet ?",
      en: "At PMP doré, during a cloud deployment project, an influential stakeholder requests out-of-scope features directly from the team. What should the project manager do?"
    },
    options: [
      { fr: "Demander à la partie prenante de soumettre sa demande via le processus de contrôle des changements ou en parler au Product Owner.", en: "Ask the stakeholder to submit their request through the change control process or discuss it with the Product Owner." },
      { fr: "Demander à l'équipe d'implémenter la demande pour conserver de bonnes relations.", en: "Ask the team to implement the request to maintain good relations." },
      { fr: "Escalader immédiatement la demande au sponsor pour faire arbitrer le périmètre.", en: "Immediately escalate the request to the sponsor to arbitrate the scope." },
      { fr: "Ignorer la demande et bloquer toutes les communications futures avec cette partie prenante.", en: "Ignore the request and block all future communications with this stakeholder." },
    ],
    correct: 0,
    explanation: {
      fr: "Toutes les demandes de changement ou de fonctionnalités hors périmètre doivent être formalisées et évaluées à travers le contrôle des changements (ou le Product Owner en agile) pour éviter la dérive des objectifs.",
      en: "All requests for changes or out-of-scope features must be formalized and evaluated through change control (or the Product Owner in agile) to prevent scope creep."
    }
  },
  {
    id: "pd029",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, le client d'un projet de développement d'une application mobile de paiement souhaite changer de technologie en milieu d'exécution. Quelle est la première étape que le Scrum Master doit entreprendre ?",
      en: "At PMP doré, the client of a mobile payment app development project wants to switch technologies mid-execution. What is the first step the Scrum Master should take?"
    },
    options: [
      { fr: "Évaluer l'impact technique, financier et calendaire de ce changement technologique avant de prendre une décision.", en: "Evaluate the technical, financial, and schedule impact of this technological shift before making a decision." },
      { fr: "Refuser fermement la demande car le contrat initial est signé et contraignant.", en: "Firmly refuse the request because the initial contract is signed and binding." },
      { fr: "Mettre à jour immédiatement la ligne de base du projet avec la nouvelle technologie.", en: "Immediately update the project baseline with the new technology." },
      { fr: "Demander à l'équipe de développement d'arrêter le projet en attendant l'évaluation.", en: "Ask the development team to stop the project pending the evaluation." },
    ],
    correct: 0,
    explanation: {
      fr: "Tout changement technologique majeur nécessite une analyse d'impact rigoureuse sur tous les aspects du projet afin de guider le comité de décision.",
      en: "Any major technological change requires a rigorous impact analysis on all project aspects to guide the decision-making committee."
    }
  },
  {
    id: "pd030",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de construction d'un nouveau centre de R&D est divisée sur la méthode de test à adopter. Quelle approche de résolution de conflit le Product Owner doit-il favoriser ?",
      en: "At PMP doré, the team for a R&D center construction project is split on the testing method to adopt. Which conflict resolution approach should the Product Owner promote?"
    },
    options: [
      { fr: "La collaboration (ou résolution de problèmes), en confrontant les points de vue pour trouver une solution partagée.", en: "Collaboration (or problem-solving), by confronting viewpoints to find a shared solution." },
      { fr: "Le compromis, en demandant à chacun de renoncer à la moitié de ses exigences.", en: "Compromise, by asking everyone to give up half of their requirements." },
      { fr: "La force (ou coercition), en imposant sa propre décision technique.", en: "Force (or coercion), by imposing their own technical decision." },
      { fr: "L'évitement, en laissant l'équipe résoudre le problème sans intervenir.", en: "Avoidance, by letting the team resolve the issue without intervening." },
    ],
    correct: 0,
    explanation: {
      fr: "La collaboration est la technique la plus constructive de résolution de conflits. Elle permet d'aboutir à une décision consensuelle et durable basée sur les faits.",
      en: "Collaboration is the most constructive conflict resolution technique. It leads to a consensus-based and sustainable decision based on facts."
    }
  },
  {
    id: "pd031",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, lors d'un projet de migration de base de données clients, deux membres clés de l'équipe refusent de collaborer en raison de malentendus interculturels. Que doit faire le sponsor du projet ?",
      en: "At PMP doré, during a customer database migration project, two key team members refuse to collaborate due to cross-cultural misunderstandings. What should the project sponsor do?"
    },
    options: [
      { fr: "Faciliter une discussion ouverte sur les styles de communication et organiser une formation de sensibilisation culturelle.", en: "Facilitate an open discussion on communication styles and organize cultural awareness training." },
      { fr: "Remplacer l'un des membres par un ressource locale pour simplifier le travail.", en: "Replace one of the members with a local resource to simplify the work." },
      { fr: "Leur demander de communiquer uniquement par écrit pour éviter les frictions verbales.", en: "Ask them to communicate only in writing to avoid verbal friction." },
      { fr: "Laisser les ressources gérer leur relation de manière autonome sans interférer.", en: "Let the resources manage their relationship autonomously without interfering." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit faire preuve d'intelligence émotionnelle et encourager la diversité. Faciliter une discussion sur la communication aide à lever les barrières culturelles.",
      en: "The project manager must demonstrate emotional intelligence and encourage diversity. Facilitating a discussion on communication helps remove cultural barriers."
    }
  },
  {
    id: "pd032",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, un membre de l'équipe agile signale un obstacle technique bloquant lors du Daily Standup. Qui est responsable de la résolution de cet obstacle ?",
      en: "At PMP doré, an agile team member reports a blocking technical obstacle during the Daily Standup. Who is responsible for resolving this obstacle?"
    },
    options: [
      { fr: "Le Scrum Master (ou le leader serviteur), qui doit aider à éliminer l'obstacle pour l'équipe.", en: "The Scrum Master (or servant leader), who must help remove the obstacle for the team." },
      { fr: "Le membre de l'équipe lui-même, car l'équipe est auto-organisée.", en: "The team member themselves, as the team is self-organized." },
      { fr: "Le Product Owner, qui gère la priorisation technique des bugs.", en: "The Product Owner, who manages the technical prioritization of bugs." },
      { fr: "Le sponsor du projet, qui alloue les ressources de développement.", en: "The project sponsor, who allocates development resources." },
    ],
    correct: 0,
    explanation: {
      fr: "Le Scrum Master a pour rôle principal de faciliter le travail de l'équipe en éliminant les obstacles et les distractions externes.",
      en: "The Scrum Master's primary role is to facilitate the team's work by removing obstacles and external distractions."
    }
  },
  {
    id: "pd033",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet d'automatisation de la chaîne logistique identifie des défauts répétitifs sur un composant livré. Quelle est la première action corrective à mener ?",
      en: "At PMP doré, the team for a supply chain automation project identifies recurring defects on a delivered component. What is the first corrective action to take?"
    },
    options: [
      { fr: "Mener une analyse de cause racine (diagramme d'Ishikawa/5 Pourquoi) pour identifier la source des défauts.", en: "Conduct a root cause analysis (Ishikawa diagram/5 Whys) to identify the source of the defects." },
      { fr: "Augmenter simplement le temps de test en fin de cycle de développement.", en: "Simply increase testing time at the end of the development cycle." },
      { fr: "Rejeter la faute sur le prestataire externe ayant développé le composant.", en: "Blame the external vendor who developed the component." },
      { fr: "Demander une réévaluation complète du budget qualité du projet.", en: "Request a complete re-evaluation of the project's quality budget." },
    ],
    correct: 0,
    explanation: {
      fr: "Pour corriger durablement les problèmes de qualité, il est indispensable de trouver la cause première (cause racine) plutôt que de traiter uniquement les symptômes.",
      en: "To permanently correct quality issues, it is essential to find the root cause rather than only treating the symptoms."
    }
  },
  {
    id: "pd034",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, le client d'un projet de déploiement cloud valide tous les livrables mais refuse de signer le procès-verbal de réception officielle. Quelle est la meilleure action du chef de projet ?",
      en: "At PMP doré, the client of a cloud deployment project validates all deliverables but refuses to sign the official acceptance certificate. What is the best action for the project manager?"
    },
    options: [
      { fr: "Rencontrer le client pour comprendre ses réticences à signer formellement et documenter ses réserves éventuelles.", en: "Meet with the client to understand their reluctance to sign formally and document any potential reservations." },
      { fr: "Considérer le projet comme clos unilatéralement puisque les livrables fonctionnent.", en: "Consider the project unilaterally closed since the deliverables are functioning." },
      { fr: "Menacer le client d'interrompre le support technique immédiatement.", en: "Threaten the client with immediately stopping technical support." },
      { fr: "Escalader directement le problème au service juridique de PMP doré.", en: "Directly escalate the issue to PMP doré's legal department." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit rechercher la collaboration et comprendre la cause du blocage de signature pour résoudre la situation diplomatiquement.",
      en: "The project manager must seek collaboration and understand the cause of the signature block to resolve the situation diplomatically."
    }
  },
  {
    id: "pd035",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de développement d'une application mobile de paiement souhaite optimiser le processus de déploiement. Quel outil d'amélioration continue le Scrum Master doit-il suggérer ?",
      en: "At PMP doré, the team for a mobile payment app development project wants to optimize the deployment process. Which continuous improvement tool should the Scrum Master suggest?"
    },
    options: [
      { fr: "Une rétrospective d'équipe dédiée ou une cartographie de flux de valeur (Value Stream Mapping).", en: "A dedicated team retrospective or a Value Stream Mapping workshop." },
      { fr: "Une revue des performances individuelles des membres de l'équipe.", en: "An individual performance review of the team members." },
      { fr: "Un audit financier externe des coûts de développement.", en: "An external financial audit of development costs." },
      { fr: "La réécriture complète de la charte du projet.", en: "A complete rewriting of the project charter." },
    ],
    correct: 0,
    explanation: {
      fr: "Les rétrospectives et la cartographie de flux de valeur sont des outils de lean/agile conçus pour analyser les goulots d'étranglement et optimiser les processus continus.",
      en: "Retrospectives and Value Stream Mapping are lean/agile tools designed to analyze bottlenecks and optimize continuous processes."
    }
  },
  {
    id: "pd036",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, lors d'un projet de construction d'un nouveau centre de R&D, une partie prenante influente demande des fonctionnalités hors périmètre directement à l'équipe. Que doit faire le Product Owner ?",
      en: "At PMP doré, during a R&D center construction project, an influential stakeholder requests out-of-scope features directly from the team. What should the Product Owner do?"
    },
    options: [
      { fr: "Demander à la partie prenante de soumettre sa demande via le processus de contrôle des changements ou en parler au Product Owner.", en: "Ask the stakeholder to submit their request through the change control process or discuss it with the Product Owner." },
      { fr: "Demander à l'équipe d'implémenter la demande pour conserver de bonnes relations.", en: "Ask the team to implement the request to maintain good relations." },
      { fr: "Escalader immédiatement la demande au sponsor pour faire arbitrer le périmètre.", en: "Immediately escalate the request to the sponsor to arbitrate the scope." },
      { fr: "Ignorer la demande et bloquer toutes les communications futures avec cette partie prenante.", en: "Ignore the request and block all future communications with this stakeholder." },
    ],
    correct: 0,
    explanation: {
      fr: "Toutes les demandes de changement ou de fonctionnalités hors périmètre doivent être formalisées et évaluées à travers le contrôle des changements (ou le Product Owner en agile) pour éviter la dérive des objectifs.",
      en: "All requests for changes or out-of-scope features must be formalized and evaluated through change control (or the Product Owner in agile) to prevent scope creep."
    }
  },
  {
    id: "pd037",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, le client d'un projet de migration de base de données clients souhaite changer de technologie en milieu d'exécution. Quelle est la première étape que le sponsor du projet doit entreprendre ?",
      en: "At PMP doré, the client of a customer database migration project wants to switch technologies mid-execution. What is the first step the project sponsor should take?"
    },
    options: [
      { fr: "Évaluer l'impact technique, financier et calendaire de ce changement technologique avant de prendre une décision.", en: "Evaluate the technical, financial, and schedule impact of this technological shift before making a decision." },
      { fr: "Refuser fermement la demande car le contrat initial est signé et contraignant.", en: "Firmly refuse the request because the initial contract is signed and binding." },
      { fr: "Mettre à jour immédiatement la ligne de base du projet avec la nouvelle technologie.", en: "Immediately update the project baseline with the new technology." },
      { fr: "Demander à l'équipe de développement d'arrêter le projet en attendant l'évaluation.", en: "Ask the development team to stop the project pending the evaluation." },
    ],
    correct: 0,
    explanation: {
      fr: "Tout changement technologique majeur nécessite une analyse d'impact rigoureuse sur tous les aspects du projet afin de guider le comité de décision.",
      en: "Any major technological change requires a rigorous impact analysis on all project aspects to guide the decision-making committee."
    }
  },
  {
    id: "pd038",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet d'intégration d'un outil CRM est divisée sur la méthode de test à adopter. Quelle approche de résolution de conflit le leader technique doit-il favoriser ?",
      en: "At PMP doré, the team for a CRM tool integration project is split on the testing method to adopt. Which conflict resolution approach should the technical lead promote?"
    },
    options: [
      { fr: "La collaboration (ou résolution de problèmes), en confrontant les points de vue pour trouver une solution partagée.", en: "Collaboration (or problem-solving), by confronting viewpoints to find a shared solution." },
      { fr: "Le compromis, en demandant à chacun de renoncer à la moitié de ses exigences.", en: "Compromise, by asking everyone to give up half of their requirements." },
      { fr: "La force (ou coercition), en imposant sa propre décision technique.", en: "Force (or coercion), by imposing their own technical decision." },
      { fr: "L'évitement, en laissant l'équipe résoudre le problème sans intervenir.", en: "Avoidance, by letting the team resolve the issue without intervening." },
    ],
    correct: 0,
    explanation: {
      fr: "La collaboration est la technique la plus constructive de résolution de conflits. Elle permet d'aboutir à une décision consensuelle et durable basée sur les faits.",
      en: "Collaboration is the most constructive conflict resolution technique. It leads to a consensus-based and sustainable decision based on facts."
    }
  },
  {
    id: "pd039",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, lors d'un projet d'automatisation de la chaîne logistique, deux membres clés de l'équipe refusent de collaborer en raison de malentendus interculturels. Que doit faire le facilitateur agile ?",
      en: "At PMP doré, during a supply chain automation project, two key team members refuse to collaborate due to cross-cultural misunderstandings. What should the agile facilitator do?"
    },
    options: [
      { fr: "Faciliter une discussion ouverte sur les styles de communication et organiser une formation de sensibilisation culturelle.", en: "Facilitate an open discussion on communication styles and organize cultural awareness training." },
      { fr: "Remplacer l'un des membres par un ressource locale pour simplifier le travail.", en: "Replace one of the members with a local resource to simplify the work." },
      { fr: "Leur demander de communiquer uniquement par écrit pour éviter les frictions verbales.", en: "Ask them to communicate only in writing to avoid verbal friction." },
      { fr: "Laisser les ressources gérer leur relation de manière autonome sans interférer.", en: "Let the resources manage their relationship autonomously without interfering." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit faire preuve d'intelligence émotionnelle et encourager la diversité. Faciliter une discussion sur la communication aide à lever les barrières culturelles.",
      en: "The project manager must demonstrate emotional intelligence and encourage diversity. Facilitating a discussion on communication helps remove cultural barriers."
    }
  },
  {
    id: "pd040",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, un membre de l'équipe agile signale un obstacle technique bloquant lors du Daily Standup. Qui est responsable de la résolution de cet obstacle ?",
      en: "At PMP doré, an agile team member reports a blocking technical obstacle during the Daily Standup. Who is responsible for resolving this obstacle?"
    },
    options: [
      { fr: "Le Scrum Master (ou le leader serviteur), qui doit aider à éliminer l'obstacle pour l'équipe.", en: "The Scrum Master (or servant leader), who must help remove the obstacle for the team." },
      { fr: "Le membre de l'équipe lui-même, car l'équipe est auto-organisée.", en: "The team member themselves, as the team is self-organized." },
      { fr: "Le Product Owner, qui gère la priorisation technique des bugs.", en: "The Product Owner, who manages the technical prioritization of bugs." },
      { fr: "Le sponsor du projet, qui alloue les ressources de développement.", en: "The project sponsor, who allocates development resources." },
    ],
    correct: 0,
    explanation: {
      fr: "Le Scrum Master a pour rôle principal de faciliter le travail de l'équipe en éliminant les obstacles et les distractions externes.",
      en: "The Scrum Master's primary role is to facilitate the team's work by removing obstacles and external distractions."
    }
  },
  {
    id: "pd041",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de développement d'une application mobile de paiement identifie des défauts répétitifs sur un composant livré. Quelle est la première action corrective à mener ?",
      en: "At PMP doré, the team for a mobile payment app development project identifies recurring defects on a delivered component. What is the first corrective action to take?"
    },
    options: [
      { fr: "Mener une analyse de cause racine (diagramme d'Ishikawa/5 Pourquoi) pour identifier la source des défauts.", en: "Conduct a root cause analysis (Ishikawa diagram/5 Whys) to identify the source of the defects." },
      { fr: "Augmenter simplement le temps de test en fin de cycle de développement.", en: "Simply increase testing time at the end of the development cycle." },
      { fr: "Rejeter la faute sur le prestataire externe ayant développé le composant.", en: "Blame the external vendor who developed the component." },
      { fr: "Demander une réévaluation complète du budget qualité du projet.", en: "Request a complete re-evaluation of the project's quality budget." },
    ],
    correct: 0,
    explanation: {
      fr: "Pour corriger durablement les problèmes de qualité, il est indispensable de trouver la cause première (cause racine) plutôt que de traiter uniquement les symptômes.",
      en: "To permanently correct quality issues, it is essential to find the root cause rather than only treating the symptoms."
    }
  },
  {
    id: "pd042",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, le client d'un projet de construction d'un nouveau centre de R&D valide tous les livrables mais refuse de signer le procès-verbal de réception officielle. Quelle est la meilleure action du Product Owner ?",
      en: "At PMP doré, the client of a R&D center construction project validates all deliverables but refuses to sign the official acceptance certificate. What is the best action for the Product Owner?"
    },
    options: [
      { fr: "Rencontrer le client pour comprendre ses réticences à signer formellement et documenter ses réserves éventuelles.", en: "Meet with the client to understand their reluctance to sign formally and document any potential reservations." },
      { fr: "Considérer le projet comme clos unilatéralement puisque les livrables fonctionnent.", en: "Consider the project unilaterally closed since the deliverables are functioning." },
      { fr: "Menacer le client d'interrompre le support technique immédiatement.", en: "Threaten the client with immediately stopping technical support." },
      { fr: "Escalader directement le problème au service juridique de PMP doré.", en: "Directly escalate the issue to PMP doré's legal department." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit rechercher la collaboration et comprendre la cause du blocage de signature pour résoudre la situation diplomatiquement.",
      en: "The project manager must seek collaboration and understand the cause of the signature block to resolve the situation diplomatically."
    }
  },
  {
    id: "pd043",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de migration de base de données clients souhaite optimiser le processus de déploiement. Quel outil d'amélioration continue le sponsor du projet doit-il suggérer ?",
      en: "At PMP doré, the team for a customer database migration project wants to optimize the deployment process. Which continuous improvement tool should the project sponsor suggest?"
    },
    options: [
      { fr: "Une rétrospective d'équipe dédiée ou une cartographie de flux de valeur (Value Stream Mapping).", en: "A dedicated team retrospective or a Value Stream Mapping workshop." },
      { fr: "Une revue des performances individuelles des membres de l'équipe.", en: "An individual performance review of the team members." },
      { fr: "Un audit financier externe des coûts de développement.", en: "An external financial audit of development costs." },
      { fr: "La réécriture complète de la charte du projet.", en: "A complete rewriting of the project charter." },
    ],
    correct: 0,
    explanation: {
      fr: "Les rétrospectives et la cartographie de flux de valeur sont des outils de lean/agile conçus pour analyser les goulots d'étranglement et optimiser les processus continus.",
      en: "Retrospectives and Value Stream Mapping are lean/agile tools designed to analyze bottlenecks and optimize continuous processes."
    }
  },
  {
    id: "pd044",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, lors d'un projet d'intégration d'un outil CRM, une partie prenante influente demande des fonctionnalités hors périmètre directement à l'équipe. Que doit faire le leader technique ?",
      en: "At PMP doré, during a CRM tool integration project, an influential stakeholder requests out-of-scope features directly from the team. What should the technical lead do?"
    },
    options: [
      { fr: "Demander à la partie prenante de soumettre sa demande via le processus de contrôle des changements ou en parler au Product Owner.", en: "Ask the stakeholder to submit their request through the change control process or discuss it with the Product Owner." },
      { fr: "Demander à l'équipe d'implémenter la demande pour conserver de bonnes relations.", en: "Ask the team to implement the request to maintain good relations." },
      { fr: "Escalader immédiatement la demande au sponsor pour faire arbitrer le périmètre.", en: "Immediately escalate the request to the sponsor to arbitrate the scope." },
      { fr: "Ignorer la demande et bloquer toutes les communications futures avec cette partie prenante.", en: "Ignore the request and block all future communications with this stakeholder." },
    ],
    correct: 0,
    explanation: {
      fr: "Toutes les demandes de changement ou de fonctionnalités hors périmètre doivent être formalisées et évaluées à travers le contrôle des changements (ou le Product Owner en agile) pour éviter la dérive des objectifs.",
      en: "All requests for changes or out-of-scope features must be formalized and evaluated through change control (or the Product Owner in agile) to prevent scope creep."
    }
  },
  {
    id: "pd045",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, le client d'un projet d'automatisation de la chaîne logistique souhaite changer de technologie en milieu d'exécution. Quelle est la première étape que le facilitateur agile doit entreprendre ?",
      en: "At PMP doré, the client of a supply chain automation project wants to switch technologies mid-execution. What is the first step the agile facilitator should take?"
    },
    options: [
      { fr: "Évaluer l'impact technique, financier et calendaire de ce changement technologique avant de prendre une décision.", en: "Evaluate the technical, financial, and schedule impact of this technological shift before making a decision." },
      { fr: "Refuser fermement la demande car le contrat initial est signé et contraignant.", en: "Firmly refuse the request because the initial contract is signed and binding." },
      { fr: "Mettre à jour immédiatement la ligne de base du projet avec la nouvelle technologie.", en: "Immediately update the project baseline with the new technology." },
      { fr: "Demander à l'équipe de développement d'arrêter le projet en attendant l'évaluation.", en: "Ask the development team to stop the project pending the evaluation." },
    ],
    correct: 0,
    explanation: {
      fr: "Tout changement technologique majeur nécessite une analyse d'impact rigoureuse sur tous les aspects du projet afin de guider le comité de décision.",
      en: "Any major technological change requires a rigorous impact analysis on all project aspects to guide the decision-making committee."
    }
  },
  {
    id: "pd046",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de déploiement cloud est divisée sur la méthode de test à adopter. Quelle approche de résolution de conflit le chef de projet doit-il favoriser ?",
      en: "At PMP doré, the team for a cloud deployment project is split on the testing method to adopt. Which conflict resolution approach should the project manager promote?"
    },
    options: [
      { fr: "La collaboration (ou résolution de problèmes), en confrontant les points de vue pour trouver une solution partagée.", en: "Collaboration (or problem-solving), by confronting viewpoints to find a shared solution." },
      { fr: "Le compromis, en demandant à chacun de renoncer à la moitié de ses exigences.", en: "Compromise, by asking everyone to give up half of their requirements." },
      { fr: "La force (ou coercition), en imposant sa propre décision technique.", en: "Force (or coercion), by imposing their own technical decision." },
      { fr: "L'évitement, en laissant l'équipe résoudre le problème sans intervenir.", en: "Avoidance, by letting the team resolve the issue without intervening." },
    ],
    correct: 0,
    explanation: {
      fr: "La collaboration est la technique la plus constructive de résolution de conflits. Elle permet d'aboutir à une décision consensuelle et durable basée sur les faits.",
      en: "Collaboration is the most constructive conflict resolution technique. It leads to a consensus-based and sustainable decision based on facts."
    }
  },
  {
    id: "pd047",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, lors d'un projet de développement d'une application mobile de paiement, deux membres clés de l'équipe refusent de collaborer en raison de malentendus interculturels. Que doit faire le Scrum Master ?",
      en: "At PMP doré, during a mobile payment app development project, two key team members refuse to collaborate due to cross-cultural misunderstandings. What should the Scrum Master do?"
    },
    options: [
      { fr: "Faciliter une discussion ouverte sur les styles de communication et organiser une formation de sensibilisation culturelle.", en: "Facilitate an open discussion on communication styles and organize cultural awareness training." },
      { fr: "Remplacer l'un des membres par un ressource locale pour simplifier le travail.", en: "Replace one of the members with a local resource to simplify the work." },
      { fr: "Leur demander de communiquer uniquement par écrit pour éviter les frictions verbales.", en: "Ask them to communicate only in writing to avoid verbal friction." },
      { fr: "Laisser les ressources gérer leur relation de manière autonome sans interférer.", en: "Let the resources manage their relationship autonomously without interfering." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit faire preuve d'intelligence émotionnelle et encourager la diversité. Faciliter une discussion sur la communication aide à lever les barrières culturelles.",
      en: "The project manager must demonstrate emotional intelligence and encourage diversity. Facilitating a discussion on communication helps remove cultural barriers."
    }
  },
  {
    id: "pd048",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, un membre de l'équipe agile signale un obstacle technique bloquant lors du Daily Standup. Qui est responsable de la résolution de cet obstacle ?",
      en: "At PMP doré, an agile team member reports a blocking technical obstacle during the Daily Standup. Who is responsible for resolving this obstacle?"
    },
    options: [
      { fr: "Le Scrum Master (ou le leader serviteur), qui doit aider à éliminer l'obstacle pour l'équipe.", en: "The Scrum Master (or servant leader), who must help remove the obstacle for the team." },
      { fr: "Le membre de l'équipe lui-même, car l'équipe est auto-organisée.", en: "The team member themselves, as the team is self-organized." },
      { fr: "Le Product Owner, qui gère la priorisation technique des bugs.", en: "The Product Owner, who manages the technical prioritization of bugs." },
      { fr: "Le sponsor du projet, qui alloue les ressources de développement.", en: "The project sponsor, who allocates development resources." },
    ],
    correct: 0,
    explanation: {
      fr: "Le Scrum Master a pour rôle principal de faciliter le travail de l'équipe en éliminant les obstacles et les distractions externes.",
      en: "The Scrum Master's primary role is to facilitate the team's work by removing obstacles and external distractions."
    }
  },
  {
    id: "pd049",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de migration de base de données clients identifie des défauts répétitifs sur un composant livré. Quelle est la première action corrective à mener ?",
      en: "At PMP doré, the team for a customer database migration project identifies recurring defects on a delivered component. What is the first corrective action to take?"
    },
    options: [
      { fr: "Mener une analyse de cause racine (diagramme d'Ishikawa/5 Pourquoi) pour identifier la source des défauts.", en: "Conduct a root cause analysis (Ishikawa diagram/5 Whys) to identify the source of the defects." },
      { fr: "Augmenter simplement le temps de test en fin de cycle de développement.", en: "Simply increase testing time at the end of the development cycle." },
      { fr: "Rejeter la faute sur le prestataire externe ayant développé le composant.", en: "Blame the external vendor who developed the component." },
      { fr: "Demander une réévaluation complète du budget qualité du projet.", en: "Request a complete re-evaluation of the project's quality budget." },
    ],
    correct: 0,
    explanation: {
      fr: "Pour corriger durablement les problèmes de qualité, il est indispensable de trouver la cause première (cause racine) plutôt que de traiter uniquement les symptômes.",
      en: "To permanently correct quality issues, it is essential to find the root cause rather than only treating the symptoms."
    }
  },
  {
    id: "pd050",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, le client d'un projet d'intégration d'un outil CRM valide tous les livrables mais refuse de signer le procès-verbal de réception officielle. Quelle est la meilleure action du leader technique ?",
      en: "At PMP doré, the client of a CRM tool integration project validates all deliverables but refuses to sign the official acceptance certificate. What is the best action for the technical lead?"
    },
    options: [
      { fr: "Rencontrer le client pour comprendre ses réticences à signer formellement et documenter ses réserves éventuelles.", en: "Meet with the client to understand their reluctance to sign formally and document any potential reservations." },
      { fr: "Considérer le projet comme clos unilatéralement puisque les livrables fonctionnent.", en: "Consider the project unilaterally closed since the deliverables are functioning." },
      { fr: "Menacer le client d'interrompre le support technique immédiatement.", en: "Threaten the client with immediately stopping technical support." },
      { fr: "Escalader directement le problème au service juridique de PMP doré.", en: "Directly escalate the issue to PMP doré's legal department." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit rechercher la collaboration et comprendre la cause du blocage de signature pour résoudre la situation diplomatiquement.",
      en: "The project manager must seek collaboration and understand the cause of the signature block to resolve the situation diplomatically."
    }
  },
  {
    id: "pd051",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet d'automatisation de la chaîne logistique souhaite optimiser le processus de déploiement. Quel outil d'amélioration continue le facilitateur agile doit-il suggérer ?",
      en: "At PMP doré, the team for a supply chain automation project wants to optimize the deployment process. Which continuous improvement tool should the agile facilitator suggest?"
    },
    options: [
      { fr: "Une rétrospective d'équipe dédiée ou une cartographie de flux de valeur (Value Stream Mapping).", en: "A dedicated team retrospective or a Value Stream Mapping workshop." },
      { fr: "Une revue des performances individuelles des membres de l'équipe.", en: "An individual performance review of the team members." },
      { fr: "Un audit financier externe des coûts de développement.", en: "An external financial audit of development costs." },
      { fr: "La réécriture complète de la charte du projet.", en: "A complete rewriting of the project charter." },
    ],
    correct: 0,
    explanation: {
      fr: "Les rétrospectives et la cartographie de flux de valeur sont des outils de lean/agile conçus pour analyser les goulots d'étranglement et optimiser les processus continus.",
      en: "Retrospectives and Value Stream Mapping are lean/agile tools designed to analyze bottlenecks and optimize continuous processes."
    }
  },
  {
    id: "pd052",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, lors d'un projet de déploiement cloud, une partie prenante influente demande des fonctionnalités hors périmètre directement à l'équipe. Que doit faire le chef de projet ?",
      en: "At PMP doré, during a cloud deployment project, an influential stakeholder requests out-of-scope features directly from the team. What should the project manager do?"
    },
    options: [
      { fr: "Demander à la partie prenante de soumettre sa demande via le processus de contrôle des changements ou en parler au Product Owner.", en: "Ask the stakeholder to submit their request through the change control process or discuss it with the Product Owner." },
      { fr: "Demander à l'équipe d'implémenter la demande pour conserver de bonnes relations.", en: "Ask the team to implement the request to maintain good relations." },
      { fr: "Escalader immédiatement la demande au sponsor pour faire arbitrer le périmètre.", en: "Immediately escalate the request to the sponsor to arbitrate the scope." },
      { fr: "Ignorer la demande et bloquer toutes les communications futures avec cette partie prenante.", en: "Ignore the request and block all future communications with this stakeholder." },
    ],
    correct: 0,
    explanation: {
      fr: "Toutes les demandes de changement ou de fonctionnalités hors périmètre doivent être formalisées et évaluées à travers le contrôle des changements (ou le Product Owner en agile) pour éviter la dérive des objectifs.",
      en: "All requests for changes or out-of-scope features must be formalized and evaluated through change control (or the Product Owner in agile) to prevent scope creep."
    }
  },
  {
    id: "pd053",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, le client d'un projet de développement d'une application mobile de paiement souhaite changer de technologie en milieu d'exécution. Quelle est la première étape que le Scrum Master doit entreprendre ?",
      en: "At PMP doré, the client of a mobile payment app development project wants to switch technologies mid-execution. What is the first step the Scrum Master should take?"
    },
    options: [
      { fr: "Évaluer l'impact technique, financier et calendaire de ce changement technologique avant de prendre une décision.", en: "Evaluate the technical, financial, and schedule impact of this technological shift before making a decision." },
      { fr: "Refuser fermement la demande car le contrat initial est signé et contraignant.", en: "Firmly refuse the request because the initial contract is signed and binding." },
      { fr: "Mettre à jour immédiatement la ligne de base du projet avec la nouvelle technologie.", en: "Immediately update the project baseline with the new technology." },
      { fr: "Demander à l'équipe de développement d'arrêter le projet en attendant l'évaluation.", en: "Ask the development team to stop the project pending the evaluation." },
    ],
    correct: 0,
    explanation: {
      fr: "Tout changement technologique majeur nécessite une analyse d'impact rigoureuse sur tous les aspects du projet afin de guider le comité de décision.",
      en: "Any major technological change requires a rigorous impact analysis on all project aspects to guide the decision-making committee."
    }
  },
  {
    id: "pd054",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de construction d'un nouveau centre de R&D est divisée sur la méthode de test à adopter. Quelle approche de résolution de conflit le Product Owner doit-il favoriser ?",
      en: "At PMP doré, the team for a R&D center construction project is split on the testing method to adopt. Which conflict resolution approach should the Product Owner promote?"
    },
    options: [
      { fr: "La collaboration (ou résolution de problèmes), en confrontant les points de vue pour trouver une solution partagée.", en: "Collaboration (or problem-solving), by confronting viewpoints to find a shared solution." },
      { fr: "Le compromis, en demandant à chacun de renoncer à la moitié de ses exigences.", en: "Compromise, by asking everyone to give up half of their requirements." },
      { fr: "La force (ou coercition), en imposant sa propre décision technique.", en: "Force (or coercion), by imposing their own technical decision." },
      { fr: "L'évitement, en laissant l'équipe résoudre le problème sans intervenir.", en: "Avoidance, by letting the team resolve the issue without intervening." },
    ],
    correct: 0,
    explanation: {
      fr: "La collaboration est la technique la plus constructive de résolution de conflits. Elle permet d'aboutir à une décision consensuelle et durable basée sur les faits.",
      en: "Collaboration is the most constructive conflict resolution technique. It leads to a consensus-based and sustainable decision based on facts."
    }
  },
  {
    id: "pd055",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, lors d'un projet de migration de base de données clients, deux membres clés de l'équipe refusent de collaborer en raison de malentendus interculturels. Que doit faire le sponsor du projet ?",
      en: "At PMP doré, during a customer database migration project, two key team members refuse to collaborate due to cross-cultural misunderstandings. What should the project sponsor do?"
    },
    options: [
      { fr: "Faciliter une discussion ouverte sur les styles de communication et organiser une formation de sensibilisation culturelle.", en: "Facilitate an open discussion on communication styles and organize cultural awareness training." },
      { fr: "Remplacer l'un des membres par un ressource locale pour simplifier le travail.", en: "Replace one of the members with a local resource to simplify the work." },
      { fr: "Leur demander de communiquer uniquement par écrit pour éviter les frictions verbales.", en: "Ask them to communicate only in writing to avoid verbal friction." },
      { fr: "Laisser les ressources gérer leur relation de manière autonome sans interférer.", en: "Let the resources manage their relationship autonomously without interfering." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit faire preuve d'intelligence émotionnelle et encourager la diversité. Faciliter une discussion sur la communication aide à lever les barrières culturelles.",
      en: "The project manager must demonstrate emotional intelligence and encourage diversity. Facilitating a discussion on communication helps remove cultural barriers."
    }
  },
  {
    id: "pd056",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, un membre de l'équipe agile signale un obstacle technique bloquant lors du Daily Standup. Qui est responsable de la résolution de cet obstacle ?",
      en: "At PMP doré, an agile team member reports a blocking technical obstacle during the Daily Standup. Who is responsible for resolving this obstacle?"
    },
    options: [
      { fr: "Le Scrum Master (ou le leader serviteur), qui doit aider à éliminer l'obstacle pour l'équipe.", en: "The Scrum Master (or servant leader), who must help remove the obstacle for the team." },
      { fr: "Le membre de l'équipe lui-même, car l'équipe est auto-organisée.", en: "The team member themselves, as the team is self-organized." },
      { fr: "Le Product Owner, qui gère la priorisation technique des bugs.", en: "The Product Owner, who manages the technical prioritization of bugs." },
      { fr: "Le sponsor du projet, qui alloue les ressources de développement.", en: "The project sponsor, who allocates development resources." },
    ],
    correct: 0,
    explanation: {
      fr: "Le Scrum Master a pour rôle principal de faciliter le travail de l'équipe en éliminant les obstacles et les distractions externes.",
      en: "The Scrum Master's primary role is to facilitate the team's work by removing obstacles and external distractions."
    }
  },
  {
    id: "pd057",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet d'automatisation de la chaîne logistique identifie des défauts répétitifs sur un composant livré. Quelle est la première action corrective à mener ?",
      en: "At PMP doré, the team for a supply chain automation project identifies recurring defects on a delivered component. What is the first corrective action to take?"
    },
    options: [
      { fr: "Mener une analyse de cause racine (diagramme d'Ishikawa/5 Pourquoi) pour identifier la source des défauts.", en: "Conduct a root cause analysis (Ishikawa diagram/5 Whys) to identify the source of the defects." },
      { fr: "Augmenter simplement le temps de test en fin de cycle de développement.", en: "Simply increase testing time at the end of the development cycle." },
      { fr: "Rejeter la faute sur le prestataire externe ayant développé le composant.", en: "Blame the external vendor who developed the component." },
      { fr: "Demander une réévaluation complète du budget qualité du projet.", en: "Request a complete re-evaluation of the project's quality budget." },
    ],
    correct: 0,
    explanation: {
      fr: "Pour corriger durablement les problèmes de qualité, il est indispensable de trouver la cause première (cause racine) plutôt que de traiter uniquement les symptômes.",
      en: "To permanently correct quality issues, it is essential to find the root cause rather than only treating the symptoms."
    }
  },
  {
    id: "pd058",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, le client d'un projet de déploiement cloud valide tous les livrables mais refuse de signer le procès-verbal de réception officielle. Quelle est la meilleure action du chef de projet ?",
      en: "At PMP doré, the client of a cloud deployment project validates all deliverables but refuses to sign the official acceptance certificate. What is the best action for the project manager?"
    },
    options: [
      { fr: "Rencontrer le client pour comprendre ses réticences à signer formellement et documenter ses réserves éventuelles.", en: "Meet with the client to understand their reluctance to sign formally and document any potential reservations." },
      { fr: "Considérer le projet comme clos unilatéralement puisque les livrables fonctionnent.", en: "Consider the project unilaterally closed since the deliverables are functioning." },
      { fr: "Menacer le client d'interrompre le support technique immédiatement.", en: "Threaten the client with immediately stopping technical support." },
      { fr: "Escalader directement le problème au service juridique de PMP doré.", en: "Directly escalate the issue to PMP doré's legal department." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit rechercher la collaboration et comprendre la cause du blocage de signature pour résoudre la situation diplomatiquement.",
      en: "The project manager must seek collaboration and understand the cause of the signature block to resolve the situation diplomatically."
    }
  },
  {
    id: "pd059",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de développement d'une application mobile de paiement souhaite optimiser le processus de déploiement. Quel outil d'amélioration continue le Scrum Master doit-il suggérer ?",
      en: "At PMP doré, the team for a mobile payment app development project wants to optimize the deployment process. Which continuous improvement tool should the Scrum Master suggest?"
    },
    options: [
      { fr: "Une rétrospective d'équipe dédiée ou une cartographie de flux de valeur (Value Stream Mapping).", en: "A dedicated team retrospective or a Value Stream Mapping workshop." },
      { fr: "Une revue des performances individuelles des membres de l'équipe.", en: "An individual performance review of the team members." },
      { fr: "Un audit financier externe des coûts de développement.", en: "An external financial audit of development costs." },
      { fr: "La réécriture complète de la charte du projet.", en: "A complete rewriting of the project charter." },
    ],
    correct: 0,
    explanation: {
      fr: "Les rétrospectives et la cartographie de flux de valeur sont des outils de lean/agile conçus pour analyser les goulots d'étranglement et optimiser les processus continus.",
      en: "Retrospectives and Value Stream Mapping are lean/agile tools designed to analyze bottlenecks and optimize continuous processes."
    }
  },
  {
    id: "pd060",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, lors d'un projet de construction d'un nouveau centre de R&D, une partie prenante influente demande des fonctionnalités hors périmètre directement à l'équipe. Que doit faire le Product Owner ?",
      en: "At PMP doré, during a R&D center construction project, an influential stakeholder requests out-of-scope features directly from the team. What should the Product Owner do?"
    },
    options: [
      { fr: "Demander à la partie prenante de soumettre sa demande via le processus de contrôle des changements ou en parler au Product Owner.", en: "Ask the stakeholder to submit their request through the change control process or discuss it with the Product Owner." },
      { fr: "Demander à l'équipe d'implémenter la demande pour conserver de bonnes relations.", en: "Ask the team to implement the request to maintain good relations." },
      { fr: "Escalader immédiatement la demande au sponsor pour faire arbitrer le périmètre.", en: "Immediately escalate the request to the sponsor to arbitrate the scope." },
      { fr: "Ignorer la demande et bloquer toutes les communications futures avec cette partie prenante.", en: "Ignore the request and block all future communications with this stakeholder." },
    ],
    correct: 0,
    explanation: {
      fr: "Toutes les demandes de changement ou de fonctionnalités hors périmètre doivent être formalisées et évaluées à travers le contrôle des changements (ou le Product Owner en agile) pour éviter la dérive des objectifs.",
      en: "All requests for changes or out-of-scope features must be formalized and evaluated through change control (or the Product Owner in agile) to prevent scope creep."
    }
  },
  {
    id: "pd061",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, le client d'un projet de migration de base de données clients souhaite changer de technologie en milieu d'exécution. Quelle est la première étape que le sponsor du projet doit entreprendre ?",
      en: "At PMP doré, the client of a customer database migration project wants to switch technologies mid-execution. What is the first step the project sponsor should take?"
    },
    options: [
      { fr: "Évaluer l'impact technique, financier et calendaire de ce changement technologique avant de prendre une décision.", en: "Evaluate the technical, financial, and schedule impact of this technological shift before making a decision." },
      { fr: "Refuser fermement la demande car le contrat initial est signé et contraignant.", en: "Firmly refuse the request because the initial contract is signed and binding." },
      { fr: "Mettre à jour immédiatement la ligne de base du projet avec la nouvelle technologie.", en: "Immediately update the project baseline with the new technology." },
      { fr: "Demander à l'équipe de développement d'arrêter le projet en attendant l'évaluation.", en: "Ask the development team to stop the project pending the evaluation." },
    ],
    correct: 0,
    explanation: {
      fr: "Tout changement technologique majeur nécessite une analyse d'impact rigoureuse sur tous les aspects du projet afin de guider le comité de décision.",
      en: "Any major technological change requires a rigorous impact analysis on all project aspects to guide the decision-making committee."
    }
  },
  {
    id: "pd062",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet d'intégration d'un outil CRM est divisée sur la méthode de test à adopter. Quelle approche de résolution de conflit le leader technique doit-il favoriser ?",
      en: "At PMP doré, the team for a CRM tool integration project is split on the testing method to adopt. Which conflict resolution approach should the technical lead promote?"
    },
    options: [
      { fr: "La collaboration (ou résolution de problèmes), en confrontant les points de vue pour trouver une solution partagée.", en: "Collaboration (or problem-solving), by confronting viewpoints to find a shared solution." },
      { fr: "Le compromis, en demandant à chacun de renoncer à la moitié de ses exigences.", en: "Compromise, by asking everyone to give up half of their requirements." },
      { fr: "La force (ou coercition), en imposant sa propre décision technique.", en: "Force (or coercion), by imposing their own technical decision." },
      { fr: "L'évitement, en laissant l'équipe résoudre le problème sans intervenir.", en: "Avoidance, by letting the team resolve the issue without intervening." },
    ],
    correct: 0,
    explanation: {
      fr: "La collaboration est la technique la plus constructive de résolution de conflits. Elle permet d'aboutir à une décision consensuelle et durable basée sur les faits.",
      en: "Collaboration is the most constructive conflict resolution technique. It leads to a consensus-based and sustainable decision based on facts."
    }
  },
  {
    id: "pd063",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, lors d'un projet d'automatisation de la chaîne logistique, deux membres clés de l'équipe refusent de collaborer en raison de malentendus interculturels. Que doit faire le facilitateur agile ?",
      en: "At PMP doré, during a supply chain automation project, two key team members refuse to collaborate due to cross-cultural misunderstandings. What should the agile facilitator do?"
    },
    options: [
      { fr: "Faciliter une discussion ouverte sur les styles de communication et organiser une formation de sensibilisation culturelle.", en: "Facilitate an open discussion on communication styles and organize cultural awareness training." },
      { fr: "Remplacer l'un des membres par un ressource locale pour simplifier le travail.", en: "Replace one of the members with a local resource to simplify the work." },
      { fr: "Leur demander de communiquer uniquement par écrit pour éviter les frictions verbales.", en: "Ask them to communicate only in writing to avoid verbal friction." },
      { fr: "Laisser les ressources gérer leur relation de manière autonome sans interférer.", en: "Let the resources manage their relationship autonomously without interfering." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit faire preuve d'intelligence émotionnelle et encourager la diversité. Faciliter une discussion sur la communication aide à lever les barrières culturelles.",
      en: "The project manager must demonstrate emotional intelligence and encourage diversity. Facilitating a discussion on communication helps remove cultural barriers."
    }
  },
  {
    id: "pd064",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, un membre de l'équipe agile signale un obstacle technique bloquant lors du Daily Standup. Qui est responsable de la résolution de cet obstacle ?",
      en: "At PMP doré, an agile team member reports a blocking technical obstacle during the Daily Standup. Who is responsible for resolving this obstacle?"
    },
    options: [
      { fr: "Le Scrum Master (ou le leader serviteur), qui doit aider à éliminer l'obstacle pour l'équipe.", en: "The Scrum Master (or servant leader), who must help remove the obstacle for the team." },
      { fr: "Le membre de l'équipe lui-même, car l'équipe est auto-organisée.", en: "The team member themselves, as the team is self-organized." },
      { fr: "Le Product Owner, qui gère la priorisation technique des bugs.", en: "The Product Owner, who manages the technical prioritization of bugs." },
      { fr: "Le sponsor du projet, qui alloue les ressources de développement.", en: "The project sponsor, who allocates development resources." },
    ],
    correct: 0,
    explanation: {
      fr: "Le Scrum Master a pour rôle principal de faciliter le travail de l'équipe en éliminant les obstacles et les distractions externes.",
      en: "The Scrum Master's primary role is to facilitate the team's work by removing obstacles and external distractions."
    }
  },
  {
    id: "pd065",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de développement d'une application mobile de paiement identifie des défauts répétitifs sur un composant livré. Quelle est la première action corrective à mener ?",
      en: "At PMP doré, the team for a mobile payment app development project identifies recurring defects on a delivered component. What is the first corrective action to take?"
    },
    options: [
      { fr: "Mener une analyse de cause racine (diagramme d'Ishikawa/5 Pourquoi) pour identifier la source des défauts.", en: "Conduct a root cause analysis (Ishikawa diagram/5 Whys) to identify the source of the defects." },
      { fr: "Augmenter simplement le temps de test en fin de cycle de développement.", en: "Simply increase testing time at the end of the development cycle." },
      { fr: "Rejeter la faute sur le prestataire externe ayant développé le composant.", en: "Blame the external vendor who developed the component." },
      { fr: "Demander une réévaluation complète du budget qualité du projet.", en: "Request a complete re-evaluation of the project's quality budget." },
    ],
    correct: 0,
    explanation: {
      fr: "Pour corriger durablement les problèmes de qualité, il est indispensable de trouver la cause première (cause racine) plutôt que de traiter uniquement les symptômes.",
      en: "To permanently correct quality issues, it is essential to find the root cause rather than only treating the symptoms."
    }
  },
  {
    id: "pd066",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, le client d'un projet de construction d'un nouveau centre de R&D valide tous les livrables mais refuse de signer le procès-verbal de réception officielle. Quelle est la meilleure action du Product Owner ?",
      en: "At PMP doré, the client of a R&D center construction project validates all deliverables but refuses to sign the official acceptance certificate. What is the best action for the Product Owner?"
    },
    options: [
      { fr: "Rencontrer le client pour comprendre ses réticences à signer formellement et documenter ses réserves éventuelles.", en: "Meet with the client to understand their reluctance to sign formally and document any potential reservations." },
      { fr: "Considérer le projet comme clos unilatéralement puisque les livrables fonctionnent.", en: "Consider the project unilaterally closed since the deliverables are functioning." },
      { fr: "Menacer le client d'interrompre le support technique immédiatement.", en: "Threaten the client with immediately stopping technical support." },
      { fr: "Escalader directement le problème au service juridique de PMP doré.", en: "Directly escalate the issue to PMP doré's legal department." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit rechercher la collaboration et comprendre la cause du blocage de signature pour résoudre la situation diplomatiquement.",
      en: "The project manager must seek collaboration and understand the cause of the signature block to resolve the situation diplomatically."
    }
  },
  {
    id: "pd067",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de migration de base de données clients souhaite optimiser le processus de déploiement. Quel outil d'amélioration continue le sponsor du projet doit-il suggérer ?",
      en: "At PMP doré, the team for a customer database migration project wants to optimize the deployment process. Which continuous improvement tool should the project sponsor suggest?"
    },
    options: [
      { fr: "Une rétrospective d'équipe dédiée ou une cartographie de flux de valeur (Value Stream Mapping).", en: "A dedicated team retrospective or a Value Stream Mapping workshop." },
      { fr: "Une revue des performances individuelles des membres de l'équipe.", en: "An individual performance review of the team members." },
      { fr: "Un audit financier externe des coûts de développement.", en: "An external financial audit of development costs." },
      { fr: "La réécriture complète de la charte du projet.", en: "A complete rewriting of the project charter." },
    ],
    correct: 0,
    explanation: {
      fr: "Les rétrospectives et la cartographie de flux de valeur sont des outils de lean/agile conçus pour analyser les goulots d'étranglement et optimiser les processus continus.",
      en: "Retrospectives and Value Stream Mapping are lean/agile tools designed to analyze bottlenecks and optimize continuous processes."
    }
  },
  {
    id: "pd068",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, lors d'un projet d'intégration d'un outil CRM, une partie prenante influente demande des fonctionnalités hors périmètre directement à l'équipe. Que doit faire le leader technique ?",
      en: "At PMP doré, during a CRM tool integration project, an influential stakeholder requests out-of-scope features directly from the team. What should the technical lead do?"
    },
    options: [
      { fr: "Demander à la partie prenante de soumettre sa demande via le processus de contrôle des changements ou en parler au Product Owner.", en: "Ask the stakeholder to submit their request through the change control process or discuss it with the Product Owner." },
      { fr: "Demander à l'équipe d'implémenter la demande pour conserver de bonnes relations.", en: "Ask the team to implement the request to maintain good relations." },
      { fr: "Escalader immédiatement la demande au sponsor pour faire arbitrer le périmètre.", en: "Immediately escalate the request to the sponsor to arbitrate the scope." },
      { fr: "Ignorer la demande et bloquer toutes les communications futures avec cette partie prenante.", en: "Ignore the request and block all future communications with this stakeholder." },
    ],
    correct: 0,
    explanation: {
      fr: "Toutes les demandes de changement ou de fonctionnalités hors périmètre doivent être formalisées et évaluées à travers le contrôle des changements (ou le Product Owner en agile) pour éviter la dérive des objectifs.",
      en: "All requests for changes or out-of-scope features must be formalized and evaluated through change control (or the Product Owner in agile) to prevent scope creep."
    }
  },
  {
    id: "pd069",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, le client d'un projet d'automatisation de la chaîne logistique souhaite changer de technologie en milieu d'exécution. Quelle est la première étape que le facilitateur agile doit entreprendre ?",
      en: "At PMP doré, the client of a supply chain automation project wants to switch technologies mid-execution. What is the first step the agile facilitator should take?"
    },
    options: [
      { fr: "Évaluer l'impact technique, financier et calendaire de ce changement technologique avant de prendre une décision.", en: "Evaluate the technical, financial, and schedule impact of this technological shift before making a decision." },
      { fr: "Refuser fermement la demande car le contrat initial est signé et contraignant.", en: "Firmly refuse the request because the initial contract is signed and binding." },
      { fr: "Mettre à jour immédiatement la ligne de base du projet avec la nouvelle technologie.", en: "Immediately update the project baseline with the new technology." },
      { fr: "Demander à l'équipe de développement d'arrêter le projet en attendant l'évaluation.", en: "Ask the development team to stop the project pending the evaluation." },
    ],
    correct: 0,
    explanation: {
      fr: "Tout changement technologique majeur nécessite une analyse d'impact rigoureuse sur tous les aspects du projet afin de guider le comité de décision.",
      en: "Any major technological change requires a rigorous impact analysis on all project aspects to guide the decision-making committee."
    }
  },
  {
    id: "pd070",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de déploiement cloud est divisée sur la méthode de test à adopter. Quelle approche de résolution de conflit le chef de projet doit-il favoriser ?",
      en: "At PMP doré, the team for a cloud deployment project is split on the testing method to adopt. Which conflict resolution approach should the project manager promote?"
    },
    options: [
      { fr: "La collaboration (ou résolution de problèmes), en confrontant les points de vue pour trouver une solution partagée.", en: "Collaboration (or problem-solving), by confronting viewpoints to find a shared solution." },
      { fr: "Le compromis, en demandant à chacun de renoncer à la moitié de ses exigences.", en: "Compromise, by asking everyone to give up half of their requirements." },
      { fr: "La force (ou coercition), en imposant sa propre décision technique.", en: "Force (or coercion), by imposing their own technical decision." },
      { fr: "L'évitement, en laissant l'équipe résoudre le problème sans intervenir.", en: "Avoidance, by letting the team resolve the issue without intervening." },
    ],
    correct: 0,
    explanation: {
      fr: "La collaboration est la technique la plus constructive de résolution de conflits. Elle permet d'aboutir à une décision consensuelle et durable basée sur les faits.",
      en: "Collaboration is the most constructive conflict resolution technique. It leads to a consensus-based and sustainable decision based on facts."
    }
  },
  {
    id: "pd071",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, lors d'un projet de développement d'une application mobile de paiement, deux membres clés de l'équipe refusent de collaborer en raison de malentendus interculturels. Que doit faire le Scrum Master ?",
      en: "At PMP doré, during a mobile payment app development project, two key team members refuse to collaborate due to cross-cultural misunderstandings. What should the Scrum Master do?"
    },
    options: [
      { fr: "Faciliter une discussion ouverte sur les styles de communication et organiser une formation de sensibilisation culturelle.", en: "Facilitate an open discussion on communication styles and organize cultural awareness training." },
      { fr: "Remplacer l'un des membres par un ressource locale pour simplifier le travail.", en: "Replace one of the members with a local resource to simplify the work." },
      { fr: "Leur demander de communiquer uniquement par écrit pour éviter les frictions verbales.", en: "Ask them to communicate only in writing to avoid verbal friction." },
      { fr: "Laisser les ressources gérer leur relation de manière autonome sans interférer.", en: "Let the resources manage their relationship autonomously without interfering." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit faire preuve d'intelligence émotionnelle et encourager la diversité. Faciliter une discussion sur la communication aide à lever les barrières culturelles.",
      en: "The project manager must demonstrate emotional intelligence and encourage diversity. Facilitating a discussion on communication helps remove cultural barriers."
    }
  },
  {
    id: "pd072",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, un membre de l'équipe agile signale un obstacle technique bloquant lors du Daily Standup. Qui est responsable de la résolution de cet obstacle ?",
      en: "At PMP doré, an agile team member reports a blocking technical obstacle during the Daily Standup. Who is responsible for resolving this obstacle?"
    },
    options: [
      { fr: "Le Scrum Master (ou le leader serviteur), qui doit aider à éliminer l'obstacle pour l'équipe.", en: "The Scrum Master (or servant leader), who must help remove the obstacle for the team." },
      { fr: "Le membre de l'équipe lui-même, car l'équipe est auto-organisée.", en: "The team member themselves, as the team is self-organized." },
      { fr: "Le Product Owner, qui gère la priorisation technique des bugs.", en: "The Product Owner, who manages the technical prioritization of bugs." },
      { fr: "Le sponsor du projet, qui alloue les ressources de développement.", en: "The project sponsor, who allocates development resources." },
    ],
    correct: 0,
    explanation: {
      fr: "Le Scrum Master a pour rôle principal de faciliter le travail de l'équipe en éliminant les obstacles et les distractions externes.",
      en: "The Scrum Master's primary role is to facilitate the team's work by removing obstacles and external distractions."
    }
  },
  {
    id: "pd073",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de migration de base de données clients identifie des défauts répétitifs sur un composant livré. Quelle est la première action corrective à mener ?",
      en: "At PMP doré, the team for a customer database migration project identifies recurring defects on a delivered component. What is the first corrective action to take?"
    },
    options: [
      { fr: "Mener une analyse de cause racine (diagramme d'Ishikawa/5 Pourquoi) pour identifier la source des défauts.", en: "Conduct a root cause analysis (Ishikawa diagram/5 Whys) to identify the source of the defects." },
      { fr: "Augmenter simplement le temps de test en fin de cycle de développement.", en: "Simply increase testing time at the end of the development cycle." },
      { fr: "Rejeter la faute sur le prestataire externe ayant développé le composant.", en: "Blame the external vendor who developed the component." },
      { fr: "Demander une réévaluation complète du budget qualité du projet.", en: "Request a complete re-evaluation of the project's quality budget." },
    ],
    correct: 0,
    explanation: {
      fr: "Pour corriger durablement les problèmes de qualité, il est indispensable de trouver la cause première (cause racine) plutôt que de traiter uniquement les symptômes.",
      en: "To permanently correct quality issues, it is essential to find the root cause rather than only treating the symptoms."
    }
  },
  {
    id: "pd074",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, le client d'un projet d'intégration d'un outil CRM valide tous les livrables mais refuse de signer le procès-verbal de réception officielle. Quelle est la meilleure action du leader technique ?",
      en: "At PMP doré, the client of a CRM tool integration project validates all deliverables but refuses to sign the official acceptance certificate. What is the best action for the technical lead?"
    },
    options: [
      { fr: "Rencontrer le client pour comprendre ses réticences à signer formellement et documenter ses réserves éventuelles.", en: "Meet with the client to understand their reluctance to sign formally and document any potential reservations." },
      { fr: "Considérer le projet comme clos unilatéralement puisque les livrables fonctionnent.", en: "Consider the project unilaterally closed since the deliverables are functioning." },
      { fr: "Menacer le client d'interrompre le support technique immédiatement.", en: "Threaten the client with immediately stopping technical support." },
      { fr: "Escalader directement le problème au service juridique de PMP doré.", en: "Directly escalate the issue to PMP doré's legal department." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit rechercher la collaboration et comprendre la cause du blocage de signature pour résoudre la situation diplomatiquement.",
      en: "The project manager must seek collaboration and understand the cause of the signature block to resolve the situation diplomatically."
    }
  },
  {
    id: "pd075",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet d'automatisation de la chaîne logistique souhaite optimiser le processus de déploiement. Quel outil d'amélioration continue le facilitateur agile doit-il suggérer ?",
      en: "At PMP doré, the team for a supply chain automation project wants to optimize the deployment process. Which continuous improvement tool should the agile facilitator suggest?"
    },
    options: [
      { fr: "Une rétrospective d'équipe dédiée ou une cartographie de flux de valeur (Value Stream Mapping).", en: "A dedicated team retrospective or a Value Stream Mapping workshop." },
      { fr: "Une revue des performances individuelles des membres de l'équipe.", en: "An individual performance review of the team members." },
      { fr: "Un audit financier externe des coûts de développement.", en: "An external financial audit of development costs." },
      { fr: "La réécriture complète de la charte du projet.", en: "A complete rewriting of the project charter." },
    ],
    correct: 0,
    explanation: {
      fr: "Les rétrospectives et la cartographie de flux de valeur sont des outils de lean/agile conçus pour analyser les goulots d'étranglement et optimiser les processus continus.",
      en: "Retrospectives and Value Stream Mapping are lean/agile tools designed to analyze bottlenecks and optimize continuous processes."
    }
  },
  {
    id: "pd076",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, lors d'un projet de déploiement cloud, une partie prenante influente demande des fonctionnalités hors périmètre directement à l'équipe. Que doit faire le chef de projet ?",
      en: "At PMP doré, during a cloud deployment project, an influential stakeholder requests out-of-scope features directly from the team. What should the project manager do?"
    },
    options: [
      { fr: "Demander à la partie prenante de soumettre sa demande via le processus de contrôle des changements ou en parler au Product Owner.", en: "Ask the stakeholder to submit their request through the change control process or discuss it with the Product Owner." },
      { fr: "Demander à l'équipe d'implémenter la demande pour conserver de bonnes relations.", en: "Ask the team to implement the request to maintain good relations." },
      { fr: "Escalader immédiatement la demande au sponsor pour faire arbitrer le périmètre.", en: "Immediately escalate the request to the sponsor to arbitrate the scope." },
      { fr: "Ignorer la demande et bloquer toutes les communications futures avec cette partie prenante.", en: "Ignore the request and block all future communications with this stakeholder." },
    ],
    correct: 0,
    explanation: {
      fr: "Toutes les demandes de changement ou de fonctionnalités hors périmètre doivent être formalisées et évaluées à travers le contrôle des changements (ou le Product Owner en agile) pour éviter la dérive des objectifs.",
      en: "All requests for changes or out-of-scope features must be formalized and evaluated through change control (or the Product Owner in agile) to prevent scope creep."
    }
  },
  {
    id: "pd077",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, le client d'un projet de développement d'une application mobile de paiement souhaite changer de technologie en milieu d'exécution. Quelle est la première étape que le Scrum Master doit entreprendre ?",
      en: "At PMP doré, the client of a mobile payment app development project wants to switch technologies mid-execution. What is the first step the Scrum Master should take?"
    },
    options: [
      { fr: "Évaluer l'impact technique, financier et calendaire de ce changement technologique avant de prendre une décision.", en: "Evaluate the technical, financial, and schedule impact of this technological shift before making a decision." },
      { fr: "Refuser fermement la demande car le contrat initial est signé et contraignant.", en: "Firmly refuse the request because the initial contract is signed and binding." },
      { fr: "Mettre à jour immédiatement la ligne de base du projet avec la nouvelle technologie.", en: "Immediately update the project baseline with the new technology." },
      { fr: "Demander à l'équipe de développement d'arrêter le projet en attendant l'évaluation.", en: "Ask the development team to stop the project pending the evaluation." },
    ],
    correct: 0,
    explanation: {
      fr: "Tout changement technologique majeur nécessite une analyse d'impact rigoureuse sur tous les aspects du projet afin de guider le comité de décision.",
      en: "Any major technological change requires a rigorous impact analysis on all project aspects to guide the decision-making committee."
    }
  },
  {
    id: "pd078",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de construction d'un nouveau centre de R&D est divisée sur la méthode de test à adopter. Quelle approche de résolution de conflit le Product Owner doit-il favoriser ?",
      en: "At PMP doré, the team for a R&D center construction project is split on the testing method to adopt. Which conflict resolution approach should the Product Owner promote?"
    },
    options: [
      { fr: "La collaboration (ou résolution de problèmes), en confrontant les points de vue pour trouver une solution partagée.", en: "Collaboration (or problem-solving), by confronting viewpoints to find a shared solution." },
      { fr: "Le compromis, en demandant à chacun de renoncer à la moitié de ses exigences.", en: "Compromise, by asking everyone to give up half of their requirements." },
      { fr: "La force (ou coercition), en imposant sa propre décision technique.", en: "Force (or coercion), by imposing their own technical decision." },
      { fr: "L'évitement, en laissant l'équipe résoudre le problème sans intervenir.", en: "Avoidance, by letting the team resolve the issue without intervening." },
    ],
    correct: 0,
    explanation: {
      fr: "La collaboration est la technique la plus constructive de résolution de conflits. Elle permet d'aboutir à une décision consensuelle et durable basée sur les faits.",
      en: "Collaboration is the most constructive conflict resolution technique. It leads to a consensus-based and sustainable decision based on facts."
    }
  },
  {
    id: "pd079",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, lors d'un projet de migration de base de données clients, deux membres clés de l'équipe refusent de collaborer en raison de malentendus interculturels. Que doit faire le sponsor du projet ?",
      en: "At PMP doré, during a customer database migration project, two key team members refuse to collaborate due to cross-cultural misunderstandings. What should the project sponsor do?"
    },
    options: [
      { fr: "Faciliter une discussion ouverte sur les styles de communication et organiser une formation de sensibilisation culturelle.", en: "Facilitate an open discussion on communication styles and organize cultural awareness training." },
      { fr: "Remplacer l'un des membres par un ressource locale pour simplifier le travail.", en: "Replace one of the members with a local resource to simplify the work." },
      { fr: "Leur demander de communiquer uniquement par écrit pour éviter les frictions verbales.", en: "Ask them to communicate only in writing to avoid verbal friction." },
      { fr: "Laisser les ressources gérer leur relation de manière autonome sans interférer.", en: "Let the resources manage their relationship autonomously without interfering." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit faire preuve d'intelligence émotionnelle et encourager la diversité. Faciliter une discussion sur la communication aide à lever les barrières culturelles.",
      en: "The project manager must demonstrate emotional intelligence and encourage diversity. Facilitating a discussion on communication helps remove cultural barriers."
    }
  },
  {
    id: "pd080",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, un membre de l'équipe agile signale un obstacle technique bloquant lors du Daily Standup. Qui est responsable de la résolution de cet obstacle ?",
      en: "At PMP doré, an agile team member reports a blocking technical obstacle during the Daily Standup. Who is responsible for resolving this obstacle?"
    },
    options: [
      { fr: "Le Scrum Master (ou le leader serviteur), qui doit aider à éliminer l'obstacle pour l'équipe.", en: "The Scrum Master (or servant leader), who must help remove the obstacle for the team." },
      { fr: "Le membre de l'équipe lui-même, car l'équipe est auto-organisée.", en: "The team member themselves, as the team is self-organized." },
      { fr: "Le Product Owner, qui gère la priorisation technique des bugs.", en: "The Product Owner, who manages the technical prioritization of bugs." },
      { fr: "Le sponsor du projet, qui alloue les ressources de développement.", en: "The project sponsor, who allocates development resources." },
    ],
    correct: 0,
    explanation: {
      fr: "Le Scrum Master a pour rôle principal de faciliter le travail de l'équipe en éliminant les obstacles et les distractions externes.",
      en: "The Scrum Master's primary role is to facilitate the team's work by removing obstacles and external distractions."
    }
  },
  {
    id: "pd081",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet d'automatisation de la chaîne logistique identifie des défauts répétitifs sur un composant livré. Quelle est la première action corrective à mener ?",
      en: "At PMP doré, the team for a supply chain automation project identifies recurring defects on a delivered component. What is the first corrective action to take?"
    },
    options: [
      { fr: "Mener une analyse de cause racine (diagramme d'Ishikawa/5 Pourquoi) pour identifier la source des défauts.", en: "Conduct a root cause analysis (Ishikawa diagram/5 Whys) to identify the source of the defects." },
      { fr: "Augmenter simplement le temps de test en fin de cycle de développement.", en: "Simply increase testing time at the end of the development cycle." },
      { fr: "Rejeter la faute sur le prestataire externe ayant développé le composant.", en: "Blame the external vendor who developed the component." },
      { fr: "Demander une réévaluation complète du budget qualité du projet.", en: "Request a complete re-evaluation of the project's quality budget." },
    ],
    correct: 0,
    explanation: {
      fr: "Pour corriger durablement les problèmes de qualité, il est indispensable de trouver la cause première (cause racine) plutôt que de traiter uniquement les symptômes.",
      en: "To permanently correct quality issues, it is essential to find the root cause rather than only treating the symptoms."
    }
  },
  {
    id: "pd082",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, le client d'un projet de déploiement cloud valide tous les livrables mais refuse de signer le procès-verbal de réception officielle. Quelle est la meilleure action du chef de projet ?",
      en: "At PMP doré, the client of a cloud deployment project validates all deliverables but refuses to sign the official acceptance certificate. What is the best action for the project manager?"
    },
    options: [
      { fr: "Rencontrer le client pour comprendre ses réticences à signer formellement et documenter ses réserves éventuelles.", en: "Meet with the client to understand their reluctance to sign formally and document any potential reservations." },
      { fr: "Considérer le projet comme clos unilatéralement puisque les livrables fonctionnent.", en: "Consider the project unilaterally closed since the deliverables are functioning." },
      { fr: "Menacer le client d'interrompre le support technique immédiatement.", en: "Threaten the client with immediately stopping technical support." },
      { fr: "Escalader directement le problème au service juridique de PMP doré.", en: "Directly escalate the issue to PMP doré's legal department." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit rechercher la collaboration et comprendre la cause du blocage de signature pour résoudre la situation diplomatiquement.",
      en: "The project manager must seek collaboration and understand the cause of the signature block to resolve the situation diplomatically."
    }
  },
  {
    id: "pd083",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de développement d'une application mobile de paiement souhaite optimiser le processus de déploiement. Quel outil d'amélioration continue le Scrum Master doit-il suggérer ?",
      en: "At PMP doré, the team for a mobile payment app development project wants to optimize the deployment process. Which continuous improvement tool should the Scrum Master suggest?"
    },
    options: [
      { fr: "Une rétrospective d'équipe dédiée ou une cartographie de flux de valeur (Value Stream Mapping).", en: "A dedicated team retrospective or a Value Stream Mapping workshop." },
      { fr: "Une revue des performances individuelles des membres de l'équipe.", en: "An individual performance review of the team members." },
      { fr: "Un audit financier externe des coûts de développement.", en: "An external financial audit of development costs." },
      { fr: "La réécriture complète de la charte du projet.", en: "A complete rewriting of the project charter." },
    ],
    correct: 0,
    explanation: {
      fr: "Les rétrospectives et la cartographie de flux de valeur sont des outils de lean/agile conçus pour analyser les goulots d'étranglement et optimiser les processus continus.",
      en: "Retrospectives and Value Stream Mapping are lean/agile tools designed to analyze bottlenecks and optimize continuous processes."
    }
  },
  {
    id: "pd084",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, lors d'un projet de construction d'un nouveau centre de R&D, une partie prenante influente demande des fonctionnalités hors périmètre directement à l'équipe. Que doit faire le Product Owner ?",
      en: "At PMP doré, during a R&D center construction project, an influential stakeholder requests out-of-scope features directly from the team. What should the Product Owner do?"
    },
    options: [
      { fr: "Demander à la partie prenante de soumettre sa demande via le processus de contrôle des changements ou en parler au Product Owner.", en: "Ask the stakeholder to submit their request through the change control process or discuss it with the Product Owner." },
      { fr: "Demander à l'équipe d'implémenter la demande pour conserver de bonnes relations.", en: "Ask the team to implement the request to maintain good relations." },
      { fr: "Escalader immédiatement la demande au sponsor pour faire arbitrer le périmètre.", en: "Immediately escalate the request to the sponsor to arbitrate the scope." },
      { fr: "Ignorer la demande et bloquer toutes les communications futures avec cette partie prenante.", en: "Ignore the request and block all future communications with this stakeholder." },
    ],
    correct: 0,
    explanation: {
      fr: "Toutes les demandes de changement ou de fonctionnalités hors périmètre doivent être formalisées et évaluées à travers le contrôle des changements (ou le Product Owner en agile) pour éviter la dérive des objectifs.",
      en: "All requests for changes or out-of-scope features must be formalized and evaluated through change control (or the Product Owner in agile) to prevent scope creep."
    }
  },
  {
    id: "pd085",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, le client d'un projet de migration de base de données clients souhaite changer de technologie en milieu d'exécution. Quelle est la première étape que le sponsor du projet doit entreprendre ?",
      en: "At PMP doré, the client of a customer database migration project wants to switch technologies mid-execution. What is the first step the project sponsor should take?"
    },
    options: [
      { fr: "Évaluer l'impact technique, financier et calendaire de ce changement technologique avant de prendre une décision.", en: "Evaluate the technical, financial, and schedule impact of this technological shift before making a decision." },
      { fr: "Refuser fermement la demande car le contrat initial est signé et contraignant.", en: "Firmly refuse the request because the initial contract is signed and binding." },
      { fr: "Mettre à jour immédiatement la ligne de base du projet avec la nouvelle technologie.", en: "Immediately update the project baseline with the new technology." },
      { fr: "Demander à l'équipe de développement d'arrêter le projet en attendant l'évaluation.", en: "Ask the development team to stop the project pending the evaluation." },
    ],
    correct: 0,
    explanation: {
      fr: "Tout changement technologique majeur nécessite une analyse d'impact rigoureuse sur tous les aspects du projet afin de guider le comité de décision.",
      en: "Any major technological change requires a rigorous impact analysis on all project aspects to guide the decision-making committee."
    }
  },
  {
    id: "pd086",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet d'intégration d'un outil CRM est divisée sur la méthode de test à adopter. Quelle approche de résolution de conflit le leader technique doit-il favoriser ?",
      en: "At PMP doré, the team for a CRM tool integration project is split on the testing method to adopt. Which conflict resolution approach should the technical lead promote?"
    },
    options: [
      { fr: "La collaboration (ou résolution de problèmes), en confrontant les points de vue pour trouver une solution partagée.", en: "Collaboration (or problem-solving), by confronting viewpoints to find a shared solution." },
      { fr: "Le compromis, en demandant à chacun de renoncer à la moitié de ses exigences.", en: "Compromise, by asking everyone to give up half of their requirements." },
      { fr: "La force (ou coercition), en imposant sa propre décision technique.", en: "Force (or coercion), by imposing their own technical decision." },
      { fr: "L'évitement, en laissant l'équipe résoudre le problème sans intervenir.", en: "Avoidance, by letting the team resolve the issue without intervening." },
    ],
    correct: 0,
    explanation: {
      fr: "La collaboration est la technique la plus constructive de résolution de conflits. Elle permet d'aboutir à une décision consensuelle et durable basée sur les faits.",
      en: "Collaboration is the most constructive conflict resolution technique. It leads to a consensus-based and sustainable decision based on facts."
    }
  },
  {
    id: "pd087",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, lors d'un projet d'automatisation de la chaîne logistique, deux membres clés de l'équipe refusent de collaborer en raison de malentendus interculturels. Que doit faire le facilitateur agile ?",
      en: "At PMP doré, during a supply chain automation project, two key team members refuse to collaborate due to cross-cultural misunderstandings. What should the agile facilitator do?"
    },
    options: [
      { fr: "Faciliter une discussion ouverte sur les styles de communication et organiser une formation de sensibilisation culturelle.", en: "Facilitate an open discussion on communication styles and organize cultural awareness training." },
      { fr: "Remplacer l'un des membres par un ressource locale pour simplifier le travail.", en: "Replace one of the members with a local resource to simplify the work." },
      { fr: "Leur demander de communiquer uniquement par écrit pour éviter les frictions verbales.", en: "Ask them to communicate only in writing to avoid verbal friction." },
      { fr: "Laisser les ressources gérer leur relation de manière autonome sans interférer.", en: "Let the resources manage their relationship autonomously without interfering." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit faire preuve d'intelligence émotionnelle et encourager la diversité. Faciliter une discussion sur la communication aide à lever les barrières culturelles.",
      en: "The project manager must demonstrate emotional intelligence and encourage diversity. Facilitating a discussion on communication helps remove cultural barriers."
    }
  },
  {
    id: "pd088",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, un membre de l'équipe agile signale un obstacle technique bloquant lors du Daily Standup. Qui est responsable de la résolution de cet obstacle ?",
      en: "At PMP doré, an agile team member reports a blocking technical obstacle during the Daily Standup. Who is responsible for resolving this obstacle?"
    },
    options: [
      { fr: "Le Scrum Master (ou le leader serviteur), qui doit aider à éliminer l'obstacle pour l'équipe.", en: "The Scrum Master (or servant leader), who must help remove the obstacle for the team." },
      { fr: "Le membre de l'équipe lui-même, car l'équipe est auto-organisée.", en: "The team member themselves, as the team is self-organized." },
      { fr: "Le Product Owner, qui gère la priorisation technique des bugs.", en: "The Product Owner, who manages the technical prioritization of bugs." },
      { fr: "Le sponsor du projet, qui alloue les ressources de développement.", en: "The project sponsor, who allocates development resources." },
    ],
    correct: 0,
    explanation: {
      fr: "Le Scrum Master a pour rôle principal de faciliter le travail de l'équipe en éliminant les obstacles et les distractions externes.",
      en: "The Scrum Master's primary role is to facilitate the team's work by removing obstacles and external distractions."
    }
  },
  {
    id: "pd089",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de développement d'une application mobile de paiement identifie des défauts répétitifs sur un composant livré. Quelle est la première action corrective à mener ?",
      en: "At PMP doré, the team for a mobile payment app development project identifies recurring defects on a delivered component. What is the first corrective action to take?"
    },
    options: [
      { fr: "Mener une analyse de cause racine (diagramme d'Ishikawa/5 Pourquoi) pour identifier la source des défauts.", en: "Conduct a root cause analysis (Ishikawa diagram/5 Whys) to identify the source of the defects." },
      { fr: "Augmenter simplement le temps de test en fin de cycle de développement.", en: "Simply increase testing time at the end of the development cycle." },
      { fr: "Rejeter la faute sur le prestataire externe ayant développé le composant.", en: "Blame the external vendor who developed the component." },
      { fr: "Demander une réévaluation complète du budget qualité du projet.", en: "Request a complete re-evaluation of the project's quality budget." },
    ],
    correct: 0,
    explanation: {
      fr: "Pour corriger durablement les problèmes de qualité, il est indispensable de trouver la cause première (cause racine) plutôt que de traiter uniquement les symptômes.",
      en: "To permanently correct quality issues, it is essential to find the root cause rather than only treating the symptoms."
    }
  },
  {
    id: "pd090",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, le client d'un projet de construction d'un nouveau centre de R&D valide tous les livrables mais refuse de signer le procès-verbal de réception officielle. Quelle est la meilleure action du Product Owner ?",
      en: "At PMP doré, the client of a R&D center construction project validates all deliverables but refuses to sign the official acceptance certificate. What is the best action for the Product Owner?"
    },
    options: [
      { fr: "Rencontrer le client pour comprendre ses réticences à signer formellement et documenter ses réserves éventuelles.", en: "Meet with the client to understand their reluctance to sign formally and document any potential reservations." },
      { fr: "Considérer le projet comme clos unilatéralement puisque les livrables fonctionnent.", en: "Consider the project unilaterally closed since the deliverables are functioning." },
      { fr: "Menacer le client d'interrompre le support technique immédiatement.", en: "Threaten the client with immediately stopping technical support." },
      { fr: "Escalader directement le problème au service juridique de PMP doré.", en: "Directly escalate the issue to PMP doré's legal department." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit rechercher la collaboration et comprendre la cause du blocage de signature pour résoudre la situation diplomatiquement.",
      en: "The project manager must seek collaboration and understand the cause of the signature block to resolve the situation diplomatically."
    }
  },
  {
    id: "pd091",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de migration de base de données clients souhaite optimiser le processus de déploiement. Quel outil d'amélioration continue le sponsor du projet doit-il suggérer ?",
      en: "At PMP doré, the team for a customer database migration project wants to optimize the deployment process. Which continuous improvement tool should the project sponsor suggest?"
    },
    options: [
      { fr: "Une rétrospective d'équipe dédiée ou une cartographie de flux de valeur (Value Stream Mapping).", en: "A dedicated team retrospective or a Value Stream Mapping workshop." },
      { fr: "Une revue des performances individuelles des membres de l'équipe.", en: "An individual performance review of the team members." },
      { fr: "Un audit financier externe des coûts de développement.", en: "An external financial audit of development costs." },
      { fr: "La réécriture complète de la charte du projet.", en: "A complete rewriting of the project charter." },
    ],
    correct: 0,
    explanation: {
      fr: "Les rétrospectives et la cartographie de flux de valeur sont des outils de lean/agile conçus pour analyser les goulots d'étranglement et optimiser les processus continus.",
      en: "Retrospectives and Value Stream Mapping are lean/agile tools designed to analyze bottlenecks and optimize continuous processes."
    }
  },
  {
    id: "pd092",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, lors d'un projet d'intégration d'un outil CRM, une partie prenante influente demande des fonctionnalités hors périmètre directement à l'équipe. Que doit faire le leader technique ?",
      en: "At PMP doré, during a CRM tool integration project, an influential stakeholder requests out-of-scope features directly from the team. What should the technical lead do?"
    },
    options: [
      { fr: "Demander à la partie prenante de soumettre sa demande via le processus de contrôle des changements ou en parler au Product Owner.", en: "Ask the stakeholder to submit their request through the change control process or discuss it with the Product Owner." },
      { fr: "Demander à l'équipe d'implémenter la demande pour conserver de bonnes relations.", en: "Ask the team to implement the request to maintain good relations." },
      { fr: "Escalader immédiatement la demande au sponsor pour faire arbitrer le périmètre.", en: "Immediately escalate the request to the sponsor to arbitrate the scope." },
      { fr: "Ignorer la demande et bloquer toutes les communications futures avec cette partie prenante.", en: "Ignore the request and block all future communications with this stakeholder." },
    ],
    correct: 0,
    explanation: {
      fr: "Toutes les demandes de changement ou de fonctionnalités hors périmètre doivent être formalisées et évaluées à travers le contrôle des changements (ou le Product Owner en agile) pour éviter la dérive des objectifs.",
      en: "All requests for changes or out-of-scope features must be formalized and evaluated through change control (or the Product Owner in agile) to prevent scope creep."
    }
  },
  {
    id: "pd093",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, le client d'un projet d'automatisation de la chaîne logistique souhaite changer de technologie en milieu d'exécution. Quelle est la première étape que le facilitateur agile doit entreprendre ?",
      en: "At PMP doré, the client of a supply chain automation project wants to switch technologies mid-execution. What is the first step the agile facilitator should take?"
    },
    options: [
      { fr: "Évaluer l'impact technique, financier et calendaire de ce changement technologique avant de prendre une décision.", en: "Evaluate the technical, financial, and schedule impact of this technological shift before making a decision." },
      { fr: "Refuser fermement la demande car le contrat initial est signé et contraignant.", en: "Firmly refuse the request because the initial contract is signed and binding." },
      { fr: "Mettre à jour immédiatement la ligne de base du projet avec la nouvelle technologie.", en: "Immediately update the project baseline with the new technology." },
      { fr: "Demander à l'équipe de développement d'arrêter le projet en attendant l'évaluation.", en: "Ask the development team to stop the project pending the evaluation." },
    ],
    correct: 0,
    explanation: {
      fr: "Tout changement technologique majeur nécessite une analyse d'impact rigoureuse sur tous les aspects du projet afin de guider le comité de décision.",
      en: "Any major technological change requires a rigorous impact analysis on all project aspects to guide the decision-making committee."
    }
  },
  {
    id: "pd094",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de déploiement cloud est divisée sur la méthode de test à adopter. Quelle approche de résolution de conflit le chef de projet doit-il favoriser ?",
      en: "At PMP doré, the team for a cloud deployment project is split on the testing method to adopt. Which conflict resolution approach should the project manager promote?"
    },
    options: [
      { fr: "La collaboration (ou résolution de problèmes), en confrontant les points de vue pour trouver une solution partagée.", en: "Collaboration (or problem-solving), by confronting viewpoints to find a shared solution." },
      { fr: "Le compromis, en demandant à chacun de renoncer à la moitié de ses exigences.", en: "Compromise, by asking everyone to give up half of their requirements." },
      { fr: "La force (ou coercition), en imposant sa propre décision technique.", en: "Force (or coercion), by imposing their own technical decision." },
      { fr: "L'évitement, en laissant l'équipe résoudre le problème sans intervenir.", en: "Avoidance, by letting the team resolve the issue without intervening." },
    ],
    correct: 0,
    explanation: {
      fr: "La collaboration est la technique la plus constructive de résolution de conflits. Elle permet d'aboutir à une décision consensuelle et durable basée sur les faits.",
      en: "Collaboration is the most constructive conflict resolution technique. It leads to a consensus-based and sustainable decision based on facts."
    }
  },
  {
    id: "pd095",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, lors d'un projet de développement d'une application mobile de paiement, deux membres clés de l'équipe refusent de collaborer en raison de malentendus interculturels. Que doit faire le Scrum Master ?",
      en: "At PMP doré, during a mobile payment app development project, two key team members refuse to collaborate due to cross-cultural misunderstandings. What should the Scrum Master do?"
    },
    options: [
      { fr: "Faciliter une discussion ouverte sur les styles de communication et organiser une formation de sensibilisation culturelle.", en: "Facilitate an open discussion on communication styles and organize cultural awareness training." },
      { fr: "Remplacer l'un des membres par un ressource locale pour simplifier le travail.", en: "Replace one of the members with a local resource to simplify the work." },
      { fr: "Leur demander de communiquer uniquement par écrit pour éviter les frictions verbales.", en: "Ask them to communicate only in writing to avoid verbal friction." },
      { fr: "Laisser les ressources gérer leur relation de manière autonome sans interférer.", en: "Let the resources manage their relationship autonomously without interfering." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit faire preuve d'intelligence émotionnelle et encourager la diversité. Faciliter une discussion sur la communication aide à lever les barrières culturelles.",
      en: "The project manager must demonstrate emotional intelligence and encourage diversity. Facilitating a discussion on communication helps remove cultural barriers."
    }
  },
  {
    id: "pd096",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, un membre de l'équipe agile signale un obstacle technique bloquant lors du Daily Standup. Qui est responsable de la résolution de cet obstacle ?",
      en: "At PMP doré, an agile team member reports a blocking technical obstacle during the Daily Standup. Who is responsible for resolving this obstacle?"
    },
    options: [
      { fr: "Le Scrum Master (ou le leader serviteur), qui doit aider à éliminer l'obstacle pour l'équipe.", en: "The Scrum Master (or servant leader), who must help remove the obstacle for the team." },
      { fr: "Le membre de l'équipe lui-même, car l'équipe est auto-organisée.", en: "The team member themselves, as the team is self-organized." },
      { fr: "Le Product Owner, qui gère la priorisation technique des bugs.", en: "The Product Owner, who manages the technical prioritization of bugs." },
      { fr: "Le sponsor du projet, qui alloue les ressources de développement.", en: "The project sponsor, who allocates development resources." },
    ],
    correct: 0,
    explanation: {
      fr: "Le Scrum Master a pour rôle principal de faciliter le travail de l'équipe en éliminant les obstacles et les distractions externes.",
      en: "The Scrum Master's primary role is to facilitate the team's work by removing obstacles and external distractions."
    }
  },
  {
    id: "pd097",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de migration de base de données clients identifie des défauts répétitifs sur un composant livré. Quelle est la première action corrective à mener ?",
      en: "At PMP doré, the team for a customer database migration project identifies recurring defects on a delivered component. What is the first corrective action to take?"
    },
    options: [
      { fr: "Mener une analyse de cause racine (diagramme d'Ishikawa/5 Pourquoi) pour identifier la source des défauts.", en: "Conduct a root cause analysis (Ishikawa diagram/5 Whys) to identify the source of the defects." },
      { fr: "Augmenter simplement le temps de test en fin de cycle de développement.", en: "Simply increase testing time at the end of the development cycle." },
      { fr: "Rejeter la faute sur le prestataire externe ayant développé le composant.", en: "Blame the external vendor who developed the component." },
      { fr: "Demander une réévaluation complète du budget qualité du projet.", en: "Request a complete re-evaluation of the project's quality budget." },
    ],
    correct: 0,
    explanation: {
      fr: "Pour corriger durablement les problèmes de qualité, il est indispensable de trouver la cause première (cause racine) plutôt que de traiter uniquement les symptômes.",
      en: "To permanently correct quality issues, it is essential to find the root cause rather than only treating the symptoms."
    }
  },
  {
    id: "pd098",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, le client d'un projet d'intégration d'un outil CRM valide tous les livrables mais refuse de signer le procès-verbal de réception officielle. Quelle est la meilleure action du leader technique ?",
      en: "At PMP doré, the client of a CRM tool integration project validates all deliverables but refuses to sign the official acceptance certificate. What is the best action for the technical lead?"
    },
    options: [
      { fr: "Rencontrer le client pour comprendre ses réticences à signer formellement et documenter ses réserves éventuelles.", en: "Meet with the client to understand their reluctance to sign formally and document any potential reservations." },
      { fr: "Considérer le projet comme clos unilatéralement puisque les livrables fonctionnent.", en: "Consider the project unilaterally closed since the deliverables are functioning." },
      { fr: "Menacer le client d'interrompre le support technique immédiatement.", en: "Threaten the client with immediately stopping technical support." },
      { fr: "Escalader directement le problème au service juridique de PMP doré.", en: "Directly escalate the issue to PMP doré's legal department." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit rechercher la collaboration et comprendre la cause du blocage de signature pour résoudre la situation diplomatiquement.",
      en: "The project manager must seek collaboration and understand the cause of the signature block to resolve the situation diplomatically."
    }
  },
  {
    id: "pd099",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet d'automatisation de la chaîne logistique souhaite optimiser le processus de déploiement. Quel outil d'amélioration continue le facilitateur agile doit-il suggérer ?",
      en: "At PMP doré, the team for a supply chain automation project wants to optimize the deployment process. Which continuous improvement tool should the agile facilitator suggest?"
    },
    options: [
      { fr: "Une rétrospective d'équipe dédiée ou une cartographie de flux de valeur (Value Stream Mapping).", en: "A dedicated team retrospective or a Value Stream Mapping workshop." },
      { fr: "Une revue des performances individuelles des membres de l'équipe.", en: "An individual performance review of the team members." },
      { fr: "Un audit financier externe des coûts de développement.", en: "An external financial audit of development costs." },
      { fr: "La réécriture complète de la charte du projet.", en: "A complete rewriting of the project charter." },
    ],
    correct: 0,
    explanation: {
      fr: "Les rétrospectives et la cartographie de flux de valeur sont des outils de lean/agile conçus pour analyser les goulots d'étranglement et optimiser les processus continus.",
      en: "Retrospectives and Value Stream Mapping are lean/agile tools designed to analyze bottlenecks and optimize continuous processes."
    }
  },
  {
    id: "pd100",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, lors d'un projet de déploiement cloud, une partie prenante influente demande des fonctionnalités hors périmètre directement à l'équipe. Que doit faire le chef de projet ?",
      en: "At PMP doré, during a cloud deployment project, an influential stakeholder requests out-of-scope features directly from the team. What should the project manager do?"
    },
    options: [
      { fr: "Demander à la partie prenante de soumettre sa demande via le processus de contrôle des changements ou en parler au Product Owner.", en: "Ask the stakeholder to submit their request through the change control process or discuss it with the Product Owner." },
      { fr: "Demander à l'équipe d'implémenter la demande pour conserver de bonnes relations.", en: "Ask the team to implement the request to maintain good relations." },
      { fr: "Escalader immédiatement la demande au sponsor pour faire arbitrer le périmètre.", en: "Immediately escalate the request to the sponsor to arbitrate the scope." },
      { fr: "Ignorer la demande et bloquer toutes les communications futures avec cette partie prenante.", en: "Ignore the request and block all future communications with this stakeholder." },
    ],
    correct: 0,
    explanation: {
      fr: "Toutes les demandes de changement ou de fonctionnalités hors périmètre doivent être formalisées et évaluées à travers le contrôle des changements (ou le Product Owner en agile) pour éviter la dérive des objectifs.",
      en: "All requests for changes or out-of-scope features must be formalized and evaluated through change control (or the Product Owner in agile) to prevent scope creep."
    }
  },
  {
    id: "pd101",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, le client d'un projet de développement d'une application mobile de paiement souhaite changer de technologie en milieu d'exécution. Quelle est la première étape que le Scrum Master doit entreprendre ?",
      en: "At PMP doré, the client of a mobile payment app development project wants to switch technologies mid-execution. What is the first step the Scrum Master should take?"
    },
    options: [
      { fr: "Évaluer l'impact technique, financier et calendaire de ce changement technologique avant de prendre une décision.", en: "Evaluate the technical, financial, and schedule impact of this technological shift before making a decision." },
      { fr: "Refuser fermement la demande car le contrat initial est signé et contraignant.", en: "Firmly refuse the request because the initial contract is signed and binding." },
      { fr: "Mettre à jour immédiatement la ligne de base du projet avec la nouvelle technologie.", en: "Immediately update the project baseline with the new technology." },
      { fr: "Demander à l'équipe de développement d'arrêter le projet en attendant l'évaluation.", en: "Ask the development team to stop the project pending the evaluation." },
    ],
    correct: 0,
    explanation: {
      fr: "Tout changement technologique majeur nécessite une analyse d'impact rigoureuse sur tous les aspects du projet afin de guider le comité de décision.",
      en: "Any major technological change requires a rigorous impact analysis on all project aspects to guide the decision-making committee."
    }
  },
  {
    id: "pd102",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de construction d'un nouveau centre de R&D est divisée sur la méthode de test à adopter. Quelle approche de résolution de conflit le Product Owner doit-il favoriser ?",
      en: "At PMP doré, the team for a R&D center construction project is split on the testing method to adopt. Which conflict resolution approach should the Product Owner promote?"
    },
    options: [
      { fr: "La collaboration (ou résolution de problèmes), en confrontant les points de vue pour trouver une solution partagée.", en: "Collaboration (or problem-solving), by confronting viewpoints to find a shared solution." },
      { fr: "Le compromis, en demandant à chacun de renoncer à la moitié de ses exigences.", en: "Compromise, by asking everyone to give up half of their requirements." },
      { fr: "La force (ou coercition), en imposant sa propre décision technique.", en: "Force (or coercion), by imposing their own technical decision." },
      { fr: "L'évitement, en laissant l'équipe résoudre le problème sans intervenir.", en: "Avoidance, by letting the team resolve the issue without intervening." },
    ],
    correct: 0,
    explanation: {
      fr: "La collaboration est la technique la plus constructive de résolution de conflits. Elle permet d'aboutir à une décision consensuelle et durable basée sur les faits.",
      en: "Collaboration is the most constructive conflict resolution technique. It leads to a consensus-based and sustainable decision based on facts."
    }
  },
  {
    id: "pd103",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, lors d'un projet de migration de base de données clients, deux membres clés de l'équipe refusent de collaborer en raison de malentendus interculturels. Que doit faire le sponsor du projet ?",
      en: "At PMP doré, during a customer database migration project, two key team members refuse to collaborate due to cross-cultural misunderstandings. What should the project sponsor do?"
    },
    options: [
      { fr: "Faciliter une discussion ouverte sur les styles de communication et organiser une formation de sensibilisation culturelle.", en: "Facilitate an open discussion on communication styles and organize cultural awareness training." },
      { fr: "Remplacer l'un des membres par un ressource locale pour simplifier le travail.", en: "Replace one of the members with a local resource to simplify the work." },
      { fr: "Leur demander de communiquer uniquement par écrit pour éviter les frictions verbales.", en: "Ask them to communicate only in writing to avoid verbal friction." },
      { fr: "Laisser les ressources gérer leur relation de manière autonome sans interférer.", en: "Let the resources manage their relationship autonomously without interfering." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit faire preuve d'intelligence émotionnelle et encourager la diversité. Faciliter une discussion sur la communication aide à lever les barrières culturelles.",
      en: "The project manager must demonstrate emotional intelligence and encourage diversity. Facilitating a discussion on communication helps remove cultural barriers."
    }
  },
  {
    id: "pd104",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, un membre de l'équipe agile signale un obstacle technique bloquant lors du Daily Standup. Qui est responsable de la résolution de cet obstacle ?",
      en: "At PMP doré, an agile team member reports a blocking technical obstacle during the Daily Standup. Who is responsible for resolving this obstacle?"
    },
    options: [
      { fr: "Le Scrum Master (ou le leader serviteur), qui doit aider à éliminer l'obstacle pour l'équipe.", en: "The Scrum Master (or servant leader), who must help remove the obstacle for the team." },
      { fr: "Le membre de l'équipe lui-même, car l'équipe est auto-organisée.", en: "The team member themselves, as the team is self-organized." },
      { fr: "Le Product Owner, qui gère la priorisation technique des bugs.", en: "The Product Owner, who manages the technical prioritization of bugs." },
      { fr: "Le sponsor du projet, qui alloue les ressources de développement.", en: "The project sponsor, who allocates development resources." },
    ],
    correct: 0,
    explanation: {
      fr: "Le Scrum Master a pour rôle principal de faciliter le travail de l'équipe en éliminant les obstacles et les distractions externes.",
      en: "The Scrum Master's primary role is to facilitate the team's work by removing obstacles and external distractions."
    }
  },
  {
    id: "pd105",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet d'automatisation de la chaîne logistique identifie des défauts répétitifs sur un composant livré. Quelle est la première action corrective à mener ?",
      en: "At PMP doré, the team for a supply chain automation project identifies recurring defects on a delivered component. What is the first corrective action to take?"
    },
    options: [
      { fr: "Mener une analyse de cause racine (diagramme d'Ishikawa/5 Pourquoi) pour identifier la source des défauts.", en: "Conduct a root cause analysis (Ishikawa diagram/5 Whys) to identify the source of the defects." },
      { fr: "Augmenter simplement le temps de test en fin de cycle de développement.", en: "Simply increase testing time at the end of the development cycle." },
      { fr: "Rejeter la faute sur le prestataire externe ayant développé le composant.", en: "Blame the external vendor who developed the component." },
      { fr: "Demander une réévaluation complète du budget qualité du projet.", en: "Request a complete re-evaluation of the project's quality budget." },
    ],
    correct: 0,
    explanation: {
      fr: "Pour corriger durablement les problèmes de qualité, il est indispensable de trouver la cause première (cause racine) plutôt que de traiter uniquement les symptômes.",
      en: "To permanently correct quality issues, it is essential to find the root cause rather than only treating the symptoms."
    }
  },
  {
    id: "pd106",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, le client d'un projet de déploiement cloud valide tous les livrables mais refuse de signer le procès-verbal de réception officielle. Quelle est la meilleure action du chef de projet ?",
      en: "At PMP doré, the client of a cloud deployment project validates all deliverables but refuses to sign the official acceptance certificate. What is the best action for the project manager?"
    },
    options: [
      { fr: "Rencontrer le client pour comprendre ses réticences à signer formellement et documenter ses réserves éventuelles.", en: "Meet with the client to understand their reluctance to sign formally and document any potential reservations." },
      { fr: "Considérer le projet comme clos unilatéralement puisque les livrables fonctionnent.", en: "Consider the project unilaterally closed since the deliverables are functioning." },
      { fr: "Menacer le client d'interrompre le support technique immédiatement.", en: "Threaten the client with immediately stopping technical support." },
      { fr: "Escalader directement le problème au service juridique de PMP doré.", en: "Directly escalate the issue to PMP doré's legal department." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit rechercher la collaboration et comprendre la cause du blocage de signature pour résoudre la situation diplomatiquement.",
      en: "The project manager must seek collaboration and understand the cause of the signature block to resolve the situation diplomatically."
    }
  },
  {
    id: "pd107",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de développement d'une application mobile de paiement souhaite optimiser le processus de déploiement. Quel outil d'amélioration continue le Scrum Master doit-il suggérer ?",
      en: "At PMP doré, the team for a mobile payment app development project wants to optimize the deployment process. Which continuous improvement tool should the Scrum Master suggest?"
    },
    options: [
      { fr: "Une rétrospective d'équipe dédiée ou une cartographie de flux de valeur (Value Stream Mapping).", en: "A dedicated team retrospective or a Value Stream Mapping workshop." },
      { fr: "Une revue des performances individuelles des membres de l'équipe.", en: "An individual performance review of the team members." },
      { fr: "Un audit financier externe des coûts de développement.", en: "An external financial audit of development costs." },
      { fr: "La réécriture complète de la charte du projet.", en: "A complete rewriting of the project charter." },
    ],
    correct: 0,
    explanation: {
      fr: "Les rétrospectives et la cartographie de flux de valeur sont des outils de lean/agile conçus pour analyser les goulots d'étranglement et optimiser les processus continus.",
      en: "Retrospectives and Value Stream Mapping are lean/agile tools designed to analyze bottlenecks and optimize continuous processes."
    }
  },
  {
    id: "pd108",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, lors d'un projet de construction d'un nouveau centre de R&D, une partie prenante influente demande des fonctionnalités hors périmètre directement à l'équipe. Que doit faire le Product Owner ?",
      en: "At PMP doré, during a R&D center construction project, an influential stakeholder requests out-of-scope features directly from the team. What should the Product Owner do?"
    },
    options: [
      { fr: "Demander à la partie prenante de soumettre sa demande via le processus de contrôle des changements ou en parler au Product Owner.", en: "Ask the stakeholder to submit their request through the change control process or discuss it with the Product Owner." },
      { fr: "Demander à l'équipe d'implémenter la demande pour conserver de bonnes relations.", en: "Ask the team to implement the request to maintain good relations." },
      { fr: "Escalader immédiatement la demande au sponsor pour faire arbitrer le périmètre.", en: "Immediately escalate the request to the sponsor to arbitrate the scope." },
      { fr: "Ignorer la demande et bloquer toutes les communications futures avec cette partie prenante.", en: "Ignore the request and block all future communications with this stakeholder." },
    ],
    correct: 0,
    explanation: {
      fr: "Toutes les demandes de changement ou de fonctionnalités hors périmètre doivent être formalisées et évaluées à travers le contrôle des changements (ou le Product Owner en agile) pour éviter la dérive des objectifs.",
      en: "All requests for changes or out-of-scope features must be formalized and evaluated through change control (or the Product Owner in agile) to prevent scope creep."
    }
  },
  {
    id: "pd109",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, le client d'un projet de migration de base de données clients souhaite changer de technologie en milieu d'exécution. Quelle est la première étape que le sponsor du projet doit entreprendre ?",
      en: "At PMP doré, the client of a customer database migration project wants to switch technologies mid-execution. What is the first step the project sponsor should take?"
    },
    options: [
      { fr: "Évaluer l'impact technique, financier et calendaire de ce changement technologique avant de prendre une décision.", en: "Evaluate the technical, financial, and schedule impact of this technological shift before making a decision." },
      { fr: "Refuser fermement la demande car le contrat initial est signé et contraignant.", en: "Firmly refuse the request because the initial contract is signed and binding." },
      { fr: "Mettre à jour immédiatement la ligne de base du projet avec la nouvelle technologie.", en: "Immediately update the project baseline with the new technology." },
      { fr: "Demander à l'équipe de développement d'arrêter le projet en attendant l'évaluation.", en: "Ask the development team to stop the project pending the evaluation." },
    ],
    correct: 0,
    explanation: {
      fr: "Tout changement technologique majeur nécessite une analyse d'impact rigoureuse sur tous les aspects du projet afin de guider le comité de décision.",
      en: "Any major technological change requires a rigorous impact analysis on all project aspects to guide the decision-making committee."
    }
  },
  {
    id: "pd110",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet d'intégration d'un outil CRM est divisée sur la méthode de test à adopter. Quelle approche de résolution de conflit le leader technique doit-il favoriser ?",
      en: "At PMP doré, the team for a CRM tool integration project is split on the testing method to adopt. Which conflict resolution approach should the technical lead promote?"
    },
    options: [
      { fr: "La collaboration (ou résolution de problèmes), en confrontant les points de vue pour trouver une solution partagée.", en: "Collaboration (or problem-solving), by confronting viewpoints to find a shared solution." },
      { fr: "Le compromis, en demandant à chacun de renoncer à la moitié de ses exigences.", en: "Compromise, by asking everyone to give up half of their requirements." },
      { fr: "La force (ou coercition), en imposant sa propre décision technique.", en: "Force (or coercion), by imposing their own technical decision." },
      { fr: "L'évitement, en laissant l'équipe résoudre le problème sans intervenir.", en: "Avoidance, by letting the team resolve the issue without intervening." },
    ],
    correct: 0,
    explanation: {
      fr: "La collaboration est la technique la plus constructive de résolution de conflits. Elle permet d'aboutir à une décision consensuelle et durable basée sur les faits.",
      en: "Collaboration is the most constructive conflict resolution technique. It leads to a consensus-based and sustainable decision based on facts."
    }
  },
  {
    id: "pd111",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, lors d'un projet d'automatisation de la chaîne logistique, deux membres clés de l'équipe refusent de collaborer en raison de malentendus interculturels. Que doit faire le facilitateur agile ?",
      en: "At PMP doré, during a supply chain automation project, two key team members refuse to collaborate due to cross-cultural misunderstandings. What should the agile facilitator do?"
    },
    options: [
      { fr: "Faciliter une discussion ouverte sur les styles de communication et organiser une formation de sensibilisation culturelle.", en: "Facilitate an open discussion on communication styles and organize cultural awareness training." },
      { fr: "Remplacer l'un des membres par un ressource locale pour simplifier le travail.", en: "Replace one of the members with a local resource to simplify the work." },
      { fr: "Leur demander de communiquer uniquement par écrit pour éviter les frictions verbales.", en: "Ask them to communicate only in writing to avoid verbal friction." },
      { fr: "Laisser les ressources gérer leur relation de manière autonome sans interférer.", en: "Let the resources manage their relationship autonomously without interfering." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit faire preuve d'intelligence émotionnelle et encourager la diversité. Faciliter une discussion sur la communication aide à lever les barrières culturelles.",
      en: "The project manager must demonstrate emotional intelligence and encourage diversity. Facilitating a discussion on communication helps remove cultural barriers."
    }
  },
  {
    id: "pd112",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, un membre de l'équipe agile signale un obstacle technique bloquant lors du Daily Standup. Qui est responsable de la résolution de cet obstacle ?",
      en: "At PMP doré, an agile team member reports a blocking technical obstacle during the Daily Standup. Who is responsible for resolving this obstacle?"
    },
    options: [
      { fr: "Le Scrum Master (ou le leader serviteur), qui doit aider à éliminer l'obstacle pour l'équipe.", en: "The Scrum Master (or servant leader), who must help remove the obstacle for the team." },
      { fr: "Le membre de l'équipe lui-même, car l'équipe est auto-organisée.", en: "The team member themselves, as the team is self-organized." },
      { fr: "Le Product Owner, qui gère la priorisation technique des bugs.", en: "The Product Owner, who manages the technical prioritization of bugs." },
      { fr: "Le sponsor du projet, qui alloue les ressources de développement.", en: "The project sponsor, who allocates development resources." },
    ],
    correct: 0,
    explanation: {
      fr: "Le Scrum Master a pour rôle principal de faciliter le travail de l'équipe en éliminant les obstacles et les distractions externes.",
      en: "The Scrum Master's primary role is to facilitate the team's work by removing obstacles and external distractions."
    }
  },
  {
    id: "pd113",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de développement d'une application mobile de paiement identifie des défauts répétitifs sur un composant livré. Quelle est la première action corrective à mener ?",
      en: "At PMP doré, the team for a mobile payment app development project identifies recurring defects on a delivered component. What is the first corrective action to take?"
    },
    options: [
      { fr: "Mener une analyse de cause racine (diagramme d'Ishikawa/5 Pourquoi) pour identifier la source des défauts.", en: "Conduct a root cause analysis (Ishikawa diagram/5 Whys) to identify the source of the defects." },
      { fr: "Augmenter simplement le temps de test en fin de cycle de développement.", en: "Simply increase testing time at the end of the development cycle." },
      { fr: "Rejeter la faute sur le prestataire externe ayant développé le composant.", en: "Blame the external vendor who developed the component." },
      { fr: "Demander une réévaluation complète du budget qualité du projet.", en: "Request a complete re-evaluation of the project's quality budget." },
    ],
    correct: 0,
    explanation: {
      fr: "Pour corriger durablement les problèmes de qualité, il est indispensable de trouver la cause première (cause racine) plutôt que de traiter uniquement les symptômes.",
      en: "To permanently correct quality issues, it is essential to find the root cause rather than only treating the symptoms."
    }
  },
  {
    id: "pd114",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, le client d'un projet de construction d'un nouveau centre de R&D valide tous les livrables mais refuse de signer le procès-verbal de réception officielle. Quelle est la meilleure action du Product Owner ?",
      en: "At PMP doré, the client of a R&D center construction project validates all deliverables but refuses to sign the official acceptance certificate. What is the best action for the Product Owner?"
    },
    options: [
      { fr: "Rencontrer le client pour comprendre ses réticences à signer formellement et documenter ses réserves éventuelles.", en: "Meet with the client to understand their reluctance to sign formally and document any potential reservations." },
      { fr: "Considérer le projet comme clos unilatéralement puisque les livrables fonctionnent.", en: "Consider the project unilaterally closed since the deliverables are functioning." },
      { fr: "Menacer le client d'interrompre le support technique immédiatement.", en: "Threaten the client with immediately stopping technical support." },
      { fr: "Escalader directement le problème au service juridique de PMP doré.", en: "Directly escalate the issue to PMP doré's legal department." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit rechercher la collaboration et comprendre la cause du blocage de signature pour résoudre la situation diplomatiquement.",
      en: "The project manager must seek collaboration and understand the cause of the signature block to resolve the situation diplomatically."
    }
  },
  {
    id: "pd115",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de migration de base de données clients souhaite optimiser le processus de déploiement. Quel outil d'amélioration continue le sponsor du projet doit-il suggérer ?",
      en: "At PMP doré, the team for a customer database migration project wants to optimize the deployment process. Which continuous improvement tool should the project sponsor suggest?"
    },
    options: [
      { fr: "Une rétrospective d'équipe dédiée ou une cartographie de flux de valeur (Value Stream Mapping).", en: "A dedicated team retrospective or a Value Stream Mapping workshop." },
      { fr: "Une revue des performances individuelles des membres de l'équipe.", en: "An individual performance review of the team members." },
      { fr: "Un audit financier externe des coûts de développement.", en: "An external financial audit of development costs." },
      { fr: "La réécriture complète de la charte du projet.", en: "A complete rewriting of the project charter." },
    ],
    correct: 0,
    explanation: {
      fr: "Les rétrospectives et la cartographie de flux de valeur sont des outils de lean/agile conçus pour analyser les goulots d'étranglement et optimiser les processus continus.",
      en: "Retrospectives and Value Stream Mapping are lean/agile tools designed to analyze bottlenecks and optimize continuous processes."
    }
  },
  {
    id: "pd116",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, lors d'un projet d'intégration d'un outil CRM, une partie prenante influente demande des fonctionnalités hors périmètre directement à l'équipe. Que doit faire le leader technique ?",
      en: "At PMP doré, during a CRM tool integration project, an influential stakeholder requests out-of-scope features directly from the team. What should the technical lead do?"
    },
    options: [
      { fr: "Demander à la partie prenante de soumettre sa demande via le processus de contrôle des changements ou en parler au Product Owner.", en: "Ask the stakeholder to submit their request through the change control process or discuss it with the Product Owner." },
      { fr: "Demander à l'équipe d'implémenter la demande pour conserver de bonnes relations.", en: "Ask the team to implement the request to maintain good relations." },
      { fr: "Escalader immédiatement la demande au sponsor pour faire arbitrer le périmètre.", en: "Immediately escalate the request to the sponsor to arbitrate the scope." },
      { fr: "Ignorer la demande et bloquer toutes les communications futures avec cette partie prenante.", en: "Ignore the request and block all future communications with this stakeholder." },
    ],
    correct: 0,
    explanation: {
      fr: "Toutes les demandes de changement ou de fonctionnalités hors périmètre doivent être formalisées et évaluées à travers le contrôle des changements (ou le Product Owner en agile) pour éviter la dérive des objectifs.",
      en: "All requests for changes or out-of-scope features must be formalized and evaluated through change control (or the Product Owner in agile) to prevent scope creep."
    }
  },
  {
    id: "pd117",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, le client d'un projet d'automatisation de la chaîne logistique souhaite changer de technologie en milieu d'exécution. Quelle est la première étape que le facilitateur agile doit entreprendre ?",
      en: "At PMP doré, the client of a supply chain automation project wants to switch technologies mid-execution. What is the first step the agile facilitator should take?"
    },
    options: [
      { fr: "Évaluer l'impact technique, financier et calendaire de ce changement technologique avant de prendre une décision.", en: "Evaluate the technical, financial, and schedule impact of this technological shift before making a decision." },
      { fr: "Refuser fermement la demande car le contrat initial est signé et contraignant.", en: "Firmly refuse the request because the initial contract is signed and binding." },
      { fr: "Mettre à jour immédiatement la ligne de base du projet avec la nouvelle technologie.", en: "Immediately update the project baseline with the new technology." },
      { fr: "Demander à l'équipe de développement d'arrêter le projet en attendant l'évaluation.", en: "Ask the development team to stop the project pending the evaluation." },
    ],
    correct: 0,
    explanation: {
      fr: "Tout changement technologique majeur nécessite une analyse d'impact rigoureuse sur tous les aspects du projet afin de guider le comité de décision.",
      en: "Any major technological change requires a rigorous impact analysis on all project aspects to guide the decision-making committee."
    }
  },
  {
    id: "pd118",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de déploiement cloud est divisée sur la méthode de test à adopter. Quelle approche de résolution de conflit le chef de projet doit-il favoriser ?",
      en: "At PMP doré, the team for a cloud deployment project is split on the testing method to adopt. Which conflict resolution approach should the project manager promote?"
    },
    options: [
      { fr: "La collaboration (ou résolution de problèmes), en confrontant les points de vue pour trouver une solution partagée.", en: "Collaboration (or problem-solving), by confronting viewpoints to find a shared solution." },
      { fr: "Le compromis, en demandant à chacun de renoncer à la moitié de ses exigences.", en: "Compromise, by asking everyone to give up half of their requirements." },
      { fr: "La force (ou coercition), en imposant sa propre décision technique.", en: "Force (or coercion), by imposing their own technical decision." },
      { fr: "L'évitement, en laissant l'équipe résoudre le problème sans intervenir.", en: "Avoidance, by letting the team resolve the issue without intervening." },
    ],
    correct: 0,
    explanation: {
      fr: "La collaboration est la technique la plus constructive de résolution de conflits. Elle permet d'aboutir à une décision consensuelle et durable basée sur les faits.",
      en: "Collaboration is the most constructive conflict resolution technique. It leads to a consensus-based and sustainable decision based on facts."
    }
  },
  {
    id: "pd119",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, lors d'un projet de développement d'une application mobile de paiement, deux membres clés de l'équipe refusent de collaborer en raison de malentendus interculturels. Que doit faire le Scrum Master ?",
      en: "At PMP doré, during a mobile payment app development project, two key team members refuse to collaborate due to cross-cultural misunderstandings. What should the Scrum Master do?"
    },
    options: [
      { fr: "Faciliter une discussion ouverte sur les styles de communication et organiser une formation de sensibilisation culturelle.", en: "Facilitate an open discussion on communication styles and organize cultural awareness training." },
      { fr: "Remplacer l'un des membres par un ressource locale pour simplifier le travail.", en: "Replace one of the members with a local resource to simplify the work." },
      { fr: "Leur demander de communiquer uniquement par écrit pour éviter les frictions verbales.", en: "Ask them to communicate only in writing to avoid verbal friction." },
      { fr: "Laisser les ressources gérer leur relation de manière autonome sans interférer.", en: "Let the resources manage their relationship autonomously without interfering." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit faire preuve d'intelligence émotionnelle et encourager la diversité. Faciliter une discussion sur la communication aide à lever les barrières culturelles.",
      en: "The project manager must demonstrate emotional intelligence and encourage diversity. Facilitating a discussion on communication helps remove cultural barriers."
    }
  },
  {
    id: "pd120",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, un membre de l'équipe agile signale un obstacle technique bloquant lors du Daily Standup. Qui est responsable de la résolution de cet obstacle ?",
      en: "At PMP doré, an agile team member reports a blocking technical obstacle during the Daily Standup. Who is responsible for resolving this obstacle?"
    },
    options: [
      { fr: "Le Scrum Master (ou le leader serviteur), qui doit aider à éliminer l'obstacle pour l'équipe.", en: "The Scrum Master (or servant leader), who must help remove the obstacle for the team." },
      { fr: "Le membre de l'équipe lui-même, car l'équipe est auto-organisée.", en: "The team member themselves, as the team is self-organized." },
      { fr: "Le Product Owner, qui gère la priorisation technique des bugs.", en: "The Product Owner, who manages the technical prioritization of bugs." },
      { fr: "Le sponsor du projet, qui alloue les ressources de développement.", en: "The project sponsor, who allocates development resources." },
    ],
    correct: 0,
    explanation: {
      fr: "Le Scrum Master a pour rôle principal de faciliter le travail de l'équipe en éliminant les obstacles et les distractions externes.",
      en: "The Scrum Master's primary role is to facilitate the team's work by removing obstacles and external distractions."
    }
  },
  {
    id: "pd121",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de migration de base de données clients identifie des défauts répétitifs sur un composant livré. Quelle est la première action corrective à mener ?",
      en: "At PMP doré, the team for a customer database migration project identifies recurring defects on a delivered component. What is the first corrective action to take?"
    },
    options: [
      { fr: "Mener une analyse de cause racine (diagramme d'Ishikawa/5 Pourquoi) pour identifier la source des défauts.", en: "Conduct a root cause analysis (Ishikawa diagram/5 Whys) to identify the source of the defects." },
      { fr: "Augmenter simplement le temps de test en fin de cycle de développement.", en: "Simply increase testing time at the end of the development cycle." },
      { fr: "Rejeter la faute sur le prestataire externe ayant développé le composant.", en: "Blame the external vendor who developed the component." },
      { fr: "Demander une réévaluation complète du budget qualité du projet.", en: "Request a complete re-evaluation of the project's quality budget." },
    ],
    correct: 0,
    explanation: {
      fr: "Pour corriger durablement les problèmes de qualité, il est indispensable de trouver la cause première (cause racine) plutôt que de traiter uniquement les symptômes.",
      en: "To permanently correct quality issues, it is essential to find the root cause rather than only treating the symptoms."
    }
  },
  {
    id: "pd122",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, le client d'un projet d'intégration d'un outil CRM valide tous les livrables mais refuse de signer le procès-verbal de réception officielle. Quelle est la meilleure action du leader technique ?",
      en: "At PMP doré, the client of a CRM tool integration project validates all deliverables but refuses to sign the official acceptance certificate. What is the best action for the technical lead?"
    },
    options: [
      { fr: "Rencontrer le client pour comprendre ses réticences à signer formellement et documenter ses réserves éventuelles.", en: "Meet with the client to understand their reluctance to sign formally and document any potential reservations." },
      { fr: "Considérer le projet comme clos unilatéralement puisque les livrables fonctionnent.", en: "Consider the project unilaterally closed since the deliverables are functioning." },
      { fr: "Menacer le client d'interrompre le support technique immédiatement.", en: "Threaten the client with immediately stopping technical support." },
      { fr: "Escalader directement le problème au service juridique de PMP doré.", en: "Directly escalate the issue to PMP doré's legal department." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit rechercher la collaboration et comprendre la cause du blocage de signature pour résoudre la situation diplomatiquement.",
      en: "The project manager must seek collaboration and understand the cause of the signature block to resolve the situation diplomatically."
    }
  },
  {
    id: "pd123",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet d'automatisation de la chaîne logistique souhaite optimiser le processus de déploiement. Quel outil d'amélioration continue le facilitateur agile doit-il suggérer ?",
      en: "At PMP doré, the team for a supply chain automation project wants to optimize the deployment process. Which continuous improvement tool should the agile facilitator suggest?"
    },
    options: [
      { fr: "Une rétrospective d'équipe dédiée ou une cartographie de flux de valeur (Value Stream Mapping).", en: "A dedicated team retrospective or a Value Stream Mapping workshop." },
      { fr: "Une revue des performances individuelles des membres de l'équipe.", en: "An individual performance review of the team members." },
      { fr: "Un audit financier externe des coûts de développement.", en: "An external financial audit of development costs." },
      { fr: "La réécriture complète de la charte du projet.", en: "A complete rewriting of the project charter." },
    ],
    correct: 0,
    explanation: {
      fr: "Les rétrospectives et la cartographie de flux de valeur sont des outils de lean/agile conçus pour analyser les goulots d'étranglement et optimiser les processus continus.",
      en: "Retrospectives and Value Stream Mapping are lean/agile tools designed to analyze bottlenecks and optimize continuous processes."
    }
  },
  {
    id: "pd124",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, lors d'un projet de déploiement cloud, une partie prenante influente demande des fonctionnalités hors périmètre directement à l'équipe. Que doit faire le chef de projet ?",
      en: "At PMP doré, during a cloud deployment project, an influential stakeholder requests out-of-scope features directly from the team. What should the project manager do?"
    },
    options: [
      { fr: "Demander à la partie prenante de soumettre sa demande via le processus de contrôle des changements ou en parler au Product Owner.", en: "Ask the stakeholder to submit their request through the change control process or discuss it with the Product Owner." },
      { fr: "Demander à l'équipe d'implémenter la demande pour conserver de bonnes relations.", en: "Ask the team to implement the request to maintain good relations." },
      { fr: "Escalader immédiatement la demande au sponsor pour faire arbitrer le périmètre.", en: "Immediately escalate the request to the sponsor to arbitrate the scope." },
      { fr: "Ignorer la demande et bloquer toutes les communications futures avec cette partie prenante.", en: "Ignore the request and block all future communications with this stakeholder." },
    ],
    correct: 0,
    explanation: {
      fr: "Toutes les demandes de changement ou de fonctionnalités hors périmètre doivent être formalisées et évaluées à travers le contrôle des changements (ou le Product Owner en agile) pour éviter la dérive des objectifs.",
      en: "All requests for changes or out-of-scope features must be formalized and evaluated through change control (or the Product Owner in agile) to prevent scope creep."
    }
  },
  {
    id: "pd125",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, le client d'un projet de développement d'une application mobile de paiement souhaite changer de technologie en milieu d'exécution. Quelle est la première étape que le Scrum Master doit entreprendre ?",
      en: "At PMP doré, the client of a mobile payment app development project wants to switch technologies mid-execution. What is the first step the Scrum Master should take?"
    },
    options: [
      { fr: "Évaluer l'impact technique, financier et calendaire de ce changement technologique avant de prendre une décision.", en: "Evaluate the technical, financial, and schedule impact of this technological shift before making a decision." },
      { fr: "Refuser fermement la demande car le contrat initial est signé et contraignant.", en: "Firmly refuse the request because the initial contract is signed and binding." },
      { fr: "Mettre à jour immédiatement la ligne de base du projet avec la nouvelle technologie.", en: "Immediately update the project baseline with the new technology." },
      { fr: "Demander à l'équipe de développement d'arrêter le projet en attendant l'évaluation.", en: "Ask the development team to stop the project pending the evaluation." },
    ],
    correct: 0,
    explanation: {
      fr: "Tout changement technologique majeur nécessite une analyse d'impact rigoureuse sur tous les aspects du projet afin de guider le comité de décision.",
      en: "Any major technological change requires a rigorous impact analysis on all project aspects to guide the decision-making committee."
    }
  },
  {
    id: "pd126",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de construction d'un nouveau centre de R&D est divisée sur la méthode de test à adopter. Quelle approche de résolution de conflit le Product Owner doit-il favoriser ?",
      en: "At PMP doré, the team for a R&D center construction project is split on the testing method to adopt. Which conflict resolution approach should the Product Owner promote?"
    },
    options: [
      { fr: "La collaboration (ou résolution de problèmes), en confrontant les points de vue pour trouver une solution partagée.", en: "Collaboration (or problem-solving), by confronting viewpoints to find a shared solution." },
      { fr: "Le compromis, en demandant à chacun de renoncer à la moitié de ses exigences.", en: "Compromise, by asking everyone to give up half of their requirements." },
      { fr: "La force (ou coercition), en imposant sa propre décision technique.", en: "Force (or coercion), by imposing their own technical decision." },
      { fr: "L'évitement, en laissant l'équipe résoudre le problème sans intervenir.", en: "Avoidance, by letting the team resolve the issue without intervening." },
    ],
    correct: 0,
    explanation: {
      fr: "La collaboration est la technique la plus constructive de résolution de conflits. Elle permet d'aboutir à une décision consensuelle et durable basée sur les faits.",
      en: "Collaboration is the most constructive conflict resolution technique. It leads to a consensus-based and sustainable decision based on facts."
    }
  },
  {
    id: "pd127",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, lors d'un projet de migration de base de données clients, deux membres clés de l'équipe refusent de collaborer en raison de malentendus interculturels. Que doit faire le sponsor du projet ?",
      en: "At PMP doré, during a customer database migration project, two key team members refuse to collaborate due to cross-cultural misunderstandings. What should the project sponsor do?"
    },
    options: [
      { fr: "Faciliter une discussion ouverte sur les styles de communication et organiser une formation de sensibilisation culturelle.", en: "Facilitate an open discussion on communication styles and organize cultural awareness training." },
      { fr: "Remplacer l'un des membres par un ressource locale pour simplifier le travail.", en: "Replace one of the members with a local resource to simplify the work." },
      { fr: "Leur demander de communiquer uniquement par écrit pour éviter les frictions verbales.", en: "Ask them to communicate only in writing to avoid verbal friction." },
      { fr: "Laisser les ressources gérer leur relation de manière autonome sans interférer.", en: "Let the resources manage their relationship autonomously without interfering." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit faire preuve d'intelligence émotionnelle et encourager la diversité. Faciliter une discussion sur la communication aide à lever les barrières culturelles.",
      en: "The project manager must demonstrate emotional intelligence and encourage diversity. Facilitating a discussion on communication helps remove cultural barriers."
    }
  },
  {
    id: "pd128",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, un membre de l'équipe agile signale un obstacle technique bloquant lors du Daily Standup. Qui est responsable de la résolution de cet obstacle ?",
      en: "At PMP doré, an agile team member reports a blocking technical obstacle during the Daily Standup. Who is responsible for resolving this obstacle?"
    },
    options: [
      { fr: "Le Scrum Master (ou le leader serviteur), qui doit aider à éliminer l'obstacle pour l'équipe.", en: "The Scrum Master (or servant leader), who must help remove the obstacle for the team." },
      { fr: "Le membre de l'équipe lui-même, car l'équipe est auto-organisée.", en: "The team member themselves, as the team is self-organized." },
      { fr: "Le Product Owner, qui gère la priorisation technique des bugs.", en: "The Product Owner, who manages the technical prioritization of bugs." },
      { fr: "Le sponsor du projet, qui alloue les ressources de développement.", en: "The project sponsor, who allocates development resources." },
    ],
    correct: 0,
    explanation: {
      fr: "Le Scrum Master a pour rôle principal de faciliter le travail de l'équipe en éliminant les obstacles et les distractions externes.",
      en: "The Scrum Master's primary role is to facilitate the team's work by removing obstacles and external distractions."
    }
  },
  {
    id: "pd129",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet d'automatisation de la chaîne logistique identifie des défauts répétitifs sur un composant livré. Quelle est la première action corrective à mener ?",
      en: "At PMP doré, the team for a supply chain automation project identifies recurring defects on a delivered component. What is the first corrective action to take?"
    },
    options: [
      { fr: "Mener une analyse de cause racine (diagramme d'Ishikawa/5 Pourquoi) pour identifier la source des défauts.", en: "Conduct a root cause analysis (Ishikawa diagram/5 Whys) to identify the source of the defects." },
      { fr: "Augmenter simplement le temps de test en fin de cycle de développement.", en: "Simply increase testing time at the end of the development cycle." },
      { fr: "Rejeter la faute sur le prestataire externe ayant développé le composant.", en: "Blame the external vendor who developed the component." },
      { fr: "Demander une réévaluation complète du budget qualité du projet.", en: "Request a complete re-evaluation of the project's quality budget." },
    ],
    correct: 0,
    explanation: {
      fr: "Pour corriger durablement les problèmes de qualité, il est indispensable de trouver la cause première (cause racine) plutôt que de traiter uniquement les symptômes.",
      en: "To permanently correct quality issues, it is essential to find the root cause rather than only treating the symptoms."
    }
  },
  {
    id: "pd130",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, le client d'un projet de déploiement cloud valide tous les livrables mais refuse de signer le procès-verbal de réception officielle. Quelle est la meilleure action du chef de projet ?",
      en: "At PMP doré, the client of a cloud deployment project validates all deliverables but refuses to sign the official acceptance certificate. What is the best action for the project manager?"
    },
    options: [
      { fr: "Rencontrer le client pour comprendre ses réticences à signer formellement et documenter ses réserves éventuelles.", en: "Meet with the client to understand their reluctance to sign formally and document any potential reservations." },
      { fr: "Considérer le projet comme clos unilatéralement puisque les livrables fonctionnent.", en: "Consider the project unilaterally closed since the deliverables are functioning." },
      { fr: "Menacer le client d'interrompre le support technique immédiatement.", en: "Threaten the client with immediately stopping technical support." },
      { fr: "Escalader directement le problème au service juridique de PMP doré.", en: "Directly escalate the issue to PMP doré's legal department." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit rechercher la collaboration et comprendre la cause du blocage de signature pour résoudre la situation diplomatiquement.",
      en: "The project manager must seek collaboration and understand the cause of the signature block to resolve the situation diplomatically."
    }
  },
  {
    id: "pd131",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de développement d'une application mobile de paiement souhaite optimiser le processus de déploiement. Quel outil d'amélioration continue le Scrum Master doit-il suggérer ?",
      en: "At PMP doré, the team for a mobile payment app development project wants to optimize the deployment process. Which continuous improvement tool should the Scrum Master suggest?"
    },
    options: [
      { fr: "Une rétrospective d'équipe dédiée ou une cartographie de flux de valeur (Value Stream Mapping).", en: "A dedicated team retrospective or a Value Stream Mapping workshop." },
      { fr: "Une revue des performances individuelles des membres de l'équipe.", en: "An individual performance review of the team members." },
      { fr: "Un audit financier externe des coûts de développement.", en: "An external financial audit of development costs." },
      { fr: "La réécriture complète de la charte du projet.", en: "A complete rewriting of the project charter." },
    ],
    correct: 0,
    explanation: {
      fr: "Les rétrospectives et la cartographie de flux de valeur sont des outils de lean/agile conçus pour analyser les goulots d'étranglement et optimiser les processus continus.",
      en: "Retrospectives and Value Stream Mapping are lean/agile tools designed to analyze bottlenecks and optimize continuous processes."
    }
  },
  {
    id: "pd132",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, lors d'un projet de construction d'un nouveau centre de R&D, une partie prenante influente demande des fonctionnalités hors périmètre directement à l'équipe. Que doit faire le Product Owner ?",
      en: "At PMP doré, during a R&D center construction project, an influential stakeholder requests out-of-scope features directly from the team. What should the Product Owner do?"
    },
    options: [
      { fr: "Demander à la partie prenante de soumettre sa demande via le processus de contrôle des changements ou en parler au Product Owner.", en: "Ask the stakeholder to submit their request through the change control process or discuss it with the Product Owner." },
      { fr: "Demander à l'équipe d'implémenter la demande pour conserver de bonnes relations.", en: "Ask the team to implement the request to maintain good relations." },
      { fr: "Escalader immédiatement la demande au sponsor pour faire arbitrer le périmètre.", en: "Immediately escalate the request to the sponsor to arbitrate the scope." },
      { fr: "Ignorer la demande et bloquer toutes les communications futures avec cette partie prenante.", en: "Ignore the request and block all future communications with this stakeholder." },
    ],
    correct: 0,
    explanation: {
      fr: "Toutes les demandes de changement ou de fonctionnalités hors périmètre doivent être formalisées et évaluées à travers le contrôle des changements (ou le Product Owner en agile) pour éviter la dérive des objectifs.",
      en: "All requests for changes or out-of-scope features must be formalized and evaluated through change control (or the Product Owner in agile) to prevent scope creep."
    }
  },
  {
    id: "pd133",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, le client d'un projet de migration de base de données clients souhaite changer de technologie en milieu d'exécution. Quelle est la première étape que le sponsor du projet doit entreprendre ?",
      en: "At PMP doré, the client of a customer database migration project wants to switch technologies mid-execution. What is the first step the project sponsor should take?"
    },
    options: [
      { fr: "Évaluer l'impact technique, financier et calendaire de ce changement technologique avant de prendre une décision.", en: "Evaluate the technical, financial, and schedule impact of this technological shift before making a decision." },
      { fr: "Refuser fermement la demande car le contrat initial est signé et contraignant.", en: "Firmly refuse the request because the initial contract is signed and binding." },
      { fr: "Mettre à jour immédiatement la ligne de base du projet avec la nouvelle technologie.", en: "Immediately update the project baseline with the new technology." },
      { fr: "Demander à l'équipe de développement d'arrêter le projet en attendant l'évaluation.", en: "Ask the development team to stop the project pending the evaluation." },
    ],
    correct: 0,
    explanation: {
      fr: "Tout changement technologique majeur nécessite une analyse d'impact rigoureuse sur tous les aspects du projet afin de guider le comité de décision.",
      en: "Any major technological change requires a rigorous impact analysis on all project aspects to guide the decision-making committee."
    }
  },
  {
    id: "pd134",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet d'intégration d'un outil CRM est divisée sur la méthode de test à adopter. Quelle approche de résolution de conflit le leader technique doit-il favoriser ?",
      en: "At PMP doré, the team for a CRM tool integration project is split on the testing method to adopt. Which conflict resolution approach should the technical lead promote?"
    },
    options: [
      { fr: "La collaboration (ou résolution de problèmes), en confrontant les points de vue pour trouver une solution partagée.", en: "Collaboration (or problem-solving), by confronting viewpoints to find a shared solution." },
      { fr: "Le compromis, en demandant à chacun de renoncer à la moitié de ses exigences.", en: "Compromise, by asking everyone to give up half of their requirements." },
      { fr: "La force (ou coercition), en imposant sa propre décision technique.", en: "Force (or coercion), by imposing their own technical decision." },
      { fr: "L'évitement, en laissant l'équipe résoudre le problème sans intervenir.", en: "Avoidance, by letting the team resolve the issue without intervening." },
    ],
    correct: 0,
    explanation: {
      fr: "La collaboration est la technique la plus constructive de résolution de conflits. Elle permet d'aboutir à une décision consensuelle et durable basée sur les faits.",
      en: "Collaboration is the most constructive conflict resolution technique. It leads to a consensus-based and sustainable decision based on facts."
    }
  },
  {
    id: "pd135",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, lors d'un projet d'automatisation de la chaîne logistique, deux membres clés de l'équipe refusent de collaborer en raison de malentendus interculturels. Que doit faire le facilitateur agile ?",
      en: "At PMP doré, during a supply chain automation project, two key team members refuse to collaborate due to cross-cultural misunderstandings. What should the agile facilitator do?"
    },
    options: [
      { fr: "Faciliter une discussion ouverte sur les styles de communication et organiser une formation de sensibilisation culturelle.", en: "Facilitate an open discussion on communication styles and organize cultural awareness training." },
      { fr: "Remplacer l'un des membres par un ressource locale pour simplifier le travail.", en: "Replace one of the members with a local resource to simplify the work." },
      { fr: "Leur demander de communiquer uniquement par écrit pour éviter les frictions verbales.", en: "Ask them to communicate only in writing to avoid verbal friction." },
      { fr: "Laisser les ressources gérer leur relation de manière autonome sans interférer.", en: "Let the resources manage their relationship autonomously without interfering." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit faire preuve d'intelligence émotionnelle et encourager la diversité. Faciliter une discussion sur la communication aide à lever les barrières culturelles.",
      en: "The project manager must demonstrate emotional intelligence and encourage diversity. Facilitating a discussion on communication helps remove cultural barriers."
    }
  },
  {
    id: "pd136",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, un membre de l'équipe agile signale un obstacle technique bloquant lors du Daily Standup. Qui est responsable de la résolution de cet obstacle ?",
      en: "At PMP doré, an agile team member reports a blocking technical obstacle during the Daily Standup. Who is responsible for resolving this obstacle?"
    },
    options: [
      { fr: "Le Scrum Master (ou le leader serviteur), qui doit aider à éliminer l'obstacle pour l'équipe.", en: "The Scrum Master (or servant leader), who must help remove the obstacle for the team." },
      { fr: "Le membre de l'équipe lui-même, car l'équipe est auto-organisée.", en: "The team member themselves, as the team is self-organized." },
      { fr: "Le Product Owner, qui gère la priorisation technique des bugs.", en: "The Product Owner, who manages the technical prioritization of bugs." },
      { fr: "Le sponsor du projet, qui alloue les ressources de développement.", en: "The project sponsor, who allocates development resources." },
    ],
    correct: 0,
    explanation: {
      fr: "Le Scrum Master a pour rôle principal de faciliter le travail de l'équipe en éliminant les obstacles et les distractions externes.",
      en: "The Scrum Master's primary role is to facilitate the team's work by removing obstacles and external distractions."
    }
  },
  {
    id: "pd137",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de développement d'une application mobile de paiement identifie des défauts répétitifs sur un composant livré. Quelle est la première action corrective à mener ?",
      en: "At PMP doré, the team for a mobile payment app development project identifies recurring defects on a delivered component. What is the first corrective action to take?"
    },
    options: [
      { fr: "Mener une analyse de cause racine (diagramme d'Ishikawa/5 Pourquoi) pour identifier la source des défauts.", en: "Conduct a root cause analysis (Ishikawa diagram/5 Whys) to identify the source of the defects." },
      { fr: "Augmenter simplement le temps de test en fin de cycle de développement.", en: "Simply increase testing time at the end of the development cycle." },
      { fr: "Rejeter la faute sur le prestataire externe ayant développé le composant.", en: "Blame the external vendor who developed the component." },
      { fr: "Demander une réévaluation complète du budget qualité du projet.", en: "Request a complete re-evaluation of the project's quality budget." },
    ],
    correct: 0,
    explanation: {
      fr: "Pour corriger durablement les problèmes de qualité, il est indispensable de trouver la cause première (cause racine) plutôt que de traiter uniquement les symptômes.",
      en: "To permanently correct quality issues, it is essential to find the root cause rather than only treating the symptoms."
    }
  },
  {
    id: "pd138",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, le client d'un projet de construction d'un nouveau centre de R&D valide tous les livrables mais refuse de signer le procès-verbal de réception officielle. Quelle est la meilleure action du Product Owner ?",
      en: "At PMP doré, the client of a R&D center construction project validates all deliverables but refuses to sign the official acceptance certificate. What is the best action for the Product Owner?"
    },
    options: [
      { fr: "Rencontrer le client pour comprendre ses réticences à signer formellement et documenter ses réserves éventuelles.", en: "Meet with the client to understand their reluctance to sign formally and document any potential reservations." },
      { fr: "Considérer le projet comme clos unilatéralement puisque les livrables fonctionnent.", en: "Consider the project unilaterally closed since the deliverables are functioning." },
      { fr: "Menacer le client d'interrompre le support technique immédiatement.", en: "Threaten the client with immediately stopping technical support." },
      { fr: "Escalader directement le problème au service juridique de PMP doré.", en: "Directly escalate the issue to PMP doré's legal department." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit rechercher la collaboration et comprendre la cause du blocage de signature pour résoudre la situation diplomatiquement.",
      en: "The project manager must seek collaboration and understand the cause of the signature block to resolve the situation diplomatically."
    }
  },
  {
    id: "pd139",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de migration de base de données clients souhaite optimiser le processus de déploiement. Quel outil d'amélioration continue le sponsor du projet doit-il suggérer ?",
      en: "At PMP doré, the team for a customer database migration project wants to optimize the deployment process. Which continuous improvement tool should the project sponsor suggest?"
    },
    options: [
      { fr: "Une rétrospective d'équipe dédiée ou une cartographie de flux de valeur (Value Stream Mapping).", en: "A dedicated team retrospective or a Value Stream Mapping workshop." },
      { fr: "Une revue des performances individuelles des membres de l'équipe.", en: "An individual performance review of the team members." },
      { fr: "Un audit financier externe des coûts de développement.", en: "An external financial audit of development costs." },
      { fr: "La réécriture complète de la charte du projet.", en: "A complete rewriting of the project charter." },
    ],
    correct: 0,
    explanation: {
      fr: "Les rétrospectives et la cartographie de flux de valeur sont des outils de lean/agile conçus pour analyser les goulots d'étranglement et optimiser les processus continus.",
      en: "Retrospectives and Value Stream Mapping are lean/agile tools designed to analyze bottlenecks and optimize continuous processes."
    }
  },
  {
    id: "pd140",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, lors d'un projet d'intégration d'un outil CRM, une partie prenante influente demande des fonctionnalités hors périmètre directement à l'équipe. Que doit faire le leader technique ?",
      en: "At PMP doré, during a CRM tool integration project, an influential stakeholder requests out-of-scope features directly from the team. What should the technical lead do?"
    },
    options: [
      { fr: "Demander à la partie prenante de soumettre sa demande via le processus de contrôle des changements ou en parler au Product Owner.", en: "Ask the stakeholder to submit their request through the change control process or discuss it with the Product Owner." },
      { fr: "Demander à l'équipe d'implémenter la demande pour conserver de bonnes relations.", en: "Ask the team to implement the request to maintain good relations." },
      { fr: "Escalader immédiatement la demande au sponsor pour faire arbitrer le périmètre.", en: "Immediately escalate the request to the sponsor to arbitrate the scope." },
      { fr: "Ignorer la demande et bloquer toutes les communications futures avec cette partie prenante.", en: "Ignore the request and block all future communications with this stakeholder." },
    ],
    correct: 0,
    explanation: {
      fr: "Toutes les demandes de changement ou de fonctionnalités hors périmètre doivent être formalisées et évaluées à travers le contrôle des changements (ou le Product Owner en agile) pour éviter la dérive des objectifs.",
      en: "All requests for changes or out-of-scope features must be formalized and evaluated through change control (or the Product Owner in agile) to prevent scope creep."
    }
  },
  {
    id: "pd141",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, le client d'un projet d'automatisation de la chaîne logistique souhaite changer de technologie en milieu d'exécution. Quelle est la première étape que le facilitateur agile doit entreprendre ?",
      en: "At PMP doré, the client of a supply chain automation project wants to switch technologies mid-execution. What is the first step the agile facilitator should take?"
    },
    options: [
      { fr: "Évaluer l'impact technique, financier et calendaire de ce changement technologique avant de prendre une décision.", en: "Evaluate the technical, financial, and schedule impact of this technological shift before making a decision." },
      { fr: "Refuser fermement la demande car le contrat initial est signé et contraignant.", en: "Firmly refuse the request because the initial contract is signed and binding." },
      { fr: "Mettre à jour immédiatement la ligne de base du projet avec la nouvelle technologie.", en: "Immediately update the project baseline with the new technology." },
      { fr: "Demander à l'équipe de développement d'arrêter le projet en attendant l'évaluation.", en: "Ask the development team to stop the project pending the evaluation." },
    ],
    correct: 0,
    explanation: {
      fr: "Tout changement technologique majeur nécessite une analyse d'impact rigoureuse sur tous les aspects du projet afin de guider le comité de décision.",
      en: "Any major technological change requires a rigorous impact analysis on all project aspects to guide the decision-making committee."
    }
  },
  {
    id: "pd142",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de déploiement cloud est divisée sur la méthode de test à adopter. Quelle approche de résolution de conflit le chef de projet doit-il favoriser ?",
      en: "At PMP doré, the team for a cloud deployment project is split on the testing method to adopt. Which conflict resolution approach should the project manager promote?"
    },
    options: [
      { fr: "La collaboration (ou résolution de problèmes), en confrontant les points de vue pour trouver une solution partagée.", en: "Collaboration (or problem-solving), by confronting viewpoints to find a shared solution." },
      { fr: "Le compromis, en demandant à chacun de renoncer à la moitié de ses exigences.", en: "Compromise, by asking everyone to give up half of their requirements." },
      { fr: "La force (ou coercition), en imposant sa propre décision technique.", en: "Force (or coercion), by imposing their own technical decision." },
      { fr: "L'évitement, en laissant l'équipe résoudre le problème sans intervenir.", en: "Avoidance, by letting the team resolve the issue without intervening." },
    ],
    correct: 0,
    explanation: {
      fr: "La collaboration est la technique la plus constructive de résolution de conflits. Elle permet d'aboutir à une décision consensuelle et durable basée sur les faits.",
      en: "Collaboration is the most constructive conflict resolution technique. It leads to a consensus-based and sustainable decision based on facts."
    }
  },
  {
    id: "pd143",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, lors d'un projet de développement d'une application mobile de paiement, deux membres clés de l'équipe refusent de collaborer en raison de malentendus interculturels. Que doit faire le Scrum Master ?",
      en: "At PMP doré, during a mobile payment app development project, two key team members refuse to collaborate due to cross-cultural misunderstandings. What should the Scrum Master do?"
    },
    options: [
      { fr: "Faciliter une discussion ouverte sur les styles de communication et organiser une formation de sensibilisation culturelle.", en: "Facilitate an open discussion on communication styles and organize cultural awareness training." },
      { fr: "Remplacer l'un des membres par un ressource locale pour simplifier le travail.", en: "Replace one of the members with a local resource to simplify the work." },
      { fr: "Leur demander de communiquer uniquement par écrit pour éviter les frictions verbales.", en: "Ask them to communicate only in writing to avoid verbal friction." },
      { fr: "Laisser les ressources gérer leur relation de manière autonome sans interférer.", en: "Let the resources manage their relationship autonomously without interfering." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit faire preuve d'intelligence émotionnelle et encourager la diversité. Faciliter une discussion sur la communication aide à lever les barrières culturelles.",
      en: "The project manager must demonstrate emotional intelligence and encourage diversity. Facilitating a discussion on communication helps remove cultural barriers."
    }
  },
  {
    id: "pd144",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, un membre de l'équipe agile signale un obstacle technique bloquant lors du Daily Standup. Qui est responsable de la résolution de cet obstacle ?",
      en: "At PMP doré, an agile team member reports a blocking technical obstacle during the Daily Standup. Who is responsible for resolving this obstacle?"
    },
    options: [
      { fr: "Le Scrum Master (ou le leader serviteur), qui doit aider à éliminer l'obstacle pour l'équipe.", en: "The Scrum Master (or servant leader), who must help remove the obstacle for the team." },
      { fr: "Le membre de l'équipe lui-même, car l'équipe est auto-organisée.", en: "The team member themselves, as the team is self-organized." },
      { fr: "Le Product Owner, qui gère la priorisation technique des bugs.", en: "The Product Owner, who manages the technical prioritization of bugs." },
      { fr: "Le sponsor du projet, qui alloue les ressources de développement.", en: "The project sponsor, who allocates development resources." },
    ],
    correct: 0,
    explanation: {
      fr: "Le Scrum Master a pour rôle principal de faciliter le travail de l'équipe en éliminant les obstacles et les distractions externes.",
      en: "The Scrum Master's primary role is to facilitate the team's work by removing obstacles and external distractions."
    }
  },
  {
    id: "pd145",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de migration de base de données clients identifie des défauts répétitifs sur un composant livré. Quelle est la première action corrective à mener ?",
      en: "At PMP doré, the team for a customer database migration project identifies recurring defects on a delivered component. What is the first corrective action to take?"
    },
    options: [
      { fr: "Mener une analyse de cause racine (diagramme d'Ishikawa/5 Pourquoi) pour identifier la source des défauts.", en: "Conduct a root cause analysis (Ishikawa diagram/5 Whys) to identify the source of the defects." },
      { fr: "Augmenter simplement le temps de test en fin de cycle de développement.", en: "Simply increase testing time at the end of the development cycle." },
      { fr: "Rejeter la faute sur le prestataire externe ayant développé le composant.", en: "Blame the external vendor who developed the component." },
      { fr: "Demander une réévaluation complète du budget qualité du projet.", en: "Request a complete re-evaluation of the project's quality budget." },
    ],
    correct: 0,
    explanation: {
      fr: "Pour corriger durablement les problèmes de qualité, il est indispensable de trouver la cause première (cause racine) plutôt que de traiter uniquement les symptômes.",
      en: "To permanently correct quality issues, it is essential to find the root cause rather than only treating the symptoms."
    }
  },
  {
    id: "pd146",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, le client d'un projet d'intégration d'un outil CRM valide tous les livrables mais refuse de signer le procès-verbal de réception officielle. Quelle est la meilleure action du leader technique ?",
      en: "At PMP doré, the client of a CRM tool integration project validates all deliverables but refuses to sign the official acceptance certificate. What is the best action for the technical lead?"
    },
    options: [
      { fr: "Rencontrer le client pour comprendre ses réticences à signer formellement et documenter ses réserves éventuelles.", en: "Meet with the client to understand their reluctance to sign formally and document any potential reservations." },
      { fr: "Considérer le projet comme clos unilatéralement puisque les livrables fonctionnent.", en: "Consider the project unilaterally closed since the deliverables are functioning." },
      { fr: "Menacer le client d'interrompre le support technique immédiatement.", en: "Threaten the client with immediately stopping technical support." },
      { fr: "Escalader directement le problème au service juridique de PMP doré.", en: "Directly escalate the issue to PMP doré's legal department." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit rechercher la collaboration et comprendre la cause du blocage de signature pour résoudre la situation diplomatiquement.",
      en: "The project manager must seek collaboration and understand the cause of the signature block to resolve the situation diplomatically."
    }
  },
  {
    id: "pd147",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet d'automatisation de la chaîne logistique souhaite optimiser le processus de déploiement. Quel outil d'amélioration continue le facilitateur agile doit-il suggérer ?",
      en: "At PMP doré, the team for a supply chain automation project wants to optimize the deployment process. Which continuous improvement tool should the agile facilitator suggest?"
    },
    options: [
      { fr: "Une rétrospective d'équipe dédiée ou une cartographie de flux de valeur (Value Stream Mapping).", en: "A dedicated team retrospective or a Value Stream Mapping workshop." },
      { fr: "Une revue des performances individuelles des membres de l'équipe.", en: "An individual performance review of the team members." },
      { fr: "Un audit financier externe des coûts de développement.", en: "An external financial audit of development costs." },
      { fr: "La réécriture complète de la charte du projet.", en: "A complete rewriting of the project charter." },
    ],
    correct: 0,
    explanation: {
      fr: "Les rétrospectives et la cartographie de flux de valeur sont des outils de lean/agile conçus pour analyser les goulots d'étranglement et optimiser les processus continus.",
      en: "Retrospectives and Value Stream Mapping are lean/agile tools designed to analyze bottlenecks and optimize continuous processes."
    }
  },
  {
    id: "pd148",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, lors d'un projet de déploiement cloud, une partie prenante influente demande des fonctionnalités hors périmètre directement à l'équipe. Que doit faire le chef de projet ?",
      en: "At PMP doré, during a cloud deployment project, an influential stakeholder requests out-of-scope features directly from the team. What should the project manager do?"
    },
    options: [
      { fr: "Demander à la partie prenante de soumettre sa demande via le processus de contrôle des changements ou en parler au Product Owner.", en: "Ask the stakeholder to submit their request through the change control process or discuss it with the Product Owner." },
      { fr: "Demander à l'équipe d'implémenter la demande pour conserver de bonnes relations.", en: "Ask the team to implement the request to maintain good relations." },
      { fr: "Escalader immédiatement la demande au sponsor pour faire arbitrer le périmètre.", en: "Immediately escalate the request to the sponsor to arbitrate the scope." },
      { fr: "Ignorer la demande et bloquer toutes les communications futures avec cette partie prenante.", en: "Ignore the request and block all future communications with this stakeholder." },
    ],
    correct: 0,
    explanation: {
      fr: "Toutes les demandes de changement ou de fonctionnalités hors périmètre doivent être formalisées et évaluées à travers le contrôle des changements (ou le Product Owner en agile) pour éviter la dérive des objectifs.",
      en: "All requests for changes or out-of-scope features must be formalized and evaluated through change control (or the Product Owner in agile) to prevent scope creep."
    }
  },
  {
    id: "pd149",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, le client d'un projet de développement d'une application mobile de paiement souhaite changer de technologie en milieu d'exécution. Quelle est la première étape que le Scrum Master doit entreprendre ?",
      en: "At PMP doré, the client of a mobile payment app development project wants to switch technologies mid-execution. What is the first step the Scrum Master should take?"
    },
    options: [
      { fr: "Évaluer l'impact technique, financier et calendaire de ce changement technologique avant de prendre une décision.", en: "Evaluate the technical, financial, and schedule impact of this technological shift before making a decision." },
      { fr: "Refuser fermement la demande car le contrat initial est signé et contraignant.", en: "Firmly refuse the request because the initial contract is signed and binding." },
      { fr: "Mettre à jour immédiatement la ligne de base du projet avec la nouvelle technologie.", en: "Immediately update the project baseline with the new technology." },
      { fr: "Demander à l'équipe de développement d'arrêter le projet en attendant l'évaluation.", en: "Ask the development team to stop the project pending the evaluation." },
    ],
    correct: 0,
    explanation: {
      fr: "Tout changement technologique majeur nécessite une analyse d'impact rigoureuse sur tous les aspects du projet afin de guider le comité de décision.",
      en: "Any major technological change requires a rigorous impact analysis on all project aspects to guide the decision-making committee."
    }
  },
  {
    id: "pd150",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de construction d'un nouveau centre de R&D est divisée sur la méthode de test à adopter. Quelle approche de résolution de conflit le Product Owner doit-il favoriser ?",
      en: "At PMP doré, the team for a R&D center construction project is split on the testing method to adopt. Which conflict resolution approach should the Product Owner promote?"
    },
    options: [
      { fr: "La collaboration (ou résolution de problèmes), en confrontant les points de vue pour trouver une solution partagée.", en: "Collaboration (or problem-solving), by confronting viewpoints to find a shared solution." },
      { fr: "Le compromis, en demandant à chacun de renoncer à la moitié de ses exigences.", en: "Compromise, by asking everyone to give up half of their requirements." },
      { fr: "La force (ou coercition), en imposant sa propre décision technique.", en: "Force (or coercion), by imposing their own technical decision." },
      { fr: "L'évitement, en laissant l'équipe résoudre le problème sans intervenir.", en: "Avoidance, by letting the team resolve the issue without intervening." },
    ],
    correct: 0,
    explanation: {
      fr: "La collaboration est la technique la plus constructive de résolution de conflits. Elle permet d'aboutir à une décision consensuelle et durable basée sur les faits.",
      en: "Collaboration is the most constructive conflict resolution technique. It leads to a consensus-based and sustainable decision based on facts."
    }
  },
  {
    id: "pd151",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, lors d'un projet de migration de base de données clients, deux membres clés de l'équipe refusent de collaborer en raison de malentendus interculturels. Que doit faire le sponsor du projet ?",
      en: "At PMP doré, during a customer database migration project, two key team members refuse to collaborate due to cross-cultural misunderstandings. What should the project sponsor do?"
    },
    options: [
      { fr: "Faciliter une discussion ouverte sur les styles de communication et organiser une formation de sensibilisation culturelle.", en: "Facilitate an open discussion on communication styles and organize cultural awareness training." },
      { fr: "Remplacer l'un des membres par un ressource locale pour simplifier le travail.", en: "Replace one of the members with a local resource to simplify the work." },
      { fr: "Leur demander de communiquer uniquement par écrit pour éviter les frictions verbales.", en: "Ask them to communicate only in writing to avoid verbal friction." },
      { fr: "Laisser les ressources gérer leur relation de manière autonome sans interférer.", en: "Let the resources manage their relationship autonomously without interfering." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit faire preuve d'intelligence émotionnelle et encourager la diversité. Faciliter une discussion sur la communication aide à lever les barrières culturelles.",
      en: "The project manager must demonstrate emotional intelligence and encourage diversity. Facilitating a discussion on communication helps remove cultural barriers."
    }
  },
  {
    id: "pd152",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, un membre de l'équipe agile signale un obstacle technique bloquant lors du Daily Standup. Qui est responsable de la résolution de cet obstacle ?",
      en: "At PMP doré, an agile team member reports a blocking technical obstacle during the Daily Standup. Who is responsible for resolving this obstacle?"
    },
    options: [
      { fr: "Le Scrum Master (ou le leader serviteur), qui doit aider à éliminer l'obstacle pour l'équipe.", en: "The Scrum Master (or servant leader), who must help remove the obstacle for the team." },
      { fr: "Le membre de l'équipe lui-même, car l'équipe est auto-organisée.", en: "The team member themselves, as the team is self-organized." },
      { fr: "Le Product Owner, qui gère la priorisation technique des bugs.", en: "The Product Owner, who manages the technical prioritization of bugs." },
      { fr: "Le sponsor du projet, qui alloue les ressources de développement.", en: "The project sponsor, who allocates development resources." },
    ],
    correct: 0,
    explanation: {
      fr: "Le Scrum Master a pour rôle principal de faciliter le travail de l'équipe en éliminant les obstacles et les distractions externes.",
      en: "The Scrum Master's primary role is to facilitate the team's work by removing obstacles and external distractions."
    }
  },
  {
    id: "pd153",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet d'automatisation de la chaîne logistique identifie des défauts répétitifs sur un composant livré. Quelle est la première action corrective à mener ?",
      en: "At PMP doré, the team for a supply chain automation project identifies recurring defects on a delivered component. What is the first corrective action to take?"
    },
    options: [
      { fr: "Mener une analyse de cause racine (diagramme d'Ishikawa/5 Pourquoi) pour identifier la source des défauts.", en: "Conduct a root cause analysis (Ishikawa diagram/5 Whys) to identify the source of the defects." },
      { fr: "Augmenter simplement le temps de test en fin de cycle de développement.", en: "Simply increase testing time at the end of the development cycle." },
      { fr: "Rejeter la faute sur le prestataire externe ayant développé le composant.", en: "Blame the external vendor who developed the component." },
      { fr: "Demander une réévaluation complète du budget qualité du projet.", en: "Request a complete re-evaluation of the project's quality budget." },
    ],
    correct: 0,
    explanation: {
      fr: "Pour corriger durablement les problèmes de qualité, il est indispensable de trouver la cause première (cause racine) plutôt que de traiter uniquement les symptômes.",
      en: "To permanently correct quality issues, it is essential to find the root cause rather than only treating the symptoms."
    }
  },
  {
    id: "pd154",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, le client d'un projet de déploiement cloud valide tous les livrables mais refuse de signer le procès-verbal de réception officielle. Quelle est la meilleure action du chef de projet ?",
      en: "At PMP doré, the client of a cloud deployment project validates all deliverables but refuses to sign the official acceptance certificate. What is the best action for the project manager?"
    },
    options: [
      { fr: "Rencontrer le client pour comprendre ses réticences à signer formellement et documenter ses réserves éventuelles.", en: "Meet with the client to understand their reluctance to sign formally and document any potential reservations." },
      { fr: "Considérer le projet comme clos unilatéralement puisque les livrables fonctionnent.", en: "Consider the project unilaterally closed since the deliverables are functioning." },
      { fr: "Menacer le client d'interrompre le support technique immédiatement.", en: "Threaten the client with immediately stopping technical support." },
      { fr: "Escalader directement le problème au service juridique de PMP doré.", en: "Directly escalate the issue to PMP doré's legal department." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit rechercher la collaboration et comprendre la cause du blocage de signature pour résoudre la situation diplomatiquement.",
      en: "The project manager must seek collaboration and understand the cause of the signature block to resolve the situation diplomatically."
    }
  },
  {
    id: "pd155",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet de développement d'une application mobile de paiement souhaite optimiser le processus de déploiement. Quel outil d'amélioration continue le Scrum Master doit-il suggérer ?",
      en: "At PMP doré, the team for a mobile payment app development project wants to optimize the deployment process. Which continuous improvement tool should the Scrum Master suggest?"
    },
    options: [
      { fr: "Une rétrospective d'équipe dédiée ou une cartographie de flux de valeur (Value Stream Mapping).", en: "A dedicated team retrospective or a Value Stream Mapping workshop." },
      { fr: "Une revue des performances individuelles des membres de l'équipe.", en: "An individual performance review of the team members." },
      { fr: "Un audit financier externe des coûts de développement.", en: "An external financial audit of development costs." },
      { fr: "La réécriture complète de la charte du projet.", en: "A complete rewriting of the project charter." },
    ],
    correct: 0,
    explanation: {
      fr: "Les rétrospectives et la cartographie de flux de valeur sont des outils de lean/agile conçus pour analyser les goulots d'étranglement et optimiser les processus continus.",
      en: "Retrospectives and Value Stream Mapping are lean/agile tools designed to analyze bottlenecks and optimize continuous processes."
    }
  },
  {
    id: "pd156",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, lors d'un projet de construction d'un nouveau centre de R&D, une partie prenante influente demande des fonctionnalités hors périmètre directement à l'équipe. Que doit faire le Product Owner ?",
      en: "At PMP doré, during a R&D center construction project, an influential stakeholder requests out-of-scope features directly from the team. What should the Product Owner do?"
    },
    options: [
      { fr: "Demander à la partie prenante de soumettre sa demande via le processus de contrôle des changements ou en parler au Product Owner.", en: "Ask the stakeholder to submit their request through the change control process or discuss it with the Product Owner." },
      { fr: "Demander à l'équipe d'implémenter la demande pour conserver de bonnes relations.", en: "Ask the team to implement the request to maintain good relations." },
      { fr: "Escalader immédiatement la demande au sponsor pour faire arbitrer le périmètre.", en: "Immediately escalate the request to the sponsor to arbitrate the scope." },
      { fr: "Ignorer la demande et bloquer toutes les communications futures avec cette partie prenante.", en: "Ignore the request and block all future communications with this stakeholder." },
    ],
    correct: 0,
    explanation: {
      fr: "Toutes les demandes de changement ou de fonctionnalités hors périmètre doivent être formalisées et évaluées à travers le contrôle des changements (ou le Product Owner en agile) pour éviter la dérive des objectifs.",
      en: "All requests for changes or out-of-scope features must be formalized and evaluated through change control (or the Product Owner in agile) to prevent scope creep."
    }
  },
  {
    id: "pd157",
    domain: "people",
    difficulty: "easy",
    question: {
      fr: "Chez PMP doré, le client d'un projet de migration de base de données clients souhaite changer de technologie en milieu d'exécution. Quelle est la première étape que le sponsor du projet doit entreprendre ?",
      en: "At PMP doré, the client of a customer database migration project wants to switch technologies mid-execution. What is the first step the project sponsor should take?"
    },
    options: [
      { fr: "Évaluer l'impact technique, financier et calendaire de ce changement technologique avant de prendre une décision.", en: "Evaluate the technical, financial, and schedule impact of this technological shift before making a decision." },
      { fr: "Refuser fermement la demande car le contrat initial est signé et contraignant.", en: "Firmly refuse the request because the initial contract is signed and binding." },
      { fr: "Mettre à jour immédiatement la ligne de base du projet avec la nouvelle technologie.", en: "Immediately update the project baseline with the new technology." },
      { fr: "Demander à l'équipe de développement d'arrêter le projet en attendant l'évaluation.", en: "Ask the development team to stop the project pending the evaluation." },
    ],
    correct: 0,
    explanation: {
      fr: "Tout changement technologique majeur nécessite une analyse d'impact rigoureuse sur tous les aspects du projet afin de guider le comité de décision.",
      en: "Any major technological change requires a rigorous impact analysis on all project aspects to guide the decision-making committee."
    }
  },
  {
    id: "pd158",
    domain: "process",
    difficulty: "medium",
    question: {
      fr: "Chez PMP doré, l'équipe d'un projet d'intégration d'un outil CRM est divisée sur la méthode de test à adopter. Quelle approche de résolution de conflit le leader technique doit-il favoriser ?",
      en: "At PMP doré, the team for a CRM tool integration project is split on the testing method to adopt. Which conflict resolution approach should the technical lead promote?"
    },
    options: [
      { fr: "La collaboration (ou résolution de problèmes), en confrontant les points de vue pour trouver une solution partagée.", en: "Collaboration (or problem-solving), by confronting viewpoints to find a shared solution." },
      { fr: "Le compromis, en demandant à chacun de renoncer à la moitié de ses exigences.", en: "Compromise, by asking everyone to give up half of their requirements." },
      { fr: "La force (ou coercition), en imposant sa propre décision technique.", en: "Force (or coercion), by imposing their own technical decision." },
      { fr: "L'évitement, en laissant l'équipe résoudre le problème sans intervenir.", en: "Avoidance, by letting the team resolve the issue without intervening." },
    ],
    correct: 0,
    explanation: {
      fr: "La collaboration est la technique la plus constructive de résolution de conflits. Elle permet d'aboutir à une décision consensuelle et durable basée sur les faits.",
      en: "Collaboration is the most constructive conflict resolution technique. It leads to a consensus-based and sustainable decision based on facts."
    }
  },
  {
    id: "pd159",
    domain: "business",
    difficulty: "hard",
    question: {
      fr: "Chez PMP doré, lors d'un projet d'automatisation de la chaîne logistique, deux membres clés de l'équipe refusent de collaborer en raison de malentendus interculturels. Que doit faire le facilitateur agile ?",
      en: "At PMP doré, during a supply chain automation project, two key team members refuse to collaborate due to cross-cultural misunderstandings. What should the agile facilitator do?"
    },
    options: [
      { fr: "Faciliter une discussion ouverte sur les styles de communication et organiser une formation de sensibilisation culturelle.", en: "Facilitate an open discussion on communication styles and organize cultural awareness training." },
      { fr: "Remplacer l'un des membres par un ressource locale pour simplifier le travail.", en: "Replace one of the members with a local resource to simplify the work." },
      { fr: "Leur demander de communiquer uniquement par écrit pour éviter les frictions verbales.", en: "Ask them to communicate only in writing to avoid verbal friction." },
      { fr: "Laisser les ressources gérer leur relation de manière autonome sans interférer.", en: "Let the resources manage their relationship autonomously without interfering." },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet doit faire preuve d'intelligence émotionnelle et encourager la diversité. Faciliter une discussion sur la communication aide à lever les barrières culturelles.",
      en: "The project manager must demonstrate emotional intelligence and encourage diversity. Facilitating a discussion on communication helps remove cultural barriers."
    }
  },
]
