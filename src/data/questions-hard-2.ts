import type { Question } from '../types'

/** Hard questions — People (hp41–hp50) + Process part 1 (hq01–hq30). */
export const HARD_QUESTIONS_2: Question[] = [
  {
    id: 'hp41',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Un membre à haut potentiel demande à être mentoré par vous, mais vous mentorer déjà deux personnes et manquez de temps. Refuser risquerait de le démotiver. Quelle réponse illustre le mieux le leadership au service de l'équipe ?",
      en: 'A high-potential member asks you to mentor them, but you already mentor two people and lack time. Refusing might demotivate them. Which response best reflects servant leadership?',
    },
    options: [
      {
        fr: "Co-construire un plan de développement : identifier d'autres mentors pertinents, du shadowing et des missions apprenantes, avec des points réguliers avec vous",
        en: 'Co-create a development plan: identify other relevant mentors, shadowing and stretch assignments, with regular check-ins with you',
      },
      { fr: 'Accepter et réduire le temps consacré aux deux autres', en: 'Accept and cut time from the other two mentees' },
      { fr: "Refuser en expliquant votre manque de temps", en: 'Decline, explaining your lack of time' },
      { fr: "L'inscrire à une formation en ligne", en: 'Enroll them in an online course' },
    ],
    correct: 0,
    explanation: {
      fr: "Le servant leadership développe les personnes sans se rendre indispensable : orchestrer les bonnes ressources de développement vaut mieux qu'un oui intenable ou un non sec.",
      en: 'Servant leadership grows people without making yourself the bottleneck: orchestrating the right development resources beats an unsustainable yes or a flat no.',
    },
  },
  {
    id: 'hp42',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Votre projet critique dépend d'une experte unique dont les notes personnelles constituent la seule « documentation ». Elle voit toute demande de formalisation comme un signe de défiance ou un prélude à son remplacement. Que faites-vous ?",
      en: 'Your critical project depends on a single expert whose personal notes are the only “documentation”. She views any formalization request as distrust or a prelude to replacement. What do you do?',
    },
    options: [
      {
        fr: "Recadrer la démarche autour de SA valorisation : transmission par binômage et ateliers où elle est reconnue comme référente, en expliquant le risque d'équipe",
        en: 'Reframe the effort around HER value: knowledge transfer through pairing and workshops where she is recognized as the authority, while explaining the team risk',
      },
      { fr: 'Exiger la documentation comme condition de maintien', en: 'Demand documentation as a condition to stay' },
      { fr: "Faire documenter son domaine par quelqu'un d'autre", en: 'Have someone else document her domain' },
      { fr: 'Accepter la situation : elle est irremplaçable', en: 'Accept the situation: she is irreplaceable' },
    ],
    correct: 0,
    explanation: {
      fr: "La rétention de savoir est souvent une stratégie de sécurité personnelle. La lever exige de remplacer la menace par de la reconnaissance : le binômage valorise l'experte tout en réduisant le bus factor.",
      en: 'Knowledge hoarding is usually a personal security strategy. Undoing it requires replacing threat with recognition: pairing honors the expert while reducing the bus factor.',
    },
  },
  {
    id: 'hp43',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "En atelier de cadrage, le client répète « je veux un système simple » mais ses exigences détaillées décrivent un système très complexe. L'équipe est perdue. Quelle compétence mobilisez-vous en priorité ?",
      en: 'In a scoping workshop, the customer keeps saying “I want a simple system” while his detailed requirements describe a very complex one. The team is lost. Which skill do you deploy first?',
    },
    options: [
      {
        fr: "L'écoute active et le questionnement : reformuler, explorer les contradictions et faire émerger le besoin réel derrière les demandes",
        en: 'Active listening and questioning: paraphrase, probe the contradictions and surface the real need behind the requests',
      },
      { fr: 'Documenter les exigences telles quelles et faire signer', en: 'Document the requirements as-is and get sign-off' },
      { fr: 'Proposer directement une solution simple', en: 'Directly propose a simple solution' },
      { fr: "Demander au client de trancher entre simple et complet", en: 'Ask the customer to choose between simple and complete' },
    ],
    correct: 0,
    explanation: {
      fr: "La contradiction signale un besoin mal exprimé. L'élicitation par écoute active et reformulation révèle les priorités réelles ; documenter la contradiction telle quelle la transforme en conflit futur.",
      en: 'The contradiction signals a poorly expressed need. Elicitation through active listening and paraphrasing reveals true priorities; documenting the contradiction as-is turns it into a future conflict.',
    },
  },
  {
    id: 'hp44',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Votre équipe a gagné un prix interne grâce à une innovation portée par trois membres. Le sponsor veut n'inviter que le « lead » à la cérémonie. Que faites-vous ?",
      en: 'Your team won an internal award for an innovation driven by three members. The sponsor wants to invite only the “lead” to the ceremony. What do you do?',
    },
    options: [
      {
        fr: "Plaider pour la reconnaissance des trois contributeurs, en expliquant l'effet destructeur d'une reconnaissance sélective inexacte",
        en: 'Advocate recognition for all three contributors, explaining the destructive effect of inaccurately selective recognition',
      },
      { fr: "Accepter : un représentant suffit", en: 'Accept: one representative is enough' },
      { fr: 'Laisser le lead décider s’il partage le mérite', en: 'Let the lead decide whether to share the credit' },
      { fr: 'Organiser une célébration séparée pour les deux autres', en: 'Hold a separate celebration for the other two' },
    ],
    correct: 0,
    explanation: {
      fr: "Une reconnaissance mal attribuée démotive plus que pas de reconnaissance du tout. Le chef de projet défend l'exactitude de l'attribution — c'est un investissement direct dans la confiance.",
      en: 'Misattributed recognition demotivates more than no recognition at all. The project manager defends attribution accuracy — a direct investment in trust.',
    },
  },
  {
    id: 'hp45',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "À l'approche d'une échéance critique, l'équipe propose spontanément de travailler le week-end. C'est le troisième week-end en deux mois. Le délai serait tenu. Quelle est la MEILLEURE réponse ?",
      en: 'Approaching a critical deadline, the team spontaneously offers to work the weekend. It is the third weekend in two months. The deadline would be met. What is the BEST response?',
    },
    options: [
      {
        fr: "Refuser d'en faire une habitude : traiter la cause systémique (charge vs capacité) et réserver l'effort exceptionnel aux vraies exceptions",
        en: 'Refuse to normalize it: address the systemic cause (load vs capacity) and reserve exceptional effort for true exceptions',
      },
      { fr: "Accepter avec gratitude : l'initiative vient d'eux", en: 'Accept gratefully: the initiative is theirs' },
      { fr: 'Accepter et prévoir une compensation financière', en: 'Accept and plan financial compensation' },
      { fr: 'Refuser et laisser le jalon glisser sans analyse', en: 'Refuse and let the milestone slip without analysis' },
    ],
    correct: 0,
    explanation: {
      fr: "Trois week-ends en deux mois signalent un problème structurel de capacité, pas un pic exceptionnel. Accepter — même une offre volontaire — normalise le surmenage et masque la cause au lieu de la traiter.",
      en: 'Three weekends in two months signal a structural capacity problem, not an exceptional peak. Accepting — even a voluntary offer — normalizes overwork and hides the cause instead of fixing it.',
    },
  },
  {
    id: 'hp46',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Vous reprenez un projet dont le précédent chef a été remercié. L'équipe vous accueille avec méfiance : « Vous êtes là pour nous surveiller ? » Quelle approche des 90 premiers jours privilégiez-vous ?",
      en: 'You take over a project whose previous manager was let go. The team greets you with distrust: “Are you here to watch us?” Which first-90-days approach do you favor?',
    },
    options: [
      {
        fr: "Écouter d'abord : entretiens individuels, comprendre l'histoire et les irritants, victoires rapides sur LEURS problèmes avant tout changement majeur",
        en: 'Listen first: one-on-ones, understand the history and pain points, quick wins on THEIR problems before any major change',
      },
      { fr: 'Marquer votre autorité par des changements immédiats', en: 'Assert authority through immediate changes' },
      { fr: "Rassurer en promettant de ne rien changer", en: 'Reassure by promising to change nothing' },
      { fr: "Éviter le sujet du prédécesseur", en: 'Avoid the topic of your predecessor' },
    ],
    correct: 0,
    explanation: {
      fr: "La confiance se gagne par l'écoute et des actes utiles à l'équipe, pas par des déclarations. Promettre l'immobilisme est intenable ; imposer des changements sans comprendre reproduit souvent les erreurs passées.",
      en: 'Trust is earned through listening and acts useful to the team, not declarations. Promising stasis is untenable; imposing change without understanding often repeats past mistakes.',
    },
  },
  {
    id: 'hp47',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Votre PMO impose un outil de suivi individuel du temps par tâche à la minute. L'équipe agile y voit du flicage contraire à la confiance. Vous partagez leur analyse mais l'outil est obligatoire. Que faites-vous ?",
      en: 'Your PMO mandates a per-task, per-minute individual time-tracking tool. The agile team sees it as surveillance contrary to trust. You share their view, but the tool is mandatory. What do you do?',
    },
    options: [
      {
        fr: "Appliquer honnêtement l'obligation tout en portant au PMO un retour argumenté (coût, effets pervers) et en proposant une alternative répondant à son besoin réel",
        en: 'Honestly comply with the mandate while giving the PMO an evidence-based case (cost, perverse effects) and proposing an alternative that meets its real need',
      },
      { fr: "Laisser l'équipe saisir des données approximatives", en: 'Let the team enter approximate data' },
      { fr: "Remplir l'outil vous-même à leur place", en: 'Fill in the tool yourself on their behalf' },
      { fr: "Ignorer l'obligation au nom des valeurs agiles", en: 'Ignore the mandate in the name of agile values' },
    ],
    correct: 0,
    explanation: {
      fr: "Intégrité : on ne sabote pas une règle qu'on conteste, on la conteste par les canaux légitimes avec des données. Encourager la triche détruirait votre autorité morale.",
      en: 'Integrity: you do not sabotage a rule you dispute, you challenge it through legitimate channels with data. Encouraging cheating would destroy your moral authority.',
    },
  },
  {
    id: 'hp48',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Un architecte senior quitte les réunions dès qu'on conteste ses choix (évitement), puis impose ses décisions par courriel le lendemain (forcing). L'équipe n'ose plus le contredire. Quel est le meilleur angle d'intervention ?",
      en: 'A senior architect leaves meetings whenever his choices are challenged (withdrawal), then imposes his decisions by email the next day (forcing). The team no longer dares contradict him. What is the best intervention angle?',
    },
    options: [
      {
        fr: "Un feedback individuel structuré sur les comportements observés et leurs effets, avec un accord explicite sur le processus de décision d'architecture",
        en: 'Structured one-on-one feedback on the observed behaviors and their effects, with an explicit agreement on the architecture decision process',
      },
      { fr: 'Faire valider tous ses courriels par vous', en: 'Have all his emails approved by you' },
      { fr: "Encourager l'équipe à répondre aux courriels", en: 'Encourage the team to push back on the emails' },
      { fr: 'Le remplacer par un architecte plus collaboratif', en: 'Replace him with a more collaborative architect' },
    ],
    correct: 0,
    explanation: {
      fr: "Un pattern comportemental se traite par un feedback factuel direct (comportement → impact) et un processus de décision explicite qui retire la place au forcing unilatéral. Contourner ou censurer évite le vrai sujet.",
      en: 'A behavioral pattern is addressed through direct factual feedback (behavior → impact) and an explicit decision process that removes room for unilateral forcing. Workarounds or censorship dodge the real issue.',
    },
  },
  {
    id: 'hp49',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Votre projet transfrontalier implique une équipe dont le pays traverse une crise politique grave. Les membres locaux sont distraits, anxieux, et certains évoquent l'exil. Les jalons locaux glissent. Quelle posture adoptez-vous ?",
      en: 'Your cross-border project includes a team whose country is in serious political crisis. Local members are distracted, anxious, and some mention emigrating. Local milestones are slipping. What posture do you adopt?',
    },
    options: [
      {
        fr: "Priorité aux personnes : flexibilité et soutien, plan de continuité réaliste (transferts de savoir, redondance) construit avec eux, transparence avec le sponsor",
        en: 'People first: flexibility and support, a realistic continuity plan (knowledge transfer, redundancy) built with them, transparency with the sponsor',
      },
      { fr: 'Maintenir les exigences de délais : le projet prime', en: 'Hold the schedule demands: the project comes first' },
      { fr: 'Transférer immédiatement tout le travail ailleurs', en: 'Immediately transfer all the work elsewhere' },
      { fr: "Éviter d'aborder la situation politique", en: 'Avoid mentioning the political situation' },
    ],
    correct: 0,
    explanation: {
      fr: "Humanité et gestion des risques ne s'opposent pas : soutenir les personnes ET construire la résilience avec elles (pas contre elles). Un retrait brutal détruirait la confiance et le savoir local.",
      en: 'Humanity and risk management are not opposites: support the people AND build resilience with them (not against them). An abrupt pull-out would destroy trust and local knowledge.',
    },
  },
  {
    id: 'hp50',
    domain: 'people',
    difficulty: 'hard',
    question: {
      fr: "Le comité de direction vous propose de « prendre » à un autre chef de projet en difficulté ses deux meilleurs éléments pour sécuriser votre jalon stratégique. Vous connaissez l'impact que cela aurait sur son projet. Que faites-vous ?",
      en: 'The executive committee offers to “take” the two best people from a struggling fellow project manager to secure your strategic milestone. You know the impact this would have on his project. What do you do?',
    },
    options: [
      {
        fr: "Demander un arbitrage de portefeuille transparent, fondé sur la valeur relative des deux projets et incluant le chef de projet concerné",
        en: 'Request a transparent portfolio-level trade-off based on the relative value of both projects, including the affected project manager',
      },
      { fr: "Accepter : votre projet est prioritaire", en: 'Accept: your project has priority' },
      { fr: 'Refuser par solidarité entre chefs de projet', en: 'Refuse out of solidarity between project managers' },
      { fr: 'Accepter en négociant un prêt temporaire discret', en: 'Accept while quietly negotiating a temporary loan' },
    ],
    correct: 0,
    explanation: {
      fr: "L'allocation des ressources entre projets est une décision de portefeuille qui exige transparence et vision globale de la valeur — pas un accord bilatéral opportuniste ni un réflexe de solidarité aveugle.",
      en: 'Resource allocation across projects is a portfolio decision requiring transparency and a global value view — not an opportunistic bilateral deal or blind solidarity reflex.',
    },
  },

  // ─────────────── PROCESS hq01–hq30 ───────────────
  {
    id: 'hq01',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "BAC = 500 k€, EV = 200 k€, AC = 260 k€, PV = 250 k€. Le dérapage de coût est jugé ATYPIQUE (non récurrent). Quelle est l'EAC la plus appropriée ?",
      en: 'BAC = $500K, EV = $200K, AC = $260K, PV = $250K. The cost overrun is deemed ATYPICAL (non-recurring). What is the most appropriate EAC?',
    },
    options: [
      { fr: '560 k€ (EAC = AC + BAC − EV)', en: '$560K (EAC = AC + BAC − EV)' },
      { fr: '650 k€ (EAC = BAC / CPI)', en: '$650K (EAC = BAC / CPI)' },
      { fr: '500 k€ (EAC = BAC)', en: '$500K (EAC = BAC)' },
      { fr: '585 k€ (EAC = AC + (BAC−EV)/CPI)', en: '$585K (EAC = AC + (BAC−EV)/CPI)' },
    ],
    correct: 0,
    explanation: {
      fr: "Écart atypique → le reste du travail se fera au coût budgété : EAC = AC + (BAC − EV) = 260 + 300 = 560 k€. BAC/CPI (= 650) suppose un écart récurrent ; la formule avec /CPI projette la sous-performance.",
      en: 'Atypical variance → remaining work at budgeted cost: EAC = AC + (BAC − EV) = 260 + 300 = $560K. BAC/CPI (= 650) assumes a recurring variance; the /CPI formula projects the underperformance.',
    },
  },
  {
    id: 'hq02',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "BAC = 400 k€, EV = 160 k€, AC = 200 k€. La direction exige de tenir le budget initial. Quel TCPI faut-il atteindre et qu'en conclure ?",
      en: 'BAC = $400K, EV = $160K, AC = $200K. Management demands the original budget be met. What TCPI is required and what does it imply?',
    },
    options: [
      {
        fr: 'TCPI = 1,2 : il faut produire 20 % plus efficacement que prévu — objectif probablement irréaliste sans changement majeur',
        en: 'TCPI = 1.2: work must be 20% more efficient than planned — probably unrealistic without major change',
      },
      { fr: 'TCPI = 0,8 : le budget sera tenu sans effort', en: 'TCPI = 0.8: the budget will be met effortlessly' },
      { fr: 'TCPI = 1,0 : la performance actuelle suffit', en: 'TCPI = 1.0: current performance is sufficient' },
      { fr: 'TCPI = 2,0 : il faut doubler la productivité', en: 'TCPI = 2.0: productivity must double' },
    ],
    correct: 0,
    explanation: {
      fr: "TCPI = (BAC − EV)/(BAC − AC) = 240/200 = 1,2. Avec un CPI actuel de 0,8, exiger 1,2 signifie une amélioration de 50 % de l'efficacité : signal fort pour renégocier budget ou périmètre.",
      en: 'TCPI = (BAC − EV)/(BAC − AC) = 240/200 = 1.2. With a current CPI of 0.8, demanding 1.2 means a 50% efficiency jump: a strong signal to renegotiate budget or scope.',
    },
  },
  {
    id: 'hq03',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Contrat à prix fixe avec intéressement (FPIF) : prix cible 110 k€, coût cible 100 k€, partage 80/20, plafond (ceiling) 126 k€. Quel est le point d'hypothèse totale (PTA) ?",
      en: 'Fixed Price Incentive Fee (FPIF) contract: target price $110K, target cost $100K, share ratio 80/20, ceiling price $126K. What is the Point of Total Assumption (PTA)?',
    },
    options: [
      { fr: '120 k€', en: '$120K' },
      { fr: '126 k€', en: '$126K' },
      { fr: '110 k€', en: '$110K' },
      { fr: '130 k€', en: '$130K' },
    ],
    correct: 0,
    explanation: {
      fr: 'PTA = coût cible + (plafond − prix cible)/part acheteur = 100 + (126 − 110)/0,8 = 100 + 20 = 120 k€. Au-delà, chaque euro de coût supplémentaire est à 100 % à la charge du fournisseur.',
      en: 'PTA = target cost + (ceiling − target price)/buyer share = 100 + (126 − 110)/0.8 = 100 + 20 = $120K. Beyond it, every extra cost dollar is 100% the seller’s burden.',
    },
  },
  {
    id: 'hq04',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Activités : A(4j) → B(6j) → D(5j) et A(4j) → C(8j) → D(5j). B et C convergent vers D. Quelle est la marge totale de B ?",
      en: 'Activities: A(4d) → B(6d) → D(5d) and A(4d) → C(8d) → D(5d). B and C both feed D. What is B’s total float?',
    },
    options: [
      { fr: '2 jours', en: '2 days' },
      { fr: '0 jour', en: '0 days' },
      { fr: '4 jours', en: '4 days' },
      { fr: '6 jours', en: '6 days' },
    ],
    correct: 0,
    explanation: {
      fr: "Chemin par C : 4+8+5 = 17j (critique). Chemin par B : 4+6+5 = 15j. Marge de B = 17 − 15 = 2 jours. B peut glisser de 2 jours avant que D — et la fin — soient impactés.",
      en: 'Path via C: 4+8+5 = 17d (critical). Path via B: 4+6+5 = 15d. B’s float = 17 − 15 = 2 days. B can slip 2 days before D — and the finish — are affected.',
    },
  },
  {
    id: 'hq05',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Un risque a 30 % de probabilité d'un impact de −200 k€. Une mesure d'atténuation coûtant 25 k€ ramènerait la probabilité à 10 %. Faut-il la mettre en œuvre selon l'EMV ?",
      en: 'A risk has a 30% probability of a −$200K impact. A mitigation costing $25K would reduce the probability to 10%. Should it be implemented per EMV?',
    },
    options: [
      {
        fr: 'Oui : elle réduit l’EMV de −60 k€ à −45 k€ (−20 k€ de risque + 25 k€ de coût), gain net de 15 k€',
        en: 'Yes: it improves EMV from −$60K to −$45K (−$20K risk + $25K cost), a net gain of $15K',
      },
      { fr: 'Non : 25 k€ de coût certain est pire qu’un risque incertain', en: 'No: a certain $25K cost is worse than an uncertain risk' },
      { fr: 'Non : l’EMV après atténuation est identique', en: 'No: post-mitigation EMV is identical' },
      { fr: 'Oui : toute atténuation est toujours rentable', en: 'Yes: any mitigation is always worth it' },
    ],
    correct: 0,
    explanation: {
      fr: 'EMV avant = 0,3 × (−200) = −60 k€. EMV après = 0,1 × (−200) − 25 = −45 k€. L’atténuation améliore la position espérée de 15 k€ : elle se justifie économiquement.',
      en: 'EMV before = 0.3 × (−200) = −$60K. EMV after = 0.1 × (−200) − 25 = −$45K. The mitigation improves the expected position by $15K: economically justified.',
    },
  },
  {
    id: 'hq06',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Sur la carte de contrôle du processus de tests, 8 mesures consécutives sont au-dessus de la moyenne mais dans les limites de contrôle. Que faut-il conclure ?",
      en: 'On the testing process control chart, 8 consecutive measurements fall above the mean but within control limits. What should you conclude?',
    },
    options: [
      {
        fr: 'Règle des sept : le processus est probablement hors contrôle (cause assignable) et doit être investigué',
        en: 'Rule of seven: the process is likely out of control (assignable cause) and must be investigated',
      },
      { fr: 'Tout va bien : les mesures restent dans les limites', en: 'All is well: measurements stay within limits' },
      { fr: 'Il faut élargir les limites de contrôle', en: 'The control limits should be widened' },
      { fr: 'C’est une variation aléatoire normale', en: 'It is normal random variation' },
    ],
    correct: 0,
    explanation: {
      fr: "Sept points consécutifs (ou plus) du même côté de la moyenne violent la règle des sept : la probabilité d'un tel motif aléatoire est infime. Une cause assignable est à rechercher même sans dépassement des limites.",
      en: 'Seven or more consecutive points on one side of the mean violate the rule of seven: such a random pattern is highly improbable. An assignable cause must be sought even without limit breaches.',
    },
  },
  {
    id: 'hq07',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Après avoir mis en œuvre la réponse « transférer » sur un risque majeur (sous-traitance), l'équipe identifie que le sous-traitant pourrait défaillir. Comment qualifier ce nouveau risque ?",
      en: 'After implementing a “transfer” response on a major risk (outsourcing), the team identifies that the subcontractor could default. How is this new risk classified?',
    },
    options: [
      { fr: 'Un risque secondaire, à analyser et traiter comme tout risque', en: 'A secondary risk, to be analyzed and treated like any risk' },
      { fr: 'Un risque résiduel accepté par définition', en: 'A residual risk, accepted by definition' },
      { fr: 'Un problème (issue) à consigner', en: 'An issue to be logged' },
      { fr: 'Une contrainte contractuelle', en: 'A contractual constraint' },
    ],
    correct: 0,
    explanation: {
      fr: "Risque secondaire = risque créé PAR la réponse à un autre risque. Il entre au registre avec sa propre analyse. Le risque résiduel est ce qui RESTE du risque initial après la réponse.",
      en: 'Secondary risk = a risk created BY the response to another risk. It enters the register with its own analysis. Residual risk is what REMAINS of the original risk after the response.',
    },
  },
  {
    id: 'hq08',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Le diagramme de flux cumulé (CFD) de l'équipe montre une bande « En cours » qui s'élargit continuellement depuis 4 semaines, tandis que la bande « Terminé » croît à peine. Que se passe-t-il ?",
      en: 'The team’s Cumulative Flow Diagram shows the “In Progress” band continuously widening for 4 weeks while the “Done” band barely grows. What is happening?',
    },
    options: [
      {
        fr: 'Le travail en cours explose et le débit chute : trop de tâches commencées, temps de cycle en hausse — il faut limiter le WIP',
        en: 'WIP is ballooning and throughput is falling: too much started work, rising cycle time — WIP must be limited',
      },
      { fr: "L'équipe accélère : plus de travail est engagé", en: 'The team is speeding up: more work is engaged' },
      { fr: 'Le backlog est trop petit', en: 'The backlog is too small' },
      { fr: 'Le CFD est mal construit', en: 'The CFD is incorrectly built' },
    ],
    correct: 0,
    explanation: {
      fr: "Dans un CFD, l'épaisseur de la bande = WIP et la pente de « Terminé » = débit. Une bande qui gonfle avec un débit plat signale un goulot : selon la loi de Little, le temps de cycle se dégrade.",
      en: 'In a CFD, band thickness = WIP and the “Done” slope = throughput. A swelling band with flat throughput signals a bottleneck: by Little’s law, cycle time is degrading.',
    },
  },
  {
    id: 'hq09',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Il reste 400 points de backlog priorisé. La vélocité des 6 derniers sprints : 42, 38, 45, 40, 36, 39 (sprints de 2 semaines). Le sponsor demande « une date fiable ». Quelle réponse est la plus professionnelle ?",
      en: 'The prioritized backlog holds 400 remaining points. Velocity over the last 6 sprints: 42, 38, 45, 40, 36, 39 (2-week sprints). The sponsor asks for “a reliable date”. What is the most professional answer?',
    },
    options: [
      {
        fr: 'Une fourchette : ~9 à 12 sprints (18–24 semaines) selon la vélocité pessimiste/optimiste, affinée à chaque sprint',
        en: 'A range: ~9 to 12 sprints (18–24 weeks) using pessimistic/optimistic velocity, refined every sprint',
      },
      { fr: 'Une date unique : 400/40 = 10 sprints exactement', en: 'A single date: 400/40 = exactly 10 sprints' },
      { fr: "Refuser de s'engager : l'agile ne prédit pas", en: 'Refuse to commit: agile does not predict' },
      { fr: 'La date la plus optimiste pour rassurer', en: 'The most optimistic date to reassure' },
    ],
    correct: 0,
    explanation: {
      fr: "Prévision honnête = fourchette fondée sur la variabilité observée (36 → ~11,1 sprints ; 45 → ~8,9). Une date unique cache l'incertitude ; refuser de prévoir est un mythe agile.",
      en: 'Honest forecasting = a range based on observed variability (36 → ~11.1 sprints; 45 → ~8.9). A single date hides uncertainty; refusing to forecast is an agile myth.',
    },
  },
  {
    id: 'hq10',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Votre projet hybride : le socle matériel suit un cycle prédictif avec CCB, l'applicatif est agile avec re-priorisation continue. Un changement touche LES DEUX volets. Comment le traiter ?",
      en: 'Your hybrid project: the hardware platform follows a predictive cycle with a CCB, the software is agile with continuous reprioritization. A change affects BOTH streams. How should it be handled?',
    },
    options: [
      {
        fr: "Analyse d'impact intégrée puis décision coordonnée : passage au CCB pour le volet prédictif ET re-priorisation du backlog pour le volet agile",
        en: 'Integrated impact analysis, then a coordinated decision: CCB for the predictive stream AND backlog reprioritization for the agile stream',
      },
      { fr: 'Le CCB décide seul pour tout le projet', en: 'The CCB alone decides for the whole project' },
      { fr: 'Le Product Owner décide seul pour tout', en: 'The Product Owner alone decides for everything' },
      { fr: 'Traiter les deux volets indépendamment sans coordination', en: 'Handle the two streams independently without coordination' },
    ],
    correct: 0,
    explanation: {
      fr: "En hybride, chaque volet garde son mécanisme de changement, mais l'analyse d'impact et la décision doivent être coordonnées : un changement transverse traité en silos crée des incohérences d'intégration.",
      en: 'In hybrid, each stream keeps its change mechanism, but impact analysis and the decision must be coordinated: a cross-cutting change handled in silos creates integration inconsistencies.',
    },
  },
  {
    id: 'hq11',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "L'équipe déclare une story « terminée » : code livré et testé unitairement. Le PO la rejette : la DoD exige les tests d'intégration et la documentation. L'équipe répond que « la DoD est trop lourde pour tenir la vélocité ». Que faire ?",
      en: 'The team declares a story “done”: code delivered and unit tested. The PO rejects it: the DoD requires integration tests and documentation. The team says “the DoD is too heavy to sustain velocity”. What should be done?',
    },
    options: [
      {
        fr: "Maintenir la DoD actuelle (la vélocité doit refléter le vrai coût), et n'en débattre l'évolution qu'en rétrospective avec toutes les parties",
        en: 'Uphold the current DoD (velocity must reflect true cost), and debate changes only in retrospective with all parties',
      },
      { fr: 'Assouplir la DoD immédiatement pour tenir la vélocité', en: 'Relax the DoD immediately to protect velocity' },
      { fr: 'Créer une story séparée « finition » pour plus tard', en: 'Create a separate “finishing” story for later' },
      { fr: 'Laisser le PO décider story par story', en: 'Let the PO decide story by story' },
    ],
    correct: 0,
    explanation: {
      fr: "Contourner la DoD fabrique de la dette invisible et une fausse vélocité. La DoD est un engagement de qualité : elle s'applique telle quelle et n'évolue que par décision collective consciente.",
      en: 'Bypassing the DoD manufactures invisible debt and fake velocity. The DoD is a quality commitment: it applies as-is and evolves only through a conscious collective decision.',
    },
  },
  {
    id: 'hq12',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "À 70 % d'avancement, le client exige une fonctionnalité « incontournable » non prévue. Le contrat est au forfait. L'analyse : +8 semaines, +120 k€. Le client refuse tout avenant : « C'était implicite. » Que faites-vous ?",
      en: 'At 70% completion, the customer demands an “essential” unplanned feature. The contract is fixed-price. Analysis: +8 weeks, +$120K. The customer refuses any amendment: “It was implied.” What do you do?',
    },
    options: [
      {
        fr: "Revenir à la référence de base du périmètre et aux exigences signées, chercher une solution négociée, et suivre le processus contractuel de différend si le désaccord persiste",
        en: 'Return to the scope baseline and signed requirements, seek a negotiated solution, and follow the contractual dispute process if disagreement persists',
      },
      { fr: 'Réaliser la fonctionnalité pour préserver la relation', en: 'Build the feature to preserve the relationship' },
      { fr: 'Refuser sèchement en citant le contrat', en: 'Flatly refuse, citing the contract' },
      { fr: "Réduire la qualité ailleurs pour absorber le coût", en: 'Cut quality elsewhere to absorb the cost' },
    ],
    correct: 0,
    explanation: {
      fr: "La référence documentée (périmètre, exigences) est la base factuelle du différend. La démarche : clarifier, négocier des options, puis processus de réclamation contractuel. Céder sans avenant crée un précédent ruineux.",
      en: 'The documented baseline (scope, requirements) is the factual basis of the dispute. The path: clarify, negotiate options, then the contractual claims process. Yielding without an amendment sets a ruinous precedent.',
    },
  },
  {
    id: 'hq13',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Le déploiement final exige une bascule irréversible d'un système legacy avec 4 heures d'interruption maximum tolérée. Quelle pratique réduit LE PLUS le risque de bascule ?",
      en: 'Final deployment requires an irreversible cutover from a legacy system with at most 4 hours of tolerated downtime. Which practice MOST reduces cutover risk?',
    },
    options: [
      {
        fr: 'Des répétitions générales complètes (dry runs) chronométrées avec critères go/no-go et procédure de retour arrière testée',
        en: 'Full timed dress rehearsals (dry runs) with go/no-go criteria and a tested rollback procedure',
      },
      { fr: "Une équipe renforcée le jour J", en: 'A reinforced team on the day' },
      { fr: 'Un planning de bascule détaillé validé en comité', en: 'A detailed cutover plan approved in committee' },
      { fr: "Une communication renforcée vers les utilisateurs", en: 'Strengthened user communication' },
    ],
    correct: 0,
    explanation: {
      fr: "Pour un événement irréversible à fenêtre contrainte, seule la répétition en conditions réelles valide les durées, révèle les surprises et entraîne les équipes. Un plan non répété reste une hypothèse.",
      en: 'For an irreversible, time-boxed event, only realistic rehearsal validates durations, surfaces surprises and trains the teams. An unrehearsed plan is still a hypothesis.',
    },
  },
  {
    id: 'hq14',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Trois fournisseurs pour un composant critique. Pondération : technique 50 %, coût 30 %, délais 20 %. Notes (T/C/D) — A : 9/5/6 ; B : 7/8/8 ; C : 6/9/9. Qui gagne au modèle de notation pondérée ?",
      en: 'Three vendors for a critical component. Weights: technical 50%, cost 30%, schedule 20%. Scores (T/C/S) — A: 9/5/6; B: 7/8/8; C: 6/9/9. Who wins the weighted scoring model?',
    },
    options: [
      { fr: 'B avec 7,5 (A = 7,2 ; C = 7,5 mais technique plus faible… vérifiez le calcul !) — B et C à égalité, B retenu sur le critère majeur', en: 'B with 7.5 (A = 7.2; C = 7.5 but weaker technically… check the math!) — B and C tied, B wins on the top-weighted criterion' },
      { fr: 'A : la meilleure note technique doit l’emporter', en: 'A: the best technical score must win' },
      { fr: 'C : le moins cher et le plus rapide', en: 'C: cheapest and fastest' },
      { fr: 'Aucun : il faut relancer l’appel d’offres', en: 'None: the tender must be re-run' },
    ],
    correct: 0,
    explanation: {
      fr: "A = 9(0,5)+5(0,3)+6(0,2) = 7,2. B = 3,5+2,4+1,6 = 7,5. C = 3+2,7+1,8 = 7,5. Égalité B/C : le départage documenté se fait sur le critère le plus pondéré (technique : B 7 > C 6). La méthode et sa règle de départage doivent être définies AVANT l'évaluation.",
      en: 'A = 9(0.5)+5(0.3)+6(0.2) = 7.2. B = 3.5+2.4+1.6 = 7.5. C = 3+2.7+1.8 = 7.5. B/C tie: the documented tie-breaker uses the highest-weighted criterion (technical: B 7 > C 6). The method and tie-breaker must be defined BEFORE evaluation.',
    },
  },
  {
    id: 'hq15',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "L'équipe hésite sur une technologie inconnue au cœur de l'architecture. Le débat d'experts dure depuis deux semaines sans conclusion. Quelle pratique agile tranche le plus efficacement ?",
      en: 'The team is unsure about an unknown technology at the heart of the architecture. The expert debate has lasted two weeks without conclusion. Which agile practice settles it most effectively?',
    },
    options: [
      {
        fr: 'Un spike time-boxé : prototype jetable avec critères de décision définis à l’avance',
        en: 'A time-boxed spike: throwaway prototype with decision criteria defined upfront',
      },
      { fr: 'Poursuivre le débat avec un panel élargi', en: 'Continue the debate with a wider panel' },
      { fr: "Choisir la technologie la plus répandue", en: 'Pick the most widespread technology' },
      { fr: 'Reporter la décision à la fin de release', en: 'Defer the decision to the end of the release' },
    ],
    correct: 0,
    explanation: {
      fr: "Quand le débat théorique s'enlise, l'expérimentation courte et cadrée (spike) achète de l'information réelle. Les critères définis avant l'essai évitent que le prototype relance le débat.",
      en: 'When theoretical debate stalls, a short framed experiment (spike) buys real information. Criteria set before the trial prevent the prototype from reigniting the debate.',
    },
  },
  {
    id: 'hq16',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Votre registre des risques contient 85 risques « verts » jamais revus depuis 6 mois, tandis que les 3 derniers incidents majeurs n'y figuraient pas. Quel est le problème de FOND du management des risques ?",
      en: 'Your risk register holds 85 “green” risks untouched for 6 months, while the last 3 major incidents were never in it. What is the FUNDAMENTAL risk management problem?',
    },
    options: [
      {
        fr: "Le processus est devenu un rituel documentaire : pas de réévaluation vivante ni de détection des risques émergents",
        en: 'The process has become a documentation ritual: no living reassessment and no detection of emerging risks',
      },
      { fr: 'Le registre contient trop de risques', en: 'The register contains too many risks' },
      { fr: "L'échelle de cotation est mal calibrée", en: 'The scoring scale is miscalibrated' },
      { fr: "Il manque un outil de gestion des risques", en: 'A risk management tool is missing' },
    ],
    correct: 0,
    explanation: {
      fr: "Un registre statique qui rate les vrais incidents révèle un processus mort : le management des risques exige des revues régulières, la clôture des risques obsolètes et une veille active des signaux émergents.",
      en: 'A static register that misses real incidents reveals a dead process: risk management demands regular reviews, closing stale risks and actively scanning for emerging signals.',
    },
  },
  {
    id: 'hq17',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Activité B (durée 5j) doit démarrer 3 jours APRÈS le début de l'activité A (durée 10j) : liaison début-début + décalage de 3j. A commence au jour 1. Quand B se termine-t-elle au plus tôt ?",
      en: 'Activity B (5d) must start 3 days AFTER activity A (10d) starts: start-to-start link with a 3-day lag. A starts on day 1. When does B finish at the earliest?',
    },
    options: [
      { fr: 'Fin du jour 8', en: 'End of day 8' },
      { fr: 'Fin du jour 15', en: 'End of day 15' },
      { fr: 'Fin du jour 18', en: 'End of day 18' },
      { fr: 'Fin du jour 13', en: 'End of day 13' },
    ],
    correct: 0,
    explanation: {
      fr: 'SS + 3j : B démarre au début du jour 4 (A ayant commencé au jour 1) et dure 5 jours → fin du jour 8. La liaison SS ne dépend pas de la FIN de A.',
      en: 'SS + 3d lag: B starts at the beginning of day 4 (A started day 1) and lasts 5 days → end of day 8. An SS link does not depend on A’s FINISH.',
    },
  },
  {
    id: 'hq18',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Le comité vous reproche de re-planifier « trop souvent » : trois références de base d'échéancier en un an. Chaque re-baseline a été approuvée après des changements majeurs de périmètre. Que répondez-vous ?",
      en: 'The committee criticizes you for rebaselining “too often”: three schedule baselines in a year. Each rebaseline was approved after major scope changes. How do you respond?',
    },
    options: [
      {
        fr: "La référence n'est modifiée que par changement approuvé — le vrai sujet est la volatilité du périmètre, à traiter en amont (cadrage, gouvernance des demandes)",
        en: 'The baseline changes only through approved changes — the real issue is scope volatility, to be addressed upstream (framing, demand governance)',
      },
      { fr: 'Promettre de ne plus jamais re-baseliner', en: 'Promise never to rebaseline again' },
      { fr: 'Cesser de faire approuver les re-baselines', en: 'Stop seeking approval for rebaselines' },
      { fr: "Absorber les futurs changements sans modifier la référence", en: 'Absorb future changes without touching the baseline' },
    ],
    correct: 0,
    explanation: {
      fr: "Re-baseliner après changement approuvé est le processus correct ; ne pas le faire détruirait la valeur de mesure de l'EVM. La question légitime du comité porte sur la stabilité du périmètre, pas sur le processus.",
      en: 'Rebaselining after approved changes is the correct process; not doing so would destroy EVM’s measurement value. The committee’s legitimate question is about scope stability, not the process.',
    },
  },
  {
    id: 'hq19',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Vous devez choisir : développer en interne (600 k€, 9 mois, compétence conservée) ou acheter une solution (400 k€ licence + 80 k€/an, opérationnelle en 3 mois, dépendance éditeur). Le projet vit 5 ans. Quelle analyse est correcte ?",
      en: 'You must choose: build in-house ($600K, 9 months, retained competency) or buy a solution ($400K license + $80K/yr, live in 3 months, vendor lock-in). The product lives 5 years. Which analysis is correct?',
    },
    options: [
      {
        fr: "Sur 5 ans : achat = 800 k€ vs build = 600 k€ ; mais la décision doit intégrer le time-to-value (6 mois d'écart), le risque et la stratégie — pas seulement le coût total",
        en: 'Over 5 years: buy = $800K vs build = $600K; but the decision must weigh time-to-value (6-month gap), risk and strategy — not just total cost',
      },
      { fr: "Acheter : moins cher à l'acquisition", en: 'Buy: cheaper upfront' },
      { fr: 'Développer : toujours préférable en interne', en: 'Build: in-house is always preferable' },
      { fr: 'Le coût total étant proche, le choix est indifférent', en: 'Total costs being close, the choice is indifferent' },
    ],
    correct: 0,
    explanation: {
      fr: "Analyse make-or-buy complète : coût total de possession (400 + 5×80 = 800 vs 600), MAIS aussi valeur du délai, risques (lock-in vs exécution interne) et alignement stratégique. Le coût seul est une analyse tronquée.",
      en: 'A full make-or-buy analysis: total cost of ownership (400 + 5×80 = 800 vs 600), BUT also value of time, risks (lock-in vs internal execution) and strategic fit. Cost alone is a truncated analysis.',
    },
  },
  {
    id: 'hq20',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Mi-sprint, le PO veut ajouter une story urgente au sprint en cours. Le Scrum Master rappelle que l'objectif de sprint serait compromis. La story est réellement urgente (faille de sécurité). Quelle est la bonne réponse de l'équipe ?",
      en: 'Mid-sprint, the PO wants to add an urgent story to the current sprint. The Scrum Master notes the sprint goal would be compromised. The story is genuinely urgent (security flaw). What is the team’s correct response?',
    },
    options: [
      {
        fr: "Négocier le contenu du sprint avec le PO : intégrer l'urgence en sortant un volume équivalent, en préservant l'objectif de sprint si possible",
        en: 'Negotiate sprint content with the PO: absorb the urgency by removing an equivalent amount, preserving the sprint goal if possible',
      },
      { fr: 'Refuser : le sprint backlog est intouchable', en: 'Refuse: the sprint backlog is untouchable' },
      { fr: "Tout accepter : l'urgence prime toujours", en: 'Accept everything: urgency always prevails' },
      { fr: 'Annuler le sprint systématiquement', en: 'Systematically cancel the sprint' },
    ],
    correct: 0,
    explanation: {
      fr: "Le sprint backlog est un plan de l'équipe, pas une prison : face à une vraie urgence, l'équipe et le PO renégocient le périmètre du sprint. L'annulation du sprint est réservée aux objectifs devenus obsolètes.",
      en: 'The sprint backlog is the team’s plan, not a prison: facing a real emergency, team and PO renegotiate sprint scope. Sprint cancellation is reserved for an obsolete sprint goal.',
    },
  },
  {
    id: 'hq21',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Votre projet réglementaire doit livrer au 1er mars (loi). Monte-Carlo sur l'échéancier : P50 = 15 février, P80 = 20 mars. Que présentez-vous à la gouvernance ?",
      en: 'Your regulatory project must deliver by March 1 (law). Schedule Monte-Carlo: P50 = February 15, P80 = March 20. What do you present to governance?',
    },
    options: [
      {
        fr: "Le risque quantifié : ~50-80 % de chance de manquer la date légale sans action — avec des options de compression, dé-périmétrage ou réserves",
        en: 'The quantified risk: roughly a significant probability of missing the legal date without action — with crashing, de-scoping or reserve options',
      },
      { fr: 'La P50 : le projet livrera le 15 février', en: 'The P50: the project will deliver February 15' },
      { fr: 'La P80 pour être prudent, sans autre analyse', en: 'The P80 to be safe, with no further analysis' },
      { fr: 'La date légale comme engagement, par principe', en: 'The legal date as the commitment, on principle' },
    ],
    correct: 0,
    explanation: {
      fr: "P50 avant la date légale mais P80 après : la probabilité de dépassement est substantielle. Pour une contrainte légale, on présente la distribution ET des actions pour ramener le risque au seuil acceptable.",
      en: 'P50 before the legal date but P80 after: the overrun probability is substantial. For a legal constraint, present the distribution AND actions to bring risk within acceptable thresholds.',
    },
  },
  {
    id: 'hq22',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Un livrable a été accepté formellement il y a deux mois. Le client découvre aujourd'hui un défaut majeur dans ce livrable, dû à une exigence mal spécifiée PAR LE CLIENT. Qui paie la correction et sur quelle base ?",
      en: 'A deliverable was formally accepted two months ago. The customer now finds a major defect in it, caused by a requirement mis-specified BY THE CUSTOMER. Who pays for the fix and on what basis?',
    },
    options: [
      {
        fr: "Cela dépend du contrat (garanties, clauses de spécification) : traiter comme un différend contractuel factuel, pas comme un débat de bonne volonté",
        en: 'It depends on the contract (warranties, specification clauses): handle it as a factual contractual matter, not a goodwill debate',
      },
      { fr: 'Le fournisseur : la qualité est sa responsabilité absolue', en: 'The seller: quality is their absolute responsibility' },
      { fr: 'Le client : il a accepté le livrable', en: 'The customer: they accepted the deliverable' },
      { fr: 'Moitié-moitié par équité', en: 'Fifty-fifty out of fairness' },
    ],
    correct: 0,
    explanation: {
      fr: "L'acceptation formelle et l'origine du défaut (spécification client) sont des faits contractuels : garanties, limites de responsabilité et clauses de spécification déterminent la réponse. Les règles générales toutes faites sont fausses.",
      en: 'Formal acceptance and the defect’s origin (customer specification) are contractual facts: warranties, liability limits and specification clauses determine the answer. One-size-fits-all rules are wrong.',
    },
  },
  {
    id: 'hq23',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Votre burndown de sprint est parfaitement linéaire chaque sprint, du premier au dernier jour. Plutôt que de vous rassurer, cela vous alerte. Pourquoi ?",
      en: 'Your sprint burndown is perfectly linear every sprint, first day to last. Rather than reassuring you, it worries you. Why?',
    },
    options: [
      {
        fr: "Le travail réel n'est jamais parfaitement régulier : une courbe trop lisse suggère des mises à jour de complaisance plutôt qu'un suivi honnête",
        en: 'Real work is never perfectly regular: a too-smooth curve suggests courtesy updates rather than honest tracking',
      },
      { fr: "Une burndown linéaire signale un manque d'ambition", en: 'A linear burndown signals lack of ambition' },
      { fr: 'La vélocité devrait accélérer en fin de sprint', en: 'Velocity should accelerate late in the sprint' },
      { fr: "Rien : c'est le comportement idéal attendu", en: 'Nothing: it is the expected ideal behavior' },
    ],
    correct: 0,
    explanation: {
      fr: "Les données trop propres sont un signal d'alarme classique : le travail réel produit des plateaux et des chutes. Une linéarité parfaite répétée suggère que l'outil est « nourri » pour paraître bien, pas pour piloter.",
      en: 'Too-clean data is a classic red flag: real work produces plateaus and drops. Repeated perfect linearity suggests the tool is being “fed” to look good, not to steer.',
    },
  },
  {
    id: 'hq24',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Deux activités critiques exigent le même banc de test unique la même semaine. L'activité X a 0 jour de marge, l'activité Y en a 4. Le nivellement des ressources vous fait décaler Y. Quelle conséquence devez-vous vérifier EN PRIORITÉ ?",
      en: 'Two critical activities need the same unique test rig in the same week. Activity X has 0 days float, activity Y has 4. Resource leveling makes you shift Y. Which consequence must you check FIRST?',
    },
    options: [
      {
        fr: "Que le décalage de Y (≤ 4j) ne consomme pas toute sa marge ni ne crée un nouveau chemin critique en aval",
        en: 'That shifting Y (≤ 4d) does not consume all its float or create a new downstream critical path',
      },
      { fr: 'Que X pourrait plutôt être décalée', en: 'Whether X could be shifted instead' },
      { fr: "Le coût de location d'un second banc de test", en: 'The cost of renting a second test rig' },
      { fr: "L'accord de l'équipe de Y", en: 'Y’s team agreement' },
    ],
    correct: 0,
    explanation: {
      fr: "Le nivellement consomme les marges : décaler Y de 4 jours la rend critique à son tour. Il faut recalculer le réseau après nivellement — les marges d'hier ne valent plus après décalage.",
      en: 'Leveling consumes float: shifting Y by 4 days makes it critical in turn. The network must be recomputed after leveling — yesterday’s floats no longer hold after the shift.',
    },
  },
  {
    id: 'hq25',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Un auditeur découvre que la version déployée en production diffère de la version validée en recette : un correctif « urgent » a été poussé sans trace. Quel processus a fait défaut ?",
      en: 'An auditor finds the production version differs from the acceptance-tested version: an “urgent” fix was pushed without a trace. Which process failed?',
    },
    options: [
      {
        fr: 'La gestion de configuration (et son couplage avec la maîtrise des changements)',
        en: 'Configuration management (and its coupling with change control)',
      },
      { fr: 'La planification des tests', en: 'Test planning' },
      { fr: "L'estimation des charges", en: 'Effort estimation' },
      { fr: 'La gestion des parties prenantes', en: 'Stakeholder management' },
    ],
    correct: 0,
    explanation: {
      fr: "La gestion de configuration garantit l'identification, la traçabilité et l'intégrité des versions livrées. Un écart non tracé entre recette et production est sa défaillance type — même pour les correctifs urgents, une procédure accélérée tracée doit exister.",
      en: 'Configuration management ensures identification, traceability and integrity of delivered versions. An untraced gap between staging and production is its typical failure — even urgent fixes need a traced expedited path.',
    },
  },
  {
    id: 'hq26',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Votre plan de management prévoit un seuil d'escalade : écart de coût > 10 %. Le CPI est à 0,93 depuis 3 mois (écart 7 %) mais la tendance se dégrade régulièrement de 1 point par mois. Que faites-vous ?",
      en: 'Your management plan sets an escalation threshold: cost variance > 10%. CPI has been 0.93 for 3 months (7% variance) but the trend steadily worsens by 1 point per month. What do you do?',
    },
    options: [
      {
        fr: "Agir maintenant sur la tendance (analyse de cause, actions correctives) et informer la gouvernance de la trajectoire, sans attendre le franchissement du seuil",
        en: 'Act on the trend now (root cause analysis, corrective actions) and inform governance of the trajectory, without waiting for the threshold breach',
      },
      { fr: 'Attendre le franchissement des 10 % : le seuil fait foi', en: 'Wait for the 10% breach: the threshold rules' },
      { fr: 'Relever le seuil à 15 % pour éviter l’escalade', en: 'Raise the threshold to 15% to avoid escalation' },
      { fr: "Reclasser des coûts pour améliorer le CPI", en: 'Reclassify costs to improve CPI' },
    ],
    correct: 0,
    explanation: {
      fr: "Les seuils déclenchent l'escalade obligatoire, ils n'interdisent pas d'agir avant. Une tendance dégradée prévisible se traite de manière proactive — attendre le seuil, c'est piloter dans le rétroviseur.",
      en: 'Thresholds trigger mandatory escalation; they do not forbid earlier action. A predictable worsening trend is managed proactively — waiting for the threshold is driving by the rearview mirror.',
    },
  },
  {
    id: 'hq27',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "En approche prédictive, votre sponsor demande pourquoi vous détaillez le plan des 3 prochains mois mais laissez les phases ultérieures en macro-lots. Quelle technique justifiez-vous ?",
      en: 'In a predictive approach, your sponsor asks why you detail the next 3 months’ plan but leave later phases as high-level chunks. Which technique are you justifying?',
    },
    options: [
      {
        fr: 'La planification par vagues : détailler le proche, garder le lointain en macro et affiner à mesure que l’information arrive',
        en: 'Rolling wave planning: detail the near term, keep the far term high-level and refine as information arrives',
      },
      { fr: 'Le manque de temps de planification', en: 'A lack of planning time' },
      { fr: "Une planification agile déguisée", en: 'Disguised agile planning' },
      { fr: 'La réserve pour aléas d’échéancier', en: 'Schedule contingency reserve' },
    ],
    correct: 0,
    explanation: {
      fr: "La planification par vagues est une élaboration progressive légitime EN PRÉDICTIF : détailler tôt ce qui est lointain fabrique de la fausse précision qui devra être re-planifiée.",
      en: 'Rolling wave planning is legitimate progressive elaboration WITHIN predictive: detailing the far future early manufactures false precision that will need replanning.',
    },
  },
  {
    id: 'hq28',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Le client signe la recette mais demande « juste avant la clôture » de conserver l'équipe deux mois de plus « au cas où », sans avenant. La clôture officielle libérerait 6 personnes attendues sur d'autres projets. Que faites-vous ?",
      en: 'The customer signs acceptance but asks “just before closure” to keep the team two more months “just in case”, without an amendment. Official closure would free 6 people expected on other projects. What do you do?',
    },
    options: [
      {
        fr: "Clôturer le projet conformément au contrat et proposer de formaliser le besoin réel (support, garantie) dans un cadre distinct et chiffré",
        en: 'Close the project per the contract and offer to formalize the real need (support, warranty) in a separate, costed arrangement',
      },
      { fr: "Garder l'équipe : la relation client prime", en: 'Keep the team: the customer relationship prevails' },
      { fr: 'Refuser et couper tout contact après clôture', en: 'Refuse and cut all contact after closure' },
      { fr: "Garder discrètement deux personnes en réserve", en: 'Quietly keep two people on standby' },
    ],
    correct: 0,
    explanation: {
      fr: "Le « au cas où » non contractualisé est un coût caché qui pénalise l'organisation et les autres projets. La bonne réponse sépare : clôture propre + offre formelle de support si le besoin est réel.",
      en: 'An uncontracted “just in case” is a hidden cost penalizing the organization and other projects. The right answer separates: clean closure + a formal support offer if the need is real.',
    },
  },
  {
    id: 'hq29',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "Votre programme migre 40 applications. Les 5 premières migrations ont coûté 30 % de plus qu'estimé, principalement à cause de dépendances non documentées. Comment corrigez-vous les estimations restantes ?",
      en: 'Your program migrates 40 applications. The first 5 migrations cost 30% more than estimated, mainly due to undocumented dependencies. How do you correct the remaining estimates?',
    },
    options: [
      {
        fr: "Ré-estimer avec les données réelles (estimation paramétrique recalée) et ajouter une découverte de dépendances en amont de chaque lot",
        en: 'Re-estimate using actuals (recalibrated parametric estimating) and add upfront dependency discovery to each batch',
      },
      { fr: 'Appliquer +30 % uniformément et continuer', en: 'Apply a flat +30% and carry on' },
      { fr: 'Garder les estimations : les premières étaient atypiques', en: 'Keep the estimates: the first ones were atypical' },
      { fr: "Basculer toutes les migrations en régie", en: 'Switch all migrations to time & materials' },
    ],
    correct: 0,
    explanation: {
      fr: "Les données réelles recalent le modèle d'estimation (paramétrique), ET la cause racine (dépendances cachées) se traite par une activité de découverte — corriger le chiffre sans corriger la cause reproduit l'écart.",
      en: 'Actuals recalibrate the estimating model (parametric), AND the root cause (hidden dependencies) is addressed with a discovery activity — fixing the number without the cause reproduces the variance.',
    },
  },
  {
    id: 'hq30',
    domain: 'process',
    difficulty: 'hard',
    question: {
      fr: "En revue de fin de phase (gate), les critères de passage sont partiellement remplis : 2 livrables mineurs manquent, mais les attendre coûterait 6 semaines à l'équipe aval. Que recommandez-vous à la gouvernance ?",
      en: 'At a phase gate review, exit criteria are partially met: 2 minor deliverables are missing, but waiting for them would cost the downstream team 6 weeks. What do you recommend to governance?',
    },
    options: [
      {
        fr: "Un passage conditionnel documenté : autoriser la phase suivante avec un plan daté de complétion des livrables manquants et les risques associés explicites",
        en: 'A documented conditional pass: authorize the next phase with a dated completion plan for the missing deliverables and the associated risks made explicit',
      },
      { fr: 'Bloquer le passage : les critères sont les critères', en: 'Block the gate: criteria are criteria' },
      { fr: 'Passer sans condition et oublier les livrables', en: 'Pass unconditionally and forget the deliverables' },
      { fr: 'Déclarer les livrables manquants hors périmètre', en: 'Declare the missing deliverables out of scope' },
    ],
    correct: 0,
    explanation: {
      fr: "Les gates servent à décider en connaissance de cause, pas à punir : un passage conditionnel tracé (quoi, qui, quand, risques) optimise la valeur tout en gardant la maîtrise. Bloquer pour des éléments mineurs détruit 6 semaines de valeur.",
      en: 'Gates exist for informed decisions, not punishment: a traced conditional pass (what, who, when, risks) optimizes value while keeping control. Blocking over minor items destroys 6 weeks of value.',
    },
  },
]
