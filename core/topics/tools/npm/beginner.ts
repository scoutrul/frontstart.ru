import { Topic } from '../../../types';

export const NPM_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'npm-basics',
    title: 'Основы npm',
    description: 'npm (Node Package Manager) — менеджер пакетов для Node.js. Установка пакетов: npm install, npm i. package.json: управление зависимостями, scripts для автоматизации задач. Команды: npm start, npm run для выполнения скриптов. Локальная и глобальная установка пакетов.',
    difficulty: 'beginner',
    tags: ['npm', 'package-manager', 'node', 'basics', 'tools', 'productivity'],
    keyPoints: [
      'npm install или npm i устанавливает пакеты локально в node_modules.',
      'package.json хранит метаданные проекта, зависимости и скрипты.',
      'npm start и npm run выполняют скрипты из package.json.',
      '--save-dev устанавливает пакеты как devDependencies (для разработки).',
      'npm init создаёт новый package.json файл.'
    ],
    examples: [
      {
        title: 'Установка пакетов',
        code: `npm install express          # Установить пакет
npm install express --save-dev  # Установить как dev зависимость
npm install -g nodemon         # Установить глобально
npm i                          # Установить все зависимости из package.json`
      },
      {
        title: 'package.json',
        code: `{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.0"
  }
}`
      },
      {
        title: 'Выполнение скриптов',
        code: `npm start                   # Запустить скрипт "start"
npm run dev                 # Запустить скрипт "dev"
npm test                     # Запустить скрипт "test"`
      }
    ],
    relatedTopics: ['npm-intermediate']
  }
];

