import { Topic } from '../../../types';

export const DEVTOOLS_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'devtools-advanced',
    title: 'Продвинутый DevTools',
    description: 'Memory leaks: обнаружение утечек памяти через Memory профилирование, heap snapshots для сравнения состояний памяти. Lighthouse: аудит производительности, доступности, SEO, best practices. Remote debugging: отладка мобильных устройств через USB или сеть, Chrome DevTools для Android/iOS.',
    difficulty: 'advanced',
    tags: ['devtools', 'debugging', 'browser', 'performance', 'memory', 'lighthouse', 'tools', 'productivity'],
    keyPoints: [
      'Heap snapshots показывают использование памяти в определённый момент.',
      'Lighthouse автоматически аудирует производительность и доступность.',
      'Remote debugging позволяет отлаживать мобильные устройства.',
      'Memory профилирование помогает найти утечки памяти.',
      'Performance budgets устанавливают лимиты для метрик.'
    ],
    examples: [
      {
        title: 'Memory профилирование',
        code: `# 1. Открыть Memory панель
# 2. Сделать heap snapshot
# 3. Выполнить действия
# 4. Сделать второй snapshot
# 5. Сравнить snapshots:
#    - Найти объекты, которые не освобождаются
#    - Проверить detached DOM nodes
#    - Анализировать размер объектов`
      },
      {
        title: 'Lighthouse аудит',
        code: `# В Lighthouse панели:
# 1. Выбрать категории:
#    - Performance
#    - Accessibility
#    - Best Practices
#    - SEO
# 2. Нажать "Generate report"
# 3. Получить оценки и рекомендации
# 4. Исправить проблемы`
      },
      {
        title: 'Remote debugging',
        code: `# Android:
# 1. Включить USB debugging
# 2. Подключить через USB
# 3. В Chrome: chrome://inspect
# 4. Выбрать устройство

# iOS:
# 1. Включить Web Inspector в Safari
# 2. Подключить к Mac
# 3. В Safari DevTools выбрать устройство`
      }
    ],
    relatedTopics: ['devtools-intermediate']
  }
];

