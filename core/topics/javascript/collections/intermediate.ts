import { Topic } from '../../../types';

export const JS_COLLECTIONS_INTERMEDIATE_TOPICS: Topic[] = [
{
    id: 'immutability',
    title: 'Иммутабельность',
    difficulty: 'intermediate',
    description: 'Иммутабельность — данные не изменяются напрямую, создается новая копия. Используй spread оператор, map/filter вместо мутаций. Предотвращает побочные эффекты, упрощает отладку, позволяет отслеживать изменения по ссылке.',
    keyPoints: [
      'Предотвращает побочные эффекты.',
      'Упрощает отладку и тестирование.',
      'Позволяет сравнивать данные по ссылке.'
    ],
    tags: ['immutability', 'functional', 'patterns'],
    examples: [
      {
        title: "Обновление объекта",
        code: `const user = { name: "Ivan", age: 20 };\nconst updatedUser = { ...user, age: 21 };`
      },
      {
        title: "Обновление массива",
        code: `const arr = [1, 2, 3];\nconst newArr = [...arr, 4]; // [1, 2, 3, 4]\nconst doubled = arr.map(x => x * 2); // [2, 4, 6]\n// arr не изменился`
      },
      {
        title: "Вложенные объекты",
        code: `const user = { name: "Ivan", address: { city: "Moscow" } };\nconst updated = {\n  ...user,\n  address: { ...user.address, city: "SPB" }\n};\n// user.address не изменился`
      }
    ],
    relatedTopics: ['closures-basic', 'mutability-immutability'],
  },
{
    id: 'arrays-advanced',
    title: 'Array методы (продвинутые)',
    difficulty: 'intermediate',
    description: 'reduce аккумулирует значение из массива в одно. some проверяет, есть ли хотя бы один элемент, удовлетворяющий условию. every проверяет, все ли элементы удовлетворяют условию. flat разворачивает вложенные массивы, flatMap комбинирует map и flat.',
    keyPoints: [
      'reduce(acc, item, index, arr): аккумулятор, начальное значение опционально.',
      'some: возвращает true если хотя бы один элемент проходит проверку.',
      'every: возвращает true если все элементы проходят проверку.',
      'flat(depth): разворачивает массивы на указанную глубину.',
      'flatMap: map + flat(1) в одной операции.'
    ],
    tags: ['arrays', 'reduce', 'some', 'every', 'flat'],
    examples: [
      {
        title: "reduce",
        code: `const numbers = [1, 2, 3, 4];\nconst sum = numbers.reduce((acc, n) => acc + n, 0); // 10\nconst product = numbers.reduce((acc, n) => acc * n, 1); // 24\n\nconst max = numbers.reduce((acc, n) => n > acc ? n : acc); // 4`
      },
      {
        title: "some и every",
        code: `const numbers = [1, 2, 3, 4];\nnumbers.some(n => n > 3); // true (есть элемент > 3)\nnumbers.every(n => n > 0); // true (все > 0)\nnumbers.every(n => n > 2); // false (не все > 2)`
      },
      {
        title: "flat и flatMap",
        code: `const arr = [1, [2, 3], [4, [5, 6]]];\narr.flat(); // [1, 2, 3, 4, [5, 6]]\narr.flat(2); // [1, 2, 3, 4, 5, 6]\n\nconst words = ["hello", "world"];\nwords.flatMap(w => w.split("")); // ["h","e","l","l","o","w","o","r","l","d"]`
      }
    ],
    relatedTopics: ['arrays-basic', 'immutability'],
  },
{
    id: 'map-set',
    title: 'Map и Set',
    difficulty: 'intermediate',
    description: 'Map — коллекция пар ключ-значение, ключи могут быть любого типа (не только строки). Set — коллекция уникальных значений. Map лучше объектов когда нужны ключи не-строки, частые добавления/удаления, размер коллекции. Set для уникальных значений.',
    keyPoints: [
      'Map: ключи любого типа, есть size, методы set/get/has/delete.',
      'Set: уникальные значения, методы add/has/delete.',
      'Map vs Object: ключи не-строки, частые изменения, размер коллекции.',
      'Set vs Array: автоматическая уникальность, быстрая проверка наличия.'
    ],
    tags: ['map', 'set', 'collections', 'ES6'],
    examples: [
      {
        title: "Map",
        code: `const map = new Map();\nmap.set("name", "Alice");\nmap.set(1, "one");\nmap.set({}, "object key");\n\nmap.get("name"); // "Alice"\nmap.has(1); // true\nmap.size; // 3\nmap.delete(1);`
      },
      {
        title: "Set",
        code: `const set = new Set([1, 2, 3, 2, 1]);\nset.size; // 3 (дубликаты удалены)\nset.add(4);\nset.has(3); // true\nset.delete(2);\n\n// Преобразование в массив\nArray.from(set); // [1, 3, 4]`
      },
      {
        title: "Итерация",
        code: `const map = new Map([["a", 1], ["b", 2]]);\nfor (const [key, value] of map) {\n  console.log(key, value);\n}\n\nconst set = new Set([1, 2, 3]);\nfor (const value of set) {\n  console.log(value);\n}`
      }
    ],
    relatedTopics: ['objects-basic', 'arrays-basic'],
  },
{
    id: 'destructuring-advanced',
    title: 'Деструктуризация (продвинутая)',
    difficulty: 'intermediate',
    description: 'Вложенная деструктуризация извлекает значения из вложенных структур. Rest собирает оставшиеся элементы. Можно комбинировать переименование, значения по умолчанию и rest. Деструктуризация в параметрах функций упрощает работу с объектами.',
    keyPoints: [
      'Вложенная: деструктуризация внутри деструктуризации.',
      'Rest: ...rest собирает оставшиеся элементы.',
      'В параметрах: деструктуризация объекта в аргументах функции.',
      'Можно комбинировать: переименование + значения по умолчанию + rest.'
    ],
    tags: ['destructuring', 'rest', 'parameters', 'ES6'],
    examples: [
      {
        title: "Вложенная деструктуризация",
        code: `const user = {\n  name: "Alice",\n  address: { city: "Moscow", street: "Lenina" }\n};\n\nconst { name, address: { city } } = user;\nconsole.log(name, city); // "Alice", "Moscow"\n\nconst arr = [[1, 2], [3, 4]];\nconst [[a], [b]] = arr;\nconsole.log(a, b); // 1, 3`
      },
      {
        title: "Rest в деструктуризации",
        code: `const arr = [1, 2, 3, 4, 5];\nconst [first, second, ...rest] = arr;\nconsole.log(first); // 1\nconsole.log(rest); // [3, 4, 5]\n\nconst obj = { a: 1, b: 2, c: 3 };\nconst { a, ...others } = obj;\nconsole.log(others); // { b: 2, c: 3 }`
      },
      {
        title: "В параметрах функции",
        code: `function greet({ name, age = 18 }) {\n  return "Hello, " + name + ", age " + age;\n}\n\ngreet({ name: "Alice" }); // "Hello, Alice, age 18"\n\ngreet({ name: "Bob", age: 30 }); // "Hello, Bob, age 30"`
      }
    ],
    relatedTopics: ['destructuring-basic', 'functions-types'],
  },
{
    id: 'array-methods-advanced',
    title: 'Методы массивов (продвинутые)',
    difficulty: 'intermediate',
    description: 'reduce() аккумулирует значение, flat() разворачивает вложенные массивы, flatMap() = map() + flat(). find() находит первый элемент, some() проверяет хотя бы один, every() проверяет все. reduce — самый мощный метод для трансформаций.',
    keyPoints: [
      'reduce(acc, item, index, arr): аккумулирует значение через callback.',
      'flat(depth): разворачивает вложенные массивы на указанную глубину.',
      'flatMap(fn): map() + flat(1) в одной операции.',
      'find(predicate): первый элемент, удовлетворяющий условию.',
      'some(predicate): true если хотя бы один элемент проходит проверку.',
      'every(predicate): true если все элементы проходят проверку.'
    ],
    tags: ['arrays', 'methods', 'functional', 'reduce', 'iteration'],
    examples: [
      {
        title: "reduce",
        code: `const numbers = [1, 2, 3, 4];\n\n// Сумма\nnumbers.reduce((sum, n) => sum + n, 0); // 10\n\n// Группировка\nconst users = [\n  { age: 20 }, { age: 30 }, { age: 20 }\n];\nusers.reduce((acc, u) => {\n  acc[u.age] = (acc[u.age] || 0) + 1;\n  return acc;\n}, {});\n// { 20: 2, 30: 1 }`
      },
      {
        title: "flat и flatMap",
        code: `const nested = [1, [2, 3], [4, [5, 6]]];\n\nnested.flat(); // [1, 2, 3, 4, [5, 6]]\nnested.flat(2); // [1, 2, 3, 4, 5, 6]\n\n// flatMap = map + flat(1)\nconst words = ["hello world", "foo bar"];\nwords.flatMap(w => w.split(" "));\n// ["hello", "world", "foo", "bar"]`
      },
      {
        title: "find, some, every",
        code: `const numbers = [1, 2, 3, 4, 5];\n\nnumbers.find(n => n > 3); // 4\nnumbers.find(n => n > 10); // undefined\n\nnumbers.some(n => n > 4); // true\nnumbers.some(n => n > 10); // false\n\nnumbers.every(n => n > 0); // true\nnumbers.every(n => n > 3); // false`
      }
    ],
    relatedTopics: ['arrays-basic', 'arrays-advanced', 'immutability']
  },
{
    id: 'object-copying',
    title: 'Копирование объектов',
    difficulty: 'intermediate',
    description: 'Поверхностное копирование копирует только первый уровень свойств. Глубокое копирование копирует все вложенные объекты. Spread оператор и Object.assign делают поверхностное копирование. structuredClone делает глубокое копирование (современный способ). JSON.parse/stringify работает, но имеет ограничения (нет функций, Date становится строкой).',
    keyPoints: [
      'Поверхностное копирование: копируется только первый уровень, вложенные объекты ссылаются на оригинал.',
      'Глубокое копирование: копируются все уровни, создаются новые объекты.',
      'Spread и Object.assign: поверхностное копирование.',
      'structuredClone: глубокое копирование (современный способ).',
      'JSON.parse/stringify: глубокое, но с ограничениями (нет функций, Date, Symbol, BigInt).',
      'Рекурсивное копирование: ручная реализация для полного контроля.'
    ],
    tags: ['objects', 'copying', 'immutability', 'objects-advanced'],
    examples: [
      {
        title: "Поверхностное копирование",
        code: `const original = { name: "Alice", address: { city: "Moscow" } };\n\n// Spread оператор\nconst shallow1 = { ...original };\n\n// Object.assign\nconst shallow2 = Object.assign({}, original);\n\n// Изменение вложенного объекта влияет на оригинал\nshallow1.address.city = "SPB";\nconsole.log(original.address.city); // "SPB" (изменилось!)\n\n// Изменение первого уровня не влияет\nshallow1.name = "Bob";\nconsole.log(original.name); // "Alice" (не изменилось)`
      },
      {
        title: "Глубокое копирование через structuredClone",
        code: `const original = { name: "Alice", address: { city: "Moscow" } };\n\n// structuredClone - современный способ\nconst deep = structuredClone(original);\n\ndeep.address.city = "SPB";\nconsole.log(original.address.city); // "Moscow" (не изменилось)\n\n// Поддерживает: объекты, массивы, Map, Set, Date, RegExp, и др.\nconst complex = {\n  date: new Date(),\n  map: new Map([['key', 'value']]),\n  set: new Set([1, 2, 3])\n};\nconst cloned = structuredClone(complex);`
      },
      {
        title: "Глубокое копирование через JSON",
        code: `const original = { name: "Alice", age: 30 };\n\nconst deep = JSON.parse(JSON.stringify(original));\n\ndeep.name = "Bob";\nconsole.log(original.name); // "Alice" (не изменилось)\n\n// Ограничения:\nconst withLimitations = {\n  date: new Date(),\n  fn: function() {},\n  sym: Symbol('id'),\n  bigint: BigInt(123),\n  undefined: undefined\n};\n\nconst cloned = JSON.parse(JSON.stringify(withLimitations));\n// date стал строкой, fn/sym/bigint/undefined пропали`
      },
      {
        title: "Рекурсивное глубокое копирование",
        code: `function deepClone(obj) {\n  if (obj === null || typeof obj !== 'object') {\n    return obj;\n  }\n  \n  if (obj instanceof Date) {\n    return new Date(obj);\n  }\n  \n  if (obj instanceof Array) {\n    return obj.map(item => deepClone(item));\n  }\n  \n  if (typeof obj === 'object') {\n    const cloned = {};\n    for (const key in obj) {\n      if (obj.hasOwnProperty(key)) {\n        cloned[key] = deepClone(obj[key]);\n      }\n    }\n    return cloned;\n  }\n}\n\nconst original = { a: 1, b: { c: 2 } };\nconst cloned = deepClone(original);`
      }
    ],
    relatedTopics: ['objects-basic', 'object-methods', 'json-methods', 'structured-clone'],
  },
{
    id: 'structured-clone',
    title: 'structuredClone',
    difficulty: 'intermediate',
    description: 'structuredClone() создает глубокую копию объекта. Поддерживает большинство типов: объекты, массивы, Map, Set, Date, RegExp, ArrayBuffer, TypedArray. Не поддерживает функции, Symbol, некоторые встроенные объекты. Более надежный чем JSON.parse/stringify, но не такой гибкий как ручное копирование.',
    keyPoints: [
      'structuredClone(value): создает глубокую копию.',
      'Поддерживает: объекты, массивы, Map, Set, Date, RegExp, ArrayBuffer, TypedArray.',
      'Не поддерживает: функции, Symbol, некоторые встроенные объекты (Error, DOM nodes).',
      'Более надежный чем JSON.parse/stringify для сложных структур.',
      'Работает синхронно, может быть медленным для больших объектов.'
    ],
    tags: ['objects', 'copying', 'structured-clone', 'objects-advanced'],
    examples: [
      {
        title: "Базовое использование",
        code: `const original = {\n  name: "Alice",\n  address: { city: "Moscow" },\n  tags: ["js", "react"]\n};\n\nconst cloned = structuredClone(original);\ncloned.address.city = "SPB";\nconsole.log(original.address.city); // "Moscow" (не изменилось)`
      },
      {
        title: "Поддерживаемые типы",
        code: `const complex = {\n  date: new Date(),\n  map: new Map([['key', 'value']]),\n  set: new Set([1, 2, 3]),\n  regexp: /test/g,\n  arrayBuffer: new ArrayBuffer(8),\n  typedArray: new Uint8Array([1, 2, 3])\n};\n\nconst cloned = structuredClone(complex);\n// Все типы скопированы правильно`
      },
      {
        title: "Неподдерживаемые типы",
        code: `const withUnsupported = {\n  fn: function() {}, // TypeError\n  sym: Symbol('id'), // TypeError\n  error: new Error('test'), // TypeError\n  node: document.body // TypeError (DOM node)\n};\n\n// structuredClone(withUnsupported); // TypeError`
      },
      {
        title: "Клонирование с циклическими ссылками",
        code: `const obj = { name: "Alice" };\nobj.self = obj; // циклическая ссылка\n\n// structuredClone обрабатывает циклические ссылки\nconst cloned = structuredClone(obj);\nconsole.log(cloned.self === cloned); // true`
      }
    ],
    relatedTopics: ['object-copying', 'objects-basic', 'json-methods'],
  },
{
    id: 'object-comparison',
    title: 'Сравнение объектов',
    difficulty: 'intermediate',
    description: 'Объекты сравниваются по ссылке, а не по значению. === и == сравнивают ссылки. Для сравнения по значению нужно сравнивать свойства вручную или использовать библиотеки. Глубокое сравнение проверяет все вложенные свойства. Object.is() сравнивает примитивы строже чем ===.',
    keyPoints: [
      '=== сравнивает ссылки, не значения объектов.',
      'Два объекта с одинаковыми свойствами не равны (разные ссылки).',
      'Object.is() строже чем === для примитивов (NaN, +0/-0).',
      'Глубокое сравнение: проверка всех свойств рекурсивно.',
      'Поверхностное сравнение: проверка только первого уровня.'
    ],
    tags: ['objects', 'comparison', 'equality', 'objects-advanced'],
    examples: [
      {
        title: "Сравнение по ссылке",
        code: `const obj1 = { name: "Alice" };\nconst obj2 = { name: "Alice" };\nconst obj3 = obj1;\n\nconsole.log(obj1 === obj2); // false (разные ссылки)\nconsole.log(obj1 === obj3); // true (одна ссылка)\n\n// Массивы тоже\nconst arr1 = [1, 2, 3];\nconst arr2 = [1, 2, 3];\nconsole.log(arr1 === arr2); // false`
      },
      {
        title: "Object.is() для примитивов",
        code: `// Object.is строже чем ===\nconsole.log(NaN === NaN); // false\nconsole.log(Object.is(NaN, NaN)); // true\n\nconsole.log(+0 === -0); // true\nconsole.log(Object.is(+0, -0)); // false\n\n// Для объектов работает как ===\nconst obj1 = {};\nconst obj2 = {};\nconsole.log(Object.is(obj1, obj2)); // false`
      },
      {
        title: "Поверхностное сравнение",
        code: `function shallowEqual(obj1, obj2) {\n  const keys1 = Object.keys(obj1);\n  const keys2 = Object.keys(obj2);\n  \n  if (keys1.length !== keys2.length) return false;\n  \n  for (const key of keys1) {\n    if (obj1[key] !== obj2[key]) return false;\n  }\n  \n  return true;\n}\n\nconst obj1 = { a: 1, b: 2 };\nconst obj2 = { a: 1, b: 2 };\nconsole.log(shallowEqual(obj1, obj2)); // true\n\n// Но не работает для вложенных объектов\nconst obj3 = { a: 1, b: { c: 2 } };\nconst obj4 = { a: 1, b: { c: 2 } };\nconsole.log(shallowEqual(obj3, obj4)); // false (b сравнивается по ссылке)`
      },
      {
        title: "Глубокое сравнение",
        code: `function deepEqual(obj1, obj2) {\n  if (obj1 === obj2) return true;\n  \n  if (obj1 == null || obj2 == null) return false;\n  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;\n  \n  const keys1 = Object.keys(obj1);\n  const keys2 = Object.keys(obj2);\n  \n  if (keys1.length !== keys2.length) return false;\n  \n  for (const key of keys1) {\n    if (!keys2.includes(key)) return false;\n    if (!deepEqual(obj1[key], obj2[key])) return false;\n  }\n  \n  return true;\n}\n\nconst obj1 = { a: 1, b: { c: 2 } };\nconst obj2 = { a: 1, b: { c: 2 } };\nconsole.log(deepEqual(obj1, obj2)); // true`
      }
    ],
    relatedTopics: ['objects-basic', 'object-copying', 'comparison'],
  }
];
