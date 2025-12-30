import { Topic } from '../../../types';

export const JS_INTRODUCTION_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'parsing-and-execution',
    title: 'Парсинг и выполнение кода',
    difficulty: 'intermediate',
    description: 'JavaScript-код проходит несколько фаз перед выполнением. Движок сначала анализирует структуру кода (парсинг), затем подготавливает окружение (фаза создания), и только потом выполняет код построчно (фаза выполнения). Это объясняет, почему некоторые переменные доступны до объявления (hoisting).',
    keyPoints: [
      'Парсинг: движок анализирует структуру кода перед выполнением.',
      'Фаза создания: подготовка окружения, регистрация объявлений переменных и функций.',
      'Фаза выполнения: последовательное выполнение кода построчно.',
      'Hoisting: переменные var и функции доступны до строки объявления благодаря фазе создания.',
      'TDZ: let и const существуют, но недоступны до инициализации (между фазой создания и выполнением).'
    ],
    funFact: 'Hoisting — это не отдельный механизм языка, а результат того, что движок должен знать все объявления до начала выполнения кода.',
    tags: ['parsing', 'execution', 'hoisting', 'tdz', 'internals', 'introduction'],
    examples: [
      {
        title: "Фаза создания регистрирует объявления",
        code: `// Фаза создания: var и function зарегистрированы
// Фаза выполнения: код выполняется построчно

console.log(a); // undefined (var зарегистрирован, но не присвоен)
var a = 10;
console.log(a); // 10`
      },
      {
        title: "Function Declaration доступна до объявления",
        code: `// Фаза создания: функция зарегистрирована полностью
sayHi(); // работает!

function sayHi() {
  console.log('Hi');
}`
      },
      {
        title: "let и const в TDZ до инициализации",
        code: `// Фаза создания: let/const зарегистрированы, но в TDZ
// console.log(x); // ReferenceError (TDZ)

let x = 5;
console.log(x); // 5 (после инициализации)`
      }
    ],
    relatedTopics: ['var-let-const', 'hoisting-basic', 'tdz-basic', 'js-parsing-and-execution', 'execution-context-basics', 'hoisting-tdz-mechanism']
  }
];
