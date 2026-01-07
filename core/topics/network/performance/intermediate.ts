import { Topic } from '../../../types';

export const NETWORK_PERFORMANCE_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'critical-rendering-path',
    title: 'Critical Rendering Path',
    difficulty: 'intermediate',
    description: 'Critical Rendering Path (CRP) — последовательность шагов, которые браузер выполняет для преобразования HTML, CSS и JavaScript в отображаемую страницу. Включает парсинг HTML, построение DOM, загрузку CSS, построение CSSOM, выполнение JavaScript, создание Render Tree, layout и paint. Оптимизация CRP ускоряет First Contentful Paint и Time to Interactive.',
    keyPoints: [
      'Шаги CRP: парсинг HTML → DOM, загрузка CSS → CSSOM, выполнение JS → изменение DOM, Render Tree → Layout → Paint.',
      'DOM (Document Object Model): дерево объектов HTML, создаётся при парсинге.',
      'CSSOM (CSS Object Model): дерево стилей, создаётся при парсинге CSS.',
      'Render Tree: объединение DOM и CSSOM, только видимые элементы.',
      'Layout (reflow): вычисление позиций и размеров элементов.',
      'Paint: отрисовка пикселей на экране, может быть несколько слоёв.'
    ],
    tags: ['networks', 'performance', 'browser', 'rendering', 'intermediate'],
    examples: [
      {
        title: 'Шаги Critical Rendering Path',
        code: `// 1. ПАРСИНГ HTML → DOM
<html>
  <body>
    <h1>Hello</h1>
    <p>World</p>
  </body>
</html>
// → DOM Tree

// 2. ЗАГРУЗКА CSS → CSSOM
h1 { color: red; }
p { font-size: 16px; }
// → CSSOM Tree

// 3. ВЫПОЛНЕНИЕ JAVASCRIPT
// Может изменить DOM или CSSOM

// 4. СОЗДАНИЕ RENDER TREE
// Объединение DOM + CSSOM
// Только видимые элементы (без display: none)

// 5. LAYOUT (REFLOW)
// Вычисление позиций и размеров элементов

// 6. PAINT
// Отрисовка пикселей на экране

// РЕЗУЛЬТАТ: страница отображается`
      },
      {
        title: 'DOM построение',
        code: `// HTML парсится построчно:
<html>
  <head>
    <title>Page</title>
  </head>
  <body>
    <h1>Title</h1>
    <p>Text</p>
  </body>
</html>

// DOM Tree:
// html
//   ├── head
//   │   └── title ("Page")
//   └── body
//       ├── h1 ("Title")
//       └── p ("Text")

// КАЖДЫЙ УЗЕЛ = объект JavaScript
// Доступ через document.querySelector()`
      },
      {
        title: 'CSSOM построение',
        code: `// CSS парсится и создаёт CSSOM:
body { font-size: 16px; }
h1 { color: red; font-size: 24px; }
p { margin: 10px; }

// CSSOM Tree:
// body
//   └── font-size: 16px
// h1
//   ├── color: red
//   └── font-size: 24px
// p
//   └── margin: 10px

// CSSOM используется для стилизации элементов DOM`
      },
      {
        title: 'Render Tree',
        code: `// RENDER TREE = DOM + CSSOM
// Только видимые элементы:

// DOM:
// <div style="display: none">Hidden</div>
// <h1>Visible</h1>
// <p>Visible</p>

// CSSOM:
// h1 { color: red; }
// p { font-size: 16px; }

// RENDER TREE:
// h1 (color: red)
// p (font-size: 16px)
// (div не включён, т.к. display: none)

// Render Tree используется для layout и paint`
      },
      {
        title: 'Layout и Paint',
        code: `// LAYOUT (REFLOW):
// Вычисление позиций и размеров элементов
// Зависит от:
// - Размеры элементов
// - Позиционирование (static, relative, absolute)
// - Flexbox, Grid
// - Размер viewport

// PAINT:
// Отрисовка пикселей на экране
// Зависит от:
// - Цвета, границы, тени
// - Изображения, градиенты

// ОПТИМИЗАЦИЯ:
// - Минимизировать изменения layout (избегать изменения размеров)
// - Использовать transform вместо изменения позиции
// - Batch изменения DOM`
      },
      {
        title: 'Оптимизация CRP',
        code: `// 1. МИНИМИЗИРОВАТЬ РАЗМЕР РЕСУРСОВ
// - Минифицировать HTML, CSS, JS
// - Сжимать (Gzip, Brotli)
// - Удалять неиспользуемый код

// 2. КРИТИЧЕСКИЙ CSS
// - Inline критический CSS в <head>
// - Остальной CSS загружать асинхронно

// 3. ОТЛОЖИТЬ НЕКРИТИЧЕСКИЙ JS
// - Использовать defer для основного кода
// - Использовать async для аналитики

// 4. ПРЕФЕТЧ РЕСУРСОВ
// - <link rel="preload" href="/font.woff2">
// - <link rel="prefetch" href="/next-page.html">

// РЕЗУЛЬТАТ: быстрый First Contentful Paint`
      }
    ],
    relatedTopics: ['resource-loading', 'performance-compression', 'performance-prefetch'],
    isFrontendEssential: true
  },
  {
    id: 'performance-compression',
    title: 'Сжатие ресурсов',
    difficulty: 'intermediate',
    description: 'Сжатие ресурсов уменьшает размер передаваемых данных, ускоряя загрузку страницы. Gzip и Brotli — два основных алгоритма сжатия. Gzip поддерживается везде, Brotli обеспечивает лучшее сжатие (на 15–20%), но требует больше CPU. Текстовые форматы (HTML, CSS, JS) сжимаются хорошо, бинарные (изображения, видео) уже сжаты. Настройка сжатия на сервере критична для производительности.',
    keyPoints: [
      'Gzip: универсальный алгоритм сжатия, поддерживается всеми браузерами и серверами, сжатие ~70%.',
      'Brotli: современный алгоритм, лучшее сжатие чем Gzip (~15–20%), требует больше CPU, поддерживается современными браузерами.',
      'Текстовые форматы: HTML, CSS, JavaScript сжимаются хорошо (60–80% уменьшение размера).',
      'Бинарные форматы: изображения (JPEG, PNG), видео уже сжаты, дополнительное сжатие неэффективно.',
      'Настройка: сервер должен отправлять заголовок Content-Encoding, браузер указывает Accept-Encoding.',
      'Приоритет: Brotli предпочтительнее, fallback на Gzip для старых браузеров.'
    ],
    tags: ['networks', 'performance', 'compression', 'gzip', 'brotli', 'intermediate'],
    examples: [
      {
        title: 'Как работает сжатие',
        code: `// СЕРВЕР сжимает ресурс перед отправкой:
// Оригинал: 100KB HTML
// Сжатый (Gzip): 30KB
// Экономия: 70KB (70%)

// ЗАГОЛОВКИ:
// Клиент → Сервер:
Accept-Encoding: gzip, deflate, br

// Сервер → Клиент:
Content-Encoding: gzip
Content-Length: 30768

// БРАУЗЕР автоматически распаковывает

// РЕЗУЛЬТАТ:
// - Меньше данных передаётся
// - Быстрее загрузка
// - Меньше трафик`
      },
      {
        title: 'Gzip сжатие',
        code: `// GZIP - универсальный алгоритм
// Поддержка: все браузеры и серверы

// ЭФФЕКТИВНОСТЬ:
// HTML: 60-80% сжатие
// CSS: 70-80% сжатие
// JavaScript: 70-80% сжатие
// JSON: 70-90% сжатие

// ПРИМЕР:
// Оригинал: 500KB JavaScript
// Сжатый: 150KB
// Экономия: 350KB

// НАСТРОЙКА NGINX:
gzip on;
gzip_types text/html text/css application/javascript application/json;
gzip_min_length 1000;

// НАСТРОЙКА APACHE:
LoadModule deflate_module modules/mod_deflate.so
AddOutputFilterByType DEFLATE text/html text/css application/javascript`
      },
      {
        title: 'Brotli сжатие',
        code: `// BROTLI - современный алгоритм
// Поддержка: Chrome, Firefox, Edge (с 2016)
// Лучше Gzip на 15-20%

// ЭФФЕКТИВНОСТЬ:
// HTML: 75-85% сжатие (лучше Gzip)
// CSS: 80-85% сжатие
// JavaScript: 80-85% сжатие

// ПРИМЕР:
// Оригинал: 500KB JavaScript
// Gzip: 150KB
// Brotli: 120KB (на 20% лучше)

// НАСТРОЙКА NGINX:
brotli on;
brotli_types text/html text/css application/javascript;
brotli_comp_level 6;

// ПРИОРИТЕТ:
// Браузер указывает: Accept-Encoding: gzip, br
// Сервер выбирает лучший поддерживаемый`
      },
      {
        title: 'Что сжимать',
        code: `// ✅ ХОРОШО СЖИМАЕТСЯ:
// - HTML (текст)
// - CSS (текст)
// - JavaScript (текст)
// - JSON (текст)
// - XML (текст)
// - SVG (текст)

// ❌ НЕ СЖИМАЕТСЯ:
// - JPEG (уже сжат)
// - PNG (уже сжат)
// - GIF (уже сжат)
// - WebP (уже сжат)
// - MP4, MP3 (уже сжаты)
// - ZIP, GZ (уже сжаты)

// ПРАКТИКА:
// Сжимать все текстовые форматы
// Не сжимать бинарные (бесполезно, тратит CPU)`
      },
      {
        title: 'Настройка приоритетов',
        code: `// БРАУЗЕР отправляет:
Accept-Encoding: gzip, deflate, br

// СЕРВЕР должен:
// 1. Проверить поддержку Brotli
// 2. Если поддерживается → использовать Brotli
// 3. Если нет → использовать Gzip
// 4. Если нет → отправлять без сжатия

// NGINX КОНФИГ:
location ~* \\.(js|css|html|json)$ {
  brotli on;
  brotli_types text/html text/css application/javascript application/json;
  gzip on;
  gzip_types text/html text/css application/javascript application/json;
  # Brotli имеет приоритет, если поддерживается
}

// РЕЗУЛЬТАТ:
// Современные браузеры → Brotli (лучше сжатие)
// Старые браузеры → Gzip (совместимость)`
      }
    ],
    relatedTopics: ['critical-rendering-path', 'http-caching'],
    isFrontendEssential: true
  },
  {
    id: 'core-web-vitals',
    title: 'Core Web Vitals',
    difficulty: 'intermediate',
    description: 'Core Web Vitals — три ключевых метрики производительности веб-страниц, используемые Google для ранжирования. LCP (Largest Contentful Paint) измеряет скорость загрузки основного контента, CLS (Cumulative Layout Shift) — стабильность визуального отображения, INP (Interaction to Next Paint) — отзывчивость интерфейса. Оптимизация этих метрик улучшает пользовательский опыт и SEO.',
    keyPoints: [
      'LCP (Largest Contentful Paint): время до отображения самого большого элемента контента, цель < 2.5 сек.',
      'CLS (Cumulative Layout Shift): сумма сдвигов элементов при загрузке, цель < 0.1.',
      'INP (Interaction to Next Paint): время от взаимодействия до визуального отклика, цель < 200 мс.',
      'Измерение: метрики собираются в реальных условиях через Chrome User Experience Report.',
      'Оптимизация LCP: оптимизация изображений, критический CSS, быстрый сервер, CDN.',
      'Оптимизация CLS: указание размеров изображений, резервирование места для рекламы, избегание вставки контента поверх существующего.'
    ],
    tags: ['networks', 'performance', 'metrics', 'lcp', 'cls', 'inp', 'intermediate'],
    examples: [
      {
        title: 'LCP (Largest Contentful Paint)',
        code: `// LCP измеряет время до отображения
// самого большого элемента контента

// ЭЛЕМЕНТЫ LCP:
// - <img>
// - <video>
// - Блок с background-image
// - Текст в блоке

// ХОРОШО: < 2.5 секунды
// ПЛОХО: > 4.0 секунды

// ПРИМЕР:
// 0.0s: Начало загрузки
// 1.2s: HTML загружен
// 2.1s: CSS загружен
// 2.3s: LCP (большое изображение отобразилось)
// LCP = 2.3s ✅ (хорошо)

// ОПТИМИЗАЦИЯ:
// - Оптимизировать изображения (WebP, размеры)
// - Использовать preload для критических ресурсов
// - Ускорить сервер (TTFB)`
      },
      {
        title: 'CLS (Cumulative Layout Shift)',
        code: `// CLS измеряет визуальную стабильность
// Сумма всех сдвигов элементов

// ПРИЧИНЫ СДВИГОВ:
// - Изображения без размеров
// - Реклама загружается позже
// - Шрифты загружаются позже (FOUT/FOIT)
// - Динамический контент вставляется поверх

// ХОРОШО: < 0.1
// ПЛОХО: > 0.25

// ПРИМЕР:
// 1. Страница загружается, текст отображается
// 2. Изображение загружается → сдвигает текст вниз (shift 0.15)
// 3. Реклама загружается → сдвигает контент (shift 0.10)
// CLS = 0.15 + 0.10 = 0.25 ❌ (плохо)

// ОПТИМИЗАЦИЯ:
// - Указывать размеры изображений (width, height)
// - Резервировать место для рекламы
// - Использовать font-display: swap для шрифтов`
      },
      {
        title: 'INP (Interaction to Next Paint)',
        code: `// INP измеряет отзывчивость
// Время от взаимодействия до визуального отклика

// ВЗАИМОДЕЙСТВИЯ:
// - Клик
// - Нажатие клавиши
// - Тап на мобильном

// ХОРОШО: < 200 мс
// ПЛОХО: > 500 мс

// ПРИМЕР:
// 0ms: Пользователь кликает кнопку
// 50ms: Обработчик события запущен
// 120ms: JavaScript выполнен
// 180ms: DOM обновлён
// 200ms: Браузер отрисовал изменения
// INP = 200ms ✅ (хорошо)

// ПРИМЕР ПЛОХОГО:
// 0ms: Клик
// 200ms: Обработчик (долгая очередь задач)
// 800ms: JavaScript выполнен
// 900ms: DOM обновлён
// 1000ms: Отрисовка
// INP = 1000ms ❌ (плохо)

// ОПТИМИЗАЦИЯ:
// - Разбивать длинные задачи
// - Использовать requestIdleCallback
// - Оптимизировать обработчики событий`
      },
      {
        title: 'Измерение Core Web Vitals',
        code: `// В CHROME DEVTOOLS:
// 1. Открыть Performance
// 2. Записать сессию
// 3. Посмотреть Web Vitals

// ПРОГРАММНО:
import {getCLS, getFID, getLCP} from 'web-vitals';

getCLS(console.log);
getLCP(console.log);
getINP(console.log);

// В GOOGLE SEARCH CONSOLE:
// - Отчёт Core Web Vitals
// - Данные из Chrome User Experience Report
// - Реальные пользователи

// В PAGE SPEED INSIGHTS:
// - Анализ страницы
// - Показывает LCP, CLS, INP
// - Рекомендации по оптимизации`
      },
      {
        title: 'Оптимизация всех метрик',
        code: `// ОПТИМИЗАЦИЯ LCP:
// - Оптимизировать изображения (WebP, размеры, lazy loading)
// - Использовать preload для критических ресурсов
// - Ускорить сервер (TTFB < 600ms)
// - Минимизировать блокирующие ресурсы

// ОПТИМИЗАЦИЯ CLS:
// - Указывать размеры изображений (width, height)
// - Резервировать место для рекламы
// - Использовать font-display: swap
// - Избегать вставки контента поверх существующего

// ОПТИМИЗАЦИЯ INP:
// - Оптимизировать JavaScript (минификация, code splitting)
// - Разбивать длинные задачи
// - Использовать Web Workers для тяжёлых вычислений
// - Оптимизировать обработчики событий

// РЕЗУЛЬТАТ:
// - Лучший пользовательский опыт
// - Выше ранжирование в Google
// - Больше конверсий`
      }
    ],
    relatedTopics: ['critical-rendering-path', 'resource-loading', 'performance-prefetch'],
    isFrontendEssential: true
  }
];
