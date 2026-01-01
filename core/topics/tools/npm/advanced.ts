import { Topic } from '../../../types';

export const NPM_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'npm-advanced',
    title: 'Продвинутые возможности npm',
    difficulty: 'advanced',
    description: 'npm предоставляет продвинутые возможности для работы с монорепозиториями, локальной разработкой пакетов и их публикацией. Workspaces позволяют управлять несколькими пакетами в одном репозитории, npm link используется для локальной разработки, а npm publish для публикации пакетов в npm registry.',
    keyPoints: [
      'Что это: продвинутые возможности npm для сложных сценариев разработки',
      'npm workspaces: для монорепозиториев и общих зависимостей',
      'npm link: для локальной разработки пакетов без публикации',
      'npm publish: для публикации пакета в npm registry',
      'CI/CD: npm ci для воспроизводимых сборок',
      'Локальные vs глобальные CLI пакеты: когда что использовать'
    ],
    additionalDescription: 'Workspaces особенно полезны для больших проектов, где несколько пакетов связаны между собой. npm link позволяет разрабатывать пакет локально и тестировать его в проекте без необходимости публиковать каждую версию.',
    tags: ['tools', 'npm', 'package-manager', 'workspaces', 'monorepo', 'publish'],
    relatedTopics: ['version-ranges', 'lock-files'],
    examples: [
      {
        title: 'Workspaces в package.json',
        code: `{
  "name": "my-monorepo",
  "workspaces": [
    "packages/*"
  ]
}

// Структура:
// packages/
//   package-a/
//   package-b/`
      },
      {
        title: 'npm link для локальной разработки',
        code: `# В папке пакета
cd my-package
npm link

# В проекте, который использует пакет
cd my-project
npm link my-package

# Теперь изменения в my-package сразу видны в my-project`
      },
      {
        title: 'Публикация пакета',
        code: `npm login          // авторизация в npm
npm publish        // публикация пакета
npm publish --access public  // публикация публичного пакета`
      }
    ]
  },
  {
    id: 'cli-in-context',
    title: 'CLI и фронтенд инструменты',
    difficulty: 'advanced',
    description: 'CLI-инструменты позволяют запускать сборку, тесты, линтеры через npm scripts. Популярные примеры: create-react-app, Vue CLI, Vite. npm scripts оборачивают длинные команды CLI в простые скрипты, что облегчает стандартизацию и автоматизацию процессов разработки.',
    keyPoints: [
      'Что это: использование CLI-инструментов через npm для автоматизации',
      'CLI позволяет запускать сборку, тесты, линтеры через npm scripts',
      'Примеры: create-react-app, Vue CLI, Vite, Next.js CLI',
      'npm scripts оборачивают длинные команды CLI в простые скрипты',
      'CLI облегчает стандартизацию и автоматизацию процессов',
      'npx для запуска CLI-инструментов без глобальной установки'
    ],
    additionalDescription: 'CLI-инструменты стали стандартом в современной фронтенд-разработке. Они скрывают сложность настройки инструментов сборки и позволяют быстро начать работу над проектом. npm scripts делают эти инструменты доступными через простые команды.',
    tags: ['tools', 'npm', 'cli', 'build-tools', 'automation', 'workflow'],
    relatedTopics: ['npm-basics', 'terminal-development'],
    examples: [
      {
        title: 'npm scripts для CLI-инструментов',
        code: `{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest",
    "lint": "eslint .",
    "format": "prettier --write ."
  }
}

// Использование:
npm run dev      // запуск dev-сервера через Vite
npm run build    // сборка проекта
npm test         // запуск тестов`
      },
      {
        title: 'CLI через npx',
        code: `npx create-react-app my-app    // создание проекта без установки
npx eslint .                    // запуск линтера
npx prettier --write .         // форматирование кода`
      }
    ]
  }
];
