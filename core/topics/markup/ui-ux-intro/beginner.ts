import { Topic } from '../../../types';

export const UI_UX_INTRO_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'ui-ux-intro-what-is-ui-ux',
    title: 'UI и UX: понятия и различия',
    difficulty: 'beginner',
    description: 'UI (User Interface) — визуальная часть интерфейса: кнопки, формы, цвета, типографика. UX (User Experience) — весь опыт взаимодействия пользователя с продуктом: от первого клика до достижения цели. UI отвечает на вопрос "Как это выглядит?", UX — "Как это работает и ощущается?".',
    keyPoints: [
      'UI (User Interface): визуальная часть — кнопки, формы, цвета, типографика, расположение элементов.',
      'UX (User Experience): весь опыт взаимодействия — удобство, логика, эмоции, достижение целей пользователя.',
      'UI ≠ UX: красивый интерфейс может иметь плохой UX, простой UI может иметь отличный UX.',
      'Связь: UI — часть UX, но UX включает также логику, производительность, доступность, контент.',
      'Заблуждения: UX — не только "красиво", UI — не только "дизайн", оба требуют инженерного подхода.',
      'Для фронтендера: UI — что реализуешь визуально, UX — как это работает в целом.'
    ],
    tags: ['ui', 'ux', 'basics', 'introduction', 'design', 'interface', 'frontend', 'fundamentals'],
    examples: [
      {
        title: 'UI: визуальные элементы',
        code: `/* UI — это визуальное представление */
.button {
  background: #007bff;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
}

/* UI определяет: цвет, размер, форму, типографику */`
      },
      {
        title: 'UX: опыт взаимодействия',
        code: `// UX — это не код, а логика работы

// Плохой UX:
// - Кнопка красивая, но неочевидно, что она кликабельна
// - Форма красивая, но валидация появляется только после отправки
// - Страница красивая, но загружается 5 секунд

// Хороший UX:
// - Кнопка визуально привлекает внимание и понятна
// - Форма показывает ошибки сразу при вводе
// - Страница загружается быстро, показывает прогресс`
      },
      {
        title: 'UI и UX работают вместе',
        code: `/* UI: визуальная обратная связь */
.button {
  transition: background 0.2s;
}

.button:hover {
  background: #0056b3; /* Пользователь видит, что кнопка интерактивна */
}

.button:active {
  transform: scale(0.98); /* Тактильная обратная связь */
}

/* Это улучшает UX: пользователь понимает, что происходит */`
      }
    ],
    relatedTopics: ['ui-ux-intro-frontend-role', 'ui-ux-intro-approaches'],
    funFact: 'Исторический курьёз: тег <blink> был создан для мигающего текста и возненавиден всем миром (кроме создателей GeoCities). Тег <marquee> для бегущей строки также стал символом "плохого" веб-дизайна 90-х. Оба тега устарели и не поддерживаются в HTML5.'
  },
  {
    id: 'ui-ux-intro-frontend-role',
    title: 'Роль фронтендера в UI/UX',
    difficulty: 'beginner',
    description: 'Фронтенд-разработчик — связующее звено между дизайном, логикой и пользователем. Он превращает макеты в работающий интерфейс, учитывая производительность, доступность и пользовательский опыт. На разных уровнях ожидания различаются: Junior реализует по макету, Senior влияет на UX-решения.',
    keyPoints: [
      'Граница дизайна и фронтенда: дизайнер создаёт макет, фронтендер делает его интерактивным и живым.',
      'Связующее звено: фронтендер соединяет дизайн (визуал), логику (бизнес-правила) и пользователя (опыт).',
      'Junior: реализует макеты точно, следует гайдлайнам, учится основам UI/UX.',
      'Middle: предлагает улучшения UX, оптимизирует производительность, учитывает доступность.',
      'Senior: влияет на UX-решения, проектирует компоненты, думает о масштабируемости и архитектуре.',
      'Фронтендер — не "верстальщик", а инженер пользовательского интерфейса, который создаёт системы, а не страницы.'
    ],
    tags: ['ui', 'ux', 'frontend', 'role', 'career', 'engineering', 'basics', 'introduction'],
    examples: [
      {
        title: 'От макета к коду',
        code: `/* Дизайнер даёт макет */
/* Фронтендер думает: */

// 1. Структура HTML
<button class="primary-button">
  Отправить
</button>

// 2. Стили CSS
.primary-button {
  /* Реализует визуал из макета */
  background: #007bff;
  padding: 12px 24px;
}

// 3. Интерактивность JavaScript
button.addEventListener('click', () => {
  // Добавляет логику, которой нет в макете
  submitForm();
  showFeedback();
});

// 4. UX-улучшения
button.addEventListener('click', () => {
  button.disabled = true; // Предотвращает двойную отправку
  button.textContent = 'Отправляется...'; // Обратная связь
});`
      },
      {
        title: 'Влияние на UX',
        code: `// Junior: реализует как в макете
function Button() {
  return <button>Клик</button>;
}

// Middle: добавляет UX-улучшения
function Button() {
  const [loading, setLoading] = useState(false);
  return (
    <button 
      disabled={loading}
      onClick={handleClick}
    >
      {loading ? 'Загрузка...' : 'Клик'}
    </button>
  );
}

// Senior: проектирует систему
function Button({ 
  variant, 
  loading, 
  feedback,
  accessibility 
}) {
  // Думает о переиспользовании, доступности, тестируемости
  return <ButtonSystem {...props} />;
}`
      }
    ],
    relatedTopics: ['ui-ux-intro-what-is-ui-ux', 'ui-ux-intro-browser-rendering', 'ui-ux-intro-tools'],
    funFact: 'Войны браузеров: IE6 доминировал рынок и принёс нестандартные фичи вроде innerHTML, которые потом стали стандартом. Браузерные префиксы (-webkit-, -moz-) до сих пор живуч, и автопрефиксер спас фронтенд-разработчиков от сумасшествия ручного добавления префиксов.'
  },
  {
    id: 'ui-ux-intro-browser-rendering',
    title: 'Браузер: код в интерфейс',
    difficulty: 'beginner',
    description: 'Браузер превращает HTML, CSS и JavaScript в визуальный интерфейс. HTML задаёт структуру страницы, CSS описывает внешний вид элементов, JavaScript добавляет интерактивность. Понимание этого процесса помогает создавать эффективные интерфейсы и диагностировать проблемы производительности.',
    keyPoints: [
      'HTML как структура: браузер парсит HTML и строит DOM-дерево — модель элементов страницы.',
      'CSS как внешний вид: браузер применяет стили к элементам, определяя размеры, цвета, расположение.',
      'JavaScript как интерактивность: браузер выполняет JS для обработки событий, изменения DOM, работы с данными.',
      'Браузер как среда исполнения: он интерпретирует код, управляет памятью, обрабатывает события, рендерит на экран.',
      'Важность понимания: знание процесса помогает оптимизировать загрузку, избегать проблем с производительностью, правильно структурировать код.',
      'Без углубления: на этом уровне достаточно понимать общий поток, детали (rendering pipeline, event loop) — в продвинутых темах.'
    ],
    tags: ['browser', 'html', 'css', 'javascript', 'rendering', 'dom', 'basics', 'fundamentals', 'introduction'],
    examples: [
      {
        title: 'HTML создаёт структуру',
        code: `<!-- HTML описывает структуру -->
<html>
  <head>
    <title>Страница</title>
  </head>
  <body>
    <header>
      <h1>Заголовок</h1>
    </header>
    <main>
      <p>Контент</p>
    </main>
  </body>
</html>

/* Браузер строит DOM-дерево:
   html
   ├── head
   │   └── title
   └── body
       ├── header
       │   └── h1
       └── main
           └── p */`
      },
      {
        title: 'CSS описывает внешний вид',
        code: `/* CSS определяет, как элементы выглядят */
h1 {
  color: #333;
  font-size: 32px;
  margin: 20px 0;
}

p {
  color: #666;
  line-height: 1.6;
}

/* Браузер применяет стили к элементам DOM
   и вычисляет финальный вид каждого элемента */`
      },
      {
        title: 'JavaScript добавляет интерактивность',
        code: `// JavaScript делает интерфейс живым
const button = document.querySelector('button');

button.addEventListener('click', () => {
  // Изменяет DOM
  const message = document.createElement('p');
  message.textContent = 'Кнопка нажата!';
  document.body.appendChild(message);
  
  // Меняет стили
  button.style.backgroundColor = 'green';
  
  // Работает с данными
  fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log(data));
});

/* Браузер:
   1. Отслеживает события (клики, ввод)
   2. Выполняет JavaScript-код
   3. Обновляет DOM и стили
   4. Перерисовывает интерфейс */`
      },
      {
        title: 'Процесс от кода к интерфейсу',
        code: `// 1. Браузер загружает HTML
//    ↓
// 2. Парсит HTML → строит DOM
//    ↓
// 3. Загружает CSS
//    ↓
// 4. Применяет стили → вычисляет layout
//    ↓
// 5. Рисует элементы на экране (paint)
//    ↓
// 6. Загружает и выполняет JavaScript
//    ↓
// 7. JavaScript может изменить DOM/CSS
//    ↓
// 8. Браузер перерисовывает изменения

/* Это упрощённый процесс.
   Детали (rendering pipeline, event loop) — в продвинутых темах */`
      }
    ],
    relatedTopics: ['ui-ux-intro-frontend-role', 'ui-ux-intro-approaches', 'ui-ux-intro-tools'],
    additionalDescription: 'Понимание процесса рендеринга помогает не только оптимизировать производительность, но и диагностировать проблемы. Когда интерфейс "тормозит", знание этапов рендеринга позволяет быстро найти причину: это reflow, repaint или проблема с composite?'
  },
  {
    id: 'ui-ux-intro-approaches',
    title: 'Подходы к созданию интерфейсов',
    difficulty: 'beginner',
    description: 'Создание интерфейсов эволюционировало от статической вёрстки к компонентному мышлению. Современные подходы включают адаптивный и отзывчивый дизайн, Progressive Enhancement и компонентную архитектуру. UI — это система решений, а не просто набор стилей.',
    keyPoints: [
      'Статическая вёрстка → компонентный UI: от отдельных страниц к переиспользуемым компонентам.',
      'Адаптивный дизайн: интерфейс подстраивается под размер экрана через media queries и гибкие единицы.',
      'Отзывчивый дизайн: интерфейс реагирует на действия пользователя, обеспечивая обратную связь.',
      'Progressive Enhancement: базовая функциональность работает везде, улучшения добавляются для современных браузеров.',
      'Компонентное мышление: интерфейс состоит из независимых, переиспользуемых частей (кнопки, формы, карточки).',
      'UI как система: не набор стилей, а продуманная архитектура с правилами, паттернами и соглашениями.'
    ],
    tags: ['ui', 'components', 'responsive', 'adaptive', 'progressive-enhancement', 'architecture', 'basics', 'introduction'],
    examples: [
      {
        title: 'От статики к компонентам',
        code: `/* СТАТИЧЕСКАЯ ВЁРСТКА (старый подход) */
/* Каждая страница — отдельный HTML/CSS */

/* page1.html */
<button class="btn-primary">Кнопка 1</button>

/* page2.html */
<button class="btn-primary">Кнопка 2</button>

/* Проблема: дублирование, сложно поддерживать */


/* КОМПОНЕНТНЫЙ ПОДХОД (современный) */
/* Переиспользуемый компонент */

function Button({ children, variant = 'primary' }) {
  return (
    <button className={\`btn-\${variant}\`}>
      {children}
    </button>
  );
}

// Использование:
<Button>Кнопка 1</Button>
<Button>Кнопка 2</Button>

/* Преимущество: один компонент, везде одинаковый */`
      },
      {
        title: 'Адаптивный дизайн',
        code: `/* Адаптивный дизайн через media queries */
.container {
  width: 100%;
  padding: 20px;
}

/* Планшет */
@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
  }
}

/* Десктоп */
@media (min-width: 1024px) {
  .container {
    width: 1200px;
  }
}

/* Интерфейс подстраивается под размер экрана */`
      },
      {
        title: 'Progressive Enhancement',
        code: `/* БАЗОВАЯ ФУНКЦИОНАЛЬНОСТЬ (работает везде) */
<form action="/submit" method="POST">
  <input type="text" name="email" required>
  <button type="submit">Отправить</button>
</form>

/* УЛУЧШЕНИЯ (для современных браузеров) */
<form onSubmit={handleSubmit}>
  <input 
    type="email" 
    onChange={validateEmail}
    className={errors.email ? 'error' : ''}
  />
  <button type="submit" disabled={!isValid}>
    Отправить
  </button>
</form>

/* Базовая форма работает без JavaScript,
   улучшения добавляют валидацию и UX */`
      },
      {
        title: 'Компонентное мышление',
        code: `/* Вместо монолитной страницы — система компонентов */

// Компонент кнопки
function Button({ children, onClick, variant }) {
  return (
    <button 
      className={\`button button-\${variant}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Компонент формы
function Form({ onSubmit, children }) {
  return <form onSubmit={onSubmit}>{children}</form>;
}

// Компонент карточки
function Card({ title, content }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

// Сборка интерфейса из компонентов
function Page() {
  return (
    <Form onSubmit={handleSubmit}>
      <Card title="Заголовок" content="Текст" />
      <Button variant="primary">Отправить</Button>
    </Form>
  );
}

/* Каждый компонент — независимая, переиспользуемая часть */`
      }
    ],
    relatedTopics: ['ui-ux-intro-browser-rendering', 'ui-ux-intro-history', 'ui-ux-intro-tools'],
    funFact: 'Эпоха "пиксельперфекта" требовала точного соответствия макету в IE6, что привело к появлению условных комментариев (<!--[if IE 6]>...<![endif]-->) для исправления багов браузера. Современные инструменты и стандарты избавили от необходимости таких хаков.'
  },
  {
    id: 'ui-ux-intro-tools',
    title: 'Инструменты UI/UX во фронтенде',
    difficulty: 'beginner',
    description: 'Основные инструменты фронтенд-разработчика для работы с UI/UX: браузер и DevTools для отладки, макеты (Figma) как источник дизайна, CSS как основной инструмент стилизации, фреймворки как надстройка. Понимание иерархии инструментов помогает выбирать правильные решения.',
    keyPoints: [
      'Браузер и DevTools — главный инструмент: здесь видишь результат, отлаживаешь, тестируешь производительность.',
      'Макеты (Figma): источник дизайна, но не инструкция — фронтендер интерпретирует и адаптирует под код.',
      'CSS как основной инструмент UI: фреймворки и библиотеки — надстройки, основа — нативный CSS.',
      'Фреймворки — надстройка, не основа: React, Vue помогают структурировать код, но не заменяют знание CSS/HTML.',
      'Инструменты для прототипирования: CodePen, JSFiddle для быстрого тестирования идей.',
      'Важность понимания основ: знание CSS важнее знания фреймворка, браузер важнее IDE.'
    ],
    tags: ['tools', 'browser', 'devtools', 'css', 'figma', 'frameworks', 'basics', 'introduction'],
    examples: [
      {
        title: 'Браузер и DevTools',
        code: `/* Браузер — главный инструмент */

// 1. Просмотр результата
// Открываешь страницу → видишь, как выглядит

// 2. DevTools для отладки
// F12 → Elements: смотришь DOM и стили
// F12 → Console: проверяешь JavaScript
// F12 → Network: анализируешь загрузку
// F12 → Performance: измеряешь производительность

// 3. Инспектор элементов
// Правый клик → Inspect → видишь CSS, изменяешь в реальном времени

/* Браузер показывает правду, IDE — только код */`
      },
      {
        title: 'CSS как основа',
        code: `/* CSS — основной инструмент UI */

/* Нативный CSS (основа) */
.button {
  background: #007bff;
  padding: 12px 24px;
  border-radius: 4px;
}

/* CSS-фреймворки (надстройка) */
/* Bootstrap, Tailwind упрощают, но основа — CSS */

/* Tailwind использует CSS под капотом */
<button class="bg-blue-500 px-6 py-3 rounded">
  Кнопка
</button>

/* Компилируется в обычный CSS */
.button {
  background-color: #3b82f6;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
}

/* Знание CSS важно, даже если используешь фреймворк */`
      },
      {
        title: 'Фреймворки как надстройка',
        code: `/* React, Vue, Svelte — надстройки над HTML/CSS/JS */

// React компонент
function Button() {
  return (
    <button className="primary-button">
      Клик
    </button>
  );
}

/* Под капотом React:
   1. Создаёт HTML элемент <button>
   2. Применяет CSS класс "primary-button"
   3. Добавляет JavaScript обработчики

/* Фреймворк помогает структурировать код,
   но не заменяет знание основ HTML/CSS/JS */`
      },
      {
        title: 'Макеты как источник дизайна',
        code: `/* Figma макет показывает:
   - Размеры элементов
   - Цвета
   - Отступы
   - Типографику
   - Состояния (hover, active)

/* Фронтендер интерпретирует:
   1. Извлекает значения (цвета, размеры)
   2. Адаптирует под код (px → rem, фиксированные → гибкие)
   3. Добавляет интерактивность (которой нет в статичном макете)
   4. Оптимизирует для производительности

/* Макет — не инструкция, а источник вдохновения */`
      }
    ],
    relatedTopics: ['ui-ux-intro-browser-rendering', 'ui-ux-intro-approaches', 'ui-ux-intro-section-structure'],
    funFact: 'Figma была запущена в 2016 году и быстро стала стандартом для дизайна интерфейсов, заменив Sketch и Adobe XD. Ключевое преимущество — веб-версия и совместная работа в реальном времени. Интересно, что многие дизайнеры используют Figma не только для макетов, но и для прототипирования и дизайн-систем.'
  },
  {
    id: 'ui-ux-intro-history',
    title: 'История UI/UX и вёрстки',
    difficulty: 'beginner',
    description: 'Вёрстка прошла путь от табличной вёрстки через появление CSS к современным Flexbox и Grid. Mobile-first подход и Design Systems стали стандартом. Понимание истории объясняет, почему старые подходы считаются устаревшими и как эволюционировали практики создания интерфейсов.',
    keyPoints: [
      'Табличная вёрстка: использование <table> для расположения элементов, семантически неверно, сложно поддерживать.',
      'Появление CSS: разделение структуры и стилей, каскадность, специфичность, но layout всё ещё сложный.',
      'Flexbox: одномерная раскладка (строка или колонка), упростила выравнивание и распределение пространства.',
      'Grid: двумерная раскладка (строки и колонки), мощный инструмент для сложных макетов.',
      'Mobile-first: подход "сначала мобильные, потом десктоп", ответ на рост мобильного трафика.',
      'Design Systems: системы компонентов и правил, обеспечивающие консистентность и масштабируемость интерфейсов.'
    ],
    tags: ['history', 'css', 'flexbox', 'grid', 'responsive', 'design-systems', 'basics', 'introduction'],
    examples: [
      {
        title: 'Табличная вёрстка (устаревший подход)',
        code: `<!-- Табличная вёрстка использовала <table> для layout -->
<table>
  <tr>
    <td>Шапка</td>
  </tr>
  <tr>
    <td>Контент</td>
    <td>Сайдбар</td>
  </tr>
  <tr>
    <td>Подвал</td>
  </tr>
</table>

/* Проблемы:
   - Семантически неверно (<table> не для layout)
   - Сложно поддерживать
   - Плохая доступность
   - Не адаптивно */`
      },
      {
        title: 'CSS и появление layout-техник',
        code: `/* С появлением CSS появились новые техники */

/* Float (раньше) */
.left {
  float: left;
  width: 50%;
}

.right {
  float: right;
  width: 50%;
}

/* Проблемы: сложно, нужны clearfix, не гибко */

/* Flexbox (современно) */
.container {
  display: flex;
  justify-content: space-between;
}

/* Проще, гибче, понятнее */`
      },
      {
        title: 'Flexbox и Grid',
        code: `/* Flexbox (2012+) — одномерная раскладка */
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

/* Grid (2017+) — двумерная раскладка */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

/* Эти технологии революционизировали вёрстку */`
      },
      {
        title: 'Mobile-first подход',
        code: `/* СТАРЫЙ ПОДХОД: Desktop-first */
.container {
  width: 1200px; /* Для десктопа */
}

@media (max-width: 768px) {
  .container {
    width: 100%; /* Адаптация для мобильных */
  }
}

/* ПРОБЛЕМА: мобильные получают лишний код */


/* СОВРЕМЕННЫЙ ПОДХОД: Mobile-first */
.container {
  width: 100%; /* Сначала мобильные */
  padding: 10px;
}

@media (min-width: 768px) {
  .container {
    width: 750px; /* Расширение для планшетов */
    padding: 20px;
  }
}

@media (min-width: 1024px) {
  .container {
    width: 1200px; /* Расширение для десктопа */
  }
}

/* ПРЕИМУЩЕСТВО: мобильные получают только нужный код */`
      },
      {
        title: 'Design Systems',
        code: `/* Design System — система компонентов и правил */

// Компоненты
const Button = {
  primary: { bg: '#007bff', color: 'white' },
  secondary: { bg: '#6c757d', color: 'white' }
};

const Typography = {
  h1: { size: '32px', weight: 'bold' },
  h2: { size: '24px', weight: 'bold' }
};

// Правила использования
// - Кнопки: primary для главных действий, secondary для второстепенных
// - Типографика: h1 для заголовков страниц, h2 для секций

/* Обеспечивает консистентность и масштабируемость */`
      }
    ],
    relatedTopics: ['ui-ux-intro-approaches', 'ui-ux-intro-tools', 'ui-ux-intro-section-structure'],
    funFact: 'Design Systems стали популярны после выхода Material Design от Google в 2014 году. Они решают проблему консистентности в больших командах: единые компоненты, правила использования, токены дизайна. Интересно, что многие компании публикуют свои Design Systems в открытом доступе (например, Material Design, Ant Design, Carbon Design System).'
  },
  {
    id: 'ui-ux-intro-section-structure',
    title: 'Структура раздела верстки',
    difficulty: 'beginner',
    description: 'Раздел верстки организован по принципу от общего к частному: введение в UI/UX, затем HTML, CSS, Layout, доступность, производительность. Уровни сложности (beginner, intermediate, advanced) соответствуют требованиям собеседований. Материалы можно использовать для систематической подготовки и точечного изучения тем.',
    keyPoints: [
      'Структура раздела: Введение → HTML → CSS → Layout → Accessibility → Performance → UX-практики.',
      'Связи между темами: HTML создаёт структуру, CSS стилизует, Layout организует расположение, Accessibility обеспечивает доступность, Performance оптимизирует скорость.',
      'Уровни сложности: beginner — основы для всех, intermediate — для Middle, advanced — для Senior позиций.',
      'Соответствие собеседованиям: beginner покрывает базовые вопросы, intermediate — практические задачи, advanced — архитектурные решения.',
      'Использование материалов: можно читать последовательно для систематической подготовки или выборочно для изучения конкретных тем.',
      'Следующие шаги: после введения изучай HTML и CSS, затем переходи к Layout и продвинутым темам.'
    ],
    tags: ['structure', 'learning-path', 'basics', 'introduction', 'guide'],
    examples: [
      {
        title: 'Структура раздела',
        code: `/* РАЗДЕЛ: ВЕРСТКА */

// 0. ВВЕДЕНИЕ (текущий раздел)
//    - UI/UX понятия
//    - Роль фронтендера
//    - Браузер и код
//    - Подходы к интерфейсам
//    - Инструменты
//    - История
//    - Структура раздела

// 1. HTML
//    - Семантика
//    - Формы
//    - Мета-теги
//    - Доступность

// 2. CSS
//    - Селекторы и специфичность
//    - Каскадность
//    - Переменные
//    - Анимации

// 3. LAYOUT
//    - Flexbox
//    - Grid
//    - Позиционирование
//    - Адаптивность

// 4. ACCESSIBILITY
//    - ARIA
//    - Семантика
//    - Клавиатурная навигация

// 5. PERFORMANCE
//    - Оптимизация CSS
//    - Critical CSS
//    - Ленивая загрузка

// 6. UX-ПРАКТИКИ
//    - Обратная связь
//    - Загрузочные состояния
//    - Ошибки и валидация`
      },
      {
        title: 'Уровни сложности',
        code: `/* BEGINNER (Junior) */
// - Основы HTML/CSS
// - Базовые селекторы
// - Простая вёрстка
// - Понимание браузера

/* INTERMEDIATE (Middle) */
// - Сложные селекторы
// - Flexbox/Grid
// - Адаптивная вёрстка
// - Оптимизация

/* ADVANCED (Senior) */
// - Архитектура CSS
// - Design Systems
// - Производительность
// - Доступность на уровне системы`
      },
      {
        title: 'Связи между темами',
        code: `/* HTML создаёт структуру */
<article>
  <h1>Заголовок</h1>
  <p>Текст</p>
</article>

/* CSS стилизует */
article {
  max-width: 800px;
  margin: 0 auto;
}

/* Layout организует расположение */
.container {
  display: grid;
  grid-template-columns: 1fr 300px;
}

/* Accessibility обеспечивает доступность */
<article role="article" aria-labelledby="title">
  <h1 id="title">Заголовок</h1>
</article>

/* Performance оптимизирует */
/* Critical CSS inline, остальное асинхронно */

/* Все темы работают вместе */`
      },
      {
        title: 'Как использовать материалы',
        code: `/* ВАРИАНТ 1: Последовательное изучение */
// Читай темы по порядку, от beginner к advanced
// Подходит для систематической подготовки

/* ВАРИАНТ 2: Выборочное изучение */
// Изучай конкретные темы по необходимости
// Подходит для точечного изучения

/* ВАРИАНТ 3: Подготовка к собеседованию */
// Сфокусируйся на уровне своей позиции
// Junior → beginner, Middle → intermediate, Senior → advanced

/* ВАРИАНТ 4: Практика */
// Читай тему → делай упражнение → проверяй результат
// Подходит для закрепления знаний`
      }
    ],
    relatedTopics: ['ui-ux-intro-what-is-ui-ux', 'ui-ux-intro-frontend-role', 'ui-ux-intro-history'],
    funFact: 'Структурированное обучение верстке важно, потому что технологии развиваются быстро, но основы остаются. Понимание истории (табличная вёрстка → CSS → Flexbox → Grid) помогает понять, почему всё устроено именно так. Знание основ позволяет быстро осваивать новые инструменты и подходы.'
  }
];
