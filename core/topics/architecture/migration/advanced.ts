import { Topic } from '../../../types';

export const MIGRATION_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'architecture-migration-strategy',
    title: 'Strangler Fig и миграция',
    difficulty: 'advanced',
    description: 'Strangler Fig паттерн — постепенная миграция: новый код работает рядом со старым, постепенно заменяя его. Стратегия миграции на микрофронтенды без остановки разработки. Senior должен уметь планировать и выполнять сложные миграции.',
    keyPoints: [
      'Strangler Fig: постепенная замена старого кода новым, работа рядом.',
      'Стратегия: маленькие шаги, тестирование, откат при проблемах.',
      'Миграция на микрофронтенды: модульный монолит → микрофронтенды постепенно.',
      'Без остановки: разработка продолжается во время миграции.'
    ],
    tags: ['architecture', 'migration', 'strangler-fig', 'micro-frontends', 'advanced'],
    examples: [
      {
        title: 'Strangler Fig паттерн',
        code: `// Старый код
function oldFeature() {
  // Старая реализация
}

// Новый код работает рядом
function newFeature() {
  // Новая реализация
}

// Постепенная замена
function feature() {
  if (useNewFeature) {
    return newFeature();
  }
  return oldFeature();
}

// После миграции: удаление старого кода`
      }
    ],
    relatedTopics: ['architecture-migration-refactoring'],
    funFact: 'Strangler Fig паттерн получил название от растения, которое постепенно обвивает дерево и заменяет его. В разработке это означает постепенную замену старого кода новым без остановки работы системы.'
  }
];
