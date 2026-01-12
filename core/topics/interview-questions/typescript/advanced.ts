import { InterviewQuestion } from '../../../types';

export const TYPESCRIPT_ADVANCED_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'ts-advanced-declaration-merging',
    question: 'Что такое declaration merging?',
    answer: 'Автоматическое объединение интерфейсов с одинаковыми именами.',
    category: 'typescript',
    difficulty: 'advanced',
    tags: ['typescript', 'declaration-merging', 'interfaces']
  },
  {
    id: 'ts-advanced-mapped-types',
    question: 'Что такое mapped types?',
    answer: 'Типы, создаваемые перебором ключей другого типа.',
    category: 'typescript',
    difficulty: 'advanced',
    tags: ['typescript', 'mapped-types', 'types']
  },
  {
    id: 'ts-advanced-conditional-types',
    question: 'Что такое conditional types?',
    answer: 'Типы, которые выбирают один из двух типов на основе условия: T extends U ? X : Y.',
    category: 'typescript',
    difficulty: 'advanced',
    tags: ['typescript', 'conditional-types', 'types']
  },
  {
    id: 'ts-advanced-type-guards',
    question: 'Что такое type guards и как их использовать?',
    answer: 'Функции, сужающие тип (typeof, instanceof, пользовательские). Помогают TypeScript понять тип в условных блоках.',
    category: 'typescript',
    difficulty: 'advanced',
    tags: ['typescript', 'type-guards', 'types', 'narrowing']
  },
  {
    id: 'ts-advanced-generics-constraints',
    question: 'Что такое ограничения дженериков (extends)?',
    answer: 'Ограничение типа параметра: T extends SomeType. Обеспечивает, что дженерик имеет определенные свойства или методы.',
    category: 'typescript',
    difficulty: 'advanced',
    tags: ['typescript', 'generics', 'constraints', 'extends']
  },
  {
    id: 'ts-advanced-generic-function',
    question: 'Как создать обобщенную функцию/компонент?',
    answer: 'function name<T>(param: T): T { ... } или const Component = <T,>(props: Props<T>) => { ... }.',
    category: 'typescript',
    difficulty: 'advanced',
    tags: ['typescript', 'generics', 'functions', 'components']
  }
];
