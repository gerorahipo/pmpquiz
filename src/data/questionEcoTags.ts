/** Maps each question id to the PMI ECO task id it primarily exercises. */
export const QUESTION_ECO_TASK: Record<string, string> = {
  // ─────────────────────────── questions-base.ts ───────────────────────────
  // PEOPLE
  p01: 'people-01', // conflict between two team members over technical approach
  p02: 'people-14', // disengaged high performer, 1:1 to understand & support (EI)
  p03: 'people-12', // team charter defines ground rules
  p04: 'people-04', // coach team, delegate progressively, grow autonomy
  p05: 'people-11', // virtual team member feels isolated across time zones
  p06: 'people-09', // resistant influential stakeholder, listen first
  p07: 'people-01', // storming stage, facilitate conflict resolution
  p08: 'people-04', // RACI matrix clarifies responsibility (empowerment via clarity)
  p09: 'people-05', // new member ramping up slowly, mentoring/pairing
  p10: 'people-03', // retrospective adjusts daily stand-up practice
  p11: 'people-08', // negotiate scope/schedule/resources with sponsor
  p12: 'people-02', // servant leadership style for a project manager

  // PROCESS
  q01: 'process-10', // scope change request, assess impact first
  q02: 'process-05', // EVM: EV/PV/AC status (budget & resources)
  q03: 'process-06', // critical path definition
  q04: 'process-06', // crashing the critical path
  q05: 'process-03', // risk response strategy: transfer (insurance)
  q06: 'process-08', // product backlog orders scope/features by value
  q07: 'process-02', // sprint review = stakeholder feedback on the product (communications)
  q08: 'process-14', // project charter authorizes PM (governance)
  q09: 'process-08', // requirements/scope elicitation gap causing dissatisfaction
  q10: 'process-05', // cost baseline vs budget (management reserves)
  q11: 'process-13', // choosing agile approach based on uncertainty (methodology)
  q12: 'process-07', // root cause analysis before fixing a failed deliverable (quality)
  q13: 'process-17', // closure: lessons learned & archiving
  q14: 'process-05', // SPI/CPI interpretation (budget & schedule performance)
  q15: 'process-01', // retrospective improves the team's way of working

  // BUSINESS
  b01: 'business-01', // new regulation impacts a deliverable, assess & comply
  b02: 'business-02', // business value definition
  b03: 'business-02', // business case no longer valid, re-evaluate benefits
  b04: 'business-02', // benefits realization plan
  b05: 'business-01', // environmental impact beyond legal compliance (stewardship)
  b06: 'business-04', // support organizational transformation

  // ─────────────────────────── questions-easy.ts ───────────────────────────
  ep01: 'people-06', // Tuckman model, forming stage (team building)
  ep02: 'people-09', // power/interest grid for stakeholder engagement
  ep03: 'people-07', // Scrum Master removes impediments

  eq01: 'process-08', // WBS decomposes scope
  eq02: 'process-05', // SPI formula (schedule/budget performance index)
  eq03: 'process-06', // fast tracking schedule compression

  eb01: 'business-02', // business case ownership (sponsor, benefits)
  eb02: 'business-02', // project vs operations (unique result/value)

  // ─────────────────────────── questions-medium.ts ───────────────────────────
  // PEOPLE
  mp01: 'people-10', // facilitation techniques to balance meeting contributions
  mp02: 'people-09', // conflicting stakeholder priorities, align via facilitation
  mp03: 'people-02', // transparent communication amid reorg uncertainty (leadership)
  mp04: 'people-08', // vendor unresponsive, reach out directly (negotiation posture)
  mp05: 'people-10', // cross-cultural misunderstandings, shared communication norms
  mp06: 'people-01', // conflict via aggressive emails, meet privately
  mp07: 'people-07', // recurring blocker not removed by Scrum Master
  mp08: 'people-09', // stakeholder bypassing PM, restate channels
  mp09: 'people-03', // blameless retrospective after missed milestone
  mp10: 'people-08', // negotiate for a functional manager's expert
  mp11: 'people-01', // conflict of interest/ethics: timesheet falsification report...
  mp12: 'people-04', // include contractors in technical decisions (empowerment)

  // PROCESS
  mq01: 'process-10', // forgotten activity, go through change control
  mq02: 'process-05', // EAC calculation (budget/cost forecasting)
  mq03: 'process-10', // scope creep via unapproved direct request
  mq04: 'process-11', // contract type risk allocation (procurement)
  mq05: 'process-02', // communication channels formula (team growth)
  mq06: 'process-03', // risk materializes, fallback/workaround (risk management)
  mq07: 'process-13', // story points vs hours (agile estimation practice)
  mq08: 'process-07', // kanban WIP limit, quality/flow of deliverables
  mq09: 'process-06', // total float calculation (schedule)
  mq10: 'process-07', // Pareto chart for defect causes (quality)
  mq11: 'process-03', // EMV comparison between two risk options
  mq12: 'process-02', // iteration reviews for transparent progress (communications)
  mq13: 'process-08', // conflicting requirements between departments (scope)
  mq14: 'process-07', // quality assurance audit finds bypassed process

  // BUSINESS
  mb01: 'business-01', // starting execution before charter signed (compliance/governance)
  mb02: 'business-04', // change management for job-threat resistance
  mb03: 'business-03', // competitor product makes scope obsolete (external environment)
  mb04: 'business-01', // new country certification requirement (compliance)

  // ─────────────────────────── questions-hard-1.ts ───────────────────────────
  hp01: 'people-12', // PO rewrites acceptance criteria after the fact, anchor DoD/ground rules
  hp02: 'people-01', // structured mediation after facilitation failed (conflict)
  hp03: 'people-13', // confidential departure, prepare transition/knowledge transfer & mentoring
  hp04: 'people-08', // weak matrix, negotiate with functional manager
  hp05: 'people-01', // credit-stealing peer, handle conflict privately
  hp06: 'people-11', // distributed team decisions excluding remote sites (virtual teams)
  hp07: 'people-12', // high performer ignoring team ground rules
  hp08: 'people-08', // principled negotiation with a customer threatening termination
  hp09: 'people-01', // Scrum Master vs architect conflict over technical debt
  hp10: 'people-09', // skeptical director demanding heavy reporting, address stakeholder concerns
  hp11: 'people-14', // Herzberg motivators (emotional intelligence / team performance)
  hp12: 'people-02', // situational leadership progression (leading a team)
  hp13: 'people-02', // publicly protect team from inaccurate blame (leadership)
  hp14: 'people-09', // cross-team PO prioritization conflict, shared value governance
  hp15: 'people-14', // burnout confided in confidence, rebalance workload with EI
  hp16: 'people-08', // political pressure to place unfit expert, negotiate objectively
  hp17: 'people-14', // psychological safety gap causing watermelon reporting
  hp18: 'people-04', // neurodivergent member, diversify contribution channels (empower)
  hp19: 'people-01', // conflict of interest in peer review (relationship)
  hp20: 'people-04', // redefine expert's role from veto to advisory (empowerment)
  hp21: 'people-08', // RTO mandate vs remote hires, negotiate options
  hp22: 'people-01', // intimidation/falsification, protect junior & data integrity
  hp23: 'people-06', // split 12-person team into two aligned teams (build a team)
  hp24: 'people-14', // underperforming member going through divorce, EI-based accommodation
  hp25: 'people-02', // verify facts before communicating rumor (leadership/trust)
  hp26: 'people-13', // advocate expert career track vs forced promotion (mentoring)
  hp27: 'people-01', // publicly critical consultant, humility and private ground rules
  hp28: 'people-09', // team drops estimates, reconcile with PMO need (collaboration)
  hp29: 'people-10', // anonymous Delphi estimation to neutralize hierarchy (shared understanding)
  hp30: 'people-04', // integrate support staff into ceremonies/decisions (empowerment)
  hp31: 'people-01', // refuse to fire without objective grounds (ethics/fairness)
  hp32: 'people-02', // adjourning stage, celebrate & support transitions (leadership)
  hp33: 'people-01', // bribery request from partner, refuse per ethics (conflict/values)
  hp34: 'people-04', // respect self-organizing team's suboptimal decision (empowerment)
  hp35: 'people-10', // religious holiday milestone conflict, co-build options (shared understanding)
  hp36: 'people-01', // secret second job breaching availability commitments
  hp37: 'people-06', // injecting juniors into a performing team (team building)
  hp38: 'people-02', // manager wants to approve status reports (leadership/integrity)
  hp39: 'people-08', // contractor renewal uncertainty, escalate & be transparent (negotiate)
  hp40: 'people-01', // crisis blame between departments, facilitate sequence

  hq01: 'process-05', // EAC formula for atypical variance (budget)
  hq02: 'process-05', // TCPI calculation (budget)
  hq03: 'process-11', // FPIF Point of Total Assumption (procurement)
  hq04: 'process-06', // total float via network diagram (schedule)
  hq05: 'process-03', // EMV of a mitigation action (risk)
  hq06: 'process-07', // control chart rule of seven (quality)
  hq07: 'process-03', // secondary risk after a transfer response (risk)
  hq08: 'process-07', // cumulative flow diagram bottleneck (quality/flow)
  hq09: 'process-06', // velocity range forecast for a reliable date (schedule)
  hq10: 'process-10', // hybrid change touching both predictive & agile streams
  hq11: 'process-07', // uphold Definition of Done despite velocity pressure (quality)
  hq12: 'process-10', // fixed-price scope dispute, return to baseline & change control
  hq13: 'process-06', // dress rehearsals to de-risk an irreversible cutover (schedule)
  hq14: 'process-11', // weighted scoring model for vendor selection (procurement)
  hq15: 'process-13', // time-boxed spike to resolve a technology debate (methodology)
  hq16: 'process-03', // stale risk register missing real incidents (risk)
  hq17: 'process-06', // start-to-start lag network calculation (schedule)
  hq18: 'process-06', // rebaselining after approved changes, scope volatility (schedule)
  hq19: 'process-05', // make-or-buy total cost of ownership analysis (budget/resources)
  hq20: 'process-10', // mid-sprint urgent story, renegotiate sprint content (changes)
  hq21: 'process-06', // Monte Carlo schedule forecast vs legal deadline
  hq22: 'process-11', // contractual liability for a defect post-acceptance (procurement)
  hq23: 'process-02', // suspiciously linear burndown suggests dishonest reporting (communications)
  hq24: 'process-06', // resource leveling consumes float, recheck critical path (schedule)
  hq25: 'process-12', // configuration management gap between staging & production (artifacts)
  hq26: 'process-15', // acting on a worsening CPI trend before threshold breach (issues)
  hq27: 'process-06', // rolling wave planning (schedule)
  hq28: 'process-17', // customer wants team retained past closure (closure)
  hq29: 'process-05', // recalibrating parametric estimates from actuals (budget)
  hq30: 'process-14', // conditional gate pass with documented risks (governance)

  // ─────────────────────────── questions-hard-2.ts ───────────────────────────
  hp41: 'people-13', // mentoring capacity conflict, orchestrate other mentors
  hp42: 'people-13', // knowledge hoarding expert, reframe transfer around her value (mentor)
  hp43: 'people-10', // contradictory customer requirements, active listening (shared understanding)
  hp44: 'people-02', // defend accurate recognition of all contributors (leadership)
  hp45: 'people-14', // repeated voluntary weekend work, address systemic capacity (EI/care)
  hp46: 'people-02', // first 90 days rebuilding trust after predecessor's firing (leadership)
  hp47: 'people-01', // mandatory surveillance tool conflicting with team values, integrity
  hp48: 'people-01', // architect's withdrawal/forcing pattern, structured feedback (conflict)
  hp49: 'people-14', // political crisis affecting team, people-first support (EI/care)
  hp50: 'people-08', // portfolio resource pull request, transparent trade-off (negotiate)


  // ─────────────────────────── questions-hard-3.ts ───────────────────────────
  hq31: 'process-06', // crashing only critical-path activities (schedule)
  hq32: 'process-08', // WSJF prioritization by value/size ratio (scope/value ordering)
  hq33: 'process-02', // crisis communication overriding the standard plan
  hq34: 'process-08', // unsanctioned "elegant" optimization = gold plating (scope)
  hq35: 'process-08', // release burnup scope growing faster than delivery (scope)
  hq36: 'process-11', // CPFF vendor monitoring clauses (procurement)
  hq37: 'process-03', // cross-team dependency treated as active risk
  hq38: 'process-16', // continuous lessons-learned capture (knowledge transfer)
  hq39: 'process-13', // overly strict Definition of Ready throttling flow (methodology)
  hq40: 'process-07', // quick fix vs clean fix, explicit debt decision (quality)
  hq41: 'process-05', // analyzing contingency reserve consumption (budget)
  hq42: 'process-02', // customer presence killing daily candor, right channels (communications)
  hq43: 'process-06', // PERT three-point estimate (schedule)
  hq44: 'process-13', // kanban classes of service for expedite requests (methodology)
  hq45: 'process-07', // defending pilot phase value vs cancellation (quality/adoption)
  hq46: 'process-14', // vendor milestone signed off without meeting criteria (governance)
  hq47: 'process-07', // objective earned-progress rules vs "90% done" bias (quality/measurement)
  hq48: 'process-17', // full closure process for a prematurely terminated project
  hq49: 'process-06', // cross-train release synchronization at scale (schedule)
  hq50: 'process-07', // formally updating quality plan to match superior practice
  hq51: 'process-08', // WIP limits & swarming to finish stories (flow of scope)
  hq52: 'process-05', // funding tranche risk tied to milestone (budget)
  hq53: 'process-05', // reserve release tied to residual risk, not past CPI (budget)
  hq54: 'process-10', // change freeze exception process (change control)
  hq55: 'process-07', // severity-based defect prioritization vs raw counter (quality)
  hq56: 'process-11', // legal review bottleneck in procurement flow
  hq57: 'process-06', // funded exploration sprints before committing an estimate (schedule)
  hq58: 'process-03', // late load test risk, costed options to governance
  hq59: 'process-14', // restoring information-to-decision governance loop
  hq60: 'process-11', // cross-vendor integration schedule & governance (procurement)
  hq61: 'process-17', // negotiated conditional acceptance near closure
  hq62: 'process-16', // handover of tacit knowledge to successor (knowledge transfer)

  hb01: 'business-02', // NPV vs payback trade-off under cash crisis (value/benefits)
  hb02: 'business-02', // sunk cost fallacy, compare remaining cost to residual benefits
  hb03: 'business-03', // anticipating a pending external regulation (external environment)
  hb04: 'business-02', // phantom benefits due to lack of adoption/transition plan
  hb05: 'business-03', // strategic pivot leaving project misaligned (external environment)
  hb06: 'business-03', // carbon tax/customer sourcing trends shaping a CAPEX decision
  hb07: 'business-04', // local opposition to project, engage stakeholders (organizational/social change)
  hb08: 'business-02', // correcting a flawed ROI calculation for governance (value/benefits)

  // ─────────────────────────── questions-pmpdore.ts ───────────────────────────
  // 159 questions cycle through 19 unique templates (pd001-pd019); the
  // underlying topic/decision point (and domain) repeats identically every
  // 19 ids regardless of the role name substituted into the scenario.
  pd001: 'process-03', pd002: 'people-05', pd003: 'process-10', pd004: 'people-09',
  pd005: 'process-10', pd006: 'business-04', pd007: 'people-01', pd008: 'process-15',
  pd009: 'business-02', pd010: 'people-09', pd011: 'process-07', pd012: 'business-04',
  pd013: 'people-08', pd014: 'process-15', pd015: 'business-04', pd016: 'people-07',
  pd017: 'process-07', pd018: 'business-02', pd019: 'people-03',

  pd020: 'process-10', pd021: 'business-04', pd022: 'people-01', pd023: 'process-15',
  pd024: 'business-02', pd025: 'people-09', pd026: 'process-07', pd027: 'business-04',
  pd028: 'people-09', pd029: 'process-10', pd030: 'business-04', pd031: 'people-01',
  pd032: 'process-15', pd033: 'business-02', pd034: 'people-09', pd035: 'process-07',
  pd036: 'business-04', pd037: 'people-08', pd038: 'process-15',

  pd039: 'business-04', pd040: 'people-07', pd041: 'process-07', pd042: 'business-02',
  pd043: 'people-03', pd044: 'process-10', pd045: 'business-04', pd046: 'people-01',
  pd047: 'process-15', pd048: 'business-02', pd049: 'people-09', pd050: 'process-07',
  pd051: 'business-04', pd052: 'people-09', pd053: 'process-10', pd054: 'business-04',
  pd055: 'people-01', pd056: 'process-15', pd057: 'business-02',

  pd058: 'people-09', pd059: 'process-07', pd060: 'business-04', pd061: 'people-08',
  pd062: 'process-15', pd063: 'business-04', pd064: 'people-07', pd065: 'process-07',
  pd066: 'business-02', pd067: 'people-03', pd068: 'process-10', pd069: 'business-04',
  pd070: 'people-01', pd071: 'process-15', pd072: 'business-02', pd073: 'people-09',
  pd074: 'process-07', pd075: 'business-04',

  pd076: 'people-09', pd077: 'process-10', pd078: 'business-04', pd079: 'people-01',
  pd080: 'process-15', pd081: 'business-02', pd082: 'people-09', pd083: 'process-07',
  pd084: 'business-04', pd085: 'people-08', pd086: 'process-15', pd087: 'business-04',
  pd088: 'people-07', pd089: 'process-07', pd090: 'business-02', pd091: 'people-03',
  pd092: 'process-10', pd093: 'business-04', pd094: 'people-01',

  pd095: 'process-15', pd096: 'business-02', pd097: 'people-09', pd098: 'process-07',
  pd099: 'business-04', pd100: 'people-09', pd101: 'process-10', pd102: 'business-04',
  pd103: 'people-01', pd104: 'process-15', pd105: 'business-02', pd106: 'people-09',
  pd107: 'process-07', pd108: 'business-04', pd109: 'people-08', pd110: 'process-15',
  pd111: 'business-04', pd112: 'people-07',

  pd113: 'process-07', pd114: 'business-02', pd115: 'people-03', pd116: 'process-10',
  pd117: 'business-04', pd118: 'people-01', pd119: 'process-15', pd120: 'business-02',
  pd121: 'people-09', pd122: 'process-07', pd123: 'business-04', pd124: 'people-09',
  pd125: 'process-10', pd126: 'business-04', pd127: 'people-01', pd128: 'process-15',
  pd129: 'business-02', pd130: 'people-09',

  pd131: 'process-07', pd132: 'business-04', pd133: 'people-08', pd134: 'process-15',
  pd135: 'business-04', pd136: 'people-07', pd137: 'process-07', pd138: 'business-02',
  pd139: 'people-03', pd140: 'process-10', pd141: 'business-04', pd142: 'people-01',
  pd143: 'process-15', pd144: 'business-02', pd145: 'people-09', pd146: 'process-07',
  pd147: 'business-04', pd148: 'people-09',

  pd149: 'process-10', pd150: 'business-04', pd151: 'people-01', pd152: 'process-15',
  pd153: 'business-02', pd154: 'people-09', pd155: 'process-07', pd156: 'business-04',
  pd157: 'people-08', pd158: 'process-15', pd159: 'business-04',
}
