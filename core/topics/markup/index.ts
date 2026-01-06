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
    topics: UI_UX_INTRO_TOPICS
  },
  {
    id: 'html',
    title: 'HTML',
    topics: HTML_TOPICS
  },
  {
    id: 'css',
    title: 'CSS Основы',
    topics: CSS_TOPICS
  },
  {
    id: 'layout',
    title: 'Layout',
    topics: LAYOUT_TOPICS
  },
  {
    id: 'responsive',
    title: 'Responsive / Adaptive',
    topics: RESPONSIVE_TOPICS
  },
  {
    id: 'a11y',
    title: 'Доступность',
    topics: A11Y_TOPICS
  },
  {
    id: 'performance',
    title: 'Производительность UI',
    topics: PERFORMANCE_TOPICS
  },
  {
    id: 'tools',
    title: 'Инструменты',
    topics: TOOLS_TOPICS
  },
  {
    id: 'ux',
    title: 'UX для фронтендера',
    topics: UX_TOPICS
  },
  {
    id: 'practice',
    title: 'Практические задания',
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