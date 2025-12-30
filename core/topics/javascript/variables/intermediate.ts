import { Topic } from '../../../types';

export const JS_VARIABLES_INTERMEDIATE_TOPICS: Topic[] = [
{
    id: 'hoisting-advanced',
    title: 'Hoisting (продвинутый)',
    difficulty: 'intermediate',
    description: 'Hoisting — механизм поднятия объявлений в начало области видимости. var поднимается и инициализируется как undefined, function declaration доступна полностью до объявления. let/const также всплывают, но находятся в TDZ до объявления.',
    keyPoints: [
      'var поднимается и инициализируется как undefined.',
      'function declaration всплывает полностью — можно вызывать до объявления.',
      'let/const всплывают, но находятся в TDZ до объявления.',
      'Function expression не всплывает (присваивается переменной).'
    ],
    tags: ['hoisting', 'variables', 'var', 'let', 'const', 'functions'],
    examples: [
      {
        title: "Hoisting: var и function",
        code: `console.log(x); // undefined (не ошибка)
var x = 5;

sayHi(); // "Hi"
function sayHi() {
  console.log("Hi");
}

// console.log(y); // ReferenceError
let y = 10;`
      },
      {
        title: "Function declaration vs expression",
        code: `// Declaration - всплывает
sayHi(); // "Hi"
function sayHi() {
  console.log("Hi");
}

// Expression - не всплывает
// sayHello(); // ReferenceError
const sayHello = function() {
  console.log("Hello");
};`
      }
    ],
    relatedTopics: ['var-let-const', 'tdz', 'functions-types'],
  },
{
    id: 'tdz',
    title: 'Temporal Dead Zone (TDZ)',
    difficulty: 'intermediate',
    description: 'TDZ — период от входа в блок до объявления let/const. Обращение к переменной в TDZ вызывает ReferenceError. var такой защиты не имеет. TDZ защищает от логических ошибок использования неинициализированных данных.',
    keyPoints: [
      'Зона от начала блока до строки объявления.',
      'let/const существуют до объявления, но недоступны.',
      'Защищает от логических ошибок использования неинициализированных данных.',
      'TDZ в параметрах функции может вызвать ошибки при значениях по умолчанию.'
    ],
    funFact: 'TDZ в параметрах функции может привести к интересным ситуациям: function test(x = y, y = 2) вызовет ReferenceError, потому что y еще не инициализирован, когда используется в значении по умолчанию для x.',
    tags: ['tdz', 'variables', 'errors', 'tdz-basic', 'var-let-const'],
    examples: [
      {
        title: "TDZ для let и const",
        code: `{
  // console.log(x); // ReferenceError (TDZ)
  let x = 5;
  console.log(x); // 5
}

{
  // console.log(y); // ReferenceError (TDZ)
  const y = 10;
  console.log(y); // 10
}`
      },
      {
        title: "TDZ в параметрах функции",
        code: `function test(x = y, y = 2) {
  // ReferenceError: y в TDZ
}

function test2(x = 2, y = x) {
  // OK: x уже инициализирован
}`
      }
    ],
    relatedTopics: ['var-let-const', 'tdz-basic', 'scope-chain', 'hoisting-advanced'],
  },
{
    id: 'property-descriptors',
    title: 'Дескрипторы свойств',
    difficulty: 'intermediate',
    description: 'Дескрипторы свойств контролируют поведение свойств объектов: writable — можно ли изменять значение, enumerable — участвует ли в переборах, configurable — можно ли удалять свойство и менять дескрипторы. Object.freeze и Object.seal используют дескрипторы для защиты объектов.',
    keyPoints: [
      'writable: можно ли изменять значение свойства.',
      'enumerable: участвует ли свойство в переборах (for...in, Object.keys).',
      'configurable: можно ли удалять свойство и менять дескрипторы.',
      'Object.defineProperty: точечная настройка поведения отдельных свойств.',
      'Object.freeze: полный запрет на изменение структуры и значений объекта.',
      'Object.seal: запрет на добавление и удаление свойств, но разрешено изменение существующих.'
    ],
    tags: ['descriptors', 'objects', 'freeze', 'seal', 'defineProperty', 'immutability'],
    examples: [
      {
        title: "Дескрипторы свойств",
        code: `const obj = {};

Object.defineProperty(obj, 'prop', {
  value: 42,
  writable: false,
  enumerable: true,
  configurable: false
});

obj.prop = 100; // игнорируется
console.log(obj.prop); // 42`
      },
      {
        title: "Object.freeze и Object.seal",
        code: `const obj = { name: "Alice" };

Object.freeze(obj);
obj.name = "Bob"; // игнорируется
obj.age = 30;     // игнорируется
delete obj.name;  // игнорируется

const obj2 = { name: "Alice" };

Object.seal(obj2);
obj2.name = "Bob"; // OK
obj2.age = 30;     // игнорируется
delete obj2.name;  // игнорируется`
      },
      {
        title: "В strict mode ошибки",
        code: `"use strict";
const obj = Object.freeze({ name: "Alice" });

// obj.name = "Bob"; // TypeError (в strict mode)
// obj.age = 30;     // TypeError (в strict mode)`
      }
    ],
    funFact: 'В strict mode попытка изменить frozen-объект или writable: false свойство выбросит ошибку, а не будет просто проигнорирована.',
    relatedTopics: ['var-let-const', 'object-methods', 'mutability-immutability'],
  }
];
