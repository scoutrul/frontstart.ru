import { InterviewQuestion } from '../../../types';

export const ARCHITECTURE_BEGINNER_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'architecture-beginner-state-problems',
    question: 'Какие проблемы решает стейт-менеджмент?',
    answer: 'Проблемы: prop drilling, синхронизация состояния между компонентами, сложность управления глобальным состоянием, предсказуемость изменений.',
    category: 'architecture',
    difficulty: 'beginner',
    tags: ['architecture', 'state-management', 'react', 'basics']
  },
  {
    id: 'architecture-beginner-context-redux',
    question: 'В чем разница между Redux, MobX, Zustand, React Context?',
    answer: 'Redux — предсказуемый стейт-контейнер с одним хранилищем. Zustand — минималистичный. Контекст подходит для простых случаев, но не заменяет стейт-менеджер для сложных состояний.',
    category: 'architecture',
    difficulty: 'beginner',
    tags: ['architecture', 'state-management', 'redux', 'zustand', 'context', 'basics']
  }
];
