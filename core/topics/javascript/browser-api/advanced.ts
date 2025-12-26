import { Topic } from '../../../types';

export const JS_BROWSER_API_ADVANCED_TOPICS: Topic[] = [
{
    id: 'performance-optimization',
    title: 'Оптимизация производительности',
    difficulty: 'advanced',
    description: 'Профилирование через Performance API, DevTools. Оптимизация: избегать лишних вычислений, использовать мемоизацию, ленивые вычисления, виртуализацию списков. Оптимизация рендеринга: React.memo, useMemo, useCallback. Избегать утечек памяти, оптимизировать события.',
    keyPoints: [
      'Профилирование: Performance API, Chrome DevTools.',
      'Мемоизация: кэширование результатов вычислений.',
      'Ленивые вычисления: вычислять только при необходимости.',
      'Виртуализация: рендерить только видимые элементы.',
      'Оптимизация рендеринга: React.memo, useMemo, useCallback.'
    ],
    tags: ['performance', 'optimization', 'profiling', 'memory'],
    examples: [
      {
        title: "Performance API",
        code: `// Измерение времени выполнения\nconst start = performance.now();\n\n// Код для измерения\nfor (let i = 0; i < 1000000; i++) {\n  Math.sqrt(i);\n}\n\nconst end = performance.now();\nconsole.log(\`Execution time: \${end - start}ms\`);\n\n// Маркеры\nperformance.mark('start');\n// код\nperformance.mark('end');\nperformance.measure('duration', 'start', 'end');`
      },
      {
        title: "Ленивые вычисления",
        code: `function lazyCompute() {\n  let cached = null;\n  return function() {\n    if (cached === null) {\n      console.log("Computing...");\n      cached = expensiveOperation();\n    }\n    return cached;\n  };\n}\n\nconst getValue = lazyCompute();\ngetValue(); // Computing...\ngetValue(); // Из кэша`
      },
      {
        title: "Оптимизация событий",
        code: `// Плохо: создается новая функция при каждом рендере\n<button onClick={() => handleClick(id)}>Click</button>\n\n// Хорошо: мемоизированный callback\nconst handleClick = useCallback((id) => {\n  // обработка\n}, [dependencies]);\n\n<button onClick={handleClick}>Click</button>`
      }
    ],
    relatedTopics: ['memoization', 'memory-management', 'debounce-throttle']
  },
{
    id: 'service-workers',
    title: 'Service Workers',
    difficulty: 'advanced',
    description: 'Service Worker — прокси между браузером и сетью. Работает в фоне, может перехватывать запросы, кэшировать ресурсы, работать офлайн. Регистрация через navigator.serviceWorker.register(). События: install (установка), activate (активация), fetch (перехват запросов). Используется для PWA, офлайн-режима.',
    keyPoints: [
      'navigator.serviceWorker.register(script): регистрация воркера.',
      'Работает в отдельном потоке, может работать офлайн.',
      'События: install (кэширование), activate (очистка старого кэша), fetch (перехват запросов).',
      'Cache API: кэширование ресурсов для офлайн-доступа.',
      'Использование: PWA, офлайн-режим, push-уведомления.'
    ],
    tags: ['service-workers', 'pwa', 'offline', 'caching', 'browser', 'api'],
    examples: [
      {
        title: "Регистрация Service Worker",
        code: `// main.js\nif ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/sw.js')\n    .then(registration => {\n      console.log('SW registered:', registration);\n    })\n    .catch(error => {\n      console.error('SW registration failed:', error);\n    });\n}\n\n// sw.js\nself.addEventListener('install', (event) => {\n  console.log('Service Worker installing');\n  event.waitUntil(\n    caches.open('v1').then(cache => {\n      return cache.addAll([\n        '/',\n        '/index.html',\n        '/styles.css',\n        '/app.js'\n      ]);\n    })\n  );\n});`
      },
      {
        title: "Кэширование и офлайн",
        code: `// sw.js\nself.addEventListener('fetch', (event) => {\n  event.respondWith(\n    caches.match(event.request)\n      .then(response => {\n        // Возвращаем из кэша или делаем запрос\n        return response || fetch(event.request);\n      })\n  );\n});\n\n// Стратегия: Cache First\nself.addEventListener('fetch', (event) => {\n  event.respondWith(\n    caches.match(event.request)\n      .then(response => response || fetch(event.request))\n  );\n});\n\n// Стратегия: Network First\nself.addEventListener('fetch', (event) => {\n  event.respondWith(\n    fetch(event.request)\n      .then(response => {\n        const clone = response.clone();\n        caches.open('v1').then(cache => cache.put(event.request, clone));\n        return response;\n      })\n      .catch(() => caches.match(event.request))\n  );\n});`
      },
      {
        title: "Активация и обновление",
        code: `// sw.js\nself.addEventListener('activate', (event) => {\n  console.log('Service Worker activating');\n  \n  event.waitUntil(\n    caches.keys().then(cacheNames => {\n      return Promise.all(\n        cacheNames.map(cacheName => {\n          if (cacheName !== 'v2') { // удаляем старые кэши\n            return caches.delete(cacheName);\n          }\n        })\n      );\n    })\n  );\n});`
      }
    ],
    relatedTopics: ['web-workers', 'fetch-api', 'web-storage']
  },
{
    id: 'websocket-api',
    title: 'WebSocket API',
    difficulty: 'advanced',
    description: 'WebSocket API для двусторонней связи в реальном времени. new WebSocket(url) создает соединение. События: open (соединение установлено), message (получено сообщение), error (ошибка), close (закрыто). send() отправляет данные, close() закрывает. Используется для чатов, игр, стриминга.',
    keyPoints: [
      'new WebSocket(url): создает WebSocket соединение (ws:// или wss://).',
      'События: open, message, error, close.',
      'send(data): отправка данных (текст, Blob, ArrayBuffer).',
      'close(code, reason): закрытие соединения.',
      'Использование: чаты, игры, стриминг, реальное время.'
    ],
    tags: ['websocket', 'realtime', 'networking', 'browser', 'api'],
    examples: [
      {
        title: "Базовое соединение",
        code: `const ws = new WebSocket('wss://echo.websocket.org');\n\nws.onopen = () => {\n  console.log('Connected');\n  ws.send('Hello Server!');\n};\n\nws.onmessage = (event) => {\n  console.log('Received:', event.data);\n};\n\nws.onerror = (error) => {\n  console.error('Error:', error);\n};\n\nws.onclose = () => {\n  console.log('Disconnected');\n};\n\n// Закрытие\nws.close();`
      },
      {
        title: "Чат приложение",
        code: `class ChatClient {\n  constructor(url) {\n    this.ws = new WebSocket(url);\n    this.setupHandlers();\n  }\n  \n  setupHandlers() {\n    this.ws.onopen = () => {\n      console.log('Connected to chat');\n    };\n    \n    this.ws.onmessage = (event) => {\n      const message = JSON.parse(event.data);\n      this.displayMessage(message);\n    };\n    \n    this.ws.onclose = () => {\n      console.log('Disconnected, reconnecting...');\n      setTimeout(() => this.reconnect(), 1000);\n    };\n  }\n  \n  sendMessage(text) {\n    if (this.ws.readyState === WebSocket.OPEN) {\n      this.ws.send(JSON.stringify({ text, timestamp: Date.now() }));\n    }\n  }\n  \n  reconnect() {\n    this.ws = new WebSocket(this.url);\n    this.setupHandlers();\n  }\n}`
      },
      {
        title: "Отправка разных типов данных",
        code: `const ws = new WebSocket('wss://example.com');\n\nws.onopen = () => {\n  // Текст\n  ws.send('Hello');\n  \n  // JSON\n  ws.send(JSON.stringify({ type: 'message', data: 'Hello' }));\n  \n  // Blob\n  const blob = new Blob(['Binary data'], { type: 'text/plain' });\n  ws.send(blob);\n  \n  // ArrayBuffer\n  const buffer = new ArrayBuffer(8);\n  ws.send(buffer);\n};\n\nws.onmessage = (event) => {\n  if (event.data instanceof Blob) {\n    // обработка Blob\n  } else if (typeof event.data === 'string') {\n    // обработка текста\n  }\n};`
      }
    ],
    relatedTopics: ['fetch-api', 'async-await', 'event-api']
  },
{
    id: 'geolocation-api',
    title: 'Geolocation API',
    difficulty: 'advanced',
    description: 'Geolocation API получает географическое положение устройства. navigator.geolocation.getCurrentPosition() получает позицию один раз, watchPosition() отслеживает изменения. Требует разрешения пользователя. Возвращает координаты (latitude, longitude), точность, высоту. Используется для карт, навигации, геолокации.',
    keyPoints: [
      'navigator.geolocation.getCurrentPosition(success, error, options): получает позицию.',
      'watchPosition(): отслеживает изменения позиции, возвращает ID.',
      'clearWatch(id): останавливает отслеживание.',
      'Требует разрешения пользователя (HTTPS или localhost).',
      'Возвращает: latitude, longitude, accuracy, altitude.'
    ],
    tags: ['geolocation', 'location', 'maps', 'browser', 'api'],
    examples: [
      {
        title: "Получение текущей позиции",
        code: `if ('geolocation' in navigator) {\n  navigator.geolocation.getCurrentPosition(\n    (position) => {\n      const { latitude, longitude, accuracy } = position.coords;\n      console.log(\`Lat: \${latitude}, Lng: \${longitude}\`);\n      console.log(\`Accuracy: \${accuracy} meters\`);\n    },\n    (error) => {\n      console.error('Error:', error.message);\n      // error.code: 1 (PERMISSION_DENIED), 2 (POSITION_UNAVAILABLE), 3 (TIMEOUT)\n    },\n    {\n      enableHighAccuracy: true,\n      timeout: 5000,\n      maximumAge: 0\n    }\n  );\n}`
      },
      {
        title: "Отслеживание позиции",
        code: `let watchId;\n\nfunction startTracking() {\n  watchId = navigator.geolocation.watchPosition(\n    (position) => {\n      const { latitude, longitude } = position.coords;\n      updateMap(latitude, longitude);\n    },\n    (error) => {\n      console.error('Tracking error:', error);\n    },\n    {\n      enableHighAccuracy: true,\n      maximumAge: 1000 // обновлять не чаще раза в секунду\n    }\n  );\n}\n\nfunction stopTracking() {\n  if (watchId) {\n    navigator.geolocation.clearWatch(watchId);\n  }\n}`
      },
      {
        title: "Интеграция с картами",
        code: `async function getLocation() {\n  return new Promise((resolve, reject) => {\n    navigator.geolocation.getCurrentPosition(\n      (position) => {\n        resolve({\n          lat: position.coords.latitude,\n          lng: position.coords.longitude\n        });\n      },\n      reject,\n      { enableHighAccuracy: true }\n    );\n  });\n}\n\n// Использование\nconst location = await getLocation();\n// Отправка на карту или API\nmap.setCenter([location.lat, location.lng]);`
      }
    ],
    relatedTopics: ['async-await', 'promises', 'dom-api']
  },
{
    id: 'mediadevices-api',
    title: 'MediaDevices API',
    difficulty: 'advanced',
    description: 'MediaDevices API получает доступ к камере и микрофону. navigator.mediaDevices.getUserMedia(constraints) запрашивает доступ. Возвращает MediaStream. video/audio элементы могут отображать поток. Используется для видеозвонков, записи, стриминга. Требует HTTPS и разрешения пользователя.',
    keyPoints: [
      'navigator.mediaDevices.getUserMedia(constraints): запрашивает доступ к медиа.',
      'constraints: { video: true/false, audio: true/false } или объект с настройками.',
      'Возвращает Promise<MediaStream> с треками (video/audio).',
      'getTracks() получает треки, stop() останавливает.',
      'Требует HTTPS (кроме localhost) и разрешения пользователя.'
    ],
    tags: ['mediadevices', 'camera', 'microphone', 'streaming', 'browser', 'api'],
    examples: [
      {
        title: "Доступ к камере",
        code: `async function startCamera() {\n  try {\n    const stream = await navigator.mediaDevices.getUserMedia({\n      video: true,\n      audio: false\n    });\n    \n    const video = document.querySelector('video');\n    video.srcObject = stream;\n    \n    console.log('Camera started');\n  } catch (error) {\n    console.error('Error accessing camera:', error);\n    // error.name: NotAllowedError, NotFoundError, etc.\n  }\n}\n\n// Остановка\nfunction stopCamera(stream) {\n  stream.getTracks().forEach(track => track.stop());\n}`
      },
      {
        title: "Настройки камеры",
        code: `const constraints = {\n  video: {\n    width: { ideal: 1280 },\n    height: { ideal: 720 },\n    facingMode: 'user' // или 'environment' для задней камеры\n  },\n  audio: {\n    echoCancellation: true,\n    noiseSuppression: true\n  }\n};\n\nconst stream = await navigator.mediaDevices.getUserMedia(constraints);`
      },
      {
        title: "Запись видео",
        code: `let mediaRecorder;\nlet recordedChunks = [];\n\nasync function startRecording() {\n  const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });\n  \n  mediaRecorder = new MediaRecorder(stream);\n  \n  mediaRecorder.ondataavailable = (event) => {\n    if (event.data.size > 0) {\n      recordedChunks.push(event.data);\n    }\n  };\n  \n  mediaRecorder.onstop = () => {\n    const blob = new Blob(recordedChunks, { type: 'video/webm' });\n    const url = URL.createObjectURL(blob);\n    // Сохранить или отправить\n  };\n  \n  mediaRecorder.start();\n}\n\nfunction stopRecording() {\n  mediaRecorder.stop();\n}`
      }
    ],
    relatedTopics: ['file-api', 'async-await', 'dom-api']
  },
{
    id: 'page-visibility-api',
    title: 'Page Visibility API',
    difficulty: 'advanced',
    description: 'Page Visibility API определяет видимость страницы. document.visibilityState: "visible" (видима), "hidden" (скрыта). Событие visibilitychange срабатывает при изменении. Используется для оптимизации: пауза видео/анимаций при скрытии, остановка таймеров, экономия ресурсов.',
    keyPoints: [
      'document.visibilityState: "visible" или "hidden".',
      'document.hidden: boolean, true если страница скрыта.',
      'visibilitychange: событие при изменении видимости.',
      'Использование: пауза видео/анимаций, остановка таймеров, экономия ресурсов.',
      'Оптимизация производительности и батареи.'
    ],
    tags: ['page-visibility', 'performance', 'optimization', 'browser', 'api'],
    examples: [
      {
        title: "Базовое использование",
        code: `// Проверка текущего состояния\nif (document.hidden) {\n  console.log('Page is hidden');\n} else {\n  console.log('Page is visible');\n}\n\n// Слушаем изменения\ndocument.addEventListener('visibilitychange', () => {\n  if (document.hidden) {\n    console.log('Page became hidden');\n    pauseVideo();\n    stopAnimations();\n  } else {\n    console.log('Page became visible');\n    resumeVideo();\n    startAnimations();\n  }\n});`
      },
      {
        title: "Оптимизация видео",
        code: `const video = document.querySelector('video');\n\ndocument.addEventListener('visibilitychange', () => {\n  if (document.hidden) {\n    // Пауза при скрытии\n    video.pause();\n  } else {\n    // Возобновление при показе\n    video.play();\n  }\n});`
      },
      {
        title: "Остановка таймеров и запросов",
        code: `let intervalId;\nlet animationFrameId;\n\nfunction startUpdates() {\n  intervalId = setInterval(updateData, 1000);\n  animationFrameId = requestAnimationFrame(animate);\n}\n\nfunction stopUpdates() {\n  clearInterval(intervalId);\n  cancelAnimationFrame(animationFrameId);\n}\n\ndocument.addEventListener('visibilitychange', () => {\n  if (document.hidden) {\n    stopUpdates(); // экономия ресурсов\n  } else {\n    startUpdates(); // возобновление\n  }\n});`
      },
      {
        title: "Отправка аналитики",
        code: `let startTime = Date.now();\n\nfunction trackVisibility() {\n  document.addEventListener('visibilitychange', () => {\n    if (document.hidden) {\n      // Страница скрыта - отправляем время просмотра\n      const viewTime = Date.now() - startTime;\n      sendAnalytics({ viewTime, event: 'page_hidden' });\n    } else {\n      // Страница видна - начинаем отсчет\n      startTime = Date.now();\n      sendAnalytics({ event: 'page_visible' });\n    }\n  });\n}`
      }
    ],
    relatedTopics: ['event-api', 'performance-optimization', 'dom-api']
  }
];
