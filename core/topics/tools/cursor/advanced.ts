import { Topic } from '../../../types';

export const CURSOR_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'cursor-advanced',
    title: 'Продвинутый Cursor',
    description: 'Кастомные AI модели: подключение локальных моделей (Ollama), использование разных моделей для разных задач. Интеграции: GitHub Copilot, OpenAI API, кастомные API. Расширения: установка VS Code расширений, создание кастомных расширений. Оптимизация workflow: правила для AI (.cursorrules), работа с большими проектами через chunking контекста.',
    difficulty: 'advanced',
    tags: ['cursor', 'editor', 'ai', 'custom-models', 'integrations', 'workflow', 'tools', 'productivity'],
    keyPoints: [
      '.cursorrules файл задаёт правила для AI в проекте.',
      'Ollama позволяет использовать локальные модели.',
      'Разные модели можно использовать для разных задач.',
      'Chunking контекста помогает работать с большими проектами.',
      'Кастомные расширения расширяют функциональность Cursor.'
    ],
    examples: [
      {
        title: '.cursorrules файл',
        code: `# .cursorrules в корне проекта
# Правила для AI:

- Используй TypeScript строгий режим
- Следуй ESLint правилам проекта
- Используй функциональные компоненты в React
- Добавляй JSDoc комментарии
- Тестируй все функции`
      },
      {
        title: 'Подключение локальных моделей',
        code: `# Установить Ollama
# В Cursor Settings:
# Model: Ollama
# Model Name: llama2, codellama и т.д.

# Преимущества:
# - Работает офлайн
# - Полный контроль над данными
# - Нет лимитов API`
      },
      {
        title: 'Работа с большими проектами',
        code: `# Использовать @ для фокусировки:
@src/components - только компоненты
@src/utils - только утилиты

# Разбивать задачи на части:
# 1. "Рефакторинг @src/components"
# 2. "Добавь типы в @src/types"
# 3. "Обнови @src/utils"`
      }
    ],
    relatedTopics: ['cursor-intermediate']
  }
];

