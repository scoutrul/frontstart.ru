import { Topic } from '../../../types';

export const JS_BROWSER_API_INTERMEDIATE_TOPICS: Topic[] = [
{
    id: 'debounce-throttle',
    title: 'Debounce и Throttle',
    difficulty: 'intermediate',
    description: 'Debounce откладывает выполнение до паузы в вызовах. Throttle ограничивает частоту выполнения (максимум раз в N мс). Debounce для поиска, Throttle для скролла/ресайза. Оба оптимизируют производительность, уменьшая количество вызовов функций.',
    keyPoints: [
      'Debounce: выполнение после паузы в вызовах.',
      'Throttle: выполнение максимум раз в N миллисекунд.',
      'Debounce: поиск, валидация форм.',
      'Throttle: скролл, ресайз, события мыши.',
      'Оба уменьшают нагрузку и улучшают производительность.'
    ],
    tags: ['performance', 'optimization', 'events', 'patterns'],
    examples: [
      {
        title: "Debounce",
        code: `function debounce(fn, delay) {\n  let timeoutId;\n  return function(...args) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => fn.apply(this, args), delay);\n  };\n}\n\nconst search = debounce((query) => {\n  console.log("Searching:", query);\n}, 300);\n\n// Вызовется только после 300мс паузы\nsearch("a");\nsearch("ab");\nsearch("abc"); // Только этот вызов`
      },
      {
        title: "Throttle",
        code: `function throttle(fn, delay) {\n  let lastCall = 0;\n  return function(...args) {\n    const now = Date.now();\n    if (now - lastCall >= delay) {\n      lastCall = now;\n      fn.apply(this, args);\n    }\n  };\n}\n\nconst handleScroll = throttle(() => {\n  console.log("Scrolled");\n}, 100);\n\n// Вызовется максимум раз в 100мс`
      },
      {
        title: "Использование",
        code: `// Debounce для поиска\ninput.addEventListener('input', debounce((e) => {\n  searchAPI(e.target.value);\n}, 300));\n\n// Throttle для скролла\nwindow.addEventListener('scroll', throttle(() => {\n  updatePosition();\n}, 100));`
      }
    ],
    relatedTopics: ['callbacks', 'higher-order-functions', 'performance']
  },
{
    id: 'intersection-observer',
    title: 'Intersection Observer',
    difficulty: 'intermediate',
    description: 'Intersection Observer отслеживает видимость элементов в viewport. Создается через new IntersectionObserver(callback, options). Вызывается при пересечении порога (threshold). Используется для ленивой загрузки изображений, infinite scroll, анимаций при появлении, аналитики.',
    keyPoints: [
      'new IntersectionObserver(callback, options): создает наблюдатель.',
      'observe(element): начинает наблюдение, unobserve(element): останавливает.',
      'threshold: порог видимости (0.0 - 1.0), rootMargin: отступы.',
      'callback получает entries с isIntersecting, intersectionRatio.',
      'Использование: ленивая загрузка, infinite scroll, анимации.'
    ],
    tags: ['intersection-observer', 'viewport', 'performance', 'lazy-loading', 'browser', 'api'],
    examples: [
      {
        title: "Базовое использование",
        code: `const observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      console.log('Element is visible!');\n      entry.target.classList.add('visible');\n    }\n  });\n}, {\n  threshold: 0.5 // сработает при 50% видимости\n});\n\nconst element = document.querySelector('.item');\nobserver.observe(element);`
      },
      {
        title: "Ленивая загрузка изображений",
        code: `const imageObserver = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      const img = entry.target;\n      img.src = img.dataset.src; // загружаем реальное изображение\n      img.classList.remove('lazy');\n      imageObserver.unobserve(img);\n    }\n  });\n});\n\n// Наблюдаем все изображения с классом lazy\ndocument.querySelectorAll('img.lazy').forEach(img => {\n  imageObserver.observe(img);\n});`
      },
      {
        title: "Infinite scroll",
        code: `const sentinel = document.querySelector('#sentinel');\n\nconst observer = new IntersectionObserver((entries) => {\n  if (entries[0].isIntersecting) {\n    loadMoreItems(); // загружаем еще элементы\n  }\n}, {\n  rootMargin: '100px' // загружать за 100px до появления\n});\n\nobserver.observe(sentinel);`
      },
      {
        title: "Анимация при появлении",
        code: `const animateObserver = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      entry.target.style.animation = 'fadeIn 0.5s';\n      animateObserver.unobserve(entry.target);\n    }\n  });\n}, {\n  threshold: 0.1\n});\n\ndocument.querySelectorAll('.animate-on-scroll').forEach(el => {\n  animateObserver.observe(el);\n});`
      }
    ],
    relatedTopics: ['dom-api', 'event-api', 'performance-optimization']
  },
{
    id: 'web-workers',
    title: 'Web Workers',
    difficulty: 'intermediate',
    description: 'Web Workers выполняют код в отдельном потоке, не блокируя основной. new Worker(script) создает воркер. postMessage отправляет данные, onmessage получает. SharedWorker для нескольких вкладок. Используется для тяжелых вычислений, обработки данных, не имеет доступа к DOM.',
    keyPoints: [
      'new Worker(script): создает воркер в отдельном потоке.',
      'postMessage(data): отправка данных, onmessage: получение.',
      'Не имеет доступа к DOM, window, document.',
      'SharedWorker: общий воркер для нескольких вкладок.',
      'Использование: тяжелые вычисления, обработка данных, не блокирует UI.'
    ],
    tags: ['web-workers', 'multithreading', 'performance', 'async', 'browser', 'api'],
    examples: [
      {
        title: "Базовый воркер",
        code: `// main.js\nconst worker = new Worker('worker.js');\n\nworker.postMessage({ type: 'calculate', data: [1, 2, 3, 4, 5] });\n\nworker.onmessage = (event) => {\n  console.log('Result:', event.data);\n};\n\nworker.onerror = (error) => {\n  console.error('Worker error:', error);\n};\n\n// worker.js\nself.onmessage = (event) => {\n  const { type, data } = event.data;\n  \n  if (type === 'calculate') {\n    const result = data.reduce((sum, n) => sum + n, 0);\n    self.postMessage(result);\n  }\n};`
      },
      {
        title: "Тяжелые вычисления",
        code: `// main.js\nfunction heavyCalculation() {\n  const worker = new Worker('calculator.js');\n  \n  worker.postMessage({ numbers: Array.from({length: 1000000}, (_, i) => i) });\n  \n  worker.onmessage = (e) => {\n    console.log('Sum:', e.data);\n    worker.terminate(); // завершаем воркер\n  };\n}\n\n// calculator.js\nself.onmessage = (e) => {\n  const sum = e.data.numbers.reduce((acc, n) => acc + n, 0);\n  self.postMessage(sum);\n};`
      },
      {
        title: "Inline Worker",
        code: `// Создание воркера из строки\nconst workerCode = \`\n  self.onmessage = (e) => {\n    const result = e.data * 2;\n    self.postMessage(result);\n  };\n\`;\n\nconst blob = new Blob([workerCode], { type: 'application/javascript' });\nconst worker = new Worker(URL.createObjectURL(blob));\n\nworker.postMessage(5);\nworker.onmessage = (e) => console.log(e.data); // 10`
      }
    ],
    relatedTopics: ['async-await', 'promises', 'performance-optimization']
  },
{
    id: 'resize-observer',
    title: 'Resize Observer',
    difficulty: 'intermediate',
    description: 'Resize Observer отслеживает изменение размеров элементов. Создается через new ResizeObserver(callback). Вызывается при изменении размеров. Используется для адаптивных компонентов, виртуализации, динамических макетов. Более эффективен чем window.resize для отдельных элементов.',
    keyPoints: [
      'new ResizeObserver(callback): создает наблюдатель размеров.',
      'observe(element): начинает наблюдение, unobserve(element): останавливает.',
      'callback получает entries с contentRect (размеры элемента).',
      'Более эффективен чем window.resize для отдельных элементов.',
      'Использование: адаптивные компоненты, виртуализация, динамические макеты.'
    ],
    tags: ['resize-observer', 'layout', 'responsive', 'performance', 'browser', 'api'],
    examples: [
      {
        title: "Базовое использование",
        code: `const resizeObserver = new ResizeObserver((entries) => {\n  entries.forEach(entry => {\n    const { width, height } = entry.contentRect;\n    console.log(\`Size: \${width}x\${height}\`);\n    \n    // Обновляем компонент при изменении размера\n    updateLayout(width, height);\n  });\n});\n\nconst element = document.querySelector('.container');\nresizeObserver.observe(element);`
      },
      {
        title: "Адаптивный компонент",
        code: `const cardObserver = new ResizeObserver((entries) => {\n  entries.forEach(entry => {\n    const { width } = entry.contentRect;\n    const card = entry.target;\n    \n    if (width < 400) {\n      card.classList.add('compact');\n      card.classList.remove('wide');\n    } else {\n      card.classList.add('wide');\n      card.classList.remove('compact');\n    }\n  });\n});\n\ndocument.querySelectorAll('.card').forEach(card => {\n  cardObserver.observe(card);\n});`
      },
      {
        title: "Виртуализация списка",
        code: `const listObserver = new ResizeObserver((entries) => {\n  const { width, height } = entries[0].contentRect;\n  \n  // Пересчитываем видимые элементы при изменении размера\n  const itemHeight = 50;\n  const visibleCount = Math.ceil(height / itemHeight);\n  \n  updateVisibleItems(visibleCount);\n});\n\nconst listContainer = document.querySelector('.virtual-list');\nlistObserver.observe(listContainer);`
      }
    ],
    relatedTopics: ['dom-api', 'intersection-observer', 'performance-optimization']
  },
{
    id: 'mutation-observer',
    title: 'Mutation Observer',
    difficulty: 'intermediate',
    description: 'Mutation Observer отслеживает изменения DOM. Создается через new MutationObserver(callback). Отслеживает добавление/удаление узлов, изменения атрибутов, текста. Используется для отладки, синхронизации, реактивности. Альтернатива устаревшим Mutation Events.',
    keyPoints: [
      'new MutationObserver(callback): создает наблюдатель изменений DOM.',
      'observe(element, options): начинает наблюдение с настройками.',
      'options: childList (дети), attributes (атрибуты), characterData (текст), subtree (все потомки).',
      'callback получает mutations с type, target, addedNodes, removedNodes.',
      'Использование: отладка, синхронизация, реактивность.'
    ],
    tags: ['mutation-observer', 'dom', 'reactivity', 'debugging', 'browser', 'api'],
    examples: [
      {
        title: "Отслеживание добавления элементов",
        code: `const observer = new MutationObserver((mutations) => {\n  mutations.forEach(mutation => {\n    if (mutation.type === 'childList') {\n      mutation.addedNodes.forEach(node => {\n        if (node.nodeType === 1) { // элемент\n          console.log('Added:', node);\n        }\n      });\n      \n      mutation.removedNodes.forEach(node => {\n        console.log('Removed:', node);\n      });\n    }\n  });\n});\n\nobserver.observe(document.body, {\n  childList: true,\n  subtree: true // наблюдать все потомки\n});`
      },
      {
        title: "Отслеживание атрибутов",
        code: `const attrObserver = new MutationObserver((mutations) => {\n  mutations.forEach(mutation => {\n    if (mutation.type === 'attributes') {\n      console.log(\`\${mutation.attributeName} changed on\`, mutation.target);\n      console.log('Old value:', mutation.oldValue);\n      console.log('New value:', mutation.target.getAttribute(mutation.attributeName));\n    }\n  });\n});\n\nconst element = document.querySelector('.item');\nattrObserver.observe(element, {\n  attributes: true,\n  attributeOldValue: true, // сохранять старое значение\n  attributeFilter: ['class', 'data-id'] // только эти атрибуты\n});`
      },
      {
        title: "Синхронизация состояния",
        code: `// Синхронизация с внешним состоянием\nconst syncObserver = new MutationObserver(() => {\n  // При изменении DOM обновляем состояние\n  updateState(getStateFromDOM());\n});\n\nsyncObserver.observe(document.querySelector('#app'), {\n  childList: true,\n  subtree: true,\n  attributes: true\n});\n\n// Остановка наблюдения\nsyncObserver.disconnect();`
      }
    ],
    relatedTopics: ['dom-api', 'event-api']
  },
{
    id: 'indexeddb',
    title: 'IndexedDB',
    difficulty: 'intermediate',
    description: 'IndexedDB — клиентская NoSQL база данных в браузере. Хранит большие объемы структурированных данных. Работает асинхронно через события или Promise API. Объектные хранилища (object stores), индексы для поиска, транзакции для атомарности. Используется для офлайн-приложений, кэширования.',
    keyPoints: [
      'indexedDB.open(name, version): открывает/создает БД.',
      'objectStore: хранилище объектов, как таблица в SQL.',
      'index: для быстрого поиска по полям.',
      'transaction: атомарные операции, режимы readwrite/readonly.',
      'Использование: офлайн-приложения, кэширование больших данных.'
    ],
    tags: ['indexeddb', 'database', 'storage', 'offline', 'browser', 'api'],
    examples: [
      {
        title: "Открытие БД и создание хранилища",
        code: `const request = indexedDB.open('myDB', 1);\n\nrequest.onupgradeneeded = (event) => {\n  const db = event.target.result;\n  \n  // Создаем хранилище\n  if (!db.objectStoreNames.contains('users')) {\n    const store = db.createObjectStore('users', { keyPath: 'id' });\n    \n    // Создаем индекс\n    store.createIndex('name', 'name', { unique: false });\n  }\n};\n\nrequest.onsuccess = (event) => {\n  const db = event.target.result;\n  console.log('DB opened:', db);\n};\n\nrequest.onerror = (event) => {\n  console.error('Error:', event.target.error);\n};`
      },
      {
        title: "Добавление и получение данных",
        code: `// Добавление\nconst transaction = db.transaction(['users'], 'readwrite');\nconst store = transaction.objectStore('users');\n\nconst user = { id: 1, name: 'Alice', age: 30 };\nconst request = store.add(user);\n\nrequest.onsuccess = () => {\n  console.log('User added');\n};\n\n// Получение\nconst getTransaction = db.transaction(['users'], 'readonly');\nconst getStore = getTransaction.objectStore('users');\nconst getRequest = getStore.get(1);\n\ngetRequest.onsuccess = () => {\n  console.log('User:', getRequest.result);\n};`
      },
      {
        title: "Поиск по индексу",
        code: `const transaction = db.transaction(['users'], 'readonly');\nconst store = transaction.objectStore('users');\nconst index = store.index('name');\n\n// Поиск по имени\nconst request = index.getAll('Alice');\n\nrequest.onsuccess = () => {\n  console.log('Users:', request.result);\n};\n\n// Или через курсор\nconst cursorRequest = index.openCursor();\ncursorRequest.onsuccess = (event) => {\n  const cursor = event.target.result;\n  if (cursor) {\n    console.log(cursor.value);\n    cursor.continue();\n  }\n};`
      },
      {
        title: "Promise обертка",
        code: `function openDB(name, version) {\n  return new Promise((resolve, reject) => {\n    const request = indexedDB.open(name, version);\n    request.onsuccess = () => resolve(request.result);\n    request.onerror = () => reject(request.error);\n    request.onupgradeneeded = (event) => {\n      const db = event.target.result;\n      // настройка БД\n    };\n  });\n}\n\n// Использование\nconst db = await openDB('myDB', 1);`
      }
    ],
    relatedTopics: ['web-storage', 'async-await', 'promises']
  },
{
    id: 'abort-controller',
    title: 'AbortController',
    difficulty: 'intermediate',
    description: 'AbortController позволяет отменять асинхронные операции (fetch, промисы). Создается через new AbortController(), signal передается в fetch или другие API. abort() отменяет операцию. Используется для отмены запросов при размонтировании компонента, таймаутов, пользовательской отмены.',
    keyPoints: [
      'new AbortController(): создает контроллер отмены.',
      'signal: передается в fetch или другие API.',
      'abort(): отменяет операцию, вызывает AbortError.',
      'Использование: отмена fetch запросов, промисов, таймаутов.',
      'Один контроллер может отменить несколько операций.'
    ],
    tags: ['abort-controller', 'async', 'fetch', 'cancellation', 'async-deep'],
    examples: [
      {
        title: "Отмена fetch запроса",
        code: `const controller = new AbortController();\nconst signal = controller.signal;\n\nfetch('/api/data', { signal })\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => {\n    if (error.name === 'AbortError') {\n      console.log('Request aborted');\n    }\n  });\n\n// Отмена запроса\ncontroller.abort();`
      },
      {
        title: "Отмена при размонтировании компонента",
        code: `// React пример\nuseEffect(() => {\n  const controller = new AbortController();\n  \n  fetch('/api/data', { signal: controller.signal })\n    .then(res => res.json())\n    .then(setData);\n  \n  return () => {\n    controller.abort(); // отмена при размонтировании\n  };\n}, []);`
      },
      {
        title: "Отмена промиса",
        code: `function cancellablePromise(promise, signal) {\n  return new Promise((resolve, reject) => {\n    signal.addEventListener('abort', () => {\n      reject(new DOMException('Aborted', 'AbortError'));\n    });\n    \n    promise.then(resolve, reject);\n  });\n}\n\nconst controller = new AbortController();\nconst promise = new Promise(resolve => setTimeout(() => resolve('Done'), 5000));\n\ncancellablePromise(promise, controller.signal)\n  .then(console.log)\n  .catch(err => console.error(err.name)); // "AbortError"\n\ncontroller.abort();`
      },
      {
        title: "Таймаут для запроса",
        code: `function fetchWithTimeout(url, timeout = 5000) {\n  const controller = new AbortController();\n  \n  const timeoutId = setTimeout(() => {\n    controller.abort();\n  }, timeout);\n  \n  return fetch(url, { signal: controller.signal })\n    .finally(() => clearTimeout(timeoutId));\n}\n\nfetchWithTimeout('/api/data', 3000)\n  .then(res => res.json())\n  .catch(err => {\n    if (err.name === 'AbortError') {\n      console.log('Request timeout');\n    }\n  });`
      }
    ],
    relatedTopics: ['fetch-api', 'promises', 'async-await'],
  }
];
