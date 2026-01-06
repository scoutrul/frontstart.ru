import { Topic } from '../../../types';

export const STYLES_ARCHITECTURE_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'architecture-styles-design-tokens',
    title: 'Дизайн-токены',
    difficulty: 'intermediate',
    description: 'Дизайн-токены — атомарные значения дизайна (цвета, размеры, отступы, типографика), хранящиеся в централизованном месте. Они обеспечивают консистентность дизайна и упрощают темизацию. Токены используются в CSS переменных, темах, дизайн-системах.\n\nСтруктура: цвета (primary, secondary), размеры (spacing, font-size), типографика (font-family, line-height), тени, радиусы. Преимущества: консистентность, легкость темизации, централизованное управление. Middle-разработчик должен понимать, как создавать и использовать дизайн-токены.',
    keyPoints: [
      'Дизайн-токены: атомарные значения дизайна (цвета, размеры, отступы).',
      'Структура: цвета, размеры, типографика, тени, радиусы.',
      'Хранение: CSS переменные, JSON файлы, TypeScript объекты.',
      'Использование: в компонентах, темах, дизайн-системах.',
      'Преимущества: консистентность, темизация, централизованное управление.',
      'Инструменты: Style Dictionary для генерации токенов в разные форматы.'
    ],
    tags: ['architecture', 'styles', 'design-tokens', 'theming', 'intermediate'],
    examples: [
      {
        title: 'Дизайн-токены: структура',
        code: `// tokens.json
{
  "color": {
    "primary": "#007bff",
    "secondary": "#6c757d",
    "success": "#28a745"
  },
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px"
  },
  "typography": {
    "fontFamily": "Arial, sans-serif",
    "fontSize": {
      "sm": "14px",
      "md": "16px",
      "lg": "20px"
    }
  }
}

// Использование в CSS
:root {
  --color-primary: #007bff;
  --spacing-md: 16px;
}

.button {
  background: var(--color-primary);
  padding: var(--spacing-md);
}`
      }
    ],
    relatedTopics: ['architecture-styles-theming'],
    funFact: 'Дизайн-токены стали популярными с ростом дизайн-систем. Они позволяют синхронизировать дизайн между разными платформами (веб, мобильные приложения) и упрощают поддержку. Многие крупные компании (Google, Microsoft) используют токены в своих дизайн-системах.'
  },
  {
    id: 'architecture-styles-theming',
    title: 'Темизация',
    difficulty: 'intermediate',
    description: 'Темизация — поддержка нескольких тем (светлая, тёмная) в приложении. Реализуется через CSS переменные, Context API (React), или специализированные библиотеки. Тема хранит значения токенов (цвета, размеры), которые меняются при переключении темы.\n\nПодходы: CSS переменные для простых случаев, Context API для React, библиотеки (styled-components ThemeProvider). Middle-разработчик должен уметь реализовывать темизацию и переключать темы динамически.',
    keyPoints: [
      'Темизация: поддержка нескольких тем (светлая, тёмная) в приложении.',
      'Реализация: CSS переменные, Context API, библиотеки (styled-components).',
      'Хранение темы: localStorage для сохранения выбора пользователя, системные настройки.',
      'Переключение: изменение CSS переменных или значений в Context.',
      'Преимущества: улучшение UX, поддержка предпочтений пользователя.',
      'Применение: все современные приложения должны поддерживать тёмную тему.'
    ],
    tags: ['architecture', 'styles', 'theming', 'dark-mode', 'intermediate'],
    examples: [
      {
        title: 'Темизация через CSS переменные',
        code: `// Светлая тема
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
}

// Тёмная тема
[data-theme="dark"] {
  --bg-color: #000000;
  --text-color: #ffffff;
}

// Использование
body {
  background: var(--bg-color);
  color: var(--text-color);
}

// Переключение
document.documentElement.setAttribute('data-theme', 'dark');`
      }
    ],
    relatedTopics: ['architecture-styles-design-tokens'],
    funFact: 'Тёмная тема стала стандартом в современных приложениях благодаря требованиям пользователей и поддержке на уровне операционных систем. Многие исследования показывают, что тёмная тема снижает нагрузку на глаза и экономит батарею на OLED-экранах.'
  },
  {
    id: 'architecture-styles-ui-kit',
    title: 'Создание UI-кита',
    difficulty: 'intermediate',
    description: 'UI-кит — библиотека переиспользуемых компонентов с единым дизайном. Компоненты используют дизайн-токены, поддерживают темизацию, документированы и протестированы. UI-кит обеспечивает консистентность интерфейса и ускоряет разработку.\n\nСтруктура: базовые компоненты (Button, Input), составные (Form, Card), документация (Storybook), тесты. Middle-разработчик должен понимать, как создавать и поддерживать UI-кит, использовать Storybook для документации.',
    keyPoints: [
      'UI-кит: библиотека переиспользуемых компонентов с единым дизайном.',
      'Структура: базовые компоненты, составные, документация, тесты.',
      'Компоненты: используют дизайн-токены, поддерживают темизацию, документированы.',
      'Документация: Storybook для визуальной документации и тестирования компонентов.',
      'Преимущества: консистентность, ускорение разработки, переиспользование.',
      'Поддержка: версионирование, обратная совместимость, миграционные гайды.'
    ],
    tags: ['architecture', 'styles', 'ui-kit', 'design-system', 'intermediate'],
    examples: [
      {
        title: 'UI-кит: структура компонента',
        code: `// Button.tsx
import { ButtonProps } from './types';

export function Button({ 
  variant = 'primary',
  size = 'medium',
  children,
  ...props 
}: ButtonProps) {
  return (
    <button 
      className={\`btn btn-\${variant} btn-\${size}\`}
      {...props}
    >
      {children}
    </button>
  );
}

// Использование токенов
.button {
  background: var(--color-primary);
  padding: var(--spacing-md);
  font-size: var(--font-size-md);
}

// Документация в Storybook
export default {
  title: 'Components/Button',
  component: Button
};`
      }
    ],
    relatedTopics: ['architecture-styles-design-tokens', 'architecture-styles-theming'],
    funFact: 'Storybook был создан в 2016 году для документирования и тестирования UI-компонентов. Он стал стандартом для разработки UI-китов и дизайн-систем. Storybook позволяет разрабатывать компоненты изолированно, что ускоряет разработку и улучшает качество.'
  }
];
