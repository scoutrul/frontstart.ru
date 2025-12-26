import { Category } from '../../types';
import { ARCHITECTURE_TOPICS } from './patterns';

export const ARCHITECTURE_CATEGORIES: Category[] = [
  {
    id: 'patterns',
    title: 'Паттерны и принципы',
    topics: ARCHITECTURE_TOPICS
  }
];

// Экспорт плоского массива для обратной совместимости
export const ARCHITECTURE_TOPICS_EXPORT = ARCHITECTURE_TOPICS;