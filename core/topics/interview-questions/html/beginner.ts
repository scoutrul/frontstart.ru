import { InterviewQuestion } from '../../../types';

export const HTML_BEGINNER_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'html-beginner-semantic',
    question: 'Зачем нужна семантическая вёрстка?',
    answer: 'Для SEO, доступности (accessibility) и корректной работы вспомогательных технологий.',
    category: 'html',
    difficulty: 'beginner',
    tags: ['html', 'semantic', 'seo', 'accessibility', 'basics']
  },
  {
    id: 'html-beginner-article',
    question: 'Для чего используется тег <article>?',
    answer: 'Для независимого, самодостаточного смыслового блока, например статьи, поста или комментария.',
    category: 'html',
    difficulty: 'beginner',
    tags: ['html', 'semantic', 'article', 'basics']
  },
  {
    id: 'html-beginner-main',
    question: 'Для чего нужен тег <main>?',
    answer: 'Для обозначения основного уникального контента страницы.',
    category: 'html',
    difficulty: 'beginner',
    tags: ['html', 'semantic', 'main', 'basics']
  },
  {
    id: 'html-beginner-alt',
    question: 'Для чего нужен атрибут alt у изображений?',
    answer: 'Для альтернативного текста при недоступности изображения и для скринридеров.',
    category: 'html',
    difficulty: 'beginner',
    tags: ['html', 'accessibility', 'images', 'alt', 'basics']
  },
  {
    id: 'html-beginner-label',
    question: 'Как связать <label> с <input>?',
    answer: 'Связь через id и for или обертывание input в label. Улучшает доступность и UX (клик по label активирует input).',
    category: 'html',
    difficulty: 'beginner',
    tags: ['html', 'forms', 'label', 'input', 'accessibility', 'basics']
  },
  {
    id: 'html-beginner-meta-tags',
    question: 'Какие мета-теги важны для SEO?',
    answer: 'Важные мета-теги: title, description, viewport, charset, Open Graph теги для соцсетей.',
    category: 'html',
    difficulty: 'beginner',
    tags: ['html', 'seo', 'meta-tags', 'basics']
  },
  {
    id: 'html-beginner-input-types',
    question: 'Какие типы <input> вы знаете?',
    answer: 'text, email, tel, password, number, date, checkbox, radio, file, submit, button. HTML5 добавил типы email, tel, date, атрибуты required, pattern.',
    category: 'html',
    difficulty: 'beginner',
    tags: ['html', 'forms', 'input', 'types', 'basics']
  }
];
