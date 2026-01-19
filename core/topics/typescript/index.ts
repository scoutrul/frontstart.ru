import { Category } from '../../types';
import { TYPESCRIPT_INTRODUCTION_TOPICS } from './introduction';
import { TYPESCRIPT_TYPES_TOPICS } from './types';
import { TYPESCRIPT_INTERFACES_TYPES_TOPICS } from './interfaces-types';
import { TYPESCRIPT_GENERICS_TOPICS } from './generics';
import { TYPESCRIPT_UTILITY_TYPES_TOPICS } from './utility-types';
import { TYPESCRIPT_ADVANCED_TYPES_TOPICS } from './advanced-types';
import { TYPESCRIPT_FUNCTIONS_TOPICS } from './functions';
import { TYPESCRIPT_CLASSES_TOPICS } from './classes';
import { TYPESCRIPT_MODULES_TOPICS } from './modules';
import { TYPESCRIPT_CONFIG_TOOLS_TOPICS } from './config-tools';
import { TYPESCRIPT_DATA_HANDLING_TOPICS } from './data-handling';
import { TYPESCRIPT_PATTERNS_TOPICS } from './patterns';
import { TYPESCRIPT_REACT_TYPING_TOPICS } from './react-typing';
import { TYPESCRIPT_VUE_TYPING_TOPICS } from './vue-typing';
import { TYPESCRIPT_ANGULAR_TYPING_TOPICS } from './angular-typing';
import { TYPESCRIPT_ERRORS_DEBUGGING_TOPICS } from './errors-debugging';

export const TYPESCRIPT_CATEGORIES: Category[] = [
  {
    id: 'ts-introduction',
    title: 'Введение в TypeScript',
    description: 'Что такое TypeScript, зачем он нужен, как начать использовать в проекте.',
    topics: TYPESCRIPT_INTRODUCTION_TOPICS
  },
  {
    id: 'ts-types',
    title: 'Типы и типизация',
    description: 'Примитивы, массивы, объекты, union/intersection, literal types, type narrowing.',
    topics: TYPESCRIPT_TYPES_TOPICS
  },
  {
    id: 'ts-interfaces-types',
    title: 'Интерфейсы и типы',
    description: 'interface vs type, расширение, слияние деклараций, когда что использовать.',
    topics: TYPESCRIPT_INTERFACES_TYPES_TOPICS
  },
  {
    id: 'ts-generics',
    title: 'Дженерики',
    description: 'Обобщённые типы, constraints, infer, условные типы — переиспользуемая типизация.',
    topics: TYPESCRIPT_GENERICS_TOPICS
  },
  {
    id: 'ts-utility-types',
    title: 'Utility Types',
    description: 'Partial, Required, Pick, Omit, Record и другие встроенные утилиты.',
    topics: TYPESCRIPT_UTILITY_TYPES_TOPICS
  },
  {
    id: 'ts-advanced-types',
    title: 'Продвинутые типы',
    description: 'Mapped types, template literal types, keyof, typeof, рекурсивные типы.',
    topics: TYPESCRIPT_ADVANCED_TYPES_TOPICS
  },
  {
    id: 'ts-functions',
    title: 'Функции',
    description: 'Типизация параметров, возвращаемых значений, overloads, this-типы.',
    topics: TYPESCRIPT_FUNCTIONS_TOPICS
  },
  {
    id: 'ts-classes',
    title: 'Классы и ООП',
    description: 'Модификаторы доступа, abstract классы, implements, декораторы.',
    topics: TYPESCRIPT_CLASSES_TOPICS
  },
  {
    id: 'ts-modules',
    title: 'Модули и пространства имен',
    description: 'ES-модули, declaration files (.d.ts), ambient modules, типы для npm-пакетов.',
    topics: TYPESCRIPT_MODULES_TOPICS
  },
  {
    id: 'ts-config-tools',
    title: 'Конфигурация и инструменты',
    description: 'tsconfig.json, strict mode, интеграция с ESLint, сборщиками, IDE.',
    topics: TYPESCRIPT_CONFIG_TOOLS_TOPICS
  },
  {
    id: 'ts-data-handling',
    title: 'Работа с данными',
    description: 'Типизация API-ответов, JSON, формы, валидация с Zod/io-ts.',
    topics: TYPESCRIPT_DATA_HANDLING_TOPICS
  },
  {
    id: 'ts-patterns',
    title: 'Практические паттерны',
    description: 'Типизация событий, DOM, паттерны проектирования на TypeScript.',
    topics: TYPESCRIPT_PATTERNS_TOPICS
  },
  {
    id: 'ts-react-typing',
    title: 'Типизация для React',
    description: 'Props, state, hooks, события, контекст, HOC — React + TypeScript.',
    topics: TYPESCRIPT_REACT_TYPING_TOPICS
  },
  {
    id: 'ts-vue-typing',
    title: 'Типизация для Vue',
    description: 'Composition API, defineComponent, типизация emit, props, slots.',
    topics: TYPESCRIPT_VUE_TYPING_TOPICS
  },
  {
    id: 'ts-angular-typing',
    title: 'Типизация для Angular',
    description: 'Сервисы, DI, RxJS, формы, HTTP — Angular полностью на TypeScript.',
    topics: TYPESCRIPT_ANGULAR_TYPING_TOPICS
  },
  {
    id: 'ts-errors-debugging',
    title: 'Ошибки и отладка',
    description: 'Частые ошибки TS, как читать сообщения компилятора, отладка типов.',
    topics: TYPESCRIPT_ERRORS_DEBUGGING_TOPICS
  }
];

// Экспорт плоского массива для обратной совместимости
export const TYPESCRIPT_TOPICS = [
  ...TYPESCRIPT_INTRODUCTION_TOPICS,
  ...TYPESCRIPT_TYPES_TOPICS,
  ...TYPESCRIPT_INTERFACES_TYPES_TOPICS,
  ...TYPESCRIPT_GENERICS_TOPICS,
  ...TYPESCRIPT_UTILITY_TYPES_TOPICS,
  ...TYPESCRIPT_ADVANCED_TYPES_TOPICS,
  ...TYPESCRIPT_FUNCTIONS_TOPICS,
  ...TYPESCRIPT_CLASSES_TOPICS,
  ...TYPESCRIPT_MODULES_TOPICS,
  ...TYPESCRIPT_CONFIG_TOOLS_TOPICS,
  ...TYPESCRIPT_DATA_HANDLING_TOPICS,
  ...TYPESCRIPT_PATTERNS_TOPICS,
  ...TYPESCRIPT_REACT_TYPING_TOPICS,
  ...TYPESCRIPT_VUE_TYPING_TOPICS,
  ...TYPESCRIPT_ANGULAR_TYPING_TOPICS,
  ...TYPESCRIPT_ERRORS_DEBUGGING_TOPICS
];
