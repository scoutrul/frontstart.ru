import { Topic } from '../types';

export const ADVANCED_TOPICS: Topic[] = [
  {
    id: 'lexical-env',
    title: 'Лексическое окружение',
    difficulty: 'advanced',
    description: 'Лексическое окружение состоит из Environment Record (локальные переменные) и Outer Reference (ссылка на внешнее окружение). Создается при каждом вызове функции. Функция "захватывает" ссылку на окружение места определения. Это основа работы замыканий.',
    keyPoints: [
      'Создается при каждом вызове функции.',
      'Определяет доступный контекст данных.'
    ],
    tags: ['lexical environment', 'internals', 'memory'],
    examples: [
      {
        title: "Захват окружения",
        code: `let x = 1;\nfunction func() {\n  console.log(x);\n}\nx = 2;\nfunc(); // 2 (берет актуальное значение)`
      },
      {
        title: "Независимые окружения",
        code: `function createCounter() {\n  let count = 0;\n  return function() {\n    return ++count;\n  };\n}\n\nconst c1 = createCounter();\nconst c2 = createCounter();\nc1(); // 1\nc1(); // 2\nc2(); // 1 (независимое окружение)`
      },
      {
        title: "Окружение сохраняется",
        code: `function outer() {\n  const x = 10;\n  return function inner() {\n    console.log(x);\n  };\n}\n\nconst innerFunc = outer();\n// outer завершилась, но x доступен\ninnerFunc(); // 10`
      }
    ],
    relatedTopics: ['scope-chain', 'closures-basic'],
    nextTopicId: 'closures-basic'
  },
  {
    id: 'event-loop',
    title: 'Event Loop',
    difficulty: 'advanced',
    description: 'Event Loop управляет асинхронностью в однопоточном JS. Порядок: Call Stack → все Microtasks (Promises, queueMicrotask) → одна Macrotask (setTimeout, события). Микрозадачи имеют приоритет над макрозадачами. Асинхронные операции делегируются браузеру, результат попадает в очереди.',
    keyPoints: [
      'Сначала выполняется стек (синхронный код).',
      'Затем все микрозадачи (Promises).',
      'Затем одна макрозадача (setTimeout).'
    ],
    tags: ['event loop', 'async', 'performance'],
    examples: [
      {
        title: "Приоритеты",
        code: `console.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);\n// 1, 4, 3, 2`
      },
      {
        title: "Все микрозадачи перед макрозадачами",
        code: `setTimeout(() => console.log(1), 0);\nPromise.resolve().then(() => console.log(2));\nPromise.resolve().then(() => console.log(3));\nsetTimeout(() => console.log(4), 0);\n// 2, 3, 1, 4`
      },
      {
        title: "Вложенные промисы",
        code: `Promise.resolve().then(() => {\n  console.log(1);\n  Promise.resolve().then(() => console.log(2));\n});\nsetTimeout(() => console.log(3), 0);\n// 1, 2, 3 (все микрозадачи сначала)`
      }
    ],
    relatedTopics: ['promises', 'async-await'],
    nextTopicId: 'promises'
  },
  {
    id: 'generators',
    title: 'Generators',
    difficulty: 'advanced',
    description: 'Генератор — функция с yield, которая приостанавливает выполнение и возвращает значение. При вызове возвращает итератор. next() возобновляет выполнение. Используется для ленивых вычислений, бесконечных последовательностей, сложной асинхронной логики.',
    keyPoints: [
      'Возвращают объект-итератор.',
      'Основа для сложных асинхронных паттернов.'
    ],
    tags: ['generators', 'iterators', 'yield'],
    examples: [
      {
        title: "Простой генератор",
        code: `function* gen() {\n  yield 1;\n  yield 2;\n}\nconst g = gen();\ng.next().value; // 1`
      },
      {
        title: "Генератор с параметрами",
        code: `function* counter(start) {\n  let count = start;\n  while (true) {\n    yield count++;\n  }\n}\nconst c = counter(10);\nc.next().value; // 10\nc.next().value; // 11`
      },
      {
        title: "Передача значений в генератор",
        code: `function* gen() {\n  const x = yield 1;\n  const y = yield x + 2;\n  return y;\n}\nconst g = gen();\ng.next(); // { value: 1, done: false }\ng.next(10); // { value: 12, done: false }\ng.next(20); // { value: 20, done: true }`
      }
    ],
    relatedTopics: ['async-await'],
    nextTopicId: 'proxy-reflect'
  },
  {
    id: 'proxy-reflect',
    title: 'Proxy и Reflect',
    difficulty: 'advanced',
    description: 'Proxy перехватывает операции над объектом (чтение, запись, вызов). Reflect предоставляет методы для тех же операций без перехвата. Используется для валидации, логирования, виртуальных свойств, реактивности. Reflect методы возвращают boolean успеха операции.',
    keyPoints: [
      'Proxy(target, handler): перехватывает операции над объектом.',
      'Reflect: методы для тех же операций, возвращают boolean успеха.',
      'Использование: валидация, логирование, виртуальные свойства.',
      'get/set/has/delete: основные перехватываемые операции.'
    ],
    tags: ['proxy', 'reflect', 'metaprogramming', 'ES6'],
    examples: [
      {
        title: "Базовый Proxy",
        code: `const target = { name: "Alice" };\nconst proxy = new Proxy(target, {\n  get(target, prop) {\n    console.log(\`Reading \${prop}\`);\n    return target[prop];\n  },\n  set(target, prop, value) {\n    console.log(\`Setting \${prop} = \${value}\`);\n    target[prop] = value;\n    return true;\n  }\n});\n\nproxy.name; // "Reading name" -> "Alice"\nproxy.age = 30; // "Setting age = 30"`
      },
      {
        title: "Валидация через Proxy",
        code: `const user = new Proxy({}, {\n  set(target, prop, value) {\n    if (prop === "age" && (value < 0 || value > 150)) {\n      throw new Error("Invalid age");\n    }\n    target[prop] = value;\n    return true;\n  }\n});\n\nuser.age = 25; // OK\nuser.age = 200; // Error`
      },
      {
        title: "Reflect",
        code: `const obj = { x: 1 };\n\n// Вместо obj.prop\nReflect.get(obj, "x"); // 1\n\n// Вместо obj.prop = value\nReflect.set(obj, "y", 2); // true\n\n// Проверка успеха\nif (Reflect.deleteProperty(obj, "x")) {\n  console.log("Deleted");\n}`
      }
    ],
    relatedTopics: ['objects-basic', 'classes'],
    nextTopicId: 'weakmap-weakset'
  },
  {
    id: 'weakmap-weakset',
    title: 'WeakMap и WeakSet',
    difficulty: 'advanced',
    description: 'WeakMap и WeakSet хранят слабые ссылки на объекты. Если объект удаляется, он автоматически удаляется из WeakMap/WeakSet. Ключи только объекты, нет итерации, нет size. Используется для метаданных объектов, приватных данных, кэширования без утечек памяти.',
    keyPoints: [
      'Слабые ссылки: объект удаляется из коллекции при сборке мусора.',
      'Ключи только объекты: примитивы не допускаются.',
      'Нет итерации: нельзя перебрать элементы, нет size.',
      'Использование: метаданные, приватные данные, кэш без утечек.'
    ],
    tags: ['weakmap', 'weakset', 'memory', 'garbage-collection'],
    examples: [
      {
        title: "WeakMap",
        code: `const wm = new WeakMap();\nconst obj1 = {};\nconst obj2 = {};\n\nwm.set(obj1, "data1");\nwm.set(obj2, "data2");\n\nwm.get(obj1); // "data1"\nwm.has(obj2); // true\n\n// obj1 удаляется -> автоматически удаляется из WeakMap`
      },
      {
        title: "Приватные данные",
        code: `const privateData = new WeakMap();\n\nclass User {\n  constructor(name) {\n    privateData.set(this, { name });\n  }\n  getName() {\n    return privateData.get(this).name;\n  }\n}\n\nconst user = new User("Alice");\nuser.getName(); // "Alice"\n// privateData недоступна снаружи`
      },
      {
        title: "WeakSet",
        code: `const ws = new WeakSet();\nconst obj1 = {};\nconst obj2 = {};\n\nws.add(obj1);\nws.add(obj2);\n\nws.has(obj1); // true\nws.delete(obj2);\n\n// Использование: отслеживание посещенных объектов`
      }
    ],
    relatedTopics: ['map-set', 'memory-management'],
    nextTopicId: 'iterators-iterables'
  },
  {
    id: 'iterators-iterables',
    title: 'Iterators и Iterables',
    difficulty: 'advanced',
    description: 'Iterable — объект с методом Symbol.iterator, возвращающим итератор. Iterator — объект с методом next(), возвращающим {value, done}. for...of работает с iterables. Можно создавать кастомные iterables. Генераторы автоматически создают iterators.',
    keyPoints: [
      'Iterable: объект с Symbol.iterator, возвращающим iterator.',
      'Iterator: объект с next(), возвращающим {value, done}.',
      'for...of: работает с любым iterable.',
      'Генераторы: автоматически iterable, создают iterator.'
    ],
    tags: ['iterators', 'iterables', 'symbol', 'generators'],
    examples: [
      {
        title: "Кастомный iterable",
        code: `const range = {\n  start: 1,\n  end: 5,\n  [Symbol.iterator]() {\n    let current = this.start;\n    return {\n      next: () => {\n        if (current <= this.end) {\n          return { value: current++, done: false };\n        }\n        return { done: true };\n      }\n    };\n  }\n};\n\nfor (const num of range) {\n  console.log(num); // 1, 2, 3, 4, 5\n}`
      },
      {
        title: "Итератор вручную",
        code: `const arr = [1, 2, 3];\nconst iterator = arr[Symbol.iterator]();\n\niterator.next(); // { value: 1, done: false }\niterator.next(); // { value: 2, done: false }\niterator.next(); // { value: 3, done: false }\niterator.next(); // { value: undefined, done: true }`
      },
      {
        title: "Генератор как iterable",
        code: `function* countTo(n) {\n  for (let i = 1; i <= n; i++) {\n    yield i;\n  }\n}\n\nfor (const num of countTo(3)) {\n  console.log(num); // 1, 2, 3\n}\n\n// Генератор автоматически iterable\nconst gen = countTo(2);\ngen[Symbol.iterator]() === gen; // true`
      }
    ],
    relatedTopics: ['generators', 'symbol', 'arrays-basic'],
    nextTopicId: 'memory-management'
  },
  {
    id: 'memory-management',
    title: 'Управление памятью',
    difficulty: 'advanced',
    description: 'JavaScript использует автоматическую сборку мусора. Объекты удаляются когда на них нет ссылок. Утечки памяти: глобальные переменные, замыкания с большими данными, забытые таймеры/слушатели, циклические ссылки. WeakMap/WeakSet помогают избежать утечек.',
    keyPoints: [
      'Сборка мусора: автоматическая, удаляет объекты без ссылок.',
      'Утечки: глобальные переменные, большие замыкания, таймеры.',
      'Циклические ссылки: объекты ссылаются друг на друга.',
      'WeakMap/WeakSet: не препятствуют сборке мусора.'
    ],
    tags: ['memory', 'garbage-collection', 'leaks', 'performance'],
    examples: [
      {
        title: "Сборка мусора",
        code: `function createData() {\n  const largeArray = new Array(1000000).fill(0);\n  return { data: largeArray };\n}\n\nlet obj = createData();\n// obj ссылается на largeArray\n\nobj = null;\n// largeArray может быть удален сборщиком мусора`
      },
      {
        title: "Утечка через замыкание",
        code: `function leak() {\n  const hugeData = new Array(1000000).fill(0);\n  \n  setInterval(() => {\n    // hugeData не удаляется, пока работает интервал\n    console.log("Still running");\n  }, 1000);\n}\n\n// Решение: очистка интервала\nconst timer = setInterval(() => {}, 1000);\nclearInterval(timer);`
      },
      {
        title: "Циклические ссылки",
        code: `let obj1 = { name: "A" };\nlet obj2 = { name: "B" };\n\nobj1.ref = obj2;\nobj2.ref = obj1;\n\n// Циклическая ссылка, но сборщик мусора справляется\nobj1 = null;\nobj2 = null;\n// Оба объекта могут быть удалены`
      }
    ],
    relatedTopics: ['weakmap-weakset', 'closures-basic'],
    nextTopicId: 'regexp-advanced'
  },
  {
    id: 'regexp-advanced',
    title: 'RegExp (продвинутые)',
    difficulty: 'advanced',
    description: 'Группы захватывают части совпадения, доступны через $1, $2 или match[1], match[2]. Lookahead (?=) и lookbehind (?<=) проверяют контекст без захвата. Флаги: g (глобальный), i (регистр), m (многострочный), s (точка включает \\n), u (Unicode).',
    keyPoints: [
      'Группы: (pattern) захватывает, доступ через $1 или match[1].',
      'Lookahead: (?=pattern) проверяет что следует дальше.',
      'Lookbehind: (?<=pattern) проверяет что было до.',
      'Флаги: g (все совпадения), i (игнор регистра), m (многострочный).'
    ],
    tags: ['regexp', 'regular-expressions', 'patterns'],
    examples: [
      {
        title: "Группы захвата",
        code: `const str = "John Doe";\nconst match = str.match(/(\\w+) (\\w+)/);\nconsole.log(match[1]); // "John"\nconsole.log(match[2]); // "Doe"\n\n// Замена с группами\n"2023-12-25".replace(/(\\d{4})-(\\d{2})-(\\d{2})/, "$3.$2.$1");\n// "25.12.2023"`
      },
      {
        title: "Lookahead и lookbehind",
        code: `// Positive lookahead: число перед "px"\n"100px".match(/\\d+(?=px)/); // "100"\n\n// Negative lookahead: число не перед "px"\n"100em".match(/\\d+(?!px)/); // "100"\n\n// Positive lookbehind: число после "$"\n"$100".match(/(?<=\\$)\\d+/); // "100"\n\n// Negative lookbehind: число не после "$"\n"€100".match(/(?<!\\$)\\d+/); // "100"`
      },
      {
        title: "Флаги",
        code: `const str = "Hello\\nWorld";\n\n// g: все совпадения\nstr.match(/o/g); // ["o", "o"]\n\n// i: игнор регистра\n"Hello".match(/hello/i); // ["Hello"]\n\n// m: многострочный (^ и $ для каждой строки)\nstr.match(/^W/m); // ["W"]\n\n// s: точка включает \\n\nstr.match(/o.W/s); // ["o\\nW"]`
      }
    ],
    relatedTopics: ['strings-methods']
  },
  {
    id: 'currying',
    title: 'Currying и Partial Application',
    difficulty: 'advanced',
    description: 'Currying — преобразование функции с несколькими аргументами в цепочку функций с одним аргументом. Partial Application — фиксация части аргументов функции. Позволяет создавать специализированные функции, улучшает переиспользование кода. Основа функционального программирования.',
    keyPoints: [
      'Currying: f(a, b, c) → f(a)(b)(c).',
      'Partial Application: фиксация части аргументов.',
      'Создает специализированные функции из общих.',
      'Улучшает переиспользование и композицию.',
      'Основа функционального программирования.'
    ],
    tags: ['currying', 'functional', 'partial-application', 'patterns'],
    examples: [
      {
        title: "Currying вручную",
        code: `function add(a) {\n  return function(b) {\n    return function(c) {\n      return a + b + c;\n    };\n  };\n}\n\nadd(1)(2)(3); // 6\n\n// Arrow functions\nconst add = a => b => c => a + b + c;`
      },
      {
        title: "Универсальный curry",
        code: `function curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) {\n      return fn.apply(this, args);\n    }\n    return function(...nextArgs) {\n      return curried.apply(this, args.concat(nextArgs));\n    };\n  };\n}\n\nconst multiply = (a, b, c) => a * b * c;\nconst curriedMultiply = curry(multiply);\n\ncurriedMultiply(2)(3)(4); // 24\ncurriedMultiply(2, 3)(4); // 24`
      },
      {
        title: "Partial Application",
        code: `function partial(fn, ...fixedArgs) {\n  return function(...remainingArgs) {\n    return fn(...fixedArgs, ...remainingArgs);\n  };\n}\n\nfunction greet(greeting, name) {\n  return \`\${greeting}, \${name}!\`;\n}\n\nconst sayHello = partial(greet, "Hello");\nsayHello("Alice"); // "Hello, Alice!"\n\nconst sayHi = partial(greet, "Hi");\nsayHi("Bob"); // "Hi, Bob!"`
      }
    ],
    relatedTopics: ['higher-order-functions', 'closures-basic', 'functions-types']
  },
  {
    id: 'memoization',
    title: 'Мемоизация',
    difficulty: 'advanced',
    description: 'Мемоизация — кэширование результатов функции для одинаковых аргументов. При повторном вызове с теми же аргументами возвращается кэшированное значение. Ускоряет вычисления, особенно для рекурсивных функций. Используется в React.memo, useMemo.',
    keyPoints: [
      'Кэширование результатов функции.',
      'Проверка: были ли такие аргументы ранее.',
      'Возврат кэша или вычисление и сохранение.',
      'Ускоряет повторные вычисления.',
      'Используется в React.memo, useMemo.'
    ],
    tags: ['memoization', 'performance', 'optimization', 'caching'],
    examples: [
      {
        title: "Простая мемоизация",
        code: `function memoize(fn) {\n  const cache = {};\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache[key]) {\n      return cache[key];\n    }\n    const result = fn.apply(this, args);\n    cache[key] = result;\n    return result;\n  };\n}\n\nconst expensive = (n) => {\n  console.log("Computing...");\n  return n * 2;\n};\n\nconst memoized = memoize(expensive);\nmemoized(5); // Computing... 10\nmemoized(5); // 10 (из кэша)`
      },
      {
        title: "Мемоизация факториала",
        code: `const memoFactorial = memoize(function(n) {\n  if (n <= 1) return 1;\n  return n * memoFactorial(n - 1);\n});\n\nmemoFactorial(5); // Вычисляет 5, 4, 3, 2, 1\nmemoFactorial(6); // Использует кэш для 5, вычисляет только 6`
      },
      {
        title: "Мемоизация с Map",
        code: `function memoizeMap(fn) {\n  const cache = new Map();\n  return function(...args) {\n    const key = args.join(',');\n    if (cache.has(key)) {\n      return cache.get(key);\n    }\n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    return result;\n  };\n}`
      }
    ],
    relatedTopics: ['recursion', 'higher-order-functions', 'performance']
  },
  {
    id: 'design-patterns',
    title: 'Паттерны проектирования',
    difficulty: 'advanced',
    description: 'Singleton — один экземпляр класса. Factory — создание объектов через фабричную функцию. Observer — подписка на события, уведомление подписчиков. Паттерны решают типичные задачи проектирования, улучшают структуру кода.',
    keyPoints: [
      'Singleton: гарантирует один экземпляр объекта.',
      'Factory: создание объектов через функцию, скрывает детали.',
      'Observer: подписка/отписка, уведомление подписчиков.',
      'Решают типичные задачи проектирования.',
      'Улучшают структуру и переиспользование кода.'
    ],
    tags: ['patterns', 'design', 'singleton', 'factory', 'observer', 'architecture'],
    examples: [
      {
        title: "Singleton",
        code: `class Singleton {\n  constructor() {\n    if (Singleton.instance) {\n      return Singleton.instance;\n    }\n    Singleton.instance = this;\n  }\n}\n\nconst s1 = new Singleton();\nconst s2 = new Singleton();\ns1 === s2; // true\n\n// Или через замыкание\nconst Singleton = (function() {\n  let instance;\n  return function() {\n    if (!instance) instance = this;\n    return instance;\n  };\n})();`
      },
      {
        title: "Factory",
        code: `function createUser(type) {\n  switch(type) {\n    case 'admin':\n      return { role: 'admin', permissions: ['all'] };\n    case 'user':\n      return { role: 'user', permissions: ['read'] };\n    default:\n      throw new Error('Unknown user type');\n  }\n}\n\nconst admin = createUser('admin');\nconst user = createUser('user');`
      },
      {
        title: "Observer",
        code: `class EventEmitter {\n  constructor() {\n    this.events = {};\n  }\n  \n  on(event, callback) {\n    if (!this.events[event]) {\n      this.events[event] = [];\n    }\n    this.events[event].push(callback);\n  }\n  \n  emit(event, data) {\n    if (this.events[event]) {\n      this.events[event].forEach(cb => cb(data));\n    }\n  }\n}\n\nconst emitter = new EventEmitter();\nemitter.on('click', (data) => console.log(data));\nemitter.emit('click', 'Hello'); // "Hello"`
      }
    ],
    relatedTopics: ['classes', 'closures-basic', 'higher-order-functions']
  },
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
  }
];

