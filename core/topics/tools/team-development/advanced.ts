import { Topic } from '../../../types';

export const TEAM_DEVELOPMENT_ADVANCED_TOPICS: Topic[] = [
  {
    id: "architecture-and-responsibility",
    title: "Архитектура и ответственность",
    difficulty: "advanced",
    description: "Архитектурные решения определяют не только код, но и способы работы команды. Понимание ответственности за эти решения важно при росте продукта и масштабировании команд.",
    keyPoints: [
      "Принятие решений: индивидуально или коллективно",
      "Роль разработчика и лида в архитектуре",
      "Последствия решений: поддержка, масштабирование, долг",
      "Границы ответственности в разных размерах команд",
      "Компромиссы между техническим качеством и бизнес-целями"
    ],
    additionalDescription: "Архитектура в командной разработке — это всегда баланс. Даже технически верное решение может быть ошибочным с точки зрения команды или бизнеса.",
    tags: [
      "tools",
      "architecture",
      "team",
      "collaboration",
      "advanced"
    ],
    examples: [
      {
        title: "Архитектурный выбор",
        code: "// Решение: внедрить сложную архитектуру\n// Последствие: рост порога входа для новых разработчиков\n// Ответственность: учитывать масштаб и опыт команды."
      }
    ],
    relatedTopics: [
      "developer-responsibility",
      "team-scaling",
      "technical-debt"
    ]
  },

  {
    id: "team-scaling",
    title: "Масштаб команд",
    difficulty: "advanced",
    description: "По мере роста продукта команды начинают масштабироваться, что усложняет коммуникацию и принятие решений. Управление зависимостями становится важнее индивидуальной эффективности.",
    keyPoints: [
      "Несколько команд работают над одним продуктом.",
      "Появляются межкомандные зависимости.",
      "Общие библиотеки и компоненты.",
      "Необходимость согласования архитектуры."
    ],
    tags: ["tools", "team", "scalability", "architecture", "advanced"],
    examples: [
      {
        title: "Рост команды",
        code: "// Одна команда → несколько команд\n// Общие компоненты → shared библиотеки\n// Решения принимаются не локально"
      }
    ],
    relatedTopics: ["roles-and-responsibility", "architecture-and-responsibility", "large-processes"]
  },

  {
    id: "large-processes",
    title: "Большие процессы",
    difficulty: "advanced",
    description: "В крупных компаниях используются масштабируемые процессы управления разработкой. Они помогают синхронизировать десятки команд и долгосрочные цели.",
    keyPoints: [
      "Roadmap как стратегический план.",
      "OKR для согласования целей.",
      "Фреймворки масштабирования Scrum.",
      "Долгий цикл принятия решений."
    ],
    tags: ["tools", "team", "processes", "advanced"],
    examples: [
      {
        title: "Планирование в масштабе",
        code: "// Годовая стратегия\n// Квартальные цели\n// Итеративная реализация"
      }
    ],
    relatedTopics: ["team-scaling", "business-metrics", "scrum-antipatterns"]
  },

  {
    id: "business-metrics",
    title: "Бизнес-метрики",
    difficulty: "advanced",
    description: "Бизнес-метрики показывают, насколько продукт эффективен и прибыльный. Они помогают принимать решения о развитии и приоритетах.",
    keyPoints: [
      "Retention отражает удержание пользователей.",
      "Conversion показывает эффективность действий.",
      "Churn сигнализирует о потере клиентов.",
      "Метрики важнее субъективных ощущений."
    ],
    tags: ["tools", "business", "product", "advanced"],
    examples: [
      {
        title: "Влияние фичи",
        code: "// Фича добавлена\n// Метрика выросла → решение успешное\n// Метрика не изменилась → фича пересматривается"
      }
    ],
    relatedTopics: ["business-and-product", "large-processes", "feature-decisions"]
  },

  {
    id: "feature-decisions",
    title: "Решения по фичам",
    difficulty: "advanced",
    description: "Не все идеи должны быть реализованы. Решения о фичах принимаются на основе ценности, рисков и стоимости поддержки.",
    keyPoints: [
      "Фича должна решать конкретную проблему.",
      "Поддержка фичи стоит денег.",
      "Удаление фичи — нормальная практика.",
      "Техническая сложность не равна бизнес-ценности."
    ],
    tags: ["tools", "product", "processes", "advanced"],
    examples: [
      {
        title: "Отказ от фичи",
        code: "// Идея звучит хорошо\n// Метрики не растут\n// Фича не реализуется"
      }
    ],
    relatedTopics: ["business-metrics", "technical-debt", "developer-career"]
  },

  {
    id: "technical-debt",
    title: "Технический долг",
    difficulty: "advanced",
    description: "Технический долг — это результат компромиссов между скоростью и качеством. Он влияет на стабильность и скорость развития продукта.",
    keyPoints: [
      "Долг возникает из-за спешки или устаревших решений.",
      "Он замедляет разработку со временем.",
      "Управление долгом — бизнес-решение.",
      "Полное отсутствие долга невозможно."
    ],
    tags: ["tools", "architecture", "refactoring", "advanced"],
    examples: [
      {
        title: "Компромисс",
        code: "// Быстрый релиз\n// Упрощенная архитектура\n// План рефакторинга позже"
      }
    ],
    relatedTopics: ["feature-decisions", "scrum-antipatterns", "developer-career"]
  },

  {
    id: "scrum-antipatterns",
    title: "Scrum-антипаттерны",
    difficulty: "advanced",
    description: "Scrum может терять смысл при формальном применении. Антипаттерны замедляют команды и создают иллюзию контроля.",
    keyPoints: [
      "Scrum-театр и бессмысленные митинги.",
      "Фиксация сроков без гибкости.",
      "Отсутствие реальной автономии команды.",
      "Подмена ценности формальностями."
    ],
    funFact: "Scrum чаще ломается из-за менеджмента, чем из-за разработчиков.",
    tags: ["tools", "scrum", "processes", "advanced"],
    examples: [
      {
        title: "Формальный Scrum",
        code: "// Daily есть\n// Review есть\n// Результата нет"
      }
    ],
    relatedTopics: ["large-processes", "technical-debt", "developer-career"]
  },

  {
    id: "developer-career",
    title: "Карьера разработчика",
    difficulty: "advanced",
    description: "Карьера разработчика — это стратегия выбора ролей, команд и ответственности. Рост требует понимания процессов и влияния за пределами кода.",
    keyPoints: [
      "Senior отличается ответственностью, а не знаниями.",
      "Lead — это про людей и решения.",
      "Не каждая команда подходит для роста.",
      "Осознанный выбор важнее статуса."
    ],
    tags: ["tools", "career", "team", "advanced"],
    examples: [
      {
        title: "Рост",
        code: "// Junior → учится\n// Middle → стабилен\n// Senior → влияет\n// Lead → отвечает за других"
      }
    ],
    relatedTopics: ["roles-and-responsibility", "team-scaling", "business-metrics"]
  }
];
