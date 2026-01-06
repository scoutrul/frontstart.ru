import { Topic } from '../../../types';

export const CODE_ANALYSIS_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'architecture-code-analysis-intermediate',
    title: 'Настройка линтеров',
    difficulty: 'intermediate',
    description: 'Настройка правил линтеров под проект, строгий TypeScript для типобезопасности. Middle должен уметь: настраивать правила ESLint, использовать TypeScript strict mode, настраивать pre-commit хуки.',
    keyPoints: [
      'Настройка правил: адаптация ESLint под проект, создание custom правил.',
      'TypeScript strict: включение strict mode для максимальной типобезопасности.',
      'Pre-commit хуки: автоматический запуск линтеров перед коммитом (husky).',
      'Интеграция: проверка в CI, блокировка коммитов с ошибками.'
    ],
    tags: ['architecture', 'linting', 'typescript', 'strict', 'intermediate'],
    examples: [
      {
        title: 'TypeScript strict mode',
        code: `// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  }
}

// Строгая проверка типов`
      }
    ],
    relatedTopics: ['architecture-code-analysis-basics', 'architecture-code-analysis-advanced'],
    funFact: 'TypeScript strict mode был добавлен для повышения типобезопасности. Он помогает находить ошибки на этапе компиляции, что уменьшает количество багов в продакшене. Многие компании требуют strict mode для всех проектов.'
  }
];
