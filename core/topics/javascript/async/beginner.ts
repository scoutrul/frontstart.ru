import { Topic } from '../../../types';

export const JS_ASYNC_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'execution-threading',
    title: 'Поточность выполнения',
    difficulty: 'beginner',
    description: 'JavaScript — однопоточный язык: выполняется один поток кода в один момент времени. Event Loop управляет асинхронностью, обрабатывая очереди задач (микрозадачи и макрозадачи). Асинхронные операции (сетевые запросы, таймеры) выполняются неблокирующе, делегируясь браузеру или Node.js, а результаты обрабатываются через колбэки, промисы или async/await.',
    keyPoints: [
      'Однопоточный: один поток выполнения, нет параллелизма на уровне языка.',
      'Event Loop: управляет очередями задач, обрабатывает асинхронность.',
      'Очереди задач: микрозадачи (Promises) и макрозадачи (setTimeout, события).',
      'Асинхронность: неблокирующий код, операции делегируются браузеру/Node.js.',
      'Callback: функции обратного вызова для асинхронных операций.',
      'Promise: объект для работы с асинхронными операциями.',
      'async/await: синтаксический сахар для работы с промисами.',
      'Web Workers: параллельное выполнение в отдельных потоках (только в браузере).'
    ],
    tags: ['threading', 'single-threaded', 'event-loop', 'async', 'concurrency', 'non-blocking', 'callbacks', 'promises'],
    examples: [
      {
        title: "Однопоточное выполнение",
        code: `console.log(1);
console.log(2);
console.log(3);
// Всегда выполняется последовательно: 1, 2, 3

// Нельзя прервать выполнение из другого потока
// (как в многопоточных языках)`
      },
      {
        title: "Неблокирующая асинхронность",
        code: `console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

fetch('/api/data')
  .then(() => console.log('Fetch done'));

console.log('End');

// Вывод: Start, End, Timeout, Fetch done
// Асинхронные операции не блокируют выполнение`
      },
      {
        title: "Event Loop и очереди",
        code: `// Микрозадачи выполняются перед макрозадачами
Promise.resolve().then(() => console.log('Microtask'));
setTimeout(() => console.log('Macrotask'), 0);

// Вывод: Microtask, Macrotask
// Event Loop сначала обрабатывает все микрозадачи`
      },
      {
        title: "Callback, Promise, async/await",
        code: `// Callback
setTimeout(() => {
  console.log('Callback');
}, 1000);

// Promise
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data));

// async/await
async function fetchData() {
  const response = await fetch('/api/data');
  const data = await response.json();
  console.log(data);
}`
      },
      {
        title: "Web Workers для параллелизма",
        code: `// Основной поток
const worker = new Worker('worker.js');
worker.postMessage({ data: [1, 2, 3] });
worker.onmessage = (e) => {
  console.log('Result:', e.data);
};

// worker.js (отдельный поток)
self.onmessage = (e) => {
  const result = e.data.data.map(x => x * 2);
  self.postMessage(result);
};`
      }
    ],
    relatedTopics: ['event-loop', 'promises', 'async-await', 'web-workers', 'callbacks'],
    isFrontendEssential: true
  }
];
