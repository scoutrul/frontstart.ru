import { Topic } from '../types';

export const INTERMEDIATE_TOPICS: Topic[] = [
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
      },
      {
        title: "TDZ с const",
        code: `{\n  // console.log(PI); // ReferenceError\n  const PI = 3.14;\n  console.log(PI); // 3.14\n}`
      },
      {
        title: "TDZ в параметрах функции",
        code: `function test(x = y, y = 2) {\n  // ReferenceError: y в TDZ\n}\n\nfunction test2(x = 2, y = x) {\n  // OK: x уже инициализирован\n}`
      }
    ],
    relatedTopics: ['var-let-const', 'tdz-basic', 'scope-chain'],
    nextTopicId: 'closures-basic'
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
      },
      {
        title: "Замыкание с параметрами",
        code: `function multiply(x) {\n  return function(y) {\n    return x * y;\n  };\n}\nconst double = multiply(2);\nconsole.log(double(5)); // 10`
      },
      {
        title: "Несколько замыканий",
        code: `function createFunctions() {\n  const arr = [];\n  for (let i = 0; i < 3; i++) {\n    arr.push(() => i);\n  }\n  return arr;\n}\nconst funcs = createFunctions();\nfuncs[0](); // 0\nfuncs[1](); // 1\nfuncs[2](); // 2`
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
      },
      {
        title: "Приватные методы",
        code: `function createCalculator() {\n  let value = 0;\n  \n  function add(x) { value += x; }\n  function subtract(x) { value -= x; }\n  \n  return {\n    get: () => value,\n    increment: () => add(1),\n    decrement: () => subtract(1)\n  };\n}`
      },
      {
        title: "Множественные экземпляры",
        code: `function createUser(name) {\n  let privateName = name;\n  return {\n    getName: () => privateName,\n    setName: (newName) => { privateName = newName; }\n  };\n}\nconst user1 = createUser("Alice");\nconst user2 = createUser("Bob");\n// user1 и user2 имеют независимые privateName`
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
      },
      {
        title: "Стрелка не может быть методом",
        code: `const obj = {\n  name: "Test",\n  arrow: () => this.name, // undefined\n  regular: function() { return this.name; } // "Test"\n};\nobj.arrow(); // undefined\nobj.regular(); // "Test"`
      },
      {
        title: "Стрелка в колбэке",
        code: `class Button {\n  constructor(name) {\n    this.name = name;\n  }\n  \n  click() {\n    document.addEventListener('click', () => {\n      console.log(this.name); // сохраняет this\n    });\n  }\n}`
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
      },
      {
        title: "Потеря в setTimeout",
        code: `const timer = {\n  name: "Timer",\n  start() {\n    setTimeout(function() {\n      console.log(this.name); // undefined\n    }, 100);\n  }\n};\n\ntimer.start();`
      },
      {
        title: "Решение через стрелку",
        code: `const timer = {\n  name: "Timer",\n  start() {\n    setTimeout(() => {\n      console.log(this.name); // "Timer"\n    }, 100);\n  }\n};\n\ntimer.start();`
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
      },
      {
        title: "call vs apply",
        code: `function sum(a, b, c) {\n  return a + b + c;\n}\n\nsum.call(null, 1, 2, 3); // 6\nsum.apply(null, [1, 2, 3]); // 6`
      },
      {
        title: "bind для фиксации контекста",
        code: `const user = { name: "Alice" };\nfunction greet() { console.log(this.name); }\n\nconst boundGreet = greet.bind(user);\nboundGreet(); // "Alice"\n\n// Контекст нельзя изменить\nboundGreet.call({name: "Bob"}); // все еще "Alice"`
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
      },
      {
        title: "Поиск по цепочке",
        code: `const grandparent = { a: 1 };\nconst parent = { b: 2 };\nparent.__proto__ = grandparent;\nconst child = { c: 3 };\nchild.__proto__ = parent;\n\nconsole.log(child.a); // 1 (из grandparent)\nconsole.log(child.b); // 2 (из parent)\nconsole.log(child.c); // 3 (свое)`
      },
      {
        title: "Переопределение метода",
        code: `const animal = {\n  speak() { return "Some sound"; }\n};\nconst dog = {\n  speak() { return "Woof!"; }\n};\ndog.__proto__ = animal;\n\nconsole.log(dog.speak()); // "Woof!" (свой метод)\n\n// Удаляем свой метод\ndelete dog.speak;\nconsole.log(dog.speak()); // "Some sound" (из прототипа)`
      }
    ],
    relatedTopics: ['this-basics'],
    nextTopicId: 'constructors'
  },
  {
    id: 'constructors',
    title: 'Функции-конструкторы',
    difficulty: 'intermediate',
    description: 'Функция-конструктор вызывается с new и создает объект. При вызове с new: создается пустой объект, this ссылается на него, выполняется функция, возвращается объект (если нет явного return). Свойство constructor ссылается на функцию-конструктор. Все экземпляры имеют общий прототип через Constructor.prototype.',
    keyPoints: [
      'new Constructor(): создает объект, this = новый объект.',
      'Если нет return, возвращается this (новый объект).',
      'constructor property: ссылается на функцию-конструктор.',
      'Constructor.prototype: общий прототип для всех экземпляров.',
      'Методы в prototype доступны всем экземплярам.'
    ],
    tags: ['constructors', 'new', 'prototype', 'oop'],
    examples: [
      {
        title: "Базовый конструктор",
        code: `function User(name) {\n  this.name = name;\n  this.greet = function() {\n    return "Hello, " + this.name;\n  };\n}\n\nconst user = new User("Alice");\nconsole.log(user.name); // "Alice"\nconsole.log(user.greet()); // "Hello, Alice"\n\n// Проверка\nconsole.log(user.constructor === User); // true`
      },
      {
        title: "Методы в prototype",
        code: `function User(name) {\n  this.name = name;\n}\n\n// Метод в prototype - общий для всех\nUser.prototype.greet = function() {\n  return "Hello, " + this.name;\n};\n\nconst user1 = new User("Alice");\nconst user2 = new User("Bob");\n\nuser1.greet(); // "Hello, Alice"\nuser2.greet(); // "Hello, Bob"\n\n// Один метод для всех экземпляров\nconsole.log(user1.greet === user2.greet); // true`
      },
      {
        title: "Что происходит при new",
        code: `function User(name) {\n  // 1. Создается пустой объект: {} (неявно)\n  // 2. this = {} (неявно)\n  // 3. this.__proto__ = User.prototype (неявно)\n  this.name = name;\n  // 4. return this (неявно, если нет return)\n}\n\n// Эквивалент вручную\nfunction manualNew(Constructor, ...args) {\n  const obj = {};\n  Object.setPrototypeOf(obj, Constructor.prototype);\n  const result = Constructor.apply(obj, args);\n  return result instanceof Object ? result : obj;\n}`
      },
      {
        title: "Забыли new",
        code: `function User(name) {\n  this.name = name;\n}\n\n// С new - работает\nconst user1 = new User("Alice");\nconsole.log(user1.name); // "Alice"\n\n// Без new - this = window/undefined\nconst user2 = User("Bob");\nconsole.log(user2); // undefined\nconsole.log(window.name); // "Bob" (в не strict mode)\n\n// Защита от забытого new\nfunction SafeUser(name) {\n  if (!(this instanceof SafeUser)) {\n    return new SafeUser(name);\n  }\n  this.name = name;\n}`
      }
    ],
    relatedTopics: ['prototype-chain', 'this-basics', 'classes'],
    nextTopicId: 'object-create'
  },
  {
    id: 'object-create',
    title: 'Object.create()',
    difficulty: 'intermediate',
    description: 'Object.create(proto) создает объект с указанным прототипом. Более явный способ создания объектов с прототипом чем __proto__. Второй параметр - дескрипторы свойств. Используется для "чистого" прототипного наследования без конструкторов.',
    keyPoints: [
      'Object.create(proto): создает объект с прототипом proto.',
      'Object.create(null): создает объект без прототипа (чистый словарь).',
      'Второй параметр: дескрипторы свойств {prop: {value, writable, enumerable}}.',
      'Более явный способ чем __proto__ или new Constructor().',
      'Используется для прототипного наследования без конструкторов.'
    ],
    tags: ['object.create', 'prototype', 'inheritance', 'oop'],
    examples: [
      {
        title: "Базовое использование",
        code: `const animal = { eats: true };\nconst cat = Object.create(animal);\ncat.jumps = true;\n\nconsole.log(cat.eats); // true (из прототипа)\nconsole.log(cat.jumps); // true (свое)\nconsole.log(Object.getPrototypeOf(cat) === animal); // true`
      },
      {
        title: "Объект без прототипа",
        code: `// Чистый словарь без методов Object.prototype\nconst dict = Object.create(null);\n\ndict.name = "test";\nconsole.log(dict.toString); // undefined (нет методов Object)\n\n// Полезно для Map-подобных структур\nconst cleanMap = Object.create(null);\ncleanMap["__proto__"] = "safe"; // безопасно, не конфликтует`
      },
      {
        title: "С дескрипторами свойств",
        code: `const proto = { x: 1 };\nconst obj = Object.create(proto, {\n  y: {\n    value: 2,\n    writable: false,\n    enumerable: true,\n    configurable: false\n  },\n  z: {\n    get() { return this.y * 2; },\n    enumerable: true\n  }\n});\n\nconsole.log(obj.x); // 1 (из прототипа)\nconsole.log(obj.y); // 2\nconsole.log(obj.z); // 4 (геттер)\nobj.y = 10; // игнорируется (writable: false)`
      },
      {
        title: "Наследование через Object.create",
        code: `const Animal = {\n  init(name) {\n    this.name = name;\n    return this;\n  },\n  speak() {\n    return this.name + " makes a sound";\n  }\n};\n\nconst Dog = Object.create(Animal);\nDog.speak = function() {\n  return this.name + " barks";\n};\n\nconst dog = Object.create(Dog).init("Rex");\nconsole.log(dog.speak()); // "Rex barks"`
      }
    ],
    relatedTopics: ['prototype-chain', 'constructors'],
    nextTopicId: 'hasownproperty-in'
  },
  {
    id: 'hasownproperty-in',
    title: 'hasOwnProperty vs in',
    difficulty: 'intermediate',
    description: 'hasOwnProperty(prop) проверяет собственное свойство объекта (не из прототипа). prop in obj проверяет наличие свойства в объекте или прототипе. Object.hasOwn() — современная безопасная альтернатива hasOwnProperty. Разница важна при итерации и проверке свойств.',
    keyPoints: [
      'obj.hasOwnProperty(prop): true только для собственных свойств.',
      'prop in obj: true если свойство есть в объекте или прототипе.',
      'Object.hasOwn(obj, prop): современная безопасная альтернатива.',
      'for...in перебирает и собственные, и унаследованные свойства.',
      'Object.keys() возвращает только собственные свойства.'
    ],
    tags: ['hasownproperty', 'in', 'properties', 'prototype', 'oop'],
    examples: [
      {
        title: "Разница hasOwnProperty и in",
        code: `const proto = { inherited: "from proto" };\nconst obj = Object.create(proto);\nobj.own = "own property";\n\nconsole.log(obj.hasOwnProperty("own")); // true\nconsole.log(obj.hasOwnProperty("inherited")); // false\n\nconsole.log("own" in obj); // true\nconsole.log("inherited" in obj); // true (есть в прототипе)\nconsole.log("toString" in obj); // true (из Object.prototype)`
      },
      {
        title: "Object.hasOwn (современный способ)",
        code: `const obj = { x: 1 };\n\n// Старый способ (может быть переопределен)\nobj.hasOwnProperty("x"); // true\n\n// Новый способ (безопасный)\nObject.hasOwn(obj, "x"); // true\n\n// Проблема старого способа\nconst malicious = Object.create(null);\nmalicious.hasOwnProperty = () => true; // переопределили\n// Object.hasOwn безопасен`
      },
      {
        title: "Итерация по свойствам",
        code: `const proto = { protoProp: 1 };\nconst obj = Object.create(proto);\nobj.ownProp = 2;\n\n// for...in - все свойства (включая прототип)\nfor (const key in obj) {\n  console.log(key); // "ownProp", "protoProp"\n}\n\n// Только собственные\nfor (const key in obj) {\n  if (obj.hasOwnProperty(key)) {\n    console.log(key); // только "ownProp"\n  }\n}\n\n// Object.keys - только собственные\nObject.keys(obj); // ["ownProp"]`
      },
      {
        title: "Проверка перед использованием",
        code: `function safeAccess(obj, prop) {\n  // Проверяем наличие (включая прототип)\n  if (prop in obj) {\n    // Проверяем что это собственное свойство\n    if (Object.hasOwn(obj, prop)) {\n      return obj[prop];\n    } else {\n      console.warn(\`\${prop} is inherited\`);\n    }\n  }\n  return undefined;\n}`
      }
    ],
    relatedTopics: ['prototype-chain', 'objects-basic'],
    nextTopicId: 'instanceof'
  },
  {
    id: 'instanceof',
    title: 'instanceof',
    difficulty: 'intermediate',
    description: 'obj instanceof Constructor проверяет, есть ли Constructor.prototype в цепочке прототипов obj. Проверяет всю цепочку, не только прямой прототип. Работает с классами и конструкторами. Symbol.hasInstance позволяет кастомизировать проверку. Можно обмануть, изменив prototype.',
    keyPoints: [
      'obj instanceof Constructor: проверяет цепочку прототипов.',
      'Проверяет: есть ли Constructor.prototype в [[Prototype]] цепочке.',
      'Работает с классами и функциями-конструкторами.',
      'Symbol.hasInstance: кастомная логика проверки.',
      'Можно обмануть, изменив Constructor.prototype.'
    ],
    tags: ['instanceof', 'prototype', 'inheritance', 'oop'],
    examples: [
      {
        title: "Базовое использование",
        code: `function User(name) {\n  this.name = name;\n}\n\nconst user = new User("Alice");\n\nconsole.log(user instanceof User); // true\nconsole.log(user instanceof Object); // true (Object в цепочке)\nconsole.log(user instanceof Array); // false\n\n// С классами\nclass Animal {}\nclass Dog extends Animal {}\n\nconst dog = new Dog();\nconsole.log(dog instanceof Dog); // true\nconsole.log(dog instanceof Animal); // true\nconsole.log(dog instanceof Object); // true`
      },
      {
        title: "Как работает instanceof",
        code: `// obj instanceof Constructor\n// Эквивалентно:\nfunction myInstanceof(obj, Constructor) {\n  let proto = Object.getPrototypeOf(obj);\n  const prototype = Constructor.prototype;\n  \n  while (proto !== null) {\n    if (proto === prototype) {\n      return true;\n    }\n    proto = Object.getPrototypeOf(proto);\n  }\n  return false;\n}\n\nconst arr = [];\nconsole.log(myInstanceof(arr, Array)); // true\nconsole.log(myInstanceof(arr, Object)); // true`
      },
      {
        title: "Symbol.hasInstance",
        code: `class MyArray {\n  static [Symbol.hasInstance](instance) {\n    return Array.isArray(instance);\n  }\n}\n\nconst arr = [1, 2, 3];\nconsole.log(arr instanceof MyArray); // true (кастомная проверка)\n\n// Обычный массив\nconst normalArr = [];\nconsole.log(normalArr instanceof MyArray); // true`
      },
      {
        title: "Проблемы instanceof",
        code: `function User() {}\nconst user = new User();\n\nconsole.log(user instanceof User); // true\n\n// Изменили prototype\nUser.prototype = {};\n\n// Может дать неожиданный результат\nconst user2 = new User();\nconsole.log(user2 instanceof User); // true (новый prototype)\nconsole.log(user instanceof User); // false (старый prototype)`
      }
    ],
    relatedTopics: ['prototype-chain', 'constructors', 'classes'],
    nextTopicId: 'getprototypeof-setprototypeof'
  },
  {
    id: 'getprototypeof-setprototypeof',
    title: 'Object.getPrototypeOf / setPrototypeOf',
    difficulty: 'intermediate',
    description: 'Object.getPrototypeOf(obj) возвращает прототип объекта. Object.setPrototypeOf(obj, proto) устанавливает прототип. Современная альтернатива __proto__. setPrototypeOf медленный, лучше использовать Object.create() при создании. getPrototypeOf безопаснее чем __proto__.',
    keyPoints: [
      'Object.getPrototypeOf(obj): возвращает прототип объекта.',
      'Object.setPrototypeOf(obj, proto): устанавливает прототип (медленно!).',
      'Современная альтернатива __proto__ (устаревший способ).',
      'setPrototypeOf медленный, лучше Object.create() при создании.',
      'getPrototypeOf безопаснее чем obj.__proto__.'
    ],
    tags: ['getprototypeof', 'setprototypeof', 'prototype', 'oop'],
    examples: [
      {
        title: "getPrototypeOf",
        code: `const proto = { x: 1 };\nconst obj = Object.create(proto);\n\n// Получить прототип\nconst prototype = Object.getPrototypeOf(obj);\nconsole.log(prototype === proto); // true\n\n// Устаревший способ\nconsole.log(obj.__proto__ === proto); // true (но не рекомендуется)\n\n// Для классов\nclass User {}\nconst user = new User();\nconsole.log(Object.getPrototypeOf(user) === User.prototype); // true`
      },
      {
        title: "setPrototypeOf",
        code: `const obj = { x: 1 };\nconst proto = { y: 2 };\n\n// Установить прототип\nObject.setPrototypeOf(obj, proto);\n\nconsole.log(obj.x); // 1 (свое)\nconsole.log(obj.y); // 2 (из прототипа)\n\n// Проверка\nconsole.log(Object.getPrototypeOf(obj) === proto); // true`
      },
      {
        title: "Производительность",
        code: `// Медленно - setPrototypeOf\nconst obj1 = {};\nObject.setPrototypeOf(obj1, { x: 1 });\n\n// Быстро - Object.create при создании\nconst obj2 = Object.create({ x: 1 });\n\n// setPrototypeOf оптимизирует движок, но медленнее\n// Используй только если нужно изменить прототип существующего объекта`
      },
      {
        title: "Цепочка прототипов",
        code: `const grandparent = { a: 1 };\nconst parent = { b: 2 };\nconst child = { c: 3 };\n\n// Строим цепочку\nObject.setPrototypeOf(parent, grandparent);\nObject.setPrototypeOf(child, parent);\n\n// Проверяем\nconsole.log(Object.getPrototypeOf(child) === parent); // true\nconsole.log(Object.getPrototypeOf(parent) === grandparent); // true\n\n// Поиск по цепочке\nconsole.log(child.a); // 1 (из grandparent)\nconsole.log(child.b); // 2 (из parent)\nconsole.log(child.c); // 3 (свое)`
      }
    ],
    relatedTopics: ['prototype-chain', 'object-create'],
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
      },
      {
        title: "Создание промиса",
        code: `const promise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve("Success!");\n  }, 1000);\n});\n\npromise.then(result => console.log(result));`
      },
      {
        title: "Promise.all и Promise.race",
        code: `const p1 = Promise.resolve(1);\nconst p2 = Promise.resolve(2);\nconst p3 = Promise.resolve(3);\n\nPromise.all([p1, p2, p3]).then(console.log); // [1, 2, 3]\nPromise.race([p1, p2, p3]).then(console.log); // 1 (первый)`
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
      },
      {
        title: "async всегда возвращает промис",
        code: `async function test() {\n  return 42;\n}\n\nconst result = test();\nconsole.log(result); // Promise { <fulfilled>: 42 }\nresult.then(v => console.log(v)); // 42`
      },
      {
        title: "Параллельное выполнение",
        code: `async function fetchData() {\n  const [users, posts] = await Promise.all([\n    fetch('/users').then(r => r.json()),\n    fetch('/posts').then(r => r.json())\n  ]);\n  return { users, posts };\n}`
      }
    ],
    relatedTopics: ['promises'],
    nextTopicId: 'generators'
  },
  {
    id: 'immutability',
    title: 'Иммутабельность',
    difficulty: 'intermediate',
    description: 'Иммутабельность — данные не изменяются напрямую, создается новая копия. Используй spread оператор, map/filter вместо мутаций. Предотвращает побочные эффекты, упрощает отладку, позволяет отслеживать изменения по ссылке.',
    keyPoints: [
      'Предотвращает побочные эффекты.',
      'Упрощает отладку и тестирование.',
      'Позволяет сравнивать данные по ссылке.'
    ],
    tags: ['immutability', 'functional', 'patterns'],
    examples: [
      {
        title: "Обновление объекта",
        code: `const user = { name: "Ivan", age: 20 };\nconst updatedUser = { ...user, age: 21 };`
      },
      {
        title: "Обновление массива",
        code: `const arr = [1, 2, 3];\nconst newArr = [...arr, 4]; // [1, 2, 3, 4]\nconst doubled = arr.map(x => x * 2); // [2, 4, 6]\n// arr не изменился`
      },
      {
        title: "Вложенные объекты",
        code: `const user = { name: "Ivan", address: { city: "Moscow" } };\nconst updated = {\n  ...user,\n  address: { ...user.address, city: "SPB" }\n};\n// user.address не изменился`
      }
    ],
    relatedTopics: ['closures-basic'],
    nextTopicId: 'arrays-advanced'
  },
  {
    id: 'arrays-advanced',
    title: 'Array методы (продвинутые)',
    difficulty: 'intermediate',
    description: 'reduce аккумулирует значение из массива в одно. some проверяет, есть ли хотя бы один элемент, удовлетворяющий условию. every проверяет, все ли элементы удовлетворяют условию. flat разворачивает вложенные массивы, flatMap комбинирует map и flat.',
    keyPoints: [
      'reduce(acc, item, index, arr): аккумулятор, начальное значение опционально.',
      'some: возвращает true если хотя бы один элемент проходит проверку.',
      'every: возвращает true если все элементы проходят проверку.',
      'flat(depth): разворачивает массивы на указанную глубину.',
      'flatMap: map + flat(1) в одной операции.'
    ],
    tags: ['arrays', 'reduce', 'some', 'every', 'flat'],
    examples: [
      {
        title: "reduce",
        code: `const numbers = [1, 2, 3, 4];\nconst sum = numbers.reduce((acc, n) => acc + n, 0); // 10\nconst product = numbers.reduce((acc, n) => acc * n, 1); // 24\n\nconst max = numbers.reduce((acc, n) => n > acc ? n : acc); // 4`
      },
      {
        title: "some и every",
        code: `const numbers = [1, 2, 3, 4];\nnumbers.some(n => n > 3); // true (есть элемент > 3)\nnumbers.every(n => n > 0); // true (все > 0)\nnumbers.every(n => n > 2); // false (не все > 2)`
      },
      {
        title: "flat и flatMap",
        code: `const arr = [1, [2, 3], [4, [5, 6]]];\narr.flat(); // [1, 2, 3, 4, [5, 6]]\narr.flat(2); // [1, 2, 3, 4, 5, 6]\n\nconst words = ["hello", "world"];\nwords.flatMap(w => w.split("")); // ["h","e","l","l","o","w","o","r","l","d"]`
      }
    ],
    relatedTopics: ['arrays-basic', 'immutability'],
    nextTopicId: 'classes'
  },
  {
    id: 'classes',
    title: 'Классы',
    difficulty: 'intermediate',
    description: 'Классы — синтаксический сахар над функциями-конструкторами. constructor вызывается при new. extends для наследования, super для вызова родителя. static методы принадлежат классу, не экземпляру. private/public поля контролируют доступ.',
    keyPoints: [
      'class: синтаксический сахар над функциями-конструкторами.',
      'extends: наследование, super вызывает родительский конструктор/метод.',
      'static: методы/поля класса, доступны через Class.method.',
      'private: доступ только внутри класса, public по умолчанию.'
    ],
    tags: ['classes', 'inheritance', 'oop', 'ES6'],
    examples: [
      {
        title: "Базовый класс",
        code: `class User {\n  constructor(name) {\n    this.name = name;\n  }\n  \n  greet() {\n    return "Hello, I'm " + this.name;\n  }\n}\n\nconst user = new User("Alice");\nuser.greet(); // "Hello, I'm Alice"`
      },
      {
        title: "Наследование",
        code: `class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() { return "Some sound"; }\n}\n\nclass Dog extends Animal {\n  speak() {\n    return "Woof!";\n  }\n}\n\nconst dog = new Dog("Rex");\ndog.speak(); // "Woof!"`
      },
      {
        title: "static и private",
        code: `class MathUtils {\n  static PI = 3.14;\n  static add(a, b) { return a + b; }\n}\n\nMathUtils.PI; // 3.14\nMathUtils.add(1, 2); // 3\n\nclass Counter {\n  #count = 0; // private\n  increment() { this.#count++; }\n  getCount() { return this.#count; }\n}`
      }
    ],
    relatedTopics: ['prototype-chain', 'this-basics'],
    nextTopicId: 'map-set'
  },
  {
    id: 'map-set',
    title: 'Map и Set',
    difficulty: 'intermediate',
    description: 'Map — коллекция пар ключ-значение, ключи могут быть любого типа (не только строки). Set — коллекция уникальных значений. Map лучше объектов когда нужны ключи не-строки, частые добавления/удаления, размер коллекции. Set для уникальных значений.',
    keyPoints: [
      'Map: ключи любого типа, есть size, методы set/get/has/delete.',
      'Set: уникальные значения, методы add/has/delete.',
      'Map vs Object: ключи не-строки, частые изменения, размер коллекции.',
      'Set vs Array: автоматическая уникальность, быстрая проверка наличия.'
    ],
    tags: ['map', 'set', 'collections', 'ES6'],
    examples: [
      {
        title: "Map",
        code: `const map = new Map();\nmap.set("name", "Alice");\nmap.set(1, "one");\nmap.set({}, "object key");\n\nmap.get("name"); // "Alice"\nmap.has(1); // true\nmap.size; // 3\nmap.delete(1);`
      },
      {
        title: "Set",
        code: `const set = new Set([1, 2, 3, 2, 1]);\nset.size; // 3 (дубликаты удалены)\nset.add(4);\nset.has(3); // true\nset.delete(2);\n\n// Преобразование в массив\nArray.from(set); // [1, 3, 4]`
      },
      {
        title: "Итерация",
        code: `const map = new Map([["a", 1], ["b", 2]]);\nfor (const [key, value] of map) {\n  console.log(key, value);\n}\n\nconst set = new Set([1, 2, 3]);\nfor (const value of set) {\n  console.log(value);\n}`
      }
    ],
    relatedTopics: ['objects-basic', 'arrays-basic'],
    nextTopicId: 'destructuring-advanced'
  },
  {
    id: 'destructuring-advanced',
    title: 'Деструктуризация (продвинутая)',
    difficulty: 'intermediate',
    description: 'Вложенная деструктуризация извлекает значения из вложенных структур. Rest собирает оставшиеся элементы. Можно комбинировать переименование, значения по умолчанию и rest. Деструктуризация в параметрах функций упрощает работу с объектами.',
    keyPoints: [
      'Вложенная: деструктуризация внутри деструктуризации.',
      'Rest: ...rest собирает оставшиеся элементы.',
      'В параметрах: деструктуризация объекта в аргументах функции.',
      'Можно комбинировать: переименование + значения по умолчанию + rest.'
    ],
    tags: ['destructuring', 'rest', 'parameters', 'ES6'],
    examples: [
      {
        title: "Вложенная деструктуризация",
        code: `const user = {\n  name: "Alice",\n  address: { city: "Moscow", street: "Lenina" }\n};\n\nconst { name, address: { city } } = user;\nconsole.log(name, city); // "Alice", "Moscow"\n\nconst arr = [[1, 2], [3, 4]];\nconst [[a], [b]] = arr;\nconsole.log(a, b); // 1, 3`
      },
      {
        title: "Rest в деструктуризации",
        code: `const arr = [1, 2, 3, 4, 5];\nconst [first, second, ...rest] = arr;\nconsole.log(first); // 1\nconsole.log(rest); // [3, 4, 5]\n\nconst obj = { a: 1, b: 2, c: 3 };\nconst { a, ...others } = obj;\nconsole.log(others); // { b: 2, c: 3 }`
      },
      {
        title: "В параметрах функции",
        code: `function greet({ name, age = 18 }) {\n  return "Hello, " + name + ", age " + age;\n}\n\ngreet({ name: "Alice" }); // "Hello, Alice, age 18"\n\ngreet({ name: "Bob", age: 30 }); // "Hello, Bob, age 30"`
      }
    ],
    relatedTopics: ['destructuring-basic', 'functions-types'],
    nextTopicId: 'modules'
  },
  {
    id: 'modules',
    title: 'Модули ES6',
    difficulty: 'intermediate',
    description: 'Модули изолируют код, экспорт делает функции/переменные доступными, импорт подключает их. export default — один экспорт по умолчанию, export — именованные экспорты. import может быть default или именованным, можно переименовывать через as.',
    keyPoints: [
      'export default: один экспорт по умолчанию, импорт без фигурных скобок.',
      'export: именованные экспорты, импорт с фигурными скобками.',
      'import: можно переименовывать через as, импортировать все через *.',
      'Модули изолированы: переменные не попадают в глобальную область видимости.'
    ],
    tags: ['modules', 'import', 'export', 'ES6'],
    examples: [
      {
        title: "export default",
        code: `// math.js\nexport default function add(a, b) {\n  return a + b;\n}\n\n// main.js\nimport add from './math.js';\n// или\nimport myAdd from './math.js';`
      },
      {
        title: "Именованные экспорты",
        code: `// utils.js\nexport function multiply(a, b) { return a * b; }\nexport const PI = 3.14;\n\n// main.js\nimport { multiply, PI } from './utils.js';\n// или\nimport { multiply as mul, PI } from './utils.js';`
      },
      {
        title: "Комбинированный экспорт",
        code: `// lib.js\nexport default class User {}\nexport function helper() {}\nexport const CONST = 42;\n\n// main.js\nimport User, { helper, CONST } from './lib.js';\n// или все сразу\nimport * as lib from './lib.js';\nlib.default; // User\nlib.helper();`
      }
    ],
    relatedTopics: ['functions-types', 'classes'],
    nextTopicId: 'symbol'
  },
  {
    id: 'symbol',
    title: 'Symbol',
    difficulty: 'intermediate',
    description: 'Symbol — уникальный примитивный тип, каждый Symbol уникален даже с одинаковым описанием. Используется для создания скрытых свойств объектов, избегания конфликтов имен. Symbol.for создает глобальный символ, Symbol.keyFor получает ключ.',
    keyPoints: [
      'Каждый Symbol уникален: Symbol("id") !== Symbol("id").',
      'Скрытые свойства: не видны в Object.keys, for...in.',
      'Symbol.for(key): создает/возвращает глобальный символ по ключу.',
      'Symbol.iterator: встроенный символ для итераторов.'
    ],
    tags: ['symbol', 'primitives', 'unique', 'ES6'],
    examples: [
      {
        title: "Уникальность Symbol",
        code: `const sym1 = Symbol("id");\nconst sym2 = Symbol("id");\nconsole.log(sym1 === sym2); // false\n\nconst obj = {};\nobj[sym1] = "value1";\nobj[sym2] = "value2";\nconsole.log(obj[sym1]); // "value1"`
      },
      {
        title: "Скрытые свойства",
        code: `const id = Symbol("id");\nconst user = {\n  name: "Alice",\n  [id]: 123\n};\n\nObject.keys(user); // ["name"]\nfor (const key in user) { console.log(key); } // "name"\nconsole.log(user[id]); // 123 (доступ есть)`
      },
      {
        title: "Symbol.for",
        code: `const global1 = Symbol.for("id");\nconst global2 = Symbol.for("id");\nconsole.log(global1 === global2); // true\n\nSymbol.keyFor(global1); // "id"\n\nconst local = Symbol("id");\nSymbol.keyFor(local); // undefined (не глобальный)`
      }
    ],
    relatedTopics: ['data-types', 'objects-basic'],
    nextTopicId: 'error-handling'
  },
  {
    id: 'error-handling',
    title: 'Обработка ошибок',
    difficulty: 'intermediate',
    description: 'try/catch перехватывает ошибки, finally выполняется всегда. throw выбрасывает ошибку. Можно создавать кастомные классы ошибок через extends Error. Ошибки в промисах обрабатываются через catch, в async/await через try/catch.',
    keyPoints: [
      'try/catch: перехватывает ошибки, выполнение продолжается.',
      'finally: выполняется всегда, даже если была ошибка.',
      'throw: выбрасывает ошибку, можно передать любое значение.',
      'Кастомные ошибки: class extends Error для специфичных ошибок.'
    ],
    tags: ['errors', 'try-catch', 'throw', 'exceptions'],
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
  },
  {
    id: 'array-methods-advanced',
    title: 'Методы массивов (продвинутые)',
    difficulty: 'intermediate',
    description: 'reduce() аккумулирует значение, flat() разворачивает вложенные массивы, flatMap() = map() + flat(). find() находит первый элемент, some() проверяет хотя бы один, every() проверяет все. reduce — самый мощный метод для трансформаций.',
    keyPoints: [
      'reduce(acc, item, index, arr): аккумулирует значение через callback.',
      'flat(depth): разворачивает вложенные массивы на указанную глубину.',
      'flatMap(fn): map() + flat(1) в одной операции.',
      'find(predicate): первый элемент, удовлетворяющий условию.',
      'some(predicate): true если хотя бы один элемент проходит проверку.',
      'every(predicate): true если все элементы проходят проверку.'
    ],
    tags: ['arrays', 'methods', 'functional', 'reduce', 'iteration'],
    examples: [
      {
        title: "reduce",
        code: `const numbers = [1, 2, 3, 4];\n\n// Сумма\nnumbers.reduce((sum, n) => sum + n, 0); // 10\n\n// Группировка\nconst users = [\n  { age: 20 }, { age: 30 }, { age: 20 }\n];\nusers.reduce((acc, u) => {\n  acc[u.age] = (acc[u.age] || 0) + 1;\n  return acc;\n}, {});\n// { 20: 2, 30: 1 }`
      },
      {
        title: "flat и flatMap",
        code: `const nested = [1, [2, 3], [4, [5, 6]]];\n\nnested.flat(); // [1, 2, 3, 4, [5, 6]]\nnested.flat(2); // [1, 2, 3, 4, 5, 6]\n\n// flatMap = map + flat(1)\nconst words = ["hello world", "foo bar"];\nwords.flatMap(w => w.split(" "));\n// ["hello", "world", "foo", "bar"]`
      },
      {
        title: "find, some, every",
        code: `const numbers = [1, 2, 3, 4, 5];\n\nnumbers.find(n => n > 3); // 4\nnumbers.find(n => n > 10); // undefined\n\nnumbers.some(n => n > 4); // true\nnumbers.some(n => n > 10); // false\n\nnumbers.every(n => n > 0); // true\nnumbers.every(n => n > 3); // false`
      }
    ],
    relatedTopics: ['arrays-basic', 'arrays-advanced', 'immutability']
  },
  {
    id: 'iife',
    title: 'IIFE (Immediately Invoked Function Expression)',
    difficulty: 'intermediate',
    description: 'IIFE — функция, которая выполняется сразу после объявления. Синтаксис: (function() {})() или (() => {})(). Создает изолированную область видимости, предотвращает загрязнение глобального scope. Используется для модулей до ES6, инкапсуляции кода.',
    keyPoints: [
      'Синтаксис: (function() {})() или (() => {})().',
      'Создает изолированную область видимости.',
      'Предотвращает загрязнение глобального scope.',
      'Использовалось для модулей до ES6.',
      'Может возвращать значение и присваиваться переменной.'
    ],
    tags: ['iife', 'scope', 'modules', 'encapsulation'],
    examples: [
      {
        title: "Базовый IIFE",
        code: `(function() {\n  const private = "hidden";\n  console.log("Executed immediately");\n})();\n\n// Arrow function IIFE\n(() => {\n  console.log("Arrow IIFE");\n})();`
      },
      {
        title: "IIFE с возвратом значения",
        code: `const result = (function() {\n  const x = 10;\n  return x * 2;\n})();\n\nconsole.log(result); // 20\n\n// Переменная x недоступна снаружи`
      },
      {
        title: "IIFE с параметрами",
        code: `(function(name) {\n  console.log(\`Hello, \${name}\`);\n})("Alice");\n\n// Использование для модулей\nconst module = (function() {\n  let private = 0;\n  return {\n    get: () => private,\n    set: (val) => { private = val; }\n  };\n})();`
      }
    ],
    relatedTopics: ['scope-chain', 'closures-basic', 'modules']
  },
  {
    id: 'callbacks',
    title: 'Callback функции',
    difficulty: 'intermediate',
    description: 'Callback — функция, передаваемая как аргумент и вызываемая позже. Используется в асинхронных операциях, обработчиках событий, методах массивов. Callback hell — вложенные колбэки, делающие код нечитаемым. Решение: промисы, async/await.',
    keyPoints: [
      'Callback: функция, передаваемая как аргумент.',
      'Используется в setTimeout, addEventListener, array methods.',
      'Callback hell: глубоко вложенные колбэки.',
      'Проблемы: сложность чтения, обработка ошибок.',
      'Решение: промисы, async/await.'
    ],
    tags: ['callbacks', 'async', 'functions', 'patterns'],
    examples: [
      {
        title: "Базовые callbacks",
        code: `function processData(data, callback) {\n  // Симуляция асинхронной операции\n  setTimeout(() => {\n    const result = data.toUpperCase();\n    callback(result);\n  }, 1000);\n}\n\nprocessData("hello", (result) => {\n  console.log(result); // "HELLO"\n});`
      },
      {
        title: "Callback hell",
        code: `getData((data1) => {\n  processData(data1, (data2) => {\n    saveData(data2, (data3) => {\n      sendData(data3, (result) => {\n        console.log(result);\n        // Сложно читать и поддерживать\n      });\n    });\n  });\n});`
      },
      {
        title: "Callbacks в методах массивов",
        code: `const numbers = [1, 2, 3, 4];\n\nnumbers.map(n => n * 2); // [2, 4, 6, 8]\nnumbers.filter(n => n > 2); // [3, 4]\nnumbers.forEach(n => console.log(n));\n\n// Callback вызывается для каждого элемента`
      }
    ],
    relatedTopics: ['promises', 'async-await', 'functions-types']
  },
  {
    id: 'higher-order-functions',
    title: 'Функции высшего порядка',
    difficulty: 'intermediate',
    description: 'Функция высшего порядка — принимает функции как аргументы или возвращает функции. Примеры: map, filter, reduce, setTimeout. Позволяет создавать абстракции, переиспользовать код, писать декларативный код. Основа функционального программирования.',
    keyPoints: [
      'Принимает функции как аргументы или возвращает функции.',
      'Примеры: map, filter, reduce, setTimeout.',
      'Создает абстракции и переиспользование кода.',
      'Декларативный стиль вместо императивного.',
      'Основа функционального программирования.'
    ],
    tags: ['functions', 'functional', 'abstraction', 'patterns'],
    examples: [
      {
        title: "Функция, принимающая функцию",
        code: `function operate(a, b, operation) {\n  return operation(a, b);\n}\n\noperate(5, 3, (x, y) => x + y); // 8\noperate(5, 3, (x, y) => x * y); // 15\noperate(5, 3, Math.max); // 5`
      },
      {
        title: "Функция, возвращающая функцию",
        code: `function multiply(x) {\n  return function(y) {\n    return x * y;\n  };\n}\n\nconst double = multiply(2);\ndouble(5); // 10\n\nconst triple = multiply(3);\ntriple(4); // 12`
      },
      {
        title: "Встроенные HOF",
        code: `const numbers = [1, 2, 3, 4];\n\n// map, filter, reduce - функции высшего порядка\nnumbers.map(n => n * 2);\nnumbers.filter(n => n > 2);\nnumbers.reduce((sum, n) => sum + n, 0);\n\n// setTimeout тоже HOF\nsetTimeout(() => console.log("Delayed"), 1000);`
      }
    ],
    relatedTopics: ['functions-types', 'callbacks', 'closures-basic']
  },
  {
    id: 'recursion',
    title: 'Рекурсия',
    difficulty: 'intermediate',
    description: 'Рекурсия — функция вызывает саму себя. Нужен базовый случай для остановки. Используется для обхода деревьев, факториала, поиска. Стек вызовов ограничен (~10000). Хвостовая рекурсия оптимизируется в некоторых случаях. Можно заменить итерацией.',
    keyPoints: [
      'Функция вызывает саму себя.',
      'Базовый случай: условие остановки рекурсии.',
      'Рекурсивный случай: вызов с измененными параметрами.',
      'Стек вызовов ограничен, возможен stack overflow.',
      'Хвостовая рекурсия может оптимизироваться.'
    ],
    tags: ['recursion', 'algorithms', 'functions', 'stack'],
    examples: [
      {
        title: "Факториал",
        code: `function factorial(n) {\n  // Базовый случай\n  if (n <= 1) return 1;\n  \n  // Рекурсивный случай\n  return n * factorial(n - 1);\n}\n\nfactorial(5); // 120`
      },
      {
        title: "Обход дерева",
        code: `function traverse(node) {\n  if (!node) return;\n  \n  console.log(node.value);\n  traverse(node.left);\n  traverse(node.right);\n}\n\nconst tree = {\n  value: 1,\n  left: { value: 2 },\n  right: { value: 3 }\n};\n\ntraverse(tree);`
      },
      {
        title: "Хвостовая рекурсия",
        code: `// Обычная рекурсия\nfunction sum(n) {\n  if (n === 0) return 0;\n  return n + sum(n - 1);\n}\n\n// Хвостовая рекурсия (оптимизируется)\nfunction sumTail(n, acc = 0) {\n  if (n === 0) return acc;\n  return sumTail(n - 1, acc + n);\n}`
      }
    ],
    relatedTopics: ['functions-types', 'callbacks', 'arrays-advanced']
  },
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
  }
];

