import { InterviewQuestion } from '../../../types';

export const SEO_SSR_ADVANCED_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'seo-ssr-advanced-ssg',
    question: 'Что такое Static Site Generation (SSG)?',
    answer: 'Генерация статических HTML-страниц на этапе сборки. Страницы предрендерены и могут быть закэшированы CDN. Подходит для контентных сайтов.',
    category: 'seo-ssr',
    difficulty: 'advanced',
    tags: ['seo', 'ssg', 'rendering', 'nextjs']
  },
  {
    id: 'seo-ssr-advanced-isr',
    question: 'Что такое Incremental Static Regeneration (ISR)?',
    answer: 'ISR обновляет статические страницы по расписанию или по требованию. Комбинация SSG и SSR: статические страницы с возможностью обновления без полной пересборки.',
    category: 'seo-ssr',
    difficulty: 'advanced',
    tags: ['seo', 'isr', 'rendering', 'nextjs']
  },
  {
    id: 'seo-ssr-advanced-rehydration',
    question: 'Что такое гидратация (hydration) и регидратация (rehydration)?',
    answer: 'Гидратация — "оживление" статичного HTML на клиенте. Регидратация — повторная гидратация после обновления данных. Важно для SSR/SSG приложений.',
    category: 'seo-ssr',
    difficulty: 'advanced',
    tags: ['seo', 'ssr', 'hydration', 'rehydration', 'nextjs']
  },
  {
    id: 'seo-ssr-advanced-nextjs',
    question: 'Какие основные фичи Next.js вы знаете?',
    answer: 'Next.js: файловая маршрутизация, SSR/SSG, API routes, оптимизация изображений, автоматический code splitting, встроенная поддержка CSS модулей.',
    category: 'seo-ssr',
    difficulty: 'advanced',
    tags: ['seo', 'nextjs', 'ssr', 'framework', 'features']
  }
];
