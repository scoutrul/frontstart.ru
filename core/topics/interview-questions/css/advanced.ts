import { InterviewQuestion } from '../../../types';

export const CSS_ADVANCED_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'css-advanced-sticky-fixed',
    question: 'В чем отличие sticky от fixed?',
    answer: 'sticky работает как relative до достижения порога прокрутки, затем как fixed. fixed всегда позиционируется относительно viewport.',
    category: 'css',
    difficulty: 'advanced',
    tags: ['css', 'positioning', 'sticky', 'fixed']
  },
  {
    id: 'css-advanced-container-queries',
    question: 'Что такое container queries?',
    answer: 'Container queries позволяют адаптировать стили на основе размеров контейнера, а не viewport. Полезно для компонентного дизайна.',
    category: 'css',
    difficulty: 'advanced',
    tags: ['css', 'container-queries', 'responsive', 'components']
  },
  {
    id: 'css-advanced-css-modules',
    question: 'Какие подходы к изоляции стилей вы знаете (CSS-модули, Styled Components)?',
    answer: 'CSS Modules генерируют уникальные имена классов. Styled Components: стили в JS с автоматической изоляцией. Также: BEM, scoped CSS, Shadow DOM.',
    category: 'css',
    difficulty: 'advanced',
    tags: ['css', 'css-modules', 'styled-components', 'isolation', 'architecture']
  },
  {
    id: 'css-advanced-animations',
    question: 'В чем разница между transition и animation?',
    answer: 'transition для простых переходов между состояниями, animation для сложных ключевых кадров с множеством этапов.',
    category: 'css',
    difficulty: 'advanced',
    tags: ['css', 'animations', 'transitions', 'performance']
  },
  {
    id: 'css-advanced-transform',
    question: 'Что такое transform и какие свойства есть?',
    answer: 'transform применяет трансформации (translate, rotate, scale, skew) без влияния на layout. Оптимизирован для GPU.',
    category: 'css',
    difficulty: 'advanced',
    tags: ['css', 'transform', 'performance', 'animations']
  },
  {
    id: 'css-advanced-animation-optimization',
    question: 'Как оптимизировать анимации для производительности?',
    answer: 'Использовать transform и opacity (не вызывают reflow), избегать изменения width/height/left/top, использовать will-change, requestAnimationFrame.',
    category: 'css',
    difficulty: 'advanced',
    tags: ['css', 'animations', 'performance', 'optimization']
  },
  {
    id: 'css-advanced-sass-use-import',
    question: 'В чём разница между @use и @import в SCSS?',
    answer: '@use подключает модуль один раз, имеет область видимости и предотвращает дублирование, @import глобален и устарел.',
    category: 'css',
    difficulty: 'advanced',
    tags: ['css', 'sass', 'scss', 'modules', 'import']
  }
];
