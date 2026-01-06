import { Topic } from '../../../types';

export const MONITORING_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'architecture-monitoring-advanced',
    title: 'Распределённая трассировка',
    difficulty: 'advanced',
    description: 'Распределённая трассировка для микрофронтендов: отслеживание запросов через все модули, понимание производительности каждого модуля, выявление узких мест. Senior должен уметь настраивать распределённую трассировку и анализировать данные.',
    keyPoints: [
      'Распределённая трассировка: отслеживание запросов через все модули.',
      'Инструменты: OpenTelemetry, Jaeger, Zipkin.',
      'Применение: понимание производительности, выявление узких мест, оптимизация.',
      'Метрики: время ответа каждого модуля, количество запросов, ошибки.'
    ],
    tags: ['architecture', 'monitoring', 'tracing', 'distributed', 'advanced'],
    examples: [
      {
        title: 'Распределённая трассировка',
        code: `// Трассировка запроса через все модули
const trace = tracer.startSpan('user-request');

// Модуль 1
const userSpan = tracer.startSpan('get-user', { parent: trace });
// ...
userSpan.end();

// Модуль 2
const ordersSpan = tracer.startSpan('get-orders', { parent: trace });
// ...
ordersSpan.end();

trace.end();

// Видно полный путь запроса через все модули`
      }
    ],
    relatedTopics: ['architecture-monitoring-intermediate'],
    funFact: 'Распределённая трассировка стала критичной для микрофронтендов и микросервисов. Она позволяет понимать, как запрос проходит через все модули, и находить узкие места. OpenTelemetry стал стандартом для распределённой трассировки.'
  }
];
