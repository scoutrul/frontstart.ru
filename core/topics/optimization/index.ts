import { Category } from '../../types';
import { 
  PERFORMANCE_BASICS_TOPICS, 
  WEB_VITALS_TOPICS, 
  CODE_OPTIMIZATION_TOPICS,
  OPTIMIZATION_TOPICS 
} from './performance';
import { RESOURCE_DELIVERY_TOPICS } from './resource-delivery';

export const OPTIMIZATION_CATEGORIES: Category[] = [
  {
    id: 'performance',
    title: 'Производительность',
    topics: PERFORMANCE_BASICS_TOPICS
  },
  {
    id: 'web-vitals',
    title: 'Web Vitals',
    topics: WEB_VITALS_TOPICS
  },
  {
    id: 'code-optimization',
    title: 'Оптимизация кода и рендеринга',
    topics: CODE_OPTIMIZATION_TOPICS
  },
  {
    id: 'resource-delivery',
    title: 'Оптимизация доставки ресурсов',
    topics: RESOURCE_DELIVERY_TOPICS
  }
];

// Экспорт плоского массива для обратной совместимости
export const OPTIMIZATION_TOPICS_EXPORT = OPTIMIZATION_TOPICS;