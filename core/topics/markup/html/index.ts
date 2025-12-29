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
  },
  {
    id: 'script-async-defer',
    title: 'Async и Defer для скриптов',
    difficulty: 'intermediate',
    description: 'По умолчанию <script src="..."></script> блокирует построение DOM, пока не загрузится и не выполнится скрипт, что может замедлять загрузку страницы. Атрибут defer: скрипт не блокирует DOM, загружается параллельно, выполняется после построения DOM в порядке подключения. Атрибут async: скрипт не блокирует DOM, выполняется сразу после загрузки, порядок выполнения не гарантирован.',
    keyPoints: [
      'По умолчанию <script> блокирует построение DOM, пока не загрузится и не выполнится.',
      'defer: не блокирует DOM, загружается параллельно, выполняется после построения DOM, порядок сохраняется.',
      'async: не блокирует DOM, выполняется сразу после загрузки, порядок выполнения не гарантирован.',
      'defer — для своих скриптов, которые зависят от DOM.',
      'async — для внешних скриптов, порядок которых не важен (реклама, аналитика, виджеты).',
      'DOMContentLoaded срабатывает после всех defer-скриптов, но может сработать до async-скриптов.'
    ],
    tags: ['html', 'script', 'async', 'defer', 'performance', 'dom', 'loading', 'optimization'],
    examples: [
      {
        title: "Проблема без атрибутов",
        code: `<!-- Блокирует построение DOM -->
<script src="script.js"></script>

<!-- Проблема: страница не отображается, пока скрипт не загрузится и не выполнится -->`
      },
      {
        title: "Атрибут defer",
        code: `<!-- Не блокирует DOM, выполняется после построения DOM -->
<script src="script1.js" defer></script>
<script src="script2.js" defer></script>

<!-- script1.js выполнится первым, затем script2.js
     Оба после того, как DOM построен, до DOMContentLoaded
     Порядок выполнения сохраняется -->`
      },
      {
        title: "Атрибут async",
        code: `<!-- Не блокирует DOM, выполняется сразу после загрузки -->
<script src="analytics.js" async></script>
<script src="ads.js" async></script>

<!-- analytics.js и ads.js могут выполниться в любом порядке
     Как только каждый файл загрузится, он сразу выполнится
     Идеально для сторонних скриптов -->`
      },
      {
        title: "Сравнение defer и async",
        code: `<!-- defer: порядок сохраняется, после DOM -->
<script src="init.js" defer></script>
<script src="app.js" defer></script>
<!-- init.js всегда выполнится перед app.js -->

<!-- async: порядок не гарантирован -->
<script src="widget1.js" async></script>
<script src="widget2.js" async></script>
<!-- widget1.js и widget2.js могут выполниться в любом порядке -->`
      },
      {
        title: "DOMContentLoaded и скрипты",
        code: `document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM готов');
  // Срабатывает после всех defer-скриптов
  // Может сработать до async-скриптов, если они ещё не загрузились
});

// defer-скрипты выполняются до DOMContentLoaded
// async-скрипты могут выполниться до или после DOMContentLoaded`
      }
    ],
    relatedTopics: ['html-basics'],
    funFact: 'Оба атрибута (async и defer) ускоряют загрузку страницы, предотвращая блокировку DOM. defer идеален для скриптов, которые зависят от DOM, а async — для независимых сторонних скриптов, где порядок выполнения не важен.'
  }
];

