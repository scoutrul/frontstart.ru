import { InterviewQuestion } from '../../../types';

export const ARCHITECTURE_ADVANCED_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'architecture-advanced-microfrontends',
    question: 'Что такое модульная архитектура и микрофронтенды?',
    answer: 'Микрофронтенды позволяют независимо разрабатывать и деплоить части приложения. Каждая команда работает над своим модулем, сборка происходит на runtime или build-time.',
    category: 'architecture',
    difficulty: 'advanced',
    tags: ['architecture', 'microfrontends', 'modular', 'scalability']
  },
  {
    id: 'architecture-advanced-state-without-libs',
    question: 'Как организовать стейт-менеджмент без библиотек?',
    answer: 'Через Context API, кастомные хуки, поднятие состояния, локальное состояние компонентов. Для сложных случаев лучше использовать библиотеки.',
    category: 'architecture',
    difficulty: 'advanced',
    tags: ['architecture', 'state-management', 'react', 'context', 'custom-hooks']
  },
  {
    id: 'architecture-advanced-patterns',
    question: 'Какие паттерны вы используете во фронтенде (Singleton, Observer, HOC, Render Props, Compound Components)?',
    answer: 'Observer — для событий и подписок. HOC, Render Props, Compound Components — для переиспользования логики в React. Singleton редко используется во фронтенде.',
    category: 'architecture',
    difficulty: 'advanced',
    tags: ['architecture', 'patterns', 'design-patterns', 'react']
  }
];
