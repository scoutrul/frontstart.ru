
import { Category, Topic } from '../types';

const VARIABLES_TOPICS: Topic[] = [
  {
    id: 'var-let-const',
    title: 'var, let, const',
    difficulty: 'beginner',
    description: 'Основополагающая тема JavaScript, касающаяся управления памятью и жизненного цикла данных. Современный стандарт диктует использование let для изменяемых данных и const для неизменяемых ссылок.',
    keyPoints: [
      'var: функциональная область видимости, всплывает (hoisting).',
      'let/const: блочная область видимости.',
      'const требует инициализации.'
    ],
    tags: ['variables', 'scope', 'let', 'const', 'hoisting'],
    examples: [
      {
        title: "Разница областей видимости (Scope)",
        code: `if (true) {\n  var x = 5;\n  let y = 10;\n}\nconsole.log(x); // 5\n// console.log(y); // ReferenceError`
      }
    ],
    relatedTopics: ['hoisting', 'tdz'],
    nextTopicId: 'hoisting'
  },
  {
    id: 'hoisting',
    title: 'Hoisting (Всплытие)',
    difficulty: 'intermediate',
    description: 'Механизм, при котором объявления переменных и функций визуально "поднимаются" в начало области видимости.',
    keyPoints: [
      'Function Declaration всплывает полностью.',
      'var всплывает как undefined.',
      'let/const находятся в TDZ.'
    ],
    tags: ['hoisting', 'scope'],
    examples: [
      {
        title: "Всплытие",
        code: `console.log(a); // undefined\nvar a = 5;`
      }
    ],
    relatedTopics: ['var-let-const', 'tdz'],
    nextTopicId: 'tdz'
  },
  {
    id: 'tdz',
    title: 'Temporal Dead Zone (TDZ)',
    difficulty: 'intermediate',
    description: 'Поведение let и const, запрещающее использование переменных до их объявления.',
    keyPoints: [
      'Доступ в TDZ вызывает ReferenceError.',
      'Зона от начала блока до объявления.'
    ],
    tags: ['tdz', 'ES6'],
    examples: [
      {
        title: "TDZ",
        code: `{\n  // console.log(x); // ReferenceError\n  let x = 5;\n}`
      }
    ],
    relatedTopics: ['var-let-const'],
    nextTopicId: 'scope-chain'
  },
  {
    id: 'scope-chain',
    title: 'Scope Chain',
    difficulty: 'beginner',
    description: 'Иерархия областей видимости, по которой движок ищет переменные.',
    keyPoints: [
      'Поиск идет от локального к внешнему.',
      'Глобальная область — конец цепочки.'
    ],
    tags: ['scope', 'chain'],
    examples: [
      {
        title: "Поиск",
        code: `const x = 10;\nfunction f() { console.log(x); }\nf(); // 10`
      }
    ],
    relatedTopics: ['lexical-env', 'closures-basic'],
    nextTopicId: 'lexical-env'
  }
];

export const KNOWLEDGE_BASE: Category[] = [
  { id: 'variables', title: 'Переменные и Область видимости', topics: VARIABLES_TOPICS },
  { id: 'closures', title: 'Замыкания и Окружение', topics: [] }, // Можно расширить позже
];
