import { Category } from '../../../types';
import { HIRING_FUNNEL_STAGES_TOPICS } from './stages';
import { HIRING_FUNNEL_GOALS_TOPICS } from './goals';

export const HIRING_FUNNEL_CATEGORIES: Category[] = [
  {
    id: 'hiring-funnel',
    title: 'Воронка',
    description: 'Этапы найма от отклика до оффера, цели каждого этапа.',
    topics: [
      ...HIRING_FUNNEL_STAGES_TOPICS,
      ...HIRING_FUNNEL_GOALS_TOPICS
    ]
  }
];
