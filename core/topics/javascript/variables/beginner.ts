import { Topic } from '../../../types';

export const JS_VARIABLES_BEGINNER_TOPICS: Topic[] = [
{
    id: 'var-let-const',
    title: 'var, let, const',
    difficulty: 'beginner',
    description: 'var имеет функциональную область видимости и всплывает. let и const имеют блочную область видимости. const запрещает переприсваивание ссылки, но не делает объект неизменяемым.',
    keyPoints: [
      'var: функциональная область видимости, допускает повторное объявление, всплывает (hoisting).',
      'let/const: блочная область видимости, не допускают повторного объявления.',
      'const требует инициализации и запрещает переопределение ссылки.'
    ],
    funFact: 'const был добавлен в ES6 вместе с let. До этого использовался только var, что приводило к проблемам с областью видимости и hoisting.',
    tags: ['variables', 'scope', 'let', 'const', 'hoisting', 'ES6', 'variables-basic'],
    examples: [
      {
        title: "Разница областей видимости",
        code: `if (true) {\n  var x = 5;\n  let y = 10;\n}\nconsole.log(x); // 5\n// console.log(y); // ReferenceError`
      },
      {
        title: "Повторное объявление",
        code: `var a = 1;\nvar a = 2; // OK\n\nlet b = 1;\n// let b = 2; // SyntaxError\n\nconst c = 1;\n// c = 2; // TypeError`
      },
      {
        title: "const и объекты",
        code: `const obj = { x: 1 };\nobj.x = 2; // OK (изменение свойства)\nobj.y = 3; // OK (добавление свойства)\n// obj = {}; // TypeError (переприсваивание)`
      }
    ],
    relatedTopics: ['functions-types', 'hoisting-basic', 'tdz-basic', 'function-scope', 'block-scope', 'mutability-immutability'],
  },
{
    id: 'function-scope',
    title: 'Функциональная область видимости',
    difficulty: 'beginner',
    description: 'Функциональная область видимости создаётся функцией. Переменные var видны внутри всей функции, где объявлены, независимо от блоков. Функция создаёт свою область видимости.',
    keyPoints: [
      'Функция создаёт свою область видимости.',
      'var видна внутри всей функции, где объявлена.',
      'var, объявленная вне функции, становится свойством глобального объекта (window/global).',
      'Переменные var всплывают (hoisting) — объявление поднимается, присвоение остаётся на месте.'
    ],
    funFact: 'Функциональная область видимости — это наследие старых версий JavaScript. До ES6 (2015) это был единственный способ создания локальной области видимости, кроме глобальной.',
    tags: ['scope', 'function-scope', 'var', 'variables', 'hoisting', 'var-let-const', 'функциональная область видимости', 'область видимости'],
    examples: [
      {
        title: "Как работает функциональная область видимости",
        code: `function example() {
  console.log(a); // undefined — переменная всплыла
  var a = 10;
  console.log(a); // 10
}
example();

// JS под капотом делает примерно так:
// function example() {
//   var a;           // объявление всплыло
//   console.log(a);  // undefined
//   a = 10;          // присвоение остаётся на месте
//   console.log(a);  // 10
// }`
      },
      {
        title: "var видна внутри всей функции",
        code: `function test() {
  if (true) {
    var x = 5;  // видна во всей функции
  }
  console.log(x); // 5 — доступна вне блока if
}

function test2() {
  var y = 10;
  if (true) {
    console.log(y); // 10 — доступна внутри блока
  }
}`
      },
      {
        title: "var в глобальном контексте",
        code: `var g = 123;
console.log(window.g); // 123 (в браузере)
// var становится свойством глобального объекта

function local() {
  var localVar = 456;
  // window.localVar — undefined (локальная переменная)
}`
      },
      {
        title: "Изоляция между функциями",
        code: `function func1() {
  var x = 1;
  console.log(x); // 1
}

function func2() {
  var x = 2;  // независимая переменная
  console.log(x); // 2
}

func1();
func2();
// Каждая функция имеет свою область видимости`
      }
    ],
    relatedTopics: ['var-let-const', 'hoisting-basic', 'block-scope', 'scope-chain'],
  },
{
    id: 'block-scope',
    title: 'Блочная область видимости',
    difficulty: 'beginner',
    description: 'Блочная область видимости создаётся любым блоком { ... }. Переменные let и const видны только внутри блока, где объявлены. Это позволяет изолировать переменные в циклах, условиях и других блоках.',
    keyPoints: [
      'Блок { ... } создаёт свою область видимости.',
      'let/const видны только внутри блока, где объявлены.',
      'Каждая итерация цикла создаёт новую область видимости для let/const.',
      'Блочная область видимости предотвращает утечки переменных за пределы блока.'
    ],
    funFact: 'Блочная область видимости была добавлена в ES6 (2015) вместе с let и const. Это решило многие проблемы, связанные с var и функциональной областью видимости, особенно в циклах.',
    tags: ['scope', 'block-scope', 'let', 'const', 'variables', 'ES6', 'var-let-const', 'блочная область видимости', 'область видимости'],
    examples: [
      {
        title: "Как работает блочная область видимости",
        code: `{
  let b = 5;
  const c = 10;
  console.log(b, c); // 5, 10
}
console.log(b, c); // ReferenceError — переменные не видны вне блока

if (true) {
  let x = 1;
  const y = 2;
}
// console.log(x, y); // ReferenceError`
      },
      {
        title: "Блочная область в циклах",
        code: `// Каждая итерация создаёт новую область видимости
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // ReferenceError — i не существует за пределами цикла

// С var было бы иначе:
for (var j = 0; j < 3; j++) {
  // ...
}
console.log(j); // 3 — var видна вне цикла`
      },
      {
        title: "Изоляция в блоках",
        code: `{
  let a = 1;
  {
    let a = 2;  // независимая переменная
    console.log(a); // 2
  }
  console.log(a); // 1
}

// Каждый блок имеет свою область видимости`
      },
      {
        title: "Сравнение с функциональной областью",
        code: `// Функциональная область (var)
function test1() {
  if (true) {
    var x = 5;
  }
  console.log(x); // 5 — видна во всей функции
}

// Блочная область (let/const)
function test2() {
  if (true) {
    let y = 10;
  }
  // console.log(y); // ReferenceError — видна только в блоке
}`
      }
    ],
    relatedTopics: ['var-let-const', 'function-scope', 'tdz-basic', 'scope-chain'],
  },
{
    id: 'hoisting-basic',
    title: 'Hoisting (Всплытие)',
    difficulty: 'beginner',
    description: 'JavaScript "поднимает" объявления var и function в начало области видимости. var доступна как undefined до присваивания, function доступна полностью.',
    keyPoints: [
      'var всплывает и равна undefined до присваивания.',
      'Function Declaration всплывает полностью — можно вызывать до объявления.',
      'let/const не всплывают — вызов до объявления даст ошибку.'
    ],
    funFact: 'Hoisting — это не физическое перемещение кода, а концептуальное поведение движка JavaScript. Код остается на месте, но интерпретатор обрабатывает объявления до выполнения кода.',
    tags: ['hoisting', 'variables', 'functions', 'var-let-const'],
    examples: [
      {
        title: "Всплытие var и function",
        code: `console.log(x); // undefined (не ошибка!)\nvar x = 5;\n\nsayHi(); // "Hi" (работает!)\nfunction sayHi() { console.log("Hi"); }`
      },
      {
        title: "let/const не всплывают",
        code: `// console.log(y); // ReferenceError\nlet y = 10;`
      },
      {
        title: "Всплытие в функциях",
        code: `function test() {\n  console.log(a); // undefined\n  var a = 5;\n  \n  say(); // "Hi"\n  function say() { console.log("Hi"); }\n}`
      }
    ],
    relatedTopics: ['var-let-const', 'tdz-basic'],
  },
{
    id: 'tdz-basic',
    title: 'Temporal Dead Zone (TDZ)',
    difficulty: 'beginner',
    description: 'TDZ — период от начала блока до объявления let/const. Обращение к переменной в TDZ вызывает ReferenceError. var такой защиты не имеет.',
    keyPoints: [
      'TDZ начинается с входа в блок и заканчивается на строке объявления.',
      'let/const в TDZ вызывают ReferenceError, var возвращает undefined.',
      'Защищает от логических ошибок использования переменных до инициализации.'
    ],
    funFact: 'Название "Temporal Dead Zone" было придумано Алленом Вирфс-Броком (Allen Wirfs-Brock), одним из авторов спецификации ES6. Это временная зона, где переменная существует, но недоступна.',
    tags: ['tdz', 'variables', 'let', 'const', 'errors', 'hoisting-basic'],
    examples: [
      {
        title: "TDZ для let/const",
        code: `{\n  // console.log(x); // ReferenceError (TDZ)\n  let x = 5;\n  console.log(x); // 5 (OK)\n}`
      },
      {
        title: "var не имеет TDZ",
        code: `{\n  console.log(y); // undefined (не ошибка!)\n  var y = 10;\n}`
      },
      {
        title: "TDZ в циклах",
        code: `for (let i = 0; i < 3; i++) {\n  // console.log(i); // OK после инициализации\n  setTimeout(() => console.log(i), 100);\n}`
      }
    ],
    relatedTopics: ['hoisting-basic', 'var-let-const'],
  },
{
    id: 'scope-chain',
    title: 'Scope Chain',
    difficulty: 'beginner',
    description: 'JavaScript ищет переменные от локальной области видимости к глобальной. Функция видит переменные родительских областей, но не наоборот.',
    keyPoints: [
      'Поиск идет строго снизу вверх по иерархии.',
      'Функции имеют доступ к переменным родителей, но не наоборот.'
    ],
    funFact: 'Scope Chain формируется на этапе создания функции (lexical scoping), а не во время выполнения. Это позволяет функциям "запоминать" переменные из внешних областей видимости.',
    tags: ['scope', 'closure', 'chain', 'lexical-scoping', 'closures-basic'],
    examples: [
      {
        title: "Поиск по цепочке",
        code: `const name = "Global";\nfunction outer() {\n  const name = "Outer";\n  function inner() {\n    console.log(name); // "Outer"\n  }\n  inner();\n}\nouter();`
      },
      {
        title: "Доступ к глобальной переменной",
        code: `const global = "global";\nfunction test() {\n  console.log(global); // "global"\n  // локальной переменной нет\n}`
      },
      {
        title: "Вложенные функции",
        code: `function outer() {\n  const x = 1;\n  function middle() {\n    const y = 2;\n    function inner() {\n      console.log(x, y); // 1, 2\n    }\n    inner();\n  }\n  middle();\n}`
      }
    ],
    relatedTopics: ['hoisting-basic', 'lexical-env', 'closures-basic'],
  },
{
    id: 'mutability-immutability',
    title: 'Мутабельность и Иммутабельность',
    difficulty: 'beginner',
    description: 'Мутабельность — способность изменять данные после создания. Иммутабельность — данные нельзя изменить, создаётся новая копия. Примитивы иммутабельны, объекты мутабельны. const не делает объекты иммутабельными, только запрещает переприсваивание ссылки.',
    keyPoints: [
      'Примитивы (string, number, boolean, null, undefined, symbol, bigint) — иммутабельны.',
      'Объекты (Object, Array, Function и др.) — мутабельны.',
      'const запрещает переприсваивание ссылки, но не делает объект иммутабельным.',
      'Мутации объектов влияют на все ссылки на этот объект.',
      'Иммутабельные обновления создают новые объекты/массивы вместо изменения существующих.'
    ],
    funFact: 'В JavaScript строки технически иммутабельны, но это оптимизировано движком. При "изменении" строки создаётся новая строка, а старая может быть удалена сборщиком мусора, если на неё нет ссылок.',
    tags: ['mutability', 'immutability', 'mutable', 'immutable', 'const', 'objects', 'primitives', 'мутабельность', 'иммутабельность', 'var-let-const'],
    examples: [
      {
        title: "Примитивы иммутабельны",
        code: `let str = "Hello";
str.toUpperCase(); // возвращает новую строку "HELLO"
console.log(str); // "Hello" — оригинал не изменился

let num = 5;
num + 1; // возвращает 6
console.log(num); // 5 — оригинал не изменился

// Примитивы копируются при присваивании
let a = 10;
let b = a; // копия значения
b = 20;
console.log(a); // 10 — не изменилось`
      },
      {
        title: "Объекты мутабельны",
        code: `const obj = { x: 1, y: 2 };
obj.x = 10; // изменяем свойство
console.log(obj); // { x: 10, y: 2 }

const arr = [1, 2, 3];
arr.push(4); // изменяем массив
console.log(arr); // [1, 2, 3, 4]

// Объекты передаются по ссылке
const obj1 = { value: 1 };
const obj2 = obj1; // ссылка на тот же объект
obj2.value = 2;
console.log(obj1.value); // 2 — изменилось!`
      },
      {
        title: "const не делает объекты иммутабельными",
        code: `const obj = { name: "Alice" };
obj.name = "Bob"; // OK — можно изменять свойства
obj.age = 30; // OK — можно добавлять свойства
delete obj.name; // OK — можно удалять свойства

// obj = {}; // TypeError — нельзя переприсваивать ссылку

const arr = [1, 2, 3];
arr.push(4); // OK — можно изменять массив
arr[0] = 10; // OK — можно изменять элементы

// arr = []; // TypeError — нельзя переприсваивать ссылку`
      },
      {
        title: "Иммутабельные обновления",
        code: `// Вместо мутации создаём новый объект
const user = { name: "Alice", age: 20 };
const updatedUser = { ...user, age: 21 }; // новый объект
console.log(user); // { name: "Alice", age: 20 } — не изменился

// Вместо мутации создаём новый массив
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // новый массив
console.log(numbers); // [1, 2, 3] — не изменился

// Или используем методы, которые возвращают новый массив
const doubled = numbers.map(x => x * 2); // [2, 4, 6]
const filtered = numbers.filter(x => x > 1); // [2, 3]
// numbers остался [1, 2, 3]`
      },
      {
        title: "Проблема мутаций",
        code: `const original = { a: 1, nested: { b: 2 } };
const copy = original; // ссылка на тот же объект

copy.a = 10; // изменяем копию
console.log(original.a); // 10 — оригинал тоже изменился!

copy.nested.b = 20; // изменяем вложенный объект
console.log(original.nested.b); // 20 — оригинал изменился!

// Правильное копирование
const correctCopy = { ...original, nested: { ...original.nested } };
correctCopy.nested.b = 30;
console.log(original.nested.b); // 20 — оригинал не изменился`
      }
    ],
    relatedTopics: ['var-let-const', 'data-types-overview', 'immutability'],
  }
];
