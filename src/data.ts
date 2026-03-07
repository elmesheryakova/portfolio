// ─── Types ───────────────────────────────────────────────────────────────────

export interface Competency {
  id: string;
  name: string;
  demonstrates: string;
  evidence: string[];
  caseLink: {
    text: string;
    anchor: string;
  };
  relatedCases?: string[];
}

// ─── Company ──────────────────────────────────────────────────────────────────
// Чтобы добавить компанию: добавь объект в companies[] ниже.
// companyId в кейсах должен совпадать с Company.id.

export interface Company {
  id: string;
  name: string;         // Название компании
  role: string;         // Твоя роль
  period: string;       // Например: "2023 — н.в."
  industry?: string;    // Отрасль
  description?: string; // Краткий контекст (опционально)
}

export interface CaseStudyData {
  id: string;
  companyId: string;    // Должен совпадать с Company.id
  competencyBadge: string;
  title: string;
  situation: string;
  task: string;
  actions: string[];
  results: string[];
  metrics: string[];
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const heroMetrics: string[] = [
  'Повысила SLA системы с 95% до 99%\n' +
  '(сократив downtime с ~36 до ~8 часов в месяц)',
  'Снизила долю поддержки и багфиксов с 40% до 20%',
  'Построила прозрачную систему performance review',
  'Сформировала кадровый резерв лидов',
  'Синхронизировала roadmap hardware и software команд',
  'Внедрила postmortem-практику и метрики инцидентов (MTTR / downtime)',
];

// ─── Competency Matrix ────────────────────────────────────────────────────────

export const competencies: Competency[] = [
  {
    id: 'data-driven',
    name: 'Решения на основе данных | Data-Driven Decisions',
    demonstrates:
      'Снижаю количество багов и простоев → экономия бюджета на поддержку и ускорение релизов',
    evidence: [
      '📉 SLA системы с 95% до 99%',
      '⏱  Downtime: с ~36 до ~8 часов в месяц',
      '🔧 Support Load: 40% → 20%'
    ],
    caseLink: {
      text: 'Оптимизация QA-процессов и снижение технического долга',
      anchor: '#case-qa-techdebt',
    },
  },
  {
    id: 'people-management',
    name: 'Управление людьми | People Management',
    demonstrates:
      'Сформировала сильные команды → снизила зависимость от внешнего найма и повысила retention',
    evidence: [
      '✅ Прозрачная система performance review',
      '🌱 Кадровый резерв: 3 лида + 1 выращенный QA-лид',
      '📊 Увольнение на основе данных',
    ],
    caseLink: {
      text: 'Система performance review',
      anchor: '#case-performance-review',
    },
    relatedCases: ['Кадровый резерв лидов', 'Увольнение по результатам оценки'],
  },
  {
    id: 'process-quality',
    name: 'Управление процессами и качеством | Process & Quality',
    demonstrates:
      'Стабилизировала релизы → снизила риски для бизнеса и ускорила Time-to-Market',
    evidence: [
      '🐛 Багфикс: 40% → 20% времени разработки',
      '✅ Релизы: стабильны, минимум хотфиксов',
      '🔗 Интеграционные баги: сокращены'
    ],
    caseLink: {
      text: 'Кросс-функциональное тестирование hardware/software',
      anchor: '#case-hw-sw-testing',
    },
    relatedCases: [
      'Оптимизация QA-процессов и снижение технического долга',
      'Практика постмортемов и анализ инцидентов',
    ],
  },
  {
    id: 'stakeholder-management',
    name: 'Управление стейкхолдерами | Stakeholder Management',
    demonstrates:
      'Исключила разработку бесполезных фич → экономия месяцев работы команды',
    evidence: [
      '💬 Восстановлен flow передачи ценности',
      '🎯 Валидация ТЗ до старта разработки',
      '🔄 Снижение переделок после релиза',
    ],
    caseLink: {
      text: 'Разрешение конфликта фаундер–продукт–BA',
      anchor: '#case-stakeholder-conflict',
    },
  },
  {
    id: 'risk-management',
    name: 'Управление рисками | Risk Management',
    demonstrates:
      'Предотвратила потерю бюджета на нереализуемые инициативы',
    evidence: [
      '🚫 Проект на 80 млн ₽ не запущен «вслепую»',
      '📅 Реалистичный срок: 3 года вместо 1',
      '🔍 Найм ключевых ролей до старта',
    ],
    caseLink: {
      text: 'Предотвращение запуска нереалистичного высокорискового проекта',
      anchor: '#case-risk-project',
    },
  },
  {
    id: 'change-management',
    name: 'Управление изменениями | Change Management',
    demonstrates:
      'Ускорила адаптацию команды к новым инструментам → рост производительности',
    evidence: [
      '🤖 AI-инструменты: внедрены через ранних последователей',
      '📄 Документация: ускорена за счёт автоматизации',
      '🎓 Обучение: видео + промпты для всей компании',
    ],
    caseLink: {
      text: 'Внедрение AI-инструментов',
      anchor: '#case-ai-adoption',
    },
    relatedCases: ['Внедрение ChatGPT в масштабах компании'],
  },
  {
    id: 'planning-dependencies',
    name: 'Планирование и зависимости | Planning & Dependencies',
    demonstrates:
      'Исключила простои из-за рассинхрона → эффективное использование ресурсов',
    evidence: [
      '🗓 Единый timeline для hardware + software',
      '🔗 Зависимости учтены до старта задач',
      '📦 Релизы: предсказуемы',
    ],
    caseLink: {
      text: 'Синхронизация roadmap между командами',
      anchor: '#case-roadmap-sync',
    },
  },
  {
    id: 'scope-resources',
    name: 'Управление скоупом и ресурсами | Scope & Resource Management',
    demonstrates: 'Сохраняла фокус команды на ценности → бизнес получает результат быстрее',
    evidence: [
      '✂️ MVP-подход: ценность выходит раньше',
      '🔄 Приоритеты: гибко под ресурсы и цели',
      '📋 Change Request: контроль «ползучего scope»',
    ],
    caseLink: {
      text: 'Адаптация скоупа под доступные ресурсы',
      anchor: '#case-scope-resources',
    },
  },
  {
    id: 'vendor-management',
    name: 'Управление подрядчиками | Vendor Management',
    demonstrates:
      'Координация внешних подрядчиков и DevOps-аутсорса: постановка задач, инфраструктурный roadmap, контроль выполнения и поддержка production',
    evidence: [
      '✅ Инфраструктурные изменения внедрены без блокировки разработки',
      '📋 Roadmap DevOps задач: миграция на Astra Linux, смена домена, внедрение метрик',
      '📊 Регулярные статусы и координация инцидентов production',
    ],
    caseLink: {
      text: 'Управление DevOps подрядчиком',
      anchor: '#case-vendor-devops',
    },
  },
];

// ─── Companies ────────────────────────────────────────────────────────────────
// Порядок определяет порядок отображения в секции кейсов.

export const companies: Company[] = [
  {
    id: 'company-a',
    name: 'Название компании А',
    role: 'Technical Project / Delivery Manager',
    period: '2023 — н.в.',
    industry: 'Добавь отрасль',
    description: 'Краткий контекст о компании (опционально)',
  },
  {
    id: 'company-b',
    name: 'Название компании Б',
    role: 'Project Manager',
    period: '2021 — 2023',
    industry: 'Добавь отрасль',
  },
];

// ─── Case Studies ─────────────────────────────────────────────────────────────
// Чтобы добавить новый кейс: скопируй объект ниже, заполни поля,
// убедись что companyId совпадает с одним из Company.id выше.

export const caseStudies: CaseStudyData[] = [
  {
    id: 'case-qa-techdebt',
    companyId: 'company-a',
    competencyBadge: 'Решения на основе данных',
    title: 'Оптимизация QA-процессов и снижение технического долга',
    // ↓ Заполни реальным содержимым
    situation: 'Ситуация — добавь содержимое.',
    task: 'Задача — добавь содержимое.',
    actions: [
      'Действие 1 — добавь содержимое.',
      'Действие 2 — добавь содержимое.',
      'Действие 3 — добавь содержимое.',
    ],
    results: [
      'Результат 1 — добавь содержимое.',
      'Результат 2 — добавь содержимое.',
    ],
    metrics: [
      'Bug-to-Feature Ratio: 0.8 → 0.2',
      'Downtime: 12ч → 2ч / месяц',
      'Нагрузка на поддержку и багфикс: 40% → 20%',
    ],
  },
  {
    id: 'case-performance-review',
    companyId: 'company-b',
    competencyBadge: 'Управление людьми',
    title: 'Система performance review',
    // ↓ Заполни реальным содержимым
    situation: 'Ситуация — добавь содержимое.',
    task: 'Задача — добавь содержимое.',
    actions: [
      'Действие 1 — добавь содержимое.',
      'Действие 2 — добавь содержимое.',
      'Действие 3 — добавь содержимое.',
    ],
    results: [
      'Результат 1 — добавь содержимое.',
      'Результат 2 — добавь содержимое.',
    ],
    metrics: [
      'Прозрачная система performance review построена',
      'Кадровый резерв лидов сформирован',
      'QA-лид вырощен внутри команды',
    ],
  },
];

// ─── Что я привношу ───────────────────────────────────────────────────────────

export const whatIBringItems: string[] = [
  'Кросс-функциональное руководство поставками — инженерия, продукт и hardware-команды',
  'Сильный фокус на процессы и качество — от QA-потоков до постмортемов и реагирования на инциденты',
  'Решения на основе метрик инженерии и поставок',
  'Развитие команды и кадровый резерв — растим лидов изнутри',
  'Риск-ориентированное планирование — оцениваю выполнимость до принятия обязательств, защищаю от дорогостоящих провалов',
  'Умение согласовывать бизнес-цели с инженерной реальностью — устраняю разрыв между видением фаундера и возможностями команды',
];
