import { InterviewQuestion } from '../../../types';

export const JAVASCRIPT_INTERMEDIATE_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'js-intermediate-hoisting',
    question: 'Что такое hoisting (поднятие) и как оно работает для разных типов объявлений?',
    answer: 'Hoisting — механизм поднятия объявлений в начало области видимости. var всплывает с undefined, let/const всплывают, но находятся в TDZ до объявления. Function Declaration всплывает полностью.',
    category: 'javascript',
    difficulty: 'intermediate',
    tags: ['javascript', 'hoisting', 'tdz', 'scope']
  },
  {
    id: 'js-intermediate-tdz',
    question: 'Что такое Temporal Dead Zone (временная мертвая зона)?',
    answer: 'TDZ — период между началом области видимости и объявлением переменной, когда к ней нельзя обратиться. Применяется к let и const.',
    category: 'javascript',
    difficulty: 'intermediate',
    tags: ['javascript', 'tdz', 'let', 'const', 'scope']
  },
  {
    id: 'js-intermediate-closure',
    question: 'Что такое замыкание (closure)? Приведите пример.',
    answer: 'Способность функции сохранять доступ к переменным из внешнего лексического окружения.',
    category: 'javascript',
    difficulty: 'intermediate',
    tags: ['javascript', 'closure', 'functions', 'scope']
  },
  {
    id: 'js-intermediate-generators',
    question: 'Что такое функции-генераторы и как они работают?',
    answer: 'Функции, выполнение которых можно приостанавливать и возобновлять с помощью yield.',
    category: 'javascript',
    difficulty: 'intermediate',
    tags: ['javascript', 'generators', 'yield', 'functions']
  },
  {
    id: 'js-intermediate-prototypes',
    question: 'Что такое прототипное наследование?',
    answer: 'Механизм наследования, при котором объекты могут наследовать свойства и методы от других объектов через цепочку прототипов.',
    category: 'javascript',
    difficulty: 'intermediate',
    tags: ['javascript', 'prototypes', 'inheritance', 'oop']
  },
  {
    id: 'js-intermediate-deep-copy',
    question: 'Какие методы глубокого копирования объектов вы знаете?',
    answer: 'Рекурсивная функция, библиотеки (lodash.cloneDeep), structuredClone. JSON.parse(JSON.stringify(obj)) имеет ограничения: не копирует функции, undefined, символы.',
    category: 'javascript',
    difficulty: 'intermediate',
    tags: ['javascript', 'objects', 'copy', 'deep-clone']
  },
  {
    id: 'js-intermediate-array-at',
    question: 'Чем отличается Array.prototype.at() от обращения по индексу?',
    answer: 'at() принимает отрицательные индексы (с конца), обычный доступ по индексу — только положительные.',
    category: 'javascript',
    difficulty: 'intermediate',
    tags: ['javascript', 'arrays', 'methods']
  },
  {
    id: 'js-intermediate-map-filter-optimization',
    question: 'Как можно оптимизировать последовательные вызовы map() и filter()?',
    answer: 'Заменить на один reduce для уменьшения количества проходов по массиву.',
    category: 'javascript',
    difficulty: 'intermediate',
    tags: ['javascript', 'arrays', 'optimization', 'performance']
  },
  {
    id: 'js-intermediate-event-loop',
    question: 'Какие задачи существуют в Event Loop и в каком порядке выполняются?',
    answer: 'Сначала синхронный код, затем микрозадачи (промисы), потом одна макрозадача (setTimeout и т.д.).',
    category: 'javascript',
    difficulty: 'intermediate',
    tags: ['javascript', 'event-loop', 'async', 'promises', 'tasks']
  },
  {
    id: 'js-intermediate-type-coercion',
    question: 'Что такое явное и неявное приведение типов?',
    answer: 'Явное — через функции (String(), Number()), неявное — автоматическое при операциях (==, + со строками).',
    category: 'javascript',
    difficulty: 'intermediate',
    tags: ['javascript', 'types', 'coercion', 'type-conversion']
  },
  {
    id: 'js-intermediate-object-creation',
    question: 'Как создать объект? Какие способы вы знаете?',
    answer: 'Литерал {}, new Object(), Object.create(), конструктор функции, классы ES6.',
    category: 'javascript',
    difficulty: 'intermediate',
    tags: ['javascript', 'objects', 'creation', 'patterns']
  },
  {
    id: 'js-intermediate-property-check',
    question: 'Как проверить наличие свойства у объекта?',
    answer: 'in оператор, hasOwnProperty(), Object.hasOwn(), проверка на undefined.',
    category: 'javascript',
    difficulty: 'intermediate',
    tags: ['javascript', 'objects', 'properties', 'check']
  }
];
