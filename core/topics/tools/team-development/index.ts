import { Topic } from '../../../types';
import { TEAM_DEVELOPMENT_BEGINNER_TOPICS } from './beginner';
import { TEAM_DEVELOPMENT_INTERMEDIATE_TOPICS } from './intermediate';
import { TEAM_DEVELOPMENT_ADVANCED_TOPICS } from './advanced';

export const TEAM_DEVELOPMENT_TOPICS: Topic[] = [
  ...TEAM_DEVELOPMENT_BEGINNER_TOPICS,
  ...TEAM_DEVELOPMENT_INTERMEDIATE_TOPICS,
  ...TEAM_DEVELOPMENT_ADVANCED_TOPICS
];
