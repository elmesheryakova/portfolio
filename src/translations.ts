import { useLang } from './LangContext';
import {
  heroMetrics as ruHeroMetrics,
  competencies as ruCompetencies,
  companies as ruCompanies,
  caseStudies as ruCaseStudies,
  whatIBringItems as ruWhatIBringItems,
} from './data';

// ─── UI strings ───────────────────────────────────────────────────────────────

export const ui = {
  ru: {
    ownerName: 'Елена Мещерякова',
    navAriaLabel: 'Основная навигация',
    navItems: [
      { label: 'О себе', id: 'summary' },
      { label: 'Компетенции', id: 'competencies' },
      { label: 'Кейсы', id: 'cases' },
      { label: 'Моя ценность', id: 'bring' },
    ],

    heroLabel: 'Technical Project / Delivery Manager',
    heroHeadline: 'Менеджер с\u00a0техническим бэкграундом',
    heroSubheadline:
      'Кросс-функциональное лидерство, оптимизация процессов, управление качеством, контроль рисков и предсказуемые поставки.',
    heroMetricsAriaLabel: 'Ключевые результаты',
    heroCTACompetencies: 'Компетенции',
    heroCTACases: 'Кейсы',

    summaryLabel: 'О себе',
    summaryHeading: 'Руководитель, который превращает сложность в предсказуемый результат',
    summaryBody:
      'Управляю кросс-функциональными командами (разработка, QA, hardware) и выстраиваю процессы так, чтобы идеи стабильно превращались в работающие продукты. Мой опыт — на стыке engineering, operations и бизнеса. Руководила разработкой промышленной платформы (закрытый контур АЭС). Участвовала в масштабировании продукта от MVP до тиражируемого решения. Выстраивала процессы разработки, QA, внедрения и работы с подрядчиками.',
    summaryBody2:
      'Сохраняю техническую насмотренность, участвую в архитектурных обсуждениях, помогаю команде находить сбалансированные решения. Верю, что хороший результат — это когда команда работает в устойчивом ритме, стейкхолдеры понимают друг друга, а ценность доходит до пользователя без лишних потерь.',

    dataDrivenLabel: 'Решения на основе данных · Data-Driven Decisions',
    dataDrivenHeading: 'Снижаю баги и простои — бизнес экономит',
    dataDrivenSubheading: 'Управляю качеством через метрики, а не ощущения. Вот результат.',
    dataDrivenMetricContexts: [
      'Стабильная работа на production',
      'Простоев в месяц — в 4.5× меньше',
      'Времени разработки на багфиксы',
    ],

    competenciesLabel: 'Матрица компетенций',
    competenciesHeading: 'Что умею и где это доказала',
    competenciesDescription:
      'Каждая компетенция подкреплена реальным кейсом. Нажмите на название кейса, чтобы перейти к подробному разбору ниже.',
    competenciesTableAriaLabel: 'Матрица компетенций',
    colCompetency: 'Компетенция',
    colDemonstrates: 'Что это показывает',
    colEvidence: 'Ключевые доказательства',
    colCase: 'Кейс',

    casesLabel: 'Кейсы',
    casesHeading: 'Реальные ситуации. Реальные решения.',
    casesDescription:
      'Каждый кейс структурирован по схеме Ситуация\u00a0→ Задача\u00a0→ Действия\u00a0→ Результаты с измеримыми итогами.',
    casesAllCompanies: 'Все компании',
    casesFilterAriaLabel: 'Фильтр по компании',

    caseStudySituation: 'Ситуация',
    caseStudyTask: 'Задача',
    caseStudyActions: 'Действия',
    caseStudyResults: 'Результаты',
    caseStudyMetricsAriaLabel: 'Ключевые метрики',
    caseStudyBackLabel: '← К матрице компетенций',
    caseStudyBackAriaLabel: 'К матрице компетенций',

    bringLabel: 'Моя ценность',
    bringHeading: 'Ценность, которую я приношу в команду',

    footerPortfolio: 'Портфолио',
    footerContactsAriaLabel: 'Контакты',
    footerEmailLabel: 'Почта',
    footerLocation: 'Сербия, Белград',

    caseWord: (n: number) => {
      if (n % 10 === 1 && n % 100 !== 11) return 'кейс';
      if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) return 'кейса';
      return 'кейсов';
    },
  },

  en: {
    ownerName: 'Elena Meshcheriakova',
    navAriaLabel: 'Main navigation',
    navItems: [
      { label: 'About', id: 'summary' },
      { label: 'Competencies', id: 'competencies' },
      { label: 'Cases', id: 'cases' },
      { label: 'My Value', id: 'bring' },
    ],

    heroLabel: 'Technical Project / Delivery Manager',
    heroHeadline: 'Manager with a\u00a0Technical Background',
    heroSubheadline:
      'Cross-functional leadership, process optimization, quality management, risk control, and predictable delivery.',
    heroMetricsAriaLabel: 'Key results',
    heroCTACompetencies: 'Competencies',
    heroCTACases: 'Cases',

    summaryLabel: 'About',
    summaryHeading: 'A leader who turns complexity into predictable results',
    summaryBody:
      'I manage cross-functional teams (development, QA, hardware) and build processes so that ideas consistently turn into working products. My experience spans the intersection of engineering, operations, and business. I led the development of an industrial platform (closed-loop nuclear power plant). Participated in scaling the product from MVP to a replicable solution. Built development, QA, deployment, and vendor management processes.',
    summaryBody2:
      'I maintain technical awareness, participate in architectural discussions, and help the team find balanced solutions. I believe a good outcome is when the team works in a steady rhythm, stakeholders understand each other, and value reaches users without unnecessary losses.',

    dataDrivenLabel: 'Data-Driven Decisions',
    dataDrivenHeading: 'Reducing bugs and downtime — business saves',
    dataDrivenSubheading: 'I manage quality through metrics, not gut feelings. Here\'s the result.',
    dataDrivenMetricContexts: [
      'Stable operation in production',
      'Downtime per month — 4.5× less',
      'Dev time spent on bug fixes',
    ],

    competenciesLabel: 'Competency Matrix',
    competenciesHeading: 'What I can do and where I proved it',
    competenciesDescription:
      'Each competency is backed by a real case study. Click the case name to navigate to a detailed breakdown below.',
    competenciesTableAriaLabel: 'Competency matrix',
    colCompetency: 'Competency',
    colDemonstrates: 'What it shows',
    colEvidence: 'Key evidence',
    colCase: 'Case',

    casesLabel: 'Cases',
    casesHeading: 'Real situations. Real solutions.',
    casesDescription:
      'Each case is structured as Situation\u00a0→ Task\u00a0→ Actions\u00a0→ Results with measurable outcomes.',
    casesAllCompanies: 'All companies',
    casesFilterAriaLabel: 'Filter by company',

    caseStudySituation: 'Situation',
    caseStudyTask: 'Task',
    caseStudyActions: 'Actions',
    caseStudyResults: 'Results',
    caseStudyMetricsAriaLabel: 'Key metrics',
    caseStudyBackLabel: '← Back to competency matrix',
    caseStudyBackAriaLabel: 'Back to competency matrix',

    bringLabel: 'My Value',
    bringHeading: 'Value I bring to the team',

    footerPortfolio: 'Portfolio',
    footerContactsAriaLabel: 'Contacts',
    footerEmailLabel: 'Email',
    footerLocation: 'Serbia, Belgrade',

    caseWord: (n: number) => (n === 1 ? 'case' : 'cases'),
  },
} as const;

// ─── English data ─────────────────────────────────────────────────────────────
// Order must match the arrays in data.ts exactly.

const enHeroMetrics: string[] = [
  'Improved system SLA from 95% to 99%\n(reducing downtime from ~36 to ~8 hours per month)',
  'Reduced bug fix & support time from 40% to 20%',
  'Built a transparent performance review system',
  'Formed a leadership talent pipeline',
  'Synchronized hardware and software team roadmaps',
  'Introduced postmortem practice and incident metrics (MTTR / downtime)',
];

const enWhatIBringItems: string[] = [
  'Cross-functional delivery leadership — engineering, product, and hardware teams',
  'Strong focus on process & quality — from QA flows to postmortems and incident response',
  'Engineering metrics-driven: managing quality and delivery through data, not intuition',
  'Team development & talent pipeline — growing leads from within',
  'Risk-oriented planning — assessing feasibility before committing, protecting against costly failures',
  'Ability to align business goals with engineering reality — syncing founder vision with team capabilities',
];

// Partial competency translations (demonstrates, evidence, caseLinks.text).
// Indexes match competencies[] in data.ts.
const enCompetencies = [
  // people-management
  {
    demonstrates: 'Built strong teams → reduced dependence on external hiring and improved retention',
    evidence: [
      '✅ Transparent performance review system',
      '🌱 Talent pipeline: 3 leads + 1 grown QA lead',
      '📊 Data-driven termination decisions',
    ],
    caseLinks: [
      { text: 'Performance review system', anchor: '#case-performance-review' },
      { text: 'Leadership talent pipeline', anchor: '#case-talent-pipeline' },
      { text: 'Data-driven employee termination', anchor: '#case-remove' },
    ],
  },
  // process-quality
  {
    demonstrates: 'Stabilized releases → reduced business risks and accelerated time-to-market',
    evidence: [
      '🐛 Bug fixes: 40% → 20% of dev time',
      '✅ Releases: stable, minimal hotfixes',
      '🔗 Integration bugs: reduced',
    ],
    caseLinks: [
      { text: 'QA process optimization and technical debt reduction', anchor: '#case-qa-techdebt' },
      { text: 'Cross-functional hardware/software testing', anchor: '#case-hw-sw-testing' },
      { text: 'Postmortem practice implementation and incident analysis', anchor: '#case-postmortem' },
    ],
  },
  // stakeholder-management
  {
    demonstrates: 'Eliminated development of useless features → saved months of team work',
    evidence: [
      '💬 Value flow restored',
      '🎯 Requirements validated before development',
      '🔄 Reduced rework after release',
    ],
    caseLinks: [
      { text: 'Resolving founder–product–BA conflict', anchor: '#case-stakeholder-conflict' },
    ],
  },
  // risk-management
  {
    demonstrates: 'Prevented budget loss on unrealistic initiatives',
    evidence: [
      '🚫 ₽80M project not launched blindly',
      '📅 Realistic timeline: 3 years instead of 1',
      '🔍 Key roles hired before launch',
    ],
    caseLinks: [
      { text: 'Preventing launch of an unrealistic high-risk project', anchor: '#case-risk-project' },
    ],
  },
  // change-management
  {
    demonstrates: 'Accelerated team adoption of new tools → increased productivity',
    evidence: [
      '🤖 AI tools: adopted through early followers',
      '📄 Documentation: accelerated via automation',
      '🎓 Training: videos + prompts for the whole company',
    ],
    caseLinks: [
      { text: 'AI tools adoption', anchor: '#case-ai-adoption' },
      { text: 'Company-wide ChatGPT rollout', anchor: '#case-gpt-adoption' },
    ],
  },
  // planning-dependencies
  {
    demonstrates: 'Eliminated downtime from desynchronization → efficient resource utilization',
    evidence: [
      '🗓 Single timeline for hardware + software',
      '🔗 Dependencies accounted for before task start',
      '📦 Releases: predictable',
    ],
    caseLinks: [
      { text: 'Roadmap synchronization across teams', anchor: '#case-roadmap-sync' },
    ],
  },
  // scope-resources
  {
    demonstrates: 'Kept team focused on value → business gets results faster',
    evidence: [
      '✂️ MVP approach: value delivered earlier',
      '🔄 Priorities: flexibly adjusted to resources and goals',
      '📋 Change Request: controlling scope creep',
    ],
    caseLinks: [
      { text: 'Scope adaptation to available resources', anchor: '#case-scope-resources' },
    ],
  },
  // vendor-management
  {
    demonstrates:
      'Coordination of external contractors and DevOps outsource: task assignment, infrastructure roadmap, execution control, and production support',
    evidence: [
      '✅ Infrastructure changes implemented without blocking development',
      '📋 DevOps task roadmap: Astra Linux migration, domain change, metrics implementation',
      '📊 Regular status updates and production incident coordination',
    ],
    caseLinks: [
      { text: 'DevOps vendor management', anchor: '#case-vendor-devops' },
    ],
  },
];

// Partial company translations. Indexes match companies[] in data.ts.
const enCompanies = [
  // company-a
  {
    industry: 'Nuclear Energy (NPP)',
    description:
      'The company develops industrial IT solutions for nuclear energy. The flagship product is the RITM APK, a digital platform for managing and optimizing maintenance and repair processes at nuclear power plants. The system integrates automated production data collection (including computer vision), operation monitoring, and an intelligent decision support system that replicates best practices for production tasks based on historical data. On-premise deployment + hybrid SaaS.\n   ~50 employees',
  },
];

// Partial case study translations. Indexes match caseStudies[] in data.ts.
const enCaseStudies = [
  // case-performance-review
  {
    competencyBadge: 'People Management',
    title: 'Performance Review System',
    situation:
      'The company lacked a transparent employee performance evaluation system. Promotion decisions were made subjectively.',
    task: 'Create a transparent evaluation system linked to team and company results.',
    actions: [
      'Developed a regular performance review system (every 4–6 months)',
      'Adapted and rolled it out across all company teams: developers, QA, PMs, engineers, designers, and leads',
      'Defined evaluation criteria: task quality, contribution to company goals, initiative, and complexity',
      'Used evaluation data for HR decisions',
    ],
    results: [
      'Promotions and terminations became metrics-backed',
      'The team started focusing on overall results rather than individual performance',
      'Transparency: each employee could influence their grade and salary',
    ],
    metrics: [
      'Transparent performance review system built',
      'Leadership talent pipeline established',
      'QA lead grown internally',
    ],
  },
  // case-talent-pipeline
  {
    competencyBadge: 'People Management',
    title: 'Leadership Talent Pipeline',
    situation: 'The team was growing, and a split into several development directions was planned.',
    task: 'Prepare future leads from within the company.',
    actions: [
      'Surveyed employees with leadership potential',
      'Provided opportunities to test the lead role on real tasks',
      'Served as mentor and gave regular feedback',
    ],
    results: [
      'A talent pipeline of 3 potential leads was established',
      'A QA team lead was grown internally',
      'The company will save on searching and onboarding external leads',
    ],
    metrics: [
      'Talent pipeline of 3 leads established',
      'QA lead grown internally',
      'Reduced dependence on external hiring',
    ],
  },
  // case-remove
  {
    competencyBadge: 'People Management',
    title: 'Data-Driven Employee Termination',
    situation:
      'A frontend developer regularly produced a large number of bugs, delayed feature delivery, which slowed QA work and delayed releases.',
    task: "Objectively assess the employee's contribution and make a management decision.",
    actions: [
      'Used the employee performance evaluation system',
      'Gathered team feedback',
      'Analyzed the impact of task quality on release velocity',
    ],
    results: [
      'The team eliminated a systemic source of defects',
      'QA team workload decreased',
      'Delivery predictability improved',
    ],
    metrics: [
      'HR decisions based on metrics',
      'Reduced QA workload',
      'Healthy team motivation maintained',
    ],
  },
  // case-qa-techdebt
  {
    competencyBadge: 'Process & Quality',
    title: 'QA Process Optimization and Technical Debt Reduction',
    situation: 'Development was spending about 40% of time fixing defects.',
    task: 'Reduce the impact of bugs on the development process.',
    actions: [
      'Analyzed quality metrics',
      'Paused new feature development',
      'Justified the need for QA reinforcement',
      'Implemented a new testing flow and prioritized technical debt',
    ],
    results: [
      'Bug fix time reduced from 40% to 20%',
      'Releases stabilized',
      'Positive user feedback',
    ],
    metrics: [
      'SLA: 95% → 98%',
      'Downtime: 36h → 8h / month',
      'Support and bug fix load: 40% → 20%',
    ],
  },
  // case-hw-sw-testing
  {
    competencyBadge: 'Process & Quality',
    title: 'Cross-Functional Hardware and Software Testing',
    situation:
      'The engineering team and development team tested functionality separately, leading to integration errors.',
    task: 'Create an integration testing environment. Extend QA team responsibility to include engineers.',
    actions: [
      'A test environment with equipment was created',
      'Organized server infrastructure together with DevOps',
      'Extended QA scope to integration scenarios',
    ],
    results: [
      'Development and engineering teams started testing the system in a unified integration environment',
      'The number of integration errors found in production significantly decreased',
      'Release predictability and hardware/software integration quality improved',
    ],
    metrics: [
      'Integration test environment created',
      'QA extended to hardware integration scenarios',
      'Reduced integration errors in production',
    ],
  },
  // case-postmortem
  {
    competencyBadge: 'Process & Quality',
    title: 'Postmortem Practice Implementation and Incident Analysis',
    situation:
      'After incidents, the team spent a long time finding root causes. One incident involved 502 errors on random requests.',
    task: "Systematize the team's response to failures.",
    actions: [
      'Introduced postmortem practice',
      'After identifying the root cause, initiated metrics coverage for critical code sections, distributed ownership among backend developers, and introduced a rule: a task is only done when tests and coverage of key functionality are in place',
      'Separated responsibility for critical code sections',
      'Introduced reliability metrics analysis (downtime, MTTR)',
    ],
    results: [
      'Incident diagnosis time decreased',
      'System stability improved',
      'Engineering discipline improved',
    ],
    metrics: [
      'Postmortem integrated into the development process',
      'MTTR and downtime used for incident analysis',
      'Engineering discipline and observability strengthened',
    ],
  },
  // case-stakeholder-conflict
  {
    competencyBadge: 'Stakeholder Management',
    title: 'Business-Development Communication and Expectation Alignment',
    situation:
      'The team spent 2 months on functionality that the founder ultimately rejected as valueless.',
    task: 'Restore the flow of business value into development.',
    actions: [
      'Initiated a stakeholder meeting',
      "Identified a problem in the business analyst's work",
      'Agreed on additional requirements validation before development',
    ],
    results: [
      'Rework volume decreased',
      'Requirements quality improved',
      'Confidence that the team addresses real customer pain points',
      'Business analyst replaced',
    ],
    metrics: [
      'Rework reduction',
      'Additional requirements validation before development',
      'Business value flow restored',
    ],
  },
  // case-risk-project
  {
    competencyBadge: 'Risk Management',
    title: 'Preventing Launch of an Unrealistic High-Risk Project',
    situation:
      'The founder proposed launching a complex project with 3D models and industrial system integrations, with a 1-year timeline and an ₽80M budget. Requirements were formulated at a high level.',
    task: 'Assess project feasibility and prevent a launch with high failure risk.',
    actions: [
      'Conducted risk and technical complexity analysis',
      'Identified missing expertise and integrations',
      'Prepared arguments for management',
    ],
    results: [
      'The project was not launched without prior preparation',
      'Showed that implementation would take about 3 years and significantly exceed budget',
      'The company avoided launching a high-risk project',
      'Search for key specialists initiated: architect, business analyst, product designer, and project manager',
    ],
    metrics: [
      'High-risk project launch prevented',
      'Timeline corrected: 1 year → ~3 years',
      'Key role search initiated before launch',
    ],
  },
  // case-ai-adoption
  {
    competencyBadge: 'Change Management',
    title: 'AI Tools Adoption in the Team',
    situation: 'The team was skeptical about using AI.',
    task: 'Implement new tools without resistance.',
    actions: [
      'Started adoption through an early adopter',
      'Proposed tracking time savings from AI usage',
      'Showed results to the team',
      'Allowed the practice to spread organically',
    ],
    results: [
      'AI started being used for task automation',
      'Documentation preparation accelerated',
      'Share of routine tasks decreased',
    ],
    metrics: [
      'AI adopted through early adopters',
      'Documentation preparation accelerated',
      'Reduced share of routine tasks',
    ],
  },
  // case-gpt-adoption
  {
    competencyBadge: 'Change Management',
    title: 'Company-Wide ChatGPT Rollout',
    situation: 'Company employees did not understand how to use AI tools.',
    task: 'Train employees at all company levels and integrate AI into processes.',
    actions: [
      'Selected the tool',
      'Created role-based accounts and prompts',
      'Conducted training and recorded video instructions',
      'Provided support during the adaptation phase',
    ],
    results: ['Different departments started using AI for task automation'],
    metrics: [
      'AI adopted company-wide',
      'Employees trained in AI usage',
      'Routine task automation across departments',
    ],
  },
  // case-roadmap-sync
  {
    competencyBadge: 'Planning & Dependencies',
    title: 'Roadmap Synchronization Across Teams',
    situation: 'The engineering team and development team were working on different roadmaps.',
    task: 'Create a unified development plan.',
    actions: [
      'Collected roadmaps from all teams',
      'Laid out initiatives in a Gantt chart',
      'Identified hardware and software dependencies',
      'Reprioritized based on business value, resources, and technical debt',
    ],
    results: [
      'Teams started working on a unified plan',
      'Number of blockages decreased',
      'Release predictability improved',
    ],
    metrics: [
      'Hardware and software roadmaps synchronized',
      'Cross-team blockages reduced',
      'Delivery predictability improved',
    ],
  },
  // case-scope-resources
  {
    competencyBadge: 'Scope & Resource Management',
    title: 'Scope Adaptation to Available Resources',
    situation: 'The founder regularly brought new ideas without considering team capacity.',
    task: 'Deliver value without overloading the team.',
    actions: [
      'Decomposed tasks',
      'Identified MVPs and moved parts of functionality to backlog',
      'Adjusted priorities based on business goals and value',
    ],
    results: [
      'Team maintained sprint predictability',
      'Business received value faster',
    ],
    metrics: [
      'MVP used for fast value delivery',
      'Scope managed through prioritization',
      'Sprint predictability maintained',
    ],
  },
  // case-vendor-devops
  {
    competencyBadge: 'Vendor Management',
    title: 'DevOps Vendor Management',
    situation:
      "DevOps work was performed by an external contractor, and infrastructure tasks affected the development team's work and production stability.",
    task: 'Organize interaction between the development team and DevOps contractor, and ensure infrastructure tasks are completed without blocking development.',
    actions: [
      'Formed a DevOps task roadmap (domain, infrastructure, metrics)',
      'Organized regular status meetings with the contractor',
      'Coordinated infrastructure change implementation',
      'Synchronized DevOps tasks with development plans',
    ],
    results: [
      'Infrastructure changes implemented without stopping development',
      'DevOps work transparency increased',
      'Development team received stable infrastructure',
    ],
    metrics: [
      'DevOps task roadmap established',
      'Infrastructure changes implemented without blocking development',
      'Regular production incident coordination',
    ],
  },
];

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useLocalizedData() {
  const { lang } = useLang();

  if (lang === 'ru') {
    return {
      heroMetrics: ruHeroMetrics,
      competencies: ruCompetencies,
      companies: ruCompanies,
      caseStudies: ruCaseStudies,
      whatIBringItems: ruWhatIBringItems,
    };
  }

  return {
    heroMetrics: enHeroMetrics,
    competencies: ruCompetencies.map((c, i) => ({ ...c, ...enCompetencies[i] })),
    companies: ruCompanies.map((c, i) => ({ ...c, ...enCompanies[i] })),
    caseStudies: ruCaseStudies.map((cs, i) => ({ ...cs, ...enCaseStudies[i] })),
    whatIBringItems: enWhatIBringItems,
  };
}
