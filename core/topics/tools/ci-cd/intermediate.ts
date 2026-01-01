import { Topic } from '../../../types';

export const CI_CD_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'cicd-intermediate',
    title: 'CI/CD: продвинутый',
    description: 'Средний уровень CI/CD включает использование систем автоматизации сборки и тестирования, настройку VPS и деплой пайплайнов.',
    difficulty: 'intermediate',
    tags: ['ci-cd', 'cicd', 'vps', 'ssh', 'automation', 'staging', 'deployment', 'tools', 'intermediate', 'docker'],
    keyPoints: [
      'Настройка GitHub Actions, GitLab CI или других CI/CD платформ',
      'Автоматизация сборки и тестирования фронтенд-приложений',
      'Деплой на VPS с использованием SSH и скриптов',
      'Использование среды staging и production для безопасного релиза',
      'Мониторинг состояния пайплайнов и логов'
    ],
    additionalDescription: 'Разработка пайплайнов позволяет ускорить интеграцию кода и снизить количество ошибок на продакшене. VPS часто используется для тестирования и хостинга внутренних проектов, а SSH и скрипты облегчают управление сервером.',
    funFact: 'Некоторые компании используют один и тот же VPS как staging и production с разными Docker-контейнерами для экономии ресурсов.',
    examples: [
      {
        title: 'GitHub Actions пайплайн',
        code: `name: CI

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build`
      },
      {
        title: 'Деплой на VPS через SSH',
        code: `ssh user@server.com "cd /var/www/project && git pull && npm install && npm run build"`
      }
    ],
    relatedTopics: ['cicd-basics', 'vps-intermediate', 'docker-basics']
  }
];

