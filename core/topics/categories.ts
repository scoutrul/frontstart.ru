import { Category } from '../types';
import { BEGINNER_TOPICS } from './beginner';
import { INTERMEDIATE_TOPICS } from './intermediate';
import { ADVANCED_TOPICS } from './advanced';

// Собираем все темы в один массив для удобного поиска
const ALL_TOPICS = [...BEGINNER_TOPICS, ...INTERMEDIATE_TOPICS, ...ADVANCED_TOPICS];

const getTopic = (id: string) => ALL_TOPICS.find(t => t.id === id);

export const KNOWLEDGE_BASE: Category[] = [
  { 
    id: 'basics', 
    title: 'Основы JavaScript', 
    topics: [
      getTopic('data-types'),
      getTopic('type-coercion'),
      getTopic('comparison'),
      getTopic('operators'),
      getTopic('functions-types'),
      getTopic('arrays-basic'),
      getTopic('objects-basic'),
      getTopic('object-methods'),
      getTopic('destructuring-basic'),
      getTopic('strings-methods'),
      getTopic('conditions-loops'),
      getTopic('json-methods'),
      getTopic('date-api'),
    ].filter((t): t is NonNullable<typeof t> => t !== undefined)
  },
  { 
    id: 'variables', 
    title: 'Переменные и Область видимости', 
    topics: [
      getTopic('var-let-const'),
      getTopic('hoisting-basic'),
      getTopic('tdz-basic'),
      getTopic('scope-chain'),
      getTopic('strict-mode'),
    ].filter((t): t is NonNullable<typeof t> => t !== undefined)
  },
  { 
    id: 'closures', 
    title: 'Замыкания и Окружение', 
    topics: [
      getTopic('lexical-env'),
      getTopic('closures-basic'),
      getTopic('private-state'),
      getTopic('iife'),
    ].filter((t): t is NonNullable<typeof t> => t !== undefined)
  },
  { 
    id: 'this-context', 
    title: 'Контекст this', 
    topics: [
      getTopic('this-basics'),
      getTopic('arrow-functions'),
      getTopic('context-loss'),
      getTopic('bind-call-apply'),
    ].filter((t): t is NonNullable<typeof t> => t !== undefined)
  },
  { 
    id: 'prototypes', 
    title: 'Прототипы и ООП', 
    topics: [
      getTopic('prototype-chain'),
      getTopic('constructors'),
      getTopic('object-create'),
      getTopic('hasownproperty-in'),
      getTopic('instanceof'),
      getTopic('getprototypeof-setprototypeof'),
      getTopic('getters-setters'),
      getTopic('getownpropertynames-keys'),
      getTopic('mixins'),
      getTopic('super-prototypes'),
      getTopic('prototypes-vs-classes'),
    ].filter((t): t is NonNullable<typeof t> => t !== undefined)
  },
  { 
    id: 'advanced-js', 
    title: 'Продвинутый JavaScript', 
    topics: [
      getTopic('event-loop'),
      getTopic('promises'),
      getTopic('async-await'),
      getTopic('generators'),
      getTopic('callbacks'),
    ].filter((t): t is NonNullable<typeof t> => t !== undefined)
  },
  { 
    id: 'functional', 
    title: 'Функциональные концепции', 
    topics: [
      getTopic('immutability'),
      getTopic('higher-order-functions'),
      getTopic('recursion'),
      getTopic('currying'),
    ].filter((t): t is NonNullable<typeof t> => t !== undefined)
  },
  { 
    id: 'collections', 
    title: 'Коллекции и структуры данных', 
    topics: [
      getTopic('arrays-advanced'),
      getTopic('array-methods-advanced'),
      getTopic('map-set'),
      getTopic('weakmap-weakset'),
    ].filter((t): t is NonNullable<typeof t> => t !== undefined)
  },
  { 
    id: 'oop-modules', 
    title: 'ООП и Модули', 
    topics: [
      getTopic('classes'),
      getTopic('modules'),
      getTopic('symbol'),
      getTopic('design-patterns'),
    ].filter((t): t is NonNullable<typeof t> => t !== undefined)
  },
  { 
    id: 'advanced-features', 
    title: 'Продвинутые возможности', 
    topics: [
      getTopic('destructuring-advanced'),
      getTopic('error-handling'),
      getTopic('proxy-reflect'),
      getTopic('iterators-iterables'),
      getTopic('memory-management'),
      getTopic('regexp-advanced'),
      getTopic('debounce-throttle'),
      getTopic('memoization'),
      getTopic('performance-optimization'),
    ].filter((t): t is NonNullable<typeof t> => t !== undefined)
  },
  { 
    id: 'browser-api', 
    title: 'Browser API', 
    topics: [
      getTopic('web-storage'),
      getTopic('dom-api'),
      getTopic('fetch-api'),
      getTopic('event-api'),
      getTopic('history-api'),
      getTopic('file-api'),
      getTopic('clipboard-api'),
      getTopic('intersection-observer'),
      getTopic('web-workers'),
      getTopic('resize-observer'),
      getTopic('mutation-observer'),
      getTopic('indexeddb'),
      getTopic('service-workers'),
      getTopic('websocket-api'),
      getTopic('geolocation-api'),
      getTopic('mediadevices-api'),
      getTopic('page-visibility-api'),
    ].filter((t): t is NonNullable<typeof t> => t !== undefined)
  }
];

