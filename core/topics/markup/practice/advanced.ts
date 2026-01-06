import { Topic } from '../../../types';

export const PRACTICE_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'practice-complex-component',
    title: 'Сложный UI-компонент',
    difficulty: 'advanced',
    description: 'Практическое задание: создать сложный UI-компонент (кастомный select или модальное окно). Требования: полная доступность (клавиатура, ARIA), корректная работа в любом контексте, производительная анимация, продуманные состояния.',
    keyPoints: [
      'Доступность: управление с клавиатуры (Tab, Enter, Escape, стрелки), правильные ARIA атрибуты, поддержка скринридеров.',
      'Контекст: компонент должен работать в любом месте страницы, не ломать layout, быть переиспользуемым.',
      'Анимация: плавные переходы, использование transform для производительности, правильные timing functions.',
      'Состояния: все состояния реализованы (default, hover, focus, active, disabled, open, closed).',
      'Тестирование: автоматические инструменты (axe, Lighthouse), ручное тестирование с клавиатуры и скринридером.'
    ],
    tags: ['practice', 'components', 'accessibility', 'aria', 'advanced'],
    examples: [
      {
        title: 'Кастомный select',
        code: `<!-- Структура -->
<div class="custom-select">
  <button 
    class="select-trigger"
    aria-expanded="false"
    aria-controls="select-menu"
    aria-haspopup="listbox"
  >
    Выберите опцию
  </button>
  <ul 
    id="select-menu"
    role="listbox"
    class="select-menu"
    hidden
  >
    <li role="option" tabindex="0">Опция 1</li>
    <li role="option" tabindex="0">Опция 2</li>
  </ul>
</div>

/* JavaScript:
   - Управление с клавиатуры
   - Обработка стрелок, Enter, Escape
   - Управление фокусом
   - Ловушка фокуса в меню */
`
      }
    ],
    relatedTopics: ['practice-grid-layout'],
    funFact: 'Кастомные компоненты типа select требуют полной реализации доступности с нуля, в отличие от нативных элементов. Это включает управление фокусом, обработку клавиатуры, ARIA атрибуты и поддержку скринридеров. Нативный <select> имеет всё это "из коробки", но кастомизация требует глубокого понимания a11y.'
  }
];
