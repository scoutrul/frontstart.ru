import { InterviewQuestion } from '../../../types';

export const ARCHITECTURE_INTERMEDIATE_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'architecture-intermediate-redux-middleware',
    question: 'Что такое Middleware в Redux (например, Redux Thunk, Saga)?',
    answer: 'Middleware перехватывает действия перед редьюсерами. Thunk позволяет асинхронные действия, Saga — сложная асинхронная логика через генераторы.',
    category: 'architecture',
    difficulty: 'intermediate',
    tags: ['architecture', 'redux', 'middleware', 'thunk', 'saga']
  },
  {
    id: 'architecture-intermediate-fsd',
    question: 'Что такое Feature-Sliced Design (FSD)?',
    answer: 'FSD разделяет код по бизнес-логике (фичам), а не по техническим слоям. Структура: app, pages, widgets, features, entities, shared.',
    category: 'architecture',
    difficulty: 'intermediate',
    tags: ['architecture', 'fsd', 'structure', 'organization']
  },
  {
    id: 'architecture-intermediate-hoc',
    question: 'Что такое HOC (Higher-Order Component) и каковы его ограничения?',
    answer: 'HOC оборачивает компонент для добавления логики. Ограничения: сложность отладки, проблемы с типами, prop drilling, хуки предпочтительнее.',
    category: 'architecture',
    difficulty: 'intermediate',
    tags: ['architecture', 'react', 'hoc', 'patterns']
  },
  {
    id: 'architecture-intermediate-render-props',
    question: 'Что такое Render Props и Compound Components?',
    answer: 'Render Props передает функцию как пропс. Compound Components (как select и option) совместно управляют состоянием.',
    category: 'architecture',
    difficulty: 'intermediate',
    tags: ['architecture', 'react', 'render-props', 'compound-components', 'patterns']
  },
  {
    id: 'architecture-intermediate-clean-architecture',
    question: 'Что такое Clean Architecture во фронтенде?',
    answer: 'Разделение на слои: presentation (UI), domain (бизнес-логика), data (API). Зависимости направлены внутрь, внешние слои зависят от внутренних.',
    category: 'architecture',
    difficulty: 'intermediate',
    tags: ['architecture', 'clean-architecture', 'structure', 'layers']
  },
  {
    id: 'architecture-intermediate-project-structure',
    question: 'Как организовать структуру проекта?',
    answer: 'По фичам (feature-based) или по типам (component-based). Feature-based предпочтительнее для больших проектов, component-based — для маленьких.',
    category: 'architecture',
    difficulty: 'intermediate',
    tags: ['architecture', 'structure', 'organization', 'best-practices']
  }
];
