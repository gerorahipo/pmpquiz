import type { Question } from '../types'

/** New medium (situational) questions. */
export const MEDIUM_QUESTIONS: Question[] = [
  // ─────────────── PEOPLE (mp01–mp12) ───────────────
  {
    id: 'mp01',
    domain: 'people',
    difficulty: 'medium',
    question: {
      fr: "Un membre expérimenté monopolise la parole en réunion et les juniors n'osent plus s'exprimer. Que doit faire le chef de projet ?",
      en: 'A senior team member dominates meetings and junior members no longer dare to speak. What should the project manager do?',
    },
    options: [
      {
        fr: 'Instaurer des techniques de facilitation (tour de table, temps de parole) pour équilibrer les contributions',
        en: 'Introduce facilitation techniques (round-robin, timeboxed speaking) to balance contributions',
      },
      { fr: 'Demander au senior de ne plus parler en réunion', en: 'Ask the senior member to stop talking in meetings' },
      { fr: 'Organiser des réunions séparées pour les juniors', en: 'Hold separate meetings for junior members' },
      { fr: 'Ne rien faire : l’expérience doit primer', en: 'Do nothing: experience should prevail' },
    ],
    correct: 0,
    explanation: {
      fr: "La sécurité psychologique exige que chacun puisse s'exprimer. La facilitation structurée équilibre les échanges sans exclure personne.",
      en: 'Psychological safety requires everyone to be able to speak. Structured facilitation balances contributions without excluding anyone.',
    },
  },
  {
    id: 'mp02',
    domain: 'people',
    difficulty: 'medium',
    question: {
      fr: "Deux parties prenantes clés donnent des priorités contradictoires à l'équipe, qui ne sait plus quoi traiter en premier. Quelle est la meilleure action ?",
      en: 'Two key stakeholders give the team conflicting priorities and the team no longer knows what to work on first. What is the best action?',
    },
    options: [
      {
        fr: 'Réunir les deux parties prenantes pour aligner les priorités sur la valeur et les objectifs du projet',
        en: 'Bring both stakeholders together to align priorities on value and project objectives',
      },
      { fr: "Laisser l'équipe choisir ce qui lui semble prioritaire", en: 'Let the team pick what seems most important' },
      { fr: 'Suivre la priorité de la partie prenante la plus haut placée', en: 'Follow the priority of the most senior stakeholder' },
      { fr: 'Traiter les demandes dans leur ordre d’arrivée', en: 'Handle requests in order of arrival' },
    ],
    correct: 0,
    explanation: {
      fr: "Le chef de projet facilite l'alignement : rendre le conflit de priorités visible et le résoudre par rapport aux objectifs et à la valeur, plutôt que par la hiérarchie ou le hasard.",
      en: 'The project manager facilitates alignment: make the priority conflict visible and resolve it against objectives and value, not hierarchy or chance.',
    },
  },
  {
    id: 'mp03',
    domain: 'people',
    difficulty: 'medium',
    question: {
      fr: "Après une réorganisation, l'équipe craint pour ses postes et la productivité chute. Que doit faire le chef de projet EN PREMIER ?",
      en: 'After a reorganization, the team fears for their jobs and productivity drops. What should the project manager do FIRST?',
    },
    options: [
      {
        fr: 'Communiquer de façon transparente sur ce qui est connu et relayer les préoccupations à la direction',
        en: 'Communicate transparently about what is known and relay concerns to leadership',
      },
      { fr: 'Promettre que personne ne perdra son poste', en: 'Promise that nobody will lose their job' },
      { fr: 'Ignorer le sujet : ce n’est pas du ressort du projet', en: 'Ignore the topic: it is outside the project’s scope' },
      { fr: 'Ajouter des objectifs de performance pour remotiver', en: 'Add performance targets to re-motivate people' },
    ],
    correct: 0,
    explanation: {
      fr: "Face à l'incertitude organisationnelle : transparence, écoute et escalade des préoccupations. Ne jamais promettre ce qu'on ne contrôle pas.",
      en: 'Facing organizational uncertainty: transparency, listening and escalating concerns. Never promise what you do not control.',
    },
  },
  {
    id: 'mp04',
    domain: 'people',
    difficulty: 'medium',
    question: {
      fr: "Un fournisseur clé ne répond plus aux courriels de l'équipe depuis une semaine, mettant en péril un jalon. Quelle est la meilleure première action ?",
      en: 'A key vendor has not answered the team’s emails for a week, putting a milestone at risk. What is the best first action?',
    },
    options: [
      {
        fr: 'Contacter directement le fournisseur par un autre canal pour comprendre la situation',
        en: 'Reach out to the vendor directly through another channel to understand the situation',
      },
      { fr: 'Envoyer une mise en demeure contractuelle', en: 'Send a formal contractual notice' },
      { fr: 'Chercher immédiatement un fournisseur de remplacement', en: 'Immediately look for a replacement vendor' },
      { fr: "Escalader au service juridique", en: 'Escalate to the legal department' },
    ],
    correct: 0,
    explanation: {
      fr: "Comprendre avant d'agir : un contact direct (appel, réunion) permet de diagnostiquer le problème. Les mesures contractuelles viennent si le dialogue échoue.",
      en: 'Understand before acting: direct contact (call, meeting) diagnoses the problem. Contractual measures come if dialogue fails.',
    },
  },
  {
    id: 'mp05',
    domain: 'people',
    difficulty: 'medium',
    question: {
      fr: "L'équipe projet inclut des membres de trois cultures différentes et des malentendus récurrents apparaissent. Quelle approche est la plus efficace ?",
      en: 'The project team includes members from three different cultures and recurring misunderstandings arise. Which approach is most effective?',
    },
    options: [
      {
        fr: "Établir ensemble des normes de communication explicites et sensibiliser l'équipe aux différences culturelles",
        en: 'Co-create explicit communication norms and build the team’s cultural awareness',
      },
      { fr: 'Imposer la culture de travail du pays du siège', en: 'Impose the head office country’s work culture' },
      { fr: 'Limiter la communication aux courriels formels', en: 'Restrict communication to formal emails' },
      { fr: 'Regrouper les membres par culture', en: 'Group members by culture' },
    ],
    correct: 0,
    explanation: {
      fr: "L'intelligence culturelle se construit : règles de communication explicites (charte d'équipe), écoute active et sensibilisation mutuelle, sans hiérarchiser les cultures.",
      en: 'Cultural intelligence is built: explicit communication rules (team charter), active listening and mutual awareness, without ranking cultures.',
    },
  },
  {
    id: 'mp06',
    domain: 'people',
    difficulty: 'medium',
    question: {
      fr: "Le chef de projet remarque que deux membres règlent leurs désaccords en s'envoyant des courriels agressifs en copie à toute l'équipe. Que faire ?",
      en: 'The project manager notices two members settling disagreements through aggressive emails cc’ing the whole team. What should be done?',
    },
    options: [
      {
        fr: 'Les rencontrer en privé, ensemble, pour traiter le différend en face à face',
        en: 'Meet them privately, together, to address the disagreement face to face',
      },
      { fr: 'Répondre au fil de courriels pour trancher', en: 'Reply to the email thread to settle it' },
      { fr: "Interdire l'usage du courriel dans l'équipe", en: 'Ban email use within the team' },
      { fr: 'Transférer le fil à leur supérieur hiérarchique', en: 'Forward the thread to their line manager' },
    ],
    correct: 0,
    explanation: {
      fr: 'Les conflits se traitent tôt, en privé et de préférence en face à face. Le courriel est un mauvais canal pour les sujets émotionnels.',
      en: 'Conflict is addressed early, privately and preferably face to face. Email is a poor channel for emotional topics.',
    },
  },
  {
    id: 'mp07',
    domain: 'people',
    difficulty: 'medium',
    question: {
      fr: "En daily, un développeur signale le même blocage pour la troisième fois. Le Scrum Master n'a rien fait. En tant que chef de projet dans un contexte hybride, que faites-vous ?",
      en: 'In the daily, a developer reports the same blocker for the third time. The Scrum Master has done nothing. As project manager in a hybrid context, what do you do?',
    },
    options: [
      {
        fr: 'Échanger avec le Scrum Master pour comprendre et convenir de qui lève le blocage',
        en: 'Talk with the Scrum Master to understand and agree on who removes the blocker',
      },
      { fr: 'Lever le blocage vous-même sans en parler', en: 'Remove the blocker yourself without a word' },
      { fr: 'Signaler le Scrum Master à sa hiérarchie', en: 'Report the Scrum Master to their manager' },
      { fr: "Dire au développeur de contourner le problème", en: 'Tell the developer to work around it' },
    ],
    correct: 0,
    explanation: {
      fr: "Respecter les rôles : clarifier avec le Scrum Master (collaboration) avant d'agir à sa place ou d'escalader. L'objectif est de débloquer l'équipe durablement.",
      en: 'Respect roles: clarify with the Scrum Master (collaboration) before acting in their place or escalating. The goal is to unblock the team durably.',
    },
  },
  {
    id: 'mp08',
    domain: 'people',
    difficulty: 'medium',
    question: {
      fr: "Une partie prenante contourne systématiquement le chef de projet et donne des directives directement aux membres de l'équipe. Quelle est la meilleure réponse ?",
      en: 'A stakeholder keeps bypassing the project manager and gives instructions directly to team members. What is the best response?',
    },
    options: [
      {
        fr: 'Rencontrer la partie prenante pour rappeler les canaux convenus et comprendre ses besoins non satisfaits',
        en: 'Meet the stakeholder to restate the agreed channels and understand their unmet needs',
      },
      { fr: "Demander à l'équipe d'ignorer ses directives", en: 'Tell the team to ignore their instructions' },
      { fr: 'Escalader immédiatement au sponsor', en: 'Escalate immediately to the sponsor' },
      { fr: "Bloquer son accès aux outils de l'équipe", en: 'Cut their access to team tools' },
    ],
    correct: 0,
    explanation: {
      fr: "Le contournement révèle souvent un besoin mal servi (délai de réponse, visibilité). Dialogue d'abord, rappel du plan de communication, escalade seulement si cela persiste.",
      en: 'Bypassing often reveals an unmet need (response time, visibility). Dialogue first, restate the communications plan, escalate only if it persists.',
    },
  },
  {
    id: 'mp09',
    domain: 'people',
    difficulty: 'medium',
    question: {
      fr: "L'équipe vient d'échouer sur un jalon important et le moral est bas. Quelle attitude du chef de projet aide le plus l'équipe à rebondir ?",
      en: 'The team just missed an important milestone and morale is low. Which project manager behavior best helps the team bounce back?',
    },
    options: [
      {
        fr: "Animer une rétrospective sans blâme centrée sur les apprentissages et les actions d'amélioration",
        en: 'Run a blameless retrospective focused on learnings and improvement actions',
      },
      { fr: 'Identifier publiquement les responsables de l’échec', en: 'Publicly identify who caused the failure' },
      { fr: "Éviter d'en parler pour ne pas raviver la déception", en: 'Avoid the topic so as not to reopen the wound' },
      { fr: 'Réviser les objectifs à la baisse définitivement', en: 'Permanently lower the objectives' },
    ],
    correct: 0,
    explanation: {
      fr: "La culture sans blâme transforme l'échec en apprentissage : analyser les causes systémiques, décider d'actions concrètes et restaurer la confiance.",
      en: 'A blameless culture turns failure into learning: analyze systemic causes, decide concrete actions and rebuild confidence.',
    },
  },
  {
    id: 'mp10',
    domain: 'people',
    difficulty: 'medium',
    question: {
      fr: "Le chef de projet doit négocier avec un responsable fonctionnel la disponibilité d'un expert très demandé. Quelle approche maximise les chances de succès ?",
      en: 'The project manager must negotiate with a functional manager for the availability of a highly demanded expert. Which approach maximizes success?',
    },
    options: [
      {
        fr: "Préparer la négociation : besoins précis, créneaux, bénéfices mutuels et alternatives (BATNA)",
        en: 'Prepare the negotiation: precise needs, time slots, mutual benefits and alternatives (BATNA)',
      },
      { fr: "Faire imposer l'affectation par le sponsor", en: 'Have the sponsor force the assignment' },
      { fr: "Réserver l'expert à 100 % « au cas où »", en: 'Book the expert 100% “just in case”' },
      { fr: 'Recruter un consultant externe sans comparer', en: 'Hire an external consultant without comparing' },
    ],
    correct: 0,
    explanation: {
      fr: "La négociation gagnant-gagnant repose sur la préparation : quantifier le besoin réel, chercher les intérêts communs et connaître ses alternatives avant d'escalader.",
      en: 'Win-win negotiation relies on preparation: quantify the real need, seek shared interests and know your alternatives before escalating.',
    },
  },
  {
    id: 'mp11',
    domain: 'people',
    difficulty: 'medium',
    question: {
      fr: "Un membre de l'équipe vous informe en privé qu'un collègue falsifie ses feuilles de temps. Que devez-vous faire ?",
      en: 'A team member privately informs you that a colleague is falsifying their timesheets. What must you do?',
    },
    options: [
      {
        fr: 'Vérifier les faits puis traiter le sujet conformément au code de déontologie et aux règles internes',
        en: 'Verify the facts, then handle it according to the code of ethics and internal policies',
      },
      { fr: "Ignorer : cela n'affecte pas les livrables", en: 'Ignore it: deliverables are not affected' },
      { fr: 'Confronter publiquement le collègue en réunion', en: 'Confront the colleague publicly in a meeting' },
      { fr: "Demander au lanceur d'alerte de gérer lui-même", en: 'Ask the whistleblower to handle it themselves' },
    ],
    correct: 0,
    explanation: {
      fr: "Le code de déontologie PMI® (honnêteté, responsabilité) impose de ne pas fermer les yeux : vérifier les faits avec discrétion puis appliquer le processus prévu par l'organisation.",
      en: 'The PMI® code of ethics (honesty, responsibility) forbids looking away: verify facts discreetly, then apply the organization’s process.',
    },
  },
  {
    id: 'mp12',
    domain: 'people',
    difficulty: 'medium',
    question: {
      fr: "L'équipe est répartie entre salariés internes et prestataires, et ces derniers se sentent exclus des décisions techniques. Quelle est la meilleure action ?",
      en: 'The team mixes internal employees and contractors, and the contractors feel excluded from technical decisions. What is the best action?',
    },
    options: [
      {
        fr: "Impliquer toute l'équipe dans les décisions techniques, quel que soit le statut contractuel",
        en: 'Involve the whole team in technical decisions regardless of contractual status',
      },
      { fr: 'Réserver les décisions aux salariés internes', en: 'Reserve decisions for internal employees' },
      { fr: 'Créer deux équipes distinctes', en: 'Create two separate teams' },
      { fr: 'Limiter les prestataires aux tâches d’exécution', en: 'Limit contractors to execution tasks' },
    ],
    correct: 0,
    explanation: {
      fr: "Une équipe performante est inclusive : les décisions techniques impliquent ceux qui font le travail. Les distinctions de statut créent des silos et dégradent l'engagement.",
      en: 'High-performing teams are inclusive: technical decisions involve those doing the work. Status distinctions create silos and erode engagement.',
    },
  },

  // ─────────────── PROCESS (mq01–mq14) ───────────────
  {
    id: 'mq01',
    domain: 'process',
    difficulty: 'medium',
    question: {
      fr: "Pendant l'exécution, l'équipe découvre qu'une activité oubliée est nécessaire pour livrer le périmètre approuvé. Que faire ?",
      en: 'During execution, the team discovers a forgotten activity is needed to deliver the approved scope. What should be done?',
    },
    options: [
      {
        fr: "Évaluer l'impact et passer par la maîtrise des changements pour mettre à jour les plans",
        en: 'Assess the impact and go through change control to update the plans',
      },
      { fr: "L'ajouter discrètement au planning sans le documenter", en: 'Quietly add it to the schedule without documenting' },
      { fr: "La retirer du périmètre pour éviter le retard", en: 'Drop it from scope to avoid delay' },
      { fr: 'Utiliser la réserve de management sans autorisation', en: 'Use the management reserve without authorization' },
    ],
    correct: 0,
    explanation: {
      fr: "Même pour du travail « oublié », les références de base ne changent que via la maîtrise des changements : analyse d'impact, décision, mise à jour, communication.",
      en: 'Even for “forgotten” work, baselines change only through change control: impact analysis, decision, update, communication.',
    },
  },
  {
    id: 'mq02',
    domain: 'process',
    difficulty: 'medium',
    question: {
      fr: "BAC = 200 k€, EV = 80 k€, AC = 100 k€. En supposant que la performance actuelle continue, quelle est l'EAC ?",
      en: 'BAC = $200K, EV = $80K, AC = $100K. Assuming current performance continues, what is the EAC?',
    },
    options: [
      { fr: '250 k€', en: '$250K' },
      { fr: '220 k€', en: '$220K' },
      { fr: '200 k€', en: '$200K' },
      { fr: '160 k€', en: '$160K' },
    ],
    correct: 0,
    explanation: {
      fr: 'CPI = EV/AC = 80/100 = 0,8. EAC = BAC/CPI = 200/0,8 = 250 k€. La sous-performance de coût actuelle se projette sur le reste du projet.',
      en: 'CPI = EV/AC = 80/100 = 0.8. EAC = BAC/CPI = 200/0.8 = $250K. The current cost underperformance is projected onto the remaining work.',
    },
  },
  {
    id: 'mq03',
    domain: 'process',
    difficulty: 'medium',
    question: {
      fr: "Le client demande d'ajouter « une petite fonctionnalité » directement à un développeur, qui l'implémente. Le chef de projet le découvre. De quoi s'agit-il ?",
      en: 'The customer asks a developer directly to add “a small feature”, and the developer implements it. The project manager finds out. What is this?',
    },
    options: [
      { fr: 'Une dérive de périmètre (scope creep)', en: 'Scope creep' },
      { fr: 'Une élaboration progressive', en: 'Progressive elaboration' },
      { fr: 'Un enrichissement légitime (gold plating) approuvé', en: 'Approved gold plating' },
      { fr: 'Un changement approuvé', en: 'An approved change' },
    ],
    correct: 0,
    explanation: {
      fr: "Du travail non approuvé ajouté au périmètre = scope creep. Le chef de projet doit faire passer la demande par la maîtrise des changements et rappeler le processus à l'équipe et au client.",
      en: 'Unapproved work added to scope = scope creep. The project manager must route the request through change control and remind both team and customer of the process.',
    },
  },
  {
    id: 'mq04',
    domain: 'process',
    difficulty: 'medium',
    question: {
      fr: "Quel type de contrat fait porter le plus de risque financier au FOURNISSEUR ?",
      en: 'Which contract type places the most financial risk on the SELLER?',
    },
    options: [
      { fr: 'Le prix forfaitaire ferme (FFP)', en: 'Firm Fixed Price (FFP)' },
      { fr: 'Les coûts remboursables avec honoraires fixes (CPFF)', en: 'Cost Plus Fixed Fee (CPFF)' },
      { fr: 'Le temps et matériaux (T&M)', en: 'Time & Materials (T&M)' },
      { fr: 'Les coûts remboursables avec intéressement (CPIF)', en: 'Cost Plus Incentive Fee (CPIF)' },
    ],
    correct: 0,
    explanation: {
      fr: 'En FFP, le prix est fixe : tout dépassement de coût est absorbé par le fournisseur. En coûts remboursables, le risque pèse surtout sur l’acheteur.',
      en: 'Under FFP the price is fixed: any cost overrun is absorbed by the seller. Under cost-reimbursable contracts, the buyer carries most of the risk.',
    },
  },
  {
    id: 'mq05',
    domain: 'process',
    difficulty: 'medium',
    question: {
      fr: "L'équipe passe de 5 à 8 membres. Combien de canaux de communication supplémentaires cela crée-t-il ?",
      en: 'The team grows from 5 to 8 members. How many additional communication channels does this create?',
    },
    options: [
      { fr: '18', en: '18' },
      { fr: '10', en: '10' },
      { fr: '28', en: '28' },
      { fr: '3', en: '3' },
    ],
    correct: 0,
    explanation: {
      fr: 'Canaux = n(n−1)/2. Pour 5 : 10 ; pour 8 : 28. Différence = 18. La complexité de communication croît de façon quasi quadratique avec la taille.',
      en: 'Channels = n(n−1)/2. For 5: 10; for 8: 28. Difference = 18. Communication complexity grows almost quadratically with team size.',
    },
  },
  {
    id: 'mq06',
    domain: 'process',
    difficulty: 'medium',
    question: {
      fr: "Un risque au registre vient de se matérialiser. Le plan de réponse prévu ne fonctionne pas. Que faire ?",
      en: 'A registered risk has just materialized. The planned response is not working. What should be done?',
    },
    options: [
      {
        fr: 'Mettre en œuvre le plan de repli (fallback) ou définir une solution de contournement, puis mettre à jour le registre',
        en: 'Implement the fallback plan or define a workaround, then update the risk register',
      },
      { fr: 'Attendre de voir si la situation se résorbe', en: 'Wait and see if the situation resolves itself' },
      { fr: 'Clôturer le risque puisqu’il est advenu', en: 'Close the risk since it has occurred' },
      { fr: 'Transférer le problème au sponsor', en: 'Hand the problem to the sponsor' },
    ],
    correct: 0,
    explanation: {
      fr: "Quand la réponse principale échoue : plan de repli s'il existe, sinon contournement (workaround). Le risque devenu problème est suivi au registre des problèmes (issue log).",
      en: 'When the primary response fails: fallback plan if defined, otherwise a workaround. The risk-turned-issue is tracked in the issue log.',
    },
  },
  {
    id: 'mq07',
    domain: 'process',
    difficulty: 'medium',
    question: {
      fr: "En planification agile, l'équipe utilise des story points plutôt que des heures. Quel est le principal avantage ?",
      en: 'In agile planning, the team estimates in story points rather than hours. What is the main benefit?',
    },
    options: [
      {
        fr: "Estimer la complexité relative, plus stable et rapide que des heures précises",
        en: 'Estimate relative complexity, more stable and faster than precise hours',
      },
      { fr: 'Faciliter la facturation au client', en: 'Make customer billing easier' },
      { fr: 'Comparer la productivité entre équipes', en: 'Compare productivity across teams' },
      { fr: "Convertir directement en jours-homme", en: 'Convert directly into person-days' },
    ],
    correct: 0,
    explanation: {
      fr: "Les story points mesurent l'effort relatif (complexité, incertitude, volume). Combinés à la vélocité de l'équipe, ils permettent de prévoir sans fausse précision. Ils ne se comparent pas entre équipes.",
      en: 'Story points measure relative effort (complexity, uncertainty, volume). Combined with team velocity they enable forecasting without false precision. They are not comparable across teams.',
    },
  },
  {
    id: 'mq08',
    domain: 'process',
    difficulty: 'medium',
    question: {
      fr: "Le tableau kanban montre une accumulation de tâches dans la colonne « En test ». Quelle est la meilleure réponse de l'équipe ?",
      en: 'The kanban board shows work piling up in the “Testing” column. What is the team’s best response?',
    },
    options: [
      {
        fr: 'Respecter la limite de WIP : arrêter de commencer, aider à terminer les tests',
        en: 'Respect the WIP limit: stop starting, help finish the testing work',
      },
      { fr: 'Augmenter la limite de WIP de la colonne', en: 'Raise the column’s WIP limit' },
      { fr: 'Créer une colonne « En attente de test »', en: 'Add a “Waiting for test” column' },
      { fr: 'Reporter les tests à la fin du projet', en: 'Defer testing to the end of the project' },
    ],
    correct: 0,
    explanation: {
      fr: "Kanban : « stop starting, start finishing ». Le goulot se traite en y concentrant l'aide (swarming), pas en masquant le problème par plus de WIP ou de colonnes.",
      en: 'Kanban: “stop starting, start finishing”. Address the bottleneck by swarming on it, not by hiding it with more WIP or extra columns.',
    },
  },
  {
    id: 'mq09',
    domain: 'process',
    difficulty: 'medium',
    question: {
      fr: "Une activité a : début au plus tôt = J10, début au plus tard = J14. Quelle est sa marge totale et que signifie-t-elle ?",
      en: 'An activity has: early start = day 10, late start = day 14. What is its total float and what does it mean?',
    },
    options: [
      {
        fr: '4 jours : elle peut glisser de 4 jours sans retarder la fin du projet',
        en: '4 days: it can slip 4 days without delaying the project finish',
      },
      { fr: '4 jours : elle est sur le chemin critique', en: '4 days: it is on the critical path' },
      { fr: '24 jours : la somme des deux dates', en: '24 days: the sum of both dates' },
      { fr: '0 jour : les marges se calculent sur les fins', en: '0 days: float is computed from finish dates' },
    ],
    correct: 0,
    explanation: {
      fr: 'Marge totale = début au plus tard − début au plus tôt (ou fin au plus tard − fin au plus tôt) = 14 − 10 = 4 jours. Les activités du chemin critique ont une marge totale nulle.',
      en: 'Total float = late start − early start (or late finish − early finish) = 14 − 10 = 4 days. Critical path activities have zero total float.',
    },
  },
  {
    id: 'mq10',
    domain: 'process',
    difficulty: 'medium',
    question: {
      fr: "Lors du contrôle qualité, 4 des 50 unités inspectées sont défectueuses, toutes issues de la même machine. Quel outil aide le mieux à visualiser les causes de défauts par origine ?",
      en: 'During quality control, 4 of 50 inspected units are defective, all from the same machine. Which tool best visualizes defect causes by source?',
    },
    options: [
      { fr: 'Le diagramme de Pareto', en: 'The Pareto chart' },
      { fr: 'Le diagramme de dispersion', en: 'The scatter diagram' },
      { fr: "L'histogramme des durées", en: 'The duration histogram' },
      { fr: 'Le diagramme de Gantt', en: 'The Gantt chart' },
    ],
    correct: 0,
    explanation: {
      fr: 'Le diagramme de Pareto classe les causes de défauts par fréquence décroissante (règle des 80/20) et cible les efforts sur les causes majoritaires. Ishikawa aide ensuite à creuser la cause racine.',
      en: 'The Pareto chart ranks defect causes by decreasing frequency (80/20 rule) and targets effort on the dominant causes. Ishikawa then helps dig into the root cause.',
    },
  },
  {
    id: 'mq11',
    domain: 'process',
    difficulty: 'medium',
    question: {
      fr: "L'équipe hésite entre deux options techniques. L'option A : gain espéré 60 k€ avec 40 % de probabilité. L'option B : gain espéré 30 k€ avec 90 % de probabilité. Quelle option la valeur monétaire attendue (EMV) favorise-t-elle ?",
      en: 'The team hesitates between two options. Option A: expected gain $60K at 40% probability. Option B: expected gain $30K at 90% probability. Which option does Expected Monetary Value (EMV) favor?',
    },
    options: [
      { fr: 'B : EMV = 27 k€ contre 24 k€ pour A', en: 'B: EMV = $27K vs $24K for A' },
      { fr: 'A : EMV = 24 k€ contre 27 k€ pour B', en: 'A: EMV = $24K vs $27K for B' },
      { fr: 'A : le gain maximal est plus élevé', en: 'A: the maximum gain is higher' },
      { fr: 'Les deux options sont équivalentes', en: 'Both options are equivalent' },
    ],
    correct: 0,
    explanation: {
      fr: 'EMV = probabilité × impact. A : 0,4 × 60 = 24 k€ ; B : 0,9 × 30 = 27 k€. B maximise la valeur attendue malgré un gain unitaire plus faible.',
      en: 'EMV = probability × impact. A: 0.4 × 60 = $24K; B: 0.9 × 30 = $27K. B maximizes expected value despite a lower unit gain.',
    },
  },
  {
    id: 'mq12',
    domain: 'process',
    difficulty: 'medium',
    question: {
      fr: "À mi-projet, le client souhaite voir l'avancement réel plutôt que des rapports. L'approche est hybride. Quelle est la meilleure réponse ?",
      en: 'Mid-project, the customer wants to see actual progress rather than reports. The approach is hybrid. What is the best response?',
    },
    options: [
      {
        fr: "L'inviter aux revues d'itération pour voir des démonstrations de l'incrément",
        en: 'Invite them to iteration reviews to see demonstrations of the increment',
      },
      { fr: 'Envoyer des rapports plus détaillés', en: 'Send more detailed reports' },
      { fr: "Lui donner accès au code source", en: 'Give them access to the source code' },
      { fr: 'Organiser une visite en fin de projet', en: 'Arrange a visit at the end of the project' },
    ],
    correct: 0,
    explanation: {
      fr: "Rien ne vaut le produit qui fonctionne : les revues d'itération offrent une transparence directe et un feedback précoce — exactement le besoin exprimé.",
      en: 'Nothing beats working product: iteration reviews give direct transparency and early feedback — exactly the expressed need.',
    },
  },
  {
    id: 'mq13',
    domain: 'process',
    difficulty: 'medium',
    question: {
      fr: "Le registre des exigences contient des demandes contradictoires entre deux départements. Le projet est en phase de planification. Que faire ?",
      en: 'The requirements documentation contains conflicting requests from two departments. The project is in planning. What should be done?',
    },
    options: [
      {
        fr: 'Animer des ateliers avec les deux départements pour arbitrer selon les objectifs du projet',
        en: 'Facilitate workshops with both departments to arbitrate against project objectives',
      },
      { fr: 'Inclure les deux exigences pour satisfaire tout le monde', en: 'Include both requirements to satisfy everyone' },
      { fr: 'Choisir l’exigence la moins coûteuse', en: 'Pick the cheaper requirement' },
      { fr: 'Reporter la décision à la phase d’exécution', en: 'Defer the decision to execution' },
    ],
    correct: 0,
    explanation: {
      fr: 'Les conflits d’exigences se résolvent par la facilitation et l’alignement sur les objectifs et la valeur, avant la référence de base du périmètre. Reporter le conflit le rend plus coûteux.',
      en: 'Requirement conflicts are resolved through facilitation and alignment on objectives and value, before the scope baseline. Deferring makes the conflict costlier.',
    },
  },
  {
    id: 'mq14',
    domain: 'process',
    difficulty: 'medium',
    question: {
      fr: "L'audit qualité (assurance qualité) révèle que l'équipe ne suit pas le processus de revue de code défini. Les livrables sont pourtant conformes. Que faire ?",
      en: 'A quality audit (quality assurance) finds the team is not following the defined code review process, although deliverables conform. What should be done?',
    },
    options: [
      {
        fr: 'Comprendre pourquoi le processus n’est pas suivi et l’adapter ou renforcer son application',
        en: 'Understand why the process is not followed, then adapt it or reinforce its application',
      },
      { fr: 'Ignorer : seuls les livrables comptent', en: 'Ignore it: only deliverables matter' },
      { fr: 'Sanctionner les développeurs concernés', en: 'Sanction the developers involved' },
      { fr: 'Supprimer le processus de revue de code', en: 'Remove the code review process' },
    ],
    correct: 0,
    explanation: {
      fr: "L'assurance qualité porte sur les PROCESSUS. Un processus contourné est soit inadapté (à améliorer), soit mal compris (à accompagner). L'analyse précède l'action.",
      en: 'Quality assurance is about PROCESSES. A bypassed process is either unsuitable (improve it) or misunderstood (support adoption). Analysis precedes action.',
    },
  },

  // ─────────────── BUSINESS (mb01–mb04) ───────────────
  {
    id: 'mb01',
    domain: 'business',
    difficulty: 'medium',
    question: {
      fr: "Le sponsor demande de démarrer l'exécution avant la signature de la charte pour « gagner du temps ». Que répondre ?",
      en: 'The sponsor asks to start execution before the charter is signed to “save time”. How should you respond?',
    },
    options: [
      {
        fr: "Expliquer les risques (absence d'autorité et de financement formels) et obtenir au minimum une autorisation écrite",
        en: 'Explain the risks (no formal authority or funding) and obtain at least a written authorization',
      },
      { fr: 'Refuser catégoriquement toute activité', en: 'Categorically refuse any activity' },
      { fr: 'Démarrer sans rien dire', en: 'Start without saying anything' },
      { fr: 'Faire signer la charte par l’équipe', en: 'Have the team sign the charter' },
    ],
    correct: 0,
    explanation: {
      fr: "Sans charte, le chef de projet n'a ni autorité ni budget formels. La bonne pratique : informer le sponsor des risques et formaliser a minima l'autorisation avant d'engager des ressources.",
      en: 'Without a charter, the project manager has no formal authority or funding. Best practice: inform the sponsor of the risks and formalize at least an authorization before committing resources.',
    },
  },
  {
    id: 'mb02',
    domain: 'business',
    difficulty: 'medium',
    question: {
      fr: "Votre projet interne libérera 30 % du temps d'une équipe métier. Certains y voient une menace pour l'emploi et freinent l'adoption. Quel levier est le plus efficace ?",
      en: 'Your internal project will free up 30% of a business team’s time. Some see a job threat and resist adoption. Which lever is most effective?',
    },
    options: [
      {
        fr: "Travailler avec les managers sur un plan de conduite du changement : communication, requalification, bénéfices individuels",
        en: 'Work with managers on a change management plan: communication, reskilling, individual benefits',
      },
      { fr: 'Accélérer le déploiement avant que la résistance grandisse', en: 'Speed up rollout before resistance grows' },
      { fr: "Minimiser publiquement l'impact du projet", en: 'Publicly downplay the project’s impact' },
      { fr: 'Laisser les RH gérer après la mise en service', en: 'Let HR handle it after go-live' },
    ],
    correct: 0,
    explanation: {
      fr: "La valeur ne se réalise que si le changement est adopté. La conduite du changement (impacts individuels, communication honnête, accompagnement) fait partie du périmètre de responsabilité du projet.",
      en: 'Value is realized only if the change is adopted. Change management (individual impacts, honest communication, support) is part of the project’s responsibility.',
    },
  },
  {
    id: 'mb03',
    domain: 'business',
    difficulty: 'medium',
    question: {
      fr: "En cours de projet, un concurrent lance un produit qui rend une partie de votre périmètre obsolète. Que faire EN PREMIER ?",
      en: 'Mid-project, a competitor launches a product making part of your scope obsolete. What should you do FIRST?',
    },
    options: [
      {
        fr: "Analyser l'impact sur la valeur du projet et présenter des options au sponsor (re-périmétrage, pivot, poursuite)",
        en: 'Analyze the impact on project value and present options to the sponsor (re-scoping, pivot, continue)',
      },
      { fr: 'Continuer : le périmètre est contractualisé', en: 'Continue: the scope is contractual' },
      { fr: "Copier immédiatement le produit concurrent", en: 'Immediately copy the competitor’s product' },
      { fr: "Suspendre le projet en attendant la réaction du marché", en: 'Pause the project pending market reaction' },
    ],
    correct: 0,
    explanation: {
      fr: "La veille marché fait partie du domaine Business Environment : évaluer l'impact sur la valeur attendue et éclairer la décision de gouvernance avec des options chiffrées.",
      en: 'Market scanning belongs to the Business Environment domain: assess the impact on expected value and inform the governance decision with quantified options.',
    },
  },
  {
    id: 'mb04',
    domain: 'business',
    difficulty: 'medium',
    question: {
      fr: "Le projet est conforme au règlement du pays A, mais l'équipe découvre que le déploiement prévu au pays B exige une certification supplémentaire. Que faire ?",
      en: 'The project complies with country A’s regulations, but the team finds that the planned rollout in country B requires an additional certification. What should be done?',
    },
    options: [
      {
        fr: "Évaluer les exigences du pays B, intégrer la certification au plan via la maîtrise des changements",
        en: 'Assess country B’s requirements and add the certification to the plan through change control',
      },
      { fr: 'Déployer d’abord, certifier ensuite', en: 'Roll out first, certify later' },
      { fr: 'Annuler le déploiement au pays B', en: 'Cancel the country B rollout' },
      { fr: "Considérer que la conformité du pays A suffit", en: 'Assume country A compliance is enough' },
    ],
    correct: 0,
    explanation: {
      fr: "La conformité s'évalue par juridiction. Une exigence réglementaire découverte est un changement à analyser et intégrer formellement — jamais à contourner ni différer.",
      en: 'Compliance is jurisdiction-specific. A newly discovered regulatory requirement is a change to analyze and formally integrate — never bypassed or deferred.',
    },
  },
]
