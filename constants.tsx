
import { Category, Topic } from './types';

const VARIABLES_TOPICS: Topic[] = [
  {
    id: 'var-let-const',
    title: 'var, let, const',
    difficulty: 'beginner',
    description: 'Основы объявления переменных, различия в области видимости и поведении.',
    keyPoints: [
      'var: функциональная область видимости, допускает повторное объявление, всплывает (hoisting).',
      'let/const: блочная область видимости, не допускают повторного объявления.',
      'const требует инициализации и запрещает переопределение ссылки.'
    ],
    tags: ['variables', 'scope', 'let', 'const', 'hoisting'],
    codeExample: `if (true) {
  var x = 5;
  let y = 10;
}
console.log(x); // 5
// console.log(y); // ReferenceError`,
    relatedTopics: ['hoisting', 'tdz'],
    nextTopicId: 'hoisting'
  },
  {
    id: 'hoisting',
    title: 'Hoisting (Всплытие)',
    difficulty: 'intermediate',
    description: 'Механизм поднятия объявлений в начало области видимости.',
    keyPoints: [
      'Function Declaration всплывает полностью.',
      'var всплывает с инициализацией undefined.',
      'let/const всплывают, но находятся в TDZ.'
    ],
    tags: ['hoisting', 'scope', 'variables'],
    codeExample: `console.log(a); // undefined
var a = 10;

sayHi(); // "Hi"
function sayHi() { console.log("Hi"); }`,
    relatedTopics: ['var-let-const', 'tdz'],
    nextTopicId: 'tdz'
  },
  {
    id: 'tdz',
    title: 'Temporal Dead Zone (TDZ)',
    difficulty: 'intermediate',
    description: 'Мертвая зона для let и const до момента их объявления.',
    keyPoints: [
      'Доступ к переменной в TDZ вызывает ReferenceError.',
      'TDZ начинается при входе в блок и заканчивается на строке объявления.'
    ],
    tags: ['tdz', 'variables', 'let', 'const', 'scope'],
    codeExample: `{
  // TDZ начинается здесь
  // console.log(x); // Ошибка
  let x = 5; // TDZ закончилась
}`,
    relatedTopics: ['var-let-const', 'scope-chain'],
    nextTopicId: 'scope-chain'
  },
  {
    id: 'scope-chain',
    title: 'Scope Chain',
    difficulty: 'beginner',
    description: 'Цепочка областей видимости и поиск переменных.',
    keyPoints: [
      'Поиск переменной идет от локального окружения к внешнему.',
      'Глобальная область видимости — конец цепочки.',
      'Функции создают свою область видимости.'
    ],
    tags: ['scope', 'closure'],
    relatedTopics: ['lexical-env', 'closures-basic'],
    nextTopicId: 'lexical-env'
  }
];

const CLOSURES_TOPICS: Topic[] = [
  {
    id: 'lexical-env',
    title: 'Лексическое окружение',
    difficulty: 'advanced',
    description: 'Внутренний механизм хранения переменных и ссылок на внешние области.',
    keyPoints: [
      'Environment Record: хранилище переменных.',
      'Outer Reference: ссылка на внешнее лексическое окружение.',
      'Создается при каждом вызове функции.'
    ],
    tags: ['scope', 'lexical environment', 'closure'],
    relatedTopics: ['scope-chain', 'closures-basic'],
    nextTopicId: 'closures-basic'
  },
  {
    id: 'closures-basic',
    title: 'Замыкания (Closures)',
    difficulty: 'intermediate',
    description: 'Способность функции помнить свое окружение даже после завершения внешней функции.',
    keyPoints: [
      'Замыкание — это функция + лексическое окружение.',
      'Используется для инкапсуляции данных.',
      'Переменные не удаляются из памяти, пока на них есть ссылка из функции.'
    ],
    tags: ['closure', 'scope', 'functional'],
    codeExample: `function counter() {
  let count = 0;
  return () => ++count;
}
const inc = counter();
inc(); // 1
inc(); // 2`,
    relatedTopics: ['lexical-env', 'private-state'],
    nextTopicId: 'private-state'
  },
  {
    id: 'private-state',
    title: 'Приватное состояние',
    difficulty: 'intermediate',
    description: 'Эмуляция приватных свойств через замыкания.',
    keyPoints: [
      'Прямой доступ к переменной извне невозможен.',
      'Доступ только через геттеры и сеттеры.',
      'Основа паттерна "Модуль".'
    ],
    tags: ['closure', 'encapsulation', 'privacy'],
    relatedTopics: ['closures-basic'],
    nextTopicId: 'this-basics'
  }
];

const THIS_TOPICS: Topic[] = [
  {
    id: 'this-basics',
    title: 'Контекст this',
    difficulty: 'beginner',
    description: 'Определение контекста в зависимости от способа вызова.',
    keyPoints: [
      'this определяется в момент вызова.',
      'В методе объекта — сам объект.',
      'В обычной функции в строгом режиме — undefined.',
      'В стрелочных функциях this берется из окружения.'
    ],
    tags: ['this', 'context'],
    relatedTopics: ['arrow-functions', 'context-loss'],
    nextTopicId: 'arrow-functions'
  },
  {
    id: 'arrow-functions',
    title: 'this в стрелочных функциях',
    difficulty: 'intermediate',
    description: 'Особенности лексического контекста стрелок.',
    keyPoints: [
      'Стрелки не имеют своего this.',
      'this фиксируется в момент создания функции.',
      'Нельзя использовать с оператором new.'
    ],
    tags: ['this', 'arrow functions', 'context'],
    relatedTopics: ['this-basics'],
    nextTopicId: 'context-loss'
  },
  {
    id: 'context-loss',
    title: 'Потеря контекста',
    difficulty: 'intermediate',
    description: 'Почему this пропадает при передаче метода в колбэк.',
    keyPoints: [
      'Проблема в setTimeout, обработчиках событий.',
      'Функция вызывается как обычная, без объекта.',
      'Решения: стрелочные функции или bind.'
    ],
    tags: ['this', 'context', 'callbacks'],
    relatedTopics: ['this-basics', 'bind-call-apply'],
    nextTopicId: 'bind-call-apply'
  },
  {
    id: 'bind-call-apply',
    title: 'Методы функций (bind/call/apply)',
    difficulty: 'intermediate',
    description: 'Явное управление контекстом функции.',
    keyPoints: [
      'call: немедленный вызов с перечислением аргументов.',
      'apply: немедленный вызов с массивом аргументов.',
      'bind: создание новой функции с жесткой привязкой контекста.'
    ],
    tags: ['this', 'context', 'bind', 'call', 'apply'],
    relatedTopics: ['this-basics', 'context-loss'],
    nextTopicId: 'prototype-chain'
  }
];

const PROTOTYPE_TOPICS: Topic[] = [
  {
    id: 'prototype-chain',
    title: 'Прототипы',
    difficulty: 'intermediate',
    description: 'Механизм наследования свойств и методов.',
    keyPoints: [
      'У каждого объекта есть скрытая ссылка [[Prototype]].',
      'Наследование идет по цепочке до Object.prototype или null.',
      'Свойства прототипа доступны для чтения, но не для записи напрямую.'
    ],
    tags: ['prototype', 'inheritance', 'oop'],
    relatedTopics: ['this-basics'],
    nextTopicId: 'event-loop'
  }
];

const ASYNC_TOPICS: Topic[] = [
  {
    id: 'event-loop',
    title: 'Event Loop',
    difficulty: 'advanced',
    description: 'Как JS выполняет асинхронный код в однопоточном режиме.',
    keyPoints: [
      'Call Stack: выполнение синхронного кода.',
      'Task Queue (Макрозадачи): setTimeout, события.',
      'Microtask Queue (Микрозадачи): Promises, MutationObserver.',
      'Цикл: Стек -> Микрозадачи (все) -> Рендер -> Макрозадача (одна).'
    ],
    tags: ['event loop', 'async', 'performance', 'microtasks'],
    relatedTopics: ['promises-async'],
    nextTopicId: 'promises-async'
  },
  {
    id: 'promises-async',
    title: 'Async / Await',
    difficulty: 'intermediate',
    description: 'Современный способ работы с асинхронностью.',
    keyPoints: [
      'Promise — объект для отложенного результата.',
      'Async функции всегда возвращают Promise.',
      'Await останавливает выполнение только внутри async функции.'
    ],
    tags: ['promise', 'async', 'await'],
    relatedTopics: ['event-loop'],
    nextTopicId: 'immutability'
  }
];

export const KNOWLEDGE_BASE: Category[] = [
  { id: 'variables', title: 'Переменные и Область видимости', topics: VARIABLES_TOPICS },
  { id: 'closures', title: 'Замыкания и Окружение', topics: CLOSURES_TOPICS },
  { id: 'this-context', title: 'Контекст this', topics: THIS_TOPICS },
  { id: 'prototypes', title: 'Прототипы и ООП', topics: PROTOTYPE_TOPICS },
  { id: 'async-js', title: 'Асинхронность', topics: ASYNC_TOPICS },
  { id: 'functional', title: 'Функциональные концепции', topics: [
    {
      id: 'immutability',
      title: 'Иммутабельность',
      difficulty: 'intermediate',
      description: 'Принцип неизменяемости данных для чистого кода.',
      keyPoints: [
        'Предотвращает побочные эффекты.',
        'Важно для оптимизаций в React/Vue.',
        'Использование спрэд-оператора и методов map/filter.'
      ],
      tags: ['immutability', 'functional'],
      relatedTopics: ['closures-basic']
    }
  ]}
];
