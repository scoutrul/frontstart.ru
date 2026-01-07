import { Topic } from '../../../types';

export const STYLES_ARCHITECTURE_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'architecture-styles-css-modules',
    title: 'CSS Modules',
    difficulty: 'beginner',
    description: 'CSS Modules — подход к организации стилей, где каждый CSS файл изолирован и доступен только в соответствующем компоненте. Классы автоматически получают уникальные имена, что предотвращает конфликты. Это решает проблему глобальных стилей и конфликтов имён.\n\nДля Junior важно понимать: CSS Modules обеспечивают изоляцию стилей без дополнительных библиотек. Классы остаются обычными CSS, но имена уникальны. Это простой и эффективный способ организации стилей в компонентных приложениях.',
    keyPoints: [
      'CSS Modules: изоляция стилей, каждый CSS файл доступен только в своём компоненте.',
      'Автоматические уникальные имена: классы получают хеши, предотвращая конфликты.',
      'Использование: import styles from "./Component.module.css", className={styles.button}.',
      'Преимущества: изоляция, нет конфликтов имён, простота использования.',
      'Недостатки: нет глобальных стилей, сложнее переиспользование.',
      'Применение: компонентные приложения, когда нужна изоляция стилей.'
    ],
    tags: ['architecture', 'styles', 'css-modules', 'basics'],
    examples: [
      {
        title: 'CSS Modules: базовое использование',
        code: `// Button.module.css
.button {
  background: blue;
  color: white;
  padding: 10px 20px;
}

// Button.tsx
import styles from './Button.module.css';

function Button({ children }) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
}

// Скомпилируется в уникальный класс: Button_button__abc123`
      }
    ],
    relatedTopics: ['architecture-styles-styled-components'],
    funFact: 'CSS Modules были созданы в 2015 году как решение проблемы конфликтов имён в CSS. Они стали популярными в React-сообществе и поддерживаются из коробки в Create React App и Next.js. CSS Modules — это компромисс между глобальными стилями и CSS-in-JS.',
    isFrontendEssential: true
  },
  {
    id: 'architecture-styles-styled-components',
    title: 'Styled Components',
    difficulty: 'beginner',
    description: 'Styled Components — библиотека для CSS-in-JS, где стили пишутся в JavaScript как шаблонные строки. Компоненты и стили объединены в одном файле, что упрощает поддержку. Стили изолированы автоматически, поддерживаются props для динамических стилей.\n\nПреимущества: компоненты и стили вместе, динамические стили через props, автоматическая изоляция, поддержка темизации. Недостатки: runtime overhead, сложнее отладка, зависимость от библиотеки. Для Junior важно понимать основы: создание styled компонентов, использование props, темизация.',
    keyPoints: [
      'Styled Components: CSS-in-JS, стили в JavaScript как шаблонные строки.',
      'Создание: const Button = styled.button с шаблонной строкой для стилей.',
      'Динамические стили: через props, условная логика в шаблонных строках.',
      'Темизация: ThemeProvider для глобальных переменных, доступ через props.theme.',
      'Преимущества: компоненты и стили вместе, динамические стили, автоматическая изоляция.',
      'Недостатки: runtime overhead, сложнее отладка, зависимость от библиотеки.'
    ],
    tags: ['architecture', 'styles', 'styled-components', 'css-in-js', 'basics'],
    examples: [
      {
        title: 'Styled Components: базовое использование',
        code: `import styled from 'styled-components';

const Button = styled.button\`
  background: \${props => props.primary ? 'blue' : 'gray'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  
  &:hover {
    opacity: 0.8;
  }
\`;

// Использование
<Button primary>Основная кнопка</Button>
<Button>Вторичная кнопка</Button>`
      }
    ],
    relatedTopics: ['architecture-styles-css-modules', 'architecture-styles-bem'],
    funFact: 'Styled Components были созданы в 2016 году Максом Стоибером и Гленом Мэддерном. Они стали одной из самых популярных библиотек для CSS-in-JS, используемой в тысячах проектов. Styled Components показали, что CSS-in-JS может быть простым и удобным.'
  },
  {
    id: 'architecture-styles-bem',
    title: 'БЭМ методология',
    difficulty: 'beginner',
    description: 'БЭМ (Block Element Modifier) — методология именования CSS классов для создания переиспользуемых компонентов. Блок — независимый компонент, Элемент — часть блока, Модификатор — вариант блока или элемента. БЭМ решает проблему конфликтов имён и делает структуру понятной.\n\nСинтаксис: block, block__element, block--modifier, block__element--modifier. Преимущества: понятная структура, нет конфликтов имён, переиспользование, масштабируемость. Недостатки: длинные имена классов, многословность. Для Junior важно понимать основы БЭМ для работы с большими проектами.',
    keyPoints: [
      'БЭМ: Block (блок), Element (элемент), Modifier (модификатор).',
      'Синтаксис: block, block__element, block--modifier, block__element--modifier.',
      'Блок: независимый компонент (button, card, form).',
      'Элемент: часть блока (button__icon, card__title).',
      'Модификатор: вариант (button--primary, card--large).',
      'Преимущества: понятная структура, нет конфликтов, переиспользование.',
      'Недостатки: длинные имена, многословность.'
    ],
    tags: ['architecture', 'styles', 'bem', 'methodology', 'basics'],
    examples: [
      {
        title: 'БЭМ: пример структуры',
        code: `/* Блок: card */
.card { }

/* Элемент: card__title */
.card__title { }

/* Модификатор: card--large */
.card--large { }

/* HTML */
<div class="card card--large">
  <h3 class="card__title">Заголовок</h3>
  <p class="card__text">Текст</p>
</div>`
      }
    ],
    relatedTopics: ['architecture-styles-css-modules'],
    funFact: 'БЭМ методология была создана в Яндексе в 2009 году для решения проблем масштабирования CSS в больших проектах. Она стала стандартом в русскоязычном сообществе и используется в тысячах проектов. БЭМ показала, что правильное именование может решить многие проблемы CSS.',
    isFrontendEssential: true
  }
];
