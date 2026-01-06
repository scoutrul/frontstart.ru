import { Topic } from '../../../types';

export const DEVOPS_CICD_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'architecture-devops-basics',
    title: 'Сборка и деплой',
    difficulty: 'beginner',
    description: 'Базовое понимание сборки и деплоя: npm run build создаёт production bundle, деплой на хостинг (Vercel, Netlify, GitHub Pages). Junior должен понимать: как собрать проект, как задеплоить, базовые концепции CI/CD.',
    keyPoints: [
      'Сборка: npm run build создаёт оптимизированный production bundle.',
      'Деплой: загрузка на хостинг (Vercel, Netlify, GitHub Pages).',
      'CI/CD: автоматизация сборки и деплоя при коммитах.'
    ],
    tags: ['architecture', 'devops', 'build', 'deploy', 'basics'],
    examples: [
      {
        title: 'Сборка и деплой',
        code: `// package.json
{
  "scripts": {
    "build": "next build",
    "start": "next start"
  }
}

// Сборка
npm run build

// Деплой на Vercel
vercel deploy`
      }
    ],
    relatedTopics: ['architecture-devops-cicd'],
    funFact: 'Vercel был создан в 2015 году для упрощения деплоя фронтенд-приложений. Он стал стандартом для деплоя Next.js приложений и используется миллионами разработчиков. Vercel показал, что деплой может быть простым и автоматическим.'
  }
];
