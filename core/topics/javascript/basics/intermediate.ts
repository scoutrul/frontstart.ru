import { Topic } from '../../../types';

export const JS_BASICS_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'execution-context-basics',
    title: 'Execution Context (Контекст выполнения)',
    difficulty: 'intermediate',
    description: 'Execution Context — это абстрактная среда выполнения кода в JavaScript. Создаётся для глобального кода и каждого вызова функции. Каждый контекст содержит Lexical Environment, this и ссылку на внешний контекст. Понимание контекстов выполнения объясняет порядок выполнения кода и доступ к переменным.',
    keyPoints: [
      'Типы контекстов: Global Execution Context (глобальный код), Function Execution Context (вызов функции).',
      'Структура контекста: Lexical Environment, This Binding, ссылка на внешний контекст.',
      'Фаза создания: код не выполняется, создаётся Lexical Environment, регистрируются объявления.',
      'Фаза выполнения: код выполняется построчно, присваиваются значения, вызываются функции.',
      'Поведение объявлений: function declaration полностью инициализируется, var создаётся как undefined, let/const создаётся но не инициализируется (TDZ).',
      'JavaScript-движок (V8, SpiderMonkey) управляет контекстами через Call Stack.'
    ],
    funFact: 'Execution Context — это не JavaScript-объект, а внутренняя структура данных движка. Мы не можем напрямую получить к нему доступ, но его поведение влияет на весь код.',
    tags: ['execution-context', 'runtime', 'internals', 'basics', 'context'],
    examples: [
      {
        title: "Глобальный Execution Context",
        code: `// Глобальный контекст создается при загрузке скрипта
var globalVar = 'global';
let globalLet = 'global';

console.log(globalVar); // 'global'
console.log(globalLet); // 'global'

// В глобальном контексте:
// - Lexical Environment содержит все глобальные переменные
// - This Binding = window (браузер) или global (Node.js)`
      },
      {
        title: "Function Execution Context",
        code: `function test(a, b) {
  var funcVar = 'var';
  let funcLet = 'let';
  
  console.log(a, b); // параметры функции
  console.log(funcVar, funcLet); // 'var', 'let'
}

test(1, 2);

// При вызове test создается новый контекст:
// - Фаза создания: регистрация var, let, параметров
// - Фаза выполнения: выполнение кода построчно`
      },
      {
        title: "Фазы Execution Context",
        code: `function example() {
  // ФАЗА СОЗДАНИЯ:
  // - var a создается и инициализируется undefined
  // - function sayHi полностью инициализируется
  // - let b создается, но в TDZ
  
  console.log(a); // undefined (var зарегистрирован)
  console.log(sayHi); // function (полностью доступна)
  // console.log(b); // ReferenceError (let в TDZ)
  
  var a = 10;
  let b = 20;
  
  function sayHi() {
    console.log('Hi');
  }
  
  // ФАЗА ВЫПОЛНЕНИЯ:
  // - Выполняется код построчно
  // - Присваиваются значения
  
  console.log(a); // 10
  console.log(b); // 20
  sayHi(); // 'Hi'
}

example();`
      }
    ],
    relatedTopics: ['parsing-and-execution', 'lexical-environment-basics', 'call-stack-basics', 'execution-context'],
    isFrontendEssential: true
  },
  {
    id: 'lexical-environment-basics',
    title: 'Lexical Environment (Лексическое окружение)',
    difficulty: 'intermediate',
    description: 'Lexical Environment — структура данных в памяти движка, содержащая Environment Record (таблицу имён переменных) и ссылку на внешнее окружение. Каждый блок {} и каждая функция могут создавать своё лексическое окружение. Это основа работы scope, closures и доступа к переменным.',
    keyPoints: [
      'Структура: Environment Record (таблица имён) + Outer Reference (ссылка на внешнее окружение).',
      'Создаётся для: глобального кода, функций, блоков {} (для let/const).',
      'Environment Record хранит: объявления переменных, функций, параметры функции.',
      'Outer Reference: связь с родительским окружением, формирует Scope Chain.',
      'Lexical Environment ≠ window/global: это внутренняя структура движка, не JS-объект.',
      'Определяется лексически: структура окружений фиксируется при парсинге кода.'
    ],
    funFact: 'Lexical Environment существует только в памяти движка и недоступна напрямую из JavaScript-кода. Это внутренняя реализация, которая обеспечивает работу scope и closures.',
    tags: ['lexical-environment', 'scope', 'internals', 'basics', 'environment'],
    examples: [
      {
        title: "Структура Lexical Environment",
        code: `let global = 'global';

function outer() {
  let outerVar = 'outer';
  
  function inner() {
    let innerVar = 'inner';
    console.log(global, outerVar, innerVar);
  }
  
  inner();
}

outer();

// Lexical Environments:
// Global: { global: 'global', outer: function }
//   ↓ (Outer Reference)
// Outer: { outerVar: 'outer', inner: function }
//   ↓ (Outer Reference)
// Inner: { innerVar: 'inner' }`
      },
      {
        title: "Environment Record и Outer Reference",
        code: `const x = 1;

function test() {
  const y = 2;
  
  // Environment Record test: { y: 2 }
  // Outer Reference → Global Environment
  
  console.log(x); // 1 (найдено через Outer Reference)
  console.log(y); // 2 (найдено в текущем Environment Record)
}

test();`
      },
      {
        title: "Блок создаёт Lexical Environment",
        code: `let a = 1;

{
  let b = 2;
  // Новое Lexical Environment для блока
  // Environment Record: { b: 2 }
  // Outer Reference → Global Environment
  
  console.log(a); // 1 (из глобального окружения)
  console.log(b); // 2 (из текущего окружения)
}

// console.log(b); // ReferenceError (блок завершился)`
      }
    ],
    relatedTopics: ['execution-context-basics', 'scope-types', 'scope-chain', 'lexical-env'],
    isFrontendEssential: true
  },
  {
    id: 'scope-types',
    title: 'Scope: типы и реализация',
    difficulty: 'intermediate',
    description: 'Scope (область видимости) — это правило доступа к идентификаторам. Определяется на этапе парсинга через Lexical Environment, не зависит от порядка вызова функций. JavaScript использует лексический scope (статический), где доступ к переменным определяется структурой кода, а не порядком выполнения.',
    keyPoints: [
      'Типы scope: Global Scope (глобальный), Function Scope (функциональный), Block Scope (блочный).',
      'Лексический scope: определяется структурой кода при парсинге, не меняется во время выполнения.',
      'Scope реализуется через Lexical Environment: каждое окружение определяет свою область видимости.',
      'Scope ≠ Execution Context: Scope определяет доступ к переменным, Execution Context — среду выполнения.',
      'var имеет function scope: видна во всей функции, независимо от блоков.',
      'let/const имеют block scope: видны только внутри блока {}.'
    ],
    funFact: 'JavaScript использует лексический (статический) scope, в отличие от динамического scope в некоторых других языках. Это означает, что доступ к переменным определяется местом объявления в коде, а не местом вызова функции.',
    tags: ['scope', 'lexical-scoping', 'function-scope', 'block-scope', 'basics'],
    examples: [
      {
        title: "Типы Scope",
        code: `// Global Scope
const global = 'global';

function outer() {
  // Function Scope
  var funcVar = 'function scope';
  let blockVar = 'function scope';
  
  if (true) {
    // Block Scope (для let/const)
    let blockLet = 'block scope';
    var blockVar2 = 'function scope'; // var не имеет block scope!
    
    console.log(blockLet); // 'block scope'
    console.log(funcVar); // 'function scope'
  }
  
  // console.log(blockLet); // ReferenceError
  console.log(blockVar2); // 'function scope' (var видна!)`
      },
      {
        title: "Лексический Scope",
        code: `let x = 1;

function outer() {
  let x = 2;
  
  function inner() {
    console.log(x); // 2 (из outer, не из global!)
    // Лексический scope: доступ определяется структурой кода
  }
  
  inner();
}

outer();

// Порядок вызова не важен, важен порядок вложенности`
      },
      {
        title: "Scope vs Execution Context",
        code: `// Scope определяется структурой кода
let x = 1;

function test() {
  // Scope: test имеет доступ к x из глобального scope
  console.log(x); // 1
}

test();

// Execution Context создается при вызове
// Scope определяется при парсинге

// Scope = "где видна переменная"
// Execution Context = "когда и как выполняется код"`
      },
      {
        title: "Block Scope для let/const",
        code: `if (true) {
  let a = 1;
  const b = 2;
  var c = 3; // function scope, не block scope!
}

// console.log(a); // ReferenceError (block scope)
// console.log(b); // ReferenceError (block scope)
console.log(c); // 3 (var видна!)`
      }
    ],
    relatedTopics: ['execution-context-basics', 'lexical-environment-basics', 'scope-chain', 'var-let-const']
  },
  {
    id: 'hoisting-tdz-mechanism',
    title: 'Hoisting и TDZ: механизм работы',
    difficulty: 'intermediate',
    description: 'Hoisting и TDZ — это результаты работы фазы создания Execution Context. var инициализируется как undefined, function declaration полностью инициализируется, let/const создаётся но остаётся в TDZ до строки объявления. Это не "магия", а следствие того, как движок обрабатывает код в две фазы.',
    keyPoints: [
      'Hoisting — результат Creation Phase: объявления регистрируются до выполнения кода.',
      'var в Creation Phase: создаётся и инициализируется undefined, доступна до строки объявления.',
      'function declaration в Creation Phase: полностью инициализируется, доступна до объявления.',
      'let/const в Creation Phase: создаётся, но не инициализируется, находится в TDZ до строки объявления.',
      'TDZ (Temporal Dead Zone): период от начала Creation Phase до строки объявления для let/const.',
      'Обращение к переменной в TDZ вызывает ReferenceError, var возвращает undefined.',
      'TDZ — сознательное ограничение ES6 для предотвращения ошибок использования неинициализированных переменных.'
    ],
    funFact: 'TDZ был введён в ES6 специально для let и const, чтобы предотвратить ошибки, которые возможны с var. Это пример того, как язык эволюционирует, исправляя прошлые проблемы.',
    tags: ['hoisting', 'tdz', 'execution-context', 'creation-phase', 'basics'],
    examples: [
      {
        title: "Hoisting через фазы Execution Context",
        code: `// CREATION PHASE:
// - var a создается и инициализируется undefined
// - function sayHi полностью инициализируется
// - let b создается, но в TDZ

console.log(a); // undefined (var зарегистрирован)
console.log(sayHi); // function (полностью доступна)
// console.log(b); // ReferenceError (let в TDZ)

// EXECUTION PHASE:
var a = 10;
let b = 20;

function sayHi() {
  console.log('Hi');
}

console.log(a); // 10
console.log(b); // 20`
      },
      {
        title: "TDZ для let/const",
        code: `{
  // TDZ начинается с входа в блок
  // let x существует, но недоступен
  
  // console.log(x); // ReferenceError (TDZ)
  // console.log(y); // ReferenceError (TDZ)
  
  let x = 5;
  const y = 10;
  
  // TDZ заканчивается на строке объявления
  console.log(x); // 5 (OK)
  console.log(y); // 10 (OK)
}`
      },
      {
        title: "var не имеет TDZ",
        code: `{
  // var инициализируется undefined в Creation Phase
  console.log(a); // undefined (не ошибка!)
  
  var a = 10;
  console.log(a); // 10
}

// let/const имеют TDZ
{
  // console.log(b); // ReferenceError (TDZ)
  let b = 20;
}`
      },
      {
        title: "TDZ в параметрах функции",
        code: `// TDZ может возникнуть в параметрах
function test(x = y, y = 2) {
  // ReferenceError: y в TDZ при инициализации x
  // y еще не инициализирован, когда используется для x
}

// Правильно:
function test2(x = 2, y = x) {
  // OK: x уже инициализирован
  console.log(x, y); // 2, 2
}

test2();`
      }
    ],
    relatedTopics: ['execution-context-basics', 'parsing-and-execution', 'hoisting-basic', 'tdz-basic', 'var-let-const'],
    isFrontendEssential: true
  },
  {
    id: 'call-stack-basics',
    title: 'Call Stack и порядок выполнения',
    difficulty: 'intermediate',
    description: 'Call Stack (стек вызовов) — структура данных, управляющая Execution Contexts. Работает по принципу LIFO (Last In First Out): последний добавленный контекст выполняется первым. JavaScript однопоточен, поэтому всегда есть только один Call Stack. При входе в функцию контекст добавляется в стек, при выходе — удаляется.',
    keyPoints: [
      'Call Stack: стек Execution Contexts, управляет порядком выполнения кода.',
      'LIFO принцип: последний добавленный контекст выполняется первым, удаляется первым.',
      'JavaScript однопоточен: всегда один Call Stack, один контекст выполняется в момент времени.',
      'При вызове функции: создаётся Function Execution Context, добавляется в стек (push).',
      'При завершении функции: контекст удаляется из стека (pop), управление возвращается предыдущему.',
      'Stack Overflow: переполнение стека при слишком глубокой рекурсии (~10000-50000 вызовов).',
      'Глобальный контекст: всегда внизу стека, создаётся при загрузке скрипта.'
    ],
    funFact: 'Call Stack имеет ограничение по глубине. В большинстве браузеров это около 10000-50000 вызовов. При превышении возникает ошибка "Maximum call stack size exceeded".',
    tags: ['call-stack', 'execution-context', 'runtime', 'stack', 'basics'],
    examples: [
      {
        title: "Как работает Call Stack",
        code: `function first() {
  console.log('First');
  second();
  console.log('First end');
}

function second() {
  console.log('Second');
  third();
  console.log('Second end');
}

function third() {
  console.log('Third');
}

first();

// Call Stack (снизу вверх):
// [Global Execution Context]
// [First Execution Context] <- создан при вызове first()
// [Second Execution Context] <- создан при вызове second()
// [Third Execution Context] <- выполняется сейчас
// Вывод: First, Second, Third, Second end, First end`
      },
      {
        title: "LIFO принцип",
        code: `function a() {
  console.log('A start');
  b();
  console.log('A end');
}

function b() {
  console.log('B start');
  c();
  console.log('B end');
}

function c() {
  console.log('C');
}

a();

// Порядок выполнения (LIFO):
// 1. a() добавляется в стек
// 2. b() добавляется в стек (поверх a)
// 3. c() добавляется в стек (поверх b)
// 4. c() выполняется и удаляется
// 5. b() продолжается и удаляется
// 6. a() продолжается и удаляется`
      },
      {
        title: "Stack Overflow",
        code: `// Переполнение стека
function infinite() {
  infinite(); // бесконечная рекурсия
}

// infinite(); // RangeError: Maximum call stack size exceeded

// Глубокая рекурсия
function deep(n) {
  if (n <= 0) return;
  deep(n - 1); // каждый вызов добавляет контекст в стек
}

// deep(100000); // может вызвать переполнение
// Обычный лимит: ~10000-50000 вызовов`
      },
      {
        title: "Call Stack и Execution Context",
        code: `let global = 'global';

function test() {
  let local = 'local';
  console.log(global, local);
  
  // В этот момент в Call Stack:
  // [Global Execution Context] <- внизу
  // [Test Execution Context] <- выполняется сейчас
}

test();

// После завершения test:
// [Global Execution Context] <- остается
// Test Execution Context удален из стека`
      }
    ],
    relatedTopics: ['execution-context-basics', 'lexical-environment-basics', 'call-stack', 'event-loop'],
    isFrontendEssential: true
  }
];
