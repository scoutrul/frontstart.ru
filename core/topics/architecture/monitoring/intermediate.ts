import { Topic } from '../../../types';

export const MONITORING_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'architecture-monitoring-intermediate',
    title: 'Логирование и метрики',
    difficulty: 'intermediate',
    description: 'Логирование действий пользователя и метрики загрузки помогают понимать поведение приложения. Middle должен уметь: логировать важные действия, собирать метрики производительности, анализировать данные. Это критично для оптимизации и понимания проблем.',
    keyPoints: [
      'Логирование: запись важных действий пользователя, ошибок, событий.',
      'Метрики: время загрузки, размер bundle, производительность.',
      'Инструменты: Google Analytics, Mixpanel, Custom Analytics.',
      'Анализ: понимание проблем, оптимизация на основе данных.'
    ],
    tags: ['architecture', 'monitoring', 'logging', 'metrics', 'intermediate'],
    examples: [
      {
        title: 'Логирование действий',
        code: `function trackEvent(eventName, data) {
  // Отправка в аналитику
  analytics.track(eventName, data);
}

// Использование
trackEvent('button_clicked', {
  buttonId: 'submit',
  page: 'checkout'
});`
      }
    ],
    relatedTopics: ['architecture-monitoring-basics', 'architecture-monitoring-advanced'],
    funFact: 'Логирование и аналитика стали стандартом в веб-разработке. Они помогают понимать поведение пользователей и оптимизировать приложения. Многие компании тратят значительные ресурсы на сбор и анализ данных.'
  }
];
