import { Topic } from '../../../types';

export const JS_ASYNC_INTERMEDIATE_TOPICS: Topic[] = [
{
    id: 'promises',
    title: 'Promises (Промисы)',
    difficulty: 'intermediate',
    description: 'Promise — объект, представляющий результат асинхронной операции, который может быть выполнен (resolved) или отклонён (rejected). Решает проблему callback hell — вложенные коллбэки, трудночитаемый код, сложная обработка ошибок. Методы: .then() для обработки успешного выполнения, .catch() для обработки ошибок, .finally() выполняется в любом случае.',
    keyPoints: [
      'Promise решает проблему callback hell — вложенные коллбэки, трудночитаемый код, сложная обработка ошибок.',
      'Состояния: pending, fulfilled (resolved), rejected.',
      'Методы: .then() — обработка успешного выполнения, .catch() — обработка ошибок, .finally() — выполняется в любом случае.',
      'Promise.all([...]) — ждёт все промисы, отклоняется при первом reject.',
      'Promise.allSettled([...]) — ждёт все промисы, возвращает результат каждого (успех или ошибка).',
      'Promise.race([...]) — первый промис, который выполнится или даст ошибку, определяет результат.',
      'Promise.any([...]) — ждёт первый успешный промис, игнорирует ошибки всех остальных.'
    ],
    funFact: 'Промисы были стандартизированы в ES6 (2015), но концепция пришла из библиотек (Q, Bluebird). Они решают проблему "callback hell" и делают асинхронный код более читаемым.',
    tags: ['promise', 'async', 'flow', 'async-deep', 'callbacks', 'async-await', 'callback-hell'],
    examples: [
      {
        title: "Проблема с коллбэками (callback hell)",
        code: `// Раньше асинхронность делали через коллбэки
setTimeout(() => {
  console.log('Step 1');
  setTimeout(() => {
    console.log('Step 2');
    setTimeout(() => {
      console.log('Step 3');
    }, 1000);
  }, 1000);
}, 1000);

// Проблемы: вложенные коллбэки, трудночитаемый код, сложная обработка ошибок`
      },
      {
        title: "Promise решает проблему",
        code: `fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Читаемый код, простая обработка ошибок`
      },
      {
        title: "Создание промиса",
        code: `const promise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve("Success!");\n  }, 1000);\n});\n\npromise.then(result => console.log(result));`
      },
      {
        title: "Promise.all - ждёт все промисы, отклоняется при первом reject",
        code: `const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.reject('Error');

Promise.all([p1, p2, p3])
  .then(console.log) // не выполнится
  .catch(console.error); // "Error"

// Если все успешны:
Promise.all([p1, p2]).then(console.log); // [1, 2]`
      },
      {
        title: "Promise.allSettled - ждёт все промисы, возвращает результат каждого",
        code: `const p1 = Promise.resolve(1);
const p2 = Promise.reject('Error');
const p3 = Promise.resolve(3);

Promise.allSettled([p1, p2, p3]).then(results => {
  console.log(results);
  // [
  //   { status: 'fulfilled', value: 1 },
  //   { status: 'rejected', reason: 'Error' },
  //   { status: 'fulfilled', value: 3 }
  // ]
});`
      },
      {
        title: "Promise.race - первый промис, который выполнится или даст ошибку",
        code: `const fast = new Promise(resolve => setTimeout(() => resolve('Fast'), 100));
const slow = new Promise(resolve => setTimeout(() => resolve('Slow'), 500));

Promise.race([fast, slow]).then(console.log); // "Fast"

// С ошибкой:
const error = Promise.reject('Error');
Promise.race([fast, error])
  .then(console.log) // не выполнится
  .catch(console.error); // "Error" (ошибка быстрее)`
      },
      {
        title: "Promise.any - ждёт первый успешный промис, игнорирует ошибки",
        code: `const p1 = Promise.reject('Error 1');
const p2 = Promise.resolve('Success 2');
const p3 = Promise.reject('Error 3');

Promise.any([p1, p2, p3])
  .then(console.log); // "Success 2"

// Если все провалились:
Promise.any([p1, p3])
  .then(console.log) // не выполнится
  .catch(err => console.error(err.errors)); // ['Error 1', 'Error 3']`
      },
      {
        title: "Методы работы с несколькими промисами",
        code: `const p1 = fetch('/api/users');
const p2 = fetch('/api/posts');
const p3 = fetch('/api/comments');

// Все должны успешно выполниться
Promise.all([p1, p2, p3]).then(results => console.log(results));

// Первый завершенный (успех или ошибка)
Promise.race([p1, p2, p3]).then(first => console.log(first));`
      }
    ],
    relatedTopics: ['event-loop', 'async-await'],
  },
{
    id: 'async-await',
    title: 'Async / Await',
    difficulty: 'intermediate',
    description: 'async/await — синтаксический сахар над промисами. Позволяет писать асинхронный код как синхронный (читается сверху вниз). Вызов await останавливает выполнение функции до получения результата промиса. async функция всегда возвращает промис. Обработка ошибок через try/catch делает код более линейным и читаемым.',
    keyPoints: [
      'Async/await делает код более линейным и читаемым, обработка ошибок через try/catch.',
      'async функция всегда возвращает промис.',
      'await приостанавливает выполнение функции до получения результата промиса.',
      'Позволяет писать асинхронный код как синхронный (читается сверху вниз).',
      'Обработка ошибок через try/catch.',
      'Необработанные ошибки создают rejected промис.',
      'Потерянные промисы: забытый await или catch.'
    ],
    funFact: 'async/await был добавлен в ES2017 и стал самым популярным способом работы с асинхронностью. Он делает асинхронный код похожим на синхронный, что значительно улучшает читаемость.',
    tags: ['async', 'await', 'ES2017', 'async-deep', 'promises', 'error-handling'],
    examples: [
      {
        title: "Базовое использование async/await",
        code: `async function fetchData() {
  try {
    const res = await fetch('/api/data');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// Код читается сверху вниз, как синхронный`
      },
      {
        title: "async всегда возвращает промис",
        code: `async function test() {\n  return 42;\n}\n\nconst result = test();\nconsole.log(result); // Promise { <fulfilled>: 42 }\nresult.then(v => console.log(v)); // 42`
      },
      {
        title: "Параллельное выполнение",
        code: `async function fetchData() {\n  const [users, posts] = await Promise.all([\n    fetch('/users').then(r => r.json()),\n    fetch('/posts').then(r => r.json())\n  ]);\n  return { users, posts };\n}`
      },
      {
        title: "Обработка ошибок",
        code: `async function riskyOperation() {\n  try {\n    const result = await mightFail();\n    return result;\n  } catch (error) {\n    console.error('Error:', error);\n    throw error; // пробрасываем дальше\n  }\n}\n\n// Или через catch промиса\nriskyOperation().catch(err => console.error(err));`
      },
      {
        title: "Потерянные промисы",
        code: `// Плохо: забыли await или catch\nasync function bad() {\n  fetch('/api'); // промис потерян, ошибка не обработана\n}\n\n// Хорошо: явная обработка\nasync function good() {\n  try {\n    await fetch('/api');\n  } catch (err) {\n    console.error(err);\n  }\n}\n\n// Или через catch\nasync function alsoGood() {\n  fetch('/api').catch(err => console.error(err));\n}`
      },
      {
        title: "Ошибки в цепочке",
        code: `async function chain() {\n  try {\n    const a = await step1();\n    const b = await step2(a);\n    return await step3(b);\n  } catch (error) {\n    // Поймает ошибку из любого шага\n    console.error('Chain failed:', error);\n    return null;\n  }\n}`
      }
    ],
    relatedTopics: ['promises', 'error-handling'],
  },
{
    id: 'error-handling',
    title: 'Обработка ошибок',
    difficulty: 'intermediate',
    description: 'try/catch перехватывает ошибки, finally выполняется всегда. throw выбрасывает ошибку. Можно создавать кастомные классы ошибок через extends Error.',
    keyPoints: [
      'try/catch: перехватывает ошибки, выполнение продолжается.',
      'finally: выполняется всегда, даже если была ошибка.',
      'throw: выбрасывает ошибку, можно передать любое значение.',
      'Кастомные ошибки: class extends Error для специфичных ошибок.'
    ],
    funFact: 'В JavaScript можно выбросить любое значение, не только Error. Однако рекомендуется всегда использовать объекты Error или его подклассы для лучшей отладки и обработки ошибок.',
    tags: ['errors', 'try-catch', 'throw', 'exceptions', 'promises', 'async-await'],
    examples: [
      {
        title: "try/catch/finally",
        code: `try {\n  const result = riskyOperation();\n  console.log(result);\n} catch (error) {\n  console.error("Error:", error.message);\n} finally {\n  console.log("Always executed");\n}`
      },
      {
        title: "throw",
        code: `function divide(a, b) {\n  if (b === 0) {\n    throw new Error("Division by zero");\n  }\n  return a / b;\n}\n\ntry {\n  divide(10, 0);\n} catch (e) {\n  console.log(e.message); // "Division by zero"\n}`
      },
      {
        title: "Кастомные ошибки",
        code: `class ValidationError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = "ValidationError";\n  }\n}\n\ntry {\n  throw new ValidationError("Invalid input");\n} catch (e) {\n  if (e instanceof ValidationError) {\n    console.log("Validation error:", e.message);\n  }\n}`
      }
    ],
    relatedTopics: ['promises', 'async-await']
  }
];
