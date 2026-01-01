import { Topic } from '../../../types';

export const NODEJS_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'node-frontend',
    title: 'Node.js для фронтенда',
    difficulty: 'intermediate',
    description: 'Использование Node.js для работы с пакетами, сборщиками и dev-серверами. Установка зависимостей через npm или yarn, запуск сборщиков и локальных dev-серверов (Webpack, Vite, Parcel), использование npm скриптов для автоматизации задач.',
    keyPoints: [
      'Что это: использование Node.js для работы с пакетами, сборщиками и dev-серверами',
      'Установка зависимостей через npm или yarn',
      'Запуск сборщиков и локальных dev-серверов (Webpack, Vite, Parcel)',
      'Использование npm скриптов для автоматизации задач'
    ],
    tags: ['tools', 'nodejs', 'frontend', 'build-tools', 'dev-server'],
    relatedTopics: ['node-install', 'npm-basics', 'terminal-development'],
    funFact: 'Большинство фронтенд-разработчиков используют Node.js каждый день, даже не запуская серверы. Все современные сборщики (Vite, Webpack, Parcel) работают на Node.js.',
    examples: [
      {
        title: 'Типичные команды фронтендера',
        code: `npm run build      # Сборка проекта
npm run dev        # Запуск dev-сервера
npx create-react-app my-app  # Создание проекта через CLI`
      }
    ]
  },
  {
    id: 'node-modules',
    title: 'Модули и пакеты',
    difficulty: 'intermediate',
    description: 'Подключение библиотек и работа с модулями Node.js. CommonJS (require, module.exports) и ES Modules (import, export), локальные и глобальные пакеты, package.json хранит зависимости проекта.',
    keyPoints: [
      'Что это: подключение библиотек и работа с модулями Node.js',
      'CommonJS: require, module.exports',
      'ES Modules: import, export',
      'Локальные и глобальные пакеты',
      'package.json хранит зависимости проекта'
    ],
    tags: ['tools', 'nodejs', 'modules', 'commonjs', 'es-modules', 'packages'],
    relatedTopics: ['node-frontend', 'npm-basics'],
    funFact: 'До появления ES Modules в Node.js использовался только CommonJS. Теперь Node.js поддерживает оба формата, но ES Modules становятся стандартом для новых проектов.',
    examples: [
      {
        title: 'CommonJS',
        code: `// CommonJS
const fs = require('fs');
module.exports = { myFunction };`
      },
      {
        title: 'ES Modules',
        code: `// ES Modules
import path from 'path';
export { myFunction };`
      }
    ]
  }
];
