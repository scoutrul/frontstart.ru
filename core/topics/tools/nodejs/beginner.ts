import { Topic } from '../../../types';

export const NODEJS_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'node-intro',
    title: 'Что такое Node.js',
    difficulty: 'beginner',
    description: 'Среда выполнения JavaScript вне браузера, основанная на движке V8. Позволяет запускать JavaScript на компьютере или сервере, обеспечивает работу npm и CLI-инструментов.',
    keyPoints: [
      'Что это: среда выполнения JavaScript вне браузера, основанная на движке V8',
      'Позволяет запускать JavaScript на компьютере или сервере',
      'Обеспечивает работу npm и CLI-инструментов',
      'Основан на движке V8 от Google Chrome',
      'Появился в 2009 году, разработан Райаном Далем'
    ],
    tags: ['tools', 'nodejs', 'javascript', 'runtime', 'basics'],
    relatedTopics: ['npm-basics', 'terminal-basics'],
    funFact: 'Node.js был создан Райаном Далем всего за несколько дней в 2009 году. Изначально он хотел просто запускать JavaScript на сервере, но это изменило всю экосистему веб-разработки.',
    examples: [
      {
        title: 'Запуск скрипта',
        code: `node index.js  # Запуск простого скрипта
npx vite       # Запуск dev-сервера через CLI`
      }
    ]
  },
  {
    id: 'node-install',
    title: 'Установка и настройка',
    difficulty: 'beginner',
    description: 'Как установить Node.js и проверить установку. Node.js ставится на локальную машину (Windows, macOS, Linux) или сервер. Node Version Manager (nvm) позволяет управлять версиями Node.js.',
    keyPoints: [
      'Что это: установка Node.js и проверка установки',
      'Ставится на локальную машину (Windows, macOS, Linux) или сервер',
      'Node Version Manager (nvm) позволяет управлять версиями Node.js',
      'Node.js включает npm по умолчанию'
    ],
    tags: ['tools', 'nodejs', 'installation', 'nvm', 'basics'],
    relatedTopics: ['node-intro'],
    funFact: 'Node.js включает npm по умолчанию, но интересно, что npm изначально был отдельным проектом. Теперь они неразрывно связаны, и установка Node.js автоматически устанавливает npm.',
    examples: [
      {
        title: 'Установка и проверка',
        code: `nvm install 20      # Установка Node.js версии 20
node -v            # Проверка версии Node.js
npm -v             # Проверка версии npm`
      }
    ]
  }
];
