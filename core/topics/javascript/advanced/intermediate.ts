import { Topic } from '../../../types';

export const JS_ADVANCED_INTERMEDIATE_TOPICS: Topic[] = [
{
    id: 'modules',
    title: 'Модули ES6',
    difficulty: 'intermediate',
    description: 'Модули изолируют код, экспорт делает функции/переменные доступными, импорт подключает их. export default — один экспорт по умолчанию, export — именованные экспорты. import может быть default или именованным, можно переименовывать через as.',
    keyPoints: [
      'export default: один экспорт по умолчанию, импорт без фигурных скобок.',
      'export: именованные экспорты, импорт с фигурными скобками.',
      'import: можно переименовывать через as, импортировать все через *.',
      'Модули изолированы: переменные не попадают в глобальную область видимости.'
    ],
    tags: ['modules', 'import', 'export', 'ES6'],
    examples: [
      {
        title: "export default",
        code: `// math.js\nexport default function add(a, b) {\n  return a + b;\n}\n\n// main.js\nimport add from './math.js';\n// или\nimport myAdd from './math.js';`
      },
      {
        title: "Именованные экспорты",
        code: `// utils.js\nexport function multiply(a, b) { return a * b; }\nexport const PI = 3.14;\n\n// main.js\nimport { multiply, PI } from './utils.js';\n// или\nimport { multiply as mul, PI } from './utils.js';`
      },
      {
        title: "Комбинированный экспорт",
        code: `// lib.js\nexport default class User {}\nexport function helper() {}\nexport const CONST = 42;\n\n// main.js\nimport User, { helper, CONST } from './lib.js';\n// или все сразу\nimport * as lib from './lib.js';\nlib.default; // User\nlib.helper();`
      }
    ],
    relatedTopics: ['functions-types', 'classes'],
  },
{
    id: 'symbol',
    title: 'Symbol',
    difficulty: 'intermediate',
    description: 'Symbol — уникальный примитивный тип, каждый Symbol уникален даже с одинаковым описанием. Используется для создания скрытых свойств объектов, избегания конфликтов имен. Symbol.for создает глобальный символ, Symbol.keyFor получает ключ.',
    keyPoints: [
      'Каждый Symbol уникален: Symbol("id") !== Symbol("id").',
      'Скрытые свойства: не видны в Object.keys, for...in.',
      'Symbol.for(key): создает/возвращает глобальный символ по ключу.',
      'Symbol.iterator: встроенный символ для итераторов.'
    ],
    tags: ['symbol', 'primitives', 'unique', 'ES6'],
    examples: [
      {
        title: "Уникальность Symbol",
        code: `const sym1 = Symbol("id");\nconst sym2 = Symbol("id");\nconsole.log(sym1 === sym2); // false\n\nconst obj = {};\nobj[sym1] = "value1";\nobj[sym2] = "value2";\nconsole.log(obj[sym1]); // "value1"`
      },
      {
        title: "Скрытые свойства",
        code: `const id = Symbol("id");\nconst user = {\n  name: "Alice",\n  [id]: 123\n};\n\nObject.keys(user); // ["name"]\nfor (const key in user) { console.log(key); } // "name"\nconsole.log(user[id]); // 123 (доступ есть)`
      },
      {
        title: "Symbol.for",
        code: `const global1 = Symbol.for("id");\nconst global2 = Symbol.for("id");\nconsole.log(global1 === global2); // true\n\nSymbol.keyFor(global1); // "id"\n\nconst local = Symbol("id");\nSymbol.keyFor(local); // undefined (не глобальный)`
      }
    ],
    relatedTopics: ['data-types', 'objects-basic'],
  }
];
