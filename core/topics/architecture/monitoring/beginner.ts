import { Topic } from '../../../types';

export const MONITORING_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'architecture-monitoring-basics',
    title: 'Консоль и Sentry',
    difficulty: 'beginner',
    description: 'Базовый мониторинг: консоль браузера для отладки, Sentry для отслеживания ошибок. Junior должен понимать: как использовать console.log для отладки, как настроить Sentry для отслеживания ошибок в продакшене. Это основа мониторинга приложений.',
    keyPoints: [
      'Консоль браузера: отладка через console.log, console.error, DevTools.',
      'Sentry: отслеживание ошибок в продакшене, стектрейсы, контекст ошибок.',
      'Базовое использование: настройка Sentry, обработка ошибок, просмотр отчётов.'
    ],
    tags: ['architecture', 'monitoring', 'sentry', 'basics'],
    examples: [
      {
        title: 'Настройка Sentry',
        code: `import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'YOUR_DSN',
  environment: 'production'
});

// Автоматическое отслеживание ошибок`
      }
    ],
    relatedTopics: ['architecture-monitoring-advanced'],
    funFact: 'Sentry был создан в 2012 году для отслеживания ошибок в Python-приложениях. Позже он расширился на все языки и стал стандартом для мониторинга ошибок. Sentry помогает находить и исправлять ошибки быстрее.'
  }
];
