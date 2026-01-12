import { InterviewQuestion } from '../../../types';

export const HTML_ADVANCED_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'html-advanced-schema',
    question: 'Что такое микроразметка schema.org?',
    answer: 'Стандартизированная разметка для улучшения понимания контента поисковыми системами.',
    category: 'html',
    difficulty: 'advanced',
    tags: ['html', 'seo', 'schema.org', 'microdata', 'structured-data']
  },
  {
    id: 'html-advanced-robots-sitemap',
    question: 'Как используются robots.txt и sitemap.xml?',
    answer: 'robots.txt управляет индексацией (разрешает/запрещает доступ роботам), sitemap.xml помогает поисковым системам находить и индексировать страницы.',
    category: 'html',
    difficulty: 'advanced',
    tags: ['html', 'seo', 'robots.txt', 'sitemap.xml']
  },
  {
    id: 'html-advanced-keyboard-navigation',
    question: 'Как обеспечить доступную навигацию по клавиатуре?',
    answer: 'Использовать семантические элементы, tabindex для управления порядком, визуальные индикаторы фокуса, поддержка клавиш Enter/Space для интерактивных элементов.',
    category: 'html',
    difficulty: 'advanced',
    tags: ['html', 'accessibility', 'keyboard', 'navigation', 'a11y']
  },
  {
    id: 'html-advanced-accessibility-strategy',
    question: 'Полная accessibility стратегия',
    answer: 'Семантическая разметка, ARIA атрибуты, контрастность цветов, навигация с клавиатуры, альтернативный текст, структурированные заголовки, тестирование со скринридерами.',
    category: 'html',
    difficulty: 'advanced',
    tags: ['html', 'accessibility', 'a11y', 'strategy']
  },
  {
    id: 'html-advanced-autocomplete',
    question: 'Что такое autocomplete и как его использовать?',
    answer: 'Атрибут autocomplete помогает браузерам автозаполнять формы. Значения: name, email, tel, address и др. Улучшает UX и безопасность.',
    category: 'html',
    difficulty: 'advanced',
    tags: ['html', 'forms', 'autocomplete', 'ux']
  },
  {
    id: 'html-advanced-hide-content',
    question: 'Как скрыть контент от screen reader\'ов, но оставить видимым?',
    answer: 'aria-hidden="true" скрывает от скринридеров, но элемент остается видимым. Для полного скрытия используйте visually-hidden класс или display: none.',
    category: 'html',
    difficulty: 'advanced',
    tags: ['html', 'accessibility', 'aria-hidden', 'screen-reader']
  }
];
