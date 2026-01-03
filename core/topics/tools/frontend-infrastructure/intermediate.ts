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
    examples: [
      {
        title: 'Запуск проекта на Bun',
        code: `bun install
bun run dev`
      }
    ]
  }
];
