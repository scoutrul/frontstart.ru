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
    nextTopicId: 'getters-setters'
  },
  {
    id: 'getters-setters',
    title: 'Геттеры и сеттеры',
    difficulty: 'advanced',
    description: 'Геттеры и сеттеры — функции, вызываемые при чтении/записи свойства. Определяются через Object.defineProperty() или в объектах/классах через get/set. Позволяют контролировать доступ к свойствам, валидацию, вычисляемые свойства. В прототипах доступны всем экземплярам.',
    keyPoints: [
      'get prop() {}: вызывается при чтении свойства.',
      'set prop(value) {}: вызывается при записи свойства.',
      'Object.defineProperty(obj, prop, {get, set}): определение геттера/сеттера.',
      'Использование: валидация, вычисляемые свойства, контроль доступа.',
      'В прототипах: геттеры/сеттеры доступны всем экземплярам.'
    ],
    tags: ['getters', 'setters', 'properties', 'prototype', 'oop'],
    examples: [
      {
        title: "Геттеры и сеттеры в объектах",
        code: `const user = {\n  firstName: "John",\n  lastName: "Doe",\n  \n  get fullName() {\n    return \`\${this.firstName} \${this.lastName}\`;\n  },\n  \n  set fullName(value) {\n    [this.firstName, this.lastName] = value.split(" ");\n  }\n};\n\nconsole.log(user.fullName); // "John Doe" (вызван геттер)\nuser.fullName = "Jane Smith"; // вызван сеттер\nconsole.log(user.firstName); // "Jane"`
      },
      {
        title: "Object.defineProperty",
        code: `const obj = {};\nlet _value = 0;\n\nObject.defineProperty(obj, 'count', {\n  get() {\n    return _value;\n  },\n  set(value) {\n    if (value < 0) {\n      throw new Error("Count cannot be negative");\n    }\n    _value = value;\n  },\n  enumerable: true,\n  configurable: true\n});\n\nobj.count = 5;\nconsole.log(obj.count); // 5\nobj.count = -1; // Error`
      },
      {
        title: "В прототипах",
        code: `function User(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\n\nUser.prototype = {\n  get fullName() {\n    return \`\${this.firstName} \${this.lastName}\`;\n  },\n  set fullName(value) {\n    [this.firstName, this.lastName] = value.split(" ");\n  }\n};\n\nconst user = new User("Alice", "Smith");\nconsole.log(user.fullName); // "Alice Smith"\nuser.fullName = "Bob Johnson";\nconsole.log(user.firstName); // "Bob"`
      },
      {
        title: "В классах",
        code: `class User {\n  constructor(firstName, lastName) {\n    this.firstName = firstName;\n    this.lastName = lastName;\n  }\n  \n  get fullName() {\n    return \`\${this.firstName} \${this.lastName}\`;\n  }\n  \n  set fullName(value) {\n    [this.firstName, this.lastName] = value.split(" ");\n  }\n}\n\nconst user = new User("John", "Doe");\nconsole.log(user.fullName); // "John Doe"`
      }
    ],
    relatedTopics: ['prototype-chain', 'constructors', 'classes'],
    nextTopicId: 'getownpropertynames-keys'
  },
  {
    id: 'getownpropertynames-keys',
    title: 'Object.getOwnPropertyNames vs Object.keys',
    difficulty: 'advanced',
    description: 'Object.keys() возвращает только enumerable собственные свойства. Object.getOwnPropertyNames() возвращает все собственные свойства (включая non-enumerable). Object.getOwnPropertyDescriptors() возвращает дескрипторы всех свойств. Разница важна при работе с прототипами и скрытыми свойствами.',
    keyPoints: [
      'Object.keys(obj): только enumerable собственные свойства.',
      'Object.getOwnPropertyNames(obj): все собственные свойства (включая non-enumerable).',
      'Object.getOwnPropertyDescriptors(obj): дескрипторы всех свойств.',
      'Разница: enumerable vs все свойства, включая скрытые.',
      'Использование: глубокий анализ объектов, работа с прототипами.'
    ],
    tags: ['object.keys', 'getownpropertynames', 'properties', 'prototype', 'oop'],
    examples: [
      {
        title: "Разница keys и getOwnPropertyNames",
        code: `const obj = {};\n\nObject.defineProperty(obj, 'visible', {\n  value: 1,\n  enumerable: true\n});\n\nObject.defineProperty(obj, 'hidden', {\n  value: 2,\n  enumerable: false\n});\n\nconsole.log(Object.keys(obj)); // ["visible"]\nconsole.log(Object.getOwnPropertyNames(obj)); // ["visible", "hidden"]`
      },
      {
        title: "С встроенными объектами",
        code: `const arr = [1, 2, 3];\n\n// Только индексы (enumerable)\nObject.keys(arr); // ["0", "1", "2"]\n\n// Все свойства, включая length\nObject.getOwnPropertyNames(arr); // ["0", "1", "2", "length"]\n\n// length - non-enumerable\narr.propertyIsEnumerable('length'); // false`
      },
      {
        title: "getOwnPropertyDescriptors",
        code: `const obj = {};\n\nObject.defineProperty(obj, 'x', {\n  value: 1,\n  writable: false,\n  enumerable: true,\n  configurable: true\n});\n\nObject.defineProperty(obj, 'y', {\n  get() { return 2; },\n  enumerable: false\n});\n\nconst descriptors = Object.getOwnPropertyDescriptors(obj);\nconsole.log(descriptors);\n// {\n//   x: { value: 1, writable: false, enumerable: true, configurable: true },\n//   y: { get: [Function: get], enumerable: false, configurable: true }\n// }`
      },
      {
        title: "Копирование с дескрипторами",
        code: `const source = {};\nObject.defineProperty(source, 'x', {\n  value: 1,\n  writable: false,\n  enumerable: true\n});\n\n// Обычное копирование теряет дескрипторы\nconst copy1 = { ...source };\nObject.getOwnPropertyDescriptor(copy1, 'x');\n// { value: 1, writable: true, enumerable: true, configurable: true }\n\n// Копирование с дескрипторами\nconst copy2 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(source));\nObject.getOwnPropertyDescriptor(copy2, 'x');\n// { value: 1, writable: false, enumerable: true, configurable: true }`
      }
    ],
    relatedTopics: ['hasownproperty-in', 'prototype-chain'],
    nextTopicId: 'mixins'
  },
  {
    id: 'mixins',
    title: 'Mixins (Множественное наследование)',
    difficulty: 'advanced',
    description: 'Mixins позволяют эмулировать множественное наследование в JavaScript. Объект может наследовать методы от нескольких источников. Реализуется через Object.assign() или копирование методов в прототип. Используется для композиции функциональности без глубокой иерархии классов.',
    keyPoints: [
      'Mixin: объект с методами, которые копируются в другой объект.',
      'Object.assign(target, ...mixins): копирует свойства из mixins в target.',
      'Позволяет комбинировать функциональность из нескольких источников.',
      'Альтернатива глубокой иерархии классов.',
      'Использование: композиция вместо наследования.'
    ],
    tags: ['mixins', 'inheritance', 'composition', 'oop', 'patterns'],
    examples: [
      {
        title: "Базовый mixin",
        code: `const CanFly = {\n  fly() {\n    return "Flying!";\n  }\n};\n\nconst CanSwim = {\n  swim() {\n    return "Swimming!";\n  }\n};\n\n// Применяем mixins\nconst Duck = Object.assign({}, CanFly, CanSwim);\n\nconst duck = Object.create(Duck);\nduck.fly(); // "Flying!"\nduck.swim(); // "Swimming!"`
      },
      {
        title: "Mixin в классы",
        code: `// Mixin функции\nconst CanFly = (Base) => class extends Base {\n  fly() {\n    return "Flying!";\n  }\n};\n\nconst CanSwim = (Base) => class extends Base {\n  swim() {\n    return "Swimming!";\n  }\n};\n\nclass Animal {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\n// Применяем mixins\nclass Duck extends CanFly(CanSwim(Animal)) {\n  speak() {\n    return "Quack!";\n  }\n}\n\nconst duck = new Duck("Donald");\nduck.fly(); // "Flying!"\nduck.swim(); // "Swimming!"\nduck.speak(); // "Quack!"`
      },
      {
        title: "Mixin в прототипы",
        code: `function User(name) {\n  this.name = name;\n}\n\n// Mixin с методами\nconst Loggable = {\n  log() {\n    console.log(\`[\${this.constructor.name}] \${this.name}\`);\n  }\n};\n\nconst Serializable = {\n  serialize() {\n    return JSON.stringify(this);\n  }\n};\n\n// Применяем к прототипу\nObject.assign(User.prototype, Loggable, Serializable);\n\nconst user = new User("Alice");\nuser.log(); // "[User] Alice"\nuser.serialize(); // '{"name":"Alice"}'`
      },
      {
        title: "Утилита для mixins",
        code: `function mixin(...mixins) {\n  return function(Base) {\n    return mixins.reduce((Class, mixin) => mixin(Class), Base);\n  };\n}\n\nconst CanFly = (Base) => class extends Base {\n  fly() { return "Flying!"; }\n};\n\nconst CanSwim = (Base) => class extends Base {\n  swim() { return "Swimming!"; }\n};\n\nclass Animal {}\n\n// Применяем несколько mixins\nclass Duck extends mixin(CanFly, CanSwim)(Animal) {}\n\nconst duck = new Duck();\nduck.fly(); // "Flying!"\nduck.swim(); // "Swimming!"`
      }
    ],
    relatedTopics: ['prototype-chain', 'classes', 'object-create'],
    nextTopicId: 'super-prototypes'
  },
  {
    id: 'super-prototypes',
    title: 'super в прототипах',
    difficulty: 'advanced',
    description: 'super в классах вызывает методы родительского класса. Под капотом использует [[HomeObject]] для определения родителя. В обычных функциях super недоступен. В методах объектов super работает через __proto__. Понимание super важно для работы с наследованием и переопределением методов.',
    keyPoints: [
      'super.method(): вызывает метод родительского класса/прототипа.',
      'super в конструкторе: вызывает родительский конструктор.',
      '[[HomeObject]]: внутреннее свойство, определяющее родителя для super.',
      'В обычных функциях super недоступен, только в методах.',
      'super работает через цепочку прототипов.'
    ],
    tags: ['super', 'inheritance', 'prototype', 'classes', 'oop'],
    examples: [
      {
        title: "super в классах",
        code: `class Animal {\n  speak() {\n    return "Some sound";\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    return super.speak() + " - Woof!";\n  }\n}\n\nconst dog = new Dog();\nconsole.log(dog.speak()); // "Some sound - Woof!"`
      },
      {
        title: "super в конструкторе",
        code: `class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name); // вызывает Animal.constructor\n    this.breed = breed;\n  }\n}\n\nconst dog = new Dog("Rex", "Labrador");\nconsole.log(dog.name); // "Rex"\nconsole.log(dog.breed); // "Labrador"`
      },
      {
        title: "super в методах объектов",
        code: `const animal = {\n  speak() {\n    return "Some sound";\n  }\n};\n\nconst dog = {\n  __proto__: animal,\n  speak() {\n    return super.speak() + " - Woof!";\n  }\n};\n\nconsole.log(dog.speak()); // "Some sound - Woof!"\n\n// super работает только в методах, не в функциях\nconst speakFunc = dog.speak;\n// speakFunc(); // ошибка: super недоступен`
      },
      {
        title: "[[HomeObject]]",
        code: `// super использует [[HomeObject]] для определения родителя\nconst animal = {\n  name: "Animal",\n  getName() {\n    return this.name;\n  }\n};\n\nconst dog = {\n  __proto__: animal,\n  name: "Dog",\n  getName() {\n    // super.getName() эквивалентно:\n    // Object.getPrototypeOf(Object.getPrototypeOf(this)).getName.call(this)\n    return super.getName();\n  }\n};\n\nconsole.log(dog.getName()); // "Dog" (this = dog)`
      }
    ],
    relatedTopics: ['prototype-chain', 'classes', 'constructors'],
    nextTopicId: 'prototypes-vs-classes'
  },
  {
    id: 'prototypes-vs-classes',
    title: 'Прототипы vs Классы',
    difficulty: 'advanced',
    description: 'Классы — синтаксический сахар над прототипами. Под капотом классы используют прототипное наследование. Разница: синтаксис, hoisting (классы не всплывают), strict mode (классы всегда в strict). Понимание что классы = прототипы важно для отладки и работы с наследованием.',
    keyPoints: [
      'Классы — синтаксический сахар над прототипами.',
      'class extends использует прототипное наследование.',
      'Разница: синтаксис, hoisting, strict mode.',
      'Под капотом: классы создают функции-конструкторы и прототипы.',
      'Понимание эквивалентности важно для отладки.'
    ],
    tags: ['classes', 'prototypes', 'inheritance', 'oop', 'comparison'],
    examples: [
      {
        title: "Эквивалентность",
        code: `// Класс\nclass User {\n  constructor(name) {\n    this.name = name;\n  }\n  greet() {\n    return "Hello, " + this.name;\n  }\n}\n\n// Эквивалентный код через прототипы\nfunction User(name) {\n  this.name = name;\n}\nUser.prototype.greet = function() {\n  return "Hello, " + this.name;\n};\n\n// Оба работают одинаково\nconst user1 = new User("Alice");\nconst user2 = new User("Bob");\nconsole.log(user1.greet()); // "Hello, Alice"`
      },
      {
        title: "Наследование",
        code: `// Классы\nclass Animal {\n  speak() { return "Sound"; }\n}\nclass Dog extends Animal {\n  speak() { return "Woof"; }\n}\n\n// Эквивалент через прототипы\nfunction Animal() {}\nAnimal.prototype.speak = function() { return "Sound"; };\n\nfunction Dog() {}\nDog.prototype = Object.create(Animal.prototype);\nDog.prototype.constructor = Dog;\nDog.prototype.speak = function() { return "Woof"; };\n\n// Проверка\nconst dog1 = new Dog();\nconst dog2 = new Dog();\nconsole.log(dog1.speak()); // "Woof"\nconsole.log(Object.getPrototypeOf(dog1) === Dog.prototype); // true`
      },
      {
        title: "Различия",
        code: `// Hoisting\n// Классы не всплывают\n// new User(); // ReferenceError\nclass User {}\n\n// Функции-конструкторы всплывают\nnew UserFunc(); // OK\nfunction UserFunc() {}\n\n// Strict mode\nclass Test {\n  // Весь код в strict mode\n  method() {\n    x = 1; // ReferenceError\n  }\n}\n\n// Функции-конструкторы - зависит от контекста`
      },
      {
        title: "Что под капотом",
        code: `class User {\n  constructor(name) {\n    this.name = name;\n  }\n  static create() {\n    return new User("Default");\n  }\n}\n\n// Проверяем что создалось\nconsole.log(typeof User); // "function" (класс = функция)\nconsole.log(User.prototype); // { constructor: User, ... }\nconsole.log(User.create); // function (static метод)\n\n// Прототипная цепочка\nconst user = new User("Alice");\nconsole.log(user.__proto__ === User.prototype); // true\nconsole.log(User.prototype.constructor === User); // true`
      }
    ],
    relatedTopics: ['prototype-chain', 'classes', 'constructors'],
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

