import { Topic } from '../../../types';

export const NPM_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'pm-intro',
    title: 'Что такое пакетный менеджер',
    difficulty: 'beginner',
    description: 'Пакетный менеджер — это инструмент для установки, обновления и управления библиотеками и зависимостями проекта. Он работает через терминал, используется во всех JavaScript-проектах и тесно связан с Node.js.',
    keyPoints: [
      'Что это: инструмент для установки, обновления и управления библиотеками и зависимостями проекта',
      'Работает через терминал',
      'Используется во всех JS-проектах',
      'Связан с Node.js',
      'Управляет версиями библиотек и скриптами проекта'
    ],
    tags: ['tools', 'npm', 'package-manager', 'basics', 'productivity'],
    relatedTopics: ['terminal-basics'],
    examples: [],
    isFrontendEssential: true
  },
  {
    id: 'npm-basics',
    title: 'npm — стандарт экосистемы',
    difficulty: 'beginner',
    description: 'npm — основной пакетный менеджер JavaScript. Он самый популярный, имеет большой реестр пакетов и позволяет устанавливать библиотеки локально и глобально. package.json хранит метаданные проекта и скрипты, которые запускаются через npm start и npm run.',
    keyPoints: [
      'Что это: основной пакетный менеджер JavaScript',
      'Самый популярный пакетный менеджер',
      'Большой реестр пакетов',
      'Установка локально и глобально',
      'package.json хранит метаданные и скрипты',
      'npm start и npm run запускают скрипты',
      'npm install устанавливает зависимости из package.json'
    ],
    tags: ['tools', 'npm', 'package-manager', 'basics', 'productivity'],
    relatedTopics: ['pm-intro', 'terminal-development'],
    funFact: 'npm был запущен в 2010 году и быстро стал крупнейшим реестром пакетов в мире. В 2020 году npm был куплен GitHub, что сделало его еще более интегрированным в экосистему разработки.',
    isFrontendEssential: true,
    examples: [
      {
        title: 'Установка пакетов',
        code: `npm install express        // установка пакета
npm install express --save-dev  // установка как dev-зависимость
npm install -g nodemon          // глобальная установка
npm i                           // установка всех зависимостей из package.json`
      },
      {
        title: 'Запуск скриптов',
        code: `npm start        // запуск скрипта "start"
npm run dev     // запуск скрипта "dev"
npm test        // запуск скрипта "test"`
      }
    ]
  }
];
