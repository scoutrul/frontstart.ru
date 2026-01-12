import { InterviewQuestion } from '../../../types';

export const CSS_BEGINNER_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'css-beginner-position',
    question: 'Какие значения свойства position вы знаете? Охарактеризуйте каждое.',
    answer: 'static (по умолчанию), relative (относительно себя), absolute (относительно ближайшего позиционированного предка), fixed (относительно viewport), sticky (гибрид relative и fixed).',
    category: 'css',
    difficulty: 'beginner',
    tags: ['css', 'positioning', 'layout', 'basics']
  },
  {
    id: 'css-beginner-centering',
    question: 'Как центрировать элемент по вертикали и горизонтали? (минимум 3 способа)',
    answer: 'Через Flexbox (display: flex, justify-content: center, align-items: center), Grid (place-items: center), position: absolute с transform: translate(-50%, -50%), margin: auto для блочных элементов.',
    category: 'css',
    difficulty: 'beginner',
    tags: ['css', 'centering', 'layout', 'flexbox', 'grid']
  },
  {
    id: 'css-beginner-specificity',
    question: 'Что такое специфичность CSS и каков её порядок?',
    answer: 'Это приоритет селекторов: inline > id > class > tag, !important имеет наивысший приоритет.',
    category: 'css',
    difficulty: 'beginner',
    tags: ['css', 'specificity', 'selectors', 'basics']
  },
  {
    id: 'css-beginner-units',
    question: 'В чем разница между px, em, rem, %, vh, vw?',
    answer: 'rem зависит от размера шрифта корневого элемента, em — от размера шрифта родителя. vh/vw — проценты от высоты/ширины viewport. px — абсолютные единицы.',
    category: 'css',
    difficulty: 'beginner',
    tags: ['css', 'units', 'measurements', 'responsive']
  },
  {
    id: 'css-beginner-display-none',
    question: 'Что такое display: none, visibility: hidden, opacity: 0?',
    answer: 'display: none — элемент удаляется из потока, не занимает место. visibility: hidden — элемент скрыт, но занимает место. opacity: 0 — элемент прозрачен, но интерактивен.',
    category: 'css',
    difficulty: 'beginner',
    tags: ['css', 'display', 'visibility', 'opacity', 'basics']
  },
  {
    id: 'css-beginner-em-rem',
    question: 'Когда использовать em, а когда rem?',
    answer: 'rem для глобальных размеров (от корневого элемента), em для локальных размеров относительно родителя (например, отступы внутри компонента).',
    category: 'css',
    difficulty: 'beginner',
    tags: ['css', 'units', 'em', 'rem', 'responsive']
  }
];
