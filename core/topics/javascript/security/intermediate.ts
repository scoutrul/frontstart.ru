import { Topic } from '../../../types';

export const JS_SECURITY_INTERMEDIATE_TOPICS: Topic[] = [
{
    id: 'xss',
    title: 'XSS (Cross-Site Scripting)',
    difficulty: 'intermediate',
    description: 'XSS — уязвимость, когда злоумышленник внедряет вредоносный JavaScript код на страницу. Типы: Reflected (отражается в ответе), Stored (сохраняется на сервере), DOM-based (в браузере). Защита: экранирование HTML (escaping), использование textContent вместо innerHTML, Content Security Policy (CSP), валидация и санитизация входных данных.',
    keyPoints: [
      'XSS: внедрение вредоносного JavaScript кода.',
      'Reflected XSS: код в URL или параметрах, отражается в ответе.',
      'Stored XSS: код сохраняется на сервере (БД, комментарии).',
      'DOM-based XSS: код выполняется в браузере без отправки на сервер.',
      'Защита: экранирование, textContent, CSP, валидация.',
      'Опасность: кража cookies, сессий, перенаправление на фишинговые сайты.'
    ],
    tags: ['security', 'xss', 'browser', 'safety'],
    examples: [
      {
        title: "Reflected XSS пример",
        code: `// Уязвимый код\nconst name = new URLSearchParams(window.location.search).get('name');\ndocument.getElementById('greeting').innerHTML = 'Hello, ' + name;\n\n// Атака: ?name=<script>alert('XSS')</script>\n// Код выполнится\n\n// Защита: экранирование\nfunction escapeHtml(text) {\n  const div = document.createElement('div');\n  div.textContent = text;\n  return div.innerHTML;\n}\n\ndocument.getElementById('greeting').innerHTML = 'Hello, ' + escapeHtml(name);\n\n// Или лучше: textContent\nconst element = document.getElementById('greeting');\nelement.textContent = 'Hello, ' + name;`
      },
      {
        title: "Stored XSS пример",
        code: `// Уязвимый код: комментарии сохраняются в БД\nfunction displayComment(comment) {\n  document.getElementById('comments').innerHTML += comment;\n}\n\n// Атака: комментарий содержит <script>...</script>\n// Код выполнится для всех пользователей\n\n// Защита: санитизация\nfunction sanitizeHtml(html) {\n  const div = document.createElement('div');\n  div.textContent = html;\n  return div.innerHTML;\n}\n\ndisplayComment(sanitizeHtml(comment));`
      },
      {
        title: "DOM-based XSS",
        code: `// Уязвимый код\nconst hash = window.location.hash.slice(1);\neval(hash); // ОПАСНО!\n\n// Атака: #alert('XSS')\n\n// Защита: не использовать eval, опасные функции\neval = null; // отключить eval\n\n// Использовать безопасные методы\nconst data = JSON.parse(hash); // если нужен JSON`
      },
      {
        title: "Content Security Policy (CSP)",
        code: `// В HTTP заголовках или meta теге\n// Content-Security-Policy: default-src 'self'; script-src 'self'\n\n// Запрещает выполнение inline скриптов\n// Запрещает eval()\n// Разрешает загрузку скриптов только с того же домена\n\n// Пример meta тега\n<meta http-equiv="Content-Security-Policy" \n      content="default-src 'self'; script-src 'self'">`
      }
    ],
    relatedTopics: ['dom-api', 'security', 'cookies'],
    isFrontendEssential: true
  },
{
    id: 'same-origin-policy',
    title: 'Same-Origin Policy',
    difficulty: 'intermediate',
    description: 'Same-Origin Policy ограничивает доступ скриптов к ресурсам другого домена. Origin определяется протоколом, доменом и портом. Одинаковый origin: протокол + домен + порт совпадают. CORS позволяет обойти это ограничение с разрешения сервера. Используется для защиты от XSS и CSRF атак.',
    keyPoints: [
      'Origin: протокол + домен + порт (например: https://example.com:443).',
      'Same-origin: все три компонента совпадают.',
      'Разные origin: разные протоколы, домены или порты.',
      'Ограничения: чтение cookies, localStorage, выполнение скриптов, AJAX запросы.',
      'CORS: механизм для разрешения cross-origin запросов.',
      'Защита: предотвращает доступ злонамеренных скриптов к данным.'
    ],
    tags: ['security', 'cors', 'browser', 'same-origin'],
    examples: [
      {
        title: "Определение origin",
        code: `// Одинаковый origin\nhttps://example.com/page1\nhttps://example.com/page2\n// ✅ Одинаковый (протокол, домен, порт совпадают)\n\n// Разный origin\nhttps://example.com\nhttp://example.com\n// ❌ Разный (протокол)\n\nhttps://example.com\nhttps://subdomain.example.com\n// ❌ Разный (домен)\n\nhttps://example.com\nhttps://example.com:8080\n// ❌ Разный (порт)`
      },
      {
        title: "Ограничения same-origin",
        code: `// Чтение cookies\n// document.cookie читает только cookies своего домена\n\n// localStorage/sessionStorage\n// Доступ только к своему origin\n\n// AJAX запросы\nfetch('https://other-domain.com/api')\n  .catch(err => {\n    // CORS error если сервер не разрешил\n  });\n\n// Чтение iframe\n// Нельзя читать содержимое iframe другого origin`
      },
      {
        title: "CORS обходит same-origin",
        code: `// Запрос к другому домену\nfetch('https://api.example.com/data', {\n  method: 'GET',\n  headers: {\n    'Content-Type': 'application/json'\n  }\n})\n  .then(res => res.json())\n  .then(console.log);\n\n// Сервер должен вернуть:\n// Access-Control-Allow-Origin: *\n// или\n// Access-Control-Allow-Origin: https://yourdomain.com`
      },
      {
        title: "Проверка origin",
        code: `// Получить текущий origin\nconst origin = window.location.origin;\nconsole.log(origin); // "https://example.com:443"\n\n// Проверить совпадение\nfunction isSameOrigin(url) {\n  const a = document.createElement('a');\n  a.href = url;\n  return a.origin === window.location.origin;\n}\n\nconsole.log(isSameOrigin('https://example.com/page')); // true\nconsole.log(isSameOrigin('https://other.com/page')); // false`
      }
    ],
    relatedTopics: ['fetch-api', 'cors', 'xss', 'csrf'],
    isFrontendEssential: true
  },
{
    id: 'csrf',
    title: 'CSRF (Cross-Site Request Forgery)',
    difficulty: 'intermediate',
    description: 'CSRF — атака, когда злоумышленник заставляет пользователя выполнить нежелательное действие на сайте, где пользователь аутентифицирован. Защита: CSRF токены (синхронизированные токены), SameSite cookies, проверка Referer/Origin заголовков, двойная отправка cookies.',
    keyPoints: [
      'CSRF: выполнение действий от имени пользователя без его ведома.',
      'Атака: пользователь залогинен на сайте, переходит на вредоносную страницу.',
      'Вредоносная страница отправляет запрос на сайт с cookies пользователя.',
      'Защита: CSRF токены, SameSite cookies, проверка заголовков.',
      'CSRF токен: уникальный токен для каждой сессии, проверяется сервером.'
    ],
    tags: ['security', 'csrf', 'cookies', 'browser'],
    examples: [
      {
        title: "CSRF атака пример",
        code: `// Пользователь залогинен на bank.com\n// Переходит на evil.com, который содержит:\n\n<form action="https://bank.com/transfer" method="POST">\n  <input type="hidden" name="to" value="attacker-account">\n  <input type="hidden" name="amount" value="1000">\n</form>\n<script>document.forms[0].submit();</script>\n\n// Запрос отправляется с cookies пользователя\n// Деньги переводятся без ведома пользователя`
      },
      {
        title: "Защита: CSRF токен",
        code: `// Сервер генерирует токен при загрузке формы\nconst csrfToken = generateToken(); // сохраняется в сессии\n\n// Форма содержит токен\n<form action="/transfer" method="POST">\n  <input type="hidden" name="csrf_token" value="\${csrfToken}">\n  <input type="text" name="to">\n  <input type="number" name="amount">\n</form>\n\n// Сервер проверяет токен\nif (request.body.csrf_token !== session.csrf_token) {\n  return error('Invalid CSRF token');\n}`
      },
      {
        title: "Защита: SameSite cookies",
        code: `// Cookie с флагом SameSite\nSet-Cookie: session=abc123; SameSite=Strict\n\n// Strict: cookie не отправляется в cross-site запросах\n// Lax: отправляется только в GET запросах (безопаснее)\n// None: отправляется всегда (требует Secure флаг)\n\n// Защищает от CSRF, но может сломать некоторые интеграции`
      },
      {
        title: "Защита: проверка заголовков",
        code: `// Проверка Origin или Referer\nfunction checkOrigin(req) {\n  const origin = req.headers.origin;\n  const referer = req.headers.referer;\n  \n  const allowedOrigins = ['https://yourdomain.com'];\n  \n  if (!allowedOrigins.includes(origin)) {\n    throw new Error('Invalid origin');\n  }\n}\n\n// Защищает от простых CSRF атак`
      }
    ],
    relatedTopics: ['fetch-api', 'cors', 'same-origin-policy', 'cookies'],
    isFrontendEssential: true
  },
{
    id: 'cookies',
    title: 'Cookies',
    difficulty: 'intermediate',
    description: 'Cookies — небольшие данные, хранящиеся в браузере и отправляемые с каждым запросом. Используются для сессий, аутентификации, отслеживания. Управление: document.cookie для чтения/записи, HttpOnly (только HTTP, не доступен из JS), Secure (только HTTPS), SameSite (защита от CSRF), Expires/Max-Age (время жизни).',
    keyPoints: [
      'document.cookie: строка со всеми cookies, чтение и запись.',
      'HttpOnly: cookie недоступен из JavaScript, защита от XSS.',
      'Secure: cookie отправляется только по HTTPS.',
      'SameSite: Strict/Lax/None, защита от CSRF.',
      'Expires/Max-Age: время жизни cookie.',
      'Path и Domain: область действия cookie.'
    ],
    tags: ['cookies', 'storage', 'security', 'browser', 'api'],
    examples: [
      {
        title: "Чтение и запись cookies",
        code: `// Чтение всех cookies\nconst allCookies = document.cookie;\n// "name=value; other=value2"\n\n// Запись cookie\ndocument.cookie = "username=Alice; path=/; max-age=3600";\n\n// Удаление (установка в прошлое)\ndocument.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";\n\n// Функция для удобной работы\nfunction setCookie(name, value, days) {\n  const expires = new Date();\n  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);\n  document.cookie = \`\${name}=\${value};expires=\${expires.toUTCString()};path=/\`;\n}\n\nfunction getCookie(name) {\n  const value = \`; \${document.cookie}\`;\n  const parts = value.split(\`; \${name}=\`);\n  if (parts.length === 2) return parts.pop().split(';').shift();\n}`
      },
      {
        title: "Безопасные cookies",
        code: `// HttpOnly: устанавливается сервером, недоступен из JS\n// Set-Cookie: session=abc123; HttpOnly; Secure; SameSite=Strict\n\n// Secure: только HTTPS\n// Set-Cookie: token=xyz; Secure\n\n// SameSite: защита от CSRF\n// Set-Cookie: session=abc; SameSite=Strict  // не отправляется в cross-site\n// Set-Cookie: session=abc; SameSite=Lax    // только GET в cross-site\n// Set-Cookie: session=abc; SameSite=None; Secure  // всегда (требует Secure)`
      },
      {
        title: "Path и Domain",
        code: `// Path: область действия\n// Set-Cookie: name=value; path=/admin\n// Доступен только на /admin/*\n\n// Domain: поддомены\n// Set-Cookie: name=value; domain=.example.com\n// Доступен на example.com и *.example.com\n\n// Без domain: только текущий домен\n// Set-Cookie: name=value\n// Доступен только на текущем домене`
      },
      {
        title: "Работа с cookies в запросах",
        code: `// Cookies автоматически отправляются с запросами\nfetch('/api/data')\n  .then(res => res.json());\n// Cookies отправляются автоматически\n\n// Отключение отправки cookies\nfetch('/api/data', {\n  credentials: 'omit' // не отправлять cookies\n});\n\n// Включение (для cross-origin)\nfetch('https://api.example.com/data', {\n  credentials: 'include' // отправлять cookies\n});\n// Требует CORS с Access-Control-Allow-Credentials: true`
      }
    ],
    relatedTopics: ['web-storage', 'xss', 'csrf', 'same-origin-policy'],
    isFrontendEssential: true
  }
];
