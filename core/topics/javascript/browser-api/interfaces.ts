import { Topic } from '../../../types';

export const JS_BROWSER_API_INTERFACES_TOPICS: Topic[] = [
  {
    id: 'interfaces-dom-core',
    title: 'Ключевые DOM/HTML интерфейсы',
    difficulty: 'beginner',
    description:
      'Минимальный набор объектов, без которых не обходится ни одно веб-приложение. Элементы дерева, события, работа с геометрией и URL. Эти интерфейсы встречаются в любой фронтенд-задаче и часто спрашиваются на собеседованиях.',
    keyPoints: [
      'Node / Element / HTMLElement: базовые узлы DOM, свойства типа children, attributes, classList.',
      'Document / DocumentFragment / ShadowRoot: точки входа в дерево, шаблоны, инкапсуляция через Shadow DOM.',
      'EventTarget / Event / CustomEvent: подписка addEventListener/removeEventListener, всплытие/захват, кастомные события.',
      'Range / Selection: работа с выделением текста и диапазонами в DOM.',
      'URL / URLSearchParams: разбор и сборка адресов, работа с query параметрами.',
      'Window / History / Location / Navigator: глобальный контекст, навигация, информация об окружении.',
      'DOMRect / DOMMatrix: измерения элементов и геометрические трансформации.'
    ],
    tags: ['interfaces', 'dom', 'event', 'url', 'window', 'navigator', 'history', 'location'],
    examples: [
      {
        title: 'Работа с Element и EventTarget',
        code: `const btn = document.querySelector('button');
btn.addEventListener('click', (event) => {
  console.log(event.target instanceof HTMLElement); // true
  btn.classList.toggle('active');
});`
      },
      {
        title: 'URL и параметры',
        code: `const url = new URL('https://example.com/path?foo=bar');
url.searchParams.set('page', '2');
console.log(url.toString()); // https://example.com/path?foo=bar&page=2`
      }
    ],
    relatedTopics: ['dom-api', 'event-api', 'history-api']
  },
  {
    id: 'interfaces-network',
    title: 'Сетевые интерфейсы',
    difficulty: 'beginner',
    description:
      'Интерфейсы, которые нужны для HTTP и реал-тайм коммуникаций. Request/Response/Headers для fetch, AbortController для отмены, WebSocket/EventSource для стрима данных.',
    keyPoints: [
      'Request / Response / Headers / FormData: основа Fetch API для HTTP запросов.',
      'AbortController / AbortSignal: отмена запросов и любых асинхронных задач.',
      'WebSocket: двусторонний канал в реальном времени, события open/message/error/close.',
      'EventSource: однонаправленный стрим от сервера (Server-Sent Events), автоматическое переподключение.'
    ],
    tags: ['interfaces', 'network', 'fetch', 'abortcontroller', 'websocket', 'sse'],
    examples: [
      {
        title: 'Отмена fetch',
        code: `const controller = new AbortController();
const res = await fetch('/api/data', { signal: controller.signal });
controller.abort(); // AbortError`
      },
      {
        title: 'WebSocket подключение',
        code: `const ws = new WebSocket('wss://echo.websocket.events');
ws.onmessage = (e) => console.log(e.data);
ws.send('ping');`
      }
    ],
    relatedTopics: ['fetch-api', 'websocket-api', 'abort-controller']
  },
  {
    id: 'interfaces-storage',
    title: 'Хранилища и кэш',
    difficulty: 'intermediate',
    description:
      'Интерфейсы для клиентского хранения: Storage для localStorage/sessionStorage, Cache/CacheStorage для офлайна и PWA, IndexedDB набор объектов для структурированных данных.',
    keyPoints: [
      'Storage: key/value строки в localStorage и sessionStorage, методы setItem/getItem/removeItem.',
      'Cache / CacheStorage: кэширование HTTP ответов, используется в Service Workers для офлайн-режима.',
      'IDBDatabase / IDBTransaction / IDBObjectStore / IDBRequest / IDBIndex: работа с IndexedDB для структурированных данных.'
    ],
    tags: ['interfaces', 'storage', 'cache', 'indexeddb', 'pwa'],
    examples: [
      {
        title: 'CacheStorage базово',
        code: `const cache = await caches.open('v1');
await cache.put('/data', new Response(JSON.stringify({ ok: true }), { status: 200 }));
const hit = await cache.match('/data');
console.log(await hit.json()); // { ok: true }`
      },
      {
        title: 'IDB транзакция',
        code: `const openReq = indexedDB.open('app', 1);
openReq.onupgradeneeded = () => {
  openReq.result.createObjectStore('items', { keyPath: 'id' });
};
openReq.onsuccess = () => {
  const db = openReq.result;
  const tx = db.transaction('items', 'readwrite');
  tx.objectStore('items').put({ id: 1, name: 'Item' });
};`
      }
    ],
    relatedTopics: ['web-storage', 'indexeddb', 'service-workers']
  },
  {
    id: 'interfaces-media-streams',
    title: 'Медиа и Streams',
    difficulty: 'intermediate',
    description:
      'Доступ к камере/микрофону, работа с аудио/видео и потоками. Используются для звонков, записи экрана, обработки аудио.',
    keyPoints: [
      'MediaDevices / MediaStream / MediaStreamTrack: захват камеры, микрофона, экрана через getUserMedia/getDisplayMedia.',
      'MediaRecorder: запись MediaStream в Blob, события dataavailable и stop.',
      'AudioContext / AudioNode / AnalyserNode / GainNode: Web Audio API для обработки звука, создание аудио-графа.',
      'ReadableStream / WritableStream / TransformStream: потоковая обработка данных, чтение/запись/трансформация потоков.'
    ],
    tags: ['interfaces', 'media', 'streams', 'webaudio', 'mediadevices'],
    examples: [
      {
        title: 'getUserMedia',
        code: `const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
document.querySelector('video').srcObject = stream;`
      },
      {
        title: 'Web Audio цепочка',
        code: `const ctx = new AudioContext();
const osc = ctx.createOscillator();
const gain = ctx.createGain();
osc.connect(gain).connect(ctx.destination);
gain.gain.value = 0.1;
osc.start();`
      }
    ],
    relatedTopics: ['media-apis', 'mediadevices-api', 'websocket-api']
  },
  {
    id: 'interfaces-graphics',
    title: 'Графика и Canvas/WebGL',
    difficulty: 'intermediate',
    description:
      'Интерфейсы для 2D/3D отрисовки и работы с изображениями. Используются для визуализаций, игр, редакторов.',
    keyPoints: [
      'CanvasRenderingContext2D / OffscreenCanvas: 2D отрисовка, методы fillRect/strokeRect/drawImage.',
      'ImageBitmap / ImageData: быстрая работа с изображениями и пикселями, createImageBitmap для оптимизации.',
      'WebGLRenderingContext / WebGL2RenderingContext: 3D рендер через OpenGL ES, работа с шейдерами и буферами.',
      'Path2D / DOMMatrix: сложные формы (пути) и геометрические трансформации (матрицы).'
    ],
    tags: ['interfaces', 'canvas', 'webgl', 'graphics', 'imagedata'],
    examples: [
      {
        title: 'Canvas 2D',
        code: `const ctx = document.querySelector('canvas').getContext('2d');
ctx.fillStyle = 'tomato';
ctx.fillRect(10, 10, 120, 60);`
      },
      {
        title: 'ImageBitmap для быстрой загрузки',
        code: `const resp = await fetch('/pic.png');
const blob = await resp.blob();
const bmp = await createImageBitmap(blob);
ctx.drawImage(bmp, 0, 0);`
      }
    ],
    relatedTopics: ['canvas-api', 'svg-api', 'webgl-api', 'graphics-apis-advanced']
  },
  {
    id: 'interfaces-observers-performance',
    title: 'Observers и Performance',
    difficulty: 'intermediate',
    description:
      'Интерфейсы наблюдателей и метрик производительности. Нужны для ленивой загрузки, адаптивных компонентов и измерения UX.',
    keyPoints: [
      'IntersectionObserverEntry / ResizeObserverEntry / MutationRecord: данные от наблюдателей (видимость, размеры, изменения DOM).',
      'Performance / PerformanceEntry / PerformanceObserver: замеры времени выполнения, метрики загрузки страницы, наблюдение за производительностью.',
      'IdleDeadline: интерфейс для requestIdleCallback, определяет когда браузер свободен для фоновых задач.'
    ],
    tags: ['interfaces', 'observer', 'performance', 'metrics'],
    examples: [
      {
        title: 'PerformanceObserver',
        code: `const po = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(entry.name, entry.duration);
  }
});
po.observe({ type: 'longtask', buffered: true });`
      },
      {
        title: 'IntersectionObserverEntry',
        code: `const io = new IntersectionObserver(([entry]) => {
  console.log(entry.isIntersecting, entry.intersectionRatio);
});
io.observe(document.querySelector('.card'));`
      }
    ],
    relatedTopics: ['observers-api-overview', 'performance-apis', 'animation-event-loop']
  },
  {
    id: 'interfaces-workers-messaging',
    title: 'Workers и обмен сообщениями',
    difficulty: 'intermediate',
    description:
      'Воркеры в веб-платформе — это способ выполнять JS-код в отдельных контекстах исполнения, не блокируя основной поток с UI. Web Workers (Dedicated/Shared) занимаются вычислениями и обработкой данных, Service Workers работают как сетевой/кеширующий «прокси» с собственным жизненным циклом, а Worklets (Audio/Paint/Layout/Animation) — это микро-воркеры, встроенные прямо в пайплайны рендеринга и медиасистемы браузера. Все они общаются через сообщения и разделяемую память.',
    keyPoints: [
      'Web Workers (Worker / SharedWorker): отдельные JS-контексты без доступа к DOM, общение через postMessage, используются для CPU-heavy задач и интеграции с WASM.',
      'ServiceWorker: специализированный воркер c жизненным циклом install/activate/fetch, Acting как прокси между сетью/кэшем и страницами, основа PWA и офлайна.',
      'Worklets (AudioWorklet / PaintWorklet / LayoutWorklet / AnimationWorklet): микро-воркеры внутри пайплайнов браузера для low-latency задач (аудио, кастомный рендер, анимации).',
      'MessagePort / MessageChannel / MessageEvent / BroadcastChannel: базовые каналы и события обмена сообщениями между контекстами (страницы, воркеры, Service Worker).',
      'Client / WindowClient / Clients: управление клиентами (вкладками/оконными контекстами) из Service Worker, рассылка сообщений всем активным клиентам.',
      'Общий концепт: воркеры — это модель конкурентности Web Platform API, а не языковая конструкция JS; язык остаётся однопоточным, а платформа даёт несколько изолированных контекстов.'
    ],
    tags: ['interfaces', 'worker', 'serviceworker', 'worklet', 'messaging', 'pwa', 'web-platform'],
    examples: [
      {
        title: 'MessageChannel',
        code: `const channel = new MessageChannel();
channel.port1.onmessage = (e) => console.log('port1:', e.data);
channel.port2.postMessage('ping');`
      },
      {
        title: 'ServiceWorker clients',
        code: `self.addEventListener('fetch', async (event) => {
  const all = await self.clients.matchAll();
  all.forEach((c) => c.postMessage('update-available'));
});`
      }
    ],
    relatedTopics: ['web-workers', 'service-workers', 'websocket-api', 'web-platform-api-overview', 'nodejs-processes']
  }
];
