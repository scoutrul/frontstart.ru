import { Topic } from '../../../types';

export const JS_FUNCTIONS_ADVANCED_TOPICS: Topic[] = [
{
    id: 'currying',
    title: 'Каррирование',
    difficulty: 'advanced',
    description: 'Каррирование — это приём, при котором функция с несколькими аргументами превращается в последовательность функций, каждая из которых принимает один аргумент. Проще говоря: вместо f(a, b, c) мы пишем f(a)(b)(c). Позволяет частично применять аргументы и создавать более гибкие функции.',
    keyPoints: [
      'Каррирование: f(a, b, c) → f(a)(b)(c) — функция возвращает функцию.',
      'Реализуется через замыкания и лексическое окружение.',
      'Позволяет частично применять аргументы, создавая специализированные функции.',
      'Полезно для создания универсальных, переиспользуемых функций.',
      'Основа функционального программирования, связана с this и контекстом через apply или bind.'
    ],
    funFact: 'Каррирование названо в честь математика Хаскелла Карри (Haskell Curry), хотя концепция была впервые описана Мозесом Шёнфинкелем (Moses Schönfinkel) в 1920-х годах.',
    tags: ['currying', 'functional', 'partial-application', 'patterns', 'higher-order-functions', 'closures-basic', 'lexical-scoping', 'lexical-environment', 'closure', 'this', 'this-basics', 'context'],
    examples: [
      {
        title: "Простой пример",
        code: `function sum(a) {
  return function(b) {
    return a + b;
  };
}

console.log(sum(2)(3)); // 5

// sum(2) возвращает функцию, которая ждёт следующий аргумент
// sum(2)(3) — сразу вычисляется результат`
      },
      {
        title: "Более универсальный вариант",
        code: `function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) { 
      return fn.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

// Пример:
function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24

// Используется замыкание, чтобы запомнить переданные аргументы
// apply(this, args) позволяет сохранить контекст и объединить все аргументы
// Можно вызывать через цепочку скобок или передавать несколько аргументов сразу`
      }
    ],
    relatedTopics: ['higher-order-functions', 'closures-basic', 'functions-types'],
    isFrontendEssential: true
  },
{
    id: 'memoization',
    title: 'Мемоизация',
    difficulty: 'advanced',
    description: 'Мемоизация — кэширование результатов функции для одинаковых аргументов. При повторном вызове с теми же аргументами возвращается кэшированное значение.',
    keyPoints: [
      'Кэширование результатов функции.',
      'Проверка: были ли такие аргументы ранее.',
      'Возврат кэша или вычисление и сохранение.',
      'Ускоряет повторные вычисления.',
      'Используется в React.memo, useMemo.'
    ],
    funFact: 'Мемоизация — это техника оптимизации, которая пришла из функционального программирования. В JavaScript она особенно полезна для дорогих вычислений и рекурсивных функций, таких как вычисление чисел Фибоначчи.',
    tags: ['memoization', 'performance', 'optimization', 'caching', 'recursion', 'higher-order-functions'],
    examples: [
      {
        title: "Простая мемоизация",
        code: `function memoize(fn) {\n  const cache = {};\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache[key]) {\n      return cache[key];\n    }\n    const result = fn.apply(this, args);\n    cache[key] = result;\n    return result;\n  };\n}\n\nconst expensive = (n) => {\n  console.log("Computing...");\n  return n * 2;\n};\n\nconst memoized = memoize(expensive);\nmemoized(5); // Computing... 10\nmemoized(5); // 10 (из кэша)`
      },
      {
        title: "Мемоизация факториала",
        code: `const memoFactorial = memoize(function(n) {\n  if (n <= 1) return 1;\n  return n * memoFactorial(n - 1);\n});\n\nmemoFactorial(5); // Вычисляет 5, 4, 3, 2, 1\nmemoFactorial(6); // Использует кэш для 5, вычисляет только 6`
      },
      {
        title: "Мемоизация с Map",
        code: `function memoizeMap(fn) {\n  const cache = new Map();\n  return function(...args) {\n    const key = args.join(',');\n    if (cache.has(key)) {\n      return cache.get(key);\n    }\n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    return result;\n  };\n}`
      },
      {
        title: "Оптимизация Фибоначчи через мемоизацию",
        code: `function memoize(fn) {\n  const cache = {};\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache[key]) {\n      return cache[key];\n    }\n    const result = fn.apply(this, args);\n    cache[key] = result;\n    return result;\n  };\n}\n\nconst fibMemo = memoize(function(n) {\n  if (n <= 1) return n;\n  return fibMemo(n - 1) + fibMemo(n - 2);\n});\n\n// Теперь можно безопасно вычислять большие числа\nfibMemo(40); // Быстро, использует кэш\nfibMemo(50); // Оптимально, избегает повторных вычислений\n\n// Без мемоизации fib(40) создал бы миллионы вызовов в стеке\n// С мемоизацией каждый fib(n) вычисляется только один раз`
      }
    ],
    relatedTopics: ['recursion', 'higher-order-functions', 'performance'],
    isFrontendEssential: true
  }
];
