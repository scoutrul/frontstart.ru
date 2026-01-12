import { InterviewQuestion } from '../../../types';

export const TYPESCRIPT_INTERMEDIATE_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'ts-intermediate-union-intersection',
    question: 'Что такое union и intersection типы?',
    answer: 'Union: string | number (либо одно, либо другое). Intersection: A & B (объединение всех свойств).',
    category: 'typescript',
    difficulty: 'intermediate',
    tags: ['typescript', 'types', 'union', 'intersection']
  },
  {
    id: 'ts-intermediate-utility-types',
    question: 'Как работать с типами Record, Partial, Required, Pick, Omit?',
    answer: 'Record<K, V> — объект с ключами K и значениями V. Partial делает все поля опциональными, Required — обязательными. Pick выбирает поля, Omit исключает.',
    category: 'typescript',
    difficulty: 'intermediate',
    tags: ['typescript', 'utility-types', 'types']
  },
  {
    id: 'ts-intermediate-generics-basic',
    question: 'Что такое дженерики и зачем они нужны?',
    answer: 'Дженерики позволяют создавать компоненты с параметризуемыми типами, обеспечивая переиспользование кода с сохранением типобезопасности.',
    category: 'typescript',
    difficulty: 'intermediate',
    tags: ['typescript', 'generics', 'types']
  },
  {
    id: 'ts-intermediate-type-assertion',
    question: 'Что такое type assertion и когда его допустимо использовать?',
    answer: 'Принудительное указание типа, допустимо при работе с не типизированными библиотеками или после явных проверок.',
    category: 'typescript',
    difficulty: 'intermediate',
    tags: ['typescript', 'type-assertion', 'types', 'as']
  },
  {
    id: 'ts-intermediate-utility-types-purpose',
    question: 'Что такое утилитарные типы?',
    answer: 'Встроенные типы для трансформации других типов без дублирования кода.',
    category: 'typescript',
    difficulty: 'intermediate',
    tags: ['typescript', 'utility-types', 'types']
  }
];
