import { Topic } from '../../../types';

export const JS_COLLECTIONS_ADVANCED_TOPICS: Topic[] = [
{
    id: 'weakmap-weakset',
    title: 'WeakMap и WeakSet',
    difficulty: 'advanced',
    description: 'WeakMap и WeakSet хранят слабые ссылки на объекты. Если объект удаляется, он автоматически удаляется из WeakMap/WeakSet. Ключи только объекты, нет итерации, нет size. Используется для метаданных объектов, приватных данных, кэширования без утечек памяти.',
    keyPoints: [
      'Слабые ссылки: объект удаляется из коллекции при сборке мусора.',
      'Ключи только объекты: примитивы не допускаются.',
      'Нет итерации: нельзя перебрать элементы, нет size.',
      'Использование: метаданные, приватные данные, кэш без утечек.'
    ],
    tags: ['weakmap', 'weakset', 'memory', 'garbage-collection'],
    examples: [
      {
        title: "WeakMap",
        code: `const wm = new WeakMap();\nconst obj1 = {};\nconst obj2 = {};\n\nwm.set(obj1, "data1");\nwm.set(obj2, "data2");\n\nwm.get(obj1); // "data1"\nwm.has(obj2); // true\n\n// obj1 удаляется -> автоматически удаляется из WeakMap`
      },
      {
        title: "Приватные данные",
        code: `const privateData = new WeakMap();\n\nclass User {\n  constructor(name) {\n    privateData.set(this, { name });\n  }\n  getName() {\n    return privateData.get(this).name;\n  }\n}\n\nconst user = new User("Alice");\nuser.getName(); // "Alice"\n// privateData недоступна снаружи`
      },
      {
        title: "WeakSet",
        code: `const ws = new WeakSet();\nconst obj1 = {};\nconst obj2 = {};\n\nws.add(obj1);\nws.add(obj2);\n\nws.has(obj1); // true\nws.delete(obj2);\n\n// Использование: отслеживание посещенных объектов`
      }
    ],
    relatedTopics: ['map-set', 'memory-management'],
  },
{
    id: 'iterators-iterables',
    title: 'Iterators и Iterables',
    difficulty: 'advanced',
    description: 'Iterable — объект с методом Symbol.iterator, возвращающим итератор. Iterator — объект с методом next(), возвращающим {value, done}. for...of работает с iterables. Можно создавать кастомные iterables. Генераторы автоматически создают iterators.',
    keyPoints: [
      'Iterable: объект с Symbol.iterator, возвращающим iterator.',
      'Iterator: объект с next(), возвращающим {value, done}.',
      'for...of: работает с любым iterable.',
      'Генераторы: автоматически iterable, создают iterator.'
    ],
    tags: ['iterators', 'iterables', 'symbol', 'generators'],
    examples: [
      {
        title: "Кастомный iterable",
        code: `const range = {\n  start: 1,\n  end: 5,\n  [Symbol.iterator]() {\n    let current = this.start;\n    return {\n      next: () => {\n        if (current <= this.end) {\n          return { value: current++, done: false };\n        }\n        return { done: true };\n      }\n    };\n  }\n};\n\nfor (const num of range) {\n  console.log(num); // 1, 2, 3, 4, 5\n}`
      },
      {
        title: "Итератор вручную",
        code: `const arr = [1, 2, 3];\nconst iterator = arr[Symbol.iterator]();\n\niterator.next(); // { value: 1, done: false }\niterator.next(); // { value: 2, done: false }\niterator.next(); // { value: 3, done: false }\niterator.next(); // { value: undefined, done: true }`
      },
      {
        title: "Генератор как iterable",
        code: `function* countTo(n) {\n  for (let i = 1; i <= n; i++) {\n    yield i;\n  }\n}\n\nfor (const num of countTo(3)) {\n  console.log(num); // 1, 2, 3\n}\n\n// Генератор автоматически iterable\nconst gen = countTo(2);\ngen[Symbol.iterator]() === gen; // true`
      }
    ],
    relatedTopics: ['generators', 'symbol', 'arrays-basic'],
  }
];
