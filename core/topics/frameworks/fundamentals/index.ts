import { Category } from '../../../types';
import { EVOLUTION_TOPICS } from './evolution';
import { COMPONENT_MODEL_TOPICS } from './component-model';
import { REACTIVITY_TOPICS } from './reactivity';
import { STATE_MANAGEMENT_TOPICS } from './state-management';
import { RENDERING_TOPICS } from './rendering';
import { META_FRAMEWORKS_TOPICS } from './meta-frameworks';
import { ARCHITECTURE_TOPICS } from './architecture';
import { PERFORMANCE_TOPICS } from './performance';
import { ECOSYSTEM_TOPICS } from './ecosystem';
import { FUTURE_TOPICS } from './future';
import { INTERVIEWS_TOPICS } from './interviews';

export const FUNDAMENTALS_CATEGORIES: Category[] = [
  {
    id: 'fundamentals-evolution',
    title: 'Эволюция и философия',
    description: 'От jQuery к современным фреймворкам: почему появились React, Vue, Angular.',
    topics: EVOLUTION_TOPICS
  },
  {
    id: 'fundamentals-component-model',
    title: 'Компонентная модель',
    description: 'Атомы, молекулы, организмы — как думать компонентами, props, slots, children.',
    topics: COMPONENT_MODEL_TOPICS
  },
  {
    id: 'fundamentals-reactivity',
    title: 'Реактивность',
    description: 'Как фреймворки отслеживают изменения: Virtual DOM, Signals, Proxies.',
    topics: REACTIVITY_TOPICS
  },
  {
    id: 'fundamentals-state-management',
    title: 'Управление состоянием',
    description: 'Локальный, поднятый и глобальный стейт — паттерны и библиотеки.',
    topics: STATE_MANAGEMENT_TOPICS
  },
  {
    id: 'fundamentals-rendering',
    title: 'Стратегии рендеринга',
    description: 'SPA, MPA, SSR, SSG, ISR, hydration — когда что использовать.',
    topics: RENDERING_TOPICS
  },
  {
    id: 'fundamentals-meta-frameworks',
    title: 'Мета-фреймворки',
    description: 'Next.js, Nuxt, SvelteKit, Astro — фреймворки поверх фреймворков.',
    topics: META_FRAMEWORKS_TOPICS
  },
  {
    id: 'fundamentals-architecture',
    title: 'Архитектура приложений',
    description: 'Структура проекта, файловая организация, паттерны для больших приложений.',
    topics: ARCHITECTURE_TOPICS
  },
  {
    id: 'fundamentals-performance',
    title: 'Производительность',
    description: 'Оверхед фреймворков, мемоизация, lazy loading, профилирование.',
    topics: PERFORMANCE_TOPICS
  },
  {
    id: 'fundamentals-ecosystem',
    title: 'Экосистема и инструменты',
    description: 'Роутинг, формы, анимации, тестирование — типичный стек библиотек.',
    topics: ECOSYSTEM_TOPICS
  },
  {
    id: 'fundamentals-future',
    title: 'Будущее и альтернативы',
    description: 'Qwik, Solid, Astro, HTMX — альтернативные подходы и тренды.',
    topics: FUTURE_TOPICS
  },
  {
    id: 'fundamentals-interviews',
    title: 'Собеседования',
    description: 'Типичные вопросы по фреймворкам, как готовиться, что ожидать.',
    topics: INTERVIEWS_TOPICS
  }
];
