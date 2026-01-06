import { Topic } from '../../../types';

export const AUDIT_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'architecture-audit-intermediate',
    title: 'Анализ слабых мест',
    difficulty: 'intermediate',
    description: 'Анализ слабых мест архитектуры: выявление проблем, предложения по рефакторингу. Middle должен уметь: анализировать код, находить проблемы, предлагать решения.',
    keyPoints: [
      'Анализ: выявление проблем в архитектуре, зависимостях, производительности.',
      'Проблемы: циклические зависимости, нарушение слоёв, дублирование кода.',
      'Предложения: конкретные решения для улучшения архитектуры.',
      'Приоритизация: выбор наиболее критичных проблем для исправления.'
    ],
    tags: ['architecture', 'audit', 'analysis', 'refactoring', 'intermediate'],
    examples: [
      {
        title: 'Анализ проблем',
        code: `// Проблема: циклическая зависимость
// features/user → features/order → features/user

// Решение: вынести общую логику в shared
// shared/utils → features/user, features/order`
      }
    ],
    relatedTopics: ['architecture-audit-basics', 'architecture-audit-advanced'],
    funFact: 'Анализ архитектуры помогает находить проблемы до того, как они станут критичными. Регулярный аудит архитектуры — признак зрелой команды.'
  }
];
