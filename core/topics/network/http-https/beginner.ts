import { Topic } from '../../../types';

export const NETWORK_HTTP_HTTPS_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'http-basics',
    title: 'HTTP-протокол',
    difficulty: 'beginner',
    description: 'HTTP (HyperText Transfer Protocol) — протокол прикладного уровня для передачи данных в веб. Работает по схеме запрос-ответ: клиент отправляет HTTP-запрос с методом и заголовками, сервер возвращает HTTP-ответ со статус-кодом и телом. HTTP является stateless — каждый запрос независим, сервер не хранит состояние между запросами.',
    keyPoints: [
      'Назначение: передача гипертекстовых документов (HTML, CSS, JS, изображения) между клиентом и сервером.',
      'Модель запрос-ответ: клиент отправляет запрос, сервер возвращает ответ.',
      'Stateless: сервер не хранит состояние между запросами, каждый запрос независим.',
      'Текстовый протокол: запросы и ответы в текстовом формате, читаемы человеком.',
      'Методы: GET (чтение), POST (создание), PUT (обновление), DELETE (удаление), PATCH (частичное обновление).',
      'Заголовки: метаданные запроса/ответа (Content-Type, Authorization, Cache-Control).'
    ],
    tags: ['networks', 'http', 'protocols', 'basics', 'fundamentals'],
    examples: [
      {
        title: 'Структура HTTP-запроса',
        code: `// HTTP-запрос состоит из:
// 1. Строка запроса (Request Line)
// 2. Заголовки (Headers)
// 3. Пустое тело (для GET)
// 4. Тело запроса (для POST/PUT)

// Пример GET-запроса:
GET /api/users HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
Accept: application/json

// Пример POST-запроса:
POST /api/users HTTP/1.1
Host: example.com
Content-Type: application/json
Content-Length: 45

{"name": "John", "email": "john@example.com"}`
      },
      {
        title: 'Структура HTTP-ответа',
        code: `// HTTP-ответ состоит из:
// 1. Строка статуса (Status Line)
// 2. Заголовки (Headers)
// 3. Тело ответа (Body)

// Пример успешного ответа:
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 123
Cache-Control: no-cache

{"id": 1, "name": "John", "email": "john@example.com"}

// Пример ошибки:
HTTP/1.1 404 Not Found
Content-Type: text/html
Content-Length: 156

<html><body>Not Found</body></html>`
      },
      {
        title: 'HTTP методы',
        code: `// GET - получение данных (идемпотентный)
GET /api/users/1
// Возвращает пользователя с id=1

// POST - создание ресурса
POST /api/users
Body: {"name": "John"}
// Создаёт нового пользователя

// PUT - полное обновление ресурса
PUT /api/users/1
Body: {"name": "Jane", "email": "jane@example.com"}
// Заменяет все поля пользователя

// PATCH - частичное обновление
PATCH /api/users/1
Body: {"name": "Jane"}
// Обновляет только поле name

// DELETE - удаление ресурса
DELETE /api/users/1
// Удаляет пользователя с id=1`
      },
      {
        title: 'Stateless протокол',
        code: `// HTTP не хранит состояние между запросами
// Каждый запрос независим:

// Запрос 1:
GET /api/users/1
// Сервер не помнит этот запрос

// Запрос 2:
GET /api/users/1
// Сервер обрабатывает заново, как будто первый запрос не был

// Для хранения состояния используются:
// - Cookies (автоматически отправляются)
// - Session ID в URL или заголовках
// - JWT токены в заголовках`
      }
    ],
    relatedTopics: ['http-methods-status', 'http-request-structure', 'http-caching', 'https-basics'],
    isFrontendEssential: true
  },
  {
    id: 'http-methods-status',
    title: 'HTTP-методы и статус-коды',
    difficulty: 'beginner',
    description: 'HTTP-методы определяют действие, которое нужно выполнить с ресурсом: GET для чтения, POST для создания, PUT/PATCH для обновления, DELETE для удаления. Статус-коды сообщают результат операции: 2xx — успех, 3xx — перенаправление, 4xx — ошибка клиента, 5xx — ошибка сервера. Правильное использование методов и кодов важно для RESTful API.',
    keyPoints: [
      'GET: получение данных, идемпотентный, безопасный, данные в URL.',
      'POST: создание ресурса, не идемпотентный, данные в теле запроса.',
      'PUT: полное обновление, идемпотентный, заменяет весь ресурс.',
      'PATCH: частичное обновление, не всегда идемпотентный, обновляет часть ресурса.',
      'DELETE: удаление ресурса, идемпотентный, удаляет ресурс.',
      'Статус-коды: 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), 500 (Server Error).'
    ],
    tags: ['networks', 'http', 'methods', 'status-codes', 'api', 'basics'],
    examples: [
      {
        title: 'HTTP методы и их использование',
        code: `// GET - чтение (идемпотентный, безопасный)
GET /api/users
// Возвращает список пользователей
// Можно вызывать многократно без побочных эффектов

// POST - создание (не идемпотентный)
POST /api/users
Body: {"name": "John"}
// Создаёт нового пользователя
// Каждый вызов создаёт новый ресурс

// PUT - полное обновление (идемпотентный)
PUT /api/users/1
Body: {"name": "Jane", "email": "jane@example.com"}
// Заменяет все поля пользователя
// Повторный вызов даёт тот же результат

// PATCH - частичное обновление
PATCH /api/users/1
Body: {"name": "Jane"}
// Обновляет только указанные поля

// DELETE - удаление (идемпотентный)
DELETE /api/users/1
// Удаляет пользователя
// Повторный вызов даёт тот же результат (404)`
      },
      {
        title: 'Статус-коды 2xx (успех)',
        code: `// 200 OK - успешный запрос
GET /api/users/1
→ 200 OK

// 201 Created - ресурс создан
POST /api/users
→ 201 Created
Location: /api/users/123

// 204 No Content - успех без тела ответа
DELETE /api/users/1
→ 204 No Content

// 202 Accepted - запрос принят, обработка асинхронная
POST /api/jobs
→ 202 Accepted`
      },
      {
        title: 'Статус-коды 3xx (перенаправление)',
        code: `// 301 Moved Permanently - постоянное перенаправление
GET /old-page
→ 301 Moved Permanently
Location: /new-page

// 302 Found - временное перенаправление
GET /login
→ 302 Found
Location: /dashboard

// 304 Not Modified - ресурс не изменился (кеширование)
GET /api/users/1
If-None-Match: "abc123"
→ 304 Not Modified`
      },
      {
        title: 'Статус-коды 4xx (ошибка клиента)',
        code: `// 400 Bad Request - неверный запрос
POST /api/users
Body: {"invalid": "data"}
→ 400 Bad Request
{"error": "Invalid data"}

// 401 Unauthorized - требуется аутентификация
GET /api/protected
→ 401 Unauthorized
WWW-Authenticate: Bearer

// 403 Forbidden - доступ запрещён
GET /api/admin
→ 403 Forbidden

// 404 Not Found - ресурс не найден
GET /api/users/999
→ 404 Not Found

// 409 Conflict - конфликт (например, дубликат)
POST /api/users
Body: {"email": "existing@example.com"}
→ 409 Conflict`
      },
      {
        title: 'Статус-коды 5xx (ошибка сервера)',
        code: `// 500 Internal Server Error - внутренняя ошибка сервера
GET /api/users
→ 500 Internal Server Error

// 502 Bad Gateway - ошибка шлюза
→ 502 Bad Gateway
// Прокси-сервер получил неверный ответ от upstream

// 503 Service Unavailable - сервис недоступен
→ 503 Service Unavailable
Retry-After: 60
// Сервер временно перегружен или на обслуживании

// 504 Gateway Timeout - таймаут шлюза
→ 504 Gateway Timeout
// Прокси-сервер не получил ответ от upstream вовремя`
      }
    ],
    relatedTopics: ['http-basics', 'rest-api', 'http-request-structure'],
    isFrontendEssential: true
  },
  {
    id: 'http-request-structure',
    title: 'Структура HTTP-запроса и ответа',
    difficulty: 'beginner',
    description: 'HTTP-запрос состоит из строки запроса (метод, путь, версия), заголовков (метаданные) и опционального тела. HTTP-ответ состоит из строки статуса (версия, код, сообщение), заголовков и тела. Заголовки передают метаданные: тип контента, авторизацию, кеширование, кодирование. Понимание структуры важно для работы с API и диагностики проблем.',
    keyPoints: [
      'Строка запроса: метод (GET, POST), путь (/api/users), версия протокола (HTTP/1.1).',
      'Заголовки запроса: Host, User-Agent, Accept, Content-Type, Authorization, Cookie.',
      'Тело запроса: данные для POST/PUT/PATCH (JSON, form-data, XML).',
      'Строка статуса: версия протокола, статус-код (200), сообщение (OK).',
      'Заголовки ответа: Content-Type, Content-Length, Set-Cookie, Cache-Control, ETag.',
      'Тело ответа: HTML, JSON, изображения, файлы.'
    ],
    tags: ['networks', 'http', 'protocols', 'basics'],
    examples: [
      {
        title: 'Полная структура HTTP-запроса',
        code: `// СТРОКА ЗАПРОСА (Request Line)
GET /api/users?page=1 HTTP/1.1

// ЗАГОЛОВКИ (Headers)
Host: api.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Accept: application/json
Accept-Language: ru-RU,ru;q=0.9
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Cookie: session_id=abc123; theme=dark

// ПУСТАЯ СТРОКА (разделитель)

// ТЕЛО ЗАПРОСА (Body) - только для POST/PUT/PATCH
// Для GET тело отсутствует`
      },
      {
        title: 'POST-запрос с телом',
        code: `POST /api/users HTTP/1.1
Host: api.example.com
Content-Type: application/json
Content-Length: 45
Authorization: Bearer token123

{"name": "John", "email": "john@example.com"}

// Content-Type указывает формат тела (JSON)
// Content-Length указывает размер тела в байтах`
      },
      {
        title: 'Полная структура HTTP-ответа',
        code: `// СТРОКА СТАТУСА (Status Line)
HTTP/1.1 200 OK

// ЗАГОЛОВКИ (Headers)
Content-Type: application/json
Content-Length: 123
Cache-Control: public, max-age=3600
ETag: "abc123"
Set-Cookie: session_id=xyz789; Path=/; HttpOnly
Date: Mon, 01 Jan 2024 12:00:00 GMT
Server: nginx/1.20.1

// ПУСТАЯ СТРОКА (разделитель)

// ТЕЛО ОТВЕТА (Body)
{"id": 1, "name": "John", "email": "john@example.com"}`
      },
      {
        title: 'Важные заголовки запроса',
        code: `// Host - домен сервера (обязательный в HTTP/1.1)
Host: example.com

// User-Agent - информация о клиенте
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0

// Accept - какие типы контента клиент принимает
Accept: application/json, text/html

// Content-Type - формат тела запроса
Content-Type: application/json

// Authorization - токен доступа
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

// Cookie - данные сессии
Cookie: session_id=abc123; theme=dark`
      },
      {
        title: 'Важные заголовки ответа',
        code: `// Content-Type - формат тела ответа
Content-Type: application/json

// Content-Length - размер тела в байтах
Content-Length: 1234

// Cache-Control - правила кеширования
Cache-Control: public, max-age=3600

// Set-Cookie - установка cookie
Set-Cookie: session_id=abc123; Path=/; HttpOnly; Secure

// ETag - тег версии ресурса (для кеширования)
ETag: "abc123"

// Location - URL для перенаправления (3xx)
Location: /new-page`
      }
    ],
    relatedTopics: ['http-basics', 'http-methods-status', 'http-caching'],
    isFrontendEssential: true
  }
];
