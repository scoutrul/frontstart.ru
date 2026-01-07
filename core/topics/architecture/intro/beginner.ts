import { Topic } from '../../../types';

export const ARCHITECTURE_INTRO_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'architecture-intro-spa-vs-mpa',
    title: 'SPA vs MPA',
    difficulty: 'beginner',
    description: 'SPA (Single Page Application) — приложение, которое загружается один раз и обновляет контент без перезагрузки страницы. MPA (Multi Page Application) — классический подход, где каждая страница загружается отдельно с сервера. SPA обеспечивает плавный пользовательский опыт, но требует больше JavaScript и сложнее в SEO. MPA проще в разработке и лучше для SEO, но создаёт ощущение "медленности" из-за перезагрузок.\n\nВыбор между SPA и MPA зависит от задач проекта: SPA подходит для интерактивных приложений (админки, дашборды), MPA — для контентных сайтов (блоги, новости). Понимание различий помогает выбрать правильную архитектуру на старте проекта.',
    keyPoints: [
      'SPA (Single Page Application): одна HTML-страница, контент обновляется через JavaScript без перезагрузки.',
      'MPA (Multi Page Application): каждая страница — отдельный HTML-документ, загружается с сервера.',
      'SPA преимущества: плавный UX, быстрые переходы, ощущение "нативного" приложения.',
      'SPA недостатки: медленная первая загрузка, сложности с SEO, больше JavaScript.',
      'MPA преимущества: быстрая первая загрузка, отличное SEO, простая разработка.',
      'MPA недостатки: перезагрузка страниц, медленные переходы, меньше интерактивности.',
      'SPA подходит для: админки, дашборды, интерактивные приложения, где важна скорость взаимодействия.',
      'MPA подходит для: блоги, новости, контентные сайты, где важна индексация поисковиками.',
      'Роль API: в SPA вся логика на фронтенде, данные приходят через API. В MPA сервер рендерит HTML.'
    ],
    tags: ['architecture', 'spa', 'mpa', 'basics', 'fundamentals', 'introduction'],
    examples: [
      {
        title: 'SPA: обновление контента без перезагрузки',
        code: `// SPA использует JavaScript для обновления контента
// HTML загружается один раз

// index.html (загружается один раз)
<!DOCTYPE html>
<html>
<head>
  <title>SPA App</title>
</head>
<body>
  <div id="app"></div>
  <script src="app.js"></script>
</body>
</html>

// app.js
function showPage(page) {
  // Обновляем контент без перезагрузки
  document.getElementById('app').innerHTML = \`<h1>\${page}</h1>\`;
  
  // Меняем URL без перезагрузки (History API)
  history.pushState({}, '', \`/\${page}\`);
}

// Пользователь кликает по ссылке
// → Контент обновляется мгновенно
// → URL меняется
// → Страница НЕ перезагружается`
      },
      {
        title: 'MPA: каждая страница — отдельный HTML',
        code: `// MPA: каждая страница — отдельный файл

// index.html
<!DOCTYPE html>
<html>
<head>
  <title>Главная</title>
</head>
<body>
  <h1>Главная страница</h1>
  <a href="/about.html">О нас</a>
</body>
</html>

// about.html
<!DOCTYPE html>
<html>
<head>
  <title>О нас</title>
</head>
<body>
  <h1>О нас</h1>
  <a href="/index.html">Главная</a>
</body>
</html>

// Пользователь кликает по ссылке
// → Браузер запрашивает новый HTML с сервера
// → Вся страница перезагружается
// → Видно "белый экран" во время загрузки`
      },
      {
        title: 'Сравнение: навигация в SPA и MPA',
        code: `// SPA: навигация через JavaScript
function navigate(path) {
  // 1. Загружаем данные через API
  fetch(\`/api\${path}\`)
    .then(res => res.json())
    .then(data => {
      // 2. Обновляем DOM
      renderPage(data);
      // 3. Меняем URL
      history.pushState({}, '', path);
    });
}

// Переход мгновенный, без перезагрузки


// MPA: навигация через ссылки
<a href="/about.html">О нас</a>

// При клике:
// 1. Браузер запрашивает /about.html
// 2. Сервер возвращает готовый HTML
// 3. Браузер перезагружает страницу
// 4. Пользователь видит новую страницу

// Переход с перезагрузкой, видно "белый экран"`
      }
    ],
    relatedTopics: ['architecture-intro-history-mvc-spa', 'architecture-intro-api-role'],
    funFact: 'Первое SPA было создано в 2003 году компанией Google — это был Gmail. До этого все считали, что веб-приложения не могут конкурировать с десктопными по удобству. Gmail доказал, что веб может быть таким же быстрым и удобным, как нативное приложение.'
  },
  {
    id: 'architecture-intro-api-role',
    title: 'Роль API',
    difficulty: 'beginner',
    description: 'API (Application Programming Interface) — интерфейс для обмена данными между фронтендом и бэкендом. В SPA API становится основным способом получения данных: фронтенд запрашивает данные через HTTP, бэкенд возвращает JSON. API разделяет ответственность: фронтенд отвечает за интерфейс, бэкенд — за бизнес-логику и данные.\n\nПонимание роли API критично для архитектуры: фронтенд становится "тонким клиентом", который только отображает данные и отправляет действия пользователя. Бэкенд обрабатывает запросы, работает с базой данных и возвращает готовые данные. Такое разделение позволяет независимо развивать фронтенд и бэкенд.',
    keyPoints: [
      'API (Application Programming Interface): интерфейс для обмена данными между приложениями.',
      'В SPA API — основной способ получения данных: фронтенд запрашивает, бэкенд возвращает JSON.',
      'Разделение ответственности: фронтенд — интерфейс, бэкенд — бизнес-логика и данные.',
      'REST API: стандартный подход, использует HTTP-методы (GET, POST, PUT, DELETE).',
      'JSON формат: легковесный формат обмена данными, читаемый и для человека, и для машины.',
      'Преимущества API: независимая разработка фронтенда и бэкенда, переиспользование API для разных клиентов.',
      'Недостатки API: больше запросов, сложнее кэширование, нужна обработка ошибок сети.',
      'Для Junior: понимать, что API — это способ получить данные, не нужно знать все детали реализации.'
    ],
    tags: ['architecture', 'api', 'rest', 'basics', 'fundamentals', 'introduction'],
    examples: [
      {
        title: 'Запрос данных через API',
        code: `// Фронтенд запрашивает данные через API

// 1. Запрос к API
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => {
    // 2. Получаем данные в формате JSON
    console.log(data);
    // [{ id: 1, name: 'Иван' }, { id: 2, name: 'Мария' }]
    
    // 3. Отображаем данные в интерфейсе
    renderUsers(data);
  })
  .catch(error => {
    // 4. Обрабатываем ошибки
    console.error('Ошибка загрузки:', error);
  });`
      },
      {
        title: 'Отправка данных через API',
        code: `// Отправка данных на сервер через API

function createUser(userData) {
  fetch('https://api.example.com/users', {
    method: 'POST', // HTTP-метод для создания
    headers: {
      'Content-Type': 'application/json' // Указываем формат JSON
    },
    body: JSON.stringify(userData) // Преобразуем объект в JSON
  })
    .then(response => response.json())
    .then(data => {
      console.log('Пользователь создан:', data);
    });
}

// Использование
createUser({
  name: 'Иван',
  email: 'ivan@example.com'
});

// Сервер получает JSON, обрабатывает и возвращает результат`
      },
      {
        title: 'Разница: MPA vs SPA с API',
        code: `// MPA: сервер возвращает готовый HTML
// GET /users
// → Сервер: читает данные из БД, рендерит HTML, возвращает
// → Браузер: показывает готовую страницу

// SPA: сервер возвращает только данные (JSON)
// GET /api/users
// → Сервер: читает данные из БД, возвращает JSON
// → Браузер: получает JSON, JavaScript рендерит интерфейс

// В SPA вся логика отображения на фронтенде
// В MPA логика отображения на сервере`
      }
    ],
    relatedTopics: ['architecture-intro-spa-vs-mpa', 'architecture-data-layer-basics'],
    funFact: 'Термин "AJAX" (Asynchronous JavaScript and XML) был придуман в 2005 году, но сама технология использовалась в Outlook Web Access ещё в 1998 году. Microsoft создала XMLHttpRequest для Outlook Web Access, и этот API стал основой всех современных SPA, хотя изначально был проприетарной технологией.',
    isFrontendEssential: true
  }
];
