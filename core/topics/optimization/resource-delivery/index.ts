import { Topic } from '../../../types';

export const RESOURCE_DELIVERY_TOPICS: Topic[] = [
  {
    id: 'resource-delivery-introduction',
    title: 'Оптимизация доставки ресурсов',
    difficulty: 'beginner',
    description: 'Delivery & Network Optimization — это комплекс техник, направленных на ускорение загрузки ресурсов (HTML, CSS, JavaScript, изображения, шрифты) от сервера до браузера пользователя. Оптимизация доставки ресурсов напрямую влияет на метрики производительности, особенно на LCP и TTFB.\n\nОсновные направления: использование CDN для географического распределения контента, кэширование на разных уровнях, сжатие и минификация ресурсов, оптимизация сетевых протоколов и предварительная загрузка критичных ресурсов.',
    keyPoints: [
      'CDN (Content Delivery Network): географическое распределение контента, уменьшение задержек загрузки',
      'Кэширование: HTTP-кэширование, Service Worker, уменьшение повторных запросов',
      'Минификация и сжатие: уменьшение размера файлов через Gzip/Brotli и удаление лишних символов',
      'Оптимизация изображений: современные форматы (WebP, AVIF), lazy loading, адаптивные размеры',
      'Сетевые оптимизации: HTTP/2, HTTP/3, prefetch/preconnect/preload для ускорения загрузки',
      'Снижение round-trips: объединение запросов, приоритизация критичных ресурсов'
    ],
    additionalDescription: 'Оптимизация доставки ресурсов — это первый уровень оптимизации производительности. Даже если код идеально оптимизирован, медленная доставка ресурсов по сети сведёт на нет все усилия. Современные подходы включают использование CDN для доставки контента из ближайших к пользователю точек присутствия, агрессивное кэширование статических ресурсов, сжатие и минификацию для уменьшения объёма передаваемых данных, а также оптимизацию сетевых протоколов для параллельной загрузки ресурсов.',
    tags: [
      'performance',
      'optimization',
      'cdn',
      'caching',
      'network',
      'delivery',
      'compression'
    ],
    relatedTopics: [
      'performance-introduction',
      'lcp-optimization',
      'bundle-optimization'
    ],
    examples: [],
    isFrontendEssential: true
  },
  {
    id: 'cdn-content-delivery-network',
    title: 'CDN (Content Delivery Network)',
    difficulty: 'beginner',
    description: 'CDN (Content Delivery Network) — это сеть распределённых серверов, которые хранят копии контента в разных географических точках. Когда пользователь запрашивает ресурс, CDN доставляет его с ближайшего сервера, что значительно уменьшает задержку загрузки.\n\nCDN ускоряет загрузку страниц за счёт уменьшения расстояния между пользователем и сервером, параллельной загрузки ресурсов и оптимизации сетевых маршрутов.',
    keyPoints: [
      'Что такое CDN: сеть серверов, распределённых географически, хранящих копии контента',
      'Как CDN ускоряет загрузку: доставка с ближайшего сервера → меньше задержка (latency), параллельная загрузка ресурсов, оптимизация маршрутов',
      'Примеры популярных CDN: Cloudflare (бесплатный тариф, DDoS защита), Akamai (крупнейшая сеть), AWS CloudFront (интеграция с AWS), Fastly (низкая задержка)',
      'Когда использовать CDN: статические ресурсы (изображения, CSS, JS, шрифты), медиа-файлы, для глобальной аудитории',
      'Настройка CDN: выбор точек присутствия (POP), настройка кэширования, сжатие на уровне CDN'
    ],
    additionalDescription: 'CDN работает по принципу географического распределения: вместо загрузки всех ресурсов с одного сервера, контент кэшируется на множестве серверов по всему миру. Когда пользователь запрашивает ресурс, CDN автоматически определяет ближайший сервер и доставляет контент оттуда. Это особенно важно для глобальных проектов, где пользователи находятся в разных странах и континентах. CDN также обеспечивает защиту от DDoS-атак и может оптимизировать изображения на лету.',
    tags: [
      'performance',
      'cdn',
      'network',
      'optimization',
      'delivery'
    ],
    relatedTopics: [
      'resource-delivery-introduction',
      'caching',
      'lcp-optimization'
    ],
    examples: [
      {
        title: 'Использование CDN для статических ресурсов',
        code: `<!-- Вместо загрузки с основного сервера -->
<link rel="stylesheet" href="https://example.com/styles.css">

<!-- Используем CDN -->
<link rel="stylesheet" href="https://cdn.example.com/styles.css">

<!-- Или популярные библиотеки через CDN -->
<script src="https://cdn.jsdelivr.net/npm/react@18/index.min.js"></script>
<script src="https://unpkg.com/lodash@4/lodash.min.js"></script>`
      },
      {
        title: 'Настройка CDN в Cloudflare',
        code: `// Cloudflare автоматически кэширует статические ресурсы
// Настройка через панель управления:

// 1. Page Rules для кэширования
// URL: example.com/static/*
// Settings: Cache Level: Cache Everything
//           Edge Cache TTL: 1 month

// 2. Автоматическое сжатие
// Speed → Optimization → Auto Minify
// ✅ JavaScript
// ✅ CSS
// ✅ HTML`
      }
    ]
  },
  {
    id: 'caching',
    title: 'Кэширование',
    difficulty: 'intermediate',
    description: 'Кэширование — это сохранение копий ресурсов для повторного использования без повторной загрузки с сервера. Правильное кэширование значительно ускоряет повторные визиты пользователей и снижает нагрузку на сервер.\n\nКэширование работает на разных уровнях: браузер (HTTP-кэш), CDN, Service Worker. Каждый уровень имеет свои правила инвалидации и обновления.',
    keyPoints: [
      'HTTP-кэширование: Cache-Control заголовки (max-age, no-cache, must-revalidate), ETag для проверки изменений, Last-Modified для условных запросов',
      'Service Worker и кэш на клиенте: программное кэширование через Cache API, стратегии кэширования (Cache First, Network First, Stale While Revalidate)',
      'Инвалидация кэша: версионирование файлов (styles.v2.css), query-параметры (?v=123), изменение имён файлов при обновлении',
      'Уровни кэширования: браузер → CDN → сервер, каждый уровень может кэшировать ресурсы',
      'Стратегии кэширования: для статики — долгий срок, для динамики — короткий или no-cache'
    ],
    additionalDescription: 'Кэширование — один из самых эффективных способов ускорения загрузки. HTTP-кэширование позволяет браузеру сохранять ресурсы и использовать их при повторных визитах без запросов к серверу. Service Worker даёт больше контроля над кэшированием и позволяет кэшировать ресурсы программно, создавая офлайн-функциональность. Правильная стратегия кэширования балансирует между скоростью загрузки и актуальностью контента.',
    tags: [
      'performance',
      'caching',
      'http',
      'service-worker',
      'optimization'
    ],
    relatedTopics: [
      'resource-delivery-introduction',
      'cdn-content-delivery-network',
      'bundle-optimization'
    ],
    isFrontendEssential: true,
    examples: [
      {
        title: 'HTTP-кэширование с Cache-Control',
        code: `// На сервере (Node.js/Express)
app.use('/static', express.static('public', {
  maxAge: '1y', // Кэш на 1 год
  etag: true,
  lastModified: true
}));

// Или через заголовки
app.get('/api/data', (req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=3600'); // 1 час
  res.setHeader('ETag', generateETag(data));
  res.json(data);
});

// В .htaccess (Apache)
<FilesMatch "\.(css|js|jpg|png|gif|woff2)$">
  Header set Cache-Control "max-age=31536000, public"
</FilesMatch>`
      },
      {
        title: 'Service Worker кэширование',
        code: `// service-worker.js
const CACHE_NAME = 'app-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/app.js',
  '/images/logo.png'
];

// Установка - кэшируем ресурсы
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Стратегия: Cache First
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Возвращаем из кэша, если есть
        if (response) return response;
        // Иначе загружаем из сети
        return fetch(event.request);
      })
  );
});`
      },
      {
        title: 'Инвалидация кэша через версионирование',
        code: `// Версионирование в имени файла
<link rel="stylesheet" href="/styles.v2.css">
<script src="/app.v3.js"></script>

// Или через query-параметры
<link rel="stylesheet" href="/styles.css?v=2.0.1">
<script src="/app.js?v=2.0.1"></script>

// В build-процессе (Webpack/Vite)
// Автоматически добавляет хеш к имени файла
// styles.a1b2c3d4.css → при изменении получает новый хеш`
      }
    ]
  },
  {
    id: 'minification-compression',
    title: 'Минификация и сжатие ресурсов',
    difficulty: 'intermediate',
    description: 'Минификация и сжатие ресурсов уменьшают объём передаваемых данных, что ускоряет загрузку страниц. Минификация удаляет лишние символы из кода, а сжатие (Gzip/Brotli) уменьшает размер файлов при передаче по сети.\n\nМинификация применяется к JavaScript, CSS и HTML. Сжатие работает на уровне сервера и автоматически применяется к текстовым файлам.',
    keyPoints: [
      'Gzip / Brotli: алгоритмы сжатия на уровне сервера, Brotli даёт лучшее сжатие чем Gzip (на 15-20%), автоматическое сжатие текстовых файлов',
      'Минификация JS: удаление пробелов, комментариев, переименование переменных, tree shaking для удаления неиспользуемого кода',
      'Минификация CSS: удаление пробелов, комментариев, объединение правил, удаление неиспользуемых стилей',
      'Минификация HTML: удаление пробелов, комментариев, оптимизация атрибутов',
      'Настройка сжатия: включение на сервере (nginx, Apache), приоритет Brotli над Gzip, сжатие только текстовых файлов'
    ],
    additionalDescription: 'Минификация и сжатие — это базовые техники оптимизации размера ресурсов. Минификация удаляет из кода всё, что не нужно для выполнения: пробелы, комментарии, переносы строк. Сжатие (Gzip/Brotli) использует алгоритмы сжатия данных для уменьшения размера файлов при передаче по сети. Современные браузеры автоматически поддерживают Brotli, который даёт лучшее сжатие чем Gzip. Эти техники особенно эффективны для текстовых файлов (JS, CSS, HTML), которые могут сжиматься на 60-80%.',
    tags: [
      'performance',
      'optimization',
      'compression',
      'minification',
      'gzip',
      'brotli'
    ],
    relatedTopics: [
      'resource-delivery-introduction',
      'bundle-optimization',
      'cdn-content-delivery-network'
    ],
    isFrontendEssential: true,
    examples: [
      {
        title: 'Настройка Gzip/Brotli на nginx',
        code: `# nginx.conf
# Включение Gzip
gzip on;
gzip_vary on;
gzip_min_length 1000;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

# Включение Brotli (если установлен модуль)
brotli on;
brotli_comp_level 6;
brotli_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;`
      },
      {
        title: 'Минификация в Webpack',
        code: `// webpack.config.js
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Удаляет console.log
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
};

// Автоматически минифицирует JS и CSS в production`
      },
      {
        title: 'Сравнение размеров',
        code: `// До минификации и сжатия
app.js: 500 KB

// После минификации
app.min.js: 200 KB (уменьшение на 60%)

// После Gzip
app.min.js.gz: 60 KB (уменьшение на 88%)

// После Brotli
app.min.js.br: 50 KB (уменьшение на 90%)`
      }
    ]
  },
  {
    id: 'image-media-optimization',
    title: 'Оптимизация изображений и медиа',
    difficulty: 'intermediate',
    description: 'Изображения часто составляют большую часть объёма загружаемых ресурсов. Оптимизация изображений включает использование современных форматов (WebP, AVIF), lazy loading, адаптивные размеры и правильное сжатие.\n\nПравильная оптимизация изображений может уменьшить объём трафика на 70-80% и значительно улучшить LCP.',
    keyPoints: [
      'WebP / AVIF: современные форматы изображений, WebP на 25-35% меньше чем JPEG при том же качестве, AVIF на 50% меньше чем JPEG',
      'Lazy Loading: загрузка изображений только при приближении к viewport (loading="lazy"), уменьшение начального объёма страницы',
      'CDN + адаптивные изображения: автоматическая оптимизация через CDN (Cloudflare Images, ImageKit), srcset для разных размеров экрана',
      'Оптимизация форматов: JPEG для фотографий, PNG для графики с прозрачностью, SVG для векторной графики, WebP/AVIF как универсальная замена',
      'Responsive images: srcset и sizes для адаптивных изображений, picture element для выбора формата'
    ],
    additionalDescription: 'Изображения часто занимают 60-80% объёма страницы. Оптимизация изображений критична для производительности. Современные форматы (WebP, AVIF) дают значительно лучшее сжатие при том же визуальном качестве. Lazy loading откладывает загрузку изображений вне viewport до момента, когда пользователь прокручивает страницу. Адаптивные изображения позволяют загружать разные размеры для разных устройств, что особенно важно для мобильных устройств с ограниченной пропускной способностью.',
    tags: [
      'performance',
      'optimization',
      'images',
      'webp',
      'avif',
      'lazy-loading'
    ],
    relatedTopics: [
      'resource-delivery-introduction',
      'lcp-optimization',
      'cdn-content-delivery-network'
    ],
    isFrontendEssential: true,
    examples: [
      {
        title: 'Использование WebP с fallback',
        code: `<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Описание" loading="lazy">
</picture>

<!-- Браузер выберет поддерживаемый формат -->
<!-- AVIF → WebP → JPEG (fallback) -->`
      },
      {
        title: 'Lazy Loading изображений',
        code: `<!-- Нативное lazy loading -->
<img src="hero.jpg" alt="Hero" loading="eager"> <!-- Загружается сразу -->
<img src="feature1.jpg" alt="Feature" loading="lazy"> <!-- Загружается при прокрутке -->
<img src="feature2.jpg" alt="Feature" loading="lazy">

<!-- Или через Intersection Observer -->
<img data-src="image.jpg" class="lazy" alt="Image">
<script>
  const lazyImages = document.querySelectorAll('img.lazy');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        imageObserver.unobserve(img);
      }
    });
  });
  lazyImages.forEach(img => imageObserver.observe(img));
</script>`
      },
      {
        title: 'Адаптивные изображения с srcset',
        code: `<img 
  srcset="
    image-400w.jpg 400w,
    image-800w.jpg 800w,
    image-1200w.jpg 1200w
  "
  sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
  src="image-800w.jpg"
  alt="Адаптивное изображение"
  loading="lazy"
>

<!-- Браузер выберет подходящий размер в зависимости от экрана -->`
      },
      {
        title: 'CDN оптимизация изображений (Cloudflare)',
        code: `<!-- Оригинальное изображение -->
<img src="https://example.com/photo.jpg" alt="Photo">

<!-- Оптимизированное через Cloudflare Images -->
<img src="https://example.com/cdn-cgi/image/format=webp,quality=80/photo.jpg" alt="Photo">

<!-- Автоматическая оптимизация:
     - Конвертация в WebP
     - Сжатие до 80% качества
     - Кэширование оптимизированных версий -->`
      }
    ]
  },
  {
    id: 'network-optimizations',
    title: 'Другие сетевые оптимизации',
    difficulty: 'intermediate',
    description: 'Современные сетевые протоколы и техники предварительной загрузки позволяют дополнительно ускорить загрузку ресурсов. HTTP/2 и HTTP/3 обеспечивают мультиплексирование и параллельную загрузку, а prefetch/preconnect/preload дают браузеру подсказки о приоритетных ресурсах.',
    keyPoints: [
      'HTTP/2 и HTTP/3: мультиплексирование (параллельная загрузка ресурсов в одном соединении), приоритизация запросов, уменьшение overhead',
      'Prefetch / Preconnect / Preload: предварительная загрузка ресурсов, prefetch для будущих страниц, preconnect для установки соединения, preload для критичных ресурсов',
      'Reducing round-trips: уменьшение количества запросов (объединение файлов, sprites), использование HTTP/2 для параллельной загрузки, DNS prefetch',
      'Приоритизация ресурсов: fetchpriority="high" для критичных ресурсов, defer/async для скриптов, rel="preload" для важных ресурсов'
    ],
    additionalDescription: 'HTTP/2 и HTTP/3 решают проблему ограничений HTTP/1.1, где можно было загружать только один ресурс за раз по одному соединению. HTTP/2 позволяет загружать множество ресурсов параллельно в одном соединении, а HTTP/3 использует QUIC протокол для ещё большей эффективности. Prefetch, preconnect и preload дают браузеру подсказки о том, какие ресурсы нужно загрузить заранее, что ускоряет отображение страницы.',
    tags: [
      'performance',
      'network',
      'http2',
      'http3',
      'preload',
      'prefetch',
      'optimization'
    ],
    relatedTopics: [
      'resource-delivery-introduction',
      'cdn-content-delivery-network',
      'lcp-optimization'
    ],
    isFrontendEssential: true,
    examples: [
      {
        title: 'Preload, Preconnect, Prefetch',
        code: `<head>
  <!-- Preload: загрузить критичный ресурс сразу -->
  <link rel="preload" as="font" href="/fonts/main.woff2" crossorigin>
  <link rel="preload" as="image" href="/hero.webp">
  <link rel="preload" as="script" href="/critical.js">
  
  <!-- Preconnect: установить соединение заранее -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://api.example.com">
  
  <!-- Prefetch: загрузить для будущей страницы -->
  <link rel="prefetch" href="/next-page.html">
  <link rel="prefetch" as="script" href="/next-page.js">
  
  <!-- DNS prefetch: резолвить DNS заранее -->
  <link rel="dns-prefetch" href="https://cdn.example.com">
</head>`
      },
      {
        title: 'HTTP/2 мультиплексирование',
        code: `// HTTP/1.1: последовательная загрузка
// Запрос 1 → Ответ 1 → Запрос 2 → Ответ 2 → ...

// HTTP/2: параллельная загрузка в одном соединении
// Запрос 1, 2, 3, 4... → Параллельные ответы

// Настройка на сервере (nginx)
server {
  listen 443 ssl http2; // Включение HTTP/2
  ssl_certificate /path/to/cert.pem;
  ssl_certificate_key /path/to/key.pem;
  
  # HTTP/2 автоматически использует мультиплексирование
}`
      },
      {
        title: 'Приоритизация ресурсов',
        code: `<!-- Критичный ресурс с высоким приоритетом -->
<link rel="preload" as="image" href="hero.webp" fetchpriority="high">
<img src="hero.webp" fetchpriority="high" alt="Hero">

<!-- Некритичный ресурс с низким приоритетом -->
<img src="footer-logo.png" fetchpriority="low" alt="Logo">

<!-- Скрипты с defer (не блокируют рендер) -->
<script src="analytics.js" defer></script>

<!-- Критичный CSS inline -->
<style>
  /* Критичные стили */
</style>`
      },
      {
        title: 'Уменьшение round-trips',
        code: `<!-- Плохо: много отдельных запросов -->
<link rel="stylesheet" href="reset.css">
<link rel="stylesheet" href="base.css">
<link rel="stylesheet" href="components.css">
<link rel="stylesheet" href="utilities.css">

<!-- Хорошо: объединение (для HTTP/1.1) -->
<link rel="stylesheet" href="styles.css"> <!-- Все стили в одном файле -->

<!-- Или используем HTTP/2 для параллельной загрузки -->
<!-- HTTP/2 позволяет загружать множество файлов параллельно -->

<!-- DNS prefetch для внешних доменов -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://cdn.example.com">`
      }
    ]
  }
];
