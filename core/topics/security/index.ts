import { Category } from '../../types';
import { SECURITY_TOPICS } from './web-security';

export const SECURITY_CATEGORIES: Category[] = [
  {
    id: 'web-security',
    title: 'Веб-безопасность',
    topics: SECURITY_TOPICS
  }
];

// Экспорт плоского массива для обратной совместимости
export const SECURITY_TOPICS_EXPORT = SECURITY_TOPICS;