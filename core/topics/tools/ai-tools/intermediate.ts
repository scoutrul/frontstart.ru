import { Topic } from '../../../types';

export const AI_TOOLS_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'ai-tools-intermediate',
    title: 'AI инструменты средний уровень',
    description: 'Продвинутые промпты: few-shot learning (примеры в промпте), chain-of-thought (пошаговое рассуждение). Рефакторинг с AI: улучшение кода, оптимизация производительности, исправление антипаттернов. Генерация тестов: создание unit тестов, интеграционных тестов. Генерация документации: JSDoc комментарии, README файлы.',
    difficulty: 'intermediate',
    tags: ['ai', 'prompts', 'refactoring', 'testing', 'documentation', 'tools', 'productivity'],
    keyPoints: [
      'Few-shot промпты содержат примеры желаемого результата.',
      'Chain-of-thought заставляет AI рассуждать пошагово.',
      'AI может рефакторить код с сохранением функциональности.',
      'Генерация тестов экономит время на написании boilerplate.',
      'Документация генерируется на основе кода и комментариев.'
    ],
    examples: [
      {
        title: 'Few-shot промпты',
        code: `# Пример:
"Создай функцию валидации email:

Пример 1:
Input: 'test@example.com'
Output: true

Пример 2:
Input: 'invalid-email'
Output: false

Теперь создай функцию:"`
      },
      {
        title: 'Chain-of-thought',
        code: `# Промпт:
"Рефакторинг этой функции. 
Шаг 1: Проанализируй текущий код
Шаг 2: Определи проблемы
Шаг 3: Предложи улучшения
Шаг 4: Напиши рефакторенный код

Функция: [код]"`
      },
      {
        title: 'Генерация тестов',
        code: `# Промпт:
"Создай unit тесты для этой функции используя Jest:

function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

Включи тесты для:
- Пустого массива
- Массива с одним элементом
- Массива с несколькими элементами
- Отрицательных цен"`
      }
    ],
    relatedTopics: ['ai-tools-basics', 'ai-tools-advanced']
  }
];

