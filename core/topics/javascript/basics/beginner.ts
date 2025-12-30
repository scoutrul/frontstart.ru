import { Topic } from '../../../types';

export const JS_BASICS_BEGINNER_TOPICS: Topic[] = [
{
    id: 'data-types',
    title: 'Типы данных и типизация',
    difficulty: 'beginner',
    description: 'JavaScript имеет 8 типов: 7 примитивов и объекты. Язык использует динамическую и слабую типизацию — типы определяются во время выполнения, переменные могут менять тип, происходит автоматическое преобразование типов при операциях.',
    keyPoints: [
      '8 типов: 7 примитивов (number, string, boolean, null, undefined, symbol, bigint) и объекты.',
      'Динамическая типизация: тип определяется во время выполнения, переменные могут менять тип.',
      'Слабая типизация: автоматическое преобразование типов при операциях ("5" + 3 = "53").',
      'Примитивы: передаются по значению, иммутабельны, копируются при присваивании.',
      'Объекты: передаются по ссылке, мутабельны, изменения влияют на все ссылки.',
      'Встроенные объекты: Object, Array, Function, Date, RegExp, Map, Set, WeakMap, WeakSet, Error, Promise, TypedArray, ArrayBuffer.',
      'Массивы и функции — это объекты, могут иметь свойства и методы.',
      'typeof null возвращает "object" — исторический баг языка.'
    ],
    funFact: 'В JavaScript массивы и функции технически являются объектами. Это означает, что можно добавлять им свойства, как обычным объектам, хотя это редко используется на практике. typeof null возвращает "object" из-за исторического бага в языке.',
    tags: ['types', 'primitives', 'objects', 'basics', 'references', 'dynamic-typing', 'weak-typing', 'type-coercion', 'collections', 'built-in-objects'],
    examples: [
      {
        title: "Проверка типов через typeof",
        code: `typeof 42; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"
typeof null; // "object" (баг языка!)
typeof undefined; // "undefined"
typeof []; // "object"
typeof {}; // "object"
typeof function() {}; // "function"`
      },
      {
        title: "Динамическая типизация - переменные могут менять тип",
        code: `let value = 42; // number
value = "hello"; // string (тип изменился)
value = true; // boolean (тип изменился)
value = {}; // object (тип изменился)

// В статически типизированных языках это невозможно`
      },
      {
        title: "Слабая типизация - автоматическое преобразование",
        code: `"5" + 3; // "53" (конкатенация)
"5" - 3; // 2 (преобразование в число)
"5" * "2"; // 10
!0; // true (преобразование в boolean)

// В строго типизированных языках это вызвало бы ошибку`
      },
      {
        title: "Примитивы vs объекты - передача по значению и ссылке",
        code: `// Примитивы - по значению
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 (не изменилось)

// Объекты - по ссылке
let obj1 = { x: 1 };
let obj2 = obj1;
obj2.x = 2;
console.log(obj1.x); // 2 (изменилось!)`
      },
      {
        title: "Массивы и функции - это объекты",
        code: `const arr = [1, 2];
arr.prop = "test";
console.log(arr.prop); // "test"

function fn() {}
fn.prop = "test";
console.log(fn.prop); // "test"

// Можно использовать методы объектов
Object.keys(arr); // ["0", "1", "2", "prop"]`
      },
      {
        title: "Встроенные объекты",
        code: `// Object
const obj = { name: "Alice" };

// Array
const arr = [1, 2, 3];

// Function
function fn() {}

// Date
const date = new Date();

// RegExp
const regex = /pattern/;

// Map и Set
const map = new Map();
const set = new Set();

// Promise
const promise = Promise.resolve();

// Error
const error = new Error('message');`
      },
      {
        title: "null — особый случай",
        code: `typeof null; // "object" (исторический баг)
null instanceof Object; // false
Object.prototype.toString.call(null); // "[object Null]"

// Правильная проверка:
value === null;`
      },
      {
        title: "Date, RegExp, Map, Set — ссылочные типы",
        code: `// Date — ссылочный тип
const date1 = new Date('2023-01-01');
const date2 = date1;
date2.setMonth(5);
console.log(date1.getMonth()); // 5 (изменилось!)

// RegExp — объект, передаётся по ссылке
const r1 = /a/g;
const r2 = r1;
r2.lastIndex = 3;
console.log(r1.lastIndex); // 3 (изменилось!)

// Map и Set — ссылочные коллекции
const map1 = new Map([['a', 1]]);
const map2 = map1;
map2.set('b', 2);
console.log(map1.has('b')); // true (изменилось!)`
      }
    ],
    relatedTopics: ['type-coercion', 'functions-types', 'comparison', 'objects-basic', 'arrays-basic', 'map-set', 'date-api']
  },
{
    id: 'type-coercion',
    title: 'Преобразование типов',
    difficulty: 'beginner',
    description: 'JavaScript автоматически преобразует типы при операциях. Явное преобразование через функции, неявное — при операциях.',
    keyPoints: [
      'Явное: Number("5"), String(5), Boolean(1).',
      'Неявное: "5" + 3 = "53" (конкатенация), "5" - 3 = 2 (преобразование в число).',
      'Truthy: все кроме false, 0, "", null, undefined, NaN.',
      'Falsy: false, 0, "", null, undefined, NaN.'
    ],
    funFact: 'Оператор + ведет себя по-разному: со строками — конкатенация, с числами — сложение. Поэтому "5" + 3 = "53", а "5" - 3 = 2.',
    tags: ['types', 'coercion', 'conversion', 'type-coercion', 'truthy-falsy'],
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
    relatedTopics: ['data-types', 'comparison']
  },
  {
    id: 'comparison',
    title: '== vs ===',
    difficulty: 'beginner',
    description: 'JavaScript поддерживает два типа сравнения: строгое (===) и нестрогое (==). Разница в том, что нестрогое сравнение выполняет неявное приведение типов перед сравнением, а строгое — проверяет значение и тип одновременно. Объекты и массивы всегда считаются true в логическом контексте, но сравниваются по ссылке, а не по содержимому.',
    keyPoints: [
      'Нестрогое сравнение (==) приводит операнды к примитивным типам перед сравнением.',
      'Строгое сравнение (===) не делает приведение типов, сравниваются только одинаковые типы.',
      'Объекты и массивы всегда считаются true в логическом контексте, но сравниваются по ссылке, а не по содержимому.',
      'Специальные случаи: NaN не равен NaN, +0 и -0 могут вести себя неожиданно при сравнении.',
      'Object.is() и Number.isNaN() позволяют корректно проверять значения в случаях, где == и === дают неожиданные результаты.'
    ],
    funFact: 'Object.is() и Number.isNaN() позволяют корректно проверять значения в случаях, где == и === дают неожиданные результаты: Object.is(NaN, NaN) возвращает true, Object.is(+0, -0) возвращает false, Number.isNaN(NaN) возвращает true.',
    tags: ['comparison', 'operators', 'equality', 'type-coercion', 'strict-equality', 'object.is'],
    examples: [
      {
        title: "Неявное приведение и нестрогое сравнение",
        code: `'5' == 5;        // true, строка приводится к числу
0 == false;      // true, false → 0
null == undefined; // true
'' == 0;         // true
[] == false;     // true`
      },
      {
        title: "Строгое сравнение",
        code: `'5' === 5;       // false, разные типы
0 === false;     // false
null === undefined; // false
'' === 0;        // false
[] === false;    // false`
      },
      {
        title: "Сравнение объектов",
        code: `const a = [1, 2];
const b = [1, 2];

console.log(a == b);   // false, разные ссылки
console.log(a === b);  // false, разные ссылки
console.log(a || b);   // true, объекты всегда truthy

// Объекты сравниваются по ссылке, не по содержимому
const obj1 = { x: 1 };
const obj2 = { x: 1 };
console.log(obj1 === obj2); // false (разные ссылки)`
      },
      {
        title: "Использование Object.is",
        code: `// Object.is для специальных случаев
Object.is(NaN, NaN);   // true (в отличие от ===)
Object.is(+0, -0);     // false (в отличие от ===)

// Number.isNaN для проверки NaN
Number.isNaN(NaN);     // true
Number.isNaN('NaN');   // false (в отличие от isNaN)

// Сравнение с ===
NaN === NaN;           // false
+0 === -0;             // true`
      },
      {
        title: "Специальные случаи",
        code: `// NaN не равен самому себе
NaN === NaN;           // false
NaN == NaN;            // false

// Правильная проверка
Number.isNaN(NaN);     // true
Object.is(NaN, NaN);   // true

// +0 и -0
+0 === -0;             // true
Object.is(+0, -0);     // false`
      }
    ],
    relatedTopics: ['type-coercion', 'operators', 'objects-basic']
  },
  {
    id: 'operators',
    title: 'Операторы',
    difficulty: 'beginner',
    description: 'Оператор — синтаксическая конструкция, выполняющая действие над операндами. JavaScript поддерживает арифметические, логические, сравнения, присваивания и специальные операторы.',
    keyPoints: [
      'Три типа: выражения (возвращают значение), операторы-объявления (var/let/const), операторы управления (if/for/return).',
      'Арифметические: +, -, *, /, %, ** (возведение в степень).',
      'Сравнения: == (нестрогое), === (строгое), !=, !==, <, >, <=, >=.',
      'Логические: && и || возвращают последнее вычисленное значение, не boolean; ! — инверсия.',
      'Присваивания: =, +=, -=, *=, /=, %=, **=.',
      'Унарные: ++/-- (инкремент/декремент), typeof, delete, унарные +/-.',
      'Побитовые: &, |, ^, ~, <<, >>, >>> (работа с битами).',
      'Специальные: ?? (nullish coalescing), ?. (optional chaining), ... (spread/rest), ?: (тернарный).'
    ],
    funFact: 'Логические операторы && и || возвращают последнее вычисленное значение, а не boolean. Это позволяет использовать их для присваивания: const value = user && user.name;',
    tags: ['operators', 'spread', 'optional-chaining', 'nullish-coalescing', 'arithmetic', 'logical'],
    examples: [
      {
        title: "Разграничение типов операторов",
        code: `// Выражения (возвращают значение)\na + b; // арифметическое выражение\nx = 1; // выражение присваивания\nfoo(); // выражение вызова функции\n\n// Операторы-объявления\nvar x = 1;\nlet y = 2;\nconst z = 3;\nfunction fn() {}\n\n// Операторы управления\nif (condition) { }\nfor (let i = 0; i < 10; i++) { }\nreturn value;\nbreak; continue;`
      },
      {
        title: "Арифметические операторы",
        code: `10 + 5; // 15 (сложение)\n10 - 5; // 5 (вычитание)\n10 * 5; // 50 (умножение)\n10 / 5; // 2 (деление)\n10 % 3; // 1 (остаток от деления)\n2 ** 3; // 8 (возведение в степень)`
      },
      {
        title: "Операторы сравнения",
        code: `5 == "5"; // true (нестрогое)\n5 === "5"; // false (строгое)\n5 != "5"; // false\n5 !== "5"; // true\n10 > 5; // true\n10 <= 10; // true`
      },
      {
        title: "Логические операторы",
        code: `true && "text"; // "text"\nfalse || "default"; // "default"\n!0; // true\n\nconst result = user && user.name; // старый способ\nconst name = user?.name; // новый способ`
      },
      {
        title: "Унарные операторы",
        code: `let x = 5;\n+x; // 5 (унарный плюс)\n-x; // -5 (унарный минус)\n++x; // 6 (префиксный инкремент)\nx--; // 6, затем x = 5 (постфиксный декремент)\ntypeof x; // "number"\ndelete obj.prop; // удаляет свойство`
      },
      {
        title: "Побитовые операторы",
        code: `5 & 3; // 1 (AND: 101 & 011 = 001)\n5 | 3; // 7 (OR: 101 | 011 = 111)\n5 ^ 3; // 6 (XOR: 101 ^ 011 = 110)\n~5; // -6 (NOT: ~101 = ...11111010)\n5 << 1; // 10 (сдвиг влево: 101 << 1 = 1010)\n5 >> 1; // 2 (сдвиг вправо: 101 >> 1 = 10)`
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
  },
{
    id: 'strings-methods',
    title: 'Строки (методы)',
    difficulty: 'beginner',
    description: 'Строки иммутабельны — методы возвращают новую строку. Шаблонные строки позволяют интерполяцию и многострочность.',
    keyPoints: [
      'slice(start, end): извлекает подстроку, отрицательные индексы с конца.',
      'substring(start, end): как slice, но отрицательные индексы = 0.',
      'includes(str): проверяет наличие подстроки, возвращает boolean.',
      'Шаблонные строки: интерполяция ${} и многострочность.'
    ],
    funFact: 'Строки в JavaScript неизменяемы (immutable), но это не означает, что переменная не может быть переназначена. Изменяется ссылка, а не сам объект строки.',
    tags: ['strings', 'methods', 'template-literals', 'immutability', 'string-api'],
    examples: [
      {
        title: "Методы строк",
        code: `const str = "Hello World";\nstr.slice(0, 5); // "Hello"\nstr.slice(-5); // "World"\nstr.substring(0, 5); // "Hello"\nstr.includes("World"); // true\nstr.indexOf("o"); // 4`
      },
      {
        title: "Шаблонные строки",
        code: `const name = "Alice";\nconst age = 30;\nconst msg = "Hello, I'm " + name + " and I'm " + age + " years old";\n// "Hello, I'm Alice and I'm 30 years old"\n\nconst multi = "Line 1\\nLine 2\\nLine 3";`
      },
      {
        title: "Другие методы",
        code: `const str = "  hello world  ";\nstr.trim(); // "hello world"\nstr.toUpperCase(); // "  HELLO WORLD  "\nstr.toLowerCase(); // "  hello world  "\nstr.replace("world", "JS"); // "  hello JS  "`
      }
    ],
    relatedTopics: ['data-types', 'operators'],
  },
{
    id: 'conditions-loops',
    title: 'Условия и циклы',
    difficulty: 'beginner',
    description: 'Условия: if/else, switch, тернарный оператор. Циклы: for, while, for...of, for...in. break прерывает цикл, continue пропускает итерацию.',
    keyPoints: [
      'if/else: базовое условие, можно вкладывать.',
      'switch: строгое сравнение (===), нужен break.',
      'for...of: итерация по значениям (массивы, строки).',
      'for...in: итерация по ключам объектов (включая прототип).'
    ],
    funFact: 'for...in итерируется по всем перечисляемым свойствам объекта, включая унаследованные из прототипа. Для массивов лучше использовать for...of.',
    tags: ['conditions', 'loops', 'if', 'for', 'while', 'iteration', 'control-flow'],
    examples: [
      {
        title: "if/else и switch",
        code: `const age = 18;\nif (age >= 18) {\n  console.log("Adult");\n} else {\n  console.log("Minor");\n}\n\nconst day = "Mon";\nswitch(day) {\n  case "Mon": console.log("Monday"); break;\n  case "Tue": console.log("Tuesday"); break;\n  default: console.log("Other");\n}`
      },
      {
        title: "for и while",
        code: `for (let i = 0; i < 3; i++) {\n  console.log(i); // 0, 1, 2\n}\n\nlet j = 0;\nwhile (j < 3) {\n  console.log(j);\n  j++;\n}`
      },
      {
        title: "for...of и for...in",
        code: `const arr = [10, 20, 30];\nfor (const value of arr) {\n  console.log(value); // 10, 20, 30\n}\n\nconst obj = { a: 1, b: 2 };\nfor (const key in obj) {\n  console.log(key, obj[key]); // "a" 1, "b" 2\n}`
      }
    ],
    relatedTopics: ['operators', 'comparison']
  },
{
    id: 'json-methods',
    title: 'JSON методы',
    difficulty: 'beginner',
    description: 'JSON.parse() преобразует JSON строку в объект, JSON.stringify() — объект в JSON строку. При ошибке parse выбрасывает SyntaxError.',
    keyPoints: [
      'JSON.parse(str): преобразует JSON строку в объект.',
      'JSON.stringify(obj): преобразует объект в JSON строку.',
      'Ошибки: parse выбрасывает SyntaxError при невалидном JSON.',
      'replacer: функция или массив для фильтрации свойств.',
      'space: форматирование (отступы) в результирующей строке.',
      'Пропускаются: undefined, функции, Symbol.',
      'Date преобразуется в строку ISO, при parse остается строкой.',
      'Циклические ссылки вызывают TypeError в stringify.',
      'BigInt вызывает TypeError в stringify.'
    ],
    additionalDescription: 'stringify может принимать replacer (функция или массив для фильтрации свойств) и space (отступы для форматирования). Ограничения: undefined, функции, Symbol пропускаются. Date преобразуется в строку ISO. Циклические ссылки вызывают TypeError. BigInt не поддерживается и требует преобразования в строку.',
    funFact: 'JSON.stringify() был добавлен в ES5 и стал стандартом для обмена данными между клиентом и сервером. Название JSON расшифровывается как JavaScript Object Notation, хотя формат не зависит от JavaScript.',
    tags: ['json', 'serialization', 'parsing', 'data', 'objects-advanced', 'api'],
    examples: [
      {
        title: "Базовое использование",
        code: `const obj = { name: "Alice", age: 30 };\nconst json = JSON.stringify(obj);\n// '{"name":"Alice","age":30}'\n\nconst parsed = JSON.parse(json);\n// { name: "Alice", age: 30 }`
      },
      {
        title: "Обработка ошибок",
        code: `try {\n  const obj = JSON.parse('invalid json');\n} catch (e) {\n  console.error("Parse error:", e.message);\n}\n\n// Безопасный парсинг\nfunction safeParse(str) {\n  try {\n    return JSON.parse(str);\n  } catch {\n    return null;\n  }\n}`
      },
      {
        title: "replacer и space",
        code: `const obj = { name: "Alice", age: 30, password: "secret" };\n\n// replacer: исключить password\nJSON.stringify(obj, ["name", "age"]);\n// '{"name":"Alice","age":30}'\n\n// space: форматирование\nJSON.stringify(obj, null, 2);\n// {\n//   "name": "Alice",\n//   "age": 30\n// }`
      },
      {
        title: "Пропускаемые значения",
        code: `const obj = {\n  name: "Alice",\n  age: undefined, // пропускается\n  fn: function() {}, // пропускается\n  sym: Symbol("id"), // пропускается\n  date: new Date() // преобразуется в строку\n};\n\nJSON.stringify(obj);\n// '{"name":"Alice","date":"2023-12-25T10:00:00.000Z"}'\n\n// При parse Date остается строкой\nconst parsed = JSON.parse(JSON.stringify(obj));\nconsole.log(typeof parsed.date); // "string"`
      },
      {
        title: "Циклические ссылки - ошибка",
        code: `const obj = { name: "Alice" };\nobj.self = obj; // циклическая ссылка\n\n// TypeError: Converting circular structure to JSON\n// JSON.stringify(obj);\n\n// Решение: использовать replacer\nfunction removeCircular(obj, seen = new WeakSet()) {\n  return JSON.stringify(obj, (key, value) => {\n    if (typeof value === 'object' && value !== null) {\n      if (seen.has(value)) return '[Circular]';\n      seen.add(value);\n    }\n    return value;\n  });\n}`
      },
      {
        title: "BigInt не поддерживается",
        code: `const obj = { id: BigInt(123) };\n\n// TypeError: Do not know how to serialize a BigInt\n// JSON.stringify(obj);\n\n// Решение: преобразовать в строку\nconst obj2 = { id: String(BigInt(123)) };\nJSON.stringify(obj2); // '{"id":"123"}'`
      }
    ],
    relatedTopics: ['objects-basic', 'strings-methods', 'object-copying']
  },
{
    id: 'object-methods',
    title: 'Методы Object',
    difficulty: 'beginner',
    description: 'Object.keys(), values(), entries() для итерации. Object.assign() для копирования. Object.freeze(), seal(), preventExtensions() для защиты от изменений.',
    keyPoints: [
      'Object.keys(obj): массив ключей объекта.',
      'Object.values(obj): массив значений объекта.',
      'Object.entries(obj): массив пар [ключ, значение].',
      'Object.assign(target, ...sources): копирует свойства в target.',
      'Object.freeze(obj): полная блокировка (нельзя добавлять/удалять/изменять).',
      'Object.seal(obj): нельзя добавлять/удалять, можно изменять существующие.',
      'Object.preventExtensions(obj): нельзя добавлять новые свойства.',
      'Проверка: isFrozen(), isSealed(), isExtensible().'
    ],
    additionalDescription: 'Object.freeze() делает объект полностью неизменяемым — нельзя добавлять, удалять или изменять свойства. Object.seal() запрещает добавлять/удалять, но позволяет изменять существующие. Object.preventExtensions() запрещает только добавление новых свойств. Все методы работают поверхностно — вложенные объекты не защищаются.',
    funFact: 'Object.freeze() был добавлен в ES5 для создания иммутабельных объектов. В React это используется для предотвращения случайных мутаций состояния.',
    tags: ['objects', 'methods', 'iteration', 'immutability', 'objects-advanced', 'object-api'],
    examples: [
      {
        title: "keys, values, entries",
        code: `const obj = { a: 1, b: 2, c: 3 };\n\nObject.keys(obj); // ["a", "b", "c"]\nObject.values(obj); // [1, 2, 3]\nObject.entries(obj); // [["a", 1], ["b", 2], ["c", 3]]\n\n// Итерация через entries\nfor (const [key, value] of Object.entries(obj)) {\n  console.log(key, value);\n}`
      },
      {
        title: "Object.assign",
        code: `const target = { a: 1 };\nconst source1 = { b: 2 };\nconst source2 = { c: 3 };\n\nObject.assign(target, source1, source2);\n// target = { a: 1, b: 2, c: 3 }\n\n// Поверхностное копирование\nconst copy = Object.assign({}, target);`
      },
      {
        title: "Object.freeze - полная блокировка",
        code: `const obj = { name: "Alice" };\nObject.freeze(obj);\n\nobj.name = "Bob"; // Игнорируется в strict mode (TypeError)\nobj.age = 30; // Игнорируется\ndelete obj.name; // Игнорируется\n\nObject.isFrozen(obj); // true\n\n// Вложенные объекты не замораживаются\nconst nested = { user: { name: "Alice" } };\nObject.freeze(nested);\nnested.user.name = "Bob"; // Работает! (поверхностное)`
      },
      {
        title: "Object.seal - можно изменять, нельзя добавлять/удалять",
        code: `const obj = { name: "Alice" };\nObject.seal(obj);\n\nobj.name = "Bob"; // OK (можно изменять)\nobj.age = 30; // Игнорируется (нельзя добавлять)\ndelete obj.name; // Игнорируется (нельзя удалять)\n\nObject.isSealed(obj); // true`
      },
      {
        title: "Object.preventExtensions - только запрет добавления",
        code: `const obj = { name: "Alice" };\nObject.preventExtensions(obj);\n\nobj.name = "Bob"; // OK (можно изменять)\ndelete obj.name; // OK (можно удалять)\nobj.age = 30; // Игнорируется (нельзя добавлять)\n\nObject.isExtensible(obj); // false`
      }
    ],
    relatedTopics: ['objects-basic', 'destructuring-basic', 'arrays-basic', 'object-copying']
  },
{
    id: 'date-api',
    title: 'Date API',
    difficulty: 'beginner',
    description: 'Date создает объект даты. new Date() — текущая дата, new Date(timestamp) — из timestamp, new Date(year, month, day) — из компонентов.',
    keyPoints: [
      'new Date(): текущая дата и время.',
      'new Date(timestamp): из миллисекунд с 1970-01-01.',
      'new Date(year, month, day): из компонентов (месяц 0-11).',
      'getTime(): timestamp в миллисекундах.',
      'toISOString(): строка в формате ISO 8601.'
    ],
    funFact: 'Месяцы в JavaScript начинаются с 0 (январь = 0, декабрь = 11), что часто вызывает путаницу. Это наследие из языка C и Unix-систем.',
    tags: ['date', 'time', 'formatting', 'api', 'date-api'],
    examples: [
      {
        title: "Создание дат",
        code: `const now = new Date();\nconst timestamp = new Date(1609459200000); // 2021-01-01\nconst specific = new Date(2023, 11, 25); // 25 декабря 2023 (месяц 0-11)\n\nconsole.log(now); // текущая дата`
      },
      {
        title: "Методы получения",
        code: `const date = new Date(2023, 11, 25, 14, 30, 0);\n\ndate.getFullYear(); // 2023\ndate.getMonth(); // 11 (декабрь, 0-11)\ndate.getDate(); // 25\ndate.getDay(); // 1 (понедельник, 0-6)\ndate.getHours(); // 14\ndate.getMinutes(); // 30`
      },
      {
        title: "Форматирование",
        code: `const date = new Date();\n\ndate.toISOString(); // "2023-12-25T14:30:00.000Z"\ndate.toLocaleString('ru-RU'); // "25.12.2023, 14:30:00"\ndate.toLocaleDateString('ru-RU'); // "25.12.2023"\ndate.getTime(); // timestamp в миллисекундах`
      }
    ],
    relatedTopics: ['objects-basic', 'strings-methods']
  },
{
    id: 'strict-mode',
    title: 'Строгий и нестрогий режимы',
    difficulty: 'beginner',
    description: 'Строгий режим делает JavaScript более безопасным и предсказуемым, запрещая небезопасные практики. Современные инструменты разработки используют его по умолчанию.',
    keyPoints: [
      "'use strict': включается в начале файла или функции.",
      'Запрещает неявные глобальные переменные (без var/let/const).',
      'Запрещает дублирование параметров функции.',
      'this в функциях = undefined (не window).',
      'Современные фреймворки используют строгий режим по умолчанию.',
      'Улучшает производительность и помогает находить ошибки.'
    ],
    funFact: 'Строгий режим был введен в ES5 (2009) для исправления ошибок языка. Интересно, что "use strict" — это обычная строка, которая игнорируется старыми движками, но активирует строгий режим в новых.',
    tags: ['strict-mode', 'best-practices', 'errors', 'performance', 'this'],
    examples: [
      {
        title: "Включение strict mode",
        code: `"use strict";\n\n// Файл целиком в strict mode\nfunction test() {\n  "use strict";\n  // Только функция в strict mode\n}`
      },
      {
        title: "Запрет неявных глобальных",
        code: `"use strict";\n\n// Ошибка: переменная не объявлена\nx = 10; // ReferenceError\n\n// В обычном режиме создалась бы глобальная переменная\n// В strict mode - ошибка`
      },
      {
        title: "this в strict mode",
        code: `"use strict";\n\nfunction test() {\n  console.log(this); // undefined\n}\n\ntest();\n\n// В обычном режиме this = window (в браузере)\n// В strict mode this = undefined`
      },
      {
        title: "Современные инструменты",
        code: `// ES6 модули автоматически в strict mode\nexport const x = 1;\n\n// Webpack, Babel, TypeScript используют strict mode\n// Классы автоматически в strict mode\nclass MyClass {\n  constructor() {\n    // В конструкторе this указывает на экземпляр класса\n    this.name = 'Example';\n    console.log(this); // MyClass { name: 'Example' }\n  }\n  \n  method() {\n    // В методах класса this также указывает на экземпляр\n    return this.name;\n  }\n}\n\n// В обычных функциях (вызванных без контекста) в strict mode:\nfunction regularFunction() {\n  console.log(this); // undefined (в strict mode)\n}\n\nregularFunction(); // undefined`
      }
    ],
    relatedTopics: ['var-let-const', 'this-basics', 'functions-types', 'modules']
  }
];
