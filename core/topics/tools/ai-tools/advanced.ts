import { Topic } from '../../../types';

export const AI_TOOLS_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'ai-tools-advanced',
    title: 'ИИ-инструменты: эксперты',
    description: 'Продвинутый уровень включает кастомные модели, fine-tuning, генерацию тестов и анализ архитектуры с помощью ИИ.',
    difficulty: 'advanced',
    tags: ['ai', 'tools', 'fine-tuning', 'custom-models', 'local-models', 'cursor', 'copilot', 'code-generation', 'advanced', 'productivity'],
    keyPoints: [
      'Создание и дообучение кастомных моделей под проект',
      'Интеграция ИИ для анализа архитектуры и оптимизации кода',
      'Автоматическая генерация unit, integration и e2e тестов',
      'Комбинирование нескольких моделей для комплексных задач',
      'Использование I/O моделей для генерации документации и примеров'
    ],
    additionalDescription: 'На этом уровне ИИ становится полноценным помощником в проекте: он помогает оптимизировать структуру кода, проверять соответствие стандартам и даже генерировать нагрузочные тесты.',
    funFact: 'Fine-tuning позволяет обучить ИИ на собственных репозиториях, чтобы подсказки соответствовали стилю и архитектуре команды.',
    examples: [
      {
        title: 'Fine-tuning модели',
        code: `// Обучение модели на коде проекта
// lm.train(dataset) // dataset содержит репозитории с внутренними стандартами`
      },
      {
        title: 'Генерация тестов с AI',
        code: `// AI создает unit тесты для функции
// AI: generateTests("function calculateTotal(items) { return items.reduce((sum, item) => sum + item, 0); }")`
      },
      {
        title: 'Анализ архитектуры',
        code: `// AI анализирует зависимости модулей и предлагает оптимизацию
// analyzeArchitecture(projectStructure)`
      }
    ],
    relatedTopics: ['ai-tools-intermediate', 'testing-advanced', 'ci-cd-advanced']
  }
];

