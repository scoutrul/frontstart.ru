import { InterviewQuestion } from '../../../types';

export const HTML_INTERMEDIATE_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'html-intermediate-article-section',
    question: 'В чём разница между <article> и <section>?',
    answer: 'article — автономный контент, section — логический раздел страницы.',
    category: 'html',
    difficulty: 'intermediate',
    tags: ['html', 'semantic', 'article', 'section']
  },
  {
    id: 'html-intermediate-role',
    question: 'Что такое атрибут role и зачем он используется?',
    answer: 'role задаёт ARIA-роль элементу, чаще всего несемантическому, для корректной интерпретации скринридерами.',
    category: 'html',
    difficulty: 'intermediate',
    tags: ['html', 'accessibility', 'aria', 'role']
  },
  {
    id: 'html-intermediate-role-vs-semantic',
    question: 'Зачем использовать role, если есть семантические теги?',
    answer: 'role нужен, когда невозможно использовать семантический тег из-за кастомной разметки или UI-ограничений.',
    category: 'html',
    difficulty: 'intermediate',
    tags: ['html', 'accessibility', 'aria', 'semantic']
  },
  {
    id: 'html-intermediate-aside',
    question: 'Что такое тег <aside>?',
    answer: 'Контент, косвенно связанный с основным содержимым (сайдбары, доп. информация).',
    category: 'html',
    difficulty: 'intermediate',
    tags: ['html', 'semantic', 'aside']
  },
  {
    id: 'html-intermediate-accessibility',
    question: 'Что означает термин accessibility?',
    answer: 'Обеспечение доступности интерфейсов для пользователей с ограниченными возможностями.',
    category: 'html',
    difficulty: 'intermediate',
    tags: ['html', 'accessibility', 'a11y']
  },
  {
    id: 'html-intermediate-screen-reader',
    question: 'Что такое screen reader?',
    answer: 'Вспомогательная технология, которая интерпретирует и озвучивает интерфейс.',
    category: 'html',
    difficulty: 'intermediate',
    tags: ['html', 'accessibility', 'screen-reader', 'a11y']
  },
  {
    id: 'html-intermediate-screen-reader-features',
    question: 'Что ещё умеют скринридеры кроме озвучивания?',
    answer: 'Поддержка навигации, масштабирование текста, взаимодействие с элементами интерфейса.',
    category: 'html',
    difficulty: 'intermediate',
    tags: ['html', 'accessibility', 'screen-reader', 'a11y']
  },
  {
    id: 'html-intermediate-aria-hidden',
    question: 'Как скрыть элемент от скринридера, но оставить в интерфейсе?',
    answer: 'С помощью aria-hidden="true".',
    category: 'html',
    difficulty: 'intermediate',
    tags: ['html', 'accessibility', 'aria', 'aria-hidden']
  },
  {
    id: 'html-intermediate-aria-label',
    question: 'Что такое ARIA-атрибуты (role, aria-label, aria-hidden)?',
    answer: 'ARIA (Accessible Rich Internet Applications) — набор атрибутов для улучшения доступности. role задает роль элемента, aria-label — текстовую метку, aria-hidden — скрывает от скринридеров.',
    category: 'html',
    difficulty: 'intermediate',
    tags: ['html', 'accessibility', 'aria', 'a11y']
  },
  {
    id: 'html-intermediate-form-validation',
    question: 'Как валидировать формы на стороне клиента?',
    answer: 'HTML5 атрибуты (required, pattern, type), JavaScript валидация, визуальная обратная связь. Всегда дублируйте валидацию на сервере.',
    category: 'html',
    difficulty: 'intermediate',
    tags: ['html', 'forms', 'validation', 'javascript']
  },
  {
    id: 'html-intermediate-header-footer',
    question: 'Что такое <header>, <footer>?',
    answer: 'header — вводная часть страницы или секции (логотип, навигация), footer — заключительная часть (копирайт, ссылки).',
    category: 'html',
    difficulty: 'intermediate',
    tags: ['html', 'semantic', 'header', 'footer']
  },
  {
    id: 'html-intermediate-nav',
    question: 'Как правильно использовать теги <article>, <section>, <main>, <aside>, <nav>?',
    answer: 'main — основной контент (один на странице), nav — навигация, article — независимый контент, section — тематическая группа, aside — дополнительная информация.',
    category: 'html',
    difficulty: 'intermediate',
    tags: ['html', 'semantic', 'structure']
  }
];
