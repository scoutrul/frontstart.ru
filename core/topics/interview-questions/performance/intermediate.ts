import { InterviewQuestion } from '../../../types';

export const PERFORMANCE_INTERMEDIATE_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'performance-intermediate-measure',
    question: 'Как измерить производительность приложения?',
    answer: 'Через DevTools Performance, Lighthouse, Web Vitals API, React DevTools Profiler, Performance Observer API.',
    category: 'performance',
    difficulty: 'intermediate',
    tags: ['performance', 'measurement', 'tools', 'metrics']
  },
  {
    id: 'performance-intermediate-critical-css',
    question: 'Что такое critical CSS и как его выделить?',
    answer: 'CSS, необходимый для первого экрана. Выделяется автоматически инструментами или вручную. Встраивается в <head>, остальной CSS загружается асинхронно.',
    category: 'performance',
    difficulty: 'intermediate',
    tags: ['performance', 'css', 'critical-css', 'optimization']
  },
  {
    id: 'performance-intermediate-preload',
    question: 'Как использовать preload, prefetch, preconnect?',
    answer: 'preload для критических ресурсов (шрифты, стили). prefetch для ресурсов, которые понадобятся позже. preconnect для установки раннего соединения с доменом.',
    category: 'performance',
    difficulty: 'intermediate',
    tags: ['performance', 'preload', 'prefetch', 'preconnect', 'optimization']
  },
  {
    id: 'performance-intermediate-virtualization',
    question: 'Что такое virtualization (виртуализация) списков?',
    answer: 'Виртуализация (react-window, react-virtualized) рендерит только видимые элементы. Уменьшает количество DOM-узлов и улучшает производительность длинных списков.',
    category: 'performance',
    difficulty: 'intermediate',
    tags: ['performance', 'virtualization', 'react', 'optimization']
  },
  {
    id: 'performance-intermediate-cache',
    question: 'Как кэшировать ресурсы (Cache-Control, ETag)?',
    answer: 'Cache-Control задает стратегию кэширования (max-age, no-cache, no-store). ETag для валидации изменений. Service Worker для офлайн-кэширования.',
    category: 'performance',
    difficulty: 'intermediate',
    tags: ['performance', 'caching', 'cache-control', 'etag', 'http']
  }
];
