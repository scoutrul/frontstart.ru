import { Topic } from '../../../types';

export const NETWORK_TOOLS_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'network-devtools',
    title: 'Вкладка Network в DevTools',
    difficulty: 'beginner',
    description: 'Вкладка Network в DevTools браузера — основной инструмент для анализа сетевых запросов. Показывает все HTTP-запросы, их статусы, размеры, время загрузки, заголовки и ответы. Позволяет фильтровать запросы, искать по имени, анализировать водопад загрузки. Понимание Network tab необходимо для диагностики проблем производительности и отладки API.',
    keyPoints: [
      'Открытие: F12 → вкладка Network, или Ctrl+Shift+I (Cmd+Option+I на Mac).',
      'Список запросов: показывает все HTTP-запросы страницы с методом, URL, статусом, типом, размером, временем.',
      'Фильтры: по типу (XHR, JS, CSS, Img), статусу, домену, размеру, времени загрузки.',
      'Детали запроса: Headers (заголовки), Preview (предпросмотр), Response (тело ответа), Timing (тайминги).',
      'Водопад: визуализация времени загрузки каждого запроса, показывает блокировки и зависимости.',
      'Экспорт: можно сохранить запросы в HAR-файл для дальнейшего анализа.'
    ],
    tags: ['networks', 'devtools', 'debugging', 'performance', 'basics'],
    examples: [
      {
        title: 'Основные элементы Network tab',
        code: `// ОТКРЫТИЕ:
// F12 или Ctrl+Shift+I (Windows/Linux)
// Cmd+Option+I (Mac)
// Вкладка "Network"

// ОСНОВНЫЕ ЭЛЕМЕНТЫ:
// 1. Список запросов (слева)
//    - Метод (GET, POST)
//    - URL
//    - Статус (200, 404, 500)
//    - Тип (document, script, stylesheet, image)
//    - Размер
//    - Время загрузки

// 2. Фильтры (сверху)
//    - All, XHR, JS, CSS, Img, Media, Font, Doc, WS, Other
//    - Поиск по имени
//    - Фильтр по домену

// 3. Детали запроса (справа)
//    - Headers (заголовки запроса/ответа)
//    - Preview (предпросмотр ответа)
//    - Response (сырой ответ)
//    - Timing (тайминги загрузки)`
      },
      {
        title: 'Анализ запроса',
        code: `// КЛИКНУТЬ НА ЗАПРОС → открываются детали:

// HEADERS:
// Request Headers:
//   - Method: GET
//   - URL: https://api.example.com/users
//   - Status Code: 200 OK
//   - Remote Address: 93.184.216.34:443
//   - Referrer Policy: strict-origin-when-cross-origin
//
// Response Headers:
//   - Content-Type: application/json
//   - Content-Length: 1234
//   - Cache-Control: public, max-age=3600

// PREVIEW:
// Форматированный JSON, HTML, CSS
// Удобно для просмотра структуры

// RESPONSE:
// Сырой ответ (текст)
// Полезно для копирования

// TIMING:
// - Queued: время в очереди
// - DNS Lookup: резолв DNS
// - Initial connection: установка TCP
// - SSL: TLS-рукопожатие
// - Request sent: отправка запроса
// - Waiting (TTFB): время до первого байта
// - Content Download: загрузка данных`
      },
      {
        title: 'Фильтрация запросов',
        code: `// ФИЛЬТРЫ ПО ТИПУ:
// - All: все запросы
// - XHR/Fetch: AJAX-запросы
// - JS: JavaScript файлы
// - CSS: стили
// - Img: изображения
// - Media: видео/аудио
// - Font: шрифты
// - Doc: HTML документы
// - WS: WebSocket соединения

// ПОИСК:
// Ввести в поле поиска:
// - Имя файла: "app.js"
// - Домен: "api.example.com"
// - Метод: "method:POST"
// - Статус: "status-code:404"

// ФИЛЬТРЫ:
// - Hide data URLs: скрыть data: URLs
// - Preserve log: сохранить запросы при перезагрузке
// - Disable cache: отключить кеш`
      },
      {
        title: 'Водопад загрузки',
        code: `// ВОДОПАД показывает временную шкалу:

// ВИЗУАЛИЗАЦИЯ:
// [====DNS====][==TCP==][==SSL==][==Request==][==TTFB==][==Download==]
//    50ms        100ms    200ms      10ms        150ms       300ms

// ЦВЕТА:
// - Серый: блокировка (ожидание)
// - Зелёный: DNS lookup
// - Оранжевый: Initial connection (TCP)
// - Фиолетовый: SSL/TLS
// - Синий: Request sent
// - Жёлтый: Waiting (TTFB)
// - Зелёный: Content Download

// АНАЛИЗ:
// - Длинные серые блоки → блокировка другими ресурсами
// - Длинный TTFB → медленный сервер
// - Длинный Download → большой размер файла`
      },
      {
        title: 'Практические советы',
        code: `// 1. PRESERVE LOG:
// Включить при перезагрузке страницы
// Сохраняет историю запросов

// 2. DISABLE CACHE:
// Включить при разработке
// Всегда загружает свежие ресурсы

// 3. THROTTLING:
// Имитация медленной сети
// 3G, Slow 3G, Fast 3G, Offline
// Полезно для тестирования производительности

// 4. EXPORT HAR:
// Правый клик → Save all as HAR
// Сохраняет все запросы для анализа

// 5. COPY AS CURL:
// Правый клик → Copy → Copy as cURL
// Копирует запрос как cURL команду
// Полезно для воспроизведения запроса`
      }
    ],
    relatedTopics: ['network-timing', 'network-waterfall', 'network-production'],
    isFrontendEssential: true
  }
];
