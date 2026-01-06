import { Topic } from '../../../types';

export const MIGRATION_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'architecture-migration-refactoring',
    title: 'Рефакторинг без ломания API',
    difficulty: 'intermediate',
    description: 'Рефакторинг без ломания API: улучшение внутренней структуры без изменения внешнего интерфейса. Middle должен уметь: рефакторить код безопасно, тестировать изменения, поддерживать обратную совместимость.',
    keyPoints: [
      'Рефакторинг: улучшение структуры без изменения функциональности.',
      'Безопасность: тестирование, постепенные изменения, обратная совместимость.',
      'Стратегия: маленькие шаги, частые коммиты, откат при проблемах.'
    ],
    tags: ['architecture', 'migration', 'refactoring', 'intermediate'],
    examples: [
      {
        title: 'Безопасный рефакторинг',
        code: `// Старый API (оставляем для совместимости)
export function oldFunction() {
  return newFunction();
}

// Новый API
export function newFunction() {
  // Улучшенная реализация
}

// Постепенная миграция, затем удаление старого API`
      }
    ],
    relatedTopics: ['architecture-migration-strategy'],
    funFact: 'Рефакторинг без ломания API — признак зрелой команды. Умение улучшать код безопасно критично для долгосрочной поддержки проекта.'
  }
];
