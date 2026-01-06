import { Topic } from '../../../types';

export const DOCUMENTATION_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'architecture-documentation-adr',
    title: 'ADR и документирование',
    difficulty: 'intermediate',
    description: 'ADR (Architecture Decision Records) — документирование архитектурных решений. Middle должен уметь: создавать ADR, документировать решения, поддерживать документацию актуальной.',
    keyPoints: [
      'ADR: документирование решений с контекстом, решением и последствиями.',
      'Формат: номер, название, контекст, решение, последствия, статус.',
      'Поддержка: регулярное обновление документации, актуальность информации.'
    ],
    tags: ['architecture', 'documentation', 'adr', 'intermediate'],
    examples: [
      {
        title: 'ADR формат',
        code: `# ADR-001: Выбор React

## Контекст
Нужен фреймворк для нового проекта.

## Решение
Выбрать React из-за популярности и экосистемы.

## Последствия
- Плюсы: большая экосистема, много разработчиков
- Минусы: нужно изучать, много решений

## Статус
Принято`
      }
    ],
    relatedTopics: ['architecture-documentation-basics', 'architecture-documentation-cases'],
    funFact: 'ADR был предложен Майклом Найгардом в 2011 году. Идея в том, чтобы документировать не только что было сделано, но и почему. Это помогает будущим разработчикам понимать решения.'
  }
];
