import { Topic } from '../../../types';

export const UX_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'ux-understanding',
    title: 'Понимание UX',
    difficulty: 'beginner',
    description: 'UX (User Experience) — весь опыт взаимодействия пользователя с продуктом. Разница с UI: UI — визуальная часть, UX — весь опыт. Роль фронтендера в реализации задуманного UX через код, анимации, состояния, обратную связь.',
    keyPoints: [
      'UI vs UX: UI — как выглядит, UX — как работает и ощущается, фронтендер реализует оба аспекта.',
      'Роль фронтендера: превращение дизайна в работающий интерфейс с правильными состояниями и обратной связью.',
      'Реализация UX: не только визуал, но и интерактивность, производительность, доступность, понятность.',
      'Важность: хороший UX увеличивает конверсию, снижает отказы, улучшает удовлетворённость пользователей.'
    ],
    tags: ['ux', 'ui', 'basics', 'fundamentals'],
    examples: [
      {
        title: 'UI и UX',
        code: `/* UI: как выглядит */
.button {
  background: blue;
  color: white;
}

/* UX: как работает */
.button:hover {
  background: darkblue;
  transform: scale(1.05);
}

.button:active {
  transform: scale(0.98);
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* UX включает все состояния и обратную связь */
`
      }
    ],
    relatedTopics: ['ux-states', 'ux-microinteractions'],
    additionalDescription: 'UX для фронтендера — это не только реализация дизайна, но и понимание пользовательских сценариев. Мысленное прохождение по интерфейсу с точки зрения пользователя помогает выявлять проблемы до того, как они станут критичными. Хороший UX увеличивает конверсию и снижает отказы.',
    funFact: 'Термин "UX" был введён Дональдом Норманом в 1990-х годах, когда он работал в Apple. Он хотел подчеркнуть, что дизайн — это не только визуал, но и весь опыт взаимодействия. Интересно, что Норман также ввёл термин "user-centered design" (дизайн, ориентированный на пользователя).'
  },
  {
    id: 'ux-states',
    title: 'Реализация состояний',
    difficulty: 'intermediate',
    description: 'Все состояния интерфейса должны быть реализованы: загрузка (loading), пустое состояние (empty), ошибка (error), успех (success). Верстка и стилизация состояний критична для хорошего UX.',
    keyPoints: [
      'Состояния: default, hover, active, focus, disabled, loading, error, success, empty.',
      'Загрузка: индикаторы прогресса, скелетоны, disabled состояние во время загрузки.',
      'Пустое состояние: понятное сообщение, призыв к действию, визуальная подсказка.',
      'Ошибка: понятные сообщения, визуальное выделение, подсказки по исправлению.',
      'Успех: подтверждение действия, визуальная обратная связь, переход к следующему шагу.'
    ],
    tags: ['ux', 'states', 'loading', 'error', 'intermediate'],
    examples: [
      {
        title: 'Состояния интерфейса',
        code: `/* Загрузка */
.button.loading {
  opacity: 0.7;
  pointer-events: none;
}

.button.loading::after {
  content: '';
  /* Спиннер */
}

/* Ошибка */
.input.error {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 0.875rem;
}

/* Успех */
.success-message {
  color: green;
  background: #f0f9f0;
}
`
      }
    ],
    relatedTopics: ['ux-understanding', 'ux-microinteractions'],
    funFact: 'Почему font-display: swap может привести к мерцанию текста (FOUT/FOIT — Flash of Unstyled Text / Flash of Invisible Text). FOUT показывает текст системным шрифтом до загрузки кастомного, FOIT скрывает текст до загрузки. Оба подхода имеют компромиссы, и выбор зависит от приоритетов проекта.'
  },
  {
    id: 'ux-microinteractions',
    title: 'Микровзаимодействия',
    difficulty: 'intermediate',
    description: 'Микровзаимодействия — небольшие анимации и переходы, которые улучшают UX. Плавные transition, transform для интерактивности, индикаторы загрузки. Правильные микровзаимодействия делают интерфейс живым и отзывчивым.',
    keyPoints: [
      'Transition: плавные переходы между состояниями, улучшают восприятие изменений.',
      'Transform: трансформации без reflow, производительные анимации (scale, translate, rotate).',
      'Индикаторы: спиннеры, прогресс-бары, скелетоны для обратной связи во время загрузки.',
      'Обратная связь: визуальная реакция на действия пользователя (hover, click, focus).',
      'Производительность: использование transform и opacity для плавных анимаций.'
    ],
    tags: ['ux', 'animations', 'transitions', 'intermediate'],
    examples: [
      {
        title: 'Микровзаимодействия',
        code: `/* Плавный переход */
.button {
  transition: background 0.2s, transform 0.1s;
}

.button:hover {
  background: darkblue;
  transform: translateY(-2px);
}

.button:active {
  transform: translateY(0);
}

/* Индикатор загрузки */
@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  animation: spin 1s linear infinite;
}
`
      }
    ],
    relatedTopics: ['ux-states'],
    funFact: 'Микровзаимодействия были детально описаны Дэном Саффером в книге "Microinteractions" (2013). Он выделил четыре части микровзаимодействия: триггер (что запускает), правила (как работает), обратная связь (что видит пользователь) и циклы/режимы (как меняется со временем). Правильные микровзаимодействия делают интерфейс "живым".'
  }
];
