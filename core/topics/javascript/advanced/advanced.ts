import { Topic } from '../../../types';

export const JS_ADVANCED_ADVANCED_TOPICS: Topic[] = [
{
    id: 'js-parsing-and-execution',
    title: 'Парсинг и выполнение',
    difficulty: 'advanced',
    description: 'Перед выполнением JavaScript-кода движок сначала анализирует его структуру и подготавливает окружение выполнения. Этот процесс включает парсинг исходного текста в структурное представление и разделение выполнения на фазу создания и фазу исполнения. Понимание этих этапов объясняет hoisting, Temporal Dead Zone и порядок доступа к переменным.',
    additionalDescription: 'AST используется движком как внутренняя модель программы: по нему определяются области видимости, объявления и допустимость операций. Фаза создания не вычисляет выражения и не вызывает функции — она работает только со структурой кода. Именно поэтому доступ к `var` возможен до присваивания, а доступ к `let` и `const` до инициализации запрещён.',
    keyPoints: [
      'Парсинг: преобразование исходного текста программы в структурное представление, понятное движку (не строка, а дерево).',
      'AST (Abstract Syntax Tree): абстрактное синтаксическое дерево, описывающее структуру кода (объявления, выражения, блоки).',
      'Фаза создания: подготовка контекста выполнения, регистрация объявлений и выделение памяти без исполнения кода.',
      'Фаза выполнения: последовательное выполнение инструкций сверху вниз после завершения фазы создания.',
      'Hoisting: результат фазы создания, при котором объявления `var` и `function declaration` доступны до строки объявления.',
      'Temporal Dead Zone (TDZ): состояние переменных `let` и `const` между началом области видимости и инициализацией.'
    ],
    funFact: 'Hoisting — это не отдельный механизм языка, а побочный эффект того, что движок обязан знать все объявления ещё до начала выполнения кода.',
    tags: ['javascript', 'parsing', 'internals', 'hoisting', 'tdz', 'variables', 'var', 'let', 'const', 'ES6', 'runtime', 'AST'],
    examples: [
      {
        title: 'Hoisting и var',
        code: `console.log(a); // undefined (переменная зарегистрирована на фазе создания)
var a = 10;
console.log(a); // 10 (присваивание произошло на фазе выполнения)`
      },
      {
        title: 'Function Declaration и фаза создания',
        code: `sayHi(); // работает, функция доступна до строки объявления

function sayHi() {
  console.log('Hi');
}`
      },
      {
        title: 'Temporal Dead Zone',
        code: `console.log(x); // ReferenceError: x is not defined
let x = 5;

console.log(y); // ReferenceError
const y = 10;`
      },
      {
        title: 'Фаза создания не выполняет код',
        code: `var a = getValue(); // getValue НЕ вызывается на фазе создания

function getValue() {
  console.log('side effect');
  return 42;
}

console.log(a); // 'side effect', 42 — вызов происходит только на фазе выполнения`
      }
    ],
    relatedTopics: ['hoisting-basic', 'tdz-basic', 'lexical-env', 'call-stack']
  },
{
    id: 'execution-context',
    title: 'Execution Context (Контекст выполнения)',
    difficulty: 'advanced',
    description: 'Execution Context (контекст выполнения) — окружение, в котором выполняется JavaScript-код. Каждый контекст содержит информацию о переменных, функциях, this, и ссылку на внешнее лексическое окружение. Контексты создаются при вызове функций и управляются через Call Stack. Понимание контекстов выполнения объясняет работу scope, this, closures и hoisting.',
    additionalDescription: 'Контекст выполнения состоит из трех компонентов: Variable Environment (переменные var), Lexical Environment (let/const, функции), и This Binding (значение this). Глобальный контекст создается при загрузке скрипта, контекст функции — при каждом вызове. Контексты связаны через Scope Chain, что позволяет функциям обращаться к переменным из внешних областей видимости.',
    keyPoints: [
      'Типы контекстов: Global Execution Context (глобальный), Function Execution Context (функции), Eval Execution Context (eval).',
      'Структура контекста: Variable Environment (var), Lexical Environment (let/const, функции), This Binding (this).',
      'Фаза создания: регистрация объявлений, создание лексического окружения, определение this.',
      'Фаза выполнения: выполнение кода построчно, присваивание значений переменным.',
      'Call Stack: контексты управляются через стек вызовов (LIFO).',
      'Scope Chain: цепочка лексических окружений для поиска переменных.',
      'Связь с Lexical Environment: каждый контекст содержит ссылку на лексическое окружение.',
      'Глобальный контекст: создается один раз при загрузке скрипта, this = window/global.'
    ],
    funFact: 'В браузере глобальный контекст выполнения связан с объектом window. В Node.js — с объектом global. В ES-модулях this на верхнем уровне всегда undefined, даже без "use strict".',
    tags: ['execution-context', 'runtime', 'internals', 'lexical-environment', 'call-stack', 'scope', 'this', 'hoisting'],
    examples: [
      {
        title: 'Глобальный контекст выполнения',
        code: `// Глобальный контекст создается при загрузке скрипта
var globalVar = 'global';
let globalLet = 'global';

console.log(this); // window (в браузере) или global (в Node.js)
console.log(globalVar); // 'global'
console.log(globalLet); // 'global'

// В глобальном контексте:
// - Variable Environment: { globalVar: undefined → 'global' }
// - Lexical Environment: { globalLet: 'global' }
// - This Binding: window/global`
      },
      {
        title: 'Контекст выполнения функции',
        code: `function test(a, b) {
  var funcVar = 'var';
  let funcLet = 'let';
  
  console.log(this); // зависит от способа вызова
  console.log(a, b); // параметры функции
  console.log(funcVar, funcLet); // 'var', 'let'
}

test(1, 2);

// При вызове test создается новый контекст:
// - Variable Environment: { a: 1, b: 2, funcVar: undefined → 'var' }
// - Lexical Environment: { funcLet: 'let' }
// - This Binding: зависит от способа вызова
// - Outer Reference: ссылка на глобальное окружение`
      },
      {
        title: 'Связь контекстов через Scope Chain',
        code: `const global = 'global';

function outer() {
  const outerVar = 'outer';
  
  function inner() {
    const innerVar = 'inner';
    console.log(innerVar); // 'inner' (из текущего контекста)
    console.log(outerVar); // 'outer' (из контекста outer через Scope Chain)
    console.log(global); // 'global' (из глобального контекста через Scope Chain)
  }
  
  inner();
}

outer();

// Scope Chain для inner:
// inner Lexical Environment → outer Lexical Environment → Global Lexical Environment`
      },
      {
        title: 'Контекст и this',
        code: `const obj = {
  name: 'Object',
  method() {
    console.log(this); // obj (контекст метода)
    
    function regular() {
      console.log(this); // undefined (strict mode) или window (не strict)
    }
    
    const arrow = () => {
      console.log(this); // obj (лексический this из метода)
    };
    
    regular();
    arrow();
  }
};

obj.method();

// В методе:
// - This Binding: obj
// В regular:
// - This Binding: undefined (strict) или window
// В arrow:
// - This Binding: берется из внешнего контекста (obj)`
      },
      {
        title: 'Контексты в Call Stack',
        code: `function first() {
  console.log('First context');
  second();
}

function second() {
  console.log('Second context');
  third();
}

function third() {
  console.log('Third context');
}

first();

// Call Stack (снизу вверх):
// [Global Execution Context]
// [First Execution Context] <- создан при вызове first()
// [Second Execution Context] <- создан при вызове second()
// [Third Execution Context] <- выполняется сейчас
// После завершения third: удаляется из стека
// После завершения second: удаляется из стека
// После завершения first: удаляется из стека`
      },
      {
        title: 'Фазы создания и выполнения контекста',
        code: `function example() {
  // ФАЗА СОЗДАНИЯ КОНТЕКСТА:
  // 1. Создается Variable Environment
  // 2. Регистрируются var и function declaration
  // 3. Создается Lexical Environment
  // 4. Определяется this
  
  console.log(a); // undefined (var зарегистрирован, но не присвоен)
  console.log(sayHi); // function (function declaration зарегистрирована)
  // console.log(b); // ReferenceError (let в TDZ)
  
  var a = 10;
  let b = 20;
  
  function sayHi() {
    console.log('Hi');
  }
  
  // ФАЗА ВЫПОЛНЕНИЯ:
  // 1. Выполняется код построчно
  // 2. Присваиваются значения переменным
  // 3. Вызываются функции
  
  console.log(a); // 10
  console.log(b); // 20
  sayHi(); // 'Hi'
}

example();`
      }
    ],
    relatedTopics: ['lexical-env', 'call-stack', 'scope-chain', 'js-parsing-and-execution', 'this-basics', 'hoisting-advanced']
  },
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
  },
{
    id: 'event-loop',
    title: 'Event Loop',
    difficulty: 'advanced',
    description: 'Event Loop управляет асинхронностью в однопоточном JS. Порядок: Call Stack → все Microtasks (Promises, queueMicrotask) → одна Macrotask (setTimeout, события). Микрозадачи имеют приоритет над макрозадачами. Асинхронные операции делегируются браузеру, результат попадает в очереди. В Node.js есть дополнительные фазы (timers, I/O callbacks, idle, poll, check, close callbacks).',
    keyPoints: [
      'Сначала выполняется стек (синхронный код).',
      'Затем все микрозадачи (Promises, queueMicrotask).',
      'Затем одна макрозадача (setTimeout, setInterval, события).',
      'Microtasks: Promise.then/catch/finally, queueMicrotask, MutationObserver.',
      'Macrotasks: setTimeout, setInterval, I/O операции, UI события.',
      'Браузер: Call Stack → Microtasks → Render → Macrotask.',
      'Node.js: 6 фаз (timers → pending callbacks → idle → poll → check → close).'
    ],
    tags: ['event loop', 'async', 'performance', 'runtime'],
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
      },
      {
        title: "queueMicrotask vs Promise",
        code: `Promise.resolve().then(() => console.log('Promise'));\nqueueMicrotask(() => console.log('queueMicrotask'));\n// Оба выполняются в одной очереди микрозадач\n// Порядок: queueMicrotask, Promise (порядок добавления)`
      },
      {
        title: "Различия браузер vs Node.js",
        code: `// Браузер: между фазами может быть рендеринг\nsetTimeout(() => console.log('timeout'), 0);\nPromise.resolve().then(() => console.log('promise'));\n// promise, timeout\n\n// Node.js: более сложная модель с фазами\n// Timers → Pending callbacks → Idle → Poll → Check → Close`
      }
    ],
    relatedTopics: ['promises', 'async-await', 'call-stack'],
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
  },
{
    id: 'memory-management',
    title: 'Управление памятью',
    difficulty: 'advanced',
    description: 'JavaScript использует автоматическую сборку мусора (Garbage Collector). Память делится на Stack (примитивы, ссылки) и Heap (объекты). Объекты удаляются когда на них нет ссылок. Утечки памяти: глобальные переменные, замыкания с большими данными, забытые таймеры/слушатели событий, циклические ссылки. WeakMap/WeakSet помогают избежать утечек.',
    keyPoints: [
      'Stack: хранит примитивы и ссылки на объекты, быстрый доступ, ограниченный размер.',
      'Heap: хранит объекты, медленнее, больший размер, управляется GC.',
      'Сборка мусора: автоматическая, удаляет объекты без ссылок (mark-and-sweep, generational).',
      'Утечки: глобальные переменные, большие замыкания, таймеры, слушатели событий.',
      'Циклические ссылки: GC справляется, но могут удерживать память дольше.',
      'WeakMap/WeakSet: не препятствуют сборке мусора, слабые ссылки.'
    ],
    tags: ['memory', 'garbage-collection', 'leaks', 'performance', 'stack', 'heap'],
    examples: [
      {
        title: "Stack vs Heap",
        code: `// Stack: примитивы и ссылки\nlet num = 42; // в Stack\nlet str = "hello"; // в Stack\n\n// Heap: объекты\nlet obj = { x: 1 }; // obj (ссылка) в Stack, { x: 1 } в Heap\nlet arr = [1, 2, 3]; // arr (ссылка) в Stack, [1,2,3] в Heap\n\n// Копирование\nlet a = 5; // в Stack\nlet b = a; // копия в Stack\n\nlet obj1 = { x: 1 }; // ссылка в Stack, объект в Heap\nlet obj2 = obj1; // копия ссылки, тот же объект в Heap`
      },
      {
        title: "Сборка мусора",
        code: `function createData() {\n  const largeArray = new Array(1000000).fill(0);\n  return { data: largeArray };\n}\n\nlet obj = createData();\n// obj ссылается на largeArray в Heap\n\nobj = null;\n// largeArray может быть удален сборщиком мусора\n// GC пометит как недоступный и удалит`
      },
      {
        title: "Утечка через замыкание",
        code: `function leak() {\n  const hugeData = new Array(1000000).fill(0);\n  \n  setInterval(() => {\n    // hugeData не удаляется, пока работает интервал\n    // замыкание удерживает ссылку\n    console.log("Still running");\n  }, 1000);\n}\n\n// Решение: очистка интервала\nconst timer = setInterval(() => {}, 1000);\nclearInterval(timer); // освобождает память`
      },
      {
        title: "Утечка через слушатель событий",
        code: `// Плохо: слушатель не удаляется\nfunction bad() {\n  const element = document.getElementById('btn');\n  element.addEventListener('click', () => {\n    // обработчик удерживает ссылку на element\n    console.log('clicked');\n  });\n  // element удален из DOM, но слушатель держит ссылку\n}\n\n// Хорошо: явное удаление\nfunction good() {\n  const element = document.getElementById('btn');\n  const handler = () => console.log('clicked');\n  element.addEventListener('click', handler);\n  \n  // Удаляем при необходимости\n  element.removeEventListener('click', handler);\n}`
      },
      {
        title: "Garbage Collector алгоритмы",
        code: `// Mark-and-Sweep: помечает достижимые объекты, удаляет недостижимые\n// Generational: разделяет на молодые и старые объекты\n// Молодые объекты проверяются чаще (больше шансов быть удаленными)\n\n// Принудительная сборка (не рекомендуется, только для тестов)\nif (global.gc) {\n  global.gc(); // Node.js с флагом --expose-gc\n}`
      },
      {
        title: "Циклические ссылки",
        code: `let obj1 = { name: "A" };\nlet obj2 = { name: "B" };\n\nobj1.ref = obj2;\nobj2.ref = obj1;\n\n// Циклическая ссылка, но сборщик мусора справляется\n// Современный GC (mark-and-sweep) находит циклические ссылки\nobj1 = null;\nobj2 = null;\n// Оба объекта могут быть удалены`
      }
    ],
    relatedTopics: ['weakmap-weakset', 'closures-basic', 'stack-heap'],
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
    id: 'call-stack',
    title: 'Call Stack',
    difficulty: 'advanced',
    description: 'Call Stack (стек вызовов) — структура данных, которая отслеживает вызовы функций. При вызове функции она добавляется в стек, при завершении удаляется. LIFO (Last In First Out) — последняя вызванная функция выполняется первой. Переполнение стека происходит при слишком глубокой рекурсии или бесконечной рекурсии. Связан с Event Loop — синхронный код выполняется в стеке.',
    keyPoints: [
      'Call Stack: структура данных для отслеживания вызовов функций.',
      'LIFO: последняя вызванная функция выполняется первой.',
      'При вызове функции: добавляется в стек (push).',
      'При завершении функции: удаляется из стека (pop).',
      'Stack Overflow: переполнение при слишком глубокой рекурсии (~10000 вызовов).',
      'Связан с Event Loop: синхронный код выполняется в стеке перед асинхронным.'
    ],
    tags: ['call-stack', 'runtime', 'stack', 'functions', 'performance'],
    examples: [
      {
        title: "Как работает Call Stack",
        code: `function first() {\n  console.log('First');\n  second();\n  console.log('First end');\n}\n\nfunction second() {\n  console.log('Second');\n  third();\n  console.log('Second end');\n}\n\nfunction third() {\n  console.log('Third');\n}\n\nfirst();\n// Стек:\n// [third] <- выполняется\n// [second]\n// [first]\n// [global]\n// Вывод: First, Second, Third, Second end, First end`
      },
      {
        title: "Stack Overflow",
        code: `// Переполнение стека\nfunction infinite() {\n  infinite(); // бесконечная рекурсия\n}\n\n// infinite(); // RangeError: Maximum call stack size exceeded\n\n// Глубокая рекурсия\nfunction deep(n) {\n  if (n <= 0) return;\n  deep(n - 1);\n}\n\n// deep(100000); // может вызвать переполнение\n// Обычный лимит: ~10000-50000 вызовов`
      },
      {
        title: "Call Stack и Event Loop",
        code: `console.log('1'); // в стек\n\nsetTimeout(() => {\n  console.log('2'); // макрозадача, после стека\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('3'); // микрозадача, после стека\n});\n\nconsole.log('4'); // в стек\n\n// Порядок выполнения:\n// 1. Стек: 1, 4\n// 2. Микрозадачи: 3\n// 3. Макрозадачи: 2`
      },
      {
        title: "Отладка Call Stack",
        code: `function a() {\n  console.trace('Trace from a');\n  b();\n}\n\nfunction b() {\n  console.trace('Trace from b');\n  c();\n}\n\nfunction c() {\n  console.trace('Trace from c');\n}\n\na();\n// Выводит стек вызовов:\n// Trace from c\n//   at c\n//   at b\n//   at a`
      }
    ],
    relatedTopics: ['event-loop', 'stack-heap', 'recursion'],
  },
{
    id: 'stack-heap',
    title: 'Stack vs Heap',
    difficulty: 'advanced',
    description: 'Stack (стек) и Heap (куча) — две области памяти в JavaScript. Stack хранит примитивы и ссылки на объекты, быстрый доступ, ограниченный размер, управляется автоматически (LIFO). Heap хранит объекты, медленнее, больший размер, управляется Garbage Collector. Примитивы копируются в Stack, объекты создаются в Heap, ссылки хранятся в Stack.',
    keyPoints: [
      'Stack: примитивы и ссылки, быстрый доступ, ограниченный размер, LIFO.',
      'Heap: объекты, медленнее, больший размер, управляется GC.',
      'Примитивы: хранятся в Stack, копируются при присваивании.',
      'Объекты: создаются в Heap, ссылки хранятся в Stack.',
      'Связано с Event Loop: Stack выполняется синхронно, Heap управляется асинхронно.',
      'Производительность: Stack быстрее, Heap требует сборки мусора.'
    ],
    tags: ['stack', 'heap', 'memory', 'runtime', 'performance'],
    examples: [
      {
        title: "Stack: примитивы",
        code: `// Примитивы хранятся в Stack\nlet a = 5; // число в Stack\nlet b = "hello"; // строка в Stack\nlet c = true; // boolean в Stack\n\n// Копирование примитивов\nlet x = 10;\nlet y = x; // копия значения в Stack\ny = 20;\nconsole.log(x); // 10 (не изменилось)\n\n// Быстрый доступ, ограниченный размер\n// Обычно ~1-2MB на поток`
      },
      {
        title: "Heap: объекты",
        code: `// Объекты создаются в Heap\nlet obj = { name: "Alice" }; // объект в Heap\n// obj (ссылка) в Stack, { name: "Alice" } в Heap\n\n// Копирование ссылок\nlet obj1 = { x: 1 };\nlet obj2 = obj1; // копия ссылки, объект тот же\nobj2.x = 2;\nconsole.log(obj1.x); // 2 (изменилось, та же ссылка)\n\n// Медленнее, но больший размер\n// Управляется Garbage Collector`
      },
      {
        title: "Связь Stack и Heap",
        code: `function createObject() {\n  // num в Stack\n  let num = 42;\n  \n  // obj в Heap, ссылка в Stack\n  let obj = { value: num };\n  \n  return obj;\n  // num удаляется из Stack\n  // obj остается в Heap (есть ссылка снаружи)\n}\n\nconst result = createObject();\n// result (ссылка) в Stack\n// { value: 42 } в Heap`
      },
      {
        title: "Stack и Event Loop",
        code: `// Синхронный код выполняется в Stack\nfunction sync() {\n  console.log('Sync'); // в Stack\n}\n\n// Асинхронный код: Stack → Microtasks → Macrotasks\nsetTimeout(() => {\n  console.log('Async'); // после Stack\n}, 0);\n\nsync(); // выполняется в Stack\n\n// Порядок:\n// 1. Stack: sync()\n// 2. Microtasks\n// 3. Macrotasks: setTimeout`
      },
      {
        title: "Производительность",
        code: `// Stack: очень быстро\nlet a = 1;\nlet b = 2;\nlet c = a + b; // мгновенно\n\n// Heap: медленнее (нужна сборка мусора)\nlet obj1 = { x: 1 };\nlet obj2 = { x: 2 };\nlet obj3 = { x: obj1.x + obj2.x }; // медленнее\n\n// GC может приостановить выполнение для очистки Heap`
      }
    ],
    relatedTopics: ['memory-management', 'call-stack', 'event-loop'],
  },
{
    id: 'blocking-non-blocking',
    title: 'Blocking vs Non-blocking',
    difficulty: 'advanced',
    description: 'Blocking (блокирующий) код останавливает выполнение до завершения операции. Non-blocking (неблокирующий) код не останавливает выполнение, использует колбэки/промисы. JavaScript однопоточный, но неблокирующий через Event Loop. Блокирующие операции (синхронные запросы, тяжелые вычисления) блокируют весь поток. Неблокирующие операции (async/await, промисы) не блокируют.',
    keyPoints: [
      'Blocking: код останавливает выполнение до завершения операции.',
      'Non-blocking: код не останавливает выполнение, использует колбэки/промисы.',
      'JavaScript однопоточный, но неблокирующий через Event Loop.',
      'Блокирующие операции: синхронные запросы, тяжелые вычисления, alert/confirm.',
      'Неблокирующие: async/await, промисы, setTimeout, события.',
      'Web Workers: выполняют код в отдельном потоке, не блокируют основной.'
    ],
    tags: ['blocking', 'non-blocking', 'async', 'performance', 'runtime'],
    examples: [
      {
        title: "Blocking код",
        code: `// Блокирует выполнение\nfunction blocking() {\n  console.log('Start');\n  \n  // Синхронный запрос (не существует в браузере, но пример)\n  // const data = synchronousFetch('/api'); // блокирует\n  \n  // Тяжелое вычисление\n  let sum = 0;\n  for (let i = 0; i < 1000000000; i++) {\n    sum += i; // блокирует UI\n  }\n  \n  console.log('End'); // выполнится только после цикла\n}\n\n// alert/confirm тоже блокируют\n// alert('Blocking'); // блокирует весь браузер`
      },
      {
        title: "Non-blocking код",
        code: `// Не блокирует выполнение\nfunction nonBlocking() {\n  console.log('Start');\n  \n  // Асинхронный запрос\n  fetch('/api')\n    .then(res => res.json())\n    .then(data => {\n      console.log('Data received');\n    });\n  \n  console.log('End'); // выполнится сразу\n  // "Start", "End", затем "Data received"\n}\n\n// async/await тоже неблокирующий\nasync function asyncNonBlocking() {\n  console.log('Start');\n  const data = await fetch('/api'); // не блокирует\n  console.log('End');\n}`
      },
      {
        title: "Event Loop делает код неблокирующим",
        code: `console.log('1');\n\nsetTimeout(() => {\n  console.log('2');\n}, 0);\n\nconsole.log('3');\n\n// Вывод: 1, 3, 2\n// setTimeout не блокирует, выполняется после стека\n\n// Тяжелое вычисление все еще блокирует\nfunction heavy() {\n  for (let i = 0; i < 1000000000; i++) {\n    // блокирует\n  }\n}\n\nheavy(); // блокирует UI`
      },
      {
        title: "Web Workers для неблокирующих вычислений",
        code: `// main.js\nconst worker = new Worker('worker.js');\n\n// Не блокирует основной поток\nworker.postMessage({ numbers: Array.from({length: 1000000}, (_, i) => i) });\n\nworker.onmessage = (e) => {\n  console.log('Result:', e.data);\n};\n\n// worker.js\nself.onmessage = (e) => {\n  const sum = e.data.numbers.reduce((acc, n) => acc + n, 0);\n  self.postMessage(sum);\n};`
      },
      {
        title: "Разделение блокирующего кода",
        code: `// Разбить тяжелое вычисление на части\nfunction processChunk(array, start, end, callback) {\n  let sum = 0;\n  for (let i = start; i < end; i++) {\n    sum += array[i];\n  }\n  callback(sum);\n}\n\nfunction processNonBlocking(array) {\n  const chunkSize = 1000;\n  let index = 0;\n  let total = 0;\n  \n  function processNext() {\n    const end = Math.min(index + chunkSize, array.length);\n    processChunk(array, index, end, (sum) => {\n      total += sum;\n      index = end;\n      \n      if (index < array.length) {\n        setTimeout(processNext, 0); // не блокирует\n      } else {\n        console.log('Total:', total);\n      }\n    });\n  }\n  \n  processNext();\n}`
      }
    ],
    relatedTopics: ['event-loop', 'call-stack', 'web-workers', 'async-await'],
  },
{
    id: 'concurrency-parallelism',
    title: 'Concurrency vs Parallelism',
    difficulty: 'advanced',
    description: 'Concurrency (параллелизм) — выполнение нескольких задач одновременно через переключение контекста (однопоточный JavaScript). Parallelism (параллельность) — выполнение задач одновременно на разных процессорах/ядрах (Web Workers, Node.js кластер). JavaScript однопоточный, но поддерживает параллелизм через Web Workers. Event Loop обеспечивает конкурентность.',
    keyPoints: [
      'Concurrency: выполнение нескольких задач через переключение контекста (однопоточный).',
      'Parallelism: выполнение задач одновременно на разных процессорах/ядрах.',
      'JavaScript однопоточный: Event Loop обеспечивает конкурентность, не параллельность.',
      'Web Workers: обеспечивают параллельность в браузере (отдельные потоки).',
      'Node.js: однопоточный Event Loop, но может использовать кластер для параллельности.',
      'Concurrency: быстрое переключение между задачами создает иллюзию параллельности.'
    ],
    tags: ['concurrency', 'parallelism', 'async', 'performance', 'runtime'],
    examples: [
      {
        title: "Concurrency в JavaScript",
        code: `// Concurrency: переключение между задачами\nconsole.log('Task 1 start');\n\nsetTimeout(() => {\n  console.log('Task 2');\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('Task 3');\n});\n\nconsole.log('Task 1 end');\n\n// Вывод: Task 1 start, Task 1 end, Task 3, Task 2\n// Задачи выполняются конкурентно (переключение), не параллельно`
      },
      {
        title: "Parallelism через Web Workers",
        code: `// Parallelism: выполнение на разных потоках\n// main.js\nconst worker1 = new Worker('worker.js');\nconst worker2 = new Worker('worker.js');\n\n// Параллельное выполнение\nworker1.postMessage({ data: [1, 2, 3, 4, 5] });\nworker2.postMessage({ data: [6, 7, 8, 9, 10] });\n\nworker1.onmessage = (e) => console.log('Worker 1:', e.data);\nworker2.onmessage = (e) => console.log('Worker 2:', e.data);\n\n// worker.js\nself.onmessage = (e) => {\n  const sum = e.data.data.reduce((acc, n) => acc + n, 0);\n  self.postMessage(sum);\n};`
      },
      {
        title: "Разница Concurrency и Parallelism",
        code: `// Concurrency: одна задача в один момент, быстрое переключение\nfunction concurrent() {\n  setTimeout(() => console.log('A'), 0);\n  setTimeout(() => console.log('B'), 0);\n  setTimeout(() => console.log('C'), 0);\n  // A, B, C выполняются конкурентно (переключение)\n}\n\n// Parallelism: несколько задач одновременно\nfunction parallel() {\n  const w1 = new Worker('worker.js');\n  const w2 = new Worker('worker.js');\n  const w3 = new Worker('worker.js');\n  // w1, w2, w3 выполняются параллельно (разные потоки)\n}`
      },
      {
        title: "Event Loop обеспечивает Concurrency",
        code: `// Event Loop переключается между задачами\nconsole.log('1');\n\nsetTimeout(() => console.log('2'), 0);\nPromise.resolve().then(() => console.log('3'));\nsetTimeout(() => console.log('4'), 0);\n\nconsole.log('5');\n\n// Выполнение:\n// 1. Стек: 1, 5\n// 2. Микрозадачи: 3 (concurrency)\n// 3. Макрозадачи: 2, 4 (concurrency)\n// Все конкурентно, не параллельно`
      },
      {
        title: "Когда нужен Parallelism",
        code: `// Тяжелые вычисления лучше выполнять параллельно\nfunction heavyComputation(data) {\n  // Блокирует основной поток\n  return data.reduce((acc, n) => acc + Math.sqrt(n), 0);\n}\n\n// Решение: Web Worker (parallelism)\nconst worker = new Worker('compute.js');\nworker.postMessage({ data: largeArray });\nworker.onmessage = (e) => {\n  console.log('Result:', e.data);\n  // Не блокирует основной поток\n};`
      }
    ],
    relatedTopics: ['event-loop', 'web-workers', 'blocking-non-blocking', 'call-stack'],
  },
{
    id: 'to-primitive',
    title: 'toString, valueOf, Symbol.toPrimitive',
    difficulty: 'advanced',
    description: 'Преобразование объектов в примитивы происходит через toString(), valueOf() и Symbol.toPrimitive. При математических операциях вызывается valueOf, при строковых — toString. Symbol.toPrimitive имеет приоритет над toString/valueOf и позволяет контролировать преобразование. Порядок вызова зависит от контекста (hint: number, string, default).',
    keyPoints: [
      'toString(): вызывается при преобразовании в строку.',
      'valueOf(): вызывается при преобразовании в число.',
      'Symbol.toPrimitive: имеет приоритет, контролирует преобразование.',
      'Порядок: Symbol.toPrimitive → valueOf → toString (зависит от hint).',
      'Hint: "number" (математика), "string" (строковые операции), "default" (==, +).',
      'Использование: кастомные объекты, перегрузка операторов.'
    ],
    tags: ['to-primitive', 'objects', 'coercion', 'symbol', 'objects-advanced'],
    examples: [
      {
        title: "toString и valueOf",
        code: `const obj = {\n  value: 42,\n  toString() {\n    return 'Object: ' + this.value;\n  },\n  valueOf() {\n    return this.value;\n  }\n};\n\nconsole.log(String(obj)); // "Object: 42" (toString)\nconsole.log(Number(obj)); // 42 (valueOf)\nconsole.log(obj + 10); // 52 (valueOf для +)\nconsole.log(obj + ''); // "Object: 42" (toString для конкатенации)`
      },
      {
        title: "Symbol.toPrimitive",
        code: `const obj = {\n  value: 42,\n  [Symbol.toPrimitive](hint) {\n    if (hint === 'number') {\n      return this.value;\n    }\n    if (hint === 'string') {\n      return \`Value: \${this.value}\`;\n    }\n    return this.value; // default\n  }\n};\n\nconsole.log(Number(obj)); // 42 (hint: 'number')\nconsole.log(String(obj)); // "Value: 42" (hint: 'string')\nconsole.log(obj + 10); // 52 (hint: 'default')\nconsole.log(obj == 42); // true (hint: 'default')`
      },
      {
        title: "Порядок вызова",
        code: `const obj = {\n  toString() {\n    console.log('toString called');\n    return 'string';\n  },\n  valueOf() {\n    console.log('valueOf called');\n    return 42;\n  }\n};\n\n// Математические операции: valueOf\nconsole.log(obj + 10); // valueOf called, 52\n\n// Строковые операции: toString\nconsole.log(String(obj)); // toString called, "string"\n\n// == использует valueOf\nconsole.log(obj == 42); // valueOf called, true`
      },
      {
        title: "Symbol.toPrimitive имеет приоритет",
        code: `const obj = {\n  [Symbol.toPrimitive]() {\n    return 100;\n  },\n  toString() {\n    return 'string';\n  },\n  valueOf() {\n    return 50;\n  }\n};\n\n// Symbol.toPrimitive вызывается первым\nconsole.log(obj + 10); // 110 (Symbol.toPrimitive)\nconsole.log(Number(obj)); // 100 (Symbol.toPrimitive)\n\n// Если Symbol.toPrimitive нет, используется valueOf/toString`
      },
      {
        title: "Практическое использование",
        code: `class Money {\n  constructor(amount, currency = 'USD') {\n    this.amount = amount;\n    this.currency = currency;\n  }\n  \n  [Symbol.toPrimitive](hint) {\n    if (hint === 'string') {\n      return \`\${this.amount} \${this.currency}\`;\n    }\n    return this.amount; // number или default\n  }\n}\n\nconst price = new Money(100, 'USD');\nconsole.log(String(price)); // "100 USD"\nconsole.log(Number(price)); // 100\nconsole.log(price + 50); // 150`
      }
    ],
    relatedTopics: ['type-coercion', 'symbol', 'objects-basic', 'object-comparison'],
  }
];
