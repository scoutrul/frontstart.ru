import { Category } from '../../types';
import { NETWORK_TOPICS } from './protocols';

export const NETWORK_CATEGORIES: Category[] = [
  {
    id: 'protocols',
    title: 'Протоколы и API',
    topics: NETWORK_TOPICS
  }
];

// Экспорт плоского массива для обратной совместимости
export const NETWORK_TOPICS_EXPORT = NETWORK_TOPICS;