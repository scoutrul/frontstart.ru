
import { Category, Topic } from './types';

const VARIABLES_TOPICS: Topic[] = [
  {
    id: 'var-let-const',
    title: 'var, let, const',
    difficulty: 'beginner',
    description: 'Основополагающая тема JavaScript, касающаяся управления памятью и жизненного цикла данных. Современный стандарт диктует использование let для изменяемых данных и const для неизменяемых ссылок.',
    keyPoints: [
      'var: функциональная область видимости, допускает повторное объявление, всплывает (hoisting).',
      'let/const: блочная область видимости, не допускают повторного объявления.',
      'const требует инициализации и запрещает переопределение ссылки.'
    ],
    tags: ['variables', 'scope', 'let', 'const', 'hoisting'],
    examples: [
      {
        title: "Разница областей видимости (Scope)",
        code: `if (true) {\n  var x = 5;\n  let y = 10;\n  const z = 15;\n}\nconsole.log(x); // 5\n// console.log(y); // ReferenceError`
      }
    ],
    relatedTopics: ['hoisting', 'tdz'],
    nextTopicId: 'hoisting'
  },
  {
    id: 'hoisting',
    title: 'Hoisting (Всплытие)',
    difficulty: 'intermediate',
    description: 'Механизм, при котором интерпретатор JavaScript визуально "поднимает" объявления переменных и функций в начало их области видимости.',
    keyPoints: [
      'Function Declaration всплывает полностью.',
      'var всплывает с инициализацией undefined.',
      'let/const всплывают, но находятся в TDZ.'
    ],
    tags: ['hoisting', 'scope', 'variables'],
    examples: [
      {
        title: "Всплытие функций",
        code: `sayHi(); // "Hi"\nfunction sayHi() { console.log("Hi"); }`
      }
    ],
    relatedTopics: ['var-let-const', 'tdz'],
    nextTopicId: 'tdz'
  },
  {
    id: 'tdz',
    title: 'Temporal Dead Zone (TDZ)',
    difficulty: 'intermediate',
    description: 'Временная мертвая зона — это поведение let и const, предназначенное для предотвращения использования переменных до их фактической инициализации.',
    keyPoints: [
      'Доступ к переменной в TDZ вызывает ReferenceError.',
      'Зона начинается с момента входа в блок и длится до строки объявления.'
    ],
    tags: ['tdz', 'variables', 'let'],
    examples: [
      {
        title: "Проявление TDZ",
        code: `{\n  // console.log(x); // ReferenceError\n  let x = 5;\n}`
      }
    ],
    relatedTopics: ['var-let-const', 'scope-chain'],
    nextTopicId: 'scope-chain'
  },
  {
    id: 'scope-chain',
    title: 'Scope Chain',
    difficulty: 'beginner',
    description: 'Цепочка областей видимости определяет, как JavaScript ищет переменные в коде от локального окружения к глобальному.',
    keyPoints: [
      'Поиск идет от локального к внешнему.',
      'Глобальная область видимости — конец цепочки.',
      'Функции создают свою область видимости.'
    ],
    tags: ['scope', 'closure', 'chain'],
    examples: [
      {
        title: "Поиск по цепочке",
        code: `const name = "Global";\nfunction outer() {\n  const name = "Outer";\n  function inner() {\n    console.log(name); // "Outer"\n  }\n  inner();\n}\nouter();`
      }
    ],
    relatedTopics: ['lexical-env', 'closures-basic'],
    nextTopicId: 'lexical-env'
  }
];

const CLOSURES_TOPICS: Topic[] = [
  {
    id: 'lexical-env',
    title: 'Лексическое окружение',
    difficulty: 'advanced',
    description: 'Внутренняя структура движка, состоящая из Environment Record и ссылки на внешнее окружение.',
    keyPoints: [
      'Environment Record: хранилище переменных.',
      'Outer Reference: ссылка на внешнее окружение.',
      'Создается при каждом вызове функции.'
    ],
    tags: ['lexical environment', 'internals', 'memory'],
    examples: [
      {
        title: "Механизм работы",
        code: `let x = 1;\nfunction func() {\n  console.log(x);\n}\nx = 2;\nfunc(); // 2`
      }
    ],
    relatedTopics: ['scope-chain', 'closures-basic'],
    nextTopicId: 'closures-basic'
  },
  {
    id: 'closures-basic',
    title: 'Замыкания (Closures)',
    difficulty: 'intermediate',
    description: 'Функция, которая "помнит" свои внешние переменные даже после завершения работы внешней функции.',
    keyPoints: [
      'Замыкание — это функция + лексическое окружение.',
      'Используется для инкапсуляции данных.',
      'Переменные не удаляются из памяти, пока на них есть ссылка.'
    ],
    tags: ['closure', 'scope', 'encapsulation'],
    examples: [
      {
        title: "Счетчик",
        code: `function createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = createCounter();\nconsole.log(counter()); // 1`
      }
    ],
    relatedTopics: ['lexical-env', 'private-state'],
    nextTopicId: 'private-state'
  }
];

export const KNOWLEDGE_BASE: Category[] = [
  { id: 'variables', title: 'Переменные и Область видимости', topics: VARIABLES_TOPICS },
  { id: 'closures', title: 'Замыкания и Окружение', topics: CLOSURES_TOPICS },
  { id: 'this-context', title: 'Контекст this', topics: [] }, // Можно дополнить из constants.tsx по аналогии
];
