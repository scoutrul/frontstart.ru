import { Topic } from '../../../types';

export const NPM_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'npm-advanced',
    title: 'Продвинутый npm',
    description: 'npm workspaces для управления монорепозиториями: несколько пакетов в одном репозитории, общие зависимости. npm link для локальной разработки пакетов. Создание и публикация собственных пакетов: подготовка package.json, npm publish. package-lock.json: управление точными версиями зависимостей, разрешение конфликтов версий. npm ci для чистой установки в CI/CD.',
    difficulty: 'advanced',
    tags: ['npm', 'package-manager', 'node', 'workspaces', 'monorepo', 'tools', 'productivity'],
    keyPoints: [
      'npm workspaces позволяет управлять несколькими пакетами в одном репозитории.',
      'npm link создаёт симлинк для локальной разработки пакетов.',
      'npm publish публикует пакет в npm registry.',
      'package-lock.json фиксирует точные версии всех зависимостей.',
      'npm ci используется в CI/CD для воспроизводимых установок.'
    ],
    examples: [
      {
        title: 'npm workspaces',
        code: `// package.json (root)
{
  "name": "monorepo",
  "workspaces": [
    "packages/*"
  ]
}

// packages/app/package.json
{
  "name": "@monorepo/app",
  "dependencies": {
    "@monorepo/shared": "*"
  }
}`
      },
      {
        title: 'npm link',
        code: `# В директории пакета
cd my-package
npm link

# В проекте, где нужен пакет
cd my-project
npm link my-package`
      },
      {
        title: 'Публикация пакета',
        code: `# Подготовка
npm login                  # Войти в npm
npm whoami                 # Проверить текущего пользователя

# Публикация
npm publish                # Публиковать публичный пакет
npm publish --access restricted  # Приватный пакет`
      },
      {
        title: 'package-lock.json',
        code: `# Автоматически создаётся при npm install
# Фиксирует точные версии всех зависимостей
# Используется для воспроизводимых установок

npm ci                      # Чистая установка из lock файла
# Удаляет node_modules и устанавливает точные версии`
      }
    ],
    relatedTopics: ['npm-intermediate']
  }
];

