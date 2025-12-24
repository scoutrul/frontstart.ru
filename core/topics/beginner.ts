import { Topic } from '../types';

export const BEGINNER_TOPICS: Topic[] = [
  {
    id: 'data-types',
    title: 'Типы данных',
    difficulty: 'beginner',
    description: 'JavaScript имеет 8 типов: 7 примитивов (number, string, boolean, null, undefined, symbol, bigint) и объекты. typeof возвращает строку с типом. null имеет тип "object" (баг языка). Примитивы передаются по значению, объекты по ссылке.',
    keyPoints: [
      'Примитивы: number, string, boolean, null, undefined, symbol, bigint.',
      'Объекты: все остальное (массивы, функции, даты — это объекты).',
      'typeof null возвращает "object" (исторический баг).',
      'Примитивы иммутабельны, объекты мутабельны.'
    ],
    tags: ['types', 'primitives', 'objects', 'basics'],
    examples: [
      {
        title: "Проверка типов",
        code: `typeof 42; // "number"\ntypeof "text"; // "string"\ntypeof true; // "boolean"\ntypeof null; // "object" (баг!)\ntypeof undefined; // "undefined"\ntypeof []; // "object"\ntypeof {}; // "object"`
      },
      {
        title: "Примитивы vs объекты",
        code: `let a = 5;\nlet b = a;\nb = 10;\nconsole.log(a); // 5 (не изменилось)\n\nlet obj1 = { x: 1 };\nlet obj2 = obj1;\nobj2.x = 2;\nconsole.log(obj1.x); // 2 (изменилось!)`
      }
    ],
    relatedTopics: ['type-coercion', 'functions-types'],
    nextTopicId: 'type-coercion'
  },
  {
    id: 'type-coercion',
    title: 'Преобразование типов',
    difficulty: 'beginner',
    description: 'JavaScript автоматически преобразует типы при операциях. Явное: Number(), String(), Boolean(). Неявное: при сравнении, арифметике, конкатенации. "5" + 3 = "53", "5" - 3 = 2. Truthy значения: все кроме false, 0, "", null, undefined, NaN.',
    keyPoints: [
      'Явное: Number("5"), String(5), Boolean(1).',
      'Неявное: "5" + 3 = "53", "5" - 3 = 2.',
      'Truthy: все кроме false, 0, "", null, undefined, NaN.',
      'Falsy: false, 0, "", null, undefined, NaN.'
    ],
    tags: ['types', 'coercion', 'conversion'],
    examples: [
      {
        title: "Неявное преобразование",
        code: `"5" + 3; // "53" (конкатенация)\n"5" - 3; // 2 (преобразование в число)\n"5" * "2"; // 10\n!0; // true (преобразование в boolean)`
      },
      {
        title: "Явное преобразование",
        code: `Number("42"); // 42\nString(42); // "42"\nBoolean(1); // true\nBoolean(0); // false`
      },
      {
        title: "Truthy/Falsy",
        code: `if ("text") { } // truthy\nif (0) { } // falsy\nif ([]) { } // truthy (массив)\nif ({}) { } // truthy (объект)`
      }
    ],
    relatedTopics: ['data-types', 'comparison'],
    nextTopicId: 'comparison'
  },
  {
    id: 'comparison',
    title: '== vs ===',
    difficulty: 'beginner',
    description: '== выполняет приведение типов перед сравнением, === сравнивает без приведения (строгое). Всегда используй ===. == может давать неожиданные результаты: null == undefined (true), "5" == 5 (true), [] == false (true).',
    keyPoints: [
      '== (нестрогое): приводит типы, может давать неожиданные результаты.',
      '=== (строгое): сравнивает тип и значение, всегда используй это.',
      'null == undefined (true), но null !== undefined (false).',
      'NaN !== NaN (true), используй isNaN() или Number.isNaN().'
    ],
    tags: ['comparison', 'operators', 'equality'],
    examples: [
      {
        title: "Нестрогое сравнение (==)",
        code: `"5" == 5; // true\nnull == undefined; // true\n0 == false; // true\n[] == false; // true\n"" == 0; // true`
      },
      {
        title: "Строгое сравнение (===)",
        code: `"5" === 5; // false\nnull === undefined; // false\n0 === false; // false\n[] === false; // false\n"" === 0; // false`
      },
      {
        title: "Особые случаи",
        code: `NaN === NaN; // false\nisNaN(NaN); // true\nNumber.isNaN(NaN); // true\n\nObject.is(NaN, NaN); // true`
      }
    ],
    relatedTopics: ['type-coercion', 'operators'],
    nextTopicId: 'operators'
  },
  {
    id: 'operators',
    title: 'Операторы',
    difficulty: 'beginner',
    description: 'Арифметические: +, -, *, /, %, **. Логические: &&, ||, !. Тернарный: условие ? true : false. Spread: ...arr, ...obj. Оператор нулевого слияния: ?? (возвращает правую часть если левая null/undefined). Опциональная цепочка: ?. (безопасный доступ к свойствам).',
    keyPoints: [
      'Логические && и || возвращают последнее вычисленное значение, не boolean.',
      '?? возвращает правую часть только если левая null/undefined.',
      '?. безопасно обращается к свойствам, возвращает undefined при ошибке.',
      'Spread копирует массив/объект поверхностно.'
    ],
    tags: ['operators', 'spread', 'optional-chaining', 'nullish-coalescing'],
    examples: [
      {
        title: "Логические операторы",
        code: `true && "text"; // "text"\nfalse || "default"; // "default"\n!0; // true\n\nconst result = user && user.name; // старый способ\nconst name = user?.name; // новый способ`
      },
      {
        title: "Тернарный оператор",
        code: `const age = 18;\nconst status = age >= 18 ? "adult" : "minor";\n// эквивалентно if/else`
      },
      {
        title: "Nullish coalescing (??)",
        code: `const value = null ?? "default"; // "default"\nconst value2 = 0 ?? "default"; // 0 (не null/undefined)\nconst value3 = "" ?? "default"; // "" (не null/undefined)`
      },
      {
        title: "Опциональная цепочка (?.)",
        code: `user?.address?.city; // undefined если user или address null\nuser?.getName?.(); // вызов метода если существует\narr?.[0]; // доступ к элементу если массив существует`
      },
      {
        title: "Spread оператор",
        code: `const arr1 = [1, 2];\nconst arr2 = [...arr1, 3]; // [1, 2, 3]\n\nconst obj1 = { a: 1 };\nconst obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }`
      }
    ],
    relatedTopics: ['comparison', 'functions-types'],
    nextTopicId: 'functions-types'
  },
  {
    id: 'functions-types',
    title: 'Типы функций',
    difficulty: 'beginner',
    description: 'Function Declaration: function name() {} — всплывает. Function Expression: const fn = function() {} — не всплывает. Arrow Function: const fn = () => {} — нет this, arguments, нельзя использовать как конструктор. IIFE: (function() {})() — самовызывающаяся функция. Методы объекта: obj.method = function() {}.',
    keyPoints: [
      'Function Declaration всплывает, можно вызывать до объявления.',
      'Function Expression не всплывает, присваивается переменной.',
      'Arrow Function: нет this, arguments, super, нельзя new.',
      'IIFE изолирует область видимости, используется для модулей.'
    ],
    tags: ['functions', 'arrow-functions', 'declaration', 'expression'],
    examples: [
      {
        title: "Function Declaration",
        code: `sayHi(); // работает (всплывает)\nfunction sayHi() {\n  console.log("Hi");\n}`
      },
      {
        title: "Function Expression",
        code: `// sayHi(); // ошибка (не всплывает)\nconst sayHi = function() {\n  console.log("Hi");\n};`
      },
      {
        title: "Arrow Function",
        code: `const add = (a, b) => a + b;\nconst greet = name => "Hello " + name;\nconst log = () => console.log("Hi");\n\n// Нет this, arguments\nconst obj = {\n  name: "Test",\n  arrow: () => this.name, // undefined\n  regular: function() { return this.name; } // "Test"\n};`
      },
      {
        title: "IIFE (Immediately Invoked Function Expression)",
        code: `(function() {\n  const private = "secret";\n  // изолированная область видимости\n})();\n\n// Современная альтернатива — блок кода\n{\n  const private = "secret";\n}`
      }
    ],
    relatedTopics: ['data-types', 'hoisting-basic', 'this-basics'],
    nextTopicId: 'var-let-const'
  },
  {
    id: 'var-let-const',
    title: 'var, let, const',
    difficulty: 'beginner',
    description: 'var имеет функциональную область видимости и всплывает с undefined. let и const имеют блочную область видимости и не всплывают. const запрещает переприсваивание ссылки, но не делает объект неизменяемым. Используй const по умолчанию, let когда нужно переприсваивать, var не используй.',
    keyPoints: [
      'var: функциональная область видимости, допускает повторное объявление, всплывает (hoisting).',
      'let/const: блочная область видимости, не допускают повторного объявления.',
      'const требует инициализации и запрещает переопределение ссылки.'
    ],
    tags: ['variables', 'scope', 'let', 'const', 'hoisting', 'ES6'],
    examples: [
      {
        title: "Разница областей видимости",
        code: `if (true) {\n  var x = 5;\n  let y = 10;\n}\nconsole.log(x); // 5\n// console.log(y); // ReferenceError`
      }
    ],
    relatedTopics: ['functions-types', 'hoisting-basic', 'tdz'],
    nextTopicId: 'hoisting-basic'
  },
  {
    id: 'hoisting-basic',
    title: 'Hoisting (Всплытие)',
    difficulty: 'beginner',
    description: 'JavaScript "поднимает" объявления var и function в начало области видимости. var доступна как undefined до присваивания, function доступна полностью. Это значит, что можно вызывать функцию до её объявления. let и const не всплывают так же — они в TDZ.',
    keyPoints: [
      'var всплывает и равна undefined до присваивания.',
      'Function Declaration всплывает полностью — можно вызывать до объявления.',
      'let/const не всплывают — вызов до объявления даст ошибку.'
    ],
    tags: ['hoisting', 'variables', 'functions'],
    examples: [
      {
        title: "Всплытие var и function",
        code: `console.log(x); // undefined (не ошибка!)\nvar x = 5;\n\nsayHi(); // "Hi" (работает!)\nfunction sayHi() { console.log("Hi"); }`
      },
      {
        title: "let/const не всплывают",
        code: `// console.log(y); // ReferenceError\nlet y = 10;`
      }
    ],
    relatedTopics: ['var-let-const', 'tdz'],
    nextTopicId: 'scope-chain'
  },
  {
    id: 'scope-chain',
    title: 'Scope Chain',
    difficulty: 'beginner',
    description: 'JavaScript ищет переменные от локальной области видимости к глобальной. Функция видит переменные родительских областей, но не наоборот. Поиск идет по цепочке до глобального scope. Это основа работы замыканий.',
    keyPoints: [
      'Поиск идет строго снизу вверх по иерархии.',
      'Функции имеют доступ к переменным родителей, но не наоборот.'
    ],
    tags: ['scope', 'closure', 'chain'],
    examples: [
      {
        title: "Поиск по цепочке",
        code: `const name = "Global";\nfunction outer() {\n  const name = "Outer";\n  function inner() {\n    console.log(name); // "Outer"\n  }\n  inner();\n}\nouter();`
      }
    ],
    relatedTopics: ['hoisting-basic', 'lexical-env', 'closures-basic'],
    nextTopicId: 'this-basics'
  },
  {
    id: 'this-basics',
    title: 'Контекст this',
    difficulty: 'beginner',
    description: 'this определяется в момент вызова, не при создании функции. В методе объекта — сам объект. В обычной функции (strict mode) — undefined. Через call/apply/bind — явно заданный объект. Через new — новый экземпляр. Стрелочные функции не имеют своего this.',
    keyPoints: [
      'В методе — ссылается на объект.',
      'В обычной функции (strict mode) — undefined.',
      'В глобальном контексте — window/global.'
    ],
    tags: ['this', 'context', 'objects'],
    examples: [
      {
        title: "Вызов метода",
        code: `const user = {\n  name: "Alice",\n  say() { console.log(this.name); }\n};\nuser.say(); // "Alice"`
      }
    ],
    relatedTopics: ['arrow-functions', 'context-loss'],
    nextTopicId: 'arrow-functions'
  }
];

