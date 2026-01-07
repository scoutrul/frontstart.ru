import { Topic } from '../../../types';

export const NETWORK_BROWSER_SECURITY_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'same-origin-policy',
    title: 'Same-Origin Policy',
    difficulty: 'beginner',
    description: 'Same-Origin Policy (SOP) — политика безопасности браузера, ограничивающая доступ скриптов к ресурсам с других доменов. Origin определяется протоколом, доменом и портом. Скрипт с одного origin может читать данные только с того же origin. Это защищает от кражи данных и межсайтовых атак. CORS позволяет ослабить это ограничение для легитимных случаев.',
    keyPoints: [
      'Origin: протокол (http/https) + домен (example.com) + порт (80/443).',
      'Правило: скрипт может читать данные только с того же origin, с которого загружен.',
      'Защита: предотвращает чтение данных с других сайтов (cookies, localStorage, DOM).',
      'Исключения: некоторые ресурсы доступны (изображения, CSS, скрипты), но их содержимое нельзя прочитать.',
      'CORS: механизм ослабления SOP для легитимных межсайтовых запросов.',
      'Применяется к: XMLHttpRequest, Fetch API, WebSockets, iframe, cookies.'
    ],
    tags: ['networks', 'security', 'cors', 'same-origin', 'browser', 'basics'],
    examples: [
      {
        title: 'Определение Origin',
        code: `// Origin = протокол + домен + порт

// Примеры:
https://example.com:443
// Origin: https://example.com:443

http://example.com:80
// Origin: http://example.com:80
// (разные протоколы = разные origins)

https://www.example.com:443
// Origin: https://www.example.com:443
// (www.example.com ≠ example.com = разные origins)

https://example.com:8080
// Origin: https://example.com:8080
// (разные порты = разные origins)

// ОДИНАКОВЫЕ ORIGINS:
https://example.com:443/page1
https://example.com:443/page2
// Одинаковый origin (протокол, домен, порт совпадают)`
      },
      {
        title: 'Что блокирует Same-Origin Policy',
        code: `// ❌ БЛОКИРУЕТСЯ:
// 1. Чтение ответов Fetch/XMLHttpRequest с другого origin
fetch('https://api.other.com/data')
  .then(r => r.json()) // ❌ CORS error

// 2. Чтение содержимого iframe с другого origin
const iframe = document.querySelector('iframe');
iframe.contentWindow.document; // ❌ SecurityError

// 3. Чтение cookies с другого домена
document.cookie; // только cookies текущего домена

// 4. Чтение localStorage другого домена
localStorage.getItem('key'); // только текущего домена

// ✅ РАЗРЕШЕНО:
// 1. Загрузка ресурсов (изображения, CSS, скрипты)
<img src="https://other.com/image.jpg"> // ✅ загрузится

// 2. Отправка форм на другой origin
<form action="https://other.com/submit"> // ✅ отправится

// 3. Ссылки на другие сайты
<a href="https://other.com">Link</a> // ✅ работает`
      },
      {
        title: 'Зачем нужна Same-Origin Policy',
        code: `// БЕЗ SOP (опасно):
// Сайт evil.com может:
// 1. Открыть iframe с bank.com
// 2. Прочитать данные из iframe
// 3. Украсть cookies, пароли, данные

// С SOP (безопасно):
// Сайт evil.com НЕ может:
// - Прочитать данные с bank.com
// - Украсть cookies
// - Получить доступ к DOM другого сайта

// ЗАЩИТА ОТ:
// - Межсайтовых атак (XSS)
// - Кражи сессий
// - Утечки данных
// - Подделки запросов`
      },
      {
        title: 'CORS ослабляет SOP',
        code: `// CORS (Cross-Origin Resource Sharing) позволяет
// делать запросы на другой origin, если сервер разрешает

// Запрос с example.com на api.other.com:
fetch('https://api.other.com/data')
  .then(r => r.json());

// Сервер api.other.com должен ответить:
Access-Control-Allow-Origin: https://example.com
// или
Access-Control-Allow-Origin: *

// Тогда браузер разрешит чтение ответа

// БЕЗ CORS заголовка:
// Браузер заблокирует ответ (SOP)`
      }
    ],
    relatedTopics: ['cors-basics', 'cors-preflight', 'csp-basics'],
    isFrontendEssential: true
  },
  {
    id: 'cors-basics',
    title: 'CORS',
    difficulty: 'beginner',
    description: 'CORS (Cross-Origin Resource Sharing) — механизм ослабления Same-Origin Policy для легитимных межсайтовых запросов. Сервер указывает, какие origins могут делать запросы, через заголовок Access-Control-Allow-Origin. Простые запросы (GET, POST с простыми заголовками) обрабатываются сразу, сложные требуют preflight-запроса. Понимание CORS важно для работы с API и диагностики ошибок.',
    keyPoints: [
      'Назначение: разрешить межсайтовые запросы, которые блокирует Same-Origin Policy.',
      'Заголовок ответа: Access-Control-Allow-Origin указывает разрешённые origins (* или конкретный домен).',
      'Простые запросы: GET, POST с простыми заголовками обрабатываются сразу без preflight.',
      'Сложные запросы: требуют preflight-запроса (OPTIONS) для проверки разрешений.',
      'Ошибки: "CORS policy" возникает, когда сервер не разрешает запрос с текущего origin.',
      'Решение: настроить сервер для отправки CORS-заголовков или использовать прокси.'
    ],
    tags: ['networks', 'cors', 'security', 'api', 'basics'],
    examples: [
      {
        title: 'Простой CORS-запрос',
        code: `// КЛИЕНТ (example.com):
fetch('https://api.other.com/users')
  .then(r => r.json());

// СЕРВЕР (api.other.com) должен ответить:
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://example.com
Content-Type: application/json

[{"id": 1, "name": "John"}]

// Браузер проверяет:
// - Origin запроса: https://example.com
// - Access-Control-Allow-Origin: https://example.com
// - ✅ Совпадает → разрешает чтение ответа

// Если Access-Control-Allow-Origin: *
// → разрешает любые origins`
      },
      {
        title: 'CORS ошибка',
        code: `// КЛИЕНТ (example.com):
fetch('https://api.other.com/users')
  .then(r => r.json())
  .catch(e => console.error(e));

// СЕРВЕР (api.other.com) НЕ отправляет CORS заголовки:
HTTP/1.1 200 OK
Content-Type: application/json

[{"id": 1, "name": "John"}]

// Браузер блокирует ответ:
// ❌ Access to fetch at 'https://api.other.com/users' 
//    from origin 'https://example.com' has been blocked 
//    by CORS policy: No 'Access-Control-Allow-Origin' 
//    header is present on the requested resource.

// РЕШЕНИЕ:
// 1. Настроить сервер для отправки CORS заголовков
// 2. Использовать прокси на своём сервере
// 3. Использовать CORS-прокси (только для разработки)`
      },
      {
        title: 'Простые vs сложные запросы',
        code: `// ПРОСТЫЕ ЗАПРОСЫ (без preflight):
// - GET, POST, HEAD
// - Простые заголовки: Accept, Content-Type (только text/plain, 
//   application/x-www-form-urlencoded, multipart/form-data)
// - Обрабатываются сразу

fetch('https://api.other.com/users', {
  method: 'GET'
}); // ✅ простой запрос

// СЛОЖНЫЕ ЗАПРОСЫ (требуют preflight):
// - PUT, DELETE, PATCH
// - Кастомные заголовки (Authorization, X-Custom-Header)
// - Content-Type: application/json
// - Требуют OPTIONS preflight-запроса

fetch('https://api.other.com/users', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  },
  body: JSON.stringify({name: 'John'})
}); // ❌ сложный запрос → preflight`
      },
      {
        title: 'Разрешение всех origins',
        code: `// РАЗРЕШИТЬ ВСЕ ORIGINS (небезопасно для продакшена):
Access-Control-Allow-Origin: *

// ✅ Работает для простых запросов
// ❌ НЕ работает для запросов с credentials (cookies)

// С credentials нужен конкретный origin:
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Credentials: true

// ПРАКТИКА:
// - Для публичных API: можно использовать *
// - Для API с аутентификацией: конкретные origins
// - Проверять Origin на сервере и динамически устанавливать заголовок`
      }
    ],
    relatedTopics: ['same-origin-policy', 'cors-preflight', 'storage-comparison'],
    isFrontendEssential: true
  }
];
