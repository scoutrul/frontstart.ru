import { InterviewQuestion } from '../../../types';

export const NETWORK_ADVANCED_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'network-advanced-https',
    question: 'Что такое HTTPS и как он обеспечивает безопасность?',
    answer: 'HTTPS = HTTP + TLS/SSL шифрование. Обеспечивает конфиденциальность, целостность данных и аутентификацию сервера через сертификаты.',
    category: 'network',
    difficulty: 'advanced',
    tags: ['network', 'https', 'ssl', 'tls', 'security']
  },
  {
    id: 'network-advanced-websocket-alternatives',
    question: 'Какие существуют альтернативы WebSocket?',
    answer: 'Server-Sent Events, long polling и polling.',
    category: 'network',
    difficulty: 'advanced',
    tags: ['network', 'websocket', 'alternatives', 'sse', 'polling']
  },
  {
    id: 'network-advanced-sse-websocket',
    question: 'Чем SSE отличается от WebSocket?',
    answer: 'SSE — односторонний (сервер → клиент) текстовый канал, WebSocket — двусторонний.',
    category: 'network',
    difficulty: 'advanced',
    tags: ['network', 'sse', 'websocket', 'real-time']
  },
  {
    id: 'network-advanced-storage',
    question: 'В чем различия между localStorage, sessionStorage, cookies, IndexedDB?',
    answer: 'localStorage сохраняется навсегда, sessionStorage — до закрытия вкладки. Cookies отправляются с каждым запросом, ограничены 4KB. IndexedDB — полноценная NoSQL БД в браузере.',
    category: 'network',
    difficulty: 'advanced',
    tags: ['network', 'storage', 'localStorage', 'cookies', 'indexeddb']
  },
  {
    id: 'network-advanced-cookies',
    question: 'Как работают cookies? Какие у них флаги (HttpOnly, Secure, SameSite)?',
    answer: 'Cookies хранятся браузером и отправляются с запросами. HttpOnly защищает от XSS (недоступен в JS), Secure требует HTTPS, SameSite защищает от CSRF.',
    category: 'network',
    difficulty: 'advanced',
    tags: ['network', 'cookies', 'security', 'xss', 'csrf']
  },
  {
    id: 'network-advanced-cache-api',
    question: 'Что такое Cache API и Service Workers?',
    answer: 'Cache API позволяет кэшировать запросы и ответы. Service Workers — фоновые скрипты для офлайн-работы, push-уведомлений, кэширования.',
    category: 'network',
    difficulty: 'advanced',
    tags: ['network', 'cache-api', 'service-workers', 'pwa', 'offline']
  },
  {
    id: 'network-advanced-fetch-xhr',
    question: 'Что такое fetch API и чем отличается от XMLHttpRequest?',
    answer: 'fetch современнее, основан на промисах, более гибкий API. XMLHttpRequest — старый callback-based подход, но поддерживает прогресс загрузки.',
    category: 'network',
    difficulty: 'advanced',
    tags: ['network', 'fetch', 'xhr', 'api', 'async']
  }
];
