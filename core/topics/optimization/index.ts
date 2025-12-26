import { Category } from '../../types';
import { OPTIMIZATION_TOPICS } from './performance';

export const OPTIMIZATION_CATEGORIES: Category[] = [
  {
    id: 'performance',
    title: 'Производительность',
    topics: OPTIMIZATION_TOPICS
  }
];

// Экспорт плоского массива для обратной совместимости
export const OPTIMIZATION_TOPICS_EXPORT = OPTIMIZATION_TOPICS;