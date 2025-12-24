import { Topic } from '../types';

export const INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'hoisting',
    title: 'Hoisting (Всплытие)',
    difficulty: 'intermediate',
    description: 'Объявления var и function "всплывают" в начало области видимости. var инициализируется как undefined, Function Declaration доступна полностью. let/const тоже всплывают, но находятся в TDZ до объявления. Код физически не перемещается — это поведение движка.',
    keyPoints: [
      'Function Declaration всплывает полностью.',
      'var всплывает с инициализацией undefined.',
      'let/const всплывают, но доступ к ним запрещен до объявления (TDZ).'
    ],
    tags: ['hoisting', 'scope', 'internals'],
    examples: [
      {
        title: "Всплытие функций и переменных",
        code: `sayHi(); // "Hi"\nfunction sayHi() { console.log("Hi"); }\n\nconsole.log(a); // undefined\nvar a = 5;`
      }
    ],
    relatedTopics: ['var-let-const', 'tdz'],
    nextTopicId: 'tdz'
  },
  {
    id: 'tdz',
    title: 'Temporal Dead Zone (TDZ)',
    difficulty: 'intermediate',
    description: 'TDZ — период от входа в блок до объявления let/const. Обращение к переменной в TDZ вызывает ReferenceError. var такой защиты не имеет. TDZ помогает избежать ошибок использования неинициализированных переменных.',
    keyPoints: [
      'Зона от начала блока до строки объявления.',
      'Защищает от логических ошибок использования неинициализированных данных.'
    ],
    tags: ['tdz', 'variables', 'errors'],
    examples: [
      {
        title: "Проявление TDZ",
        code: `{\n  // console.log(x); // ReferenceError\n  let x = 5;\n}`
      }
    ],
    relatedTopics: ['var-let-const', 'scope-chain'],
    nextTopicId: 'scope-chain'
  },
  {
    id: 'closures-basic',
    title: 'Замыкания (Closures)',
    difficulty: 'intermediate',
    description: 'Замыкание — функция, которая сохраняет доступ к переменным внешней области видимости после её завершения. Используется для инкапсуляции, приватных переменных и сохранения состояния. Переменные не удаляются из памяти, пока на них есть ссылка из замыкания.',
    keyPoints: [
      'Используется для инкапсуляции и создания приватных данных.',
      'Переменные сохраняются в памяти, пока на них ссылается внутренняя функция.'
    ],
    tags: ['closure', 'scope', 'encapsulation'],
    examples: [
      {
        title: "Счетчик",
        code: `function createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2`
      }
    ],
    relatedTopics: ['lexical-env', 'private-state'],
    nextTopicId: 'private-state'
  },
  {
    id: 'private-state',
    title: 'Приватное состояние',
    difficulty: 'intermediate',
    description: 'Паттерн Модуль: переменные внутри функции недоступны снаружи. Возвращаешь объект с методами, которые имеют доступ к этим переменным через замыкание. Это классический способ создания приватных свойств до появления private полей в классах.',
    keyPoints: [
      'Паттерн "Модуль".',
      'Защита данных от прямого изменения извне.'
    ],
    tags: ['closure', 'privacy', 'module pattern'],
    examples: [
      {
        title: "Инкапсуляция баланса",
        code: `function createAccount(initial) {\n  let balance = initial;\n  return {\n    get: () => balance,\n    add: (v) => balance += v\n  };\n}`
      }
    ],
    relatedTopics: ['closures-basic'],
    nextTopicId: 'this-basics'
  },
  {
    id: 'arrow-functions',
    title: 'this в стрелках',
    difficulty: 'intermediate',
    description: 'У стрелочных функций нет своего this — они берут его из внешнего контекста в момент создания. Нельзя переопределить через bind/call/apply. Идеальны для колбэков, где нужно сохранить контекст. Не подходят как методы объекта, если нужен доступ к this объекта.',
    keyPoints: [
      'this в стрелках нельзя переопределить через bind/call.',
      'Идеальны для колбэков внутри методов.'
    ],
    tags: ['this', 'arrow functions', 'ES6'],
    examples: [
      {
        title: "Лексический this",
        code: `const obj = {\n  name: "Obj",\n  log() {\n    setTimeout(() => console.log(this.name), 100);\n  }\n};\nobj.log(); // "Obj"`
      }
    ],
    relatedTopics: ['this-basics'],
    nextTopicId: 'context-loss'
  },
  {
    id: 'context-loss',
    title: 'Потеря контекста',
    difficulty: 'intermediate',
    description: 'Когда метод передается как функция (setTimeout, event listener), this теряется. Решения: стрелочная функция-обертка или bind. Стрелки фиксируют this лексически, bind создает новую функцию с привязанным контекстом.',
    keyPoints: [
      'Часто случается в setTimeout или event listeners.',
      'Решается через bind или стрелочные функции.'
    ],
    tags: ['this', 'callbacks', 'errors'],
    examples: [
      {
        title: "Потеря и решение",
        code: `const user = { name: "Ivan", greet() { console.log(this.name); } };\nconst f = user.greet;\nf(); // undefined\nconst boundF = user.greet.bind(user);\nboundF(); // "Ivan"`
      }
    ],
    relatedTopics: ['bind-call-apply'],
    nextTopicId: 'bind-call-apply'
  },
  {
    id: 'bind-call-apply',
    title: 'Методы функций',
    difficulty: 'intermediate',
    description: 'call и apply вызывают функцию сразу с указанным this. call принимает аргументы через запятую, apply — массивом. bind возвращает новую функцию с привязанным this, не вызывая оригинал. bind полезен для фиксации контекста заранее.',
    keyPoints: [
      'call: аргументы через запятую.',
      'apply: аргументы массивом.',
      'bind: жесткая фиксация контекста навсегда.'
    ],
    tags: ['bind', 'call', 'apply', 'this'],
    examples: [
      {
        title: "Явная привязка",
        code: `function greet(s) { console.log(s + this.name); }\ngreet.call({name: "Bob"}, "Hello ");`
      }
    ],
    relatedTopics: ['this-basics'],
    nextTopicId: 'prototype-chain'
  },
  {
    id: 'prototype-chain',
    title: 'Прототипы',
    difficulty: 'intermediate',
    description: 'Объекты наследуют напрямую от других объектов через [[Prototype]]. Если свойство не найдено, поиск идет по цепочке прототипов до Object.prototype. __proto__ — устаревший способ доступа, используй Object.getPrototypeOf(). Прототипы позволяют переиспользовать методы.',
    keyPoints: [
      'Свойство __proto__ ссылается на прототип.',
      'Object.prototype — вершина цепочки.'
    ],
    tags: ['prototype', 'inheritance', 'oop'],
    examples: [
      {
        title: "Наследование",
        code: `const animal = { eats: true };\nconst cat = { jumps: true };\ncat.__proto__ = animal;\nconsole.log(cat.eats); // true`
      }
    ],
    relatedTopics: ['this-basics'],
    nextTopicId: 'event-loop'
  },
  {
    id: 'promises',
    title: 'Promises (Промисы)',
    difficulty: 'intermediate',
    description: 'Промис — объект для асинхронных операций. Состояния: pending, fulfilled, rejected. Методы: then для успеха, catch для ошибок, finally всегда выполняется. Решает проблему Callback Hell. Promise.all для параллельного выполнения, Promise.race для первого результата.',
    keyPoints: [
      'Состояния: pending, fulfilled, rejected.',
      'Методы: then, catch, finally.',
      'Promise.all для параллельного выполнения.'
    ],
    tags: ['promise', 'async', 'flow'],
    examples: [
      {
        title: "Цепочка промисов",
        code: `fetch(url)\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.error(err));`
      }
    ],
    relatedTopics: ['event-loop', 'async-await'],
    nextTopicId: 'async-await'
  },
  {
    id: 'async-await',
    title: 'Async / Await',
    difficulty: 'intermediate',
    description: 'async/await — синтаксический сахар над промисами. async функция всегда возвращает промис. await приостанавливает выполнение до разрешения промиса, не блокируя основной поток. Ошибки обрабатываются через try/catch. Код читается как синхронный.',
    keyPoints: [
      'async всегда возвращает промис.',
      'await приостанавливает функцию до выполнения промиса.',
      'Обработка ошибок через try/catch.'
    ],
    tags: ['async', 'await', 'ES2017'],
    examples: [
      {
        title: "Чистая асинхронность",
        code: `async function load() {\n  try {\n    const res = await fetch(url);\n    const data = await res.json();\n    return data;\n  } catch(e) { /* ... */ }\n}`
      }
    ],
    relatedTopics: ['promises'],
    nextTopicId: 'generators'
  },
  {
    id: 'immutability',
    title: 'Иммутабельность',
    difficulty: 'intermediate',
    description: 'Иммутабельность — данные не изменяются напрямую, создается новая копия. Используй spread оператор, map/filter вместо мутаций. Критично для React (сравнение по ссылке) и Redux. Предотвращает побочные эффекты, упрощает отладку.',
    keyPoints: [
      'Предотвращает побочные эффекты.',
      'Важно для React и Redux.'
    ],
    tags: ['immutability', 'functional', 'react'],
    examples: [
      {
        title: "Обновление объекта",
        code: `const user = { name: "Ivan", age: 20 };\nconst updatedUser = { ...user, age: 21 };`
      }
    ],
    relatedTopics: ['closures-basic']
  }
];

