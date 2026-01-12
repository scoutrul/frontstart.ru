import { InterviewQuestion } from '../../../types';

export const TYPESCRIPT_BEGINNER_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'ts-beginner-basic-types',
    question: 'Какие базовые типы TypeScript вы знаете?',
    answer: 'string, number, boolean, null, undefined, void, any, unknown, never, object, array, tuple, enum.',
    category: 'typescript',
    difficulty: 'beginner',
    tags: ['typescript', 'types', 'basics']
  },
  {
    id: 'ts-beginner-type-vs-interface',
    question: 'В чем разница между type и interface?',
    answer: 'type универсален, interface ориентирован на объекты и поддерживает declaration merging.',
    category: 'typescript',
    difficulty: 'beginner',
    tags: ['typescript', 'types', 'interfaces', 'basics']
  },
  {
    id: 'ts-beginner-any-unknown-never',
    question: 'Для чего нужны any, unknown, never?',
    answer: 'any — небезопасен, unknown требует проверки, never обозначает невозможное значение.',
    category: 'typescript',
    difficulty: 'beginner',
    tags: ['typescript', 'types', 'any', 'unknown', 'never', 'basics']
  },
  {
    id: 'ts-beginner-function-typing',
    question: 'Как типизировать функции, массивы, объекты?',
    answer: 'Функции: (param: type) => returnType. Массивы: type[] или Array<type>. Объекты: { key: type } или interface/type.',
    category: 'typescript',
    difficulty: 'beginner',
    tags: ['typescript', 'types', 'functions', 'arrays', 'objects', 'basics']
  },
  {
    id: 'ts-beginner-void-null-undefined',
    question: 'Что такое void, null, undefined?',
    answer: 'void — отсутствие возвращаемого значения, null — явное отсутствие значения, undefined — неопределенное значение.',
    category: 'typescript',
    difficulty: 'beginner',
    tags: ['typescript', 'types', 'void', 'null', 'undefined', 'basics']
  }
];
