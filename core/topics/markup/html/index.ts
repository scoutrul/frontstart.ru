import { Topic } from '../../../types';

export const HTML_TOPICS: Topic[] = [
  {
    id: 'html-basics',
    title: 'Основы HTML',
    description: 'HTML (HyperText Markup Language) — язык разметки для создания веб-страниц. Структура HTML документа: doctype, html, head, body. Семантические теги: header, nav, main, article, section, aside, footer для структурирования контента. Атрибуты: id, class, data-* для идентификации и данных.',
    difficulty: 'beginner',
    tags: ['html', 'semantics', 'basics'],
    keyPoints: [
      'HTML документ начинается с <!DOCTYPE html>.',
      'Семантические теги улучшают доступность и SEO.',
      'Атрибуты id должны быть уникальными на странице.',
      'class может использоваться несколько раз.',
      'data-* атрибуты для хранения кастомных данных.'
    ],
    examples: [
      {
        title: 'Базовая структура',
        code: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Заголовок</title>
</head>
<body>
  <header>Шапка</header>
  <main>Основной контент</main>
  <footer>Подвал</footer>
</body>
</html>`
      },
      {
        title: 'Семантические теги',
        code: `<article>
  <header>
    <h1>Заголовок статьи</h1>
  </header>
  <section>
    <p>Содержимое статьи</p>
  </section>
  <aside>Дополнительная информация</aside>
</article>`
      }
    ],
    relatedTopics: []
  }
];

