import { Topic } from '../../../types';

export const JS_BROWSER_API_GROUPED_TOPICS: Topic[] = [
  {
    id: 'observers-api-overview',
    title: 'Observers API: обзор',
    difficulty: 'intermediate',
    description: 'Наблюдатели (Observers) отслеживают изменения в DOM, размерах элементов и их видимости. Intersection Observer для видимости, Resize Observer для размеров, Mutation Observer для изменений DOM. Все используют единый паттерн: создание через new Observer(), observe() для начала наблюдения, unobserve() для остановки.',
    keyPoints: [
      'Intersection Observer: отслеживает видимость элементов в viewport, используется для ленивой загрузки, infinite scroll, анимаций.',
      'Resize Observer: отслеживает изменение размеров элементов, эффективнее чем window.resize для отдельных элементов.',
      'Mutation Observer: отслеживает изменения DOM (добавление/удаление узлов, изменения атрибутов), альтернатива устаревшим Mutation Events.',
      'Общий паттерн: new Observer(callback, options), observe(element), unobserve(element), disconnect().',
      'Все Observers асинхронны и не блокируют основной поток.'
    ],
    tags: ['observers', 'intersection-observer', 'resize-observer', 'mutation-observer', 'performance', 'browser', 'api'],
    examples: [
      {
        title: "Общий паттерн использования",
        code: `// Создание наблюдателя
const observer = new SomeObserver((entries) => {
  entries.forEach(entry => {
    // обработка изменений
  });
}, {
  // опции
});

// Начало наблюдения
observer.observe(element);

// Остановка наблюдения
observer.unobserve(element);
// или
observer.disconnect(); // для всех элементов`
      },
      {
        title: "Intersection Observer - ленивая загрузка",
        code: `const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      imageObserver.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});`
      },
      {
        title: "Resize Observer - адаптивный компонент",
        code: `const resizeObserver = new ResizeObserver((entries) => {
  entries.forEach(entry => {
    const { width, height } = entry.contentRect;
    if (width < 400) {
      entry.target.classList.add('compact');
    } else {
      entry.target.classList.remove('compact');
    }
  });
});

resizeObserver.observe(document.querySelector('.card'));`
      },
      {
        title: "Mutation Observer - отслеживание изменений",
        code: `const mutationObserver = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList') {
      console.log('Добавлены элементы:', mutation.addedNodes);
      console.log('Удалены элементы:', mutation.removedNodes);
    }
  });
});

mutationObserver.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true
});`
      }
    ],
    relatedTopics: ['intersection-observer', 'resize-observer', 'mutation-observer', 'performance-optimization']
  },
  {
    id: 'performance-apis',
    title: 'Performance APIs',
    difficulty: 'intermediate',
    description: 'API для измерения и оптимизации производительности. Performance API измеряет время выполнения, Page Visibility API определяет видимость страницы для оптимизации, RequestIdleCallback выполняет задачи в свободное время. Используются для профилирования, оптимизации рендеринга и экономии ресурсов.',
    keyPoints: [
      'Performance API: performance.now() для точного времени, performance.mark()/measure() для маркеров, performance.getEntriesByType() для метрик.',
      'Page Visibility API: document.visibilityState и visibilitychange событие для паузы анимаций/видео при скрытии страницы.',
      'RequestIdleCallback: выполнение задач в свободное время браузера, не для критичных операций.',
      'Использование: профилирование, оптимизация батареи, улучшение UX.'
    ],
    tags: ['performance', 'profiling', 'optimization', 'page-visibility', 'requestidlecallback', 'browser', 'api'],
    examples: [
      {
        title: "Performance API - измерение времени",
        code: `// Точное время выполнения
const start = performance.now();
// код для измерения
const end = performance.now();
console.log(\`Время: \${end - start}ms\`);

// Маркеры и измерения
performance.mark('start');
// код
performance.mark('end');
performance.measure('duration', 'start', 'end');
const measure = performance.getEntriesByName('duration')[0];
console.log(\`Длительность: \${measure.duration}ms\`);`
      },
      {
        title: "Page Visibility API - оптимизация",
        code: `document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Страница скрыта - пауза ресурсоемких операций
    video.pause();
    cancelAnimationFrame(animationId);
    clearInterval(updateInterval);
  } else {
    // Страница видна - возобновление
    video.play();
    startAnimation();
  }
});

// Проверка текущего состояния
if (document.visibilityState === 'visible') {
  console.log('Страница видна');
}`
      },
      {
        title: "RequestIdleCallback - фоновые задачи",
        code: `// Выполнение задачи в свободное время
requestIdleCallback((deadline) => {
  while (deadline.timeRemaining() > 0) {
    // Выполняем некритичную задачу
    processBackgroundData();
  }
}, { timeout: 2000 }); // максимум через 2 секунды

// Отмена
const idleId = requestIdleCallback(() => {
  // задача
});
cancelIdleCallback(idleId);`
      },
      {
        title: "Performance Navigation Timing",
        code: `// Метрики загрузки страницы
const perfData = performance.getEntriesByType('navigation')[0];
console.log('DNS:', perfData.domainLookupEnd - perfData.domainLookupStart);
console.log('TCP:', perfData.connectEnd - perfData.connectStart);
console.log('Request:', perfData.responseStart - perfData.requestStart);
console.log('Response:', perfData.responseEnd - perfData.responseStart);
console.log('DOM:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart);
console.log('Load:', perfData.loadEventEnd - perfData.loadEventStart);`
      }
    ],
    relatedTopics: ['performance-optimization', 'animation-event-loop', 'page-visibility-api']
  },
  {
    id: 'media-apis',
    title: 'Media APIs',
    difficulty: 'advanced',
    description: 'API для работы с медиа: камера, микрофон, запись, захват экрана. MediaDevices API получает доступ к устройствам, MediaStream представляет поток данных, MediaRecorder записывает медиа. Требуют HTTPS и разрешения пользователя. Используются для видеозвонков, записи, стриминга.',
    keyPoints: [
      'MediaDevices API: navigator.mediaDevices.getUserMedia() для доступа к камере/микрофону, getDisplayMedia() для захвата экрана.',
      'MediaStream: поток медиа-данных с треками (video/audio), getTracks() для получения треков, stop() для остановки.',
      'MediaRecorder: запись MediaStream в файл, события dataavailable и stop, методы start() и stop().',
      'Требования: HTTPS (кроме localhost) и разрешение пользователя.',
      'Использование: видеозвонки, запись, стриминг, фото/видео приложения.'
    ],
    tags: ['media', 'camera', 'microphone', 'recording', 'streaming', 'mediadevices', 'browser', 'api'],
    examples: [
      {
        title: "Доступ к камере",
        code: `async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { width: 1280, height: 720 },
      audio: true
    });
    
    const video = document.querySelector('video');
    video.srcObject = stream;
  } catch (error) {
    console.error('Ошибка доступа:', error);
  }
}

// Остановка
function stopCamera(stream) {
  stream.getTracks().forEach(track => track.stop());
}`
      },
      {
        title: "Захват экрана",
        code: `async function captureScreen() {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true
    });
    
    const video = document.querySelector('video');
    video.srcObject = stream;
    
    // Остановка при клике на "Stop sharing"
    stream.getVideoTracks()[0].addEventListener('ended', () => {
      console.log('Захват экрана остановлен');
    });
  } catch (error) {
    console.error('Ошибка захвата:', error);
  }
}`
      },
      {
        title: "Запись видео",
        code: `let mediaRecorder;
let recordedChunks = [];

async function startRecording() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
  });
  
  mediaRecorder = new MediaRecorder(stream, {
    mimeType: 'video/webm'
  });
  
  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      recordedChunks.push(event.data);
    }
  };
  
  mediaRecorder.onstop = () => {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    // Сохранить или отправить
    downloadVideo(url);
  };
  
  mediaRecorder.start();
}

function stopRecording() {
  mediaRecorder.stop();
  mediaRecorder.stream.getTracks().forEach(track => track.stop());
}`
      },
      {
        title: "Выбор устройства",
        code: `// Получение списка устройств
const devices = await navigator.mediaDevices.enumerateDevices();
const videoDevices = devices.filter(d => d.kind === 'videoinput');
const audioDevices = devices.filter(d => d.kind === 'audioinput');

// Использование конкретного устройства
const stream = await navigator.mediaDevices.getUserMedia({
  video: { deviceId: videoDevices[1].deviceId },
  audio: { deviceId: audioDevices[0].deviceId }
});`
      }
    ],
    relatedTopics: ['mediadevices-api', 'file-api', 'async-await']
  },
  {
    id: 'graphics-apis-advanced',
    title: 'Graphics APIs: дополнительные',
    difficulty: 'advanced',
    description: 'Дополнительные API для графики: WebGL для 3D, Web Animations API для анимаций, CSS Painting API для кастомной отрисовки. WebGL требует знания OpenGL/GLSL, Web Animations API объединяет CSS и JavaScript анимации, CSS Painting API позволяет рисовать через JavaScript в CSS.',
    keyPoints: [
      'WebGL API: 3D графика через OpenGL ES 2.0, работа с шейдерами и GPU, требует знания GLSL.',
      'Web Animations API: Element.animate() для программных анимаций, объединяет CSS и JavaScript.',
      'CSS Painting API: кастомная отрисовка в CSS через JavaScript, используется в background-image.',
      'Использование: 3D игры, визуализации, сложные анимации, кастомные стили.'
    ],
    tags: ['graphics', 'webgl', 'animations', 'css', '3d', 'browser', 'api'],
    examples: [
      {
        title: "Web Animations API",
        code: `// Простая анимация
const element = document.querySelector('.box');
element.animate([
  { transform: 'translateX(0)', opacity: 1 },
  { transform: 'translateX(300px)', opacity: 0.5 }
], {
  duration: 1000,
  easing: 'ease-in-out',
  iterations: Infinity,
  direction: 'alternate'
});

// Управление анимацией
const animation = element.animate([...], { duration: 1000 });
animation.pause();
animation.play();
animation.reverse();
animation.cancel();`
      },
      {
        title: "WebGL - базовый пример",
        code: `const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');

if (!gl) {
  console.error('WebGL не поддерживается');
}

// Очистка canvas
gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);

// Вершины треугольника
const positions = [
  0, 0.5,
  -0.5, -0.5,
  0.5, -0.5
];

// Создание буфера и отрисовка
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
// ... настройка шейдеров и отрисовка`
      },
      {
        title: "CSS Painting API (Worklet)",
        code: `// Регистрация Paint Worklet
CSS.paintWorklet.addModule('paint-worklet.js');

// Использование в CSS
// .element {
//   background-image: paint(customPattern);
// }

// paint-worklet.js
registerPaint('customPattern', class {
  paint(ctx, size) {
    // Рисование через Canvas API
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, size.width, size.height);
  }
});`
      }
    ],
    relatedTopics: ['canvas-api', 'svg-api', 'webgl-api', 'animation-event-loop']
  },
  {
    id: 'storage-apis-additional',
    title: 'Storage APIs: дополнительные',
    difficulty: 'intermediate',
    description: 'Дополнительные API для хранения: Cache API для кэширования ресурсов в Service Workers, File System API для доступа к файловой системе (экспериментальный). Cache API используется для офлайн-режима и PWA, File System API позволяет работать с файлами как в нативных приложениях.',
    keyPoints: [
      'Cache API: кэширование ресурсов для офлайн-доступа, используется в Service Workers, методы open(), add(), match(), delete().',
      'File System API: доступ к файловой системе через File System Access API, экспериментальный, ограниченная поддержка.',
      'Стратегии кэширования: Cache First, Network First, Stale While Revalidate.',
      'Использование: PWA, офлайн-приложения, кэширование статических ресурсов.'
    ],
    tags: ['storage', 'cache', 'filesystem', 'pwa', 'offline', 'browser', 'api'],
    examples: [
      {
        title: "Cache API - кэширование ресурсов",
        code: `// Открытие кэша
const cache = await caches.open('v1');

// Добавление ресурсов
await cache.addAll([
  '/',
  '/index.html',
  '/styles.css',
  '/app.js'
]);

// Получение из кэша
const response = await cache.match('/index.html');
if (response) {
  console.log('Найдено в кэше');
}

// Удаление из кэша
await cache.delete('/old-resource.js');`
      },
      {
        title: "Cache First стратегия",
        code: `self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Возвращаем из кэша или делаем запрос
        return response || fetch(event.request);
      })
  );
});`
      },
      {
        title: "Network First стратегия",
        code: `self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Кэшируем успешные ответы
        const clone = response.clone();
        caches.open('v1').then(cache => {
          cache.put(event.request, clone);
        });
        return response;
      })
      .catch(() => {
        // При ошибке сети - из кэша
        return caches.match(event.request);
      })
  );
});`
      },
      {
        title: "File System Access API (экспериментальный)",
        code: `// Открытие файла
const [fileHandle] = await window.showOpenFilePicker();
const file = await fileHandle.getFile();
const contents = await file.text();

// Сохранение файла
const fileHandle = await window.showSaveFilePicker({
  suggestedName: 'document.txt',
  types: [{
    description: 'Text files',
    accept: { 'text/plain': ['.txt'] }
  }]
});

const writable = await fileHandle.createWritable();
await writable.write('Hello, World!');
await writable.close();`
      }
    ],
    relatedTopics: ['web-storage', 'indexeddb', 'service-workers']
  },
  {
    id: 'network-apis-additional',
    title: 'Network APIs: дополнительные',
    difficulty: 'intermediate',
    description: 'Дополнительные сетевые API: XMLHttpRequest (legacy, сравнение с Fetch), Server-Sent Events для односторонней связи от сервера, WebTransport для низколатентной связи (экспериментальный). XMLHttpRequest устарел, но все еще используется, SSE для стриминга данных, WebTransport для игр и реального времени.',
    keyPoints: [
      'XMLHttpRequest: устаревший API для HTTP запросов, используется до появления Fetch, более сложный синтаксис.',
      'Server-Sent Events: односторонняя связь от сервера к клиенту через EventSource, автоматическое переподключение.',
      'WebTransport: низколатентная двусторонняя связь, экспериментальный, для игр и реального времени.',
      'Сравнение: Fetch проще и современнее XMLHttpRequest, SSE для стриминга, WebSocket для двусторонней связи.'
    ],
    tags: ['network', 'xhr', 'sse', 'websocket', 'fetch', 'browser', 'api'],
    examples: [
      {
        title: "XMLHttpRequest (legacy)",
        code: `// GET запрос
const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/data');
xhr.onload = () => {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};
xhr.send();

// POST запрос
xhr.open('POST', '/api/data');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = () => {
  console.log('Отправлено');
};
xhr.send(JSON.stringify({ name: 'Alice' }));`
      },
      {
        title: "Server-Sent Events",
        code: `// Подключение к SSE
const eventSource = new EventSource('/events');

// Слушаем сообщения
eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Получено:', data);
};

// Слушаем кастомные события
eventSource.addEventListener('custom-event', (event) => {
  console.log('Кастомное событие:', event.data);
});

// Закрытие соединения
eventSource.close();

// Сервер отправляет:
// data: {"message": "Hello"}\n\n
// event: custom-event\n
// data: {"type": "update"}\n\n`
      },
      {
        title: "Сравнение Fetch и XMLHttpRequest",
        code: `// Fetch (современный)
fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data));

// XMLHttpRequest (legacy)
const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/data');
xhr.onload = () => {
  const data = JSON.parse(xhr.responseText);
  console.log(data);
};
xhr.send();

// Fetch проще, поддерживает Promise, async/await
// XMLHttpRequest сложнее, но больше контроля над процессом`
      },
      {
        title: "WebTransport (экспериментальный)",
        code: `// Создание соединения
const transport = new WebTransport('https://example.com/transport');

// Отправка данных
const writer = transport.datagrams.writable.getWriter();
writer.write(new Uint8Array([1, 2, 3]));

// Получение данных
const reader = transport.datagrams.readable.getReader();
while (true) {
  const { value, done } = await reader.read();
  if (done) break;
  console.log('Получено:', value);
}`
      }
    ],
    relatedTopics: ['fetch-api', 'websocket-api', 'async-await']
  },
  {
    id: 'device-sensors-apis',
    title: 'Device & Sensors APIs',
    difficulty: 'advanced',
    description: 'API для работы с устройствами и сенсорами: Geolocation для определения местоположения, Device Orientation для ориентации устройства, Vibration для вибрации, Battery Status (deprecated) для информации о батарее. Требуют разрешения пользователя и HTTPS. Используются для карт, игр, адаптивных интерфейсов.',
    keyPoints: [
      'Geolocation API: navigator.geolocation.getCurrentPosition() для позиции, watchPosition() для отслеживания, требует разрешения.',
      'Device Orientation API: deviceorientation и devicemotion события для ориентации и движения устройства.',
      'Vibration API: navigator.vibrate() для вибрации, поддерживается на мобильных устройствах.',
      'Battery Status API: deprecated, информация о батарее, ограниченная поддержка.',
      'Использование: карты, навигация, игры, адаптивные интерфейсы.'
    ],
    tags: ['geolocation', 'device-orientation', 'vibration', 'sensors', 'browser', 'api'],
    examples: [
      {
        title: "Geolocation API",
        code: `// Получение текущей позиции
navigator.geolocation.getCurrentPosition(
  (position) => {
    const { latitude, longitude } = position.coords;
    console.log(\`Широта: \${latitude}, Долгота: \${longitude}\`);
  },
  (error) => {
    console.error('Ошибка:', error.message);
  },
  { enableHighAccuracy: true, timeout: 5000 }
);

// Отслеживание позиции
const watchId = navigator.geolocation.watchPosition(
  (position) => {
    updateMap(position.coords);
  }
);

// Остановка отслеживания
navigator.geolocation.clearWatch(watchId);`
      },
      {
        title: "Device Orientation",
        code: `// Ориентация устройства
window.addEventListener('deviceorientation', (event) => {
  console.log('Alpha (Z):', event.alpha); // 0-360
  console.log('Beta (X):', event.beta);   // -180 to 180
  console.log('Gamma (Y):', event.gamma); // -90 to 90
});

// Движение устройства
window.addEventListener('devicemotion', (event) => {
  const { x, y, z } = event.acceleration;
  console.log('Ускорение:', x, y, z);
  
  const { alpha, beta, gamma } = event.rotationRate;
  console.log('Скорость вращения:', alpha, beta, gamma);
});`
      },
      {
        title: "Vibration API",
        code: `// Простая вибрация
navigator.vibrate(200); // вибрация 200мс

// Паттерн вибрации
navigator.vibrate([100, 50, 100, 50, 200]);
// вибрация 100мс, пауза 50мс, вибрация 100мс, пауза 50мс, вибрация 200мс

// Остановка вибрации
navigator.vibrate(0);

// Проверка поддержки
if ('vibrate' in navigator) {
  navigator.vibrate(200);
}`
      },
      {
        title: "Battery Status API (deprecated)",
        code: `// ⚠️ Deprecated, ограниченная поддержка
navigator.getBattery().then(battery => {
  console.log('Заряд:', battery.level * 100 + '%');
  console.log('Заряжается:', battery.charging);
  console.log('Время до зарядки:', battery.chargingTime);
  console.log('Время до разрядки:', battery.dischargingTime);
  
  battery.addEventListener('chargingchange', () => {
    console.log('Статус зарядки изменился');
  });
});`
      }
    ],
    relatedTopics: ['geolocation-api', 'async-await', 'dom-api']
  },
  {
    id: 'ui-interaction-apis',
    title: 'UI & Interaction APIs',
    difficulty: 'intermediate',
    description: 'API для взаимодействия с пользователем: Fullscreen для полноэкранного режима, Pointer Events для универсальных событий указателя, Drag and Drop для перетаскивания, Keyboard API для работы с клавиатурой, Popover для всплывающих окон. Используются для улучшения UX и создания интерактивных интерфейсов.',
    keyPoints: [
      'Fullscreen API: element.requestFullscreen() для полноэкранного режима, document.exitFullscreen() для выхода, события fullscreenchange.',
      'Pointer Events: универсальные события для мыши, тачпада, пера (pointerdown, pointermove, pointerup), замена mouse/touch событий.',
      'Drag and Drop API: draggable атрибут, события dragstart, dragover, drop для перетаскивания элементов.',
      'Keyboard API: KeyboardEvent для работы с клавиатурой, key, code, modifiers.',
      'Popover API: element.popover для нативных всплывающих окон, showPopover(), hidePopover().'
    ],
    tags: ['fullscreen', 'pointer-events', 'drag-drop', 'keyboard', 'popover', 'ui', 'browser', 'api'],
    examples: [
      {
        title: "Fullscreen API",
        code: `// Вход в полноэкранный режим
async function enterFullscreen(element) {
  try {
    await element.requestFullscreen();
    console.log('Полноэкранный режим');
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

// Выход из полноэкранного режима
function exitFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
}

// Слушаем изменения
document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    console.log('В полноэкранном режиме');
  } else {
    console.log('Выход из полноэкранного режима');
  }
});`
      },
      {
        title: "Pointer Events",
        code: `// Универсальные события указателя
element.addEventListener('pointerdown', (event) => {
  console.log('Тип устройства:', event.pointerType); // mouse, pen, touch
  console.log('Кнопка:', event.button);
  console.log('Координаты:', event.clientX, event.clientY);
});

element.addEventListener('pointermove', (event) => {
  if (event.buttons === 1) { // зажата левая кнопка
    // перетаскивание
  }
});

element.addEventListener('pointerup', (event) => {
  console.log('Указатель поднят');
});`
      },
      {
        title: "Drag and Drop API",
        code: `// Делаем элемент перетаскиваемым
const draggable = document.querySelector('.draggable');
draggable.draggable = true;

draggable.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', draggable.id);
  event.dataTransfer.effectAllowed = 'move';
});

// Зона для сброса
const dropZone = document.querySelector('.drop-zone');
dropZone.addEventListener('dragover', (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
});

dropZone.addEventListener('drop', (event) => {
  event.preventDefault();
  const id = event.dataTransfer.getData('text/plain');
  const element = document.getElementById(id);
  dropZone.appendChild(element);
});`
      },
      {
        title: "Keyboard API",
        code: `document.addEventListener('keydown', (event) => {
  console.log('Клавиша:', event.key);        // 'a', 'Enter', 'ArrowUp'
  console.log('Код:', event.code);            // 'KeyA', 'Enter', 'ArrowUp'
  console.log('Модификаторы:', {
    ctrl: event.ctrlKey,
    shift: event.shiftKey,
    alt: event.altKey,
    meta: event.metaKey
  });
  
  // Комбинации клавиш
  if (event.ctrlKey && event.key === 's') {
    event.preventDefault();
    saveDocument();
  }
});`
      },
      {
        title: "Popover API",
        code: `// HTML: <div id="popover" popover>Содержимое</div>

const popover = document.querySelector('#popover');

// Показать
popover.showPopover();

// Скрыть
popover.hidePopover();

// Переключить
popover.togglePopover();

// События
popover.addEventListener('toggle', (event) => {
  if (event.newState === 'open') {
    console.log('Popover открыт');
  } else {
    console.log('Popover закрыт');
  }
});`
      }
    ],
    relatedTopics: ['event-api', 'dom-api', 'events-advanced']
  },
  {
    id: 'advanced-experimental-apis',
    title: 'Advanced & Experimental APIs',
    difficulty: 'advanced',
    description: 'Продвинутые и экспериментальные API: Web Components для создания переиспользуемых компонентов, Web Crypto для криптографии, Notifications для уведомлений, Permissions для проверки разрешений, Web Locks для блокировок. Многие API экспериментальные, имеют ограниченную поддержку браузеров. Используются для создания сложных приложений и PWA.',
    keyPoints: [
      'Web Components: Custom Elements, Shadow DOM, HTML Templates для создания переиспользуемых компонентов без фреймворков.',
      'Web Crypto API: криптографические операции (шифрование, подписи, хеширование), безопасная генерация случайных чисел.',
      'Notifications API: нативные уведомления браузера, требуют разрешения, используются в PWA.',
      'Permissions API: проверка разрешений (камера, геолокация, уведомления) без запроса доступа.',
      'Web Locks API: координация доступа к ресурсам между вкладками/воркерами, предотвращение конфликтов.',
      'Многие API экспериментальные: проверять поддержку через feature detection.'
    ],
    tags: ['web-components', 'crypto', 'notifications', 'permissions', 'experimental', 'browser', 'api'],
    examples: [
      {
        title: "Web Components - Custom Element",
        code: `// Определение кастомного элемента
class MyElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<p>Привет из Web Component!</p>';
  }
}

// Регистрация
customElements.define('my-element', MyElement);

// Использование: <my-element></my-element>

// С атрибутами
class CounterElement extends HTMLElement {
  static get observedAttributes() {
    return ['count'];
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'count') {
      this.innerHTML = \`Счет: \${newValue}\`;
    }
  }
}

customElements.define('counter-element', CounterElement);
// <counter-element count="5"></counter-element>`
      },
      {
        title: "Web Crypto API",
        code: `// Генерация случайных чисел
const array = new Uint8Array(16);
crypto.getRandomValues(array);
console.log('Случайные байты:', array);

// Хеширование
const encoder = new TextEncoder();
const data = encoder.encode('Hello, World!');
const hashBuffer = await crypto.subtle.digest('SHA-256', data);
const hashArray = Array.from(new Uint8Array(hashBuffer));
const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
console.log('SHA-256:', hashHex);

// Шифрование
const key = await crypto.subtle.generateKey(
  { name: 'AES-GCM', length: 256 },
  true,
  ['encrypt', 'decrypt']
);

const encrypted = await crypto.subtle.encrypt(
  { name: 'AES-GCM', iv: new Uint8Array(12) },
  key,
  data
);`
      },
      {
        title: "Notifications API",
        code: `// Запрос разрешения
const permission = await Notification.requestPermission();

if (permission === 'granted') {
  // Показ уведомления
  const notification = new Notification('Заголовок', {
    body: 'Текст уведомления',
    icon: '/icon.png',
    badge: '/badge.png',
    tag: 'notification-id',
    requireInteraction: true
  });
  
  notification.onclick = () => {
    console.log('Уведомление кликнуто');
    window.focus();
    notification.close();
  };
}

// Проверка разрешения
if (Notification.permission === 'granted') {
  // можно показывать уведомления
}`
      },
      {
        title: "Permissions API",
        code: `// Проверка разрешений
const permissions = await navigator.permissions.query({ name: 'camera' });
console.log('Камера:', permissions.state); // 'granted', 'denied', 'prompt'

const geolocation = await navigator.permissions.query({ name: 'geolocation' });
console.log('Геолокация:', geolocation.state);

// Слушаем изменения
permissions.addEventListener('change', () => {
  console.log('Разрешение изменилось:', permissions.state);
});

// Доступные разрешения: 'camera', 'microphone', 'geolocation', 'notifications', 'persistent-storage'`
      },
      {
        title: "Web Locks API",
        code: `// Захват блокировки
await navigator.locks.request('my-resource', async (lock) => {
  // Критическая секция - только один воркер/вкладка может выполнить
  await updateSharedResource();
});

// С блокировкой на чтение/запись
await navigator.locks.request('my-resource', { mode: 'exclusive' }, async (lock) => {
  // Эксклюзивная блокировка
});

// Проверка доступных блокировок
const locks = await navigator.locks.query();
console.log('Активные блокировки:', locks);`
      },
      {
        title: "Feature Detection",
        code: `// Проверка поддержки API
if ('customElements' in window) {
  // Web Components поддерживаются
}

if ('crypto' in window && 'subtle' in window.crypto) {
  // Web Crypto API поддерживается
}

if ('Notification' in window) {
  // Notifications API поддерживается
}

if ('locks' in navigator) {
  // Web Locks API поддерживается
}

// Полифиллы для неподдерживаемых API
if (!window.customElements) {
  // загрузить полифилл
}`
      }
    ],
    relatedTopics: ['service-workers', 'web-components', 'security', 'pwa']
  }
];
