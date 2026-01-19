import { Category } from '../../types';
import { UI_UX_INTRO_TOPICS } from './ui-ux-intro';
import { HTML_TOPICS } from './html';
import { CSS_TOPICS } from './css';
import { LAYOUT_TOPICS } from './layout';
import { RESPONSIVE_TOPICS } from './responsive';
import { A11Y_TOPICS } from './a11y';
import { PERFORMANCE_TOPICS } from './performance';
import { TOOLS_TOPICS } from './tools';
import { UX_TOPICS } from './ux';
import { PRACTICE_TOPICS } from './practice';

export const MARKUP_CATEGORIES: Category[] = [
  {
    id: 'ui-ux-intro',
    title: 'Введение в UI/UX',
    description: 'Что такое UI и UX, роль дизайна в продукте, базовые принципы интерфейсов.',
    topics: UI_UX_INTRO_TOPICS
  },
  {
    id: 'html',
    title: 'HTML',
    description: 'Семантическая разметка, теги, атрибуты, формы, мета-информация, SEO-основы.',
    topics: HTML_TOPICS
  },
  {
    id: 'css',
    title: 'CSS Основы',
    description: 'Селекторы, каскад, специфичность, box model, позиционирование, единицы измерения.',
    topics: CSS_TOPICS
  },
  {
    id: 'layout',
    title: 'Layout',
    description: 'Flexbox, CSS Grid, многоколоночная вёрстка, современные подходы к раскладке.',
    topics: LAYOUT_TOPICS
  },
  {
    id: 'responsive',
    title: 'Responsive / Adaptive',
    description: 'Media queries, mobile-first, viewport, адаптация под разные экраны.',
    topics: RESPONSIVE_TOPICS
  },
  {
    id: 'a11y',
    title: 'Доступность',
    description: 'WCAG, ARIA, screen readers, keyboard navigation — доступность для всех.',
    topics: A11Y_TOPICS
  },
  {
    id: 'performance',
    title: 'Производительность UI',
    description: 'Оптимизация рендеринга, reflow/repaint, анимации, критический CSS.',
    topics: PERFORMANCE_TOPICS
  },
  {
    id: 'tools',
    title: 'Инструменты',
    description: 'DevTools для вёрстки, препроцессоры, CSS-in-JS, линтеры стилей.',
    topics: TOOLS_TOPICS
  },
  {
    id: 'ux',
    title: 'UX для фронтендера',
    description: 'Паттерны взаимодействия, микроанимации, обратная связь, usability.',
    topics: UX_TOPICS
  },
  {
    id: 'practice',
    title: 'Практические задания',
    description: 'Реальные задачи на вёрстку: карточки, формы, лейауты, адаптивность.',
    topics: PRACTICE_TOPICS
  }
];

// Экспорт плоского массива для обратной совместимости
export const MARKUP_TOPICS = [
  ...UI_UX_INTRO_TOPICS,
  ...HTML_TOPICS,
  ...CSS_TOPICS,
  ...LAYOUT_TOPICS,
  ...RESPONSIVE_TOPICS,
  ...A11Y_TOPICS,
  ...PERFORMANCE_TOPICS,
  ...TOOLS_TOPICS,
  ...UX_TOPICS,
  ...PRACTICE_TOPICS
];