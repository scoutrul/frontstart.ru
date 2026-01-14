import { Category } from '../../../types';
import { HIRING_PLAYERS_ROLES_TOPICS } from './roles';

export const HIRING_PLAYERS_CATEGORIES: Category[] = [
  {
    id: 'hiring-players',
    title: 'Игроки',
    topics: [
      ...HIRING_PLAYERS_ROLES_TOPICS
    ]
  }
];
