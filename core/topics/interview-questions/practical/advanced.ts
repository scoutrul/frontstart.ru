import { InterviewQuestion } from '../../../types';

export const PRACTICAL_ADVANCED_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'practical-advanced-stocks',
    question: 'Поиск максимальной прибыли при покупке/продаже акций.',
    answer: 'Использовать алгоритм с одним проходом: отслеживать минимальную цену и максимальную прибыль. Время O(n), память O(1).',
    category: 'practical',
    difficulty: 'advanced',
    tags: ['practical', 'algorithms', 'arrays', 'optimization', 'dynamic-programming']
  },
  {
    id: 'practical-advanced-react-optimization',
    question: 'Оптимизировать компонент с лишними ререндерами.',
    answer: 'Использовать React.memo, useCallback, useMemo, разделить компонент на части, проверить пропсы и состояние, использовать React DevTools Profiler.',
    category: 'practical',
    difficulty: 'advanced',
    tags: ['practical', 'react', 'optimization', 'performance']
  },
  {
    id: 'practical-advanced-infinite-scroll',
    question: 'Реализовать компонент с бесконечной лентой (infinite scroll).',
    answer: 'Использовать Intersection Observer для отслеживания последнего элемента, загружать данные при достижении порога, управлять состоянием загрузки и ошибок.',
    category: 'practical',
    difficulty: 'advanced',
    tags: ['practical', 'react', 'infinite-scroll', 'intersection-observer', 'pagination']
  },
  {
    id: 'practical-advanced-refactor',
    question: 'Рефакторинг "грязного" компонента (убрать side effects, добавить обработку ошибок).',
    answer: 'Вынести side effects в useEffect, создать кастомные хуки для логики, добавить Error Boundaries, обработку loading/error состояний, разделить на меньшие компоненты.',
    category: 'practical',
    difficulty: 'advanced',
    tags: ['practical', 'react', 'refactoring', 'best-practices', 'architecture']
  },
  {
    id: 'practical-advanced-custom-fetch-hook',
    question: 'Реализовать кастомный хук для fetch с состоянием (loading, error, data).',
    answer: 'Использовать useState для loading, error, data. useEffect для выполнения запроса. Обработать отмену через AbortController. Вернуть объект с состоянием и функцией refetch.',
    category: 'practical',
    difficulty: 'advanced',
    tags: ['practical', 'react', 'hooks', 'custom-hooks', 'fetch', 'async']
  }
];
