import { InterviewQuestion } from '../../../types';

export const JAVASCRIPT_BEGINNER_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'js-beginner-var-let-const',
    question: 'В чем различия между var, let и const?',
    answer: 'var имеет функциональную область видимости, всплывает, может быть переобъявлена. let/const имеют блочную область видимости, всплывают, но находятся в TDZ до объявления. const требует инициализации и не может быть переприсвоена, но изменяемые объекты можно мутировать.',
    category: 'javascript',
    difficulty: 'beginner',
    tags: ['javascript', 'variables', 'scope', 'hoisting', 'tdz', 'basics']
  },
  {
    id: 'js-beginner-primitive-types',
    question: 'Какие примитивные типы данных в JavaScript?',
    answer: 'Примитивные типы: string, number, boolean, undefined, null, symbol, bigint.',
    category: 'javascript',
    difficulty: 'beginner',
    tags: ['javascript', 'types', 'primitives', 'basics']
  },
  {
    id: 'js-beginner-reference-types',
    question: 'Что такое ссылочные типы данных? Приведите примеры.',
    answer: 'Типы, передающиеся по ссылке: объекты, массивы, функции, Map, Set.',
    category: 'javascript',
    difficulty: 'beginner',
    tags: ['javascript', 'types', 'references', 'objects', 'arrays']
  },
  {
    id: 'js-beginner-scope',
    question: 'Что такое область видимости и какие виды существуют?',
    answer: 'Область видимости определяет доступность переменных: глобальная, функциональная и блочная.',
    category: 'javascript',
    difficulty: 'beginner',
    tags: ['javascript', 'scope', 'basics']
  },
  {
    id: 'js-beginner-functions-types',
    question: 'Какие виды функций существуют в JavaScript?',
    answer: 'Function Declaration, Function Expression, Arrow Functions, Generators.',
    category: 'javascript',
    difficulty: 'beginner',
    tags: ['javascript', 'functions', 'basics']
  },
  {
    id: 'js-beginner-set',
    question: 'Для чего нужен Set?',
    answer: 'Для хранения уникальных значений без дубликатов.',
    category: 'javascript',
    difficulty: 'beginner',
    tags: ['javascript', 'set', 'collections', 'basics']
  },
  {
    id: 'js-beginner-map-weakmap',
    question: 'В чём разница между Map и WeakMap?',
    answer: 'WeakMap принимает только ссылочные ключи и не предотвращает сборку мусора.',
    category: 'javascript',
    difficulty: 'beginner',
    tags: ['javascript', 'map', 'weakmap', 'collections', 'memory']
  },
  {
    id: 'js-beginner-freeze-const',
    question: 'В чём разница между Object.freeze и const?',
    answer: 'const запрещает переназначение ссылки, Object.freeze — изменение объекта.',
    category: 'javascript',
    difficulty: 'beginner',
    tags: ['javascript', 'objects', 'immutability', 'const', 'basics']
  },
  {
    id: 'js-beginner-ternary-nullish',
    question: 'Чем отличается тернарный оператор от ???',
    answer: 'Тернарный — условие, ?? возвращает правое значение только при null или undefined.',
    category: 'javascript',
    difficulty: 'beginner',
    tags: ['javascript', 'operators', 'ternary', 'nullish-coalescing', 'basics']
  },
  {
    id: 'js-beginner-equality',
    question: 'В чем разница между == и ===?',
    answer: '=== проверяет равенство без приведения типов, == с приведением.',
    category: 'javascript',
    difficulty: 'beginner',
    tags: ['javascript', 'operators', 'equality', 'type-coercion', 'basics']
  },
  {
    id: 'js-beginner-arrow-functions',
    question: 'В чем отличия стрелочных функций от обычных?',
    answer: 'Стрелочные функции не имеют своего this, arguments, не могут быть конструкторами.',
    category: 'javascript',
    difficulty: 'beginner',
    tags: ['javascript', 'functions', 'arrow-functions', 'this', 'basics']
  }
];
