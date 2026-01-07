import { Topic } from '../../../types';

export const CSS_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'css-as-system',
    title: 'CSS как система',
    difficulty: 'advanced',
    description: 'CSS на больших проектах требует системного подхода. Стратегии предсказуемости каскада, контроля побочных эффектов, изоляции стилей критичны для поддерживаемости. Методологии (БЭМ, CSS Modules, CSS-in-JS) решают проблемы масштабирования, каждая со своими компромиссами.',
    keyPoints: [
      'Предсказуемость каскада: согласованные правила специфичности, избегание глобальных стилей, структурированный подход.',
      'Контроль побочных эффектов: изоляция стилей компонентов, избегание глобальных переопределений, явные зависимости.',
      'Методологии: БЭМ (блок-элемент-модификатор), CSS Modules (изоляция через классы), CSS-in-JS (стили в JavaScript).',
      'БЭМ: соглашения по именованию (.block__element--modifier), изоляция через префиксы, переиспользование.',
      'CSS Modules: автоматическая генерация уникальных классов, изоляция на уровне модуля, компиляция.',
      'CSS-in-JS: стили в JavaScript, динамические стили, изоляция через runtime, но больше JavaScript кода.',
      'Выбор методологии: зависит от размера проекта, команды, инструментов, компромиссы между изоляцией и простотой.'
    ],
    tags: ['css', 'architecture', 'methodology', 'bem', 'css-modules', 'advanced', 'engineering'],
    examples: [
      {
        title: 'БЭМ методология',
        code: `/* Блок */
.button {
  padding: 12px 24px;
}

/* Элемент блока */
.button__text {
  font-weight: bold;
}

.button__icon {
  margin-right: 8px;
}

/* Модификатор */
.button--primary {
  background: blue;
}

.button--large {
  padding: 16px 32px;
}

/* HTML */
<button class="button button--primary button--large">
  <span class="button__icon">✓</span>
  <span class="button__text">Клик</span>
</button>

/* Преимущества:
   - Предсказуемое именование
   - Изоляция через префиксы
   - Переиспользование */
`
      },
      {
        title: 'CSS Modules',
        code: `/* styles.module.css */
.button {
  padding: 12px 24px;
}

.primary {
  background: blue;
}

/* Component.jsx */
import styles from './styles.module.css';

<button className={styles.button + ' ' + styles.primary}>
  Клик
</button>

/* Компилируется в:
   <button class="styles_button__abc123 styles_primary__def456">
   
   Преимущества:
   - Автоматическая изоляция
   - Уникальные классы
   - Нет конфликтов */
`
      },
      {
        title: 'CSS-in-JS',
        code: `/* styled-components */
import styled from 'styled-components';

const Button = styled.button\`
  padding: 12px 24px;
  background: \${props => props.primary ? 'blue' : 'gray'};
\`;

<Button primary>Клик</Button>

/* Преимущества:
   - Динамические стили
   - Изоляция через runtime
   - TypeScript поддержка

   Недостатки:
   - Больше JavaScript
   - Runtime overhead
   - Сложнее отладка */
`
      }
    ],
    relatedTopics: ['css-cascade-inheritance'],
    funFact: 'Псевдокласс :empty и его использование для скрытия пустых элементов в компонентном подходе — простой, но эффективный способ очистки интерфейса. С помощью backdrop-filter можно создать "стеклянный" (glassmorphism) эффект всего парой строк CSS.',
    isFrontendEssential: true
  }
];
