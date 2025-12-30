import { Topic } from '../../../types';

export const JS_INTRODUCTION_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'javascript-history',
    title: 'История JavaScript',
    difficulty: 'beginner',
    description: 'JavaScript создан для добавления интерактивности в статичные веб-страницы. Язык эволюционировал от простого скриптового инструмента до полноценного языка программирования, используемого во всех сферах разработки.',
    keyPoints: [
      '1995 год: создан Бренданом Эйхом в Netscape за 10 дней.',
      'Цель: добавить интерактивность в статичные веб-страницы (валидация, динамика, события).',
      'Названия: Mocha → LiveScript → JavaScript (маркетинговое решение, не связано с Java).',
      '1997: стандартизация как ECMAScript (ECMA-262).',
      'Эволюция: от простого скриптового языка до полноценного языка программирования.',
      'Современность: один из самых популярных языков, используется везде (браузер, сервер, мобильные приложения).'
    ],
    funFact: 'Брендан Эйх изначально планировал создать язык для браузера Netscape, который должен был работать как "младший брат" Java, но в итоге получился совершенно самостоятельный язык с уникальной философией.',
    additionalDescription: 'Несмотря на схожее название, JavaScript и Java — принципиально разные языки.\n\nТипизация: JavaScript определяет типы во время выполнения (динамическая), Java — при компиляции (статическая). JavaScript допускает автоматическое преобразование типов, Java требует явного приведения.\n\nКомпиляция: JavaScript выполняется напрямую в браузере или Node.js без компиляции. Java компилируется в байт-код, который выполняется на JVM (Java Virtual Machine).\n\nНаследование: JavaScript использует прототипное наследование, Java — классы и интерфейсы. В JavaScript объекты наследуют свойства от других объектов через цепочку прототипов.\n\nОкружение: JavaScript работает в браузере или Node.js, не требует установки дополнительного ПО. Java требует установленную JVM для выполнения скомпилированного байт-кода.',
    tags: ['javascript', 'history', 'introduction', 'ecmascript', 'netscape', 'brendan-eich', 'java', 'comparison'],
    examples: [
      {
        title: "Первоначальная цель - интерактивность",
        code: `// Валидация формы (раньше требовался сервер)
function validateForm() {
  const name = document.getElementById('name').value;
  if (name.length < 2) {
    alert('Имя слишком короткое');
    return false;
  }
  return true;
}

// Динамическое изменение контента
document.getElementById('button').onclick = function() {
  document.getElementById('content').innerHTML = 'Новый контент!';
};`
      },
      {
        title: "Эволюция языка",
        code: `// 1995 - простые скрипты
var x = 5;
function test() {
  alert('Hello');
}

// 2015 (ES6) - современный JavaScript
const x = 5;
const test = () => {
  console.log('Hello');
};

// 2020+ - async/await, модули, классы
class MyClass {
  async fetchData() {
    const response = await fetch('/api');
    return response.json();
  }
}`
      },
      {
        title: "Стандартизация ECMAScript",
        code: `// JavaScript - реализация стандарта ECMAScript
// Разные версии: ES5 (2009), ES6/ES2015, ES2016, ES2017...

// ES6 (2015) - большие изменения
const arrow = () => {};
class MyClass {}
const [a, b] = [1, 2];

// Современные версии добавляют новые возможности
// но сохраняют обратную совместимость`
      },
      {
        title: "JavaScript vs Java - типизация",
        code: `// JavaScript - динамическая типизация
let value = 42; // number
value = "hello"; // string (тип меняется)
value = true; // boolean (тип меняется)

// Java - статическая типизация
// int value = 42;
// value = "hello"; // ОШИБКА компиляции!
// String value2 = "hello"; // нужно объявить новый тип`
      },
      {
        title: "JavaScript vs Java - компиляция",
        code: `// JavaScript - выполняется напрямую
function test() {
  console.log("Hello");
}
test(); // работает сразу

// Java - компилируется в байт-код
// public class Test {
//   public static void main(String[] args) {
//     System.out.println("Hello");
//   }
// }
// javac Test.java → Test.class → java Test`
      },
      {
        title: "JavaScript vs Java - наследование",
        code: `// JavaScript - прототипное наследование
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + " makes a sound";
  }
}

// Java - классы
// public class Animal {
//   private String name;
//   public Animal(String name) {
//     this.name = name;
//   }
//   public String speak() {
//     return name + " makes a sound";
//   }
// }`
      }
    ],
    relatedTopics: ['what-is-javascript', 'typing-system', 'execution-threading']
  },
  {
    id: 'what-is-javascript',
    title: 'Что такое JavaScript',
    difficulty: 'beginner',
    description: 'JavaScript — язык программирования для создания интерактивных веб-страниц и приложений. Универсальный инструмент, который работает в разных окружениях и предоставляет богатые возможности для разработки.',
    funFact: 'JavaScript — единственный язык программирования, который изначально был создан специально для браузеров, но теперь используется практически везде: от серверов до космических аппаратов.',
    keyPoints: [
      'Высокоуровневый язык: абстракция от железа, автоматическое управление памятью.',
      'Многофункциональный: веб-разработка, серверная разработка, мобильные приложения.',
      'Встраиваемый: работает в браузерах, Node.js, различных средах выполнения.',
      'Однопоточный: один поток выполнения, асинхронность через Event Loop.',
      'Динамически и слабо типизированный: типы определяются во время выполнения, автоматическое преобразование.',
      'Встроенные возможности: типы данных, объекты, методы, стандартная библиотека.'
    ],
    tags: ['javascript', 'basics', 'introduction', 'language', 'runtime', 'single-threaded', 'dynamic-typing'],
    examples: [
      {
        title: "JavaScript в браузере",
        code: `// Интерактивность на веб-странице
document.getElementById('button').addEventListener('click', () => {
  alert('Hello from JavaScript!');
});`
      },
      {
        title: "JavaScript в Node.js",
        code: `// Серверная разработка
const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
  console.log(data);
});`
      },
      {
        title: "Встроенные возможности",
        code: `// Типы данных
const num = 42;
const str = "Hello";
const arr = [1, 2, 3];

// Встроенные методы
arr.map(x => x * 2); // [2, 4, 6]
str.toUpperCase(); // "HELLO"
Math.max(1, 2, 3); // 3`
      }
    ],
    relatedTopics: ['high-level-language', 'runtime-environments', 'typing-system', 'execution-threading']
  },
  {
    id: 'high-level-language',
    title: 'Высокоуровневость языка',
    difficulty: 'beginner',
    description: 'JavaScript скрывает сложность работы с памятью и железом, предоставляя удобные абстракции. Разработчик фокусируется на логике приложения, а не на низкоуровневых деталях.',
    funFact: 'В отличие от низкоуровневых языков, JavaScript не требует знания архитектуры процессора или управления памятью. Это позволяет писать код быстрее, но иногда ценой производительности.',
    keyPoints: [
      'Абстракция от железа: не нужно управлять памятью, указателями, регистрами.',
      'Готовые функции: встроенные методы массивов, строк, объектов, Math, Date.',
      'Стандартная библиотека: обширный набор API для работы с данными, сетью, файлами.',
      'Автоматическое управление памятью: сборщик мусора освобождает неиспользуемую память.',
      'Интерпретация: код выполняется напрямую без компиляции в машинный код.'
    ],
    tags: ['high-level', 'abstraction', 'memory-management', 'standard-library', 'garbage-collection'],
    examples: [
      {
        title: "Абстракция от железа",
        code: `// Не нужно управлять памятью вручную
const arr = [1, 2, 3];
arr.push(4); // Память выделяется автоматически

// В низкоуровневых языках нужно было бы:
// - Выделить память
// - Проверить переполнение
// - Освободить память`
      },
      {
        title: "Готовые функции и методы",
        code: `// Встроенные методы массивов
[1, 2, 3].map(x => x * 2); // [2, 4, 6]
[1, 2, 3].filter(x => x > 1); // [2, 3]
[1, 2, 3].reduce((a, b) => a + b); // 6

// Встроенные методы строк
"hello".toUpperCase(); // "HELLO"
"hello".includes("ell"); // true

// Стандартная библиотека
Math.max(1, 2, 3); // 3
JSON.parse('{"x": 1}'); // { x: 1 }`
      },
      {
        title: "Автоматическое управление памятью",
        code: `function createData() {
  const largeArray = new Array(1000000).fill(0);
  return largeArray;
}

const data = createData();
// После выхода из функции память может быть освобождена GC
// Не нужно вызывать free() или delete[]`
      }
    ],
    relatedTopics: ['what-is-javascript', 'garbage-collection', 'memory-management']
  },
  {
    id: 'runtime-environments',
    title: 'Окружение выполнения',
    difficulty: 'beginner',
    description: 'JavaScript работает в разных средах: браузере и Node.js. Окружение определяет доступные глобальные объекты, API, работу с файлами и сетью, а также поведение this. Один и тот же JavaScript-код может вести себя по-разному в зависимости от среды выполнения.',
    funFact: 'В браузере глобальный объект называется window, но в ES-модулях this на верхнем уровне всегда undefined, даже без "use strict".',
    keyPoints: [
      'Браузерное окружение: DOM (document, работа с HTML-элементами), BOM (window, navigator, location), события, fetch API.',
      'Node.js окружение: global, fs (файлы), process, модули (require), Buffer, __dirname, __filename.',
      'Глобальный объект: браузер → window, Node.js → global, универсальный → globalThis.',
      'Модульные системы: браузер → ES Modules (import / export), Node.js → CommonJS (require / module.exports).',
      'Работа с файлами: браузер — только через пользовательские API (File, Blob), Node.js — прямой доступ через fs.',
      'Влияние на this: в браузере this в глобальном контексте = window, в Node.js = global, в strict mode = undefined.',
      'Асинхронность присутствует в обоих окружениях, но API различаются.'
    ],
    tags: ['runtime', 'browser', 'nodejs', 'dom', 'bom', 'global', 'environment'],
    examples: [
      {
        title: "Браузерное окружение",
        code: `// DOM API
document.getElementById('button');
document.querySelector('.class');

// BOM API
window.location.href;
window.navigator.userAgent;
window.localStorage.setItem('key', 'value');

// События
button.addEventListener('click', handler);

// Fetch API
fetch('/api/data').then(r => r.json());`
      },
      {
        title: "Node.js окружение",
        code: `// Файловая система
const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
  console.log(data);
});

// Process
process.env.NODE_ENV;
process.argv;

// Модули
const module = require('./module.js');
module.exports = {};

// Buffer
const buf = Buffer.from('hello');`
      },
      {
        title: "Глобальный объект",
        code: `// Браузер
console.log(this === window); // true (в глобальном контексте)

// Node.js
console.log(this === global); // true (в глобальном контексте)

// Универсальный способ
console.log(globalThis); // window или global`
      },
      {
        title: "Глобальные объекты",
        code: `// Браузер
console.log(window);     // глобальный объект
console.log(document);  // DOM
console.log(navigator); // информация о браузере

// Node.js
console.log(global);  // глобальный объект
console.log(process); // информация о процессе
console.log(Buffer);  // бинарные данные`
      },
      {
        title: "Модульные системы",
        code: `// ES Modules (браузер, modern Node)
import { func } from './module.js';
export const value = 1;

// CommonJS (Node.js)
const { func } = require('./module.js');
module.exports = { value: 1 };`
      },
      {
        title: "Работа с файлами",
        code: `// Браузер
// Нет прямого доступа к файловой системе
// Используются File API, input[type="file"], drag & drop

// Node.js
const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
  console.log(data);
});`
      },
      {
        title: "Различия в this",
        code: `// Браузер (не strict)
function test() {
  console.log(this); // window
}

// Node.js (не strict)
function test() {
  console.log(this); // global
}

// Strict mode — одинаково
"use strict";
function test() {
  console.log(this); // undefined
}`
      }
    ],
    relatedTopics: ['what-is-javascript', 'this-basics', 'dom-api', 'modules']
  },
  {
    id: 'multiparadigm',
    title: 'Мультипарадигменность',
    difficulty: 'beginner',
    description: 'JavaScript поддерживает несколько парадигм программирования одновременно. Императивное программирование: последовательность команд, циклы, условия. Функциональное: чистые функции, высшие функции (map, filter, reduce), неизменяемость. Объектно-ориентированное: классы, прототипы, наследование. Событийно-ориентированное: обработка событий, асинхронные колбэки.',
    keyPoints: [
      'Императивное: последовательность команд, циклы (for, while), условия (if/else).',
      'Функциональное: чистые функции, высшие функции (map, filter, reduce), композиция.',
      'Объектно-ориентированное: классы, прототипы, наследование, инкапсуляция.',
      'Событийно-ориентированное: обработка событий, асинхронные колбэки, Event Loop.',
      'Гибкость: можно комбинировать парадигмы в одном проекте.'
    ],
    tags: ['paradigms', 'imperative', 'functional', 'oop', 'event-driven', 'programming-styles'],
    examples: [
      {
        title: "Императивный стиль",
        code: `// Последовательность команд
const numbers = [1, 2, 3, 4, 5];
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
// doubled = [2, 4, 6, 8, 10]`
  },
  {
        title: "Функциональный стиль",
        code: `// Чистые функции, высшие функции
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);
const evens = numbers.filter(x => x % 2 === 0);
const sum = numbers.reduce((a, b) => a + b, 0);

// Чистая функция
function add(a, b) {
  return a + b; // Нет побочных эффектов
}`
      },
      {
        title: "Объектно-ориентированный стиль",
        code: `// Классы и наследование
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return \`\${this.name} makes a sound\`;
  }
}

class Dog extends Animal {
  speak() {
    return \`\${this.name} barks\`;
  }
}

const dog = new Dog('Rex');
dog.speak(); // "Rex barks"

// В примере показаны принципы ООП:
// - Инкапсуляция: данные (name) и методы (speak) объединены в класс
// - Наследование: класс Dog наследует Animal
// - Полиморфизм: метод speak переопределен в дочернем классе
// - Абстракция: базовый класс описывает общую модель поведения`
      },
      {
        title: "Событийно-ориентированный стиль",
        code: `// Обработка событий
button.addEventListener('click', () => {
  console.log('Button clicked');
});

// Асинхронные колбэки
setTimeout(() => {
  console.log('Delayed execution');
}, 1000);

fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data));`
      }
    ],
    relatedTopics: ['higher-order-functions', 'classes', 'prototype-chain', 'promises', 'event-loop']
  },
];
