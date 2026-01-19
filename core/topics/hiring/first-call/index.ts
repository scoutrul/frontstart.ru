import { Category } from '../../../types';
import { HIRING_FIRST_CALL_BEGINNER_TOPICS } from './beginner';

export const HIRING_FIRST_CALL_CATEGORIES: Category[] = [
  {
    id: 'hiring-first-call',
    title: 'Скрининг',
    description: 'Первый звонок с рекрутером: что спрашивают, как отвечать.',
    topics: [
      ...HIRING_FIRST_CALL_BEGINNER_TOPICS
    ]
  }
];
