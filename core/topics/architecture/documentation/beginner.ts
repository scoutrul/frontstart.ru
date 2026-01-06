import { Topic } from '../../../types';

export const DOCUMENTATION_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'architecture-documentation-basics',
    title: 'Базовые диаграммы',
    difficulty: 'beginner',
    description: 'Базовые диаграммы для описания архитектуры: блок-схемы, диаграммы компонентов. Junior должен уметь создавать простые диаграммы для объяснения структуры проекта.',
    keyPoints: [
      'Диаграммы: блок-схемы, диаграммы компонентов для визуализации архитектуры.',
      'Инструменты: draw.io, Mermaid, PlantUML для создания диаграмм.',
      'Применение: объяснение структуры, документирование решений.'
    ],
    tags: ['architecture', 'documentation', 'diagrams', 'basics'],
    examples: [
      {
        title: 'Mermaid диаграмма',
        code: `graph TD
    A[Frontend] --> B[API]
    B --> C[Database]
    A --> D[CDN]`
      }
    ],
    relatedTopics: ['architecture-documentation-adr'],
    funFact: 'Диаграммы помогают визуализировать сложную архитектуру и делают её понятной для всех. Многие разработчики недооценивают важность визуализации, но она критична для понимания системы.'
  }
];
