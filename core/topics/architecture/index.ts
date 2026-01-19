import { Category } from '../../types';
import { ARCHITECTURE_INTRO_TOPICS } from './intro';
import { COMPONENT_ARCHITECTURE_TOPICS } from './component-architecture';
import { STATE_MANAGEMENT_TOPICS } from './state-management';
import { CODE_ORGANIZATION_TOPICS } from './code-organization';
import { DATA_LAYER_TOPICS } from './data-layer';
import { STYLES_ARCHITECTURE_TOPICS } from './styles-architecture';
import { RENDERING_STRATEGIES_TOPICS } from './rendering-strategies';
import { CACHING_TOPICS } from './caching';
import { BFF_BACKEND_TOPICS } from './bff-backend';
import { SCALING_TOPICS } from './scaling';
import { MONITORING_TOPICS } from './monitoring';
import { TESTING_TOPICS } from './testing';
import { DEVOPS_CICD_TOPICS } from './devops-cicd';
import { CODE_ANALYSIS_TOPICS } from './code-analysis';
import { AUDIT_TOPICS } from './audit';
import { DOCUMENTATION_TOPICS } from './documentation';
import { MIGRATION_TOPICS } from './migration';
import { PRACTICE_TOPICS } from './practice';
import { ARCHITECTURE_TOPICS as ARCHITECTURE_PATTERNS_TOPICS } from './patterns';

export const ARCHITECTURE_CATEGORIES: Category[] = [
  {
    id: 'intro',
    title: 'Введение: Эволюция и критерии выбора',
    description: 'SPA vs MPA, критерии выбора архитектуры, эволюция подходов к построению приложений.',
    topics: ARCHITECTURE_INTRO_TOPICS
  },
  {
    id: 'patterns',
    title: 'Архитектурные паттерны',
    description: 'MVC, MVP, MVVM, Flux, Clean Architecture — основные паттерны и когда их применять.',
    topics: ARCHITECTURE_PATTERNS_TOPICS
  },
  {
    id: 'component-architecture',
    title: 'Компонентная архитектура',
    description: 'Atomic Design, KISS, DRY, композиция vs наследование, умные и глупые компоненты.',
    topics: COMPONENT_ARCHITECTURE_TOPICS
  },
  {
    id: 'state-management',
    title: 'Управление состоянием',
    description: 'Local state, lifted state, глобальный стейт, Redux, Zustand, Jotai, Pinia.',
    topics: STATE_MANAGEMENT_TOPICS
  },
  {
    id: 'code-organization',
    title: 'Организация кодовой базы',
    description: 'Feature-sliced design, модульная структура, монорепозитории, barrel files.',
    topics: CODE_ORGANIZATION_TOPICS
  },
  {
    id: 'data-layer',
    title: 'Слой данных и API',
    description: 'Абстракция над API, репозитории, data fetching libraries, оптимистичные обновления.',
    topics: DATA_LAYER_TOPICS
  },
  {
    id: 'styles-architecture',
    title: 'Архитектура стилей',
    description: 'CSS Modules, CSS-in-JS, Tailwind, BEM, дизайн-токены, темизация.',
    topics: STYLES_ARCHITECTURE_TOPICS
  },
  {
    id: 'rendering-strategies',
    title: 'Стратегии рендеринга',
    description: 'CSR, SSR, SSG, ISR, Streaming, React Server Components — выбор стратегии.',
    topics: RENDERING_STRATEGIES_TOPICS
  },
  {
    id: 'caching',
    title: 'Кэширование и загрузка данных',
    description: 'HTTP-кэш, SWR/React Query, Service Workers, оффлайн-режим.',
    topics: CACHING_TOPICS
  },
  {
    id: 'bff-backend',
    title: 'BFF и взаимодействие с бэкендом',
    description: 'Backend for Frontend, API Gateway, GraphQL federation, контракты.',
    topics: BFF_BACKEND_TOPICS
  },
  {
    id: 'scaling',
    title: 'Масштабирование команды и кодовой базы',
    description: 'Micro-frontends, модульные федерации, владение кодом, конвенции.',
    topics: SCALING_TOPICS
  },
  {
    id: 'monitoring',
    title: 'Мониторинг и observability',
    description: 'Error tracking, логирование, метрики, Sentry, analytics, RUM.',
    topics: MONITORING_TOPICS
  },
  {
    id: 'testing',
    title: 'Тестирование',
    description: 'Пирамида тестирования, моки, интеграционные тесты, e2e, TDD.',
    topics: TESTING_TOPICS
  },
  {
    id: 'devops-cicd',
    title: 'DevOps и CI/CD',
    description: 'Пайплайны, preview deployments, feature flags, blue-green deployment.',
    topics: DEVOPS_CICD_TOPICS
  },
  {
    id: 'code-analysis',
    title: 'Статический анализ и метрики',
    description: 'ESLint, SonarQube, bundle size, code coverage, архитектурные метрики.',
    topics: CODE_ANALYSIS_TOPICS
  },
  {
    id: 'audit',
    title: 'Архитектурный аудит',
    description: 'Оценка текущей архитектуры, технический долг, roadmap улучшений.',
    topics: AUDIT_TOPICS
  },
  {
    id: 'documentation',
    title: 'Документирование и case studies',
    description: 'ADR, архитектурные схемы, Storybook, документация API, примеры.',
    topics: DOCUMENTATION_TOPICS
  },
  {
    id: 'migration',
    title: 'Миграционные стратегии',
    description: 'Рефакторинг, миграция между фреймворками, strangler pattern.',
    topics: MIGRATION_TOPICS
  },
  {
    id: 'practice',
    title: 'Практические вопросы',
    description: 'Кейсы для собеседований, реальные задачи, разбор архитектурных решений.',
    topics: PRACTICE_TOPICS
  }
];

export const ARCHITECTURE_TOPICS_EXPORT = [
  ...ARCHITECTURE_INTRO_TOPICS,
  ...COMPONENT_ARCHITECTURE_TOPICS,
  ...STATE_MANAGEMENT_TOPICS,
  ...CODE_ORGANIZATION_TOPICS,
  ...DATA_LAYER_TOPICS,
  ...STYLES_ARCHITECTURE_TOPICS,
  ...RENDERING_STRATEGIES_TOPICS,
  ...CACHING_TOPICS,
  ...BFF_BACKEND_TOPICS,
  ...SCALING_TOPICS,
  ...MONITORING_TOPICS,
  ...TESTING_TOPICS,
  ...DEVOPS_CICD_TOPICS,
  ...CODE_ANALYSIS_TOPICS,
  ...AUDIT_TOPICS,
  ...DOCUMENTATION_TOPICS,
  ...MIGRATION_TOPICS,
  ...PRACTICE_TOPICS
];
