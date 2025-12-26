import { Topic } from '../../../types';

export const CSS_TOPICS: Topic[] = [
  {
    id: 'css-basics',
    title: 'Основы CSS',
    description: 'CSS (Cascading Style Sheets) — язык стилей для оформления HTML. Селекторы: по тегу, классу, id, атрибутам. Каскадность: порядок применения стилей. Специфичность: приоритет селекторов (id > class > tag). Наследование: дочерние элементы наследуют некоторые свойства родителя.',
    difficulty: 'beginner',
    tags: ['css', 'selectors', 'specificity'],
    keyPoints: [
      'Селекторы определяют, к каким элементам применяются стили.',
      'Специфичность: inline > id > class > tag.',
      '!important переопределяет все правила.',
      'Наследование: font, color наследуются, margin/padding — нет.',
      'Каскадность: последнее правило имеет приоритет при равной специфичности.'
    ],
    examples: [
      {
        title: 'Селекторы',
        code: `/* По тегу */
p { color: blue; }

/* По классу */
.button { background: red; }

/* По id */
#header { height: 100px; }

/* По атрибуту */
[type="text"] { border: 1px solid; }`
      },
      {
        title: 'Специфичность',
        code: `/* Специфичность: 0,0,1,0 */
div { color: blue; }

/* Специфичность: 0,1,0,0 */
.container { color: red; }

/* Специфичность: 1,0,0,0 */
#header { color: green; }

/* Применяется green (наибольшая специфичность) */`
      }
    ],
    relatedTopics: ['css-layout']
  },
  {
    id: 'css-layout',
    title: 'CSS Layout',
    description: 'Flexbox для одномерной раскладки (строка или колонка): flex-direction, justify-content, align-items. Grid для двумерной раскладки: grid-template-columns, grid-template-rows, grid-area. Позиционирование: static, relative, absolute, fixed, sticky.',
    difficulty: 'intermediate',
    tags: ['css', 'flexbox', 'grid', 'layout'],
    keyPoints: [
      'Flexbox для одномерной раскладки (строка или колонка).',
      'Grid для двумерной раскладки (строки и колонки).',
      'justify-content выравнивает по главной оси.',
      'align-items выравнивает по поперечной оси.',
      'position: absolute позиционирует относительно ближайшего positioned родителя.'
    ],
    examples: [
      {
        title: 'Flexbox',
        code: `.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.item {
  flex: 1;
}`
      },
      {
        title: 'Grid',
        code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.item {
  grid-column: span 2;
  grid-row: span 1;
}`
      }
    ],
    relatedTopics: ['css-basics', 'css-animations']
  },
  {
    id: 'css-animations',
    title: 'CSS Анимации',
    description: 'Transitions для плавных переходов между состояниями: transition-property, transition-duration. Animations для сложных анимаций: @keyframes для определения ключевых кадров. Transform для трансформаций: translate, rotate, scale. Keyframes определяют этапы анимации от 0% до 100%.',
    difficulty: 'intermediate',
    tags: ['css', 'animations', 'transitions'],
    keyPoints: [
      'transition создаёт плавный переход между состояниями.',
      '@keyframes определяет этапы анимации.',
      'transform не влияет на layout (не вызывает reflow).',
      'animation-timing-function контролирует скорость анимации.',
      'will-change оптимизирует производительность анимаций.'
    ],
    examples: [
      {
        title: 'Transitions',
        code: `.button {
  background: blue;
  transition: background 0.3s ease;
}

.button:hover {
  background: red;
}`
      },
      {
        title: 'Animations',
        code: `@keyframes slide {
  0% { transform: translateX(0); }
  100% { transform: translateX(100px); }
}

.element {
  animation: slide 1s infinite;
}`
      }
    ],
    relatedTopics: ['css-layout', 'responsive-design']
  },
  {
    id: 'responsive-design',
    title: 'Адаптивный дизайн',
    description: 'Media queries для адаптации стилей под разные размеры экрана: @media (max-width: 768px). Viewport meta tag для корректного отображения на мобильных. Mobile-first подход: сначала стили для мобильных, затем расширение для больших экранов.',
    difficulty: 'intermediate',
    tags: ['css', 'responsive', 'media-queries'],
    keyPoints: [
      'Media queries применяют стили при определённых условиях.',
      'Viewport meta tag необходим для мобильных устройств.',
      'Mobile-first: начинать с малых экранов, расширять для больших.',
      'Breakpoints:  mobile (<768px), tablet (768-1024px), desktop (>1024px).',
      'rem и em лучше px для адаптивности.'
    ],
    examples: [
      {
        title: 'Media queries',
        code: `/* Mobile first */
.container {
  width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    width: 1200px;
  }
}`
      },
      {
        title: 'Viewport',
        code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
      }
    ],
    relatedTopics: ['css-animations']
  }
];

