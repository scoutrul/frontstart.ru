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
    description: 'Клиент-сервер, TCP/IP, DNS, модель OSI — фундамент сетевого взаимодействия.',
    topics: NETWORK_BASICS_TOPICS
  },
  {
    id: 'http-https',
    title: 'HTTP / HTTPS — основа фронтенда',
    description: 'Методы, заголовки, статус-коды, кэширование, HTTP/2, TLS — всё о протоколе.',
    topics: NETWORK_HTTP_HTTPS_TOPICS
  },
  {
    id: 'browser-security',
    title: 'Безопасность в браузере',
    description: 'Same-Origin Policy, CORS, CSP — как браузер защищает пользователя.',
    topics: NETWORK_BROWSER_SECURITY_TOPICS
  },
  {
    id: 'performance',
    title: 'Производительность и загрузка ресурсов',
    description: 'Оптимизация загрузки: preload, prefetch, lazy loading, compression, CDN.',
    topics: NETWORK_PERFORMANCE_TOPICS
  },
  {
    id: 'javascript-network',
    title: 'Работа с сетью в JavaScript',
    description: 'fetch API, XMLHttpRequest, WebSocket, Server-Sent Events, GraphQL.',
    topics: NETWORK_JAVASCRIPT_NETWORK_TOPICS
  },
  {
    id: 'tools',
    title: 'Инструменты и диагностика',
    description: 'Network tab в DevTools, curl, Postman — отладка сетевых запросов.',
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
