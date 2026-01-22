import { Category } from '../../../types';
import { HIRING_TECHNICAL_STAGES_FORMATS_TOPICS } from './formats';
import { HIRING_TECHNICAL_STAGES_PREPARATION_TOPICS } from './preparation';
import { HIRING_TECHNICAL_STAGES_BEHAVIOR_TOPICS } from './behavior';

export const HIRING_TECHNICAL_STAGES_CATEGORIES: Category[] = [
  {
    id: 'hiring-technical-stages',
    title: 'ТЕХНИЧЕСКИЕ ЭТАПЫ',
    description: 'Live coding, system design, take-home — форматы и подготовка.',
    topics: [
      // 1. Подготовка
      ...HIRING_TECHNICAL_STAGES_PREPARATION_TOPICS,
      // 2. Поведение
      ...HIRING_TECHNICAL_STAGES_BEHAVIOR_TOPICS,
      // 3–6. Форматы: тестовое → разбор кода → live coding → архитектурное
      HIRING_TECHNICAL_STAGES_FORMATS_TOPICS.find(
        (topic) => topic.id === 'hiring-technical-take-home'
      )!,
      HIRING_TECHNICAL_STAGES_FORMATS_TOPICS.find(
        (topic) => topic.id === 'hiring-technical-code-review'
      )!,
      HIRING_TECHNICAL_STAGES_FORMATS_TOPICS.find(
        (topic) => topic.id === 'hiring-technical-live-coding'
      )!,
      HIRING_TECHNICAL_STAGES_FORMATS_TOPICS.find(
        (topic) => topic.id === 'hiring-technical-architectural'
      )!
    ]
  }
];
