import { InterviewQuestion } from '../../../types';

export const TOOLS_ADVANCED_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'tools-advanced-docker',
    question: 'Что такое Docker и зачем он фронтендеру?',
    answer: 'Docker контейнеризует приложения для единообразной работы в разных средах. Полезен для локальной разработки, CI/CD, изоляции зависимостей.',
    category: 'tools',
    difficulty: 'advanced',
    tags: ['tools', 'docker', 'containers', 'devops']
  },
  {
    id: 'tools-advanced-build-optimization',
    question: 'Как оптимизировать сборку?',
    answer: 'Tree shaking, code splitting, lazy loading, минификация, сжатие (gzip/brotli), кэширование, оптимизация изображений, удаление неиспользуемого кода.',
    category: 'tools',
    difficulty: 'advanced',
    tags: ['tools', 'optimization', 'bundlers', 'performance']
  },
  {
    id: 'tools-advanced-testing-advanced',
    question: 'Как тестировать асинхронный код и хуки?',
    answer: 'Для асинхронного кода используйте async/await в тестах, waitFor из RTL. Для хуков — renderHook из @testing-library/react-hooks.',
    category: 'tools',
    difficulty: 'advanced',
    tags: ['tools', 'testing', 'async', 'hooks', 'react']
  },
  {
    id: 'tools-advanced-deploy',
    question: 'Как настроить деплой на Vercel, Netlify, GitHub Pages?',
    answer: 'Vercel/Netlify: подключить репозиторий, автоматический деплой при push. GitHub Pages: настроить через Actions или напрямую из ветки. Все поддерживают автоматический деплой.',
    category: 'tools',
    difficulty: 'advanced',
    tags: ['tools', 'deployment', 'vercel', 'netlify', 'github-pages', 'ci-cd']
  },
  {
    id: 'tools-advanced-deploy-strategy',
    question: 'Что такое Docker и зачем он фронтендеру?',
    answer: 'Docker контейнеризует приложения для единообразной работы в разных средах. Полезен для локальной разработки, CI/CD, изоляции зависимостей.',
    category: 'tools',
    difficulty: 'advanced',
    tags: ['tools', 'docker', 'containers', 'devops']
  }
];
