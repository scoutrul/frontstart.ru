import { Topic } from '../../../types';

export const JS_PROTOTYPES_ADVANCED_TOPICS: Topic[] = [
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
    isFrontendEssential: true
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
    isFrontendEssential: true
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
    isFrontendEssential: true
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
  }
];
