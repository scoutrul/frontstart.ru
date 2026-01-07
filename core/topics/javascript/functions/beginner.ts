import { Topic } from '../../../types';

export const JS_FUNCTIONS_BEGINNER_TOPICS: Topic[] = [
{
    id: 'functions-types',
    title: 'Типы функций',
    difficulty: 'beginner',
    description: 'Функции в JavaScript бывают разных типов и имеют особенности создания, области видимости и поведения this. Function Declaration всплывает, Function Expression не всплывает. Arrow Function не имеет this, arguments, нельзя использовать как конструктор. Функции-конструкторы создают объекты через prototype. Генераторы позволяют приостанавливать выполнение.',
    keyPoints: [
      'Function Declaration: полностью всплывает, можно вызывать до объявления.',
      'Function Expression: не всплывает, присваивается переменной.',
      'Arrow Function: лексический this (берут из внешнего контекста), нет arguments, нет prototype, нельзя использовать с new.',
      'Функции-конструкторы: вызываются с new, создают объекты через prototype.',
      'Генераторы (function*): создают итераторы, позволяют приостанавливать выполнение через yield.',
      'IIFE изолирует область видимости, используется для модулей.'
    ],
    funFact: 'Стрелочные функции никогда не могут быть конструкторами: попытка вызвать их с new вызовет TypeError. Arrow functions были добавлены в ES6 и изначально назывались "fat arrow functions" из-за синтаксиса =>.',
    tags: ['functions', 'arrow-functions', 'declaration', 'expression', 'ES6', 'iife', 'constructors', 'generators'],
    examples: [
      {
        title: "Function Declaration vs Function Expression",
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
      },
      {
        title: "Arrow Function",
        code: `const add = (a, b) => a + b;
const greet = name => "Hello " + name;
const log = () => console.log("Hi");

// Нет this, arguments
const obj = {
  name: "Test",
  arrow: () => this.name, // undefined (this из глобального контекста)
  regular: function() { return this.name; } // "Test"
};

// Нет arguments
const arrow = () => {
  // console.log(arguments); // ReferenceError
  const arrow2 = (...args) => console.log(args); // правильно через rest
  arrow2(1, 2, 3); // [1, 2, 3]
};`
      },
      {
        title: "Функции-конструкторы",
        code: `function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function() {
  return \`Hi, I'm \${this.name}\`;
};

const person = new Person("Alice");
console.log(person.sayHi()); // "Hi, I'm Alice"`
      },
      {
        title: "Генераторы",
        code: `function* counter() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = counter();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3`
      },
      {
        title: "IIFE (Immediately Invoked Function Expression)",
        code: `(function() {
  const private = "secret";
  // изолированная область видимости
})();

// Современная альтернатива — блок кода
{
  const private = "secret";
}`
      }
    ],
    relatedTopics: ['data-types', 'hoisting-basic', 'this-basics', 'prototype-chain', 'iterators'],
    isFrontendEssential: true
  },
{
    id: 'this-basics',
    title: 'Контекст this',
    difficulty: 'beginner',
    description: 'this определяется в момент вызова, не при создании функции. В методе объекта — сам объект. В обычной функции (strict mode) — undefined. Стрелочные функции не имеют своего this.',
    keyPoints: [
      'В методе — ссылается на объект.',
      'В обычной функции (strict mode) — undefined.',
      'В глобальном контексте — window/global.'
    ],
    funFact: 'this в JavaScript — один из самых запутанных концептов для новичков. В отличие от других языков, где this всегда ссылается на текущий объект, в JS this зависит от способа вызова функции.',
    tags: ['this', 'context', 'objects', 'arrow-functions', 'this-context'],
    examples: [
      {
        title: "Вызов метода",
        code: `const user = {\n  name: "Alice",\n  say() { console.log(this.name); }\n};\nuser.say(); // "Alice"`
      },
      {
        title: "this в обычной функции",
        code: `"use strict";\nfunction test() {\n  console.log(this); // undefined\n}\ntest();`
      },
      {
        title: "this в глобальном контексте",
        code: `console.log(this); // window (в браузере)\n\nfunction test() {\n  console.log(this); // window (не strict mode)\n}\ntest();`
      }
    ],
    relatedTopics: ['arrow-functions', 'context-loss'],
    isFrontendEssential: true
  }
];
