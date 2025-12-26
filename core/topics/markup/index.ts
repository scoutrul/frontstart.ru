import { Category } from '../../types';
import { HTML_TOPICS } from './html';
import { CSS_TOPICS } from './css';

export const MARKUP_CATEGORIES: Category[] = [
  {
    id: 'html',
    title: 'HTML',
    topics: HTML_TOPICS
  },
  {
    id: 'css',
    title: 'CSS',
    topics: CSS_TOPICS
  }
];

// Экспорт плоского массива для обратной совместимости
export const MARKUP_TOPICS = [
  ...HTML_TOPICS,
  ...CSS_TOPICS
];