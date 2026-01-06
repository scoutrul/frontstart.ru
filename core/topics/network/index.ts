import { Category } from '../../types';
import { NETWORK_BASICS_TOPICS } from './basics';
import { NETWORK_HTTP_HTTPS_TOPICS } from './http-https';
import { NETWORK_BROWSER_SECURITY_TOPICS } from './browser-security';
import { NETWORK_PERFORMANCE_TOPICS } from './performance';
import { NETWORK_JAVASCRIPT_NETWORK_TOPICS } from './javascript-network';
import { NETWORK_TOOLS_TOPICS } from './tools';

export const NETWORK_CATEGORIES: Category[] = [
  {
    id: 'basics',
    title: 'Базовые концепции и модели',
    topics: NETWORK_BASICS_TOPICS
  },
  {
    id: 'http-https',
    title: 'HTTP / HTTPS — основа фронтенда',
    topics: NETWORK_HTTP_HTTPS_TOPICS
  },
  {
    id: 'browser-security',
    title: 'Безопасность в браузере',
    topics: NETWORK_BROWSER_SECURITY_TOPICS
  },
  {
    id: 'performance',
    title: 'Производительность и загрузка ресурсов',
    topics: NETWORK_PERFORMANCE_TOPICS
  },
  {
    id: 'javascript-network',
    title: 'Работа с сетью в JavaScript',
    topics: NETWORK_JAVASCRIPT_NETWORK_TOPICS
  },
  {
    id: 'tools',
    title: 'Инструменты и диагностика',
    topics: NETWORK_TOOLS_TOPICS
  }
];

// Экспорт плоского массива для обратной совместимости
export const NETWORK_TOPICS_EXPORT = [
  ...NETWORK_BASICS_TOPICS,
  ...NETWORK_HTTP_HTTPS_TOPICS,
  ...NETWORK_BROWSER_SECURITY_TOPICS,
  ...NETWORK_PERFORMANCE_TOPICS,
  ...NETWORK_JAVASCRIPT_NETWORK_TOPICS,
  ...NETWORK_TOOLS_TOPICS
];
