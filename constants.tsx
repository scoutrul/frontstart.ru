
import { Category } from './types';

export const KNOWLEDGE_BASE: Category[] = [
  {
    id: 'variables',
    title: 'Переменные и Область видимости',
    topics: [
      {
        id: 'var-let-const',
        title: 'var, let, const',
        difficulty: 'beginner',
        description: 'Основные способы объявления переменных в JS, их различия в области видимости и поведении.',
        keyPoints: [
          'var: функциональная область видимости, допускает повторное объявление, всплывает (hoisting).',
          'let/const: блочная область видимости, не допускают повторного объявления в том же скоупе.',
          'const требует инициализации и запрещает переопределение ссылки.'
        ],
        codeExample: `// var vs let
if (true) {
  var x = 5;
  let y = 10;
}
console.log(x); // 5
console.log(y); // ReferenceError`,
        relatedTopics: ['hoisting', 'scope-chain', 'tdz']
      },
      {
        id: 'hoisting',
        title: 'Hoisting (Всплытие)',
        difficulty: 'intermediate',
        description: 'Механизм в JavaScript, при котором объявления переменных и функций перемещаются в начало их области видимости перед выполнением кода.',
        keyPoints: [
          'Функции (Function Declaration) всплывают полностью.',
          'var всплывает со значением undefined.',
          'let и const всплывают, но попадают в TDZ.'
        ],
        codeExample: `console.log(a); // undefined
var a = 10;

foo(); // "Hello"
function foo() { console.log("Hello"); }`,
        relatedTopics: ['var-let-const', 'tdz']
      },
      {
        id: 'tdz',
        title: 'Temporal Dead Zone (TDZ)',
        difficulty: 'intermediate',
        description: 'Временная мертвая зона — период от начала блока до момента объявления переменной через let или const, когда обращение к ней вызывает ошибку.',
        keyPoints: [
          'Защищает от использования переменных до их инициализации.',
          'Характерна только для let и const.',
          'Помогает ловить баги на этапе разработки.'
        ],
        codeExample: `{
  // Начало TDZ для 'val'
  console.log(val); // ReferenceError
  let val = 42; // Конец TDZ
}`,
        relatedTopics: ['var-let-const', 'hoisting']
      }
    ]
  },
  {
    id: 'closures',
    title: 'Замыкания и Окружение',
    topics: [
      {
        id: 'closures-basic',
        title: 'Замыкания (Closures)',
        difficulty: 'intermediate',
        description: 'Способность функции запоминать окружение, в котором она была создана, даже после того, как внешняя функция завершила выполнение.',
        keyPoints: [
          'Функция + Лексическое окружение = Замыкание.',
          'Позволяет создавать приватные данные.',
          'Используется в фабриках функций и модулях.'
        ],
        codeExample: `function createCounter() {
  let count = 0;
  return () => ++count;
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2`,
        relatedTopics: ['lexical-env', 'private-state']
      },
      {
        id: 'lexical-env',
        title: 'Лексическое окружение',
        difficulty: 'advanced',
        description: 'Внутренняя структура данных движка JS, содержащая записи о переменных и ссылку на внешнее окружение.',
        keyPoints: [
          'Environment Record: хранит локальные переменные.',
          'Outer Reference: ссылка на родительское окружение.',
          'Создается при вызове функции (или входе в блок).'
        ],
        codeExample: `let global = 'global';
function outer() {
  let outerVar = 'outer';
  // Inner видит global и outerVar через цепочку ссылок
  return function inner() { console.log(global, outerVar); }
}`,
        relatedTopics: ['closures-basic', 'scope-chain']
      }
    ]
  },
  {
    id: 'this-context',
    title: 'Контекст this',
    topics: [
      {
        id: 'this-basics',
        title: 'this в JavaScript',
        difficulty: 'beginner',
        description: 'Ключевое слово, значение которого определяется в момент вызова функции (динамический контекст).',
        keyPoints: [
          'В методе объекта: this ссылается на сам объект.',
          'В обычной функции: undefined (strict mode) или window.',
          'В конструкторе/классе: новый экземпляр объекта.',
          'В стрелочных функциях: берется из внешнего лексического контекста.'
        ],
        codeExample: `const obj = {
  name: 'Ivan',
  sayHi() { console.log(this.name); }
};
obj.sayHi(); // Ivan`,
        relatedTopics: ['arrow-functions', 'context-loss']
      },
      {
        id: 'context-loss',
        title: 'Потеря контекста this',
        difficulty: 'intermediate',
        description: 'Ситуация, когда метод объекта передается как колбэк, и при вызове он теряет связь с исходным объектом.',
        keyPoints: [
          'Часто случается в setTimeout или Event Listeners.',
          'Решение 1: использование .bind(this).',
          'Решение 2: обертка в анонимную функцию.',
          'Решение 3: стрелочная функция как метод (но осторожно).'
        ],
        codeExample: `const user = {
  name: 'Alex',
  greet() { console.log(this.name); }
};
setTimeout(user.greet, 1000); // undefined
setTimeout(() => user.greet(), 1000); // Alex`,
        relatedTopics: ['this-basics', 'bind-call-apply']
      },
      {
        id: 'bind-call-apply',
        title: 'bind, call, apply',
        difficulty: 'intermediate',
        description: 'Методы функций для явного управления контекстом (принудительная привязка this).',
        keyPoints: [
          'call: вызывает функцию сразу, аргументы через запятую.',
          'apply: вызывает функцию сразу, аргументы массивом.',
          'bind: возвращает новую функцию с зафиксированным контекстом.'
        ],
        codeExample: `function showInfo(age) {
  console.log(this.name, age);
}
const person = { name: 'Bob' };
showInfo.call(person, 25); // Bob 25
const bound = showInfo.bind(person, 30);
bound(); // Bob 30`,
        relatedTopics: ['this-basics', 'context-loss']
      }
    ]
  },
  {
    id: 'prototypes',
    title: 'Прототипы',
    topics: [
      {
        id: 'prototype-chain',
        title: 'Prototype & prototype chain',
        difficulty: 'intermediate',
        description: 'Механизм наследования в JavaScript, основанный на делегировании свойств через цепочку прототипов.',
        keyPoints: [
          'Каждый объект имеет скрытую ссылку [[Prototype]] (доступна через __proto__).',
          'Свойство prototype есть только у функций-конструкторов.',
          'Поиск свойства идет вверх по цепочке до null.',
          'Object.create(proto) создает новый объект с указанным прототипом.'
        ],
        codeExample: `const animal = { eats: true };
const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.eats); // true (из прототипа)
console.log(Object.getPrototypeOf(rabbit) === animal); // true`,
        relatedTopics: ['this-basics', 'lexical-env']
      }
    ]
  },
  {
    id: 'async-js',
    title: 'Асинхронность',
    topics: [
      {
        id: 'event-loop',
        title: 'Event Loop (Microtasks / Macrotasks)',
        difficulty: 'advanced',
        description: 'Модель выполнения кода в JS, которая позволяет выполнять "неблокирующие" операции в однопоточном режиме.',
        keyPoints: [
          'Call Stack: текущий стек вызовов.',
          'Task Queue (Macrotasks): setTimeout, setInterval, I/O.',
          'Microtask Queue: Promises (.then/catch/finally), queueMicrotask.',
          'Приоритет: Сначала весь синхронный код -> все микрозадачи -> одна макрозадача -> рендер -> цикл повторяется.'
        ],
        codeExample: `console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
// Вывод: 1, 4, 3, 2`,
        relatedTopics: ['promises-async']
      },
      {
        id: 'promises-async',
        title: 'Async / await и Promise',
        difficulty: 'intermediate',
        description: 'Современные инструменты для работы с асинхронным кодом, избавляющие от "Callback Hell".',
        keyPoints: [
          'Promise — объект-обещание с 3 состояниями: pending, fulfilled, rejected.',
          'async/await — синтаксический сахар над промисами для "линейного" вида кода.',
          'Обработка ошибок через try/catch или .catch().',
          'Promise.all/race/allSettled для работы с группой промисов.'
        ],
        codeExample: `async function fetchData() {
  try {
    const response = await fetch('https://api.example.com');
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Ошибка:", err);
  }
}`,
        relatedTopics: ['event-loop']
      }
    ]
  },
  {
    id: 'functional-concepts',
    title: 'Концепции состояния',
    topics: [
      {
        id: 'immutability',
        title: 'Иммутабельность и состояние',
        difficulty: 'intermediate',
        description: 'Принцип неизменяемости данных, критически важный для предсказуемости кода и производительности (особенно в React/Vue).',
        keyPoints: [
          'Примитивы иммутабельны по определению.',
          'Объекты и массивы мутабельны; для изменения нужно создавать копии ({...obj}, [...arr]).',
          'Object.freeze() делает объект неглубоко неизменяемым.',
          'Иммутабельность упрощает отслеживание изменений (change detection).'
        ],
        codeExample: `const user = { name: 'Alice', age: 25 };
// Плохо: мутация
// user.age = 26;

// Хорошо: иммутабельное обновление
const updatedUser = { ...user, age: 26 };
console.log(user === updatedUser); // false`,
        relatedTopics: ['closures-basic']
      }
    ]
  }
];
