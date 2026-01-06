import { Topic } from '../../../types';

export const CODE_ANALYSIS_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'architecture-code-analysis-advanced',
    title: 'Архитектурные линтеры',
    difficulty: 'advanced',
    description: 'Архитектурные линтеры проверяют соблюдение правил зависимостей между модулями. Метрики качества: сложность кода, связность, health score. Senior должен уметь настраивать архитектурные линтеры и анализировать метрики качества.',
    keyPoints: [
      'Архитектурные линтеры: проверка правил зависимостей (dependency-cruiser).',
      'Метрики: сложность кода (цикломатическая), связность, health score.',
      'Анализ: понимание проблем, рефакторинг на основе метрик.',
      'Инструменты: dependency-cruiser, SonarQube, CodeClimate.'
    ],
    tags: ['architecture', 'linting', 'metrics', 'quality', 'advanced'],
    examples: [
      {
        title: 'Архитектурный линтер',
        code: `// .dependency-cruiser.js
module.exports = {
  forbidden: [
    {
      name: 'no-circular',
      from: {},
      to: { circular: true }
    },
    {
      name: 'no-lower-layer-import',
      from: { path: '^src/features' },
      to: { path: '^src/pages' }
    }
  ]
};

// Проверка зависимостей
// npx dependency-cruiser src`
      }
    ],
    relatedTopics: ['architecture-code-analysis-intermediate'],
    funFact: 'Архитектурные линтеры стали популярными с ростом сложности проектов. Они помогают поддерживать архитектуру и предотвращают деградацию кода. Многие компании используют архитектурные линтеры для больших проектов.'
  }
];
