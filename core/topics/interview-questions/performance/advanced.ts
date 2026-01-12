import { InterviewQuestion } from '../../../types';

export const PERFORMANCE_ADVANCED_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'performance-advanced-rerenders',
    question: 'Как избежать лишних ререндеров в React?',
    answer: 'React.memo, useMemo, useCallback, правильная структура компонентов, избегание создания объектов/функций в рендере, разделение состояния.',
    category: 'performance',
    difficulty: 'advanced',
    tags: ['performance', 'react', 'optimization', 'rerenders']
  },
  {
    id: 'performance-advanced-web-workers',
    question: 'Как оптимизировать тяжелые вычисления (Web Workers, useMemo)?',
    answer: 'Web Workers выносят вычисления в отдельный поток. useMemo кэширует результаты вычислений. Для тяжелых задач предпочтительны Workers.',
    category: 'performance',
    difficulty: 'advanced',
    tags: ['performance', 'web-workers', 'usememo', 'optimization', 'computations']
  },
  {
    id: 'performance-advanced-memory-leaks',
    question: 'Как бороться с утечками памяти в JavaScript?',
    answer: 'Удалять обработчики событий (removeEventListener), очищать таймеры (clearTimeout, clearInterval), закрывать соединения (WebSocket), обнулять ссылки на DOM-элементы и большие объекты, использовать WeakMap/WeakSet для кэширования.',
    category: 'performance',
    difficulty: 'advanced',
    tags: ['performance', 'memory-leaks', 'optimization', 'garbage-collection']
  }
];
