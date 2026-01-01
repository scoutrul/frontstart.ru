import { Topic } from '../../../types';

export const CI_CD_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'cicd-basics',
    title: 'CI/CD: основы',
    description: 'CI/CD — это практика автоматизации сборки, тестирования и развертывания кода. На базовом уровне фронтенд-разработчик понимает процесс сборки, деплоя и использования простого хостинга.',
    difficulty: 'beginner',
    tags: ['ci-cd', 'cicd', 'vps', 'ssh', 'hosting', 'ftp', 'deployment', 'basics', 'tools', 'productivity'],
    keyPoints: [
      'CI (Continuous Integration) — регулярная интеграция кода и проверка на ошибки',
      'CD (Continuous Deployment/Delivery) — автоматическое развертывание приложения',
      'Простейший хостинг и FTP для публикации фронтенда (например, Netlify, Vercel)',
      'Основы VPS: удалённый сервер под деплой и тестирование',
      'SSH для подключения к серверу и выполнения команд'
    ],
    additionalDescription: 'На этом уровне важно понимать общий поток: код пишется → собирается → тестируется → деплоится. Даже базовые знания SSH и FTP помогают развернуть простой проект или обновить существующий.',
    funFact: 'Практика CI/CD зародилась ещё в начале 2000-х, когда компании начали автоматически собирать код для сокращения ошибок и ускорения релизов.',
    examples: [
      {
        title: 'Подключение к VPS через SSH',
        code: `ssh user@server.com
// После подключения можно управлять файлами и запускать серверные команды`
      },
      {
        title: 'Деплой фронтенда на Netlify',
        code: `// Публикация через drag-and-drop
// Netlify автоматически создаёт URL и развертывает сайт`
      }
    ],
    relatedTopics: ['cicd-intermediate', 'vps-basics', 'tools-basics']
  }
];





