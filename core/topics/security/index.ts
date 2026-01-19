import { Category } from '../../types';
import { SECURITY_INTRODUCTION_TOPICS } from './introduction';
import { SECURITY_XSS_TOPICS } from './xss';
import { SECURITY_CSRF_TOPICS } from './csrf';
import { SECURITY_CORS_TOPICS } from './cors';
import { SECURITY_COOKIES_TOPICS } from './cookies';
import { SECURITY_CSP_TOPICS } from './csp';
import { SECURITY_AUTHENTICATION_TOPICS } from './authentication';
import { SECURITY_DATA_STORAGE_TOPICS } from './data-storage';
import { SECURITY_HTTPS_TOPICS } from './https-encryption';
import { SECURITY_API_SECURITY_TOPICS } from './api-security';
import { SECURITY_OWASP_TOPICS } from './owasp';
import { SECURITY_DEPENDENCIES_TOPICS } from './dependencies';
import { SECURITY_PRODUCTION_TOPICS } from './production-security';

export const SECURITY_CATEGORIES: Category[] = [
  {
    id: 'security-introduction',
    title: 'Введение в веб-безопасность',
    description: 'Почему безопасность важна, модель угроз, основные принципы защиты.',
    topics: SECURITY_INTRODUCTION_TOPICS
  },
  {
    id: 'security-xss',
    title: 'XSS (Cross-Site Scripting)',
    description: 'Типы XSS-атак, как они работают, методы защиты, санитизация данных.',
    topics: SECURITY_XSS_TOPICS
  },
  {
    id: 'security-csrf',
    title: 'CSRF (Cross-Site Request Forgery)',
    description: 'Подделка запросов, CSRF-токены, SameSite cookies, защита форм.',
    topics: SECURITY_CSRF_TOPICS
  },
  {
    id: 'security-cors',
    title: 'CORS (Cross-Origin Resource Sharing)',
    description: 'Политика одного источника, CORS-заголовки, preflight, настройка сервера.',
    topics: SECURITY_CORS_TOPICS
  },
  {
    id: 'security-cookies',
    title: 'Cookies и безопасность',
    description: 'HttpOnly, Secure, SameSite, session cookies, безопасное хранение.',
    topics: SECURITY_COOKIES_TOPICS
  },
  {
    id: 'security-csp',
    title: 'Content Security Policy (CSP)',
    description: 'Заголовки CSP, директивы, nonce, hash, защита от инъекций.',
    topics: SECURITY_CSP_TOPICS
  },
  {
    id: 'security-authentication',
    title: 'Аутентификация и авторизация',
    description: 'JWT, OAuth, sessions, роли и права, безопасное хранение токенов.',
    topics: SECURITY_AUTHENTICATION_TOPICS
  },
  {
    id: 'security-data-storage',
    title: 'Хранение данных',
    description: 'localStorage, sessionStorage, IndexedDB — что безопасно хранить.',
    topics: SECURITY_DATA_STORAGE_TOPICS
  },
  {
    id: 'security-https',
    title: 'HTTPS и шифрование',
    description: 'TLS, сертификаты, HSTS, mixed content, шифрование на фронтенде.',
    topics: SECURITY_HTTPS_TOPICS
  },
  {
    id: 'security-api',
    title: 'Защита API',
    description: 'Rate limiting, валидация, авторизация запросов, защита endpoints.',
    topics: SECURITY_API_SECURITY_TOPICS
  },
  {
    id: 'security-owasp',
    title: 'OWASP Top 10',
    description: 'Топ-10 уязвимостей веб-приложений и как от них защищаться.',
    topics: SECURITY_OWASP_TOPICS
  },
  {
    id: 'security-dependencies',
    title: 'Безопасность зависимостей',
    description: 'npm audit, Snyk, обновление пакетов, supply chain атаки.',
    topics: SECURITY_DEPENDENCIES_TOPICS
  },
  {
    id: 'security-production',
    title: 'Безопасность в production',
    description: 'Переменные окружения, секреты, логирование, мониторинг угроз.',
    topics: SECURITY_PRODUCTION_TOPICS
  }
];

// Экспорт плоского массива для обратной совместимости
export const SECURITY_TOPICS = [
  ...SECURITY_INTRODUCTION_TOPICS,
  ...SECURITY_XSS_TOPICS,
  ...SECURITY_CSRF_TOPICS,
  ...SECURITY_CORS_TOPICS,
  ...SECURITY_COOKIES_TOPICS,
  ...SECURITY_CSP_TOPICS,
  ...SECURITY_AUTHENTICATION_TOPICS,
  ...SECURITY_DATA_STORAGE_TOPICS,
  ...SECURITY_HTTPS_TOPICS,
  ...SECURITY_API_SECURITY_TOPICS,
  ...SECURITY_OWASP_TOPICS,
  ...SECURITY_DEPENDENCIES_TOPICS,
  ...SECURITY_PRODUCTION_TOPICS
];

// Экспорт для обратной совместимости
export const SECURITY_TOPICS_EXPORT = SECURITY_TOPICS;
