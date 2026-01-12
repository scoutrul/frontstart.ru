import { InterviewQuestion } from '../../../types';

export const CSS_INTERMEDIATE_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'css-intermediate-flexbox',
    question: 'Как работают Flexbox (flex-grow, flex-shrink, align-items, justify-content)?',
    answer: 'flex-grow определяет, как элемент растет, flex-shrink — как сжимается. justify-content выравнивает по главной оси, align-items — по поперечной.',
    category: 'css',
    difficulty: 'intermediate',
    tags: ['css', 'flexbox', 'layout']
  },
  {
    id: 'css-intermediate-grid',
    question: 'Как работает CSS Grid?',
    answer: 'Двумерная система раскладки, позволяющая создавать сетки через grid-template-columns/rows, размещать элементы через grid-column/row.',
    category: 'css',
    difficulty: 'intermediate',
    tags: ['css', 'grid', 'layout']
  },
  {
    id: 'css-intermediate-cascade',
    question: 'Как работает каскад (cascade) в CSS?',
    answer: 'Порядок применения стилей: специфичность, порядок объявления, !important. Более специфичные правила переопределяют менее специфичные.',
    category: 'css',
    difficulty: 'intermediate',
    tags: ['css', 'cascade', 'specificity']
  },
  {
    id: 'css-intermediate-important',
    question: 'Что такое !important и когда его можно использовать?',
    answer: '!important имеет наивысший приоритет, но затрудняет поддержку кода. Используйте только для переопределения сторонних библиотек или критических стилей.',
    category: 'css',
    difficulty: 'intermediate',
    tags: ['css', 'important', 'specificity', 'best-practices']
  },
  {
    id: 'css-intermediate-variables',
    question: 'Чем отличаются нативные CSS-переменные от переменных препроцессоров (SASS/LESS)?',
    answer: 'Нативные переменные (--var) динамичны, наследуются, доступны в JS. Препроцессорные компилируются статически на этапе сборки.',
    category: 'css',
    difficulty: 'intermediate',
    tags: ['css', 'variables', 'sass', 'preprocessors']
  },
  {
    id: 'css-intermediate-bem',
    question: 'Что такое БЭМ? Каковы его принципы?',
    answer: 'БЭМ: Блок-Элемент-Модификатор. Методология именования классов для изоляции стилей и переиспользования компонентов.',
    category: 'css',
    difficulty: 'intermediate',
    tags: ['css', 'bem', 'methodology', 'architecture']
  },
  {
    id: 'css-intermediate-isolation',
    question: 'Что такое изоляция стилей и какие инструменты для этого используются?',
    answer: 'Изоляция предотвращает конфликты стилей между компонентами (CSS Modules, styled-components, BEM, Tailwind).',
    category: 'css',
    difficulty: 'intermediate',
    tags: ['css', 'isolation', 'css-modules', 'styled-components', 'architecture']
  },
  {
    id: 'css-intermediate-media-queries',
    question: 'Как работают медиа-запросы?',
    answer: 'Позволяют применять стили в зависимости от характеристик устройства (ширина, высота, ориентация) через @media.',
    category: 'css',
    difficulty: 'intermediate',
    tags: ['css', 'media-queries', 'responsive', 'mobile-first']
  },
  {
    id: 'css-intermediate-mobile-first',
    question: 'Что такое mobile-first подход?',
    answer: 'Mobile-first: стили для мобильных устройств пишутся первыми, затем через min-width расширяются для десктопа.',
    category: 'css',
    difficulty: 'intermediate',
    tags: ['css', 'mobile-first', 'responsive', 'design']
  },
  {
    id: 'css-intermediate-styled-components',
    question: 'Какие плюсы и минусы у Styled Components?',
    answer: 'Плюсы: стили в JS, удобно для тем и пропсов, автоматическая изоляция. Минусы: увеличивает bundle size, сложнее отладка, зависимость от JS.',
    category: 'css',
    difficulty: 'intermediate',
    tags: ['css', 'styled-components', 'css-in-js', 'architecture']
  }
];
