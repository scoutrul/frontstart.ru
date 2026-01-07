import { Topic } from '../../../types';

export const FRONTEND_INFRASTRUCTURE_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'nodejs-frontend-infrastructure',
    title: 'Node.js',
    difficulty: 'intermediate',
    description: 'Node.js — это среда выполнения JavaScript, которая используется во фронтенд-разработке как инфраструктурный фундамент. Она обеспечивает работу dev-серверов, сборщиков, тестов и автоматизации до того, как код попадёт в браузер. Фронтендер взаимодействует с Node.js как с инструментом пайплайна разработки, а не как с платформой для UI.',
    keyPoints: [
      'Runtime-среда: выполнение JavaScript вне браузера (CLI, файловая система, процессы)',
      'Инструменты разработки: dev-серверы, сборщики, линтеры, тесты',
      'Dev pipeline: запуск локального сервера, HMR, proxy, watchers',
      'Build pipeline: сборка, оптимизация и генерация production-кода',
      'Экосистема: npm как стандартный менеджер зависимостей',
      'Среда исполнения: используется до попадания кода в браузер',
      'Альтернативы: Bun и Deno как runtime-платформы нового поколения'
    ],
    funFact: 'Большинство фронтенд-разработчиков используют Node.js ежедневно, даже если никогда не писали серверный код напрямую.',
    additionalDescription: 'Важно различать JavaScript как язык и Node.js как среду выполнения. Во фронтенд-инфраструктуре Node.js выступает связующим слоем между операционной системой и инструментами разработки, обеспечивая единый runtime для всего процесса подготовки приложения.',
    tags: ['nodejs', 'runtime', 'infrastructure', 'tools', 'build', 'development', 'intermediate'],
    relatedTopics: ['operating-systems', 'frontend-infrastructure-intro'],
    isFrontendEssential: true,
    examples: [
      {
        title: 'Node.js в dev pipeline',
        code: `// Запуск dev-сервера
npm run dev

// Node.js запускает:
// - локальный HTTP-сервер
// - файловые watcher'ы
// - HMR
// - proxy для API`
      },
      {
        title: 'Node.js в build pipeline',
        code: `// Production-сборка проекта
npm run build

// Node.js выполняет:
// - анализ зависимостей
// - сборку модулей
// - оптимизацию и минификацию
// - генерацию итоговых файлов`
      }
    ]
  },
  {
    id: 'dev-server-basics',
    title: 'Dev server',
    difficulty: 'intermediate',
    description: 'Dev server — это локальный сервер разработки, который запускается во время написания фронтенд-кода. Он обеспечивает быстрый feedback loop: отдаёт приложение браузеру, отслеживает изменения файлов и обновляет код без полной перезагрузки страницы.',
    keyPoints: [
      'Работает локально во время разработки',
      'Запускается в среде Node.js',
      'Отдаёт приложение браузеру по HTTP',
      'Следит за изменениями файлов (watchers)',
      'Поддерживает live reload или HMR',
      'Может проксировать запросы к API'
    ],
    additionalDescription: 'Dev server не предназначен для production. Его основная задача — ускорить разработку и упростить отладку. В production-коде dev server отсутствует полностью.',
    funFact: 'Dev server не существует в итоговом билде приложения — он нужен только разработчику.',
    tags: ['dev-server', 'infrastructure', 'tools', 'development', 'intermediate'],
    relatedTopics: ['nodejs-frontend-infrastructure', 'build-step-bundlers', 'hmr-and-dx'],
    isFrontendEssential: true,
    examples: [
      {
        title: 'Запуск dev server',
        code: `npm run dev

// Node.js запускает:
// - HTTP-сервер
// - файловые watcher'ы
// - систему обновления кода`
      }
    ]
  },
  {
    id: 'build-step-bundlers',
    title: 'Build step и bundlers',
    difficulty: 'intermediate',
    description: 'Build step — это этап подготовки фронтенд-приложения к production. Во время сборки код анализируется, оптимизируется и преобразуется в формат, готовый для запуска в браузере. Bundlers — инструменты, выполняющие этот процесс.',
    keyPoints: [
      'Выполняется в Node.js',
      'Не существует во время работы приложения',
      'Анализирует зависимости (dependency graph)',
      'Объединяет модули в бандлы',
      'Оптимизирует и минифицирует код',
      'Генерирует production-файлы'
    ],
    additionalDescription: 'Без build step невозможно эффективно использовать модули, TypeScript, современные возможности JavaScript и оптимизацию производительности.',
    funFact: 'Bundler — это обычная программа на Node.js, которая читает и переписывает файлы.',
    tags: ['bundler', 'build', 'infrastructure', 'tools', 'intermediate'],
    relatedTopics: ['dev-server-basics', 'nodejs-frontend-infrastructure', 'vite-architecture'],
    isFrontendEssential: true,
    examples: [
      {
        title: 'Production build',
        code: `npm run build

// Результат:
// - dist/ или build/
// - готовые JS, CSS, assets`
      }
    ]
  },
  {
    id: 'hmr-and-dx',
    title: 'HMR и DX',
    difficulty: 'intermediate',
    description: 'HMR (Hot Module Replacement) — механизм обновления модулей в работающем приложении без полной перезагрузки страницы. DX (Developer Experience) — совокупность факторов, делающих процесс разработки быстрым и комфортным.',
    keyPoints: [
      'Обновление отдельных модулей без reload',
      'Сохраняет состояние приложения',
      'Работает поверх dev server',
      'Снижает время обратной связи',
      'Ключевой фактор современного DX'
    ],
    additionalDescription: 'HMR реализуется на уровне dev server и bundler. Хороший DX напрямую влияет на скорость разработки и качество кода.',
    funFact: 'Плохой HMR может замедлять разработку сильнее, чем его отсутствие.',
    tags: ['hmr', 'dx', 'dev-server', 'infrastructure', 'tools', 'intermediate'],
    relatedTopics: ['dev-server-basics', 'vite-architecture'],
    isFrontendEssential: true,
    examples: [
      {
        title: 'Изменение компонента',
        code: `// Изменили компонент
// Браузер обновил только модуль
// Состояние приложения сохранено`
      }
    ]
  },
  {
    id: 'vite-architecture',
    title: 'Vite: современная архитектура',
    difficulty: 'intermediate',
    description: 'Vite — современный инструмент разработки, который переосмыслил работу dev server и build step. В режиме разработки он использует нативные ES-модули браузера, а для production — быстрый bundler.',
    keyPoints: [
      'Dev server без предварительной сборки',
      'Использует ESM в браузере',
      'Мгновенный старт проекта',
      'Быстрый HMR',
      'Отдельный dev и build режимы'
    ],
    additionalDescription: 'Vite разделяет понятия dev и build. Это позволяет получить максимально быстрый dev server и оптимальный production-бандл.',
    funFact: 'Vite стал де-факто стандартом для новых фронтенд-проектов.',
    tags: ['vite', 'bundler', 'dev-server', 'infrastructure', 'tools', 'intermediate'],
    relatedTopics: ['dev-server-basics', 'build-step-bundlers', 'hmr-and-dx'],
    isFrontendEssential: true,
    examples: [
      {
        title: 'Dev vs Build в Vite',
        code: `vite        // dev server (ESM)
vite build  // production build`
      }
    ]
  },
  {
    id: 'bun-deno-runtime',
    title: 'Bun и Deno',
    difficulty: 'intermediate',
    description: 'Bun и Deno — современные runtime-платформы для JavaScript и TypeScript, которые предлагают альтернативу Node.js в инфраструктуре фронтенд-разработки.',
    keyPoints: [
      'Runtime вне браузера',
      'Альтернатива Node.js',
      'Встроенные инструменты (bundler, test runner)',
      'Повышенный фокус на DX и производительность',
      'Пока не стандарт индустрии'
    ],
    additionalDescription: 'Несмотря на технологические преимущества, Node.js остаётся стандартом из-за зрелой экосистемы. Bun и Deno активно развиваются и могут стать основой будущих пайплайнов.',
    funFact: 'Bun может выполнять npm-пакеты без npm.',
    tags: ['bun', 'deno', 'runtime', 'infrastructure', 'tools', 'intermediate'],
    relatedTopics: ['nodejs-frontend-infrastructure', 'vite-architecture'],
    isFrontendEssential: true,
    examples: [
      {
        title: 'Запуск проекта на Bun',
        code: `bun install
bun run dev`
      }
    ]
  },
  {
    id: 'pwa-overview',
    title: 'PWA',
    difficulty: 'intermediate',
    description: 'PWA (Progressive Web App) — это формат доставки и запуска фронтенд-приложений, который позволяет веб-приложению работать как нативное: устанавливаться, работать офлайн и получать обновления. PWA находится на уровне production-инфраструктуры и опирается на браузерные API, а не на конкретный фреймворк или runtime.',
    keyPoints: [
      'Формат приложения: способ доставки и запуска веб-приложения, а не фреймворк или библиотека',
      'Production-ориентированность: активируется и работает корректно только в production-среде',
      'Service Worker: фоновой скрипт для кеширования, офлайн-режима и обновлений',
      'Web App Manifest: метаданные приложения (имя, иконки, режим отображения)',
      'Offline-first подход: приложение может работать без сети',
      'Installability: установка на устройство из браузера без app store',
      'HTTPS requirement: PWA работает только по защищённому соединению',
      'Независимость от стека: работает с любым фреймворком и сборщиком'
    ],
    additionalDescription: 'PWA не участвует в процессе разработки напрямую и не влияет на dev server. Все ключевые возможности PWA появляются после сборки приложения и зависят от корректной production-конфигурации: кеширования ассетов, стратегии обновлений и поддержки браузерных API. Поэтому PWA логично рассматривать как часть delivery и production pipeline фронтенд-приложений.',
    funFact: 'Первоначально термин PWA был введён Google в 2015 году как маркетинговое название набора браузерных возможностей, а не отдельной технологии.',
    tags: ['pwa', 'infrastructure', 'browser-api', 'service-workers', 'offline', 'build', 'deployment', 'frontend', 'intermediate'],
    relatedTopics: ['build-step-bundlers', 'browser-support', 'vite-architecture'],
    isFrontendEssential: true,
    examples: [
      {
        title: 'Web App Manifest',
        code: `{
  "name": "My PWA App",
  "short_name": "PWA App",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0d6efd",
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}`
      },
      {
        title: 'Регистрация Service Worker',
        code: `if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => {
        // Service Worker зарегистрирован
      })
      .catch(() => {
        // Ошибка регистрации
      });
  });
}`
      },
      {
        title: 'Простейший Service Worker',
        code: `self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('app-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/app.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});`
      }
    ]
  }
];
