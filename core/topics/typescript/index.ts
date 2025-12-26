import { Category } from '../../types';
import { TYPESCRIPT_BASICS_TOPICS } from './basics';
import { TYPESCRIPT_ADVANCED_TOPICS } from './advanced';

export const TYPESCRIPT_CATEGORIES: Category[] = [
  {
    id: 'ts-basics-cat',
    title: 'Основы TypeScript',
    topics: TYPESCRIPT_BASICS_TOPICS
  },
  {
    id: 'ts-advanced-cat',
    title: 'Продвинутый TypeScript',
    topics: TYPESCRIPT_ADVANCED_TOPICS
  }
];

// Экспорт плоского массива для обратной совместимости
export const TYPESCRIPT_TOPICS = [
  ...TYPESCRIPT_BASICS_TOPICS,
  ...TYPESCRIPT_ADVANCED_TOPICS
];