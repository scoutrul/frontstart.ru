import { Topic } from '../../../types';

export const JS_ASYNC_ADVANCED_TOPICS: Topic[] = [
{
    id: 'generators',
    title: 'Generators',
    difficulty: 'advanced',
    description: 'Генератор — функция с yield, которая приостанавливает выполнение и возвращает значение. При вызове возвращает итератор. next() возобновляет выполнение. Используется для ленивых вычислений, бесконечных последовательностей, сложной асинхронной логики.',
    keyPoints: [
      'Возвращают объект-итератор.',
      'Основа для сложных асинхронных паттернов.'
    ],
    tags: ['generators', 'iterators', 'yield'],
    examples: [
      {
        title: "Простой генератор",
        code: `function* gen() {\n  yield 1;\n  yield 2;\n}\nconst g = gen();\ng.next().value; // 1`
      },
      {
        title: "Генератор с параметрами",
        code: `function* counter(start) {\n  let count = start;\n  while (true) {\n    yield count++;\n  }\n}\nconst c = counter(10);\nc.next().value; // 10\nc.next().value; // 11`
      },
      {
        title: "Передача значений в генератор",
        code: `function* gen() {\n  const x = yield 1;\n  const y = yield x + 2;\n  return y;\n}\nconst g = gen();\ng.next(); // { value: 1, done: false }\ng.next(10); // { value: 12, done: false }\ng.next(20); // { value: 20, done: true }`
      }
    ],
    relatedTopics: ['async-await'],
    isFrontendEssential: true
  }
];
