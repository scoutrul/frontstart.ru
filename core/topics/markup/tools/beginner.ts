import { Topic } from '../../../types';

export const TOOLS_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'tools-devtools-elements',
    title: 'DevTools: Elements',
    difficulty: 'beginner',
    description: 'DevTools Elements позволяет инспектировать DOM, просматривать и изменять CSS стили в реальном времени. Панель Styles показывает применённые стили, Box Model визуализирует блочную модель. Основной инструмент для отладки вёрстки.',
    keyPoints: [
      'Инспектирование DOM: просмотр структуры HTML, поиск элементов, редактирование в реальном времени.',
      'Панель Styles: просмотр применённых CSS правил, изменение стилей, визуализация специфичности.',
      'Box Model: визуализация размеров элемента (content, padding, border, margin).',
      'Computed: вычисленные стили элемента, итоговые значения после применения всех правил.',
      'Практика: отладка layout, проверка стилей, тестирование изменений.'
    ],
    tags: ['tools', 'devtools', 'basics'],
    examples: [
      {
        title: 'Использование DevTools',
        code: `/* F12 → Elements
   - Просмотр DOM
   - Изменение HTML
   - Просмотр и изменение CSS
   - Box Model визуализация */
`
      }
    ],
    relatedTopics: ['tools-devtools-advanced'],
    funFact: 'В Chrome DevTools можно нажать Ctrl+Shift+P (Cmd+Shift+P на Mac) и найти команду "Capture node screenshot" для скриншота конкретного DOM-элемента. С помощью console.dir($0) можно вывести выбранный элемент в виде JS-объекта со всеми свойствами, что очень полезно для отладки.',
    isFrontendEssential: true
  },
  {
    id: 'tools-validation',
    title: 'Валидация',
    difficulty: 'beginner',
    description: 'Валидация HTML и CSS проверяет корректность кода. Онлайн валидаторы (W3C Validator) находят ошибки разметки и стилей. Валидация помогает избежать проблем с отображением и доступностью.',
    keyPoints: [
      'HTML валидация: проверка корректности разметки, закрытие тегов, правильные атрибуты.',
      'CSS валидация: проверка синтаксиса CSS, правильность свойств и значений.',
      'Инструменты: W3C Validator, встроенные валидаторы в IDE, линтеры.',
      'Важность: ошибки могут вызывать проблемы с отображением, доступностью, SEO.'
    ],
    tags: ['tools', 'validation', 'basics'],
    examples: [
      {
        title: 'Валидация',
        code: `/* W3C HTML Validator: https://validator.w3.org/
   W3C CSS Validator: https://jigsaw.w3.org/css-validator/ */
`
      }
    ],
    relatedTopics: ['tools-devtools-elements'],
    funFact: 'Существует инструмент "Nu Html Checker", который проверяет HTML строже, чем браузер. Валидация помогает находить проблемы, которые браузеры прощают, но которые могут вызвать проблемы с доступностью, SEO или будущей совместимостью.',
    isFrontendEssential: true
  }
];
