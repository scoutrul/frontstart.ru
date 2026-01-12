import { InterviewQuestion } from '../../../types';

export const JAVASCRIPT_ADVANCED_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'js-advanced-promise',
    question: 'Что такое Promise и как работает цепочка промисов?',
    answer: 'Promise — объект для асинхронных операций. Цепочка промисов позволяет последовательно обрабатывать результаты через then/catch.',
    category: 'javascript',
    difficulty: 'advanced',
    tags: ['javascript', 'promise', 'async', 'asynchronous']
  },
  {
    id: 'js-advanced-async-await',
    question: 'Что такое async/await и как обрабатывать ошибки?',
    answer: 'Синтаксический сахар над промисами. Ошибки обрабатываются через try/catch или .catch() на промисах.',
    category: 'javascript',
    difficulty: 'advanced',
    tags: ['javascript', 'async', 'await', 'error-handling']
  },
  {
    id: 'js-advanced-race-condition',
    question: 'Что такое race condition (гонка) и как ее избежать?',
    answer: 'Ситуация, когда результат зависит от порядка выполнения асинхронных операций. Решения: отмена предыдущих запросов (AbortController), игнорирование устаревших результатов, использование Promise.all/race.',
    category: 'javascript',
    difficulty: 'advanced',
    tags: ['javascript', 'async', 'race-condition', 'concurrency']
  },
  {
    id: 'js-advanced-abort-controller',
    question: 'Как реализовать отмену запросов (AbortController)?',
    answer: 'Создать AbortController, передать signal в fetch, вызвать abort() для отмены. Запрос прервется с ошибкой AbortError.',
    category: 'javascript',
    difficulty: 'advanced',
    tags: ['javascript', 'fetch', 'abort-controller', 'cancellation']
  },
  {
    id: 'js-advanced-classes',
    question: 'Как работают классы в ES6?',
    answer: 'Классы — синтаксический сахар над прототипами. Поддерживают конструктор, методы, наследование через extends, статические методы и свойства.',
    category: 'javascript',
    difficulty: 'advanced',
    tags: ['javascript', 'classes', 'es6', 'oop', 'inheritance']
  },
  {
    id: 'js-advanced-static',
    question: 'Что такое статические методы и свойства?',
    answer: 'Методы и свойства, принадлежащие классу, а не экземплярам. Вызываются через имя класса, не требуют создания экземпляра.',
    category: 'javascript',
    difficulty: 'advanced',
    tags: ['javascript', 'classes', 'static', 'oop']
  },
  {
    id: 'js-advanced-logical-assignment',
    question: 'Что такое операторы логического присваивания (||=, &&=)?',
    answer: 'Операторы присваивают значение только если левая часть falsy (||=) или truthy (&&=). Упрощают код: x ||= defaultValue.',
    category: 'javascript',
    difficulty: 'advanced',
    tags: ['javascript', 'operators', 'assignment', 'es2021']
  },
  {
    id: 'js-advanced-optional-chaining',
    question: 'В чем разница между ?. (опциональная цепочка), ?? (нулевое слияние) и || (логическое ИЛИ)?',
    answer: '?. безопасно обращается к свойствам, ?? возвращает правое значение при null/undefined, || возвращает правое при любом falsy значении.',
    category: 'javascript',
    difficulty: 'advanced',
    tags: ['javascript', 'operators', 'optional-chaining', 'nullish-coalescing']
  },
  {
    id: 'js-advanced-increment',
    question: 'Чем отличается префиксный инкремент (++i) от постфиксного (i++)?',
    answer: 'Префиксный возвращает значение после увеличения, постфиксный — до увеличения. В циклах разница незначительна, но важна в выражениях.',
    category: 'javascript',
    difficulty: 'advanced',
    tags: ['javascript', 'operators', 'increment', 'basics']
  },
  {
    id: 'js-advanced-heavy-computations',
    question: 'Как обрабатывать тяжёлые вычисления на фронте?',
    answer: 'Использовать Web Workers или дробление задач через макрозадачи (setTimeout, requestIdleCallback) для избежания блокировки UI.',
    category: 'javascript',
    difficulty: 'advanced',
    tags: ['javascript', 'performance', 'web-workers', 'optimization']
  },
  {
    id: 'js-advanced-oop-concepts',
    question: 'Что такое инкапсуляция, полиморфизм, наследование?',
    answer: 'Инкапсуляция — сокрытие внутренней реализации. Полиморфизм — способность объектов разных типов обрабатываться одинаково. Наследование — механизм создания новых классов на основе существующих.',
    category: 'javascript',
    difficulty: 'advanced',
    tags: ['javascript', 'oop', 'encapsulation', 'polymorphism', 'inheritance']
  },
  {
    id: 'js-advanced-arguments',
    question: 'Что такое arguments и как с ним работать?',
    answer: 'Псевдомассив аргументов функции. В стрелочных функциях недоступен. Можно преобразовать в массив через Array.from() или spread оператор.',
    category: 'javascript',
    difficulty: 'advanced',
    tags: ['javascript', 'functions', 'arguments', 'arrow-functions']
  },
  {
    id: 'js-advanced-array-mutating',
    question: 'Какие методы массивов для изменения исходного массива вы знаете?',
    answer: 'push(), pop(), shift(), unshift(), splice(), sort(), reverse(). Эти методы мутируют исходный массив.',
    category: 'javascript',
    difficulty: 'advanced',
    tags: ['javascript', 'arrays', 'methods', 'mutation']
  },
  {
    id: 'js-advanced-settimeout-interval',
    question: 'В чем разница между setTimeout, setInterval, requestAnimationFrame?',
    answer: 'setTimeout выполняет функцию один раз через задержку, setInterval — периодически, requestAnimationFrame — перед следующей перерисовкой (оптимально для анимаций).',
    category: 'javascript',
    difficulty: 'advanced',
    tags: ['javascript', 'timers', 'animation', 'performance']
  }
];
