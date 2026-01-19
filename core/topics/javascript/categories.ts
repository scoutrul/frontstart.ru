import { Category } from '../../types';
import { JS_INTRODUCTION_TOPICS } from './introduction';
import { JS_BASICS_TOPICS } from './basics';
import { JS_VARIABLES_TOPICS } from './variables';
import { JS_FUNCTIONS_TOPICS } from './functions';
import { JS_PROTOTYPES_TOPICS } from './prototypes';
import { JS_ASYNC_TOPICS } from './async';
import { JS_COLLECTIONS_TOPICS } from './collections';
import { JS_ADVANCED_TOPICS } from './advanced';
import { JS_BROWSER_API_TOPICS } from './browser-api';
import { JS_NODEJS_TOPICS } from './nodejs';
import { JS_SECURITY_TOPICS } from './security';

export const JS_KNOWLEDGE_BASE: Category[] = [
  {
    id: 'introduction',
    title: 'Введение',
    description: 'История JavaScript, ECMAScript, место языка в веб-разработке и его эволюция.',
    topics: JS_INTRODUCTION_TOPICS
  },
  {
    id: 'basics',
    title: 'Основы JavaScript',
    description: 'Типы данных, операторы, условия, циклы, строгий режим — фундамент языка.',
    topics: JS_BASICS_TOPICS
  },
  {
    id: 'variables',
    title: 'Переменные и Область видимости',
    description: 'var, let, const, hoisting, scope chain, temporal dead zone и лексическое окружение.',
    topics: JS_VARIABLES_TOPICS
  },
  {
    id: 'functions',
    title: 'Функции и Замыкания',
    description: 'Объявление функций, стрелочные функции, замыкания, контекст this, call/apply/bind.',
    topics: JS_FUNCTIONS_TOPICS
  },
  {
    id: 'prototypes',
    title: 'Прототипы и ООП',
    description: 'Прототипное наследование, классы ES6, статические методы, приватные поля.',
    topics: JS_PROTOTYPES_TOPICS
  },
  {
    id: 'async',
    title: 'Асинхронность',
    description: 'Event Loop, колбэки, промисы, async/await, микро- и макрозадачи.',
    topics: JS_ASYNC_TOPICS
  },
  {
    id: 'collections',
    title: 'Коллекции и структуры данных',
    description: 'Массивы, объекты, Map, Set, WeakMap, WeakSet, итераторы и генераторы.',
    topics: JS_COLLECTIONS_TOPICS
  },
  {
    id: 'advanced',
    title: 'Продвинутые возможности',
    description: 'Модули, Symbol, Proxy, Reflect, метапрограммирование и паттерны.',
    topics: JS_ADVANCED_TOPICS
  },
  {
    id: 'browser-api',
    title: 'Browser API',
    description: 'DOM, события, fetch, localStorage, Web Workers, Canvas, WebSocket и другие API браузера.',
    topics: JS_BROWSER_API_TOPICS
  },
  {
    id: 'nodejs',
    title: 'Node.js',
    description: 'Серверный JavaScript: модули, файловая система, потоки, работа с сетью.',
    topics: JS_NODEJS_TOPICS
  },
  {
    id: 'security',
    title: 'Безопасность',
    description: 'XSS, инъекции, санитизация данных, безопасная работа с пользовательским вводом.',
    topics: JS_SECURITY_TOPICS
  }
];
