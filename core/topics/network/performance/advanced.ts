import { Topic } from '../../../types';

export const NETWORK_PERFORMANCE_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'critical-rendering-path-advanced',
    title: 'Critical Rendering Path (Advanced)',
    difficulty: 'advanced',
    description: 'Продвинутое понимание Critical Rendering Path включает детали работы браузера на уровне композиции слоёв, GPU-ускорения и оптимизаций. Composite layers — отдельные слои для элементов, которые можно отрисовывать независимо. GPU-ускорение использует видеокарту для быстрой отрисовки. Продвинутые техники оптимизации (will-change, contain, transform) позволяют контролировать процесс рендеринга на глубоком уровне. Senior-разработчик должен понимать эти механизмы для максимальной оптимизации производительности.',
    keyPoints: [
      'Composite layers: отдельные слои для элементов, отрисовываются независимо, ускоряют анимации и скролл.',
      'GPU-ускорение: использование видеокарты для отрисовки слоёв, особенно эффективно для transform и opacity.',
      'Paint: отрисовка пикселей в растровое изображение, может быть несколько слоёв для разных элементов.',
      'Composite: объединение слоёв в финальное изображение, происходит на GPU для производительности.',
      'Оптимизации: will-change (предупреждение браузеру), contain (изоляция layout), transform (GPU-ускорение).',
      'Производительность: правильное использование слоёв и GPU критично для плавности анимаций и скролла.'
    ],
    tags: ['networks', 'performance', 'browser', 'rendering', 'critical-rendering-path', 'gpu', 'composite', 'advanced'],
    examples: [
      {
        title: 'Composite Layers (слои композиции)',
        code: `// БРАУЗЕР создаёт слои для оптимизации рендеринга

// ЭЛЕМЕНТЫ В ОТДЕЛЬНЫХ СЛОЯХ:
// 1. Элементы с transform или opacity
.element {
  transform: translateZ(0); /* Создаёт слой */
  /* или */
  will-change: transform; /* Предупреждение браузеру */
}

// 2. Видео и canvas
<video> <!-- Автоматически в отдельном слое -->
<canvas> <!-- Автоматически в отдельном слое -->

// 3. Элементы с position: fixed
.fixed-header {
  position: fixed; /* В отдельном слое */
}

// 4. Элементы с фильтрами
.filtered {
  filter: blur(5px); /* В отдельном слое */
}

// ПРЕИМУЩЕСТВА СЛОЁВ:
// - Отрисовываются независимо
// - Можно обновлять без перерисовки других элементов
// - GPU-ускорение для transform/opacity
// - Плавные анимации`
      },
      {
        title: 'GPU-ускорение',
        code: `// GPU-УСКОРЕНИЕ для определённых свойств

// ✅ GPU-УСКОРЯЕТСЯ (Composite):
.element {
  transform: translateX(100px); /* GPU */
  opacity: 0.5; /* GPU */
  filter: blur(5px); /* GPU */
  will-change: transform; /* Предупреждение для GPU */
}

// ❌ НЕ GPU-УСКОРЯЕТСЯ (Layout/Paint):
.element {
  left: 100px; /* Layout + Paint */
  top: 100px; /* Layout + Paint */
  width: 200px; /* Layout + Paint */
  background-color: red; /* Paint */
  color: blue; /* Paint */
}

// ПРАВИЛО:
// - transform и opacity → только Composite (быстро)
// - Другие свойства → Layout + Paint (медленнее)

// ПРИМЕР АНИМАЦИИ:
// ❌ ПЛОХО: вызывает Layout и Paint
@keyframes slide {
  from { left: 0; }
  to { left: 100px; }
}

// ✅ ХОРОШО: только Composite
@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}`
      },
      {
        title: 'Процесс Composite',
        code: `// ПОЛНЫЙ ПРОЦЕСС РЕНДЕРИНГА:

// 1. LAYOUT (Reflow)
// Вычисление позиций и размеров элементов
// Результат: геометрия элементов

// 2. PAINT
// Отрисовка пикселей в растровое изображение
// Результат: изображение слоя

// 3. COMPOSITE
// Объединение слоёв в финальное изображение
// Происходит на GPU
// Результат: финальная картинка на экране

// ПРИМЕР:
// Слой 1: Фон страницы
// Слой 2: Контент
// Слой 3: Анимированный элемент (transform)
// Слой 4: Fixed header

// При анимации элемента:
// - Слои 1, 2, 4 не перерисовываются
// - Только слой 3 обновляется (transform)
// - Composite объединяет все слои
// - Результат: плавная анимация`
      },
      {
        title: 'will-change для оптимизации',
        code: `// WILL-CHANGE: предупреждение браузеру о будущих изменениях

// ✅ ПРАВИЛЬНОЕ ИСПОЛЬЗОВАНИЕ:
.element {
  will-change: transform; /* Элемент будет анимироваться */
}

// Браузер:
// - Создаёт отдельный слой заранее
// - Подготавливает GPU-ускорение
// - Оптимизирует для анимации

// ❌ НЕПРАВИЛЬНОЕ ИСПОЛЬЗОВАНИЕ:
.element {
  will-change: transform; /* На всех элементах */
}

// Проблемы:
// - Создаёт много слоёв (память)
// - Перегружает GPU
// - Может ухудшить производительность

// ПРАВИЛО:
// - Использовать только для элементов, которые будут анимироваться
// - Удалять после анимации
.element {
  will-change: transform;
  transition: transform 0.3s;
}

.element.animated {
  transform: translateX(100px);
  will-change: auto; /* Удалить после анимации */
}`
      },
      {
        title: 'CSS contain для изоляции',
        code: `// CONTAIN: изоляция layout, paint, composite

// LAYOUT ИЗОЛЯЦИЯ:
.container {
  contain: layout;
  /* Изменения внутри не влияют на внешний layout */
}

// PAINT ИЗОЛЯЦИЯ:
.container {
  contain: paint;
  /* Контент внутри не отрисовывается за пределами */
  /* Как overflow: hidden, но на уровне браузера */
}

// COMPOSITE ИЗОЛЯЦИЯ:
.container {
  contain: strict; /* layout + paint + style */
  /* Полная изоляция, создаёт отдельный слой */
}

// ПРЕИМУЩЕСТВА:
// - Браузер может оптимизировать изолированные части
// - Изменения внутри не вызывают пересчёт снаружи
// - Лучшая производительность для больших списков

// ПРИМЕР:
.list-item {
  contain: layout style paint;
  /* Каждый элемент изолирован */
  /* Изменение одного не влияет на другие */
}`
      },
      {
        title: 'Оптимизация анимаций',
        code: `// ПРАВИЛА ОПТИМИЗАЦИИ АНИМАЦИЙ:

// 1. ИСПОЛЬЗОВАТЬ TRANSFORM И OPACITY
// ✅ ХОРОШО: только Composite
.element {
  animation: slide 0.3s;
}
@keyframes slide {
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(100px); opacity: 0.5; }
}

// ❌ ПЛОХО: Layout + Paint
.element {
  animation: slide 0.3s;
}
@keyframes slide {
  from { left: 0; }
  to { left: 100px; }
}

// 2. ИСПОЛЬЗОВАТЬ WILL-CHANGE
.element {
  will-change: transform;
  transition: transform 0.3s;
}

// 3. ИЗБЕГАТЬ АНИМАЦИИ СВОЙСТВ, ВЫЗЫВАЮЩИХ LAYOUT
// ❌ Вызывает Layout:
// - width, height
// - top, left, right, bottom
// - margin, padding
// - border-width

// ✅ Не вызывает Layout:
// - transform
// - opacity
// - filter (может быть медленным)`
      },
      {
        title: 'Анализ слоёв в DevTools',
        code: `// CHROME DEVTOOLS → Layers

// 1. Открыть DevTools
// 2. More tools → Layers
// 3. Увидеть все слои страницы

// ИНФОРМАЦИЯ О СЛОЯХ:
// - Размер слоя
// - Память, используемая слоем
// - Причина создания слоя
// - GPU-ускорение

// ПРОБЛЕМЫ:
// - Слишком много слоёв → много памяти
// - Большие слои → медленный composite
// - Ненужные слои → перегрузка GPU

// ОПТИМИЗАЦИЯ:
// - Удалить will-change где не нужно
// - Объединить похожие слои
// - Уменьшить размер слоёв

// PERFORMANCE TIMELINE:
// - Показать этапы: Layout, Paint, Composite
// - Время каждого этапа
// - Проблемные элементы`
      },
      {
        title: 'Производительность: до и после оптимизации',
        code: `// БЕЗ ОПТИМИЗАЦИИ:
// Анимация через left/top
.element {
  animation: move 1s;
}
@keyframes move {
  from { left: 0; }
  to { left: 500px; }
}

// Процесс:
// - Layout: 5ms (каждый кадр)
// - Paint: 3ms (каждый кадр)
// - Composite: 1ms
// - FPS: ~30-40 (не плавно)

// С ОПТИМИЗАЦИЕЙ:
// Анимация через transform
.element {
  will-change: transform;
  animation: move 1s;
}
@keyframes move {
  from { transform: translateX(0); }
  to { transform: translateX(500px); }
}

// Процесс:
// - Layout: 0ms (не вызывается)
// - Paint: 0ms (не вызывается)
// - Composite: 0.5ms (GPU)
// - FPS: 60 (плавно)

// УЛУЧШЕНИЕ:
// - Время на кадр: 9ms → 0.5ms (18x быстрее)
// - FPS: 30-40 → 60 (плавно)
// - Использование CPU: высокое → низкое
// - Использование GPU: низкое → оптимальное`
      }
    ],
    relatedTopics: ['critical-rendering-path', 'performance-rendering', 'render-blocking-resources'],
    funFact: 'Composite layers и GPU-ускорение были добавлены в браузеры для поддержки плавных анимаций и скролла. Идея пришла из игровой индустрии, где GPU используется для отрисовки. Современные браузеры могут создавать сотни слоёв на странице, но слишком много слоёв может перегрузить GPU и ухудшить производительность. Правильный баланс — ключ к оптимальной производительности.'
  },
  {
    id: 'performance-multiplexing',
    title: 'HTTP/2 multiplexing',
    difficulty: 'advanced',
    description: 'HTTP/2 multiplexing позволяет отправлять несколько запросов параллельно в одном TCP-соединении. Каждый запрос идёт в отдельном потоке (stream), потоки мультиплексируются на уровне протокола. Это решает проблему head-of-line blocking HTTP/1.1, но TCP всё ещё может блокировать потоки при потере пакетов. HTTP/3 решает эту проблему через QUIC.',
    keyPoints: [
      'Мультиплексирование: несколько запросов в одном TCP-соединении, каждый в своём stream.',
      'Потоки (streams): независимые каналы данных, могут обрабатываться параллельно.',
      'Приоритизация: клиент может указать приоритет потоков для оптимизации загрузки.',
      'Head-of-line blocking: HTTP/2 решает на уровне приложения, но TCP всё ещё блокирует при потере пакетов.',
      'Преимущества: меньше соединений, параллельная загрузка, лучшая утилизация канала.',
      'Ограничения: потеря пакета TCP блокирует все потоки, HTTP/3 решает через QUIC.'
    ],
    tags: ['networks', 'http', 'http2', 'performance', 'multiplexing', 'advanced'],
    examples: [
      {
        title: 'HTTP/1.1 vs HTTP/2 multiplexing',
        code: `// HTTP/1.1: последовательная загрузка
// Соединение 1: [запрос 1] → [ответ 1] → [запрос 2] → [ответ 2]
// Соединение 2: [запрос 3] → [ответ 3] → [запрос 4] → [ответ 4]
// Каждое соединение обрабатывает запросы последовательно

// HTTP/2: мультиплексирование
// Одно соединение:
// [поток 1: запрос] [поток 2: запрос] [поток 3: запрос]
// [поток 1: ответ] [поток 2: ответ] [поток 3: ответ]
// Все потоки обрабатываются параллельно

// ПРЕИМУЩЕСТВА HTTP/2:
// - Меньше соединений (1 вместо 6)
// - Параллельная загрузка
// - Лучшая утилизация канала`
      },
      {
        title: 'Потоки в HTTP/2',
        code: `// КАЖДЫЙ ЗАПРОС = отдельный stream
// Stream имеет уникальный ID

// Пример загрузки страницы:
// Stream 1: GET /index.html
// Stream 2: GET /style.css
// Stream 3: GET /script.js
// Stream 4: GET /image1.jpg
// Stream 5: GET /image2.jpg

// Все потоки в одном TCP-соединении
// Обрабатываются параллельно

// ПРИОРИТИЗАЦИЯ:
// Stream 1 (HTML): приоритет HIGH
// Stream 2 (CSS): приоритет HIGH
// Stream 3 (JS): приоритет MEDIUM
// Stream 4, 5 (images): приоритет LOW

// Сервер может учитывать приоритеты при отправке данных`
      },
      {
        title: 'Head-of-line blocking в HTTP/2',
        code: `// ПРОБЛЕМА: TCP гарантирует порядок пакетов
// Если пакет потерян, все последующие ждут

// ПРИМЕР:
// Stream 1: [пакет 1] [пакет 2❌] [пакет 3] [пакет 4]
// Stream 2: [пакет 5] [пакет 6] [пакет 7] [пакет 8]

// Если пакет 2 потерян:
// - TCP ждёт повторной отправки пакета 2
// - Пакеты 3, 4, 5, 6, 7, 8 ждут в очереди
// - ВСЕ потоки блокируются

// HTTP/2 решает на уровне приложения:
// - Мультиплексирование потоков
// - Но TCP всё ещё блокирует при потере пакетов

// HTTP/3 решает полностью:
// - QUIC поверх UDP
// - Мультиплексирование на уровне QUIC
// - Потеря пакета блокирует только свой поток`
      },
      {
        title: 'Приоритизация потоков',
        code: `// КЛИЕНТ может указать приоритеты:
// Stream 1 (HTML): weight=256 (высокий)
// Stream 2 (CSS): weight=128 (средний)
// Stream 3 (JS): weight=64 (низкий)
// Stream 4 (image): weight=32 (очень низкий)

// СЕРВЕР может учитывать приоритеты:
// - Отправлять данные высокоприоритетных потоков первыми
// - Распределять bandwidth согласно весам

// ПРИМЕР:
// HTML (stream 1) загружается первым
// CSS (stream 2) загружается параллельно
// JS (stream 3) загружается после CSS
// Images (stream 4) загружаются в фоне

// РЕЗУЛЬТАТ:
// - Критический контент загружается быстрее
// - Страница отображается раньше`
      }
    ],
    relatedTopics: ['http-versions', 'http-over-tcp']
  },
  {
    id: 'performance-prefetch',
    title: 'Preload / Prefetch / Preconnect',
    difficulty: 'advanced',
    description: 'Preload, Prefetch, Preconnect и DNS-prefetch — механизмы оптимизации загрузки ресурсов. Preload загружает критический ресурс немедленно, Prefetch загружает ресурс для будущего использования, Preconnect устанавливает соединение заранее, DNS-prefetch резолвит DNS заранее. Правильное использование ускоряет загрузку страницы и улучшает пользовательский опыт.',
    keyPoints: [
      'Preload: загружает критический ресурс немедленно с высоким приоритетом, используется для критических CSS, шрифтов, скриптов.',
      'Prefetch: загружает ресурс с низким приоритетом для будущего использования, используется для следующей страницы или ресурсов, которые понадобятся позже.',
      'Preconnect: устанавливает TCP-соединение и TLS-рукопожатие заранее, используется для внешних доменов (CDN, API).',
      'DNS-prefetch: резолвит DNS заранее, используется для внешних доменов, самый лёгкий способ ускорить подключение.',
      'Приоритеты: Preload > обычная загрузка > Prefetch, браузер использует это для планирования загрузки.',
      'Использование: Preload для критических ресурсов текущей страницы, Prefetch для следующей страницы, Preconnect для внешних доменов.'
    ],
    tags: ['networks', 'performance', 'preload', 'prefetch', 'preconnect', 'advanced'],
    examples: [
      {
        title: 'Preload — критический ресурс',
        code: `// PRELOAD загружает ресурс немедленно с высоким приоритетом
// Используется для критических ресурсов текущей страницы

// ПРИМЕР: критический CSS
<link rel="preload" href="/critical.css" as="style">
// Браузер загружает CSS сразу, даже если ещё не встретил <link>

// ПРИМЕР: критический шрифт
<link rel="preload" href="/font.woff2" as="font" type="font/woff2" crossorigin>
// Браузер загружает шрифт заранее, избегая FOUT (Flash of Unstyled Text)

// ПРИМЕР: критический JavaScript
<link rel="preload" href="/app.js" as="script">
// Браузер загружает скрипт с высоким приоритетом

// АТРИБУТЫ:
// - as: тип ресурса (style, script, font, image)
// - crossorigin: для CORS-ресурсов (шрифты, скрипты)
// - type: MIME-тип (для проверки браузером)`
      },
      {
        title: 'Prefetch — ресурс для будущего',
        code: `// PREFETCH загружает ресурс с низким приоритетом
// Используется для ресурсов, которые понадобятся позже

// ПРИМЕР: следующая страница
<link rel="prefetch" href="/next-page.html">
// Браузер загружает HTML следующей страницы в фоне
// При переходе страница загружается мгновенно

// ПРИМЕР: изображения для галереи
<link rel="prefetch" href="/gallery/image1.jpg">
<link rel="prefetch" href="/gallery/image2.jpg">
// Браузер загружает изображения в фоне
// При открытии галереи изображения уже в кеше

// ПРИМЕР: API-данные
<link rel="prefetch" href="/api/users">
// Браузер загружает данные в фоне
// При запросе данные уже в кеше

// ПРИОРИТЕТ:
// Prefetch имеет низкий приоритет
// Не блокирует загрузку текущей страницы`
      },
      {
        title: 'Preconnect — установка соединения',
        code: `// PRECONNECT устанавливает TCP-соединение и TLS-рукопожатие заранее
// Используется для внешних доменов (CDN, API)

// ПРИМЕР: внешний CDN
<link rel="preconnect" href="https://cdn.example.com">
// Браузер:
// 1. Резолвит DNS
// 2. Устанавливает TCP-соединение
// 3. Выполняет TLS-рукопожатие
// При загрузке ресурса соединение уже готово

// ЭКОНОМИЯ ВРЕМЕНИ:
// Без preconnect: DNS (50ms) + TCP (100ms) + TLS (200ms) = 350ms
// С preconnect: 0ms (соединение уже установлено)

// ПРИМЕР: API
<link rel="preconnect" href="https://api.example.com">
// При первом API-запросе соединение уже готово

// ПРИМЕР: несколько доменов
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://cdn.example.com">
<link rel="preconnect" href="https://api.example.com">`
      },
      {
        title: 'DNS-prefetch — резолв DNS',
        code: `// DNS-PREFETCH резолвит DNS заранее
// Самый лёгкий способ ускорить подключение

// ПРИМЕР: внешние ресурсы
<link rel="dns-prefetch" href="https://cdn.example.com">
// Браузер резолвит DNS заранее
// При загрузке ресурса IP уже известен

// ЭКОНОМИЯ ВРЕМЕНИ:
// Без dns-prefetch: DNS (50-200ms) при загрузке ресурса
// С dns-prefetch: 0ms (DNS уже резолвлен)

// ПРИМЕР: несколько доменов
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://www.google-analytics.com">
<link rel="dns-prefetch" href="https://cdn.example.com">

// ПРАКТИКА:
// - Использовать для всех внешних доменов
// - Не требует много ресурсов
// - Ускоряет первое подключение`
      },
      {
        title: 'Сравнение и использование',
        code: `// PRELOAD: критический ресурс текущей страницы
<link rel="preload" href="/critical.css" as="style">
// Загружается немедленно с высоким приоритетом

// PREFETCH: ресурс для будущего использования
<link rel="prefetch" href="/next-page.html">
// Загружается в фоне с низким приоритетом

// PRECONNECT: установка соединения
<link rel="preconnect" href="https://api.example.com">
// Устанавливает соединение заранее

// DNS-PREFETCH: резолв DNS
<link rel="dns-prefetch" href="https://cdn.example.com">
// Резолвит DNS заранее

// ПРИОРИТЕТЫ:
// 1. Preload (высокий)
// 2. Обычная загрузка
// 3. Prefetch (низкий)

// ПРАКТИКА:
// - Preload для критических ресурсов (CSS, шрифты)
// - Prefetch для следующей страницы
// - Preconnect для внешних API/CDN
// - DNS-prefetch для всех внешних доменов`
      }
    ],
    relatedTopics: ['critical-rendering-path', 'resource-loading', 'tls-handshake']
  }
];
