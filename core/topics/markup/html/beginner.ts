import { Topic } from '../../../types';

export const HTML_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'html-semantic-markup',
    title: 'Семантическая разметка',
    difficulty: 'beginner',
    description: 'Семантические теги HTML5 описывают назначение контента, а не только его внешний вид. header, main, section, article, nav, footer помогают браузерам, скринридерам и поисковым системам понимать структуру страницы. Разница с div: семантические теги несут смысл, div — только контейнер без значения.',
    keyPoints: [
      'Семантические теги: header (шапка), main (основной контент), section (секция), article (статья), nav (навигация), footer (подвал).',
      'Разница с div: семантические теги описывают назначение, div — только контейнер без смысла.',
      'Преимущества: улучшенная доступность для скринридеров, лучшее SEO, понятная структура кода.',
      'header: шапка страницы или секции, обычно содержит логотип, навигацию, заголовок.',
      'main: основной уникальный контент страницы, должен быть один на странице.',
      'section: логическая секция контента, обычно с заголовком.',
      'article: независимый контент (статья, пост, комментарий), может быть переиспользован.',
      'nav: блок навигации (меню, ссылки).',
      'footer: подвал страницы или секции, обычно содержит копирайт, ссылки.'
    ],
    tags: ['html', 'semantics', 'accessibility', 'seo', 'basics', 'fundamentals'],
    examples: [
      {
        title: 'Семантическая структура страницы',
        code: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Страница</title>
</head>
<body>
  <header>
    <h1>Логотип</h1>
    <nav>
      <a href="/">Главная</a>
      <a href="/about">О нас</a>
    </nav>
  </header>
  
  <main>
    <article>
      <h2>Заголовок статьи</h2>
      <p>Содержимое статьи</p>
    </article>
    
    <section>
      <h2>Дополнительная секция</h2>
      <p>Контент секции</p>
    </section>
  </main>
  
  <footer>
    <p>© 2024 Компания</p>
  </footer>
</body>
</html>`
      },
      {
        title: 'Разница между div и семантическими тегами',
        code: `<!-- ПЛОХО: только div -->
<div class="header">
  <div class="logo">Логотип</div>
  <div class="nav">Навигация</div>
</div>
<div class="content">
  <div class="article">Статья</div>
</div>
<div class="footer">Подвал</div>

/* Браузер и скринридеры не понимают назначение */


<!-- ХОРОШО: семантические теги -->
<header>
  <div class="logo">Логотип</div>
  <nav>Навигация</nav>
</header>
<main>
  <article>Статья</article>
</main>
<footer>Подвал</footer>

/* Браузер и скринридеры понимают структуру */`
      },
      {
        title: 'Вложенность семантических тегов',
        code: `<!-- Семантические теги можно вкладывать -->
<article>
  <header>
    <h2>Заголовок статьи</h2>
    <p>Дата публикации</p>
  </header>
  
  <section>
    <h3>Раздел 1</h3>
    <p>Контент раздела</p>
  </section>
  
  <section>
    <h3>Раздел 2</h3>
    <p>Контент раздела</p>
  </section>
  
  <footer>
    <p>Автор статьи</p>
  </footer>
</article>

/* header и footer внутри article относятся к статье,
   не к странице */`
      }
    ],
    relatedTopics: ['html-document-structure', 'html-accessibility-basics'],
    funFact: 'В HTML5 существуют нативные теги <dialog> для модальных окон и <details>/<summary> для аккордеонов, о которых многие забывают. Эти теги обеспечивают доступность "из коробки" без дополнительного JavaScript.',
    isFrontendEssential: true
  },
  {
    id: 'html-document-structure',
    title: 'Структура документа',
    difficulty: 'beginner',
    description: 'Базовая структура HTML5 документа состоит из обязательных элементов: doctype для указания версии HTML, html как корневой элемент, head с метаданными и head с контентом страницы. Понимание структуры необходимо для корректной работы браузера и правильной интерпретации документа.',
    keyPoints: [
      'DOCTYPE: <!DOCTYPE html> указывает браузеру, что это HTML5 документ, должен быть первой строкой.',
      'html: корневой элемент документа, содержит атрибут lang для указания языка (например, lang="ru").',
      'head: метаданные документа (не отображаются на странице): title, meta, link, script.',
      'body: видимый контент страницы, всё что пользователь видит и с чем взаимодействует.',
      'title: заголовок страницы, отображается во вкладке браузера и в результатах поиска.',
      'meta charset: указывает кодировку символов, обычно UTF-8 для поддержки всех языков.',
      'meta viewport: настройка отображения на мобильных устройствах (width=device-width, initial-scale=1.0).'
    ],
    tags: ['html', 'basics', 'structure', 'doctype', 'fundamentals'],
    examples: [
      {
        title: 'Минимальная структура HTML5',
        code: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Заголовок страницы</title>
</head>
<body>
  <h1>Привет, мир!</h1>
  <p>Контент страницы</p>
</body>
</html>`
      },
      {
        title: 'Назначение элементов head',
        code: `<!DOCTYPE html>
<html lang="ru">
<head>
  <!-- Кодировка символов -->
  <meta charset="UTF-8">
  
  <!-- Настройка viewport для мобильных -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Описание страницы для поисковиков -->
  <meta name="description" content="Описание страницы">
  
  <!-- Заголовок (во вкладке браузера) -->
  <title>Название страницы</title>
  
  <!-- Подключение CSS -->
  <link rel="stylesheet" href="styles.css">
  
  <!-- Подключение JavaScript -->
  <script src="script.js"></script>
</head>
<body>
  <!-- Видимый контент -->
</body>
</html>`
      },
      {
        title: 'Важность DOCTYPE',
        code: `<!-- С DOCTYPE: браузер использует стандартный режим -->
<!DOCTYPE html>
<html>
  <!-- Современные стандарты HTML5 -->
</html>

<!-- Без DOCTYPE: браузер использует режим совместимости -->
<html>
  <!-- Старые стандарты, возможны проблемы с отображением -->
</html>

/* DOCTYPE должен быть первой строкой,
   даже перед комментариями */`
      }
    ],
    relatedTopics: ['html-semantic-markup', 'html-forms-basics'],
    funFact: 'DOCTYPE в HTML5 — это просто <!DOCTYPE html>, без указания версии. В HTML4 было несколько вариантов (HTML 4.01 Strict, Transitional), но в HTML5 решили упростить. Браузеры используют DOCTYPE для выбора режима рендеринга: стандартный или режим совместимости (quirks mode).',
    isFrontendEssential: true
  },
  {
    id: 'html-forms-basics',
    title: 'Основы форм',
    difficulty: 'beginner',
    description: 'HTML формы позволяют пользователям вводить и отправлять данные. Основные элементы: input для различных типов ввода, label для подписей полей. Атрибуты type определяют тип поля, required делает поле обязательным, disabled отключает поле. Важно понимать разницу между placeholder (подсказка) и label (постоянная подпись).',
    keyPoints: [
      'input: элемент для ввода данных, тип определяется атрибутом type (text, email, password, number, checkbox, radio).',
      'label: подпись поля, связывается с input через атрибут for или обёрткой, улучшает доступность и UX.',
      'type: определяет тип поля и валидацию браузера (email проверяет формат, number — только числа).',
      'required: делает поле обязательным для заполнения, браузер показывает ошибку при пустом значении.',
      'disabled: отключает поле, значение не отправляется, поле не получает фокус.',
      'placeholder: подсказка внутри поля, исчезает при вводе, не заменяет label.',
      'Разница placeholder и label: label — постоянная подпись, placeholder — временная подсказка.'
    ],
    tags: ['html', 'forms', 'input', 'label', 'basics', 'accessibility'],
    examples: [
      {
        title: 'Простая форма с input и label',
        code: `<!-- Связь label через атрибут for -->
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>

<!-- Связь label через обёртку -->
<label>
  Пароль:
  <input type="password" name="password" required>
</label>

<!-- Отправка формы -->
<form action="/submit" method="POST">
  <label for="name">Имя:</label>
  <input type="text" id="name" name="name" required>
  
  <button type="submit">Отправить</button>
</form>`
      },
      {
        title: 'Типы input',
        code: `<!-- Текст -->
<input type="text" placeholder="Введите имя">

<!-- Email с валидацией -->
<input type="email" placeholder="email@example.com">

<!-- Пароль (скрывает ввод) -->
<input type="password" placeholder="Пароль">

<!-- Число -->
<input type="number" min="0" max="100" step="1">

<!-- Чекбокс -->
<input type="checkbox" id="agree" name="agree">
<label for="agree">Согласен с условиями</label>

<!-- Радио-кнопка -->
<input type="radio" id="male" name="gender" value="male">
<label for="male">Мужской</label>
<input type="radio" id="female" name="gender" value="female">
<label for="female">Женский</label>`
      },
      {
        title: 'Разница placeholder и label',
        code: `<!-- ПЛОХО: только placeholder -->
<input type="text" placeholder="Введите имя">

/* Проблемы:
   - Подсказка исчезает при вводе
   - Плохая доступность для скринридеров
   - Непонятно, что вводить */


<!-- ХОРОШО: label + placeholder -->
<label for="name">Имя:</label>
<input 
  type="text" 
  id="name" 
  placeholder="Иван"
>

/* label — постоянная подпись
   placeholder — пример значения */


<!-- ОТЛИЧНО: только label (если пример не нужен) -->
<label for="email">Email:</label>
<input type="email" id="email">`
      },
      {
        title: 'Атрибуты required и disabled',
        code: `<!-- Обязательное поле -->
<label for="email">Email (обязательно):</label>
<input type="email" id="email" name="email" required>

/* Браузер не отправит форму, если поле пустое */


<!-- Отключённое поле -->
<label for="username">Имя пользователя:</label>
<input 
  type="text" 
  id="username" 
  name="username" 
  value="admin" 
  disabled
>

/* Поле видно, но нельзя изменить
   Значение не отправляется с формой */


<!-- Только для чтения -->
<input 
  type="text" 
  value="Нельзя изменить" 
  readonly
>

/* Можно выделить и скопировать, но нельзя изменить */`
      }
    ],
    relatedTopics: ['html-document-structure', 'html-accessibility-basics'],
    funFact: 'Атрибут placeholder был добавлен в HTML5 и изначально предназначался только для подсказок, но многие разработчики использовали его вместо label, что создавало проблемы с доступностью. Важно помнить: placeholder исчезает при вводе, а label остаётся всегда видимым.',
    isFrontendEssential: true
  },
  {
    id: 'html-accessibility-basics',
    title: 'Основы доступности',
    difficulty: 'beginner',
    description: 'Доступность (accessibility) обеспечивает использование сайта людьми с ограниченными возможностями. Атрибут alt для изображений описывает содержимое картинки для скринридеров. Семантическая разметка помогает скринридерам понимать структуру страницы и навигироваться по ней.',
    keyPoints: [
      'alt для изображений: описывает содержимое картинки, читается скринридерами, отображается при ошибке загрузки.',
      'Важность семантики: семантические теги помогают скринридерам понимать структуру и навигироваться.',
      'Заголовки (h1-h6): создают иерархию, скринридеры используют их для навигации по странице.',
      'Связь label и input: улучшает доступность, позволяет кликать на label для фокуса на поле.',
      'Контрастность: текст должен быть читаемым, но это больше относится к CSS.',
      'Клавиатурная навигация: элементы должны быть доступны с клавиатуры (tab, enter), но это требует правильной разметки.'
    ],
    tags: ['html', 'accessibility', 'a11y', 'semantics', 'alt', 'basics'],
    examples: [
      {
        title: 'Атрибут alt для изображений',
        code: `<!-- ХОРОШО: описательный alt -->
<img 
  src="cat.jpg" 
  alt="Рыжий кот сидит на подоконнике"
>

/* Скринридер прочитает: "Рыжий кот сидит на подоконнике" */


<!-- ПЛОХО: пустой alt для декоративных изображений -->
<img src="decoration.png" alt="">

/* Пустой alt означает, что изображение декоративное
   и не несёт важной информации */


<!-- ПЛОХО: alt отсутствует -->
<img src="photo.jpg">

/* Скринридер прочитает имя файла "photo.jpg",
   что бесполезно для пользователя */


<!-- ПЛОХО: alt дублирует окружающий текст -->
<p>Логотип компании</p>
<img src="logo.png" alt="Логотип компании">

/* Избыточно, лучше alt="" или более описательный текст */`
      },
      {
        title: 'Семантика для скринридеров',
        code: `<!-- Семантические теги помогают навигации -->
<header>
  <nav>
    <a href="/">Главная</a>
    <a href="/about">О нас</a>
  </nav>
</header>

<main>
  <article>
    <h1>Заголовок статьи</h1>
    <p>Контент</p>
  </article>
</main>

<footer>
  <p>Копирайт</p>
</footer>

/* Скринридер может:
   - Перейти к навигации (nav)
   - Перейти к основному контенту (main)
   - Перейти к статье (article)
   - Пропустить шапку и подвал */`
      },
      {
        title: 'Иерархия заголовков',
        code: `<!-- ПРАВИЛЬНО: логическая иерархия -->
<h1>Главный заголовок страницы</h1>
  <h2>Раздел 1</h2>
    <h3>Подраздел 1.1</h3>
    <h3>Подраздел 1.2</h3>
  <h2>Раздел 2</h2>
    <h3>Подраздел 2.1</h3>

/* Скринридер может перейти к любому заголовку
   и понять структуру документа */


<!-- ПЛОХО: пропуск уровней -->
<h1>Заголовок</h1>
<h3>Подзаголовок</h3>

/* Пропущен h2, структура нарушена */


<!-- ПЛОХО: использование для стилей -->
<h1>Обычный текст</h1>
<h2>Мелкий текст</h2>

/* Заголовки для структуры, не для стилей
   Используй CSS для внешнего вида */`
      },
      {
        title: 'Связь label и input для доступности',
        code: `<!-- Связь через for и id -->
<label for="email">Email:</label>
<input type="email" id="email" name="email">

/* Преимущества:
   - Клик на label фокусирует input
   - Скринридер читает label при фокусе
   - Визуально понятна связь */


<!-- Связь через обёртку -->
<label>
  Пароль:
  <input type="password" name="password">
</label>

/* Тот же результат, но без необходимости id */`
      }
    ],
    relatedTopics: ['html-semantic-markup', 'html-forms-basics', 'html-viewport'],
    funFact: 'Атрибут alt для изображений был обязательным в HTML4, но в HTML5 стал опциональным. Однако для доступности он критически важен: скринридеры читают alt, а если его нет — читают имя файла, что бесполезно для пользователя. Пустой alt (alt="") означает, что изображение декоративное.',
    isFrontendEssential: true
  },
  {
    id: 'html-viewport',
    title: 'Мета-тег viewport',
    difficulty: 'beginner',
    description: 'Мета-тег viewport настраивает отображение страницы на мобильных устройствах. Без него браузеры на мобильных могут масштабировать страницу, делая её нечитаемой. Правильная настройка viewport обеспечивает корректное отображение и адаптивность интерфейса.',
    keyPoints: [
      'Назначение: указывает браузеру, как масштабировать и отображать страницу на мобильных устройствах.',
      'Базовые значения: width=device-width (ширина по ширине экрана), initial-scale=1.0 (начальный масштаб 100%).',
      'Без viewport: браузер может показывать страницу в уменьшенном виде, требуя масштабирования.',
      'С viewport: страница отображается в натуральном размере, адаптивная вёрстка работает корректно.',
      'Размещение: должен быть в <head>, желательно сразу после <meta charset>.'
    ],
    tags: ['html', 'viewport', 'mobile', 'responsive', 'basics'],
    examples: [
      {
        title: 'Базовый viewport',
        code: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Страница</title>
</head>
<body>
  <!-- Контент -->
</body>
</html>

/* width=device-width: ширина страницы = ширина экрана
   initial-scale=1.0: начальный масштаб 100% */`
      },
      {
        title: 'Проблема без viewport',
        code: `<!-- БЕЗ viewport -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- viewport отсутствует -->
  <title>Страница</title>
</head>
<body>
  <div style="width: 980px;">
    Контент с фиксированной шириной
  </div>
</body>
</html>

/* На мобильном (320px):
   - Браузер покажет страницу в уменьшенном виде
   - Пользователю нужно масштабировать
   - Адаптивная вёрстка не работает */


<!-- С viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

/* На мобильном:
   - Страница отображается в натуральном размере
   - Адаптивная вёрстка работает
   - Пользователь видит корректный интерфейс */`
      },
      {
        title: 'Дополнительные параметры viewport',
        code: `<!-- Запрет масштабирования (не рекомендуется) -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

/* Проблемы:
   - Ухудшает доступность
   - Пользователи не могут увеличить текст
   - Нарушает рекомендации WCAG */


<!-- Рекомендуемый вариант -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

/* Позволяет масштабирование,
   но начинается с масштаба 100% */`
      }
    ],
    relatedTopics: ['html-document-structure', 'html-accessibility-basics'],
    funFact: 'Мета-тег viewport был введён Apple для iPhone в 2007 году, чтобы мобильные браузеры правильно отображали веб-страницы. До этого мобильные браузеры показывали страницы в уменьшенном виде, требуя масштабирования. Viewport стал стандартом и критически важен для адаптивной вёрстки.',
    isFrontendEssential: true
  }
];
